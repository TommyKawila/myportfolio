#!/usr/bin/env bash
set -e

echo ""
echo "============================================================"
echo "  VERCEL DEPLOY — Next.js + Supabase Portfolio"
echo "============================================================"
echo ""

# Step 1: CLI
echo "[1/6] Vercel CLI"
if npx vercel --version >/dev/null 2>&1; then
  echo "  ✓ Installed: $(npx vercel --version 2>/dev/null | tail -1)"
else
  echo "  ✗ Not found. Run: npm install -D vercel"
  exit 1
fi
echo ""

# Step 2: Auth status
echo "[2/6] Authentication"
if npx vercel whoami >/dev/null 2>&1; then
  echo "  ✓ Logged in as: $(npx vercel whoami 2>/dev/null)"
else
  echo "  → Not logged in yet."
  echo "  → Run this command next (opens browser):"
  echo ""
  echo "      npx vercel login"
  echo ""
fi
echo ""

# Step 3: Env vars
echo "[3/6] Environment variables (required on Vercel)"
echo "  NEXT_PUBLIC_SUPABASE_URL      = Supabase → Settings → API → Project URL"
echo "  NEXT_PUBLIC_SUPABASE_ANON_KEY = Supabase → Settings → API → anon public"
echo "  NEXT_PUBLIC_SITE_URL          = https://your-app.vercel.app (set after 1st deploy)"
echo ""
echo "  Add via CLI (replace values):"
echo '    npx vercel env add NEXT_PUBLIC_SUPABASE_URL production'
echo '    npx vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY production'
echo '    npx vercel env add NEXT_PUBLIC_SITE_URL production'
echo ""

# Step 4: Supabase auth URLs
echo "[4/6] Supabase Auth redirect URLs"
echo "  Supabase Dashboard → Authentication → URL Configuration"
echo "  Site URL:           https://YOUR-APP.vercel.app"
echo "  Redirect URLs:      https://YOUR-APP.vercel.app/**"
echo "                      http://localhost:3000/**"
echo ""

# Step 5: First deploy
echo "[5/6] Deploy commands"
echo "  Preview (staging):  npm run vercel:preview"
echo "  Production:         npm run vercel:prod"
echo ""
echo "  First time? Vercel will ask:"
echo "    - Set up and deploy?        → Y"
echo "    - Which scope?              → your account"
echo "    - Link to existing project? → N (first deploy)"
echo "    - Project name?             → myportfolio (or your choice)"
echo "    - Directory?                → ./  (press Enter)"
echo ""

# Step 6: Post-deploy
echo "[6/6] After first deploy"
echo "  1. Copy the .vercel.app URL from the terminal output"
echo "  2. Set NEXT_PUBLIC_SITE_URL to that URL (vercel env add)"
echo "  3. Update Supabase Auth URLs (step 4)"
echo "  4. Redeploy: npm run vercel:prod"
echo ""
echo "============================================================"
echo "  Quick start (run in order):"
echo "    npx vercel login"
echo "    npm run vercel:preview"
echo "    npm run vercel:prod"
echo "============================================================"
echo ""
