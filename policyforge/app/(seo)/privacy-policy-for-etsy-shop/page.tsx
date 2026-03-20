import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Privacy Policy for Etsy Shop | Free Generator & Template - PolicyForge",
  description:
    "Create a legally compliant privacy policy for your Etsy shop. Covers custom orders, Etsy Messages, customer data, email marketing, GDPR for EU buyers, CCPA compliance, and Etsy Star Seller trust requirements.",
  keywords:
    "privacy policy for etsy shop, etsy seller privacy policy, etsy shop privacy policy template, etsy GDPR compliance, etsy seller data protection, etsy privacy policy generator, etsy shop legal requirements, etsy custom order privacy, etsy seller CCPA, etsy shop data collection",
  openGraph: {
    title: "Free Privacy Policy for Your Etsy Shop - PolicyForge",
    description:
      "Generate a GDPR & CCPA compliant privacy policy tailored for Etsy sellers. Covers custom orders, customer communications, external marketing, and international compliance.",
    type: "website",
  },
};

export default function PrivacyPolicyForEtsyShop() {
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
          Privacy Policy for Your Etsy Shop
        </h1>

        <p className="text-gray-400 text-lg mb-8">
          If you sell on Etsy, you are collecting personal data &mdash; even if
          you do not realize it. Customer names, shipping addresses, custom order
          details, and Etsy Messages all contain personal information regulated
          under GDPR, CCPA, and other privacy laws. While Etsy has its own
          platform-level privacy policy, it does not cover your responsibilities
          as an individual seller. You need your own privacy policy that
          discloses how you handle the customer data you receive through your
          shop, custom orders, and any external marketing you run.
        </p>

        <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-blue-800/40 rounded-xl p-6 mb-10">
          <h3 className="text-lg font-semibold text-white mb-2">
            Generate Your Etsy Shop Privacy Policy in 2 Minutes
          </h3>
          <p className="text-gray-300 text-sm mb-4">
            PolicyForge creates customized privacy policies tailored to Etsy
            sellers. Covers customer order data, custom orders, Etsy Messages,
            email marketing integrations, and full GDPR/CCPA compliance &mdash;
            all for $4.99 instead of $500+ for a lawyer.
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
              Why Etsy Sellers Need Their Own Privacy Policy
            </h2>
            <p className="mb-4">
              A common misconception among Etsy sellers is that Etsy&apos;s
              platform privacy policy covers their shop. It does not. Etsy&apos;s
              privacy policy governs the relationship between Etsy (the
              platform) and its users. As a seller, you are an independent data
              controller under privacy law. You decide what customer data you
              collect beyond the basic order information, how you use Etsy
              Messages, whether you run external marketing campaigns, and how
              long you retain customer records.
            </p>
            <p className="mb-4">
              Every time a customer places an order in your Etsy shop, you
              receive their full name, shipping address, and email address.
              If the order involves personalization or customization, you
              likely receive additional personal details &mdash; names to be
              engraved, photos of loved ones, measurements, or other sensitive
              information. When customers contact you through Etsy Messages,
              those conversations often contain personal data that you are
              responsible for handling properly.
            </p>
            <p className="mb-4">
              Beyond Etsy itself, many sellers extend their data collection
              through external tools: email marketing platforms like Mailchimp
              or ConvertKit, social media advertising on Instagram and
              Pinterest, their own standalone website or Shopify store, and
              analytics tools to track where customers come from. Each of these
              touchpoints creates additional data processing obligations that
              your privacy policy must address.
            </p>
            <p>
              GDPR fines can reach &euro;20 million or 4% of global annual
              revenue. CCPA violations carry penalties of $2,500 per
              unintentional violation and $7,500 per intentional violation.
              Even individual sellers and small businesses have received
              enforcement notices. Operating without a privacy policy is a
              legal risk that no seller should take, regardless of shop size.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              What Data Do Etsy Sellers Collect?
            </h2>
            <p className="mb-4">
              Most Etsy sellers significantly underestimate the volume of
              personal data they handle. Your privacy policy must disclose all
              categories of personal data you collect, not just what customers
              type into a form. Here is a comprehensive breakdown:
            </p>

            <div className="space-y-4">
              <div className="bg-gray-900/50 rounded-xl p-5">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Order and Transaction Data
                </h3>
                <p className="text-sm text-gray-400 mb-3">
                  Received automatically through every Etsy order.
                </p>
                <ul className="text-sm text-gray-300 space-y-1.5 list-disc list-inside">
                  <li>Customer full name and email address</li>
                  <li>Shipping address (street, city, state/province, postal code, country)</li>
                  <li>Billing information (handled by Etsy Payments, not stored by sellers)</li>
                  <li>Order details: items purchased, quantities, prices, discounts applied</li>
                  <li>Transaction dates, order IDs, and shipping tracking numbers</li>
                  <li>Gift message content (if gift orders are enabled)</li>
                </ul>
              </div>

              <div className="bg-gray-900/50 rounded-xl p-5">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Custom Order and Personalization Data
                </h3>
                <p className="text-sm text-gray-400 mb-3">
                  Collected when customers request personalized or custom items.
                </p>
                <ul className="text-sm text-gray-300 space-y-1.5 list-disc list-inside">
                  <li>Names, dates, or text for engravings, prints, or embroidery</li>
                  <li>Photographs or images provided by the customer</li>
                  <li>Body measurements for custom clothing or jewelry</li>
                  <li>Pet names, breed details, or pet photos for pet products</li>
                  <li>Design preferences, color choices, and material selections</li>
                  <li>Any other personal details shared during customization discussions</li>
                </ul>
              </div>

              <div className="bg-gray-900/50 rounded-xl p-5">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Communication Data via Etsy Messages
                </h3>
                <p className="text-sm text-gray-400 mb-3">
                  Collected through the Etsy messaging system between buyers and
                  sellers.
                </p>
                <ul className="text-sm text-gray-300 space-y-1.5 list-disc list-inside">
                  <li>Pre-sale questions and inquiries about products</li>
                  <li>Custom order discussions and design files</li>
                  <li>Post-sale communication about shipping, issues, or returns</li>
                  <li>Personal details voluntarily shared in messages (phone numbers, social media handles)</li>
                  <li>Attachments: photos, design files, or reference images</li>
                </ul>
              </div>

              <div className="bg-gray-900/50 rounded-xl p-5">
                <h3 className="text-lg font-semibold text-white mb-3">
                  External Marketing and Analytics Data
                </h3>
                <p className="text-sm text-gray-400 mb-3">
                  Collected when you use tools outside of Etsy to market your shop.
                </p>
                <ul className="text-sm text-gray-300 space-y-1.5 list-disc list-inside">
                  <li>Email addresses from newsletter signups (Mailchimp, ConvertKit, etc.)</li>
                  <li>Social media profile data from followers who become customers</li>
                  <li>Pinterest and Instagram analytics data from promoted pins or posts</li>
                  <li>Website visitor data if you run your own standalone site</li>
                  <li>Google Analytics or Facebook Pixel data if used on an external site</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              When Do Etsy Sellers Need an External Privacy Policy?
            </h2>
            <p className="mb-4">
              Not every Etsy seller needs a privacy policy with the same level
              of detail, but certain activities make it mandatory. If any of
              the following apply to you, you need a comprehensive privacy
              policy immediately:
            </p>

            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-white">
                  You sell on your own website too
                </h4>
                <p className="text-sm text-gray-400">
                  If you have a standalone website (Shopify, Squarespace, or
                  self-hosted) in addition to Etsy, your website collects
                  cookies, IP addresses, and browsing data. Privacy laws require
                  a visible privacy policy on every website that collects
                  personal data. Your Etsy shop policy should reference your
                  website, and vice versa.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-white">
                  You use email marketing
                </h4>
                <p className="text-sm text-gray-400">
                  If you collect email addresses (through Etsy, your website,
                  social media, or craft fairs) and send marketing emails via
                  Mailchimp, ConvertKit, Flodesk, or any other platform, you
                  are processing personal data for marketing purposes. GDPR
                  requires explicit consent for marketing emails and a clear
                  disclosure in your privacy policy. CAN-SPAM requires a
                  physical mailing address in every marketing email.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-white">
                  You run social media ads
                </h4>
                <p className="text-sm text-gray-400">
                  Running paid ads on Pinterest, Instagram, Facebook, or Google
                  means advertising platforms collect data about the people who
                  click your ads. If you use retargeting pixels on an external
                  website to re-market to Etsy visitors, this constitutes
                  &quot;sharing&quot; personal data under CCPA. Your privacy
                  policy must disclose this.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-white">
                  You collect data at craft fairs or markets
                </h4>
                <p className="text-sm text-gray-400">
                  Many Etsy sellers also sell at local markets, craft fairs,
                  and pop-up shops. If you collect email addresses on a sign-up
                  sheet, take custom order details in person, or use a
                  point-of-sale system, that data falls under privacy
                  regulations. Your privacy policy should cover all channels
                  where you collect data, not just online.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-white">
                  You have EU or California customers
                </h4>
                <p className="text-sm text-gray-400">
                  If even one customer is in the EU, GDPR applies to your data
                  processing activities regardless of where your shop is based.
                  If you sell to California residents, CCPA may apply. Since
                  Etsy is a global marketplace, most sellers with any
                  meaningful order volume will have customers in both
                  jurisdictions.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Etsy Star Seller and Trust Requirements
            </h2>
            <p className="mb-4">
              Etsy&apos;s Star Seller program rewards shops that meet high
              standards for customer service, shipping speed, and
              communication. While having a privacy policy is not an explicit
              Star Seller requirement, it directly supports the trust
              signals that drive Star Seller performance:
            </p>
            <div className="bg-gray-900/50 rounded-xl p-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 text-lg mt-0.5">&#9733;</span>
                  <div>
                    <h4 className="font-semibold text-white">Customer Confidence</h4>
                    <p className="text-sm text-gray-400">
                      Buyers are more likely to leave 5-star reviews (a Star
                      Seller requirement) when they feel their personal data
                      is handled professionally. A visible privacy policy
                      signals that you are a serious, trustworthy business.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 text-lg mt-0.5">&#9733;</span>
                  <div>
                    <h4 className="font-semibold text-white">Dispute Prevention</h4>
                    <p className="text-sm text-gray-400">
                      Clear data handling policies reduce disputes and
                      complaints. When customers know what data you collect
                      and why, they are less likely to open cases about
                      privacy concerns. Fewer cases means better Star Seller
                      metrics.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 text-lg mt-0.5">&#9733;</span>
                  <div>
                    <h4 className="font-semibold text-white">Repeat Customers</h4>
                    <p className="text-sm text-gray-400">
                      Trust leads to repeat purchases. Etsy&apos;s algorithm
                      favors shops with returning customers. A privacy policy
                      is part of the professionalism that keeps buyers coming
                      back, which indirectly supports your search ranking and
                      Star Seller eligibility.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 text-lg mt-0.5">&#9733;</span>
                  <div>
                    <h4 className="font-semibold text-white">Etsy&apos;s Seller Handbook Recommendations</h4>
                    <p className="text-sm text-gray-400">
                      Etsy&apos;s own Seller Handbook encourages sellers to
                      build trust with transparent policies. While Etsy does
                      not mandate a separate privacy policy, they explicitly
                      encourage sellers to communicate their data practices
                      clearly in their shop policies and About page.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              GDPR Compliance for Etsy Sellers with EU Customers
            </h2>
            <p className="mb-4">
              The General Data Protection Regulation applies to any Etsy
              seller who processes personal data of individuals in the
              European Union or European Economic Area, regardless of where
              the seller is located. If you ship to EU countries &mdash; and
              most Etsy sellers do &mdash; these requirements apply to you:
            </p>

            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-white">Lawful Basis for Processing</h4>
                <p className="text-sm text-gray-400">
                  Under GDPR, you must have a legal basis for processing each
                  category of personal data. For order fulfillment (name,
                  address, order details), the legal basis is{" "}
                  <strong className="text-white">contractual necessity</strong>{" "}
                  &mdash; you need the data to fulfill the purchase. For
                  marketing emails, the basis is{" "}
                  <strong className="text-white">consent</strong> &mdash; the
                  customer must actively opt in. For retaining transaction
                  records, the basis is{" "}
                  <strong className="text-white">legal obligation</strong>{" "}
                  (tax and accounting laws require you to keep them).
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-white">Data Subject Rights</h4>
                <p className="text-sm text-gray-400">
                  EU customers have the right to access, rectify, erase,
                  restrict, and port their personal data. They can also
                  object to processing based on legitimate interest. Your
                  privacy policy must list these rights clearly and explain
                  how customers can exercise them. You must respond to
                  requests within 30 days. For Etsy sellers, this means
                  being prepared to provide all data you hold about a
                  customer, correct inaccurate data, or delete data when
                  legally permitted.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-white">Data Retention Limits</h4>
                <p className="text-sm text-gray-400">
                  GDPR requires you to retain personal data only for as long
                  as necessary. Custom order photos, design files, and Etsy
                  Messages should not be kept indefinitely. Define specific
                  retention periods in your privacy policy: for example,
                  &quot;custom order files are deleted 90 days after order
                  completion&quot; or &quot;Etsy Messages are retained for 2
                  years for dispute resolution purposes.&quot;
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-white">International Data Transfers</h4>
                <p className="text-sm text-gray-400">
                  If you are a US-based seller receiving orders from EU
                  customers, you are transferring personal data
                  internationally. Etsy facilitates this under its own
                  legal framework (including Standard Contractual Clauses),
                  but if you export customer data to external tools like
                  Mailchimp (US-based), you need to ensure those tools also
                  have appropriate transfer mechanisms in place. Your privacy
                  policy must disclose where data is processed and what
                  safeguards exist.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              CCPA Requirements for Etsy Sellers
            </h2>
            <p className="mb-4">
              The California Consumer Privacy Act applies to businesses that
              collect personal information from California residents and meet
              certain thresholds: annual gross revenue over $25 million,
              buying/selling/sharing personal data of 100,000+ consumers, or
              deriving 50%+ of revenue from selling personal data. While many
              small Etsy sellers fall below these thresholds, the CCPA still
              sets important standards, and California consumers increasingly
              expect CCPA-style transparency from all businesses.
            </p>

            <div className="bg-gray-900/50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                CCPA Compliance Checklist for Etsy Sellers
              </h3>
              <div className="space-y-2 text-sm">
                {[
                  "Disclose all categories of personal information collected in the past 12 months",
                  "Explain the business or commercial purpose for each data collection category",
                  "List categories of third parties with whom customer data is shared",
                  "Provide a process for consumers to request access to their data",
                  "Provide a process for consumers to request deletion of their data",
                  "Honor opt-out requests for data sharing with third parties",
                  "Do not discriminate against consumers who exercise their privacy rights",
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
              Even if you are below CCPA thresholds today, having a
              CCPA-compliant privacy policy positions you for growth. If your
              Etsy shop scales or you expand to your own website, you will
              already have the compliance framework in place. Additionally,
              several other US states (Virginia, Colorado, Connecticut, Utah)
              have enacted similar privacy laws, making a comprehensive privacy
              policy increasingly important.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              How to Add a Privacy Policy to Your Etsy Shop
            </h2>
            <p className="mb-4">
              Etsy provides several places to display your privacy policy.
              Here is how to make sure customers can find it:
            </p>

            <div className="space-y-4">
              {[
                {
                  step: "1",
                  title: "Generate your privacy policy",
                  desc: "Use PolicyForge to create a comprehensive privacy policy tailored to your Etsy shop. Include details about custom orders, Etsy Messages, external marketing, and any third-party tools you use. A generic template will not cover Etsy-specific data flows.",
                },
                {
                  step: "2",
                  title: "Add it to your Etsy Shop Policies",
                  desc: "In your Etsy Shop Manager, go to Settings > Shop Policies (under the \"Info & Appearance\" section). The Privacy Policy field lets you paste your full privacy policy text. This is the primary location where customers look for legal information before purchasing.",
                },
                {
                  step: "3",
                  title: "Link from your About page",
                  desc: "Your Etsy About page is a trust-building opportunity. Reference your privacy policy in your About page content, mentioning that you take customer data protection seriously. This gives buyers another way to find your policy and reinforces trust.",
                },
                {
                  step: "4",
                  title: "Reference in listing descriptions",
                  desc: "For listings that require personalization (custom names, photos, measurements), include a brief note in the listing description: \"We handle all personal information in accordance with our Privacy Policy — see our Shop Policies for details.\" This is especially important for items where customers share sensitive data.",
                },
                {
                  step: "5",
                  title: "Include in custom order conversations",
                  desc: "When beginning a custom order conversation via Etsy Messages, include a brief note about how you will handle any personal information shared during the process. A simple line like \"Any personal details you share for this custom order will be handled per our shop's Privacy Policy\" builds trust and demonstrates compliance.",
                },
                {
                  step: "6",
                  title: "Add to your external channels",
                  desc: "If you have an Instagram bio link, Pinterest profile, email newsletter signup form, or standalone website, link to your privacy policy from each of these channels. Consistent privacy disclosure across all touchpoints demonstrates professionalism and legal compliance.",
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
              Common Mistakes Etsy Sellers Make with Data Privacy
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-white">
                  Assuming Etsy&apos;s privacy policy covers their shop
                </h4>
                <p className="text-sm text-gray-400">
                  Etsy&apos;s privacy policy covers Etsy as a platform. You
                  are an independent seller and a separate data controller.
                  When you export customer data to a spreadsheet, add emails
                  to a Mailchimp list, or retain custom order photos on your
                  computer, Etsy&apos;s policy does not govern those actions.
                  You need your own.
                </p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-white">
                  Keeping custom order data indefinitely
                </h4>
                <p className="text-sm text-gray-400">
                  Many Etsy sellers save every custom order photo, design
                  file, and personalization detail forever &mdash; &quot;just
                  in case.&quot; Under GDPR, you must delete personal data
                  when it is no longer necessary for the purpose it was
                  collected. Set a clear retention period (e.g., 90 days
                  after order delivery) and stick to it. Document this period
                  in your privacy policy.
                </p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-white">
                  Adding customers to email lists without consent
                </h4>
                <p className="text-sm text-gray-400">
                  A customer purchasing from your Etsy shop does not
                  automatically consent to receiving marketing emails. Under
                  GDPR, marketing emails require separate, explicit consent.
                  Under CAN-SPAM, every marketing email must include an
                  unsubscribe link. Adding all past customers to a Mailchimp
                  list and sending promotional emails without opt-in consent
                  is a violation of both regulations.
                </p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-white">
                  Sharing customer data with production partners without disclosure
                </h4>
                <p className="text-sm text-gray-400">
                  If you use Etsy&apos;s Production Partners feature or
                  outsource any part of your production (printing,
                  engraving, fulfillment), customer data (names, addresses,
                  custom text) is shared with those partners. Your privacy
                  policy must disclose that third-party production partners
                  receive customer data, what data they receive, and for
                  what purpose.
                </p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-white">
                  Not securing stored customer data
                </h4>
                <p className="text-sm text-gray-400">
                  Many sellers store customer information in spreadsheets,
                  Google Sheets, or folders on their computer without any
                  security measures. Under GDPR, you are obligated to
                  implement appropriate technical and organizational measures
                  to protect personal data. This means at minimum using
                  password-protected files, encrypted storage, and limiting
                  access to customer data to only those who need it.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Etsy&apos;s Data You Can Access vs. Data You Control
            </h2>
            <p className="mb-4">
              Understanding the boundary between Etsy&apos;s data
              responsibilities and yours is critical for writing an accurate
              privacy policy. Here is how the split works:
            </p>

            <div className="bg-gray-900/50 rounded-xl p-6">
              <div className="space-y-3 text-sm">
                <div className="grid grid-cols-3 gap-4 pb-3 border-b border-white/10 font-semibold text-white">
                  <span>Data Type</span>
                  <span className="text-center">Etsy Controls</span>
                  <span className="text-center text-blue-400">You Control</span>
                </div>
                {[
                  { type: "Payment card details", etsy: "Yes (Etsy Payments)", seller: "No" },
                  { type: "Customer shipping address", etsy: "Shared", seller: "Yes (in order details)" },
                  { type: "Customer email address", etsy: "Masked by default", seller: "Yes (if obtained externally)" },
                  { type: "Etsy Messages content", etsy: "Stored on Etsy", seller: "Yes (you read/respond)" },
                  { type: "Custom order details", etsy: "In order notes", seller: "Yes (photos, files, specs)" },
                  { type: "Browsing/analytics data", etsy: "Yes (Etsy Stats)", seller: "No (unless external site)" },
                  { type: "Email marketing lists", etsy: "No", seller: "Yes (fully your responsibility)" },
                  { type: "Production partner sharing", etsy: "Disclosed in policies", seller: "Yes (your partners)" },
                ].map((row) => (
                  <div
                    key={row.type}
                    className="grid grid-cols-3 gap-4 py-2 border-b border-white/5"
                  >
                    <span className="text-gray-300">{row.type}</span>
                    <span className="text-center text-gray-400">{row.etsy}</span>
                    <span className="text-center text-blue-400">{row.seller}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-4">
              Your privacy policy should focus on the data in the &quot;You
              Control&quot; column. For data that Etsy controls (like payment
              card details), you can reference Etsy&apos;s own privacy policy
              rather than duplicating its content. The key is being transparent
              about what happens to data once it reaches you.
            </p>
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
                  { factor: "Etsy-specific coverage", lawyer: "Varies by lawyer", pf: "Built-in" },
                  { factor: "Custom order data handling", lawyer: "Manual review needed", pf: "Included" },
                  { factor: "GDPR + CCPA compliance", lawyer: "Yes", pf: "Yes" },
                  { factor: "Updates when practices change", lawyer: "$200+/hour", pf: "Regenerate for free" },
                  { factor: "Suitable for shops under $100K/yr", lawyer: "Overkill", pf: "Perfect fit" },
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
              For Etsy sellers &mdash; especially those doing under $100K in
              annual revenue &mdash; paying a lawyer $1,000+ for a privacy
              policy is disproportionate to the business size. PolicyForge
              generates a comprehensive, legally-informed policy in minutes
              that covers Etsy-specific scenarios. You can regenerate it
              whenever your data practices change, at no additional cost.
            </p>
          </section>

          <section className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-800/30 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-4 text-center">
              Create Your Etsy Shop Privacy Policy Now
            </h2>
            <p className="text-gray-300 text-center mb-6">
              PolicyForge generates customized privacy policies for Etsy
              sellers. Covers order data, custom orders, Etsy Messages,
              production partners, email marketing, GDPR, CCPA, and
              international compliance. Done in under 2 minutes for $4.99
              &mdash; not $500.
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
                  Does Etsy provide a privacy policy for my shop?
                </h3>
                <p>
                  No. Etsy has its own platform-level privacy policy, but it
                  covers Etsy&apos;s data practices, not yours. As a seller,
                  you are an independent data controller responsible for how
                  you handle customer data received through orders, custom
                  requests, messages, and external marketing. Etsy provides a
                  Shop Policies section where you can paste your own privacy
                  policy, but you must create it yourself.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  I only sell on Etsy &mdash; do I still need a privacy policy?
                </h3>
                <p>
                  If you sell exclusively on Etsy and never export customer
                  data to external tools, your obligations are more limited
                  because Etsy handles most data processing. However, if you
                  retain customer details (spreadsheets, order records), use
                  any external communication, or have EU customers, you should
                  have a privacy policy. It is also a trust signal that
                  improves conversion rates &mdash; buyers feel safer
                  purchasing from sellers with clear policies.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  What happens if an Etsy customer requests their data be
                  deleted?
                </h3>
                <p>
                  Under GDPR, customers have the &quot;right to erasure.&quot;
                  If an EU customer requests deletion of their personal data,
                  you must comply within 30 days unless you have a legal
                  obligation to retain it (such as tax records). This means
                  deleting their custom order files, Etsy Messages content you
                  have saved externally, and any records in your personal
                  spreadsheets or email marketing lists. You can retain
                  transaction records required for tax compliance, but you
                  must inform the customer which data you are keeping and why.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Do I need to disclose Etsy&apos;s Production Partners in my
                  privacy policy?
                </h3>
                <p>
                  Yes. If you use production partners (printers,
                  manufacturers, fulfillment centers), customer data
                  including names, shipping addresses, and custom order
                  details is shared with those partners. Your privacy policy
                  must disclose the existence of production partners, the
                  categories of data shared with them, and the purpose of
                  sharing (order fulfillment). You do not necessarily need to
                  name each partner individually, but you must be transparent
                  about the fact that third parties receive customer data.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Can I use a free privacy policy template for my Etsy shop?
                </h3>
                <p>
                  Free templates are better than nothing, but they rarely
                  cover Etsy-specific scenarios like custom order data,
                  production partner disclosures, or the split between
                  Etsy-controlled and seller-controlled data. A free template
                  also will not cover your specific combination of external
                  tools (email marketing, social media ads, external
                  website). PolicyForge generates a tailored policy that
                  accounts for your specific situation starting at $4.99 &mdash;
                  far less than a lawyer but far more comprehensive than a
                  generic template.
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
                  platforms and marketplaces.
                </p>
              </Link>
              <Link
                href="/privacy-policy-for-small-business"
                className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800/70 transition block"
              >
                <span className="text-blue-400 font-semibold">
                  Privacy Policy for Small Business
                </span>
                <p className="text-gray-400 mt-1">
                  Privacy policy guidance for small businesses and sole
                  proprietors.
                </p>
              </Link>
              <Link
                href="/privacy-policy-for-shopify-store"
                className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800/70 transition block"
              >
                <span className="text-blue-400 font-semibold">
                  Privacy Policy for Shopify Store
                </span>
                <p className="text-gray-400 mt-1">
                  If you also sell on Shopify, generate a policy that covers
                  your Shopify-specific data flows.
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
                  online service.
                </p>
              </Link>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-500">
          <p>
            PolicyForge helps Etsy sellers build compliant privacy policies.
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
