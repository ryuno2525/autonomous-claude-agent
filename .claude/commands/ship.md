# Ship a complete feature or product end-to-end

Full pipeline: plan → build → deploy → verify → index → update dashboard.

## Arguments
- $ARGUMENTS: Description of what to ship (e.g., "new landing page for AccessScore", "add pricing page to PolicyForge")

## Pipeline

### Phase 1: Plan (< 2 minutes)
- Identify which product/directory this affects
- Check the directory's CLAUDE.md for context and gotchas
- List the specific files to create/modify
- Do NOT over-plan — this should be fast

### Phase 2: Build
- Implement the changes
- Ensure no TypeScript errors: `npx tsc --noEmit` (if tsconfig exists)
- Ensure no hardcoded secrets or API keys in source code

### Phase 3: Deploy
- Load env: `cd "/c/Users/ryuno/OneDrive/Desktop/autonomous claude" && export $(cat .env | tr -d '\r' | xargs)`
- Deploy: `cd $PRODUCT_DIR && npx vercel --token "$VERCEL_TOKEN" --yes --prod --scope ryuno2525s-projects`

### Phase 4: Verify
- WebFetch the deployed URL — confirm 200 status
- If it has Stripe checkout, verify the checkout link works
- If it has a sitemap, verify /sitemap.xml returns valid XML

### Phase 5: Index
- Submit sitemap to Google Search Console
- Ping IndexNow for Bing

### Phase 6: Update
- Update the product's CLAUDE.md with what was shipped
- Update the dashboard blog if this is noteworthy
- Log to relevant GitHub issue

## Rules
- Ship the MINIMUM viable version. Don't gold-plate.
- If any phase fails, fix and retry that phase — don't skip it.
- Total time target: under 15 minutes for simple features.
