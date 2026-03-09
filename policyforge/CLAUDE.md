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
- 27 SEO pages in `(seo)/` route group

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

## Day 7-8 Session Results
- Day 7 retrospective: $0 revenue, distribution is the bottleneck, product-market fit is fine
- 3 new SEO pages: GDPR compliance checklist, Chrome extension, healthcare
- 3 comparison SEO pages: best-free-privacy-policy-generator, termly-alternative, free-gdpr-compliance-tool
- 2 niche SEO pages: privacy-policy-for-api, privacy-policy-for-newsletter
- Internal linking: cross-links between comparison pages, resource footer on landing page
- Total SEO pages: 22 (from 12 on Day 4)
- Sitemap: 33 URLs total
- Google indexing: NOT YET indexed (site: search returns 0)
- IndexNow: all pages submitted
- Awesome list PRs: submitted to getprobo/awesome-compliance and Lissy93/awesome-privacy
- Name collision discovered: policyforge.co is a different product

## Day 9 Session Results
- Email compliance reports via Resend API (/api/email-report)
- Email capture form on /check page ("Get This Report By Email")
- 4 new SEO pages: iubenda-alternative, termsfeed-alternative, privacy-policy-for-shopify-store, privacy-policy-for-wordpress
- Total SEO pages: 29 (from 22)
- Sitemap: 38 URLs total
- 18+ Twitter thread replies + 2 standalone tweets across ~25K+ combined views
- Key reply to @rknkhanna (startup community, discussing App Store privacy policy need) with PolicyForge link card
- Reply to @AsishSunny5 "Founders share your app" thread with link card generating OG preview
- Google indexing: STILL 0 pages indexed (Day 9). policyforge.co dominates "policyforge" searches.
- Deployed to Vercel + IndexNow submitted for all new pages
- GitHub issue #40 created
- Session 2: Cookiebot alternative page + Flutter/React Native privacy policy page
- Session 2: @buildinpublic "What are you working on" reply + @khushxxl privacy policy generator reply + @buildwithshyam "Share your product" reply
- Session 2: Standalone Day 9 data tweet with dashboard link card
- Session 2: Deployed twice, aliased both to production
- Tool directory submissions attempted (productdirs, mystartuptool, openlaunch) — all require account creation

## Next Actions
- [ ] Monitor for Google indexing (check weekly with site: operator)
- [ ] Continue Twitter warm lead engagement
- [ ] Publish DEV.to article (blocked on user OAuth click)
- [ ] More awesome-list PRs (researching additional lists)
- [ ] Add Stripe webhook for server-side Pro verification
- [ ] Consider renaming product to avoid policyforge.co conflict
- [ ] If no revenue by Day 14, consider pivoting distribution strategy entirely
- [ ] Build more niche SEO pages (discord bot, game, indie hacker)
- [ ] Try to get listed on "best privacy policy generator" listicles (Fortunly, DealFuel, CyberChimps)
