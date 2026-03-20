import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Website Privacy Policy Checker & Scanner | PolicyForge",
  description:
    "Scan any website to instantly check if it has a privacy policy and analyze GDPR, CCPA compliance. Enter a URL, get a compliance score in seconds. Free, no signup.",
  keywords:
    "website privacy checker, privacy policy scanner, check website privacy policy, scan privacy policy, GDPR checker, CCPA checker, website compliance check, privacy audit tool, compliance scanner, privacy policy audit, website compliance score, GDPR compliance check, CCPA compliance check, privacy policy analysis",
};

const faqItems = [
  {
    question: "Is this website privacy checker free?",
    answer:
      "Yes, completely free with unlimited scans. No signup or credit card required. Enter any URL and get an 11-point compliance analysis in seconds.",
  },
  {
    question: "How does the URL scanner work?",
    answer:
      "We fetch the target website, automatically locate the privacy policy page (via links or common paths like /privacy), extract the text, and analyze it against 11 compliance checkpoints covering GDPR, CCPA, cookie disclosure, data retention, and more.",
  },
  {
    question: "Can I scan any website?",
    answer:
      'You can scan any publicly accessible website. Some sites may block automated access, in which case you can use the "Paste Text" mode instead to manually paste your privacy policy text for analysis.',
  },
  {
    question: "What if my site doesn't have a privacy policy?",
    answer:
      "If no privacy policy is found, that's a significant compliance risk. Most privacy regulations require one if you collect any user data at all. Use PolicyForge to generate a free privacy policy in minutes.",
  },
  {
    question: "Is this legal advice?",
    answer:
      "No. This tool provides informational guidance only. While our scanner checks for common compliance requirements, it cannot replace professional legal counsel. For jurisdiction-specific compliance, consult a qualified attorney.",
  },
  {
    question: "What privacy regulations does this check cover?",
    answer:
      "Our scanner checks for compliance indicators across GDPR (EU General Data Protection Regulation), CCPA/CPRA (California Consumer Privacy Act), cookie consent requirements, data retention disclosures, third-party sharing transparency, user rights documentation, and security practice disclosures. The 11-point analysis covers the most critical areas across all major privacy frameworks.",
  },
  {
    question: "How often should I scan my privacy policy?",
    answer:
      "We recommend scanning at least quarterly and after any significant change to your website, data collection practices, or third-party services. If you add a new analytics tool, payment processor, advertising network, or marketing platform, scan immediately to ensure your policy still covers all disclosures. Regulations also evolve, so periodic checks help you stay ahead of new requirements.",
  },
  {
    question: "Can I check my competitors' compliance?",
    answer:
      "Yes. You can scan any publicly accessible website, including competitors. This is useful for benchmarking your compliance posture against others in your industry, identifying best practices in privacy policy writing, and discovering disclosures you may have overlooked. Competitive compliance analysis is a legitimate and common practice.",
  },
  {
    question: "What score should I aim for?",
    answer:
      "A perfect score of 11/11 means your privacy policy addresses all major compliance checkpoints. Most websites score between 4 and 7. A score below 5 indicates significant gaps that could expose you to regulatory action. Aim for at least 9/11 to demonstrate reasonable compliance, and prioritize the specific items flagged in your scan results.",
  },
  {
    question: "Can I automate compliance checking in CI/CD?",
    answer:
      "While our web scanner is designed for manual use, you can integrate compliance checking into your workflow by scanning your staging or preview URL before each deployment. This ensures your privacy policy stays compliant as your site evolves. The scan API at /api/scan accepts a URL parameter and returns structured results that could be integrated into automated pipelines.",
  },
];

export default function WebsitePrivacyCheckerPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#ededed]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <header className="border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">P</div>
            <span className="text-white font-semibold text-lg">PolicyForge</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link href="/check" className="px-4 py-2 bg-white text-black text-sm font-medium rounded-lg hover:bg-gray-100 transition-colors">
              Scan a Website
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Free Website Privacy Policy Checker
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Enter any website URL to instantly scan and analyze its privacy policy for GDPR, CCPA, and other compliance requirements. No signup needed.
          </p>
          <Link
            href="/check"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity text-lg"
          >
            Scan a Website Now
          </Link>
        </div>

        <div className="space-y-12">
          {/* How It Works */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-white/5 rounded-xl">
                <div className="text-3xl mb-3">1</div>
                <h3 className="font-semibold text-white mb-2">Enter a URL</h3>
                <p className="text-sm text-gray-400">Type or paste any website address. Our scanner automatically finds the privacy policy page.</p>
              </div>
              <div className="p-6 bg-white/5 rounded-xl">
                <div className="text-3xl mb-3">2</div>
                <h3 className="font-semibold text-white mb-2">Instant Analysis</h3>
                <p className="text-sm text-gray-400">We check for 11 essential compliance sections including GDPR, CCPA, data retention, and security disclosures.</p>
              </div>
              <div className="p-6 bg-white/5 rounded-xl">
                <div className="text-3xl mb-3">3</div>
                <h3 className="font-semibold text-white mb-2">Get Your Score</h3>
                <p className="text-sm text-gray-400">Receive a detailed compliance score with specific recommendations. Share the results or generate a better policy.</p>
              </div>
            </div>
          </section>

          {/* What We Check For */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">What We Check For</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { name: "Data Collection Disclosure", desc: "Does the policy explain what data is collected?" },
                { name: "Purpose of Data Use", desc: "Is the purpose of data collection clearly stated?" },
                { name: "Cookie Policy", desc: "Are cookies and tracking technologies disclosed?" },
                { name: "Third-Party Sharing", desc: "Is data sharing with third parties explained?" },
                { name: "User Rights", desc: "Are user rights clearly communicated?" },
                { name: "GDPR Compliance", desc: "Are GDPR-specific requirements addressed?" },
                { name: "CCPA Compliance", desc: "Are California privacy rights included?" },
                { name: "Data Retention", desc: "Is the data retention period specified?" },
                { name: "Security Measures", desc: "Are security practices described?" },
                { name: "Contact Information", desc: "Is there a way to reach the privacy team?" },
                { name: "Policy Updates", desc: "Is the update notification process explained?" },
              ].map((item) => (
                <div key={item.name} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
                  <span className="text-blue-400 mt-0.5">&#10003;</span>
                  <div>
                    <p className="text-sm font-medium text-white">{item.name}</p>
                    <p className="text-xs text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Why Check Your Privacy Policy */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Why Check Your Website&apos;s Privacy Policy?</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Privacy regulations like GDPR and CCPA require websites to clearly disclose how they handle user data. Non-compliance can result in fines up to 20 million EUR (GDPR) or $7,500 per violation (CCPA).
              </p>
              <p>
                Our free scanner helps you identify gaps in your privacy policy before regulators do. Whether you&apos;re a small business owner, developer, or compliance officer, regular privacy audits are essential.
              </p>
              <p>
                <strong className="text-white">Common issues we find:</strong> missing cookie disclosures, no data retention period specified, incomplete user rights sections, and missing GDPR/CCPA-specific clauses.
              </p>
            </div>
          </section>

          {/* Compliance Risk Statistics */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Privacy Compliance Risk: The Numbers</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Privacy enforcement is not theoretical. Regulatory authorities worldwide are actively issuing fines, and the financial exposure for non-compliant websites continues to grow each year. Here is what the data shows.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                <p className="text-3xl font-bold text-blue-400 mb-2">&euro;4.3B+</p>
                <p className="text-sm font-medium text-white mb-1">Total GDPR Fines Since 2018</p>
                <p className="text-xs text-gray-400">European Data Protection Authorities have issued over 4.3 billion euros in cumulative fines since the GDPR took effect. The average fine exceeds &euro;1.5 million, and enforcement volume increases year over year.</p>
              </div>
              <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                <p className="text-3xl font-bold text-cyan-400 mb-2">$7,500</p>
                <p className="text-sm font-medium text-white mb-1">CCPA Per-Violation Penalty</p>
                <p className="text-xs text-gray-400">Under the California Consumer Privacy Act, each intentional violation carries a fine of up to $7,500. Unintentional violations are $2,500 each. Class action lawsuits can add $100&ndash;$750 per consumer per incident for data breaches.</p>
              </div>
              <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                <p className="text-3xl font-bold text-blue-400 mb-2">60%+</p>
                <p className="text-sm font-medium text-white mb-1">Websites with Incomplete Policies</p>
                <p className="text-xs text-gray-400">Studies consistently show that over 60% of websites have privacy policies that fail to cover all required disclosures. Common gaps include missing cookie consent, absent data retention periods, and incomplete user rights sections.</p>
              </div>
              <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                <p className="text-3xl font-bold text-cyan-400 mb-2">Rejected</p>
                <p className="text-sm font-medium text-white mb-1">App Store Compliance Requirements</p>
                <p className="text-xs text-gray-400">Both Apple&apos;s App Store and Google Play require a valid, accessible privacy policy for all apps that collect user data. Apps without compliant privacy policies are rejected during review or removed from the store entirely.</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              These are not edge cases. Whether you are a solo developer with a side project, a small e-commerce store, or a growing SaaS company, the enforcement landscape applies to you. A free scan takes less than 30 seconds and can reveal exactly where your exposure lies.
            </p>
          </section>

          {/* Who Needs a Privacy Policy Check */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Who Needs a Privacy Policy Check?</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              If your website or app collects any form of user data, you almost certainly need a privacy policy, and you should regularly verify that it meets current regulatory requirements. The following types of businesses and websites are especially exposed.
            </p>
            <div className="space-y-4">
              <div className="p-5 bg-white/5 rounded-xl">
                <h3 className="font-semibold text-white mb-2">E-commerce Sites Collecting Payment and Address Data</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Online stores process some of the most sensitive personal data: names, billing addresses, shipping addresses, email addresses, phone numbers, and payment card information. PCI DSS compliance handles payment security, but your privacy policy must separately disclose how this personal data is collected, stored, shared with fulfillment partners, and retained. If you sell internationally, GDPR and CCPA both apply.
                </p>
              </div>
              <div className="p-5 bg-white/5 rounded-xl">
                <h3 className="font-semibold text-white mb-2">SaaS Platforms Processing User Data</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Software-as-a-service companies often act as both data controllers (for their own user accounts) and data processors (for the data their customers upload). Your privacy policy must clearly distinguish between these roles and explain your data processing agreements, sub-processor list, data location, and breach notification procedures.
                </p>
              </div>
              <div className="p-5 bg-white/5 rounded-xl">
                <h3 className="font-semibold text-white mb-2">Mobile Apps Accessing Device Data</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Mobile applications often access device identifiers, location data, camera, microphone, contacts, and other sensitive permissions. Both Apple and Google require a privacy policy link in your app store listing. Your policy must disclose every permission requested and how the data obtained through those permissions is used, stored, and shared.
                </p>
              </div>
              <div className="p-5 bg-white/5 rounded-xl">
                <h3 className="font-semibold text-white mb-2">Blogs and Content Sites Using Analytics, Cookies, or Ads</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Even a simple blog with Google Analytics, a comment system, or display advertising collects personal data through cookies and tracking pixels. The ePrivacy Directive (EU cookie law) and GDPR require disclosure of all cookies and tracking technologies, their purposes, and a mechanism for users to consent or opt out.
                </p>
              </div>
              <div className="p-5 bg-white/5 rounded-xl">
                <h3 className="font-semibold text-white mb-2">WordPress Sites with Contact Forms</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  WordPress powers over 40% of the web, and most WordPress sites include at least a contact form that collects names, email addresses, and messages. Many also use plugins that set cookies, track user behavior, or integrate with third-party services. Each of these must be disclosed in your privacy policy, yet most WordPress site owners overlook this.
                </p>
              </div>
              <div className="p-5 bg-white/5 rounded-xl">
                <h3 className="font-semibold text-white mb-2">Shopify Stores with Customer Data</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Shopify handles payment processing, but you as the store owner remain the data controller responsible for your privacy policy. You must disclose how Shopify processes data on your behalf, what marketing tools you use (Klaviyo, Mailchimp, Facebook Pixel), and how customers can exercise their data rights. Shopify provides a default policy template, but it is generic and rarely sufficient for GDPR or CCPA compliance.
                </p>
              </div>
              <div className="p-5 bg-white/5 rounded-xl">
                <h3 className="font-semibold text-white mb-2">Any Site with EU or California Visitors</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Both the GDPR and CCPA have extraterritorial scope. If your website is accessible from the EU or California (which, for any public website, it is), you are expected to comply regardless of where your business is incorporated. This means virtually every website on the internet needs a privacy policy that addresses these regulations. Use our{" "}
                  <Link href="/check" className="text-blue-400 hover:text-blue-300">free compliance scanner</Link> to find out if yours measures up.
                </p>
              </div>
            </div>
          </section>

          {/* Common Compliance Mistakes */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7 Common Privacy Policy Compliance Mistakes</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              After scanning thousands of privacy policies, certain mistakes appear repeatedly. These are the most common gaps that leave websites exposed to regulatory action, and the ones our scanner is specifically designed to detect.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-5 bg-white/5 rounded-xl">
                <span className="text-red-400 font-bold text-lg mt-0.5 flex-shrink-0">1</span>
                <div>
                  <h3 className="font-semibold text-white mb-1">Using a Generic Template Without Customizing It</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Copying a privacy policy template from the internet and pasting it onto your site is one of the most common mistakes. The GDPR explicitly requires that your policy describe your actual data processing activities, not generic boilerplate. If your policy mentions data categories you do not collect, or fails to mention ones you do, it is non-compliant. Every privacy policy must be tailored to your specific business.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-white/5 rounded-xl">
                <span className="text-red-400 font-bold text-lg mt-0.5 flex-shrink-0">2</span>
                <div>
                  <h3 className="font-semibold text-white mb-1">Not Disclosing All Third-Party Services</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Most websites use multiple third-party services: Google Analytics, Facebook Pixel, Stripe, Mailchimp, Intercom, Cloudflare, Hotjar, and dozens more. Each of these services processes user data on your behalf, and your privacy policy must name them (or at least their categories) and explain what data they receive, why, and where they are located. Omitting even one is a transparency violation.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-white/5 rounded-xl">
                <span className="text-red-400 font-bold text-lg mt-0.5 flex-shrink-0">3</span>
                <div>
                  <h3 className="font-semibold text-white mb-1">Missing Cookie Consent Mechanisms</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    The EU ePrivacy Directive requires prior consent before setting non-essential cookies. Simply disclosing cookies in your privacy policy is not enough; you must provide an active consent mechanism (a cookie banner) that allows users to accept or reject different categories of cookies before they are set. Many websites set analytics and advertising cookies immediately on page load, which violates the regulation.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-white/5 rounded-xl">
                <span className="text-red-400 font-bold text-lg mt-0.5 flex-shrink-0">4</span>
                <div>
                  <h3 className="font-semibold text-white mb-1">Not Specifying Data Retention Periods</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Both GDPR Article 13(2)(a) and CCPA require you to state how long you retain personal data. Vague language like &quot;we retain data as long as necessary&quot; is insufficient. You must specify concrete retention periods for each category of data, or at minimum the criteria used to determine the retention period. Many privacy policies skip this entirely.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-white/5 rounded-xl">
                <span className="text-red-400 font-bold text-lg mt-0.5 flex-shrink-0">5</span>
                <div>
                  <h3 className="font-semibold text-white mb-1">Failing to List User Rights</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Under GDPR, you must inform users of their rights to access, rectify, erase, restrict processing, port their data, and object to processing. Under CCPA, you must disclose the right to know, delete, opt-out of sale, and non-discrimination. Your policy must explain each right and provide a clear method for users to exercise it (email address, web form, or other mechanism).
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-white/5 rounded-xl">
                <span className="text-red-400 font-bold text-lg mt-0.5 flex-shrink-0">6</span>
                <div>
                  <h3 className="font-semibold text-white mb-1">No Data Protection Officer Contact Information</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    If your organization is required to appoint a Data Protection Officer (DPO) under GDPR Article 37, their contact details must appear in your privacy policy. Even if a DPO is not required, you must provide a contact method for privacy-related inquiries. Many policies either omit this entirely or bury a generic &quot;info@&quot; email that does not route to anyone responsible for data protection.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-white/5 rounded-xl">
                <span className="text-red-400 font-bold text-lg mt-0.5 flex-shrink-0">7</span>
                <div>
                  <h3 className="font-semibold text-white mb-1">Outdated Policies That Do Not Reflect Current Practices</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    A privacy policy that was accurate when written but has not been updated since is non-compliant if your practices have changed. Adding new analytics tools, switching payment processors, expanding to new markets, or changing data storage locations all require policy updates. Regulators view outdated policies as evidence of inadequate data governance. Display a &quot;last updated&quot; date and review your policy at least quarterly.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* PolicyForge vs Manual Compliance Audit */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">PolicyForge vs. Manual Compliance Audit</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Traditional compliance audits are thorough but expensive and slow. PolicyForge provides an instant first-line scan that catches the most common issues, so you know where you stand before investing in professional services.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-white/10 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-white/5">
                    <th className="text-left p-4 text-white font-semibold border-b border-white/10">Method</th>
                    <th className="text-left p-4 text-white font-semibold border-b border-white/10">Cost</th>
                    <th className="text-left p-4 text-white font-semibold border-b border-white/10">Turnaround</th>
                    <th className="text-left p-4 text-white font-semibold border-b border-white/10">Coverage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="p-4 text-gray-300">Compliance Consultant</td>
                    <td className="p-4 text-gray-400">$150&ndash;$500/hour</td>
                    <td className="p-4 text-gray-400">Days to weeks</td>
                    <td className="p-4 text-gray-400">Comprehensive, jurisdiction-specific legal analysis</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-4 text-gray-300">Law Firm Privacy Audit</td>
                    <td className="p-4 text-gray-400">$500&ndash;$5,000 per audit</td>
                    <td className="p-4 text-gray-400">1&ndash;4 weeks</td>
                    <td className="p-4 text-gray-400">Full legal review with written opinion</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-4 text-gray-300">Enterprise Compliance SaaS</td>
                    <td className="p-4 text-gray-400">$120&ndash;$500/year</td>
                    <td className="p-4 text-gray-400">Varies</td>
                    <td className="p-4 text-gray-400">Ongoing monitoring, team dashboards</td>
                  </tr>
                  <tr className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10">
                    <td className="p-4 text-white font-semibold">PolicyForge Scanner</td>
                    <td className="p-4 text-blue-400 font-semibold">Free</td>
                    <td className="p-4 text-blue-400 font-semibold">Instant (seconds)</td>
                    <td className="p-4 text-gray-300">11-point compliance check, GDPR + CCPA</td>
                  </tr>
                  <tr className="bg-gradient-to-r from-blue-500/5 to-cyan-500/5">
                    <td className="p-4 text-white font-semibold">PolicyForge Generator</td>
                    <td className="p-4 text-blue-400 font-semibold">$4.99&ndash;$12.99 (one-time)</td>
                    <td className="p-4 text-blue-400 font-semibold">Under 2 minutes</td>
                    <td className="p-4 text-gray-300">Tailored privacy policy covering all major frameworks</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-400 leading-relaxed mt-4">
              PolicyForge does not replace legal counsel for complex regulatory scenarios. But for the vast majority of websites, an instant 11-point scan combined with a tailored generated policy provides the coverage you need at a fraction of the cost. Use the free scanner to identify issues, then{" "}
              <Link href="/" className="text-blue-400 hover:text-blue-300">generate a compliant policy</Link> to fix them.
            </p>
          </section>

          {/* Embed a Compliance Badge */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Embed a Compliance Badge on Your Website</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              After scanning your website, you can embed a compliance badge that displays your privacy score. The badge is a lightweight SVG served from our API, and it links back to your full scan results. It demonstrates to your visitors that you take privacy seriously and have actively verified your compliance.
            </p>
            <div className="p-6 bg-white/5 rounded-xl border border-white/10 mb-6">
              <h3 className="font-semibold text-white mb-3">How the Badge Works</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex gap-3">
                  <span className="text-blue-400 mt-0.5">&#10003;</span>
                  <span>Scan your website at <Link href="/check" className="text-blue-400 hover:text-blue-300">/check</Link> to get your compliance score and grade</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 mt-0.5">&#10003;</span>
                  <span>Copy the embed code from your scan results page</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 mt-0.5">&#10003;</span>
                  <span>Paste the HTML or Markdown snippet into your website footer or privacy page</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 mt-0.5">&#10003;</span>
                  <span>The badge updates automatically when you re-scan</span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-white/5 rounded-xl border border-white/10 mb-4">
              <h3 className="font-semibold text-white mb-3">HTML Embed Code</h3>
              <pre className="text-xs text-gray-300 overflow-x-auto bg-black/30 p-4 rounded-lg">
{`<a href="https://policyforge.autonomous-claude.com/check">
  <img
    src="https://policyforge.autonomous-claude.com/api/badge?score=9&grade=A"
    alt="Privacy Compliance Badge"
    width="200"
    height="40"
  />
</a>`}
              </pre>
            </div>
            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
              <h3 className="font-semibold text-white mb-3">Markdown Embed Code</h3>
              <pre className="text-xs text-gray-300 overflow-x-auto bg-black/30 p-4 rounded-lg">
{`[![Privacy Compliance](https://policyforge.autonomous-claude.com/api/badge?score=9&grade=A)](https://policyforge.autonomous-claude.com/check)`}
              </pre>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              Replace the <code className="text-blue-400">score</code> and <code className="text-blue-400">grade</code> values with your actual scan results. The badge API accepts scores from 0 to 11 and grades A through F.
            </p>
            <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl">
              <p className="text-sm text-gray-300">
                <strong className="text-white">Why embed a badge?</strong> It builds trust with your visitors by showing you proactively verify your privacy compliance. For developers and open-source projects, adding the badge to your README creates a visible commitment to user privacy. The badge also generates organic backlinks to PolicyForge, helping both your SEO and ours.
              </p>
            </div>
          </section>

          {/* Frequently Asked Questions */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <div key={i} className={i < faqItems.length - 1 ? "border-b border-white/10 pb-4" : ""}>
                  <h3 className="font-semibold text-white">{item.question}</h3>
                  <p className="text-sm text-gray-400 mt-1 leading-relaxed">
                    {item.question === "What if my site doesn't have a privacy policy?" ? (
                      <>
                        If no privacy policy is found, that&apos;s a significant compliance risk. Most privacy regulations require one if you collect any user data at all. Use PolicyForge to{" "}
                        <Link href="/" className="text-blue-400 hover:text-blue-300">generate a free privacy policy</Link> in minutes.
                      </>
                    ) : (
                      item.answer
                    )}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Privacy Compliance Tools */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Related Privacy Compliance Tools</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Privacy compliance involves more than just a privacy policy. PolicyForge provides a suite of free tools to help you cover every requirement.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/tos" className="p-5 bg-white/5 rounded-xl border border-white/10 hover:border-blue-500/30 transition-colors group">
                <h3 className="font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">Terms of Service Generator</h3>
                <p className="text-sm text-gray-400">Generate legally-informed terms of service for your website or app. Covers liability limitations, user conduct, intellectual property, and termination clauses.</p>
              </Link>
              <Link href="/cookie-policy-generator" className="p-5 bg-white/5 rounded-xl border border-white/10 hover:border-blue-500/30 transition-colors group">
                <h3 className="font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">Cookie Policy Generator</h3>
                <p className="text-sm text-gray-400">Create a cookie policy that discloses all cookies and tracking technologies on your site. Required by the EU ePrivacy Directive alongside your privacy policy.</p>
              </Link>
              <Link href="/gdpr-privacy-policy-generator" className="p-5 bg-white/5 rounded-xl border border-white/10 hover:border-blue-500/30 transition-colors group">
                <h3 className="font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">GDPR Privacy Policy Generator</h3>
                <p className="text-sm text-gray-400">Generate a privacy policy specifically tailored for GDPR compliance, covering all 6 lawful bases, data subject rights, DPO requirements, and cross-border transfer disclosures.</p>
              </Link>
              <Link href="/ccpa-privacy-policy-generator" className="p-5 bg-white/5 rounded-xl border border-white/10 hover:border-blue-500/30 transition-colors group">
                <h3 className="font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">CCPA Privacy Policy Generator</h3>
                <p className="text-sm text-gray-400">Build a privacy policy that meets California Consumer Privacy Act requirements, including the right to know, right to delete, right to opt-out of sale, and non-discrimination provisions.</p>
              </Link>
            </div>
          </section>

          {/* Footer CTA */}
          <div className="p-8 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl text-center">
            <h3 className="text-xl font-bold text-white mb-2">Ready to Check Your Website?</h3>
            <p className="text-gray-400 mb-4">Scan your privacy policy in seconds. If you need a new one, we&apos;ll generate it for you.</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/check" className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity">
                Scan Your Website
              </Link>
              <Link href="/" className="px-8 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors">
                Generate a Policy
              </Link>
            </div>
          </div>

          {/* AccessScore Cross-Link */}
          <div className="p-6 bg-orange-500/5 border border-orange-500/20 rounded-xl">
            <h3 className="text-lg font-bold text-white mb-2">Beyond Privacy: Check Your ADA Accessibility Too</h3>
            <p className="text-sm text-gray-400 mb-3">
              Website compliance goes beyond privacy policies. ADA accessibility lawsuits have surged in recent years, with over 4,000 filed annually. Use AccessScore to scan your site for WCAG and ADA issues — free and instant.
            </p>
            <a
              href="https://accessscore.autonomous-claude.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 text-sm font-medium"
            >
              Scan for accessibility issues &rarr;
            </a>
          </div>
        </div>
      </main>

      <footer className="border-t border-white/10 mt-16 py-8 text-center text-sm text-gray-500">
        <p>PolicyForge &mdash; Free privacy policy generator and compliance tools</p>
      </footer>
    </div>
  );
}
