import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy for SaaS Companies | Free Generator - PolicyForge",
  description:
    "Generate a free privacy policy for your SaaS product. Covers user accounts, subscription billing, API data, cloud storage, sub-processors, DPAs, and third-party integrations. GDPR & CCPA compliant.",
  keywords:
    "SaaS privacy policy, software as a service privacy policy, SaaS GDPR compliance, cloud app privacy policy, SaaS data processing, B2B privacy policy generator, subscription service privacy policy, SaaS DPA, SaaS sub-processor list, SOC 2 privacy policy",
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
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Privacy Policy for SaaS Companies
        </h1>

        <p className="text-gray-400 text-lg mb-8">
          A comprehensive guide to building a privacy policy that satisfies enterprise buyers, regulatory requirements, and your users&apos; expectations.
        </p>

        <div className="space-y-10 text-gray-300 leading-relaxed text-[17px]">
          {/* Section 1: Why SaaS Companies Need Specialized Privacy Policies */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Why SaaS Companies Need a Specialized Privacy Policy
            </h2>
            <p className="mb-4">
              SaaS companies occupy a unique position in the data privacy landscape. Unlike a standard website that collects email addresses and browsing data, a SaaS platform processes, stores, and manages the actual working data of its customers. A project management tool holds task descriptions, deadlines, and team communications. A CRM stores customer contact information, sales pipeline data, and revenue figures. An analytics platform ingests behavioral data from thousands or millions of end users.
            </p>
            <p className="mb-4">
              This means your privacy policy is not just a legal formality &mdash; it is a sales document. Enterprise procurement teams, security reviewers, and compliance officers read your privacy policy before signing a contract. A vague or incomplete policy can directly cost you deals. According to Cisco&apos;s Data Privacy Benchmark Study, 94% of organizations say their customers would not buy from them if data were not properly protected.
            </p>
            <p>
              A generic privacy policy template will leave dangerous gaps for a SaaS business. You need language that addresses data processing agreements, sub-processor disclosures, data residency, API data handling, multi-tenancy security, and breach notification procedures &mdash; none of which appear in a standard website privacy policy.
            </p>
          </section>

          {/* Section 2: SaaS Privacy Policy vs Regular Privacy Policy */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              SaaS Privacy Policy vs. Regular Website Privacy Policy
            </h2>
            <p className="mb-4">
              A regular website privacy policy typically covers cookies, contact form data, and basic analytics. A SaaS privacy policy must go far beyond that. Here are the key differences:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm mb-4">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-4 text-white font-semibold">Aspect</th>
                    <th className="text-left py-3 px-4 text-white font-semibold">Regular Website</th>
                    <th className="text-left py-3 px-4 text-white font-semibold">SaaS Platform</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 font-medium text-gray-300">Data role</td>
                    <td className="py-3 px-4">Data controller only</td>
                    <td className="py-3 px-4">Controller and processor (dual role)</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 font-medium text-gray-300">User data scope</td>
                    <td className="py-3 px-4">Contact info, cookies</td>
                    <td className="py-3 px-4">Account data, billing, user-generated content, API logs, usage analytics</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 font-medium text-gray-300">Third parties</td>
                    <td className="py-3 px-4">Google Analytics, ad networks</td>
                    <td className="py-3 px-4">Cloud infrastructure, payment processors, sub-processors, integrations</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 font-medium text-gray-300">Data retention</td>
                    <td className="py-3 px-4">Basic statement</td>
                    <td className="py-3 px-4">Per-data-type retention schedules, post-cancellation data handling</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 font-medium text-gray-300">Security disclosures</td>
                    <td className="py-3 px-4">SSL mention</td>
                    <td className="py-3 px-4">Encryption at rest/in transit, SOC 2, penetration testing, incident response</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 font-medium text-gray-300">Contracts</td>
                    <td className="py-3 px-4">None</td>
                    <td className="py-3 px-4">DPA, BAA (healthcare), SCC (international transfers)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              If you are running a SaaS product and using a privacy policy designed for a brochure website, you are exposing yourself to regulatory risk and losing enterprise customers who expect professional data governance documentation. Use our{" "}
              <Link href="/check" className="text-blue-400 hover:text-blue-300 underline">
                privacy policy compliance checker
              </Link>{" "}
              to see how your current policy stacks up.
            </p>
          </section>

          {/* Section 3: SaaS-Specific Data Collection */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              What Data Do SaaS Companies Collect?
            </h2>
            <p className="mb-4">
              Your privacy policy must explicitly disclose every category of personal data you collect. For SaaS companies, this typically includes several categories that standard templates miss entirely:
            </p>
            <div className="space-y-4">
              <div className="bg-white/5 rounded-lg p-5 border border-white/10">
                <h3 className="text-white font-semibold mb-2">Account and Identity Data</h3>
                <p className="text-gray-400 text-sm">
                  Name, email address, company name, role/title, profile photo, SSO identity tokens, and team membership data. For B2B SaaS, you may also collect company size, industry, and billing contact information that differs from the account holder.
                </p>
              </div>
              <div className="bg-white/5 rounded-lg p-5 border border-white/10">
                <h3 className="text-white font-semibold mb-2">Billing and Subscription Data</h3>
                <p className="text-gray-400 text-sm">
                  Payment method details (typically tokenized via Stripe or a similar processor), billing address, subscription tier, invoice history, usage-based billing metrics, and tax identification numbers. Even if you use Stripe Checkout and never touch raw card numbers, you must disclose the data flow.
                </p>
              </div>
              <div className="bg-white/5 rounded-lg p-5 border border-white/10">
                <h3 className="text-white font-semibold mb-2">User-Generated Content</h3>
                <p className="text-gray-400 text-sm">
                  This is the data your customers create inside your platform: documents, messages, files, images, database records, configurations, and workflows. This is often the most sensitive category because it may contain your customers&apos; own customers&apos; personal data, creating a chain of data processing obligations.
                </p>
              </div>
              <div className="bg-white/5 rounded-lg p-5 border border-white/10">
                <h3 className="text-white font-semibold mb-2">Usage Analytics and Telemetry</h3>
                <p className="text-gray-400 text-sm">
                  Feature usage frequency, session duration, click paths, error logs, performance metrics, and A/B test assignments. Many SaaS products use tools like Mixpanel, Amplitude, PostHog, or Segment to collect this data. Each tool must be disclosed as a sub-processor.
                </p>
              </div>
              <div className="bg-white/5 rounded-lg p-5 border border-white/10">
                <h3 className="text-white font-semibold mb-2">API Logs and Integration Data</h3>
                <p className="text-gray-400 text-sm">
                  API request/response logs, webhook payloads, OAuth tokens, third-party integration credentials, and data synced from connected services (Slack, GitHub, Salesforce, etc.). API logs often contain personal data in request parameters and must be covered by your retention policy.
                </p>
              </div>
              <div className="bg-white/5 rounded-lg p-5 border border-white/10">
                <h3 className="text-white font-semibold mb-2">Technical and Device Data</h3>
                <p className="text-gray-400 text-sm">
                  IP addresses, browser type, operating system, device identifiers, timezone, language preference, and referring URLs. For mobile SaaS apps, this may also include device model, OS version, and push notification tokens.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Data Processing Agreements (DPA) */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Data Processing Agreements (DPA) for SaaS
            </h2>
            <p className="mb-4">
              Under GDPR Article 28, when your SaaS platform processes personal data on behalf of your customers (which is nearly always the case), you are legally required to have a Data Processing Agreement in place. A DPA is a binding contract between you (the data processor) and your customer (the data controller) that governs how you handle their data.
            </p>
            <p className="mb-4">
              Your privacy policy should reference the existence of your DPA and explain how customers can execute it. Many SaaS companies publish a standard DPA on their website that customers can countersign. Others include DPA terms directly in their Terms of Service.
            </p>
            <p className="mb-4">
              A proper SaaS DPA must cover:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4 mb-4">
              <li>The subject matter, duration, nature, and purpose of data processing</li>
              <li>The types of personal data processed and categories of data subjects</li>
              <li>Your obligations and rights as the processor</li>
              <li>Instructions from the controller regarding data processing</li>
              <li>Confidentiality obligations for personnel with access to data</li>
              <li>Security measures you implement (technical and organizational)</li>
              <li>Rules for engaging sub-processors</li>
              <li>Assistance with data subject rights requests (access, deletion, portability)</li>
              <li>Breach notification procedures and timelines</li>
              <li>Data deletion or return upon contract termination</li>
              <li>Audit rights for the controller</li>
            </ul>
            <p>
              If you are selling to EU customers and do not have a DPA available, you are technically non-compliant with GDPR. Many enterprise deals will stall at the security review stage without one. Your privacy policy should clearly state that DPAs are available and link to the relevant document or contact process.
            </p>
          </section>

          {/* Section 5: Sub-Processor Disclosures */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Sub-Processor Disclosures
            </h2>
            <p className="mb-4">
              GDPR requires data processors to obtain authorization before engaging sub-processors &mdash; third-party services that process personal data on your behalf. For a typical SaaS company, the sub-processor list is extensive:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4 mb-4">
              <li><span className="text-gray-300 font-medium">Cloud infrastructure:</span> AWS, Google Cloud Platform, Azure, Vercel, Cloudflare</li>
              <li><span className="text-gray-300 font-medium">Payment processing:</span> Stripe, Paddle, Chargebee</li>
              <li><span className="text-gray-300 font-medium">Email services:</span> SendGrid, Resend, Postmark, Mailgun</li>
              <li><span className="text-gray-300 font-medium">Analytics:</span> Mixpanel, Amplitude, PostHog, Google Analytics</li>
              <li><span className="text-gray-300 font-medium">Error tracking:</span> Sentry, Datadog, LogRocket</li>
              <li><span className="text-gray-300 font-medium">Customer support:</span> Intercom, Zendesk, Help Scout</li>
              <li><span className="text-gray-300 font-medium">Authentication:</span> Auth0, Clerk, Firebase Auth</li>
              <li><span className="text-gray-300 font-medium">CDN and security:</span> Cloudflare, Fastly, Akamai</li>
            </ul>
            <p className="mb-4">
              Best practice is to maintain a public sub-processor list page on your website (e.g., <code className="bg-white/10 px-2 py-0.5 rounded text-sm">yourapp.com/sub-processors</code>) and offer a notification mechanism so customers can be alerted when new sub-processors are added. Many enterprise contracts require 30 days&apos; advance notice before adding a new sub-processor.
            </p>
            <p>
              Your privacy policy should reference this list and explain how users can stay informed of changes. This is not optional for GDPR compliance &mdash; it is a specific requirement under Article 28(2).
            </p>
          </section>

          {/* Section 6: SOC 2 and Privacy Compliance */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              SOC 2 and Privacy Compliance for SaaS
            </h2>
            <p className="mb-4">
              SOC 2 (System and Organization Controls 2) is an auditing framework developed by the AICPA that evaluates a service organization&apos;s controls related to security, availability, processing integrity, confidentiality, and privacy. For SaaS companies selling to mid-market and enterprise customers, SOC 2 Type II certification is increasingly table-stakes.
            </p>
            <p className="mb-4">
              Your privacy policy should reflect your SOC 2 commitments by documenting:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4 mb-4">
              <li>Encryption standards: AES-256 at rest, TLS 1.2+ in transit</li>
              <li>Access controls: role-based access, least privilege principle, MFA for employees</li>
              <li>Data isolation: how multi-tenant data is logically separated</li>
              <li>Incident response: breach detection, notification timelines (72 hours under GDPR), remediation process</li>
              <li>Employee security: background checks, security training, access logging</li>
              <li>Backup and disaster recovery: RPO/RTO targets, geographic redundancy</li>
              <li>Vulnerability management: penetration testing frequency, bug bounty programs</li>
            </ul>
            <p>
              Even if you do not yet have SOC 2 certification, documenting your security practices in your privacy policy builds trust with prospective customers and demonstrates a security-first mindset. If you do have SOC 2, reference it explicitly and explain how customers can request your report.
            </p>
          </section>

          {/* Section 7: International Data Transfers */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              International Data Transfers for SaaS Platforms
            </h2>
            <p className="mb-4">
              SaaS platforms serve customers globally, which means personal data frequently crosses international borders. After the Schrems II decision invalidated the EU-US Privacy Shield, SaaS companies must rely on alternative legal mechanisms to transfer data from the EU to countries without an adequacy decision.
            </p>
            <p className="mb-4">
              The primary mechanisms available are:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4 mb-4">
              <li><span className="text-gray-300 font-medium">EU-US Data Privacy Framework (DPF):</span> The successor to Privacy Shield, adopted in July 2023. US companies can self-certify to receive EU personal data. Your privacy policy should state whether you are DPF-certified.</li>
              <li><span className="text-gray-300 font-medium">Standard Contractual Clauses (SCCs):</span> Pre-approved contractual terms adopted by the European Commission. These are typically included in or annexed to your DPA.</li>
              <li><span className="text-gray-300 font-medium">Binding Corporate Rules (BCRs):</span> For large organizations with multiple entities across jurisdictions. Less common for startups and SMBs.</li>
              <li><span className="text-gray-300 font-medium">Data residency options:</span> Some SaaS platforms offer EU-only data hosting to eliminate cross-border transfers entirely. If you offer this, your privacy policy should explain how customers can opt in.</li>
            </ul>
            <p>
              Your privacy policy must disclose where data is stored (specific regions or countries), what legal basis you rely on for international transfers, and whether customers can choose their data region. Failing to address this is one of the most common compliance gaps we see when users{" "}
              <Link href="/check" className="text-blue-400 hover:text-blue-300 underline">
                scan their privacy policies
              </Link>{" "}
              with our compliance checker.
            </p>
          </section>

          {/* Section 8: Checklist */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              SaaS Privacy Policy Must-Haves: Complete Checklist
            </h2>
            <p className="mb-4 text-gray-400">
              Use this checklist to audit your existing privacy policy or as a guide when generating a new one. Every item below should be addressed for a SaaS product:
            </p>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 space-y-3">
              {[
                "Company identity and contact details (including DPO if applicable)",
                "Complete list of personal data categories collected",
                "Legal basis for each processing activity (consent, contract, legitimate interest)",
                "Purpose of data collection for each data category",
                "User-generated content handling and ownership statement",
                "Billing data collection and payment processor disclosure",
                "Usage analytics and telemetry data disclosure",
                "API log retention policy and what data is logged",
                "Cookie policy with specific cookies listed and their purposes",
                "Sub-processor list with names, purposes, and locations",
                "DPA availability and how to execute one",
                "Data retention schedule per data type",
                "Post-cancellation data handling (deletion timeline, export options)",
                "Data subject rights (access, rectification, erasure, portability, objection)",
                "Process for handling data subject requests and response timeline",
                "International data transfer mechanisms (DPF, SCCs, data residency)",
                "Server locations and data residency options",
                "Security measures (encryption, access controls, audit logging)",
                "SOC 2, ISO 27001, or other certification references",
                "Breach notification procedures and timelines",
                "Children's data policy (COPPA compliance if applicable)",
                "CCPA-specific disclosures (categories sold/shared, opt-out rights)",
                "Policy update notification mechanism",
                "Effective date and version history",
              ].map((item, i) => (
                <label key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                  <span className="mt-0.5 w-5 h-5 rounded border border-white/20 flex-shrink-0 flex items-center justify-center text-xs text-gray-500">
                    {i + 1}
                  </span>
                  <span>{item}</span>
                </label>
              ))}
            </div>
            <p className="mt-4 text-gray-400">
              Missing several items? Our{" "}
              <Link href="/" className="text-blue-400 hover:text-blue-300 underline">
                privacy policy generator
              </Link>{" "}
              covers all of these automatically. You can also pair your privacy policy with a{" "}
              <Link href="/tos" className="text-blue-400 hover:text-blue-300 underline">
                Terms of Service
              </Link>{" "}
              to complete your legal documentation.
            </p>
          </section>

          {/* Section 9: FAQ */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Is my SaaS company a data controller or data processor?
                </h3>
                <p className="text-gray-400">
                  Most SaaS companies are both. You are a <strong className="text-gray-300">data controller</strong> for the personal data you collect for your own purposes (marketing emails, account management, analytics about your product usage). You are a <strong className="text-gray-300">data processor</strong> for the data your customers store and manage within your platform. For example, if you run a CRM, your customer&apos;s contact database is processed by you on their behalf. Your privacy policy and DPA must clearly distinguish between these two roles and the legal basis for each.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  What happens to customer data when they cancel their subscription?
                </h3>
                <p className="text-gray-400">
                  Your privacy policy must clearly state what happens to data after cancellation. Best practice for SaaS is to offer a data export period (typically 30 days) during which the customer can download their data, followed by permanent deletion within a defined timeframe (commonly 90 days). You should also explain whether backups are purged on the same schedule or retained longer for disaster recovery purposes. Some regulations, like tax laws, may require you to retain billing records for longer periods &mdash; disclose this separately.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Do I need a separate privacy policy for my API?
                </h3>
                <p className="text-gray-400">
                  No, but your main privacy policy must cover API-specific data collection. This includes what data is logged from API requests (IP addresses, authentication tokens, request parameters, response codes), how long API logs are retained, and what happens to data transmitted via webhooks or integrations. If your API processes data on behalf of third-party developers (a platform/marketplace model), you should also address your role as a sub-processor in that context. Developer-facing documentation should reference your privacy policy.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  How often should I update my SaaS privacy policy?
                </h3>
                <p className="text-gray-400">
                  Review your privacy policy at least quarterly and update it whenever you add new sub-processors, change your data processing practices, expand to new jurisdictions, add new product features that collect data, or change your security infrastructure. Under GDPR, material changes must be communicated to users proactively. Best practice is to maintain a changelog or version history and send email notifications for significant updates. Many enterprise customers contractually require advance notice of privacy policy changes.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Can I use my SaaS privacy policy for both B2B and B2C customers?
                </h3>
                <p className="text-gray-400">
                  Yes, a single privacy policy can cover both audiences, but you need to address the different data flows clearly. For B2B customers, address organizational accounts, admin controls, team member data management, and the controller-processor relationship via your DPA. For B2C or individual users, focus on consumer rights under CCPA and GDPR, including the right to opt out of data sales (CCPA) and the right to data portability (GDPR). Some SaaS companies maintain separate sections within one policy, while others create a supplementary B2B privacy notice that sits alongside the main policy.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-semibold text-white mb-3">
              Generate Your SaaS Privacy Policy in Minutes
            </h2>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              PolicyForge generates privacy policies specifically designed for SaaS companies. Answer a few questions about your product, and get a comprehensive, regulation-ready privacy policy that covers accounts, billing, API data, sub-processors, and international transfers.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/"
                className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg text-lg hover:opacity-90 transition-opacity"
              >
                Generate Your Privacy Policy
              </Link>
              <Link
                href="/check"
                className="inline-block px-8 py-4 border border-white/20 text-white font-semibold rounded-lg text-lg hover:bg-white/5 transition-colors"
              >
                Check Your Existing Policy
              </Link>
            </div>
          </section>
        </div>
      </main>

      {/* Also Check */}
      <div className="max-w-4xl mx-auto px-4 mt-12">
        <div className="p-6 bg-orange-500/5 border border-orange-500/20 rounded-xl">
          <h3 className="text-lg font-bold text-white mb-2">Also Check: ADA Accessibility Compliance</h3>
          <p className="text-sm text-gray-400 mb-3">
            Privacy compliance is only part of the picture. ADA and WCAG accessibility requirements carry their own legal obligations and fines. Scan your SaaS product for accessibility issues with AccessScore.
          </p>
          <a
            href="https://accessscore.autonomous-claude.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 text-sm font-medium"
          >
            Check your accessibility compliance &rarr;
          </a>
        </div>
      </div>

      <footer className="border-t border-white/10 mt-16 py-8 text-center text-sm text-gray-500">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 mb-4 text-xs">
            <Link href="/" className="text-gray-500 hover:text-gray-300">Privacy Policy Generator</Link>
            <Link href="/tos" className="text-gray-500 hover:text-gray-300">Terms of Service Generator</Link>
            <Link href="/check" className="text-gray-500 hover:text-gray-300">Privacy Compliance Checker</Link>
          </div>
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
        </div>
      </footer>
    </div>
  );
}
