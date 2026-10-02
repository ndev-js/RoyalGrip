// Runs after `vite build`: renders every route to static HTML so search engines
// and link previews get real content and per-page meta tags without running JS.
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const ssrDir = join(root, "dist-ssr");

const { render, ALL_PATHS, canonicalFor, seoFor } = await import(
  pathToFileURL(join(ssrDir, "entry-server.js")).href
);

const template = await readFile(join(dist, "index.html"), "utf8");

const escapeAttr = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

function replaceOnce(html, pattern, replacement) {
  if (!pattern.test(html)) throw new Error(`prerender: ${pattern} not found in index.html`);
  return html.replace(pattern, replacement);
}

function page(path) {
  const { title, description, noindex } = seoFor(path);
  const url = canonicalFor(path);
  const t = escapeAttr(title);
  const d = escapeAttr(description);

  let html = template;
  html = replaceOnce(html, /<title>[\s\S]*?<\/title>/, `<title>${t}</title>`);
  html = replaceOnce(html, /(<meta name="description" content=")[^"]*/, `$1${d}`);
  html = replaceOnce(html, /(<meta name="robots" content=")[^"]*/, `$1${noindex ? "noindex" : "index, follow"}`);
  html = replaceOnce(html, /(<link rel="canonical" href=")[^"]*/, `$1${url}`);
  html = replaceOnce(html, /(<meta property="og:title" content=")[^"]*/, `$1${t}`);
  html = replaceOnce(html, /(<meta property="og:description" content=")[^"]*/, `$1${d}`);
  html = replaceOnce(html, /(<meta property="og:url" content=")[^"]*/, `$1${url}`);
  html = replaceOnce(html, /(<meta name="twitter:title" content=")[^"]*/, `$1${t}`);
  html = replaceOnce(html, /(<meta name="twitter:description" content=")[^"]*/, `$1${d}`);
  // Function replacement so "$" in rendered content is not treated as a substitution pattern
  html = replaceOnce(html, /<div id="root"><\/div>/, () => `<div id="root">${render(path)}</div>`);
  return html;
}

for (const path of ALL_PATHS) {
  const file = join(dist, path, "index.html");
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, page(path));
}

// Served by the host for unknown URLs (see public/.htaccess)
await writeFile(join(dist, "404.html"), page("/404"));

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...ALL_PATHS.map((p) => `  <url><loc>${canonicalFor(p)}</loc></url>`),
  "</urlset>",
  "",
].join("\n");
await writeFile(join(dist, "sitemap.xml"), sitemap);

await rm(ssrDir, { recursive: true, force: true });

console.log(`Prerendered ${ALL_PATHS.length} pages + 404.html and sitemap.xml`);
