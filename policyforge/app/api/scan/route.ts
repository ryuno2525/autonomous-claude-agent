import { NextRequest, NextResponse } from "next/server";

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

function extractPrivacyLinks(html: string, baseUrl: string): string[] {
  const linkRegex = /<a[^>]+href=["']([^"']+)["'][^>]*>(.*?)<\/a>/gi;
  const privacyKeywords = /privacy|datenschutz|privacidad|politique.*confidentialit/i;
  const links: string[] = [];
  let match;

  while ((match = linkRegex.exec(html)) !== null) {
    const href = match[1];
    const text = match[2].replace(/<[^>]*>/g, "");
    if (privacyKeywords.test(text) || privacyKeywords.test(href)) {
      try {
        const absolute = new URL(href, baseUrl).toString();
        if (!links.includes(absolute)) links.push(absolute);
      } catch {}
    }
  }
  return links;
}

function extractTextContent(html: string): string {
  return html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<nav[^>]*>[\s\S]*?<\/nav>/gi, "")
    .replace(/<header[^>]*>[\s\S]*?<\/header>/gi, "")
    .replace(/<footer[^>]*>[\s\S]*?<\/footer>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

async function fetchPage(url: string): Promise<string | null> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        "User-Agent": "PolicyForge-Scanner/1.0 (privacy policy compliance checker)",
        Accept: "text/html,application/xhtml+xml",
      },
      redirect: "follow",
    });
    clearTimeout(timeout);
    if (!res.ok) return null;
    const contentType = res.headers.get("content-type") || "";
    if (!contentType.includes("text/html") && !contentType.includes("text/plain"))
      return null;
    const text = await res.text();
    return text.slice(0, 500000); // Limit to 500KB
  } catch {
    return null;
  }
}

function hasPrivacyPolicyContent(text: string): boolean {
  const lower = text.toLowerCase();
  const signals = [
    "privacy policy",
    "information we collect",
    "personal data",
    "personal information",
    "data protection",
    "cookie policy",
    "we collect",
    "your rights",
  ];
  const matches = signals.filter((s) => lower.includes(s));
  return matches.length >= 2;
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

    // Step 1: Fetch the main page
    const mainHtml = await fetchPage(normalizedUrl);
    if (!mainHtml) {
      return NextResponse.json(
        { error: "Could not fetch the website. Make sure the URL is correct and the site is publicly accessible." },
        { status: 422 }
      );
    }

    // Step 2: Check if the main page IS a privacy policy
    const mainText = extractTextContent(mainHtml);
    if (hasPrivacyPolicyContent(mainText) && mainText.length > 500) {
      return NextResponse.json({
        policyText: mainText.slice(0, 50000),
        source: normalizedUrl,
        method: "direct",
      });
    }

    // Step 3: Look for privacy policy links on the page
    const privacyLinks = extractPrivacyLinks(mainHtml, normalizedUrl);

    // Also check common privacy policy paths
    const parsed = new URL(normalizedUrl);
    const commonPaths = [
      "/privacy",
      "/privacy-policy",
      "/privacy.html",
      "/legal/privacy",
      "/policies/privacy-policy",
      "/legal",
      "/privacy-notice",
      "/privacypolicy",
      "/data-privacy",
      "/policy/privacy",
      "/about/privacy",
      "/legal/privacy-policy",
      "/terms/privacy",
      "/site/privacy",
      "/en/privacy",
      "/company/privacy",
    ];
    for (const path of commonPaths) {
      const candidate = `${parsed.origin}${path}`;
      if (!privacyLinks.includes(candidate)) {
        privacyLinks.push(candidate);
      }
    }

    // Also try www. variant if the original URL doesn't have it
    if (!parsed.hostname.startsWith("www.")) {
      const wwwPaths = ["/privacy", "/privacy-policy", "/legal/privacy"];
      for (const path of wwwPaths) {
        const candidate = `${parsed.protocol}//www.${parsed.hostname}${path}`;
        if (!privacyLinks.includes(candidate)) {
          privacyLinks.push(candidate);
        }
      }
    }

    // Step 4: Try to fetch and analyze privacy policy pages
    for (const link of privacyLinks.slice(0, 12)) {
      if (isBlockedUrl(link)) continue;
      const policyHtml = await fetchPage(link);
      if (!policyHtml) continue;
      const policyText = extractTextContent(policyHtml);
      if (hasPrivacyPolicyContent(policyText) && policyText.length > 200) {
        return NextResponse.json({
          policyText: policyText.slice(0, 50000),
          source: link,
          method: "linked",
        });
      }
    }

    // Step 5: No privacy policy found
    return NextResponse.json({
      policyText: null,
      source: null,
      method: "not_found",
      message: "No privacy policy found on this website. This could be a compliance risk.",
    });
  } catch {
    return NextResponse.json(
      { error: "An error occurred while scanning. Please try again." },
      { status: 500 }
    );
  }
}
