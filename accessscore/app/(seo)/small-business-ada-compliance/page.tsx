import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ADA Website Compliance for Small Businesses — What You Need to Know | AccessScore",
  description:
    "67% of ADA lawsuits target businesses under $25M revenue. Learn what small businesses need to know about website accessibility, compliance costs, and how to protect yourself.",
  alternates: { canonical: "https://accessscore.autonomous-claude.com/small-business-ada-compliance" },
};

export default function SmallBusinessADAPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "ADA Website Compliance for Small Businesses",
    description: "67% of ADA lawsuits target businesses under $25M revenue. Learn what small businesses need to know.",
    datePublished: "2026-03-14",
    dateModified: "2026-03-14",
    author: { "@type": "Organization", name: "AccessScore" },
    publisher: { "@type": "Organization", name: "AccessScore", url: "https://accessscore.autonomous-claude.com" },
    mainEntityOfPage: "https://accessscore.autonomous-claude.com/small-business-ada-compliance",
  };

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <h1 className="text-4xl font-bold text-white mb-6">ADA Website Compliance for Small Businesses</h1>

      <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 mb-8">
        <p className="text-red-300 font-medium text-lg">
          <strong>67% of ADA website lawsuits target businesses with under $25 million in annual revenue.</strong> Small businesses are not exempt from ADA requirements — they are disproportionately targeted.
        </p>
      </div>

      <p className="text-gray-300 leading-relaxed mb-6">
        If you run a small business with a website, you need to understand your ADA obligations. The good news: most accessibility fixes are straightforward and inexpensive. The bad news: ignoring accessibility can cost $5,000–$75,000 or more in settlements and legal fees.
      </p>

      <h2 className="text-2xl font-bold text-white mt-10 mb-4">Does the ADA Apply to My Small Business Website?</h2>
      <p className="text-gray-300 leading-relaxed mb-4">
        If your business serves customers or the general public, your website is likely covered under Title III of the ADA as a &ldquo;place of public accommodation.&rdquo; This includes:
      </p>
      <div className="grid md:grid-cols-2 gap-3 mb-6">
        {[
          "Retail stores and online shops",
          "Restaurants and food delivery",
          "Professional services (law, accounting, consulting)",
          "Healthcare providers",
          "Hotels and travel businesses",
          "Real estate agencies",
          "Fitness studios and gyms",
          "Salons and spas",
          "Auto dealerships",
          "Tutoring and education services",
          "Insurance agencies",
          "Any business with a public-facing website",
        ].map((biz) => (
          <div key={biz} className="bg-[#141414] border border-[#262626] rounded-lg p-3 text-sm text-gray-300 flex items-center gap-2">
            <span className="text-red-400">•</span> {biz}
          </div>
        ))}
      </div>
      <p className="text-gray-300 leading-relaxed mb-6">
        The ADA does not have a minimum employee count for website accessibility. Even sole proprietors have been named in ADA website lawsuits. If customers can find you through your website, you are a potential target.
      </p>

      <h2 className="text-2xl font-bold text-white mt-10 mb-4">Why Small Businesses Are Targeted More</h2>
      <div className="space-y-3 mb-8">
        {[
          { reason: "Less likely to have accessibility programs", desc: "Large corporations often have dedicated accessibility teams. Small businesses rarely think about web accessibility until they receive a demand letter." },
          { reason: "More likely to settle quickly", desc: "Small businesses can't afford prolonged litigation. Serial ADA plaintiffs know this — a quick $10K settlement is more profitable than a long fight with a corporation's legal team." },
          { reason: "Template websites with built-in issues", desc: "Many small businesses use website templates or page builders that have accessibility issues baked in. Every business using the same non-compliant template is a potential target." },
          { reason: "No documentation of compliance efforts", desc: "Courts look favorably on businesses that can demonstrate good-faith efforts to improve accessibility. Small businesses rarely have this documentation." },
        ].map((item) => (
          <div key={item.reason} className="bg-[#141414] border border-[#262626] rounded-xl p-5">
            <h3 className="text-white font-semibold mb-2">{item.reason}</h3>
            <p className="text-gray-400 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-white mt-10 mb-4">What Compliance Actually Costs (Less Than You Think)</h2>
      <p className="text-gray-300 leading-relaxed mb-4">
        Many small business owners assume ADA compliance requires expensive consultants or complete website redesigns. In reality, most small business websites need only a handful of fixes:
      </p>
      <div className="bg-[#141414] border border-[#262626] rounded-xl p-6 mb-8">
        <div className="space-y-3">
          {[
            { fix: "Add alt text to all images", cost: "$0 (DIY, 30 min–2 hours)", impact: "Fixes the #1 most cited ADA violation" },
            { fix: "Add labels to form fields", cost: "$0 (DIY, 15–30 min)", impact: "Fixes the #2 most cited ADA violation" },
            { fix: "Add HTML lang attribute", cost: "$0 (one line of code)", impact: "Fixes a critical screen reader issue" },
            { fix: "Fix heading hierarchy", cost: "$0 (DIY, 15–30 min)", impact: "Improves navigation for screen reader users" },
            { fix: "Add skip navigation link", cost: "$0 (DIY, 10 min)", impact: "Allows keyboard users to bypass menus" },
            { fix: "AccessScore Pro Report", cost: "$14.99", impact: "Identifies all issues with prioritized fix plan" },
          ].map((item) => (
            <div key={item.fix} className="flex items-start gap-4">
              <div className="flex-1">
                <p className="text-white text-sm font-medium">{item.fix}</p>
                <p className="text-gray-500 text-xs">{item.impact}</p>
              </div>
              <span className="text-green-400 text-sm font-medium shrink-0">{item.cost}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-[#262626]">
          <p className="text-white font-semibold text-sm">Total cost for most small businesses: $15–$500</p>
          <p className="text-gray-500 text-xs mt-1">vs. $22,000–$165,000 for an ADA lawsuit</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-white mt-10 mb-4">Step-by-Step: Getting Your Small Business Website Compliant</h2>
      <div className="space-y-4 mb-8">
        {[
          { step: "Step 1: Know Where You Stand", desc: "Use AccessScore to scan your website. You'll get an instant score, legal risk tier, and the top issues to fix. This takes 30 seconds and is free." },
          { step: "Step 2: Fix the Top 5 Issues", desc: "Our prioritized fix plan tells you exactly what to fix first. The top 5 issues typically address 70%+ of your legal risk. Most fixes are simple HTML changes." },
          { step: "Step 3: Add an Accessibility Statement", desc: "Publish a statement on your website describing your commitment to accessibility and providing a way for users to report issues. This shows good faith." },
          { step: "Step 4: Re-Scan Monthly", desc: "Website content changes over time. New pages, new images, new forms — each can introduce accessibility issues. A monthly scan catches problems early." },
          { step: "Step 5: Document Everything", desc: "Keep a record of your accessibility efforts: when you scanned, what you fixed, your AccessScore over time. This documentation is your best defense if you ever receive a demand letter." },
        ].map((item) => (
          <div key={item.step} className="bg-[#141414] border border-[#262626] rounded-xl p-5">
            <h3 className="text-white font-semibold mb-2">{item.step}</h3>
            <p className="text-gray-400 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-white mt-10 mb-4">Common Questions from Small Business Owners</h2>
      <div className="space-y-4 mb-8">
        {[
          { q: "My business is too small to be sued, right?", a: "No. There is no size minimum for ADA compliance. Businesses with 1 employee have been sued. Serial plaintiffs specifically target small businesses because they settle faster." },
          { q: "I use Squarespace/Wix/WordPress — aren't those already accessible?", a: "Partially. These platforms provide some accessibility features, but they don't guarantee compliance. Template choices, content you add (images without alt text, unlabeled forms), and customizations can all introduce violations." },
          { q: "Can I just add an accessibility widget/overlay?", a: "Overlays (like accessiBe or UserWay) have been widely criticized by the accessibility community and have NOT prevented lawsuits. Courts have ruled that overlays do not constitute compliance. Fix your actual code instead." },
          { q: "What if I get a demand letter?", a: "Don't panic. Document your accessibility efforts immediately (AccessScore reports are great for this). Consult an attorney who specializes in ADA defense. Show good faith by beginning remediation. Many demand letters are resolved through remediation agreements rather than lawsuits." },
        ].map((item) => (
          <details key={item.q} className="bg-[#141414] border border-[#262626] rounded-xl p-6 group">
            <summary className="text-white font-medium cursor-pointer list-none flex items-center justify-between">
              {item.q}
              <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <p className="text-gray-400 text-sm mt-4 leading-relaxed">{item.a}</p>
          </details>
        ))}
      </div>

      <div className="text-center mt-10">
        <a href="/" className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-lg transition-colors">
          Check Your Website — Free in 30 Seconds
        </a>
        <p className="text-gray-500 text-sm mt-3">Know your legal risk before someone else finds it.</p>
      </div>

      <div className="mt-12 pt-8 border-t border-[#262626]">
        <p className="text-gray-500 text-sm">
          Related: <a href="/ada-compliance-checker" className="text-blue-400 hover:underline">ADA Compliance Checker</a> &middot;{" "}
          <a href="/ada-lawsuit-risk" className="text-blue-400 hover:underline">ADA Lawsuit Risk</a> &middot;{" "}
          <a href="/free-accessibility-audit" className="text-blue-400 hover:underline">Free Accessibility Audit</a> &middot;{" "}
          <a href="/fix-website-accessibility" className="text-blue-400 hover:underline">Fix Accessibility Issues</a> &middot;{" "}
          <a href="/accessibility-checklist" className="text-blue-400 hover:underline">Accessibility Checklist</a>
        </p>
      </div>
    </main>
  );
}
