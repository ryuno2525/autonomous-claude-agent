import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Terms of Service for SaaS | Free SaaS ToS Generator - PolicyForge",
  description:
    "Generate a free terms of service for your SaaS product. Covers liability limitation, intellectual property, data handling, SLA uptime guarantees, account termination, and data portability. Customizable template for software as a service.",
  keywords:
    "terms of service for saas, saas terms of service template, saas tos generator, software as a service terms and conditions, saas terms and conditions, saas legal documents, saas agreement template, cloud service terms of service, saas liability clause, saas sla terms",
  openGraph: {
    title: "Terms of Service for SaaS | Free Generator - PolicyForge",
    description:
      "Generate a comprehensive terms of service for your SaaS product. Covers liability, IP, SLA, data portability, termination, and regional compliance. Free template.",
    url: "https://policyforge-one.vercel.app/terms-of-service-for-saas",
    siteName: "PolicyForge",
    type: "article",
    images: [
      {
        url: "https://policyforge-one.vercel.app/api/og?score=95&domain=SaaS+Terms+of+Service",
        width: 1200,
        height: 630,
        alt: "PolicyForge SaaS Terms of Service Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service for SaaS | Free Generator - PolicyForge",
    description:
      "Generate a comprehensive SaaS terms of service covering liability, IP, SLA, data portability, and more. Free template.",
    images: [
      "https://policyforge-one.vercel.app/api/og?score=95&domain=SaaS+Terms+of+Service",
    ],
  },
  alternates: {
    canonical: "https://policyforge-one.vercel.app/terms-of-service-for-saas",
  },
};

const faqData = [
  {
    q: "Are terms of service legally required for SaaS products?",
    a: "While terms of service are not universally mandated by law the way privacy policies are under GDPR or CCPA, they are practically essential for any SaaS business. Payment processors like Stripe and PayPal require them. App stores mandate them. Enterprise customers will not sign contracts without them. More critically, without a ToS you have no contractual basis to limit your liability, terminate accounts, protect your intellectual property, or enforce acceptable use policies. For SaaS specifically, a ToS also establishes the service level expectations, data handling obligations, and subscription terms that govern the entire customer relationship.",
  },
  {
    q: "What is the difference between SaaS terms of service and a regular website ToS?",
    a: "A regular website ToS covers basic usage rules for a static or content-based site. A SaaS ToS must address an ongoing service relationship with recurring billing, uptime guarantees, data processing obligations, intellectual property licensing for user-generated content, API usage terms, multi-user account administration, data portability on cancellation, and service level agreements. SaaS terms also need to address the provider's role as a data processor under GDPR, handle subscription lifecycle events like upgrades, downgrades, and renewals, and define what happens to customer data when the service is discontinued.",
  },
  {
    q: "Should my SaaS terms of service include an SLA?",
    a: "For B2B SaaS, an SLA (Service Level Agreement) is strongly recommended and often expected by enterprise buyers. Your SLA can be embedded within your ToS or published as a separate referenced document. At minimum, it should specify your uptime commitment (e.g., 99.9%), how uptime is measured, what counts as an exclusion (scheduled maintenance, force majeure), and what remedies are available when the SLA is breached (typically service credits). Even if you offer a modest uptime target, having a defined SLA builds trust and demonstrates operational maturity.",
  },
  {
    q: "How do I handle intellectual property in SaaS terms of service?",
    a: "SaaS IP clauses must address two sides: your IP and your customer's IP. You retain all rights to your software, algorithms, user interface, documentation, and branding. Customers retain ownership of all data and content they upload or create within your platform. You need a limited license from customers to host, process, display, and back up their content as necessary to provide the service. Critically, your ToS should explicitly state that you do not acquire any ownership rights over customer data, and that this license terminates when the customer's subscription ends.",
  },
  {
    q: "What happens to customer data when a SaaS subscription is cancelled?",
    a: "Your ToS must clearly define the post-cancellation data lifecycle. Best practice is to offer a data export period (typically 30 days) during which customers can download their data in a standard format, followed by permanent deletion within a defined timeframe (commonly 60-90 days). You should also address whether backups are purged on the same schedule, whether any data is retained for legal compliance (billing records, audit logs), and what format exported data will be provided in. Enterprise customers often negotiate custom data retention and deletion terms.",
  },
  {
    q: "Can I use PolicyForge to generate SaaS-specific terms of service?",
    a: "Yes. PolicyForge's terms of service generator includes SaaS-specific clauses covering subscription billing, SLA and uptime commitments, data processing and portability, API usage terms, intellectual property licensing, account administration for teams, and multi-jurisdiction compliance. You answer questions about your specific SaaS product, and PolicyForge generates a comprehensive, professionally structured ToS tailored to your business model. The Pro tier includes advanced clauses for enterprise SaaS including data processing addendums, custom SLA terms, and international jurisdiction provisions.",
  },
  {
    q: "Do I need separate terms for my SaaS API and my web application?",
    a: "Not necessarily, but your ToS must explicitly cover API usage if you offer one. This includes rate limiting policies, API key management and revocation, acceptable use of API endpoints, data transmitted via API calls, webhook reliability disclaimers, and any differences between API and UI feature availability. Many SaaS companies include an API-specific section within their main ToS or publish a separate API Terms of Use document referenced by the main agreement. If your API enables third-party integrations or a developer platform, you may also need a developer agreement.",
  },
  {
    q: "How often should SaaS terms of service be updated?",
    a: "Review your SaaS ToS at least quarterly and update it whenever you change pricing or billing models, add significant new features, expand to new markets or jurisdictions, modify your data handling practices, change sub-processors, or update your SLA commitments. Under most legal frameworks, material changes must be communicated to users with reasonable advance notice (typically 30 days). Maintain a version history and changelog, and require active re-acceptance for major changes rather than relying on continued-use-equals-acceptance.",
  },
];

export default function TermsOfServiceForSaas() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
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
          Terms of Service for SaaS: Complete Guide &amp; Free Generator
        </h1>

        <p className="text-gray-400 text-lg mb-8">
          A comprehensive guide to building terms of service that protect your SaaS business, satisfy enterprise procurement, and comply with regulations across every major jurisdiction. Includes a free SaaS ToS template generator.
        </p>

        <div className="space-y-10 text-gray-300 leading-relaxed text-[17px]">
          {/* ============================================================ */}
          {/* Section 1: Why SaaS Products Need Terms of Service            */}
          {/* ============================================================ */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Why Every SaaS Product Needs Terms of Service
            </h2>
            <p className="mb-4">
              Software as a Service products are fundamentally different from traditional software or static websites. Your customers do not install anything on their own servers &mdash; they access your application over the internet, store their data on your infrastructure, and depend on your uptime for their own business operations. This creates a complex, ongoing relationship that requires a carefully structured legal agreement.
            </p>
            <p className="mb-4">
              Without terms of service, your SaaS business operates in a legal vacuum. If your platform goes down and a customer loses revenue, you have no contractual cap on liability. If a user scrapes your database and builds a competing product, you have no intellectual property protections. If a customer refuses to pay but continues accessing the service, you may lack the contractual right to terminate their account without legal exposure.
            </p>
            <p className="mb-4">
              The stakes are concrete and measurable. A single enterprise customer claiming consequential damages from a service outage could seek millions in lost revenue. Without a limitation of liability clause in your ToS, your exposure is theoretically unlimited. The cost of generating a proper SaaS terms of service with{" "}
              <Link
                href="https://policyforge-one.vercel.app/tos"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                PolicyForge&apos;s free ToS generator
              </Link>{" "}
              is zero. The cost of not having one is potentially catastrophic.
            </p>
            <p>
              Beyond liability, SaaS terms of service serve as a trust signal for enterprise buyers. Procurement teams, security reviewers, and legal departments evaluate your ToS during their vendor assessment process. A professional, comprehensive ToS demonstrates operational maturity and reduces friction in the sales cycle. A missing or poorly written ToS is a red flag that can kill enterprise deals before they start.
            </p>
          </section>

          {/* ============================================================ */}
          {/* Section 2: SaaS ToS vs Regular ToS                           */}
          {/* ============================================================ */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              SaaS Terms of Service vs. Regular Terms of Service
            </h2>
            <p className="mb-4">
              A standard website or e-commerce terms of service covers basic usage rules, purchase terms, and liability disclaimers. A SaaS ToS must go significantly further because the service relationship is ongoing, involves continuous data processing, and creates mutual obligations around availability, security, and data stewardship.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm mb-4">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-4 text-white font-semibold">
                      Aspect
                    </th>
                    <th className="text-left py-3 px-4 text-white font-semibold">
                      Standard Website ToS
                    </th>
                    <th className="text-left py-3 px-4 text-white font-semibold">
                      SaaS Terms of Service
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 font-medium text-gray-300">
                      Service relationship
                    </td>
                    <td className="py-3 px-4">
                      One-time or session-based
                    </td>
                    <td className="py-3 px-4">
                      Ongoing subscription with recurring billing
                    </td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 font-medium text-gray-300">
                      Data handling
                    </td>
                    <td className="py-3 px-4">
                      Basic contact info, cookies
                    </td>
                    <td className="py-3 px-4">
                      Customer business data, user-generated content, API data, audit logs
                    </td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 font-medium text-gray-300">
                      Availability
                    </td>
                    <td className="py-3 px-4">
                      No uptime commitment
                    </td>
                    <td className="py-3 px-4">
                      SLA with uptime guarantee (e.g., 99.9%)
                    </td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 font-medium text-gray-300">
                      IP concerns
                    </td>
                    <td className="py-3 px-4">
                      Basic copyright notice
                    </td>
                    <td className="py-3 px-4">
                      Software license, customer data ownership, content processing license
                    </td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 font-medium text-gray-300">
                      Billing
                    </td>
                    <td className="py-3 px-4">
                      Simple purchase terms
                    </td>
                    <td className="py-3 px-4">
                      Subscription tiers, auto-renewal, usage-based billing, upgrade/downgrade
                    </td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 font-medium text-gray-300">
                      Termination
                    </td>
                    <td className="py-3 px-4">
                      Simple account closure
                    </td>
                    <td className="py-3 px-4">
                      Data export period, retention schedule, refund proration, transition assistance
                    </td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 font-medium text-gray-300">
                      Security obligations
                    </td>
                    <td className="py-3 px-4">
                      None or minimal
                    </td>
                    <td className="py-3 px-4">
                      Encryption, access controls, breach notification, compliance certifications
                    </td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 font-medium text-gray-300">
                      Multi-user access
                    </td>
                    <td className="py-3 px-4">
                      Single user accounts
                    </td>
                    <td className="py-3 px-4">
                      Team accounts, admin roles, seat-based licensing, SSO
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Using a generic website ToS template for your SaaS product leaves critical gaps around subscription management, data portability, uptime obligations, and processor responsibilities. These are the exact clauses that enterprise buyers scrutinize during procurement.
            </p>
          </section>

          {/* ============================================================ */}
          {/* Section 3: Key Clauses                                        */}
          {/* ============================================================ */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Essential Clauses in a SaaS Terms of Service
            </h2>
            <p className="mb-6">
              Every SaaS terms of service must include specific clauses tailored to the subscription-based, data-intensive nature of cloud software. Here are the critical sections your SaaS ToS needs, and why each one matters.
            </p>

            <div className="space-y-6">
              {/* Clause 1: Liability Limitation */}
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-3">
                  1. Limitation of Liability
                </h3>
                <p className="text-gray-400 mb-3">
                  This is the single most important clause in your entire SaaS agreement. It caps the maximum damages a customer can recover from you, typically to the total fees paid by that customer in the 12 months preceding the claim. Without this clause, a service outage affecting a customer with $10 million in annual revenue could expose you to claims for consequential damages that dwarf your entire company&apos;s valuation.
                </p>
                <p className="text-gray-400">
                  Your liability limitation should disclaim indirect, incidental, consequential, special, and punitive damages. It should also include a warranty disclaimer stating the service is provided &quot;as is&quot; without warranties of merchantability or fitness for a particular purpose. Note that some jurisdictions (particularly in the EU) limit how broadly you can disclaim liability, so your clause should include a savings provision for applicable mandatory law.
                </p>
              </div>

              {/* Clause 2: Intellectual Property */}
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-3">
                  2. Intellectual Property Rights
                </h3>
                <p className="text-gray-400 mb-3">
                  SaaS IP clauses must carefully separate provider IP from customer IP. You retain all rights, title, and interest in your software, including its source code, algorithms, user interface, documentation, APIs, and trademarks. Customers retain full ownership of all data and content they upload, create, or store within your platform.
                </p>
                <p className="text-gray-400">
                  You need a limited, non-exclusive license from customers to host, process, display, transmit, and back up their content solely to provide the service. This license must be clearly bounded &mdash; it should terminate when the customer&apos;s subscription ends, and it should not grant you the right to use customer data for training machine learning models, sell it to third parties, or use it for any purpose beyond service delivery. For SaaS products that use customer data to generate aggregated insights or benchmarks, this must be explicitly disclosed and separately consented to.
                </p>
              </div>

              {/* Clause 3: Termination */}
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-3">
                  3. Termination and Account Closure
                </h3>
                <p className="text-gray-400 mb-3">
                  SaaS termination clauses must be more detailed than a standard website ToS because customers have data stored on your platform. Your termination clause should address four scenarios: customer-initiated cancellation, provider-initiated termination for cause (ToS violations), provider-initiated termination for convenience (business decisions), and termination due to non-payment.
                </p>
                <p className="text-gray-400">
                  For each scenario, define the data handling process: how long customers have to export their data (typically 30 days), what format exports are available in, when permanent deletion occurs, and whether any data is retained for legal or compliance purposes. Also address refund policies for each termination type &mdash; whether unused prepaid subscription periods are refunded, whether pro-rata refunds apply, and what happens to outstanding invoices.
                </p>
              </div>

              {/* Clause 4: Data Handling */}
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-3">
                  4. Data Handling and Processing
                </h3>
                <p className="text-gray-400 mb-3">
                  While your privacy policy covers data processing in detail, your SaaS ToS should establish the contractual framework for data handling. This includes defining data ownership (customers own their data), your role as a data processor, security obligations you commit to, and data processing boundaries (you will not access customer data except as necessary to provide the service or as directed by the customer).
                </p>
                <p className="text-gray-400">
                  For GDPR compliance, your ToS should reference your Data Processing Agreement (DPA) and explain how customers can execute one. Many SaaS companies make their DPA available for download on their website. Your ToS should also address data location, sub-processor management, breach notification commitments, and data deletion procedures. If you need a comprehensive{" "}
                  <Link
                    href="/privacy-policy-for-saas"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    privacy policy for your SaaS product
                  </Link>, PolicyForge generates one that works alongside your ToS.
                </p>
              </div>

              {/* Clause 5: SLA */}
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-3">
                  5. Service Level Agreement (SLA)
                </h3>
                <p className="text-gray-400 mb-3">
                  An SLA defines your uptime commitment, how it is measured, and what remedies are available when you fall short. For B2B SaaS, an SLA is table-stakes for enterprise deals. Common uptime tiers are 99.9% (8.76 hours of downtime per year), 99.95% (4.38 hours), and 99.99% (52.6 minutes). The right target depends on your infrastructure maturity and customer expectations.
                </p>
                <p className="text-gray-400 mb-3">
                  Your SLA should clearly define:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-400 ml-4">
                  <li>How uptime is calculated (monthly, quarterly, annually)</li>
                  <li>What constitutes an exclusion (scheduled maintenance windows, force majeure, customer-caused issues)</li>
                  <li>How downtime is reported and verified</li>
                  <li>Remedies for SLA breaches (typically service credits, e.g., 10% credit for each 0.1% below target)</li>
                  <li>The process for claiming credits (often requires customer to submit a support ticket within 30 days)</li>
                  <li>Maximum credit caps (typically 30% of monthly fees)</li>
                </ul>
              </div>

              {/* Clause 6: Subscription and Billing */}
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-3">
                  6. Subscription, Billing, and Payment Terms
                </h3>
                <p className="text-gray-400 mb-3">
                  SaaS billing is more complex than a one-time purchase. Your ToS must address recurring billing cycles (monthly or annual), auto-renewal terms and how to opt out, pricing change notification periods (typically 30 days advance notice), what happens when a payment fails (grace period, service suspension), upgrade and downgrade mechanics, and usage-based billing calculations if applicable.
                </p>
                <p className="text-gray-400">
                  Clear billing terms are your primary defense against chargeback disputes. Payment processors like Stripe side with the customer when refund and billing terms are ambiguous. Specify whether refunds are available, under what circumstances, whether they are prorated, and what your money-back guarantee period is (if any). For annual plans, state explicitly whether early cancellation results in a refund of unused months or not.
                </p>
              </div>

              {/* Clause 7: Acceptable Use */}
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-3">
                  7. Acceptable Use Policy
                </h3>
                <p className="text-gray-400">
                  Your acceptable use policy defines what customers can and cannot do with your SaaS platform. For SaaS specifically, this should prohibit: reverse engineering or decompiling your software, circumventing usage limits or license restrictions, sharing login credentials beyond authorized users, using the service for competitive analysis or building competing products, excessive API usage that degrades service for other customers, storing or transmitting illegal content, using the service to send spam or conduct phishing attacks, and reselling access without authorization. This clause provides the contractual basis for account suspension and termination.
                </p>
              </div>

              {/* Clause 8: Indemnification */}
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-3">
                  8. Indemnification
                </h3>
                <p className="text-gray-400">
                  Indemnification clauses allocate risk between the SaaS provider and the customer. A mutual indemnification is standard: you indemnify customers against claims that your service infringes third-party intellectual property rights, and customers indemnify you against claims arising from their use of the service, their content, or their violation of the ToS. Enterprise customers often negotiate the scope and caps of mutual indemnification, so your baseline ToS should establish reasonable starting positions that can be modified in an enterprise agreement.
                </p>
              </div>
            </div>
          </section>

          {/* ============================================================ */}
          {/* Section 4: SaaS-Specific Concerns                            */}
          {/* ============================================================ */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              SaaS-Specific Concerns Your ToS Must Address
            </h2>
            <p className="mb-6">
              Beyond the standard contract clauses, SaaS products face unique operational and legal challenges that require dedicated ToS sections.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">
              Uptime Guarantees and Service Availability
            </h3>
            <p className="mb-4 text-gray-400">
              Your customers build their business processes around your SaaS product. When your platform goes down, their operations stop. This is fundamentally different from a website being temporarily unavailable. Your ToS must set realistic availability expectations and define what happens when those expectations are not met. If you promise 99.9% uptime, that means no more than 8 hours and 46 minutes of unplanned downtime per year. Track your actual performance and choose a target you can consistently meet &mdash; overpromising destroys trust faster than an honest, modest commitment.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">
              Data Portability and Vendor Lock-In
            </h3>
            <p className="mb-4 text-gray-400">
              Data portability is a growing concern for SaaS buyers, and a legal requirement under GDPR Article 20. Your ToS should clearly state that customers can export their data at any time during their subscription, what formats are available (CSV, JSON, API access), whether there are fees for data export, and how long data remains available for export after cancellation. Addressing data portability proactively in your ToS removes a major objection from enterprise buyers who fear vendor lock-in. It also demonstrates good faith and builds long-term customer relationships.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">
              Account Termination and Data Lifecycle
            </h3>
            <p className="mb-4 text-gray-400">
              The end of a SaaS subscription is one of the highest-risk moments legally. Your ToS must define a clear data lifecycle: active subscription (full access), cancellation notice period, data export window (typically 30 days post-cancellation), data deletion timeline (typically 60-90 days), and backup purge schedule. Also address what happens if your company discontinues the service entirely &mdash; customers need to know how much advance notice they will receive and what data migration assistance will be provided.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">
              Multi-Tenant Security and Data Isolation
            </h3>
            <p className="mb-4 text-gray-400">
              Most SaaS platforms are multi-tenant, meaning multiple customers share the same infrastructure. Your ToS should address how customer data is logically isolated, what security measures prevent cross-tenant data access, and how your infrastructure handles data segregation. This is particularly important for customers in regulated industries (healthcare, finance, government) who may have specific data isolation requirements. If you offer dedicated tenancy or private cloud deployment options, define those terms separately.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">
              API Terms and Integration Governance
            </h3>
            <p className="text-gray-400">
              If your SaaS product offers an API, your ToS must cover API-specific terms: rate limiting policies, API versioning and deprecation notice periods (typically 6-12 months), API key security responsibilities, data handling for webhook payloads, and liability disclaimers for third-party integrations. API terms are often overlooked but can create significant legal exposure, particularly around data processing through integrations that you do not control.
            </p>
          </section>

          {/* ============================================================ */}
          {/* Section 5: Legal Requirements by Region                       */}
          {/* ============================================================ */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Legal Requirements by Region
            </h2>
            <p className="mb-6">
              SaaS products serve customers globally, and terms of service must account for the legal requirements of every jurisdiction where your customers are based. Here are the key regional considerations:
            </p>

            <div className="space-y-5">
              <div className="bg-white/5 rounded-lg p-5 border border-white/10">
                <h3 className="text-white font-semibold mb-2">
                  European Union (GDPR &amp; Digital Services Act)
                </h3>
                <p className="text-gray-400 text-sm">
                  Under GDPR, if you process personal data of EU residents, your ToS must reference your role as a data processor, make a DPA available, list sub-processors, and provide data portability. The Digital Services Act (DSA) adds requirements around content moderation transparency, illegal content reporting mechanisms, and algorithmic transparency for larger platforms. Unfair contract terms directives also limit how aggressively you can disclaim liability for consumer-facing SaaS products in the EU.
                </p>
              </div>

              <div className="bg-white/5 rounded-lg p-5 border border-white/10">
                <h3 className="text-white font-semibold mb-2">
                  United States (State-Level Regulations)
                </h3>
                <p className="text-gray-400 text-sm">
                  The US has no federal equivalent of GDPR, but state laws create a patchwork of requirements. California&apos;s CCPA/CPRA requires disclosure of data categories collected, the right to delete, and opt-out of data sales. Several states have auto-renewal disclosure requirements that affect SaaS billing terms. The FTC Act prohibits unfair or deceptive practices, which can invalidate misleading ToS clauses. For B2B SaaS, the Uniform Commercial Code (UCC) may apply to certain software transactions depending on how your service is classified.
                </p>
              </div>

              <div className="bg-white/5 rounded-lg p-5 border border-white/10">
                <h3 className="text-white font-semibold mb-2">
                  United Kingdom (UK GDPR &amp; Consumer Rights Act)
                </h3>
                <p className="text-gray-400 text-sm">
                  Post-Brexit, the UK maintains its own version of GDPR with largely similar requirements. The Consumer Rights Act 2015 provides additional protections for consumer SaaS subscriptions, including the right to a refund if digital content is not as described, not fit for purpose, or not of satisfactory quality. B2B SaaS contracts have more flexibility but still cannot include terms deemed unfair under the Unfair Contract Terms Act 1977.
                </p>
              </div>

              <div className="bg-white/5 rounded-lg p-5 border border-white/10">
                <h3 className="text-white font-semibold mb-2">
                  Canada (PIPEDA &amp; CASL)
                </h3>
                <p className="text-gray-400 text-sm">
                  PIPEDA governs how private-sector organizations collect, use, and disclose personal information in commercial activities. Quebec&apos;s Law 25 (effective 2023-2024) adds GDPR-like requirements including privacy impact assessments and mandatory breach reporting. CASL (Canada&apos;s Anti-Spam Legislation) affects SaaS companies that send commercial electronic messages, requiring express or implied consent before sending marketing emails to Canadian recipients.
                </p>
              </div>

              <div className="bg-white/5 rounded-lg p-5 border border-white/10">
                <h3 className="text-white font-semibold mb-2">
                  Australia (Privacy Act &amp; Consumer Law)
                </h3>
                <p className="text-gray-400 text-sm">
                  The Australian Privacy Act 1988 and its Australian Privacy Principles (APPs) regulate the handling of personal information by organizations with annual turnover exceeding AUD $3 million. The Australian Consumer Law also applies to SaaS subscriptions, providing statutory guarantees around acceptable quality and fitness for purpose that cannot be excluded for consumer contracts. SaaS providers must include specific disclosures about cross-border data transfers.
                </p>
              </div>

              <div className="bg-white/5 rounded-lg p-5 border border-white/10">
                <h3 className="text-white font-semibold mb-2">
                  Brazil (LGPD)
                </h3>
                <p className="text-gray-400 text-sm">
                  Brazil&apos;s Lei Geral de Prote&ccedil;&atilde;o de Dados (LGPD) is modeled on GDPR and applies to any organization that processes personal data of individuals in Brazil, regardless of where the organization is based. LGPD requires specific legal bases for data processing, data subject rights, and appointment of a Data Protection Officer. SaaS companies serving Brazilian customers must include LGPD-compliant disclosures in their ToS and make a DPA available.
                </p>
              </div>
            </div>

            <p className="mt-4 text-gray-400">
              PolicyForge&apos;s{" "}
              <Link
                href="https://policyforge-one.vercel.app/tos"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                ToS generator
              </Link>{" "}
              allows you to select which jurisdictions you serve and automatically includes the relevant regional compliance language. For{" "}
              <Link
                href="/gdpr-privacy-policy-generator"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                GDPR-specific compliance
              </Link>, we also offer a dedicated generator.
            </p>
          </section>

          {/* ============================================================ */}
          {/* Section 6: SaaS ToS Checklist                                */}
          {/* ============================================================ */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              SaaS Terms of Service Checklist
            </h2>
            <p className="mb-4 text-gray-400">
              Use this checklist to audit your existing SaaS terms of service or as a specification when generating a new one. Every item below should be addressed for a SaaS product:
            </p>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 space-y-3">
              {[
                "Service description and scope of the subscription",
                "Acceptance of terms (clickwrap during signup)",
                "Eligibility requirements (age, jurisdiction, entity type)",
                "Account creation, authentication, and credential security",
                "Team and multi-user account administration rights",
                "Subscription tiers, pricing, and feature availability",
                "Billing cycles, auto-renewal, and payment failure handling",
                "Price change notification requirements (30 days minimum)",
                "Refund and cancellation policy with proration details",
                "Free trial terms and conversion to paid subscription",
                "Service Level Agreement (uptime, measurement, credits)",
                "Scheduled maintenance windows and notification process",
                "Limitation of liability with aggregate damage cap",
                "Warranty disclaimers (as-is, no fitness for purpose)",
                "Indemnification (mutual: IP infringement and user conduct)",
                "Intellectual property: provider software rights",
                "Intellectual property: customer data ownership",
                "Content processing license (host, display, back up)",
                "Acceptable use policy with specific prohibitions",
                "API terms: rate limits, versioning, deprecation notice",
                "Data handling: processing boundaries and security commitments",
                "Data Processing Agreement (DPA) availability and execution",
                "Sub-processor list and change notification mechanism",
                "Data portability: export formats and availability",
                "Post-cancellation data retention and deletion schedule",
                "Breach notification procedures and timelines",
                "Confidentiality obligations (mutual NDA provisions)",
                "Termination for cause and termination for convenience",
                "Effect of termination on data and surviving clauses",
                "Dispute resolution (arbitration vs. litigation)",
                "Governing law and jurisdiction selection",
                "Force majeure clause",
                "Assignment and change of control provisions",
                "Severability and waiver clauses",
                "Modification of terms and user notification mechanism",
                "Contact information for legal notices",
              ].map((item, i) => (
                <label
                  key={i}
                  className="flex items-start gap-3 text-gray-300 text-sm"
                >
                  <span className="mt-0.5 w-5 h-5 rounded border border-white/20 flex-shrink-0 flex items-center justify-center text-xs text-gray-500">
                    {i + 1}
                  </span>
                  <span>{item}</span>
                </label>
              ))}
            </div>
            <p className="mt-4 text-gray-400">
              PolicyForge&apos;s{" "}
              <Link
                href="https://policyforge-one.vercel.app/tos"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                SaaS ToS generator
              </Link>{" "}
              covers all 36 items automatically. You can also pair your terms of service with a{" "}
              <Link
                href="/privacy-policy-for-saas"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                SaaS privacy policy
              </Link>{" "}
              for complete legal coverage.
            </p>
          </section>

          {/* ============================================================ */}
          {/* Section 7: Price Comparison                                   */}
          {/* ============================================================ */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Cost of SaaS Terms of Service: PolicyForge vs. Alternatives
            </h2>
            <p className="mb-4">
              The cost of creating terms of service for a SaaS product varies dramatically depending on the approach. Here is a realistic comparison:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm mb-4">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-4 text-white font-semibold">
                      Approach
                    </th>
                    <th className="text-left py-3 px-4 text-white font-semibold">
                      Cost
                    </th>
                    <th className="text-left py-3 px-4 text-white font-semibold">
                      Time
                    </th>
                    <th className="text-left py-3 px-4 text-white font-semibold">
                      SaaS-Specific Clauses
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 font-medium text-gray-300">
                      Technology lawyer
                    </td>
                    <td className="py-3 px-4">$500 &ndash; $5,000+</td>
                    <td className="py-3 px-4">2 &ndash; 6 weeks</td>
                    <td className="py-3 px-4">
                      Fully customized to your business
                    </td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 font-medium text-gray-300">
                      Legal template marketplace
                    </td>
                    <td className="py-3 px-4">$50 &ndash; $300</td>
                    <td className="py-3 px-4">1 &ndash; 3 days (customization)</td>
                    <td className="py-3 px-4">
                      Generic template, manual customization required
                    </td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 font-medium text-gray-300">
                      Competing generators (Termly, iubenda)
                    </td>
                    <td className="py-3 px-4">$10 &ndash; $20/month</td>
                    <td className="py-3 px-4">15 &ndash; 30 minutes</td>
                    <td className="py-3 px-4">
                      Some SaaS clauses, limited customization
                    </td>
                  </tr>
                  <tr className="border-b border-white/5 bg-blue-500/5">
                    <td className="py-3 px-4 font-medium text-blue-300">
                      PolicyForge (Starter)
                    </td>
                    <td className="py-3 px-4 text-blue-300 font-semibold">
                      $4.99 one-time
                    </td>
                    <td className="py-3 px-4">5 &ndash; 10 minutes</td>
                    <td className="py-3 px-4">
                      SaaS-tailored: SLA, data portability, API terms
                    </td>
                  </tr>
                  <tr className="border-b border-white/5 bg-blue-500/5">
                    <td className="py-3 px-4 font-medium text-blue-300">
                      PolicyForge (Pro)
                    </td>
                    <td className="py-3 px-4 text-blue-300 font-semibold">
                      $12.99 one-time
                    </td>
                    <td className="py-3 px-4">5 &ndash; 10 minutes</td>
                    <td className="py-3 px-4">
                      Full SaaS suite: DPA, enterprise SLA, multi-jurisdiction
                    </td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 font-medium text-gray-300">
                      Copy from another SaaS company
                    </td>
                    <td className="py-3 px-4">Free</td>
                    <td className="py-3 px-4">30 minutes</td>
                    <td className="py-3 px-4 text-red-400">
                      Wrong for your business, potential copyright infringement
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-400">
              For early-stage SaaS companies, paying a technology lawyer $2,000+ for a custom ToS often is not feasible. PolicyForge bridges that gap: you get SaaS-specific terms of service for a fraction of the cost, and you can always have a lawyer review the generated document for your specific jurisdiction. At $4.99, the cost is less than a single hour of legal consultation.
            </p>
          </section>

          {/* ============================================================ */}
          {/* Section 8: Common Mistakes                                   */}
          {/* ============================================================ */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Common SaaS Terms of Service Mistakes
            </h2>
            <p className="mb-4">
              Building SaaS terms of service is more nuanced than many founders realize. Here are the most common mistakes that create legal exposure:
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-400 ml-2">
              <li>
                <strong className="text-gray-200">
                  No limitation of liability clause.
                </strong>{" "}
                This is the most expensive omission possible. A single enterprise customer claiming consequential damages from a multi-hour outage could seek damages that exceed your company&apos;s total revenue. Always cap aggregate liability to fees paid in the preceding 12 months.
              </li>
              <li>
                <strong className="text-gray-200">
                  Copying a B2C ToS for a B2B SaaS product.
                </strong>{" "}
                B2C terms focus on individual user rights and consumer protection. B2B SaaS needs enterprise-grade clauses around data processing, SLAs, mutual indemnification, and organizational account management. A consumer-oriented ToS will leave critical B2B concerns unaddressed.
              </li>
              <li>
                <strong className="text-gray-200">
                  No data portability or post-cancellation data access.
                </strong>{" "}
                If customers cannot export their data, you create vendor lock-in that erodes trust and may violate GDPR Article 20. Enterprise buyers specifically look for data portability provisions during procurement.
              </li>
              <li>
                <strong className="text-gray-200">
                  Overly aggressive ownership claims on customer data.
                </strong>{" "}
                Clauses that grant you broad rights to use, modify, or derive insights from customer data without explicit consent will alarm enterprise security reviewers and may violate GDPR. Be explicit that customer data belongs to the customer.
              </li>
              <li>
                <strong className="text-gray-200">
                  No change notification mechanism for ToS updates.
                </strong>{" "}
                If you update your ToS without notifying users and giving them reasonable time to review changes, courts may find that users never consented to the updated terms. Define a clear notification process (email, in-app notice) with a minimum notice period (30 days).
              </li>
              <li>
                <strong className="text-gray-200">
                  Missing auto-renewal disclosures.
                </strong>{" "}
                Several US states (California, New York, Illinois, and others) have specific auto-renewal disclosure requirements. Failing to clearly disclose auto-renewal terms, provide a simple cancellation mechanism, and send renewal reminders can result in regulatory penalties and mandatory refunds.
              </li>
              <li>
                <strong className="text-gray-200">
                  No API-specific terms.
                </strong>{" "}
                If your SaaS offers an API and your ToS does not address rate limits, versioning, deprecation, and data handling through API calls, you are creating an ungoverned channel that could expose you to abuse and liability.
              </li>
            </ul>
          </section>

          {/* ============================================================ */}
          {/* CTA Section 1                                                */}
          {/* ============================================================ */}
          <section className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-semibold text-white mb-3">
              Generate Your SaaS Terms of Service in Minutes
            </h2>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              PolicyForge generates terms of service specifically designed for SaaS companies. Answer a few questions about your product, billing model, and target markets, and get a comprehensive, professionally structured ToS that covers subscriptions, SLAs, data handling, IP, and multi-jurisdiction compliance.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://policyforge-one.vercel.app/tos"
                className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg text-lg hover:opacity-90 transition-opacity"
              >
                Generate SaaS Terms of Service
              </a>
              <Link
                href="/check"
                className="inline-block px-8 py-4 border border-white/20 text-white font-semibold rounded-lg text-lg hover:bg-white/5 transition-colors"
              >
                Check Your Existing ToS
              </Link>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Free tier available. Starter ($4.99) and Pro ($12.99) include SaaS-specific SLA, DPA, and enterprise clauses.
            </p>
          </section>

          {/* ============================================================ */}
          {/* Section 9: How to Enforce SaaS ToS                           */}
          {/* ============================================================ */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              How to Make Your SaaS Terms of Service Enforceable
            </h2>
            <p className="mb-4">
              Writing comprehensive terms is only half the equation. You must also ensure they are legally enforceable. Courts evaluate several factors when determining whether a customer actually agreed to your terms:
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-400 ml-2">
              <li>
                <strong className="text-gray-200">
                  Use clickwrap during signup.
                </strong>{" "}
                Require users to check a box next to &quot;I agree to the Terms of Service&quot; (with a hyperlink to the document) before creating an account. Clickwrap agreements have been consistently upheld by courts. Browsewrap (a passive footer link) is significantly less enforceable because you cannot prove the user saw the terms.
              </li>
              <li>
                <strong className="text-gray-200">
                  Record acceptance timestamps.
                </strong>{" "}
                Log the date, time, IP address, and user agent when each user accepts your terms. This creates an evidence trail that proves acceptance if a dispute arises. Store acceptance records separately from user account data so they survive account deletion.
              </li>
              <li>
                <strong className="text-gray-200">
                  Re-accept on material changes.
                </strong>{" "}
                When you make significant changes to your ToS, require active re-acceptance rather than relying on continued use. Display an in-app modal or interstitial that requires users to review and accept the updated terms before continuing.
              </li>
              <li>
                <strong className="text-gray-200">
                  Keep language clear and specific.
                </strong>{" "}
                Courts disfavor vague, overly broad, or unconscionable terms. A clause that says &quot;we may do anything at any time for any reason&quot; is less likely to be upheld than a specific, reasonable limitation. Write in plain English, use defined terms consistently, and avoid legal jargon where possible.
              </li>
              <li>
                <strong className="text-gray-200">
                  Maintain version history.
                </strong>{" "}
                Keep an archive of every version of your ToS with effective dates. In a dispute, you need to prove which version was in effect when the customer signed up and whether they accepted subsequent updates. A changelog or version number at the top of your ToS helps with this.
              </li>
            </ul>
          </section>

          {/* ============================================================ */}
          {/* Section 10: SaaS ToS Template Structure                      */}
          {/* ============================================================ */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Recommended SaaS Terms of Service Structure
            </h2>
            <p className="mb-4">
              A well-organized ToS is easier to navigate, understand, and enforce. Here is the recommended section order for a SaaS terms of service document:
            </p>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <ol className="space-y-3 text-gray-300 text-sm">
                {[
                  { section: "Definitions", desc: "Define key terms: Service, Customer, User, Customer Data, Subscription Term, etc." },
                  { section: "Acceptance and Eligibility", desc: "How users agree, minimum age, authorized users, entity representation." },
                  { section: "Service Description", desc: "What the service includes, feature tiers, and what is explicitly excluded." },
                  { section: "Account Registration", desc: "Signup requirements, credential security, team management, SSO provisions." },
                  { section: "Subscription and Billing", desc: "Pricing, payment terms, auto-renewal, upgrades, downgrades, failed payments." },
                  { section: "Free Trial Terms", desc: "Trial duration, feature access, automatic conversion, cancellation process." },
                  { section: "Service Level Agreement", desc: "Uptime target, measurement methodology, exclusions, credit remedies." },
                  { section: "Acceptable Use Policy", desc: "Prohibited activities, usage limits, content standards, enforcement actions." },
                  { section: "Intellectual Property", desc: "Provider IP rights, customer data ownership, content processing license." },
                  { section: "Data Handling and Security", desc: "Processing boundaries, encryption, access controls, breach notification, DPA reference." },
                  { section: "Confidentiality", desc: "Mutual confidentiality obligations, exceptions, survival period." },
                  { section: "Indemnification", desc: "Mutual indemnification: provider (IP infringement), customer (misuse, content)." },
                  { section: "Limitation of Liability", desc: "Liability cap, excluded damages, exceptions for willful misconduct." },
                  { section: "Warranty Disclaimer", desc: "As-is provision, no fitness for purpose, no uninterrupted service guarantee." },
                  { section: "Termination", desc: "For cause, for convenience, effect on data, refund obligations, surviving clauses." },
                  { section: "Data Portability and Deletion", desc: "Export options, post-cancellation access window, permanent deletion timeline." },
                  { section: "Dispute Resolution", desc: "Arbitration or litigation, class action waiver, informal resolution first." },
                  { section: "Governing Law", desc: "Applicable jurisdiction, venue for disputes, exclusions for injunctive relief." },
                  { section: "General Provisions", desc: "Severability, waiver, assignment, entire agreement, force majeure, notices." },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-blue-400 font-semibold min-w-[28px]">
                      {i + 1}.
                    </span>
                    <div>
                      <span className="text-white font-medium">
                        {item.section}
                      </span>
                      <span className="text-gray-500"> &mdash; </span>
                      <span className="text-gray-400">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <p className="mt-4 text-gray-400">
              PolicyForge follows this structure when generating your SaaS terms of service, ensuring every critical section is included and properly ordered. Generate yours now using our{" "}
              <a
                href="https://policyforge-one.vercel.app/tos"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                free SaaS ToS generator
              </a>.
            </p>
          </section>

          {/* ============================================================ */}
          {/* Section 11: FAQ                                              */}
          {/* ============================================================ */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqData.map((faq, i) => (
                <div
                  key={i}
                  className="p-5 bg-white/[0.03] border border-white/10 rounded-xl"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ============================================================ */}
          {/* CTA Section 2                                                */}
          {/* ============================================================ */}
          <section className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-semibold text-white mb-3">
              Stop Using a Generic ToS for Your SaaS
            </h2>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Your SaaS product handles customer data, guarantees uptime, and manages subscriptions. It deserves terms of service that address those realities. Generate a SaaS-specific ToS in under 10 minutes.
            </p>
            <a
              href="https://policyforge-one.vercel.app/tos"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg text-lg hover:opacity-90 transition-opacity"
            >
              Generate Your SaaS ToS Now &mdash; Free
            </a>
            <p className="text-sm text-gray-500 mt-4">
              Free tier covers basic ToS. Upgrade to Starter ($4.99) or Pro ($12.99) for SLA, DPA, and enterprise-grade clauses.
            </p>
          </section>

          {/* ============================================================ */}
          {/* Cross-links                                                  */}
          {/* ============================================================ */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Related Resources
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-6 bg-white/[0.03] border border-white/10 rounded-xl">
                <h3 className="text-lg font-bold text-white mb-2">
                  Privacy Policy for SaaS
                </h3>
                <p className="text-gray-400 text-sm mb-3">
                  Your SaaS product needs both a ToS and a privacy policy. Generate a GDPR and CCPA compliant privacy policy that covers data processing, sub-processors, DPAs, and international transfers.
                </p>
                <Link
                  href="/privacy-policy-for-saas"
                  className="text-blue-400 hover:text-blue-300 text-sm font-medium"
                >
                  Generate SaaS Privacy Policy &rarr;
                </Link>
              </div>
              <div className="p-6 bg-white/[0.03] border border-white/10 rounded-xl">
                <h3 className="text-lg font-bold text-white mb-2">
                  GDPR Privacy Policy Generator
                </h3>
                <p className="text-gray-400 text-sm mb-3">
                  Serving EU customers? Generate a privacy policy with full GDPR compliance: data subject rights, DPA provisions, sub-processor disclosures, and international transfer mechanisms.
                </p>
                <Link
                  href="/gdpr-privacy-policy-generator"
                  className="text-blue-400 hover:text-blue-300 text-sm font-medium"
                >
                  Generate GDPR Policy &rarr;
                </Link>
              </div>
              <div className="p-6 bg-white/[0.03] border border-white/10 rounded-xl">
                <h3 className="text-lg font-bold text-white mb-2">
                  Terms of Service Generator
                </h3>
                <p className="text-gray-400 text-sm mb-3">
                  Need a general-purpose ToS for a website, app, or ecommerce store? Our free generator covers all essential clauses with customization for your business type.
                </p>
                <Link
                  href="/terms-of-service-generator"
                  className="text-blue-400 hover:text-blue-300 text-sm font-medium"
                >
                  Generate General ToS &rarr;
                </Link>
              </div>
              <div className="p-6 bg-white/[0.03] border border-white/10 rounded-xl">
                <h3 className="text-lg font-bold text-white mb-2">
                  Privacy Compliance Checker
                </h3>
                <p className="text-gray-400 text-sm mb-3">
                  Scan any website&apos;s privacy policy and terms of service to see if they meet current legal requirements. Free instant compliance report with actionable recommendations.
                </p>
                <Link
                  href="/check"
                  className="text-blue-400 hover:text-blue-300 text-sm font-medium"
                >
                  Run Compliance Check &rarr;
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* ============================================================ */}
      {/* Footer                                                       */}
      {/* ============================================================ */}
      <footer className="border-t border-white/10 mt-16 py-8 text-center text-sm text-gray-500">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 mb-4 text-xs">
            <Link href="/" className="text-gray-500 hover:text-gray-300">
              Privacy Policy Generator
            </Link>
            <Link href="/tos" className="text-gray-500 hover:text-gray-300">
              Terms of Service Generator
            </Link>
            <Link href="/check" className="text-gray-500 hover:text-gray-300">
              Privacy Compliance Checker
            </Link>
            <Link
              href="/privacy-policy-for-saas"
              className="text-gray-500 hover:text-gray-300"
            >
              SaaS Privacy Policy
            </Link>
            <Link
              href="/terms-of-service-generator"
              className="text-gray-500 hover:text-gray-300"
            >
              ToS Generator
            </Link>
            <Link
              href="/gdpr-privacy-policy-generator"
              className="text-gray-500 hover:text-gray-300"
            >
              GDPR Generator
            </Link>
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
            Disclaimer: This generator provides template terms of service for
            informational purposes. Consult a qualified attorney for
            jurisdiction-specific legal advice.
          </p>
        </div>
      </footer>
    </div>
  );
}
