import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CCPA Privacy Policy Generator | Free California Compliant - PolicyForge",
  description:
    "Generate a free CCPA-compliant privacy policy for your business. Covers right to know, right to delete, right to opt-out of sale, and non-discrimination. California Consumer Privacy Act compliant.",
  keywords:
    "CCPA privacy policy generator, California Consumer Privacy Act, CCPA compliant privacy policy, California privacy policy, CCPA template, right to opt out, do not sell my personal information, CPRA privacy policy",
};

export default function CcpaPrivacyPolicyGenerator() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#ededed]">
      <header className="border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
              P
            </div>
            <span className="text-white font-semibold text-lg">
              PolicyForge
            </span>
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
          CCPA Privacy Policy Generator
        </h1>

        <div className="space-y-5 text-gray-300 leading-relaxed text-lg">
          <p>
            The California Consumer Privacy Act (CCPA), as amended by the
            California Privacy Rights Act (CPRA), gives California residents
            significant rights over their personal information. If your business
            has annual gross revenue over $25 million, processes the personal
            information of 100,000 or more California residents, or earns more
            than 50% of revenue from selling personal information, you must
            comply with the CCPA. Even smaller businesses often choose to comply
            proactively, since California is the largest consumer market in the
            United States.
          </p>

          <p>
            A CCPA-compliant privacy policy must disclose the categories of
            personal information you collect and the purposes for collection, the
            categories of third parties you share data with, and whether you sell
            or share personal information for targeted advertising. You must
            also inform consumers of their rights: the right to know what data
            you have collected, the right to delete it, the right to opt out of
            the sale or sharing of their data, and the right to non-discrimination
            for exercising these rights. A &quot;Do Not Sell or Share My
            Personal Information&quot; link is required on your website if
            applicable.
          </p>

          <p>
            PolicyForge makes CCPA compliance straightforward. Select
            &quot;United States (CCPA)&quot; as your jurisdiction, and the
            generated policy will include all required CCPA disclosures. The Pro
            version adds detailed consumer rights sections, data category
            breakdowns, and opt-out provisions that satisfy both the original
            CCPA and the updated CPRA requirements.
          </p>
        </div>

        <div className="mt-10">
          <Link
            href="/"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg text-lg hover:opacity-90 transition-opacity"
          >
            Generate Your CCPA Privacy Policy
          </Link>
        </div>
      </main>

      <footer className="border-t border-white/10 mt-16 py-8 text-center text-sm text-gray-500">
        <p>
          PolicyForge &mdash; Part of the{" "}
          <a
            href="https://dashboard-mocha-delta-98.vercel.app"
            className="text-blue-400 hover:text-blue-300"
          >
            Autonomous Claude Experiment
          </a>
        </p>
        <p className="mt-2 text-xs text-gray-600">
          Disclaimer: This generator provides template privacy policies for
          informational purposes. Consult a qualified attorney for
          jurisdiction-specific legal advice.
        </p>
      </footer>
    </div>
  );
}
