import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AccessScore — Free ADA Website Accessibility Checker",
  description:
    "Check your website for ADA compliance issues and legal risk. Free accessibility scan with WCAG 2.1 checks, legal risk assessment, and prioritized fix recommendations.",
  openGraph: {
    title: "AccessScore — Free ADA Website Accessibility Checker",
    description:
      "4,000+ ADA lawsuits filed in 2024. Is your website next? Free scan with legal risk assessment.",
    url: "https://accessscore.autonomous-claude.com",
    siteName: "AccessScore",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AccessScore — Free ADA Website Accessibility Checker",
    description:
      "4,000+ ADA lawsuits filed in 2024. Is your website next? Free scan with legal risk assessment.",
  },
  alternates: {
    canonical: "https://accessscore.autonomous-claude.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>♿</text></svg>" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "AccessScore",
              "url": "https://accessscore.autonomous-claude.com",
              "description": "Free ADA website accessibility checker with legal risk assessment",
              "applicationCategory": "WebApplication",
              "operatingSystem": "Any",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              }
            }),
          }}
        />
      </head>
      <body className="antialiased min-h-screen">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded">Skip to main content</a>
        <nav className="border-b border-[#262626] px-6 py-4" aria-label="Main navigation">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <a href="/" className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-2xl">♿</span> AccessScore
            </a>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="/ada-compliance-checker" className="hover:text-white transition-colors">ADA Checker</a>
              <a href="/wcag-checker" className="hover:text-white transition-colors">WCAG Checker</a>
              <a href="/ada-lawsuit-risk" className="hover:text-white transition-colors">Lawsuit Risk</a>
              <a href="/leaderboard" className="hover:text-white transition-colors">Leaderboard</a>
            </div>
          </div>
        </nav>
        <main id="main">
          {children}
        </main>
        <footer className="border-t border-[#262626] px-6 py-8 mt-16">
          <div className="max-w-6xl mx-auto text-center text-sm text-gray-500">
            <div className="flex flex-wrap justify-center gap-6 mb-4">
              <a href="/" className="hover:text-gray-300">Home</a>
              <a href="/ada-compliance-checker" className="hover:text-gray-300">ADA Compliance Checker</a>
              <a href="/wcag-checker" className="hover:text-gray-300">WCAG Checker</a>
              <a href="/ada-lawsuit-risk" className="hover:text-gray-300">ADA Lawsuit Risk</a>
              <a href="/leaderboard" className="hover:text-gray-300">Accessibility Leaderboard</a>
              <a href="/accessibility-checklist" className="hover:text-gray-300">Accessibility Checklist</a>
              <a href="/ada-compliance-for-ecommerce" className="hover:text-gray-300">E-Commerce ADA</a>
              <a href="/website-accessibility-audit" className="hover:text-gray-300">Accessibility Audit</a>
              <a href="/wave-alternative" className="hover:text-gray-300">WAVE Alternative</a>
              <a href="/ada-website-compliance-checklist" className="hover:text-gray-300">ADA Checklist 2026</a>
              <a href="/wcag-accessibility-testing-tools" className="hover:text-gray-300">Testing Tools</a>
              <a href="/ada-lawsuit-statistics" className="hover:text-gray-300">Lawsuit Statistics</a>
              <a href="/ecommerce-accessibility-requirements" className="hover:text-gray-300">E-Commerce Requirements</a>
              <a href="/website-accessibility-audit-guide" className="hover:text-gray-300">Audit Guide</a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mb-4">
              <a href="https://policyforge.autonomous-claude.com" className="hover:text-gray-300">PolicyForge — Privacy Compliance</a>
              <a href="https://autonomous-claude.com" className="hover:text-gray-300">Autonomous Claude</a>
            </div>
            <p>AccessScore is not a law firm and does not provide legal advice. Risk estimates are for educational purposes only.</p>
            <p className="mt-1">Built by an AI agent experimenting with autonomous business. <a href="https://autonomous-claude.com" className="text-blue-400 hover:underline">Follow the journey</a>.</p>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
