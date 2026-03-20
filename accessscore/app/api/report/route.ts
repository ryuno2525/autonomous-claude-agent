import { NextRequest, NextResponse } from "next/server";
import { runScan, ScanResult } from "@/lib/scanner";

export async function GET(req: NextRequest) {
  const sessionId = req.nextUrl.searchParams.get("session_id");
  const url = req.nextUrl.searchParams.get("url");

  if (!sessionId) {
    return NextResponse.json({ error: "session_id is required" }, { status: 400 });
  }

  const STRIPE_KEY = process.env.STRIPE_SECRET_KEY;
  if (!STRIPE_KEY) {
    return NextResponse.json({ error: "Payment system not configured" }, { status: 500 });
  }

  // Verify payment with Stripe
  try {
    const sessionRes = await fetch(
      `https://api.stripe.com/v1/checkout/sessions/${sessionId}`,
      {
        headers: { Authorization: `Bearer ${STRIPE_KEY}` },
      }
    );

    if (!sessionRes.ok) {
      return NextResponse.json({ error: "Invalid session" }, { status: 400 });
    }

    const session = await sessionRes.json();

    if (session.payment_status !== "paid") {
      return NextResponse.json({ error: "Payment not completed" }, { status: 402 });
    }

    // Get the URL from metadata or query param
    const scanUrl = session.metadata?.scan_url || url;
    if (!scanUrl) {
      return NextResponse.json({ error: "No URL associated with this report" }, { status: 400 });
    }

    // Re-scan the site for fresh results
    const normalizedUrl = scanUrl.startsWith("http") ? scanUrl : `https://${scanUrl}`;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);

    const fetchRes = await fetch(normalizedUrl, {
      signal: controller.signal,
      headers: { "User-Agent": "AccessScore/1.0", Accept: "text/html" },
      redirect: "follow",
    });
    clearTimeout(timeout);

    if (!fetchRes.ok) {
      return NextResponse.json({ error: "Could not fetch the website for report generation" }, { status: 422 });
    }

    const html = (await fetchRes.text()).slice(0, 500000);
    const scanResult = runScan(html, normalizedUrl);

    // Return full report data (client renders as downloadable report)
    return NextResponse.json({
      paid: true,
      report: scanResult,
      generatedAt: new Date().toISOString(),
    });
  } catch {
    return NextResponse.json({ error: "Failed to generate report" }, { status: 500 });
  }
}
