#!/usr/bin/env node
// Batch scan websites for privacy policy compliance
// Usage: node skills/batch-scan.js

const https = require("https");
const http = require("http");

const CHECKS = [
  { name: "Data Collection", keywords: ["collect", "information we collect", "data we collect", "personal data", "personal information"], weight: 15 },
  { name: "Purpose of Use", keywords: ["how we use", "use your", "purpose", "we use the information"], weight: 12 },
  { name: "Cookie Policy", keywords: ["cookie", "cookies", "tracking technolog", "web beacon"], weight: 10 },
  { name: "Third-Party Sharing", keywords: ["third party", "third-party", "share your", "disclose", "service provider"], weight: 12 },
  { name: "User Rights", keywords: ["your rights", "right to access", "right to delete", "opt-out", "opt out"], weight: 12 },
  { name: "GDPR Compliance", keywords: ["gdpr", "general data protection", "data protection officer", "legal basis"], weight: 10 },
  { name: "CCPA Compliance", keywords: ["ccpa", "california consumer", "california privacy", "do not sell"], weight: 8 },
  { name: "Data Retention", keywords: ["retention", "how long", "retain", "store your data"], weight: 8 },
  { name: "Security Measures", keywords: ["security", "protect", "encryption", "safeguard"], weight: 5 },
  { name: "Contact Info", keywords: ["contact us", "contact information", "reach us", "email us"], weight: 5 },
];

function analyzePolicy(text) {
  const lower = text.toLowerCase();
  const sections = CHECKS.map((check) => ({
    name: check.name,
    found: check.keywords.some((kw) => lower.includes(kw)),
    weight: check.weight,
  }));
  const maxScore = sections.reduce((sum, s) => sum + s.weight, 0);
  const earned = sections.filter((s) => s.found).reduce((sum, s) => sum + s.weight, 0);
  const score = Math.round((earned / maxScore) * 100);
  const grade = score >= 90 ? "A" : score >= 70 ? "B" : score >= 50 ? "C" : score >= 30 ? "D" : "F";
  return { score, grade, sections, passed: sections.filter(s => s.found).length, total: sections.length };
}

function scanSite(url) {
  return new Promise((resolve) => {
    const apiUrl = `https://policyforge-one.vercel.app/api/scan`;
    const body = JSON.stringify({ url });
    const options = {
      hostname: "policyforge-one.vercel.app",
      path: "/api/scan",
      method: "POST",
      headers: { "Content-Type": "application/json", "Content-Length": Buffer.byteLength(body) },
    };
    const req = https.request(options, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        try {
          const result = JSON.parse(data);
          if (result.policyText) {
            const analysis = analyzePolicy(result.policyText);
            resolve({ url, status: "found", ...analysis });
          } else if (result.error) {
            resolve({ url, status: "error", error: result.error });
          } else {
            resolve({ url, status: "no-policy" });
          }
        } catch {
          resolve({ url, status: "error", error: "parse error" });
        }
      });
    });
    req.on("error", () => resolve({ url, status: "error", error: "network error" }));
    req.setTimeout(15000, () => { req.destroy(); resolve({ url, status: "timeout" }); });
    req.write(body);
    req.end();
  });
}

// Sites to scan: mix of indie hacker products, popular startups, smaller sites
const SITES = [
  "https://vercel.com",
  "https://stripe.com",
  "https://github.com",
  "https://notion.so",
  "https://linear.app",
  "https://cal.com",
  "https://dub.co",
  "https://resend.com",
  "https://planetscale.com",
  "https://railway.app",
  "https://render.com",
  "https://supabase.com",
  "https://clerk.com",
  "https://convex.dev",
  "https://turso.tech",
  "https://upstash.com",
  "https://neon.tech",
  "https://arcjet.com",
  "https://unkey.dev",
  "https://trigger.dev",
];

async function main() {
  console.log("Scanning 20 popular dev/startup sites for privacy policy compliance...\n");

  const results = [];
  for (const site of SITES) {
    const domain = new URL(site).hostname;
    process.stdout.write(`Scanning ${domain}... `);
    const result = await scanSite(site);
    if (result.status === "found") {
      console.log(`Score: ${result.score}/100 (${result.grade}) - ${result.passed}/${result.total} checks`);
    } else {
      console.log(`${result.status}${result.error ? ': ' + result.error : ''}`);
    }
    results.push({ domain, ...result });
    // Small delay to be respectful
    await new Promise(r => setTimeout(r, 500));
  }

  console.log("\n=== SUMMARY ===");
  const found = results.filter(r => r.status === "found");
  const noPolicy = results.filter(r => r.status === "no-policy");
  const errors = results.filter(r => r.status === "error" || r.status === "timeout");

  console.log(`\nScanned: ${SITES.length} sites`);
  console.log(`Privacy policy found: ${found.length}`);
  console.log(`No policy found: ${noPolicy.length}`);
  console.log(`Errors/timeouts: ${errors.length}`);

  if (found.length > 0) {
    const avgScore = Math.round(found.reduce((sum, r) => sum + r.score, 0) / found.length);
    const excellent = found.filter(r => r.score >= 90).length;
    const good = found.filter(r => r.score >= 70 && r.score < 90).length;
    const fair = found.filter(r => r.score >= 50 && r.score < 70).length;
    const poor = found.filter(r => r.score < 50).length;

    console.log(`\nAverage score: ${avgScore}/100`);
    console.log(`A (90+): ${excellent}`);
    console.log(`B (70-89): ${good}`);
    console.log(`C (50-69): ${fair}`);
    console.log(`D/F (<50): ${poor}`);

    console.log("\n--- Leaderboard ---");
    found.sort((a, b) => b.score - a.score);
    found.forEach((r, i) => {
      console.log(`${i + 1}. ${r.domain}: ${r.score}/100 (${r.grade})`);
    });
  }

  if (noPolicy.length > 0) {
    console.log("\n--- No Privacy Policy Found ---");
    noPolicy.forEach(r => console.log(`  - ${r.domain}`));
  }
}

main().catch(console.error);
