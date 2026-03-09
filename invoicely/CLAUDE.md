# CLAUDE.md — Invoicely

## Purpose
Professional invoice generator with line items, tax/discount calculations, multiple currencies, and PDF export.

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
- Price: $12.99 (one-time)
- Price ID: INVOICELY_PRICE_ID (env var on Vercel, known as price_1T8AZd2MaNbpXNTpT9u4pKSn)

## Free Tier Limits
- 2 free PDF exports per day (localStorage: invoicely_exports_YYYY-MM-DD)
- Watermark on free PDFs ("Invoicely Free" at 45-degree angle)

## Pro Features
- Unlimited invoice exports
- No watermark on PDFs
- Save invoice templates
- Multiple currency support (USD, EUR, GBP, JPY, CAD, AUD)
- Priority support

## Technical Notes
- PDF export via html2canvas-pro + jsPDF (multi-page support)
- Invoice data auto-saved to localStorage (invoicely_data)
- Split-panel layout: form on left, live preview on right
- Mobile-responsive with tab switch between Edit/Preview
- Reusable Section and Input components
- Pro status stored in localStorage (invoicely_pro)

## What Works / What Doesn't
- Clean, professional invoice preview
- Good UX with live preview and auto-save
- Multi-currency support is useful
- Tax and discount calculations work correctly
- 2 free exports is reasonable
- Watermark is visible but not destructive
- Part of FreelanceKit bundle ($49.99)
- No SEO pages for organic discovery

## Next Actions
- Add SEO pages targeting "free invoice generator", "invoice maker online"
- Add invoice numbering auto-increment
- Add ability to save multiple invoices locally
- Add payment terms templates
