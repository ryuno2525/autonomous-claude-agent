"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleScan(e: React.FormEvent) {
    e.preventDefault();
    if (!url.trim()) return;
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/scan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url.trim() }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Scan failed. Please try again.");
        setLoading(false);
        return;
      }

      // Encode results and navigate
      const encoded = encodeURIComponent(JSON.stringify(data));
      router.push(`/results?data=${encoded}`);
    } catch {
      setError("Network error. Please check your connection and try again.");
      setLoading(false);
    }
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is ADA website compliance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Americans with Disabilities Act (ADA) requires businesses to provide equal access to their goods and services — including websites. Courts have consistently ruled that websites are 'places of public accommodation' under Title III. Non-compliant websites can face lawsuits, with settlements typically ranging from $5,000 to $75,000."
        }
      },
      {
        "@type": "Question",
        "name": "How does AccessScore calculate legal risk?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our risk model is based on publicly available ADA lawsuit settlement data. We weight violations by their frequency in actual lawsuits (e.g., missing alt text is the #1 cited violation), the number of affected elements, and severity. This produces a risk tier (LOW through CRITICAL) with estimated exposure ranges. This is not legal advice — consult an attorney for your specific situation."
        }
      },
      {
        "@type": "Question",
        "name": "What's the difference between the free scan and the Pro Report?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The free scan gives you your overall score, legal risk tier, and every issue found with fix code — perfect for developers. The Professional Audit Report ($29.99) adds an executive summary, remediation timeline, compliance dashboard, and a print-ready PDF format — designed for business owners to share with their web developer or legal team."
        }
      },
      {
        "@type": "Question",
        "name": "What WCAG standards do you check against?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We check against WCAG 2.1 Level A and Level AA criteria — these are the standards most commonly referenced in ADA lawsuits and DOJ guidance. Our 16 checks cover the most impactful criteria across images, structure, forms, and document metadata."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to be ADA compliant?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If your business operates in the US and has a website, you are likely subject to ADA requirements. This applies to businesses of all sizes — 67% of ADA website lawsuits target companies with under $25M in revenue. Even if your business is outside the US, WCAG compliance is increasingly required by regulations worldwide (e.g., EU's European Accessibility Act)."
        }
      }
    ]
  };

  return (
    <main className="max-w-6xl mx-auto px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Hero */}
      <section className="py-20 text-center">
        <div className="inline-block bg-red-500/10 text-red-400 text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-red-500/20">
          4,000+ ADA website lawsuits filed in 2024 — up 37% YoY
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Is your website<br />
          <span className="text-blue-400">ADA compliant?</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
          Free accessibility scan with legal risk assessment. Find violations before a lawyer does.
          Get your AccessScore in seconds.
        </p>

        <form onSubmit={handleScan} className="max-w-xl mx-auto">
          <label htmlFor="url-input" className="sr-only">Website URL to scan</label>
          <div className="flex gap-2">
            <input
              id="url-input"
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter your website URL..."
              className="flex-1 px-5 py-4 bg-[#141414] border border-[#333] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 text-lg"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading || !url.trim()}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:opacity-50 text-white rounded-xl font-semibold text-lg transition-colors whitespace-nowrap"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
                  Scanning...
                </span>
              ) : (
                "Scan Now"
              )}
            </button>
          </div>
          {error && <p className="text-red-400 mt-3 text-sm">{error}</p>}
          <p className="text-gray-500 text-sm mt-3">Free. No signup required. Results in seconds.</p>
        </form>
      </section>

      {/* Stats bar */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
        {[
          { stat: "4,000+", label: "ADA lawsuits in 2024" },
          { stat: "$5K–$75K", label: "Typical settlement range" },
          { stat: "67%", label: "Target small businesses" },
          { stat: "16", label: "Accessibility checks" },
        ].map((item) => (
          <div key={item.label} className="bg-[#141414] border border-[#262626] rounded-xl p-5 text-center">
            <div className="text-2xl font-bold text-white">{item.stat}</div>
            <div className="text-sm text-gray-400 mt-1">{item.label}</div>
          </div>
        ))}
      </section>

      {/* How it works */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-white text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: "1",
              title: "Enter Your URL",
              desc: "We fetch your page and analyze the HTML for accessibility barriers that affect real users and trigger lawsuits.",
            },
            {
              step: "2",
              title: "Get Your Score",
              desc: "See your AccessScore (0-100), legal risk tier, and the top issues to fix — with WCAG references and code examples.",
            },
            {
              step: "3",
              title: "Fix & Protect",
              desc: "Use our prioritized fix plan to address the highest-risk issues first. Each fix includes before/after code.",
            },
          ].map((item) => (
            <div key={item.step} className="bg-[#141414] border border-[#262626] rounded-xl p-6">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mb-4">
                {item.step}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What we check */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-white text-center mb-4">16 Checks Across 4 Categories</h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Based on WCAG 2.1 Level A and AA criteria — the standards courts reference in ADA lawsuits.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              category: "Images & Media",
              weight: "25%",
              checks: ["Alt text presence", "Alt text quality", "Video/audio captions", "Autoplay controls"],
              color: "blue",
            },
            {
              category: "Structure & Navigation",
              weight: "30%",
              checks: ["Heading hierarchy", "Skip navigation", "ARIA landmarks"],
              color: "purple",
            },
            {
              category: "Forms & Interactions",
              weight: "25%",
              checks: ["Form labels", "Button names", "Link text quality", "Tab order"],
              color: "green",
            },
            {
              category: "Document & Meta",
              weight: "20%",
              checks: ["HTML lang attribute", "Page title", "Viewport zoom", "Table headers", "Iframe titles"],
              color: "amber",
            },
          ].map((cat) => (
            <div key={cat.category} className="bg-[#141414] border border-[#262626] rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">{cat.category}</h3>
                <span className="text-sm text-gray-500">Weight: {cat.weight}</span>
              </div>
              <ul className="space-y-2">
                {cat.checks.map((check) => (
                  <li key={check} className="flex items-center gap-2 text-sm text-gray-300">
                    <svg className="w-4 h-4 text-blue-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {check}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Professional Report CTA */}
      <section className="mb-20 bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-2xl p-8 md:p-12">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block bg-blue-500/20 text-blue-400 text-xs font-bold px-3 py-1 rounded-full mb-4">
            PROFESSIONAL ADA COMPLIANCE AUDIT
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Need a Report You Can Share?</h2>
          <p className="text-gray-300 mb-6">
            The free scan shows every issue with fix code — built for developers. The Professional Audit Report
            is built for business owners: executive summary, remediation timeline, compliance dashboard, and
            a PDF you can hand to your web developer or legal team.
          </p>
          <div className="inline-block bg-[#141414] border border-[#333] rounded-xl px-8 py-4 mb-6">
            <span className="text-3xl font-bold text-white">$29.99</span>
            <span className="text-gray-400 ml-2">one-time</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 text-left max-w-lg mx-auto text-sm">
            {[
              "Executive summary for stakeholders",
              "Prioritized remediation timeline",
              "Compliance dashboard with risk scores",
              "WCAG criterion references for each issue",
              "Print-ready PDF format",
              "Before/after code fix examples",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 text-gray-300">
                <span className="text-green-400 mt-0.5">✓</span>
                {item}
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-xs mt-6">
            Average ADA settlement: $5,000–$25,000. A professional audit report costs $29.99.
          </p>
        </div>
      </section>

      {/* Done-For-You */}
      <section className="mb-20">
        <div className="bg-[#141414] border border-[#262626] rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Want Us to Handle Everything?</h2>
            <p className="text-gray-400 mb-6">
              Don&apos;t have time to fix accessibility issues yourself? Our team will audit your website,
              identify every WCAG violation, and deliver a professional compliance report with a step-by-step remediation plan.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              {[
                { name: "1-Page Audit", price: "$25", desc: "Single page scan + PDF report" },
                { name: "5-Page Audit", price: "$50", desc: "5 key pages + combined report" },
                { name: "Full Site Audit", price: "$100", desc: "10 pages + executive summary" },
              ].map((tier) => (
                <div key={tier.name} className="bg-[#0a0a0a] border border-[#333] rounded-xl p-4">
                  <div className="text-sm text-gray-400">{tier.name}</div>
                  <div className="text-xl font-bold text-white my-1">{tier.price}</div>
                  <div className="text-xs text-gray-500">{tier.desc}</div>
                </div>
              ))}
            </div>
            <a
              href="https://www.fiverr.com/ryunosuke_saito/audit-your-website-for-ada-accessibility-and-wcag-compliance"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold transition-colors"
            >
              Order Professional Audit
            </a>
            <p className="text-gray-500 text-xs mt-3">Delivered in 1-3 business days via Fiverr</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            {
              q: "What is ADA website compliance?",
              a: "The Americans with Disabilities Act (ADA) requires businesses to provide equal access to their goods and services — including websites. Courts have consistently ruled that websites are 'places of public accommodation' under Title III. Non-compliant websites can face lawsuits, with settlements typically ranging from $5,000 to $75,000.",
            },
            {
              q: "How does AccessScore calculate legal risk?",
              a: "Our risk model is based on publicly available ADA lawsuit settlement data. We weight violations by their frequency in actual lawsuits (e.g., missing alt text is the #1 cited violation), the number of affected elements, and severity. This produces a risk tier (LOW through CRITICAL) with estimated exposure ranges. This is not legal advice — consult an attorney for your specific situation.",
            },
            {
              q: "What's the difference between the free scan and the Pro Report?",
              a: "The free scan gives you your overall score, legal risk tier, and every issue with fix code — perfect for developers. The Professional Audit Report ($29.99) adds an executive summary, remediation timeline, compliance dashboard, and a print-ready PDF — designed for business owners to share with their web developer or legal team.",
            },
            {
              q: "What WCAG standards do you check against?",
              a: "We check against WCAG 2.1 Level A and Level AA criteria — these are the standards most commonly referenced in ADA lawsuits and DOJ guidance. Our 16 checks cover the most impactful criteria across images, structure, forms, and document metadata.",
            },
            {
              q: "Do I need to be ADA compliant?",
              a: "If your business operates in the US and has a website, you are likely subject to ADA requirements. This applies to businesses of all sizes — 67% of ADA website lawsuits target companies with under $25M in revenue. Even if your business is outside the US, WCAG compliance is increasingly required by regulations worldwide (e.g., EU's European Accessibility Act).",
            },
          ].map((item) => (
            <details key={item.q} className="bg-[#141414] border border-[#262626] rounded-xl p-6 group">
              <summary className="text-white font-medium cursor-pointer list-none flex items-center justify-between">
                {item.q}
                <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="text-gray-400 text-sm mt-4 leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="text-center py-16">
        <h2 className="text-3xl font-bold text-white mb-4">Don&apos;t Wait for a Demand Letter</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Scan your website now. Fix issues before they become lawsuits.
        </p>
        <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-lg transition-colors">
          Scan Your Website Free
        </a>
      </section>
    </main>
  );
}
