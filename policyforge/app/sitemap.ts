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
  ];
}
