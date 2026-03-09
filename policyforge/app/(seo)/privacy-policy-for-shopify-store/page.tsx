import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Privacy Policy for Shopify Store | Free Generator & Template - PolicyForge",
  description:
    "Create a legally compliant privacy policy for your Shopify store in minutes. Covers Shopify Payments, customer order data, third-party apps, GDPR, CCPA, and cookie consent requirements for e-commerce.",
  keywords:
    "privacy policy for shopify store, shopify store privacy policy, shopify privacy policy template, shopify store GDPR compliance, shopify store privacy policy generator, ecommerce privacy policy shopify, shopify legal requirements, shopify data protection, shopify customer data policy, shopify store legal pages",
  openGraph: {
    title: "Free Privacy Policy for Your Shopify Store - PolicyForge",
    description:
      "Generate a GDPR & CCPA compliant privacy policy customized for your Shopify store. Covers payment processing, customer data, app integrations, and international compliance.",
    type: "website",
  },
};

export default function PrivacyPolicyForShopifyStore() {
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
          Privacy Policy for Your Shopify Store
        </h1>

        <p className="text-gray-400 text-lg mb-8">
          Every Shopify store collects personal data the moment a customer
          browses a product page, adds an item to their cart, or completes a
          purchase. Under GDPR, CCPA, and PCI DSS requirements, you are legally
          obligated to disclose how you collect, process, store, and share that
          data. A privacy policy is not optional &mdash; it is required by
          Shopify&apos;s own Terms of Service, by every major payment processor,
          and by privacy law in most jurisdictions worldwide.
        </p>

        <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-blue-800/40 rounded-xl p-6 mb-10">
          <h3 className="text-lg font-semibold text-white mb-2">
            Generate Your Shopify Store Privacy Policy in 2 Minutes
          </h3>
          <p className="text-gray-300 text-sm mb-4">
            PolicyForge creates customized privacy policies tailored to Shopify
            stores. Covers payment processing, customer accounts, order data,
            app integrations, marketing pixels, and full GDPR/CCPA compliance
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
              Why Your Shopify Store Needs a Privacy Policy
            </h2>
            <p className="mb-4">
              Running a Shopify store means you are processing customer data
              at every stage of the buying journey. When a visitor lands on
              your store, Shopify sets cookies and records their IP address,
              browser type, and browsing behavior. When they create an account
              or check out as a guest, you collect their name, email, phone
              number, and shipping address. When they pay, credit card
              information flows through Shopify Payments or a third-party
              payment gateway. Every one of these data points is regulated
              under modern privacy law.
            </p>
            <p className="mb-4">
              The GDPR applies to your Shopify store if even one customer is
              located in the European Union &mdash; regardless of where your
              business is based. The CCPA applies if you sell to California
              residents and meet revenue or data-volume thresholds. Canada&apos;s
              PIPEDA, Brazil&apos;s LGPD, and Australia&apos;s Privacy Act all
              impose similar requirements. If you sell internationally (and most
              Shopify stores do), you need a privacy policy that satisfies
              multiple regulatory frameworks simultaneously.
            </p>
            <p className="mb-4">
              Beyond legal requirements, Shopify&apos;s own Terms of Service
              mandate that merchants comply with applicable data protection
              laws. Payment processors including Stripe, PayPal, and Shop Pay
              require a visible privacy policy before they will process
              transactions. Google Shopping and Meta Ads both require a
              privacy policy URL before approving your product feed or ad
              account. Without one, you cannot advertise your store on the
              two largest digital advertising platforms.
            </p>
            <p>
              GDPR fines can reach &euro;20 million or 4% of global annual
              revenue. CCPA violations carry penalties of $2,500 per
              unintentional violation and $7,500 per intentional violation.
              Even small Shopify stores have received enforcement notices.
              The cost of generating a proper privacy policy is trivial
              compared to the risk of operating without one.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              What Data Does a Shopify Store Collect?
            </h2>
            <p className="mb-4">
              Most Shopify store owners underestimate the volume of personal
              data their store collects. It is not just the information
              customers type into forms. Shopify&apos;s platform, your installed
              apps, and your marketing integrations all collect data
              independently. Your privacy policy must disclose all of it.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-900/50 rounded-xl p-5">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Customer Identity Data
                </h3>
                <p className="text-sm text-gray-400 mb-3">
                  Collected at checkout, account creation, and through contact
                  forms.
                </p>
                <ul className="text-sm text-gray-300 space-y-1.5 list-disc list-inside">
                  <li>Full name, email address, and phone number</li>
                  <li>Billing and shipping addresses</li>
                  <li>Account login credentials (if customer accounts are enabled)</li>
                  <li>Date of birth (if collected for age-restricted products)</li>
                  <li>Company name and tax ID (for B2B orders)</li>
                </ul>
              </div>

              <div className="bg-gray-900/50 rounded-xl p-5">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Payment and Transaction Data
                </h3>
                <p className="text-sm text-gray-400 mb-3">
                  Processed through Shopify Payments, PayPal, or third-party
                  gateways.
                </p>
                <ul className="text-sm text-gray-300 space-y-1.5 list-disc list-inside">
                  <li>Credit and debit card numbers (tokenized by the payment processor)</li>
                  <li>PayPal, Apple Pay, Google Pay, or Shop Pay account identifiers</li>
                  <li>Transaction amounts, currency, and order timestamps</li>
                  <li>Refund, return, and chargeback records</li>
                  <li>Fraud analysis scores and risk indicators</li>
                </ul>
              </div>

              <div className="bg-gray-900/50 rounded-xl p-5">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Browsing and Behavioral Data
                </h3>
                <p className="text-sm text-gray-400 mb-3">
                  Collected automatically by Shopify&apos;s platform and
                  installed analytics tools.
                </p>
                <ul className="text-sm text-gray-300 space-y-1.5 list-disc list-inside">
                  <li>Pages visited, products viewed, and time on site</li>
                  <li>Search queries within your store</li>
                  <li>Add-to-cart and abandoned cart events</li>
                  <li>IP address and approximate geographic location</li>
                  <li>Device type, browser, operating system, and screen resolution</li>
                  <li>Referral source (Google, social media, direct, email link)</li>
                </ul>
              </div>

              <div className="bg-gray-900/50 rounded-xl p-5">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Marketing and Communication Data
                </h3>
                <p className="text-sm text-gray-400 mb-3">
                  Collected through newsletter signups, SMS opt-ins, and
                  advertising pixels.
                </p>
                <ul className="text-sm text-gray-300 space-y-1.5 list-disc list-inside">
                  <li>Email marketing subscription status and consent records</li>
                  <li>SMS opt-in consent and phone numbers</li>
                  <li>Meta Pixel and Google Ads conversion tracking data</li>
                  <li>Email open rates, click-throughs, and engagement metrics</li>
                  <li>Discount and coupon code usage history</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Shopify&apos;s Own Data Collection vs. Yours
            </h2>
            <p className="mb-4">
              One of the most confusing aspects of Shopify privacy compliance
              is the distinction between data that Shopify collects as a
              platform and data that you collect as a merchant. Shopify has
              its own privacy policy that covers its role as a data processor
              and platform provider. But that policy does not cover your
              responsibilities as a store owner.
            </p>
            <p className="mb-4">
              Under GDPR, you are the <strong className="text-white">data controller</strong>.
              You decide what data to collect and why. Shopify is a{" "}
              <strong className="text-white">data processor</strong> &mdash;
              they process data on your behalf according to your instructions.
              This means you need your own privacy policy that explains your
              data practices, names Shopify as a processor, and discloses every
              other third-party service that touches customer data.
            </p>
            <p>
              Shopify provides a basic privacy policy template in{" "}
              <strong className="text-white">Settings &gt; Policies</strong>,
              but it is intentionally generic. It does not mention your
              specific apps, marketing tools, or business practices. Relying
              solely on Shopify&apos;s template leaves significant compliance
              gaps, especially for GDPR and CCPA.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Third-Party Apps: The Hidden Compliance Risk
            </h2>
            <p className="mb-4">
              The average Shopify store has 6 to 8 installed apps. Each one is
              a separate data processor that accesses some portion of your
              customer data. Under GDPR Article 13, you must disclose every
              third party that receives personal data from your store. Most
              Shopify store owners fail to do this.
            </p>

            <div className="bg-gray-900/50 rounded-xl p-6 mb-4">
              <h3 className="text-lg font-semibold text-white mb-4">
                Common Shopify Apps That Access Customer Data
              </h3>
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <span className="text-blue-400 font-semibold">Klaviyo / Mailchimp / Omnisend</span>
                  <p className="text-gray-400 mt-1">Email marketing: receives customer emails, names, purchase history, browsing behavior, and engagement data.</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <span className="text-blue-400 font-semibold">Google Analytics (GA4)</span>
                  <p className="text-gray-400 mt-1">Analytics: collects page views, session data, conversion events, demographics, and device information.</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <span className="text-blue-400 font-semibold">Meta Pixel / TikTok Pixel</span>
                  <p className="text-gray-400 mt-1">Advertising: tracks page views, add-to-cart events, purchases, and creates audience profiles for retargeting.</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <span className="text-blue-400 font-semibold">Judge.me / Loox / Yotpo</span>
                  <p className="text-gray-400 mt-1">Reviews: collects customer names, emails, review text, photos, and links reviews to order data.</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <span className="text-blue-400 font-semibold">Recharge / Bold Subscriptions</span>
                  <p className="text-gray-400 mt-1">Subscriptions: stores recurring payment tokens, subscription preferences, and billing schedules.</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <span className="text-blue-400 font-semibold">Gorgias / Tidio / Zendesk</span>
                  <p className="text-gray-400 mt-1">Customer support: stores chat transcripts, support tickets, customer lookup data, and satisfaction scores.</p>
                </div>
              </div>
            </div>

            <p>
              Your privacy policy must name each app category (or specific
              apps) and explain what data they access and why. A generic
              statement like &quot;we use third-party services&quot; is not
              sufficient under GDPR. If you add or remove apps, your privacy
              policy must be updated accordingly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              GDPR Requirements for Shopify Stores
            </h2>
            <p className="mb-4">
              If any of your customers are in the EU or EEA, GDPR applies to
              your Shopify store. These are the specific requirements you must
              address in your privacy policy:
            </p>

            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-white">Lawful Basis for Processing</h4>
                <p className="text-sm text-gray-400">
                  State whether you process customer data based on consent,
                  contractual necessity (fulfilling an order), or legitimate
                  interest. Most Shopify stores use contractual necessity for
                  order fulfillment and consent for marketing emails. Each
                  purpose must have an explicitly stated legal basis.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-white">Data Subject Rights</h4>
                <p className="text-sm text-gray-400">
                  EU customers have the right to access, rectify, erase, restrict,
                  port, and object to processing of their personal data. Your
                  policy must list these rights and explain how customers can
                  exercise them. Shopify provides a customer data request tool
                  in the admin panel to help you respond to these requests
                  within the required 30-day window.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-white">Data Processing Agreements</h4>
                <p className="text-sm text-gray-400">
                  GDPR requires written contracts (DPAs) with every data
                  processor. Shopify provides a DPA automatically as part of
                  their Terms of Service. However, you also need DPAs with
                  every third-party app that accesses customer data. Most major
                  apps (Klaviyo, Mailchimp, Google) provide standard DPAs that
                  you should review and accept.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-white">Cookie Consent</h4>
                <p className="text-sm text-gray-400">
                  Shopify stores serving EU visitors must obtain consent before
                  setting non-essential cookies. This includes analytics cookies
                  (Google Analytics), advertising cookies (Meta Pixel), and
                  personalization cookies. You need a cookie consent banner
                  &mdash; Shopify offers a built-in Customer Privacy API, or
                  you can use apps like Pandectes, Consentmo, or CookieYes.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-white">International Data Transfers</h4>
                <p className="text-sm text-gray-400">
                  Shopify stores data on servers primarily in the US and Canada.
                  Transferring EU customer data outside the EEA requires legal
                  safeguards such as Standard Contractual Clauses (SCCs) or
                  relying on the EU-US Data Privacy Framework. Your privacy
                  policy must disclose where data is stored and what transfer
                  mechanisms are in place.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              CCPA Requirements for Shopify Stores
            </h2>
            <p className="mb-4">
              If you sell to California residents, the California Consumer
              Privacy Act (CCPA) and its amendment, the CPRA, impose additional
              obligations. Even if your Shopify store is based outside
              California, CCPA applies if you meet any of these thresholds:
              annual gross revenue over $25 million, buy/sell/share personal
              information of 100,000+ consumers, or derive 50%+ of revenue
              from selling personal information.
            </p>

            <div className="bg-gray-900/50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                CCPA Compliance Checklist for Shopify Stores
              </h3>
              <div className="space-y-2 text-sm">
                {[
                  "Disclose all categories of personal information collected in the past 12 months",
                  "Explain the business purpose for each category of data collection",
                  "List categories of third parties with whom data is shared",
                  'Provide a "Do Not Sell or Share My Personal Information" link if applicable',
                  "Honor consumer requests to know, delete, and opt-out within 45 days",
                  "Disclose financial incentives for data collection (e.g., loyalty programs, discounts for email signup)",
                  "Update your privacy policy at least once every 12 months",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">&#x2713;</span>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-4">
              Note that using Meta Pixel, Google Ads, or similar retargeting
              tools on your Shopify store may constitute &quot;selling&quot; or
              &quot;sharing&quot; personal information under CCPA, even if no
              money changes hands. If you run ads, you likely need a &quot;Do
              Not Sell&quot; link and mechanism on your store.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              How to Add a Privacy Policy to Your Shopify Store
            </h2>
            <p className="mb-4">
              Shopify makes it straightforward to add legal pages, but many
              store owners miss critical steps. Here is the complete process:
            </p>

            <div className="space-y-4">
              {[
                {
                  step: "1",
                  title: "Generate your privacy policy",
                  desc: "Use PolicyForge to create a comprehensive privacy policy that covers your specific Shopify apps, payment gateways, marketing tools, and data practices. A generic template will leave compliance gaps.",
                },
                {
                  step: "2",
                  title: "Paste it into Shopify Settings",
                  desc: "In your Shopify admin, go to Settings > Policies. Paste your privacy policy into the Privacy Policy field. Shopify will auto-generate a page at /policies/privacy-policy on your store domain.",
                },
                {
                  step: "3",
                  title: "Add the link to your store footer",
                  desc: "Go to Online Store > Navigation and edit your footer menu. Add a link titled \"Privacy Policy\" pointing to /policies/privacy-policy. This ensures it is visible on every page.",
                },
                {
                  step: "4",
                  title: "Link from email signup forms",
                  desc: "Every email capture form, pop-up, or newsletter signup must reference your privacy policy. Add text like \"By subscribing, you agree to our Privacy Policy\" with a direct link.",
                },
                {
                  step: "5",
                  title: "Configure your cookie consent banner",
                  desc: "Install a cookie consent app (Pandectes, Consentmo, or CookieYes) and configure it to link to your privacy policy. This is mandatory for EU visitors and recommended for all traffic.",
                },
                {
                  step: "6",
                  title: "Verify it appears at checkout",
                  desc: "Shopify automatically displays your privacy policy link on the checkout page once saved in Settings > Policies. Place a test order to confirm it appears correctly.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-0.5">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{item.title}</h4>
                    <p className="text-sm text-gray-400 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Shopify Store Privacy Policy: Essential Sections
            </h2>
            <p className="mb-4">
              A complete privacy policy for a Shopify store should include
              these sections. Missing any one of them creates a potential
              compliance gap:
            </p>
            <div className="bg-gray-900/50 rounded-xl p-6">
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                {[
                  "Identity of the data controller (your business)",
                  "Types of personal data collected",
                  "How data is collected (checkout, cookies, forms)",
                  "Purpose of data processing for each data type",
                  "Legal basis for processing (GDPR requirement)",
                  "Third-party data processors and app disclosures",
                  "Payment processor identification (Shopify Payments, PayPal)",
                  "Cookie policy and consent mechanism",
                  "Customer rights under GDPR, CCPA, and other laws",
                  "Data retention periods for orders, accounts, and marketing",
                  "International data transfer safeguards",
                  "How to contact you with privacy questions",
                  "How to request data access, correction, or deletion",
                  "Children\u2019s privacy (COPPA compliance if applicable)",
                  "Policy update notification procedures",
                  "Security measures for protecting customer data",
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
              Common Mistakes Shopify Store Owners Make
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-white">
                  Using Shopify&apos;s default template without customization
                </h4>
                <p className="text-sm text-gray-400">
                  Shopify&apos;s built-in template is a starting point, not a
                  finished product. It does not cover your specific app
                  integrations, marketing tools, or data flows. GDPR
                  regulators expect specificity, not boilerplate.
                </p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-white">
                  Not disclosing third-party app data sharing
                </h4>
                <p className="text-sm text-gray-400">
                  Every Shopify app that accesses customer data is a data
                  processor. Installing Klaviyo, Google Analytics, or Meta
                  Pixel without disclosing them in your privacy policy is a
                  direct GDPR violation. Most enforcement actions target this
                  exact gap.
                </p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-white">
                  No cookie consent banner for EU visitors
                </h4>
                <p className="text-sm text-gray-400">
                  Shopify does not provide a cookie consent banner by default.
                  If you serve EU customers and use analytics or advertising
                  cookies, you need a consent management platform. Without one,
                  you are violating the ePrivacy Directive.
                </p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-white">
                  Forgetting to update the policy when apps change
                </h4>
                <p className="text-sm text-gray-400">
                  Shopify store owners frequently install and remove apps
                  without updating their privacy policy. If you added a new
                  review app or switched email marketing tools, your policy
                  must reflect the change. Set a quarterly reminder to audit
                  your apps against your policy.
                </p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-white">
                  Ignoring dropshipping data flows
                </h4>
                <p className="text-sm text-gray-400">
                  If you dropship using DSers, Spocket, or Zendrop, customer
                  shipping addresses and order details are sent to third-party
                  suppliers, often in China. This is an international data
                  transfer that must be disclosed in your privacy policy with
                  appropriate safeguards noted.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              PolicyForge vs. Hiring a Lawyer
            </h2>

            <div className="bg-gray-900/50 rounded-xl p-6">
              <div className="space-y-3 text-sm">
                <div className="grid grid-cols-3 gap-4 pb-3 border-b border-white/10 font-semibold text-white">
                  <span>Factor</span>
                  <span className="text-center">Privacy Lawyer</span>
                  <span className="text-center text-blue-400">PolicyForge</span>
                </div>
                {[
                  { factor: "Cost", lawyer: "$500 - $2,000+", pf: "$4.99 - $12.99" },
                  { factor: "Time to completion", lawyer: "1 - 3 weeks", pf: "2 minutes" },
                  { factor: "Shopify-specific coverage", lawyer: "Varies by lawyer", pf: "Built-in" },
                  { factor: "App integration disclosures", lawyer: "Manual review needed", pf: "Included" },
                  { factor: "GDPR + CCPA compliance", lawyer: "Yes", pf: "Yes" },
                  { factor: "Updates when laws change", lawyer: "$200+/hour", pf: "Regenerate for free" },
                  { factor: "Suitable for stores under $500K/yr", lawyer: "Overkill", pf: "Perfect fit" },
                ].map((row) => (
                  <div
                    key={row.factor}
                    className="grid grid-cols-3 gap-4 py-2 border-b border-white/5"
                  >
                    <span className="text-gray-300">{row.factor}</span>
                    <span className="text-center text-gray-400">{row.lawyer}</span>
                    <span className="text-center text-blue-400">{row.pf}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-4">
              For Shopify stores doing under $500K in annual revenue, paying
              a lawyer $1,000+ for a privacy policy that needs updating every
              time you install a new app is not practical. PolicyForge
              generates a comprehensive, legally-informed policy in minutes
              that you can regenerate whenever your store changes.
            </p>
          </section>

          <section className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-800/30 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-4 text-center">
              Create Your Shopify Store Privacy Policy Now
            </h2>
            <p className="text-gray-300 text-center mb-6">
              PolicyForge generates customized privacy policies for Shopify
              stores. Covers payment processing, customer data, third-party
              apps, cookie consent, GDPR, CCPA, and international compliance.
              Done in under 2 minutes for $4.99 &mdash; not $500.
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
                  Does Shopify provide a privacy policy for my store?
                </h3>
                <p>
                  Shopify provides a basic privacy policy template in Settings
                  &gt; Policies, but it is generic and not tailored to your
                  store. It does not cover your specific app integrations,
                  marketing tools, or data collection practices. Shopify
                  explicitly states that merchants are responsible for their
                  own legal compliance.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Can I get fined for not having a privacy policy on my
                  Shopify store?
                </h3>
                <p>
                  Yes. GDPR fines can reach &euro;20 million or 4% of annual
                  revenue. CCPA penalties are $2,500&ndash;$7,500 per
                  violation. Beyond regulatory fines, payment processors can
                  suspend your account, and advertising platforms (Google,
                  Meta) can reject your ad campaigns. The practical business
                  impact of not having a privacy policy can be severe.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Do I need a separate cookie policy for my Shopify store?
                </h3>
                <p>
                  You can include cookie disclosures within your privacy
                  policy or create a separate{" "}
                  <Link
                    href="/cookie-policy-generator"
                    className="text-blue-400 hover:underline"
                  >
                    cookie policy
                  </Link>
                  . If you serve EU customers, you need a cookie consent
                  banner regardless. Your policy must list the specific
                  cookies your store sets, their purpose, and their duration.
                  Shopify&apos;s own cookies, analytics cookies, and
                  advertising pixels must all be disclosed.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  How often should I update my Shopify store&apos;s privacy
                  policy?
                </h3>
                <p>
                  At minimum, review your privacy policy quarterly. Update it
                  immediately when you install or remove a Shopify app that
                  accesses customer data, change payment processors, add new
                  marketing integrations, start selling in new jurisdictions,
                  or when privacy laws are updated. CCPA requires that your
                  policy be updated at least annually.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  What about dropshipping stores? Do they need a different
                  privacy policy?
                </h3>
                <p>
                  Dropshipping stores have additional disclosure requirements
                  because customer data (especially shipping addresses) is
                  shared with third-party suppliers, often located
                  internationally. Your privacy policy must disclose that
                  order fulfillment involves third-party suppliers, identify
                  the countries where data may be transferred, and explain
                  the safeguards in place for those transfers.
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
                href="/privacy-policy-for-ecommerce"
                className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800/70 transition block"
              >
                <span className="text-blue-400 font-semibold">
                  Privacy Policy for E-Commerce
                </span>
                <p className="text-gray-400 mt-1">
                  Comprehensive e-commerce privacy policy covering all
                  platforms.
                </p>
              </Link>
              <Link
                href="/privacy-policy-for-shopify"
                className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800/70 transition block"
              >
                <span className="text-blue-400 font-semibold">
                  Shopify Privacy Policy Guide
                </span>
                <p className="text-gray-400 mt-1">
                  Detailed breakdown of Shopify-specific data flows and app
                  integrations.
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
                  Full GDPR-compliant privacy policy for any website or
                  service.
                </p>
              </Link>
              <Link
                href="/cookie-policy-generator"
                className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800/70 transition block"
              >
                <span className="text-blue-400 font-semibold">
                  Cookie Policy Generator
                </span>
                <p className="text-gray-400 mt-1">
                  Generate a cookie policy to complement your Shopify privacy
                  policy.
                </p>
              </Link>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-500">
          <p>
            PolicyForge helps Shopify store owners build compliant privacy
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
