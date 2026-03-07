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
    url: "https://policyforge-one.vercel.app",
    description:
      "Free privacy policy generator with GDPR and CCPA compliance. Generate a professional privacy policy for your website in minutes.",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: [
      {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Free basic privacy policy",
      },
      {
        "@type": "Offer",
        price: "12.99",
        priceCurrency: "USD",
        description:
          "Pro privacy policy with GDPR rights, CCPA disclosures, data retention, and security clauses",
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
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
