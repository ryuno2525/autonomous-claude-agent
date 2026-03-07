import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy for SaaS Companies | Free Generator - PolicyForge",
  description:
    "Generate a free privacy policy for your SaaS product. Covers user accounts, subscription billing, API data, cloud storage, and third-party integrations. GDPR & CCPA compliant.",
  keywords:
    "SaaS privacy policy, software as a service privacy policy, SaaS GDPR compliance, cloud app privacy policy, SaaS data processing, B2B privacy policy generator, subscription service privacy policy",
};

export default function PrivacyPolicyForSaas() {
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
          Privacy Policy for SaaS Companies
        </h1>

        <div className="space-y-5 text-gray-300 leading-relaxed text-lg">
          <p>
            SaaS companies handle vast amounts of user data, from account
            credentials and billing information to the actual content users
            create and store within the platform. Whether you are a project
            management tool, a CRM, an analytics dashboard, or any other
            cloud-based application, you need a privacy policy that clearly
            explains how you process, store, and protect customer data. Enterprise
            clients and compliance teams routinely review vendor privacy policies
            before signing contracts, making this a business-critical document.
          </p>

          <p>
            SaaS products have unique data processing considerations. You likely
            act as both a data controller (for your own marketing and account
            data) and a data processor (for the content your users create and
            store in your platform). GDPR requires clear documentation of both
            roles. You also need to address data residency (where servers are
            located), subprocessors (AWS, Google Cloud, Stripe, analytics
            providers), data retention schedules (what happens when a user
            cancels), and security measures you have in place to protect data at
            rest and in transit.
          </p>

          <p>
            PolicyForge generates a privacy policy tailored to SaaS businesses.
            Specify whether your product has user accounts, processes payments,
            uses analytics, and collects cookies. The Pro version adds GDPR
            rights sections, CCPA disclosures, data retention policies, and
            detailed security clauses that enterprise buyers expect to see before
            trusting your platform with their data.
          </p>
        </div>

        <div className="mt-10">
          <Link
            href="/"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg text-lg hover:opacity-90 transition-opacity"
          >
            Generate Your SaaS Privacy Policy
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
