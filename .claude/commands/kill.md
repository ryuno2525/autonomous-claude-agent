# Kill an experiment with proper post-mortem

Shut down a product/experiment that isn't working and document why.

## Arguments
- $ARGUMENTS: Product name to kill (e.g., "memecraft")

## Steps

### 1. Gather data
- Check Stripe for any checkout sessions or revenue from this product
- Check Vercel analytics (if available) for traffic
- Check Google Search Console for impressions/clicks
- Review the product's CLAUDE.md for context

### 2. Write post-mortem in the product's CLAUDE.md
Update Status to `killed` and add:
```
## Post-Mortem (YYYY-MM-DD)
- **Hypothesis**: What we expected
- **Result**: What actually happened (with numbers)
- **Why it failed**: Root cause analysis
- **What we learned**: Transferable lessons
- **Time invested**: Approximate hours
```

### 3. Update GitHub Issue
Close the experiment's GitHub issue with the post-mortem summary.

### 4. Update root CLAUDE.md
- Add any new heuristics to the Learned Heuristics table
- Remove the product from any "active experiments" lists if applicable

### 5. Redirect traffic (optional)
- If the product has any SEO traffic, add a redirect to a related live product
- Update cross-links in other products that pointed to this one

## Rules
- Do NOT delete the code — it might be reusable
- Be brutally honest in the post-mortem
- Extract at least ONE transferable lesson
