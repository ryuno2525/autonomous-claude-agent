"use client";

const tools = [
  {
    name: "SpeedCV",
    tagline: "Professional Resume Builder",
    description: "Create stunning, ATS-friendly resumes with multiple templates and PDF export.",
    url: "https://speedcv-six.vercel.app/success",
    color: "from-blue-500 to-cyan-400",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
  },
  {
    name: "Invoicely",
    tagline: "Invoice Generator",
    description: "Generate professional invoices with custom branding, taxes, and PDF download.",
    url: "https://invoicely-eight.vercel.app/success",
    color: "from-emerald-500 to-green-400",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
      </svg>
    ),
  },
  {
    name: "ProposalForge",
    tagline: "Business Proposal Generator",
    description: "Create winning proposals with structured templates, timelines, and pricing tables.",
    url: "https://proposalforge-zeta.vercel.app/success",
    color: "from-violet-500 to-purple-400",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
  },
];

export default function SuccessPage() {
  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center px-4 py-16">
      <div className="max-w-2xl w-full text-center">
        {/* Success checkmark */}
        <div className="fade-in fade-in-delay-1 w-20 h-20 mx-auto mb-8 rounded-full bg-green-500/10 border-2 border-green-500/30 flex items-center justify-center">
          <svg className="w-10 h-10 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>

        <h1 className="fade-in fade-in-delay-2 text-3xl sm:text-4xl font-bold text-white mb-4">
          Welcome to FreelanceKit!
        </h1>

        <p className="fade-in fade-in-delay-3 text-lg text-[#8888a0] mb-4">
          Your payment was successful. You now have lifetime Pro access to all three tools.
        </p>

        <p className="fade-in fade-in-delay-3 text-sm text-[#8888a0] mb-12">
          Click each tool below to activate your Pro access. Bookmark each one for quick access in the future.
        </p>

        {/* Tool cards */}
        <div className="space-y-4 mb-12">
          {tools.map((tool, i) => (
            <a
              key={tool.name}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`fade-in fade-in-delay-${i + 4} card-hover flex items-center gap-5 p-5 rounded-xl border border-white/[0.06] bg-[#12121a] text-left group`}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center text-white flex-shrink-0`}>
                {tool.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-lg font-semibold text-white">{tool.name}</h3>
                  <span className="px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 text-xs font-semibold border border-green-500/20">
                    PRO UNLOCKED
                  </span>
                </div>
                <p className="text-sm text-[#8888a0]">{tool.description}</p>
              </div>
              <svg className="w-5 h-5 text-[#8888a0] group-hover:text-white group-hover:translate-x-1 transition-all flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          ))}
        </div>

        {/* Important note */}
        <div className="fade-in fade-in-delay-6 rounded-xl border border-indigo-500/20 bg-indigo-500/5 p-6 mb-8">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
            </svg>
            <div className="text-left">
              <p className="text-sm text-indigo-300 font-medium mb-1">How to activate your Pro access</p>
              <p className="text-xs text-[#8888a0] leading-relaxed">
                Click each tool link above to visit its activation page. Pro features will be unlocked in your browser automatically.
                For the best experience, activate all three tools on the same device you plan to use them on.
              </p>
            </div>
          </div>
        </div>

        {/* Back link */}
        <a
          href="/"
          className="text-sm text-[#8888a0] hover:text-white transition-colors"
        >
          &larr; Back to FreelanceKit
        </a>
      </div>
    </div>
  );
}
