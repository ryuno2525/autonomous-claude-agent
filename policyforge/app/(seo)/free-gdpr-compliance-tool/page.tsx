import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Free GDPR Compliance Tool — Check Your Website in 60 Seconds | PolicyForge",
  description:
    "Free GDPR compliance tool that scans your website in 60 seconds. Check privacy policy, cookie consent, data collection disclosures, and more. No signup required. Instant results with actionable fixes.",
  keywords:
    "free GDPR compliance tool, GDPR checker, GDPR compliance checker, free GDPR scanner, GDPR website checker, privacy policy checker, GDPR audit tool, GDPR compliance check free, website GDPR compliance, GDPR readiness assessment, privacy compliance scanner, free privacy audit",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is the PolicyForge GDPR compliance tool really free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, the compliance scanner is 100% free with no signup required. You can scan unlimited websites. If you need to generate a compliant privacy policy based on your results, PolicyForge offers paid plans starting at $4.99.",
      },
    },
    {
      "@type": "Question",
      name: "How accurate is the GDPR compliance scan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The scanner checks 11 critical compliance areas including data collection disclosure, GDPR-specific provisions, CCPA compliance, cookie policy, user rights, and more. It analyzes the actual text of your privacy policy against regulatory requirements. While no automated tool replaces legal advice, PolicyForge identifies the most common compliance gaps that lead to regulatory action.",
      },
    },
    {
      "@type": "Question",
      name: "What does the GDPR compliance tool check?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The tool checks 11 areas: data collection disclosure, purpose of data use, cookie policy, third-party sharing, user rights, GDPR compliance provisions, CCPA compliance, data retention policies, security measures, contact information, and policy update procedures. Each area is weighted by regulatory importance.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to create an account to use the tool?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Just enter your website URL and click scan. Results are delivered instantly with no account, no email address, and no credit card required.",
      },
    },
    {
      "@type": "Question",
      name: "What should I do if my website scores poorly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Each check in the scan results includes a specific recommendation for improvement. The most common fixes include adding a data collection disclosure, including GDPR-specific language about legal basis and user rights, and adding a cookie consent mechanism. PolicyForge can generate a compliant privacy policy that addresses all identified gaps.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use this tool for multiple websites?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. There is no limit on the number of websites you can scan. Agencies and consultants regularly use PolicyForge to audit multiple client websites.",
      },
    },
  ],
};

export default function FreeGDPRComplianceTool() {
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
          Free GDPR Compliance Tool &mdash; Check Your Website Now
        </h1>

        <p className="text-gray-400 text-lg mb-8">
          GDPR fines can reach &euro;20 million or 4% of your global annual
          revenue &mdash; whichever is higher. In 2024 alone, EU data protection
          authorities issued over &euro;2 billion in fines. Most businesses
          don&apos;t know whether their website is compliant until they receive a
          complaint or a regulatory inquiry. Our free tool checks your website
          against 11 critical compliance areas in under 60 seconds. No signup.
          No credit card. Just paste your URL and get your results instantly.
        </p>

        <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-blue-800/40 rounded-xl p-6 mb-10">
          <h3 className="text-lg font-semibold text-white mb-2">
            Scan Your Website for GDPR Compliance &mdash; Free
          </h3>
          <p className="text-gray-300 text-sm mb-4">
            Enter any URL and get a detailed compliance report with a score out
            of 100, a letter grade, and specific recommendations to fix every
            issue found. No account required.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link
              href="/check"
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2.5 px-6 rounded-lg transition text-sm"
            >
              Check Your Website Now (Free)
            </Link>
            <Link
              href="/leaderboard"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold py-2.5 px-6 rounded-lg transition text-sm"
            >
              View Compliance Leaderboard
            </Link>
          </div>
        </div>

        <div className="space-y-10 text-gray-300 leading-relaxed text-[17px]">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              What Our GDPR Compliance Tool Checks
            </h2>
            <p className="mb-4">
              The PolicyForge compliance scanner performs an 11-point analysis
              of your website&apos;s privacy policy, weighted by regulatory
              importance. Here is exactly what we look for:
            </p>
            <div className="bg-gray-900/50 rounded-xl p-6">
              <div className="space-y-4 text-sm">
                <div className="flex gap-4">
                  <span className="text-blue-400 font-semibold w-48 flex-shrink-0">
                    1. Data Collection Disclosure (15%)
                  </span>
                  <span>
                    Does your policy clearly state what personal data you
                    collect? This is the most heavily weighted check because
                    Articles 13 and 14 of the GDPR require you to tell users
                    exactly what data you gather.
                  </span>
                </div>
                <div className="flex gap-4">
                  <span className="text-blue-400 font-semibold w-48 flex-shrink-0">
                    2. Purpose of Data Use (12%)
                  </span>
                  <span>
                    Does your policy explain why you collect data and how you use
                    it? GDPR Article 5(1)(b) requires purpose limitation &mdash;
                    data can only be used for stated purposes.
                  </span>
                </div>
                <div className="flex gap-4">
                  <span className="text-blue-400 font-semibold w-48 flex-shrink-0">
                    3. Third-Party Sharing (12%)
                  </span>
                  <span>
                    Does your policy disclose data sharing with third parties,
                    service providers, or sub-processors? This includes
                    analytics tools, payment processors, and advertising
                    networks.
                  </span>
                </div>
                <div className="flex gap-4">
                  <span className="text-blue-400 font-semibold w-48 flex-shrink-0">
                    4. User Rights (12%)
                  </span>
                  <span>
                    Are users informed of their rights to access, delete,
                    correct, and port their data? GDPR Articles 15-22 grant
                    specific rights that must be clearly communicated.
                  </span>
                </div>
                <div className="flex gap-4">
                  <span className="text-blue-400 font-semibold w-48 flex-shrink-0">
                    5. Cookie Policy (10%)
                  </span>
                  <span>
                    Does your site disclose the use of cookies and tracking
                    technologies? The ePrivacy Directive requires consent before
                    setting non-essential cookies.
                  </span>
                </div>
                <div className="flex gap-4">
                  <span className="text-blue-400 font-semibold w-48 flex-shrink-0">
                    6. GDPR Compliance (10%)
                  </span>
                  <span>
                    Does your policy include GDPR-specific provisions like legal
                    basis for processing, data protection officer details, and
                    data portability rights?
                  </span>
                </div>
                <div className="flex gap-4">
                  <span className="text-blue-400 font-semibold w-48 flex-shrink-0">
                    7. CCPA Compliance (8%)
                  </span>
                  <span>
                    Does your policy address California Consumer Privacy Act
                    requirements including the right to know, delete, and opt out
                    of the sale of personal information?
                  </span>
                </div>
                <div className="flex gap-4">
                  <span className="text-blue-400 font-semibold w-48 flex-shrink-0">
                    8. Data Retention (8%)
                  </span>
                  <span>
                    Does your policy specify how long you keep user data? GDPR
                    Article 5(1)(e) requires storage limitation &mdash; data
                    should not be kept longer than necessary.
                  </span>
                </div>
                <div className="flex gap-4">
                  <span className="text-blue-400 font-semibold w-48 flex-shrink-0">
                    9. Security Measures (5%)
                  </span>
                  <span>
                    Does your policy describe how you protect user data?
                    Encryption, access controls, and security practices should be
                    communicated.
                  </span>
                </div>
                <div className="flex gap-4">
                  <span className="text-blue-400 font-semibold w-48 flex-shrink-0">
                    10. Contact Information (5%)
                  </span>
                  <span>
                    Does your policy provide a way for users to reach you with
                    privacy concerns? GDPR requires a named contact or data
                    protection officer.
                  </span>
                </div>
                <div className="flex gap-4">
                  <span className="text-blue-400 font-semibold w-48 flex-shrink-0">
                    11. Policy Updates (3%)
                  </span>
                  <span>
                    Does your policy explain how users will be notified of
                    changes? Transparency about updates builds trust and is
                    considered best practice.
                  </span>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              How It Works
            </h2>
            <p className="mb-6">
              Getting your compliance report takes less than a minute. Three
              steps, zero friction.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-800/50 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-3">1</div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Enter Your URL
                </h3>
                <p className="text-sm text-gray-400">
                  Paste your website URL into the scanner. We&apos;ll
                  automatically find your privacy policy page, even if it&apos;s
                  linked from the footer or located at a non-standard path.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-3">2</div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Get Your Results
                </h3>
                <p className="text-sm text-gray-400">
                  Our scanner checks 15+ common privacy policy paths, analyzes
                  the text against 11 compliance criteria, and generates a
                  weighted score out of 100 with a letter grade.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-3">3</div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Fix the Issues
                </h3>
                <p className="text-sm text-gray-400">
                  Each failed check comes with a specific recommendation. Fix
                  the issues manually, or use PolicyForge to generate a fully
                  compliant privacy policy that addresses every gap.
                </p>
              </div>
            </div>
          </section>

          <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 border border-green-800/30 rounded-xl p-6 text-center">
            <p className="text-white font-semibold text-lg mb-3">
              Ready to check your website?
            </p>
            <p className="text-gray-300 text-sm mb-4">
              Most sites have at least 3 compliance gaps. Find yours before a
              regulator does.
            </p>
            <Link
              href="/check"
              className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-8 rounded-lg transition"
            >
              Run Your Free GDPR Scan
            </Link>
          </div>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Understanding Your Compliance Score
            </h2>
            <p className="mb-4">
              Your score is calculated as a weighted sum of the 11 compliance
              checks. Each check has a different weight based on its regulatory
              importance. Here is what each grade means:
            </p>
            <div className="bg-gray-900/50 rounded-xl p-6">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-green-400 font-bold text-xl w-16 flex-shrink-0">
                    90-100
                  </span>
                  <div>
                    <span className="text-green-400 font-semibold">
                      Excellent
                    </span>
                    <p className="text-sm text-gray-400 mt-1">
                      Your privacy policy covers nearly all essential sections.
                      You are well-positioned for GDPR compliance. Minor
                      improvements may still be beneficial, but you are ahead of
                      the vast majority of websites.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-green-300 font-bold text-xl w-16 flex-shrink-0">
                    70-89
                  </span>
                  <div>
                    <span className="text-green-300 font-semibold">Good</span>
                    <p className="text-sm text-gray-400 mt-1">
                      Solid coverage with a few areas that could be improved.
                      You likely have the core elements in place but may be
                      missing CCPA-specific language, data retention details, or
                      explicit security disclosures.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-yellow-400 font-bold text-xl w-16 flex-shrink-0">
                    50-69
                  </span>
                  <div>
                    <span className="text-yellow-400 font-semibold">Fair</span>
                    <p className="text-sm text-gray-400 mt-1">
                      Missing several important sections. Your policy covers the
                      basics but has gaps in areas that regulators specifically
                      look for. This is the most common score range &mdash; and
                      the riskiest, because it gives a false sense of
                      compliance.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-orange-400 font-bold text-xl w-16 flex-shrink-0">
                    30-49
                  </span>
                  <div>
                    <span className="text-orange-400 font-semibold">Poor</span>
                    <p className="text-sm text-gray-400 mt-1">
                      Significant gaps in coverage. Your policy needs
                      substantial updates. You are missing multiple
                      GDPR-required disclosures and are at material risk of
                      regulatory action if a complaint is filed.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-red-400 font-bold text-xl w-16 flex-shrink-0">
                    0-29
                  </span>
                  <div>
                    <span className="text-red-400 font-semibold">
                      Critical
                    </span>
                    <p className="text-sm text-gray-400 mt-1">
                      Your privacy policy is missing most essential sections, or
                      no privacy policy was found at all. This is an immediate
                      compliance risk. Under GDPR, operating without an adequate
                      privacy policy can result in fines up to &euro;20 million.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Most Common GDPR Issues We Find
            </h2>
            <p className="mb-4">
              After scanning thousands of websites, these are the compliance
              gaps we see most frequently &mdash; and how to fix them:
            </p>
            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-white">
                  Missing Data Retention Policy
                </h4>
                <p className="text-sm text-gray-400">
                  Over 60% of websites we scan have no data retention clause.
                  GDPR Article 5(1)(e) requires that personal data is kept
                  &quot;no longer than is necessary.&quot; Your policy must
                  state specific retention periods or the criteria used to
                  determine them. Generic statements like &quot;we keep data as
                  long as needed&quot; are insufficient.
                </p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-white">
                  No Legal Basis for Processing
                </h4>
                <p className="text-sm text-gray-400">
                  GDPR Article 6 requires you to identify a lawful basis for
                  each processing activity: consent, contract, legal obligation,
                  vital interest, public task, or legitimate interest. Many
                  policies mention &quot;consent&quot; but fail to specify the
                  legal basis for analytics, marketing, or operational data
                  processing.
                </p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-white">
                  Incomplete User Rights Section
                </h4>
                <p className="text-sm text-gray-400">
                  GDPR grants eight specific rights: access, rectification,
                  erasure, restriction, portability, objection, automated
                  decision-making opt-out, and the right to withdraw consent.
                  Most policies mention only two or three. Each right must be
                  explained with a clear process for exercising it.
                </p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-white">
                  No Cookie Consent Mechanism
                </h4>
                <p className="text-sm text-gray-400">
                  Many websites set analytics and advertising cookies without
                  obtaining consent first. The ePrivacy Directive requires
                  prior consent for all non-essential cookies. A cookie banner
                  that only says &quot;we use cookies&quot; without a reject
                  option is not compliant.
                </p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-white">
                  Undisclosed Third-Party Data Sharing
                </h4>
                <p className="text-sm text-gray-400">
                  Google Analytics, Facebook Pixel, Stripe, Intercom &mdash;
                  every third-party service that receives user data must be
                  disclosed in your privacy policy. Many websites list
                  &quot;analytics partners&quot; without naming specific
                  providers, which does not meet the GDPR transparency
                  requirement.
                </p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-white">
                  Missing CCPA &quot;Do Not Sell&quot; Disclosure
                </h4>
                <p className="text-sm text-gray-400">
                  If you serve California residents, your policy must address
                  whether you &quot;sell&quot; personal information as defined by
                  the CCPA. Under the CPRA amendments, this also includes
                  &quot;sharing&quot; data for cross-context behavioral
                  advertising. A &quot;Do Not Sell or Share My Personal
                  Information&quot; link must be visible.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Why Use PolicyForge&apos;s GDPR Tool
            </h2>
            <p className="mb-6">
              There are several GDPR compliance tools on the market. Here is
              why PolicyForge stands out for quick, actionable compliance
              checks:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-800/50 rounded-lg p-5">
                <h4 className="font-semibold text-white mb-2">
                  100% Free, No Account Needed
                </h4>
                <p className="text-sm text-gray-400">
                  Most compliance tools require you to create an account, verify
                  your email, and sit through a sales pitch before showing any
                  results. PolicyForge gives you a full compliance report
                  instantly. No signup. No email. No paywall on scan results.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-5">
                <h4 className="font-semibold text-white mb-2">
                  Results in 60 Seconds
                </h4>
                <p className="text-sm text-gray-400">
                  Enter a URL, click scan, and get your report. Enterprise
                  compliance platforms can take days to generate an audit.
                  PolicyForge delivers actionable results while you wait.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-5">
                <h4 className="font-semibold text-white mb-2">
                  Actionable Recommendations
                </h4>
                <p className="text-sm text-gray-400">
                  Every failed check comes with a specific tip explaining what
                  is missing and what to add. You don&apos;t just get a score
                  &mdash; you get a roadmap to compliance.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-5">
                <h4 className="font-semibold text-white mb-2">
                  Scan Any Website
                </h4>
                <p className="text-sm text-gray-400">
                  Audit your own site, a competitor, a client, or a vendor. The
                  scanner works on any publicly accessible website. Agencies use
                  PolicyForge to audit client portfolios before onboarding.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              PolicyForge vs Other GDPR Compliance Tools
            </h2>
            <p className="mb-4">
              How does PolicyForge&apos;s free compliance checker compare to
              enterprise compliance platforms?
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-3 px-4 text-white font-semibold">
                      Feature
                    </th>
                    <th className="text-center py-3 px-4 text-blue-400 font-semibold">
                      PolicyForge
                    </th>
                    <th className="text-center py-3 px-4 text-gray-400 font-semibold">
                      Cookiebot
                    </th>
                    <th className="text-center py-3 px-4 text-gray-400 font-semibold">
                      OneTrust
                    </th>
                    <th className="text-center py-3 px-4 text-gray-400 font-semibold">
                      TrustArc
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4">Price</td>
                    <td className="py-3 px-4 text-center text-green-400 font-semibold">
                      Free
                    </td>
                    <td className="py-3 px-4 text-center">$14/mo+</td>
                    <td className="py-3 px-4 text-center">Custom ($$$$)</td>
                    <td className="py-3 px-4 text-center">Custom ($$$$)</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4">Account Required</td>
                    <td className="py-3 px-4 text-center text-green-400">No</td>
                    <td className="py-3 px-4 text-center text-red-400">Yes</td>
                    <td className="py-3 px-4 text-center text-red-400">Yes</td>
                    <td className="py-3 px-4 text-center text-red-400">Yes</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4">Instant Results</td>
                    <td className="py-3 px-4 text-center text-green-400">
                      &#x2713;
                    </td>
                    <td className="py-3 px-4 text-center text-yellow-400">
                      Minutes
                    </td>
                    <td className="py-3 px-4 text-center text-red-400">
                      Days
                    </td>
                    <td className="py-3 px-4 text-center text-red-400">
                      Days
                    </td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4">Privacy Policy Analysis</td>
                    <td className="py-3 px-4 text-center text-green-400">
                      11 checks
                    </td>
                    <td className="py-3 px-4 text-center text-yellow-400">
                      Cookie focus
                    </td>
                    <td className="py-3 px-4 text-center text-green-400">
                      Comprehensive
                    </td>
                    <td className="py-3 px-4 text-center text-green-400">
                      Comprehensive
                    </td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4">Cookie Scanning</td>
                    <td className="py-3 px-4 text-center text-yellow-400">
                      Policy check
                    </td>
                    <td className="py-3 px-4 text-center text-green-400">
                      Deep scan
                    </td>
                    <td className="py-3 px-4 text-center text-green-400">
                      Deep scan
                    </td>
                    <td className="py-3 px-4 text-center text-green-400">
                      Deep scan
                    </td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4">Policy Generator</td>
                    <td className="py-3 px-4 text-center text-green-400">
                      From $4.99
                    </td>
                    <td className="py-3 px-4 text-center text-red-400">No</td>
                    <td className="py-3 px-4 text-center text-green-400">
                      Included
                    </td>
                    <td className="py-3 px-4 text-center text-green-400">
                      Included
                    </td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4">Scan Any Website</td>
                    <td className="py-3 px-4 text-center text-green-400">
                      Unlimited
                    </td>
                    <td className="py-3 px-4 text-center text-yellow-400">
                      Own site only
                    </td>
                    <td className="py-3 px-4 text-center text-yellow-400">
                      Own site only
                    </td>
                    <td className="py-3 px-4 text-center text-yellow-400">
                      Own site only
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Best For</td>
                    <td className="py-3 px-4 text-center text-blue-400 text-xs">
                      Quick audits &amp; SMBs
                    </td>
                    <td className="py-3 px-4 text-center text-gray-400 text-xs">
                      Cookie compliance
                    </td>
                    <td className="py-3 px-4 text-center text-gray-400 text-xs">
                      Enterprise GRC
                    </td>
                    <td className="py-3 px-4 text-center text-gray-400 text-xs">
                      Enterprise GRC
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-3">
              PolicyForge is purpose-built for small businesses, startups, and
              agencies that need fast, free compliance checks without enterprise
              sales cycles. For organizations that need ongoing consent
              management, cookie scanning, or data mapping, enterprise platforms
              like OneTrust may be more appropriate.
            </p>
          </section>

          <section className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-800/30 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-4 text-center">
              After Your Scan: Generate a Compliant Privacy Policy
            </h2>
            <p className="text-gray-300 text-center mb-4">
              Found compliance gaps? PolicyForge doesn&apos;t just identify
              problems &mdash; it solves them. Generate a privacy policy that
              addresses every issue found in your scan. Covers GDPR, CCPA, and
              international privacy laws. Done in under 2 minutes.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6 text-sm">
              <div className="bg-white/5 rounded-lg p-4">
                <p className="text-white font-semibold mb-1">
                  Starter &mdash; $4.99
                </p>
                <p className="text-gray-400">
                  Standard privacy policy covering data collection, cookies,
                  user rights, and contact information. Suitable for blogs,
                  personal sites, and small businesses.
                </p>
              </div>
              <div className="bg-white/5 rounded-lg p-4 border border-blue-800/30">
                <p className="text-blue-400 font-semibold mb-1">
                  Pro &mdash; $12.99
                </p>
                <p className="text-gray-400">
                  Comprehensive policy with GDPR Article-by-Article compliance,
                  CCPA/CPRA provisions, international data transfers, DPO
                  section, terms of service, and cookie policy. Best for SaaS,
                  e-commerce, and apps.
                </p>
              </div>
            </div>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/"
                className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-8 rounded-lg transition"
              >
                Generate Your Privacy Policy
              </Link>
              <Link
                href="/check"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-lg transition"
              >
                Scan Your Website First
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Who Needs a GDPR Compliance Check?
            </h2>
            <p className="mb-4">
              If your website is accessible to anyone in the European Union,
              GDPR applies to you &mdash; regardless of where your business is
              based. This includes:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-1">
                  E-Commerce Stores
                </h4>
                <p className="text-sm text-gray-400">
                  Shopify, WooCommerce, or custom stores collecting payment
                  info, shipping addresses, and browsing data from EU customers.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-1">
                  SaaS Applications
                </h4>
                <p className="text-sm text-gray-400">
                  Any software that stores user data, tracks usage, or
                  integrates with third-party services needs GDPR-compliant
                  disclosures.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-1">
                  Blogs &amp; Content Sites
                </h4>
                <p className="text-sm text-gray-400">
                  Even if you &quot;just have a blog,&quot; Google Analytics,
                  comment forms, and email subscriptions all trigger GDPR
                  obligations.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-1">
                  Mobile Apps
                </h4>
                <p className="text-sm text-gray-400">
                  Apps on the App Store or Google Play collecting device data,
                  location, or user accounts must comply with GDPR if accessible
                  to EU users.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-1">
                  Agencies &amp; Freelancers
                </h4>
                <p className="text-sm text-gray-400">
                  Web agencies can use PolicyForge to audit client websites
                  before handover, adding compliance checking as a value-added
                  service.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-1">
                  Non-Profits &amp; Schools
                </h4>
                <p className="text-sm text-gray-400">
                  GDPR does not exempt non-profits or educational institutions.
                  If you collect donor data, student data, or volunteer
                  information, you need compliance.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              GDPR Fines: The Cost of Non-Compliance
            </h2>
            <p className="mb-4">
              GDPR enforcement is real, active, and escalating. Here are recent
              examples that show regulators are not bluffing:
            </p>
            <div className="bg-gray-900/50 rounded-xl p-6">
              <div className="space-y-4 text-sm">
                <div className="flex gap-4">
                  <span className="text-red-400 font-semibold w-36 flex-shrink-0">
                    Meta (2023)
                  </span>
                  <span>
                    &euro;1.2 billion fine for transferring EU user data to the
                    US without adequate safeguards. The largest GDPR fine to
                    date.
                  </span>
                </div>
                <div className="flex gap-4">
                  <span className="text-red-400 font-semibold w-36 flex-shrink-0">
                    Amazon (2021)
                  </span>
                  <span>
                    &euro;746 million fine from Luxembourg&apos;s CNPD for
                    processing personal data in violation of GDPR&apos;s
                    transparency and consent requirements.
                  </span>
                </div>
                <div className="flex gap-4">
                  <span className="text-red-400 font-semibold w-36 flex-shrink-0">
                    TikTok (2023)
                  </span>
                  <span>
                    &euro;345 million fine from Ireland&apos;s DPC for children&apos;s
                    data processing violations, including default public
                    accounts for minors.
                  </span>
                </div>
                <div className="flex gap-4">
                  <span className="text-red-400 font-semibold w-36 flex-shrink-0">
                    Clearview AI (2022)
                  </span>
                  <span>
                    &euro;20 million fine from France&apos;s CNIL for collecting
                    biometric data without consent. Fines also issued by Italy,
                    Greece, and the UK.
                  </span>
                </div>
                <div className="flex gap-4">
                  <span className="text-red-400 font-semibold w-36 flex-shrink-0">
                    Small Businesses
                  </span>
                  <span>
                    Fines are not just for tech giants. A German bakery was fined
                    &euro;20,000 for operating security cameras without proper
                    GDPR notices. A Belgian website was fined &euro;50,000 for a
                    non-compliant cookie banner.
                  </span>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              A proper privacy policy will not prevent all regulatory risk, but
              the absence of one is almost always cited as an aggravating factor
              in enforcement decisions. The cost of a privacy policy is
              negligible compared to even the smallest GDPR fine.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Is the PolicyForge GDPR compliance tool really free?
                </h3>
                <p>
                  Yes, the compliance scanner is 100% free with no signup
                  required. You can scan unlimited websites. If you need to
                  generate a compliant privacy policy based on your results,
                  PolicyForge offers paid plans starting at $4.99.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  How accurate is the GDPR compliance scan?
                </h3>
                <p>
                  The scanner checks 11 critical compliance areas including
                  data collection disclosure, GDPR-specific provisions, CCPA
                  compliance, cookie policy, user rights, and more. It analyzes
                  the actual text of your privacy policy against regulatory
                  requirements. While no automated tool replaces legal advice,
                  PolicyForge identifies the most common compliance gaps that
                  lead to regulatory action.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  What does the GDPR compliance tool check?
                </h3>
                <p>
                  The tool checks 11 areas: data collection disclosure, purpose
                  of data use, cookie policy, third-party sharing, user rights,
                  GDPR compliance provisions, CCPA compliance, data retention
                  policies, security measures, contact information, and policy
                  update procedures. Each area is weighted by regulatory
                  importance.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Do I need to create an account to use the tool?
                </h3>
                <p>
                  No. Just enter your website URL and click scan. Results are
                  delivered instantly with no account, no email address, and no
                  credit card required.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  What should I do if my website scores poorly?
                </h3>
                <p>
                  Each check in the scan results includes a specific
                  recommendation for improvement. The most common fixes include
                  adding a data collection disclosure, including GDPR-specific
                  language about legal basis and user rights, and adding a cookie
                  consent mechanism.{" "}
                  <Link
                    href="/"
                    className="text-blue-400 hover:underline"
                  >
                    PolicyForge can generate a compliant privacy policy
                  </Link>{" "}
                  that addresses all identified gaps.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Can I use this tool for multiple websites?
                </h3>
                <p>
                  Yes. There is no limit on the number of websites you can scan.
                  Agencies and consultants regularly use PolicyForge to audit
                  multiple client websites.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Related GDPR Resources
            </h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <Link
                href="/gdpr-privacy-policy-generator"
                className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-700/50 transition block"
              >
                <span className="text-blue-400 font-semibold">
                  GDPR Privacy Policy Generator
                </span>
                <p className="text-gray-400 mt-1">
                  Generate a GDPR-compliant privacy policy for your website or
                  app in minutes.
                </p>
              </Link>
              <Link
                href="/ccpa-privacy-policy-generator"
                className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-700/50 transition block"
              >
                <span className="text-blue-400 font-semibold">
                  CCPA Privacy Policy Generator
                </span>
                <p className="text-gray-400 mt-1">
                  Create a California-compliant privacy policy with CPRA
                  amendments included.
                </p>
              </Link>
              <Link
                href="/privacy-policy-for-ecommerce"
                className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-700/50 transition block"
              >
                <span className="text-blue-400 font-semibold">
                  Privacy Policy for E-Commerce
                </span>
                <p className="text-gray-400 mt-1">
                  Specialized policies for online stores handling payment and
                  shipping data.
                </p>
              </Link>
              <Link
                href="/cookie-policy-generator"
                className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-700/50 transition block"
              >
                <span className="text-blue-400 font-semibold">
                  Cookie Policy Generator
                </span>
                <p className="text-gray-400 mt-1">
                  Generate a compliant cookie policy with ePrivacy Directive
                  coverage.
                </p>
              </Link>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-500">
          <p>
            PolicyForge &mdash; Free GDPR compliance checking for every website.
            <br />
            <Link href="/check" className="text-blue-400 hover:underline">
              Check your compliance
            </Link>
            {" | "}
            <Link href="/" className="text-blue-400 hover:underline">
              Generate a privacy policy
            </Link>
            {" | "}
            <Link href="/tos" className="text-blue-400 hover:underline">
              Generate terms of service
            </Link>
            {" | "}
            <Link href="/leaderboard" className="text-blue-400 hover:underline">
              Compliance leaderboard
            </Link>
          </p>
          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-sm text-gray-500 mb-2">Related guides:</p>
            <div className="flex flex-wrap gap-3 text-sm">
              <Link href="/best-free-privacy-policy-generator" className="text-blue-400 hover:underline">Best Free Generators (2026)</Link>
              <Link href="/termly-alternative" className="text-blue-400 hover:underline">Termly Alternative</Link>
              <Link href="/gdpr-compliance-checklist" className="text-blue-400 hover:underline">GDPR Compliance Checklist</Link>
              <Link href="/privacy-policy-for-healthcare" className="text-blue-400 hover:underline">Privacy Policy for Healthcare</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
