import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Website Accessibility Audit — Instant Results | AccessScore",
  description:
    "Get a free, instant accessibility audit of your website. 16 WCAG 2.1 checks, legal risk assessment, and prioritized fix plan. No signup required. Results in seconds.",
  alternates: { canonical: "https://accessscore.autonomous-claude.com/free-accessibility-audit" },
};

export default function FreeAccessibilityAuditPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Free Website Accessibility Audit: How to Check Your Site in 30 Seconds",
    description: "Get a free, instant accessibility audit. 16 WCAG 2.1 checks, ADA legal risk assessment, and prioritized fixes. No signup, no email required.",
    datePublished: "2026-03-17",
    dateModified: "2026-03-17",
    author: { "@type": "Organization", name: "AccessScore" },
    publisher: { "@type": "Organization", name: "AccessScore", url: "https://accessscore.autonomous-claude.com" },
    mainEntityOfPage: "https://accessscore.autonomous-claude.com/free-accessibility-audit",
  };

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <h1 className="text-4xl font-bold text-white mb-6">Free Website Accessibility Audit — Instant Results</h1>

      <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 mb-8">
        <p className="text-blue-300 font-medium">
          Enter your URL below. Our scanner runs 16 WCAG 2.1 checks and gives you your accessibility score, legal risk tier,
          and top issues to fix — in under 30 seconds. No signup. No email. 100% free.
        </p>
        <div className="mt-4 text-center">
          <Link href="/" className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-colors">
            Start Free Audit Now
          </Link>
        </div>
      </div>

      <div className="prose prose-invert max-w-none">
        <p className="text-gray-300 leading-relaxed mb-6">
          A website accessibility audit is the first step toward making your site usable by everyone — including the 1.3 billion people
          worldwide living with some form of disability. It&apos;s also increasingly a legal requirement. In the US alone, over 4,000 ADA
          website accessibility lawsuits were filed in 2024, with average settlements ranging from $5,000 to $75,000.
        </p>
        <p className="text-gray-300 leading-relaxed mb-6">
          Traditional accessibility audits cost $3,000 to $30,000 and take weeks. AccessScore gives you an instant, automated baseline
          audit for free — covering the 16 most impactful WCAG 2.1 Level A and AA criteria that courts reference in ADA lawsuits.
        </p>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">What Does the Free Audit Include?</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Our free accessibility audit scans your website&apos;s HTML and checks 16 criteria across four categories:
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-6 not-prose">
          {[
            { cat: "Images & Media", checks: ["Alt text presence & quality", "Video/audio captions", "Autoplay controls"], icon: "🖼️" },
            { cat: "Structure & Navigation", checks: ["Heading hierarchy", "Skip navigation links", "ARIA landmarks"], icon: "🧭" },
            { cat: "Forms & Interactions", checks: ["Form labels", "Button names", "Link text quality", "Tab order"], icon: "📋" },
            { cat: "Document & Meta", checks: ["HTML lang attribute", "Page title", "Viewport zoom", "Table headers", "Iframe titles"], icon: "📄" },
          ].map((c) => (
            <div key={c.cat} className="bg-[#141414] border border-[#262626] rounded-xl p-4">
              <h3 className="text-white font-semibold mb-2">{c.icon} {c.cat}</h3>
              <ul className="space-y-1">
                {c.checks.map((ch) => (
                  <li key={ch} className="text-sm text-gray-400 flex items-center gap-2">
                    <span className="text-green-400 text-xs">&#10003;</span> {ch}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-gray-300 leading-relaxed mb-6">
          For each check, we test your page against the WCAG 2.1 success criteria and calculate a weighted score from 0 to 100.
          You also get a letter grade (A through F) and a legal risk tier based on the type and severity of violations found.
        </p>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">Free Audit vs. Pro Report</h2>
        <div className="not-prose mb-6">
          <div className="bg-[#141414] border border-[#262626] rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#262626]">
                  <th className="text-left text-gray-400 font-medium p-4">Feature</th>
                  <th className="text-center text-gray-400 font-medium p-4">Free Audit</th>
                  <th className="text-center text-blue-400 font-medium p-4">Pro Report ($1.99)</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-[#262626]"><td className="p-4">Overall score & grade</td><td className="p-4 text-center text-green-400">&#10003;</td><td className="p-4 text-center text-green-400">&#10003;</td></tr>
                <tr className="border-b border-[#262626]"><td className="p-4">Legal risk tier</td><td className="p-4 text-center text-green-400">&#10003;</td><td className="p-4 text-center text-green-400">&#10003;</td></tr>
                <tr className="border-b border-[#262626]"><td className="p-4">Top 5 issues shown</td><td className="p-4 text-center text-green-400">&#10003;</td><td className="p-4 text-center text-green-400">&#10003;</td></tr>
                <tr className="border-b border-[#262626]"><td className="p-4">Fix code for top 2 issues</td><td className="p-4 text-center text-green-400">&#10003;</td><td className="p-4 text-center text-green-400">&#10003;</td></tr>
                <tr className="border-b border-[#262626]"><td className="p-4">Fix code for ALL issues</td><td className="p-4 text-center text-gray-600">&#10007;</td><td className="p-4 text-center text-green-400">&#10003;</td></tr>
                <tr className="border-b border-[#262626]"><td className="p-4">Affected HTML elements listed</td><td className="p-4 text-center text-gray-600">&#10007;</td><td className="p-4 text-center text-green-400">&#10003;</td></tr>
                <tr className="border-b border-[#262626]"><td className="p-4">Prioritized remediation plan</td><td className="p-4 text-center text-gray-600">&#10007;</td><td className="p-4 text-center text-green-400">&#10003;</td></tr>
                <tr className="border-b border-[#262626]"><td className="p-4">WCAG criterion references</td><td className="p-4 text-center text-gray-600">&#10007;</td><td className="p-4 text-center text-green-400">&#10003;</td></tr>
                <tr><td className="p-4">Legal risk analysis</td><td className="p-4 text-center text-gray-600">&#10007;</td><td className="p-4 text-center text-green-400">&#10003;</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">Why Automated Accessibility Audits Matter</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Manual accessibility audits are thorough but expensive ($3,000–$30,000) and slow (2–6 weeks). Automated audits can&apos;t
          catch everything — studies show they detect roughly 30–50% of WCAG violations — but they catch the most common and
          most legally actionable issues immediately.
        </p>
        <p className="text-gray-300 leading-relaxed mb-4">
          The most frequently cited violations in ADA lawsuits are precisely the kind automated tools excel at detecting:
        </p>
        <ul className="text-gray-300 space-y-2 mb-6">
          <li><strong className="text-white">Missing alt text</strong> — cited in 68% of ADA website lawsuits</li>
          <li><strong className="text-white">Missing form labels</strong> — cited in 54% of lawsuits</li>
          <li><strong className="text-white">Empty links/buttons</strong> — cited in 42% of lawsuits</li>
          <li><strong className="text-white">Missing document language</strong> — cited in 29% of lawsuits</li>
          <li><strong className="text-white">Empty headings</strong> — cited in 28% of lawsuits</li>
        </ul>
        <p className="text-gray-300 leading-relaxed mb-6">
          AccessScore checks for all of these and 11 more criteria. Our free audit gives you a solid baseline of where
          your site stands — and whether you&apos;re at risk.
        </p>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">How to Run Your Free Audit</h2>
        <ol className="text-gray-300 space-y-4 mb-6 list-decimal list-inside">
          <li><strong className="text-white">Enter your URL</strong> on the <Link href="/" className="text-blue-400 hover:underline">AccessScore homepage</Link>.</li>
          <li><strong className="text-white">Wait 10–30 seconds</strong> while we fetch and analyze your page.</li>
          <li><strong className="text-white">Review your results:</strong> overall score, grade, legal risk tier, and top issues.</li>
          <li><strong className="text-white">Fix the top issues</strong> using the provided code examples.</li>
          <li><strong className="text-white">Optionally upgrade</strong> to the Pro Report ($1.99) for the complete fix plan with every issue and affected element.</li>
        </ol>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">Command Line Alternative</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Prefer the terminal? Run AccessScore from the command line without installing anything:
        </p>
        <div className="not-prose bg-[#0a0a0a] border border-[#262626] rounded-xl p-4 mb-6">
          <pre className="text-green-400 text-sm overflow-x-auto">npx accessscore https://your-website.com</pre>
        </div>
        <p className="text-gray-300 leading-relaxed mb-6">
          This runs the same 16 checks and outputs your score, grade, and issues right in your terminal.
          Perfect for CI/CD pipelines, pre-commit checks, or quick assessments.
        </p>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">Who Needs an Accessibility Audit?</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          If your website serves customers in the United States, you are almost certainly subject to ADA requirements. This includes:
        </p>
        <ul className="text-gray-300 space-y-2 mb-6">
          <li><strong className="text-white">E-commerce stores</strong> — online retailers are the #1 target for ADA lawsuits (78% of filings)</li>
          <li><strong className="text-white">SaaS applications</strong> — B2B software must be accessible for enterprise procurement</li>
          <li><strong className="text-white">Restaurant and hospitality sites</strong> — online ordering and reservation systems</li>
          <li><strong className="text-white">Healthcare providers</strong> — HIPAA and ADA both require accessible patient portals</li>
          <li><strong className="text-white">Educational institutions</strong> — Section 508 and ADA apply to online learning</li>
          <li><strong className="text-white">Government contractors</strong> — Section 508 requires WCAG 2.1 AA compliance</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">What Happens After the Audit?</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          The audit is just the starting point. Here&apos;s the recommended workflow:
        </p>
        <ol className="text-gray-300 space-y-3 mb-6 list-decimal list-inside">
          <li><strong className="text-white">Triage:</strong> Focus on HIGH severity issues first — these carry the most legal risk</li>
          <li><strong className="text-white">Fix:</strong> Use the provided before/after code examples to resolve each issue</li>
          <li><strong className="text-white">Re-scan:</strong> Run the audit again to verify fixes worked</li>
          <li><strong className="text-white">Monitor:</strong> Accessibility degrades with every code deploy — scan regularly</li>
          <li><strong className="text-white">Document:</strong> Keep audit records as evidence of good-faith compliance efforts</li>
        </ol>
        <p className="text-gray-300 leading-relaxed mb-6">
          Good-faith compliance efforts are your strongest legal defense. Courts are more lenient with businesses that demonstrate
          ongoing accessibility improvement, even if the site isn&apos;t perfect. Regular audits and documented fixes show intent.
        </p>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">How AccessScore Compares</h2>
        <div className="not-prose mb-6">
          <div className="bg-[#141414] border border-[#262626] rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#262626]">
                  <th className="text-left text-gray-400 font-medium p-4">Tool</th>
                  <th className="text-center text-gray-400 font-medium p-4">Price</th>
                  <th className="text-center text-gray-400 font-medium p-4">Legal Risk</th>
                  <th className="text-center text-gray-400 font-medium p-4">Fix Code</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-[#262626]"><td className="p-4 text-blue-400 font-medium">AccessScore</td><td className="p-4 text-center">Free / $1.99</td><td className="p-4 text-center text-green-400">&#10003;</td><td className="p-4 text-center text-green-400">&#10003;</td></tr>
                <tr className="border-b border-[#262626]"><td className="p-4">WAVE</td><td className="p-4 text-center">Free</td><td className="p-4 text-center text-gray-600">&#10007;</td><td className="p-4 text-center text-gray-600">&#10007;</td></tr>
                <tr className="border-b border-[#262626]"><td className="p-4">axe DevTools</td><td className="p-4 text-center">Free / $600+/yr</td><td className="p-4 text-center text-gray-600">&#10007;</td><td className="p-4 text-center text-green-400">&#10003;</td></tr>
                <tr className="border-b border-[#262626]"><td className="p-4">Lighthouse</td><td className="p-4 text-center">Free</td><td className="p-4 text-center text-gray-600">&#10007;</td><td className="p-4 text-center text-gray-600">&#10007;</td></tr>
                <tr><td className="p-4">Manual Audit</td><td className="p-4 text-center">$3,000–$30,000</td><td className="p-4 text-center text-green-400">&#10003;</td><td className="p-4 text-center text-green-400">&#10003;</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <p className="text-gray-300 leading-relaxed mb-6">
          AccessScore is the only free tool that combines WCAG violation detection with legal risk quantification.
          While tools like WAVE and Lighthouse identify issues, they don&apos;t tell you how those issues translate to lawsuit risk.
        </p>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-2xl p-8 mt-12 text-center">
        <h2 className="text-2xl font-bold text-white mb-3">Ready to Audit Your Site?</h2>
        <p className="text-gray-300 mb-6">Free scan. 16 WCAG checks. Legal risk assessment. Results in seconds.</p>
        <Link href="/" className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-lg transition-colors">
          Start Free Audit
        </Link>
        <p className="text-gray-500 text-xs mt-3">No signup required. No email needed.</p>
      </div>

      {/* Related pages */}
      <div className="mt-12 pt-8 border-t border-[#262626]">
        <h3 className="text-lg font-semibold text-white mb-4">Related Resources</h3>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link href="/ada-compliance-checker" className="text-blue-400 hover:underline text-sm">ADA Compliance Checker for Small Businesses</Link>
          <Link href="/wcag-checker" className="text-blue-400 hover:underline text-sm">WCAG 2.1 Compliance Checker</Link>
          <Link href="/ada-lawsuit-statistics" className="text-blue-400 hover:underline text-sm">ADA Lawsuit Statistics 2026</Link>
          <Link href="/accessibility-checklist" className="text-blue-400 hover:underline text-sm">Complete Accessibility Checklist</Link>
          <Link href="/wave-alternative" className="text-blue-400 hover:underline text-sm">AccessScore vs WAVE</Link>
          <Link href="/website-accessibility-audit-guide" className="text-blue-400 hover:underline text-sm">Website Accessibility Audit Guide</Link>
        </div>
      </div>
    </main>
  );
}
