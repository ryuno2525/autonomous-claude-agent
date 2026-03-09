import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Termly Alternative in 2026 — Save $100+/Year | PolicyForge",
  description:
    "Looking for a Termly alternative? PolicyForge offers privacy policy generation, compliance scanning, and ToS generation for a one-time $12.99 — no subscription. Compare features side-by-side.",
  keywords:
    "Termly alternative, Termly vs PolicyForge, cheaper than Termly, privacy policy generator alternative, Termly pricing, Termly competitor, privacy policy generator comparison, free Termly alternative",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is PolicyForge a good alternative to Termly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PolicyForge is an excellent alternative to Termly for businesses that need privacy policy generation, terms of service generation, and compliance scanning without a recurring subscription. PolicyForge costs $12.99 one-time compared to Termly's $120+/year. However, if you need a cookie consent banner, Termly may be the better choice as PolicyForge does not offer that feature.",
      },
    },
    {
      "@type": "Question",
      name: "How much does Termly cost per year?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Termly's paid plans start at approximately $120/year (billed annually). Over 3 years, that adds up to $360 or more. PolicyForge charges a one-time fee of $12.99 for Pro access with no recurring charges.",
      },
    },
    {
      "@type": "Question",
      name: "Does PolicyForge have a cookie consent banner like Termly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. PolicyForge does not currently offer a cookie consent banner. If cookie consent management is critical for your business, Termly or a dedicated consent management platform may be a better fit. PolicyForge focuses on policy generation and compliance scanning.",
      },
    },
    {
      "@type": "Question",
      name: "Can I switch from Termly to PolicyForge?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You can generate a new privacy policy and terms of service with PolicyForge at any time. Simply use the generator, customize it for your business, and replace the Termly-generated policies on your website. The switch takes about 5 minutes.",
      },
    },
    {
      "@type": "Question",
      name: "Is PolicyForge free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PolicyForge offers a free tier that allows 2 policy generations per day with basic templates. The Pro tier ($12.99 one-time) unlocks unlimited generations, all premium templates, and advanced customization. The compliance scanner at /check is completely free with no limits.",
      },
    },
  ],
};

export default function TermlyAlternative() {
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
          Looking for a Termly Alternative? Here&apos;s What to Consider
        </h1>

        <p className="text-gray-400 text-lg mb-8">
          Termly is one of the most popular privacy policy generators on the
          market, and for good reason &mdash; it offers a solid suite of
          compliance tools. But at $120+ per year, many small businesses,
          freelancers, and indie developers are looking for alternatives that
          deliver the same core features without the recurring cost. This guide
          compares Termly with PolicyForge across every dimension that matters so
          you can make an informed decision.
        </p>

        <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-blue-800/40 rounded-xl p-6 mb-10">
          <h3 className="text-lg font-semibold text-white mb-2">
            Try PolicyForge Free &mdash; No Account Required
          </h3>
          <p className="text-gray-300 text-sm mb-4">
            Generate a GDPR &amp; CCPA compliant privacy policy in under 2
            minutes. No signup, no credit card, no subscription. See why
            businesses are switching from Termly.
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
              Termly vs PolicyForge: Side-by-Side Comparison
            </h2>
            <p className="mb-6">
              Before diving into the details, here&apos;s a quick overview of
              how the two platforms compare across the features that matter most
              for privacy compliance.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">
                      Feature
                    </th>
                    <th className="text-center py-3 px-4 text-gray-400 font-medium">
                      Termly
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
                      $120+/year
                    </td>
                    <td className="py-3 px-4 text-center text-green-400">
                      $12.99 one-time
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
                      &#x2713;
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
                      GDPR/CCPA Templates
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

          {/* Where Termly Excels */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Where Termly Excels
            </h2>
            <p className="mb-4">
              It would be dishonest to pretend that Termly doesn&apos;t have
              genuine strengths. Termly has been in the compliance space for
              years and has built a comprehensive platform. Here are the areas
              where Termly genuinely outperforms alternatives:
            </p>
            <div className="space-y-4">
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-1">
                  Cookie Consent Management
                </h4>
                <p className="text-sm text-gray-400">
                  Termly&apos;s cookie consent banner is a full-featured consent
                  management platform (CMP). It auto-scans your site for
                  cookies, categorizes them, and provides a customizable banner
                  that handles opt-in and opt-out consent flows. If you need
                  GDPR-compliant cookie consent (and many websites do), this is a
                  significant advantage. PolicyForge does not offer a cookie
                  consent banner.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-1">
                  Established Brand &amp; Track Record
                </h4>
                <p className="text-sm text-gray-400">
                  Termly has been operating since 2017 and has built a
                  reputation in the compliance space. For enterprises and
                  larger businesses that need a vendor with a proven track
                  record, Termly&apos;s longevity is a legitimate advantage.
                  Their policies are used by hundreds of thousands of websites.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-1">
                  Enterprise Features
                </h4>
                <p className="text-sm text-gray-400">
                  Termly offers enterprise-grade features like consent logging,
                  multi-language support, and integrations with popular
                  platforms like WordPress, Shopify, and Wix. If you need
                  compliance monitoring across multiple sites or advanced
                  consent management, Termly has a more mature feature set in
                  these areas.
                </p>
              </div>
            </div>
          </section>

          {/* Where PolicyForge Excels */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Where PolicyForge Excels
            </h2>
            <p className="mb-4">
              PolicyForge was built with a different philosophy: give businesses
              the tools they actually need for privacy compliance without the
              ongoing cost. Here&apos;s where PolicyForge stands out:
            </p>
            <div className="space-y-4">
              <div className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-green-500">
                <h4 className="font-semibold text-white mb-1">
                  One-Time Pricing (Save $107+ in Year 1 Alone)
                </h4>
                <p className="text-sm text-gray-400">
                  PolicyForge Pro costs $12.99 once. Not per month. Not per
                  year. Once. With Termly, you&apos;re paying $120+ every year
                  for as long as you need a privacy policy &mdash; which is
                  forever. Over 3 years, that&apos;s $360 with Termly vs $12.99
                  with PolicyForge. The math is straightforward.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-green-500">
                <h4 className="font-semibold text-white mb-1">
                  No Account Required
                </h4>
                <p className="text-sm text-gray-400">
                  PolicyForge doesn&apos;t require signup, email verification,
                  or account creation. You can generate a privacy policy
                  immediately, no strings attached. Termly requires you to
                  create an account before you can do anything. For developers
                  and indie hackers who value speed, this matters.
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
                  dimensions. Enter any URL and get an instant compliance score
                  with actionable recommendations. Termly does not offer a
                  comparable free scanning tool.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-green-500">
                <h4 className="font-semibold text-white mb-1">
                  Instant Generation
                </h4>
                <p className="text-sm text-gray-400">
                  PolicyForge generates your privacy policy entirely
                  client-side, meaning it&apos;s instant. No waiting for
                  server processing, no &quot;we&apos;ll email you your
                  policy.&quot; Answer the questions, click generate, and your
                  policy is ready to copy and paste. The entire process takes
                  under 2 minutes.
                </p>
              </div>
            </div>
          </section>

          {/* The Real Cost of Termly Over Time */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              The Real Cost of Termly Over Time
            </h2>
            <p className="mb-6">
              Subscription pricing can feel manageable month-to-month, but the
              cumulative cost adds up fast. Here&apos;s what you&apos;re
              actually paying with Termly compared to PolicyForge&apos;s
              one-time pricing:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">
                      Time Period
                    </th>
                    <th className="text-center py-3 px-4 text-gray-400 font-medium">
                      Termly Cost
                    </th>
                    <th className="text-center py-3 px-4 text-blue-400 font-medium">
                      PolicyForge Cost
                    </th>
                    <th className="text-center py-3 px-4 text-green-400 font-medium">
                      You Save
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  <tr className="bg-white/5">
                    <td className="py-3 px-4 text-white font-medium">
                      Year 1
                    </td>
                    <td className="py-3 px-4 text-center text-red-400">
                      $120
                    </td>
                    <td className="py-3 px-4 text-center text-green-400">
                      $12.99
                    </td>
                    <td className="py-3 px-4 text-center text-green-400 font-semibold">
                      $107.01
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-white font-medium">
                      Year 2
                    </td>
                    <td className="py-3 px-4 text-center text-red-400">
                      $240
                    </td>
                    <td className="py-3 px-4 text-center text-green-400">
                      $12.99
                    </td>
                    <td className="py-3 px-4 text-center text-green-400 font-semibold">
                      $227.01
                    </td>
                  </tr>
                  <tr className="bg-white/5">
                    <td className="py-3 px-4 text-white font-medium">
                      Year 3
                    </td>
                    <td className="py-3 px-4 text-center text-red-400">
                      $360
                    </td>
                    <td className="py-3 px-4 text-center text-green-400">
                      $12.99
                    </td>
                    <td className="py-3 px-4 text-center text-green-400 font-semibold">
                      $347.01
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-white font-medium">
                      Year 5
                    </td>
                    <td className="py-3 px-4 text-center text-red-400">
                      $600
                    </td>
                    <td className="py-3 px-4 text-center text-green-400">
                      $12.99
                    </td>
                    <td className="py-3 px-4 text-center text-green-400 font-semibold">
                      $587.01
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Termly pricing based on publicly available rates as of early
              2026. Actual pricing may vary by plan and features selected.
            </p>
          </section>

          {/* Who Should Switch to PolicyForge */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Who Should Switch to PolicyForge
            </h2>
            <p className="mb-4">
              PolicyForge is the better choice for certain types of businesses.
              If any of the following describe you, switching from Termly could
              save you money without sacrificing compliance:
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-green-400 mt-1 flex-shrink-0">
                  &#x2713;
                </span>
                <div>
                  <span className="text-white font-medium">
                    Small businesses and startups
                  </span>
                  <p className="text-sm text-gray-400 mt-1">
                    If you&apos;re bootstrapping or watching every dollar, a
                    $120/year subscription for a privacy policy generator is
                    hard to justify. PolicyForge gives you the same output for
                    a one-time $12.99.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-400 mt-1 flex-shrink-0">
                  &#x2713;
                </span>
                <div>
                  <span className="text-white font-medium">
                    Freelancers and indie developers
                  </span>
                  <p className="text-sm text-gray-400 mt-1">
                    You need a privacy policy for your app or website, but you
                    don&apos;t need enterprise compliance monitoring. Generate
                    your policy, paste it on your site, and move on.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-400 mt-1 flex-shrink-0">
                  &#x2713;
                </span>
                <div>
                  <span className="text-white font-medium">
                    Businesses that don&apos;t need cookie consent banners
                  </span>
                  <p className="text-sm text-gray-400 mt-1">
                    If your site doesn&apos;t use cookies extensively (e.g.,
                    you&apos;re a{" "}
                    <Link
                      href="/privacy-policy-for-saas"
                      className="text-blue-400 hover:underline"
                    >
                      SaaS app
                    </Link>{" "}
                    that relies on server-side sessions), you don&apos;t need
                    Termly&apos;s consent management. PolicyForge covers
                    everything else.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-400 mt-1 flex-shrink-0">
                  &#x2713;
                </span>
                <div>
                  <span className="text-white font-medium">
                    Anyone who wants to check compliance before buying
                  </span>
                  <p className="text-sm text-gray-400 mt-1">
                    PolicyForge&apos;s{" "}
                    <Link
                      href="/check"
                      className="text-blue-400 hover:underline"
                    >
                      compliance scanner
                    </Link>{" "}
                    is completely free. Scan your site, see your score, and
                    then decide if you need to generate a new policy. No
                    account, no paywall.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-400 mt-1 flex-shrink-0">
                  &#x2713;
                </span>
                <div>
                  <span className="text-white font-medium">
                    Multi-project developers
                  </span>
                  <p className="text-sm text-gray-400 mt-1">
                    If you run multiple side projects, apps, or websites,
                    paying $120/year per site adds up fast. PolicyForge&apos;s
                    Pro tier covers unlimited generations for all your
                    projects.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Who Should Stay With Termly */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Who Should Stay With Termly
            </h2>
            <p className="mb-4">
              PolicyForge isn&apos;t the right fit for everyone. Here are
              situations where Termly is genuinely the better choice:
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-yellow-400 mt-1 flex-shrink-0">
                  &#x25B6;
                </span>
                <div>
                  <span className="text-white font-medium">
                    You need a cookie consent banner
                  </span>
                  <p className="text-sm text-gray-400 mt-1">
                    This is the biggest differentiator. If your website uses
                    tracking cookies and you need a GDPR-compliant consent
                    banner that auto-categorizes cookies, Termly delivers this
                    and PolicyForge does not. You could use PolicyForge for
                    policy generation and a separate cookie consent tool, but
                    Termly bundles everything together.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-yellow-400 mt-1 flex-shrink-0">
                  &#x25B6;
                </span>
                <div>
                  <span className="text-white font-medium">
                    You&apos;re an enterprise with compliance monitoring needs
                  </span>
                  <p className="text-sm text-gray-400 mt-1">
                    Large organizations that need ongoing compliance
                    monitoring, consent logging for audits, and multi-site
                    management will benefit from Termly&apos;s more
                    comprehensive platform. The subscription cost is justified
                    when you need enterprise-level features.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-yellow-400 mt-1 flex-shrink-0">
                  &#x25B6;
                </span>
                <div>
                  <span className="text-white font-medium">
                    You need multi-language policy support
                  </span>
                  <p className="text-sm text-gray-400 mt-1">
                    If your business operates across multiple countries and
                    needs privacy policies translated into multiple languages,
                    Termly&apos;s built-in localization is a real advantage.
                    PolicyForge currently generates policies in English only.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-yellow-400 mt-1 flex-shrink-0">
                  &#x25B6;
                </span>
                <div>
                  <span className="text-white font-medium">
                    You need platform integrations (WordPress, Shopify, Wix)
                  </span>
                  <p className="text-sm text-gray-400 mt-1">
                    Termly offers direct plugins for popular CMS platforms
                    that auto-embed your policies and consent banners.
                    PolicyForge generates policies you copy-paste into your
                    site, which works everywhere but requires a manual step.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* What Makes a Good Termly Alternative */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              What Makes a Good Termly Alternative?
            </h2>
            <p className="mb-4">
              When evaluating any Termly alternative (not just PolicyForge),
              here are the criteria that actually matter for privacy compliance:
            </p>
            <div className="bg-gray-900/50 rounded-xl p-6">
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                {[
                  "Generates GDPR-compliant privacy policies",
                  "Generates CCPA/CPRA-compliant policies",
                  "Covers all major data protection regulations",
                  "Customizable to your specific business type",
                  "Produces legally sound language",
                  "Includes terms of service generation",
                  "Offers cookie policy templates",
                  "No vendor lock-in (you own the output)",
                  "Transparent pricing with no hidden fees",
                  "Regular updates for new regulations",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">&#x2713;</span>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-4">
              PolicyForge checks every one of these boxes. The only major
              feature Termly has that PolicyForge doesn&apos;t is the cookie
              consent management platform &mdash; which is a separate category
              of tool entirely. For pure policy generation and compliance
              checking, PolicyForge delivers equivalent output at a fraction of
              the cost.
            </p>
          </section>

          {/* How to Switch from Termly to PolicyForge */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              How to Switch from Termly to PolicyForge
            </h2>
            <p className="mb-4">
              Switching is straightforward. Here&apos;s the process:
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-sm">
                  1
                </span>
                <div>
                  <h4 className="font-semibold text-white">
                    Scan your current site
                  </h4>
                  <p className="text-sm text-gray-400">
                    Use the{" "}
                    <Link
                      href="/check"
                      className="text-blue-400 hover:underline"
                    >
                      free compliance scanner
                    </Link>{" "}
                    to see where your current privacy setup stands. This gives
                    you a baseline and highlights any gaps your new policy
                    should address.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-sm">
                  2
                </span>
                <div>
                  <h4 className="font-semibold text-white">
                    Generate your new privacy policy
                  </h4>
                  <p className="text-sm text-gray-400">
                    Use the{" "}
                    <Link href="/" className="text-blue-400 hover:underline">
                      privacy policy generator
                    </Link>{" "}
                    to create a new policy customized to your business. Answer
                    a few questions about your data practices and get a
                    ready-to-use policy in under 2 minutes.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-sm">
                  3
                </span>
                <div>
                  <h4 className="font-semibold text-white">
                    Generate your terms of service
                  </h4>
                  <p className="text-sm text-gray-400">
                    If you were using Termly for ToS as well, use the{" "}
                    <Link
                      href="/tos"
                      className="text-blue-400 hover:underline"
                    >
                      terms of service generator
                    </Link>{" "}
                    to create matching terms for your site.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-sm">
                  4
                </span>
                <div>
                  <h4 className="font-semibold text-white">
                    Replace your policies on your website
                  </h4>
                  <p className="text-sm text-gray-400">
                    Copy the generated policies and paste them into your
                    website&apos;s privacy policy and terms of service pages.
                    Remove the Termly embed code if applicable.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-sm">
                  5
                </span>
                <div>
                  <h4 className="font-semibold text-white">
                    Cancel your Termly subscription
                  </h4>
                  <p className="text-sm text-gray-400">
                    Once your new policies are live, cancel your Termly
                    subscription. If you need a cookie consent banner, consider
                    a free alternative like CookieYes or Osano&apos;s free
                    tier.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-800/30 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-4 text-center">
              Ready to Switch from Termly?
            </h2>
            <p className="text-gray-300 text-center mb-2">
              Stop paying $120/year for something that should cost $12.99 once.
            </p>
            <p className="text-gray-400 text-center mb-6 text-sm">
              Generate a GDPR &amp; CCPA compliant privacy policy in under 2
              minutes. No account required. No recurring fees. No lock-in.
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
                  Is PolicyForge a good alternative to Termly?
                </h3>
                <p>
                  PolicyForge is an excellent alternative for businesses that
                  need privacy policy generation, terms of service generation,
                  and compliance scanning without a recurring subscription.
                  PolicyForge costs $12.99 one-time compared to Termly&apos;s
                  $120+/year. However, if you need a cookie consent banner,
                  Termly may be the better choice as PolicyForge does not offer
                  that feature.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  How much does Termly cost per year?
                </h3>
                <p>
                  Termly&apos;s paid plans start at approximately $120/year
                  (billed annually). Over 3 years, that adds up to $360 or
                  more. PolicyForge charges a one-time fee of $12.99 for Pro
                  access with no recurring charges.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Does PolicyForge have a cookie consent banner like Termly?
                </h3>
                <p>
                  No. PolicyForge does not currently offer a cookie consent
                  banner. If cookie consent management is critical for your
                  business, Termly or a dedicated consent management platform
                  may be a better fit. PolicyForge focuses on policy generation
                  and compliance scanning.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Can I switch from Termly to PolicyForge?
                </h3>
                <p>
                  Yes. You can generate a new privacy policy and terms of
                  service with PolicyForge at any time. Simply use the{" "}
                  <Link href="/" className="text-blue-400 hover:underline">
                    generator
                  </Link>
                  , customize it for your business, and replace the
                  Termly-generated policies on your website. The switch takes
                  about 5 minutes.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Is PolicyForge free?
                </h3>
                <p>
                  PolicyForge offers a free tier that allows 2 policy
                  generations per day with basic templates. The Pro tier
                  ($12.99 one-time) unlocks unlimited generations, all premium
                  templates, and advanced customization. The{" "}
                  <Link
                    href="/check"
                    className="text-blue-400 hover:underline"
                  >
                    compliance scanner
                  </Link>{" "}
                  is completely free with no limits.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Are PolicyForge&apos;s policies legally valid?
                </h3>
                <p>
                  PolicyForge generates policies based on the same legal
                  frameworks (GDPR, CCPA, CPRA, CalOPPA) as Termly and other
                  generators. The generated policies cover all required
                  disclosures and use standard legal language. However, like
                  any generator (including Termly), we recommend having a
                  lawyer review your policy if you have complex data practices
                  or operate in highly regulated industries.
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
                href="/gdpr-privacy-policy-generator"
                className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800/70 transition block"
              >
                <h4 className="font-semibold text-white mb-1">
                  GDPR Privacy Policy Generator
                </h4>
                <p className="text-sm text-gray-400">
                  Generate a fully GDPR-compliant privacy policy for your EU
                  audience.
                </p>
              </Link>
              <Link
                href="/ccpa-privacy-policy-generator"
                className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800/70 transition block"
              >
                <h4 className="font-semibold text-white mb-1">
                  CCPA Privacy Policy Generator
                </h4>
                <p className="text-sm text-gray-400">
                  California Consumer Privacy Act compliance for your business.
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
                href="/privacy-policy-for-mobile-app"
                className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800/70 transition block"
              >
                <h4 className="font-semibold text-white mb-1">
                  Privacy Policy for Mobile Apps
                </h4>
                <p className="text-sm text-gray-400">
                  App Store and Google Play compliant privacy policies for
                  mobile apps.
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
            <div className="flex flex-wrap gap-3 text-sm">
              <Link href="/best-free-privacy-policy-generator" className="text-blue-400 hover:underline">Best Free Generators (2026)</Link>
              <Link href="/free-gdpr-compliance-tool" className="text-blue-400 hover:underline">Free GDPR Compliance Tool</Link>
              <Link href="/privacy-policy-for-startup" className="text-blue-400 hover:underline">Privacy Policy for Startups</Link>
              <Link href="/gdpr-compliance-checklist" className="text-blue-400 hover:underline">GDPR Compliance Checklist</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
