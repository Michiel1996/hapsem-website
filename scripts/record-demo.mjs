/**
 * Neemt een korte demovideo op van de lokale HAPSEM-site.
 * Vereist: npm run dev draait op http://localhost:3000
 */
import { chromium } from "playwright";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, "..", "demo");
const BASE = "http://localhost:3000";

const PAGES = [
  { url: "/", label: "Home", scroll: true },
  { url: "/over-de-praktijk", label: "Over de praktijk" },
  { url: "/team", label: "Team" },
  { url: "/sportgeneeskunde", label: "Sportgeneeskunde" },
  { url: "/praktische-info", label: "Praktische info" },
  { url: "/videoconsultaties", label: "Videoconsultaties" },
  { url: "/contact", label: "Contact" },
  { url: "/faq", label: "FAQ" },
];

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 },
    recordVideo: {
      dir: OUT_DIR,
      size: { width: 1280, height: 720 },
    },
    locale: "nl-BE",
  });

  const page = await context.newPage();

  for (const item of PAGES) {
    await page.goto(`${BASE}${item.url}`, { waitUntil: "networkidle" });
    await wait(1800);

    if (item.scroll) {
      await page.evaluate(async () => {
        const step = 280;
        const max = document.body.scrollHeight - window.innerHeight;
        for (let y = 0; y < max; y += step) {
          window.scrollTo({ top: y, behavior: "smooth" });
          await new Promise((r) => setTimeout(r, 450));
        }
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
      await wait(1200);
    }
  }

  await page.goto(`${BASE}/`, { waitUntil: "networkidle" });
  await wait(1500);

  const video = page.video();
  await context.close();
  await browser.close();

  if (!video) {
    console.error("Geen video opgenomen.");
    process.exit(1);
  }

  const rawPath = await video.path();
  const finalPath = path.join(OUT_DIR, "HAPSEM-website-demo.webm");
  if (fs.existsSync(finalPath)) fs.unlinkSync(finalPath);
  fs.renameSync(rawPath, finalPath);

  console.log(`\n✓ Video opgeslagen: ${finalPath}\n`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
