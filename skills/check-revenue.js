#!/usr/bin/env node
// Check Stripe revenue progress toward $100K goal
// Usage: node skills/check-revenue.js

const GOAL = 100_000_00; // $100,000 in cents

async function checkRevenue() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    console.error("ERROR: STRIPE_SECRET_KEY not set");
    process.exit(1);
  }

  const headers = {
    Authorization: `Bearer ${key}`,
    "Content-Type": "application/x-www-form-urlencoded",
  };

  // Get balance
  const balRes = await fetch("https://api.stripe.com/v1/balance", { headers });
  const balance = await balRes.json();

  // Get total charges (successful payments)
  const chargesRes = await fetch(
    "https://api.stripe.com/v1/charges?limit=100&status=succeeded" +
      "&expand[]=data.balance_transaction",
    { headers }
  );
  const charges = await chargesRes.json();

  // Get all-time revenue from payment intents
  const piRes = await fetch(
    "https://api.stripe.com/v1/payment_intents?limit=100",
    { headers }
  );
  const paymentIntents = await piRes.json();

  const totalRevenue = (charges.data || []).reduce(
    (sum, c) => sum + c.amount,
    0
  );
  const successfulPayments = (charges.data || []).filter(
    (c) => c.status === "succeeded"
  ).length;
  const available = (balance.available || []).reduce(
    (sum, b) => sum + b.amount,
    0
  );
  const pending = (balance.pending || []).reduce(
    (sum, b) => sum + b.amount,
    0
  );

  const pct = ((totalRevenue / GOAL) * 100).toFixed(4);
  const remaining = (GOAL - totalRevenue) / 100;

  console.log("=== STRIPE REVENUE CHECK ===");
  console.log(`Goal:              $${(GOAL / 100).toLocaleString()}`);
  console.log(`Total Revenue:     $${(totalRevenue / 100).toFixed(2)}`);
  console.log(`Progress:          ${pct}%`);
  console.log(`Remaining:         $${remaining.toLocaleString()}`);
  console.log(`Successful Charges: ${successfulPayments}`);
  console.log(`Available Balance: $${(available / 100).toFixed(2)}`);
  console.log(`Pending Balance:   $${(pending / 100).toFixed(2)}`);
  console.log("===========================");

  if (totalRevenue >= GOAL) {
    console.log("\n🎯 GOAL ACHIEVED! $100,000 reached!");
  } else {
    console.log(`\n$${remaining.toLocaleString()} to go. Keep shipping.`);
  }

  // Output as JSON for programmatic use
  return {
    totalRevenue: totalRevenue / 100,
    goal: GOAL / 100,
    pct: parseFloat(pct),
    remaining,
    successfulPayments,
    available: available / 100,
    pending: pending / 100,
    goalAchieved: totalRevenue >= GOAL,
  };
}

checkRevenue().catch(console.error);
