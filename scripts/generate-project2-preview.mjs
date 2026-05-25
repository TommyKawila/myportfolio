import sharp from "sharp";
import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "..", "public");

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675">
  <rect width="1200" height="675" fill="#020617"/>
  <rect x="0" y="0" width="180" height="675" fill="#0f172a"/>
  <rect x="0" y="0" width="180" height="56" fill="#020617"/>
  <text x="24" y="36" fill="#f1f5f9" font-family="system-ui,sans-serif" font-size="14" font-weight="600">← Home</text>
  <rect x="16" y="72" width="148" height="36" rx="8" fill="#1e293b"/>
  <rect x="16" y="120" width="148" height="36" rx="8" fill="transparent" stroke="#334155"/>
  <rect x="16" y="168" width="148" height="36" rx="8" fill="transparent" stroke="#334155"/>
  <text x="32" y="180" fill="#94a3b8" font-family="system-ui,sans-serif" font-size="13">Projects</text>
  <rect x="200" y="0" width="1000" height="120" fill="#020617" stroke="#1e293b"/>
  <text x="224" y="40" fill="#64748b" font-family="system-ui,sans-serif" font-size="12" font-weight="500">AI OPERATIONS</text>
  <text x="224" y="72" fill="#f1f5f9" font-family="system-ui,sans-serif" font-size="28" font-weight="600">Workflow Command Center</text>
  <text x="224" y="98" fill="#94a3b8" font-family="system-ui,sans-serif" font-size="13">Multi-agent automation monitoring</text>
  <g transform="translate(224,140)">
    <rect width="220" height="88" rx="12" fill="#0f172a" stroke="#1e293b"/>
    <rect x="236" width="220" height="88" rx="12" fill="#0f172a" stroke="#1e293b"/>
    <rect x="472" width="220" height="88" rx="12" fill="#0f172a" stroke="#1e293b"/>
    <rect x="708" width="220" height="88" rx="12" fill="#0f172a" stroke="#1e293b"/>
    <text x="16" y="24" fill="#64748b" font-family="system-ui,sans-serif" font-size="11">ACTIVE AGENTS</text>
    <text x="16" y="52" fill="#f1f5f9" font-family="system-ui,sans-serif" font-size="24" font-weight="600">4</text>
    <text x="252" y="24" fill="#64748b" font-family="system-ui,sans-serif" font-size="11">TASKS COMPLETED</text>
    <text x="252" y="52" fill="#f1f5f9" font-family="system-ui,sans-serif" font-size="24" font-weight="600">1,284</text>
    <text x="488" y="24" fill="#64748b" font-family="system-ui,sans-serif" font-size="11">AVG LATENCY</text>
    <text x="488" y="52" fill="#f1f5f9" font-family="system-ui,sans-serif" font-size="24" font-weight="600">142ms</text>
    <text x="724" y="24" fill="#64748b" font-family="system-ui,sans-serif" font-size="11">TOKENS / MIN</text>
    <text x="724" y="52" fill="#f1f5f9" font-family="system-ui,sans-serif" font-size="24" font-weight="600">24.6k</text>
  </g>
  <text x="224" y="268" fill="#f1f5f9" font-family="system-ui,sans-serif" font-size="16" font-weight="600">Multi-agent monitor</text>
  <g transform="translate(224,284)">
    <rect width="290" height="120" rx="12" fill="#0f172a" stroke="#1e293b"/>
    <text x="16" y="28" fill="#f1f5f9" font-family="system-ui,sans-serif" font-size="13" font-weight="600">Agent Alpha</text>
    <rect x="200" y="12" width="74" height="22" rx="11" fill="#064e3b" stroke="#10b981"/>
    <circle cx="212" cy="23" r="4" fill="#34d399"/>
    <text x="222" y="27" fill="#34d399" font-family="system-ui,sans-serif" font-size="10">Active</text>
    <text x="16" y="52" fill="#94a3b8" font-family="system-ui,sans-serif" font-size="11">Orchestrating workflow pipeline</text>
    <rect x="306" width="290" height="120" rx="12" fill="#0f172a" stroke="#1e293b"/>
    <text x="322" y="28" fill="#f1f5f9" font-family="system-ui,sans-serif" font-size="13" font-weight="600">Data Scraper</text>
    <rect x="506" y="12" width="74" height="22" rx="11" fill="#0c4a6e" stroke="#38bdf8"/>
    <text x="528" y="27" fill="#38bdf8" font-family="system-ui,sans-serif" font-size="10">Success</text>
    <text x="322" y="52" fill="#94a3b8" font-family="system-ui,sans-serif" font-size="11">Batch ingest completed</text>
    <rect x="612" width="290" height="120" rx="12" fill="#0f172a" stroke="#1e293b"/>
    <text x="628" y="28" fill="#f1f5f9" font-family="system-ui,sans-serif" font-size="13" font-weight="600">LLM Processing</text>
    <rect x="812" y="12" width="74" height="22" rx="11" fill="#1e293b" stroke="#64748b"/>
    <text x="834" y="27" fill="#94a3b8" font-family="system-ui,sans-serif" font-size="10">Idle</text>
    <text x="628" y="52" fill="#94a3b8" font-family="system-ui,sans-serif" font-size="11">Awaiting next prompt queue</text>
    <rect y="136" width="290" height="120" rx="12" fill="#0f172a" stroke="#1e293b"/>
    <text x="16" y="164" fill="#f1f5f9" font-family="system-ui,sans-serif" font-size="13" font-weight="600">Embedding Worker</text>
    <rect x="200" y="148" width="84" height="22" rx="11" fill="#4c1d95" stroke="#a78bfa"/>
    <text x="212" y="163" fill="#a78bfa" font-family="system-ui,sans-serif" font-size="10">Processing</text>
  </g>
</svg>`;

const buffer = await sharp(Buffer.from(svg)).png().toBuffer();
const path = join(publicDir, "project2.png");
writeFileSync(path, buffer);
console.log(`Wrote ${path} (${buffer.length} bytes)`);
