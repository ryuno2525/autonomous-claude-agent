import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy for WordPress Sites | Free Generator - PolicyForge",
  description:
    "Generate a free privacy policy for your WordPress website. Covers WooCommerce, Contact Form 7, Jetpack, Akismet, Yoast, cookies, analytics, and GDPR/CCPA compliance.",
  keywords:
    "wordpress privacy policy, wordpress privacy policy generator, wordpress GDPR, woocommerce privacy policy, wordpress cookie policy, wordpress compliance, wordpress privacy policy page, wordpress data protection",
  openGraph: {
    title: "Free Privacy Policy Generator for WordPress Sites",
    description: "Create a GDPR & CCPA compliant privacy policy for your WordPress site in minutes. Covers WooCommerce, plugins, cookies, analytics, and more.",
    type: "website",
  },
};

const WP_PLUGIN_DATA = [
  {
    plugin: "WooCommerce",
    data: ["Customer name, email, phone, billing/shipping address", "Order history, payment method, transaction IDs", "Cart contents and browsing behavior", "Account credentials and profile information"],
    concern: "Processes payment card data through gateways (Stripe, PayPal). Must disclose all payment processors.",
  },
  {
    plugin: "Yoast SEO",
    data: ["Site metadata sent to Yoast API for analysis", "Schema markup containing business/personal info", "Redirect tracking and 404 logs", "MyYoast account data if linked"],
    concern: "Premium version sends data to Yoast servers for SEO analysis and license validation.",
  },
  {
    plugin: "Contact Form 7 / WPForms",
    data: ["Form submission data (name, email, message, custom fields)", "IP address and user agent of submitter", "File uploads attached to submissions", "Submission timestamps and referrer URLs"],
    concern: "Stores submissions in the database by default. Some configs email data to third-party addresses.",
  },
  {
    plugin: "Jetpack",
    data: ["Page views, clicks, and referrers (Jetpack Stats)", "Commenter IP addresses and emails", "Brute force attack protection logs (IP-based)", "Site activity logs and uptime monitoring data"],
    concern: "Sends analytics data to WordPress.com (Automattic) servers. Connected to Gravatar for commenter avatars.",
  },
  {
    plugin: "Akismet",
    data: ["Commenter name, email, URL, and IP address", "User agent and referrer strings", "Full comment content for spam analysis", "Previously approved/rejected comment history"],
    concern: "Sends all comment data to Automattic's cloud servers for spam detection. Required disclosure under GDPR.",
  },
  {
    plugin: "Elementor",
    data: ["Form submission data (if using Elementor Forms)", "Usage analytics sent to Elementor servers (Pro)", "Font loading requests to Google Fonts / Elementor CDN", "License validation pings"],
    concern: "Pro version may load fonts and resources from external CDNs, creating third-party data transfers.",
  },
];

const WP_COOKIES = [
  {
    category: "WordPress Core Cookies",
    cookies: [
      { name: "wordpress_logged_in_[hash]", purpose: "Authenticates logged-in users and maintains sessions", duration: "Session / 14 days (Remember Me)" },
      { name: "wordpress_test_cookie", purpose: "Tests whether browser accepts cookies", duration: "Session" },
      { name: "wp-settings-{user}", purpose: "Stores user dashboard preferences and settings", duration: "1 year" },
      { name: "comment_author_[hash]", purpose: "Remembers commenter name, email, and website URL", duration: "347 days" },
    ],
  },
  {
    category: "WooCommerce Cookies",
    cookies: [
      { name: "woocommerce_cart_hash", purpose: "Tracks cart contents for the shopping session", duration: "Session" },
      { name: "woocommerce_items_in_cart", purpose: "Indicates whether cart contains items", duration: "Session" },
      { name: "wp_woocommerce_session_[hash]", purpose: "Links customer to stored session data on the server", duration: "2 days" },
    ],
  },
  {
    category: "Analytics & Tracking Cookies",
    cookies: [
      { name: "_ga / _ga_[ID]", purpose: "Google Analytics: distinguishes unique users and sessions", duration: "2 years / 2 years" },
      { name: "_gid", purpose: "Google Analytics: distinguishes users for 24 hours", duration: "24 hours" },
      { name: "tk_ai / tk_qs / tk_lr", purpose: "Jetpack Stats: tracks page views and referrers", duration: "Session / varies" },
    ],
  },
  {
    category: "Social & Embed Cookies",
    cookies: [
      { name: "Various Facebook cookies", purpose: "Facebook Like/Share buttons and pixel tracking", duration: "Varies (up to 2 years)" },
      { name: "Various Twitter cookies", purpose: "Twitter embed and share button functionality", duration: "Varies" },
      { name: "__cfduid / cf_clearance", purpose: "Cloudflare CDN: bot protection and performance", duration: "30 days" },
    ],
  },
];

const GDPR_CHECKLIST = [
  "Disclose all plugins that collect personal data",
  "List every type of cookie your site sets (core, analytics, marketing)",
  "Explain the legal basis for each type of data processing",
  "Provide a mechanism for data access/export requests",
  "Provide a mechanism for data deletion/erasure requests",
  "Install and configure a cookie consent banner",
  "Add privacy policy link to site footer and forms",
  "Document data retention periods for each data type",
  "Disclose any cross-border data transfers",
  "Include a Data Protection Officer contact (if applicable)",
  "List all third-party services that receive user data",
  "Explain how users can withdraw consent",
];

const FAQ_ITEMS = [
  {
    q: "Does my WordPress blog need a privacy policy?",
    a: "Yes. Even a simple WordPress blog collects personal data through comments (name, email, IP address), analytics plugins, and cookies. If you use Google Analytics, social sharing buttons, or any contact form, you're processing personal data. GDPR, CCPA, and other privacy laws require disclosure regardless of your site's size. WordPress itself recommends every site have a privacy policy — that's why there's a built-in privacy policy tool since version 4.9.6."
  },
  {
    q: "Does WordPress have a built-in privacy policy feature?",
    a: "Yes. Since WordPress 4.9.6 (released May 2018), WordPress includes a privacy policy template accessible at Settings > Privacy. It generates a basic template with sections for comments, analytics, forms, and cookies. However, this template is a starting point — it uses generic placeholder text and doesn't automatically detect your installed plugins. You need to manually customize it for your specific setup, which is where PolicyForge saves significant time."
  },
  {
    q: "What WordPress plugins require privacy policy disclosures?",
    a: "Any plugin that collects, stores, or transmits personal data needs disclosure. The most common ones are: WooCommerce (payment and order data), Contact Form 7 and WPForms (form submissions), Akismet (comment data sent to external servers), Jetpack (analytics data sent to WordPress.com), Yoast SEO (site data for SEO analysis), Google Analytics plugins, email marketing integrations (Mailchimp, ConvertKit), and social login plugins. If you're unsure, check each plugin's privacy documentation."
  },
  {
    q: "How do I make my WooCommerce store GDPR compliant?",
    a: "WooCommerce has built-in GDPR tools: checkout consent checkboxes, data export/erasure in WP admin, and personal data retention settings under WooCommerce > Settings > Accounts & Privacy. However, you also need a privacy policy that discloses what order data you collect, which payment gateways process card data, how long you retain order records, and whether you share data with shipping providers or marketing tools. PolicyForge Pro generates WooCommerce-specific privacy policies covering all of these."
  },
  {
    q: "Do I need a cookie consent banner on my WordPress site?",
    a: "If your site is accessible to visitors in the EU (which is virtually all public websites), yes. GDPR requires informed consent before setting non-essential cookies. WordPress core sets some essential cookies (login, session), but analytics cookies (Google Analytics), marketing cookies (Facebook Pixel), and most third-party plugin cookies require explicit opt-in consent. Popular cookie consent plugins include CookieYes, Complianz, and Cookie Notice for GDPR & CCPA."
  },
  {
    q: "Where should I put my privacy policy on my WordPress site?",
    a: "WordPress has a dedicated Settings > Privacy page where you select your privacy policy page. This enables the built-in privacy link in login and registration forms. Beyond that, add your privacy policy link to: your site footer (via Appearance > Menus or a widget), your comment form area, any contact or signup forms, your WooCommerce checkout page (WooCommerce adds this automatically if configured), and your site's cookie consent banner."
  },
  {
    q: "How does Akismet affect my privacy policy?",
    a: "Akismet is a major privacy consideration. Every comment submitted on your site — including the commenter's name, email, IP address, user agent, and full comment text — is sent to Automattic's servers in the United States for spam analysis. Under GDPR, this constitutes a cross-border data transfer that must be disclosed. Your privacy policy needs to state that comment data is processed by a third-party service (Automattic/Akismet) and explain the legal basis for this processing."
  },
  {
    q: "How often should I update my WordPress privacy policy?",
    a: "Update your privacy policy whenever you: install a new plugin that collects user data, add a new analytics or marketing service, change payment gateways or shipping providers, start collecting new types of data (e.g., adding a newsletter signup), change your data retention practices, or when privacy laws in your target regions change. A good practice is to review your policy quarterly and whenever you perform major plugin updates."
  },
];

export default function PrivacyPolicyForWordPress() {
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
          Privacy Policy for WordPress Sites
        </h1>
        <p className="text-xl text-gray-400 mb-8">
          WordPress powers 43% of all websites. Whether you run a blog, business site, or WooCommerce store, your plugins collect user data that privacy laws require you to disclose. Generate a complete privacy policy in under 2 minutes.
        </p>

        <div className="flex flex-wrap gap-3 mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg text-lg hover:opacity-90 transition-opacity"
          >
            Generate Your WordPress Privacy Policy
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
          {/* Why WordPress sites need privacy policies */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Why Your WordPress Site Needs a Privacy Policy</h2>
            <p className="mb-4">
              Even a basic WordPress installation collects personal data. The moment someone leaves a comment, fills out a contact form, or visits a page tracked by Google Analytics, you are processing personal information. Add WooCommerce for e-commerce, and you are handling payment card data, shipping addresses, and order histories.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                <h3 className="font-semibold text-white mb-2">WooCommerce Stores</h3>
                <p className="text-sm text-gray-400">
                  WooCommerce collects names, addresses, email, phone numbers, payment details, and order histories. Payment gateways like Stripe and PayPal process card data externally. All of this must be disclosed with specific legal bases.
                </p>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                <h3 className="font-semibold text-white mb-2">Contact Forms</h3>
                <p className="text-sm text-gray-400">
                  Contact Form 7, WPForms, and Gravity Forms store submissions containing names, emails, and any custom fields you add. Many configurations also capture IP addresses, user agents, and file uploads.
                </p>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                <h3 className="font-semibold text-white mb-2">Analytics & Tracking</h3>
                <p className="text-sm text-gray-400">
                  Google Analytics, Jetpack Stats, Matomo, and similar tools track page views, session duration, referral sources, device info, and geographic location. These create detailed visitor profiles that require disclosure.
                </p>
              </div>
            </div>
            <p>
              GDPR (EU) can impose fines up to <strong className="text-white">&euro;20 million or 4% of global revenue</strong>. CCPA (California) carries penalties of <strong className="text-white">$7,500 per intentional violation</strong>. Even without fines, hosting providers and ad networks increasingly require privacy policies. Google AdSense will not approve sites without one, and WooCommerce payment gateways like Stripe require merchants to maintain compliant privacy policies.
            </p>
          </section>

          {/* WordPress built-in privacy tools */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">WordPress Built-In Privacy Tools (Since WP 4.9.6)</h2>
            <p className="mb-4">
              WordPress introduced privacy tools in version 4.9.6 (May 2018), released shortly after GDPR went into effect. These tools provide a foundation for compliance but have significant limitations.
            </p>
            <div className="space-y-3 mb-4">
              {[
                { feature: "Privacy Policy Page (Settings > Privacy)", desc: "Designate an existing page as your privacy policy. WordPress links to it in login/registration forms. Generates a template with placeholder sections for comments, analytics, forms, media, and cookies.", limitation: "Template is generic — uses boilerplate text that doesn't reflect your actual plugin setup. Requires manual editing for every plugin you use." },
                { feature: "Personal Data Export (Tools > Export Personal Data)", desc: "Allows users to request a download of all personal data stored by WordPress. Sends a confirmation email, then provides a ZIP file with their data.", limitation: "Only exports data from WordPress core and plugins that hook into the exporter. Many plugins don't register with this system, leaving gaps." },
                { feature: "Personal Data Erasure (Tools > Erase Personal Data)", desc: "Allows users to request deletion of their personal data. Anonymizes comments, removes user accounts, and triggers plugin erasure hooks.", limitation: "Plugin support is inconsistent. WooCommerce retains order data for tax/legal compliance and only anonymizes it, which may not satisfy all erasure requests." },
                { feature: "Comment Consent Checkbox", desc: "Adds an opt-in checkbox to comment forms: 'Save my name, email, and website in this browser.' This sets cookies for returning commenters.", limitation: "Only covers comment cookies. Does not address analytics cookies, marketing cookies, or cookies set by caching or CDN plugins." },
              ].map((item) => (
                <div key={item.feature} className="p-4 bg-white/5 border border-white/10 rounded-lg">
                  <h3 className="font-semibold text-white text-sm mb-1">{item.feature}</h3>
                  <p className="text-sm text-gray-400 mb-2">{item.desc}</p>
                  <p className="text-xs text-yellow-400/80"><strong>Limitation:</strong> {item.limitation}</p>
                </div>
              ))}
            </div>
            <div className="p-4 bg-yellow-500/5 border border-yellow-500/20 rounded-lg">
              <p className="text-sm text-yellow-300">
                <strong>Key takeaway:</strong> WordPress&apos;s built-in privacy tools handle the basics, but they do not generate a legally comprehensive privacy policy. They cannot detect which plugins you have installed or what data those plugins collect. PolicyForge fills this gap by generating a complete policy tailored to your WordPress setup.
              </p>
            </div>
          </section>

          {/* Common plugins that collect data */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">WordPress Plugins That Collect Personal Data</h2>
            <p className="mb-6">
              Most WordPress sites run 20-30 plugins. Many of these collect, store, or transmit personal data — sometimes without site owners realizing it. Your privacy policy must account for every plugin that touches user data. Here are the most common ones:
            </p>
            <div className="space-y-4">
              {WP_PLUGIN_DATA.map((plugin) => (
                <div key={plugin.plugin} className="p-4 bg-white/5 border border-white/10 rounded-lg">
                  <h3 className="font-semibold text-white mb-2">{plugin.plugin}</h3>
                  <ul className="space-y-1 mb-3">
                    {plugin.data.map((item) => (
                      <li key={item} className="text-sm text-gray-400 flex items-start gap-2">
                        <span className="text-blue-400 mt-0.5">&#8226;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-gray-500 border-t border-white/5 pt-2">
                    <span className="text-yellow-400/70 font-medium">Note:</span> {plugin.concern}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-gray-400">
              Other plugins that commonly collect data include: Google Analytics for WordPress (MonsterInsights), Mailchimp for WordPress, Gravity Forms, Wordfence (security logs with IP addresses), UpdraftPlus (backups may contain personal data), and social login plugins.
            </p>
          </section>

          {/* WordPress cookies and tracking */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">WordPress Cookies and Tracking</h2>
            <p className="mb-6">
              WordPress and its plugins set numerous cookies on visitors&apos; browsers. Under GDPR and the ePrivacy Directive, you must disclose every cookie your site sets and obtain consent for non-essential cookies before they are placed. Here is a breakdown of common WordPress cookies:
            </p>
            <div className="space-y-6">
              {WP_COOKIES.map((group) => (
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
              Need a dedicated cookie policy? Use our <Link href="/cookie-policy-generator" className="text-blue-400 hover:text-blue-300">Cookie Policy Generator</Link> to create one that covers every cookie your WordPress site sets.
            </p>
          </section>

          {/* GDPR compliance for WordPress */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">GDPR Compliance for WordPress Sites</h2>
            <p className="mb-4">
              If your WordPress site is accessible to visitors in the EU — which applies to virtually every public website — GDPR compliance is required regardless of where you or your hosting are based. Here is what GDPR demands from WordPress site owners:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1 font-bold">1.</span>
                <span><strong className="text-white">Lawful basis for processing</strong> — Every type of data collection must have a legal basis: consent (opt-in checkboxes), legitimate interest (security logs), contractual necessity (processing orders), or legal obligation (tax records).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1 font-bold">2.</span>
                <span><strong className="text-white">Cookie consent</strong> — Non-essential cookies (analytics, marketing, social embeds) require explicit opt-in consent before being placed. WordPress core cookies for login and sessions are generally considered essential.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1 font-bold">3.</span>
                <span><strong className="text-white">Data subject rights</strong> — Users can request access to their data, data portability, rectification, erasure, and restriction of processing. WordPress&apos;s built-in export/erasure tools help but are incomplete.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1 font-bold">4.</span>
                <span><strong className="text-white">Data processor agreements</strong> — Every third-party service that processes data on your behalf (hosting provider, analytics, payment gateways, email services) requires a Data Processing Agreement (DPA).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1 font-bold">5.</span>
                <span><strong className="text-white">Cross-border transfers</strong> — If data is sent to US-based services (Google Analytics, Akismet, Mailchimp), you need approved transfer mechanisms like Standard Contractual Clauses or an adequacy decision.</span>
              </li>
            </ul>
            <h3 className="font-semibold text-white mb-3">Recommended Cookie Consent Plugins</h3>
            <div className="grid md:grid-cols-3 gap-3 mb-4">
              <div className="p-3 bg-white/5 rounded-lg">
                <p className="font-medium text-white text-sm">CookieYes</p>
                <p className="text-xs text-gray-500 mt-1">Auto-scans cookies, geo-targeted banners, Google Consent Mode v2 integration</p>
              </div>
              <div className="p-3 bg-white/5 rounded-lg">
                <p className="font-medium text-white text-sm">Complianz</p>
                <p className="text-xs text-gray-500 mt-1">Cookie scan + policy generation, A/B consent banners, conditional script loading</p>
              </div>
              <div className="p-3 bg-white/5 rounded-lg">
                <p className="font-medium text-white text-sm">Cookie Notice (GDPR & CCPA)</p>
                <p className="text-xs text-gray-500 mt-1">Lightweight, integrates with Cookie Compliance add-on, supports consent logging</p>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              For a GDPR-focused privacy policy, see our <Link href="/gdpr-privacy-policy-generator" className="text-blue-400 hover:text-blue-300">GDPR Privacy Policy Generator</Link>.
            </p>
          </section>

          {/* How to add a privacy policy to WordPress */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">How to Add a Privacy Policy to WordPress</h2>
            <p className="mb-4">
              WordPress makes it straightforward to set up a privacy policy page. Follow these steps to add yours:
            </p>
            <div className="space-y-3">
              {[
                { step: "1. Generate Your Policy", desc: "Use PolicyForge to generate a privacy policy tailored to your WordPress plugins and data collection practices. Select your plugins, choose WooCommerce options if applicable, and download the formatted policy text." },
                { step: "2. Create a New Page", desc: "In your WordPress admin, go to Pages > Add New. Title it 'Privacy Policy' (or your preferred title). Paste the generated policy content into the editor." },
                { step: "3. Set as Privacy Policy Page", desc: "Navigate to Settings > Privacy. Select the page you just created from the dropdown. Click 'Use This Page.' WordPress will now automatically link to this page in login and registration forms." },
                { step: "4. Add to Your Footer Menu", desc: "Go to Appearance > Menus (or the Customizer for block themes). Add the Privacy Policy page to your footer navigation menu. This ensures it's accessible from every page on your site." },
                { step: "5. Add to Contact & Checkout Forms", desc: "For Contact Form 7, add an acceptance field linking to your privacy policy. For WooCommerce, go to Settings > Accounts & Privacy and ensure the policy page is linked on the checkout page." },
                { step: "6. Configure Cookie Consent", desc: "Install a cookie consent plugin (CookieYes, Complianz, or similar). Configure it to block non-essential cookies until consent is given. Link your privacy policy in the consent banner." },
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

          {/* WooCommerce-specific requirements */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">WooCommerce Privacy Policy Requirements</h2>
            <p className="mb-4">
              WooCommerce stores handle significantly more personal data than standard WordPress sites. Your privacy policy needs additional sections to cover e-commerce-specific data practices:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                <h3 className="font-semibold text-white mb-2">Payment Data</h3>
                <ul className="space-y-1 text-sm text-gray-400">
                  <li className="flex items-start gap-2"><span className="text-blue-400">&#8226;</span>Which payment gateways process card data (Stripe, PayPal, Square)</li>
                  <li className="flex items-start gap-2"><span className="text-blue-400">&#8226;</span>Whether card numbers are stored on your server (they should not be)</li>
                  <li className="flex items-start gap-2"><span className="text-blue-400">&#8226;</span>PCI DSS compliance status of your payment processor</li>
                  <li className="flex items-start gap-2"><span className="text-blue-400">&#8226;</span>Transaction IDs and billing records retention period</li>
                </ul>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                <h3 className="font-semibold text-white mb-2">Order & Shipping Data</h3>
                <ul className="space-y-1 text-sm text-gray-400">
                  <li className="flex items-start gap-2"><span className="text-blue-400">&#8226;</span>Customer name, email, phone number, and address</li>
                  <li className="flex items-start gap-2"><span className="text-blue-400">&#8226;</span>Order history and purchase patterns</li>
                  <li className="flex items-start gap-2"><span className="text-blue-400">&#8226;</span>Shipping carriers that receive customer addresses</li>
                  <li className="flex items-start gap-2"><span className="text-blue-400">&#8226;</span>Fulfillment services and warehouse data sharing</li>
                </ul>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                <h3 className="font-semibold text-white mb-2">Customer Accounts</h3>
                <ul className="space-y-1 text-sm text-gray-400">
                  <li className="flex items-start gap-2"><span className="text-blue-400">&#8226;</span>Account registration data and profile information</li>
                  <li className="flex items-start gap-2"><span className="text-blue-400">&#8226;</span>Saved addresses and payment methods</li>
                  <li className="flex items-start gap-2"><span className="text-blue-400">&#8226;</span>Wishlist and recently viewed products</li>
                  <li className="flex items-start gap-2"><span className="text-blue-400">&#8226;</span>Customer review content and ratings</li>
                </ul>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                <h3 className="font-semibold text-white mb-2">Marketing & Analytics</h3>
                <ul className="space-y-1 text-sm text-gray-400">
                  <li className="flex items-start gap-2"><span className="text-blue-400">&#8226;</span>Abandoned cart recovery emails (email + cart contents)</li>
                  <li className="flex items-start gap-2"><span className="text-blue-400">&#8226;</span>Product recommendation data and browsing behavior</li>
                  <li className="flex items-start gap-2"><span className="text-blue-400">&#8226;</span>Email marketing integrations (Mailchimp, Klaviyo)</li>
                  <li className="flex items-start gap-2"><span className="text-blue-400">&#8226;</span>Conversion tracking pixels (Facebook, Google Ads)</li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Running a WooCommerce store? Our <Link href="/privacy-policy-for-ecommerce" className="text-blue-400 hover:text-blue-300">E-Commerce Privacy Policy Generator</Link> covers all online store requirements including payment processing, shipping, and customer accounts.
            </p>
          </section>

          {/* GDPR compliance checklist */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">WordPress GDPR Compliance Checklist</h2>
            <p className="mb-4">
              Use this checklist to audit your WordPress site&apos;s privacy compliance:
            </p>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-2">
                {GDPR_CHECKLIST.map((item) => (
                  <label key={item} className="flex items-start gap-3 text-sm text-gray-300 cursor-pointer">
                    <span className="mt-0.5 w-4 h-4 rounded border border-gray-600 flex-shrink-0" />
                    {item}
                  </label>
                ))}
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              PolicyForge Pro generates policies that address all 12 items on this checklist. <Link href="/" className="text-blue-400 hover:text-blue-300">Generate yours now &rarr;</Link>
            </p>
          </section>

          {/* CTA */}
          <section className="p-8 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-3">Generate Your WordPress Privacy Policy</h2>
            <p className="text-gray-300 mb-2">
              PolicyForge generates privacy policies specifically designed for WordPress sites. Cover your plugins, WooCommerce data, cookies, analytics, GDPR, and CCPA requirements — all in under 2 minutes.
            </p>
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <div className="text-sm text-gray-400">
                <span className="text-green-400">&#10003;</span> WordPress-specific
              </div>
              <div className="text-sm text-gray-400">
                <span className="text-green-400">&#10003;</span> WooCommerce coverage
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
              Enter your WordPress site URL to scan your existing privacy policy across 10 compliance categories. See where you pass and where you need improvements.
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
              <Link href="/privacy-policy-for-ecommerce" className="p-4 bg-white/5 border border-white/10 rounded-lg hover:border-blue-500/30 transition-colors group">
                <h3 className="font-semibold text-white text-sm group-hover:text-blue-400">E-Commerce Privacy Policy</h3>
                <p className="text-xs text-gray-500 mt-1">Full coverage for online stores and payment processing</p>
              </Link>
              <Link href="/cookie-policy-generator" className="p-4 bg-white/5 border border-white/10 rounded-lg hover:border-blue-500/30 transition-colors group">
                <h3 className="font-semibold text-white text-sm group-hover:text-blue-400">Cookie Policy Generator</h3>
                <p className="text-xs text-gray-500 mt-1">Dedicated cookie disclosure for WordPress sites</p>
              </Link>
              <Link href="/gdpr-privacy-policy-generator" className="p-4 bg-white/5 border border-white/10 rounded-lg hover:border-blue-500/30 transition-colors group">
                <h3 className="font-semibold text-white text-sm group-hover:text-blue-400">GDPR Policy Generator</h3>
                <p className="text-xs text-gray-500 mt-1">EU-specific compliance for your WordPress site</p>
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
          Disclaimer: This generator provides template privacy policies for informational purposes.
          Consult a qualified attorney for jurisdiction-specific legal advice.
        </p>
      </footer>
    </div>
  );
}
