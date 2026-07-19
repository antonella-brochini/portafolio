const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

function walk(d, a = []) {
  if (!fs.existsSync(d)) return a;
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p, a);
    else if (/\.(png|jpe?g|webp|avif)$/i.test(e.name)) a.push(p);
  }
  return a;
}

function fmt(n) {
  if (n >= 1024 * 1024) return (n / 1024 / 1024).toFixed(2) + " MB";
  return (n / 1024).toFixed(1) + " KB";
}

(async () => {
  const before = JSON.parse(fs.readFileSync("scripts/images-before.json", "utf8"));
  const beforeMap = Object.fromEntries(
    before.files.map((x) => [x.f.replace(/\\/g, "/"), x.b]),
  );

  const afterFiles = walk("public");
  let afterTotal = 0;
  const rows = [];

  for (const f of afterFiles) {
    const rel = f.replace(/\\/g, "/");
    const bytes = fs.statSync(f).size;
    afterTotal += bytes;
    let w = "-", h = "-", format = path.extname(f).slice(1);
    try {
      const m = await sharp(f).metadata();
      w = m.width || "-";
      h = m.height || "-";
      format = m.format || format;
    } catch {}

    // match before: same path or .png/.jpg sibling
    let beforeBytes = beforeMap[rel];
    if (beforeBytes == null && rel.endsWith(".webp")) {
      const png = rel.replace(/\.webp$/i, ".png");
      const jpg = rel.replace(/\.webp$/i, ".jpg");
      const jpeg = rel.replace(/\.webp$/i, ".jpeg");
      beforeBytes = beforeMap[png] || beforeMap[jpg] || beforeMap[jpeg] || null;
    }

    rows.push({
      file: rel,
      before: beforeBytes,
      after: bytes,
      w,
      h,
      format,
      reduction: beforeBytes != null ? beforeBytes - bytes : null,
      pct:
        beforeBytes != null && beforeBytes > 0
          ? ((1 - bytes / beforeBytes) * 100)
          : null,
    });
  }

  // Include deleted heavy files that only exist in before
  for (const [f, b] of Object.entries(beforeMap)) {
    const still = afterFiles.some((x) => x.replace(/\\/g, "/") === f);
    const asWebp = f.replace(/\.(png|jpe?g)$/i, ".webp");
    const hasWebp = afterFiles.some((x) => x.replace(/\\/g, "/") === asWebp);
    if (!still && !hasWebp) {
      rows.push({
        file: f + " (removed)",
        before: b,
        after: 0,
        w: "-",
        h: "-",
        format: "removed",
        reduction: b,
        pct: 100,
      });
      // already counted in before total; after is 0
    }
  }

  rows.sort((a, b) => (b.before || 0) - (a.before || 0));

  const report = {
    beforeTotal: before.total,
    afterTotal,
    reduction: before.total - afterTotal,
    pct: ((1 - afterTotal / before.total) * 100).toFixed(1),
    rows,
  };

  fs.writeFileSync(
    "scripts/images-after-summary.json",
    JSON.stringify(report, null, 2),
  );

  console.log("BEFORE_TOTAL", fmt(before.total));
  console.log("AFTER_TOTAL", fmt(afterTotal));
  console.log("REDUCTION", fmt(before.total - afterTotal), report.pct + "%");
  console.log("\nTOP reductions:");
  rows
    .filter((r) => r.before && r.reduction > 0)
    .sort((a, b) => b.reduction - a.reduction)
    .slice(0, 25)
    .forEach((r) => {
      console.log(
        [
          r.file.replace("public/", ""),
          fmt(r.before),
          fmt(r.after),
          fmt(r.reduction),
          r.pct.toFixed(1) + "%",
          `${r.w}x${r.h}`,
        ].join(" | "),
      );
    });
})();
