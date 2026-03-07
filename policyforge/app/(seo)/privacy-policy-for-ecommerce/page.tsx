import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy for Ecommerce Stores | Free Generator - PolicyForge",
  description:
    "Generate a free privacy policy for your ecommerce store. Covers payment processing, order data, shipping info, cookies, and customer tracking. GDPR & CCPA compliant.",
  keywords:
    "privacy policy ecommerce, online store privacy policy, shopify privacy policy generator, ecommerce GDPR, ecommerce CCPA, payment data privacy policy, customer data policy",
};

export default function PrivacyPolicyForEcommerce() {
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
          Privacy Policy for Ecommerce Stores
        </h1>

        <div className="space-y-5 text-gray-300 leading-relaxed text-lg">
          <p>
            If you run an online store, you collect a significant amount of
            personal data from your customers: names, email addresses, shipping
            addresses, phone numbers, and payment information. Regulations like
            the GDPR and CCPA require you to clearly disclose what data you
            collect, why you collect it, who you share it with, and how customers
            can exercise their rights. Without a privacy policy, you risk fines,
            payment processor account suspension, and loss of customer trust.
          </p>

          <p>
            Ecommerce businesses face unique privacy challenges. You likely use
            third-party services for payment processing (Stripe, PayPal),
            shipping (UPS, FedEx), analytics (Google Analytics), email marketing
            (Mailchimp, Klaviyo), and advertising (Meta Pixel, Google Ads). Each
            of these services receives some portion of your customer data, and
            your privacy policy must disclose these relationships. Platforms like
            Shopify, WooCommerce, and BigCommerce also require merchants to have
            a privacy policy in place.
          </p>

          <p>
            PolicyForge lets you generate a comprehensive, legally-structured
            privacy policy tailored to your ecommerce business in minutes.
            Simply select the types of data your store collects, the services you
            use, and your jurisdiction. The Pro version includes full GDPR rights
            sections, CCPA disclosures, data retention clauses, and cookie
            consent details that ecommerce stores need.
          </p>
        </div>

        <div className="mt-10">
          <Link
            href="/"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg text-lg hover:opacity-90 transition-opacity"
          >
            Generate Your Ecommerce Privacy Policy
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
