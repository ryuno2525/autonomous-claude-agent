import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy for Startups | Free Generator - PolicyForge",
  description:
    "Generate a free privacy policy for your startup. Covers MVP launch requirements, investor due diligence, user data handling, and compliance for seed to Series A companies. GDPR & CCPA ready.",
  keywords:
    "startup privacy policy, privacy policy for startup, MVP privacy policy, startup GDPR compliance, startup legal requirements, privacy policy template startup, tech startup privacy, startup data protection, SaaS startup privacy policy, startup compliance checklist",
};

export default function PrivacyPolicyForStartup() {
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
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Privacy Policy for Startups: The Complete Guide
        </h1>

        <p className="text-gray-400 text-lg mb-8">
          You&apos;re building fast and shipping faster. But launching without
          a privacy policy is a legal landmine that can cost you your first
          customers, your app store listing, and investor confidence. Here&apos;s
          how to get it right without slowing down.
        </p>

        <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-blue-800/40 rounded-xl p-6 mb-10">
          <h3 className="text-lg font-semibold text-white mb-2">
            Generate Your Startup Privacy Policy in 2 Minutes
          </h3>
          <p className="text-gray-300 text-sm mb-4">
            Skip the $2,000 lawyer bill. PolicyForge creates compliant privacy
            policies tailored to your startup&apos;s tech stack and data practices.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link
              href="/"
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2.5 px-6 rounded-lg transition text-sm"
            >
              Generate Free Policy
            </Link>
            <Link
              href="/check"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold py-2.5 px-6 rounded-lg transition text-sm"
            >
              Scan Your Site
            </Link>
          </div>
        </div>

        <div className="space-y-10 text-gray-300 leading-relaxed text-[17px]">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Why Startups Can&apos;t Skip Privacy Policies
            </h2>
            <p className="mb-4">
              &ldquo;We&apos;ll add a privacy policy later&rdquo; is one of the
              most common &mdash; and most dangerous &mdash; startup mistakes.
              Here&apos;s why it matters from day one:
            </p>
            <div className="space-y-4">
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-1">App Store Requirement</h4>
                <p className="text-sm text-gray-400">Both Apple App Store and Google Play Store require a privacy policy URL before your app can be published. No policy = no launch.</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-1">Payment Processor Requirement</h4>
                <p className="text-sm text-gray-400">Stripe, PayPal, and most payment processors require a privacy policy on your website before activating your account. No policy = no payments.</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-1">Investor Due Diligence</h4>
                <p className="text-sm text-gray-400">VCs check for compliance during due diligence. A missing or inadequate privacy policy is a red flag that signals operational immaturity.</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-1">Legal Liability</h4>
                <p className="text-sm text-gray-400">GDPR fines can reach &euro;20M or 4% of global revenue. CCPA violations cost $2,500-$7,500 per incident. Even pre-revenue startups are liable.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Startup Privacy Policy by Stage
            </h2>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">
              Pre-Launch / MVP
            </h3>
            <p className="mb-4">
              At the MVP stage, your privacy policy can be straightforward.
              Cover the basics: what data you collect (usually email, name,
              usage data), why you collect it, how you store it, and who you
              share it with (typically analytics and hosting providers). You
              don&apos;t need to hire a lawyer. A well-structured template that
              covers GDPR and CCPA basics is sufficient for launch.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">
              Seed Stage (First Users)
            </h3>
            <p className="mb-4">
              As you onboard users, your data practices evolve. You&apos;re
              likely adding analytics (Mixpanel, Amplitude), marketing tools
              (Mailchimp, ConvertKit), and possibly payment processing (Stripe).
              Your privacy policy needs to list these third-party services,
              explain cookies and tracking, and include a clear data deletion
              process. If you&apos;re processing European users&apos; data, you
              need a GDPR-compliant legal basis for each type of processing.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">
              Series A and Beyond
            </h3>
            <p className="mb-4">
              At this stage, investors and enterprise customers will scrutinize
              your privacy practices. You need comprehensive privacy policies
              covering all products and services, a cookie consent mechanism
              (not just a banner &mdash; actual consent management), a data
              processing agreement (DPA) for B2B customers, a designated Data
              Protection Officer if processing at scale, and regular privacy
              impact assessments for new features.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              What Every Startup Privacy Policy Must Include
            </h2>
            <div className="bg-gray-900/50 rounded-xl p-6">
              <div className="space-y-4 text-sm">
                <div className="flex gap-4">
                  <span className="text-green-400 w-6 flex-shrink-0">1.</span>
                  <div>
                    <span className="font-semibold text-white">Company identity and contact information</span>
                    <p className="text-gray-400 mt-1">Your company name, address, and how users can reach you about privacy concerns.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-green-400 w-6 flex-shrink-0">2.</span>
                  <div>
                    <span className="font-semibold text-white">What data you collect</span>
                    <p className="text-gray-400 mt-1">Be specific: email addresses, IP addresses, device info, usage data, payment information, uploaded content.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-green-400 w-6 flex-shrink-0">3.</span>
                  <div>
                    <span className="font-semibold text-white">Why you collect it (legal basis)</span>
                    <p className="text-gray-400 mt-1">GDPR requires a specific legal basis: consent, contract, legitimate interest, or legal obligation.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-green-400 w-6 flex-shrink-0">4.</span>
                  <div>
                    <span className="font-semibold text-white">Third-party services</span>
                    <p className="text-gray-400 mt-1">List every service that receives user data: analytics, payments, hosting, email, ads, support tools.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-green-400 w-6 flex-shrink-0">5.</span>
                  <div>
                    <span className="font-semibold text-white">Cookies and tracking</span>
                    <p className="text-gray-400 mt-1">What cookies you use, what they do, and how users can manage them. EU law requires opt-in consent.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-green-400 w-6 flex-shrink-0">6.</span>
                  <div>
                    <span className="font-semibold text-white">User rights</span>
                    <p className="text-gray-400 mt-1">Right to access, delete, correct, and port their data. Right to withdraw consent. Right to complain to authorities.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-green-400 w-6 flex-shrink-0">7.</span>
                  <div>
                    <span className="font-semibold text-white">Data retention periods</span>
                    <p className="text-gray-400 mt-1">How long you keep data and what happens when a user deletes their account.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-green-400 w-6 flex-shrink-0">8.</span>
                  <div>
                    <span className="font-semibold text-white">International data transfers</span>
                    <p className="text-gray-400 mt-1">If you use US-based services (AWS, Vercel, Stripe), explain the legal mechanism for EU data transfers.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              The Cost of Not Having a Privacy Policy
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-4 text-gray-400">Risk</th>
                    <th className="text-left py-3 px-4 text-gray-400">Potential Cost</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4">GDPR fine (non-compliance)</td>
                    <td className="py-3 px-4 text-red-400 font-semibold">Up to &euro;20,000,000</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4">CCPA fine (per violation)</td>
                    <td className="py-3 px-4 text-red-400 font-semibold">$2,500 - $7,500</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4">App Store rejection</td>
                    <td className="py-3 px-4 text-yellow-400 font-semibold">Delayed launch</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4">Failed investor due diligence</td>
                    <td className="py-3 px-4 text-yellow-400 font-semibold">Lost funding round</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4">Enterprise deal lost</td>
                    <td className="py-3 px-4 text-yellow-400 font-semibold">$10K - $500K+ ARR</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">User trust damage</td>
                    <td className="py-3 px-4 text-yellow-400 font-semibold">Immeasurable</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 bg-green-900/20 border border-green-800/30 rounded-lg p-4">
              <p className="text-sm text-green-300">
                <strong>Cost of PolicyForge Pro:</strong> $12.99 (one-time).
                Generate unlimited privacy policies, terms of service, and
                cookie policies. No subscription. No hidden fees.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              FAQ: Startup Privacy Policies
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Do I need a privacy policy before launching my MVP?
                </h3>
                <p>
                  Yes. If your MVP collects any user data (including email for
                  waitlists), you legally need a privacy policy. Both app stores
                  require one before listing. Stripe and most payment processors
                  require one before activation. Generate one in 2 minutes with
                  PolicyForge rather than delaying your launch.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Can I just copy someone else&apos;s privacy policy?
                </h3>
                <p>
                  No. Privacy policies must accurately describe YOUR data
                  practices. Copying another company&apos;s policy means it
                  likely doesn&apos;t match what you actually do with data,
                  which makes it legally useless and potentially harmful. It
                  could also constitute copyright infringement.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Do I need a lawyer for my privacy policy?
                </h3>
                <p>
                  At the MVP/seed stage, a well-crafted template that covers
                  GDPR and CCPA requirements is sufficient. A privacy-focused
                  lawyer becomes worthwhile at Series A when you&apos;re
                  handling significant data volumes, processing sensitive data,
                  or selling to enterprises. Until then, a tool like PolicyForge
                  provides 90% of what a lawyer would produce at 1% of the cost.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  How often should I update my privacy policy?
                </h3>
                <p>
                  Update it whenever you add a new third-party service, change
                  how you collect or use data, enter new markets (especially
                  EU or California), or add new product features that affect
                  data processing. At minimum, review it quarterly.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-800/30 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-4 text-center">
              Launch Compliant. Start Now.
            </h2>
            <p className="text-gray-300 text-center mb-6">
              Don&apos;t let a missing privacy policy delay your launch or
              scare off investors. Generate a customized, GDPR-compliant
              privacy policy in under 2 minutes.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/"
                className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-8 rounded-lg transition"
              >
                Generate Free Policy — $0
              </Link>
              <Link
                href="/check"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-lg transition"
              >
                Check Your Compliance
              </Link>
            </div>
            <p className="text-center text-sm text-gray-500 mt-4">
              Free tier: 2 generations/day. Pro: $12.99 one-time for unlimited.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
