import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy for Wix Website | Free Generator - PolicyForge",
  description:
    "Generate a free privacy policy for your Wix website. Covers Wix Analytics, Wix Forms, Wix Stores, Wix Chat, Wix App Market integrations, cookies, GDPR and CCPA compliance.",
  keywords:
    "privacy policy for wix website, wix privacy policy template, wix site privacy policy generator, wix GDPR compliance, wix privacy policy, wix stores privacy policy, wix cookie policy, wix data protection",
  openGraph: {
    title: "Free Privacy Policy Generator for Wix Websites",
    description: "Create a GDPR & CCPA compliant privacy policy for your Wix site in minutes. Covers Wix Analytics, Forms, Stores, Chat, App Market integrations, and more.",
    type: "website",
  },
};

const WIX_DATA_COLLECTION = [
  {
    feature: "Wix Analytics",
    data: ["Visitor IP address (anonymized in some regions)", "Pages viewed, session duration, and bounce rate", "Referral source, UTM parameters, and search keywords", "Device type, browser, operating system, and screen resolution", "Geographic location (country, region, city)"],
    concern: "Wix Analytics is enabled by default on all Wix sites. Site owners cannot fully disable it without contacting Wix support. Data is processed on Wix servers.",
  },
  {
    feature: "Wix Forms",
    data: ["Name, email address, phone number, and any custom fields", "Form submission timestamps", "IP address and browser information of the submitter", "File uploads attached to form submissions"],
    concern: "Form submissions are stored in the Wix CRM (Contacts). Data is retained until the site owner manually deletes it. Connected automations may forward data to third-party services.",
  },
  {
    feature: "Wix Stores (E-Commerce)",
    data: ["Customer name, email, phone, billing and shipping addresses", "Order history, transaction amounts, and payment method", "Cart contents and abandoned cart data", "Product reviews and ratings", "Customer account credentials and saved preferences"],
    concern: "Payment processing is handled by Wix Payments (powered by Stripe) or PayPal. Card data is never stored on Wix servers, but transaction metadata is retained for compliance.",
  },
  {
    feature: "Wix Chat & Inbox",
    data: ["Chat messages and conversation history", "Visitor name and email (if provided or logged in)", "IP address and geographic location of chat participants", "Chat timestamps and response metrics"],
    concern: "Chat data is stored in Wix Inbox and linked to the visitor's contact record in Wix CRM. Automated chatbot responses may process data through Wix's AI systems.",
  },
  {
    feature: "Wix Members Area",
    data: ["Member registration data (name, email, password)", "Profile information and custom member fields", "Login activity, session tokens, and authentication logs", "Member-generated content (posts, comments, forum activity)"],
    concern: "Member data is tied to Wix's authentication system. If using social login (Google, Facebook), additional profile data may be shared with Wix.",
  },
  {
    feature: "Wix Bookings",
    data: ["Client name, email, phone number", "Booking dates, times, and service details", "Payment information for paid bookings", "Cancellation and rescheduling history"],
    concern: "Booking confirmations and reminders are sent via Wix's email system. Calendar sync features may share data with Google Calendar or Outlook.",
  },
];

const WIX_VS_POLICYFORGE = [
  {
    feature: "Policy generation method",
    wix: "Auto-generated template based on site type",
    policyforge: "Customized based on your specific features and integrations",
  },
  {
    feature: "Third-party app coverage",
    wix: "Does not account for Wix App Market apps",
    policyforge: "Covers all third-party integrations you specify",
  },
  {
    feature: "GDPR legal basis explanation",
    wix: "Generic mention of GDPR",
    policyforge: "Detailed legal basis for each type of data processing",
  },
  {
    feature: "Cookie disclosure detail",
    wix: "Basic cookie statement",
    policyforge: "Full cookie table with names, purposes, and durations",
  },
  {
    feature: "CCPA/CPRA compliance",
    wix: "Limited California-specific language",
    policyforge: "Complete CCPA sections including opt-out rights and data categories",
  },
  {
    feature: "E-commerce specific clauses",
    wix: "Generic if Wix Stores detected",
    policyforge: "Detailed payment processor, shipping, and order data clauses",
  },
  {
    feature: "Data retention periods",
    wix: "Not specified",
    policyforge: "Explicit retention periods for each data category",
  },
  {
    feature: "Update frequency",
    wix: "Rarely updated by Wix",
    policyforge: "You control and update whenever your site changes",
  },
];

const COMMON_MISTAKES = [
  {
    mistake: "Relying solely on Wix's auto-generated privacy policy",
    why: "Wix's template is generic and does not reflect your specific third-party integrations, custom forms, or marketing tools. It may miss critical disclosures required by GDPR or CCPA.",
  },
  {
    mistake: "Forgetting to disclose Wix App Market integrations",
    why: "Every app you install from the Wix App Market (e.g., Privy, Omnisend, LiveChat, TidyCal) may collect visitor data independently. Your privacy policy must list each one.",
  },
  {
    mistake: "Not adding a cookie consent banner",
    why: "Wix sets tracking cookies through Wix Analytics and third-party apps. Without a consent mechanism, EU visitors are tracked without authorization, violating GDPR and the ePrivacy Directive.",
  },
  {
    mistake: "Ignoring Wix's own data collection",
    why: "Wix itself collects data as a platform provider (server logs, analytics, fraud prevention). Your policy should distinguish between data you collect and data Wix collects as your processor.",
  },
  {
    mistake: "Missing the privacy policy link in the site footer",
    why: "Many Wix site owners add a privacy policy page but forget to link it in the footer menu. Visitors and regulators expect the link to be accessible from every page.",
  },
  {
    mistake: "Not updating the policy after adding new apps or features",
    why: "Adding Wix Bookings, Wix Events, or a new marketing app changes your data collection profile. Outdated policies create compliance gaps that can lead to fines.",
  },
];

const FAQ_ITEMS = [
  {
    q: "Does my Wix website need a privacy policy?",
    a: "Yes, every Wix website needs a privacy policy. Wix itself collects visitor data through its built-in analytics, server logs, and platform cookies. If you use Wix Forms, Wix Chat, Wix Stores, or any app from the Wix App Market, you are collecting additional personal data. Privacy laws like GDPR (EU), CCPA (California), LGPD (Brazil), and PIPEDA (Canada) all require websites that collect personal data to have a publicly accessible privacy policy. Even a simple Wix portfolio site with a contact form triggers this requirement.",
  },
  {
    q: "Does Wix provide a built-in privacy policy?",
    a: "Wix offers an auto-generated privacy policy through Settings > Legal & Compliance > Privacy Policy. When enabled, Wix creates a basic template based on your site type and detected features. However, this auto-generated policy is generic — it uses boilerplate language that does not reflect your specific third-party integrations, custom data collection practices, or the particular Wix App Market apps you have installed. It serves as a starting point but is not sufficient for full GDPR or CCPA compliance. PolicyForge generates a customized policy that covers your exact setup.",
  },
  {
    q: "How do I add a privacy policy to my Wix site?",
    a: "There are two main methods. First, through Wix Settings: go to Settings > Legal & Compliance > Privacy Policy, where you can either use Wix's template or paste your own custom policy. This automatically adds a link in your site footer. Second, you can create a dedicated page: add a new page in your Wix Editor, paste your privacy policy content, then add a link to it in your footer menu and any forms. For cookie consent, install Wix's Cookie Consent Banner or a third-party solution from the App Market. Ensure the privacy policy link is visible on every page of your site.",
  },
  {
    q: "What data does Wix collect from my website visitors?",
    a: "Wix collects data at two levels. As the platform provider, Wix collects server logs (IP addresses, browser info, access times), security and fraud prevention data, and performance metrics. Through Wix Analytics (enabled by default), it tracks page views, session duration, referral sources, device types, and geographic location. Beyond platform-level collection, any Wix features you enable — Forms, Chat, Stores, Bookings, Members Area — collect additional personal data specific to those features. Third-party apps from the Wix App Market add another layer of data collection that you must disclose.",
  },
  {
    q: "Is Wix GDPR compliant?",
    a: "Wix provides GDPR compliance tools for site owners, but compliance ultimately depends on how you configure your site. Wix offers a Data Processing Agreement (DPA) that you can accept in your account settings, a cookie consent banner tool, data export and deletion capabilities through the Wix CRM, and the ability to designate a privacy policy page. However, Wix cannot ensure compliance on your behalf. You are responsible for having a comprehensive privacy policy, configuring cookie consent correctly, responding to data subject requests, and ensuring all third-party apps you install also comply with GDPR. PolicyForge helps by generating a policy that covers all these requirements.",
  },
];

export default function PrivacyPolicyForWixWebsite() {
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
          Privacy Policy for Wix Website
        </h1>
        <p className="text-xl text-gray-400 mb-8">
          Wix powers over 250 million websites worldwide. Whether you run a portfolio, business site, or online store on Wix, the platform collects visitor data through its built-in analytics, forms, and third-party app integrations. Privacy laws require you to disclose this. Generate a complete, Wix-specific privacy policy in under 2 minutes.
        </p>

        <div className="flex flex-wrap gap-3 mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg text-lg hover:opacity-90 transition-opacity"
          >
            Generate Your Wix Privacy Policy
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
          {/* Why Wix websites need a privacy policy */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Why Your Wix Website Needs a Privacy Policy</h2>
            <p className="mb-4">
              Every Wix website collects personal data, even if you haven&apos;t intentionally set up data collection. Wix as a platform operates analytics, sets cookies, and logs server requests for every visitor. The moment you add a contact form, enable Wix Chat, install an app from the Wix App Market, or set up Wix Stores, you are collecting and processing significantly more personal information.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                <h3 className="font-semibold text-white mb-2">Platform-Level Collection</h3>
                <p className="text-sm text-gray-400">
                  Wix automatically collects server logs, IP addresses, browser information, and analytics data for every visitor. Wix Analytics tracks page views, sessions, referrals, and device information by default. You cannot fully disable this.
                </p>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                <h3 className="font-semibold text-white mb-2">Feature-Level Collection</h3>
                <p className="text-sm text-gray-400">
                  Wix Forms captures names and emails. Wix Chat logs conversations. Wix Bookings stores client details and scheduling data. Wix Members Area collects registration credentials and profile information.
                </p>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                <h3 className="font-semibold text-white mb-2">Third-Party App Collection</h3>
                <p className="text-sm text-gray-400">
                  Apps from the Wix App Market (Google Analytics, Meta Pixel, Mailchimp, Privy, Omnisend, LiveChat) each have their own data collection practices that you must disclose in your privacy policy.
                </p>
              </div>
            </div>
            <p>
              GDPR (EU) can impose fines up to <strong className="text-white">&euro;20 million or 4% of global revenue</strong>. CCPA (California) carries penalties of <strong className="text-white">$7,500 per intentional violation</strong>. Beyond legal risk, Google requires a privacy policy for AdSense approval, and payment processors like Stripe (which powers Wix Payments) mandate that merchants maintain compliant privacy policies. Not having a proper privacy policy on your Wix site is a legal and business liability.
            </p>
          </section>

          {/* What data Wix sites collect */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">What Data Does Your Wix Site Collect?</h2>
            <p className="mb-6">
              Data collection on a Wix site happens at multiple levels. Understanding each source is critical because your privacy policy must account for all of them. Here is a breakdown by Wix feature:
            </p>
            <div className="space-y-4">
              {WIX_DATA_COLLECTION.map((item) => (
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

          {/* Wix's data collection vs. site owner responsibility */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Wix&apos;s Data Collection vs. Your Responsibility</h2>
            <p className="mb-4">
              A critical distinction that many Wix site owners miss: Wix operates as both a <strong className="text-white">data controller</strong> (for its own platform purposes) and a <strong className="text-white">data processor</strong> (acting on your behalf to deliver your website). Understanding this split is essential for writing an accurate privacy policy.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                <h3 className="font-semibold text-white mb-2">What Wix Controls (as Data Controller)</h3>
                <ul className="space-y-1 text-sm text-gray-400">
                  <li className="flex items-start gap-2"><span className="text-blue-400">&#8226;</span>Wix account data (your login, billing, plan info)</li>
                  <li className="flex items-start gap-2"><span className="text-blue-400">&#8226;</span>Platform security and fraud prevention logs</li>
                  <li className="flex items-start gap-2"><span className="text-blue-400">&#8226;</span>Wix-level analytics aggregated across the platform</li>
                  <li className="flex items-start gap-2"><span className="text-blue-400">&#8226;</span>Infrastructure performance monitoring</li>
                  <li className="flex items-start gap-2"><span className="text-blue-400">&#8226;</span>Cookie consent preferences stored by Wix</li>
                </ul>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                <h3 className="font-semibold text-white mb-2">What You Control (as Data Controller)</h3>
                <ul className="space-y-1 text-sm text-gray-400">
                  <li className="flex items-start gap-2"><span className="text-blue-400">&#8226;</span>Form submissions and contact data collected from visitors</li>
                  <li className="flex items-start gap-2"><span className="text-blue-400">&#8226;</span>E-commerce data (orders, customers, payments via Wix Stores)</li>
                  <li className="flex items-start gap-2"><span className="text-blue-400">&#8226;</span>Member registrations and profile data</li>
                  <li className="flex items-start gap-2"><span className="text-blue-400">&#8226;</span>Chat conversations through Wix Chat/Inbox</li>
                  <li className="flex items-start gap-2"><span className="text-blue-400">&#8226;</span>Third-party app data (anything installed from Wix App Market)</li>
                </ul>
              </div>
            </div>
            <div className="p-4 bg-yellow-500/5 border border-yellow-500/20 rounded-lg">
              <p className="text-sm text-yellow-300">
                <strong>Key takeaway:</strong> Wix has its own privacy policy (<a href="https://www.wix.com/about/privacy" className="text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer">wix.com/about/privacy</a>) that covers its platform-level data collection. However, you are independently responsible for disclosing what data you collect through your site, what you do with it, who you share it with, and how visitors can exercise their privacy rights. Wix&apos;s privacy policy does not cover your obligations.
              </p>
            </div>
          </section>

          {/* Wix third-party integrations */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Wix App Market and Third-Party Integrations</h2>
            <p className="mb-4">
              The Wix App Market offers over 500 apps that extend your site&apos;s functionality. Many of these apps collect visitor data independently. Your privacy policy must disclose each integration. Here are the most commonly installed apps and their data implications:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                <h3 className="font-semibold text-white text-sm mb-2">Google Analytics</h3>
                <p className="text-xs text-gray-400">Tracks page views, sessions, user demographics, events, and conversions. Sets cookies (_ga, _gid, _gat). Data is sent to Google servers in the US. Requires explicit consent under GDPR.</p>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                <h3 className="font-semibold text-white text-sm mb-2">Meta Pixel (Facebook)</h3>
                <p className="text-xs text-gray-400">Tracks visitor actions for ad targeting and conversion measurement. Creates a cross-site profile linked to Facebook accounts. Sets _fbp and _fbc cookies. Requires consent in the EU.</p>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                <h3 className="font-semibold text-white text-sm mb-2">Mailchimp / Omnisend</h3>
                <p className="text-xs text-gray-400">Collects email addresses and subscriber preferences via popups and embedded forms. Tracks email open rates and click-through data. Stores subscriber data on external servers.</p>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                <h3 className="font-semibold text-white text-sm mb-2">Privy / Poptin (Pop-ups)</h3>
                <p className="text-xs text-gray-400">Captures email addresses, names, and phone numbers through popup forms. Tracks which popups were displayed and conversion rates. May set their own cookies for targeting.</p>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                <h3 className="font-semibold text-white text-sm mb-2">Google Ads / TikTok Pixel</h3>
                <p className="text-xs text-gray-400">Conversion tracking pixels that monitor which ad clicks lead to actions on your site. Create advertising profiles and may share data with ad networks for remarketing.</p>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                <h3 className="font-semibold text-white text-sm mb-2">LiveChat / Tidio / Jivochat</h3>
                <p className="text-xs text-gray-400">Real-time messaging widgets that collect visitor names, emails, chat transcripts, and browsing behavior. Data is typically stored on the app provider&apos;s servers outside your control.</p>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              <strong className="text-white">Rule of thumb:</strong> If you installed an app from the Wix App Market, check its own privacy policy and add a disclosure to yours. Each app that touches visitor data needs its own entry in your privacy policy&apos;s &ldquo;Third-Party Services&rdquo; section.
            </p>
          </section>

          {/* GDPR and CCPA for Wix */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">GDPR and CCPA Requirements for Wix Sites</h2>
            <p className="mb-4">
              If your Wix site is accessible to visitors in the EU or California — which applies to virtually every public website — you must comply with these regulations regardless of where you are located.
            </p>
            <div className="space-y-4 mb-4">
              <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                <h3 className="font-semibold text-white mb-2">GDPR Requirements</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2"><span className="text-blue-400 font-bold">1.</span><span><strong className="text-white">Lawful basis</strong> — Document the legal basis for each type of data processing (consent, legitimate interest, contractual necessity, or legal obligation)</span></li>
                  <li className="flex items-start gap-2"><span className="text-blue-400 font-bold">2.</span><span><strong className="text-white">Cookie consent</strong> — Obtain explicit opt-in consent before setting non-essential cookies (Wix Analytics, Google Analytics, Meta Pixel all require consent)</span></li>
                  <li className="flex items-start gap-2"><span className="text-blue-400 font-bold">3.</span><span><strong className="text-white">Data subject rights</strong> — Enable visitors to request access, portability, rectification, erasure, and restriction of their data</span></li>
                  <li className="flex items-start gap-2"><span className="text-blue-400 font-bold">4.</span><span><strong className="text-white">Data Processing Agreement</strong> — Accept Wix&apos;s DPA (available in your Wix account settings) and ensure third-party apps have their own DPAs</span></li>
                  <li className="flex items-start gap-2"><span className="text-blue-400 font-bold">5.</span><span><strong className="text-white">Cross-border transfers</strong> — Wix processes data globally; disclose transfers to the US and any other countries where third-party apps operate</span></li>
                </ul>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                <h3 className="font-semibold text-white mb-2">CCPA / CPRA Requirements</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2"><span className="text-blue-400 font-bold">1.</span><span><strong className="text-white">Right to know</strong> — Disclose the categories of personal information collected, the sources, the purposes, and the third parties it is shared with</span></li>
                  <li className="flex items-start gap-2"><span className="text-blue-400 font-bold">2.</span><span><strong className="text-white">Right to delete</strong> — Provide a mechanism for California consumers to request deletion of their personal data</span></li>
                  <li className="flex items-start gap-2"><span className="text-blue-400 font-bold">3.</span><span><strong className="text-white">Right to opt out</strong> — If you use Meta Pixel, Google Ads, or other tracking for advertising, this may constitute &ldquo;selling&rdquo; or &ldquo;sharing&rdquo; data under CPRA, requiring a &ldquo;Do Not Sell or Share My Personal Information&rdquo; link</span></li>
                  <li className="flex items-start gap-2"><span className="text-blue-400 font-bold">4.</span><span><strong className="text-white">Financial incentives</strong> — If you offer discounts for email signup, disclose the value exchange in your privacy policy</span></li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Wix provides some built-in tools for GDPR compliance (cookie consent banner, DPA, data export/deletion through CRM). However, these tools do not write your privacy policy for you. For a GDPR-focused policy, see our <Link href="/gdpr-privacy-policy-generator" className="text-blue-400 hover:text-blue-300">GDPR Privacy Policy Generator</Link>.
            </p>
          </section>

          {/* How to add a privacy policy to Wix */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">How to Add a Privacy Policy to Your Wix Site</h2>
            <p className="mb-4">
              Wix makes it relatively straightforward to add a privacy policy. Here are the steps:
            </p>
            <div className="space-y-3">
              {[
                { step: "1. Generate Your Policy", desc: "Use PolicyForge to generate a privacy policy tailored to your Wix site. Select the Wix features you use (Stores, Forms, Chat, Bookings, Members Area), list your App Market integrations, and specify your target regions. Download the formatted text." },
                { step: "2. Add via Wix Settings (Recommended)", desc: "In your Wix Dashboard, go to Settings > Legal & Compliance > Privacy Policy. Toggle it on and paste your custom policy text. Wix will automatically add a 'Privacy Policy' link to your site footer." },
                { step: "3. Or Create a Dedicated Page", desc: "Alternatively, add a new page in the Wix Editor (Add Page > Blank Page). Name it 'Privacy Policy,' paste your content, and add it to your site's navigation or footer menu. Set the page to 'noindex' if you prefer it not to appear in search results." },
                { step: "4. Link in Footer and Forms", desc: "Ensure the privacy policy link appears in your site footer (visible on every page). Add a privacy policy acceptance checkbox to any Wix Forms you use. For Wix Stores, the checkout process should link to your policy." },
                { step: "5. Enable Cookie Consent Banner", desc: "Go to Settings > Cookie Consent Banner (or install Wix's Cookie Consent app). Configure it to block non-essential cookies until visitors consent. Link your privacy policy in the banner. Choose between 'notice only' (not GDPR compliant) and 'opt-in' mode." },
                { step: "6. Accept Wix's Data Processing Agreement", desc: "For GDPR compliance, go to your Wix account settings and accept Wix's DPA. This formalizes Wix's role as your data processor and documents the data protection standards they commit to." },
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

          {/* Wix vs PolicyForge comparison */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Wix Auto-Generated Policy vs. PolicyForge</h2>
            <p className="mb-4">
              Wix offers a built-in privacy policy template, but it has significant limitations compared to a dedicated privacy policy generator. Here is a side-by-side comparison:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-3 text-gray-400 font-medium">Feature</th>
                    <th className="text-left py-3 px-3 text-gray-400 font-medium">Wix Auto-Generated</th>
                    <th className="text-left py-3 px-3 text-blue-400 font-medium">PolicyForge</th>
                  </tr>
                </thead>
                <tbody>
                  {WIX_VS_POLICYFORGE.map((row) => (
                    <tr key={row.feature} className="border-b border-white/5">
                      <td className="py-3 px-3 text-white font-medium text-xs">{row.feature}</td>
                      <td className="py-3 px-3 text-gray-500 text-xs">{row.wix}</td>
                      <td className="py-3 px-3 text-green-400 text-xs">{row.policyforge}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              Wix&apos;s template is a reasonable starting point for very simple sites, but any Wix site with e-commerce, marketing apps, or EU visitors needs a more comprehensive policy. PolicyForge generates that comprehensive policy in minutes.
            </p>
          </section>

          {/* Common mistakes */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Common Privacy Policy Mistakes Wix Site Owners Make</h2>
            <p className="mb-4">
              These are the most frequent privacy compliance gaps we see on Wix websites:
            </p>
            <div className="space-y-3">
              {COMMON_MISTAKES.map((item) => (
                <div key={item.mistake} className="p-4 bg-white/5 border border-white/10 rounded-lg">
                  <h3 className="font-semibold text-red-400 text-sm mb-1">{item.mistake}</h3>
                  <p className="text-xs text-gray-400">{item.why}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="p-8 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-3">Generate Your Wix Privacy Policy</h2>
            <p className="text-gray-300 mb-2">
              PolicyForge generates privacy policies specifically designed for Wix websites. Cover your platform-level data collection, Wix Forms, Wix Stores, Wix Chat, App Market integrations, cookies, GDPR, and CCPA requirements — all in under 2 minutes.
            </p>
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <div className="text-sm text-gray-400">
                <span className="text-green-400">&#10003;</span> Wix-specific
              </div>
              <div className="text-sm text-gray-400">
                <span className="text-green-400">&#10003;</span> Wix Stores coverage
              </div>
              <div className="text-sm text-gray-400">
                <span className="text-green-400">&#10003;</span> GDPR & CCPA ready
              </div>
              <div className="text-sm text-gray-400">
                <span className="text-green-400">&#10003;</span> App Market integrations
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
            <h2 className="text-xl font-bold text-white mb-2">Already Have a Privacy Policy on Your Wix Site?</h2>
            <p className="text-gray-400 text-sm mb-4">
              Enter your Wix site URL to scan your existing privacy policy across 10 compliance categories. See where you pass and where you need improvements.
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
              <Link href="/privacy-policy-for-wordpress" className="p-4 bg-white/5 border border-white/10 rounded-lg hover:border-blue-500/30 transition-colors group">
                <h3 className="font-semibold text-white text-sm group-hover:text-blue-400">WordPress Privacy Policy</h3>
                <p className="text-xs text-gray-500 mt-1">Privacy policies for WordPress sites and WooCommerce stores</p>
              </Link>
              <Link href="/privacy-policy-for-squarespace" className="p-4 bg-white/5 border border-white/10 rounded-lg hover:border-blue-500/30 transition-colors group">
                <h3 className="font-semibold text-white text-sm group-hover:text-blue-400">Squarespace Privacy Policy</h3>
                <p className="text-xs text-gray-500 mt-1">Privacy policies for Squarespace websites and online stores</p>
              </Link>
              <Link href="/privacy-policy-for-small-business" className="p-4 bg-white/5 border border-white/10 rounded-lg hover:border-blue-500/30 transition-colors group">
                <h3 className="font-semibold text-white text-sm group-hover:text-blue-400">Small Business Privacy Policy</h3>
                <p className="text-xs text-gray-500 mt-1">Complete privacy compliance for small businesses</p>
              </Link>
              <Link href="/gdpr-privacy-policy-generator" className="p-4 bg-white/5 border border-white/10 rounded-lg hover:border-blue-500/30 transition-colors group">
                <h3 className="font-semibold text-white text-sm group-hover:text-blue-400">GDPR Policy Generator</h3>
                <p className="text-xs text-gray-500 mt-1">EU-specific GDPR compliant privacy policy generator</p>
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
            <Link href="/tos" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
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
