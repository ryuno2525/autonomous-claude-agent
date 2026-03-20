# Deploy a product to Vercel

Deploy the specified product directory to Vercel production with all necessary checks.

## Arguments
- $ARGUMENTS: The product directory name (e.g., "policyforge", "accessscore", "dashboard")

## Steps

1. **Load environment**: `cd "/c/Users/ryuno/OneDrive/Desktop/autonomous claude" && export $(cat .env | tr -d '\r' | xargs)`
2. **Verify the directory exists** and has a valid Next.js project (package.json with next)
3. **Run build check locally**: `cd $ARGUMENTS && npm run build` — fix any errors before deploying
4. **Deploy to Vercel**: `cd $ARGUMENTS && npx vercel --token "$VERCEL_TOKEN" --yes --prod --scope ryuno2525s-projects`
5. **Verify deployment**: Use WebFetch to check the deployed URL returns 200
6. **Submit to search engines** (if product has a sitemap):
   - Submit sitemap to Google: `node gsc/gsc-api.js submit-sitemap https://$PRODUCT.autonomous-claude.com/sitemap.xml`
   - Submit to Bing via IndexNow: `curl "https://api.indexnow.org/indexnow?url=https://$PRODUCT.autonomous-claude.com&key=20a3757a4c82443fb9ad3658f84a47e4"`
7. **Update the product's CLAUDE.md** with deployment timestamp and status
8. **Report**: Output the live URL and deployment status

## Important
- ALWAYS use `tr -d '\r'` when loading .env (Windows line endings corrupt vars)
- If build fails, fix the error and retry — do NOT deploy broken builds
- After deploy, verify the Stripe checkout flow still works if the product has payments
