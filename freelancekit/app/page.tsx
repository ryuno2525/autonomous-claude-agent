"use client";

import { useState } from "react";

const tools = [
  {
    name: "SpeedCV",
    tagline: "Professional Resume Builder",
    description:
      "Create stunning, ATS-friendly resumes in minutes. Multiple templates, real-time preview, PDF export. Land more interviews with a resume that stands out.",
    price: "$14.99",
    priceNum: 14.99,
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
    features: ["ATS-optimized templates", "Real-time preview", "PDF export", "Multiple layouts"],
    url: "https://speedcv-six.vercel.app",
    color: "from-blue-500 to-cyan-400",
  },
  {
    name: "Invoicely",
    tagline: "Invoice Generator",
    description:
      "Generate professional invoices instantly. Add line items, taxes, discounts, and your branding. Download polished PDFs your clients will take seriously.",
    price: "$12.99",
    priceNum: 12.99,
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
      </svg>
    ),
    features: ["Custom branding", "Tax calculations", "Multiple currencies", "PDF download"],
    url: "https://invoicely-eight.vercel.app",
    color: "from-emerald-500 to-green-400",
  },
  {
    name: "ProposalForge",
    tagline: "Business Proposal Generator",
    description:
      "Win more clients with professional proposals. Structured templates for scope, timeline, and pricing. Export polished PDFs that close deals.",
    price: "$29.99",
    priceNum: 29.99,
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
    features: ["Scope & timeline builder", "Pricing tables", "Executive summaries", "Professional PDF export"],
    url: "https://proposalforge-zeta.vercel.app",
    color: "from-violet-500 to-purple-400",
  },
];

const buildFacts = [
  {
    stat: "100%",
    label: "Client-side",
    detail: "Your data never leaves your browser. No accounts, no cloud storage, complete privacy.",
  },
  {
    stat: "$0/mo",
    label: "Running costs",
    detail: "No server costs means no subscription pressure. Pay once, we keep the lights on forever.",
  },
  {
    stat: "3 tools",
    label: "One payment",
    detail: "Resume builder, invoice generator, and proposal creator. Everything a freelancer needs in one bundle.",
  },
];

const faqs = [
  {
    q: "What do I get with FreelanceKit?",
    a: "You get lifetime Pro access to three tools: SpeedCV (resume builder), Invoicely (invoice generator), and ProposalForge (proposal generator). All features unlocked, no subscriptions, no limits.",
  },
  {
    q: "Is this a subscription?",
    a: "No. It is a one-time payment of $49.99. You get lifetime access to all three tools and any future updates.",
  },
  {
    q: "Can I buy the tools separately?",
    a: "Yes. SpeedCV is $14.99, Invoicely is $12.99, and ProposalForge is $29.99 individually. That is $57.97 total. The bundle saves you 14%.",
  },
  {
    q: "Do I need to install anything?",
    a: "No. All three tools are web-based. They work in your browser on any device. Your data stays on your device for privacy.",
  },
  {
    q: "What if I already bought one of the tools?",
    a: "The bundle is still a great deal if you need the other tools. If you have bought one tool already, the bundle effectively gives you the other two at a steep discount.",
  },
  {
    q: "Is there a refund policy?",
    a: "If you are not satisfied, contact us within 7 days for a full refund. No questions asked.",
  },
];

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", { method: "POST" });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Something went wrong. Please try again.");
        setLoading(false);
      }
    } catch {
      alert("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  const totalValue = tools.reduce((sum, t) => sum + t.priceNum, 0);
  const bundlePrice = 49.99;
  const savings = Math.round((1 - bundlePrice / totalValue) * 100);

  return (
    <div className="min-h-screen gradient-bg">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#0a0a0f]/80 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0" />
              </svg>
            </div>
            <span className="text-lg font-bold text-white">FreelanceKit</span>
          </div>
          <button
            onClick={handleCheckout}
            disabled={loading}
            className="hidden sm:block px-5 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-full hover:bg-indigo-500 transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25"
          >
            Get the Kit — $49.99
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 px-4 sm:px-6 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-indigo-500/5 blur-3xl pointer-events-none" />
        <div className="absolute top-40 right-0 w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="fade-in fade-in-delay-1 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-300 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 pulse-dot" />
            3 Pro tools. 1 price. Lifetime access.
          </div>

          {/* Headline */}
          <h1 className="fade-in fade-in-delay-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
            Everything a freelancer needs to{" "}
            <span className="gradient-text">look professional.</span>
          </h1>

          {/* Subheadline */}
          <p className="fade-in fade-in-delay-3 text-lg sm:text-xl text-[#8888a0] max-w-2xl mx-auto mb-4 leading-relaxed">
            Build resumes that get interviews. Send invoices that get paid. Write proposals that close deals.
            Three essential tools, one simple payment.
          </p>

          {/* Pricing */}
          <div className="fade-in fade-in-delay-4 flex items-center justify-center gap-3 mb-8">
            <span className="relative text-2xl text-[#8888a0] strike-anim">${totalValue.toFixed(2)}</span>
            <span className="text-4xl sm:text-5xl font-bold text-white glow-text">$49.99</span>
            <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm font-semibold border border-green-500/20">
              Save {savings}%
            </span>
          </div>

          {/* CTA */}
          <div className="fade-in fade-in-delay-5 flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <button
              onClick={handleCheckout}
              disabled={loading}
              className="shimmer-btn w-full sm:w-auto px-10 py-4 text-lg font-bold text-white rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-indigo-500/20 hover:shadow-xl hover:shadow-indigo-500/30"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Processing...
                </span>
              ) : (
                "Get the Freelancer Toolkit — $49.99"
              )}
            </button>
          </div>

          <p className="fade-in fade-in-delay-6 text-sm text-[#8888a0]">
            One-time payment. No subscription. No hidden fees. Instant access.
          </p>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="border-y border-white/5 bg-white/[0.02] py-8 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-8 sm:gap-16 text-center">
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-white count-up">3</div>
            <div className="text-sm text-[#8888a0] mt-1">Pro Tools</div>
          </div>
          <div className="w-px h-10 bg-white/10 hidden sm:block" />
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-white count-up">$57.97</div>
            <div className="text-sm text-[#8888a0] mt-1">Total Value</div>
          </div>
          <div className="w-px h-10 bg-white/10 hidden sm:block" />
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-green-400 count-up">{savings}%</div>
            <div className="text-sm text-[#8888a0] mt-1">You Save</div>
          </div>
          <div className="w-px h-10 bg-white/10 hidden sm:block" />
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-white count-up">$0/mo</div>
            <div className="text-sm text-[#8888a0] mt-1">Ongoing Cost</div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="py-20 sm:py-28 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Three tools. One workflow.
            </h2>
            <p className="text-lg text-[#8888a0] max-w-2xl mx-auto">
              From landing the gig to getting paid, FreelanceKit covers every step of your freelance business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {tools.map((tool, i) => (
              <div
                key={tool.name}
                className={`card-hover relative rounded-2xl border border-white/[0.06] bg-[#12121a] p-8 fade-in fade-in-delay-${i + 2}`}
              >
                {/* Tool icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center text-white mb-6 float${i === 1 ? "-delay" : ""}`}>
                  {tool.icon}
                </div>

                {/* Tool name & price */}
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">{tool.name}</h3>
                  <span className="text-sm text-[#8888a0]">{tool.price} value</span>
                </div>

                <p className="text-sm font-medium text-indigo-400 mb-3">{tool.tagline}</p>
                <p className="text-[#8888a0] text-sm leading-relaxed mb-6">{tool.description}</p>

                {/* Features */}
                <ul className="space-y-2">
                  {tool.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-[#e8e8ed]">
                      <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Step number */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-xs font-bold text-[#8888a0]">
                  {i + 1}
                </div>
              </div>
            ))}
          </div>

          {/* Workflow arrow */}
          <div className="flex items-center justify-center mt-12 gap-4 text-[#8888a0]">
            <span className="text-sm">Land the gig</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
            <span className="text-sm">Do the work</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
            <span className="text-sm">Get paid</span>
          </div>
        </div>
      </section>

      {/* Why Bundle Section */}
      <section className="py-20 px-4 sm:px-6 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why buy the bundle?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Save money</h3>
                <p className="text-sm text-[#8888a0] leading-relaxed">
                  Pay $49.99 instead of $57.97. That is ${(totalValue - bundlePrice).toFixed(2)} back in your pocket from day one.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Instant access</h3>
                <p className="text-sm text-[#8888a0] leading-relaxed">
                  All three tools unlock immediately after purchase. No waiting, no setup, no downloads.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">No subscriptions</h3>
                <p className="text-sm text-[#8888a0] leading-relaxed">
                  Pay once, use forever. No monthly fees, no annual renewals, no surprise charges.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Privacy first</h3>
                <p className="text-sm text-[#8888a0] leading-relaxed">
                  All tools run in your browser. Your resumes, invoices, and proposals stay on your device.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 sm:py-28 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              The math is simple
            </h2>
            <p className="text-[#8888a0]">Buy separately or save with the bundle</p>
          </div>

          <div className="rounded-2xl border border-white/[0.06] bg-[#12121a] overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 text-sm font-semibold text-[#8888a0] uppercase tracking-wider border-b border-white/[0.06] px-6 py-4">
              <span>Tool</span>
              <span className="text-center">Separate</span>
              <span className="text-center">Bundle</span>
            </div>

            {/* Rows */}
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="grid grid-cols-3 items-center px-6 py-4 border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors"
              >
                <div>
                  <span className="text-white font-medium">{tool.name}</span>
                  <span className="block text-xs text-[#8888a0]">{tool.tagline}</span>
                </div>
                <span className="text-center text-white">{tool.price}</span>
                <span className="text-center text-green-400 font-medium">Included</span>
              </div>
            ))}

            {/* Total */}
            <div className="grid grid-cols-3 items-center px-6 py-5 bg-indigo-500/5">
              <span className="text-white font-bold">Total</span>
              <span className="text-center text-[#8888a0] line-through">${totalValue.toFixed(2)}</span>
              <span className="text-center text-2xl font-bold text-white">$49.99</span>
            </div>
          </div>

          <div className="text-center mt-8">
            <button
              onClick={handleCheckout}
              disabled={loading}
              className="shimmer-btn px-10 py-4 text-lg font-bold text-white rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 shadow-lg shadow-indigo-500/20"
            >
              {loading ? "Processing..." : "Get All 3 Tools for $49.99"}
            </button>
          </div>
        </div>
      </section>

      {/* Build Facts */}
      <section className="py-20 px-4 sm:px-6 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Built different
            </h2>
            <p className="text-[#8888a0]">No accounts. No subscriptions. No data collection.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {buildFacts.map((fact, i) => (
              <div
                key={i}
                className="card-hover rounded-2xl border border-white/[0.06] bg-[#12121a] p-8 text-center"
              >
                <div className="text-4xl font-bold gradient-text mb-2">{fact.stat}</div>
                <div className="text-lg font-semibold text-white mb-3">{fact.label}</div>
                <p className="text-sm text-[#8888a0] leading-relaxed">{fact.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-28 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Frequently asked questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-xl border border-white/[0.06] bg-[#12121a] overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-white/[0.02] transition-colors"
                >
                  <span className="text-white font-medium pr-4">{faq.q}</span>
                  <svg
                    className={`w-5 h-5 text-[#8888a0] flex-shrink-0 transition-transform duration-300 ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === i ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-6 pb-5 text-sm text-[#8888a0] leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 sm:py-28 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="rounded-2xl border border-indigo-500/20 bg-gradient-to-b from-indigo-500/10 to-transparent p-12 sm:p-16 glow">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to level up your freelance game?
            </h2>
            <p className="text-lg text-[#8888a0] mb-8 max-w-xl mx-auto">
              Join freelancers who use SpeedCV, Invoicely, and ProposalForge to look professional and get paid faster.
            </p>

            <button
              onClick={handleCheckout}
              disabled={loading}
              className="shimmer-btn px-12 py-5 text-xl font-bold text-white rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 shadow-xl shadow-indigo-500/25"
            >
              {loading ? "Processing..." : "Get the Freelancer Toolkit — $49.99"}
            </button>

            <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-[#8888a0]">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                One-time payment
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                Instant access
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                7-day money-back guarantee
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="sm:col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>
                </div>
                <span className="text-sm font-bold text-white">FreelanceKit</span>
              </div>
              <p className="text-xs text-[#8888a0] leading-relaxed">
                The complete freelancer toolkit. Resume builder, invoice generator, and proposal creator in one bundle.
              </p>
            </div>

            {/* Individual Tools */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-3">Tools</h4>
              <ul className="space-y-2">
                <li>
                  <a href="https://speedcv-six.vercel.app" target="_blank" rel="noopener noreferrer" className="text-sm text-[#8888a0] hover:text-white transition-colors">
                    SpeedCV — Resume Builder
                  </a>
                </li>
                <li>
                  <a href="https://invoicely-eight.vercel.app" target="_blank" rel="noopener noreferrer" className="text-sm text-[#8888a0] hover:text-white transition-colors">
                    Invoicely — Invoices
                  </a>
                </li>
                <li>
                  <a href="https://proposalforge-zeta.vercel.app" target="_blank" rel="noopener noreferrer" className="text-sm text-[#8888a0] hover:text-white transition-colors">
                    ProposalForge — Proposals
                  </a>
                </li>
              </ul>
            </div>

            {/* Other Tools */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-3">More Tools</h4>
              <ul className="space-y-2">
                <li>
                  <a href="https://screencraft-two.vercel.app" target="_blank" rel="noopener noreferrer" className="text-sm text-[#8888a0] hover:text-white transition-colors">
                    ScreenCraft — Screenshots
                  </a>
                </li>
                <li>
                  <a href="https://jsonhero-cyan.vercel.app" target="_blank" rel="noopener noreferrer" className="text-sm text-[#8888a0] hover:text-white transition-colors">
                    JSONHero — JSON Viewer
                  </a>
                </li>
                <li>
                  <a href="https://qrcraft-sigma.vercel.app" target="_blank" rel="noopener noreferrer" className="text-sm text-[#8888a0] hover:text-white transition-colors">
                    QRCraft — QR Codes
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-3">Info</h4>
              <ul className="space-y-2">
                <li>
                  <span className="text-sm text-[#8888a0]">One-time payment</span>
                </li>
                <li>
                  <span className="text-sm text-[#8888a0]">7-day refund policy</span>
                </li>
                <li>
                  <span className="text-sm text-[#8888a0]">Secure checkout via Stripe</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 text-center text-xs text-[#8888a0]">
            <p>&copy; {new Date().getFullYear()} FreelanceKit. All rights reserved. Payments processed securely by Stripe.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
