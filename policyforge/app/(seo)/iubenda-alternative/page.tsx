import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best iubenda Alternative in 2026 — Save $100+/Year | PolicyForge",
  description:
    "Looking for an iubenda alternative? PolicyForge offers privacy policy generation, compliance scanning, and ToS generation for a one-time $4.99 — no subscription. Compare features side-by-side.",
  keywords:
    "iubenda alternative, iubenda vs PolicyForge, cheaper than iubenda, privacy policy generator alternative, iubenda pricing, iubenda competitor, iubenda free alternative, replace iubenda",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is PolicyForge a good alternative to iubenda?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PolicyForge is an excellent alternative to iubenda for businesses that need privacy policy generation, terms of service generation, and compliance scanning without a recurring subscription. PolicyForge costs $4.99-$12.99 one-time compared to iubenda's $29-$99+/year. However, if you need a cookie consent banner or consent logging, iubenda may be the better choice.",
      },
    },
    {
      "@type": "Question",
      name: "How much does iubenda cost per year?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "iubenda's Pro plan starts at approximately $29/year for a single site, but quickly scales to $99+/year when you add cookie consent, internal privacy management, and additional sites. Over 3 years, that's $87-$297+. PolicyForge charges a one-time fee of $4.99 (Starter) or $12.99 (Pro).",
      },
    },
    {
      "@type": "Question",
      name: "Does PolicyForge have a cookie solution like iubenda?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PolicyForge generates cookie policies but does not offer a cookie consent banner or cookie scanning. If you need automated cookie detection and a consent management platform, iubenda's Cookie Solution is more comprehensive. PolicyForge focuses on policy generation and compliance scanning.",
      },
    },
    {
      "@type": "Question",
      name: "Can I switch from iubenda to PolicyForge?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Generate a new privacy policy with PolicyForge, customize it for your business, and replace iubenda's embedded policy on your website. The switch takes about 5 minutes. You'll own the policy text directly instead of relying on iubenda's hosted solution.",
      },
    },
    {
      "@type": "Question",
      name: "Is PolicyForge free to try?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. PolicyForge offers 2 free policy generations per day. The compliance scanner at /check is completely free with no limits. No account or credit card required. The Starter tier ($4.99 one-time) and Pro tier ($12.99 one-time) unlock additional features.",
      },
    },
  ],
};

export default function IubendaAlternative() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#ededed]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

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
          Looking for an iubenda Alternative? Here&apos;s What to Consider
        </h1>

        <p className="text-gray-400 text-lg mb-8">
          iubenda is one of the most well-known privacy compliance platforms,
          used by over 100,000 businesses worldwide. But its subscription
          pricing, complex interface, and upsell-heavy model have many small
          businesses looking for simpler, more affordable alternatives. This
          guide compares iubenda with PolicyForge across the features that
          actually matter for your privacy compliance.
        </p>

        <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-blue-800/40 rounded-xl p-6 mb-10">
          <h3 className="text-lg font-semibold text-white mb-2">
            Try PolicyForge Free &mdash; No Account Required
          </h3>
          <p className="text-gray-300 text-sm mb-4">
            Generate a GDPR &amp; CCPA compliant privacy policy in under 2
            minutes. No signup, no credit card, no subscription. See why
            businesses are switching from iubenda.
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
              Free Compliance Scanner
            </Link>
          </div>
        </div>

        <div className="space-y-10 text-gray-300 leading-relaxed text-[17px]">
          {/* Side-by-side comparison table */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              iubenda vs PolicyForge: Side-by-Side Comparison
            </h2>
            <p className="mb-6">
              Here&apos;s how the two platforms compare across the features that
              matter most for privacy compliance.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">
                      Feature
                    </th>
                    <th className="text-center py-3 px-4 text-gray-400 font-medium">
                      iubenda
                    </th>
                    <th className="text-center py-3 px-4 text-blue-400 font-medium">
                      PolicyForge
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  <tr className="bg-white/5">
                    <td className="py-3 px-4 text-white font-medium">Price</td>
                    <td className="py-3 px-4 text-center text-red-400">
                      $29-$99+/year
                    </td>
                    <td className="py-3 px-4 text-center text-green-400">
                      $4.99-$12.99 one-time
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-white font-medium">
                      Privacy Policy Generator
                    </td>
                    <td className="py-3 px-4 text-center text-green-400">
                      &#x2713;
                    </td>
                    <td className="py-3 px-4 text-center text-green-400">
                      &#x2713;
                    </td>
                  </tr>
                  <tr className="bg-white/5">
                    <td className="py-3 px-4 text-white font-medium">
                      Cookie Consent Banner
                    </td>
                    <td className="py-3 px-4 text-center text-green-400">
                      &#x2713; (paid add-on)
                    </td>
                    <td className="py-3 px-4 text-center text-red-400">
                      &#x2717;
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-white font-medium">
                      Compliance Scanner
                    </td>
                    <td className="py-3 px-4 text-center text-red-400">
                      &#x2717;
                    </td>
                    <td className="py-3 px-4 text-center text-green-400">
                      &#x2713; (Free)
                    </td>
                  </tr>
                  <tr className="bg-white/5">
                    <td className="py-3 px-4 text-white font-medium">
                      Terms of Service Generator
                    </td>
                    <td className="py-3 px-4 text-center text-green-400">
                      &#x2713;
                    </td>
                    <td className="py-3 px-4 text-center text-green-400">
                      &#x2713;
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-white font-medium">
                      Self-Hosted Policies
                    </td>
                    <td className="py-3 px-4 text-center text-yellow-400">
                      Hosted by iubenda
                    </td>
                    <td className="py-3 px-4 text-center text-green-400">
                      You own the text
                    </td>
                  </tr>
                  <tr className="bg-white/5">
                    <td className="py-3 px-4 text-white font-medium">
                      Account Required
                    </td>
                    <td className="py-3 px-4 text-center text-yellow-400">
                      Yes
                    </td>
                    <td className="py-3 px-4 text-center text-green-400">
                      No
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-white font-medium">
                      Recurring Cost
                    </td>
                    <td className="py-3 px-4 text-center text-red-400">
                      Annual subscription
                    </td>
                    <td className="py-3 px-4 text-center text-green-400">
                      One-time payment
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* The iubenda Lock-In Problem */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              The iubenda Lock-In Problem
            </h2>
            <p className="mb-4">
              One of the most common complaints about iubenda is vendor lock-in.
              When you use iubenda, your privacy policy is hosted on their
              servers and embedded on your site via JavaScript or iframe. This
              creates several problems:
            </p>
            <div className="space-y-4">
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-1">
                  Your Policy Disappears If You Cancel
                </h4>
                <p className="text-sm text-gray-400">
                  If you stop paying iubenda, the embedded policy on your website
                  stops working. Your visitors see a broken embed or empty page
                  where your privacy policy used to be. This effectively forces
                  you to keep paying or scramble for a replacement.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-1">
                  No Export of Your Policy Text
                </h4>
                <p className="text-sm text-gray-400">
                  iubenda generates your policy on their platform. If you want
                  to switch providers, you need to regenerate your entire policy
                  from scratch. With PolicyForge, you get the full policy text
                  that you copy and paste directly into your site &mdash; you own
                  it completely.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-1">
                  JavaScript Dependency
                </h4>
                <p className="text-sm text-gray-400">
                  iubenda&apos;s embed requires loading external JavaScript from
                  their servers. This adds a dependency on their uptime, can
                  slow down your page load, and creates issues for users who
                  block third-party scripts. PolicyForge&apos;s output is plain
                  HTML text with zero external dependencies.
                </p>
              </div>
            </div>
          </section>

          {/* Where iubenda Excels */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Where iubenda Excels
            </h2>
            <p className="mb-4">
              iubenda has genuine strengths that are worth acknowledging. If
              these features are critical for your business, iubenda may still
              be the right choice:
            </p>
            <div className="space-y-4">
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-1">
                  Cookie Solution &amp; Consent Management
                </h4>
                <p className="text-sm text-gray-400">
                  iubenda&apos;s Cookie Solution automatically scans your
                  website for cookies, categorizes them, and generates a
                  consent banner. It integrates with Google Consent Mode and
                  IAB TCF 2.2. If you need comprehensive cookie management,
                  this is a genuine advantage over PolicyForge.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-1">
                  Internal Privacy Management
                </h4>
                <p className="text-sm text-gray-400">
                  iubenda offers tools for managing internal privacy processes
                  like data processing records, consent databases, and data
                  subject access requests. This is useful for mid-size
                  companies that need to demonstrate GDPR compliance beyond
                  just having a privacy policy.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-1">
                  Multi-Language Support
                </h4>
                <p className="text-sm text-gray-400">
                  iubenda generates policies in 10+ languages, which is
                  essential for businesses operating across multiple countries.
                  PolicyForge currently generates policies in English only.
                </p>
              </div>
            </div>
          </section>

          {/* Where PolicyForge Excels */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Where PolicyForge Excels
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-green-500">
                <h4 className="font-semibold text-white mb-1">
                  One-Time Pricing (No Recurring Fees Ever)
                </h4>
                <p className="text-sm text-gray-400">
                  PolicyForge Starter costs $4.99 once. Pro costs $12.99 once.
                  Not per month. Not per year. Once. With iubenda, you&apos;re
                  paying $29-$99+ every year. Over 3 years, that&apos;s
                  $87-$297+ with iubenda vs $4.99-$12.99 total with PolicyForge.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-green-500">
                <h4 className="font-semibold text-white mb-1">
                  You Own Your Policy (No Lock-In)
                </h4>
                <p className="text-sm text-gray-400">
                  PolicyForge generates plain text that you copy and paste into
                  your website. No embeds, no JavaScript, no dependency on our
                  servers. If you decide to stop using PolicyForge tomorrow,
                  your privacy policy keeps working perfectly because it&apos;s
                  just text on your site.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-green-500">
                <h4 className="font-semibold text-white mb-1">
                  Free Compliance Scanner
                </h4>
                <p className="text-sm text-gray-400">
                  PolicyForge includes a{" "}
                  <Link
                    href="/check"
                    className="text-blue-400 hover:underline"
                  >
                    free compliance scanner
                  </Link>{" "}
                  that analyzes any website&apos;s privacy posture across 11
                  dimensions. Enter any URL and get an instant compliance score.
                  iubenda does not offer a comparable free scanning tool.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-green-500">
                <h4 className="font-semibold text-white mb-1">
                  No Account or Signup Required
                </h4>
                <p className="text-sm text-gray-400">
                  PolicyForge works instantly. No account creation, no email
                  verification, no onboarding flow. iubenda requires signup and
                  walks you through a multi-step setup process before you can
                  generate anything.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-green-500">
                <h4 className="font-semibold text-white mb-1">
                  Simpler Interface
                </h4>
                <p className="text-sm text-gray-400">
                  iubenda&apos;s dashboard can feel overwhelming with its many
                  modules, add-ons, and configuration options. PolicyForge has a
                  single-page generator: answer questions, click generate, get
                  your policy. The entire process takes under 2 minutes.
                </p>
              </div>
            </div>
          </section>

          {/* Real Cost Over Time */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              The Real Cost of iubenda Over Time
            </h2>
            <p className="mb-6">
              iubenda&apos;s pricing page shows relatively low numbers, but the
              subscription model means costs compound year over year:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">
                      Time Period
                    </th>
                    <th className="text-center py-3 px-4 text-gray-400 font-medium">
                      iubenda Pro
                    </th>
                    <th className="text-center py-3 px-4 text-blue-400 font-medium">
                      PolicyForge Pro
                    </th>
                    <th className="text-center py-3 px-4 text-green-400 font-medium">
                      You Save
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  <tr className="bg-white/5">
                    <td className="py-3 px-4 text-white font-medium">Year 1</td>
                    <td className="py-3 px-4 text-center text-red-400">$29+</td>
                    <td className="py-3 px-4 text-center text-green-400">$12.99</td>
                    <td className="py-3 px-4 text-center text-green-400 font-semibold">$16+</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-white font-medium">Year 2</td>
                    <td className="py-3 px-4 text-center text-red-400">$58+</td>
                    <td className="py-3 px-4 text-center text-green-400">$12.99</td>
                    <td className="py-3 px-4 text-center text-green-400 font-semibold">$45+</td>
                  </tr>
                  <tr className="bg-white/5">
                    <td className="py-3 px-4 text-white font-medium">Year 3</td>
                    <td className="py-3 px-4 text-center text-red-400">$87+</td>
                    <td className="py-3 px-4 text-center text-green-400">$12.99</td>
                    <td className="py-3 px-4 text-center text-green-400 font-semibold">$74+</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-white font-medium">Year 5</td>
                    <td className="py-3 px-4 text-center text-red-400">$145+</td>
                    <td className="py-3 px-4 text-center text-green-400">$12.99</td>
                    <td className="py-3 px-4 text-center text-green-400 font-semibold">$132+</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Based on iubenda Pro plan pricing as of early 2026. With cookie
              consent add-on, costs increase to $99+/year ($495+ over 5 years).
            </p>
          </section>

          {/* Who Should Switch */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Who Should Switch to PolicyForge
            </h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-green-400 mt-1 flex-shrink-0">&#x2713;</span>
                <div>
                  <span className="text-white font-medium">Small businesses and freelancers</span>
                  <p className="text-sm text-gray-400 mt-1">
                    If iubenda&apos;s subscription feels like overkill for your needs, PolicyForge gives you the same core output at a fraction of the cost.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-400 mt-1 flex-shrink-0">&#x2713;</span>
                <div>
                  <span className="text-white font-medium">Developers who want to own their policy text</span>
                  <p className="text-sm text-gray-400 mt-1">
                    No JavaScript embeds, no hosted policies, no dependency on a third-party service. Just plain text you control completely.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-400 mt-1 flex-shrink-0">&#x2713;</span>
                <div>
                  <span className="text-white font-medium">
                    <Link href="/privacy-policy-for-saas" className="text-blue-400 hover:underline">SaaS builders</Link> and{" "}
                    <Link href="/privacy-policy-for-startup" className="text-blue-400 hover:underline">startups</Link>
                  </span>
                  <p className="text-sm text-gray-400 mt-1">
                    You need a privacy policy and terms of service, not a full compliance platform. Generate both in 5 minutes and get back to building.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-400 mt-1 flex-shrink-0">&#x2713;</span>
                <div>
                  <span className="text-white font-medium">Multi-project developers</span>
                  <p className="text-sm text-gray-400 mt-1">
                    iubenda charges per site. PolicyForge Pro covers unlimited generations for all your projects with one payment.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Who Should Stay With iubenda */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Who Should Stay With iubenda
            </h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-yellow-400 mt-1 flex-shrink-0">&#x25B6;</span>
                <div>
                  <span className="text-white font-medium">You need cookie consent management</span>
                  <p className="text-sm text-gray-400 mt-1">
                    iubenda&apos;s Cookie Solution is one of the best in the market. If you need automated cookie scanning, consent banners, and Google Consent Mode integration, iubenda delivers this and PolicyForge does not.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-yellow-400 mt-1 flex-shrink-0">&#x25B6;</span>
                <div>
                  <span className="text-white font-medium">You operate in multiple languages</span>
                  <p className="text-sm text-gray-400 mt-1">
                    iubenda supports 10+ languages. If your business serves customers in non-English markets and you need localized policies, iubenda has a clear advantage here.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-yellow-400 mt-1 flex-shrink-0">&#x25B6;</span>
                <div>
                  <span className="text-white font-medium">You need internal privacy management tools</span>
                  <p className="text-sm text-gray-400 mt-1">
                    If you need to manage data processing records, handle DSAR requests, or maintain a consent database for GDPR compliance, iubenda&apos;s broader platform makes sense.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-800/30 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-4 text-center">
              Ready to Switch from iubenda?
            </h2>
            <p className="text-gray-300 text-center mb-2">
              Stop paying $29-$99/year for something that should cost $4.99 once.
            </p>
            <p className="text-gray-400 text-center mb-6 text-sm">
              Generate a GDPR &amp; CCPA compliant privacy policy in under 2
              minutes. No account required. No vendor lock-in. No recurring fees.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/"
                className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-8 rounded-lg transition"
              >
                Generate Free Policy
              </Link>
              <Link
                href="/check"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-lg transition"
              >
                Scan Your Site Free
              </Link>
            </div>
          </section>

          {/* FAQ Section */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Is PolicyForge a good alternative to iubenda?
                </h3>
                <p>
                  PolicyForge is an excellent alternative for businesses that
                  need privacy policy generation, terms of service generation,
                  and compliance scanning without a recurring subscription.
                  PolicyForge costs $4.99-$12.99 one-time compared to
                  iubenda&apos;s $29-$99+/year. However, if you need a cookie
                  consent banner or internal privacy management, iubenda may be
                  the better choice.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  How much does iubenda cost per year?
                </h3>
                <p>
                  iubenda&apos;s Pro plan starts at approximately $29/year for
                  basic policy generation. Adding cookie consent increases this
                  to $99+/year. Over 3 years, that&apos;s $87-$297+. PolicyForge
                  charges a one-time fee with no recurring costs.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Does PolicyForge have a cookie solution like iubenda?
                </h3>
                <p>
                  PolicyForge generates cookie policies but does not offer a
                  cookie consent banner or automated cookie scanning. If cookie
                  consent management is critical, consider using PolicyForge for
                  policy generation and a dedicated free cookie consent tool
                  like CookieYes.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Can I switch from iubenda to PolicyForge?
                </h3>
                <p>
                  Yes. Generate a new policy with the{" "}
                  <Link href="/" className="text-blue-400 hover:underline">
                    privacy policy generator
                  </Link>
                  , customize it for your business, and paste it directly onto
                  your website replacing iubenda&apos;s embed code. The switch
                  takes about 5 minutes.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Is PolicyForge free to try?
                </h3>
                <p>
                  Yes. PolicyForge offers 2 free policy generations per day. The{" "}
                  <Link
                    href="/check"
                    className="text-blue-400 hover:underline"
                  >
                    compliance scanner
                  </Link>{" "}
                  is completely free with no limits. No account or credit card
                  required.
                </p>
              </div>
            </div>
          </section>

          {/* Other Comparisons */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Explore More PolicyForge Resources
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/termly-alternative"
                className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800/70 transition block"
              >
                <h4 className="font-semibold text-white mb-1">
                  Termly Alternative
                </h4>
                <p className="text-sm text-gray-400">
                  Compare PolicyForge with Termly &mdash; another popular
                  compliance platform.
                </p>
              </Link>
              <Link
                href="/best-free-privacy-policy-generator"
                className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800/70 transition block"
              >
                <h4 className="font-semibold text-white mb-1">
                  Best Free Privacy Policy Generators (2026)
                </h4>
                <p className="text-sm text-gray-400">
                  Compare all the top free privacy policy generators available.
                </p>
              </Link>
              <Link
                href="/privacy-policy-for-ecommerce"
                className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800/70 transition block"
              >
                <h4 className="font-semibold text-white mb-1">
                  Privacy Policy for E-commerce
                </h4>
                <p className="text-sm text-gray-400">
                  Specialized policies for online stores handling payment and
                  shipping data.
                </p>
              </Link>
              <Link
                href="/privacy-policy-for-shopify-store"
                className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800/70 transition block"
              >
                <h4 className="font-semibold text-white mb-1">
                  Privacy Policy for Shopify Stores
                </h4>
                <p className="text-sm text-gray-400">
                  Shopify-specific privacy policies covering payment data and
                  third-party apps.
                </p>
              </Link>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-500">
          <p>
            PolicyForge &mdash; privacy compliance made simple and affordable.
            <br />
            <Link href="/" className="text-blue-400 hover:underline">
              Generate a privacy policy
            </Link>
            {" | "}
            <Link href="/check" className="text-blue-400 hover:underline">
              Check your compliance
            </Link>
            {" | "}
            <Link href="/tos" className="text-blue-400 hover:underline">
              Generate terms of service
            </Link>
          </p>
          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-sm text-gray-500 mb-2">Related guides:</p>
            <div className="flex flex-wrap gap-3 text-sm justify-center">
              <Link href="/termly-alternative" className="text-blue-400 hover:underline">Termly Alternative</Link>
              <Link href="/free-gdpr-compliance-tool" className="text-blue-400 hover:underline">Free GDPR Compliance Tool</Link>
              <Link href="/privacy-policy-for-startup" className="text-blue-400 hover:underline">Privacy Policy for Startups</Link>
              <Link href="/gdpr-compliance-checklist" className="text-blue-400 hover:underline">GDPR Compliance Checklist</Link>
              <Link href="/privacy-policy-for-wordpress" className="text-blue-400 hover:underline">Privacy Policy for WordPress</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
