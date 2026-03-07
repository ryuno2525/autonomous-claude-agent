import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy for Mobile Apps | Free Generator - PolicyForge",
  description:
    "Generate a free privacy policy for your iOS or Android app. Covers device data, location tracking, push notifications, in-app purchases, and third-party SDKs. App Store & Play Store compliant.",
  keywords:
    "mobile app privacy policy, app store privacy policy, google play privacy policy, iOS app privacy policy, android app privacy policy, app privacy policy generator, mobile app GDPR",
};

export default function PrivacyPolicyForMobileApp() {
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
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Privacy Policy for Mobile Apps
        </h1>

        <div className="space-y-5 text-gray-300 leading-relaxed text-lg">
          <p>
            Both Apple and Google require every app published on their stores to
            have a privacy policy. Apple&apos;s App Store Review Guidelines
            mandate a clearly accessible privacy policy for any app that
            collects user data, and Google Play&apos;s Developer Program
            Policies require the same. Failing to include one can result in your
            app being rejected during review or removed from the store entirely.
          </p>

          <p>
            Mobile apps often collect more sensitive data than websites. Beyond
            standard personal information, apps may access device identifiers
            (IDFA, GAID), precise GPS location, contacts, camera, microphone,
            photo library, and health data. Third-party SDKs for analytics
            (Firebase, Mixpanel), advertising (AdMob, Meta Audience Network),
            and crash reporting (Crashlytics, Sentry) also process user data on
            your behalf. Your privacy policy needs to disclose all of these data
            collection practices clearly and accurately.
          </p>

          <p>
            PolicyForge helps you create a privacy policy that covers the unique
            requirements of mobile apps. Specify what device permissions your app
            uses, which third-party services you integrate, and whether you
            process payments or have user accounts. The generated policy is
            structured to satisfy both App Store and Play Store requirements,
            along with GDPR and CCPA compliance when you upgrade to Pro.
          </p>
        </div>

        <div className="mt-10">
          <Link
            href="/"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg text-lg hover:opacity-90 transition-opacity"
          >
            Generate Your Mobile App Privacy Policy
          </Link>
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
          Disclaimer: This generator provides template privacy policies for
          informational purposes. Consult a qualified attorney for
          jurisdiction-specific legal advice.
        </p>
      </footer>
    </div>
  );
}
