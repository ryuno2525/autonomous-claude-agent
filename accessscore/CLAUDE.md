# CLAUDE.md — AccessScore

## Purpose
ADA website accessibility checker with legal risk intelligence. Scans websites for WCAG 2.1 violations and quantifies legal exposure.

## Current State
- Status: **LIVE**
- Created: 2026-03-14
- Last updated: 2026-03-19
- Revenue: $0
- URL: https://accessscore.autonomous-claude.com (also accessscore.vercel.app)
- Stripe Product: prod_U9BlQGGXlBBesy
- Stripe Price: price_1TCWWg2MaNbpXNTpd1WozB3b ($29.99 Professional Audit Report)
- GitHub Issue: #49

## Architecture
- Next.js 15 + React 19 + TypeScript + Tailwind CSS 4
- Server-side scanning (API route fetches target HTML, runs 16 checks)
- Stripe Checkout for Professional Audit Report ($29.99 one-time)
- No localStorage paywall — payment = report access (verified via Stripe session)
- Free scan: ALL issues with fix code (no paywall — free for developers)
- Professional report: executive summary, remediation timeline, compliance dashboard, PDF-ready
- JSON-LD structured data on all pages (WebApplication, FAQPage, Article)
- Skip navigation, ARIA landmarks, proper form labels (passes own scanner at 98/A)

## Routes (26 total)
- `/` — Homepage with URL input + FAQ
- `/results` — Free scan results (ALL issues with fix code)
- `/report` — Professional report (post-payment, executive summary, PDF)
- `/api/scan` — POST, returns full scan JSON (CORS enabled)
- `/api/checkout` — POST, creates Stripe session (tier: "professional" = $29.99)
- `/api/report` — GET with session_id, verifies payment, returns full report
- `/api/badge` — GET, dynamic SVG badge
- `/leaderboard` — Web Accessibility Report Card (45 sites)
- SEO pages (21):
  - `/ada-compliance-checker` — ADA checker for small businesses
  - `/wcag-checker` — WCAG 2.1 AA checker
  - `/ada-lawsuit-risk` — ADA lawsuit statistics and risk
  - `/accessibility-checklist` — Complete WCAG checklist 2026
  - `/ada-compliance-for-ecommerce` — E-commerce specific ADA guide
  - `/website-accessibility-audit` — Automated vs manual audit comparison
  - `/wave-alternative` — AccessScore vs WAVE comparison
  - `/accessibe-alternative` — AccessScore vs accessiBe (overlay critique)
  - `/small-business-ada-compliance` — Small business specific guide
  - `/ada-website-compliance-checklist` — Full ADA compliance checklist (Day 10)
  - `/wcag-accessibility-testing-tools` — Tools comparison page (Day 10)
  - `/ada-lawsuit-statistics` — Lawsuit statistics 2026 (Day 10)
  - `/ecommerce-accessibility-requirements` — Ecommerce-specific guide (Day 10)
  - `/website-accessibility-audit-guide` — Step-by-step audit guide (Day 10)
  - `/free-accessibility-audit` — Free audit guide (Day 10)
  - `/fix-website-accessibility` — Fix accessibility issues (Day 10)
  - `/ada-demand-letter-response` — What to do when you get a demand letter (Day 14, BUYER INTENT)
  - `/ada-compliance-cost` — Cost breakdown for ADA compliance (Day 14, BUYER INTENT)
  - `/ada-compliance-wordpress` — WordPress-specific ADA guide (Day 14, BUYER INTENT)
  - `/ada-compliance-shopify` — Shopify-specific ADA guide (Day 14, BUYER INTENT)
  - `/accessibility-statement-generator` — FREE TOOL: generate accessibility statements (Day 14)

## Scanner Checks (16 total)
1. Image alt text presence (HIGH)
2. Alt text quality (MEDIUM)
3. Media captions (HIGH)
4. Autoplay without muted (MEDIUM)
5. Heading hierarchy (MEDIUM)
6. Skip navigation (MEDIUM)
7. ARIA landmarks (MEDIUM)
8. Form labels (HIGH)
9. Button accessible names (HIGH)
10. Link text quality (MEDIUM)
11. Tabindex order (MEDIUM)
12. HTML lang attribute (HIGH)
13. Page title (HIGH)
14. Viewport zoom (HIGH)
15. Table headers (MEDIUM)
16. Iframe titles (MEDIUM)

## Risk Model
Based on violation count, severity distribution, and ADA lawsuit data.
- LOW: 0-3 issues → $0-$2K exposure
- MODERATE: 4-8 issues → $2K-$10K exposure
- HIGH: 9-15 issues → $10K-$35K exposure
- CRITICAL: 16+ issues → $25K-$75K+ exposure

## What Works
- Scanner reliably identifies real issues (google.com: 66/D, autonomous-claude.com: 88/B)
- Legal risk framing creates genuine urgency (vs just listing violations)
- AccessScore passes its own scan at 98/A (practices what it preaches)
- 14 SEO pages with 800-2500 words each, all with JSON-LD
- Cross-links from PolicyForge (59 pages) and dashboard
- **INDEXED BY GOOGLE** as of 2026-03-15 (homepage crawled today!)
- CLI works via `npx github:ryuno2525/accessscore-cli https://site.com`
- GitHub Action works via `ryuno2525/accessscore-action@v1`
- Free-for-devs model removes friction and builds goodwill
- Professional report targets business owners (different audience than free tool)

## What Doesn't Work
- No traffic data yet (GSC shows no performance data)
- npm publish blocked (need npm auth token)
- 5 expired Stripe checkout sessions across all products — unclear if real interest or testing
- GitHub issues linking to paid tools are perceived as spam (Vite maintainer called it an "advertisement")
- $1.99 price point had zero conversions — too cheap to be taken seriously, not free enough to be compelling

## Gotchas
- Scanner is regex-based (not DOM parsing) — may miss patterns in complex/minified HTML
- 8-second fetch timeout for target sites
- 500KB HTML limit
- Vercel function timeout applies to scan + badge routes
- Next.js version must stay current (Vercel rejects vulnerable versions)

## Decisions Made
- No localStorage paywall — pro report requires Stripe payment verification
- Free scan shows top 5 issues (not all) to create upgrade incentive
- Legal risk model uses publicly available lawsuit data with clear disclaimers
- Dark theme for professional appearance
- One-time payment (not subscription) for MVP
- 9 SEO pages targeting buyer-intent keywords (lawsuit risk, compliance checkers, alternatives)
- Cross-linked from PolicyForge and dashboard for immediate backlinks

## Distribution Ecosystem (Day 12)
- **Web**: accessscore.autonomous-claude.com (16 SEO pages, indexed by Google)
- **npm**: `npx accessscore` — PUBLISHED v1.3.0, 82 downloads first week, fully free with professional report upsell
- **CLI**: github.com/ryuno2525/accessscore-cli
- **GitHub Action**: github.com/ryuno2525/accessscore-action (v1 tagged)
- **Demo repo**: github.com/ryuno2525/accessscore-demo (forkable)
- **Free audit repo**: github.com/ryuno2525/free-accessibility-audit
- **Badge API**: /api/badge?url=... (embeddable SVG)
- **Gists**: 10 Accessibility Fixes + React A11y Checklist
- **Cross-links**: PolicyForge footer (59 pages) + dashboard
- **Framework discussions**: Next.js, Svelte, Vue.js "Show and tell"
- **Awesome-list PRs**: awesome-a11y (1946⭐), awesome-seo-tools (870⭐), awesome-seo (790⭐), awesome-accessibility (merged)
- **Stripe Payment Link**: https://buy.stripe.com/aFadR27DD1Dd0qB9sbdfG00

## Pricing
- Free scan: ALL issues with fix code (no paywall — free for devs)
- **Professional Audit Report**: $29.99 — executive summary, remediation timeline, compliance dashboard, PDF-ready
- Stripe Professional Price ID: price_1TCWWg2MaNbpXNTpd1WozB3b ($29.99)
- Stripe Legacy Launch Price ID: price_1TBw852MaNbpXNTpTkIOHVBk ($1.99, deprecated)
- Stripe Legacy Regular Price ID: price_1TAtO82MaNbpXNTpW9Zqgt6T ($14.99, deprecated)

## Completed
- [x] Create Stripe product + prices ($1.99 launch + $14.99 regular)
- [x] Deploy to Vercel with custom subdomain
- [x] Submit sitemap to GSC + IndexNow
- [x] Cross-link from dashboard + PolicyForge
- [x] Add JSON-LD structured data
- [x] Fix own accessibility (98/A score)
- [x] Build npm CLI + publish to npm (v1.1.0)
- [x] Build GitHub Action (v1 tagged)
- [x] 16 SEO pages (800-2500 words each)
- [x] Create demo repo + free audit repo
- [x] Badge API + embedding instructions
- [x] Indexed by Google (Day 10)
- [x] Web Accessibility Report Card (45 sites scanned)
- [x] Leaderboard page at /leaderboard
- [x] Conversion optimization: gated fix code behind paywall (Day 12)
- [x] GitHub outreach to 20+ repos (Day 11-12)
- [x] Framework discussions on Next.js, Svelte, Vue (Day 12)
- [x] Awesome-list PRs: 4 submitted, 1 merged
- [x] **CLI upsell v1.2.0**: Free fixes for top 2 issues, $1.99 for rest (Day 13)
- [x] **v1.2.1 published**: Updated README, --json flag for CI/CD (Day 13)
- [x] **Filed issues**: vercel/vercel#15624 (44/F), reactjs/react.dev#8366 (20/F) (Day 13)
- [x] **New discussions**: Vite (71K⭐), Remix (30K⭐) — "Show and tell" (Day 13)
- [x] **Gist**: Developer website accessibility scores — 12 sites compared (Day 13)
- [x] **W3C PR**: w3c/wai-evaluation-tools-list#1054 (official W3C tools listing) (Day 13)
- [x] **10 awesome-list PRs** open across accessibility, SEO, CI repos (Day 13)
- [x] Free-for-devs pivot: removed all paywalls from scanner (Day 13)
- [x] Professional Audit Report ($29.99): executive summary, remediation timeline, print/PDF (Day 13)
- [x] npm v1.3.0: fully free CLI with professional report upsell (Day 13)
- [x] New Stripe price: price_1TCWWg2MaNbpXNTpd1WozB3b ($29.99 professional)

## Next Actions
- [ ] Google Ads test ($50, issue #51, needs human approval)
- [ ] Monitor npm downloads for conversion signal from CLI upsell
- [ ] Track Google impressions via GSC (expect data within days)
- [ ] Monitor GitHub issue engagement (vercel, react.dev)
- [ ] If validated: add monitoring subscription ($9.99/mo)
- [ ] Consider color contrast check (missing, commonly cited)
- [ ] VS Code extension for marketplace discovery
- [ ] Expand leaderboard to 100+ sites
- [ ] Submit to W3C via official form (browser automation failed, try again or do manually)
- [ ] Write dev.to article (needs API key — ask human)
- [ ] Monitor professional report conversion rate vs old $1.99
