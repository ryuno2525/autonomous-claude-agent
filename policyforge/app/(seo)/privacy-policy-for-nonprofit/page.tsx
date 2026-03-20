import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Privacy Policy for Nonprofit | Free Generator & Template - PolicyForge",
  description:
    "Create a legally compliant privacy policy for your nonprofit, charity, or church. Covers donor data, volunteer information, CRM systems, fundraising platforms, GDPR, CCPA, and nonprofit-specific compliance requirements.",
  keywords:
    "privacy policy for nonprofit, nonprofit privacy policy template, charity privacy policy, church privacy policy, donor data privacy, nonprofit GDPR compliance, 501c3 privacy policy, fundraising privacy policy, volunteer data privacy, nonprofit data protection",
  openGraph: {
    title: "Free Privacy Policy for Nonprofits & Charities - PolicyForge",
    description:
      "Generate a GDPR & CCPA compliant privacy policy for your nonprofit organization. Covers donor data, volunteer information, and fundraising platform compliance.",
    type: "website",
  },
};

export default function PrivacyPolicyForNonprofit() {
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
          Privacy Policy for Your Nonprofit Organization
        </h1>

        <p className="text-gray-400 text-lg mb-8">
          Nonprofits, charities, churches, and other tax-exempt organizations
          collect some of the most sensitive personal data of any sector: donor
          financial information, volunteer records, beneficiary details, and
          membership data. Under GDPR, CCPA, and various state privacy laws,
          nonprofits are held to the same data protection standards as
          for-profit businesses. A 501(c)(3) tax exemption does not exempt you
          from privacy law compliance.
        </p>

        <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-blue-800/40 rounded-xl p-6 mb-10">
          <h3 className="text-lg font-semibold text-white mb-2">
            Generate Your Nonprofit Privacy Policy in 2 Minutes
          </h3>
          <p className="text-gray-300 text-sm mb-4">
            PolicyForge creates customized privacy policies for nonprofits and
            charities. Covers donor data, volunteer records, fundraising
            platforms, CRM systems, and full GDPR/CCPA compliance &mdash; all
            for $4.99 instead of $500+ for a lawyer.
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
              Why Nonprofits Need a Privacy Policy
            </h2>
            <p className="mb-4">
              Many nonprofit leaders assume privacy laws only apply to
              for-profit businesses. This is incorrect. The GDPR does not
              distinguish between for-profit and nonprofit entities. If you
              collect personal data from EU residents &mdash; even if they are
              donors or volunteers &mdash; GDPR applies in full. The CCPA
              applies to organizations meeting revenue or data-volume thresholds,
              and many larger nonprofits exceed these. State-level privacy laws
              in Virginia, Colorado, Connecticut, and others also apply to
              nonprofits in various capacities.
            </p>
            <p className="mb-4">
              Beyond regulatory requirements, donors increasingly expect
              transparency about how their data is used. A 2024 study found that
              72% of donors say they are more likely to give to organizations
              that clearly communicate data practices. Trust is the foundation of
              nonprofit fundraising, and a visible privacy policy signals that
              your organization takes data stewardship seriously.
            </p>
            <p className="mb-4">
              Practically, most fundraising platforms (GoFundMe Charity, Network
              for Good, Bloomerang, DonorPerfect, Classy) require organizations
              to have a privacy policy. Payment processors like Stripe and PayPal
              require a visible privacy policy before processing donations. Email
              marketing platforms (Mailchimp, Constant Contact) require consent
              documentation. Without a privacy policy, you risk losing access to
              the tools your organization depends on for fundraising.
            </p>
            <p>
              GDPR fines can reach &euro;20 million regardless of organization
              type. In 2023, a European charity was fined &euro;400,000 for GDPR
              violations related to donor data. The reputational damage to a
              nonprofit from a data breach or privacy violation can be far more
              costly than the fine itself &mdash; donor trust, once lost, is
              extremely difficult to rebuild.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              What Data Do Nonprofits Collect?
            </h2>
            <p className="mb-4">
              Nonprofits typically collect data across four categories, each
              with different sensitivity levels and regulatory requirements.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-900/50 rounded-xl p-5">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Donor Data
                </h3>
                <p className="text-sm text-gray-400 mb-3">
                  The most sensitive category. Donor data includes financial
                  information protected under multiple regulations.
                </p>
                <ul className="text-sm text-gray-300 space-y-1.5 list-disc list-inside">
                  <li>Full name, email, phone number, and mailing address</li>
                  <li>Donation amounts, dates, frequency, and payment methods</li>
                  <li>Credit card or bank account details (tokenized by processor)</li>
                  <li>Recurring donation schedules and pledge commitments</li>
                  <li>Tax receipt records and employer matching information</li>
                  <li>Giving history and donor tier/level classifications</li>
                  <li>Communication preferences (email, mail, phone, do-not-contact)</li>
                  <li>Notes from donor interactions and relationship history</li>
                </ul>
              </div>

              <div className="bg-gray-900/50 rounded-xl p-5">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Volunteer Data
                </h3>
                <p className="text-sm text-gray-400 mb-3">
                  Volunteer records often include background check information,
                  making them especially sensitive.
                </p>
                <ul className="text-sm text-gray-300 space-y-1.5 list-disc list-inside">
                  <li>Name, contact information, and emergency contacts</li>
                  <li>Background check results (criminal history, driving record)</li>
                  <li>Skills, certifications, and availability schedules</li>
                  <li>Hours logged, tasks completed, and event attendance</li>
                  <li>T-shirt sizes, dietary restrictions (for events)</li>
                  <li>Waivers, consent forms, and liability releases</li>
                </ul>
              </div>

              <div className="bg-gray-900/50 rounded-xl p-5">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Beneficiary / Client Data
                </h3>
                <p className="text-sm text-gray-400 mb-3">
                  Service-providing nonprofits collect data about the people they
                  serve, often including vulnerable populations.
                </p>
                <ul className="text-sm text-gray-300 space-y-1.5 list-disc list-inside">
                  <li>Demographic information (age, gender, ethnicity, income level)</li>
                  <li>Health information (for healthcare nonprofits)</li>
                  <li>Housing status, family composition, employment history</li>
                  <li>Case notes, service records, and outcome measurements</li>
                  <li>Immigration status, disability information (for relevant services)</li>
                  <li>Children&apos;s data (for youth-serving organizations)</li>
                </ul>
              </div>

              <div className="bg-gray-900/50 rounded-xl p-5">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Website Visitor &amp; Marketing Data
                </h3>
                <p className="text-sm text-gray-400 mb-3">
                  Collected through your website, social media, and marketing
                  campaigns.
                </p>
                <ul className="text-sm text-gray-300 space-y-1.5 list-disc list-inside">
                  <li>IP addresses, browser type, and device information</li>
                  <li>Pages viewed, time on site, and referral sources</li>
                  <li>Newsletter subscription status and email engagement</li>
                  <li>Event registration and attendance data</li>
                  <li>Peer-to-peer fundraising page content and activity</li>
                  <li>Social media engagement and advertising pixel data</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              GDPR Compliance for Nonprofits
            </h2>
            <p className="mb-4">
              GDPR applies to your nonprofit if you collect data from anyone in
              the EU &mdash; including EU-based donors, volunteers, or website
              visitors. Here are the key requirements:
            </p>

            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-white">Lawful Basis for Processing</h4>
                <p className="text-sm text-gray-400">
                  Nonprofits typically rely on: <strong>consent</strong> for
                  marketing emails and newsletters; <strong>contractual
                  necessity</strong> for processing donations and delivering
                  services; <strong>legitimate interest</strong> for
                  administrative purposes, donor stewardship, and fraud
                  prevention; and <strong>legal obligation</strong> for tax
                  reporting and financial record-keeping. Each processing
                  activity must have an explicitly stated lawful basis.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-white">Special Category Data</h4>
                <p className="text-sm text-gray-400">
                  Many nonprofits process special category data under GDPR
                  Article 9: religious organizations process data revealing
                  religious beliefs; health charities process health data;
                  advocacy groups may process data revealing political opinions
                  or trade union membership. Processing special category data
                  requires explicit consent or another Article 9 exemption and
                  must be specifically disclosed in your privacy policy.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-white">Data Protection Officer</h4>
                <p className="text-sm text-gray-400">
                  Under GDPR, you must appoint a Data Protection Officer if your
                  core activities involve regular, systematic monitoring of
                  individuals at scale, or processing of special category data at
                  scale. Large nonprofits and religious organizations often meet
                  these thresholds. Even if not required, designating a privacy
                  point person is a best practice.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Common Third-Party Services Used by Nonprofits
            </h2>
            <p className="mb-4">
              Your privacy policy must disclose every third-party service that
              processes constituent data.
            </p>

            <div className="bg-gray-900/50 rounded-xl p-6">
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <span className="text-blue-400 font-semibold">Bloomerang / DonorPerfect / Salesforce NPSP</span>
                  <p className="text-gray-400 mt-1">CRM/donor management: stores all donor records, giving history, communications, and relationship notes.</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <span className="text-blue-400 font-semibold">Classy / Network for Good / GoFundMe Charity</span>
                  <p className="text-gray-400 mt-1">Fundraising platforms: processes donations, stores donor payment data, manages campaigns and peer-to-peer pages.</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <span className="text-blue-400 font-semibold">Mailchimp / Constant Contact</span>
                  <p className="text-gray-400 mt-1">Email marketing: stores subscriber lists, engagement data, segmentation tags, and automation triggers.</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <span className="text-blue-400 font-semibold">Stripe / PayPal / Square</span>
                  <p className="text-gray-400 mt-1">Payment processing: handles credit card data, recurring donations, and transaction records.</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <span className="text-blue-400 font-semibold">Eventbrite / SignUpGenius</span>
                  <p className="text-gray-400 mt-1">Event management: collects registration data, attendee information, and volunteer sign-up details.</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <span className="text-blue-400 font-semibold">Google Analytics / Meta Pixel</span>
                  <p className="text-gray-400 mt-1">Analytics and advertising: tracks website behavior, conversion data, and retargeting audiences.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Church &amp; Religious Organization Considerations
            </h2>
            <p className="mb-4">
              Churches and religious organizations have unique privacy
              considerations because they routinely process data that reveals
              religious beliefs &mdash; classified as &quot;special category
              data&quot; under GDPR Article 9.
            </p>

            <div className="space-y-3">
              {[
                {
                  title: "Membership records",
                  desc: "Baptism dates, membership status, sacramental records, and small group participation all reveal religious affiliation.",
                },
                {
                  title: "Tithing and giving records",
                  desc: "Donation records linked to religious organizations inherently reveal religious beliefs. These require extra protection under GDPR.",
                },
                {
                  title: "Counseling and prayer requests",
                  desc: "Pastoral counseling notes and prayer requests may contain deeply personal information. Your privacy policy should address confidentiality practices.",
                },
                {
                  title: "Children's ministry data",
                  desc: "COPPA applies if you collect data from children under 13 online. Check-in systems, Sunday school records, and VBS registrations all require parental consent.",
                },
                {
                  title: "Background checks for volunteers",
                  desc: "Many churches require background checks for children's ministry volunteers. This data is extremely sensitive and must be stored securely with limited access.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-gray-900/50 rounded-xl p-4">
                  <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="mt-4">
              GDPR Article 9(2)(d) provides an exemption for processing by
              nonprofits with a religious aim, but only for data of current or
              former members and people in regular contact. It does not cover
              website visitors, event attendees, or people exploring the church.
              A comprehensive privacy policy is essential even with this exemption.
            </p>
          </section>

          <section className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-800/30 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-4 text-center">
              Create Your Nonprofit Privacy Policy Now
            </h2>
            <p className="text-gray-300 text-center mb-6">
              PolicyForge generates customized privacy policies for nonprofits,
              charities, and religious organizations. Covers donor data,
              volunteer records, fundraising platforms, CRM integrations, and
              full GDPR/CCPA compliance. Done in under 2 minutes for $4.99
              &mdash; not $500.
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
                  Are nonprofits exempt from GDPR?
                </h3>
                <p>
                  No. GDPR applies to any organization that processes personal
                  data of EU residents, regardless of profit status, tax
                  exemption, or organization type. Nonprofits, charities,
                  churches, and NGOs are all subject to GDPR if they have EU
                  donors, volunteers, or website visitors.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Does CCPA apply to nonprofits?
                </h3>
                <p>
                  The original CCPA included a nonprofit exemption. However, the
                  CPRA amendment narrowed this exemption, and some nonprofits
                  now fall within scope. Additionally, state privacy laws in
                  Virginia, Colorado, and Connecticut have varying nonprofit
                  coverage. If you operate nationally or have California
                  constituents, consult the specific law. Having a comprehensive
                  privacy policy regardless is a best practice.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Can donors request deletion of their giving records?
                </h3>
                <p>
                  Under GDPR, donors can request deletion of their personal data.
                  However, you may retain transaction records required by tax law
                  (typically 7 years for IRS purposes). You must delete marketing
                  preferences, communication history, and non-financial personal
                  data upon request. Your privacy policy should clearly state your
                  data retention periods and the legal basis for retaining
                  financial records.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Do we need a privacy policy for our church website?
                </h3>
                <p>
                  Yes. Any website that collects visitor data (through analytics,
                  contact forms, event registrations, online giving, or prayer
                  request forms) needs a privacy policy. Even if your church is
                  small, if you use Google Analytics, accept online donations, or
                  have a newsletter signup, you are collecting personal data
                  that must be disclosed.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Should we share our donor list with other organizations?
                </h3>
                <p>
                  Sharing donor lists with other organizations without explicit
                  consent is a significant privacy violation under GDPR and
                  potentially under CCPA. Many donors are surprised to learn
                  their information is shared. If you share donor data for
                  list-swapping or rental purposes, this must be clearly
                  disclosed in your privacy policy with an opt-out mechanism.
                  Under GDPR, sharing requires explicit opt-in consent.
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
                href="/privacy-policy-for-small-business"
                className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800/70 transition block"
              >
                <span className="text-blue-400 font-semibold">
                  Privacy Policy for Small Business
                </span>
                <p className="text-gray-400 mt-1">
                  General privacy policy guide for small organizations.
                </p>
              </Link>
              <Link
                href="/gdpr-privacy-policy-generator"
                className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800/70 transition block"
              >
                <span className="text-blue-400 font-semibold">
                  GDPR Privacy Policy Generator
                </span>
                <p className="text-gray-400 mt-1">
                  Full GDPR-compliant privacy policy for any organization.
                </p>
              </Link>
              <Link
                href="/privacy-policy-for-ecommerce"
                className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800/70 transition block"
              >
                <span className="text-blue-400 font-semibold">
                  Privacy Policy for E-Commerce
                </span>
                <p className="text-gray-400 mt-1">
                  For nonprofits with online stores or merchandise sales.
                </p>
              </Link>
              <Link
                href="/cookie-policy-generator"
                className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800/70 transition block"
              >
                <span className="text-blue-400 font-semibold">
                  Cookie Policy Generator
                </span>
                <p className="text-gray-400 mt-1">
                  Generate a cookie policy for your organization&apos;s website.
                </p>
              </Link>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-500">
          <p>
            PolicyForge helps nonprofits and charities build compliant privacy
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
