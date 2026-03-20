import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Is Your Website at Risk for an ADA Lawsuit? | AccessScore",
  description:
    "4,000+ ADA website lawsuits filed in 2024. Learn who gets sued, how much settlements cost, and how to protect your business. Free risk assessment tool.",
  alternates: { canonical: "https://accessscore.autonomous-claude.com/ada-lawsuit-risk" },
};

export default function ADALawsuitRiskPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Is Your Website at Risk for an ADA Lawsuit?",
    "description": "4,000+ ADA website lawsuits filed in 2024. Learn who gets sued, how much settlements cost, and how to protect your business. Free risk assessment tool.",
    "datePublished": "2026-03-14",
    "dateModified": "2026-03-14",
    "author": { "@type": "Organization", "name": "AccessScore" },
    "publisher": { "@type": "Organization", "name": "AccessScore", "url": "https://accessscore.autonomous-claude.com" },
    "mainEntityOfPage": "https://accessscore.autonomous-claude.com/ada-lawsuit-risk"
  };

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <h1 className="text-4xl font-bold text-white mb-6">Is Your Website at Risk for an ADA Lawsuit?</h1>

      <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 mb-8">
        <p className="text-red-300 font-medium text-lg">
          In 2024, over 4,000 ADA website accessibility lawsuits were filed in US federal courts —
          a 37% increase from the previous year. This trend shows no signs of slowing down.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-white mt-10 mb-4">ADA Website Lawsuit Statistics</h2>
      <p className="text-gray-300 leading-relaxed mb-6">
        ADA website lawsuits have grown dramatically since the first cases appeared in the mid-2010s.
        What started as lawsuits against major retailers has expanded to target businesses of all sizes
        and industries.
      </p>

      <div className="bg-[#141414] border border-[#262626] rounded-xl p-6 mb-8">
        <h3 className="text-lg font-semibold text-white mb-4">Key Statistics</h3>
        <div className="space-y-3">
          {[
            { stat: "4,000+", desc: "ADA website lawsuits filed in US federal courts in 2024" },
            { stat: "37%", desc: "Year-over-year increase in filing volume" },
            { stat: "67%", desc: "Of lawsuits target businesses with under $25M annual revenue" },
            { stat: "745%", desc: "Increase in Illinois ADA filings year-over-year" },
            { stat: "$5,000–$25,000", desc: "Typical settlement range for single-plaintiff cases" },
            { stat: "$25,000–$75,000+", desc: "Settlement range for multi-plaintiff or repeat cases" },
            { stat: "50+", desc: "Lawsuits filed per year by the most active serial plaintiffs" },
            { stat: "92%", desc: "Of homepages with detectable WCAG failures (per WebAIM Million report)" },
          ].map((item) => (
            <div key={item.desc} className="flex items-start gap-4">
              <span className="text-xl font-bold text-white shrink-0 w-36 text-right">{item.stat}</span>
              <span className="text-gray-400 text-sm">{item.desc}</span>
            </div>
          ))}
        </div>
      </div>

      <h2 className="text-2xl font-bold text-white mt-10 mb-4">Who Gets Sued?</h2>
      <p className="text-gray-300 leading-relaxed mb-4">
        A common misconception is that only large corporations face ADA lawsuits. The reality is that
        small and medium-sized businesses are disproportionately targeted because they&apos;re less likely to
        have accessibility programs in place and more likely to settle quickly.
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <div className="bg-[#141414] border border-[#262626] rounded-xl p-6">
          <h3 className="text-white font-semibold mb-3">Most Targeted Industries</h3>
          <ol className="text-gray-400 text-sm space-y-2">
            <li className="flex items-center gap-2"><span className="text-white font-bold w-6">1.</span> Retail &amp; E-commerce (37%)</li>
            <li className="flex items-center gap-2"><span className="text-white font-bold w-6">2.</span> Food &amp; Beverage (11%)</li>
            <li className="flex items-center gap-2"><span className="text-white font-bold w-6">3.</span> Entertainment (9%)</li>
            <li className="flex items-center gap-2"><span className="text-white font-bold w-6">4.</span> Healthcare (8%)</li>
            <li className="flex items-center gap-2"><span className="text-white font-bold w-6">5.</span> Travel &amp; Hospitality (7%)</li>
            <li className="flex items-center gap-2"><span className="text-white font-bold w-6">6.</span> Financial Services (6%)</li>
          </ol>
        </div>
        <div className="bg-[#141414] border border-[#262626] rounded-xl p-6">
          <h3 className="text-white font-semibold mb-3">Most Common Violations Cited</h3>
          <ol className="text-gray-400 text-sm space-y-2">
            <li className="flex items-center gap-2"><span className="text-white font-bold w-6">1.</span> Missing image alt text</li>
            <li className="flex items-center gap-2"><span className="text-white font-bold w-6">2.</span> Missing form input labels</li>
            <li className="flex items-center gap-2"><span className="text-white font-bold w-6">3.</span> Empty links and buttons</li>
            <li className="flex items-center gap-2"><span className="text-white font-bold w-6">4.</span> Missing document language</li>
            <li className="flex items-center gap-2"><span className="text-white font-bold w-6">5.</span> Low color contrast</li>
            <li className="flex items-center gap-2"><span className="text-white font-bold w-6">6.</span> Missing skip navigation</li>
          </ol>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-white mt-10 mb-4">How ADA Website Lawsuits Work</h2>
      <p className="text-gray-300 leading-relaxed mb-4">
        Most ADA website lawsuits follow a pattern. A plaintiff (often represented by a law firm that
        specializes in ADA cases) encounters accessibility barriers on your website. They file a complaint
        alleging that your website violates Title III of the ADA, which prohibits discrimination in
        &ldquo;places of public accommodation.&rdquo;
      </p>
      <p className="text-gray-300 leading-relaxed mb-4">
        The lawsuit typically demands that the website be made accessible, attorney&apos;s fees (which can
        exceed the settlement amount), and in some states, statutory damages. In California, for example,
        the Unruh Civil Rights Act provides minimum damages of $4,000 per violation per visit.
      </p>
      <p className="text-gray-300 leading-relaxed mb-6">
        Most businesses settle rather than go to trial, because litigation costs exceed settlement
        costs and courts have consistently ruled in favor of plaintiffs. The typical settlement includes
        a monetary payment ($5,000–$25,000 for first-time offenders), an agreement to remediate the
        website within a specified timeframe, and ongoing monitoring.
      </p>

      <h2 className="text-2xl font-bold text-white mt-10 mb-4">How to Protect Your Business</h2>
      <div className="space-y-4 mb-8">
        {[
          { title: "1. Know Your Current Risk", desc: "Use a tool like AccessScore to identify your website's accessibility issues and understand your legal exposure before a plaintiff does." },
          { title: "2. Fix High-Priority Issues First", desc: "Missing alt text, unlabeled form fields, and missing page language are the most commonly cited violations. Fixing these first provides the biggest risk reduction." },
          { title: "3. Document Your Efforts", desc: "Courts look favorably on businesses that can demonstrate good-faith efforts to improve accessibility, even if the site isn't perfect." },
          { title: "4. Add an Accessibility Statement", desc: "A published accessibility statement shows intent to comply and provides a channel for users to report issues." },
          { title: "5. Consider a VPAT", desc: "A Voluntary Product Accessibility Template documents your product's conformance with accessibility standards." },
        ].map((item) => (
          <div key={item.title} className="bg-[#141414] border border-[#262626] rounded-xl p-5">
            <h3 className="text-white font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-400 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-white mt-10 mb-4">The Cost of Inaction</h2>
      <div className="bg-[#141414] border border-[#262626] rounded-xl p-6 mb-8">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-red-400 font-semibold mb-3">Cost of a Lawsuit</h3>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Settlement: $5,000–$75,000+</li>
              <li>• Attorney fees: $10,000–$50,000</li>
              <li>• Remediation (rush): $5,000–$30,000</li>
              <li>• Ongoing monitoring: $2,000–$10,000/yr</li>
              <li className="text-white font-semibold">Total: $22,000–$165,000+</li>
            </ul>
          </div>
          <div>
            <h3 className="text-green-400 font-semibold mb-3">Cost of Prevention</h3>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• AccessScore Pro Report: $14.99</li>
              <li>• Fix common issues: $0–$2,000 (DIY to freelancer)</li>
              <li>• Accessibility statement: $0 (free templates)</li>
              <li>• Annual re-check: $14.99</li>
              <li className="text-white font-semibold">Total: $15–$2,030</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center mt-10">
        <a
          href="/"
          className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-lg transition-colors"
        >
          Check Your ADA Risk — Free
        </a>
        <p className="text-gray-500 text-sm mt-3">Find out your legal exposure before someone else does.</p>
      </div>

      <div className="mt-12 pt-8 border-t border-[#262626]">
        <p className="text-gray-500 text-sm">
          Related: <a href="/ada-lawsuit-statistics" className="text-blue-400 hover:underline">ADA Lawsuit Statistics 2026</a> &middot;{" "}
          <a href="/ada-compliance-checker" className="text-blue-400 hover:underline">ADA Compliance Checker</a> &middot;{" "}
          <a href="/free-accessibility-audit" className="text-blue-400 hover:underline">Free Accessibility Audit</a> &middot;{" "}
          <a href="/fix-website-accessibility" className="text-blue-400 hover:underline">Fix Accessibility Issues</a> &middot;{" "}
          <a href="/small-business-ada-compliance" className="text-blue-400 hover:underline">Small Business ADA Compliance</a>
        </p>
      </div>
    </main>
  );
}
