const fs = require("fs");
const path = require("path");

const baseUrl = "https://www.aimconception.fr";

// SEO rules (IMPORTANT)
const rules = {
  "index.html": { priority: "1.0", changefreq: "weekly" },
  "services.html": { priority: "0.9", changefreq: "monthly" },
  "realisations.html": { priority: "0.8", changefreq: "monthly" },
  "contact.html": { priority: "0.8", changefreq: "yearly" },
  "blog.html": { priority: "0.8", changefreq: "weekly" }
};

// detect all html files
function getHtmlFiles(dir) {
  let results = [];

  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);

    if (fs.statSync(fullPath).isDirectory()) {
      if (!["img", "css", "js", "localites"].includes(file)) {
        results = results.concat(getHtmlFiles(fullPath));
      }
    } else if (file.endsWith(".html")) {
      results.push(fullPath);
    }
  });

  return results;
}

function getLastMod(filePath) {
  const stats = fs.statSync(filePath);
  return stats.mtime.toISOString().split("T")[0];
}

const pages = getHtmlFiles(".");

const urls = pages.map(file => {
  const rel = file.replace("./", "").replace(/\\/g, "/");
  const fileName = path.basename(file);

  const url = `${baseUrl}/${rel}`;

  const rule = rules[fileName] || {
    priority: "0.6",
    changefreq: "monthly"
  };

  return `
  <url>
    <loc>${url}</loc>
    <lastmod>${getLastMod(file)}</lastmod>
    <changefreq>${rule.changefreq}</changefreq>
    <priority>${rule.priority}</priority>
  </url>`;
}).join("");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

fs.writeFileSync("sitemap.xml", sitemap);

console.log("✅ Sitemap SEO complet généré !");
