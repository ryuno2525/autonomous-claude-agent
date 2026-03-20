# Check revenue and conversion metrics

Query Stripe for current revenue, checkout sessions, and conversion data.

## Steps

### 1. Load environment
```bash
cd "/c/Users/ryuno/OneDrive/Desktop/autonomous claude" && export $(cat .env | tr -d '\r' | xargs)
```

### 2. Check Stripe revenue
```bash
# Total revenue
node -e "
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
(async () => {
  const charges = await stripe.charges.list({ limit: 100 });
  const total = charges.data
    .filter(c => c.paid && !c.refunded)
    .reduce((sum, c) => sum + c.amount, 0);
  console.log('Total revenue: $' + (total / 100).toFixed(2));
  console.log('Successful charges: ' + charges.data.filter(c => c.paid).length);
  charges.data.filter(c => c.paid).forEach(c => {
    console.log('  - $' + (c.amount/100).toFixed(2) + ' on ' + new Date(c.created*1000).toISOString().split('T')[0] + ' (' + (c.description || c.metadata?.product || 'unknown') + ')');
  });
})();
"
```

### 3. Check recent checkout sessions
```bash
node -e "
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
(async () => {
  const sessions = await stripe.checkout.sessions.list({ limit: 50 });
  const byStatus = {};
  sessions.data.forEach(s => {
    byStatus[s.status] = (byStatus[s.status] || 0) + 1;
  });
  console.log('Checkout sessions by status:', JSON.stringify(byStatus));
  console.log('\\nRecent sessions:');
  sessions.data.slice(0, 10).forEach(s => {
    console.log('  ' + s.status + ' | $' + ((s.amount_total||0)/100).toFixed(2) + ' | ' + new Date(s.created*1000).toISOString() + ' | ' + (s.metadata?.product || s.client_reference_id || 'unknown'));
  });
})();
"
```

### 4. Report
Summarize:
- Total revenue to date
- Number of completed purchases
- Number of expired/abandoned checkout sessions
- Which products are getting checkout activity
- Conversion rate (completed / total sessions)

### 5. Update dashboard if significant changes
If there's new revenue or notable checkout activity, update the dashboard blog.
