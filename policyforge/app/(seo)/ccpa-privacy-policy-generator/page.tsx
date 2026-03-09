import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CCPA Privacy Policy Generator | Free California Compliant - PolicyForge",
  description:
    "Generate a free CCPA-compliant privacy policy for your business. Covers right to know, right to delete, right to opt-out of sale, and non-discrimination. California Consumer Privacy Act compliant.",
  keywords:
    "CCPA privacy policy generator, California Consumer Privacy Act, CCPA compliant privacy policy, California privacy policy, CCPA template, right to opt out, do not sell my personal information, CPRA privacy policy, CCPA requirements checklist, CCPA vs GDPR",
};

export default function CcpaPrivacyPolicyGenerator() {
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
          CCPA Privacy Policy Generator
        </h1>

        <p className="text-gray-300 leading-relaxed text-lg mb-8">
          Generate a free, CCPA-compliant privacy policy tailored to your
          business in minutes. PolicyForge covers every requirement of the
          California Consumer Privacy Act, including the 2023 CPRA amendments,
          so you can stay compliant without hiring a lawyer.
        </p>

        <div className="mb-10">
          <Link
            href="/"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg text-lg hover:opacity-90 transition-opacity"
          >
            Generate Your CCPA Privacy Policy &rarr;
          </Link>
        </div>

        {/* Table of Contents */}
        <nav className="mb-12 p-6 rounded-xl border border-white/10 bg-white/[0.02]">
          <h2 className="text-lg font-semibold text-white mb-3">On This Page</h2>
          <ul className="space-y-2 text-blue-400 text-sm">
            <li><a href="#what-is-ccpa" className="hover:text-blue-300 transition-colors">What Is the CCPA?</a></li>
            <li><a href="#who-must-comply" className="hover:text-blue-300 transition-colors">Who Must Comply with the CCPA?</a></li>
            <li><a href="#consumer-rights" className="hover:text-blue-300 transition-colors">CCPA Consumer Rights Explained</a></li>
            <li><a href="#do-not-sell" className="hover:text-blue-300 transition-colors">&quot;Do Not Sell&quot; Requirements</a></li>
            <li><a href="#penalties" className="hover:text-blue-300 transition-colors">CCPA Penalties and Enforcement</a></li>
            <li><a href="#policy-requirements" className="hover:text-blue-300 transition-colors">What a CCPA Privacy Policy Must Include</a></li>
            <li><a href="#requirements-checklist" className="hover:text-blue-300 transition-colors">CCPA Privacy Policy Requirements Checklist</a></li>
            <li><a href="#ccpa-vs-gdpr" className="hover:text-blue-300 transition-colors">CCPA vs. GDPR: Key Differences</a></li>
            <li><a href="#cpra-updates" className="hover:text-blue-300 transition-colors">CPRA Updates: What Changed in 2023</a></li>
            <li><a href="#faq" className="hover:text-blue-300 transition-colors">Frequently Asked Questions</a></li>
          </ul>
        </nav>

        {/* What Is the CCPA */}
        <section id="what-is-ccpa" className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            What Is the CCPA?
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed text-[17px]">
            <p>
              The California Consumer Privacy Act (CCPA) is a landmark data
              privacy law that went into effect on January 1, 2020. It was the
              first comprehensive consumer privacy statute enacted in the United
              States and has since served as a model for privacy legislation in
              other states including Virginia, Colorado, Connecticut, and Utah.
            </p>
            <p>
              The CCPA grants California residents (referred to as
              &quot;consumers&quot; in the statute) a set of enforceable rights
              over how businesses collect, use, share, and sell their personal
              information. It is enforced by the California Attorney General and,
              since 2023, the California Privacy Protection Agency (CPPA).
            </p>
            <p>
              Under the CCPA, &quot;personal information&quot; is defined
              broadly. It includes any information that identifies, relates to,
              describes, is reasonably capable of being associated with, or could
              reasonably be linked, directly or indirectly, with a particular
              consumer or household. This covers names, email addresses, IP
              addresses, browsing history, purchase history, geolocation data,
              biometric data, and even inferences drawn from other data points to
              create a consumer profile.
            </p>
          </div>
        </section>

        {/* Who Must Comply */}
        <section id="who-must-comply" className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            Who Must Comply with the CCPA?
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed text-[17px]">
            <p>
              The CCPA applies to any for-profit entity that does business in
              California and collects the personal information of California
              residents, provided the business meets <strong className="text-white">at least one</strong> of the
              following thresholds:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong className="text-white">Annual gross revenue exceeds $25 million.</strong>{" "}
                This is measured in the preceding calendar year and includes
                global revenue, not just revenue from California customers.
              </li>
              <li>
                <strong className="text-white">
                  Buys, sells, or shares the personal information of 100,000 or
                  more California consumers, households, or devices per year.
                </strong>{" "}
                Note that the CPRA lowered the original CCPA threshold from
                50,000 to 100,000 but removed the &quot;receives&quot; trigger,
                meaning passive receipt alone no longer counts.
              </li>
              <li>
                <strong className="text-white">
                  Derives 50% or more of annual revenue from selling or sharing
                  California consumers&apos; personal information.
                </strong>{" "}
                Data brokers and ad-tech companies frequently meet this
                threshold.
              </li>
            </ul>
            <p>
              Even if your business does not currently meet these thresholds,
              proactive compliance is strongly recommended. California is the
              largest consumer market in the United States with over 39 million
              residents, and many businesses cross these thresholds faster than
              expected as they scale. Additionally, having a CCPA-compliant
              privacy policy signals professionalism and builds trust with
              privacy-conscious customers.
            </p>
            <p>
              Not sure whether your site already meets CCPA disclosure
              requirements?{" "}
              <Link
                href="/check"
                className="text-blue-400 hover:text-blue-300 underline transition-colors"
              >
                Use our free compliance checker
              </Link>{" "}
              to scan your existing privacy policy and identify gaps.
            </p>
          </div>
        </section>

        {/* Consumer Rights */}
        <section id="consumer-rights" className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            CCPA Consumer Rights Explained
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed text-[17px]">
            <p>
              The CCPA (as amended by the CPRA) grants California consumers the
              following rights. Your privacy policy must clearly describe each
              of these rights and explain how consumers can exercise them.
            </p>

            <div className="space-y-6 mt-6">
              <div className="p-5 rounded-lg border border-white/10 bg-white/[0.02]">
                <h3 className="text-lg font-semibold text-white mb-2">
                  1. Right to Know
                </h3>
                <p>
                  Consumers can request that you disclose the categories and
                  specific pieces of personal information you have collected
                  about them, the sources of that information, the business or
                  commercial purpose for collecting it, and the categories of
                  third parties with whom you share it. You must respond to
                  verifiable consumer requests within 45 days.
                </p>
              </div>

              <div className="p-5 rounded-lg border border-white/10 bg-white/[0.02]">
                <h3 className="text-lg font-semibold text-white mb-2">
                  2. Right to Delete
                </h3>
                <p>
                  Consumers can request that you delete the personal information
                  you have collected from them, subject to certain exceptions
                  (e.g., completing a transaction, detecting security incidents,
                  complying with a legal obligation). When you receive a valid
                  deletion request, you must also direct your service providers
                  and contractors to delete the consumer&apos;s data.
                </p>
              </div>

              <div className="p-5 rounded-lg border border-white/10 bg-white/[0.02]">
                <h3 className="text-lg font-semibold text-white mb-2">
                  3. Right to Opt-Out of Sale or Sharing
                </h3>
                <p>
                  Consumers have the right to opt out of the &quot;sale&quot; or
                  &quot;sharing&quot; of their personal information. Under the
                  CCPA, &quot;sale&quot; means exchanging personal information
                  for monetary or other valuable consideration. The CPRA
                  expanded this to include &quot;sharing&quot; for
                  cross-context behavioral advertising, which covers many
                  common ad-tech practices like retargeting pixels and
                  third-party cookies. You must provide a clear and conspicuous
                  &quot;Do Not Sell or Share My Personal Information&quot; link
                  on your website homepage.
                </p>
              </div>

              <div className="p-5 rounded-lg border border-white/10 bg-white/[0.02]">
                <h3 className="text-lg font-semibold text-white mb-2">
                  4. Right to Non-Discrimination
                </h3>
                <p>
                  You cannot deny goods or services, charge different prices,
                  provide a different level or quality of service, or suggest
                  that a consumer will receive any of these penalties for
                  exercising their CCPA rights. Financial incentive programs
                  (like loyalty discounts) are permitted but must be clearly
                  disclosed and require opt-in consent.
                </p>
              </div>

              <div className="p-5 rounded-lg border border-white/10 bg-white/[0.02]">
                <h3 className="text-lg font-semibold text-white mb-2">
                  5. Right to Correct (Added by CPRA)
                </h3>
                <p>
                  Since January 1, 2023, consumers also have the right to
                  request that you correct inaccurate personal information that
                  you maintain about them. You must use commercially reasonable
                  efforts to correct the information as directed by the
                  consumer.
                </p>
              </div>

              <div className="p-5 rounded-lg border border-white/10 bg-white/[0.02]">
                <h3 className="text-lg font-semibold text-white mb-2">
                  6. Right to Limit Use of Sensitive Personal Information (Added
                  by CPRA)
                </h3>
                <p>
                  Consumers can direct you to limit your use and disclosure of
                  sensitive personal information &mdash; such as Social Security
                  numbers, financial account details, precise geolocation, race,
                  ethnicity, religious beliefs, genetic data, biometric data,
                  health information, and sexual orientation &mdash; to only
                  what is necessary for performing the services or providing the
                  goods they requested.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Do Not Sell Requirements */}
        <section id="do-not-sell" className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            &quot;Do Not Sell or Share My Personal Information&quot; Requirements
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed text-[17px]">
            <p>
              One of the CCPA&apos;s most distinctive requirements is the
              obligation to provide consumers with a way to opt out of the sale
              or sharing of their personal information. If your business sells
              personal information or shares it for cross-context behavioral
              advertising, you must implement all of the following:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong className="text-white">Homepage opt-out link.</strong>{" "}
                Display a clear and conspicuous link on your website&apos;s
                homepage titled &quot;Do Not Sell or Share My Personal
                Information.&quot; This link must take users to a page or
                mechanism where they can submit their opt-out request without
                being required to create an account.
              </li>
              <li>
                <strong className="text-white">Sensitive data link.</strong>{" "}
                If you collect sensitive personal information beyond what is
                necessary to provide your service, you must also provide a
                &quot;Limit the Use of My Sensitive Personal Information&quot;
                link. You may combine both links into a single
                &quot;Your Privacy Choices&quot; link accompanied by the
                standard opt-out preference signal icon.
              </li>
              <li>
                <strong className="text-white">Global Privacy Control (GPC) support.</strong>{" "}
                Your website must recognize and honor the GPC browser signal as
                a valid opt-out request. When a visitor&apos;s browser sends a
                GPC signal, you must treat it as though the consumer clicked
                your &quot;Do Not Sell&quot; link. Your privacy policy should
                disclose how you respond to GPC signals.
              </li>
              <li>
                <strong className="text-white">Minors require opt-in.</strong>{" "}
                You cannot sell or share personal information of consumers you
                know to be under 16 years old without affirmative opt-in
                consent. For children under 13, consent must come from a parent
                or guardian.
              </li>
              <li>
                <strong className="text-white">12-month waiting period.</strong>{" "}
                After a consumer opts out, you must wait at least 12 months
                before asking them to opt back in to the sale or sharing of
                their personal information.
              </li>
            </ul>
            <p>
              Common activities that constitute &quot;sharing&quot; under the
              CPRA include using Meta Pixel, Google Ads remarketing tags,
              TikTok Pixel, or any third-party tracking cookies that enable
              cross-site behavioral advertising. If you use any of these
              technologies, you almost certainly need the opt-out link.
            </p>
            <p>
              Not sure if your site has the required opt-out mechanisms?{" "}
              <Link
                href="/check"
                className="text-blue-400 hover:text-blue-300 underline transition-colors"
              >
                Scan your website with our free compliance checker
              </Link>{" "}
              to find out.
            </p>
          </div>
        </section>

        {/* Penalties */}
        <section id="penalties" className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            CCPA Penalties and Enforcement
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed text-[17px]">
            <p>
              Non-compliance with the CCPA carries substantial financial risk.
              Since the CPRA eliminated the 30-day cure period in 2023,
              businesses can face immediate penalties without a chance to fix
              violations first.
            </p>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="p-5 rounded-lg border border-red-500/20 bg-red-500/5">
                <div className="text-3xl font-bold text-red-400 mb-1">$2,500</div>
                <div className="text-white font-semibold mb-2">Per Unintentional Violation</div>
                <p className="text-gray-400 text-sm">
                  Applies to each individual consumer record affected. A
                  systematic privacy policy violation affecting 10,000
                  consumers could result in $25 million in fines. Common
                  triggers include missing required disclosures, failing to
                  respond to consumer requests within 45 days, or not
                  recognizing GPC signals.
                </p>
              </div>
              <div className="p-5 rounded-lg border border-red-500/20 bg-red-500/5">
                <div className="text-3xl font-bold text-red-400 mb-1">$7,500</div>
                <div className="text-white font-semibold mb-2">Per Intentional Violation</div>
                <p className="text-gray-400 text-sm">
                  Also applies per violation involving the personal information
                  of minors under 16, regardless of intent. The CPRA tripled
                  the penalty for children&apos;s data violations from the
                  original CCPA. Intentional violations include knowingly
                  selling data after receiving an opt-out request.
                </p>
              </div>
            </div>
            <p>
              Beyond regulatory fines, the CCPA grants consumers a{" "}
              <strong className="text-white">private right of action</strong> for data breaches
              resulting from a business&apos;s failure to implement reasonable
              security measures. Consumers can seek statutory damages of{" "}
              <strong className="text-white">$100 to $750 per consumer per incident</strong>, or
              actual damages, whichever is greater. Several class action
              lawsuits under this provision have resulted in multi-million
              dollar settlements.
            </p>
            <p>
              The California Privacy Protection Agency (CPPA) now conducts its
              own investigations, audits, and enforcement proceedings alongside
              the Attorney General&apos;s office. Enforcement activity has
              increased significantly since the CPPA became operational, with
              public inquiries targeting companies across e-commerce, ad-tech,
              social media, and connected vehicle industries.
            </p>
          </div>
        </section>

        {/* What Must Be Included */}
        <section id="policy-requirements" className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            What a CCPA-Compliant Privacy Policy Must Include
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed text-[17px]">
            <p>
              The CCPA and its implementing regulations mandate that your privacy
              policy contain specific disclosures. Missing even one required
              section can expose your business to enforcement actions and fines
              of up to $7,500 per intentional violation. Your policy must
              include:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                A description of the <strong className="text-white">categories of personal information</strong> you
                have collected in the preceding 12 months (e.g., identifiers,
                commercial information, internet activity, geolocation,
                biometric data, professional information, education information,
                inferences).
              </li>
              <li>
                The <strong className="text-white">sources</strong> from which personal information is collected
                (e.g., directly from consumers, from third-party data providers,
                from cookies and tracking technologies).
              </li>
              <li>
                The <strong className="text-white">business or commercial purposes</strong> for collecting or
                selling personal information (e.g., providing services,
                processing transactions, marketing, fraud prevention, improving
                products).
              </li>
              <li>
                The <strong className="text-white">categories of third parties</strong> with whom you share
                personal information (e.g., service providers, advertising
                partners, analytics providers, affiliated companies).
              </li>
              <li>
                For each category of personal information collected, the{" "}
                <strong className="text-white">categories of personal information sold or shared</strong> and the
                categories of third parties to whom it was sold or shared, or a
                statement that you have not sold or shared personal information.
              </li>
              <li>
                The <strong className="text-white">retention period</strong> for each category of personal
                information, or the criteria used to determine retention periods.
                This is a CPRA addition that many businesses still miss.
              </li>
              <li>
                A description of each <strong className="text-white">consumer right</strong> (know, delete,
                correct, opt-out, limit use of sensitive data,
                non-discrimination) and instructions for how consumers can
                submit requests.
              </li>
              <li>
                At least <strong className="text-white">two methods for submitting requests</strong>, one of which
                must be a toll-free telephone number (for businesses that
                operate primarily online, an email address may substitute in
                certain cases).
              </li>
              <li>
                The date the privacy policy was <strong className="text-white">last updated</strong>. The CCPA
                requires that you review and update your policy at least once
                every 12 months.
              </li>
            </ul>
            <p>
              PolicyForge generates all of these sections automatically when you
              select the United States (CCPA) jurisdiction.{" "}
              <Link
                href="/"
                className="text-blue-400 hover:text-blue-300 underline transition-colors"
              >
                Create your CCPA privacy policy now
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Requirements Checklist */}
        <section id="requirements-checklist" className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            CCPA Privacy Policy Requirements Checklist
          </h2>
          <p className="text-gray-300 leading-relaxed text-[17px] mb-6">
            Use this checklist to audit your existing privacy policy or verify
            that a newly generated policy meets all CCPA and CPRA requirements.
            If you want an automated audit,{" "}
            <Link
              href="/check"
              className="text-blue-400 hover:text-blue-300 underline transition-colors"
            >
              try our free compliance checker
            </Link>
            .
          </p>
          <div className="space-y-3">
            {[
              "Lists all categories of personal information collected in the past 12 months",
              "Identifies the sources of personal information",
              "States the business/commercial purpose for each category collected",
              "Discloses categories of third parties information is shared with",
              "States whether personal information is sold or shared, and to whom",
              "Includes data retention periods or criteria for each category",
              "Describes the Right to Know and how to exercise it",
              "Describes the Right to Delete and how to exercise it",
              "Describes the Right to Correct inaccurate data (CPRA)",
              "Describes the Right to Opt-Out of Sale/Sharing",
              "Describes the Right to Limit Use of Sensitive Personal Information (CPRA)",
              "Describes the Right to Non-Discrimination",
              "Provides at least two methods for submitting consumer requests",
              "Includes a 'Do Not Sell or Share My Personal Information' link (if applicable)",
              "Includes a 'Limit the Use of My Sensitive Personal Information' link (if applicable, CPRA)",
              "Discloses whether you respond to Global Privacy Control (GPC) signals",
              "States the date the policy was last updated",
              "Policy has been reviewed and updated within the last 12 months",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-3 rounded-lg border border-white/10 bg-white/[0.02]"
              >
                <div className="mt-0.5 w-5 h-5 rounded border border-white/20 flex-shrink-0 flex items-center justify-center text-xs text-gray-500">
                  {i + 1}
                </div>
                <span className="text-gray-300 text-[15px]">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CCPA vs GDPR */}
        <section id="ccpa-vs-gdpr" className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            CCPA vs. GDPR: Key Differences
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed text-[17px]">
            <p>
              Many businesses need to comply with both the CCPA and the EU&apos;s
              General Data Protection Regulation (GDPR). While both laws aim to
              protect consumer privacy, they differ in significant ways. A single
              privacy policy can cover both, but you need to address the
              requirements of each.
            </p>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-white font-semibold">
                    Aspect
                  </th>
                  <th className="text-left py-3 px-4 text-white font-semibold">
                    CCPA / CPRA
                  </th>
                  <th className="text-left py-3 px-4 text-white font-semibold">
                    GDPR
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 font-medium text-white">Scope</td>
                  <td className="py-3 px-4">
                    For-profit businesses meeting revenue/data thresholds, processing data of California residents
                  </td>
                  <td className="py-3 px-4">
                    Any organization processing personal data of EU/EEA residents, regardless of size
                  </td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 font-medium text-white">
                    Legal Basis
                  </td>
                  <td className="py-3 px-4">
                    Opt-out model &mdash; businesses can collect data by default; consumers opt out
                  </td>
                  <td className="py-3 px-4">
                    Opt-in model &mdash; requires a lawful basis (e.g., consent, legitimate interest) before processing
                  </td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 font-medium text-white">
                    Definition of Personal Data
                  </td>
                  <td className="py-3 px-4">
                    Includes household-level data; broader in some ways (covers inferences, household data)
                  </td>
                  <td className="py-3 px-4">
                    Relates to identified or identifiable natural persons only
                  </td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 font-medium text-white">
                    Right to Opt-Out
                  </td>
                  <td className="py-3 px-4">
                    Specific right to opt out of &quot;sale&quot; or &quot;sharing&quot; of personal info
                  </td>
                  <td className="py-3 px-4">
                    Right to object to processing based on legitimate interest; right to withdraw consent
                  </td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 font-medium text-white">
                    Private Right of Action
                  </td>
                  <td className="py-3 px-4">
                    Limited to data breaches involving unencrypted/unredacted personal information
                  </td>
                  <td className="py-3 px-4">
                    Broad right for individuals to seek compensation for any GDPR violation
                  </td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 font-medium text-white">
                    Maximum Penalties
                  </td>
                  <td className="py-3 px-4">
                    $2,500 per unintentional violation; $7,500 per intentional violation
                  </td>
                  <td className="py-3 px-4">
                    Up to 4% of annual global turnover or 20 million euros, whichever is greater
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-white">
                    Nonprofits / Government
                  </td>
                  <td className="py-3 px-4">
                    Exempt (applies only to for-profit entities)
                  </td>
                  <td className="py-3 px-4">
                    Applies to all organizations, including nonprofits and public bodies
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-300 leading-relaxed text-[17px] mt-6">
            If you serve customers in both California and the EU, PolicyForge
            can generate a combined privacy policy that satisfies both
            frameworks. Select both jurisdictions during generation, or check
            your existing policy with our{" "}
            <Link
              href="/check"
              className="text-blue-400 hover:text-blue-300 underline transition-colors"
            >
              compliance checker
            </Link>{" "}
            to see which requirements you may be missing.
          </p>
        </section>

        {/* CPRA Updates */}
        <section id="cpra-updates" className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            CPRA Updates: What Changed in 2023
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed text-[17px]">
            <p>
              The California Privacy Rights Act (CPRA), passed by California
              voters in November 2020 as Proposition 24, took full effect on
              January 1, 2023. It amends and significantly expands the original
              CCPA. If your privacy policy was written before 2023, it likely
              does not meet the updated requirements. Here are the most
              important changes:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong className="text-white">New category: Sensitive Personal Information.</strong>{" "}
                The CPRA created a distinct category for sensitive data (SSN,
                financial accounts, precise geolocation, racial/ethnic origin,
                religious beliefs, genetic/biometric data, health data, sex
                life/sexual orientation, contents of communications). Consumers
                can now limit how you use this data.
              </li>
              <li>
                <strong className="text-white">Right to Correct.</strong>{" "}
                Consumers can now request corrections to inaccurate personal
                information you hold about them.
              </li>
              <li>
                <strong className="text-white">&quot;Sharing&quot; for cross-context behavioral advertising.</strong>{" "}
                The CPRA expanded the opt-out right beyond &quot;sales&quot; to
                include &quot;sharing&quot; for targeted advertising purposes.
                This affects businesses using retargeting pixels, third-party
                cookies, or similar tracking for ad personalization.
              </li>
              <li>
                <strong className="text-white">Data retention disclosures.</strong>{" "}
                Businesses must now disclose the retention period for each
                category of personal information, or the criteria used to
                determine how long data is kept.
              </li>
              <li>
                <strong className="text-white">Data minimization.</strong>{" "}
                The CPRA introduced a requirement that collection, use,
                retention, and sharing of personal information must be
                &quot;reasonably necessary and proportionate&quot; to the
                purposes for which it was collected.
              </li>
              <li>
                <strong className="text-white">California Privacy Protection Agency (CPPA).</strong>{" "}
                A new dedicated enforcement agency was created to implement and
                enforce the CCPA/CPRA, supplementing the Attorney General&apos;s
                existing authority. The CPPA began formal rulemaking in 2023 and
                continues to issue new regulations.
              </li>
              <li>
                <strong className="text-white">Global Privacy Control (GPC) recognition.</strong>{" "}
                Businesses must treat GPC browser signals as valid opt-out
                requests. Your privacy policy should disclose whether and how
                you respond to GPC signals.
              </li>
              <li>
                <strong className="text-white">Contractor obligations.</strong>{" "}
                The CPRA added &quot;contractors&quot; as a new category
                alongside service providers, with specific contractual
                requirements for how they handle personal information.
              </li>
            </ul>
            <p>
              PolicyForge generates policies that incorporate all CPRA
              amendments by default, so you do not need to worry about missing
              any of these updates.{" "}
              <Link
                href="/"
                className="text-blue-400 hover:text-blue-300 underline transition-colors"
              >
                Generate your updated CCPA/CPRA privacy policy here
              </Link>
              .
            </p>
          </div>
        </section>

        {/* How PolicyForge Helps */}
        <section className="mb-12 p-6 rounded-xl border border-blue-500/20 bg-blue-500/5">
          <h2 className="text-2xl font-bold text-white mb-4">
            How PolicyForge Generates Your CCPA Privacy Policy
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed text-[17px]">
            <p>
              PolicyForge makes CCPA compliance straightforward. Select
              &quot;United States (CCPA)&quot; as your jurisdiction, answer a
              few questions about your business practices, and the generator
              produces a comprehensive privacy policy that includes all required
              CCPA and CPRA disclosures.
            </p>
            <p>
              The <strong className="text-white">free version</strong> generates a complete CCPA-compliant
              privacy policy covering the core requirements. The{" "}
              <strong className="text-white">Pro version</strong> adds detailed
              consumer rights sections with exact statutory references, data
              category breakdowns mapped to the CCPA&apos;s enumerated
              categories, opt-out provisions with implementation guidance,
              sensitive personal information disclosures, data retention
              schedules, and service provider/contractor contractual language.
            </p>
            <p>
              Already have a privacy policy?{" "}
              <Link
                href="/check"
                className="text-blue-400 hover:text-blue-300 underline transition-colors"
              >
                Run it through our compliance checker
              </Link>{" "}
              to identify specific CCPA gaps and get actionable recommendations
              for bringing it into compliance. You should also pair your privacy
              policy with a{" "}
              <Link
                href="/tos"
                className="text-blue-400 hover:text-blue-300 underline transition-colors"
              >
                Terms of Service
              </Link>{" "}
              to establish the complete legal framework for your website or app.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            Frequently Asked Questions About CCPA Privacy Policies
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Do I need a CCPA privacy policy if my business is not based in California?",
                a: "Yes, if you meet the CCPA's thresholds. The CCPA applies to any for-profit business that collects personal information of California residents and meets at least one threshold ($25M+ revenue, 100K+ consumers' data processed, or 50%+ revenue from selling/sharing data), regardless of where the business is physically located. If you have a website accessible to California residents, you should evaluate whether the CCPA applies to you.",
              },
              {
                q: "What is the penalty for not having a CCPA-compliant privacy policy?",
                a: "The California Attorney General and the California Privacy Protection Agency can impose fines of $2,500 per unintentional violation and $7,500 per intentional violation. There is no cap on the total amount. Additionally, in the event of a data breach involving unencrypted personal information, consumers have a private right of action and can seek statutory damages of $100 to $750 per consumer per incident, or actual damages, whichever is greater. A non-compliant privacy policy may also be cited as evidence of failure to implement reasonable security practices.",
              },
              {
                q: "What is the 'Do Not Sell or Share My Personal Information' link and do I need one?",
                a: "If your business sells personal information or shares it for cross-context behavioral advertising (which includes using third-party cookies, retargeting pixels, or ad networks that personalize ads based on user behavior across different sites), you must provide a clear and conspicuous link titled 'Do Not Sell or Share My Personal Information' on your website homepage. If you also collect sensitive personal information beyond what is necessary, you need a separate 'Limit the Use of My Sensitive Personal Information' link. Businesses that do not sell or share data are not required to display these links, but must still disclose this fact in their privacy policy.",
              },
              {
                q: "How is CCPA different from CPRA? Do I need to comply with both?",
                a: "The CPRA (California Privacy Rights Act) is an amendment to the CCPA, not a separate law. It took effect January 1, 2023, and modified several CCPA provisions while adding new requirements including the Right to Correct, the Right to Limit Use of Sensitive Personal Information, data retention disclosure requirements, data minimization principles, and the creation of the California Privacy Protection Agency. You do not need to comply with both separately — you need a single privacy policy that meets the CCPA as amended by the CPRA. PolicyForge generates policies that incorporate all CPRA amendments automatically.",
              },
              {
                q: "How often do I need to update my CCPA privacy policy?",
                a: "The CCPA requires that you review and update your privacy policy at least once every 12 months. You should also update it whenever your data practices materially change — for example, if you start collecting new categories of personal information, begin sharing data with new categories of third parties, add new tracking technologies, or change how you use sensitive personal information. Your privacy policy must display the date it was last updated.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-5 rounded-lg border border-white/10 bg-white/[0.02]"
              >
                <h3 className="text-[17px] font-semibold text-white mb-3">
                  {item.q}
                </h3>
                <p className="text-gray-400 leading-relaxed text-[15px]">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center py-10 px-6 rounded-xl border border-white/10 bg-white/[0.02]">
          <h2 className="text-2xl font-bold text-white mb-3">
            Ready to Generate Your CCPA Privacy Policy?
          </h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Create a complete, CCPA and CPRA-compliant privacy policy for your
            business in under five minutes. No account required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg text-lg hover:opacity-90 transition-opacity"
            >
              Generate Privacy Policy
            </Link>
            <Link
              href="/check"
              className="inline-block px-8 py-4 border border-white/20 text-white font-semibold rounded-lg text-lg hover:bg-white/5 transition-colors"
            >
              Check Existing Policy
            </Link>
          </div>
        </section>
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
