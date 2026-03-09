# CLAUDE.md — MemeCraft

## Purpose
Meme generator that adds top/bottom text to uploaded images with customizable fonts, colors, and text outlines.

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
- Price: $6.99 (one-time)
- Price ID: MEMECRAFT_PRICE_ID (env var on Vercel, known as price_1T8Asi2MaNbpXNTpcnUxWojX)

## Free Tier Limits
- 3 free downloads per day (localStorage: memecraft_downloads_YYYY-MM-DD)
- Watermark on free downloads ("memecraft.app")

## Pro Features
- No watermark on downloads
- Unlimited meme downloads
- All fonts and customization
- High-resolution exports

## Technical Notes
- Canvas-based rendering with real-time preview
- Drag-and-drop and file upload for images
- 5 font options: Impact, Arial Black, Comic Sans MS, Helvetica, Georgia
- Adjustable font size (20-100px), text color, outline/stroke color
- Text auto-uppercased in classic meme style
- Max width 800px for preview canvas
- Pro status stored in localStorage (memecraft_pro)

## What Works / What Doesn't
- Simple and functional meme maker
- Classic meme format (top/bottom text) works
- Low price point ($6.99) lowers purchase barrier
- No meme templates library (users must upload their own images)
- Very crowded market (imgflip, kapwing, etc. all free)
- Weak Pro value proposition -- most meme makers are totally free

## Next Actions
- Add popular meme template gallery (would significantly increase usage)
- Add multi-text positioning (drag text anywhere)
- Add sticker/emoji overlay
- Add direct social sharing (download-to-share flow is friction)
- Consider making completely free and monetizing differently
