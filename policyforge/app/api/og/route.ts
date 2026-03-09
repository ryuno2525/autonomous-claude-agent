import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const score = Math.max(0, Math.min(100, parseInt(searchParams.get("score") || "0")));
  const domain = searchParams.get("domain") || "Unknown";

  const color = score >= 80 ? "#22c55e" : score >= 50 ? "#eab308" : "#ef4444";
  const grade =
    score >= 90
      ? "Excellent"
      : score >= 70
      ? "Good"
      : score >= 50
      ? "Fair"
      : score >= 30
      ? "Poor"
      : "Critical";
  const bgGrad1 = "#0f0f0f";
  const bgGrad2 = "#1a1a2e";

  const arcLength = (score / 100) * 251.2; // 2*PI*40

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${bgGrad1}"/>
      <stop offset="100%" stop-color="${bgGrad2}"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>

  <!-- Score Ring -->
  <circle cx="300" cy="300" r="120" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="16"/>
  <circle cx="300" cy="300" r="120" fill="none" stroke="${color}" stroke-width="16"
    stroke-dasharray="${(score / 100) * 753.98} 753.98"
    stroke-linecap="round" transform="rotate(-90 300 300)"/>
  <text x="300" y="280" font-family="Arial,sans-serif" font-size="72" font-weight="bold" fill="white" text-anchor="middle">${score}</text>
  <text x="300" y="320" font-family="Arial,sans-serif" font-size="24" fill="${color}" text-anchor="middle">${grade}</text>

  <!-- Domain -->
  <text x="620" y="200" font-family="Arial,sans-serif" font-size="36" fill="rgba(255,255,255,0.5)" text-anchor="start">${domain.length > 35 ? domain.slice(0, 35) + "..." : domain}</text>

  <!-- Title -->
  <text x="620" y="270" font-family="Arial,sans-serif" font-size="48" font-weight="bold" fill="white" text-anchor="start">Privacy Compliance</text>
  <text x="620" y="330" font-family="Arial,sans-serif" font-size="48" font-weight="bold" fill="white" text-anchor="start">Score: ${score}/100</text>

  <!-- CTA -->
  <text x="620" y="400" font-family="Arial,sans-serif" font-size="24" fill="rgba(255,255,255,0.4)" text-anchor="start">Scan your website free at PolicyForge</text>

  <!-- Branding -->
  <rect x="40" y="550" width="40" height="40" rx="8" fill="${color}"/>
  <text x="55" y="580" font-family="Arial,sans-serif" font-size="22" font-weight="bold" fill="white" text-anchor="middle">P</text>
  <text x="95" y="580" font-family="Arial,sans-serif" font-size="22" font-weight="bold" fill="white">PolicyForge</text>
  <text x="1160" y="580" font-family="Arial,sans-serif" font-size="18" fill="rgba(255,255,255,0.3)" text-anchor="end">policyforge-one.vercel.app/check</text>
</svg>`;

  return new NextResponse(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
