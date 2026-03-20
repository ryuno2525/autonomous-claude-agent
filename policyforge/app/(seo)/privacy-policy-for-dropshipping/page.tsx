import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Privacy Policy for Dropshipping Store | Free Template & Generator - PolicyForge",
  description:
    "Create a legally compliant privacy policy for your dropshipping store. Covers third-party supplier data sharing, international transfers to China, AliExpress/DSers/Spocket integrations, GDPR, CCPA, and marketing pixel disclosures.",
  keywords:
    "privacy policy for dropshipping, dropshipping privacy policy template, dropshipping store privacy policy, dropshipping GDPR compliance, dropshipping data sharing suppliers, AliExpress privacy policy, DSers privacy policy, dropshipping international data transfer, dropshipping CCPA compliance, dropshipping store legal requirements",
  openGraph: {
    title: "Free Privacy Policy for Your Dropshipping Store - PolicyForge",
    description:
      "Generate a GDPR & CCPA compliant privacy policy tailored for dropshipping. Covers supplier data sharing, international transfers, platform integrations, and marketing pixel disclosures.",
    type: "website",
  },
};

export default function PrivacyPolicyForDropshipping() {
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
          Privacy Policy for Your Dropshipping Store
        </h1>

        <p className="text-gray-400 text-lg mb-8">
          Dropshipping stores have a privacy compliance problem that
          traditional e-commerce stores do not: your customers&apos; personal
          data leaves your control entirely. When a customer places an order,
          their name, shipping address, phone number, and order details are
          transmitted to third-party suppliers &mdash; often located in China
          or other countries with no GDPR adequacy decision. Under GDPR, CCPA,
          and other privacy laws, you are legally required to disclose these
          data flows, name the categories of recipients, and explain the
          safeguards you have in place. Most dropshipping stores fail to do
          any of this.
        </p>

        <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-blue-800/40 rounded-xl p-6 mb-10">
          <h3 className="text-lg font-semibold text-white mb-2">
            Generate Your Dropshipping Privacy Policy in 2 Minutes
          </h3>
          <p className="text-gray-300 text-sm mb-4">
            PolicyForge creates customized privacy policies tailored to
            dropshipping stores. Covers supplier data sharing, international
            transfers, AliExpress/DSers/Spocket integrations, payment
            processors, marketing pixels, and full GDPR/CCPA compliance
            &mdash; all for $4.99 instead of $500+ for a lawyer.
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
              Check Your Compliance
            </Link>
          </div>
        </div>

        <div className="space-y-10 text-gray-300 leading-relaxed text-[17px]">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Why Dropshipping Stores Have Unique Privacy Policy Requirements
            </h2>
            <p className="mb-4">
              A standard e-commerce store controls its own supply chain. You
              hold inventory in your warehouse, pack orders yourself or through
              a known fulfillment partner, and ship via a carrier you have a
              direct contract with. The data flow is relatively simple:
              customer gives you data, you use it to fulfill the order, and it
              stays within your operational control.
            </p>
            <p className="mb-4">
              Dropshipping is fundamentally different. You never touch the
              product. When a customer orders from your store, their personal
              data is immediately transmitted to a third-party supplier who
              handles manufacturing, packaging, and shipping. That supplier
              may be located in Shenzhen, Guangzhou, or anywhere else in the
              world. They may use sub-contractors. They have their own data
              practices that you have no contractual control over unless you
              specifically negotiate one.
            </p>
            <p className="mb-4">
              This creates a cascade of privacy obligations that most
              dropshippers ignore entirely. Under GDPR, sharing customer data
              with a supplier makes that supplier a <strong className="text-white">data processor</strong>{" "}
              (or potentially a <strong className="text-white">joint controller</strong>),
              and you need a Data Processing Agreement with them. Under CCPA,
              transmitting customer data to a supplier in exchange for order
              fulfillment may constitute a &quot;sale&quot; of personal
              information, triggering opt-out obligations. Under both
              frameworks, you must disclose these transfers in your privacy
              policy &mdash; and most dropshipping stores disclose none of it.
            </p>
            <p>
              GDPR fines can reach &euro;20 million or 4% of global annual
              revenue. CCPA violations carry penalties of $2,500 per
              unintentional violation and $7,500 per intentional violation.
              Even small dropshipping stores have received enforcement notices
              from EU data protection authorities. A proper privacy policy is
              not optional &mdash; it is the minimum legal requirement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              The Dropshipping Data Flow Problem
            </h2>
            <p className="mb-4">
              To understand why dropshipping privacy policies are more complex,
              you need to map the actual data flow. In a typical dropshipping
              transaction, customer personal data touches at least four
              separate entities, each in a different jurisdiction with
              different data protection standards.
            </p>

            <div className="bg-gray-900/50 rounded-xl p-6 mb-4">
              <h3 className="text-lg font-semibold text-white mb-4">
                Data Flow: Customer Order to Delivery
              </h3>
              <div className="space-y-4">
                {[
                  {
                    step: "1",
                    entity: "Customer",
                    location: "Any country",
                    data: "Provides name, email, phone, shipping address, payment info",
                  },
                  {
                    step: "2",
                    entity: "Your Dropshipping Store",
                    location: "Your jurisdiction",
                    data: "Collects and stores all customer data; processes payment via Stripe/PayPal",
                  },
                  {
                    step: "3",
                    entity: "Fulfillment Platform (DSers, Spocket, CJDropshipping)",
                    location: "Varies (often China, Singapore, US)",
                    data: "Receives order details, customer name, shipping address, phone number",
                  },
                  {
                    step: "4",
                    entity: "Supplier (AliExpress seller, Alibaba manufacturer)",
                    location: "Usually China",
                    data: "Receives shipping address, customer name, phone number, order contents",
                  },
                  {
                    step: "5",
                    entity: "Shipping Carrier (ePacket, Yanwen, 4PX, local post)",
                    location: "China + destination country",
                    data: "Receives shipping address, phone number, package contents description",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-0.5">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">
                        {item.entity}{" "}
                        <span className="text-sm font-normal text-gray-400">
                          ({item.location})
                        </span>
                      </h4>
                      <p className="text-sm text-gray-400 mt-1">{item.data}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p>
              Every arrow in this data flow is a data transfer that must be
              disclosed in your privacy policy. Steps 3, 4, and 5 are almost
              always international transfers &mdash; meaning your EU
              customers&apos; data is being sent to countries without GDPR
              adequacy decisions. Your privacy policy must explain this clearly,
              identify the categories of recipients, state the countries
              involved, and describe the legal mechanisms you rely on for the
              transfer (Standard Contractual Clauses, consent, or Article 49
              derogations).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              What Data Dropshipping Stores Share With Suppliers
            </h2>
            <p className="mb-4">
              Most dropshippers underestimate how much personal data they
              transmit to suppliers. It is not just a shipping label. When you
              place an order through DSers, Spocket, CJDropshipping, or
              directly on AliExpress, the following data is typically shared:
            </p>

            <div className="space-y-4">
              <div className="bg-gray-900/50 rounded-xl p-5">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Customer Identity &amp; Contact Data
                </h3>
                <p className="text-sm text-gray-400 mb-3">
                  Required for shipping labels and carrier manifests.
                </p>
                <ul className="text-sm text-gray-300 space-y-1.5 list-disc list-inside">
                  <li>Full name (first and last)</li>
                  <li>Complete shipping address including postal code</li>
                  <li>Phone number (required by most international carriers)</li>
                  <li>Email address (some platforms share this for tracking notifications)</li>
                  <li>Country and state/province</li>
                </ul>
              </div>

              <div className="bg-gray-900/50 rounded-xl p-5">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Order &amp; Transaction Data
                </h3>
                <p className="text-sm text-gray-400 mb-3">
                  Shared with suppliers for fulfillment and inventory tracking.
                </p>
                <ul className="text-sm text-gray-300 space-y-1.5 list-disc list-inside">
                  <li>Product SKUs, quantities, and variants ordered</li>
                  <li>Order reference numbers and timestamps</li>
                  <li>Special instructions or gift messages</li>
                  <li>Return and refund request details</li>
                  <li>Customs declaration data (product descriptions, declared values)</li>
                </ul>
              </div>

              <div className="bg-gray-900/50 rounded-xl p-5">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Data You May Not Realize Is Being Shared
                </h3>
                <p className="text-sm text-gray-400 mb-3">
                  Platform integrations may share more than you expect.
                </p>
                <ul className="text-sm text-gray-300 space-y-1.5 list-disc list-inside">
                  <li>Customer IP addresses (logged by platform APIs)</li>
                  <li>Browser fingerprints and device data (via supplier tracking pages)</li>
                  <li>Purchase history patterns (visible in supplier dashboards)</li>
                  <li>Communication preferences and language settings</li>
                  <li>Tax identification numbers (for high-value shipments to certain countries)</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              International Data Transfers and GDPR Compliance
            </h2>
            <p className="mb-4">
              This is where most dropshipping stores face their biggest legal
              exposure. GDPR Chapter V strictly regulates the transfer of
              personal data outside the European Economic Area. China, where
              the majority of dropshipping suppliers are located, does not have
              a GDPR adequacy decision. Neither do most Southeast Asian
              countries commonly involved in dropshipping supply chains.
            </p>
            <p className="mb-4">
              To legally transfer EU customer data to a supplier in China, you
              need one of the following mechanisms in place:
            </p>

            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-white">
                  Standard Contractual Clauses (SCCs)
                </h4>
                <p className="text-sm text-gray-400">
                  The most common mechanism. These are pre-approved contract
                  terms that both you and your supplier sign, obligating the
                  supplier to protect EU personal data. However, getting an
                  AliExpress supplier in Shenzhen to sign SCCs is practically
                  impossible for most small dropshippers. You must disclose
                  in your privacy policy whether SCCs are in place and, if not,
                  what alternative safeguards you rely on.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-white">
                  Adequacy Decisions
                </h4>
                <p className="text-sm text-gray-400">
                  The EU Commission has granted adequacy to certain countries
                  (Japan, South Korea, UK, Canada, etc.), meaning data can flow
                  freely. If your supplier is in one of these countries, you do
                  not need additional safeguards. However, China, India,
                  Vietnam, and Turkey &mdash; common dropshipping origins
                  &mdash; do not have adequacy decisions.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-white">
                  Article 49 Derogations (Explicit Consent)
                </h4>
                <p className="text-sm text-gray-400">
                  As a fallback, GDPR Article 49 allows transfers when the data
                  subject has explicitly consented after being informed of the
                  risks, or when the transfer is necessary for the performance
                  of a contract. Many dropshipping stores rely on this
                  &mdash; arguing that sharing data with a supplier is necessary
                  to fulfill the customer&apos;s order. Your privacy policy
                  must clearly state this reliance and explain the specific
                  risks to the customer.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-white">
                  Transfer Impact Assessments (TIAs)
                </h4>
                <p className="text-sm text-gray-400">
                  Since the Schrems II ruling, GDPR requires a documented
                  Transfer Impact Assessment for data sent to countries without
                  adequacy decisions. You must evaluate the destination
                  country&apos;s surveillance laws and determine whether the
                  safeguards you have in place are effective. For China
                  specifically, this assessment is challenging given broad
                  government data access powers under Chinese law.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Platform-Specific Dropshipping Concerns
            </h2>
            <p className="mb-4">
              Your privacy policy must reflect the specific platform stack you
              use. Different dropshipping setups create different data flows,
              and your disclosures must be accurate for your actual
              configuration.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-900/50 rounded-xl p-5">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Shopify + DSers / Spocket / CJDropshipping
                </h3>
                <p className="text-sm text-gray-400 mb-3">
                  The most common dropshipping stack. DSers (the official
                  AliExpress dropshipping app) acts as a middleware that
                  receives your entire order payload &mdash; customer name,
                  address, phone number, and order details &mdash; and
                  transmits it to AliExpress suppliers. Your privacy policy
                  must disclose DSers as a data processor and AliExpress
                  sellers as sub-processors. Spocket works similarly but
                  sources from US/EU suppliers, which simplifies (but does not
                  eliminate) international transfer concerns. CJDropshipping
                  operates warehouses in China and the US, so you must
                  disclose both locations.
                </p>
              </div>

              <div className="bg-gray-900/50 rounded-xl p-5">
                <h3 className="text-lg font-semibold text-white mb-3">
                  WooCommerce + AliExpress / AliDropship
                </h3>
                <p className="text-sm text-gray-400 mb-3">
                  WooCommerce stores using AliDropship or similar plugins
                  push order data directly to AliExpress via API. The plugin
                  itself is a data processor, and AliExpress (Alibaba Group)
                  is another. WooCommerce stores also typically self-host,
                  meaning you must disclose your hosting provider (Bluehost,
                  SiteGround, etc.) as an additional data processor. Your
                  privacy policy needs to cover the WordPress ecosystem
                  &mdash; analytics plugins, caching services, and security
                  plugins all touch visitor data.
                </p>
              </div>

              <div className="bg-gray-900/50 rounded-xl p-5">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Standalone Stores (Custom Build or Headless)
                </h3>
                <p className="text-sm text-gray-400 mb-3">
                  If you run a custom-built dropshipping store using Medusa,
                  Saleor, or a headless setup with Shopify&apos;s Storefront
                  API, you have more control over data flows but also more
                  disclosure obligations. You must list every API integration
                  that receives customer data: your headless CMS, your hosting
                  provider, your payment gateway, your fulfillment API, and
                  your shipping label service. Each is a separate data
                  processor under GDPR.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              AliExpress and Alibaba Supplier Data Practices
            </h2>
            <p className="mb-4">
              AliExpress is owned by Alibaba Group, a Chinese corporation
              subject to Chinese data protection laws including the Personal
              Information Protection Law (PIPL) and the Cybersecurity Law.
              When you transmit EU or US customer data to an AliExpress
              supplier, that data enters the Chinese legal jurisdiction where
              government data access requests cannot be legally challenged in
              the same way as in the EU or US.
            </p>
            <p className="mb-4">
              Your privacy policy must disclose:
            </p>
            <div className="bg-gray-900/50 rounded-xl p-6">
              <div className="space-y-2 text-sm">
                {[
                  "That order fulfillment is handled by third-party suppliers, not by you directly",
                  "That suppliers may be located in China or other countries without GDPR adequacy",
                  "The specific categories of data shared with suppliers (names, addresses, phone numbers)",
                  "That AliExpress / Alibaba Group has its own privacy policy governing their data practices",
                  "The legal mechanism you rely on for the international transfer (SCCs, consent, or contractual necessity)",
                  "That you cannot fully control how suppliers handle data once received",
                  "Your process for vetting supplier data practices (if any)",
                  "How customers can request deletion of data held by suppliers",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">&#x2713;</span>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-4">
              Honesty matters here. If you cannot guarantee that your AliExpress
              supplier will delete customer data upon request &mdash; and in
              practice, most will not &mdash; your privacy policy should
              acknowledge this limitation rather than making false promises.
              GDPR regulators have specifically flagged &quot;empty
              promises&quot; about data deletion as an aggravating factor in
              enforcement actions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Marketing Pixels on Dropshipping Stores
            </h2>
            <p className="mb-4">
              Dropshipping stores are heavily dependent on paid advertising
              &mdash; Meta (Facebook/Instagram) ads, Google Shopping, and
              TikTok ads drive the vast majority of traffic. Each of these
              platforms requires a tracking pixel on your store, and each pixel
              is a separate data collection mechanism that must be disclosed.
            </p>

            <div className="bg-gray-900/50 rounded-xl p-6 mb-4">
              <h3 className="text-lg font-semibold text-white mb-4">
                Common Tracking Pixels on Dropshipping Stores
              </h3>
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <span className="text-blue-400 font-semibold">Meta Pixel (Facebook/Instagram)</span>
                  <p className="text-gray-400 mt-1">
                    Tracks page views, add-to-cart, initiate checkout, and
                    purchase events. Creates audience profiles for retargeting.
                    Sends data to Meta servers in the US. Requires explicit
                    consent for EU visitors under GDPR.
                  </p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <span className="text-blue-400 font-semibold">Google Ads / Google Analytics (GA4)</span>
                  <p className="text-gray-400 mt-1">
                    Conversion tracking, audience building, and behavioral
                    analytics. Google processes data globally. After the
                    Austrian DPA ruling, GA4 requires consent mode and IP
                    anonymization for EU compliance.
                  </p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <span className="text-blue-400 font-semibold">TikTok Pixel</span>
                  <p className="text-gray-400 mt-1">
                    TikTok&apos;s tracking pixel sends behavioral data to
                    ByteDance servers. Given TikTok&apos;s ownership structure,
                    data may be accessible from China. Multiple EU DPAs have
                    flagged TikTok pixel as requiring explicit consent and
                    enhanced disclosure.
                  </p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <span className="text-blue-400 font-semibold">Pinterest Tag / Snapchat Pixel</span>
                  <p className="text-gray-400 mt-1">
                    Additional conversion pixels used by some dropshipping
                    stores. Each is a separate data processor. Your privacy
                    policy must name each one and describe what data it
                    collects.
                  </p>
                </div>
              </div>
            </div>

            <p>
              For EU visitors, you must obtain consent before firing any of
              these pixels. That means implementing a cookie consent banner
              that blocks pixel loading until the visitor opts in. For
              California visitors under CCPA, these pixels may constitute
              &quot;sharing&quot; of personal information for cross-context
              behavioral advertising, which requires a &quot;Do Not
              Share&quot; opt-out mechanism.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Payment Processor Disclosures
            </h2>
            <p className="mb-4">
              Dropshipping stores process payments through Stripe, PayPal,
              Shopify Payments, or other gateways. Each is a data processor
              under GDPR and must be disclosed in your privacy policy. You do
              not store credit card numbers directly (payment processors
              tokenize them), but you must explain that payment data is
              processed by a third party.
            </p>

            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-white">Stripe</h4>
                <p className="text-sm text-gray-400">
                  Stripe processes card data, stores tokenized payment
                  information, and performs fraud analysis using machine
                  learning on behavioral data (typing patterns, device
                  fingerprints). Stripe&apos;s privacy policy and DPA must be
                  referenced. Stripe is certified under the EU-US Data Privacy
                  Framework.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-white">PayPal</h4>
                <p className="text-sm text-gray-400">
                  PayPal collects customer email, name, and payment details.
                  PayPal also performs risk analysis and may share data with
                  its affiliated companies globally. PayPal has its own GDPR
                  obligations as a data controller for its services.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-white">Shopify Payments</h4>
                <p className="text-sm text-gray-400">
                  Powered by Stripe, Shopify Payments stores payment tokens
                  and transaction records within Shopify&apos;s infrastructure.
                  If you use Shopify Payments, you benefit from Shopify&apos;s
                  existing DPA but must still disclose it in your privacy
                  policy.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              CCPA &quot;Sale of Personal Information&quot; and Dropshipping
            </h2>
            <p className="mb-4">
              The California Consumer Privacy Act defines &quot;sale&quot; of
              personal information broadly: any disclosure of personal
              information to a third party for monetary or other valuable
              consideration. When you share customer data with a dropshipping
              supplier in exchange for them fulfilling an order (which you
              profit from), this may constitute a &quot;sale&quot; under CCPA.
            </p>
            <p className="mb-4">
              This is not a settled legal question, but the risk is real.
              The California Attorney General&apos;s office has taken the
              position that sharing data with service providers must meet
              specific contractual requirements to avoid being classified as
              a sale. If your supplier agreement does not include the required
              CCPA service provider clauses &mdash; and most AliExpress
              supplier arrangements do not &mdash; you may be &quot;selling&quot;
              personal information without realizing it.
            </p>

            <div className="bg-gray-900/50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                CCPA Implications for Dropshipping Stores
              </h3>
              <div className="space-y-2 text-sm">
                {[
                  "Sharing customer data with suppliers may constitute a \"sale\" under CCPA's broad definition",
                  "You may need a \"Do Not Sell or Share My Personal Information\" link on your store",
                  "Marketing pixels (Meta, Google, TikTok) are almost certainly \"sharing\" under CPRA",
                  "You must disclose all categories of personal information shared in the past 12 months",
                  "Customers have the right to opt out of data sharing with suppliers (which may prevent order fulfillment)",
                  "You must honor deletion requests within 45 days, including directing suppliers to delete data",
                  "If you cannot ensure supplier compliance with deletion, you must disclose this limitation",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">&#x2713;</span>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Common Mistakes Dropshippers Make
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-white">
                  Pretending they fulfill orders themselves
                </h4>
                <p className="text-sm text-gray-400">
                  Many dropshipping stores use language like &quot;we ship your
                  order&quot; or &quot;our warehouse processes your
                  package.&quot; This is misleading and creates legal liability.
                  Your privacy policy must honestly disclose that fulfillment
                  is handled by third-party suppliers. GDPR regulators view
                  deceptive disclosures as an aggravating factor.
                </p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-white">
                  No disclosure of international data transfers
                </h4>
                <p className="text-sm text-gray-400">
                  If your supplier is in China and your customer is in Germany,
                  you are performing an international data transfer outside
                  the EEA. This requires explicit disclosure in your privacy
                  policy, identification of the legal transfer mechanism, and
                  (since Schrems II) a documented Transfer Impact Assessment.
                  Most dropshipping stores mention none of this.
                </p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-white">
                  Using a generic e-commerce privacy policy template
                </h4>
                <p className="text-sm text-gray-400">
                  Standard e-commerce templates assume you control your supply
                  chain. They do not include sections for supplier data
                  sharing, international transfers to non-adequate countries,
                  or the specific data categories shared for dropshipping
                  fulfillment. Using a generic template creates a false sense
                  of compliance.
                </p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-white">
                  No Data Processing Agreements with suppliers
                </h4>
                <p className="text-sm text-gray-400">
                  GDPR Article 28 requires a written Data Processing Agreement
                  with every entity that processes personal data on your
                  behalf. AliExpress does provide a DPA through its platform
                  terms, but individual suppliers on AliExpress typically do
                  not. If you use a fulfillment agent or direct supplier, you
                  need a separate DPA &mdash; and your privacy policy should
                  reference it.
                </p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-white">
                  Ignoring tracking pixel consent requirements
                </h4>
                <p className="text-sm text-gray-400">
                  Dropshipping stores rely heavily on Meta Pixel and TikTok
                  Pixel for advertising. Both require explicit consent before
                  firing for EU visitors. Many dropshippers install these
                  pixels without a cookie consent banner, creating immediate
                  ePrivacy Directive violations on every page load for every
                  EU visitor.
                </p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-white">
                  Not updating the policy when switching suppliers
                </h4>
                <p className="text-sm text-gray-400">
                  Dropshippers frequently switch suppliers, add new products
                  from new vendors, or change fulfillment platforms. Each
                  change alters the data flow and may introduce new
                  international transfers. Your privacy policy must be
                  updated to reflect these changes. A policy that references
                  a supplier you no longer use (or fails to mention one you
                  do use) is non-compliant.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Essential Sections for a Dropshipping Privacy Policy
            </h2>
            <p className="mb-4">
              A complete privacy policy for a dropshipping store must include
              all standard e-commerce privacy policy sections plus several
              dropshipping-specific disclosures. Missing any of these creates
              a compliance gap:
            </p>
            <div className="bg-gray-900/50 rounded-xl p-6">
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                {[
                  "Identity of the data controller (your business)",
                  "Types of personal data collected at each touchpoint",
                  "Disclosure that fulfillment is handled by third-party suppliers",
                  "Countries where suppliers and sub-processors are located",
                  "Legal mechanism for international data transfers",
                  "Data Processing Agreements and their coverage",
                  "Marketing pixel disclosures (Meta, Google, TikTok)",
                  "Payment processor identification (Stripe, PayPal)",
                  "Cookie consent and tracking opt-out mechanisms",
                  "CCPA \"sale\" analysis and opt-out rights",
                  "Customer rights under GDPR, CCPA, and applicable laws",
                  "Data retention periods for orders, accounts, and marketing",
                  "Limitations on enforcing deletion with third-party suppliers",
                  "How to contact you with privacy questions or complaints",
                  "Policy update notification procedures",
                  "Security measures for protecting customer data in transit",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">&#x2713;</span>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              PolicyForge vs. Generic Templates
            </h2>

            <div className="bg-gray-900/50 rounded-xl p-6">
              <div className="space-y-3 text-sm">
                <div className="grid grid-cols-3 gap-4 pb-3 border-b border-white/10 font-semibold text-white">
                  <span>Requirement</span>
                  <span className="text-center">Generic Template</span>
                  <span className="text-center text-blue-400">PolicyForge</span>
                </div>
                {[
                  { factor: "Supplier data sharing disclosure", generic: "Not included", pf: "Built-in" },
                  { factor: "International transfer mechanisms", generic: "Generic mention", pf: "Country-specific" },
                  { factor: "AliExpress/DSers disclosure", generic: "Not included", pf: "Platform-aware" },
                  { factor: "Marketing pixel coverage", generic: "Basic", pf: "Pixel-by-pixel" },
                  { factor: "CCPA \"sale\" analysis", generic: "Not addressed", pf: "Included" },
                  { factor: "GDPR Article 49 derogations", generic: "Not included", pf: "Covered" },
                  { factor: "Cost", generic: "Free (incomplete)", pf: "$4.99" },
                  { factor: "Time to generate", generic: "Copy-paste + edit hours", pf: "2 minutes" },
                ].map((row) => (
                  <div
                    key={row.factor}
                    className="grid grid-cols-3 gap-4 py-2 border-b border-white/5"
                  >
                    <span className="text-gray-300">{row.factor}</span>
                    <span className="text-center text-gray-400">{row.generic}</span>
                    <span className="text-center text-blue-400">{row.pf}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-4">
              Generic privacy policy templates are designed for businesses
              that control their own supply chain. They do not account for the
              unique data flows, international transfers, and supplier
              relationships inherent in dropshipping. PolicyForge generates
              policies that specifically address dropshipping data practices,
              saving you from the compliance gaps that generic templates
              create.
            </p>
          </section>

          <section className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-800/30 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-4 text-center">
              Create Your Dropshipping Privacy Policy Now
            </h2>
            <p className="text-gray-300 text-center mb-6">
              PolicyForge generates customized privacy policies for
              dropshipping stores. Covers supplier data sharing, international
              transfers, platform integrations, marketing pixels, GDPR, CCPA,
              and payment processor disclosures. Done in under 2 minutes for
              $4.99 &mdash; not $500.
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
                Check Your Compliance
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Do I need a different privacy policy for dropshipping vs.
                  regular e-commerce?
                </h3>
                <p>
                  Yes. Dropshipping involves sharing customer data with
                  third-party suppliers, often internationally. A standard
                  e-commerce privacy policy does not cover supplier data
                  sharing, international transfers to non-adequate countries,
                  or the specific legal mechanisms required for cross-border
                  data flows. Using a generic e-commerce template leaves
                  critical compliance gaps that can result in GDPR enforcement
                  action.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Is sharing customer data with AliExpress suppliers legal
                  under GDPR?
                </h3>
                <p>
                  It can be, but only if you have a proper legal basis for the
                  transfer. Since China does not have a GDPR adequacy decision,
                  you need either Standard Contractual Clauses, explicit
                  consent from the customer, or a valid Article 49 derogation
                  (such as contractual necessity). You must also conduct a
                  Transfer Impact Assessment documenting the risks. Simply
                  sharing data without these safeguards is a GDPR violation.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Does sharing customer data with suppliers count as
                  &quot;selling&quot; data under CCPA?
                </h3>
                <p>
                  Potentially. CCPA defines &quot;sale&quot; as disclosing
                  personal information for monetary or other valuable
                  consideration. When you share customer data with a supplier
                  who fulfills the order (from which you profit), this could
                  meet the definition. To avoid this classification, your
                  supplier agreement must include specific CCPA service
                  provider clauses. Without them, you may need a &quot;Do Not
                  Sell&quot; opt-out mechanism on your store.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Do I need to name my specific suppliers in my privacy policy?
                </h3>
                <p>
                  GDPR does not require naming specific suppliers, but it does
                  require disclosing the categories of recipients and the
                  countries where data is transferred. Stating &quot;third-party
                  fulfillment suppliers located in China&quot; is sufficient.
                  However, if you use identifiable platforms like AliExpress,
                  CJDropshipping, or Spocket, naming them provides better
                  transparency and strengthens your compliance position.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Can a customer refuse to have their data shared with my
                  supplier and still place an order?
                </h3>
                <p>
                  Under GDPR, if your legal basis for sharing data with the
                  supplier is contractual necessity (fulfilling the order),
                  the customer cannot opt out while still placing an order
                  &mdash; the data sharing is inherent to the service. However,
                  you must clearly explain this in your privacy policy before
                  they purchase. Under CCPA, if the sharing is classified as a
                  &quot;sale,&quot; the customer has the right to opt out,
                  which would effectively prevent you from fulfilling their
                  order. This tension is one of the unresolved challenges of
                  CCPA compliance for dropshipping.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Related Resources
            </h2>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <Link
                href="/privacy-policy-for-shopify-store"
                className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800/70 transition block"
              >
                <span className="text-blue-400 font-semibold">
                  Privacy Policy for Shopify Store
                </span>
                <p className="text-gray-400 mt-1">
                  Shopify-specific privacy policy covering apps, payments, and
                  platform data flows.
                </p>
              </Link>
              <Link
                href="/privacy-policy-for-ecommerce"
                className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800/70 transition block"
              >
                <span className="text-blue-400 font-semibold">
                  Privacy Policy for E-Commerce
                </span>
                <p className="text-gray-400 mt-1">
                  Comprehensive e-commerce privacy policy covering all
                  platforms and business models.
                </p>
              </Link>
              <Link
                href="/gdpr-privacy-policy-generator"
                className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800/70 transition block"
              >
                <span className="text-blue-400 font-semibold">
                  GDPR Privacy Policy Generator
                </span>
                <p className="text-gray-400 mt-1">
                  Full GDPR-compliant privacy policy with international
                  transfer disclosures.
                </p>
              </Link>
              <Link
                href="/ccpa-privacy-policy-generator"
                className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800/70 transition block"
              >
                <span className="text-blue-400 font-semibold">
                  CCPA Privacy Policy Generator
                </span>
                <p className="text-gray-400 mt-1">
                  California-compliant privacy policy with &quot;Do Not
                  Sell&quot; provisions and consumer rights.
                </p>
              </Link>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-500">
          <p>
            PolicyForge helps dropshipping store owners build compliant privacy
            policies.
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
        </div>
      </main>
    </div>
  );
}
