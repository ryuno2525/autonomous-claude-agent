import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Website Accessibility Audit Tool | AccessScore",
  description:
    "Run a free automated accessibility audit on any website. 16 WCAG 2.1 checks, legal risk assessment, and prioritized remediation plan. No signup required.",
  alternates: { canonical: "https://accessscore.autonomous-claude.com/website-accessibility-audit" },
};

export default function WebsiteAccessibilityAuditPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Free Website Accessibility Audit Tool",
    description: "Run a free automated accessibility audit on any website. 16 WCAG 2.1 checks with legal risk assessment.",
    datePublished: "2026-03-14",
    dateModified: "2026-03-14",
    author: { "@type": "Organization", name: "AccessScore" },
    publisher: { "@type": "Organization", name: "AccessScore", url: "https://accessscore.autonomous-claude.com" },
    mainEntityOfPage: "https://accessscore.autonomous-claude.com/website-accessibility-audit",
  };

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <h1 className="text-4xl font-bold text-white mb-6">Free Website Accessibility Audit Tool</h1>

      <p className="text-gray-300 leading-relaxed mb-6 text-lg">
        A website accessibility audit identifies barriers that prevent people with disabilities from using your site. AccessScore provides an instant automated audit covering 16 WCAG 2.1 checks — the same standards referenced in ADA lawsuits — plus a legal risk assessment that quantifies your exposure.
      </p>

      <h2 className="text-2xl font-bold text-white mt-10 mb-4">What Is a Website Accessibility Audit?</h2>
      <p className="text-gray-300 leading-relaxed mb-4">
        An accessibility audit evaluates your website against established standards (primarily WCAG 2.1) to identify barriers for users with disabilities. These barriers include missing alt text on images (affecting blind users), unlabeled form fields (affecting screen reader users), poor keyboard navigation (affecting users with motor disabilities), and missing captions on video (affecting deaf users).
      </p>
      <p className="text-gray-300 leading-relaxed mb-6">
        Audits range from fully automated scans (like AccessScore) to comprehensive manual evaluations that include screen reader testing, keyboard navigation testing, and user testing with people who have disabilities. Automated tools catch approximately 30-40% of WCAG violations but cover the most common and impactful issues — including the violations most frequently cited in ADA lawsuits.
      </p>

      <h2 className="text-2xl font-bold text-white mt-10 mb-4">Why Automated Auditing Matters</h2>
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {[
          { title: "Speed", desc: "Full scan in seconds, not weeks. Know your risk immediately." },
          { title: "Coverage", desc: "16 checks across images, structure, forms, and document metadata. Catches the most cited ADA violations." },
          { title: "Prioritization", desc: "Issues ranked by legal risk and fix ease. Fix what matters most first." },
        ].map((item) => (
          <div key={item.title} className="bg-[#141414] border border-[#262626] rounded-xl p-5">
            <h3 className="text-white font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-400 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-white mt-10 mb-4">What AccessScore Audits</h2>
      <p className="text-gray-300 leading-relaxed mb-6">
        Our automated audit covers the violations most commonly cited in ADA lawsuits and DOJ enforcement actions:
      </p>

      <div className="space-y-3 mb-8">
        {[
          { check: "Image Alt Text", wcag: "SC 1.1.1", why: "#1 most cited violation in ADA lawsuits" },
          { check: "Form Input Labels", wcag: "SC 1.3.1, 4.1.2", why: "#2 most cited violation — prevents form completion" },
          { check: "Heading Hierarchy", wcag: "SC 1.3.1", why: "Screen reader users rely on headings to navigate content" },
          { check: "HTML Language", wcag: "SC 3.1.1", why: "Screen readers need this to select the correct voice" },
          { check: "Page Titles", wcag: "SC 2.4.2", why: "Users with multiple tabs need to identify pages" },
          { check: "Skip Navigation", wcag: "SC 2.4.1", why: "Keyboard users must be able to bypass repeated content" },
          { check: "ARIA Landmarks", wcag: "SC 1.3.1", why: "Screen readers use landmarks to navigate page regions" },
          { check: "Link Text", wcag: "SC 2.4.4", why: "'Click here' is meaningless out of context" },
          { check: "Button Labels", wcag: "SC 4.1.2", why: "Icon-only buttons are invisible to screen readers" },
          { check: "Viewport Zoom", wcag: "SC 1.4.4", why: "Disabling zoom prevents low-vision users from reading" },
          { check: "Video Captions", wcag: "SC 1.2.2", why: "Deaf users cannot access uncaptioned video content" },
          { check: "Table Headers", wcag: "SC 1.3.1", why: "Screen readers can't announce data without headers" },
        ].map((item) => (
          <div key={item.check} className="bg-[#141414] border border-[#262626] rounded-lg p-4 flex items-start gap-4">
            <div className="shrink-0">
              <span className="text-xs text-blue-400 font-mono">{item.wcag}</span>
            </div>
            <div>
              <p className="text-white text-sm font-medium">{item.check}</p>
              <p className="text-gray-500 text-xs mt-0.5">{item.why}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-white mt-10 mb-4">Automated vs. Manual Accessibility Audits</h2>
      <div className="bg-[#141414] border border-[#262626] rounded-xl overflow-hidden mb-8">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[#262626]">
              <th className="text-left p-4 text-gray-400"></th>
              <th className="text-center p-4 text-gray-400">Automated (AccessScore)</th>
              <th className="text-center p-4 text-gray-400">Manual Audit</th>
            </tr>
          </thead>
          <tbody>
            {[
              { feature: "Cost", auto: "$0–$14.99", manual: "$5,000–$30,000" },
              { feature: "Time", auto: "Seconds", manual: "2–6 weeks" },
              { feature: "Coverage", auto: "30-40% of WCAG criteria", manual: "100% of WCAG criteria" },
              { feature: "Catches top violations", auto: "Yes", manual: "Yes" },
              { feature: "Screen reader testing", auto: "No", manual: "Yes" },
              { feature: "User testing", auto: "No", manual: "Yes (optional)" },
              { feature: "Legal risk quantification", auto: "Yes", manual: "Varies" },
              { feature: "Best for", auto: "Initial assessment, ongoing monitoring", manual: "Full compliance certification" },
            ].map((row) => (
              <tr key={row.feature} className="border-b border-[#262626] last:border-b-0">
                <td className="p-4 text-white font-medium">{row.feature}</td>
                <td className="p-4 text-center text-gray-300">{row.auto}</td>
                <td className="p-4 text-center text-gray-300">{row.manual}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-gray-300 leading-relaxed mb-6">
        We recommend starting with an automated audit to understand your current risk profile and fix the most critical issues. If your site handles sensitive data, processes payments, or serves a large user base, follow up with a manual audit for complete WCAG conformance.
      </p>

      <div className="text-center mt-10">
        <a href="/" className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-lg transition-colors">
          Start Your Free Audit
        </a>
        <p className="text-gray-500 text-sm mt-3">16 checks. Legal risk assessment. Results in seconds.</p>
      </div>

      <div className="mt-12 pt-8 border-t border-[#262626]">
        <p className="text-gray-500 text-sm">
          Related: <a href="/ada-compliance-checker" className="text-blue-400 hover:underline">ADA Compliance Checker</a> &middot;{" "}
          <a href="/wcag-checker" className="text-blue-400 hover:underline">WCAG 2.1 Checker</a> &middot;{" "}
          <a href="/ada-lawsuit-risk" className="text-blue-400 hover:underline">ADA Lawsuit Risk</a> &middot;{" "}
          <a href="/ada-compliance-for-ecommerce" className="text-blue-400 hover:underline">E-Commerce ADA Compliance</a>
        </p>
      </div>
    </main>
  );
}
