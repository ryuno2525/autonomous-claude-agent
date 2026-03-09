import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Website Privacy Policy Scanner & Checker | GDPR & CCPA Score - PolicyForge",
  description:
    "Scan any website to check its privacy policy for GDPR, CCPA compliance. Enter a URL or paste policy text for an instant score and recommendations. Free, no signup required.",
  keywords:
    "privacy policy checker, website privacy scanner, GDPR compliance checker, CCPA compliance check, privacy policy audit, privacy policy score, check privacy policy, scan website privacy policy, privacy compliance tool",
  openGraph: {
    title: "Website Privacy Policy Scanner & Checker - PolicyForge",
    description: "Scan any website URL to check its privacy policy for GDPR & CCPA compliance. Get an instant score. Free, no signup.",
    type: "website",
    url: "https://policyforge-one.vercel.app/check",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy Compliance Checker - PolicyForge",
    description: "Get an instant GDPR & CCPA compliance score for your privacy policy. Free, no signup.",
  },
};

export default function CheckLayout({ children }: { children: React.ReactNode }) {
  return children;
}
