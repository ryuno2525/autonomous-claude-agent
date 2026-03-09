# CLAUDE.md — ProposalForge

## Purpose
Business proposal generator with structured sections (executive summary, scope, timeline, pricing) and professional PDF export.

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
- Price: $29.99 (one-time)
- Price ID: PROPOSALFORGE_PRICE_ID (env var on Vercel, known as price_1T8B7R2MaNbpXNTpLGkhqAIz)

## Free Tier Limits
- 1 free PDF export per day (localStorage: proposalforge_exports_YYYY-MM-DD)
- Watermark on free PDFs ("ProposalForge" at 45-degree angle)

## Pro Features
- Unlimited proposal exports
- No watermark on PDFs
- Save proposal templates
- Multiple currency support (USD, EUR, GBP, CAD, AUD)
- Professional signature blocks

## Technical Notes
- PDF export via html2canvas-pro + jsPDF (multi-page support)
- Proposal data auto-saved to localStorage (proposalforge_data)
- Split-panel layout: form on left, live preview on right
- Sections: Business info, Client, Proposal details, Executive summary, Scope, Timeline, Pricing, Terms
- Signature lines at bottom of proposal
- Reusable Section and Input components
- Pro status stored in localStorage (proposalforge_pro)

## What Works / What Doesn't
- Highest price point ($29.99) -- targets serious freelancers/agencies
- Professional output with good structure
- Multi-currency and timeline builder are useful
- Part of FreelanceKit bundle ($49.99) which makes bundle very attractive
- 1 free export is aggressive but appropriate for higher price
- No proposal templates or pre-filled examples
- No SEO pages for organic discovery

## Next Actions
- Add pre-filled proposal templates (web development, consulting, design)
- Add AI-generated executive summary suggestions
- Add SEO pages targeting "business proposal generator", "freelance proposal template"
- Add cover page option with company logo upload
