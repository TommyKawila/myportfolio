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
  <rect x="16" y="72" width="148" height="36" rx="8" fill="#1e293b"/>
  <rect x="200" y="0" width="1000" height="120" fill="#020617" stroke="#1e293b"/>
  <text x="224" y="40" fill="#64748b" font-family="system-ui,sans-serif" font-size="12">DEVOPS AUTOMATION</text>
  <text x="224" y="72" fill="#f1f5f9" font-family="system-ui,sans-serif" font-size="28" font-weight="600">Deploy Control Center</text>
  <g transform="translate(224,140)">
    <rect width="210" height="72" rx="10" fill="#0f172a" stroke="#1e293b"/>
    <rect x="230" width="210" height="72" rx="10" fill="#0f172a" stroke="#1e293b"/>
    <rect x="460" width="210" height="72" rx="10" fill="#0f172a" stroke="#1e293b"/>
    <rect x="690" width="210" height="72" rx="10" fill="#0f172a" stroke="#1e293b"/>
    <text x="16" y="28" fill="#64748b" font-family="system-ui,sans-serif" font-size="10">DEPLOYS TODAY</text>
    <text x="16" y="52" fill="#f1f5f9" font-family="system-ui,sans-serif" font-size="20" font-weight="600">24</text>
    <text x="246" y="28" fill="#64748b" font-family="system-ui,sans-serif" font-size="10">AVG BUILD</text>
    <text x="246" y="52" fill="#f1f5f9" font-family="system-ui,sans-serif" font-size="20" font-weight="600">1m 42s</text>
  </g>
  <text x="224" y="250" fill="#f1f5f9" font-family="system-ui,sans-serif" font-size="16" font-weight="600">Active pipelines</text>
  <rect x="224" y="266" width="440" height="120" rx="12" fill="#0f172a" stroke="#1e293b"/>
  <text x="244" y="296" fill="#f1f5f9" font-family="system-ui,sans-serif" font-size="13" font-weight="600">myportfolio</text>
  <text x="244" y="316" fill="#64748b" font-family="monospace" font-size="11">main</text>
  <rect x="580" y="280" width="64" height="22" rx="11" fill="#064e3b"/>
  <text x="592" y="296" fill="#34d399" font-family="system-ui,sans-serif" font-size="10">Success</text>
  <rect x="680" y="266" width="440" height="120" rx="12" fill="#0f172a" stroke="#1e293b"/>
  <text x="700" y="296" fill="#f1f5f9" font-family="system-ui,sans-serif" font-size="13" font-weight="600">api-gateway</text>
  <text x="700" y="316" fill="#64748b" font-family="monospace" font-size="11">feat/auth</text>
  <rect x="1036" y="280" width="64" height="22" rx="11" fill="#78350f"/>
  <text x="1048" y="296" fill="#fbbf24" font-family="system-ui,sans-serif" font-size="10">Running</text>
  <text x="224" y="430" fill="#f1f5f9" font-family="system-ui,sans-serif" font-size="16" font-weight="600">Deploy log</text>
  <rect x="224" y="446" width="928" height="140" rx="12" fill="#0f172a" stroke="#1e293b"/>
  <text x="244" y="476" fill="#64748b" font-family="monospace" font-size="11">07:42:01 ✓ Cloning repository… done</text>
  <text x="244" y="500" fill="#64748b" font-family="monospace" font-size="11">07:42:15 ✓ next build --webpack</text>
  <text x="244" y="524" fill="#34d399" font-family="monospace" font-size="11">07:43:48 ✓ Deployed to production</text>
  <text x="244" y="548" fill="#64748b" font-family="monospace" font-size="11">07:43:49 → https://myportfolio.vercel.app</text>
</svg>`;

const buffer = await sharp(Buffer.from(svg)).png().toBuffer();
writeFileSync(join(publicDir, "project5.png"), buffer);
console.log(`Wrote project5.png (${buffer.length} bytes)`);
