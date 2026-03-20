import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "PIPEDA Privacy Policy Generator | Free Canadian Compliant - PolicyForge",
  description:
    "Generate a free PIPEDA-compliant privacy policy for your Canadian business. Covers the 10 Fair Information Principles, meaningful consent, breach notification, and OPC requirements. Canada privacy law compliant.",
  keywords:
    "PIPEDA privacy policy, PIPEDA privacy policy generator, Canadian privacy policy template, PIPEDA compliance, Canada privacy policy generator, PIPEDA 10 principles, meaningful consent Canada, OPC complaint process, PIPEDA breach notification, Law 25 Quebec privacy",
};

export default function PipedaPrivacyPolicyGenerator() {
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
          PIPEDA Privacy Policy Generator
        </h1>

        <p className="text-gray-300 leading-relaxed text-lg mb-8">
          Generate a free, PIPEDA-compliant privacy policy for your Canadian
          business in minutes. PolicyForge covers all requirements of
          Canada&apos;s Personal Information Protection and Electronic Documents
          Act, including the 10 Fair Information Principles, meaningful consent
          obligations, mandatory breach notification, and cross-border data
          transfer disclosures. Whether you operate an e-commerce store, SaaS
          platform, or service business in Canada, a PIPEDA-compliant privacy
          policy is a legal requirement.
        </p>

        {/* CTA Box */}
        <div className="mb-12 p-6 rounded-xl bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-white mb-1">
                Generate Your PIPEDA Privacy Policy Now
              </h2>
              <p className="text-gray-300 text-sm">
                Free. No account required. PIPEDA-compliant in under 5 minutes.
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                Generate Policy
              </Link>
              <Link
                href="/check"
                className="px-6 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 transition-colors whitespace-nowrap"
              >
                Check Compliance
              </Link>
            </div>
          </div>
        </div>

        {/* What Is PIPEDA */}
        <section id="what-is-pipeda" className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            What Is PIPEDA and Who Does It Apply To?
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed text-[17px]">
            <p>
              The <strong className="text-white">Personal Information Protection and Electronic Documents Act (PIPEDA)</strong> is
              Canada&apos;s federal privacy law governing how private-sector
              organizations collect, use, and disclose personal information in
              the course of commercial activities. Enacted in 2000 and
              significantly amended over the years, PIPEDA applies to every
              business that handles personal information across provincial or
              national borders, as well as to all federally regulated industries
              (banking, telecommunications, airlines, interprovincial
              transportation) regardless of the province in which they operate.
            </p>
            <p>
              PIPEDA applies to you if your organization:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Collects, uses, or discloses personal information in the course
                of commercial activities anywhere in Canada
              </li>
              <li>
                Operates a federally regulated business (banks, telecom,
                airlines, railways)
              </li>
              <li>
                Transfers personal information across provincial or national
                borders for processing
              </li>
              <li>
                Is located in a province without substantially similar
                provincial privacy legislation (i.e., any province other than
                Alberta, British Columbia, or Quebec for their respective
                private-sector laws)
              </li>
            </ul>
            <p>
              Even if your province has its own privacy law, PIPEDA still
              applies to interprovincial and international commercial activities
              and to all federally regulated organizations. If you accept
              customers from multiple provinces or operate an online business
              accessible across Canada, you almost certainly need a
              PIPEDA-compliant privacy policy.
            </p>
            <p>
              The Office of the Privacy Commissioner of Canada (OPC) has made
              clear that PIPEDA applies broadly: if you collect a customer&apos;s
              email address for a newsletter, use cookies on your website, store
              payment information, or gather any form of personal data in
              connection with selling goods or services, PIPEDA governs how you
              must handle that information.
            </p>
          </div>
        </section>

        {/* 10 Fair Information Principles */}
        <section id="10-principles" className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            PIPEDA&apos;s 10 Fair Information Principles
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed text-[17px]">
            <p>
              PIPEDA is built on Schedule 1 of the Act, which sets out ten Fair
              Information Principles derived from the Canadian Standards
              Association&apos;s Model Code for the Protection of Personal
              Information. Your privacy policy must demonstrate compliance with
              all ten. These are not optional guidelines &mdash; they are legal
              requirements:
            </p>
          </div>
          <div className="mt-4 space-y-3">
            {[
              {
                num: "1",
                title: "Accountability",
                desc: "Your organization must designate a person responsible for PIPEDA compliance and make their name or title available on request. This person is accountable for all personal information under your control, including data transferred to third-party processors.",
              },
              {
                num: "2",
                title: "Identifying Purposes",
                desc: "You must identify the purposes for collecting personal information at or before the time of collection. If you later want to use the data for a new purpose, you must obtain fresh consent before doing so.",
              },
              {
                num: "3",
                title: "Consent",
                desc: "You must obtain meaningful consent for the collection, use, and disclosure of personal information. The form of consent (express or implied) must be appropriate to the sensitivity of the data and the reasonable expectations of the individual.",
              },
              {
                num: "4",
                title: "Limiting Collection",
                desc: "Collect only the personal information necessary for the identified purposes. Do not collect information indiscriminately. The information collected must be limited to what is necessary for the stated purposes.",
              },
              {
                num: "5",
                title: "Limiting Use, Disclosure, and Retention",
                desc: "Personal information must not be used or disclosed for purposes other than those for which it was collected, except with consent or as required by law. Data must be retained only as long as necessary to fulfill the stated purposes.",
              },
              {
                num: "6",
                title: "Accuracy",
                desc: "Personal information must be as accurate, complete, and up-to-date as necessary for the purposes for which it is used. This is especially critical when information is used to make decisions about individuals.",
              },
              {
                num: "7",
                title: "Safeguards",
                desc: "You must protect personal information with security safeguards appropriate to the sensitivity of the data. This includes physical, organizational, and technological measures such as encryption, access controls, and staff training.",
              },
              {
                num: "8",
                title: "Openness",
                desc: "You must make your privacy policies and practices readily available. This is where your privacy policy document itself fulfills a direct legal requirement. Information about your practices must be available in a form that is easy to understand.",
              },
              {
                num: "9",
                title: "Individual Access",
                desc: "Individuals have the right to access their personal information held by your organization, to know how it has been used and to whom it has been disclosed, and to challenge the accuracy and completeness of their data and have it amended.",
              },
              {
                num: "10",
                title: "Challenging Compliance",
                desc: "Individuals must be able to challenge your compliance with these principles by contacting the person accountable within your organization. You must have procedures to receive and respond to complaints and inquiries.",
              },
            ].map((principle) => (
              <div
                key={principle.num}
                className="flex items-start gap-3 p-4 rounded-lg border border-white/10 bg-white/[0.02]"
              >
                <div className="mt-0.5 w-7 h-7 rounded-full bg-blue-500/20 border border-blue-500/30 flex-shrink-0 flex items-center justify-center text-sm font-bold text-blue-400">
                  {principle.num}
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">
                    {principle.title}
                  </h3>
                  <p className="text-gray-400 text-[15px] leading-relaxed">
                    {principle.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Meaningful Consent */}
        <section id="meaningful-consent" className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            What Constitutes &quot;Meaningful Consent&quot; Under PIPEDA?
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed text-[17px]">
            <p>
              The OPC issued updated{" "}
              <strong className="text-white">Guidelines for Obtaining Meaningful Consent</strong> in
              2018, establishing that consent must be informed, given freely, and
              genuinely reflect the individual&apos;s understanding of what they
              are agreeing to. Burying consent in pages of legalese or using
              pre-checked boxes does not meet PIPEDA&apos;s standard.
            </p>
            <p>
              To obtain meaningful consent, your privacy policy and consent
              mechanisms must clearly communicate:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-white">What</strong> personal
                information is being collected
              </li>
              <li>
                <strong className="text-white">Why</strong> it is being
                collected (the specific purposes)
              </li>
              <li>
                <strong className="text-white">How</strong> it will be used and
                disclosed
              </li>
              <li>
                <strong className="text-white">What risks</strong> of harm or
                other consequences flow from the collection, use, or disclosure
              </li>
              <li>
                <strong className="text-white">Who</strong> you share it with
                (third parties, processors, cross-border transfers)
              </li>
            </ul>
            <p>
              The form of consent must match the sensitivity of the data.{" "}
              <strong className="text-white">Express consent</strong> (opt-in)
              is required for sensitive information such as health data,
              financial information, or data about children. For less sensitive
              information in contexts where the collection would be reasonably
              expected (such as a shipping address for an online order),{" "}
              <strong className="text-white">implied consent</strong> may be
              acceptable, but only if the purpose is clearly communicated.
            </p>
            <p>
              The OPC has also emphasized that consent must be{" "}
              <strong className="text-white">ongoing</strong>: individuals must
              be able to withdraw consent at any time, subject to legal or
              contractual restrictions and reasonable notice. Your privacy
              policy should clearly explain how users can withdraw their
              consent and what consequences may result from doing so.
            </p>
          </div>
        </section>

        {/* PIPEDA vs GDPR */}
        <section id="pipeda-vs-gdpr" className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            PIPEDA vs. GDPR: Key Differences
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed text-[17px]">
            <p>
              Many Canadian businesses also serve European customers and need to
              understand how PIPEDA compares to the EU&apos;s General Data
              Protection Regulation. While both frameworks share a commitment to
              privacy protection, they differ in important structural ways. The
              European Commission has recognized PIPEDA as providing an
              &quot;adequate&quot; level of protection, facilitating data
              transfers between the EU and Canada, but this does not mean the
              laws are interchangeable.
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
                    PIPEDA
                  </th>
                  <th className="text-left py-3 px-4 text-white font-semibold">
                    GDPR
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 font-medium text-white">
                    Consent Model
                  </td>
                  <td className="py-3 px-4">
                    &quot;Meaningful consent&quot; &mdash; express or implied
                    depending on context and sensitivity of data
                  </td>
                  <td className="py-3 px-4">
                    Requires explicit consent or another lawful basis (6 legal
                    bases under Article 6)
                  </td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 font-medium text-white">Scope</td>
                  <td className="py-3 px-4">
                    Private-sector organizations engaged in commercial
                    activities in Canada
                  </td>
                  <td className="py-3 px-4">
                    Any organization (public or private) processing personal
                    data of EU/EEA residents
                  </td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 font-medium text-white">
                    Breach Notification
                  </td>
                  <td className="py-3 px-4">
                    Mandatory notification to OPC and affected individuals
                    &quot;as soon as feasible&quot; if real risk of significant
                    harm
                  </td>
                  <td className="py-3 px-4">
                    72-hour notification to supervisory authority; individuals
                    notified if high risk to rights and freedoms
                  </td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 font-medium text-white">
                    Right to Erasure
                  </td>
                  <td className="py-3 px-4">
                    No explicit right to erasure, but data must be deleted when
                    no longer needed for stated purposes
                  </td>
                  <td className="py-3 px-4">
                    Explicit &quot;Right to be Forgotten&quot; (Article 17)
                  </td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 font-medium text-white">
                    Data Protection Officer
                  </td>
                  <td className="py-3 px-4">
                    Must designate an accountable person (Principle 1), but no
                    formal DPO requirement
                  </td>
                  <td className="py-3 px-4">
                    Mandatory DPO for public authorities, large-scale processing,
                    and special category data processors
                  </td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 font-medium text-white">
                    Cross-Border Transfers
                  </td>
                  <td className="py-3 px-4">
                    Allowed with contractual safeguards; transferring org
                    remains accountable
                  </td>
                  <td className="py-3 px-4">
                    Requires adequacy decision, SCCs, BCRs, or other approved
                    mechanisms
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-white">
                    Maximum Penalties
                  </td>
                  <td className="py-3 px-4">
                    Up to $100,000 CAD per violation for certain offences; OPC
                    recommendations are non-binding (court orders required)
                  </td>
                  <td className="py-3 px-4">
                    Up to 4% of annual global turnover or &euro;20 million,
                    whichever is greater
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-300 leading-relaxed text-[17px] mt-6">
            If you serve customers in both Canada and the EU, PolicyForge can
            generate a combined privacy policy that addresses the requirements
            of both PIPEDA and GDPR. Select the applicable jurisdictions during
            generation, or use our{" "}
            <Link
              href="/check"
              className="text-blue-400 hover:text-blue-300 underline transition-colors"
            >
              compliance checker
            </Link>{" "}
            to audit your existing policy against both frameworks.
          </p>
        </section>

        {/* Provincial Equivalents */}
        <section id="provincial-laws" className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            Provincial Privacy Laws: PIPA Alberta, PIPA BC, and Quebec&apos;s
            Law 25
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed text-[17px]">
            <p>
              Three provinces have enacted private-sector privacy legislation
              that the federal government has declared &quot;substantially
              similar&quot; to PIPEDA. In these provinces, the provincial law
              applies to commercial activities that occur entirely within the
              province, while PIPEDA still governs interprovincial and
              international transactions and federally regulated industries.
            </p>
            <div className="mt-4 space-y-4">
              <div className="p-4 rounded-lg border border-white/10 bg-white/[0.02]">
                <h3 className="text-white font-semibold mb-2">
                  Alberta &mdash; Personal Information Protection Act (PIPA)
                </h3>
                <p className="text-gray-400 text-[15px] leading-relaxed">
                  Alberta&apos;s PIPA applies to organizations that collect, use,
                  or disclose personal information in the province. It closely
                  mirrors PIPEDA&apos;s principles but includes some notable
                  differences: PIPA Alberta allows organizations to collect
                  information without consent when &quot;reasonable for the
                  purposes of an investigation&quot; and has slightly different
                  breach notification thresholds. It was one of the first
                  provincial laws to introduce mandatory breach notification
                  (since 2010, well before federal PIPEDA adopted it in 2018).
                </p>
              </div>
              <div className="p-4 rounded-lg border border-white/10 bg-white/[0.02]">
                <h3 className="text-white font-semibold mb-2">
                  British Columbia &mdash; Personal Information Protection Act
                  (PIPA)
                </h3>
                <p className="text-gray-400 text-[15px] leading-relaxed">
                  BC&apos;s PIPA is similar to Alberta&apos;s and applies to
                  private-sector organizations operating within the province. A
                  distinguishing feature is that PIPA BC includes specific
                  provisions around employee personal information, governing how
                  employers can collect and use data about their staff. The law
                  requires consent but recognizes &quot;deemed consent&quot; in
                  certain circumstances where an individual voluntarily provides
                  information and a reasonable person would consider it
                  appropriate.
                </p>
              </div>
              <div className="p-4 rounded-lg border border-white/10 bg-white/[0.02]">
                <h3 className="text-white font-semibold mb-2">
                  Quebec &mdash; Law 25 (Act Respecting the Protection of
                  Personal Information in the Private Sector, as amended)
                </h3>
                <p className="text-gray-400 text-[15px] leading-relaxed">
                  Quebec&apos;s Law 25 (also known as Bill 64), which came into
                  force in phases starting September 2023, represents the most
                  significant modernization of provincial privacy law in Canada.
                  It introduces GDPR-like requirements including mandatory
                  privacy impact assessments, the right to data portability, a
                  right to de-indexation (similar to the right to be forgotten),
                  explicit consent requirements for sensitive data, and
                  administrative monetary penalties of up to $25 million CAD or
                  4% of worldwide turnover. If you operate in Quebec or serve
                  Quebec consumers, Law 25 imposes stricter obligations than
                  PIPEDA in several areas.
                </p>
              </div>
            </div>
            <p className="mt-2">
              Regardless of which province you operate in, a comprehensive
              privacy policy generated by PolicyForge will cover the core
              requirements shared across PIPEDA and all three provincial laws.
              For businesses operating in Quebec, we recommend also reviewing
              the Law 25-specific obligations around privacy impact assessments
              and data portability.
            </p>
          </div>
        </section>

        {/* Breach Notification */}
        <section id="breach-notification" className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            PIPEDA Mandatory Breach Notification Requirements
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed text-[17px]">
            <p>
              Since November 1, 2018, PIPEDA has required all organizations to:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong className="text-white">
                  Report breaches to the OPC
                </strong>{" "}
                &mdash; If a breach of security safeguards involving personal
                information creates a &quot;real risk of significant harm&quot;
                (RROSH) to any individual, you must report it to the Office of
                the Privacy Commissioner as soon as feasible. The report must
                describe the circumstances of the breach, the personal
                information involved, the steps taken to reduce the risk of
                harm, and the steps taken or planned to notify affected
                individuals.
              </li>
              <li>
                <strong className="text-white">
                  Notify affected individuals
                </strong>{" "}
                &mdash; You must notify all individuals affected by the breach
                as soon as feasible if there is a real risk of significant harm.
                Notification must include a description of the breach, the
                types of personal information involved, the steps taken to
                reduce risk, steps the individual can take to mitigate harm,
                and a contact point within your organization.
              </li>
              <li>
                <strong className="text-white">
                  Notify other organizations
                </strong>{" "}
                &mdash; If another organization or government institution could
                reduce the risk of harm from the breach, you must notify them
                as well.
              </li>
              <li>
                <strong className="text-white">
                  Maintain breach records
                </strong>{" "}
                &mdash; You must keep a record of every breach of security
                safeguards involving personal information under your control,
                regardless of whether it meets the RROSH threshold. These
                records must be maintained for at least 24 months and must be
                available to the OPC on request.
              </li>
            </ul>
            <p>
              &quot;Significant harm&quot; includes bodily harm, humiliation,
              damage to reputation or relationships, loss of employment, business
              or professional opportunities, financial loss, identity theft,
              negative effects on credit record, and damage to or loss of
              property. When assessing RROSH, consider the sensitivity of the
              information involved and the probability that it will be misused.
            </p>
            <p>
              <strong className="text-white">
                Failure to report a breach or maintain records is an offence
              </strong>{" "}
              under PIPEDA, punishable by fines of up to{" "}
              <strong className="text-white">$100,000 CAD per violation</strong>.
              Your privacy policy should disclose your breach notification
              procedures to demonstrate compliance with Principle 8 (Openness).
            </p>
          </div>
        </section>

        {/* Cross-Border Transfers */}
        <section id="cross-border" className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            Cross-Border Data Transfer Requirements
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed text-[17px]">
            <p>
              Unlike GDPR, PIPEDA does not restrict data transfers to specific
              countries or require an &quot;adequacy&quot; finding. However, the
              transferring organization remains{" "}
              <strong className="text-white">fully accountable</strong> for the
              personal information it transfers to a third party for processing,
              even if that third party is located in another country. This means:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                You must use contractual or other means to ensure a comparable
                level of protection while the information is being processed by
                the third party
              </li>
              <li>
                You must inform individuals that their personal information may
                be transferred outside Canada and that it may be accessible to
                foreign courts, law enforcement, and national security
                authorities under the laws of that jurisdiction
              </li>
              <li>
                Your privacy policy must disclose the countries to which
                personal information may be transferred (e.g., &quot;Your data
                may be processed in the United States by our cloud hosting
                provider&quot;)
              </li>
              <li>
                You should conduct a risk assessment when selecting foreign
                processors, considering the sensitivity of the data and the
                legal protections available in the receiving country
              </li>
            </ul>
            <p>
              The OPC has investigated multiple cases involving cross-border
              transfers and has emphasized that transparency is essential:
              individuals must be able to make an informed decision about
              consenting to the transfer of their data to another jurisdiction.
              PolicyForge includes cross-border transfer disclosure clauses
              automatically when you indicate that your business uses
              international service providers.
            </p>
          </div>
        </section>

        {/* OPC Enforcement */}
        <section id="opc-enforcement" className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            OPC Enforcement and the Complaints Process
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed text-[17px]">
            <p>
              The{" "}
              <strong className="text-white">
                Office of the Privacy Commissioner of Canada (OPC)
              </strong>{" "}
              is the federal body responsible for overseeing compliance with
              PIPEDA. Unlike GDPR supervisory authorities, the OPC primarily
              operates through an ombudsman model: it investigates complaints,
              mediates disputes, and makes recommendations, but its findings are
              not directly enforceable as orders. However, the OPC can:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Investigate complaints from individuals about an
                organization&apos;s personal information practices
              </li>
              <li>
                Conduct self-initiated investigations (Commissioner-initiated
                complaints) when there is reason to believe PIPEDA is being
                violated
              </li>
              <li>
                Publish investigation reports that name organizations found to
                be non-compliant (significant reputational risk)
              </li>
              <li>
                Refer matters to the Federal Court of Canada for binding orders,
                including compliance orders and damages awards
              </li>
              <li>
                Enter into compliance agreements with organizations
              </li>
              <li>
                Audit organizations&apos; privacy practices proactively
              </li>
            </ul>
            <p>
              The complaints process works as follows: any individual can file a
              complaint with the OPC. The OPC then contacts the organization,
              investigates, and attempts to resolve the matter through
              mediation. If mediation fails, the OPC issues a findings report
              with recommendations. If the organization does not follow the
              recommendations, the complainant can apply to the Federal Court
              for an order. The Federal Court can award damages, including
              damages for humiliation.
            </p>
            <p>
              <strong className="text-white">PIPEDA penalties</strong> for
              specific offences (such as failing to report a breach, retaliating
              against a whistleblower, or obstructing an investigation) can
              reach{" "}
              <strong className="text-white">$100,000 CAD per violation</strong>.
              While this is lower than GDPR&apos;s maximums, the reputational
              damage from a published OPC finding can be far more costly than
              the fine itself. Major Canadian data breach investigations have
              made national news and significantly impacted public trust.
            </p>
          </div>
        </section>

        {/* PolicyForge vs Lawyer */}
        <section id="policyforge-vs-lawyer" className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            PolicyForge vs. Hiring a Lawyer
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed text-[17px] mb-6">
            <p>
              A Canadian privacy lawyer can draft a custom PIPEDA-compliant
              privacy policy, but for most small and medium businesses the cost
              is difficult to justify when a well-structured generator can
              produce the same core document. Here is how PolicyForge compares:
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-6">
            <div className="space-y-3 text-sm">
              <div className="grid grid-cols-3 gap-4 pb-3 border-b border-white/10 font-semibold text-white">
                <span>Factor</span>
                <span className="text-center">Privacy Lawyer</span>
                <span className="text-center text-blue-400">PolicyForge</span>
              </div>
              {[
                {
                  factor: "Cost",
                  lawyer: "$1,500 - $5,000+ CAD",
                  pf: "$4.99 - $12.99 USD",
                },
                {
                  factor: "Time to completion",
                  lawyer: "2 - 4 weeks",
                  pf: "Under 5 minutes",
                },
                {
                  factor: "PIPEDA 10 Principles coverage",
                  lawyer: "Yes",
                  pf: "Yes (all 10)",
                },
                {
                  factor: "Breach notification clauses",
                  lawyer: "Yes",
                  pf: "Yes (automatic)",
                },
                {
                  factor: "Cross-border transfer disclosure",
                  lawyer: "Manual review needed",
                  pf: "Included when applicable",
                },
                {
                  factor: "Provincial law coverage (PIPA, Law 25)",
                  lawyer: "Varies by lawyer",
                  pf: "Core requirements included",
                },
                {
                  factor: "GDPR + CCPA combo support",
                  lawyer: "Extra cost",
                  pf: "Included (multi-jurisdiction)",
                },
                {
                  factor: "Updates when practices change",
                  lawyer: "$300 - $500+/hour CAD",
                  pf: "Regenerate for free",
                },
                {
                  factor: "Best for businesses under $1M/yr",
                  lawyer: "Overkill for most",
                  pf: "Perfect fit",
                },
              ].map((row) => (
                <div
                  key={row.factor}
                  className="grid grid-cols-3 gap-4 py-2 border-b border-white/5"
                >
                  <span className="text-gray-300">{row.factor}</span>
                  <span className="text-center text-gray-400">
                    {row.lawyer}
                  </span>
                  <span className="text-center text-blue-400">{row.pf}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed text-[17px] mt-6">
            For large enterprises, highly regulated industries (healthcare,
            financial services), or organizations processing large volumes of
            sensitive data, a lawyer review is still recommended. But for most
            Canadian businesses &mdash; e-commerce stores, SaaS products,
            service providers, freelancers &mdash; PolicyForge delivers a
            comprehensive PIPEDA-compliant policy at a fraction of the cost.{" "}
            <Link
              href="/"
              className="text-blue-400 hover:text-blue-300 underline transition-colors"
            >
              Try it free here
            </Link>
            .
          </p>
        </section>

        {/* How PolicyForge Helps */}
        <section className="mb-12 p-6 rounded-xl border border-blue-500/20 bg-blue-500/5">
          <h2 className="text-2xl font-bold text-white mb-4">
            How PolicyForge Generates Your PIPEDA Privacy Policy
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed text-[17px]">
            <p>
              PolicyForge makes PIPEDA compliance straightforward. Select
              &quot;Canada (PIPEDA)&quot; as your jurisdiction, answer a few
              questions about your business practices &mdash; what data you
              collect, why you collect it, who you share it with, and where it
              is processed &mdash; and the generator produces a comprehensive
              privacy policy that addresses all 10 Fair Information Principles.
            </p>
            <p>
              The <strong className="text-white">free version</strong> generates
              a complete PIPEDA-compliant privacy policy covering the core
              principles and standard disclosures. The{" "}
              <strong className="text-white">Pro version</strong> adds detailed
              breach notification procedures, cross-border transfer clauses
              identifying specific countries and safeguards, data retention
              schedules mapped to your business needs, employee privacy
              provisions, and OPC complaint contact information with dispute
              resolution procedures.
            </p>
            <p>
              Already have a privacy policy?{" "}
              <Link
                href="/check"
                className="text-blue-400 hover:text-blue-300 underline transition-colors"
              >
                Run it through our compliance checker
              </Link>{" "}
              to identify specific PIPEDA gaps and get actionable
              recommendations for bringing it into compliance. Pair your
              privacy policy with a{" "}
              <Link
                href="/tos"
                className="text-blue-400 hover:text-blue-300 underline transition-colors"
              >
                Terms of Service
              </Link>{" "}
              to establish the complete legal framework for your Canadian
              business.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            Frequently Asked Questions About PIPEDA Privacy Policies
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Does PIPEDA apply to my small business or sole proprietorship?",
                a: "Yes. PIPEDA applies to any organization that collects, uses, or discloses personal information in the course of commercial activities, regardless of size. There is no revenue threshold or employee count minimum. If you run an online store, collect customer emails for a newsletter, use website analytics, or process payment information, PIPEDA applies to you. The only exceptions are organizations that operate exclusively within Alberta, British Columbia, or Quebec (where substantially similar provincial laws apply to intra-provincial activities), but even then PIPEDA applies to any interprovincial or international data flows.",
              },
              {
                q: "What are the penalties for non-compliance with PIPEDA?",
                a: "PIPEDA penalties vary by type of violation. For specific offences such as failing to report a data breach to the OPC, retaliating against a whistleblower, destroying personal information that has been requested for access, or obstructing an investigation, fines can reach $100,000 CAD per violation. The OPC can also publish findings naming non-compliant organizations, which creates significant reputational harm. Additionally, the Federal Court of Canada can order organizations to correct their practices, pay damages (including damages for humiliation), and publish notices of their violations. Quebec's Law 25 goes further with administrative monetary penalties of up to $25 million or 4% of worldwide turnover.",
              },
              {
                q: "Do I need a separate privacy policy for PIPEDA if I already have one for GDPR?",
                a: "Not necessarily. A well-drafted privacy policy can address both PIPEDA and GDPR requirements in a single document. However, you should ensure it specifically covers PIPEDA's 10 Fair Information Principles, identifies a responsible person for privacy compliance (Principle 1), describes your breach notification procedures, discloses cross-border data transfers, and explains how individuals can access their data and challenge compliance. PolicyForge generates multi-jurisdiction policies that cover PIPEDA, GDPR, and CCPA simultaneously when you select the applicable jurisdictions.",
              },
              {
                q: "How does PIPEDA handle children's personal information?",
                a: "PIPEDA does not set a specific age threshold for children (unlike COPPA in the US, which targets children under 13). However, the OPC has stated that meaningful consent for the collection of a child's personal information generally requires parental or guardian consent, and that children may not be capable of providing meaningful consent themselves. The OPC considers the nature of the information, the child's age and maturity, and the purposes for collection. If your website or service is likely to attract children, your privacy policy should address how you obtain parental consent and what additional protections you provide for children's data.",
              },
              {
                q: "Is PIPEDA being replaced by a new law?",
                a: "The federal government introduced Bill C-27 (the Digital Charter Implementation Act) which included the Consumer Privacy Protection Act (CPPA) intended to replace PIPEDA. However, Bill C-27 died on the order paper when Parliament was prorogued in January 2025 and has not been reintroduced as of early 2026. PIPEDA remains the law in force. That said, the proposed CPPA would have introduced order-making powers for the Privacy Commissioner, higher penalties (up to 5% of global revenue or $25 million), a private right of action, and an explicit right to data disposal. Businesses should comply with current PIPEDA requirements while monitoring legislative developments.",
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

        {/* Related Resources */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            Related Resources
          </h2>
          <div className="grid md:grid-cols-2 gap-3 text-sm">
            <Link
              href="/gdpr-privacy-policy-generator"
              className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800/70 transition block"
            >
              <span className="text-blue-400 font-semibold">
                GDPR Privacy Policy Generator
              </span>
              <p className="text-gray-400 mt-1">
                Generate a GDPR-compliant privacy policy for EU customers.
              </p>
            </Link>
            <Link
              href="/ccpa-privacy-policy-generator"
              className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800/70 transition block"
            >
              <span className="text-blue-400 font-semibold">
                CCPA Privacy Policy Generator
              </span>
              <p className="text-gray-400 mt-1">
                California Consumer Privacy Act compliance for US operations.
              </p>
            </Link>
            <Link
              href="/privacy-policy-for-saas"
              className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800/70 transition block"
            >
              <span className="text-blue-400 font-semibold">
                Privacy Policy for SaaS
              </span>
              <p className="text-gray-400 mt-1">
                Tailored privacy policies for software-as-a-service businesses.
              </p>
            </Link>
            <Link
              href="/privacy-policy-for-small-business"
              className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800/70 transition block"
            >
              <span className="text-blue-400 font-semibold">
                Privacy Policy for Small Business
              </span>
              <p className="text-gray-400 mt-1">
                General privacy policy guide for small business owners.
              </p>
            </Link>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center py-10 px-6 rounded-xl border border-white/10 bg-white/[0.02]">
          <h2 className="text-2xl font-bold text-white mb-3">
            Ready to Generate Your PIPEDA Privacy Policy?
          </h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Create a complete, PIPEDA-compliant privacy policy for your Canadian
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
        <div className="max-w-4xl mx-auto px-4">
          <p>
            PolicyForge &mdash; Part of the{" "}
            <a
              href="https://dashboard-mocha-delta-98.vercel.app"
              className="text-blue-400 hover:text-blue-300"
            >
              Autonomous Claude Experiment
            </a>
          </p>
          <p className="mt-3">
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
          <p className="mt-2 text-xs text-gray-600">
            Disclaimer: This generator provides template privacy policies for
            informational purposes. It does not constitute legal advice. Consult
            a qualified attorney for jurisdiction-specific compliance guidance.
          </p>
        </div>
      </footer>
    </div>
  );
}
