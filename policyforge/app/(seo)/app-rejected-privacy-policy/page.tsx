import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "App Rejected for Missing Privacy Policy? Fix It in 2 Minutes | PolicyForge",
  description:
    "Your app was rejected by Apple App Store or Google Play for a missing privacy policy. Generate a compliant privacy policy in 2 minutes for $4.99 and resubmit today. Covers Guideline 5.1.1 and Data Safety requirements.",
  keywords:
    "app rejected privacy policy, app store rejection privacy policy, google play rejected privacy policy, app review rejected missing privacy policy, fix app store privacy policy rejection, apple guideline 5.1.1, google play data safety privacy policy, app store review rejected, resubmit app after rejection, privacy policy for app submission",
  openGraph: {
    title: "App Rejected? Fix Your Privacy Policy in 2 Minutes",
    description:
      "Generate a compliant privacy policy that passes Apple App Store and Google Play review. Fix rejection reason 5.1.1 instantly.",
    type: "website",
    url: "https://policyforge-one.vercel.app/app-rejected-privacy-policy",
    images: [
      {
        url: "https://policyforge-one.vercel.app/api/og?score=85&domain=Fix+App+Rejection",
        width: 1200,
        height: 630,
        alt: "Fix App Store Rejection - Generate Privacy Policy in 2 Minutes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "App Rejected? Fix Your Privacy Policy in 2 Minutes",
    description:
      "Generate a compliant privacy policy that passes Apple App Store and Google Play review instantly.",
    images: [
      "https://policyforge-one.vercel.app/api/og?score=85&domain=Fix+App+Rejection",
    ],
  },
  alternates: {
    canonical: "https://policyforge-one.vercel.app/app-rejected-privacy-policy",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why was my app rejected for a missing privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both Apple and Google require every app that collects, transmits, or shares user data to include a privacy policy. Apple enforces this under App Store Review Guideline 5.1.1 (Legal - Privacy - Data Collection and Storage). Google Play enforces it through the Data Safety section and Developer Program Policy. If your app accesses the internet, uses analytics, shows ads, requires login, or collects any user information, you need a privacy policy. Apps submitted without one are automatically flagged and rejected during review.",
      },
    },
    {
      "@type": "Question",
      name: "How do I fix an app rejection for a missing privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To fix this rejection: 1) Generate a privacy policy that covers your app's specific data practices using a generator like PolicyForge ($4.99). 2) Host the policy at a publicly accessible URL (your website, GitHub Pages, or a free hosting service). 3) Add the privacy policy URL to your App Store Connect metadata (under App Information > Privacy Policy URL) or Google Play Console (under Store Listing > Privacy Policy). 4) For Google Play, also complete the Data Safety form accurately. 5) Resubmit your app for review. Apple typically re-reviews within 24-48 hours, Google Play within a few hours to 7 days.",
      },
    },
    {
      "@type": "Question",
      name: "What is Apple Guideline 5.1.1 and how does it relate to privacy policies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Apple App Store Review Guideline 5.1.1 (Data Collection and Storage) requires that apps collecting user data must have a privacy policy. The guideline states: 'Apps that collect user or usage data must have a privacy policy and must secure user consent for the collection.' This applies to virtually every app since even basic analytics or crash reporting counts as data collection. Violating 5.1.1 results in app rejection during the review process. Your privacy policy must specifically disclose what data is collected, how it's used, whether it's shared with third parties, and how users can request data deletion.",
      },
    },
    {
      "@type": "Question",
      name: "Does Google Play require a privacy policy even for simple apps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Google Play requires a privacy policy for any app that accesses personal or sensitive user data. This includes apps that use the internet, access device storage, use location, show personalized ads, or integrate any third-party SDK (analytics, crash reporting, authentication). Since March 2022, Google also requires all developers to complete a Data Safety form describing their data practices. Apps without a valid privacy policy URL in the store listing face removal from Google Play, not just rejection of updates.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use a free privacy policy template to fix my app rejection?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "While free templates exist, they often cause repeat rejections because they use generic language that doesn't match your app's actual data practices. Apple and Google reviewers check whether your privacy policy accurately reflects what your app does. A template that mentions 'cookies' for a mobile app, or fails to disclose your specific SDKs (Firebase, AdMob, Facebook SDK), can trigger another rejection. PolicyForge generates a policy tailored to your specific app type, SDKs, and data practices for $4.99, ensuring it matches what reviewers expect to see.",
      },
    },
    {
      "@type": "Question",
      name: "Where should I host my app's privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your privacy policy must be hosted at a publicly accessible URL that doesn't require login to view. Common options include: 1) Your own website (e.g., yourapp.com/privacy). 2) GitHub Pages (free, reliable, easy to set up). 3) Google Sites (free). 4) A simple HTML page on any web host. The URL must not redirect, must not be behind a paywall or login, and must be accessible from any country. Both Apple and Google test the URL during review. Avoid hosting on Google Docs or Notion as these sometimes block automated access.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to get re-reviewed after fixing the privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "After adding your privacy policy and resubmitting: Apple App Store typically re-reviews within 24-48 hours, though it can take up to 5 days during busy periods. Google Play's review time varies from a few hours to 7 days, with most reviews completing within 1-3 days. To speed things up, make sure your privacy policy URL is working and accessible before resubmitting, your Data Safety form (Google) is completed accurately, and you've addressed all rejection feedback points, not just the privacy policy.",
      },
    },
    {
      "@type": "Question",
      name: "What specific information must my app privacy policy include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both Apple and Google require your privacy policy to include: 1) What personal data your app collects (names, emails, device IDs, location, etc.). 2) Why you collect each type of data (functionality, analytics, advertising). 3) How data is stored and protected. 4) Whether data is shared with third parties and who they are. 5) How users can access, modify, or delete their data. 6) Contact information for privacy inquiries. 7) How you handle children's data (required if your app is accessible to children under 13). Apple additionally requires disclosure of App Tracking Transparency usage and Privacy Nutrition Label accuracy. Google requires alignment between your policy and your Data Safety form declarations.",
      },
    },
    {
      "@type": "Question",
      name: "Will my app get rejected again if my privacy policy is incomplete?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Apple and Google reviewers compare your privacy policy against your app's actual behavior. Common reasons for repeat rejection include: your policy doesn't mention a specific SDK your app uses (e.g., Firebase Analytics, AdMob), your policy mentions data collection practices that don't match the Data Safety form (Google), your policy is a generic template that doesn't reflect your actual app, the privacy policy URL is broken or requires login to access, or your policy doesn't include required disclosures for specific data types (location, health data, children's data). Using a generator like PolicyForge that asks about your specific data practices helps avoid these mismatches.",
      },
    },
  ],
};

const REJECTION_REASONS = [
  {
    platform: "Apple App Store",
    guideline: "Guideline 5.1.1 - Legal - Privacy - Data Collection and Storage",
    message:
      "Your app collects user or usage data but does not include a privacy policy URL. Apps that collect user data must have a privacy policy and secure user consent for the collection.",
    details: [
      "No privacy policy URL in App Store Connect",
      "Privacy policy doesn't cover all data types collected",
      "Privacy Nutrition Labels don't match actual data practices",
      "No data deletion mechanism described",
      "Missing App Tracking Transparency disclosure",
    ],
  },
  {
    platform: "Google Play",
    guideline: "Developer Program Policy - User Data / Data Safety Section",
    message:
      "Your app does not have a valid privacy policy. All apps that collect personal or sensitive user data must post a privacy policy that comprehensively discloses how your app collects, uses, and shares user data.",
    details: [
      "Missing privacy policy URL in Store Listing",
      "Data Safety form incomplete or inaccurate",
      "Policy doesn't match declared data practices",
      "No disclosure of third-party SDK data sharing",
      "Missing contact information for privacy inquiries",
    ],
  },
];

const COMPARISON_DATA = [
  {
    method: "PolicyForge",
    time: "2 minutes",
    cost: "$4.99 one-time",
    accuracy: "Tailored to your app",
    risk: "Low — covers major regulations",
    highlight: true,
  },
  {
    method: "Free online template",
    time: "30-60 minutes",
    cost: "Free",
    accuracy: "Generic, often causes repeat rejections",
    risk: "Medium — may not match your app's data practices",
    highlight: false,
  },
  {
    method: "Write it yourself",
    time: "3-8 hours",
    cost: "Free (your time)",
    accuracy: "Depends on your legal knowledge",
    risk: "High — easy to miss required disclosures",
    highlight: false,
  },
  {
    method: "Hire a privacy lawyer",
    time: "1-2 weeks",
    cost: "$500 - $3,000",
    accuracy: "Excellent",
    risk: "Very low",
    highlight: false,
  },
  {
    method: "Subscription generator (Termly, etc.)",
    time: "15-30 minutes",
    cost: "$10-20/month ($120-240/year)",
    accuracy: "Good",
    risk: "Low — but ongoing cost for a one-time need",
    highlight: false,
  },
];

const FIX_STEPS = [
  {
    step: 1,
    title: "Generate Your Privacy Policy",
    description:
      "Use PolicyForge to create a privacy policy tailored to your app. Answer a few questions about what data your app collects, which SDKs you use (Firebase, AdMob, Facebook, etc.), and whether your app targets children. PolicyForge generates a legally compliant policy in under 2 minutes.",
    cta: "Generate Privacy Policy Now",
    ctaLink: "https://policyforge-one.vercel.app/",
    time: "2 minutes",
  },
  {
    step: 2,
    title: "Host Your Privacy Policy",
    description:
      "Your policy needs a public URL. Options: add it as a page on your website (e.g., yourapp.com/privacy-policy), host it for free on GitHub Pages, or use any web hosting. The URL must be accessible without login from any country.",
    time: "5-10 minutes",
    hosting: [
      {
        name: "Your website",
        how: "Add a /privacy-policy page to your existing site",
      },
      {
        name: "GitHub Pages",
        how: "Create a repo, add privacy.html, enable GitHub Pages in settings",
      },
      {
        name: "Firebase Hosting",
        how: "If you already use Firebase, add a privacy.html to your public folder",
      },
      {
        name: "Vercel / Netlify",
        how: "Deploy a simple static page with your policy content",
      },
    ],
  },
  {
    step: 3,
    title: "Add URL to Your App Listing",
    description:
      "For Apple: Go to App Store Connect > Your App > App Information > Privacy Policy URL. For Google: Go to Google Play Console > Your App > Store Listing > Privacy Policy URL. Also complete the Data Safety form for Google Play.",
    time: "2-5 minutes",
    platforms: [
      {
        name: "Apple App Store Connect",
        path: "App Store Connect > Your App > App Information > Privacy Policy URL",
      },
      {
        name: "Google Play Console",
        path: "Google Play Console > Your App > Store Listing > Privacy Policy",
      },
      {
        name: "Google Data Safety",
        path: "Google Play Console > Your App > App Content > Data Safety > Start",
      },
    ],
  },
  {
    step: 4,
    title: "Resubmit Your App",
    description:
      "Submit your app for review again. Apple re-reviews typically take 24-48 hours. Google Play reviews take a few hours to 7 days. Make sure your privacy policy URL is live and accessible before clicking Submit.",
    time: "24-48 hours (Apple) / 1-7 days (Google)",
  },
];

const COMMON_SDKS = [
  { name: "Firebase Analytics", data: "Device info, app events, user properties" },
  { name: "Google AdMob", data: "Advertising ID, device info, ad interaction data" },
  { name: "Facebook SDK", data: "Device info, app events, user demographics" },
  { name: "Crashlytics", data: "Crash logs, device state, stack traces" },
  { name: "Google Maps SDK", data: "Location data, map interaction events" },
  { name: "RevenueCat", data: "Purchase history, subscription status" },
  { name: "OneSignal", data: "Push notification tokens, device info" },
  { name: "Amplitude / Mixpanel", data: "User events, session data, device properties" },
  { name: "Sentry", data: "Error logs, device info, user context" },
  { name: "Stripe SDK", data: "Payment info, billing address" },
];

export default function AppRejectedPrivacyPolicy() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-gray-950 text-white">
        {/* Urgency Banner */}
        <div className="bg-amber-600 text-black py-3 px-4 text-center font-bold text-sm md:text-base">
          <span className="inline-block animate-pulse mr-2">&#9888;</span>
          Your app was rejected? Every day your app isn&apos;t live, you&apos;re
          losing users and revenue.
          <Link
            href="https://policyforge-one.vercel.app/"
            className="underline ml-2 font-extrabold hover:text-amber-900"
          >
            Fix it now &rarr;
          </Link>
        </div>

        {/* Hero Section */}
        <section className="max-w-5xl mx-auto px-4 pt-16 pb-12">
          <div className="text-center">
            <div className="inline-block bg-red-900/40 border border-red-500/50 text-red-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              App Store / Google Play Rejection Fix
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              App Rejected for{" "}
              <span className="text-amber-400">Missing Privacy Policy</span>?
              <br />
              Fix It in 2 Minutes.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Thousands of apps get rejected every day for violating{" "}
              <strong className="text-white">Apple Guideline 5.1.1</strong> or{" "}
              <strong className="text-white">
                Google Play&apos;s Data Safety requirements
              </strong>
              . Generate a compliant privacy policy tailored to your app and
              resubmit today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="https://policyforge-one.vercel.app/"
                className="bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-lg px-8 py-4 rounded-xl shadow-lg shadow-amber-500/25 transition-all hover:shadow-amber-400/40 hover:scale-105"
              >
                Generate Privacy Policy Now &mdash; $4.99
              </Link>
              <Link
                href="https://policyforge-one.vercel.app/check"
                className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white font-semibold text-lg px-8 py-4 rounded-xl transition-all"
              >
                Check Your Current Policy Free
              </Link>
            </div>
            <p className="text-gray-500 text-sm mt-4">
              Over 2,000 privacy policies generated. One-time payment, no
              subscription.
            </p>
          </div>
        </section>

        {/* The Rejection Email Section */}
        <section className="max-w-5xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-center mb-4">
            Recognize This Rejection Message?
          </h2>
          <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
            If you received one of these messages, you need to add a privacy
            policy before your app can go live.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {REJECTION_REASONS.map((r) => (
              <div
                key={r.platform}
                className="bg-gray-900/50 border border-red-500/30 rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl ${
                      r.platform.includes("Apple")
                        ? "bg-gray-800 text-white"
                        : "bg-green-900/50 text-green-400"
                    }`}
                  >
                    {r.platform.includes("Apple") ? "\uF8FF" : "\u25B6"}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white">
                      {r.platform}
                    </h3>
                    <p className="text-xs text-red-400 font-mono">
                      {r.guideline}
                    </p>
                  </div>
                </div>
                <div className="bg-red-950/40 border border-red-900/50 rounded-lg p-4 mb-4">
                  <p className="text-sm text-red-200 italic">
                    &ldquo;{r.message}&rdquo;
                  </p>
                </div>
                <h4 className="text-sm font-semibold text-amber-400 mb-2">
                  Common Rejection Triggers:
                </h4>
                <ul className="space-y-1.5">
                  {r.details.map((d) => (
                    <li
                      key={d}
                      className="text-sm text-gray-300 flex items-start gap-2"
                    >
                      <span className="text-red-400 mt-0.5 shrink-0">
                        &#10005;
                      </span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Stats / Social Proof Bar */}
        <section className="border-y border-gray-800 bg-gray-900/30 py-8">
          <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-extrabold text-amber-400">
                2,000+
              </div>
              <div className="text-sm text-gray-400">Policies Generated</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-green-400">
                &lt; 2 min
              </div>
              <div className="text-sm text-gray-400">Average Generation Time</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-blue-400">
                $4.99
              </div>
              <div className="text-sm text-gray-400">One-Time, No Subscription</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-purple-400">
                100%
              </div>
              <div className="text-sm text-gray-400">App Store Compliant</div>
            </div>
          </div>
        </section>

        {/* Step-by-Step Fix Guide */}
        <section className="max-w-5xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-4">
            Fix Your App Rejection in 4 Steps
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Most developers fix this and get approved within 24-48 hours. Here
            is exactly what to do.
          </p>

          <div className="space-y-8">
            {FIX_STEPS.map((s) => (
              <div
                key={s.step}
                className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 md:p-8"
              >
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="bg-amber-500 text-black font-extrabold text-xl w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                    {s.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                      <h3 className="text-xl font-bold text-white">
                        {s.title}
                      </h3>
                      <span className="text-xs bg-gray-800 text-amber-400 px-3 py-1 rounded-full font-medium w-fit">
                        {s.time}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-4">{s.description}</p>

                    {s.cta && (
                      <Link
                        href={s.ctaLink!}
                        className="inline-block bg-amber-500 hover:bg-amber-400 text-black font-bold px-6 py-3 rounded-lg transition-all hover:scale-105"
                      >
                        {s.cta} &rarr;
                      </Link>
                    )}

                    {s.hosting && (
                      <div className="grid sm:grid-cols-2 gap-3 mt-2">
                        {s.hosting.map((h) => (
                          <div
                            key={h.name}
                            className="bg-gray-800/50 border border-gray-700 rounded-lg p-3"
                          >
                            <div className="font-semibold text-sm text-white mb-1">
                              {h.name}
                            </div>
                            <div className="text-xs text-gray-400">{h.how}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {s.platforms && (
                      <div className="space-y-3 mt-2">
                        {s.platforms.map((p) => (
                          <div
                            key={p.name}
                            className="bg-gray-800/50 border border-gray-700 rounded-lg p-3"
                          >
                            <div className="font-semibold text-sm text-white mb-1">
                              {p.name}
                            </div>
                            <code className="text-xs text-amber-400 bg-gray-900 px-2 py-1 rounded">
                              {p.path}
                            </code>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-gray-400 mb-4">
              Total time from rejection to resubmission:{" "}
              <strong className="text-white">Under 15 minutes</strong>
            </p>
            <Link
              href="https://policyforge-one.vercel.app/"
              className="inline-block bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-lg px-8 py-4 rounded-xl shadow-lg shadow-amber-500/25 transition-all hover:shadow-amber-400/40 hover:scale-105"
            >
              Start Step 1: Generate Your Policy &rarr;
            </Link>
          </div>
        </section>

        {/* Why Your App Was Rejected — Deep Dive */}
        <section className="bg-gray-900/30 border-y border-gray-800 py-16">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">
              Why Apps Get Rejected for Privacy Policies
            </h2>
            <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
              Understanding the exact requirements helps you fix the rejection
              permanently, not just patch it for one review cycle.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Apple Section */}
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="bg-gray-800 text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm">
                    &#63743;
                  </span>
                  Apple App Store Requirements
                </h3>
                <div className="space-y-4">
                  <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5">
                    <h4 className="font-semibold text-amber-400 mb-2">
                      Guideline 5.1.1 — Data Collection and Storage
                    </h4>
                    <p className="text-sm text-gray-300 mb-3">
                      Apple requires apps that collect user or usage data to have
                      a privacy policy. This includes apps that use any form of
                      analytics, tracking, authentication, or data storage. Even
                      if your app only collects anonymous crash data, you still
                      need a policy.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 mt-0.5">&#8226;</span>
                        Privacy policy URL must be entered in App Store Connect
                        under App Information
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 mt-0.5">&#8226;</span>
                        Policy must be accessible without login from any region
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 mt-0.5">&#8226;</span>
                        Must accurately describe all data collection, including
                        third-party SDKs
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 mt-0.5">&#8226;</span>
                        Must include a way for users to request data deletion
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5">
                    <h4 className="font-semibold text-amber-400 mb-2">
                      Privacy Nutrition Labels
                    </h4>
                    <p className="text-sm text-gray-300">
                      Since December 2020, Apple requires developers to declare
                      their data practices through Privacy Nutrition Labels in
                      App Store Connect. Your privacy policy must align with
                      these declarations. If your policy says you don&apos;t
                      collect location data but your Privacy Label declares it,
                      the mismatch will trigger a rejection.
                    </p>
                  </div>
                  <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5">
                    <h4 className="font-semibold text-amber-400 mb-2">
                      App Tracking Transparency (ATT)
                    </h4>
                    <p className="text-sm text-gray-300">
                      If your app uses the IDFA or tracks users across apps and
                      websites, you must implement the ATT framework and
                      disclose this in your privacy policy. Failing to mention
                      tracking when your app requests ATT permission is a
                      rejection trigger.
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Section */}
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="bg-green-900/50 text-green-400 w-8 h-8 rounded-lg flex items-center justify-center text-sm">
                    &#9654;
                  </span>
                  Google Play Requirements
                </h3>
                <div className="space-y-4">
                  <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5">
                    <h4 className="font-semibold text-amber-400 mb-2">
                      Data Safety Section
                    </h4>
                    <p className="text-sm text-gray-300 mb-3">
                      Google Play requires all apps to complete a Data Safety
                      form and provide a privacy policy URL. The Data Safety
                      section appears on your app&apos;s store listing and tells
                      users what data you collect, whether it&apos;s shared, and
                      whether it&apos;s encrypted. Your privacy policy must
                      match these declarations exactly.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 mt-0.5">&#8226;</span>
                        Privacy policy URL required in Store Listing section
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 mt-0.5">&#8226;</span>
                        Data Safety form must be completed with accurate data
                        types
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 mt-0.5">&#8226;</span>
                        Must disclose all third-party libraries that access user
                        data
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 mt-0.5">&#8226;</span>
                        Non-compliant apps face removal, not just update
                        rejection
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5">
                    <h4 className="font-semibold text-amber-400 mb-2">
                      Families Policy (Children&apos;s Apps)
                    </h4>
                    <p className="text-sm text-gray-300">
                      If your app targets children or is in the Family category,
                      Google imposes stricter requirements. Your privacy policy
                      must comply with COPPA (Children&apos;s Online Privacy
                      Protection Act), disclose any ad SDKs used (which must be
                      Google-certified), and explain what data is collected from
                      children specifically.
                    </p>
                  </div>
                  <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5">
                    <h4 className="font-semibold text-amber-400 mb-2">
                      Account Deletion Requirement
                    </h4>
                    <p className="text-sm text-gray-300">
                      Since December 2023, Google requires apps that offer
                      account creation to also provide an in-app account
                      deletion option and a web-based deletion path. Your
                      privacy policy must explain how users can delete their
                      account and what data is deleted vs. retained.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Third-Party SDKs Section */}
        <section className="max-w-5xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-4">
            Does Your Policy Cover These SDKs?
          </h2>
          <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
            A common reason for repeat rejection: your privacy policy
            doesn&apos;t mention the third-party SDKs your app uses. Each SDK
            collects data that must be disclosed.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {COMMON_SDKS.map((sdk) => (
              <div
                key={sdk.name}
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-4"
              >
                <div className="font-semibold text-white text-sm mb-1">
                  {sdk.name}
                </div>
                <div className="text-xs text-gray-400">
                  Collects: {sdk.data}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-amber-900/20 border border-amber-700/40 rounded-2xl p-6 mt-8">
            <div className="flex items-start gap-3">
              <span className="text-amber-400 text-2xl shrink-0">
                &#9888;
              </span>
              <div>
                <h3 className="font-bold text-amber-300 mb-2">
                  PolicyForge Asks About Your SDKs
                </h3>
                <p className="text-sm text-gray-300">
                  Unlike generic templates, PolicyForge asks which SDKs and
                  services your app uses, then generates specific disclosure
                  language for each one. This prevents the most common cause of
                  repeat rejections: a privacy policy that doesn&apos;t match
                  your app&apos;s actual data practices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="bg-gray-900/30 border-y border-gray-800 py-16">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">
              Your Options Compared: Fix the Rejection
            </h2>
            <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
              You need a privacy policy to get your app approved. Here is how
              the options stack up when time matters.
            </p>

            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">
                      Method
                    </th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">
                      Time
                    </th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">
                      Cost
                    </th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">
                      Accuracy
                    </th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">
                      Risk of Repeat Rejection
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_DATA.map((row) => (
                    <tr
                      key={row.method}
                      className={`border-b border-gray-800 ${
                        row.highlight
                          ? "bg-amber-500/10 border-l-4 border-l-amber-500"
                          : ""
                      }`}
                    >
                      <td className="py-4 px-4 font-semibold text-white">
                        {row.method}
                        {row.highlight && (
                          <span className="ml-2 text-xs bg-amber-500 text-black px-2 py-0.5 rounded-full font-bold">
                            FASTEST
                          </span>
                        )}
                      </td>
                      <td className="py-4 px-4 text-gray-300">{row.time}</td>
                      <td className="py-4 px-4 text-gray-300">
                        {row.highlight ? (
                          <span className="text-green-400 font-bold">
                            {row.cost}
                          </span>
                        ) : (
                          row.cost
                        )}
                      </td>
                      <td className="py-4 px-4 text-gray-300">
                        {row.accuracy}
                      </td>
                      <td className="py-4 px-4 text-gray-300">{row.risk}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-4">
              {COMPARISON_DATA.map((row) => (
                <div
                  key={row.method}
                  className={`rounded-xl p-5 ${
                    row.highlight
                      ? "bg-amber-500/10 border-2 border-amber-500"
                      : "bg-gray-900/50 border border-gray-800"
                  }`}
                >
                  <div className="font-bold text-white mb-3 flex items-center gap-2">
                    {row.method}
                    {row.highlight && (
                      <span className="text-xs bg-amber-500 text-black px-2 py-0.5 rounded-full font-bold">
                        FASTEST
                      </span>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-gray-500">Time:</span>{" "}
                      <span className="text-gray-300">{row.time}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Cost:</span>{" "}
                      <span
                        className={
                          row.highlight
                            ? "text-green-400 font-bold"
                            : "text-gray-300"
                        }
                      >
                        {row.cost}
                      </span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-gray-500">Accuracy:</span>{" "}
                      <span className="text-gray-300">{row.accuracy}</span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-gray-500">Risk:</span>{" "}
                      <span className="text-gray-300">{row.risk}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="https://policyforge-one.vercel.app/"
                className="inline-block bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-lg px-8 py-4 rounded-xl shadow-lg shadow-amber-500/25 transition-all hover:shadow-amber-400/40 hover:scale-105"
              >
                Generate Privacy Policy Now &mdash; $4.99
              </Link>
              <p className="text-gray-500 text-sm mt-3">
                One-time payment. No account required. Ready in 2 minutes.
              </p>
            </div>
          </div>
        </section>

        {/* Real Cost of Waiting Section */}
        <section className="max-w-5xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-10">
            The Real Cost of{" "}
            <span className="text-red-400">Staying Rejected</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-900/50 border border-red-500/30 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-3">&#128200;</div>
              <h3 className="font-bold text-xl mb-2 text-white">
                Lost Revenue
              </h3>
              <p className="text-gray-400 text-sm">
                Every day your app isn&apos;t live, you&apos;re missing
                downloads, ad revenue, in-app purchases, and subscription
                signups. For apps earning even $10/day, a 2-week rejection delay
                costs $140.
              </p>
            </div>
            <div className="bg-gray-900/50 border border-red-500/30 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-3">&#128101;</div>
              <h3 className="font-bold text-xl mb-2 text-white">
                Lost Users
              </h3>
              <p className="text-gray-400 text-sm">
                Users searching for your app&apos;s functionality will find
                competitors instead. First-mover advantage in app stores is
                real. Every day delayed is market share you may never recover.
              </p>
            </div>
            <div className="bg-gray-900/50 border border-red-500/30 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-3">&#9889;</div>
              <h3 className="font-bold text-xl mb-2 text-white">
                Review Queue Risk
              </h3>
              <p className="text-gray-400 text-sm">
                Each resubmission goes back in the review queue. If your fix is
                incomplete and triggers another rejection, you add another 1-7
                days of delay. Get it right the first time.
              </p>
            </div>
          </div>
        </section>

        {/* Platform-Specific Guides */}
        <section className="bg-gray-900/30 border-y border-gray-800 py-16">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">
              Building With a Specific Framework?
            </h2>
            <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
              Your tech stack affects what data your app collects. Make sure
              your privacy policy matches your framework&apos;s data practices.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link
                href="/privacy-policy-for-mobile-app"
                className="bg-gray-900/50 border border-gray-800 hover:border-amber-500/50 rounded-xl p-5 transition-all group"
              >
                <h3 className="font-bold text-white group-hover:text-amber-400 mb-2">
                  Mobile App Privacy Policy
                </h3>
                <p className="text-sm text-gray-400">
                  General guide for iOS and Android app privacy policies.
                  Covers permissions, SDKs, and store requirements.
                </p>
                <span className="text-amber-500 text-sm mt-2 inline-block">
                  Read guide &rarr;
                </span>
              </Link>
              <Link
                href="/privacy-policy-for-app-store"
                className="bg-gray-900/50 border border-gray-800 hover:border-amber-500/50 rounded-xl p-5 transition-all group"
              >
                <h3 className="font-bold text-white group-hover:text-amber-400 mb-2">
                  Apple App Store Policy
                </h3>
                <p className="text-sm text-gray-400">
                  Guideline 5.1.1 compliance, Privacy Nutrition Labels, ATT,
                  and Kids category requirements.
                </p>
                <span className="text-amber-500 text-sm mt-2 inline-block">
                  Read guide &rarr;
                </span>
              </Link>
              <Link
                href="/privacy-policy-for-flutter-app"
                className="bg-gray-900/50 border border-gray-800 hover:border-amber-500/50 rounded-xl p-5 transition-all group"
              >
                <h3 className="font-bold text-white group-hover:text-amber-400 mb-2">
                  Flutter App Privacy Policy
                </h3>
                <p className="text-sm text-gray-400">
                  Flutter-specific data handling, platform channels, and plugin
                  data disclosure requirements.
                </p>
                <span className="text-amber-500 text-sm mt-2 inline-block">
                  Read guide &rarr;
                </span>
              </Link>
              <Link
                href="/privacy-policy-for-react-native-app"
                className="bg-gray-900/50 border border-gray-800 hover:border-amber-500/50 rounded-xl p-5 transition-all group"
              >
                <h3 className="font-bold text-white group-hover:text-amber-400 mb-2">
                  React Native Privacy Policy
                </h3>
                <p className="text-sm text-gray-400">
                  React Native bridge modules, Expo data handling, and
                  native module privacy disclosures.
                </p>
                <span className="text-amber-500 text-sm mt-2 inline-block">
                  Read guide &rarr;
                </span>
              </Link>
              <Link
                href="/privacy-policy-for-game-app"
                className="bg-gray-900/50 border border-gray-800 hover:border-amber-500/50 rounded-xl p-5 transition-all group"
              >
                <h3 className="font-bold text-white group-hover:text-amber-400 mb-2">
                  Game App Privacy Policy
                </h3>
                <p className="text-sm text-gray-400">
                  Ad SDKs, in-app purchases, leaderboards, analytics, and
                  children&apos;s privacy for game apps.
                </p>
                <span className="text-amber-500 text-sm mt-2 inline-block">
                  Read guide &rarr;
                </span>
              </Link>
              <Link
                href="https://policyforge-one.vercel.app/"
                className="bg-amber-500/10 border-2 border-amber-500/50 hover:border-amber-400 rounded-xl p-5 transition-all group"
              >
                <h3 className="font-bold text-amber-400 group-hover:text-amber-300 mb-2">
                  Generate Your Policy Now
                </h3>
                <p className="text-sm text-gray-300">
                  Skip the research. Answer a few questions and get a
                  compliant privacy policy in 2 minutes.
                </p>
                <span className="text-amber-400 text-sm mt-2 inline-block font-bold">
                  $4.99 one-time &rarr;
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Developer Testimonials / Use Cases */}
        <section className="max-w-5xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-10">
            Common Scenarios We Help With
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
              <div className="text-amber-400 text-sm font-semibold mb-2">
                Indie Developer
              </div>
              <h3 className="font-bold text-lg mb-3 text-white">
                &ldquo;First app submission, rejected immediately&rdquo;
              </h3>
              <p className="text-gray-400 text-sm">
                You built your first app, submitted it to the App Store, and got
                rejected for Guideline 5.1.1. You didn&apos;t realize you
                needed a privacy policy because your app &ldquo;barely collects
                any data.&rdquo; But your app uses Firebase Analytics and
                Crashlytics, which means it collects device info, usage events,
                and crash data. PolicyForge generates a policy that covers
                exactly these SDKs.
              </p>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
              <div className="text-amber-400 text-sm font-semibold mb-2">
                Startup Team
              </div>
              <h3 className="font-bold text-lg mb-3 text-white">
                &ldquo;Update rejected, existing policy was outdated&rdquo;
              </h3>
              <p className="text-gray-400 text-sm">
                Your app has been live for a year, but a new update was
                rejected because you added a social login feature and your
                privacy policy didn&apos;t mention it. Apple and Google now
                actively compare your policy against your app&apos;s actual
                behavior. PolicyForge lets you regenerate an updated policy
                that includes all your current features and SDKs in minutes.
              </p>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
              <div className="text-amber-400 text-sm font-semibold mb-2">
                Game Developer
              </div>
              <h3 className="font-bold text-lg mb-3 text-white">
                &ldquo;Kids game rejected for COPPA compliance&rdquo;
              </h3>
              <p className="text-gray-400 text-sm">
                Your game targets children under 13, and both Apple and Google
                have strict requirements for children&apos;s apps. Your privacy
                policy needs COPPA compliance language, parental consent
                mechanisms, and disclosure of which ad networks are
                Google-certified for children. PolicyForge includes
                children&apos;s privacy sections when you indicate your app
                targets minors.
              </p>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
              <div className="text-amber-400 text-sm font-semibold mb-2">
                Freelance Developer
              </div>
              <h3 className="font-bold text-lg mb-3 text-white">
                &ldquo;Client app rejected, need a fast fix&rdquo;
              </h3>
              <p className="text-gray-400 text-sm">
                You built an app for a client and they&apos;re upset it was
                rejected. You need a privacy policy that covers their
                specific data practices, and you need it now, not in 2 weeks
                when a lawyer gets back to you. PolicyForge lets you generate
                a tailored policy in minutes so you can resubmit the same day
                and keep your client relationship intact.
              </p>
            </div>
          </div>
        </section>

        {/* Checklist: Before You Resubmit */}
        <section className="bg-gray-900/30 border-y border-gray-800 py-16">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">
              Pre-Resubmission Checklist
            </h2>
            <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
              Before you hit &ldquo;Submit for Review&rdquo; again, make sure
              you&apos;ve checked every item. Missing even one can cause another
              rejection.
            </p>

            <div className="max-w-2xl mx-auto bg-gray-900/50 border border-gray-800 rounded-2xl p-6 md:p-8">
              {[
                "Privacy policy is hosted at a publicly accessible URL",
                "URL doesn't require login, VPN, or specific region to access",
                "Policy mentions every type of data your app collects",
                "All third-party SDKs are disclosed by name",
                "Data deletion process is explained (how users can delete their data)",
                "Contact information for privacy inquiries is included",
                "Policy covers GDPR rights (if app is available in EU)",
                "Policy covers CCPA rights (if app is available in California)",
                "COPPA compliance section included (if app targets children under 13)",
                "Privacy policy URL is added to App Store Connect / Google Play Console",
                "Google Data Safety form is completed and matches the privacy policy",
                "Apple Privacy Nutrition Labels match the privacy policy disclosures",
                "App Tracking Transparency disclosure included (if using IDFA on iOS)",
                "Account deletion mechanism documented (if app has user accounts)",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 py-3 border-b border-gray-800 last:border-0"
                >
                  <div className="w-6 h-6 rounded border-2 border-gray-600 shrink-0 mt-0.5 flex items-center justify-center text-xs text-gray-600">
                    {i + 1}
                  </div>
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-400 mb-4">
                PolicyForge covers items 1-9 automatically. You handle 10-14
                in your developer console.
              </p>
              <Link
                href="https://policyforge-one.vercel.app/"
                className="inline-block bg-amber-500 hover:bg-amber-400 text-black font-extrabold px-8 py-4 rounded-xl shadow-lg shadow-amber-500/25 transition-all hover:shadow-amber-400/40 hover:scale-105"
              >
                Generate Your Compliant Privacy Policy &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-5xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-10">
            Frequently Asked Questions
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqSchema.mainEntity.map(
              (
                faq: { name: string; acceptedAnswer: { text: string } },
                i: number
              ) => (
                <div
                  key={i}
                  className="bg-gray-900/50 border border-gray-800 rounded-xl p-6"
                >
                  <h3 className="font-bold text-white mb-3">{faq.name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {faq.acceptedAnswer.text}
                  </p>
                </div>
              )
            )}
          </div>
        </section>

        {/* Final CTA */}
        <section className="max-w-5xl mx-auto px-4 py-16">
          <div className="bg-gradient-to-br from-amber-500/20 to-red-500/10 border border-amber-500/30 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Stop Losing Time.{" "}
              <span className="text-amber-400">Fix Your Rejection Now.</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
              Every day your app is rejected, you lose downloads, revenue, and
              momentum. Generate a compliant privacy policy in 2 minutes,
              resubmit today, and get back to building.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="https://policyforge-one.vercel.app/"
                className="bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-lg px-10 py-5 rounded-xl shadow-lg shadow-amber-500/25 transition-all hover:shadow-amber-400/40 hover:scale-105"
              >
                Generate Privacy Policy &mdash; $4.99
              </Link>
              <Link
                href="https://policyforge-one.vercel.app/check"
                className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white font-semibold text-lg px-10 py-5 rounded-xl transition-all"
              >
                Check Existing Policy Free
              </Link>
            </div>
            <p className="text-gray-500 text-sm mt-6">
              One-time payment. No subscription. No account required.
              <br />
              Works for Apple App Store, Google Play, and all major app
              platforms.
            </p>
          </div>
        </section>

        {/* Resource Footer */}
        <section className="border-t border-gray-800 py-12">
          <div className="max-w-5xl mx-auto px-4">
            <h3 className="text-lg font-bold text-center text-gray-300 mb-6">
              More Privacy Policy Resources
            </h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link
                href="/privacy-policy-for-mobile-app"
                className="text-gray-400 hover:text-amber-400 transition-colors"
              >
                Mobile App Policy
              </Link>
              <span className="text-gray-700">|</span>
              <Link
                href="/privacy-policy-for-app-store"
                className="text-gray-400 hover:text-amber-400 transition-colors"
              >
                App Store Policy
              </Link>
              <span className="text-gray-700">|</span>
              <Link
                href="/privacy-policy-for-flutter-app"
                className="text-gray-400 hover:text-amber-400 transition-colors"
              >
                Flutter App Policy
              </Link>
              <span className="text-gray-700">|</span>
              <Link
                href="/privacy-policy-for-react-native-app"
                className="text-gray-400 hover:text-amber-400 transition-colors"
              >
                React Native Policy
              </Link>
              <span className="text-gray-700">|</span>
              <Link
                href="/privacy-policy-for-game-app"
                className="text-gray-400 hover:text-amber-400 transition-colors"
              >
                Game App Policy
              </Link>
              <span className="text-gray-700">|</span>
              <Link
                href="/gdpr-privacy-policy-generator"
                className="text-gray-400 hover:text-amber-400 transition-colors"
              >
                GDPR Generator
              </Link>
              <span className="text-gray-700">|</span>
              <Link
                href="/ccpa-privacy-policy-generator"
                className="text-gray-400 hover:text-amber-400 transition-colors"
              >
                CCPA Generator
              </Link>
              <span className="text-gray-700">|</span>
              <Link
                href="/privacy-policy-for-indie-hackers"
                className="text-gray-400 hover:text-amber-400 transition-colors"
              >
                Indie Hacker Policy
              </Link>
              <span className="text-gray-700">|</span>
              <Link
                href="/best-free-privacy-policy-generator"
                className="text-gray-400 hover:text-amber-400 transition-colors"
              >
                Best Free Generators
              </Link>
              <span className="text-gray-700">|</span>
              <Link
                href="/website-privacy-checker"
                className="text-gray-400 hover:text-amber-400 transition-colors"
              >
                Privacy Checker
              </Link>
            </div>
            <p className="text-center text-gray-600 text-xs mt-6">
              PolicyForge helps developers and businesses create compliant
              privacy policies. Not legal advice.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
