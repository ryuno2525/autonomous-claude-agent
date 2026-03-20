import { NextRequest, NextResponse } from "next/server";
import { runScan } from "@/lib/scanner";

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get("url");

  if (!url) {
    return new NextResponse(generateBadgeSvg("?", "N/A", "#666"), {
      headers: { "Content-Type": "image/svg+xml", "Cache-Control": "public, max-age=3600" },
    });
  }

  try {
    const normalizedUrl = url.startsWith("http") ? url : `https://${url}`;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 6000);

    const res = await fetch(normalizedUrl, {
      signal: controller.signal,
      headers: { "User-Agent": "AccessScore-Badge/1.0", Accept: "text/html" },
      redirect: "follow",
    });
    clearTimeout(timeout);

    if (!res.ok) {
      return new NextResponse(generateBadgeSvg("?", "Error", "#666"), {
        headers: { "Content-Type": "image/svg+xml", "Cache-Control": "public, max-age=300" },
      });
    }

    const html = (await res.text()).slice(0, 500000);
    const result = runScan(html, normalizedUrl);

    const colors: Record<string, string> = {
      A: "#22c55e",
      B: "#84cc16",
      C: "#f59e0b",
      D: "#ef4444",
      F: "#dc2626",
    };

    return new NextResponse(
      generateBadgeSvg(String(result.score), result.grade, colors[result.grade] || "#666"),
      {
        headers: {
          "Content-Type": "image/svg+xml",
          "Cache-Control": "public, max-age=3600",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  } catch {
    return new NextResponse(generateBadgeSvg("?", "Error", "#666"), {
      headers: { "Content-Type": "image/svg+xml", "Cache-Control": "public, max-age=300" },
    });
  }
}

function generateBadgeSvg(score: string, grade: string, color: string): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="28" viewBox="0 0 160 28">
  <rect width="100" height="28" rx="4" fill="#1a1a2e"/>
  <rect x="100" width="60" height="28" rx="4" fill="${color}"/>
  <rect x="97" width="6" height="28" fill="#1a1a2e"/>
  <rect x="100" width="3" height="28" fill="${color}"/>
  <text x="50" y="18" text-anchor="middle" fill="#fff" font-family="system-ui,sans-serif" font-size="12" font-weight="600">AccessScore</text>
  <text x="130" y="18" text-anchor="middle" fill="#fff" font-family="system-ui,sans-serif" font-size="12" font-weight="700">${grade} ${score}</text>
</svg>`;
}
