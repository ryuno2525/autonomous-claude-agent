import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy for Mobile Apps | Free Generator - PolicyForge",
  description:
    "Generate a free privacy policy for your iOS or Android app. Covers device data, location tracking, push notifications, in-app purchases, and third-party SDKs. App Store & Play Store compliant.",
  keywords:
    "mobile app privacy policy, app store privacy policy, google play privacy policy, iOS app privacy policy, android app privacy policy, app privacy policy generator, mobile app GDPR, COPPA mobile app",
  openGraph: {
    title: "Free Privacy Policy Generator for Mobile Apps",
    description: "Create an App Store & Play Store compliant privacy policy in minutes. Covers GDPR, CCPA, device permissions, SDKs, and more.",
    type: "website",
  },
};

const APP_DATA_TYPES = [
  { category: "Device Information", items: ["Device model & manufacturer", "Operating system version", "Unique device identifiers (IDFA, GAID)", "Screen resolution & language settings", "Time zone & locale"] },
  { category: "Location Data", items: ["GPS coordinates (precise location)", "IP-based approximate location", "Wi-Fi & Bluetooth proximity data", "Location history & geofencing events"] },
  { category: "Usage & Analytics", items: ["App open/close events & session duration", "Feature usage & navigation paths", "Crash logs & error reports", "In-app search queries", "Performance metrics"] },
  { category: "Personal Information", items: ["Name, email, phone number", "Profile photo & bio", "Date of birth & gender", "Payment information", "Social media account connections"] },
  { category: "Device Permissions", items: ["Camera & microphone access", "Photo library & file storage", "Contacts & calendar", "Push notification tokens", "Health & fitness data (HealthKit, Google Fit)"] },
  { category: "Third-Party SDK Data", items: ["Analytics events (Firebase, Mixpanel, Amplitude)", "Ad identifiers & attribution (AdMob, Meta)", "Crash reports (Crashlytics, Sentry, Bugsnag)", "Payment processing (Stripe, RevenueCat)", "Social login tokens (Google, Apple, Facebook)"] },
];

const CHECKLIST = [
  "What personal data your app collects",
  "Why each type of data is collected (purpose)",
  "Which device permissions your app requests and why",
  "All third-party SDKs and services used",
  "How data is stored and for how long",
  "Whether data is shared with advertisers or partners",
  "User rights (access, deletion, opt-out)",
  "GDPR legal basis for processing (EU users)",
  "CCPA rights disclosure (California users)",
  "Children's privacy statement (COPPA if applicable)",
  "How to contact you about privacy concerns",
  "How users will be notified of policy changes",
  "In-app data deletion process",
  "Apple App Tracking Transparency disclosure",
];

const FAQ_ITEMS = [
  {
    q: "Is a privacy policy required for mobile apps?",
    a: "Yes. Both Apple's App Store and Google Play Store require every app that collects any user data to have a privacy policy. Apple will reject your app during review if it's missing. Google Play requires a privacy policy link in your store listing and in your app's settings menu."
  },
  {
    q: "What's different about a mobile app privacy policy vs a website?",
    a: "Mobile apps typically collect more sensitive data than websites — device identifiers, precise GPS location, camera/microphone access, contacts, and health data. Your policy must disclose each device permission you request and explain why. You also need to list all third-party SDKs (analytics, ads, crash reporting) that process data on your behalf."
  },
  {
    q: "Does my app need to comply with GDPR?",
    a: "If anyone in the EU can download your app (which is true for most apps on public stores), then yes. GDPR requires you to have a legal basis for processing data, honor data deletion requests, and provide data portability. PolicyForge Pro generates policies with full GDPR compliance sections."
  },
  {
    q: "What about CCPA for California users?",
    a: "If your app is available in California and your business meets certain thresholds (revenue over $25M, data from 100K+ consumers, or 50%+ revenue from selling data), you must comply with CCPA. Even if you don't meet thresholds, including CCPA provisions demonstrates good faith compliance."
  },
  {
    q: "Do I need a separate privacy policy for iOS and Android?",
    a: "No. One privacy policy can cover both platforms. However, make sure it addresses platform-specific features — for example, Apple's App Tracking Transparency (ATT) framework, or Android's runtime permissions model."
  },
  {
    q: "Where should I display my privacy policy in my app?",
    a: "Best practices: (1) Link in your app store listing, (2) In your app's Settings or About screen, (3) During onboarding/signup flow, (4) Before requesting sensitive permissions, (5) In your app's footer or menu. Apple specifically checks for accessibility during app review."
  },
  {
    q: "What happens if my app collects children's data?",
    a: "If your app is directed at children under 13 (or under 16 in the EU), you must comply with COPPA (US) and GDPR Article 8 (EU). This means obtaining verifiable parental consent, limiting data collection, and never using behavioral advertising for children. Apple's Kids category has additional requirements."
  },
  {
    q: "How often should I update my app's privacy policy?",
    a: "Update your policy whenever you: add new third-party SDKs, request new device permissions, change how you use data, add new features that collect data, or when privacy laws change. Apple and Google may require re-review if your data practices change significantly."
  },
];

export default function PrivacyPolicyForMobileApp() {
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
            App Store & Play Store Compliant
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Privacy Policy for Mobile Apps
        </h1>
        <p className="text-xl text-gray-400 mb-8">
          Every iOS and Android app needs a privacy policy. Generate one that satisfies Apple, Google, GDPR, and CCPA requirements — in under 2 minutes.
        </p>

        <div className="flex flex-wrap gap-3 mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg text-lg hover:opacity-90 transition-opacity"
          >
            Generate Your App Privacy Policy
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
          {/* Why required */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Why Your Mobile App Needs a Privacy Policy</h2>
            <p className="mb-4">
              Both Apple and Google require every app published on their stores to have a privacy policy. This is not optional — apps without a privacy policy will be rejected during review or removed from the store.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                  <span className="text-xl">🍎</span> Apple App Store
                </h3>
                <p className="text-sm text-gray-400">
                  Apple&apos;s App Store Review Guidelines (Section 5.1.1) mandate a clearly accessible privacy policy for any app that collects user or device data. During App Review, Apple checks that your policy is linked in both your App Store listing and within the app itself. Apps that fail this check are rejected.
                </p>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                  <span className="text-xl">🤖</span> Google Play Store
                </h3>
                <p className="text-sm text-gray-400">
                  Google Play&apos;s Developer Program Policies require a privacy policy link in your store listing and within your app. Since 2022, Google also requires a Data Safety section describing exactly what data your app collects, shares, and whether users can request deletion.
                </p>
              </div>
            </div>
            <p>
              Beyond store requirements, major privacy laws — including GDPR (EU), CCPA (California), LGPD (Brazil), and PIPEDA (Canada) — all require apps that process personal data to maintain a transparent privacy policy. Non-compliance can result in fines up to €20 million under GDPR or $7,500 per violation under CCPA.
            </p>
          </section>

          {/* What data apps collect */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">What Data Do Mobile Apps Collect?</h2>
            <p className="mb-6">
              Mobile apps typically collect far more data than websites. Your privacy policy must disclose every category of data your app accesses. Here&apos;s a comprehensive breakdown of what your policy should cover:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {APP_DATA_TYPES.map((category) => (
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

          {/* Third-party SDKs */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Third-Party SDKs: The Hidden Data Collectors</h2>
            <p className="mb-4">
              Most mobile apps include third-party SDKs for analytics, advertising, crash reporting, and payments. Each SDK collects data on your behalf, and you are legally responsible for disclosing this in your privacy policy.
            </p>
            <div className="p-4 bg-yellow-500/5 border border-yellow-500/20 rounded-lg mb-4">
              <p className="text-sm text-yellow-300">
                <strong>Important:</strong> Apple&apos;s App Tracking Transparency (ATT) framework requires you to show a permission prompt before accessing the IDFA for tracking. Your privacy policy must explain what happens if users opt in or opt out of tracking.
              </p>
            </div>
            <p>
              Common SDKs to disclose include: Firebase Analytics, Google AdMob, Meta (Facebook) SDK, Crashlytics, Sentry, Mixpanel, Amplitude, Stripe, RevenueCat, OneSignal, Appsflyer, Adjust, and Branch. For each SDK, your policy should state what data it collects, why, and whether data is shared with the SDK provider.
            </p>
          </section>

          {/* App Tracking Transparency */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Apple App Tracking Transparency (ATT)</h2>
            <p className="mb-4">
              Since iOS 14.5, Apple requires apps to request user permission before tracking their activity across other companies&apos; apps and websites. This is enforced through the ATT framework, which shows users a system prompt asking if they consent to tracking.
            </p>
            <p className="mb-4">
              Your privacy policy should address ATT by explaining: what tracking your app performs, what data is collected if the user opts in, what limited data is collected if they opt out, and how their choice affects their experience (for example, less personalized ads).
            </p>
            <p>
              Additionally, Apple&apos;s nutrition labels in the App Store require you to declare all data types your app collects, whether each is used for tracking, and whether each is linked to the user&apos;s identity. Your privacy policy should be consistent with these declarations.
            </p>
          </section>

          {/* Compliance checklist */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Mobile App Privacy Policy Checklist</h2>
            <p className="mb-4">
              Use this checklist to ensure your mobile app&apos;s privacy policy covers everything required by app stores and privacy regulations:
            </p>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-2">
                {CHECKLIST.map((item) => (
                  <label key={item} className="flex items-start gap-3 text-sm text-gray-300 cursor-pointer">
                    <span className="mt-0.5 w-4 h-4 rounded border border-gray-600 flex-shrink-0" />
                    {item}
                  </label>
                ))}
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              PolicyForge Pro generates policies that cover all 14 items on this checklist. <Link href="/" className="text-blue-400 hover:text-blue-300">Generate yours now →</Link>
            </p>
          </section>

          {/* GDPR for apps */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">GDPR Requirements for Mobile Apps</h2>
            <p className="mb-4">
              If your app is available to users in the European Union — which includes virtually any app on public stores — GDPR applies to you regardless of where your company is based. Key requirements include:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1 font-bold">1.</span>
                <span><strong className="text-white">Legal basis for processing</strong> — You must have a lawful reason to collect each type of data (consent, legitimate interest, contractual necessity, or legal obligation).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1 font-bold">2.</span>
                <span><strong className="text-white">Right to erasure</strong> — Users can request deletion of all their personal data. Your app must have a mechanism to process these requests.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1 font-bold">3.</span>
                <span><strong className="text-white">Data portability</strong> — Users can request their data in a machine-readable format.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1 font-bold">4.</span>
                <span><strong className="text-white">Data Protection Officer</strong> — Required if your app processes data at scale or handles sensitive categories.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1 font-bold">5.</span>
                <span><strong className="text-white">Cross-border transfers</strong> — If data leaves the EU, you must use approved mechanisms (Standard Contractual Clauses, adequacy decisions).</span>
              </li>
            </ul>
            <p className="text-sm text-gray-400">
              Need a GDPR-compliant policy specifically? See our <Link href="/gdpr-privacy-policy-generator" className="text-blue-400 hover:text-blue-300">GDPR Privacy Policy Generator</Link>.
            </p>
          </section>

          {/* Children's privacy */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Children&apos;s Privacy (COPPA)</h2>
            <p className="mb-4">
              If your app is directed at children under 13 (US) or under 16 (EU), additional regulations apply. COPPA (Children&apos;s Online Privacy Protection Act) requires:
            </p>
            <ul className="space-y-1 text-gray-300 mb-4">
              <li className="flex items-start gap-2"><span className="text-red-400">•</span>Verifiable parental consent before collecting any data from children</li>
              <li className="flex items-start gap-2"><span className="text-red-400">•</span>No behavioral advertising or cross-app tracking for children</li>
              <li className="flex items-start gap-2"><span className="text-red-400">•</span>Data collection must be limited to what&apos;s necessary for the app to function</li>
              <li className="flex items-start gap-2"><span className="text-red-400">•</span>Parents must be able to review and delete their child&apos;s data</li>
            </ul>
            <p>
              Apple&apos;s Kids category has additional restrictions: no third-party analytics or advertising SDKs are allowed, and all data collection must comply with COPPA regardless of the developer&apos;s location.
            </p>
          </section>

          {/* Where to display */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Where to Display Your App&apos;s Privacy Policy</h2>
            <p className="mb-4">
              Your privacy policy needs to be accessible in multiple places to satisfy both legal requirements and app store guidelines:
            </p>
            <div className="space-y-3">
              {[
                { where: "App Store / Play Store Listing", why: "Required by both stores. Add the URL in your app's metadata when submitting." },
                { where: "Within Your App (Settings/About)", why: "Both stores require in-app access. Add a 'Privacy Policy' link in your settings or menu." },
                { where: "During Signup / Onboarding", why: "Best practice for consent. Show a link before users create an account or agree to terms." },
                { where: "Before Sensitive Permissions", why: "Explain why you need camera, location, or contacts access before requesting the permission." },
                { where: "Your Website (if applicable)", why: "If your app has a companion website, the policy should be linked there too." },
              ].map((item) => (
                <div key={item.where} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
                  <span className="text-green-400 mt-0.5">✓</span>
                  <div>
                    <p className="font-medium text-white text-sm">{item.where}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{item.why}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="p-8 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-3">Generate Your Mobile App Privacy Policy</h2>
            <p className="text-gray-300 mb-2">
              PolicyForge generates privacy policies specifically designed for mobile apps. Cover device permissions, third-party SDKs, GDPR, CCPA, and app store requirements — all in under 2 minutes.
            </p>
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <div className="text-sm text-gray-400">
                <span className="text-green-400">✓</span> App Store compliant
              </div>
              <div className="text-sm text-gray-400">
                <span className="text-green-400">✓</span> Play Store compliant
              </div>
              <div className="text-sm text-gray-400">
                <span className="text-green-400">✓</span> GDPR & CCPA ready
              </div>
              <div className="text-sm text-gray-400">
                <span className="text-green-400">✓</span> COPPA provisions
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
              <span className="text-sm text-gray-500">Free tier available • Pro from $4.99</span>
            </div>
          </section>

          {/* Scan CTA */}
          <section className="p-6 bg-white/5 border border-white/10 rounded-xl text-center">
            <h2 className="text-xl font-bold text-white mb-2">Already Have a Privacy Policy?</h2>
            <p className="text-gray-400 text-sm mb-4">
              Scan your app&apos;s website to see how your current privacy policy scores across 10 compliance categories.
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
              <Link href="/privacy-policy-for-app-store" className="p-4 bg-white/5 border border-white/10 rounded-lg hover:border-blue-500/30 transition-colors group">
                <h3 className="font-semibold text-white text-sm group-hover:text-blue-400">Privacy Policy for App Store</h3>
                <p className="text-xs text-gray-500 mt-1">Apple-specific requirements and guidelines</p>
              </Link>
              <Link href="/gdpr-privacy-policy-generator" className="p-4 bg-white/5 border border-white/10 rounded-lg hover:border-blue-500/30 transition-colors group">
                <h3 className="font-semibold text-white text-sm group-hover:text-blue-400">GDPR Policy Generator</h3>
                <p className="text-xs text-gray-500 mt-1">Full EU compliance for your app</p>
              </Link>
              <Link href="/ccpa-privacy-policy-generator" className="p-4 bg-white/5 border border-white/10 rounded-lg hover:border-blue-500/30 transition-colors group">
                <h3 className="font-semibold text-white text-sm group-hover:text-blue-400">CCPA Policy Generator</h3>
                <p className="text-xs text-gray-500 mt-1">California compliance requirements</p>
              </Link>
            </div>
          </section>
          {/* AccessScore Cross-Link */}
          <section className="p-6 bg-orange-500/5 border border-orange-500/20 rounded-xl">
            <h3 className="text-lg font-bold text-white mb-2">Privacy Covered? Check Your App&apos;s Accessibility Next.</h3>
            <p className="text-sm text-gray-400 mb-3">
              Both Apple and Google require apps to meet accessibility standards. ADA and WCAG compliance is just as important as privacy. Scan your app&apos;s website or web views for accessibility issues with AccessScore.
            </p>
            <a
              href="https://accessscore.autonomous-claude.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 text-sm font-medium"
            >
              Check accessibility compliance &rarr;
            </a>
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
