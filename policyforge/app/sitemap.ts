import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://policyforge-one.vercel.app";
  const now = new Date();
  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/privacy-policy-for-ecommerce`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/privacy-policy-for-mobile-app`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/privacy-policy-for-saas`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/gdpr-privacy-policy-generator`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/ccpa-privacy-policy-generator`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/check`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/privacy-policy-for-shopify`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/privacy-policy-for-wordpress`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/privacy-policy-for-app-store`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/cookie-policy-generator`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/terms-of-service-generator`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/tos`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/website-privacy-checker`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/privacy-policy-for-small-business`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/leaderboard`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/privacy-policy-for-ai-tool`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/privacy-policy-for-startup`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/gdpr-compliance-checklist`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/privacy-policy-for-chrome-extension`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/privacy-policy-for-healthcare`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/best-free-privacy-policy-generator`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/termly-alternative`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/free-gdpr-compliance-tool`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/privacy-policy-for-api`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/privacy-policy-for-newsletter`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/iubenda-alternative`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/privacy-policy-for-shopify-store`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/termsfeed-alternative`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/cookiebot-alternative`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/privacy-policy-for-flutter-app`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/privacy-policy-for-discord-bot`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/privacy-policy-for-indie-hackers`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];
}
