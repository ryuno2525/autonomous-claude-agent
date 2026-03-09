import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy for Shopify Stores | Free Generator - PolicyForge",
  description:
    "Generate a free privacy policy for your Shopify store. Covers Shopify Payments, customer data, order tracking, marketing emails, app integrations, GDPR & CCPA compliance.",
  keywords:
    "shopify privacy policy, shopify privacy policy generator, shopify store privacy policy, shopify GDPR, shopify privacy policy template, shopify legal pages, shopify compliance, shopify cookie consent, shopify data protection",
  openGraph: {
    title: "Free Privacy Policy Generator for Shopify Stores",
    description:
      "Create a GDPR & CCPA compliant privacy policy for your Shopify store in minutes. Covers Shopify Payments, app integrations, marketing data, and cookie consent.",
    type: "website",
  },
};

const SHOPIFY_DATA_TYPES = [
  {
    category: "Customer Information",
    items: [
      "Full name and billing/shipping addresses",
      "Email address and phone number",
      "Account login credentials (if customer accounts enabled)",
      "Order history and purchase preferences",
      "Wishlist and saved cart items",
    ],
  },
  {
    category: "Payment Data",
    items: [
      "Credit/debit card details (processed by Shopify Payments)",
      "PayPal, Apple Pay, or Google Pay tokens",
      "Billing address for fraud verification",
      "Transaction amounts, currency, and timestamps",
      "Refund and chargeback records",
    ],
  },
  {
    category: "Browsing Behavior",
    items: [
      "Pages viewed and products browsed",
      "Time spent on site and session duration",
      "Search queries within your store",
      "Add-to-cart events and abandoned carts",
      "Referral source (how they found your store)",
    ],
  },
  {
    category: "Device & Technical Data",
    items: [
      "IP address and approximate geolocation",
      "Browser type and version",
      "Operating system and device type",
      "Screen resolution and language preference",
      "Cookies and tracking pixel identifiers",
    ],
  },
  {
    category: "Marketing Data",
    items: [
      "Email subscription status and preferences",
      "SMS opt-in consent records",
      "Discount code usage history",
      "Email open rates and click-through data",
      "Ad interaction data from Meta Pixel or Google Ads",
    ],
  },
  {
    category: "Shipping & Fulfillment",
    items: [
      "Delivery addresses and shipping preferences",
      "Carrier tracking numbers and delivery status",
      "Customs declaration data (international orders)",
      "Return and exchange request records",
      "Delivery signature confirmations",
    ],
  },
];

const SHOPIFY_APP_INTEGRATIONS = [
  {
    name: "Klaviyo",
    category: "Email & SMS Marketing",
    data: "Customer emails, purchase history, browsing behavior, segment membership, campaign engagement metrics",
  },
  {
    name: "Google Analytics (GA4)",
    category: "Analytics",
    data: "Page views, session data, conversion events, user demographics, traffic sources, device information",
  },
  {
    name: "Meta Pixel (Facebook)",
    category: "Advertising",
    data: "Page views, add-to-cart events, purchases, customer email hashes for Custom Audiences, browsing behavior",
  },
  {
    name: "Judge.me / Loox",
    category: "Product Reviews",
    data: "Customer name, email, order details, review text, uploaded photos, star ratings",
  },
  {
    name: "Oberlo / DSers",
    category: "Dropshipping",
    data: "Customer shipping addresses, order details, product selections shared with AliExpress suppliers",
  },
  {
    name: "Mailchimp",
    category: "Email Marketing",
    data: "Customer emails, names, purchase history, email engagement data, audience segments",
  },
  {
    name: "Privy / Justuno",
    category: "Pop-ups & Conversion",
    data: "Email captures from pop-ups, spin-the-wheel entries, exit intent interactions, conversion data",
  },
  {
    name: "Recharge / Bold Subscriptions",
    category: "Subscriptions",
    data: "Recurring payment schedules, subscription preferences, payment method tokens, cancellation reasons",
  },
  {
    name: "ShipStation / Shippo",
    category: "Shipping",
    data: "Customer addresses, package weights, carrier selections, tracking numbers, delivery confirmations",
  },
  {
    name: "Tidio / Gorgias",
    category: "Customer Support",
    data: "Chat transcripts, customer emails, support ticket content, order lookup data, satisfaction ratings",
  },
];

const SHOPIFY_SETUP_STEPS = [
  {
    step: "1",
    title: "Generate your privacy policy",
    description:
      "Use PolicyForge to create a comprehensive privacy policy tailored to your Shopify store. Include your specific app integrations, data collection practices, and business details.",
  },
  {
    step: "2",
    title: "Add a Legal page in Shopify Admin",
    description:
      'Go to Settings > Policies in your Shopify admin panel. Shopify has four built-in policy fields: Privacy Policy, Refund Policy, Shipping Policy, and Terms of Service. Paste your generated policy into the Privacy Policy field.',
  },
  {
    step: "3",
    title: "Add the policy link to your footer",
    description:
      'Navigate to Online Store > Navigation. Edit your footer menu and add a link to your privacy policy page. Shopify auto-generates a /policies/privacy-policy URL when you save a policy in Settings.',
  },
  {
    step: "4",
    title: "Add to your checkout page",
    description:
      "Shopify automatically links your privacy policy on the checkout page once you save it in Settings > Policies. Customers see this before completing their purchase, which is required by payment processors.",
  },
  {
    step: "5",
    title: "Link from your cookie consent banner",
    description:
      'If you use a cookie consent app (required for EU visitors), configure it to link directly to your privacy policy. The banner should reference your policy URL and allow visitors to manage their cookie preferences.',
  },
  {
    step: "6",
    title: "Update your email marketing signup forms",
    description:
      'Any email capture form, pop-up, or newsletter signup on your store should include a visible link to your privacy policy with text like "By subscribing, you agree to our Privacy Policy." This satisfies GDPR consent requirements.',
  },
];

const COMPARISON_ROWS = [
  { feature: "Shopify-specific data flows", shopify: false, policyforge: true },
  { feature: "Third-party app disclosures", shopify: false, policyforge: true },
  { feature: "Named app integrations (Klaviyo, Meta, etc.)", shopify: false, policyforge: true },
  { feature: "GDPR legal basis for processing", shopify: "Basic", policyforge: true },
  { feature: "CCPA consumer rights section", shopify: false, policyforge: true },
  { feature: "Cookie consent details", shopify: false, policyforge: true },
  { feature: "Data retention schedules", shopify: false, policyforge: true },
  { feature: "International data transfer clauses", shopify: false, policyforge: true },
  { feature: "Shopify Payments disclosure", shopify: "Generic", policyforge: true },
  { feature: "Customized to your store", shopify: false, policyforge: true },
  { feature: "Regular updates for law changes", shopify: false, policyforge: "Pro" },
];

const FAQ_ITEMS = [
  {
    q: "Does Shopify require a privacy policy?",
    a: "Yes. Shopify's Terms of Service require all merchants to comply with applicable privacy laws, which means having a privacy policy. Beyond Shopify's own requirement, payment processors like Shopify Payments, PayPal, and Stripe all mandate that merchants display a privacy policy. If you sell to EU customers, GDPR makes it a legal requirement with fines up to 4% of annual revenue for non-compliance.",
  },
  {
    q: "Is Shopify's built-in privacy policy template enough?",
    a: "For most stores, no. Shopify's template is a generic starting point that doesn't cover your specific app integrations, marketing tools, or data collection practices. It doesn't mention Klaviyo, Google Analytics, Meta Pixel, or any other third-party service by name. GDPR requires you to disclose each data processor, which means a generic template likely falls short of legal requirements if you use any apps beyond core Shopify.",
  },
  {
    q: "What Shopify apps need to be disclosed in my privacy policy?",
    a: "Any app that accesses customer data must be disclosed. This includes email marketing tools (Klaviyo, Mailchimp), analytics (Google Analytics), advertising pixels (Meta, TikTok, Pinterest), review apps (Judge.me, Loox, Yotpo), customer support tools (Gorgias, Tidio), subscription apps (Recharge, Bold), and shipping integrations (ShipStation, Shippo). Even apps that only read data — like reporting tools — should be listed.",
  },
  {
    q: "Do I need cookie consent for my Shopify store?",
    a: "If you have visitors from the EU (which most online stores do), yes. GDPR and the ePrivacy Directive require you to get explicit consent before setting non-essential cookies. This includes Google Analytics, Meta Pixel, and most marketing tools. Shopify doesn't include a cookie consent banner by default — you need a third-party app like Pandectes, Consentmo, or Cookie Banner by Avada.",
  },
  {
    q: "How does Shopify Payments handle customer data?",
    a: "Shopify Payments (powered by Stripe) processes credit card data on Shopify's PCI-compliant servers. As a merchant, you never directly access full card numbers. However, you do receive and store billing addresses, transaction amounts, and partial card details (last 4 digits). Your privacy policy must explain that payment processing is handled by Shopify Payments and describe what payment-related data you retain.",
  },
  {
    q: "Does my Shopify store need to comply with CCPA?",
    a: "If California residents can purchase from your store — which is true for virtually all US-based Shopify stores — CCPA may apply if your business meets any of these thresholds: annual gross revenue over $25 million, buying/selling/sharing personal data of 100,000+ consumers, or deriving 50%+ of revenue from selling personal information. Even below these thresholds, including CCPA provisions shows good faith compliance.",
  },
  {
    q: "Where should I display my privacy policy on my Shopify store?",
    a: "At minimum, your privacy policy should be linked in your store's footer, on the checkout page (Shopify does this automatically when you save a policy in Settings), in all email signup forms, and in your cookie consent banner. Best practice is to also include it in your account registration page, contact page, and any data collection form. Shopify creates a dedicated /policies/privacy-policy URL when you add your policy in the admin.",
  },
  {
    q: "How often should I update my Shopify store's privacy policy?",
    a: "Update your privacy policy whenever you: install or remove a Shopify app that handles customer data, change email marketing providers, add new payment methods, start selling to new geographic regions, change how you handle customer data, or when privacy laws change. At minimum, review your policy quarterly. PolicyForge Pro includes notifications when major privacy law changes affect your store.",
  },
];

export default function PrivacyPolicyForShopify() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#ededed]">
      <header className="border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
              P
            </div>
            <span className="text-white font-semibold text-lg">PolicyForge</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link href="/check" className="text-sm text-gray-400 hover:text-white transition-colors">
              Compliance Checker
            </Link>
            <Link
              href="/"
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              Generate Policy
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-4">
          <span className="px-3 py-1 bg-green-500/10 text-green-400 text-xs font-medium rounded-full border border-green-500/20">
            Shopify-Specific Compliance
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Privacy Policy Generator for Shopify Stores
        </h1>
        <p className="text-xl text-gray-400 mb-8">
          Your Shopify store collects customer data at every step &mdash; browsing, checkout, email signups, and app
          integrations. Generate a privacy policy that covers all of it, and actually satisfies GDPR, CCPA, and payment
          processor requirements.
        </p>

        <div className="flex flex-wrap gap-3 mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg text-lg hover:opacity-90 transition-opacity"
          >
            Generate Your Shopify Privacy Policy
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <Link
            href="/check"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-lg text-lg hover:bg-white/20 transition-colors"
          >
            Scan Your Current Policy
          </Link>
        </div>

        <div className="space-y-12 text-gray-300 leading-relaxed">
          {/* Why Shopify stores need a privacy policy */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Why Your Shopify Store Needs a Privacy Policy
            </h2>
            <p className="mb-4">
              Running a Shopify store without a privacy policy is not just risky &mdash; it can get your payment
              processing shut down, your store suspended, and your business hit with regulatory fines. Here are the
              concrete reasons why every Shopify merchant needs one:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                  <span className="text-green-400 text-lg">$</span> Payment Processors Require It
                </h3>
                <p className="text-sm text-gray-400">
                  Shopify Payments, PayPal, Stripe, and every major payment processor require merchants to have a
                  visible privacy policy before they approve your account. Without one, your ability to accept payments
                  can be suspended. Shopify Payments specifically references this in their{" "}
                  <span className="text-white">Acceptable Use Policy</span>.
                </p>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                  <span className="text-red-400 text-lg">!</span> GDPR Fines Up to 4% of Revenue
                </h3>
                <p className="text-sm text-gray-400">
                  If anyone in the EU visits your store &mdash; which is virtually guaranteed for any online shop
                  &mdash; GDPR applies regardless of where your business is located. Violations carry fines up to
                  &euro;20 million or 4% of global annual revenue, whichever is higher. Even small stores have received
                  enforcement actions.
                </p>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                  <span className="text-yellow-400 text-lg">~</span> CCPA Penalties for California Sales
                </h3>
                <p className="text-sm text-gray-400">
                  Selling to California customers without CCPA disclosures can result in penalties of $2,500 per
                  unintentional violation and $7,500 per intentional violation. With California&apos;s large consumer
                  population, this adds up quickly for any store with US customers.
                </p>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                  <span className="text-blue-400 text-lg">#</span> Shopify&apos;s Own Requirements
                </h3>
                <p className="text-sm text-gray-400">
                  Shopify&apos;s Terms of Service require merchants to comply with all applicable privacy laws. While
                  Shopify provides a basic template in Settings &gt; Policies, they explicitly state it is a starting
                  point and that merchants are responsible for ensuring their policy is legally adequate for their
                  specific business.
                </p>
              </div>
            </div>
            <p>
              Beyond legal requirements, a clear privacy policy builds customer trust. A 2024 Baymard Institute study
              found that 18% of online shoppers abandon their cart because they don&apos;t trust the site with their
              payment information. A visible, professional privacy policy directly addresses this hesitation.
            </p>
          </section>

          {/* What data Shopify stores collect */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              What Data Does Your Shopify Store Collect?
            </h2>
            <p className="mb-6">
              Shopify stores collect far more data than most merchants realize. Between customer accounts, checkout
              forms, browsing analytics, and app integrations, your store likely processes dozens of data points per
              visitor. Your privacy policy must disclose each category. Here is a comprehensive breakdown:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {SHOPIFY_DATA_TYPES.map((category) => (
                <div key={category.category} className="p-4 bg-white/5 border border-white/10 rounded-lg">
                  <h3 className="font-semibold text-white mb-2">{category.category}</h3>
                  <ul className="space-y-1">
                    {category.items.map((item) => (
                      <li key={item} className="text-sm text-gray-400 flex items-start gap-2">
                        <span className="text-blue-400 mt-0.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Shopify app integrations */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Shopify App Integrations You Must Disclose
            </h2>
            <p className="mb-4">
              Every Shopify app that accesses customer data is a third-party data processor under GDPR. Your privacy
              policy must name each service, explain what data it receives, and state why. This is one of the biggest
              gaps in Shopify&apos;s built-in template &mdash; it doesn&apos;t mention any specific apps. Here are the
              most common integrations that need disclosure:
            </p>
            <div className="space-y-3 mb-4">
              {SHOPIFY_APP_INTEGRATIONS.map((app) => (
                <div key={app.name} className="p-4 bg-white/5 border border-white/10 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-white text-sm">{app.name}</h3>
                    <span className="text-xs text-gray-500 bg-white/5 px-2 py-0.5 rounded">{app.category}</span>
                  </div>
                  <p className="text-sm text-gray-400">
                    <span className="text-gray-500">Data shared:</span> {app.data}
                  </p>
                </div>
              ))}
            </div>
            <div className="p-4 bg-yellow-500/5 border border-yellow-500/20 rounded-lg">
              <p className="text-sm text-yellow-300">
                <strong>Important:</strong> This is not an exhaustive list. Check your Shopify Admin &gt; Settings &gt;
                Apps and sales channels to see every app with access to your store data. Each one that reads or writes
                customer information should be named in your privacy policy.
              </p>
            </div>
          </section>

          {/* Shopify Payments and payment data */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Shopify Payments &amp; Payment Data Handling
            </h2>
            <p className="mb-4">
              Shopify Payments is powered by Stripe and handles credit card processing on PCI DSS Level 1 compliant
              servers &mdash; the highest level of payment security certification. As a merchant, you never directly
              see or store full credit card numbers. However, your privacy policy still needs to address payment data
              because:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1 font-bold">1.</span>
                <span>
                  <strong className="text-white">You receive partial card data</strong> &mdash; Shopify shows you the
                  last 4 digits, card brand, and expiration date for order management and fraud review purposes. This
                  constitutes personal data under GDPR.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1 font-bold">2.</span>
                <span>
                  <strong className="text-white">Billing addresses are stored</strong> &mdash; Full billing addresses
                  associated with payment methods are stored in your Shopify admin alongside orders.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1 font-bold">3.</span>
                <span>
                  <strong className="text-white">Transaction records persist</strong> &mdash; Shopify retains
                  transaction records for legal and tax compliance. Your policy should state how long financial records
                  are kept (typically 7 years for tax purposes).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1 font-bold">4.</span>
                <span>
                  <strong className="text-white">Additional payment methods</strong> &mdash; If you accept PayPal, Shop
                  Pay, Apple Pay, Google Pay, or Buy Now Pay Later services (Afterpay, Klarna), each is a separate data
                  processor that must be disclosed.
                </span>
              </li>
            </ul>
            <p className="text-sm text-gray-400">
              Your privacy policy should clearly state that payment processing is handled by Shopify Payments (Stripe),
              that you do not store full card numbers, and should link to Shopify&apos;s and Stripe&apos;s own privacy
              policies for transparency.
            </p>
          </section>

          {/* Cookie consent requirements */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Cookie Consent Requirements for Shopify Stores
            </h2>
            <p className="mb-4">
              If your Shopify store has visitors from the EU &mdash; and every online store does &mdash; you need a
              cookie consent banner. The GDPR and ePrivacy Directive require explicit, informed consent before setting
              non-essential cookies. Shopify does not include a cookie consent banner by default, which means most
              Shopify stores are technically non-compliant out of the box.
            </p>
            <div className="mb-4">
              <h3 className="font-semibold text-white mb-3">Cookies your Shopify store likely sets:</h3>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="p-3 bg-white/5 rounded-lg">
                  <p className="text-sm font-medium text-green-400 mb-1">Essential (No consent needed)</p>
                  <ul className="text-xs text-gray-400 space-y-1">
                    <li>• _shopify_s / _shopify_y &mdash; Session and visitor tracking</li>
                    <li>• cart / cart_ts &mdash; Shopping cart contents</li>
                    <li>• _shopify_fs &mdash; Sign-up attribution for landing page</li>
                    <li>• secure_customer_sig &mdash; Customer login state</li>
                  </ul>
                </div>
                <div className="p-3 bg-white/5 rounded-lg">
                  <p className="text-sm font-medium text-yellow-400 mb-1">Non-Essential (Consent required)</p>
                  <ul className="text-xs text-gray-400 space-y-1">
                    <li>• _ga / _gid &mdash; Google Analytics tracking</li>
                    <li>• _fbp / _fbc &mdash; Meta (Facebook) Pixel</li>
                    <li>• _tt_* &mdash; TikTok Pixel</li>
                    <li>• klaviyo cookies &mdash; Email marketing tracking</li>
                  </ul>
                </div>
              </div>
            </div>
            <p className="mb-4">
              Your privacy policy must list every cookie your store sets, explain its purpose, and state its expiration
              period. You also need a mechanism for visitors to withdraw consent at any time. Popular Shopify cookie
              consent apps include Pandectes GDPR Compliance, Consentmo, and Avada Cookie Banner.
            </p>
            <p className="text-sm text-gray-400">
              Need a comprehensive cookie policy? See our{" "}
              <Link href="/cookie-policy-generator" className="text-blue-400 hover:text-blue-300">
                Cookie Policy Generator
              </Link>{" "}
              for a dedicated solution.
            </p>
          </section>

          {/* GDPR requirements for Shopify */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              GDPR Requirements Specific to Shopify Merchants
            </h2>
            <p className="mb-4">
              GDPR applies to your Shopify store if anyone in the EU can access it &mdash; which means virtually every
              Shopify store. Here are the specific GDPR obligations that affect Shopify merchants:
            </p>
            <ul className="space-y-3 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1 font-bold">1.</span>
                <span>
                  <strong className="text-white">Legal basis for processing</strong> &mdash; You need a lawful reason
                  for each type of data processing. Order fulfillment uses &quot;contractual necessity.&quot; Marketing
                  emails typically require &quot;consent.&quot; Analytics may use &quot;legitimate interest,&quot; but
                  this must be balanced against user privacy.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1 font-bold">2.</span>
                <span>
                  <strong className="text-white">Right to access (DSAR)</strong> &mdash; Customers can request a copy of
                  all personal data you hold. Shopify provides a &quot;Customer data request&quot; feature in the admin
                  panel, but you must respond within 30 days.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1 font-bold">3.</span>
                <span>
                  <strong className="text-white">Right to erasure</strong> &mdash; Customers can request deletion of
                  their data. Shopify allows you to erase customer data from the admin, but you must also delete data
                  from every app integration (Klaviyo, Google Analytics custom dimensions, etc.).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1 font-bold">4.</span>
                <span>
                  <strong className="text-white">Data Processing Agreements</strong> &mdash; You need a DPA with every
                  third-party service that processes customer data on your behalf. Shopify provides a DPA as part of
                  their terms. Most major apps (Klaviyo, Google, Meta) offer standard DPAs you should have on file.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1 font-bold">5.</span>
                <span>
                  <strong className="text-white">International data transfers</strong> &mdash; If your store is outside
                  the EU but processes EU customer data, you need a lawful transfer mechanism. Shopify uses Standard
                  Contractual Clauses (SCCs) for transatlantic data transfers since the Privacy Shield was invalidated.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1 font-bold">6.</span>
                <span>
                  <strong className="text-white">Consent records</strong> &mdash; You must be able to prove that
                  customers consented to marketing emails, cookie tracking, and other non-essential data processing.
                  Shopify records email marketing consent, but you need separate proof for cookie consent and other
                  processing.
                </span>
              </li>
            </ul>
            <p className="text-sm text-gray-400">
              Need a GDPR-focused policy? See our{" "}
              <Link href="/gdpr-privacy-policy-generator" className="text-blue-400 hover:text-blue-300">
                GDPR Privacy Policy Generator
              </Link>{" "}
              for full EU compliance.
            </p>
          </section>

          {/* CCPA requirements */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              CCPA Requirements for Shopify Stores Selling to California
            </h2>
            <p className="mb-4">
              If California residents can buy from your Shopify store, the California Consumer Privacy Act (CCPA) and
              its amendment the CPRA may apply. Even if your business doesn&apos;t meet the technical thresholds,
              including CCPA provisions is a best practice that protects you as your store grows. Here is what CCPA
              requires:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                <h3 className="font-semibold text-white mb-2 text-sm">Disclosure Requirements</h3>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">•</span>
                    Categories of personal information collected
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">•</span>
                    Business purpose for each data category
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">•</span>
                    Categories of third parties data is shared with
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">•</span>
                    Whether you sell or share personal information
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">•</span>
                    Retention periods for each data category
                  </li>
                </ul>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                <h3 className="font-semibold text-white mb-2 text-sm">Consumer Rights</h3>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">•</span>
                    Right to know what data is collected
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">•</span>
                    Right to delete personal information
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">•</span>
                    Right to opt-out of data sales/sharing
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">•</span>
                    Right to non-discrimination for exercising rights
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">•</span>
                    Right to correct inaccurate data (CPRA addition)
                  </li>
                </ul>
              </div>
            </div>
            <div className="p-4 bg-red-500/5 border border-red-500/20 rounded-lg">
              <p className="text-sm text-red-300">
                <strong>Note on &quot;selling&quot; data:</strong> Under CCPA, sharing customer data with Meta Pixel or
                Google Analytics for ad targeting can be classified as &quot;selling&quot; personal information, even if
                no money changes hands. If you use retargeting pixels, you likely need a &quot;Do Not Sell or Share My
                Personal Information&quot; link on your Shopify store.
              </p>
            </div>
          </section>

          {/* How to add privacy policy to Shopify */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              How to Add a Privacy Policy to Your Shopify Store
            </h2>
            <p className="mb-4">
              Follow these steps to generate and properly install a privacy policy on your Shopify store:
            </p>
            <div className="space-y-3">
              {SHOPIFY_SETUP_STEPS.map((item) => (
                <div key={item.step} className="flex items-start gap-4 p-4 bg-white/5 rounded-lg">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-sm">
                    {item.step}
                  </span>
                  <div>
                    <p className="font-medium text-white text-sm">{item.title}</p>
                    <p className="text-sm text-gray-400 mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Comparison table */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              PolicyForge vs Shopify&apos;s Built-In Template
            </h2>
            <p className="mb-4">
              Shopify provides a basic privacy policy template in Settings &gt; Policies, but it is a generic starting
              point designed to cover the absolute minimum. Here is how it compares to a PolicyForge-generated policy:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Feature</th>
                    <th className="text-center py-3 px-4 text-gray-400 font-medium">Shopify Template</th>
                    <th className="text-center py-3 px-4 text-blue-400 font-medium">PolicyForge</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map((row) => (
                    <tr key={row.feature} className="border-b border-white/5">
                      <td className="py-3 px-4 text-gray-300">{row.feature}</td>
                      <td className="py-3 px-4 text-center">
                        {row.shopify === true ? (
                          <span className="text-green-400">Yes</span>
                        ) : row.shopify === false ? (
                          <span className="text-red-400">No</span>
                        ) : (
                          <span className="text-yellow-400">{row.shopify}</span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-center">
                        {row.policyforge === true ? (
                          <span className="text-green-400">Yes</span>
                        ) : (
                          <span className="text-blue-400">{row.policyforge}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              PolicyForge generates policies that are specific to your Shopify store&apos;s actual data practices, not
              generic boilerplate. The Pro version ($12.99) includes data retention schedules, international transfer
              clauses, and update notifications when privacy laws change.
            </p>
          </section>

          {/* CTA */}
          <section className="p-8 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-3">
              Generate Your Shopify Privacy Policy Now
            </h2>
            <p className="text-gray-300 mb-2">
              PolicyForge creates privacy policies specifically designed for Shopify merchants. Cover your payment
              processing, app integrations, marketing tools, cookie consent, and full GDPR and CCPA compliance &mdash;
              all in under 2 minutes.
            </p>
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <div className="text-sm text-gray-400">
                <span className="text-green-400">+</span> Shopify Payments compliant
              </div>
              <div className="text-sm text-gray-400">
                <span className="text-green-400">+</span> App integrations covered
              </div>
              <div className="text-sm text-gray-400">
                <span className="text-green-400">+</span> GDPR &amp; CCPA ready
              </div>
              <div className="text-sm text-gray-400">
                <span className="text-green-400">+</span> Cookie consent details
              </div>
            </div>
            <div className="flex flex-wrap gap-3 items-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Generate Now &mdash; Free
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <span className="text-sm text-gray-500">Free tier available &bull; Pro from $4.99</span>
            </div>
          </section>

          {/* Scan CTA */}
          <section className="p-6 bg-white/5 border border-white/10 rounded-xl text-center">
            <h2 className="text-xl font-bold text-white mb-2">Already Have a Shopify Privacy Policy?</h2>
            <p className="text-gray-400 text-sm mb-4">
              Paste your Shopify store URL and we will scan your existing privacy policy across 10 compliance categories
              &mdash; GDPR, CCPA, cookie disclosure, data retention, and more.
            </p>
            <Link
              href="/check"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
            >
              Free Compliance Scan
            </Link>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {FAQ_ITEMS.map((faq) => (
                <div key={faq.q} className="p-4 bg-white/5 rounded-lg">
                  <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related pages */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Related Resources</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link
                href="/privacy-policy-for-ecommerce"
                className="p-4 bg-white/5 border border-white/10 rounded-lg hover:border-blue-500/30 transition-colors group"
              >
                <h3 className="font-semibold text-white text-sm group-hover:text-blue-400">
                  Privacy Policy for E-commerce
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  General e-commerce privacy policy requirements and best practices
                </p>
              </Link>
              <Link
                href="/gdpr-privacy-policy-generator"
                className="p-4 bg-white/5 border border-white/10 rounded-lg hover:border-blue-500/30 transition-colors group"
              >
                <h3 className="font-semibold text-white text-sm group-hover:text-blue-400">
                  GDPR Policy Generator
                </h3>
                <p className="text-xs text-gray-500 mt-1">Full EU GDPR compliance for your store</p>
              </Link>
              <Link
                href="/cookie-policy-generator"
                className="p-4 bg-white/5 border border-white/10 rounded-lg hover:border-blue-500/30 transition-colors group"
              >
                <h3 className="font-semibold text-white text-sm group-hover:text-blue-400">
                  Cookie Policy Generator
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  Dedicated cookie policy for GDPR cookie consent
                </p>
              </Link>
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t border-white/10 mt-16 py-8 text-center text-sm text-gray-500">
        <p>
          PolicyForge &mdash; Part of the{" "}
          <a href="https://dashboard-mocha-delta-98.vercel.app" className="text-blue-400 hover:text-blue-300">
            Autonomous Claude Experiment
          </a>
        </p>
        <p className="mt-2 text-xs text-gray-600">
          Disclaimer: This generator provides template privacy policies for informational purposes. Consult a qualified
          attorney for jurisdiction-specific legal advice.
        </p>
      </footer>
    </div>
  );
}
