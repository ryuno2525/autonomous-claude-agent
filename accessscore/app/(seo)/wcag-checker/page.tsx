import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free WCAG 2.1 AA Compliance Checker | AccessScore",
  description:
    "Check your website against WCAG 2.1 Level AA standards. Free automated accessibility scan with 16 checks, legal risk assessment, and prioritized fix recommendations.",
  alternates: { canonical: "https://accessscore.autonomous-claude.com/wcag-checker" },
};

export default function WCAGCheckerPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Free WCAG 2.1 AA Compliance Checker",
    "description": "Check your website against WCAG 2.1 Level AA standards. Free automated accessibility scan with 16 checks, legal risk assessment, and prioritized fix recommendations.",
    "datePublished": "2026-03-14",
    "dateModified": "2026-03-14",
    "author": { "@type": "Organization", "name": "AccessScore" },
    "publisher": { "@type": "Organization", "name": "AccessScore", "url": "https://accessscore.autonomous-claude.com" },
    "mainEntityOfPage": "https://accessscore.autonomous-claude.com/wcag-checker"
  };

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <h1 className="text-4xl font-bold text-white mb-6">Free WCAG 2.1 AA Compliance Checker</h1>

      <p className="text-gray-300 leading-relaxed mb-6 text-lg">
        The Web Content Accessibility Guidelines (WCAG) are the international standard for web accessibility.
        AccessScore checks your website against WCAG 2.1 Level A and AA criteria — the conformance levels
        referenced in ADA lawsuits, Section 508, and the EU European Accessibility Act.
      </p>

      <div className="bg-[#141414] border border-[#262626] rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold text-white mb-4">Understanding WCAG Levels</h2>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded font-bold text-sm shrink-0">Level A</span>
            <div>
              <p className="text-white font-medium">Essential accessibility</p>
              <p className="text-gray-400 text-sm">The minimum level. Failure means some users literally cannot access your content. Examples: alt text for images, keyboard navigation, page titles.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded font-bold text-sm shrink-0">Level AA</span>
            <div>
              <p className="text-white font-medium">Standard compliance target</p>
              <p className="text-gray-400 text-sm">The level required by most laws and regulations. Examples: color contrast ratios, text resizing, consistent navigation. This is what courts reference in ADA cases.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded font-bold text-sm shrink-0">Level AAA</span>
            <div>
              <p className="text-white font-medium">Enhanced accessibility</p>
              <p className="text-gray-400 text-sm">The highest level. Not typically required by law, but recommended for specialized content. Examples: sign language for video, simplified language.</p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-white mt-10 mb-4">WCAG 2.1 Criteria We Check</h2>
      <p className="text-gray-300 leading-relaxed mb-6">
        WCAG 2.1 contains 78 success criteria across four principles (POUR): Perceivable, Operable,
        Understandable, and Robust. AccessScore focuses on the 16 most impactful, automatable criteria
        that account for the majority of real-world accessibility barriers and legal violations.
      </p>

      <div className="space-y-4 mb-8">
        {[
          { sc: "SC 1.1.1", name: "Non-text Content", level: "A", desc: "All images must have text alternatives (alt text)." },
          { sc: "SC 1.2.2", name: "Captions (Prerecorded)", level: "A", desc: "Prerecorded audio in video must have captions." },
          { sc: "SC 1.3.1", name: "Info and Relationships", level: "A", desc: "Semantic structure (headings, landmarks, form labels) must be programmatically determinable." },
          { sc: "SC 1.4.2", name: "Audio Control", level: "A", desc: "If audio plays for more than 3 seconds, there must be a mechanism to pause, stop, or control volume." },
          { sc: "SC 1.4.4", name: "Resize Text", level: "AA", desc: "Text must be resizable up to 200% without loss of content or functionality." },
          { sc: "SC 2.4.1", name: "Bypass Blocks", level: "A", desc: "A mechanism (skip link) must allow users to bypass repeated navigation blocks." },
          { sc: "SC 2.4.2", name: "Page Titled", level: "A", desc: "Web pages must have descriptive titles." },
          { sc: "SC 2.4.3", name: "Focus Order", level: "A", desc: "Focusable components must receive focus in an order that preserves meaning." },
          { sc: "SC 2.4.4", name: "Link Purpose (In Context)", level: "A", desc: "The purpose of each link must be determinable from the link text." },
          { sc: "SC 3.1.1", name: "Language of Page", level: "A", desc: "The primary language of each page must be programmatically determinable." },
          { sc: "SC 4.1.2", name: "Name, Role, Value", level: "A", desc: "All UI components must have accessible names and roles." },
        ].map((item) => (
          <div key={item.sc} className="bg-[#141414] border border-[#262626] rounded-lg p-4 flex items-start gap-4">
            <span className={`text-xs font-bold px-2 py-1 rounded shrink-0 ${
              item.level === "A" ? "bg-green-500/20 text-green-400" : "bg-blue-500/20 text-blue-400"
            }`}>{item.level}</span>
            <div>
              <p className="text-white font-medium text-sm">{item.sc}: {item.name}</p>
              <p className="text-gray-400 text-xs mt-1">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-white mt-10 mb-4">Why WCAG Matters for Legal Compliance</h2>
      <p className="text-gray-300 leading-relaxed mb-4">
        While the ADA doesn&apos;t explicitly mention WCAG, courts and the Department of Justice consistently
        reference WCAG 2.1 Level AA as the standard for web accessibility compliance. Settlement
        agreements in ADA cases routinely require conformance with WCAG 2.1 AA.
      </p>
      <p className="text-gray-300 leading-relaxed mb-4">
        Beyond the US, WCAG compliance is required by law in the EU (European Accessibility Act,
        effective June 2025), Canada (AODA), the UK (Equality Act), and many other jurisdictions.
        If your website serves users in any of these regions, WCAG compliance is not optional.
      </p>

      <h2 className="text-2xl font-bold text-white mt-10 mb-4">Limitations of Automated Checking</h2>
      <p className="text-gray-300 leading-relaxed mb-6">
        Automated tools like AccessScore can identify approximately 30-40% of WCAG violations. Some
        criteria require human judgment — for example, whether alt text is actually descriptive, whether
        color contrast is sufficient in custom components, or whether content is cognitively accessible.
        Our tool catches the most common and impactful automated violations, but a complete WCAG audit
        should include manual testing with screen readers, keyboard navigation testing, and user testing
        with people who have disabilities.
      </p>

      <div className="text-center mt-10">
        <a
          href="/"
          className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-lg transition-colors"
        >
          Run a Free WCAG Check
        </a>
        <p className="text-gray-500 text-sm mt-3">16 automated checks. Results in seconds. No signup.</p>
      </div>

      <div className="mt-12 pt-8 border-t border-[#262626]">
        <p className="text-gray-500 text-sm">
          Related: <a href="/ada-compliance-checker" className="text-blue-400 hover:underline">ADA Compliance Checker</a> &middot;{" "}
          <a href="/free-accessibility-audit" className="text-blue-400 hover:underline">Free Accessibility Audit</a> &middot;{" "}
          <a href="/fix-website-accessibility" className="text-blue-400 hover:underline">Fix Accessibility Issues</a> &middot;{" "}
          <a href="/accessibility-checklist" className="text-blue-400 hover:underline">Accessibility Checklist</a> &middot;{" "}
          <a href="/wave-alternative" className="text-blue-400 hover:underline">AccessScore vs WAVE</a>
        </p>
      </div>
    </main>
  );
}
