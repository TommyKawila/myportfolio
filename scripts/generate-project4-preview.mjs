import sharp from "sharp";
import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "..", "public");

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675">
  <rect width="1200" height="675" fill="#020617"/>
  <rect x="0" y="0" width="180" height="675" fill="#0f172a"/>
  <text x="24" y="36" fill="#f1f5f9" font-family="system-ui,sans-serif" font-size="14" font-weight="600">← Home</text>
  <rect x="200" y="0" width="1000" height="100" fill="#020617"/>
  <text x="224" y="36" fill="#64748b" font-family="system-ui,sans-serif" font-size="12">E-COMMERCE PWA</text>
  <text x="224" y="68" fill="#f1f5f9" font-family="system-ui,sans-serif" font-size="26" font-weight="600">Nova Storefront</text>
  <rect x="224" y="116" width="700" height="48" rx="10" fill="#4c1d95" opacity="0.2" stroke="#8b5cf6"/>
  <text x="244" y="146" fill="#c4b5fd" font-family="system-ui,sans-serif" font-size="12">Live cart · localStorage sync</text>
  <rect x="940" y="120" width="240" height="520" rx="12" fill="#0f172a" stroke="#1e293b"/>
  <text x="960" y="152" fill="#f1f5f9" font-family="system-ui,sans-serif" font-size="14" font-weight="600">Live cart</text>
  <text x="960" y="176" fill="#64748b" font-family="system-ui,sans-serif" font-size="11">2 items · $238</text>
  <rect x="960" y="200" width="48" height="48" rx="8" fill="#312e81"/>
  <rect x="1020" y="212" fill="#94a3b8" font-size="11">Earbuds</rect>
  <text x="1020" y="220" fill="#cbd5e1" font-family="system-ui,sans-serif" font-size="11">Earbuds × 1</text>
  <rect x="960" y="480" width="200" height="36" rx="8" fill="#8b5cf6"/>
  <text x="1020" y="503" fill="#fff" font-family="system-ui,sans-serif" font-size="12" font-weight="600">Checkout</text>
  <g transform="translate(224,180)">
    <rect width="210" height="240" rx="12" fill="#0f172a" stroke="#1e293b"/>
    <rect width="210" height="140" rx="12" fill="#1e293b"/>
    <circle cx="105" cy="70" r="28" fill="#fbbf24" opacity="0.8"/>
    <text x="16" y="180" fill="#f1f5f9" font-family="system-ui,sans-serif" font-size="12" font-weight="600">Desk Lamp</text>
    <text x="16" y="204" fill="#f1f5f9" font-family="system-ui,sans-serif" font-size="14" font-weight="600">$89</text>
    <rect x="226" width="210" height="240" rx="12" fill="#0f172a" stroke="#1e293b"/>
    <rect x="226" width="210" height="140" rx="12" fill="#312e81"/>
    <circle cx="331" cy="70" r="24" fill="#a78bfa"/>
    <circle cx="371" cy="70" r="24" fill="#a78bfa"/>
    <text x="242" y="180" fill="#f1f5f9" font-family="system-ui,sans-serif" font-size="12" font-weight="600">Earbuds Pro</text>
    <rect x="438" width="210" height="240" rx="12" fill="#0f172a" stroke="#1e293b"/>
    <rect x="438" width="210" height="140" rx="12" fill="#431407"/>
    <rect x="488" y="50" width="80" height="60" rx="16" fill="#fdba74" opacity="0.8"/>
    <text x="454" y="180" fill="#f1f5f9" font-family="system-ui,sans-serif" font-size="12" font-weight="600">Coffee Set</text>
  </g>
</svg>`;

const buffer = await sharp(Buffer.from(svg)).png().toBuffer();
writeFileSync(join(publicDir, "project4.png"), buffer);
console.log(`Wrote project4.png (${buffer.length} bytes)`);
