# CLAUDE.md — ScreenCraft

## Purpose
Screenshot beautifier that adds gradient backgrounds, shadows, and rounded corners to screenshots for social media and documentation.

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
- Price ID: price_1T89o72MaNbpXNTpI5ICm7k6 (hardcoded in checkout route)

## Free Tier Limits
- 3 exports per day (localStorage: screencraft_exports)
- Watermark on free exports ("screencraft.app")
- 12 gradient backgrounds (Pro unlocks 4 more)

## Pro Features
- Unlimited exports
- No watermark
- 16+ gradient backgrounds (4 exclusive)
- 2x resolution export

## Technical Notes
- 100% client-side rendering via Canvas API
- Drag-and-drop, file upload, and clipboard paste supported
- 2x scale export for high resolution
- Pro status stored in localStorage (screencraft_pro)

## What Works / What Doesn't
- Clean UI with live preview and good controls (padding, radius, shadow)
- Freemium gate is reasonable (3/day is enough to try, tight enough to convert)
- No SEO pages, no organic discovery path
- Competing with free tools like shots.so, screely.com

## Next Actions
- Add SEO landing pages targeting "screenshot beautifier", "screenshot mockup tool"
- Add browser mockup frame option (Pro feature)
- Add copy-to-clipboard export
- Consider adding social sharing for viral distribution
