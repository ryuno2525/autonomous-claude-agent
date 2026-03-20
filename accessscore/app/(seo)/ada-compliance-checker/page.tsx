import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free ADA Compliance Checker for Small Businesses | AccessScore",
  description:
    "Check your website for ADA compliance issues in seconds. Free accessibility scan with legal risk assessment, WCAG 2.1 checks, and prioritized fix recommendations for small businesses.",
  alternates: { canonical: "https://accessscore.autonomous-claude.com/ada-compliance-checker" },
};

export default function ADAComplianceCheckerPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Free ADA Compliance Checker for Small Businesses",
    "description": "Check your website for ADA compliance issues in seconds. Free accessibility scan with legal risk assessment, WCAG 2.1 checks, and prioritized fix recommendations for small businesses.",
    "datePublished": "2026-03-14",
    "dateModified": "2026-03-14",
    "author": { "@type": "Organization", "name": "AccessScore" },
    "publisher": { "@type": "Organization", "name": "AccessScore", "url": "https://accessscore.autonomous-claude.com" },
    "mainEntityOfPage": "https://accessscore.autonomous-claude.com/ada-compliance-checker"
  };

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <h1 className="text-4xl font-bold text-white mb-6">Free ADA Compliance Checker for Small Businesses</h1>

      <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 mb-8">
        <p className="text-red-300 font-medium">
          4,000+ ADA website accessibility lawsuits were filed in 2024 — a 37% increase from the previous year.
          67% of these lawsuits target businesses with under $25 million in revenue.
        </p>
      </div>

      <div className="prose prose-invert max-w-none">
        <p className="text-gray-300 leading-relaxed mb-6">
          The Americans with Disabilities Act (ADA) requires businesses that serve the public to make their
          websites accessible to people with disabilities. Courts have consistently ruled that websites qualify
          as &ldquo;places of public accommodation&rdquo; under Title III of the ADA. If your website has
          accessibility barriers, you could face a demand letter, lawsuit, or settlement costs ranging from
          $5,000 to $75,000 or more.
        </p>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">What Does ADA Compliance Mean for Websites?</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          ADA website compliance means ensuring that people with disabilities — including those who are blind,
          deaf, have motor impairments, or cognitive disabilities — can perceive, understand, navigate, and
          interact with your website. The standard courts most commonly reference is the Web Content
          Accessibility Guidelines (WCAG) 2.1 at Level AA.
        </p>
        <p className="text-gray-300 leading-relaxed mb-6">
          WCAG 2.1 AA requires your website to meet criteria across four principles: Perceivable
          (information must be presentable to users in ways they can perceive), Operable (interface
          components and navigation must be operable), Understandable (information and operation of the
          interface must be understandable), and Robust (content must be robust enough to be interpreted
          by assistive technologies).
        </p>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">What AccessScore Checks</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Our free ADA compliance checker runs 16 automated checks across four critical categories:
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {[
            { title: "Images & Media", items: ["Alt text on all images", "Alt text quality", "Video captions", "Autoplay controls"] },
            { title: "Structure & Navigation", items: ["Heading hierarchy", "Skip navigation", "ARIA landmarks"] },
            { title: "Forms & Interactions", items: ["Form labels", "Button names", "Link text", "Tab order"] },
            { title: "Document & Meta", items: ["HTML lang attribute", "Page title", "Viewport zoom", "Table headers", "Iframe titles"] },
          ].map((cat) => (
            <div key={cat.title} className="bg-[#141414] border border-[#262626] rounded-lg p-4">
              <h3 className="text-white font-semibold mb-2">{cat.title}</h3>
              <ul className="text-sm text-gray-400 space-y-1">
                {cat.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">Who Needs ADA Compliance?</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Any business that operates a website and serves customers in the United States should ensure ADA
          compliance. This includes e-commerce stores, service businesses, restaurants, healthcare providers,
          law firms, real estate agencies, and educational institutions. Even small businesses with fewer
          than 15 employees have been successfully sued for website accessibility violations.
        </p>
        <p className="text-gray-300 leading-relaxed mb-6">
          Industries most frequently targeted by ADA lawsuits include retail and e-commerce (37% of all
          ADA web cases), food and beverage (11%), entertainment (9%), and healthcare (8%). If your
          business falls into any of these categories, checking your website&apos;s accessibility is especially
          urgent.
        </p>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">ADA Lawsuit Statistics</h2>
        <div className="bg-[#141414] border border-[#262626] rounded-xl p-6 mb-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-white">4,000+</div>
              <div className="text-xs text-gray-400">ADA web lawsuits in 2024</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">$5K–$75K</div>
              <div className="text-xs text-gray-400">Typical settlement range</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">67%</div>
              <div className="text-xs text-gray-400">Target small businesses</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">745%</div>
              <div className="text-xs text-gray-400">Illinois lawsuit increase YoY</div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">How to Check Your Website</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Using AccessScore is simple: enter your URL on our <a href="/" className="text-blue-400 hover:underline">homepage</a>,
          and within seconds you&apos;ll receive your AccessScore (0-100), legal risk tier, and a prioritized list
          of issues to fix. The free scan shows your top 5 issues. For a complete compliance report with
          every affected element and code-level fix instructions, the Pro Report is available for a one-time
          fee of $14.99.
        </p>

        <div className="text-center mt-10">
          <a
            href="/"
            className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-lg transition-colors"
          >
            Check Your Website Now — Free
          </a>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-[#262626]">
        <p className="text-gray-500 text-sm">
          Related: <a href="/wcag-checker" className="text-blue-400 hover:underline">WCAG 2.1 Checker</a> &middot;{" "}
          <a href="/ada-lawsuit-risk" className="text-blue-400 hover:underline">ADA Lawsuit Risk</a> &middot;{" "}
          <a href="/free-accessibility-audit" className="text-blue-400 hover:underline">Free Accessibility Audit</a> &middot;{" "}
          <a href="/fix-website-accessibility" className="text-blue-400 hover:underline">Fix Website Accessibility</a> &middot;{" "}
          <a href="/accessibility-checklist" className="text-blue-400 hover:underline">Accessibility Checklist</a>
        </p>
      </div>
    </main>
  );
}
