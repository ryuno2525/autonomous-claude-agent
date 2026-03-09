import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy for Chrome Extension | Free Generator - PolicyForge",
  description:
    "Generate a free privacy policy for your Chrome extension. Required by the Chrome Web Store since 2021. Covers permissions disclosure, user data handling, Manifest V3 compliance, and Google's privacy practices form.",
  keywords:
    "privacy policy for Chrome extension, Chrome Web Store privacy policy, Chrome extension privacy policy generator, Chrome extension permissions privacy, Manifest V3 privacy policy, Chrome Web Store privacy practices, browser extension privacy policy, Chrome extension data collection policy, Chrome extension compliance, Google Chrome extension privacy requirements",
};

export default function PrivacyPolicyForChromeExtension() {
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
          Privacy Policy for Chrome Extensions: The Complete Guide
        </h1>

        <p className="text-gray-400 text-lg mb-8">
          The Chrome Web Store requires every extension to have a privacy
          policy. No policy means no listing &mdash; your extension will be
          rejected or removed. This guide covers exactly what your privacy
          policy needs to include based on your extension&apos;s permissions,
          how to fill out Google&apos;s privacy practices form, and what
          changed with Manifest V3.
        </p>

        <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-blue-800/40 rounded-xl p-6 mb-10">
          <h3 className="text-lg font-semibold text-white mb-2">
            Generate Your Chrome Extension Privacy Policy in 2 Minutes
          </h3>
          <p className="text-gray-300 text-sm mb-4">
            Don&apos;t let a missing privacy policy block your Chrome Web
            Store listing. PolicyForge generates a compliant privacy policy
            tailored to your extension&apos;s permissions and data practices.
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
              Scan Your Site
            </Link>
          </div>
        </div>

        <div className="space-y-10 text-gray-300 leading-relaxed text-[17px]">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Why Chrome Extensions Must Have a Privacy Policy
            </h2>
            <p className="mb-4">
              Since January 2021, Google has enforced strict privacy
              requirements for all Chrome Web Store listings. Extensions that
              handle user data &mdash; which includes nearly every extension
              &mdash; must provide a privacy policy URL during submission.
              Here&apos;s why this matters:
            </p>
            <div className="space-y-4">
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-1">
                  Chrome Web Store Requirement (Mandatory)
                </h4>
                <p className="text-sm text-gray-400">
                  Google&apos;s Developer Program Policies require a privacy
                  policy for any extension that handles personal or sensitive
                  user data. Without one, your extension will be rejected
                  during review or removed from the store. This has been
                  strictly enforced since the January 2021 policy update.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-1">
                  User Trust and Install Rates
                </h4>
                <p className="text-sm text-gray-400">
                  Chrome users have become privacy-conscious after high-profile
                  extension scandals (DataSpii, The Great Suspender). A clear,
                  professional privacy policy directly impacts install rates.
                  Extensions with visible privacy policies see 15-30% higher
                  install conversion rates compared to those with no policy or
                  a generic one.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-1">
                  Permission Justification Requirements
                </h4>
                <p className="text-sm text-gray-400">
                  Google requires developers to justify every permission their
                  extension requests. Your privacy policy must explain why each
                  permission is needed and what data is accessed through it.
                  Extensions requesting broad permissions (like &ldquo;Read and
                  change all your data on all websites&rdquo;) face extra
                  scrutiny and longer review times without clear justification.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-1">
                  Legal Compliance (GDPR, CCPA)
                </h4>
                <p className="text-sm text-gray-400">
                  Chrome extensions are distributed globally, meaning you&apos;re
                  subject to GDPR (EU), CCPA (California), and other privacy
                  laws regardless of where you&apos;re based. GDPR fines can
                  reach &euro;20M. Even a free extension with no revenue is
                  legally required to disclose its data practices.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              What to Include Based on Extension Permissions
            </h2>
            <p className="mb-4">
              Your privacy policy needs to cover every permission your
              extension requests. Different permissions expose different data,
              and each requires specific disclosures. Here&apos;s what to
              address for the most common Chrome extension permissions:
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">
              activeTab Permission
            </h3>
            <p className="mb-4">
              The <code className="bg-gray-800 px-1.5 py-0.5 rounded text-sm text-blue-300">activeTab</code> permission
              grants temporary access to the currently active tab when the
              user invokes your extension (via click or keyboard shortcut).
              Your privacy policy should state that the extension accesses
              the current page&apos;s URL and content only when explicitly
              activated by the user, that no data is retained after the
              action completes (if true), and that no browsing history is
              collected or stored. This is the most privacy-friendly
              permission because it requires explicit user action.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">
              tabs Permission
            </h3>
            <p className="mb-4">
              The <code className="bg-gray-800 px-1.5 py-0.5 rounded text-sm text-blue-300">tabs</code> permission
              gives access to the <code className="bg-gray-800 px-1.5 py-0.5 rounded text-sm text-blue-300">chrome.tabs</code> API,
              which can read the URL, title, and favicon of every open tab.
              This is a sensitive permission. Your privacy policy must
              disclose what tab information you access (URLs, titles, or
              both), whether this data is transmitted to any server, how
              long tab data is retained, and whether you track or log
              browsing behavior. If you only need to manage tab positions
              or groups without reading URLs, state that explicitly.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">
              storage Permission
            </h3>
            <p className="mb-4">
              The <code className="bg-gray-800 px-1.5 py-0.5 rounded text-sm text-blue-300">storage</code> permission
              allows your extension to use <code className="bg-gray-800 px-1.5 py-0.5 rounded text-sm text-blue-300">chrome.storage</code> to
              save data locally or sync it across the user&apos;s devices.
              Disclose what data is stored (settings, preferences, user
              content), whether <code className="bg-gray-800 px-1.5 py-0.5 rounded text-sm text-blue-300">storage.sync</code> is
              used (which sends data to Google&apos;s servers tied to the
              user&apos;s Google account), how users can clear their stored
              data, and the maximum data size stored.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">
              cookies Permission
            </h3>
            <p className="mb-4">
              The <code className="bg-gray-800 px-1.5 py-0.5 rounded text-sm text-blue-300">cookies</code> permission
              lets your extension read and modify cookies for specified
              domains. This is particularly sensitive because cookies often
              contain authentication tokens and session identifiers. Your
              privacy policy must specify which domains&apos; cookies you
              access, whether you read, write, or delete cookies, whether
              any cookie data is transmitted externally, and how this data
              is used (e.g., session management, authentication).
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">
              Host Permissions (Site Access)
            </h3>
            <p className="mb-4">
              Host permissions (like <code className="bg-gray-800 px-1.5 py-0.5 rounded text-sm text-blue-300">*://*.example.com/*</code> or
              the broad <code className="bg-gray-800 px-1.5 py-0.5 rounded text-sm text-blue-300">&lt;all_urls&gt;</code>)
              allow your extension to interact with web pages on matching
              domains. This can include reading page content, injecting
              scripts, and modifying the DOM. Disclose exactly which sites
              your extension accesses and why, what data is read from those
              pages, whether page content is sent to external servers, and
              if you use <code className="bg-gray-800 px-1.5 py-0.5 rounded text-sm text-blue-300">&lt;all_urls&gt;</code>,
              justify why broad access is necessary.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">
              identity Permission (OAuth)
            </h3>
            <p className="mb-4">
              The <code className="bg-gray-800 px-1.5 py-0.5 rounded text-sm text-blue-300">identity</code> permission
              enables OAuth2 authentication, allowing your extension to
              authenticate users via Google accounts or other providers.
              Your privacy policy must disclose what account information
              you access (email, profile name, profile photo), what OAuth
              scopes you request, whether account data is stored on your
              servers, and how users can revoke access. Because this
              permission accesses Google account data, Google reviews these
              extensions with extra scrutiny.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">
              webRequest Permission
            </h3>
            <p className="mb-4">
              The <code className="bg-gray-800 px-1.5 py-0.5 rounded text-sm text-blue-300">webRequest</code> permission
              lets your extension observe and optionally modify network
              requests. This is one of the most powerful &mdash; and most
              scrutinized &mdash; permissions. Note that in Manifest V3,
              blocking <code className="bg-gray-800 px-1.5 py-0.5 rounded text-sm text-blue-300">webRequest</code> is
              replaced by <code className="bg-gray-800 px-1.5 py-0.5 rounded text-sm text-blue-300">declarativeNetRequest</code>.
              Your policy should disclose what network traffic is observed,
              whether request/response headers or bodies are logged,
              whether any traffic data is transmitted to external servers,
              and the purpose of intercepting requests (ad blocking,
              security, analytics, etc.).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Extension Permissions vs. Privacy Policy Requirements
            </h2>
            <p className="mb-4">
              Use this table as a checklist. If your extension uses a
              permission, your privacy policy must cover the corresponding
              disclosures:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-4 text-gray-400">
                      Permission
                    </th>
                    <th className="text-left py-3 px-4 text-gray-400">
                      Data Accessed
                    </th>
                    <th className="text-left py-3 px-4 text-gray-400">
                      Required Disclosure
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4">
                      <code className="text-blue-300 text-xs">activeTab</code>
                    </td>
                    <td className="py-3 px-4">Current page URL &amp; content</td>
                    <td className="py-3 px-4">What is accessed; retention period</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4">
                      <code className="text-blue-300 text-xs">tabs</code>
                    </td>
                    <td className="py-3 px-4">All tab URLs, titles, favicons</td>
                    <td className="py-3 px-4">What tab data is read; if transmitted externally</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4">
                      <code className="text-blue-300 text-xs">storage</code>
                    </td>
                    <td className="py-3 px-4">User preferences &amp; saved data</td>
                    <td className="py-3 px-4">What is stored; if sync sends to Google servers</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4">
                      <code className="text-blue-300 text-xs">cookies</code>
                    </td>
                    <td className="py-3 px-4">Auth tokens, session data</td>
                    <td className="py-3 px-4">Which domains; read/write/delete scope</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4">
                      <code className="text-blue-300 text-xs">host_permissions</code>
                    </td>
                    <td className="py-3 px-4">Page content on matched domains</td>
                    <td className="py-3 px-4">Which sites; what data is read; external transmission</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4">
                      <code className="text-blue-300 text-xs">identity</code>
                    </td>
                    <td className="py-3 px-4">Google account email &amp; profile</td>
                    <td className="py-3 px-4">OAuth scopes; account data storage; revocation method</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4">
                      <code className="text-blue-300 text-xs">webRequest</code>
                    </td>
                    <td className="py-3 px-4">Network requests &amp; responses</td>
                    <td className="py-3 px-4">What traffic is observed; logging; external transmission</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4">
                      <code className="text-blue-300 text-xs">notifications</code>
                    </td>
                    <td className="py-3 px-4">Notification display capability</td>
                    <td className="py-3 px-4">What triggers notifications; frequency; opt-out method</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">
                      <code className="text-blue-300 text-xs">geolocation</code>
                    </td>
                    <td className="py-3 px-4">User&apos;s physical location</td>
                    <td className="py-3 px-4">Why location is needed; precision; retention; sharing</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Chrome Web Store Privacy Practices Form Guide
            </h2>
            <p className="mb-4">
              When publishing your extension, Google requires you to fill
              out a &ldquo;Privacy practices&rdquo; form in the Chrome Web
              Store Developer Dashboard. This form is separate from your
              privacy policy but must be consistent with it. Here&apos;s
              how to fill it correctly:
            </p>

            <div className="space-y-4">
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">
                  1. Single Purpose Description
                </h4>
                <p className="text-sm text-gray-400">
                  Describe your extension&apos;s primary function in one
                  clear sentence. Google uses this to verify that the
                  permissions you request are justified. If your extension
                  is a &ldquo;tab manager,&rdquo; the tabs permission makes
                  sense. If it&apos;s a &ldquo;color picker&rdquo; requesting
                  tabs permission, expect rejection. Keep the description
                  narrow and specific.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">
                  2. Permission Justification
                </h4>
                <p className="text-sm text-gray-400">
                  For each permission your extension requests, explain why
                  it&apos;s needed. Be specific: &ldquo;The tabs permission
                  is used to detect duplicate tabs by comparing URLs&rdquo;
                  is good. &ldquo;The tabs permission is needed for the
                  extension to function&rdquo; will likely be rejected.
                  Google reviewers test these justifications against your
                  extension&apos;s actual behavior.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">
                  3. Data Usage Disclosure
                </h4>
                <p className="text-sm text-gray-400">
                  Google asks whether your extension collects specific
                  categories of data: personally identifiable information,
                  health information, financial information, authentication
                  information, personal communications, location, web
                  history, user activity, and website content. Check every
                  box that applies &mdash; understating your data collection
                  can result in removal.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">
                  4. Data Usage Purposes
                </h4>
                <p className="text-sm text-gray-400">
                  For each data type collected, select the applicable
                  purposes from Google&apos;s predefined list: core
                  functionality, feature improvement, advertising, developer
                  communications, fraud prevention, or personalization.
                  Your privacy policy must describe these same purposes.
                  Inconsistency between the form and your policy is a
                  common rejection reason.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">
                  5. Remote Code Certification
                </h4>
                <p className="text-sm text-gray-400">
                  You must certify whether your extension uses remote code
                  (code loaded from external servers at runtime). Since
                  Manifest V3, remotely hosted code is prohibited for most
                  use cases. If your extension loads configuration or data
                  from a server, ensure that no executable code is included
                  in those payloads.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Manifest V3 Privacy Changes
            </h2>
            <p className="mb-4">
              Google&apos;s transition from Manifest V2 to Manifest V3
              significantly impacts extension privacy. If you&apos;re
              building a new extension or migrating, here are the key
              privacy-related changes to reflect in your privacy policy:
            </p>

            <div className="space-y-4">
              <div className="bg-gray-900/50 rounded-lg p-5">
                <h4 className="font-semibold text-white mb-2">
                  No More Persistent Background Pages
                </h4>
                <p className="text-sm text-gray-400">
                  Manifest V3 replaces persistent background pages with
                  service workers that are terminated when idle. This means
                  your extension can no longer maintain persistent
                  connections or continuously monitor browser activity in
                  the background. From a privacy perspective, this is a
                  significant improvement &mdash; and your privacy policy
                  should reflect that your extension does not continuously
                  run or monitor in the background.
                </p>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-5">
                <h4 className="font-semibold text-white mb-2">
                  declarativeNetRequest Replaces webRequest Blocking
                </h4>
                <p className="text-sm text-gray-400">
                  The blocking version of <code className="bg-gray-800 px-1 py-0.5 rounded text-xs text-blue-300">webRequest</code> is
                  replaced by <code className="bg-gray-800 px-1 py-0.5 rounded text-xs text-blue-300">declarativeNetRequest</code>,
                  which uses predefined rules rather than code execution
                  for request modification. This means your extension can
                  no longer inspect request/response bodies for blocking
                  purposes. Update your privacy policy to reflect which API
                  you use and what network data your extension can access.
                </p>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-5">
                <h4 className="font-semibold text-white mb-2">
                  No Remotely Hosted Code
                </h4>
                <p className="text-sm text-gray-400">
                  Manifest V3 prohibits executing code fetched from remote
                  servers. All logic must be bundled in the extension
                  package. This prevents malicious updates that inject
                  tracking or data exfiltration code post-install. Your
                  privacy policy should state that all code is bundled
                  locally and no remote code execution occurs.
                </p>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-5">
                <h4 className="font-semibold text-white mb-2">
                  Narrower Host Permission Grants
                </h4>
                <p className="text-sm text-gray-400">
                  In Manifest V3, users can choose to grant host permissions
                  on-click, on specific sites, or on all sites. Your
                  privacy policy should explain what functionality is
                  available at each permission level and clearly state the
                  minimum permissions required for core features to work.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Step-by-Step: Creating Your Chrome Extension Privacy Policy
            </h2>
            <div className="bg-gray-900/50 rounded-xl p-6">
              <div className="space-y-4 text-sm">
                <div className="flex gap-4">
                  <span className="text-green-400 w-6 flex-shrink-0">1.</span>
                  <div>
                    <span className="font-semibold text-white">
                      Audit your manifest.json permissions
                    </span>
                    <p className="text-gray-400 mt-1">
                      List every permission in your manifest.json file.
                      Include both &ldquo;permissions&rdquo; and
                      &ldquo;host_permissions&rdquo; arrays. Each one
                      requires a disclosure in your privacy policy.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-green-400 w-6 flex-shrink-0">2.</span>
                  <div>
                    <span className="font-semibold text-white">
                      Map permissions to data collection
                    </span>
                    <p className="text-gray-400 mt-1">
                      For each permission, document what user data your
                      extension actually accesses, processes, stores, or
                      transmits. Be honest &mdash; understating will cause
                      rejection.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-green-400 w-6 flex-shrink-0">3.</span>
                  <div>
                    <span className="font-semibold text-white">
                      Identify third-party services
                    </span>
                    <p className="text-gray-400 mt-1">
                      If your extension sends data to analytics services
                      (Google Analytics, Mixpanel), authentication providers,
                      APIs, or your own backend server, list each one with
                      its purpose and data shared.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-green-400 w-6 flex-shrink-0">4.</span>
                  <div>
                    <span className="font-semibold text-white">
                      Define data retention and deletion
                    </span>
                    <p className="text-gray-400 mt-1">
                      State how long data is stored (locally or on servers),
                      what happens when the extension is uninstalled, and
                      how users can request data deletion.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-green-400 w-6 flex-shrink-0">5.</span>
                  <div>
                    <span className="font-semibold text-white">
                      Generate your policy with PolicyForge
                    </span>
                    <p className="text-gray-400 mt-1">
                      Use PolicyForge to generate a professional privacy
                      policy that covers all required disclosures. Customize
                      it with your extension&apos;s specific permissions
                      and data practices, then host it at a public URL.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-green-400 w-6 flex-shrink-0">6.</span>
                  <div>
                    <span className="font-semibold text-white">
                      Host your privacy policy at a public URL
                    </span>
                    <p className="text-gray-400 mt-1">
                      The Chrome Web Store requires a publicly accessible
                      URL. Common options: a GitHub Pages site, a dedicated
                      page on your website, or a Google Sites page. The URL
                      must remain active as long as your extension is listed.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-green-400 w-6 flex-shrink-0">7.</span>
                  <div>
                    <span className="font-semibold text-white">
                      Fill out the Chrome Web Store privacy practices form
                    </span>
                    <p className="text-gray-400 mt-1">
                      Ensure the privacy practices form in the Developer
                      Dashboard matches your privacy policy exactly.
                      Inconsistencies between the form and your policy are
                      a top reason for review rejection.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Common Rejection Reasons (And How to Avoid Them)
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-4 text-gray-400">
                      Rejection Reason
                    </th>
                    <th className="text-left py-3 px-4 text-gray-400">
                      How to Fix
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 text-red-400">
                      Missing privacy policy URL
                    </td>
                    <td className="py-3 px-4">
                      Add a publicly accessible privacy policy URL in the
                      Store Listing tab
                    </td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 text-red-400">
                      Privacy policy is a 404 page
                    </td>
                    <td className="py-3 px-4">
                      Verify the URL loads correctly before submitting;
                      use a reliable host
                    </td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 text-red-400">
                      Policy doesn&apos;t mention the extension
                    </td>
                    <td className="py-3 px-4">
                      Include your extension&apos;s name and specifically
                      describe its data practices
                    </td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 text-red-400">
                      Permissions not justified
                    </td>
                    <td className="py-3 px-4">
                      Explain why each permission is needed in both the
                      policy and the privacy form
                    </td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 text-red-400">
                      Privacy form inconsistent with policy
                    </td>
                    <td className="py-3 px-4">
                      Cross-check every data type in the form against your
                      written policy
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-red-400">
                      Over-broad permissions without justification
                    </td>
                    <td className="py-3 px-4">
                      Request only the minimum permissions needed; use
                      activeTab instead of broad host permissions where
                      possible
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 bg-green-900/20 border border-green-800/30 rounded-lg p-4">
              <p className="text-sm text-green-300">
                <strong>Cost of PolicyForge Pro:</strong> $12.99 (one-time).
                Generate unlimited privacy policies, terms of service, and
                cookie policies. Avoid the $500-$2,000 cost of a privacy
                lawyer and the weeks-long review rejection cycle.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              FAQ: Chrome Extension Privacy Policies
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Do I need a privacy policy if my extension doesn&apos;t
                  collect any data?
                </h3>
                <p>
                  If your extension truly collects zero user data, uses no
                  permissions, and has no network requests, you may not
                  strictly need one. However, Google still recommends
                  providing a privacy policy, and having one prevents
                  review complications. Even a simple policy stating
                  &ldquo;This extension does not collect, store, or transmit
                  any user data&rdquo; is better than no policy. In
                  practice, most extensions use at least the storage
                  permission, which does require a disclosure.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Where should I host my Chrome extension privacy policy?
                </h3>
                <p>
                  The privacy policy must be at a publicly accessible URL
                  that stays live as long as your extension is listed.
                  Common free options include GitHub Pages (create a
                  repository with a privacy-policy.html file), Google Sites,
                  or a page on your personal/company website. Avoid Google
                  Docs links &mdash; they sometimes get flagged. The URL
                  must not require login to access.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  How is a Chrome extension privacy policy different from a
                  website privacy policy?
                </h3>
                <p>
                  Chrome extension policies must specifically address
                  browser permissions, the types of browser data accessed
                  (tabs, history, page content), how the extension interacts
                  with web pages, and data handling through Chrome&apos;s
                  storage APIs. Website policies focus more on cookies,
                  server-side data, and tracking. An extension policy also
                  needs to match Google&apos;s privacy practices form, which
                  has specific data categories that don&apos;t apply to
                  regular websites.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Can I use the same privacy policy for my extension and my
                  website?
                </h3>
                <p>
                  You can, but it must cover both contexts. A combined
                  policy needs separate sections for the extension&apos;s
                  data practices (permissions, browser data, local storage)
                  and the website&apos;s data practices (cookies, server
                  logs, analytics). Make sure the extension-specific
                  disclosures aren&apos;t buried. Google reviewers look for
                  clear, extension-specific language. A generic website
                  policy that doesn&apos;t mention the extension will be
                  rejected.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  What happens if my extension is removed for a privacy
                  policy violation?
                </h3>
                <p>
                  If Google removes your extension, existing users keep
                  it installed but won&apos;t receive updates, and new
                  users cannot install it. You&apos;ll receive a notification
                  email explaining the specific violation. You can fix the
                  issue and resubmit, but repeat violations lead to longer
                  review times and potential developer account suspension.
                  The fastest path to reinstatement is fixing the specific
                  issues cited in the removal notice and resubmitting with
                  a clear explanation of changes made.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-800/30 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-4 text-center">
              Get Your Extension Listed. Generate a Policy Now.
            </h2>
            <p className="text-gray-300 text-center mb-6">
              Don&apos;t let a missing privacy policy block your Chrome Web
              Store submission. Generate a compliant privacy policy tailored
              to your extension&apos;s permissions in under 2 minutes.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/"
                className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-8 rounded-lg transition"
              >
                Generate Free Policy — $0
              </Link>
              <Link
                href="/check"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-lg transition"
              >
                Check Your Compliance
              </Link>
            </div>
            <p className="text-center text-sm text-gray-500 mt-4">
              Free tier: 2 generations/day. Pro: $12.99 one-time for unlimited.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
