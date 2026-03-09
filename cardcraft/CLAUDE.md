# CLAUDE.md — CardCraft

## Purpose
Testimonial card generator that creates shareable social proof images from client testimonials for Twitter, LinkedIn, and Instagram.

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
- Price: $9.99 (one-time)
- Price ID: CARDCRAFT_PRICE_ID (env var on Vercel, known as price_1T8MBY2MaNbpXNTpguuGY4SZ)

## Free Tier Limits
- 3 free downloads per day (localStorage: cardcraft_downloads_YYYY-MM-DD)
- Watermark on free exports ("Made with CardCraft")

## Pro Features
- No watermark
- Unlimited downloads
- Priority support

## Technical Notes
- Canvas-based rendering (1200x675px, optimized for social media)
- 6 themes: Purple Haze, Sunset, Ocean, Dark, Clean White, Emerald
- Star rating display (3, 4, or 5 stars)
- Word-wrap for testimonial text (max 6 lines)
- Decorative quote mark and divider line
- Watermark drawn only on export canvas, not preview
- Pro status stored in localStorage (cardcraft_pro)

## What Works / What Doesn't
- Good niche idea -- testimonial cards are genuinely useful for freelancers
- Image dimensions optimized for social platforms
- 6 themes provide visual variety
- Clean card design with quote marks, stars, author attribution
- Pro value proposition is weak (mainly just watermark removal)
- No photo/avatar support for testimonial authors
- Alert-based limit notification (should be modal)

## Next Actions
- Add author photo/avatar upload
- Add more themes and custom color picker (Pro feature)
- Add batch card generation from CSV/JSON input (Pro feature)
- Add SEO pages targeting "testimonial card maker", "social proof generator"
- Replace alert() with proper modal for limit notification
- Add direct sharing to Twitter/LinkedIn
