import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GDPR Privacy Policy Generator | Free & Compliant - PolicyForge",
  description:
    "Generate a free GDPR-compliant privacy policy for your website or app. Includes right of access, right to erasure, data portability, lawful basis for processing, and DPO contact details.",
  keywords:
    "GDPR privacy policy generator, GDPR compliant privacy policy, EU privacy policy, General Data Protection Regulation, GDPR template, data protection policy, GDPR rights, right to erasure, data portability",
};

export default function GdprPrivacyPolicyGenerator() {
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
          GDPR Privacy Policy Generator
        </h1>

        <div className="space-y-5 text-gray-300 leading-relaxed text-lg">
          <p>
            The General Data Protection Regulation (GDPR) is the world&apos;s
            strictest data protection law and applies to any business that
            processes personal data of individuals in the European Union,
            regardless of where the business is located. If you have even a
            single EU visitor, you are expected to comply. Non-compliance can
            result in fines of up to 4% of annual global revenue or 20 million
            euros, whichever is higher. A clear, comprehensive privacy policy is
            the foundation of GDPR compliance.
          </p>

          <p>
            A GDPR-compliant privacy policy must include specific elements: the
            identity and contact details of the data controller, the lawful
            basis for each type of data processing, a complete list of data
            subject rights (access, rectification, erasure, restriction,
            portability, and objection), details about data transfers outside the
            EU, retention periods for each category of data, and information
            about the right to lodge a complaint with a supervisory authority.
            Generic or vague privacy policies do not satisfy GDPR requirements.
          </p>

          <p>
            PolicyForge generates privacy policies that include all required GDPR
            disclosures. Select &quot;European Union (GDPR)&quot; as your
            jurisdiction, and the Pro version will generate a policy with full
            data subject rights sections, lawful basis disclosures, data
            retention clauses, and security measures. Get compliant in minutes
            instead of spending hours drafting legal text from scratch.
          </p>
        </div>

        <div className="mt-10">
          <Link
            href="/"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg text-lg hover:opacity-90 transition-opacity"
          >
            Generate Your GDPR Privacy Policy
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
