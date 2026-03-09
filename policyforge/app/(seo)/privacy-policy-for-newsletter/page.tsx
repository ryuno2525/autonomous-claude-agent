import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy for Email Newsletters | Free Generator - PolicyForge",
  description:
    "Generate a free privacy policy for your email newsletter. Covers GDPR consent, CAN-SPAM compliance, subscriber data collection, ESP disclosure (Mailchimp, ConvertKit, Beehiiv, Substack), and unsubscribe requirements.",
  keywords:
    "newsletter privacy policy, email newsletter GDPR, privacy policy for newsletter, email list privacy policy, CAN-SPAM privacy policy, newsletter GDPR compliance, Substack privacy policy, Beehiiv privacy policy, Mailchimp privacy policy, ConvertKit privacy policy, email subscriber data protection, double opt-in GDPR, newsletter unsubscribe policy",
};

export default function PrivacyPolicyForNewsletter() {
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
          Privacy Policy for Email Newsletters
        </h1>

        <p className="text-gray-400 text-lg mb-8">
          Every email newsletter collects personal data &mdash; at minimum, an
          email address. Under GDPR, CAN-SPAM, and CCPA, that makes you a data
          controller with legal obligations. Whether you run a Substack, a
          Beehiiv publication, or a custom Mailchimp list, you need a privacy
          policy that covers how you collect, store, and use subscriber data.
        </p>

        <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-blue-800/40 rounded-xl p-6 mb-10">
          <h3 className="text-lg font-semibold text-white mb-2">
            Generate Your Newsletter Privacy Policy in 2 Minutes
          </h3>
          <p className="text-gray-300 text-sm mb-4">
            PolicyForge creates customized privacy policies for email
            newsletters. Covers subscriber consent, ESP disclosure, tracking
            pixels, and full GDPR/CAN-SPAM/CCPA compliance.
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
              Check Your Compliance
            </Link>
          </div>
        </div>

        <div className="space-y-10 text-gray-300 leading-relaxed text-[17px]">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Why Email Newsletters Need a Privacy Policy
            </h2>
            <p className="mb-4">
              The moment someone enters their email address into your signup
              form, you are collecting personal data. Under the GDPR, an email
              address is personally identifiable information (PII), and you
              become a data controller with specific legal obligations. This
              applies regardless of whether you have one subscriber or one
              million.
            </p>
            <p className="mb-4">
              Most newsletter creators assume privacy policies are only for
              large companies or e-commerce stores. This is incorrect. The
              GDPR applies to anyone processing EU residents&apos; personal
              data, regardless of where you are based. The CAN-SPAM Act
              applies to all commercial email sent to US recipients. The CCPA
              applies if you have subscribers in California and meet certain
              revenue or data thresholds.
            </p>
            <p className="mb-4">
              Beyond legal compliance, a privacy policy builds trust with
              subscribers. In an era of data breaches and spam, people want to
              know what happens to their email address after they hand it over.
              Newsletter creators who are transparent about data practices see
              higher signup rates and lower unsubscribe rates.
            </p>
            <p>
              GDPR fines can reach &euro;20 million or 4% of global annual
              revenue. CAN-SPAM violations carry penalties of up to $51,744
              per email. Even individual newsletter creators can be held
              liable. A proper privacy policy is not optional &mdash; it is
              a legal requirement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              What Your Newsletter Privacy Policy Must Include
            </h2>
            <p className="mb-4">
              A newsletter privacy policy has different requirements than a
              standard website privacy policy. Here are the critical sections
              every newsletter creator must address:
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">
              1. Data Collection Methods
            </h3>
            <p className="mb-4">
              Clearly state how you collect subscriber data. This includes
              signup forms on your website, pop-ups, landing pages, lead
              magnets, giveaways, social media links, and any third-party
              integrations. If you collect more than just an email address
              &mdash; such as first name, location, company, or interests
              &mdash; each data point must be disclosed. Under GDPR Article
              13, you must inform subscribers at the point of collection what
              data you gather and why.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">
              2. Email Service Provider (ESP) Disclosure
            </h3>
            <p className="mb-4">
              Your subscribers&apos; data doesn&apos;t stay on your computer.
              It is sent to and stored by your email service provider. Under
              GDPR, your ESP is a data processor, and you must disclose this
              relationship. Name your ESP explicitly &mdash; whether it is
              Mailchimp, ConvertKit, Beehiiv, Substack, ActiveCampaign,
              Buttondown, or any other platform. Link to their privacy
              policy so subscribers can understand how their data is handled
              downstream. If your ESP stores data outside the EU (most US-based
              ESPs do), you must disclose the cross-border data transfer and
              the safeguards in place.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">
              3. Tracking Pixels and Analytics
            </h3>
            <p className="mb-4">
              Nearly every email platform embeds invisible tracking pixels in
              your emails to measure open rates. They also track link clicks,
              device type, geographic location, and reading time. This is data
              collection that most subscribers are unaware of. Your privacy
              policy must disclose that you use email tracking, what data is
              collected through it, and how that data is used. Under GDPR,
              tracking pixels may require explicit consent in some
              jurisdictions because they go beyond what is strictly necessary
              to deliver the email.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">
              4. Legal Basis for Processing (GDPR)
            </h3>
            <p className="mb-4">
              GDPR requires you to have a lawful basis for processing personal
              data. For newsletters, the two most common bases are consent
              (Article 6(1)(a)) and legitimate interest (Article 6(1)(f)).
              Consent is the strongest basis &mdash; if a subscriber actively
              opted in to receive your newsletter, you have clear consent.
              Legitimate interest is weaker and requires a balancing test. Your
              privacy policy must state which legal basis you rely on. If you
              rely on consent, you must also explain how subscribers can
              withdraw that consent at any time.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">
              5. Subscriber Rights
            </h3>
            <p className="mb-4">
              Under GDPR, subscribers have the right to access their data,
              request correction, request deletion, object to processing,
              request data portability, and withdraw consent. Under CCPA,
              California residents have the right to know what personal
              information is collected, request deletion, and opt out of
              the sale of their data. Your privacy policy must list these
              rights and provide a clear method for subscribers to exercise
              them &mdash; typically an email address or contact form.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">
              6. Data Retention
            </h3>
            <p>
              How long do you keep subscriber data after they unsubscribe?
              Many ESPs retain unsubscribed contacts indefinitely by default.
              GDPR requires that you define and disclose a retention period.
              Best practice is to delete or anonymize unsubscribed contacts
              within 30 to 90 days. Your privacy policy must state your
              retention period and the criteria used to determine it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Double Opt-In vs Single Opt-In
            </h2>
            <p className="mb-4">
              This is one of the most debated topics in email marketing
              compliance. Single opt-in means a subscriber enters their email
              and is immediately added to your list. Double opt-in requires
              them to click a confirmation link in a verification email before
              being added.
            </p>
            <p className="mb-4">
              Under GDPR, double opt-in is not strictly required, but it is
              strongly recommended because it provides verifiable proof of
              consent. If a regulator asks you to demonstrate that a
              subscriber consented to receive your emails, a double opt-in
              confirmation is much stronger evidence than a single form
              submission. Germany&apos;s data protection authorities
              effectively require double opt-in as the standard.
            </p>
            <p>
              CAN-SPAM does not require any form of opt-in &mdash; it only
              requires that you honor unsubscribe requests within 10 business
              days. However, best practice (and GDPR compliance) means using
              double opt-in. Your privacy policy should state which method you
              use and explain the confirmation process to subscribers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              CAN-SPAM, GDPR, and CCPA: Key Requirements
            </h2>

            <div className="bg-gray-900/50 rounded-xl p-6 mb-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                Regulation Comparison for Newsletters
              </h3>
              <div className="space-y-4 text-sm">
                <div className="flex gap-4">
                  <span className="text-blue-400 font-semibold w-36 flex-shrink-0">CAN-SPAM (US)</span>
                  <span>Must include physical mailing address, clear &quot;From&quot; line, honest subject lines, and working unsubscribe mechanism. Unsubscribe must be processed within 10 business days. Penalties up to $51,744 per violation.</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-blue-400 font-semibold w-36 flex-shrink-0">GDPR (EU/EEA)</span>
                  <span>Requires lawful basis (consent or legitimate interest), transparent disclosure of data processing, subscriber rights (access, deletion, portability), data processor agreements with ESPs, and cross-border transfer safeguards. Fines up to &euro;20M or 4% global revenue.</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-blue-400 font-semibold w-36 flex-shrink-0">CCPA/CPRA (CA)</span>
                  <span>Right to know what data is collected, right to delete, right to opt out of data sale/sharing. Applies to businesses meeting revenue or data volume thresholds. Does not require opt-in consent for email, but requires disclosure in privacy policy.</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-blue-400 font-semibold w-36 flex-shrink-0">CASL (Canada)</span>
                  <span>Requires express consent before sending commercial emails. Implied consent lasts only 2 years from last transaction. Must include sender identification, contact info, and unsubscribe mechanism. Fines up to CAD $10M per violation.</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-blue-400 font-semibold w-36 flex-shrink-0">PECR (UK)</span>
                  <span>Post-Brexit UK equivalent of ePrivacy. Requires consent for marketing emails unless &quot;soft opt-in&quot; applies (existing customer relationship). Works alongside UK GDPR for comprehensive email marketing compliance.</span>
                </div>
              </div>
            </div>

            <p>
              If your newsletter has a global audience &mdash; and most do
              &mdash; you need to comply with all of these simultaneously.
              The safest approach is to follow the strictest standard (GDPR)
              as your baseline and layer on jurisdiction-specific
              requirements. Your privacy policy should reference all
              applicable regulations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Unsubscribe Requirements
            </h2>
            <p className="mb-4">
              Every newsletter privacy policy must clearly explain how
              subscribers can opt out. This is not optional under any
              regulation. CAN-SPAM requires a visible unsubscribe link in
              every email, processed within 10 business days. GDPR requires
              that withdrawing consent is as easy as giving it &mdash;
              meaning a one-click unsubscribe, not a multi-step process.
            </p>
            <p className="mb-4">
              Google and Yahoo&apos;s 2024 sender requirements now mandate
              one-click unsubscribe headers (RFC 8058) for bulk senders.
              If you send more than 5,000 emails per day, you must support
              the List-Unsubscribe-Post header. Most major ESPs handle this
              automatically, but your privacy policy should still describe
              the unsubscribe process and confirm that it is honored
              promptly.
            </p>
            <p>
              Your privacy policy should also address what happens after
              unsubscribing. Is the subscriber&apos;s data deleted entirely,
              or is it retained in a suppression list to prevent
              re-subscription? Both approaches have GDPR implications, and
              your policy must be transparent about which you use.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Newsletter Platform-Specific Requirements
            </h2>
            <p className="mb-4">
              Each email platform handles subscriber data differently. Your
              privacy policy should reflect the specific platform you use:
            </p>
            <div className="space-y-4">
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-1">Substack</h4>
                <p className="text-sm text-gray-400">Substack acts as both publisher and ESP. Subscriber data is stored on Substack&apos;s servers in the US. Substack has its own privacy policy, but you are still responsible for disclosing the data relationship. Substack tracks opens, clicks, and subscriber engagement. If you offer paid subscriptions, Stripe processes payment data &mdash; another third party to disclose.</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-1">Beehiiv</h4>
                <p className="text-sm text-gray-400">Beehiiv provides detailed analytics including open rates, click rates, and subscriber segmentation. Their ad network (Beehiiv Boost) may share subscriber data with advertisers if enabled. Your privacy policy must disclose whether you participate in Boost and what data is shared. Beehiiv stores data in the US.</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-1">ConvertKit (Kit)</h4>
                <p className="text-sm text-gray-400">ConvertKit collects subscriber email, name, tags, and custom fields. It tracks email opens, link clicks, and purchase history. ConvertKit offers GDPR-compliant consent forms with checkbox opt-in. Data is stored in the US. ConvertKit also provides subscriber scoring and automation data that should be disclosed.</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-1">Mailchimp</h4>
                <p className="text-sm text-gray-400">Mailchimp (Intuit) collects extensive subscriber data including email, name, location (via IP), device, and engagement history. Mailchimp&apos;s tracking is on by default. They offer GDPR-specific signup form fields and a data processing addendum. Mailchimp may use subscriber data for their own analytics &mdash; disclose this in your policy.</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-1">ActiveCampaign</h4>
                <p className="text-sm text-gray-400">ActiveCampaign combines email with CRM and marketing automation. It tracks website visits, email engagement, and lead scoring. If you use site tracking or event tracking, additional personal data is collected beyond email. Disclose all ActiveCampaign features you use in your privacy policy.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Newsletter Privacy Policy Checklist
            </h2>
            <div className="bg-gray-900/50 rounded-xl p-6">
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                {[
                  "Disclose all data collected at signup",
                  "Name your email service provider (ESP)",
                  "Link to your ESP\u2019s privacy policy",
                  "Explain tracking pixels and analytics",
                  "State your GDPR legal basis (consent)",
                  "Describe double or single opt-in process",
                  "List subscriber rights (GDPR/CCPA)",
                  "Include CAN-SPAM physical address",
                  "Explain unsubscribe process clearly",
                  "Define data retention after unsubscribe",
                  "Disclose cross-border data transfers",
                  "Address cookie use on signup pages",
                  "Cover third-party ad networks if used",
                  "Provide contact info for privacy inquiries",
                  "Disclose any subscriber data sharing",
                  "Address payment data if paid newsletter",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">&#x2713;</span>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Common Privacy Policy Mistakes Newsletter Creators Make
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-white">Not having a privacy policy at all</h4>
                <p className="text-sm text-gray-400">Many solo newsletter creators assume they don&apos;t need one because they&apos;re not a &quot;real business.&quot; GDPR applies to anyone processing personal data, including individual creators. If you collect email addresses, you need a privacy policy.</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-white">Using a generic website privacy policy</h4>
                <p className="text-sm text-gray-400">Standard privacy policies don&apos;t cover email tracking pixels, ESP data processing agreements, CAN-SPAM requirements, or opt-in consent mechanisms. Newsletter data flows are specific and must be addressed specifically.</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-white">Not disclosing tracking and analytics</h4>
                <p className="text-sm text-gray-400">Every major ESP tracks opens and clicks by default. If you don&apos;t disclose this, you are processing personal data without transparency &mdash; a direct GDPR violation. Most subscribers don&apos;t know they&apos;re being tracked.</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-white">Relying on your ESP&apos;s privacy policy instead of your own</h4>
                <p className="text-sm text-gray-400">Your ESP&apos;s privacy policy covers their relationship with you, not your relationship with your subscribers. You are the data controller. You need your own policy that names the ESP as a data processor.</p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-800/30 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-4 text-center">
              Generate Your Newsletter Privacy Policy Now
            </h2>
            <p className="text-gray-300 text-center mb-6">
              PolicyForge generates customized privacy policies for email
              newsletters. Covers subscriber consent, ESP disclosure, email
              tracking, CAN-SPAM compliance, and full GDPR/CCPA readiness.
              Done in under 2 minutes.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/"
                className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-8 rounded-lg transition"
              >
                Generate Free Policy
              </Link>
              <Link
                href="/check"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-lg transition"
              >
                Check Your Compliance
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Do I need a privacy policy for a free newsletter?
                </h3>
                <p>
                  Yes. Whether your newsletter is free or paid makes no
                  difference. If you collect email addresses, you are
                  processing personal data and need a privacy policy under
                  GDPR, CAN-SPAM, and CCPA. Even a hobby newsletter with a
                  handful of subscribers is subject to these regulations.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Where should I display my newsletter privacy policy?
                </h3>
                <p>
                  Link to your privacy policy directly on or near your email
                  signup form. GDPR requires that subscribers can access the
                  policy before providing their data. Best practice is to
                  include a short notice like &quot;By subscribing, you agree
                  to our{" "}
                  <Link href="/privacy-policy-for-small-business" className="text-blue-400 hover:underline">
                    Privacy Policy
                  </Link>
                  &quot; with a link, plus a link in the footer of every
                  email you send.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Does Substack provide a privacy policy for my newsletter?
                </h3>
                <p>
                  Substack has its own platform privacy policy, but this
                  covers Substack&apos;s data practices, not yours. As the
                  newsletter publisher, you are the data controller and need
                  your own privacy policy that explains what you do with
                  subscriber data, why you collect it, and how subscribers
                  can exercise their rights.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Can I use the same privacy policy for my website and
                  newsletter?
                </h3>
                <p>
                  You can have one combined privacy policy, but it must
                  include newsletter-specific sections covering email
                  collection, ESP disclosure, tracking pixels, and
                  unsubscribe procedures. A generic{" "}
                  <Link href="/privacy-policy-for-saas" className="text-blue-400 hover:underline">
                    website privacy policy
                  </Link>{" "}
                  without these sections is insufficient for newsletter
                  compliance.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Do I need to include a physical address in my newsletter?
                </h3>
                <p>
                  Yes, under CAN-SPAM. Every commercial email must include a
                  valid physical postal address. This can be a street address,
                  a PO Box registered with the US Postal Service, or a private
                  mailbox registered with a commercial mail receiving agency.
                  Many solo creators use a PO Box or virtual mailbox service
                  for this purpose.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Related Resources
            </h2>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <Link
                href="/gdpr-privacy-policy-generator"
                className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800/70 transition block"
              >
                <span className="text-blue-400 font-semibold">GDPR Privacy Policy Generator</span>
                <p className="text-gray-400 mt-1">Full GDPR-compliant privacy policy for any website or service.</p>
              </Link>
              <Link
                href="/ccpa-privacy-policy-generator"
                className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800/70 transition block"
              >
                <span className="text-blue-400 font-semibold">CCPA Privacy Policy Generator</span>
                <p className="text-gray-400 mt-1">California Consumer Privacy Act compliant policies.</p>
              </Link>
              <Link
                href="/privacy-policy-for-small-business"
                className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800/70 transition block"
              >
                <span className="text-blue-400 font-semibold">Privacy Policy for Small Business</span>
                <p className="text-gray-400 mt-1">Tailored policies for small businesses and solo creators.</p>
              </Link>
              <Link
                href="/cookie-policy-generator"
                className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800/70 transition block"
              >
                <span className="text-blue-400 font-semibold">Cookie Policy Generator</span>
                <p className="text-gray-400 mt-1">If your signup pages use cookies, you may need this too.</p>
              </Link>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-500">
          <p>
            PolicyForge helps newsletter creators build compliant privacy
            policies.
            <br />
            <Link href="/" className="text-blue-400 hover:underline">
              Generate a privacy policy
            </Link>
            {" | "}
            <Link href="/check" className="text-blue-400 hover:underline">
              Check your compliance
            </Link>
            {" | "}
            <Link href="/tos" className="text-blue-400 hover:underline">
              Generate terms of service
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
