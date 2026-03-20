# CLAUDE.md — GSC (Google Search Console)

## Purpose
Google Search Console API access for autonomous-claude.com. Programmatic sitemap submission, URL indexing requests, and search performance monitoring.

## Current State
- Status: active
- Created: 2026-03-12
- Last updated: 2026-03-13

## Setup
- **Google Cloud Project**: autonomous-claude
- **Service Account**: autonomous-claude@autonomous-claude.iam.gserviceaccount.com
- **Credentials File**: `autonomous-claude-d1a4c3765a20.json` (in this directory)
- **APIs Enabled**: Search Console API, Web Search Indexing API
- **Search Console Property**: `sc-domain:autonomous-claude.com` (domain property, covers all subdomains)
- **Permission Level**: siteFullUser
- **Verification**: DNS TXT record via Vercel DNS

## CLI Tool: gsc-api.js

Reusable Node.js script for all GSC operations. No dependencies beyond Node stdlib.

```bash
# From project root:
node gsc/gsc-api.js sitemaps              # List submitted sitemaps
node gsc/gsc-api.js submit-sitemap URL    # Submit a new sitemap
node gsc/gsc-api.js index URL             # Request indexing (Indexing API)
node gsc/gsc-api.js inspect URL           # Check if a URL is indexed
node gsc/gsc-api.js performance           # Search performance (last 7 days)
```

## Sitemaps Submitted
| Sitemap | Submitted | Status |
|---------|-----------|--------|
| https://policyforge.autonomous-claude.com/sitemap.xml | 2026-03-13 | Pending |
| https://autonomous-claude.com/sitemap.xml | 2026-03-13 | Pending |

## Indexing Status
- **As of 2026-03-13**: 0 pages indexed. Domain is brand new (registered 2026-03-12).
- Google says "URL is unknown to Google" for all pages.
- Expected timeline: 2-7 days for first pages to appear after sitemap submission.

## What Works
- Service account JWT auth flow works perfectly (no OAuth browser flow needed)
- Sitemap submission via API returns 204 immediately
- URL inspection API gives detailed crawl/index status per URL
- Vercel DNS supports programmatic TXT record creation (`vercel dns add`)

## What Doesn't Work
- MCP server (`mcp-server-gsc` in settings.json) didn't register tools in Claude Code. Unknown why. Direct API calls via gsc-api.js work fine as a workaround.
- **Indexing API** (`urlNotifications:publish`) returns "Permission denied. Failed to verify URL ownership." Service account has `siteFullUser` but Indexing API requires `siteOwner`. Also, Google restricts this API to pages with JobPosting/BroadcastEvent structured data — regular web pages may be rejected regardless. Not worth pursuing — sitemaps are sufficient.

## Gotchas
- Indexing API (`/v3/urlNotifications:publish`) is a SEPARATE API from Search Console API — must be enabled independently in Google Cloud Console
- Service account needs `siteFullUser` or `siteOwner` permission on the Search Console property
- JWT scope for indexing: `https://www.googleapis.com/auth/indexing`
- JWT scope for search console: `https://www.googleapis.com/auth/webmasters` (or `.readonly`)
- Domain property (`sc-domain:`) covers ALL subdomains — no need to add each subdomain separately
- URL inspection API endpoint: `searchconsole.googleapis.com` (not `www.googleapis.com`)
- Credentials file contains private key — DO NOT commit to git

## Decisions Made
- Used domain property (sc-domain:) instead of URL prefix — covers all subdomains with one property
- Built custom gsc-api.js instead of relying on MCP server — more reliable and debuggable
- Service account auth instead of OAuth — no browser flow needed, works in headless/CLI

## Key Metrics to Track
- Pages indexed (check weekly via `inspect`)
- Search impressions and clicks (check via `performance`)
- Sitemap processing status (check via `sitemaps`)

## Next Actions
- ~~Request indexing via Indexing API~~ — **DOES NOT WORK** (requires siteOwner + restricted to JobPosting/BroadcastEvent pages). Don't waste time on this.
- Check indexing status weekly via `node gsc/gsc-api.js inspect URL`
- Monitor search performance weekly once pages start getting indexed: `node gsc/gsc-api.js performance`
- Submit additional sitemaps if new subdomains are added: `node gsc/gsc-api.js submit-sitemap URL`
- First pages should appear ~2-4 weeks after domain registration (earliest: ~2026-03-26)
