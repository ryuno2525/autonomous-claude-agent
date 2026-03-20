import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Privacy Policy for Indie Hackers & Side Projects | Free Generator - PolicyForge",
  description:
    "Generate a free privacy policy for your side project or indie hack. If you use Stripe, Google Analytics, Mailchimp, or any third-party service, you need one. GDPR & CCPA apply regardless of company size. Fast, $4.99, no lawyer needed.",
  keywords:
    "privacy policy for indie hackers, side project privacy policy, solo developer privacy policy, do I need a privacy policy for my side project, indie hacker GDPR, privacy policy for small app, privacy policy generator indie, side project legal requirements, solo founder privacy policy, micro-SaaS privacy policy, bootstrapped startup privacy policy, privacy policy for MVP, one-person company privacy policy",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I need a privacy policy for my side project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. If your side project collects any user data — even just an email address for a waitlist, analytics via Google Analytics or Plausible, or payments through Stripe — you are legally required to have a privacy policy under GDPR, CCPA, and other regulations. These laws apply regardless of company size, revenue, or whether your project is a hobby or a business.",
      },
    },
    {
      "@type": "Question",
      name: "Does GDPR apply to indie hackers and solo developers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. GDPR applies to anyone who processes personal data of EU residents, regardless of where you are located or how big your company is. If even one person from the EU visits your site and you collect their IP address via analytics, GDPR applies to you. Fines can reach up to 20 million euros or 4% of global annual turnover.",
      },
    },
    {
      "@type": "Question",
      name: "Can I just use a free privacy policy template I found online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Generic templates are risky because they may not accurately reflect your specific data practices. A privacy policy must describe exactly what data YOU collect, which third-party services YOU use, and how YOU handle that data. PolicyForge generates a customized privacy policy based on your actual tech stack and data practices, ensuring accuracy and legal compliance.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if I launch my side project without a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Several things can go wrong: Apple and Google app stores will reject your app, Stripe and PayPal may freeze your payment account, you could face GDPR fines up to 20 million euros, CCPA fines of $2,500-$7,500 per violation, and ad networks like Google AdSense will reject your application. Beyond legal risks, users increasingly expect transparency about data handling.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a privacy policy cost for a solo developer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A lawyer typically charges $500-$2,000 for a privacy policy. SaaS tools like Termly charge $10-$40/month. PolicyForge offers a one-time payment of $4.99 for a Starter plan or $12.99 for Pro (unlimited generations), making it the most affordable option for indie hackers who need professional, compliant privacy policies without recurring costs.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a privacy policy if my side project is free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Whether you charge money or not has no bearing on privacy law. If your free app or website collects any personal data — IP addresses logged by your hosting provider, emails from a contact form, cookies from analytics — you need a privacy policy. Free projects with ads (Google AdSense) or analytics (Google Analytics) are especially obligated because these services collect extensive user data.",
      },
    },
    {
      "@type": "Question",
      name: "I use Vercel/Netlify for hosting. Do I still need a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Hosting platforms like Vercel and Netlify automatically collect server logs containing IP addresses, user agents, and request metadata. This constitutes personal data under GDPR. Additionally, if you use Vercel Analytics, Vercel Speed Insights, or any client-side analytics, you are collecting even more data that must be disclosed in a privacy policy.",
      },
    },
  ],
};

export default function PrivacyPolicyForIndieHackers() {
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
          Privacy Policy for Indie Hackers &amp; Side Projects
        </h1>

        <p className="text-gray-400 text-lg mb-8">
          You shipped your side project over the weekend. Users are signing up.
          Stripe is connected. Google Analytics is tracking page views. But
          there&apos;s a problem: you don&apos;t have a privacy policy. GDPR and
          CCPA don&apos;t care that you&apos;re a solo developer working from
          your apartment &mdash; if you collect user data, you&apos;re legally
          required to have one. Here&apos;s everything you need to know, and how
          to get compliant in under 2 minutes.
        </p>

        <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-blue-800/40 rounded-xl p-6 mb-10">
          <h3 className="text-lg font-semibold text-white mb-2">
            Generate Your Privacy Policy in 2 Minutes
          </h3>
          <p className="text-gray-300 text-sm mb-4">
            Built for indie hackers who ship fast. PolicyForge creates
            customized, GDPR-compliant privacy policies tailored to your tech
            stack &mdash; Stripe, Google Analytics, Mailchimp, Vercel, and more.
            No legal jargon. No lawyer fees. Starting at $4.99.
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
              Scan Your Site Free
            </Link>
          </div>
        </div>

        <div className="space-y-10 text-gray-300 leading-relaxed text-[17px]">
          {/* Section 1: Why Indie Hackers Need a Privacy Policy */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Why Indie Hackers Can&apos;t Skip the Privacy Policy
            </h2>
            <p className="mb-4">
              The indie hacker ethos is to move fast &mdash; ship the MVP,
              validate, iterate. Legal compliance often gets skipped. But the
              moment your project touches user data, you&apos;re subject to
              privacy regulations. GDPR enforcement doesn&apos;t distinguish
              between a Fortune 500 company and a side project with 50 users.
            </p>
            <div className="space-y-4 mt-6">
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-1">
                  &ldquo;It&apos;s just a side project&rdquo;
                </h4>
                <p className="text-sm text-gray-400">
                  Privacy laws don&apos;t have a &ldquo;side project
                  exemption.&rdquo; If you collect an email address, log an IP,
                  or use a cookie, you&apos;re processing personal data. Period.
                  It doesn&apos;t matter if you have 10 users or 10 million.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-1">
                  &ldquo;I don&apos;t collect any data&rdquo;
                </h4>
                <p className="text-sm text-gray-400">
                  You almost certainly do. Your hosting provider logs IP
                  addresses. If you use any analytics tool, it collects device
                  info, location data, and browsing behavior. A contact form
                  collects names and emails. Even a static site on Vercel or
                  Netlify generates server logs with personal data.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-1">
                  &ldquo;Nobody actually enforces this&rdquo;
                </h4>
                <p className="text-sm text-gray-400">
                  GDPR enforcement has resulted in over &euro;4 billion in fines
                  since 2018. CCPA enforcement is accelerating. And beyond
                  regulators, platforms enforce compliance too &mdash; Stripe,
                  the App Store, Google AdSense, and ad networks all require
                  privacy policies. No policy often means no account.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Common Tools That Require a Privacy Policy */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Tools Indie Hackers Use That Require a Privacy Policy
            </h2>
            <p className="mb-6">
              If you use any of these tools &mdash; and most indie hackers use
              several &mdash; you need a privacy policy that discloses the data
              they collect on your behalf.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-4 text-gray-400">
                      Tool / Service
                    </th>
                    <th className="text-left py-3 px-4 text-gray-400">
                      Data Collected
                    </th>
                    <th className="text-left py-3 px-4 text-gray-400">
                      Policy Required?
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 font-medium text-white">
                      Stripe
                    </td>
                    <td className="py-3 px-4">
                      Name, email, card details, billing address, IP
                    </td>
                    <td className="py-3 px-4 text-red-400 font-semibold">
                      Yes &mdash; required by Stripe TOS
                    </td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 font-medium text-white">
                      Google Analytics
                    </td>
                    <td className="py-3 px-4">
                      IP address, device info, location, browsing behavior
                    </td>
                    <td className="py-3 px-4 text-red-400 font-semibold">
                      Yes &mdash; required by Google TOS
                    </td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 font-medium text-white">
                      Mailchimp / ConvertKit
                    </td>
                    <td className="py-3 px-4">
                      Email, name, open/click tracking, IP
                    </td>
                    <td className="py-3 px-4 text-red-400 font-semibold">
                      Yes &mdash; GDPR consent required
                    </td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 font-medium text-white">
                      Vercel / Netlify
                    </td>
                    <td className="py-3 px-4">
                      IP address, request headers, server logs
                    </td>
                    <td className="py-3 px-4 text-yellow-400 font-semibold">
                      Yes &mdash; server logs are personal data
                    </td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 font-medium text-white">
                      Supabase / Firebase
                    </td>
                    <td className="py-3 px-4">
                      Auth data, user profiles, usage logs
                    </td>
                    <td className="py-3 px-4 text-red-400 font-semibold">
                      Yes &mdash; stores personal data
                    </td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 font-medium text-white">
                      Resend / SendGrid
                    </td>
                    <td className="py-3 px-4">
                      Email addresses, delivery/open tracking
                    </td>
                    <td className="py-3 px-4 text-red-400 font-semibold">
                      Yes &mdash; processes personal data
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-white">
                      Google AdSense
                    </td>
                    <td className="py-3 px-4">
                      Cookies, browsing history, demographics
                    </td>
                    <td className="py-3 px-4 text-red-400 font-semibold">
                      Yes &mdash; account rejected without policy
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              This is not exhaustive. Any third-party service that processes
              user data on your behalf must be disclosed in your privacy policy.
              When in doubt, include it.
            </p>
          </section>

          {/* Section 3: Platform Requirements */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Platforms That Block You Without a Privacy Policy
            </h2>
            <p className="mb-4">
              A privacy policy isn&apos;t just legally required &mdash;
              it&apos;s a hard prerequisite for the platforms indie hackers
              depend on:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-800/50 rounded-lg p-5">
                <h4 className="font-semibold text-white mb-2">
                  Apple &amp; Google App Stores
                </h4>
                <p className="text-sm text-gray-400">
                  Both require a privacy policy URL before publishing. Apple
                  also requires privacy nutrition labels. Missing policy = app
                  rejected during review.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-5">
                <h4 className="font-semibold text-white mb-2">
                  Stripe &amp; Payment Processors
                </h4>
                <p className="text-sm text-gray-400">
                  Stripe&apos;s TOS requires a privacy policy on your website.
                  Accounts have been suspended for non-compliance. No policy =
                  no payments.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-5">
                <h4 className="font-semibold text-white mb-2">
                  Google AdSense &amp; Ad Networks
                </h4>
                <p className="text-sm text-gray-400">
                  AdSense applications are rejected without a visible privacy
                  policy. Google requires cookie disclosure and a link to their
                  own privacy practices.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-5">
                <h4 className="font-semibold text-white mb-2">
                  Chrome Web Store &amp; Directories
                </h4>
                <p className="text-sm text-gray-400">
                  Extensions need a privacy policy URL. Product directories
                  check for one too. No policy signals amateurism and blocks
                  your listing.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: What Your Privacy Policy Must Cover */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              What Your Side Project Privacy Policy Must Include
            </h2>
            <p className="mb-4">
              It doesn&apos;t need to be 20 pages of legalese. But it does
              need to be accurate. Here are the essentials:
            </p>
            <div className="bg-gray-900/50 rounded-xl p-6">
              <div className="space-y-3 text-sm">
                <div className="flex gap-3">
                  <span className="text-green-400 w-5 flex-shrink-0">1.</span>
                  <p><span className="font-semibold text-white">Who you are</span> <span className="text-gray-400">&mdash; Name, contact email, physical address (PO Box works for solo devs)</span></p>
                </div>
                <div className="flex gap-3">
                  <span className="text-green-400 w-5 flex-shrink-0">2.</span>
                  <p><span className="font-semibold text-white">What data you collect and why</span> <span className="text-gray-400">&mdash; Emails, IPs, payment info, usage data. Be specific about each type.</span></p>
                </div>
                <div className="flex gap-3">
                  <span className="text-green-400 w-5 flex-shrink-0">3.</span>
                  <p><span className="font-semibold text-white">Third-party services</span> <span className="text-gray-400">&mdash; Stripe, Google Analytics, Supabase, Vercel, Resend. Link to each service&apos;s privacy policy.</span></p>
                </div>
                <div className="flex gap-3">
                  <span className="text-green-400 w-5 flex-shrink-0">4.</span>
                  <p><span className="font-semibold text-white">Cookies and tracking</span> <span className="text-gray-400">&mdash; What cookies you set, what they do, how to opt out. EU users need prior consent for non-essential cookies.</span></p>
                </div>
                <div className="flex gap-3">
                  <span className="text-green-400 w-5 flex-shrink-0">5.</span>
                  <p><span className="font-semibold text-white">User rights</span> <span className="text-gray-400">&mdash; Access, correct, delete, export data. Withdraw consent. Opt out of data sales (CCPA).</span></p>
                </div>
                <div className="flex gap-3">
                  <span className="text-green-400 w-5 flex-shrink-0">6.</span>
                  <p><span className="font-semibold text-white">Retention, transfers, contact</span> <span className="text-gray-400">&mdash; How long data is kept, legal basis for international transfers, working contact email.</span></p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: The Indie Hacker's Compliance Checklist */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              The Indie Hacker&apos;s Privacy Compliance Checklist
            </h2>
            <p className="mb-4">
              Use this checklist before you launch. It takes 15 minutes to go
              through and could save you from fines, account freezes, and app
              rejections.
            </p>
            <div className="bg-gray-800/50 rounded-xl p-6 space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-blue-400 mt-0.5 flex-shrink-0">
                  &#9744;
                </span>
                <p className="text-sm text-gray-300">
                  <strong className="text-white">Privacy policy page</strong>{" "}
                  &mdash; Published at /privacy or /privacy-policy, linked from
                  footer on every page
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-400 mt-0.5 flex-shrink-0">
                  &#9744;
                </span>
                <p className="text-sm text-gray-300">
                  <strong className="text-white">
                    All third-party services listed
                  </strong>{" "}
                  &mdash; Stripe, analytics, hosting, email, auth, database,
                  support tools
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-400 mt-0.5 flex-shrink-0">
                  &#9744;
                </span>
                <p className="text-sm text-gray-300">
                  <strong className="text-white">Cookie consent banner</strong>{" "}
                  &mdash; Required for EU users if you use non-essential cookies
                  (analytics, marketing)
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-400 mt-0.5 flex-shrink-0">
                  &#9744;
                </span>
                <p className="text-sm text-gray-300">
                  <strong className="text-white">
                    Contact email for privacy inquiries
                  </strong>{" "}
                  &mdash; Visible in your privacy policy, reachable and
                  monitored
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-400 mt-0.5 flex-shrink-0">
                  &#9744;
                </span>
                <p className="text-sm text-gray-300">
                  <strong className="text-white">
                    Data deletion process
                  </strong>{" "}
                  &mdash; Document how users can request their data be deleted,
                  and actually honor it
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-400 mt-0.5 flex-shrink-0">
                  &#9744;
                </span>
                <p className="text-sm text-gray-300">
                  <strong className="text-white">
                    Terms of service page
                  </strong>{" "}
                  &mdash; Separate from privacy policy; covers usage rules,
                  liability, and acceptable use. Generate one with{" "}
                  <Link
                    href="/tos"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    PolicyForge ToS Generator
                  </Link>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-400 mt-0.5 flex-shrink-0">
                  &#9744;
                </span>
                <p className="text-sm text-gray-300">
                  <strong className="text-white">
                    Consent &amp; platform URLs
                  </strong>{" "}
                  &mdash; Signup consent checkbox (don&apos;t pre-check for EU),
                  and privacy policy URL added to App Store / Google Play if
                  applicable
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              Not sure if your site is compliant?{" "}
              <Link
                href="/check"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                Run a free compliance scan
              </Link>{" "}
              to find gaps in your privacy setup.
            </p>
          </section>

          {/* Section 6: Cost Comparison */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              The Cost of Getting It Wrong (vs. Getting It Right)
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-4 text-gray-400">
                      Risk
                    </th>
                    <th className="text-left py-3 px-4 text-gray-400">
                      Potential Cost
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4">GDPR fine</td>
                    <td className="py-3 px-4 text-red-400 font-semibold">
                      Up to &euro;20,000,000
                    </td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4">CCPA violation</td>
                    <td className="py-3 px-4 text-red-400 font-semibold">
                      $2,500 - $7,500 per incident
                    </td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4">Stripe account suspended</td>
                    <td className="py-3 px-4 text-yellow-400 font-semibold">
                      Revenue frozen until resolved
                    </td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4">App Store rejection</td>
                    <td className="py-3 px-4 text-yellow-400 font-semibold">
                      Launch delayed days to weeks
                    </td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4">AdSense application denied</td>
                    <td className="py-3 px-4 text-yellow-400 font-semibold">
                      Lost ad revenue
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">User trust damage</td>
                    <td className="py-3 px-4 text-yellow-400 font-semibold">
                      Churn, bad reviews, reputation loss
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 bg-green-900/20 border border-green-800/30 rounded-lg p-4">
              <p className="text-sm text-green-300">
                <strong>Cost of PolicyForge Starter:</strong> $4.99 (one-time).
                Generate a customized, compliant privacy policy in under 2
                minutes. Or get Pro for $12.99 &mdash; unlimited privacy
                policies, terms of service, and cookie policies for all your
                projects. No subscription.
              </p>
            </div>
          </section>

          {/* Section 7: Why PolicyForge for Indie Hackers */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Why Indie Hackers Choose PolicyForge
            </h2>
            <p className="mb-4">
              Most privacy policy tools are built for enterprises with legal
              teams and compliance budgets. PolicyForge is built for people who
              ship side projects on weekends.
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1 flex-shrink-0">&#10003;</span>
                <span>
                  <strong className="text-white">One-time payment</strong> &mdash;
                  $4.99 Starter or $12.99 Pro. No subscription. Termly charges
                  $10/month ($120/year). Iubenda charges $29/year.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1 flex-shrink-0">&#10003;</span>
                <span>
                  <strong className="text-white">2-minute generation</strong> &mdash;
                  Answer a few questions, get a complete, customized policy. No
                  legal expertise or 30-minute questionnaires.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1 flex-shrink-0">&#10003;</span>
                <span>
                  <strong className="text-white">Built for your tech stack</strong> &mdash;
                  Stripe, Vercel, Supabase, Firebase, Google Analytics, Plausible,
                  Resend, Mailchimp &mdash; accurate disclosures for each.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1 flex-shrink-0">&#10003;</span>
                <span>
                  <strong className="text-white">Unlimited for all your projects</strong> &mdash;
                  Pro gives you unlimited generations for every side project, SaaS,
                  and app in your portfolio.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1 flex-shrink-0">&#10003;</span>
                <span>
                  <strong className="text-white">Privacy + ToS + cookies</strong> &mdash;
                  Generate{" "}
                  <Link href="/tos" className="text-blue-400 hover:text-blue-300 underline">
                    terms of service
                  </Link>
                  , cookie policies, and privacy policies from one tool.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1 flex-shrink-0">&#10003;</span>
                <span>
                  <strong className="text-white">Free compliance scanner</strong> &mdash;
                  <Link href="/check" className="text-blue-400 hover:text-blue-300 underline ml-1">
                    Scan your site
                  </Link>{" "}
                  for free and get an instant compliance report. No signup.
                </span>
              </li>
            </ul>
          </section>

          {/* Section 8: FAQ */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              FAQ: Privacy Policies for Indie Hackers
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Do I need a privacy policy for my side project?
                </h3>
                <p>
                  Yes. If your side project collects any user data &mdash; even
                  just an email address for a waitlist, analytics via Google
                  Analytics or Plausible, or payments through Stripe &mdash; you
                  are legally required to have a privacy policy under GDPR,
                  CCPA, and other regulations. These laws apply regardless of
                  company size, revenue, or whether your project is a hobby or a
                  business.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Does GDPR apply to indie hackers and solo developers?
                </h3>
                <p>
                  Yes. GDPR applies to anyone who processes personal data of EU
                  residents, regardless of where you are located or how big your
                  company is. If even one person from the EU visits your site and
                  you collect their IP address via analytics, GDPR applies to
                  you. Fines can reach up to &euro;20 million or 4% of global
                  annual turnover.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Can I just use a free template I found online?
                </h3>
                <p>
                  Generic templates are risky because they don&apos;t reflect
                  your specific data practices. A privacy policy must describe
                  what data you collect and which services you use. PolicyForge
                  generates a customized policy based on your actual tech stack.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  What happens if I launch without a privacy policy?
                </h3>
                <p>
                  App stores reject your app, Stripe may freeze your account,
                  you face GDPR fines up to &euro;20 million or CCPA fines of
                  $2,500-$7,500 per violation, and ad networks deny your
                  application.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  How much does a privacy policy cost for a solo developer?
                </h3>
                <p>
                  A lawyer charges $500-$2,000. SaaS tools like Termly charge
                  $10-$40/month. PolicyForge is a one-time $4.99 (Starter) or
                  $12.99 (Pro, unlimited) &mdash; no recurring costs.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Do I need one if my side project is free?
                </h3>
                <p>
                  Yes. Whether you charge money has no bearing on privacy law.
                  If your free app collects IP addresses, emails, or uses
                  analytics cookies, you need a privacy policy.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  I use Vercel/Netlify. Do I still need a privacy policy?
                </h3>
                <p>
                  Yes. Hosting platforms automatically collect server logs with
                  IP addresses and user agents &mdash; that&apos;s personal data
                  under GDPR. Add Vercel Analytics and you&apos;re collecting
                  even more.
                </p>
              </div>
            </div>
          </section>

          {/* Related Resources */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Related Resources
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy-policy-for-startup" className="text-blue-400 hover:text-blue-300 underline">
                  Privacy Policy for Startups
                </Link>{" "}
                <span className="text-gray-500">&mdash; Scaling beyond a side project? Read the startup guide.</span>
              </li>
              <li>
                <Link href="/privacy-policy-for-saas" className="text-blue-400 hover:text-blue-300 underline">
                  Privacy Policy for SaaS
                </Link>{" "}
                <span className="text-gray-500">&mdash; Specific requirements for subscription apps.</span>
              </li>
              <li>
                <Link href="/gdpr-compliance-checklist" className="text-blue-400 hover:text-blue-300 underline">
                  GDPR Compliance Checklist
                </Link>{" "}
                <span className="text-gray-500">&mdash; Full checklist beyond privacy policies.</span>
              </li>
              <li>
                <Link href="/best-free-privacy-policy-generator" className="text-blue-400 hover:text-blue-300 underline">
                  Best Free Privacy Policy Generators
                </Link>{" "}
                <span className="text-gray-500">&mdash; Compare PolicyForge with other tools.</span>
              </li>
            </ul>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-800/30 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-4 text-center">
              Ship Compliant. Ship Today.
            </h2>
            <p className="text-gray-300 text-center mb-6 max-w-2xl mx-auto">
              You didn&apos;t become an indie hacker to spend hours on legal
              docs. PolicyForge generates a customized, GDPR-compliant privacy
              policy for your project in under 2 minutes. Get back to building.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/"
                className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-8 rounded-lg transition"
              >
                Generate Free Policy &mdash; $0
              </Link>
              <Link
                href="/check"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-lg transition"
              >
                Check Your Compliance
              </Link>
            </div>
            <p className="text-center text-sm text-gray-500 mt-4">
              Free tier: 2 generations/day. Starter: $4.99 one-time. Pro:
              $12.99 for unlimited.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
