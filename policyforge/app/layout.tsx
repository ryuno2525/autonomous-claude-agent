import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "PolicyForge - Free Privacy Policy Generator | GDPR & CCPA Compliant",
  description:
    "Generate a professional privacy policy for your website in minutes. GDPR and CCPA compliant. Free basic policy, Pro comprehensive policy with cookie consent, data retention, and more.",
  keywords:
    "privacy policy generator, free privacy policy, GDPR privacy policy, CCPA compliant, terms of service generator, cookie policy, website legal pages",
  openGraph: {
    title: "PolicyForge - Free Privacy Policy Generator",
    description:
      "Generate a GDPR/CCPA compliant privacy policy for your website in minutes. Free to use.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "PolicyForge",
    url: "https://policyforge.autonomous-claude.com",
    description:
      "Free privacy policy and terms of service generator with GDPR and CCPA compliance. Includes a compliance checker tool.",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: [
      {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Free basic privacy policy and terms of service generator",
      },
      {
        "@type": "Offer",
        price: "12.99",
        priceCurrency: "USD",
        description:
          "Pro: GDPR rights, CCPA disclosures, data retention, security, indemnification, SLA, unlimited generations",
      },
    ],
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do I really need a privacy policy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. If your website collects any data — including analytics, cookies, or email addresses — you're legally required to have one. GDPR (EU), CCPA (California), PIPEDA (Canada), and LGPD (Brazil) all mandate it. Google AdSense, Apple App Store, and Stripe also require one.",
        },
      },
      {
        "@type": "Question",
        name: "Is this a legally valid privacy policy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PolicyForge generates professionally structured policies based on current privacy law frameworks. While we cover all major compliance areas, we recommend consulting an attorney for complex or high-risk situations. For most small businesses and startups, our policies provide solid coverage.",
        },
      },
      {
        "@type": "Question",
        name: "Why PolicyForge instead of a free template?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Free templates are generic and often outdated. PolicyForge customizes your policy based on your specific data practices — whether you use cookies, process payments, have user accounts, or handle children's data. Pro policies include GDPR/CCPA-specific rights sections that most templates miss entirely.",
        },
      },
      {
        "@type": "Question",
        name: "What's the difference between Free and Pro?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Free gives you 2 basic privacy policies per day. Pro ($12.99 one-time) adds unlimited generations, full GDPR/CCPA rights sections, data retention clauses, security measures, children's privacy, Terms of Service generator, and removes PolicyForge branding.",
        },
      },
      {
        "@type": "Question",
        name: "Is this a subscription?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. All plans are one-time payments. Pay once, use forever. No recurring charges.",
        },
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        <div className="border-t border-gray-800 bg-gray-950 py-6 px-4 mt-12">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
            <div className="text-gray-400">
              <span className="text-white font-medium">Also from us:</span>{" "}
              <a href="https://accessscore.autonomous-claude.com" className="text-blue-400 hover:text-blue-300 underline">
                AccessScore
              </a>{" "}
              — Free ADA/WCAG accessibility checker. Scan your site for legal risk.
            </div>
            <a
              href="https://autonomous-claude.com"
              className="text-gray-500 hover:text-gray-300 text-xs"
            >
              Part of the Autonomous Claude experiment
            </a>
          </div>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
