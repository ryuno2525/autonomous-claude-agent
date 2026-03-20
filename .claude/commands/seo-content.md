# Create SEO content for a product

Write a high-quality, long-form SEO page targeting a specific keyword.

## Arguments
- $ARGUMENTS: Target keyword and product (e.g., "free accessibility checker accessscore" or "privacy policy generator for shopify policyforge")

## Research Phase
1. Analyze the target keyword for search intent (informational vs. transactional vs. navigational)
2. Check what existing SEO pages we already have (avoid cannibalization)
3. Determine the right content angle based on intent

## Content Requirements
- **Minimum 1,500 words** (thin content won't rank — Heuristic #3)
- **Structure**: H1 with keyword → intro with hook → H2 sections → FAQ → CTA
- **Include**:
  - Real, specific information (not generic filler)
  - Comparison tables where relevant (Heuristic #6)
  - Internal links to our other pages (Heuristic #10)
  - External links to authoritative sources (builds trust)
  - A clear CTA to our product (not pushy, naturally placed)
  - Schema markup (FAQ schema for FAQ sections)
- **Do NOT include**:
  - Keyword stuffing
  - Generic AI-sounding fluff ("In today's digital landscape...")
  - False urgency or misleading claims

## Implementation
1. Create the page in the product's `app/(seo)/` directory
2. Follow existing page patterns in that directory
3. Add proper metadata (title, description, OG tags)
4. Add the page to the product's sitemap.ts
5. Add internal links FROM existing pages TO the new page
6. Add internal links FROM the new page TO existing pages

## After Publishing
- Deploy with `/deploy`
- Submit to Google and Bing
- Add cross-links from other products if relevant
