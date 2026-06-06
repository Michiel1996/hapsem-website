import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.join(
  __dirname,
  "..",
  "..",
  ".cursor",
  "projects",
  "c-Users-Gebruiker-Documents-HAPSEM-website",
  "assets",
  "c__Users_Gebruiker_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_4ca6a914-9a8a-41c3-a1d8-030dedcda960-7b654717-6425-4cb5-83e4-e6a35e700f0a.png"
);

// Fallback: image copied to project assets
const SRC_LOCAL = path.join(__dirname, "..", "assets", "michiel-vercruysse-source.png");
const OUT_DIR = path.join(__dirname, "..", "public", "images");

import fs from "fs";

const source = fs.existsSync(SRC) ? SRC : SRC_LOCAL;
if (!fs.existsSync(source)) {
  console.error("Bronfoto niet gevonden:", source);
  process.exit(1);
}

fs.mkdirSync(OUT_DIR, { recursive: true });

const meta = await sharp(source).metadata();
const { width = 0, height = 0 } = meta;

// Professionele borstbeeld-uitsnede: bovenste ~58% van de foto
const cropHeight = Math.round(Math.min(height, width * 1.15));

const pipeline = sharp(source)
  .extract({ left: 0, top: 0, width, height: cropHeight })
  .resize(800, 1000, { fit: "cover", position: "top" });

await pipeline
  .webp({ quality: 88, effort: 4 })
  .toFile(path.join(OUT_DIR, "michiel-vercruysse.webp"));

await sharp(source)
  .extract({ left: 0, top: 0, width, height: cropHeight })
  .resize(400, 400, { fit: "cover", position: "top" })
  .webp({ quality: 85, effort: 4 })
  .toFile(path.join(OUT_DIR, "michiel-vercruysse-thumb.webp"));

console.log("Geoptimaliseerd:", path.join(OUT_DIR, "michiel-vercruysse.webp"));
