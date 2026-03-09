import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const score = parseInt(searchParams.get("score") || "0");
  const grade = searchParams.get("grade") || "Unknown";

  const clampedScore = Math.max(0, Math.min(100, score));

  const color =
    clampedScore >= 80 ? "#22c55e" : clampedScore >= 50 ? "#eab308" : "#ef4444";
  const bgColor =
    clampedScore >= 80 ? "#052e16" : clampedScore >= 50 ? "#422006" : "#450a0a";
  const borderColor =
    clampedScore >= 80 ? "#166534" : clampedScore >= 50 ? "#854d0e" : "#991b1b";

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="220" height="40" viewBox="0 0 220 40">
  <rect width="220" height="40" rx="6" fill="${bgColor}" stroke="${borderColor}" stroke-width="1"/>
  <circle cx="20" cy="20" r="12" fill="none" stroke="${color}" stroke-width="2.5"/>
  <text x="20" y="24" font-family="Arial,sans-serif" font-size="10" font-weight="bold" fill="${color}" text-anchor="middle">${clampedScore}</text>
  <text x="40" y="17" font-family="Arial,sans-serif" font-size="11" font-weight="bold" fill="${color}">Privacy: ${grade}</text>
  <text x="40" y="30" font-family="Arial,sans-serif" font-size="9" fill="#9ca3af">Verified by PolicyForge</text>
</svg>`;

  return new NextResponse(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
