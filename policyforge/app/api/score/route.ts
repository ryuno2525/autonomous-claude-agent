import { NextRequest, NextResponse } from "next/server";

const CHECKS = [
  { name: "Data Collection Disclosure", keywords: ["collect", "information we collect", "data we collect", "personal data", "personal information", "personally identifiable"], weight: 15 },
  { name: "Purpose of Data Use", keywords: ["how we use", "use your", "purpose", "we use the information", "we use your data"], weight: 12 },
  { name: "Cookie Policy", keywords: ["cookie", "cookies", "tracking technolog", "web beacon", "pixel"], weight: 10 },
  { name: "Third-Party Sharing", keywords: ["third party", "third-party", "share your", "disclose", "service provider", "we may share"], weight: 12 },
  { name: "User Rights", keywords: ["your rights", "right to access", "right to delete", "right to erasure", "opt-out", "opt out", "request deletion"], weight: 12 },
  { name: "GDPR Compliance", keywords: ["gdpr", "general data protection", "data protection officer", "legal basis", "legitimate interest", "data portability"], weight: 10 },
  { name: "CCPA Compliance", keywords: ["ccpa", "california consumer", "california privacy", "do not sell", "shine the light"], weight: 8 },
  { name: "Data Retention", keywords: ["retention", "how long", "retain", "store your data", "keep your"], weight: 8 },
  { name: "Security Measures", keywords: ["security", "protect", "encryption", "safeguard", "secure"], weight: 5 },
  { name: "Contact Information", keywords: ["contact us", "contact information", "reach us", "email us", "write to us"], weight: 5 },
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
  return { score, grade, checks, passed: checks.filter(s => s.found).length, total: checks.length };
}

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get("url");
  if (!url) {
    return NextResponse.json(
      { error: "Missing ?url= parameter", usage: "GET /api/score?url=example.com" },
      { status: 400 }
    );
  }

  const normalizedUrl = url.startsWith("http") ? url : `https://${url}`;

  try {
    // Call our own scan endpoint internally
    const scanRes = await fetch(`${req.nextUrl.origin}/api/scan`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: normalizedUrl }),
    });

    const scanData = await scanRes.json();

    if (!scanData.policyText) {
      const domain = new URL(normalizedUrl).hostname;
      return NextResponse.json({
        domain,
        url: normalizedUrl,
        policyFound: false,
        score: 0,
        grade: "F",
        message: "No privacy policy found. This is a significant compliance risk.",
        scanUrl: `https://policyforge.autonomous-claude.com/check`,
        fixUrl: `https://policyforge.autonomous-claude.com`,
      }, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Cache-Control": "public, max-age=3600",
        },
      });
    }

    const analysis = analyzePolicy(scanData.policyText);
    const domain = new URL(normalizedUrl).hostname;

    return NextResponse.json({
      domain,
      url: normalizedUrl,
      policyFound: true,
      policySource: scanData.source,
      score: analysis.score,
      grade: analysis.grade,
      passed: analysis.passed,
      total: analysis.total,
      checks: analysis.checks.map(c => ({ name: c.name, passed: c.found })),
      scanUrl: `https://policyforge.autonomous-claude.com/check`,
      fixUrl: `https://policyforge.autonomous-claude.com`,
    }, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to scan website" },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
