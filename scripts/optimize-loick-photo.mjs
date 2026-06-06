import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC_CURSOR = path.join(
  __dirname,
  "..",
  "..",
  ".cursor",
  "projects",
  "c-Users-Gebruiker-Documents-HAPSEM-website",
  "assets",
  "c__Users_Gebruiker_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_image-e7a0db7d-38a8-4b1f-b56b-9551289f0c88.png"
);
const SRC_LOCAL = path.join(__dirname, "..", "assets", "loick-vanwetter-source.png");
const OUT_DIR = path.join(__dirname, "..", "public", "images");

const source = fs.existsSync(SRC_LOCAL) ? SRC_LOCAL : SRC_CURSOR;
if (!fs.existsSync(source)) {
  console.error("Bronfoto niet gevonden");
  process.exit(1);
}

fs.mkdirSync(OUT_DIR, { recursive: true });

// Headshot: lichte rand verwijderen, gecentreerd op gezicht
await sharp(source)
  .trim({ threshold: 12 })
  .resize(800, 1000, { fit: "cover", position: "centre" })
  .webp({ quality: 88, effort: 4 })
  .toFile(path.join(OUT_DIR, "loick-vanwetter.webp"));

await sharp(source)
  .trim({ threshold: 12 })
  .resize(400, 400, { fit: "cover", position: "centre" })
  .webp({ quality: 85, effort: 4 })
  .toFile(path.join(OUT_DIR, "loick-vanwetter-thumb.webp"));

console.log("Geoptimaliseerd:", path.join(OUT_DIR, "loick-vanwetter.webp"));
