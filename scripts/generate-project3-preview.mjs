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
  <text x="224" y="40" fill="#64748b" font-family="system-ui,sans-serif" font-size="12">REAL-TIME ANALYTICS</text>
  <text x="224" y="72" fill="#f1f5f9" font-family="system-ui,sans-serif" font-size="28" font-weight="600">Event Intelligence Hub</text>
  <g transform="translate(224,140)">
    <rect width="220" height="88" rx="12" fill="#0f172a" stroke="#1e293b"/>
    <rect x="236" width="220" height="88" rx="12" fill="#0f172a" stroke="#1e293b"/>
    <rect x="472" width="220" height="88" rx="12" fill="#0f172a" stroke="#1e293b"/>
    <rect x="708" width="220" height="88" rx="12" fill="#0f172a" stroke="#1e293b"/>
    <text x="16" y="24" fill="#64748b" font-family="system-ui,sans-serif" font-size="11">EVENTS / SEC</text>
    <text x="16" y="52" fill="#f1f5f9" font-family="system-ui,sans-serif" font-size="24" font-weight="600">8.4k</text>
    <text x="252" y="24" fill="#64748b" font-family="system-ui,sans-serif" font-size="11">ACTIVE SESSIONS</text>
    <text x="252" y="52" fill="#f1f5f9" font-family="system-ui,sans-serif" font-size="24" font-weight="600">1,892</text>
    <text x="488" y="24" fill="#64748b" font-family="system-ui,sans-serif" font-size="11">P95 LATENCY</text>
    <text x="488" y="52" fill="#f1f5f9" font-family="system-ui,sans-serif" font-size="24" font-weight="600">84ms</text>
    <text x="724" y="24" fill="#64748b" font-family="system-ui,sans-serif" font-size="11">ERROR RATE</text>
    <text x="724" y="52" fill="#f1f5f9" font-family="system-ui,sans-serif" font-size="24" font-weight="600">0.03%</text>
  </g>
  <text x="224" y="268" fill="#f1f5f9" font-family="system-ui,sans-serif" font-size="16" font-weight="600">Event throughput</text>
  <rect x="224" y="284" width="928" height="140" rx="12" fill="#0f172a" stroke="#1e293b"/>
  <rect x="260" y="360" width="60" height="40" rx="4" fill="#38bdf8" opacity="0.5"/>
  <rect x="380" y="340" width="60" height="60" rx="4" fill="#38bdf8" opacity="0.65"/>
  <rect x="500" y="320" width="60" height="80" rx="4" fill="#38bdf8" opacity="0.75"/>
  <rect x="620" y="300" width="60" height="100" rx="4" fill="#38bdf8"/>
  <rect x="740" y="330" width="60" height="70" rx="4" fill="#38bdf8" opacity="0.8"/>
  <rect x="860" y="350" width="60" height="50" rx="4" fill="#38bdf8" opacity="0.6"/>
  <rect x="980" y="290" width="60" height="110" rx="4" fill="#38bdf8"/>
  <text x="224" y="460" fill="#f1f5f9" font-family="system-ui,sans-serif" font-size="16" font-weight="600">Live event stream</text>
  <rect x="224" y="476" width="928" height="120" rx="12" fill="#0f172a" stroke="#1e293b"/>
  <text x="244" y="510" fill="#94a3b8" font-family="system-ui,sans-serif" font-size="12">page.view</text>
  <text x="444" y="510" fill="#64748b" font-family="system-ui,sans-serif" font-size="12">web-app</text>
  <text x="644" y="510" fill="#cbd5e1" font-family="system-ui,sans-serif" font-size="12">12ms</text>
  <rect x="844" y="494" width="48" height="22" rx="11" fill="#064e3b"/>
  <text x="856" y="510" fill="#34d399" font-family="system-ui,sans-serif" font-size="10">ok</text>
  <text x="244" y="548" fill="#94a3b8" font-family="system-ui,sans-serif" font-size="12">auth.sign_in</text>
  <text x="444" y="548" fill="#64748b" font-family="system-ui,sans-serif" font-size="12">api-gateway</text>
  <text x="644" y="548" fill="#cbd5e1" font-family="system-ui,sans-serif" font-size="12">48ms</text>
  <rect x="844" y="532" width="48" height="22" rx="11" fill="#064e3b"/>
  <text x="856" y="548" fill="#34d399" font-family="system-ui,sans-serif" font-size="10">ok</text>
</svg>`;

const buffer = await sharp(Buffer.from(svg)).png().toBuffer();
writeFileSync(join(publicDir, "project3.png"), buffer);
console.log(`Wrote project3.png (${buffer.length} bytes)`);
