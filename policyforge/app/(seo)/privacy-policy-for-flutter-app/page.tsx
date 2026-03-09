import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Privacy Policy for Flutter & React Native Apps | Free Generator - PolicyForge",
  description:
    "Generate a privacy policy for your Flutter or React Native app that satisfies both Google Play and Apple App Store requirements. Covers Data Safety sections, Privacy Nutrition Labels, cross-platform SDK disclosures, and GDPR/CCPA compliance.",
  keywords:
    "privacy policy for flutter app, react native privacy policy, flutter app store privacy policy, google play privacy policy flutter, expo privacy policy, flutter data safety, react native app store privacy policy, cross-platform app privacy policy, flutter google play data safety, flutter privacy policy generator",
  openGraph: {
    title: "Privacy Policy for Flutter & React Native Apps — Free Generator",
    description:
      "Create a privacy policy that passes both Google Play and Apple App Store review for your cross-platform Flutter or React Native app. Covers data safety, nutrition labels, SDKs, and international compliance.",
    type: "website",
  },
};

const FLUTTER_COMMON_SDKS = [
  {
    name: "Firebase Analytics",
    package: "firebase_analytics / @react-native-firebase/analytics",
    dataCollected: [
      "Device identifiers",
      "App usage events",
      "Screen views",
      "Session duration",
      "OS version and device model",
    ],
    policyNote:
      "Disclose analytics collection in both Data Safety and Nutrition Labels. Firebase sends data to Google servers.",
  },
  {
    name: "Firebase Crashlytics",
    package: "firebase_crashlytics / @react-native-firebase/crashlytics",
    dataCollected: [
      "Crash logs and stack traces",
      "Device state at time of crash",
      "Device identifiers (installation UUID)",
      "OS version and app version",
    ],
    policyNote:
      "Classified as Diagnostics data. Disclose crash data collection and that it is sent to Google for processing.",
  },
  {
    name: "Google AdMob",
    package: "google_mobile_ads / react-native-google-mobile-ads",
    dataCollected: [
      "Advertising ID (GAID/IDFA)",
      "Device info and IP address",
      "Ad interaction data (clicks, impressions)",
      "Approximate location (IP-based)",
    ],
    policyNote:
      "Triggers ATT on iOS. Must declare Third-Party Advertising purpose. Disclose personalized vs. non-personalized ads.",
  },
  {
    name: "Sentry",
    package: "sentry_flutter / @sentry/react-native",
    dataCollected: [
      "Error and crash reports",
      "Device context (OS, memory, CPU)",
      "Breadcrumbs (user interactions before error)",
      "Optional: user identifiers if configured",
    ],
    policyNote:
      "Disclose error monitoring and what diagnostic data is captured. Sentry processes data on their servers.",
  },
  {
    name: "RevenueCat",
    package: "purchases_flutter / react-native-purchases",
    dataCollected: [
      "Purchase and subscription history",
      "App user ID",
      "Device identifiers",
      "Transaction receipts",
    ],
    policyNote:
      "Handles in-app purchase data. Disclose purchase tracking and that transaction data is shared with RevenueCat servers.",
  },
  {
    name: "OneSignal Push Notifications",
    package: "onesignal_flutter / react-native-onesignal",
    dataCollected: [
      "Push notification tokens",
      "Device identifiers",
      "App usage data for segmentation",
      "Optional: email, phone, tags",
    ],
    policyNote:
      "Disclose push notification data collection. OneSignal processes device tokens and may use data for segmentation.",
  },
  {
    name: "Amplitude / Mixpanel",
    package: "amplitude_flutter / mixpanel_flutter",
    dataCollected: [
      "User events and properties",
      "Device identifiers",
      "Session data",
      "Custom user attributes",
    ],
    policyNote:
      "Full analytics SDK. Declare Analytics purpose. These SDKs send behavioral data to third-party servers.",
  },
  {
    name: "Facebook SDK / Meta SDK",
    package: "flutter_facebook_auth / react-native-fbsdk-next",
    dataCollected: [
      "Facebook user ID and profile info",
      "Device identifiers and advertising ID",
      "App events for ad attribution",
      "Optional: friends list, email, birthday",
    ],
    policyNote:
      "Triggers ATT on iOS. Shares data with Meta for advertising. Must disclose Third-Party Advertising and Tracking purposes.",
  },
];

const GOOGLE_PLAY_DATA_TYPES = [
  {
    category: "Location",
    types: ["Approximate location", "Precise location"],
  },
  {
    category: "Personal Info",
    types: [
      "Name",
      "Email address",
      "User IDs",
      "Address",
      "Phone number",
      "Race and ethnicity",
      "Political or religious beliefs",
      "Sexual orientation",
      "Other personal info",
    ],
  },
  {
    category: "Financial Info",
    types: [
      "User payment info",
      "Purchase history",
      "Credit score",
      "Other financial info",
    ],
  },
  {
    category: "Health and Fitness",
    types: ["Health info", "Fitness info"],
  },
  {
    category: "Messages",
    types: ["Emails", "SMS or MMS", "Other in-app messages"],
  },
  {
    category: "Photos and Videos",
    types: ["Photos", "Videos"],
  },
  {
    category: "Audio Files",
    types: ["Voice or sound recordings", "Music files", "Other audio files"],
  },
  {
    category: "Files and Docs",
    types: ["Files and docs"],
  },
  {
    category: "Calendar",
    types: ["Calendar events"],
  },
  {
    category: "Contacts",
    types: ["Contacts"],
  },
  {
    category: "App Activity",
    types: [
      "App interactions",
      "In-app search history",
      "Installed apps",
      "Other user-generated content",
      "Other actions",
    ],
  },
  {
    category: "Web Browsing",
    types: ["Web browsing history"],
  },
  {
    category: "App Info and Performance",
    types: ["Crash logs", "Diagnostics", "Other app performance data"],
  },
  {
    category: "Device or Other IDs",
    types: ["Device or other IDs"],
  },
];

const FAQ_ITEMS = [
  {
    q: "Do I need a privacy policy for my Flutter app?",
    a: "Yes, absolutely. Both Google Play and the Apple App Store require a privacy policy for every published app. Google Play requires a privacy policy URL in your Play Console listing before you can publish. Apple requires one in App Store Connect and inside the app itself. Even if your Flutter app collects zero user data, you still need a privacy policy that explicitly states this. Without one, your app will be rejected during review on both platforms.",
  },
  {
    q: "Does React Native need a different privacy policy than Flutter?",
    a: "No. The privacy policy requirements are determined by the app stores, not the framework. Whether you build with Flutter, React Native, Expo, Xamarin, or native code, Google Play and the App Store have identical privacy policy requirements. The only difference is which SDKs and plugins you use — each SDK may collect different data types that must be disclosed. Your privacy policy should list all SDKs integrated into your app regardless of framework.",
  },
  {
    q: "What is Google Play's Data Safety section and how does it relate to my privacy policy?",
    a: "Google Play's Data Safety section (mandatory since July 2022) is a structured declaration displayed on your app's Play Store listing. It requires you to disclose what data your app collects, whether it's shared with third parties, and your security practices. Your privacy policy must be consistent with your Data Safety declarations — if your Data Safety form says you collect location data, your privacy policy must explain why and how. Google reviews both for consistency, and discrepancies can lead to enforcement actions or app removal.",
  },
  {
    q: "How do I fill out the Data Safety form for a Flutter app?",
    a: "In Google Play Console, go to App Content > Data Safety. For each data type, declare whether your app collects or shares it. You must account for data collected by all Flutter packages and plugins — not just your own code. Review each dependency's documentation to understand what data it collects. Common Flutter packages like firebase_analytics, google_mobile_ads, and sentry_flutter all collect data that must be declared. After completing the form, ensure your privacy policy matches every declaration.",
  },
  {
    q: "Do I need to disclose data collected by Flutter plugins and packages?",
    a: "Yes. Both Google Play and the App Store hold you responsible for all data collection in your app, including data collected by third-party packages, plugins, and SDKs. If you use firebase_analytics in your Flutter app, you must disclose the analytics data it collects even though you didn't write that code. Audit your pubspec.yaml (Flutter) or package.json (React Native) and check each dependency's privacy documentation to build a complete picture of your app's data collection.",
  },
  {
    q: "What happens if my Flutter app uses platform channels — do I need to disclose native code data collection?",
    a: "Yes. If your Flutter app uses platform channels (MethodChannel, EventChannel) to call native iOS or Android code, any data collected by that native code must be disclosed in your privacy policy. This includes native SDKs integrated via platform channels, native API calls that access device sensors or user data, and any native code that sends data to servers. Your privacy policy should cover all data collection regardless of whether it happens in Dart, Swift/Kotlin, or JavaScript.",
  },
  {
    q: "My Expo/React Native app uses Expo Application Services (EAS). Does that affect my privacy policy?",
    a: "EAS Build and EAS Update themselves don't collect end-user data — they are developer build and deployment tools. However, if you use expo-notifications, expo-location, expo-contacts, or other Expo modules that access user data, those must be disclosed. Expo's over-the-air update mechanism (EAS Update) sends update bundles to devices but does not collect personal data. Always check each Expo module's documentation for its specific data practices.",
  },
  {
    q: "Can I use one privacy policy for both my iOS and Android versions?",
    a: "Yes, and this is recommended. A single privacy policy can cover both platforms — just make sure it addresses platform-specific requirements. Mention Apple's Privacy Nutrition Labels and App Tracking Transparency for iOS, and Google Play's Data Safety section for Android. If your app collects different data on each platform (e.g., IDFA on iOS only, or Android Advertising ID only), note the platform-specific differences in your policy. PolicyForge generates policies that cover both stores simultaneously.",
  },
  {
    q: "How quickly can I generate a privacy policy for my Flutter app with PolicyForge?",
    a: "Under 2 minutes. PolicyForge's generator asks you targeted questions about your app's data collection, SDKs, and target audience. It then generates a privacy policy that covers both Google Play Data Safety requirements and Apple App Store Nutrition Label categories. The free tier lets you generate policies with essential coverage. The Pro tier ($4.99) adds SDK-specific disclosures, international compliance (GDPR, CCPA, PIPEDA), and unlimited generations.",
  },
  {
    q: "What if my app doesn't collect any data at all?",
    a: "You still need a privacy policy. Both stores require it even for apps with zero data collection. Your policy should explicitly state that your app does not collect, store, or share any personal data. In Google Play's Data Safety form, you can declare 'My app does not collect or share any user data.' In Apple's Nutrition Labels, select that no data is collected. Having a clear 'no collection' policy is still legally required and prevents review rejections.",
  },
];

const STORE_COMPARISON = [
  {
    requirement: "Privacy policy required?",
    googlePlay: "Yes — mandatory for all apps",
    appStore: "Yes — mandatory for all apps",
  },
  {
    requirement: "Where to add URL?",
    googlePlay: "Play Console > Store Listing > Privacy Policy",
    appStore: "App Store Connect > App Information > Privacy Policy URL",
  },
  {
    requirement: "In-app link required?",
    googlePlay: "Recommended but not strictly enforced",
    appStore: "Yes — Apple checks during review",
  },
  {
    requirement: "Data disclosure format",
    googlePlay: "Data Safety section (structured form)",
    appStore: "Privacy Nutrition Labels (structured form)",
  },
  {
    requirement: "Data disclosure mandatory since",
    googlePlay: "July 2022",
    appStore: "December 2020",
  },
  {
    requirement: "Must disclose SDK data?",
    googlePlay: "Yes — all third-party code",
    appStore: "Yes — all third-party code",
  },
  {
    requirement: "Tracking consent required?",
    googlePlay: "No OS-level prompt (but GDPR may require consent)",
    appStore: "Yes — App Tracking Transparency (ATT) prompt for IDFA",
  },
  {
    requirement: "Data deletion mechanism?",
    googlePlay: "Yes — required since December 2023",
    appStore: "Yes — required since June 2022",
  },
  {
    requirement: "Kids/children rules?",
    googlePlay: "Families Policy (Designed for Families program)",
    appStore: "Kids Category restrictions + COPPA",
  },
  {
    requirement: "Non-compliance penalty",
    googlePlay: "App removal, developer account suspension",
    appStore: "App rejection, removal from store",
  },
];

export default function PrivacyPolicyForFlutterApp() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#ededed]">
      <header className="border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
              P
            </div>
            <span className="text-white font-semibold text-lg">
              PolicyForge
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/check"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
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
        <div className="mb-4 flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-medium rounded-full border border-blue-500/20">
            Flutter &amp; React Native
          </span>
          <span className="px-3 py-1 bg-green-500/10 text-green-400 text-xs font-medium rounded-full border border-green-500/20">
            Google Play + App Store
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Privacy Policy for Flutter &amp; React Native Apps
        </h1>
        <p className="text-xl text-gray-400 mb-8">
          Building cross-platform? Both Google Play and the Apple App Store
          reject apps without a compliant privacy policy. Generate one that
          covers Data Safety declarations, Privacy Nutrition Labels, SDK
          disclosures, GDPR, and CCPA — in under 2 minutes.
        </p>

        <div className="flex flex-wrap gap-3 mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg text-lg hover:opacity-90 transition-opacity"
          >
            Generate Your App Privacy Policy
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
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
          {/* Why Flutter/RN Developers Need a Privacy Policy */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Why Every Flutter and React Native App Needs a Privacy Policy
            </h2>
            <p className="mb-4">
              Cross-platform frameworks like Flutter, React Native, and Expo
              make it easy to ship to both iOS and Android from a single
              codebase. But both app stores have strict, independent privacy
              policy requirements that you must satisfy before your app goes
              live. Missing or non-compliant privacy policies are one of the most
              common reasons for app rejection.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="p-4 bg-red-500/5 border border-red-500/20 rounded-lg">
                <h3 className="font-semibold text-red-400 mb-2">
                  Google Play Requirement
                </h3>
                <p className="text-sm text-gray-400">
                  Since July 2022, Google Play requires{" "}
                  <strong className="text-white">every app</strong> to complete
                  a Data Safety section and provide a privacy policy URL. Apps
                  without a valid privacy policy are subject to removal. Apps
                  that collect personal or sensitive data without a policy are
                  automatically rejected.
                </p>
              </div>
              <div className="p-4 bg-red-500/5 border border-red-500/20 rounded-lg">
                <h3 className="font-semibold text-red-400 mb-2">
                  Apple App Store Requirement
                </h3>
                <p className="text-sm text-gray-400">
                  Apple requires a privacy policy for{" "}
                  <strong className="text-white">all apps</strong> — even those
                  that collect zero data. You must provide a privacy policy URL
                  in App Store Connect and include a link inside the app. Review
                  Guidelines Section 5.1.1 governs all privacy requirements.
                </p>
              </div>
            </div>
            <div className="p-4 bg-yellow-500/5 border border-yellow-500/20 rounded-lg">
              <p className="text-sm text-yellow-300">
                <strong>Cross-platform catch:</strong> Because Flutter and React
                Native apps ship to both stores simultaneously, your privacy
                policy must satisfy both Google Play and Apple requirements at
                the same time. A policy written only for one store will cause
                rejection on the other. PolicyForge generates policies that
                cover both stores in a single document.
              </p>
            </div>
          </section>

          {/* Google Play Data Safety */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Google Play Data Safety Section for Flutter Apps
            </h2>
            <p className="mb-4">
              Google Play&apos;s Data Safety section is a structured form you
              fill out in the Play Console. It tells users what data your app
              collects, whether it&apos;s shared with third parties, and what
              security practices you follow. Your privacy policy must be
              consistent with these declarations — Google checks for
              discrepancies.
            </p>
            <p className="mb-4">
              For Flutter apps, the key challenge is accounting for data
              collected by every Dart package and native plugin in your{" "}
              <code className="px-1.5 py-0.5 bg-white/10 rounded text-sm text-blue-300">
                pubspec.yaml
              </code>
              . Many popular Flutter packages like{" "}
              <code className="px-1.5 py-0.5 bg-white/10 rounded text-sm text-blue-300">
                firebase_analytics
              </code>
              ,{" "}
              <code className="px-1.5 py-0.5 bg-white/10 rounded text-sm text-blue-300">
                google_mobile_ads
              </code>
              , and{" "}
              <code className="px-1.5 py-0.5 bg-white/10 rounded text-sm text-blue-300">
                sentry_flutter
              </code>{" "}
              collect data that must be declared.
            </p>

            <h3 className="text-lg font-semibold text-white mb-3">
              Google Play Data Types You Must Evaluate
            </h3>
            <div className="grid md:grid-cols-2 gap-3 mb-4">
              {GOOGLE_PLAY_DATA_TYPES.map((category) => (
                <div
                  key={category.category}
                  className="p-3 bg-white/5 border border-white/10 rounded-lg"
                >
                  <h4 className="font-semibold text-white text-sm mb-1">
                    {category.category}
                  </h4>
                  <ul className="space-y-0.5">
                    {category.types.map((t) => (
                      <li
                        key={t}
                        className="text-xs text-gray-400 flex items-start gap-1.5"
                      >
                        <span className="text-blue-400 mt-0.5">&#8226;</span>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <h3 className="text-lg font-semibold text-white mb-3">
              How to Complete the Data Safety Form
            </h3>
            <div className="space-y-3 mb-4">
              {[
                {
                  step: "Step 1: Audit your pubspec.yaml / package.json",
                  detail:
                    "List every dependency. For each package, check its pub.dev or npm page for privacy documentation. Many packages now include a 'Data Safety' section.",
                },
                {
                  step: "Step 2: Map data to Google's categories",
                  detail:
                    "For each piece of data collected (by your code or by packages), match it to Google Play's predefined data types listed above.",
                },
                {
                  step: "Step 3: Declare collection and sharing",
                  detail:
                    "For each data type, indicate whether it's collected (sent off-device) and whether it's shared with third parties. 'Shared' means transferred to other companies.",
                },
                {
                  step: "Step 4: State the purpose",
                  detail:
                    "Select one or more purposes for each data type: App functionality, Analytics, Developer communications, Advertising or marketing, Fraud prevention/security, Personalization, Account management.",
                },
                {
                  step: "Step 5: Declare security practices",
                  detail:
                    "Confirm whether data is encrypted in transit, whether users can request deletion, and whether your app follows Google's Families Policy (if applicable).",
                },
                {
                  step: "Step 6: Cross-reference your privacy policy",
                  detail:
                    "Every data type declared in Data Safety must appear in your privacy policy with matching purposes. Inconsistencies trigger enforcement.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex items-start gap-3 p-3 bg-white/5 rounded-lg"
                >
                  <span className="text-blue-400 mt-0.5 font-semibold text-sm whitespace-nowrap">
                    {item.step.split(":")[0]}:
                  </span>
                  <div>
                    <p className="font-medium text-white text-sm">
                      {item.step.split(": ")[1]}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Apple App Store for Flutter */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Apple App Store Requirements for Flutter &amp; React Native Apps
            </h2>
            <p className="mb-4">
              Apple&apos;s App Store has its own set of privacy requirements that
              are independent from Google Play. When you submit your Flutter or
              React Native app to the App Store, you must complete Privacy
              Nutrition Labels in App Store Connect and provide a privacy policy
              URL. Apple&apos;s review team actively checks both.
            </p>
            <p className="mb-4">
              Key Apple-specific requirements that affect cross-platform apps:
            </p>
            <ul className="space-y-3 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1 font-bold">1.</span>
                <span>
                  <strong className="text-white">
                    Privacy Nutrition Labels
                  </strong>{" "}
                  — You must complete the App Privacy section in App Store
                  Connect, declaring every data type your app collects. These
                  labels appear on your App Store listing. They must match your
                  privacy policy exactly.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1 font-bold">2.</span>
                <span>
                  <strong className="text-white">
                    App Tracking Transparency (ATT)
                  </strong>{" "}
                  — If your app accesses the IDFA or performs cross-app tracking
                  (common with ad SDKs like AdMob or Facebook), you must show
                  the ATT prompt. This is enforced at the OS level on iOS 14.5+.
                  Your privacy policy must describe your tracking practices.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1 font-bold">3.</span>
                <span>
                  <strong className="text-white">
                    Privacy Manifests (2024+)
                  </strong>{" "}
                  — Apple now requires Privacy Manifests (
                  <code className="px-1.5 py-0.5 bg-white/10 rounded text-sm text-blue-300">
                    PrivacyInfo.xcprivacy
                  </code>
                  ) for apps and SDKs. Flutter apps must include manifests that
                  declare required reasons for accessing certain APIs (like
                  UserDefaults, file timestamps, and disk space).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1 font-bold">4.</span>
                <span>
                  <strong className="text-white">
                    In-app privacy policy link
                  </strong>{" "}
                  — Apple requires a visible link to your privacy policy within
                  the app itself (Settings, About screen, or menu). A URL in App
                  Store Connect alone is not enough.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1 font-bold">5.</span>
                <span>
                  <strong className="text-white">
                    Account and data deletion
                  </strong>{" "}
                  — If your app offers account creation, you must also offer
                  account and data deletion. Your privacy policy must describe
                  how users can request this.
                </span>
              </li>
            </ul>
            <p className="text-sm text-gray-400">
              For a deep dive into Apple-specific requirements, see our{" "}
              <Link
                href="/privacy-policy-for-app-store"
                className="text-blue-400 hover:text-blue-300"
              >
                Privacy Policy for App Store
              </Link>{" "}
              guide.
            </p>
          </section>

          {/* Store Comparison Table */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Google Play vs. Apple App Store: Privacy Requirements Compared
            </h2>
            <p className="mb-4">
              Since your Flutter or React Native app ships to both stores, here
              is a side-by-side comparison of every privacy requirement you need
              to satisfy:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-3 text-gray-400 font-medium">
                      Requirement
                    </th>
                    <th className="text-left py-3 px-3 text-green-400 font-medium">
                      Google Play
                    </th>
                    <th className="text-left py-3 px-3 text-blue-400 font-medium">
                      Apple App Store
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {STORE_COMPARISON.map((row) => (
                    <tr
                      key={row.requirement}
                      className="border-b border-white/5"
                    >
                      <td className="py-3 px-3 text-white font-medium">
                        {row.requirement}
                      </td>
                      <td className="py-3 px-3 text-gray-400">
                        {row.googlePlay}
                      </td>
                      <td className="py-3 px-3 text-gray-400">
                        {row.appStore}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Common SDKs */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Common Flutter &amp; React Native SDKs and Their Privacy Impact
            </h2>
            <p className="mb-6">
              Every third-party package in your app potentially collects user
              data that must be disclosed in your privacy policy, Data Safety
              form, and Nutrition Labels. Here are the most popular
              cross-platform SDKs and exactly what data they collect:
            </p>
            <div className="space-y-4">
              {FLUTTER_COMMON_SDKS.map((sdk) => (
                <div
                  key={sdk.name}
                  className="p-4 bg-white/5 border border-white/10 rounded-lg"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                    <h3 className="font-semibold text-white">{sdk.name}</h3>
                    <code className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded">
                      {sdk.package}
                    </code>
                  </div>
                  <div className="mb-2">
                    <p className="text-xs text-gray-500 mb-1 font-medium">
                      Data collected:
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-1">
                      {sdk.dataCollected.map((d) => (
                        <li
                          key={d}
                          className="text-sm text-gray-400 flex items-start gap-1.5"
                        >
                          <span className="text-blue-400 mt-0.5">&#8226;</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-2 bg-blue-500/5 border border-blue-500/10 rounded">
                    <p className="text-xs text-blue-300">{sdk.policyNote}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-gray-400">
              This is not an exhaustive list. Always audit your{" "}
              <code className="px-1.5 py-0.5 bg-white/10 rounded text-sm text-blue-300">
                pubspec.yaml
              </code>{" "}
              or{" "}
              <code className="px-1.5 py-0.5 bg-white/10 rounded text-sm text-blue-300">
                package.json
              </code>{" "}
              for every dependency and check its privacy documentation.
              PolicyForge helps you{" "}
              <Link href="/" className="text-blue-400 hover:text-blue-300">
                generate a policy that covers your specific SDK stack &rarr;
              </Link>
            </p>
          </section>

          {/* How to Add Privacy Policy to Flutter App */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              How to Add a Privacy Policy to Your Flutter App
            </h2>
            <p className="mb-4">
              Once you&apos;ve generated your privacy policy, you need to make
              it accessible in three places: your app listing on Google Play,
              your app listing on the App Store, and inside the app itself. Here
              is exactly how to do each:
            </p>

            <h3 className="text-lg font-semibold text-white mb-3">
              1. Add the URL to Google Play Console
            </h3>
            <div className="space-y-2 mb-6">
              {[
                {
                  step: "1",
                  text: "Open Google Play Console",
                  detail: "Go to play.google.com/console and select your app.",
                },
                {
                  step: "2",
                  text: "Go to Store Listing",
                  detail:
                    "In the left sidebar, navigate to Grow > Store presence > Main store listing.",
                },
                {
                  step: "3",
                  text: "Find the Privacy Policy field",
                  detail:
                    "Scroll to the bottom of the listing page. You'll see a 'Privacy policy' URL field.",
                },
                {
                  step: "4",
                  text: "Paste your privacy policy URL",
                  detail:
                    "Enter the full HTTPS URL. It must be publicly accessible — no login walls, no redirects to app stores.",
                },
                {
                  step: "5",
                  text: "Save and complete Data Safety",
                  detail:
                    "Save the listing, then go to App content > Data safety to complete the Data Safety section. Both must be done.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex items-start gap-3 p-3 bg-white/5 rounded-lg"
                >
                  <span className="w-6 h-6 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {item.step}
                  </span>
                  <div>
                    <p className="font-medium text-white text-sm">
                      {item.text}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-lg font-semibold text-white mb-3">
              2. Add the URL to App Store Connect
            </h3>
            <div className="space-y-2 mb-6">
              {[
                {
                  step: "1",
                  text: "Open App Store Connect",
                  detail:
                    "Go to appstoreconnect.apple.com and select your app.",
                },
                {
                  step: "2",
                  text: "Navigate to App Information",
                  detail:
                    "In the left sidebar under 'General', click 'App Information'.",
                },
                {
                  step: "3",
                  text: "Add Privacy Policy URL",
                  detail:
                    "Scroll to the 'App Privacy' section and paste your HTTPS URL in the Privacy Policy URL field.",
                },
                {
                  step: "4",
                  text: "Complete Privacy Nutrition Labels",
                  detail:
                    "In the same section, click 'Get Started' to declare your app's data collection for Nutrition Labels.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex items-start gap-3 p-3 bg-white/5 rounded-lg"
                >
                  <span className="w-6 h-6 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {item.step}
                  </span>
                  <div>
                    <p className="font-medium text-white text-sm">
                      {item.text}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-lg font-semibold text-white mb-3">
              3. Add an In-App Privacy Policy Link (Flutter Code)
            </h3>
            <p className="mb-3 text-sm text-gray-400">
              Apple requires a visible privacy policy link inside your app.
              Google recommends it. Here&apos;s how to implement it in Flutter:
            </p>
            <div className="p-4 bg-white/5 border border-white/10 rounded-lg mb-4 font-mono text-sm">
              <p className="text-gray-500 mb-2">
                // Add to your Settings or About screen
              </p>
              <p className="text-gray-300">
                <span className="text-blue-400">import</span>{" "}
                <span className="text-green-400">
                  &apos;package:url_launcher/url_launcher.dart&apos;
                </span>
                ;
              </p>
              <p className="text-gray-300 mt-2">
                <span className="text-blue-400">ListTile</span>(
              </p>
              <p className="text-gray-300 pl-4">
                leading:{" "}
                <span className="text-blue-400">Icon</span>(Icons.privacy_tip),
              </p>
              <p className="text-gray-300 pl-4">
                title: <span className="text-blue-400">Text</span>(
                <span className="text-green-400">
                  &apos;Privacy Policy&apos;
                </span>
                ),
              </p>
              <p className="text-gray-300 pl-4">
                onTap: () =&gt;{" "}
                <span className="text-blue-400">launchUrl</span>(
              </p>
              <p className="text-gray-300 pl-8">
                <span className="text-blue-400">Uri</span>.parse(
                <span className="text-green-400">
                  &apos;https://your-domain.com/privacy-policy&apos;
                </span>
                ),
              </p>
              <p className="text-gray-300 pl-4">),</p>
              <p className="text-gray-300">),</p>
            </div>
            <p className="mb-3 text-sm text-gray-400">
              For React Native / Expo:
            </p>
            <div className="p-4 bg-white/5 border border-white/10 rounded-lg mb-4 font-mono text-sm">
              <p className="text-gray-500 mb-2">
                // Add to your Settings or About screen
              </p>
              <p className="text-gray-300">
                <span className="text-blue-400">import</span>{" "}
                {"{ Linking }"} <span className="text-blue-400">from</span>{" "}
                <span className="text-green-400">
                  &apos;react-native&apos;
                </span>
                ;
              </p>
              <p className="text-gray-300 mt-2">
                &lt;<span className="text-blue-400">TouchableOpacity</span>
              </p>
              <p className="text-gray-300 pl-4">
                onPress={"{"}() =&gt;
              </p>
              <p className="text-gray-300 pl-8">
                Linking.openURL(
                <span className="text-green-400">
                  &apos;https://your-domain.com/privacy-policy&apos;
                </span>
                )
              </p>
              <p className="text-gray-300 pl-4">{"}"}&gt;</p>
              <p className="text-gray-300 pl-4">
                &lt;<span className="text-blue-400">Text</span>&gt;Privacy
                Policy&lt;/<span className="text-blue-400">Text</span>&gt;
              </p>
              <p className="text-gray-300">
                &lt;/<span className="text-blue-400">TouchableOpacity</span>
                &gt;
              </p>
            </div>
            <div className="p-4 bg-yellow-500/5 border border-yellow-500/20 rounded-lg">
              <p className="text-sm text-yellow-300">
                <strong>Hosting tip:</strong> Host your privacy policy on your
                own domain (e.g.,{" "}
                <code className="bg-white/10 px-1 rounded">
                  yourapp.com/privacy
                </code>
                ) rather than on a third-party service. This gives you full
                control over updates, avoids broken links, and looks more
                professional. Make sure it&apos;s accessible without
                authentication and loads over HTTPS.
              </p>
            </div>
          </section>

          {/* Flutter-Specific Privacy Considerations */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Flutter-Specific Privacy Considerations
            </h2>
            <p className="mb-4">
              Flutter apps have unique characteristics that affect privacy
              compliance. Be aware of these framework-specific considerations:
            </p>
            <div className="space-y-3">
              {[
                {
                  title: "Platform channels and native code",
                  detail:
                    "If your Flutter app calls native iOS (Swift/ObjC) or Android (Kotlin/Java) code via MethodChannel, any data accessed by that native code must be disclosed. This includes native SDKs not available as Flutter packages.",
                },
                {
                  title: "Flutter web builds",
                  detail:
                    "If you deploy your Flutter app as a web app (flutter build web), you need to disclose cookies, local storage, and browser-based tracking in addition to mobile data collection. Web builds may use different analytics and require a cookie consent banner for GDPR.",
                },
                {
                  title: "Shared preferences and local storage",
                  detail:
                    "Flutter's shared_preferences package stores data on-device using SharedPreferences (Android) and UserDefaults (iOS). While on-device storage doesn't need to be declared in Data Safety if data stays local, Apple's Privacy Manifests now require declaring UserDefaults access reasons.",
                },
                {
                  title: "Image picker and camera access",
                  detail:
                    "Using image_picker or camera packages? You must add NSCameraUsageDescription and NSPhotoLibraryUsageDescription to your iOS Info.plist, and declare photo/video data collection in both Data Safety and Nutrition Labels if images leave the device.",
                },
                {
                  title: "Location services",
                  detail:
                    "Packages like geolocator or location access GPS data. Declare precise or approximate location in both stores. iOS requires NSLocationWhenInUseUsageDescription or NSLocationAlwaysUsageDescription in Info.plist.",
                },
                {
                  title: "Push notifications (FCM)",
                  detail:
                    "Firebase Cloud Messaging generates device tokens that are sent to Firebase servers. This counts as collecting Device or Other IDs. Disclose push notification token collection in your privacy policy.",
                },
                {
                  title: "Dart DevTools and debug data",
                  detail:
                    "Ensure you're not shipping debug or profiling code in production builds. Debug builds may log sensitive data. Always use 'flutter build --release' for store submissions and verify no debug logging persists.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3 p-3 bg-white/5 rounded-lg"
                >
                  <span className="text-blue-400 mt-0.5 font-bold text-sm">
                    &gt;
                  </span>
                  <div>
                    <p className="font-medium text-white text-sm">
                      {item.title}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* React Native / Expo Specific */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              React Native &amp; Expo Privacy Considerations
            </h2>
            <p className="mb-4">
              React Native and Expo apps have their own framework-specific
              privacy implications. Here is what you need to know:
            </p>
            <div className="space-y-3">
              {[
                {
                  title: "Native modules and autolinking",
                  detail:
                    "React Native's autolinking automatically includes native code from node_modules. Review every package that includes native iOS/Android code — they may access device APIs and collect data even if you don't call those features directly.",
                },
                {
                  title: "Expo modules",
                  detail:
                    "Expo modules like expo-location, expo-camera, expo-contacts, and expo-notifications access sensitive device APIs. Each must be disclosed in your privacy policy. Check Expo's documentation for each module's specific data practices.",
                },
                {
                  title: "Expo Go vs. standalone builds",
                  detail:
                    "Expo Go (development client) includes all Expo modules and their permissions. Your standalone build only includes modules you import. Ensure your privacy policy matches your production build, not Expo Go.",
                },
                {
                  title: "Hermes engine",
                  detail:
                    "React Native's Hermes engine does not collect user data. However, if you use Hermes crash reporting (via Sentry or Bugsnag), those crash reports may include device identifiers and must be disclosed.",
                },
                {
                  title: "AsyncStorage",
                  detail:
                    "React Native's AsyncStorage stores data locally. Like Flutter's shared_preferences, on-device data that never leaves the device typically doesn't need Data Safety disclosure. But if you sync AsyncStorage data to a server, that must be declared.",
                },
                {
                  title: "CodePush / OTA updates",
                  detail:
                    "If you use CodePush or EAS Update for over-the-air updates, these services may collect device metadata (OS version, app version, device ID) to deliver updates. Check the service's privacy documentation and disclose if applicable.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3 p-3 bg-white/5 rounded-lg"
                >
                  <span className="text-cyan-400 mt-0.5 font-bold text-sm">
                    &gt;
                  </span>
                  <div>
                    <p className="font-medium text-white text-sm">
                      {item.title}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* GDPR and CCPA for Mobile Apps */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              GDPR, CCPA, and International Compliance for Cross-Platform Apps
            </h2>
            <p className="mb-4">
              App store requirements are just the baseline. If your Flutter or
              React Native app is available to users in the EU or California
              (which it almost certainly is, since both stores are global), you
              must also comply with GDPR and CCPA:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                <h3 className="font-semibold text-white mb-2">
                  GDPR (EU Users)
                </h3>
                <ul className="space-y-1.5 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">&#8226;</span>
                    Legal basis for processing (consent, legitimate interest,
                    contract)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">&#8226;</span>
                    Right to access, rectify, delete, and port data
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">&#8226;</span>
                    Data Processing Officer contact details (if applicable)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">&#8226;</span>
                    Cross-border data transfer disclosures
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">&#8226;</span>
                    Fines up to 4% of annual revenue or EUR 20M
                  </li>
                </ul>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                <h3 className="font-semibold text-white mb-2">
                  CCPA (California Users)
                </h3>
                <ul className="space-y-1.5 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">&#8226;</span>
                    Right to know what personal info is collected
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">&#8226;</span>
                    Right to delete personal information
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">&#8226;</span>
                    Right to opt out of sale of personal info
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">&#8226;</span>
                    &quot;Do Not Sell My Personal Information&quot; link
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">&#8226;</span>
                    Financial incentives disclosure if offering them
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              PolicyForge generates policies that include GDPR and CCPA
              provisions by default when you select the Pro tier. For detailed
              GDPR guidance, see our{" "}
              <Link
                href="/gdpr-privacy-policy-generator"
                className="text-blue-400 hover:text-blue-300"
              >
                GDPR Privacy Policy Generator
              </Link>{" "}
              or{" "}
              <Link
                href="/ccpa-privacy-policy-generator"
                className="text-blue-400 hover:text-blue-300"
              >
                CCPA Privacy Policy Generator
              </Link>
              .
            </p>
          </section>

          {/* CTA */}
          <section className="p-8 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-3">
              Generate Your Flutter / React Native Privacy Policy Now
            </h2>
            <p className="text-gray-300 mb-2">
              PolicyForge generates privacy policies designed for cross-platform
              app developers. We cover both Google Play Data Safety and Apple
              Privacy Nutrition Label requirements, SDK-specific disclosures,
              ATT, GDPR, and CCPA — from a simple form you can complete in 2
              minutes.
            </p>
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <div className="text-sm text-gray-400">
                <span className="text-green-400">&#10003;</span> Google Play
                Data Safety aligned
              </div>
              <div className="text-sm text-gray-400">
                <span className="text-green-400">&#10003;</span> Apple Nutrition
                Labels covered
              </div>
              <div className="text-sm text-gray-400">
                <span className="text-green-400">&#10003;</span> SDK disclosures
                included
              </div>
              <div className="text-sm text-gray-400">
                <span className="text-green-400">&#10003;</span> GDPR &amp; CCPA
                ready
              </div>
              <div className="text-sm text-gray-400">
                <span className="text-green-400">&#10003;</span> Single policy
                for both stores
              </div>
            </div>
            <div className="flex flex-wrap gap-3 items-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Generate Now — Free
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
              <span className="text-sm text-gray-500">
                Free tier available &middot; Pro from $4.99
              </span>
            </div>
          </section>

          {/* Scan CTA */}
          <section className="p-6 bg-white/5 border border-white/10 rounded-xl text-center">
            <h2 className="text-xl font-bold text-white mb-2">
              Already Have a Privacy Policy?
            </h2>
            <p className="text-gray-400 text-sm mb-4">
              Scan your app&apos;s privacy policy URL to check compliance across
              10 categories — including both Google Play and App Store
              requirements, GDPR, CCPA, and data disclosure completeness.
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
            <h2 className="text-2xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {FAQ_ITEMS.map((faq) => (
                <div key={faq.q} className="p-4 bg-white/5 rounded-lg">
                  <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Resources */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Related Resources
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link
                href="/privacy-policy-for-mobile-app"
                className="p-4 bg-white/5 border border-white/10 rounded-lg hover:border-blue-500/30 transition-colors group"
              >
                <h3 className="font-semibold text-white text-sm group-hover:text-blue-400">
                  Privacy Policy for Mobile Apps
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  General mobile app privacy requirements for iOS and Android
                </p>
              </Link>
              <Link
                href="/privacy-policy-for-app-store"
                className="p-4 bg-white/5 border border-white/10 rounded-lg hover:border-blue-500/30 transition-colors group"
              >
                <h3 className="font-semibold text-white text-sm group-hover:text-blue-400">
                  Privacy Policy for Apple App Store
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  Deep dive into Section 5.1.1, Nutrition Labels, and ATT
                </p>
              </Link>
              <Link
                href="/tos"
                className="p-4 bg-white/5 border border-white/10 rounded-lg hover:border-blue-500/30 transition-colors group"
              >
                <h3 className="font-semibold text-white text-sm group-hover:text-blue-400">
                  Terms of Service Generator
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  Generate Terms of Service for your app alongside your privacy
                  policy
                </p>
              </Link>
            </div>
          </section>
        </div>
      </main>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQ_ITEMS.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }),
        }}
      />

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
          Disclaimer: This generator provides template privacy policies for
          informational purposes. Consult a qualified attorney for
          jurisdiction-specific legal advice.
        </p>
      </footer>
    </div>
  );
}
