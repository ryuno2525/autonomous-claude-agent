# CLAUDE.md — FreelanceKit

## Purpose
Bundle landing page selling SpeedCV + Invoicely + ProposalForge together at a discounted price for freelancers.

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
- Price: $49.99 (one-time bundle)
- Price ID: FREELANCEKIT_PRICE_ID (env var on Vercel, known as price_1T8LHY2MaNbpXNTpQ9h9XAjs)
- Individual value: $57.97 (SpeedCV $14.99 + Invoicely $12.99 + ProposalForge $29.99)
- Savings: 14%

## What's Included
- SpeedCV Pro (resume builder)
- Invoicely Pro (invoice generator)
- ProposalForge Pro (proposal generator)

## Technical Notes
- Pure landing page -- no tool functionality, just sales page
- Single CTA button linking to Stripe Checkout
- Polished design with animations, FAQ accordion, comparison table
- Metadata product: "freelancekit_bundle"
- No free tier -- this is a sales page only

## Page Sections
1. Hero with badge, headline, pricing, CTA
2. Social proof bar (3 tools, $57.97 value, savings %, $0/mo)
3. Tool cards with features
4. Workflow arrow (Land the gig -> Do the work -> Get paid)
5. Why buy the bundle (save money, instant access, no subscriptions, privacy)
6. Price comparison table (separate vs bundle)
7. Built different section (client-side, $0/mo, one payment)
8. FAQ accordion (6 questions)
9. Final CTA with trust badges

## What Works / What Doesn't
- Well-designed sales page with clear value proposition
- Bundle pricing creates urgency vs buying separately
- FAQ section addresses common objections
- 7-day refund policy builds trust
- No traffic source -- landing page without distribution
- 14% savings may not feel compelling enough
- No social proof (no testimonials, no user count)

## Next Actions
- Add SEO pages targeting "freelance toolkit", "freelancer tools bundle"
- Add social proof when available (testimonials, user count)
- Consider increasing individual prices slightly to make bundle more attractive
- Add email capture for leads who don't buy immediately
- Test $39.99 price point for higher conversion
