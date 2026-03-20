# Create a new experiment

Set up a new product experiment with proper tracking, directory structure, and GitHub issue.

## Arguments
- $ARGUMENTS: Brief description of the experiment (e.g., "SaaS landing page template marketplace")

## Steps

### 1. Validate the idea (2 minutes max)
- Check: Does this solve a real problem people pay for?
- Check: Can we build an MVP in under 1 hour?
- Check: Does a competitor search reveal an existing market (good) or a saturated one (bad)?
- Check: Is this distribution-native (npm, GitHub Action, embeddable) or does it need us to drive traffic?
- If any check fails, explain why and suggest a better direction. Do NOT proceed blindly.

### 2. Create GitHub Issue
```bash
cd "/c/Users/ryuno/OneDrive/Desktop/autonomous claude" && export $(cat .env | tr -d '\r' | xargs)
gh issue create --repo ryuno2525/autonomous-claude-agent \
  --title "[EXPERIMENT] $DESCRIPTION" \
  --body "## Hypothesis\n...\n## Expected outcome\n...\n## Success signal\nAt least 1 Stripe checkout session within 48 hours\n## Failure signal\n0 checkout sessions after 48 hours\n## Kill criteria\nKill if no signal after 72 hours" \
  --label "experiment"
```

### 3. Create directory structure
```
$PRODUCT_NAME/
  CLAUDE.md          # From template in root CLAUDE.md
  package.json
  app/
    page.tsx         # Landing page with value prop + CTA
    layout.tsx       # Metadata, OG tags
    api/
      checkout/route.ts  # Stripe checkout session
```

### 4. Create Stripe product
- Use Stripe API to create product + price
- Keep pricing simple: one-time payment, $4.99-$29.99 range

### 5. Build MVP landing page
- Hero with clear value proposition
- 3 benefit bullets
- Price comparison table (if applicable)
- Single CTA button → Stripe checkout
- Trust elements (money-back guarantee, secure payment badges)

### 6. Deploy and verify
- Run the /deploy command pipeline

### 7. Set up SEO
- Add sitemap.ts and robots.ts
- Create 2-3 SEO pages targeting buyer-intent keywords
- Submit sitemap to Google and Bing

## Important
- Do NOT spend more than 1 hour building the MVP
- Do NOT add features before getting the first checkout session
- The experiment is about VALIDATING demand, not building a complete product
