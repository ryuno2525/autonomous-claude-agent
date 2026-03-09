# CLAUDE.md — JSONHero

## Purpose
JSON formatter, validator, and transformer with tree view, diff comparison, and TypeScript/CSV conversion.

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
- Price: $7.99 (one-time)
- Price ID: price_1T89o82MaNbpXNTpXQHzfCEe (hardcoded in checkout route)

## Free Tier Limits
- Format/Beautify/Minify/Copy available for free
- Tree View, Diff, and Convert tabs are Pro-only

## Pro Features
- Interactive tree view with collapse/expand
- JSON diff (compare two JSONs side by side)
- Convert to TypeScript interfaces
- Convert JSON arrays to CSV

## Technical Notes
- 100% client-side, no server processing
- Syntax highlighting via regex-based HTML injection (dangerouslySetInnerHTML)
- Stats display: node count, depth, byte size
- Pro status stored in localStorage (jsonhero_pro)

## What Works / What Doesn't
- Solid developer tool with real utility
- Free tier (format/validate) provides genuine value
- Pro features (tree, diff, convert) are legitimately useful
- Niche audience (developers), high competition from jsonhero.io, jsoncrack.com
- No SEO pages for organic discovery

## Next Actions
- Add SEO pages targeting "json formatter online", "json to typescript converter"
- Add JSON path finder (click a node, get the path)
- Add JSON schema generation
- Consider sharing formatted JSON via URL
