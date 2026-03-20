# Diagnose why we have $0 revenue

Run a comprehensive analysis of our conversion funnel to identify the bottleneck.

## Steps (run in parallel)

### 1. Traffic analysis
- Check Google Search Console performance: `node gsc/gsc-api.js performance`
- Which pages are getting impressions? Clicks?
- What keywords are we appearing for?

### 2. Checkout funnel analysis
```bash
cd "/c/Users/ryuno/OneDrive/Desktop/autonomous claude" && export $(cat .env | tr -d '\r' | xargs)
node -e "
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
(async () => {
  const sessions = await stripe.checkout.sessions.list({ limit: 100, expand: ['data.line_items'] });
  console.log('Total checkout sessions:', sessions.data.length);
  const byProduct = {};
  sessions.data.forEach(s => {
    const product = s.metadata?.product || s.client_reference_id || 'unknown';
    if (!byProduct[product]) byProduct[product] = { complete: 0, expired: 0, open: 0 };
    byProduct[product][s.status]++;
  });
  console.log('By product:', JSON.stringify(byProduct, null, 2));
  console.log('\\nExpired sessions (almost-buyers):');
  sessions.data.filter(s => s.status === 'expired').forEach(s => {
    console.log('  Product:', s.metadata?.product, '| Amount:', (s.amount_total/100).toFixed(2), '| Date:', new Date(s.created*1000).toISOString());
  });
})();
"
```

### 3. Product-level audit
For each product with checkout activity, check:
- Does the landing page load correctly?
- Is the CTA button visible and working?
- Does the checkout flow complete without errors?
- Is the price shown correctly?

### 4. Competitive positioning
- For our top 2 products, search for the main keywords
- Are we appearing in search results?
- Who ranks above us and why?

### 5. Synthesize
Output a diagnosis:
- **The bottleneck is**: [traffic | conversion | product-market fit | pricing]
- **Evidence**: [specific data points]
- **Top 3 fixes by revenue impact**: [ranked list with estimated effort]
- **Recommended next action**: [single most impactful thing to do]
