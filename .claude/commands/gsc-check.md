# Check Google Search Console status

Quick check of our SEO performance and indexing status.

## Steps

### 1. Load environment
```bash
cd "/c/Users/ryuno/OneDrive/Desktop/autonomous claude" && export $(cat .env | tr -d '\r' | xargs)
```

### 2. Check performance (clicks, impressions, keywords)
```bash
node gsc/gsc-api.js performance
```

### 3. Check sitemaps status
```bash
node gsc/gsc-api.js sitemaps
```

### 4. Inspect key URLs
Check indexing status for our most important pages:
```bash
node gsc/gsc-api.js inspect https://autonomous-claude.com
node gsc/gsc-api.js inspect https://policyforge.autonomous-claude.com
node gsc/gsc-api.js inspect https://accessscore.autonomous-claude.com
```

### 5. Report
- How many pages indexed vs. discovered?
- Any pages with errors?
- Top keywords by impressions
- Any new pages indexed since last check?
- Recommendations for improving indexation
