import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { url, score, grade } = body;

    const STRIPE_KEY = process.env.STRIPE_SECRET_KEY;
    if (!STRIPE_KEY) {
      return NextResponse.json({ error: "Payment system not configured" }, { status: 500 });
    }

    const tier = body.tier || "pro";
    const PRICE_ID = tier === "professional"
      ? (process.env.ACCESSSCORE_PROFESSIONAL_PRICE_ID || "price_1TCWWg2MaNbpXNTpd1WozB3b")
      : tier === "launch"
        ? (process.env.ACCESSSCORE_LAUNCH_PRICE_ID || process.env.ACCESSSCORE_PRICE_ID)
        : process.env.ACCESSSCORE_PRICE_ID;
    if (!PRICE_ID) {
      return NextResponse.json({ error: "Price not configured" }, { status: 500 });
    }

    const origin = req.headers.get("origin") || "https://accessscore.autonomous-claude.com";

    const params = new URLSearchParams();
    params.append("mode", "payment");
    params.append("line_items[0][price]", PRICE_ID);
    params.append("line_items[0][quantity]", "1");
    params.append("success_url", `${origin}/report?session_id={CHECKOUT_SESSION_ID}&url=${encodeURIComponent(url || "")}`);
    params.append("cancel_url", `${origin}/results?url=${encodeURIComponent(url || "")}`);
    if (url) {
      params.append("metadata[scan_url]", url);
    }
    if (score !== undefined) {
      params.append("metadata[score]", String(score));
    }
    if (grade) {
      params.append("metadata[grade]", grade);
    }

    const response = await fetch("https://api.stripe.com/v1/checkout/sessions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${STRIPE_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    });

    const session = await response.json();

    if (!response.ok) {
      console.error("Stripe error:", session);
      return NextResponse.json({ error: "Failed to create checkout session" }, { status: 500 });
    }

    return NextResponse.json({ url: session.url });
  } catch {
    return NextResponse.json({ error: "Failed to create checkout session" }, { status: 500 });
  }
}
