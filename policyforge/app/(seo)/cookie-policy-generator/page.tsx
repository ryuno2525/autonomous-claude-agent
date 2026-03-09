import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Cookie Policy Generator | GDPR Cookie Consent - PolicyForge",
  description:
    "Generate a free cookie policy for your website. Covers essential cookies, analytics cookies, advertising cookies, and third-party cookies. EU cookie law & GDPR compliant.",
  keywords:
    "cookie policy generator, free cookie policy, GDPR cookie consent, cookie policy template, EU cookie law, cookie notice generator, website cookie policy, cookie consent policy",
};

export default function CookiePolicyGenerator() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#ededed]">
      <header className="border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
              P
            </div>
            <span className="text-white font-semibold text-lg">PolicyForge</span>
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Free Cookie Policy Generator
        </h1>

        <div className="space-y-5 text-gray-300 leading-relaxed text-lg">
          <p>
            Every website that uses cookies must disclose that fact to its visitors. The EU
            ePrivacy Directive (commonly referred to as the &quot;Cookie Law&quot;), the General
            Data Protection Regulation (GDPR), and California&apos;s CCPA all impose strict rules
            on how websites collect and use cookie data. Without a proper cookie policy in place,
            your website risks enforcement actions, fines of up to &euro;20 million or 4% of
            annual global turnover under GDPR, and loss of user trust.
          </p>

          <p>
            PolicyForge&apos;s free cookie policy generator creates a clear, legally structured
            cookie policy tailored to your website. It covers every category of cookie your site
            may use, explains their purpose and lifespan, and provides the disclosures required by
            EU, UK, and US privacy regulations. You can{" "}
            <Link href="/" className="text-blue-400 hover:text-blue-300 underline">
              generate your cookie policy now
            </Link>{" "}
            or read on to understand exactly what your cookie policy needs to contain.
          </p>

          {/* Section 1: What Are Cookies */}
          <h2 className="text-2xl font-bold text-white pt-6">
            What Are Cookies and Why Do They Matter?
          </h2>
          <p>
            Cookies are small text files that a website stores on a visitor&apos;s browser.
            When someone visits your site, the server sends a cookie to their browser, which
            stores it locally. On subsequent visits, the browser sends the cookie back to the
            server, allowing the site to remember information about the user&mdash;such as login
            status, language preferences, or items in a shopping cart.
          </p>
          <p>
            Cookies were invented in 1994 by Netscape engineer Lou Montulli to solve a
            fundamental problem: HTTP is a stateless protocol, meaning the server has no memory
            of previous requests. Cookies add a layer of statefulness, enabling features that
            modern web users take for granted. However, the same mechanism that powers convenient
            features like &quot;remember me&quot; login can also be used to track users across
            websites without their knowledge, which is why regulators now require transparency.
          </p>
          <p>
            There are two broad distinctions worth understanding. <strong className="text-white">First-party cookies</strong> are
            set by the website the user is visiting directly. <strong className="text-white">Third-party cookies</strong> are
            set by a different domain&mdash;typically ad networks, analytics services, or social
            media embeds loaded on your page. Third-party cookies are under increasing regulatory
            scrutiny and are being phased out by major browsers like Chrome, Safari, and Firefox.
          </p>

          {/* Section 2: Types of Cookies */}
          <h2 className="text-2xl font-bold text-white pt-6">
            Types of Cookies: Essential, Analytics, Marketing, and Functional
          </h2>
          <p>
            Privacy regulations require you to categorize every cookie your website sets and
            explain each category to your users. There are four standard categories recognized
            by regulators and consent management platforms worldwide:
          </p>

          <h3 className="text-xl font-semibold text-white pt-3">Essential (Strictly Necessary) Cookies</h3>
          <p className="text-gray-400">
            These cookies are required for your website to function properly. They handle core
            features like user authentication, session management, shopping cart persistence,
            CSRF protection tokens, and load balancing. Essential cookies are the only category
            that does not require prior user consent under the ePrivacy Directive, because the
            website cannot operate without them. However, you must still disclose them in your
            cookie policy.
          </p>

          <h3 className="text-xl font-semibold text-white pt-3">Analytics and Performance Cookies</h3>
          <p className="text-gray-400">
            Analytics cookies collect data about how visitors interact with your website&mdash;which
            pages they visit, how long they stay, where they click, and where they drop off.
            Services like Google Analytics, Hotjar, Mixpanel, Plausible, and Matomo all set
            analytics cookies. These require user consent before being placed under EU law.
            Even privacy-focused alternatives like Plausible, which uses no cookies by default,
            should be mentioned in your policy if you configure them to set any identifiers.
          </p>

          <h3 className="text-xl font-semibold text-white pt-3">Marketing and Advertising Cookies</h3>
          <p className="text-gray-400">
            Marketing cookies track visitors across websites to build a profile of their browsing
            behavior. Ad platforms like Google Ads, Meta Pixel (Facebook), TikTok Pixel, LinkedIn
            Insight Tag, and programmatic ad networks use these cookies for retargeting, conversion
            tracking, and audience segmentation. Marketing cookies are almost always third-party
            and always require explicit consent. They are the most regulated cookie category and
            the primary reason the ePrivacy Directive was enacted.
          </p>

          <h3 className="text-xl font-semibold text-white pt-3">Functional (Preference) Cookies</h3>
          <p className="text-gray-400">
            Functional cookies remember choices a user has made to enhance their experience.
            Examples include language or region settings, dark mode or theme preferences, font
            size adjustments, previously viewed items, and A/B testing assignments. While they
            are not strictly necessary for the site to work, they make the experience better.
            Most regulators consider these to require consent unless they serve a purpose the
            user has explicitly requested.
          </p>

          {/* Cookie Comparison Table */}
          <h2 className="text-2xl font-bold text-white pt-6">
            Cookie Types Comparison Table
          </h2>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm text-left border border-white/10 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-white/[0.06] text-white">
                  <th className="px-4 py-3 font-semibold">Category</th>
                  <th className="px-4 py-3 font-semibold">Purpose</th>
                  <th className="px-4 py-3 font-semibold">Common Examples</th>
                  <th className="px-4 py-3 font-semibold">Consent Required?</th>
                  <th className="px-4 py-3 font-semibold">Typical Duration</th>
                </tr>
              </thead>
              <tbody className="text-gray-400">
                <tr className="border-t border-white/10">
                  <td className="px-4 py-3 text-white font-medium">Essential</td>
                  <td className="px-4 py-3">Core site functionality</td>
                  <td className="px-4 py-3">Session ID, CSRF token, cart ID, auth token</td>
                  <td className="px-4 py-3 text-green-400">No (but must disclose)</td>
                  <td className="px-4 py-3">Session &ndash; 24 hours</td>
                </tr>
                <tr className="border-t border-white/10 bg-white/[0.02]">
                  <td className="px-4 py-3 text-white font-medium">Analytics</td>
                  <td className="px-4 py-3">Measure traffic &amp; behavior</td>
                  <td className="px-4 py-3">_ga, _gid (Google Analytics), _hjid (Hotjar)</td>
                  <td className="px-4 py-3 text-yellow-400">Yes (EU/UK)</td>
                  <td className="px-4 py-3">24 hours &ndash; 2 years</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="px-4 py-3 text-white font-medium">Marketing</td>
                  <td className="px-4 py-3">Retargeting &amp; ad tracking</td>
                  <td className="px-4 py-3">_fbp (Meta), IDE (Google Ads), _ttp (TikTok)</td>
                  <td className="px-4 py-3 text-red-400">Yes (always)</td>
                  <td className="px-4 py-3">30 days &ndash; 2 years</td>
                </tr>
                <tr className="border-t border-white/10 bg-white/[0.02]">
                  <td className="px-4 py-3 text-white font-medium">Functional</td>
                  <td className="px-4 py-3">Remember user preferences</td>
                  <td className="px-4 py-3">locale, theme, recently_viewed, ab_variant</td>
                  <td className="px-4 py-3 text-yellow-400">Usually yes</td>
                  <td className="px-4 py-3">30 days &ndash; 1 year</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Section 3: EU Cookie Law */}
          <h2 className="text-2xl font-bold text-white pt-6">
            EU Cookie Law: The ePrivacy Directive Explained
          </h2>
          <p>
            The ePrivacy Directive (2002/58/EC, amended by 2009/136/EC) is the primary EU law
            governing cookies. Often called the &quot;Cookie Law,&quot; it requires that websites
            obtain informed consent from users before placing any non-essential cookies on their
            devices. The directive works alongside the GDPR, which regulates how personal data
            collected through cookies is processed.
          </p>
          <p>
            Key requirements of the ePrivacy Directive include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-400">
            <li><strong className="text-white">Prior consent</strong> &mdash; Non-essential cookies cannot be set until the user actively consents. Pre-ticked checkboxes do not count as valid consent (Planet49 ruling, CJEU 2019).</li>
            <li><strong className="text-white">Informed consent</strong> &mdash; Users must be told what cookies will be set, what they do, who sets them, and how long they last before they agree.</li>
            <li><strong className="text-white">Granular control</strong> &mdash; Users must be able to accept or reject cookies by category, not forced into an all-or-nothing choice.</li>
            <li><strong className="text-white">Easy withdrawal</strong> &mdash; It must be as easy to withdraw consent as it is to give it. A buried settings page is not sufficient.</li>
            <li><strong className="text-white">Record keeping</strong> &mdash; You must be able to demonstrate that consent was obtained, including when and what the user agreed to.</li>
          </ul>
          <p>
            The forthcoming ePrivacy Regulation (expected to eventually replace the directive)
            will further tighten rules around cookie walls and tracking. Preparing a thorough
            cookie policy now positions your website for compliance with both current and
            future regulations.
          </p>

          {/* Section 4: Cookie Consent Banners */}
          <h2 className="text-2xl font-bold text-white pt-6">
            How to Create a Cookie Consent Banner
          </h2>
          <p>
            A cookie policy alone is not enough&mdash;you also need a cookie consent banner
            (also called a cookie notice or cookie popup) that appears when users first visit
            your site. The banner must appear before any non-essential cookies are set and must
            give users a genuine choice.
          </p>
          <p>
            An effective cookie consent banner should include these elements:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-400">
            <li><strong className="text-white">Clear language</strong> &mdash; Explain in plain terms that the site uses cookies. Avoid legal jargon.</li>
            <li><strong className="text-white">Category toggles</strong> &mdash; Let users accept or reject cookies by category (essential, analytics, marketing, functional).</li>
            <li><strong className="text-white">Accept and Reject buttons</strong> &mdash; Both options must be equally prominent. A large &quot;Accept All&quot; button next to a tiny &quot;Manage Preferences&quot; link violates GDPR guidelines per recent enforcement actions by the French CNIL and Italian Garante.</li>
            <li><strong className="text-white">Link to full policy</strong> &mdash; The banner should link to your complete cookie policy for detailed information.</li>
            <li><strong className="text-white">No cookie walls</strong> &mdash; You generally cannot block access to content unless cookies are accepted, though some exceptions exist for paid content.</li>
          </ul>
          <p>
            Popular consent management platforms (CMPs) that handle this include Cookiebot,
            OneTrust, CookieYes, Osano, and Termly. Open-source alternatives like Klaro and
            cookie-consent-js give you full control without vendor lock-in. PolicyForge&apos;s
            Pro tier includes a consent banner implementation guide with code snippets you can
            drop into any website.
          </p>

          {/* Section 5: What Must a Cookie Policy Include */}
          <h2 className="text-2xl font-bold text-white pt-6">
            What Must a Cookie Policy Include?
          </h2>
          <p>
            To comply with the ePrivacy Directive, GDPR, and best practices from regulators
            like the ICO (UK), CNIL (France), and DPA (Ireland), your cookie policy should
            include all of the following:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-400">
            <li><strong className="text-white">Definition of cookies</strong> &mdash; A plain-language explanation of what cookies are and how they work.</li>
            <li><strong className="text-white">Complete cookie inventory</strong> &mdash; A table or list of every cookie your website sets, grouped by category.</li>
            <li><strong className="text-white">Purpose of each cookie</strong> &mdash; Why each cookie exists and what data it collects.</li>
            <li><strong className="text-white">First-party vs. third-party</strong> &mdash; Identify which cookies are set by your domain and which are set by external services.</li>
            <li><strong className="text-white">Cookie duration</strong> &mdash; How long each cookie persists (session cookies vs. persistent cookies with specific expiry dates).</li>
            <li><strong className="text-white">Third-party links</strong> &mdash; Links to the privacy policies of third-party services that set cookies on your site (e.g., Google Analytics, Meta).</li>
            <li><strong className="text-white">How to manage or delete cookies</strong> &mdash; Instructions for users on how to control cookies through browser settings and your consent mechanism.</li>
            <li><strong className="text-white">Contact information</strong> &mdash; How users can reach you or your Data Protection Officer with questions about cookie use.</li>
            <li><strong className="text-white">Date of last update</strong> &mdash; When the policy was last reviewed and revised.</li>
          </ol>
          <p>
            PolicyForge generates all of these sections automatically. You can{" "}
            <Link href="/" className="text-blue-400 hover:text-blue-300 underline">
              create your cookie policy here
            </Link>{" "}
            in under two minutes.
          </p>

          {/* Section 6: Cookie Scanning */}
          <h2 className="text-2xl font-bold text-white pt-6">
            Cookie Scanning: Finding All Cookies on Your Website
          </h2>
          <p>
            One of the biggest compliance risks is cookies you don&apos;t know about. Many
            website owners are unaware of the full extent of cookies placed by third-party
            scripts, plugins, and embeds. A single YouTube embed can set over a dozen cookies.
            A Facebook Like button sets tracking cookies even if the user never clicks it.
          </p>
          <p>
            To build an accurate cookie policy, you need to audit your site. Cookie scanning
            tools crawl your website, detect every cookie that gets set, and categorize them.
            PolicyForge&apos;s{" "}
            <Link href="/check" className="text-blue-400 hover:text-blue-300 underline">
              compliance checker
            </Link>{" "}
            can scan any URL to identify privacy issues, including cookie-related disclosures.
            For a thorough cookie audit, consider these approaches:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-400">
            <li><strong className="text-white">Browser DevTools</strong> &mdash; Open Chrome DevTools &gt; Application &gt; Cookies to see all cookies set for the current domain and third-party domains.</li>
            <li><strong className="text-white">Automated scanners</strong> &mdash; Tools like Cookiebot, CookieServe, and BuiltWith scan pages and list every cookie detected.</li>
            <li><strong className="text-white">Privacy browser extensions</strong> &mdash; Extensions like Ghostery and Privacy Badger reveal third-party trackers and cookies in real time.</li>
            <li><strong className="text-white">Regular rescanning</strong> &mdash; Run a cookie scan every time you add or update third-party scripts, plugins, or services on your website.</li>
          </ul>
          <p>
            Once you have a full inventory, you can generate an accurate cookie policy using
            PolicyForge. The Pro version lets you list specific cookies by name, domain, and
            duration for maximum transparency and compliance.
          </p>
        </div>

        {/* CTA Section */}
        <div className="mt-10 space-y-4">
          <Link
            href="/"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg text-lg hover:opacity-90 transition-opacity"
          >
            Generate Your Cookie Policy
          </Link>
          <p className="text-sm text-gray-500">
            Free tier available. Pro includes cookie consent implementation guide and detailed cookie inventory template for $12.99.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="mt-14">
          <h2 className="text-2xl font-bold text-white mb-6">
            Frequently Asked Questions About Cookie Policies
          </h2>
          <div className="space-y-6">
            <div className="p-5 bg-white/[0.03] border border-white/10 rounded-xl">
              <h3 className="text-lg font-semibold text-white mb-2">
                Do I need a cookie policy if I only use essential cookies?
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Yes. Even if your website only uses strictly necessary cookies (like session IDs
                and CSRF tokens), EU regulations still require you to inform users about those
                cookies. The difference is that essential cookies do not require prior consent&mdash;but
                they must still be disclosed in your cookie policy. Many websites that believe they
                are cookie-free actually set cookies through embedded content, analytics snippets,
                or hosting platforms without realizing it.
              </p>
            </div>

            <div className="p-5 bg-white/[0.03] border border-white/10 rounded-xl">
              <h3 className="text-lg font-semibold text-white mb-2">
                What is the difference between a cookie policy and a privacy policy?
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                A privacy policy covers all personal data your website collects and processes,
                including data from forms, account registration, purchases, and cookies. A cookie
                policy is specifically about cookies and similar tracking technologies (like
                localStorage, sessionStorage, pixels, and fingerprinting). Many websites combine
                them into a single document with a dedicated cookies section, which is perfectly
                acceptable. PolicyForge can{" "}
                <Link href="/" className="text-blue-400 hover:text-blue-300 underline">
                  generate both policies
                </Link>{" "}
                so they reference each other properly.
              </p>
            </div>

            <div className="p-5 bg-white/[0.03] border border-white/10 rounded-xl">
              <h3 className="text-lg font-semibold text-white mb-2">
                Does my US-based website need to comply with EU cookie law?
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                If your website is accessible to visitors in the EU&mdash;which almost every
                website is&mdash;then yes, you should comply with EU cookie regulations. The GDPR
                applies to any organization that processes personal data of EU residents, regardless
                of where the organization is based. Additionally, California&apos;s CCPA gives
                consumers the right to know about and opt out of the sale of personal data, which
                includes data collected through advertising and analytics cookies. In practice,
                implementing a proper cookie consent mechanism and policy for all visitors is
                simpler and safer than trying to geo-target compliance.
              </p>
            </div>

            <div className="p-5 bg-white/[0.03] border border-white/10 rounded-xl">
              <h3 className="text-lg font-semibold text-white mb-2">
                How often should I update my cookie policy?
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                You should review and update your cookie policy at least every six months, and
                immediately whenever you add or remove third-party services, install new plugins
                or widgets, change analytics platforms, add advertising or retargeting scripts,
                or update your consent management platform. Outdated cookie policies are a common
                compliance gap&mdash;a policy that lists cookies you no longer use or omits cookies
                you have added since the last update fails to meet the &quot;accuracy&quot;
                requirement of GDPR Article 5.
              </p>
            </div>

            <div className="p-5 bg-white/[0.03] border border-white/10 rounded-xl">
              <h3 className="text-lg font-semibold text-white mb-2">
                Can I use localStorage or sessionStorage instead of cookies to avoid the cookie law?
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                No. The ePrivacy Directive applies to &quot;the storing of information, or the
                gaining of access to information already stored, in the terminal equipment of a
                subscriber or user.&quot; This covers cookies, localStorage, sessionStorage,
                IndexedDB, and any other client-side storage mechanism. If you use localStorage
                to store an analytics identifier or a tracking pixel to fingerprint users, the
                same consent requirements apply. Your cookie policy should disclose all
                client-side storage technologies, not just traditional HTTP cookies.
              </p>
            </div>
          </div>
        </div>

        {/* Cross-link Section */}
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="p-6 bg-white/[0.03] border border-white/10 rounded-xl">
            <h3 className="text-lg font-bold text-white mb-2">Check your website&apos;s compliance</h3>
            <p className="text-gray-400 text-sm mb-3">
              Scan any URL to see if your privacy policy and cookie disclosures meet GDPR, CCPA, and ePrivacy requirements.
            </p>
            <Link href="/check" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
              Run a Free Compliance Scan &rarr;
            </Link>
          </div>
          <div className="p-6 bg-white/[0.03] border border-white/10 rounded-xl">
            <h3 className="text-lg font-bold text-white mb-2">Need a full privacy policy too?</h3>
            <p className="text-gray-400 text-sm mb-3">
              Generate a comprehensive privacy policy that includes cookie disclosures, GDPR data subject rights, and CCPA compliance.
            </p>
            <Link href="/" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
              Generate Privacy Policy &rarr;
            </Link>
          </div>
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
          Disclaimer: This generator provides template policies for informational purposes.
          Consult a qualified attorney for jurisdiction-specific legal advice.
        </p>
      </footer>
    </div>
  );
}
