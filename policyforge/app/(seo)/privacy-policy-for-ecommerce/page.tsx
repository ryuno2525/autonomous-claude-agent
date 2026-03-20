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
            Every ecommerce store collects personal data from customers during
            the ordinary course of business. Names, email addresses, shipping
            addresses, phone numbers, billing details, and browsing behavior are
            all captured the moment someone places an order or even just browses
            your catalog. Privacy laws around the world now require online
            retailers to publish a clear, accurate privacy policy that explains
            exactly what data is collected, why it is collected, how it is
            stored, who it is shared with, and what rights customers have over
            their information.
          </p>

          <p>
            Operating an ecommerce site without a privacy policy is not just a
            legal risk. Payment processors like Stripe and PayPal require
            merchants to maintain a published privacy policy as a condition of
            service. Platforms such as Shopify, WooCommerce, BigCommerce, and
            Squarespace include privacy policy requirements in their terms.
            Advertising networks like Google Ads and Meta will reject or suspend
            accounts that direct traffic to sites without adequate privacy
            disclosures. And increasingly, customers simply leave stores that
            lack visible privacy commitments.
          </p>
        </div>

        {/* Section: What Ecommerce Sites Must Disclose */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            What Ecommerce Sites Must Disclose in a Privacy Policy
          </h2>
          <div className="space-y-4 text-gray-400 leading-relaxed">
            <p>
              Ecommerce stores handle far more categories of personal data than
              a typical blog or informational website. Your privacy policy must
              address each type of data your store touches, even if that data is
              processed by a third party on your behalf.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-2">
              Customer Identity and Contact Information
            </h3>
            <p>
              At a minimum, every order captures the customer&apos;s name, email
              address, and shipping address. Many stores also collect phone
              numbers for delivery notifications, billing addresses for fraud
              verification, and account registration details if you offer user
              accounts. Your privacy policy must state that you collect this
              information, explain that it is necessary to fulfill orders and
              provide customer support, and describe how long you retain it after
              the transaction is complete.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-2">
              Order and Transaction History
            </h3>
            <p>
              Transaction records, including items purchased, order dates,
              amounts paid, discount codes used, and refund history, are personal
              data under most privacy frameworks. You should disclose that you
              maintain order history, explain that it is retained for accounting,
              tax compliance, and dispute resolution purposes, and note the
              retention period. Many jurisdictions require businesses to keep
              financial records for a set number of years (often six to seven
              years for tax purposes), and your privacy policy should reflect
              this.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-2">
              Behavioral and Browsing Data
            </h3>
            <p>
              Most ecommerce stores track browsing behavior through analytics
              tools, heatmaps, and session recordings. Products viewed, search
              queries entered, pages visited, time spent on site, abandoned cart
              contents, and click patterns are all personal data when linked to
              an identifiable user. If you use Google Analytics, Hotjar,
              Mixpanel, or any similar service, your privacy policy must disclose
              this tracking and explain its purpose, whether that is improving
              user experience, personalizing product recommendations, or
              measuring advertising effectiveness.
            </p>
          </div>
        </div>

        {/* Section: Payment Data Handling */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            Payment Data Handling: Stripe, PayPal, and PCI Compliance
          </h2>
          <div className="space-y-4 text-gray-400 leading-relaxed">
            <p>
              Payment data requires special treatment in your privacy policy
              because it is both highly sensitive and heavily regulated. The
              Payment Card Industry Data Security Standard (PCI DSS) governs how
              credit card data must be handled, and violations can result in
              fines of $5,000 to $100,000 per month.
            </p>
            <p>
              Most modern ecommerce stores do not directly handle raw credit
              card numbers. Instead, they use payment processors like Stripe,
              PayPal, Square, or Braintree, which tokenize card data so that
              your servers never see the full card number. Your privacy policy
              should clearly explain this arrangement. Customers need to know
              that while they enter their payment details on your site (or in a
              hosted checkout form), the actual card data is transmitted directly
              to the payment processor and is never stored on your servers.
            </p>
            <p>
              You should name the payment processors you use and link to their
              respective privacy policies. For example, if you use Stripe
              Checkout, you should state that payment processing is handled by
              Stripe, Inc. and link to{" "}
              <span className="text-gray-300">stripe.com/privacy</span>. If
              you also accept PayPal, disclose that as well. This transparency
              builds trust and satisfies disclosure requirements under the GDPR
              (which requires naming data processors) and the CCPA (which
              requires disclosing categories of third parties that receive
              personal information).
            </p>
            <p>
              Even though you do not store raw card numbers, you likely do store
              certain payment-related information: the last four digits of the
              card, the card brand (Visa, Mastercard), the billing address, and
              the transaction amount. Your privacy policy should acknowledge the
              retention of this partial payment data and explain that it is used
              for order confirmation, refund processing, and fraud prevention.
            </p>
          </div>
        </div>

        {/* Section: Cookie Requirements */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            Cookie and Tracking Requirements for Online Stores
          </h2>
          <div className="space-y-4 text-gray-400 leading-relaxed">
            <p>
              Ecommerce stores typically use more cookies and tracking
              technologies than other types of websites. Understanding and
              disclosing each category is essential for compliance.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-2">
              Essential Cookies
            </h3>
            <p>
              These are cookies that your store cannot function without.
              Shopping cart session cookies, authentication cookies for logged-in
              users, CSRF protection tokens, and currency or language preference
              cookies all fall into this category. Under most cookie laws,
              including the EU ePrivacy Directive, essential cookies do not
              require consent, but they still must be disclosed in your privacy
              or cookie policy.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-2">
              Analytics Cookies
            </h3>
            <p>
              Google Analytics, Plausible, Fathom, and similar tools set cookies
              to track visitor sessions, page views, and conversion funnels.
              Under EU law, analytics cookies generally require explicit consent
              before being set. Your privacy policy should list each analytics
              tool, explain what data it collects, and state the cookie
              expiration periods. Google Analytics cookies, for instance,
              typically persist for up to two years.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-2">
              Marketing and Retargeting Cookies
            </h3>
            <p>
              If you run Facebook Ads, Google Ads, TikTok Ads, or any
              retargeting campaigns, those advertising platforms place cookies on
              your visitors&apos; browsers to build audience segments and track
              conversions. The Meta Pixel, Google Ads conversion tag, and
              similar scripts are the most common. These always require consent
              in the EU, and under the CCPA, the data sharing they enable may
              constitute a &ldquo;sale&rdquo; of personal information that
              consumers must be able to opt out of. Your policy must address
              each marketing platform by name and explain how customers can
              disable these cookies.
            </p>
          </div>
        </div>

        {/* Section: GDPR for Ecommerce */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            GDPR Compliance for Ecommerce Stores
          </h2>
          <div className="space-y-4 text-gray-400 leading-relaxed">
            <p>
              The General Data Protection Regulation applies to any ecommerce
              store that sells to customers in the European Economic Area,
              regardless of where the business is located. If you ship to EU
              countries, accept euros, or target EU customers through localized
              marketing, the GDPR applies to you.
            </p>
            <p>
              GDPR requires ecommerce stores to identify a lawful basis for
              each type of data processing. For order fulfillment, the lawful
              basis is typically &ldquo;performance of a contract&rdquo; since
              you need the customer&apos;s data to deliver their purchase. For
              marketing emails, the lawful basis is usually &ldquo;consent,&rdquo;
              meaning you need an explicit opt-in (not a pre-checked box). For
              fraud prevention and accounting, &ldquo;legitimate interest&rdquo;
              or &ldquo;legal obligation&rdquo; may apply.
            </p>
            <p>
              Your privacy policy must also enumerate the data rights available
              to EU customers: the right to access their data, the right to
              rectification, the right to erasure (&ldquo;right to be
              forgotten&rdquo;), the right to restrict processing, the right to
              data portability, and the right to object to processing. You need
              to provide a clear mechanism for customers to exercise these
              rights, typically a dedicated email address or a request form.
            </p>
            <p>
              Fines for GDPR non-compliance can reach 4% of annual global
              turnover or 20 million euros, whichever is greater. For smaller
              ecommerce businesses, regulators have imposed fines ranging from a
              few thousand euros to several hundred thousand euros for
              violations like sending marketing emails without consent, failing
              to disclose third-party data sharing, or not responding to data
              access requests within the required 30-day window.
            </p>
          </div>
        </div>

        {/* Section: CCPA for Ecommerce */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            CCPA and CPRA Compliance for Online Retailers
          </h2>
          <div className="space-y-4 text-gray-400 leading-relaxed">
            <p>
              The California Consumer Privacy Act, as amended by the California
              Privacy Rights Act (CPRA), applies to for-profit businesses that
              meet any of these thresholds: annual gross revenue over $25
              million, buying or selling the personal information of 100,000 or
              more California residents, or deriving 50% or more of revenue
              from selling or sharing personal information. Even if you do not
              meet these thresholds today, implementing CCPA-compliant
              practices early protects you as your store grows and signals
              trustworthiness to California customers.
            </p>
            <p>
              Under the CCPA, ecommerce stores must disclose the categories of
              personal information collected (identifiers, commercial
              information, internet activity, geolocation data), the business
              purposes for collection, and the categories of third parties with
              whom information is shared. If your use of advertising pixels or
              data analytics platforms constitutes a &ldquo;sale&rdquo; or
              &ldquo;sharing&rdquo; of personal information under the CCPA,
              you must provide a &ldquo;Do Not Sell or Share My Personal
              Information&rdquo; link on your website.
            </p>
            <p>
              California consumers have the right to know what data you have
              collected about them, the right to delete that data, the right to
              opt out of the sale or sharing of their data, and the right to
              non-discrimination for exercising their privacy rights. Your
              privacy policy must describe each of these rights and explain how
              customers can submit requests, including at least two methods of
              contact (such as email and a web form).
            </p>
          </div>
        </div>

        {/* Checklist Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            What Your Ecommerce Privacy Policy Must Include
          </h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Use this checklist to audit your current privacy policy or as a
            guide when generating a new one. Every ecommerce privacy policy
            should cover the following items:
          </p>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 mt-1 shrink-0">&#10003;</span>
              <span>
                <strong className="text-white">Business identity and contact details</strong>{" "}
                &mdash; Your legal business name, registered address, and a
                dedicated privacy contact email address.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 mt-1 shrink-0">&#10003;</span>
              <span>
                <strong className="text-white">Categories of personal data collected</strong>{" "}
                &mdash; Identity data, contact data, financial data, transaction
                data, technical data (IP address, browser type), usage data, and
                marketing preferences.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 mt-1 shrink-0">&#10003;</span>
              <span>
                <strong className="text-white">Purpose of data collection</strong>{" "}
                &mdash; Order processing, account management, customer support,
                fraud detection, marketing, analytics, and legal compliance.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 mt-1 shrink-0">&#10003;</span>
              <span>
                <strong className="text-white">Lawful basis for processing (GDPR)</strong>{" "}
                &mdash; Consent, contract performance, legal obligation, or
                legitimate interest for each processing activity.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 mt-1 shrink-0">&#10003;</span>
              <span>
                <strong className="text-white">Third-party service providers</strong>{" "}
                &mdash; Name every processor: payment gateway, shipping carrier,
                email marketing platform, analytics tool, and advertising
                network. Link to their privacy policies.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 mt-1 shrink-0">&#10003;</span>
              <span>
                <strong className="text-white">Cookie and tracking disclosure</strong>{" "}
                &mdash; List all cookies by category (essential, analytics,
                marketing), their purpose, and expiration period.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 mt-1 shrink-0">&#10003;</span>
              <span>
                <strong className="text-white">Data retention periods</strong>{" "}
                &mdash; How long you keep customer data, order records, and
                analytics data. Specify different retention periods for
                different data types.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 mt-1 shrink-0">&#10003;</span>
              <span>
                <strong className="text-white">International data transfers</strong>{" "}
                &mdash; If data is transferred outside the EEA, disclose the
                destination countries and the safeguards in place (Standard
                Contractual Clauses, adequacy decisions).
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 mt-1 shrink-0">&#10003;</span>
              <span>
                <strong className="text-white">Consumer rights</strong>{" "}
                &mdash; Access, rectification, erasure, portability, objection,
                and the right to withdraw consent. Include CCPA-specific rights
                if you serve California customers.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 mt-1 shrink-0">&#10003;</span>
              <span>
                <strong className="text-white">Children&apos;s privacy</strong>{" "}
                &mdash; State whether your store is intended for users under 13
                (COPPA) or under 16 (GDPR) and what measures you take.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 mt-1 shrink-0">&#10003;</span>
              <span>
                <strong className="text-white">Policy update procedures</strong>{" "}
                &mdash; How you will notify customers of changes to the privacy
                policy and the effective date of the current version.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 mt-1 shrink-0">&#10003;</span>
              <span>
                <strong className="text-white">&ldquo;Do Not Sell&rdquo; opt-out mechanism</strong>{" "}
                &mdash; Required under the CCPA if you share data with
                advertising or analytics third parties.
              </span>
            </li>
          </ul>

          <p className="text-gray-400 mt-6 leading-relaxed">
            Not sure if your current policy covers everything? Use our{" "}
            <Link href="/check" className="text-cyan-400 hover:text-cyan-300 underline">
              free compliance checker
            </Link>{" "}
            to scan your existing privacy policy and identify gaps.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            Frequently Asked Questions: Ecommerce Privacy Policies
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Do I need a privacy policy if I only sell through Shopify or Etsy?
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Yes. While platforms like Shopify and Etsy have their own
                platform-level privacy policies, those only cover the
                platform&apos;s handling of data. As a merchant, you are an
                independent data controller responsible for your own data
                practices. Shopify&apos;s merchant terms explicitly require you
                to maintain your own privacy policy. Etsy&apos;s seller policy
                requires the same. Additionally, if you use any third-party
                apps, custom analytics, or email marketing integrations, those
                data flows are your responsibility to disclose.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Do I need to list every third-party service by name?
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Under the GDPR, you are required to disclose specific
                third-party processors, not just vague categories. Saying
                &ldquo;we share data with payment processors&rdquo; is
                insufficient. You should name Stripe, PayPal, or whichever
                provider you use and link to their privacy policy. The CCPA is
                slightly less prescriptive, requiring disclosure of categories
                of third parties rather than specific names, but naming them
                explicitly is considered best practice and builds consumer
                trust.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Does using Google Analytics on my store require cookie consent?
              </h3>
              <p className="text-gray-400 leading-relaxed">
                In the European Union, yes. The ePrivacy Directive (often
                called the &ldquo;Cookie Law&rdquo;) requires explicit,
                informed consent before setting non-essential cookies, and
                Google Analytics cookies are classified as non-essential. You
                need a cookie consent banner that allows EU visitors to accept
                or reject analytics cookies before they are loaded. Google
                Analytics 4 offers a consent mode that can operate with reduced
                functionality when consent is denied, but you still need the
                consent mechanism in place. In the United States, cookie consent
                is not yet universally required, but California&apos;s CCPA may
                classify the data collected as a &ldquo;sale&rdquo; if it is
                shared with Google for advertising purposes.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                How often should I update my ecommerce privacy policy?
              </h3>
              <p className="text-gray-400 leading-relaxed">
                You should review and update your privacy policy whenever you
                add a new third-party integration (a new email marketing tool,
                a new analytics platform, a new payment method), when you expand
                into a new geographic market (selling to the EU for the first
                time, for example), when privacy regulations change, or at
                minimum once per year. Each update should include a new
                &ldquo;Last Updated&rdquo; date, and significant changes
                should be communicated to existing customers, typically via
                email or a prominent site banner.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Do I also need a terms of service for my online store?
              </h3>
              <p className="text-gray-400 leading-relaxed">
                A privacy policy and terms of service serve different purposes.
                Your privacy policy governs how you handle personal data. Your
                terms of service (or terms and conditions) govern the
                contractual relationship between your store and your customers,
                covering topics like order acceptance, returns and refunds,
                intellectual property, limitation of liability, and dispute
                resolution. Most ecommerce stores need both documents. You can{" "}
                <Link href="/tos" className="text-cyan-400 hover:text-cyan-300 underline">
                  generate a terms of service
                </Link>{" "}
                alongside your privacy policy using PolicyForge.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-14 p-8 rounded-xl bg-white/5 border border-white/10 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Generate Your Ecommerce Privacy Policy in Minutes
          </h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto leading-relaxed">
            PolicyForge creates a comprehensive, legally-structured privacy
            policy tailored to your online store. Select your data collection
            practices, name your third-party services, choose your
            jurisdictions, and download a ready-to-publish document. The Pro
            plan includes full GDPR rights sections, CCPA disclosures, data
            retention clauses, and cookie policy details.
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg text-lg hover:opacity-90 transition-opacity"
          >
            Generate Your Ecommerce Privacy Policy
          </Link>
          <p className="text-gray-500 text-sm mt-4">
            Already have a privacy policy?{" "}
            <Link href="/check" className="text-cyan-400 hover:text-cyan-300 underline">
              Check it for compliance issues
            </Link>
          </p>
          {/* AccessScore Cross-Link */}
          <div className="mt-12 p-6 bg-orange-500/5 border border-orange-500/20 rounded-xl">
            <h3 className="text-lg font-bold text-white mb-2">Privacy Sorted? Check Your Store&apos;s Accessibility.</h3>
            <p className="text-sm text-gray-400 mb-3">
              E-commerce sites face growing ADA accessibility lawsuits — over 4,000 filed annually in the US alone. Ensure your online store is accessible to all customers. Scan for WCAG issues with AccessScore.
            </p>
            <a
              href="https://accessscore.autonomous-claude.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 text-sm font-medium"
            >
              Check your store&apos;s accessibility &rarr;
            </a>
          </div>
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
