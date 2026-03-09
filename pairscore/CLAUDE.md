# CLAUDE.md — PairScore

## Purpose
Compatibility quiz app where two people answer 12 questions independently, then get a compatibility score across 6 dimensions with a shareable card.

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
- Price: $4.99 (one-time)
- Price ID: PAIRSCORE_PRICE_ID (env var on Vercel, known as price_1T8MaX2MaNbpXNTptPMZLlj2)

## Free Tier
- Full quiz and results are free
- Shareable card has watermark ("Made with PairScore" / "pairscore.vercel.app")

## Pro Features
- Remove watermark from shareable card
- Premium card themes
- Detailed PDF report

## Quiz Structure
- 12 questions across 6 categories (2 per category)
- Categories: Communication, Social Energy, Values, Lifestyle, Emotional Style, Growth
- Each question has 4 options
- Scoring: Same answer = 100%, adjacent = 70%, two apart = 40%, opposite = 20%
- Overall score is average of category scores

## Score Verdicts
- 90%+: Soul Connection
- 75%+: Power Pair
- 60%+: Great Match
- 45%+: Interesting Duo
- 30%+: Opposites Attract
- <30%: Wild Card Pair

## Technical Notes
- Multi-step flow: Landing -> Names -> P1 Quiz -> P2 Quiz -> Results
- Canvas-based card rendering (1080x1080px, optimized for Instagram)
- 5 card themes: Love, Ocean, Sunset, Forest, Galaxy
- Progress bar during quiz
- Pass-the-device model (one device, two players)
- Pro status stored in localStorage (pairscore_pro)

## What Works / What Doesn't
- Highest viral potential of all products (people share compatibility scores)
- Fun, engaging quiz flow with good UX
- Shareable card is well-designed and Instagram-optimized
- Low price ($4.99) for Pro
- Inherently viral -- each result involves two people who may share
- Pass-the-device model limits remote usage
- No way to share quiz link for remote participation
- Pro features are thin (watermark removal is the main draw)
- No SEO pages for organic discovery

## Next Actions
- Add shareable quiz links (each person takes quiz on their own device)
- Add more questions or question packs (Pro feature)
- Add relationship advice based on weak categories
- Add SEO pages targeting "couple compatibility quiz", "relationship quiz"
- Add direct share to Instagram Stories, Twitter, TikTok
- Track viral coefficient (how many new users does each result generate)
