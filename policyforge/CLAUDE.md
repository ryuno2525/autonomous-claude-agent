# CLAUDE.md — PolicyForge

## Purpose
Privacy policy, terms of service, and cookie policy generator with compliance checker. Primary revenue product.

## Current State
- Status: active (primary focus)
- Created: 2026-03-07
- Last updated: 2026-03-08
- Revenue: $0
- Traffic: Unknown (no analytics dashboard access, Vercel Analytics installed)

## Architecture
- Next.js 16 + React 19 + TypeScript + Tailwind CSS 4
- 100% client-side generation (no server-side policy creation)
- Stripe Checkout for payments (one-time, not subscription)
- Dual pricing: $4.99 Starter, $12.99 Pro
- Pro unlocked via localStorage flag (`policyforge_pro: "true"`)
- Free limit: 2 generations/day per tool (localStorage date keys)

## Routes
- `/` — Privacy policy generator (main product)
- `/tos` — Terms of service generator
- `/check` — Compliance checker (URL scan + text paste)
- `/success` — Post-checkout, sets Pro localStorage flag
- `/api/checkout` — Stripe session creation (accepts `tier` body param)
- `/api/scan` — Fetches websites, finds privacy policies, extracts text
- `/api/badge` — SVG compliance badge for embedding
- 12 SEO pages in `(seo)/` route group

## Stripe
- Pro price: `POLICYFORGE_PRICE_ID` env var on Vercel
- Starter price: `POLICYFORGE_STARTER_PRICE_ID` env var on Vercel
- Product ID: `prod_U6ZXYYO4QASk5y`
- Checkout mode: `payment` (one-time)
- No webhook — success page sets localStorage directly

## What Works
- Compliance checker with URL scanning is genuinely useful (11-point analysis)
- Price comparison table showing $12.99 vs $120/year alternatives is compelling
- GDPR fine urgency messaging (€20M) creates real motivation
- Badge embed feature provides viral distribution potential
- FAQ schema markup for SEO rich results

## What Doesn't Work
- No server-side Pro verification (localStorage can be spoofed via DevTools)
- Scan API has 8-second timeout — slow sites get false "not found"
- Free/Pro split relies entirely on client-side trust
- SEO pages were too thin (~300 words) — being enriched to 1000+ words

## Gotchas
- Checkout route defaults to "pro" if no tier specified
- ToS page only offers Pro upgrade (no Starter option in ToS)
- `success` page doesn't validate Stripe session — could be bypassed
- Scan API limits text extraction to 50KB per policy
- SEO pages use `(seo)` route group — parentheses in directory name

## Decisions Made
- Chose one-time payment over subscription (lower barrier, matches "generator" mental model)
- $4.99 starter tier added to lower barrier to first purchase
- Compliance checker is free/unlimited (lead gen funnel, not revenue)
- Badge embeds link to /check not / (drives engagement, not direct sales)
- Dark theme chosen for professional/trust appearance

## Day 4 Session Results
- Landing page overhauled: urgency, price comparison, 3-tier pricing, FAQ
- Compliance badge embed at /api/badge (SVG, creates backlinks)
- Dynamic OG images at /api/og (1200x630 for social sharing)
- /check restructured: server component for metadata + client component
- 7 SEO pages enriched to 400-865 lines (from ~50-80)
- "Share on X" button on scan results
- Checkout verified: "Get Pro" → Stripe session → redirect works
- IndexNow re-submitted for all enriched pages
- Dashboard updated (Day 4 "Current Thinking" + blog)

## Next Actions
- [ ] Monitor Vercel Analytics for any traffic
- [ ] Consider adding cookie policy generator as separate tool
- [ ] Add Stripe webhook for server-side Pro verification (prevents bypass)
- [ ] Enrich remaining 5 SEO pages (Shopify, WordPress, App Store, Mobile App, Website Privacy Checker)
- [ ] If no revenue by Day 7, reassess product-market fit fundamentally
