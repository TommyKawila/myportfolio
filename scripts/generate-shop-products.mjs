import sharp from "sharp";
import { mkdirSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "..", "public", "shop", "products");
mkdirSync(outDir, { recursive: true });

const products = [
  {
    file: "lamp.png",
    label: "Lamp",
    bg: ["#1e293b", "#0f172a"],
    accent: "#fbbf24",
    shape: `<ellipse cx="256" cy="200" rx="80" ry="40" fill="#fbbf24" opacity="0.9"/><rect x="236" y="200" width="40" height="120" rx="8" fill="#64748b"/><rect x="196" y="320" width="120" height="16" rx="8" fill="#475569"/>`,
  },
  {
    file: "earbuds.png",
    label: "Pods",
    bg: ["#312e81", "#1e1b4b"],
    accent: "#a78bfa",
    shape: `<circle cx="180" cy="260" r="56" fill="#a78bfa"/><circle cx="332" cy="260" r="56" fill="#a78bfa"/><rect x="220" y="248" width="72" height="8" rx="4" fill="#c4b5fd"/>`,
  },
  {
    file: "coffee.png",
    label: "Cup",
    bg: ["#431407", "#1c1917"],
    accent: "#fdba74",
    shape: `<rect x="176" y="180" width="160" height="120" rx="24" fill="#fdba74" opacity="0.85"/><ellipse cx="256" cy="180" rx="80" ry="20" fill="#fed7aa"/><path d="M336 220 h40 a30 30 0 0 1 0 60 h-40" fill="none" stroke="#fdba74" stroke-width="12"/>`,
  },
  {
    file: "watch-band.png",
    label: "Band",
    bg: ["#0c4a6e", "#082f49"],
    accent: "#38bdf8",
    shape: `<rect x="196" y="160" width="120" height="160" rx="28" fill="#1e293b" stroke="#38bdf8" stroke-width="8"/><rect x="216" y="200" width="80" height="80" rx="12" fill="#0ea5e9" opacity="0.5"/>`,
  },
  {
    file: "tote.png",
    label: "Tote",
    bg: ["#365314", "#1a2e05"],
    accent: "#bef264",
    shape: `<rect x="156" y="200" width="200" height="140" rx="8" fill="#bef264" opacity="0.75"/><path d="M196 200 V170 a60 60 0 0 1 120 0 v30" fill="none" stroke="#d9f99d" stroke-width="10"/>`,
  },
  {
    file: "hub.png",
    label: "Hub",
    bg: ["#334155", "#0f172a"],
    accent: "#94a3b8",
    shape: `<rect x="156" y="220" width="200" height="56" rx="16" fill="#475569"/><rect x="176" y="236" width="24" height="24" rx="4" fill="#94a3b8"/><rect x="220" y="236" width="24" height="24" rx="4" fill="#94a3b8"/><rect x="264" y="236" width="24" height="24" rx="4" fill="#94a3b8"/><rect x="308" y="236" width="24" height="24" rx="4" fill="#94a3b8"/>`,
  },
];

for (const { file, label, bg, accent, shape } of products) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${bg[0]}"/>
        <stop offset="100%" stop-color="${bg[1]}"/>
      </linearGradient>
    </defs>
    <rect width="512" height="512" fill="url(#bg)"/>
    ${shape}
    <text x="256" y="420" fill="${accent}" font-family="system-ui,sans-serif" font-size="22" font-weight="600" text-anchor="middle" opacity="0.6">${label}</text>
  </svg>`;
  const buffer = await sharp(Buffer.from(svg)).png().toBuffer();
  writeFileSync(join(outDir, file), buffer);
  console.log(`Wrote shop/products/${file}`);
}
