import { NextRequest, NextResponse } from "next/server";
import { runScan } from "@/lib/scanner";

const BLOCKED_PATTERNS = [
  /^(10|127|172\.(1[6-9]|2\d|3[01])|192\.168)\./,
  /localhost/i,
  /\.local$/i,
  /^0\./,
];

function isBlockedUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    if (!["http:", "https:"].includes(parsed.protocol)) return true;
    if (BLOCKED_PATTERNS.some((p) => p.test(parsed.hostname))) return true;
    return false;
  } catch {
    return true;
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { url } = body;

    if (!url || typeof url !== "string") {
      return NextResponse.json({ error: "URL is required" }, { status: 400 });
    }

    const normalizedUrl = url.startsWith("http") ? url : `https://${url}`;

    if (isBlockedUrl(normalizedUrl)) {
      return NextResponse.json({ error: "Invalid or blocked URL" }, { status: 400 });
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);

    let html: string;
    try {
      const res = await fetch(normalizedUrl, {
        signal: controller.signal,
        headers: {
          "User-Agent": "AccessScore/1.0 (ADA accessibility checker)",
          Accept: "text/html,application/xhtml+xml",
        },
        redirect: "follow",
      });
      clearTimeout(timeout);

      if (!res.ok) {
        return NextResponse.json(
          { error: `Website returned status ${res.status}. Make sure the URL is correct and publicly accessible.` },
          { status: 422 }
        );
      }

      const contentType = res.headers.get("content-type") || "";
      if (!contentType.includes("text/html") && !contentType.includes("text/plain")) {
        return NextResponse.json({ error: "URL did not return an HTML page." }, { status: 422 });
      }

      html = await res.text();
      html = html.slice(0, 500000); // 500KB limit
    } catch (e) {
      clearTimeout(timeout);
      if (e instanceof DOMException && e.name === "AbortError") {
        return NextResponse.json({ error: "Request timed out. The website took too long to respond." }, { status: 422 });
      }
      return NextResponse.json({ error: "Could not fetch the website. Check the URL and try again." }, { status: 422 });
    }

    const result = runScan(html, normalizedUrl);

    return NextResponse.json(result, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST",
      },
    });
  } catch {
    return NextResponse.json({ error: "An error occurred while scanning. Please try again." }, { status: 500 });
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
