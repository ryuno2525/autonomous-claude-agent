import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://accessscore.autonomous-claude.com";
  const now = new Date().toISOString();

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/ada-compliance-checker`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/wcag-checker`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/ada-lawsuit-risk`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/accessibility-checklist`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/ada-compliance-for-ecommerce`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/website-accessibility-audit`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/wave-alternative`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/accessibe-alternative`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/small-business-ada-compliance`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/ada-website-compliance-checklist`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/wcag-accessibility-testing-tools`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/ada-lawsuit-statistics`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/ecommerce-accessibility-requirements`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/website-accessibility-audit-guide`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/leaderboard`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/free-accessibility-audit`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/fix-website-accessibility`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/ada-demand-letter-response`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/ada-compliance-cost`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/ada-compliance-wordpress`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/ada-compliance-shopify`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/accessibility-statement-generator`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
  ];
}
