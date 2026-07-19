/**
 * Full portfolio image optimization:
 * - Inventory before/after
 * - Convert PNG/JPG under public/img to WebP (max 1600px, q=80 screenshots)
 * - Skip svg, webfonts, fonts, favicons, app icons
 */
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const ROOT = process.cwd();
const IMG_ROOT = path.join(ROOT, "public", "img");
const MAX_WIDTH = 1600;
const QUALITY = 80;
const HERO_QUALITY = 85;

const SKIP_DIRS = new Set(["webfonts", "fonts"]);
const SKIP_FILES = new Set([
  "owl.video.play.png", // tiny UI glyph
]);
const KEEP_AS_IS_EXT = new Set([".svg", ".ico", ".gif"]);

const beforeRows = [];
const afterRows = [];

function walk(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (SKIP_DIRS.has(ent.name)) continue;
      walk(full, acc);
    } else {
      acc.push(full);
    }
  }
  return acc;
}

function rel(p) {
  return path.relative(ROOT, p).split(path.sep).join("/");
}

function mb(bytes) {
  return bytes / (1024 * 1024);
}

async function metaOf(file) {
  const bytes = fs.statSync(file).size;
  try {
    const m = await sharp(file).metadata();
    return {
      bytes,
      w: m.width || null,
      h: m.height || null,
      format: m.format || path.extname(file).slice(1),
    };
  } catch {
    return {
      bytes,
      w: null,
      h: null,
      format: path.extname(file).slice(1).replace(".", "") || "unknown",
    };
  }
}

function shouldProcess(file) {
  const ext = path.extname(file).toLowerCase();
  const base = path.basename(file);
  if (KEEP_AS_IS_EXT.has(ext)) return false;
  if (SKIP_FILES.has(base)) return false;
  if (![".png", ".jpg", ".jpeg", ".webp"].includes(ext)) return false;
  // Already-optimized tiny webp under threshold — still re-encode if > max width or png companion
  return true;
}

async function optimizeOne(file) {
  const info = await metaOf(file);
  const ext = path.extname(file).toLowerCase();
  const base = path.basename(file, ext);
  const dir = path.dirname(file);
  const isHero =
    /hero\.(png|webp)$/i.test(file) || /header\.(png|webp)$/i.test(file);

  beforeRows.push({
    file: rel(file),
    ...info,
  });

  // Target webp path
  const outWebp = path.join(dir, `${base}.webp`);
  const quality = isHero ? HERO_QUALITY : QUALITY;

  const pipeline = sharp(file).rotate();
  const m = await sharp(file).metadata();
  if (m.width && m.width > MAX_WIDTH) {
    pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
  }

  await pipeline.webp({ quality, effort: 4 }).toFile(outWebp + ".tmp");
  fs.renameSync(outWebp + ".tmp", outWebp);

  const after = await metaOf(outWebp);
  afterRows.push({
    file: rel(outWebp),
    source: rel(file),
    beforeBytes: info.bytes,
    ...after,
  });

  // Remove original PNG/JPG if we created/replaced with webp and source != webp
  if (ext !== ".webp" && fs.existsSync(outWebp)) {
    fs.unlinkSync(file);
  } else if (ext === ".webp" && file !== outWebp) {
    // shouldn't happen
  } else if (ext === ".webp") {
    // Replaced in place via tmp rename above — already overwritten
  }

  // If source was webp, we wrote to same path via tmp — OK
  // If source was png, delete done above

  return { source: rel(file), out: rel(outWebp), before: info.bytes, after: after.bytes };
}

async function main() {
  const all = walk(IMG_ROOT).filter(shouldProcess);
  // Also optimize public/og-image.png (keep png for crawlers + webp sibling)
  const og = path.join(ROOT, "public", "og-image.png");
  if (fs.existsSync(og)) {
    beforeRows.push({ file: rel(og), ...(await metaOf(og)) });
    const ogWebp = path.join(ROOT, "public", "og-image.webp");
    await sharp(og)
      .resize({ width: 1200, withoutEnlargement: true })
      .webp({ quality: 85, effort: 4 })
      .toFile(ogWebp + ".tmp");
    fs.renameSync(ogWebp + ".tmp", ogWebp);
    // Also rewrite png smaller
    await sharp(og)
      .resize({ width: 1200, withoutEnlargement: true })
      .png({ compressionLevel: 9 })
      .toFile(og + ".tmp");
    fs.renameSync(og + ".tmp", og);
    afterRows.push({
      file: rel(ogWebp),
      source: rel(og),
      beforeBytes: beforeRows[beforeRows.length - 1].bytes,
      ...(await metaOf(ogWebp)),
    });
  }

  // Remove duplicate og-image.optimized.png if present
  const ogDup = path.join(ROOT, "public", "og-image.optimized.png");
  if (fs.existsSync(ogDup)) fs.unlinkSync(ogDup);

  console.log(`Processing ${all.length} gallery/UI images…`);
  const results = [];
  for (const f of all) {
    try {
      // Skip already-processed pizzeria tiny webps rewrite once more for consistency
      const r = await optimizeOne(f);
      results.push(r);
      const pct = (((r.before - r.after) / r.before) * 100).toFixed(1);
      console.log(
        `${r.source} → ${r.out} | ${(r.before / 1024).toFixed(0)}KB → ${(r.after / 1024).toFixed(0)}KB (${pct}%)`,
      );
    } catch (e) {
      console.error("FAIL", rel(f), e.message);
    }
  }

  // After removing png, some dirs may still have both if process order processed png then webp
  // Clean leftover pngs that have matching webp
  for (const f of walk(IMG_ROOT)) {
    const ext = path.extname(f).toLowerCase();
    if (ext !== ".png" && ext !== ".jpg" && ext !== ".jpeg") continue;
    if (SKIP_FILES.has(path.basename(f))) continue;
    const webp = f.replace(/\.(png|jpe?g)$/i, ".webp");
    if (fs.existsSync(webp)) {
      const before = fs.statSync(f).size;
      fs.unlinkSync(f);
      console.log("removed leftover", rel(f), `(kept ${rel(webp)})`);
    }
  }

  const beforeTotal = beforeRows.reduce((s, r) => s + r.bytes, 0);
  // Recalculate current public/img + og size
  let afterTotal = 0;
  for (const f of walk(IMG_ROOT)) {
    afterTotal += fs.statSync(f).size;
  }
  if (fs.existsSync(og)) afterTotal += fs.statSync(og).size;
  const ogWebpPath = path.join(ROOT, "public", "og-image.webp");
  if (fs.existsSync(ogWebpPath)) afterTotal += fs.statSync(ogWebpPath).size;

  const report = {
    generatedAt: new Date().toISOString(),
    maxWidth: MAX_WIDTH,
    quality: QUALITY,
    beforeTotalBytes: beforeTotal,
    afterTotalBytes: afterTotal,
    results,
    beforeRows,
    afterRows,
  };
  fs.mkdirSync(path.join(ROOT, "scripts"), { recursive: true });
  fs.writeFileSync(
    path.join(ROOT, "scripts", "image-optimization-report.json"),
    JSON.stringify(report, null, 2),
  );
  console.log("\nBEFORE_MB", mb(beforeTotal).toFixed(2));
  console.log("AFTER_IMG_ROOT_MB", mb(afterTotal).toFixed(2));
  console.log("Report written to scripts/image-optimization-report.json");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
