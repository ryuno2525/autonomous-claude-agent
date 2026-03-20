import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy for Squarespace Website | Free Generator - PolicyForge",
  description:
    "Generate a free privacy policy for your Squarespace website. Covers Squarespace Analytics, Commerce, Scheduling, Email Campaigns, form blocks, member areas, and GDPR/CCPA compliance.",
  keywords:
    "privacy policy for squarespace, squarespace privacy policy template, squarespace website privacy policy, squarespace GDPR compliance, squarespace cookie policy, squarespace privacy page, squarespace data collection",
  openGraph: {
    title: "Free Privacy Policy Generator for Squarespace Websites",
    description: "Create a GDPR & CCPA compliant privacy policy for your Squarespace site in minutes. Covers analytics, commerce, scheduling, forms, member areas, and third-party integrations.",
    type: "website",
  },
};

const SQUARESPACE_FEATURES = [
  {
    feature: "Squarespace Analytics",
    data: ["Page views, unique visitors, and session duration", "Traffic sources and referral URLs", "Geographic location (country, region, city)", "Device type, browser, and operating system", "Search keywords used to find your site"],
    concern: "Enabled by default on all Squarespace sites. Collects visitor data without requiring any setup from the site owner.",
  },
  {
    feature: "Form Blocks",
    data: ["Name, email address, phone number, and custom fields", "File uploads attached to form submissions", "Submission timestamps and page of origin", "IP address logged in form submission metadata"],
    concern: "Contact forms, newsletter signups, and custom forms all store submissions in the Squarespace dashboard indefinitely unless manually deleted.",
  },
  {
    feature: "Squarespace Commerce",
    data: ["Customer name, email, phone, billing and shipping addresses", "Order history, product selections, and transaction amounts", "Payment method details (processed via Stripe, PayPal, or Square)", "Tax information and discount code usage", "Abandoned cart data including email and cart contents"],
    concern: "Commerce plans process payment data through third-party processors. Squarespace never stores full card numbers, but transaction metadata is retained.",
  },
  {
    feature: "Member Areas",
    data: ["Member email address and account credentials", "Membership tier and subscription status", "Content access history and login timestamps", "Payment information for paid memberships"],
    concern: "Member data is stored by Squarespace and linked to Stripe for recurring billing. Members can access some data via their account settings.",
  },
  {
    feature: "Squarespace Scheduling (Acuity)",
    data: ["Client name, email, phone number", "Appointment type, date, time, and duration", "Intake form responses and custom field data", "Payment details for paid appointments", "Calendar sync data if connected to Google/Outlook"],
    concern: "Acuity Scheduling was acquired by Squarespace in 2021. Client data may be shared between Squarespace and Acuity systems.",
  },
  {
    feature: "Email Campaigns",
    data: ["Subscriber email addresses and names", "Campaign open rates and click tracking", "Unsubscribe and bounce records", "Mailing list segments and tags"],
    concern: "Email Campaigns tracks recipient behavior (opens, clicks) using tracking pixels. This must be disclosed under GDPR.",
  },
];

const THIRD_PARTY_INTEGRATIONS = [
  {
    category: "Analytics & Tracking",
    services: [
      { name: "Google Analytics", data: "Full visitor behavior tracking, demographics, interests, cross-device tracking" },
      { name: "Facebook Pixel", data: "Conversion tracking, retargeting audiences, cross-site behavior profiling" },
      { name: "Pinterest Tag", data: "Conversion events, audience building, shopping behavior tracking" },
      { name: "Google Ads", data: "Conversion tracking, remarketing lists, click attribution" },
    ],
  },
  {
    category: "Email & Marketing",
    services: [
      { name: "Mailchimp", data: "Subscriber lists, campaign engagement, e-commerce purchase data sync" },
      { name: "Zapier", data: "Form submissions, order data, and customer info routed to 5,000+ apps" },
      { name: "ConvertKit", data: "Email subscribers, tag-based segmentation, automation triggers" },
    ],
  },
  {
    category: "Social Media Embeds",
    services: [
      { name: "Instagram Feed", data: "Sets Instagram cookies, tracks viewing behavior, loads third-party scripts" },
      { name: "YouTube Embeds", data: "Google cookies for video tracking, watch history, ad personalization" },
      { name: "Twitter/X Embeds", data: "Sets Twitter cookies, tracks impressions and engagement" },
      { name: "SoundCloud/Spotify", data: "Audio player cookies, listening behavior tracking" },
    ],
  },
  {
    category: "Payment Processors",
    services: [
      { name: "Stripe", data: "Card details, billing address, transaction records, fraud prevention data" },
      { name: "PayPal", data: "Account email, billing info, transaction history, buyer protection data" },
      { name: "Square", data: "Card details, billing address, transaction metadata, refund records" },
      { name: "Afterpay/Clearpay", data: "Customer identity verification, credit assessment, installment payment data" },
    ],
  },
];

const SQUARESPACE_COOKIES = [
  {
    category: "Squarespace Essential Cookies",
    cookies: [
      { name: "crumb", purpose: "CSRF protection token for form submissions and security", duration: "Session" },
      { name: "ss_cid", purpose: "Identifies unique visitors for Squarespace Analytics", duration: "2 years" },
      { name: "ss_cvr", purpose: "Tracks visitor conversion events and sessions", duration: "2 years" },
      { name: "ss_cvt", purpose: "Tracks the timestamp of conversion events", duration: "30 minutes" },
      { name: "ss_cpvisit", purpose: "Tracks campaign page visits and referrals", duration: "2 years" },
    ],
  },
  {
    category: "Commerce Cookies",
    cookies: [
      { name: "ss_carts", purpose: "Stores shopping cart contents across sessions", duration: "2 weeks" },
      { name: "ss_lastvisit", purpose: "Records the last visit timestamp for returning customers", duration: "2 years" },
      { name: "ss_cvisit", purpose: "Tracks current browsing session for commerce analytics", duration: "30 minutes" },
    ],
  },
  {
    category: "Third-Party Cookies (Common)",
    cookies: [
      { name: "_ga / _ga_[ID]", purpose: "Google Analytics: distinguishes unique users and tracks sessions", duration: "2 years" },
      { name: "_gid", purpose: "Google Analytics: distinguishes users within a 24-hour window", duration: "24 hours" },
      { name: "_fbp", purpose: "Facebook Pixel: tracks visitors for ad targeting and conversion", duration: "3 months" },
      { name: "__stripe_mid / __stripe_sid", purpose: "Stripe: fraud prevention and payment session management", duration: "1 year / 30 min" },
    ],
  },
];

const COMPLIANCE_MISTAKES = [
  {
    mistake: "Relying solely on Squarespace's built-in cookie banner",
    why: "Squarespace's default banner is a simple notification, not a compliant consent mechanism. GDPR requires granular opt-in consent before non-essential cookies are set. The built-in banner does not block cookies until consent is given.",
  },
  {
    mistake: "Not disclosing third-party integrations",
    why: "Every connected service (Google Analytics, Mailchimp, social embeds, payment processors) that receives visitor data must be named in your privacy policy with a description of what data is shared and why.",
  },
  {
    mistake: "Using a generic template that doesn't mention Squarespace features",
    why: "Squarespace-specific data collection (Analytics, Commerce, Scheduling, Member Areas) has unique characteristics. A generic template won't cover Acuity Scheduling intake forms or Commerce abandoned cart emails.",
  },
  {
    mistake: "Forgetting about Email Campaigns tracking",
    why: "Squarespace Email Campaigns uses tracking pixels to monitor opens and clicks. This constitutes personal data processing under GDPR and must be disclosed, with an unsubscribe mechanism provided.",
  },
  {
    mistake: "Not providing a data deletion mechanism",
    why: "GDPR gives users the right to erasure. Squarespace stores form submissions, commerce orders, and member data. You need a clear process for handling deletion requests, even if some data must be retained for legal obligations like tax records.",
  },
  {
    mistake: "Ignoring Member Areas data processing",
    why: "If you use Member Areas with paid tiers, you're collecting account credentials, payment data, and content access patterns. This requires specific disclosure about how membership data is handled and how members can manage their information.",
  },
];

const FAQ_ITEMS = [
  {
    q: "Does my Squarespace website need a privacy policy?",
    a: "Yes. Every Squarespace website collects personal data by default through Squarespace Analytics, which tracks visitor IP addresses, geographic location, device information, and browsing behavior. If you use any form blocks, Commerce features, Member Areas, or Scheduling, you are collecting additional personal data. GDPR, CCPA, and other privacy laws require you to disclose this data collection regardless of your website's size or traffic volume. Squarespace itself recommends adding a privacy policy to all sites.",
  },
  {
    q: "Does Squarespace provide a privacy policy template?",
    a: "Squarespace does not provide a built-in privacy policy generator or template. It offers a 'Legal' page type that you can use to display legal documents, but the content must be written or generated by you. Squarespace's support documentation mentions the need for a privacy policy but directs users to create their own. PolicyForge fills this gap by generating a comprehensive privacy policy tailored to Squarespace's specific data collection features.",
  },
  {
    q: "Is Squarespace's cookie banner GDPR compliant?",
    a: "Squarespace offers a basic cookie banner that can be enabled in Settings > Cookies & Visitor Data. However, this banner functions primarily as a notification rather than a true consent mechanism. For full GDPR compliance, you need a cookie banner that: blocks non-essential cookies until consent is given, provides granular category controls (analytics, marketing, functional), records consent for auditing purposes, and allows users to withdraw consent easily. Consider using a third-party cookie consent tool like CookieYes or Osano that integrates with Squarespace via code injection.",
  },
  {
    q: "How do I add a privacy policy page to my Squarespace site?",
    a: "In the Squarespace editor, go to Pages and click the '+' icon to add a new page. Select 'Blank Page' or use the 'Legal' page layout if available in your template. Paste your generated privacy policy content. Then add it to your footer navigation: go to the footer section in the editor and add a navigation link pointing to your privacy policy page. You should also link to it from any form blocks, the checkout page (for Commerce sites), and your cookie consent banner. Squarespace does not have a dedicated 'Privacy Policy' setting like WordPress, so manual linking is required.",
  },
  {
    q: "What happens to customer data when I cancel my Squarespace subscription?",
    a: "When you cancel your Squarespace subscription, your site becomes inaccessible to visitors after the billing period ends. Squarespace retains your site data (including form submissions, commerce orders, and member data) for 30 days after expiration, after which it may be permanently deleted. If you have GDPR obligations to retain certain data or provide data access to past customers, you should export all relevant data before cancellation. Squarespace allows data export through Settings > Advanced > Import/Export for site content, and Commerce > Orders for transaction records.",
  },
];

export default function PrivacyPolicyForSquarespace() {
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
          <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-medium rounded-full border border-blue-500/20">
            GDPR & CCPA Compliant
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Privacy Policy for Squarespace Websites
        </h1>
        <p className="text-xl text-gray-400 mb-8">
          Squarespace powers millions of websites with built-in analytics, commerce, scheduling, and member areas — all of which collect personal data. Generate a privacy policy that covers every Squarespace feature and third-party integration in under 2 minutes.
        </p>

        <div className="flex flex-wrap gap-3 mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg text-lg hover:opacity-90 transition-opacity"
          >
            Generate Your Squarespace Privacy Policy
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </Link>
          <Link
            href="/check"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-lg text-lg hover:bg-white/20 transition-colors"
          >
            Check Existing Policy
          </Link>
        </div>

        <div className="space-y-12 text-gray-300 leading-relaxed">
          {/* Why Squarespace sites need privacy policies */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Why Your Squarespace Website Needs a Privacy Policy</h2>
            <p className="mb-4">
              Every Squarespace website collects personal data from the moment it goes live. Squarespace Analytics automatically tracks visitor behavior, geographic location, and device information on all published sites — no configuration required. The moment you add a contact form, enable Commerce, set up Member Areas, or connect Acuity Scheduling, you are collecting significantly more personal information that privacy laws require you to disclose.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                <h3 className="font-semibold text-white mb-2">Commerce & Payments</h3>
                <p className="text-sm text-gray-400">
                  Squarespace Commerce collects customer names, addresses, email, phone numbers, payment details, and order histories. Payment processing flows through Stripe, PayPal, or Square — all third parties that must be disclosed in your privacy policy.
                </p>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                <h3 className="font-semibold text-white mb-2">Forms & Data Collection</h3>
                <p className="text-sm text-gray-400">
                  Contact forms, newsletter signups, and custom form blocks store all submissions in your Squarespace dashboard. This includes names, email addresses, phone numbers, file uploads, and any custom fields you create.
                </p>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                <h3 className="font-semibold text-white mb-2">Scheduling & Members</h3>
                <p className="text-sm text-gray-400">
                  Acuity Scheduling collects client contact details, appointment preferences, and intake form responses. Member Areas store account credentials, content access patterns, and payment data for gated content.
                </p>
              </div>
            </div>
            <p>
              GDPR (EU) can impose fines up to <strong className="text-white">&euro;20 million or 4% of global revenue</strong>. CCPA (California) carries penalties of <strong className="text-white">$7,500 per intentional violation</strong>. Beyond legal risk, many third-party services require merchants and site owners to maintain compliant privacy policies. Stripe&apos;s terms of service explicitly require merchants to publish a privacy policy, and Google Ads will reject accounts that link to sites without adequate privacy disclosures.
            </p>
          </section>

          {/* Squarespace built-in features that collect data */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Squarespace Features That Collect Personal Data</h2>
            <p className="mb-6">
              Unlike platforms where data collection depends on which plugins you install, Squarespace has built-in features that collect personal data as part of the platform. Your privacy policy must account for every feature you have enabled. Here is what each one collects:
            </p>
            <div className="space-y-4">
              {SQUARESPACE_FEATURES.map((item) => (
                <div key={item.feature} className="p-4 bg-white/5 border border-white/10 rounded-lg">
                  <h3 className="font-semibold text-white mb-2">{item.feature}</h3>
                  <ul className="space-y-1 mb-3">
                    {item.data.map((d) => (
                      <li key={d} className="text-sm text-gray-400 flex items-start gap-2">
                        <span className="text-blue-400 mt-0.5">&#8226;</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-gray-500 border-t border-white/5 pt-2">
                    <span className="text-yellow-400/70 font-medium">Note:</span> {item.concern}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Third-party integrations */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Third-Party Integrations That Require Disclosure</h2>
            <p className="mb-6">
              Squarespace makes it easy to connect external services through built-in integrations and code injection. Each connected service that receives visitor or customer data must be named in your privacy policy. Here are the most common categories:
            </p>
            <div className="space-y-6">
              {THIRD_PARTY_INTEGRATIONS.map((group) => (
                <div key={group.category}>
                  <h3 className="font-semibold text-white mb-3">{group.category}</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {group.services.map((service) => (
                      <div key={service.name} className="p-3 bg-white/5 border border-white/10 rounded-lg">
                        <p className="font-medium text-white text-sm">{service.name}</p>
                        <p className="text-xs text-gray-400 mt-1">{service.data}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-gray-400">
              Any code you add via Squarespace&apos;s Code Injection feature (Settings &gt; Advanced &gt; Code Injection) may also set cookies or collect data. This includes chat widgets like Intercom or Drift, heatmap tools like Hotjar, and A/B testing platforms.
            </p>
          </section>

          {/* Squarespace cookies and tracking */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Cookies Set by Squarespace Websites</h2>
            <p className="mb-6">
              Squarespace sets several first-party cookies on all sites, and additional cookies appear when you enable Commerce or connect third-party analytics. Under GDPR and the ePrivacy Directive, you must disclose every cookie your site sets and obtain consent for non-essential cookies before they are placed.
            </p>
            <div className="space-y-6">
              {SQUARESPACE_COOKIES.map((group) => (
                <div key={group.category}>
                  <h3 className="font-semibold text-white mb-3">{group.category}</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="text-left py-2 px-3 text-gray-400 font-medium">Cookie Name</th>
                          <th className="text-left py-2 px-3 text-gray-400 font-medium">Purpose</th>
                          <th className="text-left py-2 px-3 text-gray-400 font-medium">Duration</th>
                        </tr>
                      </thead>
                      <tbody>
                        {group.cookies.map((cookie) => (
                          <tr key={cookie.name} className="border-b border-white/5">
                            <td className="py-2 px-3 text-blue-400 font-mono text-xs whitespace-nowrap">{cookie.name}</td>
                            <td className="py-2 px-3 text-gray-400">{cookie.purpose}</td>
                            <td className="py-2 px-3 text-gray-500 whitespace-nowrap">{cookie.duration}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-gray-400">
              Need a standalone cookie policy? Use our <Link href="/cookie-policy-generator" className="text-blue-400 hover:text-blue-300">Cookie Policy Generator</Link> to create one that covers every cookie your Squarespace site sets.
            </p>
          </section>

          {/* GDPR and CCPA requirements */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">GDPR and CCPA Requirements for Squarespace Sites</h2>
            <p className="mb-4">
              If your Squarespace website is accessible to visitors in the EU or California — which applies to virtually every public website — you must comply with GDPR and CCPA regardless of where you are based.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                <h3 className="font-semibold text-white mb-2">GDPR Requirements</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2"><span className="text-blue-400 font-bold">1.</span><span><strong className="text-white">Lawful basis</strong> — State the legal basis for each type of data processing (consent, legitimate interest, contractual necessity, legal obligation).</span></li>
                  <li className="flex items-start gap-2"><span className="text-blue-400 font-bold">2.</span><span><strong className="text-white">Cookie consent</strong> — Block non-essential cookies until visitors explicitly opt in. Squarespace&apos;s default banner alone is not sufficient.</span></li>
                  <li className="flex items-start gap-2"><span className="text-blue-400 font-bold">3.</span><span><strong className="text-white">Data subject rights</strong> — Provide mechanisms for data access, portability, rectification, erasure, and restriction of processing.</span></li>
                  <li className="flex items-start gap-2"><span className="text-blue-400 font-bold">4.</span><span><strong className="text-white">Cross-border transfers</strong> — Squarespace stores data on US servers. Disclose this and reference appropriate transfer mechanisms (Standard Contractual Clauses).</span></li>
                  <li className="flex items-start gap-2"><span className="text-blue-400 font-bold">5.</span><span><strong className="text-white">Data retention</strong> — Document how long each type of data is stored and when it is deleted.</span></li>
                </ul>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                <h3 className="font-semibold text-white mb-2">CCPA Requirements</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2"><span className="text-blue-400 font-bold">1.</span><span><strong className="text-white">Right to know</strong> — Disclose what personal information you collect, why, and with whom it is shared.</span></li>
                  <li className="flex items-start gap-2"><span className="text-blue-400 font-bold">2.</span><span><strong className="text-white">Right to delete</strong> — Provide a mechanism for California residents to request deletion of their personal information.</span></li>
                  <li className="flex items-start gap-2"><span className="text-blue-400 font-bold">3.</span><span><strong className="text-white">Right to opt out</strong> — If you &quot;sell&quot; personal information (including sharing with ad networks for targeted advertising), provide a &quot;Do Not Sell My Personal Information&quot; link.</span></li>
                  <li className="flex items-start gap-2"><span className="text-blue-400 font-bold">4.</span><span><strong className="text-white">Non-discrimination</strong> — You cannot deny service or charge different prices to users who exercise their privacy rights.</span></li>
                  <li className="flex items-start gap-2"><span className="text-blue-400 font-bold">5.</span><span><strong className="text-white">Privacy notice at collection</strong> — Inform users at the point of data collection about the categories and purposes of data use.</span></li>
                </ul>
              </div>
            </div>
            <div className="p-4 bg-yellow-500/5 border border-yellow-500/20 rounded-lg">
              <p className="text-sm text-yellow-300">
                <strong>Important:</strong> Squarespace stores all site data on servers in the United States. For EU visitors, this constitutes a cross-border data transfer under GDPR. Your privacy policy must disclose this and reference Squarespace&apos;s Data Processing Agreement, which includes Standard Contractual Clauses for EU-US data transfers.
              </p>
            </div>
          </section>

          {/* Squarespace cookie banner vs. full compliance */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Squarespace&apos;s Built-In Cookie Banner vs. Full Compliance</h2>
            <p className="mb-4">
              Squarespace offers a cookie banner that can be enabled in Settings &gt; Cookies &amp; Visitor Data. While this is a helpful starting point, it has significant limitations for full GDPR compliance:
            </p>
            <div className="space-y-3 mb-4">
              {[
                { feature: "Cookie Notification Banner", sqsp: "Basic notification that cookies are used", compliance: "Requires granular opt-in consent with category controls (analytics, marketing, functional) before any non-essential cookies are set" },
                { feature: "Cookie Blocking", sqsp: "Does not block cookies before consent is given", compliance: "Must prevent non-essential cookies from loading until the visitor actively consents" },
                { feature: "Consent Records", sqsp: "No audit trail of consent decisions", compliance: "Must maintain records of when and how each visitor consented, for regulatory audits" },
                { feature: "Withdraw Consent", sqsp: "No built-in mechanism for visitors to change their cookie preferences after initial choice", compliance: "Must provide an accessible way for visitors to review and change their cookie preferences at any time" },
              ].map((item) => (
                <div key={item.feature} className="p-4 bg-white/5 border border-white/10 rounded-lg">
                  <h3 className="font-semibold text-white text-sm mb-2">{item.feature}</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div>
                      <p className="text-xs text-red-400/80 font-medium mb-1">Squarespace Default</p>
                      <p className="text-sm text-gray-400">{item.sqsp}</p>
                    </div>
                    <div>
                      <p className="text-xs text-green-400/80 font-medium mb-1">Full Compliance Requires</p>
                      <p className="text-sm text-gray-400">{item.compliance}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-400">
              To achieve full cookie compliance on Squarespace, consider using a third-party consent management platform. Tools like CookieYes, Osano, or Iubenda can be added via Squarespace&apos;s Code Injection feature and provide granular consent controls, automatic cookie scanning, and consent record keeping.
            </p>
          </section>

          {/* How to add a privacy policy to Squarespace */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">How to Add a Privacy Policy to Your Squarespace Site</h2>
            <p className="mb-4">
              Squarespace does not have a dedicated privacy policy setting like WordPress. You need to create a page and link it manually. Follow these steps:
            </p>
            <div className="space-y-3">
              {[
                { step: "1. Generate Your Policy", desc: "Use PolicyForge to generate a privacy policy tailored to your Squarespace features. Select the features you use (Analytics, Commerce, Scheduling, Member Areas), specify your third-party integrations, and download the formatted policy text." },
                { step: "2. Create a Legal Page", desc: "In the Squarespace editor, go to Pages and click '+' to add a new page. Choose a blank page or use the 'Legal' layout if your template provides one. Paste your generated privacy policy content." },
                { step: "3. Add to Footer Navigation", desc: "Navigate to the footer section in your site editor. Add a navigation link or text block linking to your privacy policy page. Most Squarespace templates support footer navigation through the editor or the Navigation panel." },
                { step: "4. Link from Forms and Checkout", desc: "Add a line below your form blocks stating 'By submitting this form, you agree to our Privacy Policy' with a link. For Commerce sites, add a privacy policy link on the checkout page via the Commerce settings or a checkout form custom field." },
                { step: "5. Configure Cookie Settings", desc: "Go to Settings > Cookies & Visitor Data and enable the cookie banner. For full GDPR compliance, add a third-party consent tool via Settings > Advanced > Code Injection that blocks non-essential cookies until consent is given." },
                { step: "6. Set Up Data Request Process", desc: "Create a contact form or dedicated email address for privacy requests (e.g., privacy@yourdomain.com). Mention this contact method in your privacy policy so users know how to exercise their data rights." },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
                  <span className="text-green-400 mt-0.5 flex-shrink-0">&#10003;</span>
                  <div>
                    <p className="font-medium text-white text-sm">{item.step}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* PolicyForge vs. Squarespace generic approach */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">PolicyForge vs. Writing Your Own Squarespace Privacy Policy</h2>
            <p className="mb-4">
              Squarespace does not provide a privacy policy generator or template. Site owners typically choose between writing their own policy, hiring a lawyer, or using a generator. Here is how PolicyForge compares:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Feature</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Write Your Own</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Hire a Lawyer</th>
                    <th className="text-left py-3 px-4 text-blue-400 font-medium">PolicyForge</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Cost", own: "Free (your time)", lawyer: "$500 - $3,000+", pf: "Free / $4.99 / $12.99" },
                    { feature: "Time to complete", own: "4-8 hours research", lawyer: "1-2 weeks", pf: "Under 2 minutes" },
                    { feature: "Squarespace-specific", own: "If you research it", lawyer: "If lawyer knows Squarespace", pf: "Yes, built-in" },
                    { feature: "Cookie disclosure", own: "Manual research", lawyer: "Usually included", pf: "Auto-generated table" },
                    { feature: "GDPR coverage", own: "Risk of gaps", lawyer: "Comprehensive", pf: "Full coverage" },
                    { feature: "Updates when laws change", own: "Manual", lawyer: "Additional fees", pf: "Regenerate anytime" },
                  ].map((row) => (
                    <tr key={row.feature} className="border-b border-white/5">
                      <td className="py-3 px-4 text-white font-medium">{row.feature}</td>
                      <td className="py-3 px-4 text-gray-400">{row.own}</td>
                      <td className="py-3 px-4 text-gray-400">{row.lawyer}</td>
                      <td className="py-3 px-4 text-green-400">{row.pf}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Common compliance mistakes */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Common Privacy Compliance Mistakes Squarespace Users Make</h2>
            <p className="mb-6">
              These are the most frequent compliance gaps we see on Squarespace websites. Avoiding these mistakes can save you from regulatory penalties and customer trust issues:
            </p>
            <div className="space-y-3">
              {COMPLIANCE_MISTAKES.map((item) => (
                <div key={item.mistake} className="p-4 bg-white/5 border border-white/10 rounded-lg">
                  <h3 className="font-semibold text-red-400/90 text-sm mb-1">{item.mistake}</h3>
                  <p className="text-sm text-gray-400">{item.why}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="p-8 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-3">Generate Your Squarespace Privacy Policy</h2>
            <p className="text-gray-300 mb-2">
              PolicyForge generates privacy policies designed for Squarespace websites. Cover your analytics, commerce, scheduling, member areas, form blocks, cookies, and third-party integrations — all in under 2 minutes.
            </p>
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <div className="text-sm text-gray-400">
                <span className="text-green-400">&#10003;</span> Squarespace-specific
              </div>
              <div className="text-sm text-gray-400">
                <span className="text-green-400">&#10003;</span> Commerce coverage
              </div>
              <div className="text-sm text-gray-400">
                <span className="text-green-400">&#10003;</span> GDPR & CCPA ready
              </div>
              <div className="text-sm text-gray-400">
                <span className="text-green-400">&#10003;</span> Cookie disclosure
              </div>
            </div>
            <div className="flex flex-wrap gap-3 items-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Generate Now — Free
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </Link>
              <span className="text-sm text-gray-500">Free tier available &middot; Pro from $4.99</span>
            </div>
          </section>

          {/* Scan CTA */}
          <section className="p-6 bg-white/5 border border-white/10 rounded-xl text-center">
            <h2 className="text-xl font-bold text-white mb-2">Already Have a Privacy Policy?</h2>
            <p className="text-gray-400 text-sm mb-4">
              Enter your Squarespace site URL to scan your existing privacy policy across 10 compliance categories. See where you pass and where you need improvements.
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
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link href="/privacy-policy-for-wix-website" className="p-4 bg-white/5 border border-white/10 rounded-lg hover:border-blue-500/30 transition-colors group">
                <h3 className="font-semibold text-white text-sm group-hover:text-blue-400">Wix Privacy Policy</h3>
                <p className="text-xs text-gray-500 mt-1">Privacy policy generator for Wix websites</p>
              </Link>
              <Link href="/privacy-policy-for-wordpress" className="p-4 bg-white/5 border border-white/10 rounded-lg hover:border-blue-500/30 transition-colors group">
                <h3 className="font-semibold text-white text-sm group-hover:text-blue-400">WordPress Privacy Policy</h3>
                <p className="text-xs text-gray-500 mt-1">Full coverage for WordPress sites and plugins</p>
              </Link>
              <Link href="/privacy-policy-for-small-business" className="p-4 bg-white/5 border border-white/10 rounded-lg hover:border-blue-500/30 transition-colors group">
                <h3 className="font-semibold text-white text-sm group-hover:text-blue-400">Small Business Privacy Policy</h3>
                <p className="text-xs text-gray-500 mt-1">Compliance for small business websites</p>
              </Link>
              <Link href="/cookie-policy-generator" className="p-4 bg-white/5 border border-white/10 rounded-lg hover:border-blue-500/30 transition-colors group">
                <h3 className="font-semibold text-white text-sm group-hover:text-blue-400">Cookie Policy Generator</h3>
                <p className="text-xs text-gray-500 mt-1">Standalone cookie disclosure document</p>
              </Link>
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t border-white/10 mt-16 py-8 text-center text-sm text-gray-500">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-center gap-6 mb-4">
            <Link href="/" className="hover:text-gray-300 transition-colors">Generator</Link>
            <Link href="/check" className="hover:text-gray-300 transition-colors">Compliance Checker</Link>
            <Link href="/tos" className="hover:text-gray-300 transition-colors">ToS Generator</Link>
          </div>
          <p>
            PolicyForge &mdash; Part of the{" "}
            <a href="https://dashboard-mocha-delta-98.vercel.app" className="text-blue-400 hover:text-blue-300">
              Autonomous Claude Experiment
            </a>
          </p>
          <p className="mt-2 text-xs text-gray-600">
            Disclaimer: This generator provides template privacy policies for informational purposes.
            Consult a qualified attorney for jurisdiction-specific legal advice.
          </p>
        </div>
      </footer>
    </div>
  );
}
