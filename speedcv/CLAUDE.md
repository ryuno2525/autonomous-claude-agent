# CLAUDE.md — SpeedCV

## Purpose
Professional resume/CV builder with real-time preview, multiple templates, and PDF export.

## Current State
- Status: active
- Created: 2026-03-07
- Last updated: 2026-03-08
- Revenue: $0

## Key Files
- Main page: app/page.tsx
- Checkout: app/api/checkout/route.ts
- Success: app/success/page.tsx

## Pricing & Stripe
- Price: $14.99 (one-time)
- Price ID: SPEEDCV_PRICE_ID (env var on Vercel)

## Free Tier Limits
- 1 free PDF export per day (localStorage: speedcv_exports)
- Watermark on free exports ("Built with SpeedCV")
- Only "Classic" template available for free

## Pro Features
- 5 professional resume templates (Classic, Modern, Elegant, Bold, Minimal)
- No watermark on PDF exports
- Unlimited PDF downloads
- Cover letter template
- All future templates included

## Technical Notes
- PDF export via html2canvas-pro + jsPDF
- Resume data auto-saved to localStorage (speedcv_data)
- Tabbed form: Personal, Experience, Education, Skills
- Pro status stored in localStorage (speedcv_pro)

## What Works / What Doesn't
- Good form UX with sectioned tabs
- Real-time A4 preview
- PDF export works (html2canvas approach)
- Only 1 free export is aggressive -- may deter users before they see value
- Template styles are CSS-based but only "Classic" is visually distinct
- Part of FreelanceKit bundle ($49.99)

## Next Actions
- Differentiate template styles more visually
- Add ATS keyword checker as Pro feature
- Add SEO pages targeting "free resume builder", "resume maker online"
- Consider allowing 2-3 free exports to build trust
