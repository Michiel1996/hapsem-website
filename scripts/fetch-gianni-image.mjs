import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, "..", "public", "images", "gianni-faelens.jpg");

const res = await fetch("https://www.hero-edegem.be/experts/gianni-faelens");
const html = await res.text();
const patterns = [
  /og:image["']\s+content=["']([^"']+)["']/i,
  /src=["']([^"']*gianni[^"']*\.(?:jpg|jpeg|png|webp))["']/i,
  /src=["']([^"']*\/experts\/[^"']*\.(?:jpg|jpeg|png|webp))["']/i,
  /url\(["']?([^"')]+\.(?:jpg|jpeg|png|webp))["']?\)/gi,
];

let imageUrl = null;
for (const p of patterns) {
  const m = html.match(p);
  if (m?.[1]) {
    imageUrl = m[1];
    break;
  }
}

if (!imageUrl) {
  const all = [...html.matchAll(/https?:\/\/[^"'\s>]+\.(?:jpg|jpeg|png|webp)/gi)];
  imageUrl = all.map((x) => x[0]).find((u) => !u.includes("logo") && !u.includes("icon"));
}

if (!imageUrl) {
  console.error("Geen afbeelding gevonden");
  process.exit(1);
}

if (imageUrl.startsWith("/")) imageUrl = `https://www.hero-edegem.be${imageUrl}`;
console.log("Image URL:", imageUrl);

const imgRes = await fetch(imageUrl);
if (!imgRes.ok) {
  console.error("Download mislukt:", imgRes.status);
  process.exit(1);
}

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, Buffer.from(await imgRes.arrayBuffer()));
console.log("Opgeslagen:", OUT);
