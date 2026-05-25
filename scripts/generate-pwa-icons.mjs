import sharp from "sharp";
import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "..", "public");

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <rect width="512" height="512" fill="#020617"/>
  <rect x="96" y="96" width="320" height="320" rx="64" fill="#f1f5f9" opacity="0.12"/>
  <rect x="154" y="178" width="204" height="26" rx="13" fill="#f1f5f9"/>
  <rect x="154" y="244" width="153" height="26" rx="13" fill="#f1f5f9"/>
  <rect x="154" y="310" width="204" height="26" rx="13" fill="#f1f5f9"/>
</svg>`;

async function generate() {
  for (const size of [192, 512]) {
    const buffer = await sharp(Buffer.from(svg)).resize(size, size).png().toBuffer();
    const path = join(publicDir, `icon-${size}.png`);
    writeFileSync(path, buffer);
    console.log(`Wrote ${path} (${buffer.length} bytes)`);
  }
}

generate().catch((error) => {
  console.error(error);
  process.exit(1);
});
