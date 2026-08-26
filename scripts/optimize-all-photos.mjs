/**
 * Heroptimaliseert alle artsenfoto's met hogere resolutie en scherpte.
 */
import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, "..", "public", "images");
const ASSETS = path.join(__dirname, "..", "assets");

const PROFILE_W = 1200;
const PROFILE_H = 1500;
const THUMB_SIZE = 600;
const WEBP_QUALITY = 94;
const THUMB_QUALITY = 92;

const sharpen = (img) =>
  img.sharpen({ sigma: 0.6, m1: 0.5, m2: 0.25, x1: 2, y2: 10, y3: 20 });

const resizeProfile = (img, position = "top") =>
  sharpen(
    img.resize(PROFILE_W, PROFILE_H, {
      fit: "cover",
      position,
      kernel: sharp.kernel.lanczos3,
      withoutEnlargement: false,
    })
  ).webp({ quality: WEBP_QUALITY, effort: 6, smartSubsample: false });

const resizeThumb = (img, position = "top") =>
  sharpen(
    img.resize(THUMB_SIZE, THUMB_SIZE, {
      fit: "cover",
      position,
      kernel: sharp.kernel.lanczos3,
    })
  ).webp({ quality: THUMB_QUALITY, effort: 6, smartSubsample: false });

fs.mkdirSync(OUT_DIR, { recursive: true });

// Michiel — borstbeeld van bron
const michielSrc = path.join(ASSETS, "michiel-vercruysse-source.png");
if (fs.existsSync(michielSrc)) {
  const meta = await sharp(michielSrc).metadata();
  const cropHeight = Math.round(Math.min(meta.height, meta.width * 1.15));
  const base = sharp(michielSrc).extract({
    left: 0,
    top: 0,
    width: meta.width,
    height: cropHeight,
  });
  await resizeProfile(base.clone(), "top").toFile(
    path.join(OUT_DIR, "michiel-vercruysse.webp")
  );
  await resizeThumb(base.clone(), "top").toFile(
    path.join(OUT_DIR, "michiel-vercruysse-thumb.webp")
  );
  console.log("✓ Michiel");
}

// Loïck — bron is vaak klein (chat/WhatsApp): nooit upscalen, max. kwaliteit
const loickSrc = path.join(ASSETS, "loick-vanwetter-source.png");
if (fs.existsSync(loickSrc)) {
  const meta = await sharp(loickSrc).metadata();
  const srcW = meta.width ?? 300;
  const srcH = meta.height ?? 400;
  const thumbSize = Math.min(THUMB_SIZE, srcW);

  // Lichte verscherping op de bron, zonder pixels te verzinnen
  const sharpenNative = (img) =>
    img.sharpen({ sigma: 0.7, m1: 0.8, m2: 0.3, x1: 2, y2: 10, y3: 20 });

  await sharpenNative(sharp(loickSrc))
    .webp({ quality: 98, effort: 6, smartSubsample: false, nearLossless: true })
    .toFile(path.join(OUT_DIR, "loick-vanwetter.webp"));

  await sharpenNative(
    sharp(loickSrc).resize(thumbSize, thumbSize, {
      fit: "cover",
      position: "centre",
      kernel: sharp.kernel.lanczos3,
      withoutEnlargement: true,
    })
  )
    .webp({ quality: 95, effort: 6, smartSubsample: false })
    .toFile(path.join(OUT_DIR, "loick-vanwetter-thumb.webp"));

  console.log(`✓ Loïck (native ${srcW}×${srcH}, geen upscale, thumb ${thumbSize}px)`);
}

// Gianni — van bestaande jpg
const gianniSrc = path.join(OUT_DIR, "gianni-faelens.jpg");
if (fs.existsSync(gianniSrc)) {
  const base = sharp(gianniSrc);
  await resizeProfile(base.clone(), "top").toFile(
    path.join(OUT_DIR, "gianni-faelens.webp")
  );
  await resizeThumb(base.clone(), "top").toFile(
    path.join(OUT_DIR, "gianni-faelens-thumb.webp")
  );
  console.log("✓ Gianni");
}

console.log("\nKlaar — bestanden in public/images/");
