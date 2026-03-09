import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Best Cookiebot Alternative in 2026 — Save Up to $700/Year | PolicyForge",
  description:
    "Looking for a Cookiebot alternative? PolicyForge generates GDPR & CCPA compliant cookie policies, privacy policies, and terms of service for a one-time $4.99-$12.99 — no monthly subscription. Honest comparison inside.",
  keywords:
    "Cookiebot alternative, Cookiebot vs PolicyForge, cheaper than Cookiebot, Cookiebot pricing, Cookiebot competitor, cookie consent alternative, free Cookiebot alternative, Cookiebot review, Cookiebot comparison, cookie policy generator, CMP alternative",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is PolicyForge a good alternative to Cookiebot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on what you need. Cookiebot is a Cookie Consent Management Platform (CMP) that provides active consent banners and ongoing cookie scanning. PolicyForge is a policy document generator that creates cookie policies, privacy policies, and terms of service for a one-time fee. If you only need the policy documents (not an active consent banner), PolicyForge saves you hundreds per year. If you need a full CMP with consent management, Cookiebot or a similar platform is necessary — but you can still use PolicyForge for the policy documents themselves.",
      },
    },
    {
      "@type": "Question",
      name: "How much does Cookiebot cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cookiebot uses monthly subscription pricing based on the number of pages on your website. The free tier covers up to 50 subpages. The Premium plan starts at approximately $12/month (billed annually) for up to 500 subpages and scales up to $46+/month for larger sites. Enterprise pricing is custom. Over a year, Cookiebot typically costs $144-$552+ depending on site size.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between Cookiebot and PolicyForge?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cookiebot is a Cookie Consent Management Platform (CMP) that scans your website for cookies, displays consent banners to visitors, records consent, and blocks cookies until consent is given. PolicyForge is a policy document generator that creates the legal text for cookie policies, privacy policies, and terms of service. Cookiebot handles the technical cookie management; PolicyForge handles the legal documentation. Many businesses need both — a CMP for consent management and a generator for the policy documents.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need both a CMP like Cookiebot and a policy generator like PolicyForge?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Under GDPR, you need both a cookie consent mechanism (like a CMP) and a written cookie/privacy policy. Cookiebot provides the consent mechanism, and PolicyForge generates the policy documents. For many small sites, a simple cookie consent banner (free or cheap alternatives exist) combined with PolicyForge's generated cookie policy is sufficient. You don't necessarily need Cookiebot's premium features for basic GDPR compliance.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use PolicyForge instead of Cookiebot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PolicyForge replaces the policy document generation aspect of Cookiebot, not the cookie consent banner. If you're paying Cookiebot primarily for its cookie policy text, PolicyForge generates equivalent documents for a one-time $4.99-$12.99. For the consent banner, you'd use a free or low-cost CMP alternative like CookieYes free tier, Osano, or a simple open-source consent banner.",
      },
    },
    {
      "@type": "Question",
      name: "Is PolicyForge free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PolicyForge offers a free tier with 2 policy generations per day using basic templates. The Starter tier ($4.99 one-time) unlocks more templates. The Pro tier ($12.99 one-time) unlocks unlimited generations, all premium templates, and advanced customization. The compliance scanner at /check is completely free with no limits.",
      },
    },
    {
      "@type": "Question",
      name: "What free alternatives to Cookiebot exist?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For cookie consent banners: CookieYes (free for up to 100 pages), Osano (free tier available), and open-source solutions like cookie-consent-js. For policy document generation: PolicyForge free tier (2 generations/day), or PolicyForge Starter ($4.99 one-time) for more templates. Combining a free consent banner with PolicyForge's generated cookie policy gives you GDPR compliance at near-zero cost.",
      },
    },
  ],
};

export default function CookiebotAlternative() {
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
          Looking for a Cookiebot Alternative? Here&apos;s an Honest Comparison
        </h1>

        <p className="text-gray-400 text-lg mb-8">
          Cookiebot is one of the most popular Cookie Consent Management
          Platforms (CMPs) on the market. It scans your website for cookies,
          displays consent banners, and helps manage GDPR compliance. But with
          subscription pricing that can reach $46+/month for larger sites, many
          businesses &mdash; especially startups and small teams &mdash; find
          themselves asking: do I really need all of this? This guide gives you
          an honest comparison between Cookiebot and PolicyForge, explains
          where each tool excels, and helps you decide which fits your needs and
          budget.
        </p>

        <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-blue-800/40 rounded-xl p-6 mb-10">
          <h3 className="text-lg font-semibold text-white mb-2">
            Try PolicyForge Free &mdash; No Account Required
          </h3>
          <p className="text-gray-300 text-sm mb-4">
            Generate a GDPR &amp; CCPA compliant cookie policy, privacy policy,
            or terms of service in under 2 minutes. No signup, no credit card,
            no monthly subscription. See why businesses are switching from
            Cookiebot&apos;s subscription model.
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
          {/* Important Distinction */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              First: Understanding the Key Difference
            </h2>
            <p className="mb-4">
              Before comparing features and pricing, it&apos;s important to
              understand that Cookiebot and PolicyForge solve{" "}
              <strong className="text-white">different parts</strong> of the
              same compliance problem:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-800/50 rounded-lg p-5 border border-white/10">
                <h4 className="font-semibold text-white mb-2">
                  Cookiebot = Consent Management Platform (CMP)
                </h4>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-0.5 flex-shrink-0">&#x2022;</span>
                    <span>Scans your website for cookies automatically</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-0.5 flex-shrink-0">&#x2022;</span>
                    <span>Displays cookie consent banners to visitors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-0.5 flex-shrink-0">&#x2022;</span>
                    <span>Records and stores visitor consent decisions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-0.5 flex-shrink-0">&#x2022;</span>
                    <span>Blocks cookies until consent is granted</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-0.5 flex-shrink-0">&#x2022;</span>
                    <span>Ongoing subscription: $12&ndash;$46+/month</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-5 border border-blue-500/30">
                <h4 className="font-semibold text-white mb-2">
                  PolicyForge = Policy Document Generator
                </h4>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5 flex-shrink-0">&#x2022;</span>
                    <span>Generates cookie policy documents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5 flex-shrink-0">&#x2022;</span>
                    <span>Generates privacy policies and terms of service</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5 flex-shrink-0">&#x2022;</span>
                    <span>Scans websites for compliance issues (free)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5 flex-shrink-0">&#x2022;</span>
                    <span>GDPR and CCPA compliant templates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5 flex-shrink-0">&#x2022;</span>
                    <span>One-time payment: $4.99&ndash;$12.99</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Think of it this way: GDPR requires both a cookie consent mechanism
              <em> and</em> a written cookie policy. Cookiebot handles the mechanism.
              PolicyForge generates the written policy. Many businesses need both &mdash;
              but you don&apos;t necessarily need to pay Cookiebot&apos;s subscription
              prices for the policy document part.
            </p>
          </section>

          {/* Side-by-side comparison table */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Cookiebot vs PolicyForge: Side-by-Side Comparison
            </h2>
            <p className="mb-6">
              Here&apos;s how the two platforms compare across the features
              that matter most for privacy and cookie compliance.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">
                      Feature
                    </th>
                    <th className="text-center py-3 px-4 text-gray-400 font-medium">
                      Cookiebot
                    </th>
                    <th className="text-center py-3 px-4 text-blue-400 font-medium">
                      PolicyForge
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  <tr className="bg-white/5">
                    <td className="py-3 px-4 text-white font-medium">
                      Pricing Model
                    </td>
                    <td className="py-3 px-4 text-center text-red-400">
                      $12&ndash;$46+/mo subscription
                    </td>
                    <td className="py-3 px-4 text-center text-green-400">
                      $4.99&ndash;$12.99 one-time
                    </td>
                  </tr>
                  <tr>
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
                  <tr className="bg-white/5">
                    <td className="py-3 px-4 text-white font-medium">
                      Automatic Cookie Scanning
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
                      Consent Storage &amp; Proof
                    </td>
                    <td className="py-3 px-4 text-center text-green-400">
                      &#x2713;
                    </td>
                    <td className="py-3 px-4 text-center text-red-400">
                      &#x2717;
                    </td>
                  </tr>
                  <tr className="bg-white/5">
                    <td className="py-3 px-4 text-white font-medium">
                      Cookie Policy Generator
                    </td>
                    <td className="py-3 px-4 text-center text-green-400">
                      &#x2713; (auto-generated)
                    </td>
                    <td className="py-3 px-4 text-center text-green-400">
                      &#x2713; (customizable)
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-white font-medium">
                      Privacy Policy Generator
                    </td>
                    <td className="py-3 px-4 text-center text-red-400">
                      &#x2717;
                    </td>
                    <td className="py-3 px-4 text-center text-green-400">
                      &#x2713;
                    </td>
                  </tr>
                  <tr className="bg-white/5">
                    <td className="py-3 px-4 text-white font-medium">
                      Terms of Service Generator
                    </td>
                    <td className="py-3 px-4 text-center text-red-400">
                      &#x2717;
                    </td>
                    <td className="py-3 px-4 text-center text-green-400">
                      &#x2713;
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-white font-medium">
                      Compliance Scanner
                    </td>
                    <td className="py-3 px-4 text-center text-yellow-400">
                      Cookie-focused only
                    </td>
                    <td className="py-3 px-4 text-center text-green-400">
                      &#x2713; 11-dimension scan (Free)
                    </td>
                  </tr>
                  <tr className="bg-white/5">
                    <td className="py-3 px-4 text-white font-medium">
                      GDPR Compliant
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
                      CCPA Compliant
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
                      Unlimited Generations
                    </td>
                    <td className="py-3 px-4 text-center text-yellow-400">
                      N/A (auto-generated)
                    </td>
                    <td className="py-3 px-4 text-center text-green-400">
                      &#x2713; (Pro tier)
                    </td>
                  </tr>
                  <tr className="bg-white/5">
                    <td className="py-3 px-4 text-white font-medium">
                      Free Tier
                    </td>
                    <td className="py-3 px-4 text-center text-yellow-400">
                      Up to 50 subpages
                    </td>
                    <td className="py-3 px-4 text-center text-green-400">
                      2 generations/day
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* The Real Cost */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              The Real Cost: Cookiebot vs PolicyForge Over Time
            </h2>
            <p className="mb-4">
              Cookiebot uses subscription pricing based on the number of
              subpages on your website. This means the cost grows as your site
              grows &mdash; and it never stops. Here&apos;s how the total cost
              compares over time:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">
                      Scenario
                    </th>
                    <th className="text-center py-3 px-4 text-gray-400 font-medium">
                      Cookiebot Cost
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
                      Small site (&lt;500 pages), 1 year
                    </td>
                    <td className="py-3 px-4 text-center text-red-400">
                      ~$144/yr ($12/mo)
                    </td>
                    <td className="py-3 px-4 text-center text-green-400">
                      $12.99 once
                    </td>
                    <td className="py-3 px-4 text-center text-green-400 font-semibold">
                      ~$131
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-white font-medium">
                      Medium site (500&ndash;5,000 pages), 1 year
                    </td>
                    <td className="py-3 px-4 text-center text-red-400">
                      ~$300/yr ($25/mo)
                    </td>
                    <td className="py-3 px-4 text-center text-green-400">
                      $12.99 once
                    </td>
                    <td className="py-3 px-4 text-center text-green-400 font-semibold">
                      ~$287
                    </td>
                  </tr>
                  <tr className="bg-white/5">
                    <td className="py-3 px-4 text-white font-medium">
                      Large site (5,000+ pages), 1 year
                    </td>
                    <td className="py-3 px-4 text-center text-red-400">
                      ~$552/yr ($46/mo)
                    </td>
                    <td className="py-3 px-4 text-center text-green-400">
                      $12.99 once
                    </td>
                    <td className="py-3 px-4 text-center text-green-400 font-semibold">
                      ~$539
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-white font-medium">
                      Small site, 3 years
                    </td>
                    <td className="py-3 px-4 text-center text-red-400">
                      ~$432
                    </td>
                    <td className="py-3 px-4 text-center text-green-400">
                      $12.99 once
                    </td>
                    <td className="py-3 px-4 text-center text-green-400 font-semibold">
                      ~$419
                    </td>
                  </tr>
                  <tr className="bg-white/5">
                    <td className="py-3 px-4 text-white font-medium">
                      Medium site, 3 years
                    </td>
                    <td className="py-3 px-4 text-center text-red-400">
                      ~$900
                    </td>
                    <td className="py-3 px-4 text-center text-green-400">
                      $12.99 once
                    </td>
                    <td className="py-3 px-4 text-center text-green-400 font-semibold">
                      ~$887
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Cookiebot pricing based on publicly listed rates as of early 2026
              (annual billing). Monthly billing is higher. PolicyForge Pro
              ($12.99) is a one-time payment with no recurring costs. Note:
              Cookiebot pricing includes consent banner + cookie scanning
              features that PolicyForge does not provide &mdash; see below for
              which features you actually need.
            </p>
          </section>

          {/* What Cookiebot Includes That PolicyForge Doesn't */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Where Cookiebot Excels (And PolicyForge Doesn&apos;t Compete)
            </h2>
            <p className="mb-4">
              Cookiebot is a specialized consent management platform, and
              it&apos;s genuinely good at what it does. Here&apos;s where
              Cookiebot has capabilities that PolicyForge does not offer:
            </p>
            <div className="space-y-4">
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-1">
                  Automatic Cookie Scanning
                </h4>
                <p className="text-sm text-gray-400">
                  Cookiebot automatically crawls your website to detect all
                  cookies, trackers, and similar technologies. It categorizes
                  them (necessary, preferences, statistics, marketing) and keeps
                  an up-to-date inventory. This is a technically complex feature
                  that PolicyForge does not replicate. If you add new analytics
                  tools or ad trackers, Cookiebot detects them automatically.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-1">
                  Cookie Consent Banner
                </h4>
                <p className="text-sm text-gray-400">
                  Cookiebot provides a customizable consent banner that appears
                  on your website, allowing visitors to accept, reject, or
                  customize their cookie preferences. Under GDPR, websites must
                  obtain explicit consent before setting non-essential cookies.
                  Cookiebot handles this entire flow. PolicyForge does not
                  provide a consent banner &mdash; it generates the policy
                  document that describes your cookie practices.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-1">
                  Consent Storage &amp; Proof of Consent
                </h4>
                <p className="text-sm text-gray-400">
                  GDPR requires that you can prove a user consented to cookies.
                  Cookiebot stores consent records, including timestamps and the
                  specific choices each visitor made. This audit trail can be
                  critical during regulatory investigations. PolicyForge does
                  not store or manage consent records.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-1">
                  Prior Blocking of Cookies
                </h4>
                <p className="text-sm text-gray-400">
                  Cookiebot can automatically block cookies and trackers from
                  loading until the visitor gives consent. This &quot;prior
                  blocking&quot; feature is technically required under strict
                  GDPR interpretation and is one of Cookiebot&apos;s most
                  valuable capabilities for sites with third-party trackers.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-1">
                  IAB TCF 2.2 Integration
                </h4>
                <p className="text-sm text-gray-400">
                  Cookiebot supports the IAB Transparency and Consent Framework
                  (TCF) 2.2, which is required for programmatic advertising in
                  the EU. If you run Google AdSense, Google Ad Manager, or
                  other programmatic ad platforms, TCF compliance may be
                  mandatory. PolicyForge does not integrate with TCF.
                </p>
              </div>
            </div>
          </section>

          {/* Where PolicyForge Excels */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Where PolicyForge Excels Over Cookiebot
            </h2>
            <p className="mb-4">
              While Cookiebot focuses on consent management, PolicyForge
              excels in areas that Cookiebot either doesn&apos;t cover or
              charges extra for:
            </p>
            <div className="space-y-4">
              <div className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-green-500">
                <h4 className="font-semibold text-white mb-1">
                  Dramatically Lower Cost
                </h4>
                <p className="text-sm text-gray-400">
                  Cookiebot&apos;s lowest paid tier is ~$12/month ($144/year).
                  PolicyForge Pro costs $12.99 <em>total</em> &mdash; one-time,
                  forever. Even the Starter tier at $4.99 gives you more
                  templates than what Cookiebot auto-generates for cookie
                  policies. Over 3 years, a small site owner saves $400+ by
                  generating policy documents with PolicyForge instead of
                  relying on Cookiebot&apos;s bundled cookie policy.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-green-500">
                <h4 className="font-semibold text-white mb-1">
                  Privacy Policy &amp; Terms of Service Generation
                </h4>
                <p className="text-sm text-gray-400">
                  Cookiebot only handles cookie-related documents. It does not
                  generate privacy policies or terms of service &mdash; two
                  legal documents every website needs. PolicyForge generates
                  all three: cookie policies, privacy policies, and terms of
                  service. One tool, one payment, all your core legal documents.
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
                  that analyzes any website across 11 privacy dimensions
                  &mdash; covering far more than just cookies. It checks for
                  privacy policies, SSL, third-party trackers, data collection
                  practices, and more. Cookiebot&apos;s scanner is limited to
                  cookie detection only.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-green-500">
                <h4 className="font-semibold text-white mb-1">
                  No Account Required
                </h4>
                <p className="text-sm text-gray-400">
                  PolicyForge lets you generate policies immediately without
                  creating an account, verifying your email, or adding a
                  payment method. Cookiebot requires account creation and a
                  script installation before you can even see what it does.
                  PolicyForge respects your time &mdash; generate a policy
                  and move on.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-green-500">
                <h4 className="font-semibold text-white mb-1">
                  Customizable Policy Documents
                </h4>
                <p className="text-sm text-gray-400">
                  Cookiebot auto-generates a cookie declaration based on what it
                  scans, but you have limited control over the language and
                  structure. PolicyForge lets you customize your policies based
                  on your specific business type, data practices, and
                  compliance needs. The result is a policy that reads like it
                  was written for your business, not a generic auto-generated
                  document.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-green-500">
                <h4 className="font-semibold text-white mb-1">
                  No Vendor Lock-In
                </h4>
                <p className="text-sm text-gray-400">
                  Cookiebot&apos;s cookie declaration is dynamically embedded
                  via their JavaScript &mdash; if you stop paying, the
                  declaration disappears from your site. PolicyForge generates
                  plain text that you own and host yourself. Cancel, switch
                  tools, go offline &mdash; your policies stay where they are.
                </p>
              </div>
            </div>
          </section>

          {/* Understanding Cookiebot Pricing */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Understanding Cookiebot&apos;s Pricing Model
            </h2>
            <p className="mb-4">
              Cookiebot&apos;s pricing is tied to the number of subpages on your
              website, which creates a cost structure that scales with your
              site&apos;s growth. Here&apos;s how it breaks down:
            </p>
            <div className="bg-gray-900/50 rounded-xl p-6 space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-gray-400 mt-0.5 flex-shrink-0 font-mono text-sm">
                  01
                </span>
                <div>
                  <span className="text-white font-medium">
                    Free Tier (Up to 50 Subpages)
                  </span>
                  <p className="text-sm text-gray-400 mt-1">
                    Cookiebot offers a free tier for very small websites with up
                    to 50 subpages. This is generous for personal blogs and
                    micro-sites, but most business websites exceed 50 pages
                    quickly.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-gray-400 mt-0.5 flex-shrink-0 font-mono text-sm">
                  02
                </span>
                <div>
                  <span className="text-white font-medium">
                    Premium Tier (~$12/mo for up to 500 subpages)
                  </span>
                  <p className="text-sm text-gray-400 mt-1">
                    The first paid tier covers websites with up to 500
                    subpages. This is the most common tier for small businesses,
                    SaaS products, and e-commerce stores with modest catalogs.
                    Billed annually, this works out to roughly $144/year.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-gray-400 mt-0.5 flex-shrink-0 font-mono text-sm">
                  03
                </span>
                <div>
                  <span className="text-white font-medium">
                    Scaling Tiers ($25&ndash;$46+/mo)
                  </span>
                  <p className="text-sm text-gray-400 mt-1">
                    As your website grows beyond 500 pages, the price increases.
                    Medium sites (up to 5,000 pages) pay ~$25/month. Larger
                    sites (5,000+) pay $46/month or more. The cost keeps scaling
                    as your content grows.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-gray-400 mt-0.5 flex-shrink-0 font-mono text-sm">
                  04
                </span>
                <div>
                  <span className="text-white font-medium">
                    Enterprise Pricing (Custom)
                  </span>
                  <p className="text-sm text-gray-400 mt-1">
                    For very large websites or organizations with specific
                    compliance requirements, Cookiebot offers custom enterprise
                    pricing. This often includes SLAs, dedicated support, and
                    advanced reporting.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-gray-400 mt-0.5 flex-shrink-0 font-mono text-sm">
                  05
                </span>
                <div>
                  <span className="text-white font-medium">
                    The Hidden Cost: Growth Penalty
                  </span>
                  <p className="text-sm text-gray-400 mt-1">
                    Because Cookiebot charges by subpage count, your cost
                    increases as your website grows. Adding a blog, launching a
                    help center, or expanding your product catalog can push you
                    into a higher pricing tier. This is a &quot;growth
                    penalty&quot; that subscription tools often impose but
                    one-time purchases like PolicyForge do not.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* The "Do I Actually Need a CMP?" Section */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Do You Actually Need a Full CMP Like Cookiebot?
            </h2>
            <p className="mb-4">
              This is the question most website owners should ask before paying
              for Cookiebot. The answer depends on your specific situation:
            </p>
            <div className="space-y-4">
              <div className="bg-green-900/20 border border-green-800/30 rounded-lg p-5">
                <h4 className="font-semibold text-white mb-2">
                  You probably DON&apos;T need a full CMP if:
                </h4>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5 flex-shrink-0">&#x2713;</span>
                    <span>Your website uses only essential/necessary cookies (login sessions, shopping carts, security)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5 flex-shrink-0">&#x2713;</span>
                    <span>You don&apos;t run third-party analytics (or use a privacy-focused alternative like Plausible or Fathom)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5 flex-shrink-0">&#x2713;</span>
                    <span>You don&apos;t use retargeting pixels, ad trackers, or programmatic advertising</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5 flex-shrink-0">&#x2713;</span>
                    <span>You&apos;re a small SaaS, blog, or portfolio site without heavy tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5 flex-shrink-0">&#x2713;</span>
                    <span>You just need a clear cookie policy document on your website</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-400 mt-3">
                  In these cases, a{" "}
                  <Link
                    href="/"
                    className="text-blue-400 hover:underline"
                  >
                    PolicyForge-generated cookie policy
                  </Link>{" "}
                  plus a simple open-source consent banner is likely sufficient
                  for GDPR compliance &mdash; at a fraction of Cookiebot&apos;s cost.
                </p>
              </div>
              <div className="bg-yellow-900/20 border border-yellow-800/30 rounded-lg p-5">
                <h4 className="font-semibold text-white mb-2">
                  You probably DO need a full CMP if:
                </h4>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-0.5 flex-shrink-0">&#x25B6;</span>
                    <span>You use Google Analytics, Facebook Pixel, or other third-party trackers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-0.5 flex-shrink-0">&#x25B6;</span>
                    <span>You run programmatic advertising that requires IAB TCF 2.2 compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-0.5 flex-shrink-0">&#x25B6;</span>
                    <span>You need documented proof of consent for regulatory audits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-0.5 flex-shrink-0">&#x25B6;</span>
                    <span>You operate a large e-commerce site with multiple third-party integrations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-0.5 flex-shrink-0">&#x25B6;</span>
                    <span>Your legal team or DPO specifically requires a CMP</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-400 mt-3">
                  In these cases, you need a CMP &mdash; but you can still save
                  money by using PolicyForge for your privacy policy and terms
                  of service instead of buying those separately.
                </p>
              </div>
            </div>
          </section>

          {/* The Smart Approach: PolicyForge + Free CMP */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              The Smart Approach: PolicyForge + a Free Consent Banner
            </h2>
            <p className="mb-4">
              For many small businesses and startups, the most cost-effective
              approach combines PolicyForge&apos;s policy generation with a free
              or low-cost consent banner tool. Here&apos;s the stack:
            </p>
            <div className="bg-gray-900/50 rounded-xl p-6">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-sm">
                    1
                  </span>
                  <div>
                    <h4 className="font-semibold text-white">
                      Generate your policies with PolicyForge ($4.99&ndash;$12.99 once)
                    </h4>
                    <p className="text-sm text-gray-400">
                      Use PolicyForge to create a{" "}
                      <Link href="/" className="text-blue-400 hover:underline">
                        privacy policy
                      </Link>
                      , a{" "}
                      <Link href="/tos" className="text-blue-400 hover:underline">
                        terms of service
                      </Link>
                      , and a cookie policy. All customized to your business,
                      GDPR and CCPA compliant, and owned by you.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-sm">
                    2
                  </span>
                  <div>
                    <h4 className="font-semibold text-white">
                      Add a free consent banner (free)
                    </h4>
                    <p className="text-sm text-gray-400">
                      Use CookieYes free tier (up to 100 pages), Osano free
                      tier, or an open-source solution like cookie-consent-js.
                      These handle the consent popup and cookie blocking without
                      the cost of Cookiebot.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-sm">
                    3
                  </span>
                  <div>
                    <h4 className="font-semibold text-white">
                      Scan your compliance with PolicyForge (free)
                    </h4>
                    <p className="text-sm text-gray-400">
                      Use the{" "}
                      <Link
                        href="/check"
                        className="text-blue-400 hover:underline"
                      >
                        free compliance scanner
                      </Link>{" "}
                      to verify your setup covers all 11 privacy dimensions.
                      Identify any gaps and fix them before a regulator does.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div>
                    <p className="text-sm text-gray-400">
                      Total cost with Cookiebot:
                    </p>
                    <p className="text-lg font-semibold text-red-400">
                      $144&ndash;$552+/year (recurring)
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">
                      Total cost with PolicyForge + free CMP:
                    </p>
                    <p className="text-lg font-semibold text-green-400">
                      $4.99&ndash;$12.99 (one-time)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Who Should Stay With Cookiebot */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Who Should Stay With Cookiebot
            </h2>
            <p className="mb-4">
              PolicyForge is not a drop-in replacement for Cookiebot&apos;s
              consent management features. Here are situations where
              Cookiebot is genuinely the right tool:
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-yellow-400 mt-1 flex-shrink-0">
                  &#x25B6;
                </span>
                <div>
                  <span className="text-white font-medium">
                    You need IAB TCF 2.2 compliance for advertising
                  </span>
                  <p className="text-sm text-gray-400 mt-1">
                    If you run programmatic ads in the EU, you need a
                    TCF-certified CMP. Cookiebot is one of the most established
                    TCF-compliant CMPs. PolicyForge does not offer TCF
                    integration.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-yellow-400 mt-1 flex-shrink-0">
                  &#x25B6;
                </span>
                <div>
                  <span className="text-white font-medium">
                    You require automated cookie scanning and categorization
                  </span>
                  <p className="text-sm text-gray-400 mt-1">
                    If your website changes frequently and you need automated
                    detection of new cookies and trackers, Cookiebot&apos;s
                    monthly scanning is valuable. PolicyForge does not scan for
                    cookies on your site.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-yellow-400 mt-1 flex-shrink-0">
                  &#x25B6;
                </span>
                <div>
                  <span className="text-white font-medium">
                    You need consent proof for regulatory audits
                  </span>
                  <p className="text-sm text-gray-400 mt-1">
                    If your industry or legal counsel requires documented proof
                    of every visitor&apos;s consent choice, Cookiebot&apos;s
                    consent storage is essential. This is particularly important
                    for healthcare, financial services, and large enterprises
                    subject to regulatory scrutiny.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-yellow-400 mt-1 flex-shrink-0">
                  &#x25B6;
                </span>
                <div>
                  <span className="text-white font-medium">
                    You&apos;re a large enterprise with a dedicated DPO
                  </span>
                  <p className="text-sm text-gray-400 mt-1">
                    Large organizations with a Data Protection Officer often
                    need enterprise-grade tools with SLAs, audit logs, and
                    vendor compliance certifications. Cookiebot&apos;s
                    enterprise tier caters to this need. PolicyForge is built
                    for smaller, faster-moving teams.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Who Should Choose PolicyForge */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Who Should Choose PolicyForge Over Cookiebot
            </h2>
            <p className="mb-4">
              PolicyForge is the better choice if you fall into any of these
              categories:
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-green-400 mt-1 flex-shrink-0">
                  &#x2713;
                </span>
                <div>
                  <span className="text-white font-medium">
                    Startups and small businesses watching every dollar
                  </span>
                  <p className="text-sm text-gray-400 mt-1">
                    If paying $12&ndash;$46/month for cookie consent feels steep
                    when you&apos;re pre-revenue or bootstrapping, PolicyForge
                    gives you all the policy documents you need for $12.99
                    total. Pair it with a free consent banner and you&apos;re
                    compliant without the recurring cost.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-400 mt-1 flex-shrink-0">
                  &#x2713;
                </span>
                <div>
                  <span className="text-white font-medium">
                    Developers and indie hackers with minimal tracking
                  </span>
                  <p className="text-sm text-gray-400 mt-1">
                    If your SaaS or side project only uses essential cookies
                    (sessions, auth tokens), you don&apos;t need
                    Cookiebot&apos;s full scanning and blocking capabilities.
                    A PolicyForge cookie policy documents what you use, and a
                    simple notice is all the &quot;consent&quot; you need for
                    strictly necessary cookies.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-400 mt-1 flex-shrink-0">
                  &#x2713;
                </span>
                <div>
                  <span className="text-white font-medium">
                    Anyone who needs privacy policies and terms of service too
                  </span>
                  <p className="text-sm text-gray-400 mt-1">
                    Cookiebot only handles cookie consent. It does not generate
                    privacy policies or terms of service. PolicyForge covers
                    all three document types in one tool, saving you from
                    needing a separate generator or lawyer for those documents.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-400 mt-1 flex-shrink-0">
                  &#x2713;
                </span>
                <div>
                  <span className="text-white font-medium">
                    Multi-project creators
                  </span>
                  <p className="text-sm text-gray-400 mt-1">
                    Cookiebot charges per website. If you run three sites,
                    that&apos;s three subscriptions. PolicyForge Pro ($12.99
                    one-time) gives you unlimited policy generation for all
                    your projects &mdash; current and future.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-400 mt-1 flex-shrink-0">
                  &#x2713;
                </span>
                <div>
                  <span className="text-white font-medium">
                    Anyone who wants to audit compliance before committing
                  </span>
                  <p className="text-sm text-gray-400 mt-1">
                    PolicyForge&apos;s{" "}
                    <Link
                      href="/check"
                      className="text-blue-400 hover:underline"
                    >
                      free compliance scanner
                    </Link>{" "}
                    lets you assess your current privacy posture in 30 seconds
                    &mdash; no account, no credit card, no installation. Scan
                    first, then decide what you actually need.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Cookiebot vs Other Alternatives */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              How Other Cookiebot Alternatives Compare
            </h2>
            <p className="mb-4">
              If you&apos;re evaluating Cookiebot alternatives, here&apos;s how
              the main competitors stack up. PolicyForge is included for
              comparison, but remember &mdash; it&apos;s a policy generator,
              not a CMP. The others below are CMPs:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">
                      Platform
                    </th>
                    <th className="text-center py-3 px-4 text-gray-400 font-medium">
                      Type
                    </th>
                    <th className="text-center py-3 px-4 text-gray-400 font-medium">
                      Starting Price
                    </th>
                    <th className="text-center py-3 px-4 text-gray-400 font-medium">
                      Free Tier
                    </th>
                    <th className="text-center py-3 px-4 text-gray-400 font-medium">
                      Consent Banner
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  <tr className="bg-white/5">
                    <td className="py-3 px-4 text-white font-medium">
                      Cookiebot
                    </td>
                    <td className="py-3 px-4 text-center text-gray-300">
                      CMP
                    </td>
                    <td className="py-3 px-4 text-center text-red-400">
                      ~$12/mo
                    </td>
                    <td className="py-3 px-4 text-center text-yellow-400">
                      50 pages
                    </td>
                    <td className="py-3 px-4 text-center text-green-400">
                      &#x2713;
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-white font-medium">
                      CookieYes
                    </td>
                    <td className="py-3 px-4 text-center text-gray-300">
                      CMP
                    </td>
                    <td className="py-3 px-4 text-center text-yellow-400">
                      ~$10/mo
                    </td>
                    <td className="py-3 px-4 text-center text-green-400">
                      100 pages
                    </td>
                    <td className="py-3 px-4 text-center text-green-400">
                      &#x2713;
                    </td>
                  </tr>
                  <tr className="bg-white/5">
                    <td className="py-3 px-4 text-white font-medium">
                      OneTrust
                    </td>
                    <td className="py-3 px-4 text-center text-gray-300">
                      CMP
                    </td>
                    <td className="py-3 px-4 text-center text-red-400">
                      Custom/Enterprise
                    </td>
                    <td className="py-3 px-4 text-center text-yellow-400">
                      Limited
                    </td>
                    <td className="py-3 px-4 text-center text-green-400">
                      &#x2713;
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-white font-medium">
                      Osano
                    </td>
                    <td className="py-3 px-4 text-center text-gray-300">
                      CMP
                    </td>
                    <td className="py-3 px-4 text-center text-yellow-400">
                      ~$199/mo (paid)
                    </td>
                    <td className="py-3 px-4 text-center text-green-400">
                      Yes (basic)
                    </td>
                    <td className="py-3 px-4 text-center text-green-400">
                      &#x2713;
                    </td>
                  </tr>
                  <tr className="bg-blue-900/20">
                    <td className="py-3 px-4 text-blue-400 font-medium">
                      PolicyForge
                    </td>
                    <td className="py-3 px-4 text-center text-blue-300">
                      Generator
                    </td>
                    <td className="py-3 px-4 text-center text-green-400">
                      $4.99 one-time
                    </td>
                    <td className="py-3 px-4 text-center text-green-400">
                      2/day
                    </td>
                    <td className="py-3 px-4 text-center text-red-400">
                      &#x2717;
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              For many small businesses, the most cost-effective approach is
              PolicyForge (for policy documents) + CookieYes free tier or a
              simple open-source banner (for consent management). This gives
              you full GDPR compliance without Cookiebot&apos;s subscription
              costs.
            </p>
          </section>

          {/* How to Migrate from Cookiebot */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              How to Migrate from Cookiebot to PolicyForge
            </h2>
            <p className="mb-4">
              If you&apos;re paying for Cookiebot primarily for the cookie
              policy document (not the consent banner), here&apos;s how to
              switch:
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-sm">
                  1
                </span>
                <div>
                  <h4 className="font-semibold text-white">
                    Scan your current compliance
                  </h4>
                  <p className="text-sm text-gray-400">
                    Use the{" "}
                    <Link
                      href="/check"
                      className="text-blue-400 hover:underline"
                    >
                      free compliance scanner
                    </Link>{" "}
                    to assess your current privacy posture. This shows you
                    exactly what policy documents you need and where your gaps
                    are.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-sm">
                  2
                </span>
                <div>
                  <h4 className="font-semibold text-white">
                    Generate your cookie policy with PolicyForge
                  </h4>
                  <p className="text-sm text-gray-400">
                    Use the{" "}
                    <Link href="/" className="text-blue-400 hover:underline">
                      policy generator
                    </Link>{" "}
                    to create a customized cookie policy that covers your
                    specific cookie usage, third-party services, and consent
                    mechanisms. The output is GDPR and CCPA compliant.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-sm">
                  3
                </span>
                <div>
                  <h4 className="font-semibold text-white">
                    Generate privacy policy and terms of service
                  </h4>
                  <p className="text-sm text-gray-400">
                    While you&apos;re at it, generate a{" "}
                    <Link href="/" className="text-blue-400 hover:underline">
                      privacy policy
                    </Link>{" "}
                    and{" "}
                    <Link href="/tos" className="text-blue-400 hover:underline">
                      terms of service
                    </Link>{" "}
                    too &mdash; documents Cookiebot doesn&apos;t generate but
                    your website still needs.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-sm">
                  4
                </span>
                <div>
                  <h4 className="font-semibold text-white">
                    Replace Cookiebot&apos;s cookie declaration
                  </h4>
                  <p className="text-sm text-gray-400">
                    Remove Cookiebot&apos;s embedded cookie declaration from
                    your site and replace it with your PolicyForge-generated
                    cookie policy. Host the text on your own page for full
                    control.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-sm">
                  5
                </span>
                <div>
                  <h4 className="font-semibold text-white">
                    Set up a free consent banner (if needed)
                  </h4>
                  <p className="text-sm text-gray-400">
                    If you still need a consent popup, install a free
                    alternative (CookieYes free tier, cookie-consent-js, or
                    similar). This replaces Cookiebot&apos;s banner
                    functionality.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-sm">
                  6
                </span>
                <div>
                  <h4 className="font-semibold text-white">
                    Re-scan for verification
                  </h4>
                  <p className="text-sm text-gray-400">
                    After the switch, run the{" "}
                    <Link
                      href="/check"
                      className="text-blue-400 hover:underline"
                    >
                      compliance scanner
                    </Link>{" "}
                    again to confirm everything is properly set up. Your
                    compliance score should be maintained or improved.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* GDPR Fine Context */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              The Cost of Non-Compliance Is Real
            </h2>
            <p className="mb-4">
              Whether you choose Cookiebot, PolicyForge, or any other tool,
              the important thing is that you have <em>some</em> form of
              compliance. The consequences of doing nothing are severe:
            </p>
            <div className="bg-red-900/20 border border-red-800/30 rounded-lg p-5">
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5 flex-shrink-0 font-semibold">GDPR:</span>
                  <span className="text-gray-300">
                    Fines up to &euro;20 million or 4% of global annual turnover,
                    whichever is higher. In 2025, GDPR fines exceeded &euro;4.5
                    billion cumulatively.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5 flex-shrink-0 font-semibold">CCPA:</span>
                  <span className="text-gray-300">
                    Fines up to $7,500 per intentional violation. Class action
                    lawsuits allow consumers to seek $100&ndash;$750 per
                    incident.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5 flex-shrink-0 font-semibold">ePrivacy:</span>
                  <span className="text-gray-300">
                    Cookie-specific violations under the ePrivacy Directive
                    carry separate fines in many EU member states, with France&apos;s
                    CNIL being particularly aggressive (e.g., &euro;150M fine
                    against Google for cookie violations).
                  </span>
                </div>
              </div>
            </div>
            <p className="mt-4">
              The bottom line: you need cookie compliance. The question is
              whether you need a $144&ndash;$552/year subscription or a $12.99
              one-time payment for the policy documents. For many businesses,
              PolicyForge combined with a free consent banner is the
              cost-effective answer.
            </p>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-800/30 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-4 text-center">
              Ready for Affordable Cookie Compliance?
            </h2>
            <p className="text-gray-300 text-center mb-2">
              Stop paying $12&ndash;$46+/month for policy documents you can
              generate once for $12.99.
            </p>
            <p className="text-gray-400 text-center mb-6 text-sm">
              Generate GDPR &amp; CCPA compliant cookie policies, privacy
              policies, and terms of service in under 2 minutes. No account
              required. No subscription. No vendor lock-in.
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
                  Is PolicyForge a good alternative to Cookiebot?
                </h3>
                <p>
                  It depends on what you need. If you need an active cookie
                  consent banner with automatic scanning and consent storage,
                  Cookiebot (or a similar CMP) is the right tool. If you
                  need policy documents &mdash; cookie policies, privacy
                  policies, and terms of service &mdash; PolicyForge generates
                  them at a fraction of the cost. Many businesses use
                  PolicyForge for the documents and a free consent banner for
                  the popup, saving $130+/year compared to Cookiebot.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  How much does Cookiebot cost?
                </h3>
                <p>
                  Cookiebot offers a free tier for sites with up to 50 subpages.
                  Paid plans start at ~$12/month (billed annually) for up to
                  500 subpages and scale up to $46+/month for larger sites.
                  Enterprise pricing is custom. Over a year, the typical cost
                  ranges from $144 to $552+. PolicyForge costs $4.99&ndash;$12.99
                  one-time.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  What is the difference between a CMP and a policy generator?
                </h3>
                <p>
                  A CMP (Consent Management Platform) like Cookiebot handles
                  the technical side of cookie consent: scanning for cookies,
                  showing banners, recording consent, and blocking cookies
                  until consent is given. A policy generator like PolicyForge
                  creates the legal documents (cookie policy, privacy policy,
                  terms of service) that describe your data practices. Under
                  GDPR, you need both a consent mechanism and a written policy.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Do I need both Cookiebot and PolicyForge?
                </h3>
                <p>
                  If you use Cookiebot for consent management, you may still
                  benefit from PolicyForge for your privacy policy and terms
                  of service &mdash; documents Cookiebot doesn&apos;t generate.
                  If you&apos;re looking to replace Cookiebot entirely, you can
                  use PolicyForge for policy documents and a free consent
                  banner (like CookieYes free tier) for the popup.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Is PolicyForge free?
                </h3>
                <p>
                  PolicyForge offers a free tier with 2 policy generations per
                  day. The Starter tier ($4.99 one-time) unlocks more templates.
                  The Pro tier ($12.99 one-time) unlocks unlimited generations,
                  all premium templates, and advanced customization. The{" "}
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
                  Can I use PolicyForge without a consent banner?
                </h3>
                <p>
                  If your website only uses strictly necessary cookies
                  (authentication, security, shopping carts), you generally
                  don&apos;t need a consent banner under GDPR. You still need
                  a cookie policy documenting what cookies you use, which
                  PolicyForge generates. If you use analytics, advertising,
                  or other non-essential cookies, you&apos;ll need a consent
                  banner from a CMP or open-source solution.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  What free Cookiebot alternatives exist?
                </h3>
                <p>
                  For consent management: CookieYes (free up to 100 pages),
                  Osano (free basic tier), and open-source libraries like
                  cookie-consent-js. For policy documents: PolicyForge free
                  tier (2 generations/day). Combining a free consent banner
                  with PolicyForge&apos;s cookie policy gives you solid GDPR
                  compliance at zero to minimal cost.
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
                  Termly Alternative Comparison
                </h4>
                <p className="text-sm text-gray-400">
                  See how PolicyForge compares to Termly&apos;s subscription
                  pricing model.
                </p>
              </Link>
              <Link
                href="/iubenda-alternative"
                className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800/70 transition block"
              >
                <h4 className="font-semibold text-white mb-1">
                  Iubenda Alternative Comparison
                </h4>
                <p className="text-sm text-gray-400">
                  Compare PolicyForge with Iubenda&apos;s compliance suite.
                </p>
              </Link>
              <Link
                href="/termsfeed-alternative"
                className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800/70 transition block"
              >
                <h4 className="font-semibold text-white mb-1">
                  TermsFeed Alternative Comparison
                </h4>
                <p className="text-sm text-gray-400">
                  Compare PolicyForge with TermsFeed&apos;s per-document pricing.
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
                  A comprehensive comparison of all free privacy policy
                  generators available today.
                </p>
              </Link>
              <Link
                href="/cookie-policy-generator"
                className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800/70 transition block"
              >
                <h4 className="font-semibold text-white mb-1">
                  Cookie Policy Generator
                </h4>
                <p className="text-sm text-gray-400">
                  Generate a GDPR-compliant cookie policy for your website in
                  minutes.
                </p>
              </Link>
              <Link
                href="/gdpr-compliance-checklist"
                className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800/70 transition block"
              >
                <h4 className="font-semibold text-white mb-1">
                  GDPR Compliance Checklist
                </h4>
                <p className="text-sm text-gray-400">
                  A complete checklist to ensure your website meets GDPR
                  requirements.
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
              <Link href="/iubenda-alternative" className="text-blue-400 hover:underline">Iubenda Alternative</Link>
              <Link href="/termsfeed-alternative" className="text-blue-400 hover:underline">TermsFeed Alternative</Link>
              <Link href="/best-free-privacy-policy-generator" className="text-blue-400 hover:underline">Best Free Generators (2026)</Link>
              <Link href="/free-gdpr-compliance-tool" className="text-blue-400 hover:underline">Free GDPR Compliance Tool</Link>
              <Link href="/gdpr-compliance-checklist" className="text-blue-400 hover:underline">GDPR Compliance Checklist</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
