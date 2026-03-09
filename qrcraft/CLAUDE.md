# CLAUDE.md — QRCraft

## Purpose
QR code generator supporting URLs, text, WiFi networks, emails, and phone numbers with custom colors and error correction levels.

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
- Price: $8.99 (one-time)
- Price ID: QRCRAFT_PRICE_ID (env var on Vercel, known as price_1T8Aja2MaNbpXNTpBa1WYsQS)

## Free Tier Limits
- 5 free PNG downloads per day (localStorage: qrcraft_downloads_YYYY-MM-DD)
- SVG export is Pro-only

## Pro Features
- Unlimited QR code downloads
- SVG export (vector, scalable)
- Custom colors and styles
- High-resolution exports (1024px PNG)
- Priority support

## Technical Notes
- Uses `qrcode` npm package for generation
- Supports 5 QR types: URL, Text, WiFi (WIFI: protocol), Email (mailto:), Phone
- Custom foreground/background colors
- 4 error correction levels: L (7%), M (15%), Q (25%), H (30%)
- Live preview updates as config changes
- Pro status stored in localStorage (qrcraft_pro)

## What Works / What Doesn't
- Solid utility with real use cases (WiFi sharing is popular)
- 5 free downloads is generous enough to be useful
- SVG-only Pro gate is weak -- most users just need PNG
- Custom colors work well for branding
- Heavy competition from free QR generators
- No logo overlay feature (common Pro feature in competitors)

## Next Actions
- Add logo/image overlay in center of QR code (Pro feature)
- Add batch QR generation (Pro feature)
- Add SEO pages targeting "qr code generator", "wifi qr code"
- Add analytics tracking QR codes (Pro feature, would require server)
