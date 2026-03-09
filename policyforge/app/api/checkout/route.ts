import { NextResponse } from "next/server";
import Stripe from "stripe";

export const dynamic = "force-dynamic";

const PRICES: Record<string, string | undefined> = {
  pro: process.env.POLICYFORGE_PRICE_ID,
  starter: process.env.POLICYFORGE_STARTER_PRICE_ID,
};

export async function POST(request: Request) {
  try {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) {
      return NextResponse.json(
        { error: "Stripe is not configured" },
        { status: 500 }
      );
    }

    let tier = "pro";
    try {
      const body = await request.json();
      if (body.tier === "starter") tier = "starter";
    } catch {
      // default to pro if no body
    }

    const priceId = PRICES[tier];
    if (!priceId) {
      return NextResponse.json(
        { error: "Price not configured" },
        { status: 500 }
      );
    }

    const stripe = new Stripe(key);
    const { origin } = new URL(request.url);

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/?canceled=true`,
      metadata: {
        product: `policyforge_${tier}`,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("Checkout error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
