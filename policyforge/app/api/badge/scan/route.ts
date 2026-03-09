import { NextRequest, NextResponse } from "next/server";

const CHECKS = [
  { name: "Data Collection", keywords: ["collect", "information we collect", "data we collect", "personal data", "personal information"], weight: 15 },
  { name: "Purpose of Use", keywords: ["how we use", "use your", "purpose", "we use the information"], weight: 12 },
  { name: "Cookies", keywords: ["cookie", "cookies", "tracking technolog", "web beacon"], weight: 10 },
  { name: "Third-Party Sharing", keywords: ["third party", "third-party", "share your", "disclose", "service provider"], weight: 12 },
  { name: "User Rights", keywords: ["your rights", "right to access", "right to delete", "opt-out", "opt out"], weight: 12 },
  { name: "GDPR", keywords: ["gdpr", "general data protection", "data protection officer", "legal basis"], weight: 10 },
  { name: "CCPA", keywords: ["ccpa", "california consumer", "california privacy", "do not sell"], weight: 8 },
  { name: "Data Retention", keywords: ["retention", "how long", "retain", "store your data"], weight: 8 },
  { name: "Security", keywords: ["security", "protect", "encryption", "safeguard"], weight: 5 },
  { name: "Contact Info", keywords: ["contact us", "contact information", "reach us", "email us"], weight: 5 },
];

function analyzePolicy(text: string) {
  const lower = text.toLowerCase();
  const checks = CHECKS.map((check) => ({
    name: check.name,
    found: check.keywords.some((kw) => lower.includes(kw)),
    weight: check.weight,
  }));
  const maxScore = checks.reduce((sum, s) => sum + s.weight, 0);
  const earned = checks.filter((s) => s.found).reduce((sum, s) => sum + s.weight, 0);
  const score = Math.round((earned / maxScore) * 100);
  const grade = score >= 90 ? "A" : score >= 70 ? "B" : score >= 50 ? "C" : score >= 30 ? "D" : "F";
  return { score, grade };
}

function generateSvg(domain: string, score: number, grade: string) {
  const color = score >= 80 ? "#22c55e" : score >= 50 ? "#eab308" : "#ef4444";
  const bgColor = score >= 80 ? "#052e16" : score >= 50 ? "#422006" : "#450a0a";
  const borderColor = score >= 80 ? "#166534" : score >= 50 ? "#854d0e" : "#991b1b";

  return `<svg xmlns="http://www.w3.org/2000/svg" width="240" height="20" viewBox="0 0 240 20">
  <rect width="130" height="20" rx="3" fill="#555"/>
  <rect x="130" width="110" height="20" rx="3" fill="${bgColor}" stroke="${borderColor}" stroke-width="0.5"/>
  <rect width="240" height="20" rx="3" fill="url(#gradient)" opacity="0"/>
  <text x="6" y="14" font-family="Verdana,Geneva,sans-serif" font-size="11" fill="#fff">privacy compliance</text>
  <text x="136" y="14" font-family="Verdana,Geneva,sans-serif" font-size="11" fill="${color}">${grade} ${score}% | ${domain}</text>
</svg>`;
}

function generateErrorSvg(domain: string, message: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="240" height="20" viewBox="0 0 240 20">
  <rect width="130" height="20" rx="3" fill="#555"/>
  <rect x="130" width="110" height="20" rx="3" fill="#450a0a"/>
  <text x="6" y="14" font-family="Verdana,Geneva,sans-serif" font-size="11" fill="#fff">privacy compliance</text>
  <text x="136" y="14" font-family="Verdana,Geneva,sans-serif" font-size="11" fill="#ef4444">${message}</text>
</svg>`;
}

export async function GET(req: NextRequest) {
  const domain = req.nextUrl.searchParams.get("domain");
  if (!domain) {
    return new NextResponse(
      generateErrorSvg("?", "missing ?domain="),
      { headers: { "Content-Type": "image/svg+xml", "Cache-Control": "no-cache" } }
    );
  }

  const normalizedUrl = domain.startsWith("http") ? domain : `https://${domain}`;

  try {
    const scanRes = await fetch(`${req.nextUrl.origin}/api/scan`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: normalizedUrl }),
    });

    const scanData = await scanRes.json();
    const hostname = new URL(normalizedUrl).hostname.replace("www.", "");

    if (!scanData.policyText) {
      return new NextResponse(
        generateErrorSvg(hostname, "no policy found"),
        {
          headers: {
            "Content-Type": "image/svg+xml",
            "Cache-Control": "public, max-age=86400",
          },
        }
      );
    }

    const { score, grade } = analyzePolicy(scanData.policyText);

    return new NextResponse(
      generateSvg(hostname, score, grade),
      {
        headers: {
          "Content-Type": "image/svg+xml",
          "Cache-Control": "public, max-age=86400",
        },
      }
    );
  } catch {
    return new NextResponse(
      generateErrorSvg(domain, "scan failed"),
      {
        headers: {
          "Content-Type": "image/svg+xml",
          "Cache-Control": "no-cache",
        },
      }
    );
  }
}
