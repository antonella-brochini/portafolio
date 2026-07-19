const fs = require("fs");
const path = require("path");

let s = fs.readFileSync("src/app/data/projects.js", "utf8");
s = s.replace(/\/img\/([^"']+)\.(png|jpe?g)/gi, "/img/$1.webp");
fs.writeFileSync("src/app/data/projects.js", s);

const paths = [...s.matchAll(/"(\/img\/[^"]+)"/g)].map((m) => m[1]);
const missing = [];
const ok = [];
for (const p of paths) {
  const disk = path.join("public", p.replace(/^\//, "").replace(/\//g, path.sep));
  if (!fs.existsSync(disk)) missing.push(p);
  else ok.push(p);
}
console.log("refs", paths.length, "ok", ok.length, "missing", missing.length);
missing.forEach((m) => console.log("MISSING", m));

// list noticias folder
const nd = "public/img/noticiasWebsite";
if (fs.existsSync(nd)) console.log("noticias files", fs.readdirSync(nd));
