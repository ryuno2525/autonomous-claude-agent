import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy for Apple App Store | Free Generator - PolicyForge",
  description:
    "Generate a privacy policy that passes Apple App Store review. Covers Section 5.1.1 requirements, Privacy Nutrition Labels, App Tracking Transparency, Kids category rules, and data collection disclosures.",
  keywords:
    "app store privacy policy, apple privacy policy generator, ios privacy policy, app store review guidelines privacy, privacy nutrition labels, app tracking transparency privacy policy, app store connect privacy policy, apple kids category privacy, app store rejection privacy policy",
  openGraph: {
    title: "Privacy Policy for Apple App Store — Free Generator",
    description:
      "Create a privacy policy that meets Apple App Store Review Guidelines Section 5.1.1. Covers Privacy Nutrition Labels, ATT, Kids category, and all required data disclosures.",
    type: "website",
  },
};

const APPLE_DATA_CATEGORIES = [
  {
    category: "Contact Info",
    items: [
      "Name",
      "Email address",
      "Phone number",
      "Physical address",
      "Other user contact info",
    ],
  },
  {
    category: "Health & Fitness",
    items: [
      "Health data (HealthKit)",
      "Fitness data (workouts, steps)",
      "Clinical health records",
      "Health-related research data",
    ],
  },
  {
    category: "Financial Info",
    items: [
      "Payment info (credit card, bank)",
      "Credit info",
      "Other financial info",
      "Salary or income data",
    ],
  },
  {
    category: "Location",
    items: [
      "Precise location (GPS)",
      "Coarse location (IP-based, city-level)",
    ],
  },
  {
    category: "Sensitive Info",
    items: [
      "Racial or ethnic data",
      "Sexual orientation",
      "Pregnancy or childbirth",
      "Religious or philosophical beliefs",
      "Political opinions",
      "Biometric data",
    ],
  },
  {
    category: "Contacts",
    items: [
      "Contacts list",
      "Social connections",
    ],
  },
  {
    category: "User Content",
    items: [
      "Emails or text messages",
      "Photos or videos",
      "Audio data",
      "Gameplay content",
      "Customer support interactions",
      "Other user content",
    ],
  },
  {
    category: "Browsing & Search",
    items: [
      "Browsing history",
      "Search history",
      "In-app search queries",
    ],
  },
  {
    category: "Identifiers",
    items: [
      "User ID",
      "Device ID (IDFA)",
      "Third-party advertising ID",
    ],
  },
  {
    category: "Purchases",
    items: [
      "Purchase history",
      "In-app purchase records",
      "Subscriptions",
    ],
  },
  {
    category: "Usage Data",
    items: [
      "Product interaction (taps, scrolls, views)",
      "Advertising data (ad clicks, impressions)",
      "Other usage data (session length, feature use)",
    ],
  },
  {
    category: "Diagnostics",
    items: [
      "Crash data",
      "Performance data (load times, battery)",
      "Other diagnostic data (logs, error reports)",
    ],
  },
];

const REJECTION_REASONS = [
  {
    reason: "No privacy policy URL provided",
    detail:
      "You left the Privacy Policy URL field blank in App Store Connect. Apple requires this for every app, even if it collects zero data.",
    fix: "Add your privacy policy URL in App Store Connect under App Information before submitting.",
  },
  {
    reason: "Privacy policy URL returns a 404 or is unreachable",
    detail:
      "Apple's review team clicks your privacy policy link. If it's broken, expired, or behind a login wall, your app is rejected.",
    fix: "Host your policy on a publicly accessible URL with no authentication. Test the link before submitting.",
  },
  {
    reason: "Privacy policy doesn't match Nutrition Label declarations",
    detail:
      "Your Privacy Nutrition Labels say you collect location data, but your privacy policy doesn't mention location tracking — or vice versa.",
    fix: "Audit your Nutrition Labels and privacy policy side by side. Every data type in one must appear in the other.",
  },
  {
    reason: "Missing data collection disclosures",
    detail:
      "Your app requests camera, contacts, or location permissions, but your privacy policy doesn't explain why or what data is collected.",
    fix: "List every permission your app requests and explain the purpose of each in your privacy policy.",
  },
  {
    reason: "No mention of third-party data sharing",
    detail:
      "Your app uses SDKs like Firebase, AdMob, or Facebook SDK that share data with third parties, but your policy is silent about this.",
    fix: "Disclose every third-party SDK, what data it collects, and link to each SDK's own privacy policy.",
  },
  {
    reason: "App Tracking Transparency (ATT) not addressed",
    detail:
      "Your app accesses the IDFA or performs cross-app tracking but your policy doesn't mention ATT or explain tracking behavior.",
    fix: "Add a section explaining what tracking your app does, why, and what happens when users opt out via ATT.",
  },
  {
    reason: "Kids category app with non-compliant policy",
    detail:
      "Your app is listed in the Kids category but uses third-party analytics, behavioral advertising, or lacks COPPA provisions.",
    fix: "Remove all non-essential SDKs for Kids apps. Add COPPA compliance section and parental consent mechanisms.",
  },
  {
    reason: "No data deletion mechanism described",
    detail:
      "Apple now requires apps to offer account and data deletion. Your policy doesn't describe how users can request deletion.",
    fix: "Add clear instructions for how users can request data deletion (in-app option, email, or web form).",
  },
];

const NUTRITION_LABEL_PURPOSES = [
  {
    purpose: "Third-Party Advertising",
    description: "Data used to display targeted ads from third-party ad networks (e.g., AdMob, Meta Audience Network)",
  },
  {
    purpose: "Developer's Advertising or Marketing",
    description: "Data used for your own marketing campaigns, promotional emails, or in-app marketing messages",
  },
  {
    purpose: "Analytics",
    description: "Data used to evaluate user behavior, measure app performance, or understand usage patterns",
  },
  {
    purpose: "Product Personalization",
    description: "Data used to customize the user experience, such as content recommendations or UI preferences",
  },
  {
    purpose: "App Functionality",
    description: "Data necessary for the app to work correctly, such as authentication tokens or user settings",
  },
  {
    purpose: "Other Purposes",
    description: "Any data use that doesn't fit the above categories, such as compliance, fraud prevention, or security",
  },
];

const FAQ_ITEMS = [
  {
    q: "Does Apple require a privacy policy for every app?",
    a: "Yes. Apple's App Store Review Guidelines Section 5.1.1 requires every app submitted to the App Store to include a privacy policy, regardless of whether the app collects user data. Even a simple utility app with no data collection must link to a privacy policy that states no data is collected. Without one, your app will be rejected during review.",
  },
  {
    q: "What are Apple's Privacy Nutrition Labels and do I need them?",
    a: "Privacy Nutrition Labels are the data disclosure cards shown on every app's App Store listing page. They display what data your app collects, whether it's linked to the user's identity, and whether it's used for tracking. You must fill these out in App Store Connect before submitting your app. Apple compares your Nutrition Labels against your actual app behavior and privacy policy — inconsistencies cause rejections.",
  },
  {
    q: "What is App Tracking Transparency (ATT) and how does it affect my privacy policy?",
    a: "ATT is Apple's framework (introduced in iOS 14.5) that requires apps to ask user permission before tracking their activity across other companies' apps and websites. If your app uses the IDFA or any form of cross-app tracking, you must implement the ATT prompt and describe your tracking practices in your privacy policy — including what happens when users opt out.",
  },
  {
    q: "My app was rejected for privacy policy issues. What should I check?",
    a: "The most common causes are: (1) privacy policy URL is broken or unreachable, (2) policy doesn't match your Nutrition Label declarations, (3) missing disclosures for device permissions you request, (4) no mention of third-party SDKs that collect data, (5) no data deletion mechanism described, and (6) ATT not addressed when your app tracks users. Fix each issue, update your policy, and resubmit.",
  },
  {
    q: "How do I add a privacy policy URL in App Store Connect?",
    a: "In App Store Connect, go to your app, then App Information (under General in the left sidebar). Scroll to the 'App Privacy Policy' section and paste your URL. This must be a publicly accessible HTTPS URL that doesn't require login. You should also link to the same policy within your app (in Settings or a dedicated screen) — Apple checks for in-app accessibility during review.",
  },
  {
    q: "What extra requirements apply to Kids category apps?",
    a: "Apps in Apple's Kids category face strict additional rules: no third-party advertising or analytics SDKs are permitted, no behavioral advertising, no cross-app tracking, data collection must be minimized to what's strictly necessary, and you must comply with COPPA (US) and equivalent children's privacy laws globally. Your privacy policy must explicitly state how children's data is handled and that parental consent is obtained.",
  },
  {
    q: "Do I need separate privacy policies for my iOS app and my website?",
    a: "No, one privacy policy can cover both — and this is actually recommended for consistency. However, make sure the policy addresses app-specific data (device identifiers, push tokens, permissions, SDKs) in addition to website-specific data (cookies, analytics). Your policy should clearly state which sections apply to each platform.",
  },
  {
    q: "How often does Apple change its privacy requirements?",
    a: "Apple updates its privacy requirements regularly, typically at WWDC each June and through periodic App Store Review Guideline updates. Major changes in recent years include Privacy Nutrition Labels (2020), App Tracking Transparency (2021), required account deletion (2022), and third-party SDK privacy manifests (2024). Review Apple's developer documentation before each submission to stay current.",
  },
];

export default function PrivacyPolicyForAppStore() {
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
            Apple App Store Compliant
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Privacy Policy for Apple App Store
        </h1>
        <p className="text-xl text-gray-400 mb-8">
          Apple rejects apps without a compliant privacy policy. Generate one that
          passes App Store Review, matches your Privacy Nutrition Labels, and covers
          ATT, GDPR, and CCPA — in under 2 minutes.
        </p>

        <div className="flex flex-wrap gap-3 mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg text-lg hover:opacity-90 transition-opacity"
          >
            Generate Your App Store Privacy Policy
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <Link
            href="/check"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-lg text-lg hover:bg-white/20 transition-colors"
          >
            Check Existing Policy
          </Link>
        </div>

        <div className="space-y-12 text-gray-300 leading-relaxed">
          {/* Section 5.1.1 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Apple App Store Review Guidelines Section 5.1.1
            </h2>
            <p className="mb-4">
              Section 5.1.1 of Apple&apos;s App Store Review Guidelines is the definitive
              reference for privacy policy requirements on iOS. It states that all apps must
              include a link to a privacy policy in both the App Store Connect metadata and
              within the app itself. Apple&apos;s review team actively checks this during every
              submission.
            </p>
            <div className="p-4 bg-red-500/5 border border-red-500/20 rounded-lg mb-4">
              <p className="text-sm text-red-300">
                <strong>Key requirement:</strong> Your privacy policy must be accessible at all
                times — not just during onboarding. Apple reviewers navigate your app looking
                for a clearly visible privacy policy link. If they can&apos;t find one, your app
                is rejected.
              </p>
            </div>
            <p className="mb-4">
              Specifically, Section 5.1.1 requires your privacy policy to cover:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1 font-bold">1.</span>
                <span>
                  <strong className="text-white">What data is collected</strong> — Every category
                  of personal and device data your app accesses, whether directly or through
                  third-party SDKs.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1 font-bold">2.</span>
                <span>
                  <strong className="text-white">How the data is collected</strong> — Whether
                  through user input, automatic device data collection, third-party sources,
                  or SDK integrations.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1 font-bold">3.</span>
                <span>
                  <strong className="text-white">How the data is used</strong> — The specific
                  purposes for each data type: app functionality, analytics, advertising,
                  personalization, or other uses.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1 font-bold">4.</span>
                <span>
                  <strong className="text-white">Who the data is shared with</strong> — All
                  third parties that receive user data, including analytics providers, ad
                  networks, payment processors, and cloud services.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1 font-bold">5.</span>
                <span>
                  <strong className="text-white">Data retention and deletion</strong> — How
                  long you keep data and how users can request deletion of their data and
                  account.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1 font-bold">6.</span>
                <span>
                  <strong className="text-white">User consent mechanisms</strong> — How
                  consent is obtained, especially for sensitive data, and how users can
                  withdraw consent.
                </span>
              </li>
            </ul>
            <p className="text-sm text-gray-400">
              Apple updates these guidelines periodically. Always review the latest version
              of the{" "}
              <span className="text-blue-400">
                App Store Review Guidelines
              </span>{" "}
              on Apple&apos;s developer site before submitting your app.
            </p>
          </section>

          {/* Privacy Nutrition Labels */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              App Store Privacy Nutrition Labels
            </h2>
            <p className="mb-4">
              Since December 2020, Apple requires every app to display Privacy Nutrition
              Labels on its App Store product page. These labels give users a quick summary
              of your app&apos;s data practices before they download. You fill them out in
              App Store Connect, and Apple verifies them against your app&apos;s actual
              behavior.
            </p>
            <p className="mb-4">
              Nutrition Labels answer three questions for each data type your app collects:
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="p-4 bg-white/5 border border-white/10 rounded-lg text-center">
                <div className="text-2xl mb-2">1</div>
                <h3 className="font-semibold text-white text-sm mb-1">Data Used to Track You</h3>
                <p className="text-xs text-gray-400">
                  Is this data linked to your identity and used for cross-app or cross-site
                  tracking (advertising attribution, data brokers)?
                </p>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-lg text-center">
                <div className="text-2xl mb-2">2</div>
                <h3 className="font-semibold text-white text-sm mb-1">Data Linked to You</h3>
                <p className="text-xs text-gray-400">
                  Is this data connected to your identity via your account, device, or other
                  identifiers — but not used for tracking?
                </p>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-lg text-center">
                <div className="text-2xl mb-2">3</div>
                <h3 className="font-semibold text-white text-sm mb-1">Data Not Linked to You</h3>
                <p className="text-xs text-gray-400">
                  Is this data collected but not associated with your identity (aggregate
                  analytics, anonymous crash data)?
                </p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mb-3">
              How to Fill Out Nutrition Labels in App Store Connect
            </h3>
            <div className="space-y-3 mb-4">
              {[
                {
                  step: "Step 1: Audit your data collection",
                  detail:
                    "List every piece of data your app collects — directly and through SDKs. Include analytics, crash reporting, ad networks, and payment processors.",
                },
                {
                  step: "Step 2: Categorize each data type",
                  detail:
                    "Map each piece of data to Apple's predefined categories (Contact Info, Location, Identifiers, Usage Data, Diagnostics, etc.).",
                },
                {
                  step: "Step 3: Declare the purpose",
                  detail:
                    "For each data type, select one or more purposes: Third-Party Advertising, Analytics, Product Personalization, App Functionality, or Other.",
                },
                {
                  step: "Step 4: Indicate linking and tracking",
                  detail:
                    "For each data type, specify whether it's linked to the user's identity and whether it's used for tracking across other apps/sites.",
                },
                {
                  step: "Step 5: Cross-reference your privacy policy",
                  detail:
                    "Ensure every data type and purpose in your Nutrition Labels is also described in your privacy policy. Mismatches cause rejections.",
                },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
                  <span className="text-blue-400 mt-0.5 font-semibold text-sm whitespace-nowrap">{item.step.split(":")[0]}:</span>
                  <div>
                    <p className="font-medium text-white text-sm">{item.step.split(": ")[1]}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-lg font-semibold text-white mb-3">
              Nutrition Label Purpose Categories
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {NUTRITION_LABEL_PURPOSES.map((item) => (
                <div key={item.purpose} className="p-3 bg-white/5 border border-white/10 rounded-lg">
                  <h4 className="font-semibold text-white text-sm">{item.purpose}</h4>
                  <p className="text-xs text-gray-400 mt-1">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* App Tracking Transparency */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              App Tracking Transparency (ATT) and Your Privacy Policy
            </h2>
            <p className="mb-4">
              Since iOS 14.5, Apple&apos;s App Tracking Transparency framework requires apps to
              request user permission before tracking their activity across other companies&apos;
              apps and websites. This is enforced at the OS level — apps that attempt to access
              the IDFA (Identifier for Advertisers) without showing the ATT prompt are rejected.
            </p>
            <div className="p-4 bg-yellow-500/5 border border-yellow-500/20 rounded-lg mb-4">
              <p className="text-sm text-yellow-300">
                <strong>Important:</strong> &quot;Tracking&quot; in Apple&apos;s definition means
                linking data collected from your app with data from other companies&apos; apps, websites,
                or offline properties for advertising purposes — or sharing data with data brokers.
                Even server-side tracking can trigger ATT requirements.
              </p>
            </div>
            <p className="mb-4">Your privacy policy must address ATT by covering these points:</p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-blue-400">&#8226;</span>
                <span>
                  <strong className="text-white">What tracking your app performs</strong> — Describe
                  what cross-app or cross-site tracking occurs (ad attribution, retargeting,
                  conversion measurement).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">&#8226;</span>
                <span>
                  <strong className="text-white">What data is collected if the user opts in</strong> — IDFA,
                  advertising identifiers, browsing behavior sent to ad networks.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">&#8226;</span>
                <span>
                  <strong className="text-white">What happens if the user opts out</strong> — Explain
                  that non-personalized ads may be shown, and that no cross-app tracking data
                  will be collected or shared.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">&#8226;</span>
                <span>
                  <strong className="text-white">Impact on user experience</strong> — Clarify whether
                  opting out changes app functionality or only affects ad personalization.
                </span>
              </li>
            </ul>
            <p className="text-sm text-gray-400">
              If your app does not perform any tracking and does not access the IDFA, you should
              still mention this in your privacy policy. Explicitly stating &quot;We do not track
              users across apps or websites&quot; provides transparency and aligns with your
              Nutrition Label declarations.
            </p>
          </section>

          {/* Apple's Data Collection Categories */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Apple&apos;s Data Collection Categories
            </h2>
            <p className="mb-6">
              Apple defines 14 data collection categories that you must evaluate when
              filling out Nutrition Labels and writing your privacy policy. For each
              category, determine whether your app collects that data type, and if so,
              disclose it in both your Nutrition Labels and your privacy policy. Here
              is every category with its subcategories:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {APPLE_DATA_CATEGORIES.map((category) => (
                <div key={category.category} className="p-4 bg-white/5 border border-white/10 rounded-lg">
                  <h3 className="font-semibold text-white mb-2">{category.category}</h3>
                  <ul className="space-y-1">
                    {category.items.map((item) => (
                      <li key={item} className="text-sm text-gray-400 flex items-start gap-2">
                        <span className="text-blue-400 mt-0.5">&#8226;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-gray-400">
              Your privacy policy should address each category that applies to your app. PolicyForge
              generates policies that map to all of Apple&apos;s data categories automatically.{" "}
              <Link href="/" className="text-blue-400 hover:text-blue-300">
                Generate yours now &rarr;
              </Link>
            </p>
          </section>

          {/* Required vs Optional Disclosures */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Required vs Optional Data Collection Disclosures
            </h2>
            <p className="mb-4">
              Not all data collection needs to be disclosed in your Nutrition Labels — but
              your privacy policy should always be comprehensive. Apple exempts certain data
              from Nutrition Label disclosure under specific conditions:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="p-4 bg-green-500/5 border border-green-500/20 rounded-lg">
                <h3 className="font-semibold text-green-400 mb-2">Exempt from Nutrition Labels (Optional)</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">&#8226;</span>
                    Data collected infrequently, not used for tracking, and optional for the user
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">&#8226;</span>
                    Data processed entirely on-device and never sent to a server
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">&#8226;</span>
                    Data collected only for legal compliance purposes (fraud prevention, regulatory)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">&#8226;</span>
                    Data collected by an optional feature the user explicitly chooses to enable
                  </li>
                </ul>
              </div>
              <div className="p-4 bg-red-500/5 border border-red-500/20 rounded-lg">
                <h3 className="font-semibold text-red-400 mb-2">Must Be Disclosed (Required)</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">&#8226;</span>
                    Any data collected by default when the user opens or uses the app
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">&#8226;</span>
                    All data collected by third-party SDKs integrated into your app
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">&#8226;</span>
                    Data used for tracking, advertising, or shared with data brokers
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">&#8226;</span>
                    Any data linked to the user&apos;s identity through accounts or device IDs
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">&#8226;</span>
                    Device permissions data (camera, microphone, location, contacts)
                  </li>
                </ul>
              </div>
            </div>
            <div className="p-4 bg-blue-500/5 border border-blue-500/20 rounded-lg">
              <p className="text-sm text-blue-300">
                <strong>Best practice:</strong> Even if data is exempt from Nutrition Labels,
                disclose it in your privacy policy anyway. Over-disclosure is always safer than
                under-disclosure. Apple may update exemption rules, and privacy laws like GDPR
                require disclosure regardless of Apple&apos;s categories.
              </p>
            </div>
          </section>

          {/* Common Rejection Reasons */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Common App Store Rejection Reasons Related to Privacy
            </h2>
            <p className="mb-6">
              Privacy-related rejections are among the most frequent reasons apps fail
              App Store review. Here are the top rejection causes and how to fix each one:
            </p>
            <div className="space-y-4">
              {REJECTION_REASONS.map((item, index) => (
                <div key={item.reason} className="p-4 bg-white/5 border border-white/10 rounded-lg">
                  <div className="flex items-start gap-3">
                    <span className="text-red-400 font-bold text-lg">{index + 1}</span>
                    <div>
                      <h3 className="font-semibold text-white mb-1">{item.reason}</h3>
                      <p className="text-sm text-gray-400 mb-2">{item.detail}</p>
                      <p className="text-sm text-green-400">
                        <strong>Fix:</strong> {item.fix}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Kids Category */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Kids Category: Additional Privacy Requirements
            </h2>
            <p className="mb-4">
              If your app targets children and is listed in Apple&apos;s Kids category
              (ages 5 and under, ages 6-8, or ages 9-11), you face the strictest privacy
              requirements on the App Store. Apple enforces these rules in addition to all
              standard Section 5.1.1 requirements.
            </p>
            <div className="space-y-3 mb-4">
              {[
                {
                  rule: "No third-party analytics",
                  detail: "Kids category apps cannot include third-party analytics SDKs (Firebase Analytics, Mixpanel, Amplitude). Only Apple's built-in analytics via App Store Connect are permitted.",
                },
                {
                  rule: "No third-party advertising",
                  detail: "Behavioral or targeted advertising is strictly prohibited. No AdMob, Meta Audience Network, or similar ad SDKs. Only age-appropriate, context-based ads are allowed in limited circumstances.",
                },
                {
                  rule: "No cross-app tracking",
                  detail: "Kids apps must not access the IDFA, perform fingerprinting, or track users across apps/websites in any way. The ATT prompt should not even appear.",
                },
                {
                  rule: "COPPA compliance required",
                  detail: "Regardless of your location, if your app is in the Kids category, you must comply with COPPA (US Children's Online Privacy Protection Act). This means verifiable parental consent before collecting any personal information.",
                },
                {
                  rule: "Minimal data collection",
                  detail: "Collect only data that is strictly necessary for the app to function. No data collection for marketing, profiling, or enhancement purposes.",
                },
                {
                  rule: "Parental gate for external links",
                  detail: "Any links that take users outside the app (including to your website or privacy policy) must be behind a parental gate — a mechanism that prevents children from accidentally leaving the app.",
                },
                {
                  rule: "Age-appropriate privacy policy language",
                  detail: "Your privacy policy should be written in language that parents can easily understand. Consider providing a simplified version specifically for the Kids category listing.",
                },
              ].map((item) => (
                <div key={item.rule} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
                  <span className="text-red-400 mt-0.5 font-bold text-sm">!</span>
                  <div>
                    <p className="font-medium text-white text-sm">{item.rule}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-400">
              If your app is a &quot;Made for Kids&quot; app or designed for a mixed audience
              (children and adults), similar but slightly different rules apply. Always check
              Apple&apos;s latest Kids category guidelines.
            </p>
          </section>

          {/* How to Add Privacy Policy URL */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              How to Add Your Privacy Policy URL in App Store Connect
            </h2>
            <p className="mb-4">
              Apple requires your privacy policy URL to be set in App Store Connect before
              you can submit your app for review. Follow these steps:
            </p>
            <div className="space-y-3 mb-4">
              {[
                { step: "1", text: "Log in to App Store Connect", detail: "Go to appstoreconnect.apple.com and select your app." },
                { step: "2", text: "Navigate to App Information", detail: "In the left sidebar under 'General', click 'App Information'." },
                { step: "3", text: "Find the Privacy Policy URL field", detail: "Scroll down to the 'App Privacy' section. You'll see a 'Privacy Policy URL' field." },
                { step: "4", text: "Paste your privacy policy URL", detail: "Enter the full HTTPS URL where your privacy policy is hosted. It must be publicly accessible with no login required." },
                { step: "5", text: "Complete Privacy Nutrition Labels", detail: "In the same App Privacy section, click 'Get Started' to fill out your data collection practices for Nutrition Labels." },
                { step: "6", text: "Add in-app privacy policy link", detail: "Add a 'Privacy Policy' link in your app's Settings, About, or Menu screen. Apple checks for this during review." },
                { step: "7", text: "Save and submit", detail: "Save your changes, then submit your app for review. Apple's review team will verify both the URL and in-app accessibility." },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
                  <span className="w-6 h-6 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {item.step}
                  </span>
                  <div>
                    <p className="font-medium text-white text-sm">{item.text}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 bg-yellow-500/5 border border-yellow-500/20 rounded-lg">
              <p className="text-sm text-yellow-300">
                <strong>Common mistake:</strong> Hosting your privacy policy on a page that
                requires authentication, is behind a paywall, or returns a redirect chain.
                Apple&apos;s review team must be able to access it directly with a single click.
                Test your URL in an incognito browser window before submitting.
              </p>
            </div>
          </section>

          {/* CTA */}
          <section className="p-8 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-3">
              Generate Your App Store Privacy Policy Now
            </h2>
            <p className="text-gray-300 mb-2">
              PolicyForge generates privacy policies specifically designed to pass Apple
              App Store review. We cover Section 5.1.1 requirements, map to Nutrition Label
              categories, address ATT, and include GDPR and CCPA provisions — all from a
              simple form you can complete in 2 minutes.
            </p>
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <div className="text-sm text-gray-400">
                <span className="text-green-400">&#10003;</span> Section 5.1.1 compliant
              </div>
              <div className="text-sm text-gray-400">
                <span className="text-green-400">&#10003;</span> Nutrition Label aligned
              </div>
              <div className="text-sm text-gray-400">
                <span className="text-green-400">&#10003;</span> ATT disclosure included
              </div>
              <div className="text-sm text-gray-400">
                <span className="text-green-400">&#10003;</span> GDPR &amp; CCPA ready
              </div>
              <div className="text-sm text-gray-400">
                <span className="text-green-400">&#10003;</span> Kids/COPPA provisions
              </div>
            </div>
            <div className="flex flex-wrap gap-3 items-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Generate Now — Free
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <span className="text-sm text-gray-500">Free tier available &middot; Pro from $4.99</span>
            </div>
          </section>

          {/* Scan CTA */}
          <section className="p-6 bg-white/5 border border-white/10 rounded-xl text-center">
            <h2 className="text-xl font-bold text-white mb-2">Already Have a Privacy Policy?</h2>
            <p className="text-gray-400 text-sm mb-4">
              Scan your app&apos;s privacy policy URL to check compliance across 10 categories — including
              App Store requirements, GDPR, CCPA, and data disclosure completeness.
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

          {/* Related Resources */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Related Resources</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link
                href="/privacy-policy-for-mobile-app"
                className="p-4 bg-white/5 border border-white/10 rounded-lg hover:border-blue-500/30 transition-colors group"
              >
                <h3 className="font-semibold text-white text-sm group-hover:text-blue-400">
                  Privacy Policy for Mobile Apps
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  Covers iOS and Android app requirements, SDKs, and permissions
                </p>
              </Link>
              <Link
                href="/gdpr-privacy-policy-generator"
                className="p-4 bg-white/5 border border-white/10 rounded-lg hover:border-blue-500/30 transition-colors group"
              >
                <h3 className="font-semibold text-white text-sm group-hover:text-blue-400">
                  GDPR Privacy Policy Generator
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  Full EU compliance for apps available in Europe
                </p>
              </Link>
              <Link
                href="/ccpa-privacy-policy-generator"
                className="p-4 bg-white/5 border border-white/10 rounded-lg hover:border-blue-500/30 transition-colors group"
              >
                <h3 className="font-semibold text-white text-sm group-hover:text-blue-400">
                  CCPA Privacy Policy Generator
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  California consumer privacy requirements
                </p>
              </Link>
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t border-white/10 mt-16 py-8 text-center text-sm text-gray-500">
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
          Disclaimer: This generator provides template privacy policies for informational purposes.
          Consult a qualified attorney for jurisdiction-specific legal advice.
        </p>
      </footer>
    </div>
  );
}
