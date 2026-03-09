import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GDPR Privacy Policy Generator | Free & Compliant - PolicyForge",
  description:
    "Generate a free GDPR-compliant privacy policy for your website or app. Covers all 6 lawful bases for processing, data subject rights, DPO requirements, cross-border transfers, and breach notification obligations under the General Data Protection Regulation.",
  keywords:
    "GDPR privacy policy generator, GDPR compliant privacy policy, EU privacy policy, General Data Protection Regulation, GDPR template, data protection policy, GDPR rights, right to erasure, data portability, lawful basis for processing, data protection officer, GDPR breach notification, cross-border data transfer, GDPR checklist",
};

export default function GdprPrivacyPolicyGenerator() {
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
          GDPR Privacy Policy Generator
        </h1>

        <p className="text-gray-300 leading-relaxed text-lg mb-8">
          The General Data Protection Regulation (GDPR) is the most comprehensive
          data protection law ever enacted. It applies to every organisation that
          processes personal data of individuals located in the European Economic
          Area (EEA), regardless of where the organisation itself is based. If
          your website, app, or online service receives even a single visitor from
          the EU, you are expected to comply. Penalties for non-compliance can
          reach up to 4% of annual global turnover or &euro;20 million, whichever
          is greater. A properly drafted privacy policy is the cornerstone of
          demonstrating compliance.
        </p>

        <div className="mt-8 mb-12">
          <Link
            href="/"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg text-lg hover:opacity-90 transition-opacity"
          >
            Generate Your GDPR Privacy Policy Now
          </Link>
        </div>

        {/* Section 1: What GDPR Requires */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            What Does the GDPR Require in a Privacy Policy?
          </h2>
          <div className="space-y-4 text-gray-400 leading-relaxed">
            <p>
              Articles 13 and 14 of the GDPR set out the specific information you
              must provide to data subjects when you collect their personal data.
              Unlike older regulations that accepted vague language, the GDPR
              demands transparency and specificity. Your privacy policy must be
              written in clear, plain language and must be easily accessible from
              every page of your website or app.
            </p>
            <p>
              At a minimum, a GDPR-compliant privacy policy must disclose the
              identity and contact details of the data controller (your
              organisation), the contact details of your Data Protection Officer
              (if one is required), the purposes and legal basis for each type of
              data processing, the categories of personal data collected, who the
              data is shared with (including any third-party processors), whether
              data is transferred outside the EEA and the safeguards in place,
              how long data is retained, and the full set of rights available to
              data subjects. It must also explain the right to withdraw consent
              at any time and the right to lodge a complaint with a supervisory
              authority.
            </p>
            <p>
              A generic, one-size-fits-all privacy policy will not satisfy these
              obligations. Each processing activity must be individually described
              with its own purpose and lawful basis. This is why using a{" "}
              <Link href="/" className="text-blue-400 hover:text-blue-300 underline">
                dedicated privacy policy generator
              </Link>{" "}
              that understands GDPR requirements is far more reliable than copying
              a template from the internet.
            </p>
          </div>
        </section>

        {/* Section 2: The 6 Lawful Bases */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            The 6 Lawful Bases for Processing Personal Data
          </h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            Article 6 of the GDPR establishes that every act of personal data
            processing must rely on one of six lawful bases. Your privacy policy
            must specify which basis applies to each processing activity. Choosing
            the wrong basis, or failing to state one, is itself a violation.
          </p>
          <div className="space-y-4">
            <div className="border border-white/10 rounded-lg p-4">
              <h3 className="text-white font-semibold mb-1">1. Consent</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                The data subject has given clear, affirmative consent for you to
                process their personal data for a specific purpose. Consent must
                be freely given, specific, informed, and unambiguous. Pre-ticked
                boxes do not constitute valid consent. You must be able to
                demonstrate that consent was given, and the data subject can
                withdraw it at any time.
              </p>
            </div>
            <div className="border border-white/10 rounded-lg p-4">
              <h3 className="text-white font-semibold mb-1">
                2. Contractual Necessity
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Processing is necessary to perform a contract with the data
                subject, or to take pre-contractual steps at their request. For
                example, processing a shipping address to fulfil an online order,
                or verifying identity before onboarding a new user.
              </p>
            </div>
            <div className="border border-white/10 rounded-lg p-4">
              <h3 className="text-white font-semibold mb-1">
                3. Legal Obligation
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Processing is necessary to comply with a legal obligation that
                applies to you as the data controller. Tax record-keeping,
                employment law requirements, and anti-money laundering
                regulations are common examples.
              </p>
            </div>
            <div className="border border-white/10 rounded-lg p-4">
              <h3 className="text-white font-semibold mb-1">4. Vital Interests</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Processing is necessary to protect the vital interests of the
                data subject or another person. This basis is narrow and
                typically only applies in life-or-death situations, such as
                emergency medical scenarios.
              </p>
            </div>
            <div className="border border-white/10 rounded-lg p-4">
              <h3 className="text-white font-semibold mb-1">5. Public Task</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Processing is necessary for the performance of a task carried out
                in the public interest or in the exercise of official authority
                vested in the controller. This basis is primarily used by
                government bodies and public institutions.
              </p>
            </div>
            <div className="border border-white/10 rounded-lg p-4">
              <h3 className="text-white font-semibold mb-1">
                6. Legitimate Interests
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Processing is necessary for the legitimate interests pursued by
                the controller or a third party, except where such interests are
                overridden by the data subject&apos;s rights. You must conduct a
                Legitimate Interest Assessment (LIA) to balance your interests
                against the individual&apos;s rights. Common examples include
                fraud prevention, network security, and direct marketing to
                existing customers.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Data Subject Rights */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            Data Subject Rights Under the GDPR
          </h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            Chapter III of the GDPR grants individuals a comprehensive set of
            rights over their personal data. Your privacy policy must clearly
            explain each right and how individuals can exercise it. You are
            required to respond to most rights requests within one calendar month.
          </p>
          <ul className="space-y-3 text-gray-400 leading-relaxed">
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold mt-0.5">&#x2022;</span>
              <span>
                <strong className="text-white">Right of Access (Article 15):</strong>{" "}
                Individuals can request a copy of all personal data you hold about
                them, along with supplementary information about how it is
                processed. This is commonly known as a Subject Access Request (SAR).
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold mt-0.5">&#x2022;</span>
              <span>
                <strong className="text-white">Right to Rectification (Article 16):</strong>{" "}
                Individuals can request correction of inaccurate personal data or
                completion of incomplete data without undue delay.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold mt-0.5">&#x2022;</span>
              <span>
                <strong className="text-white">Right to Erasure (Article 17):</strong>{" "}
                Also known as the &quot;right to be forgotten,&quot; individuals
                can request deletion of their personal data when it is no longer
                necessary for the original purpose, when consent is withdrawn, or
                when the data has been unlawfully processed.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold mt-0.5">&#x2022;</span>
              <span>
                <strong className="text-white">Right to Restriction (Article 18):</strong>{" "}
                Individuals can request that processing be restricted in certain
                circumstances, such as when accuracy is contested or processing
                is unlawful but the individual opposes erasure.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold mt-0.5">&#x2022;</span>
              <span>
                <strong className="text-white">Right to Data Portability (Article 20):</strong>{" "}
                Individuals can receive their personal data in a structured,
                commonly used, machine-readable format and transmit it to another
                controller. This right applies when processing is based on consent
                or contract and is carried out by automated means.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold mt-0.5">&#x2022;</span>
              <span>
                <strong className="text-white">Right to Object (Article 21):</strong>{" "}
                Individuals can object to processing based on legitimate interests
                or public task grounds. If you process data for direct marketing,
                you must stop immediately upon objection with no exceptions.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold mt-0.5">&#x2022;</span>
              <span>
                <strong className="text-white">
                  Rights Related to Automated Decision-Making (Article 22):
                </strong>{" "}
                Individuals have the right not to be subject to decisions based
                solely on automated processing, including profiling, that produce
                legal effects or similarly significant effects on them.
              </span>
            </li>
          </ul>
          <p className="text-gray-400 leading-relaxed mt-4">
            Not sure if your current privacy policy covers all of these rights?
            Use the{" "}
            <Link
              href="/check"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              PolicyForge Compliance Checker
            </Link>{" "}
            to scan your existing policy and identify gaps.
          </p>
        </section>

        {/* Section 4: DPO Requirements */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            Data Protection Officer (DPO) Requirements
          </h2>
          <div className="space-y-4 text-gray-400 leading-relaxed">
            <p>
              Article 37 of the GDPR requires the appointment of a Data
              Protection Officer in three specific situations: when the processing
              is carried out by a public authority or body, when your core
              activities require regular and systematic monitoring of data
              subjects on a large scale, or when your core activities involve
              large-scale processing of special categories of data (such as
              health data, biometric data, or data concerning criminal
              convictions).
            </p>
            <p>
              Even if you are not legally required to appoint a DPO, you may
              choose to do so voluntarily. If you do, the same rules apply. The
              DPO must be independent, have expert knowledge of data protection
              law, and report directly to the highest level of management. Your
              privacy policy must include the DPO&apos;s contact details so that
              data subjects and supervisory authorities can reach them directly.
            </p>
            <p>
              For small businesses that do not need a full-time DPO, the role can
              be fulfilled by an external consultant or shared across a group of
              companies, provided there is no conflict of interest and the DPO is
              accessible to all relevant data subjects.
            </p>
          </div>
        </section>

        {/* Section 5: Cross-Border Data Transfers */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            Cross-Border Data Transfers Outside the EEA
          </h2>
          <div className="space-y-4 text-gray-400 leading-relaxed">
            <p>
              Chapter V of the GDPR restricts the transfer of personal data to
              countries outside the European Economic Area unless adequate
              safeguards are in place. If you use cloud hosting, analytics tools,
              email providers, or payment processors based outside the EU (as
              most businesses do), your privacy policy must disclose these
              transfers and explain the legal mechanism that makes them lawful.
            </p>
            <p>
              The primary mechanisms for lawful cross-border transfers include:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3">
                <span className="text-blue-400 font-bold mt-0.5">&#x2022;</span>
                <span>
                  <strong className="text-white">Adequacy Decisions:</strong> The
                  European Commission has determined that certain countries
                  provide an adequate level of data protection (e.g., Japan,
                  South Korea, the UK post-Brexit, and the US under the
                  EU-US Data Privacy Framework).
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 font-bold mt-0.5">&#x2022;</span>
                <span>
                  <strong className="text-white">
                    Standard Contractual Clauses (SCCs):
                  </strong>{" "}
                  Pre-approved contractual terms adopted by the European
                  Commission that bind the data importer to GDPR-equivalent
                  protections. The updated 2021 SCCs include four modules for
                  different transfer scenarios.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 font-bold mt-0.5">&#x2022;</span>
                <span>
                  <strong className="text-white">
                    Binding Corporate Rules (BCRs):
                  </strong>{" "}
                  Internal data protection policies adopted by multinational
                  groups and approved by a supervisory authority for intra-group
                  transfers.
                </span>
              </li>
            </ul>
            <p>
              Your privacy policy should list the specific countries where data
              is transferred, the service providers involved, and which safeguard
              mechanism applies to each transfer. Failing to disclose
              international transfers is one of the most common compliance gaps
              found in privacy policies. You can{" "}
              <Link
                href="/check"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                check your policy for transfer disclosure gaps
              </Link>{" "}
              using our free compliance scanner.
            </p>
          </div>
        </section>

        {/* Section 6: Breach Notification */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            GDPR Data Breach Notification Obligations
          </h2>
          <div className="space-y-4 text-gray-400 leading-relaxed">
            <p>
              Articles 33 and 34 of the GDPR impose strict breach notification
              requirements. When a personal data breach occurs, you must notify
              the relevant supervisory authority within 72 hours of becoming
              aware of it, unless the breach is unlikely to result in a risk to
              the rights and freedoms of individuals. If the breach poses a high
              risk, you must also notify the affected individuals directly
              without undue delay.
            </p>
            <p>
              Your privacy policy should describe your breach notification
              procedures, including how individuals will be contacted if their
              data is compromised. While the GDPR does not require you to publish
              your internal breach response plan, disclosing a summary of your
              approach builds trust and demonstrates accountability under
              Article 5(2).
            </p>
            <p>
              The notification to the supervisory authority must include the
              nature of the breach, the categories and approximate number of
              data subjects affected, the likely consequences, and the measures
              taken to address and mitigate the breach. Keeping detailed records
              of all breaches (including those not reported) is mandatory under
              Article 33(5).
            </p>
          </div>
        </section>

        {/* GDPR Privacy Policy Checklist */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            GDPR Privacy Policy Requirements Checklist
          </h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            Use this checklist to verify your privacy policy covers every
            mandatory disclosure required by the GDPR. Each item corresponds to
            a specific article or recital in the regulation.
          </p>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-3">
            {[
              "Identity and contact details of the data controller",
              "Contact details of the Data Protection Officer (if applicable)",
              "Purposes of processing for each category of data",
              "Lawful basis for each processing activity (one of the 6 bases)",
              "Categories of personal data collected",
              "Recipients or categories of recipients (third-party processors)",
              "Details of international data transfers and safeguards used",
              "Data retention periods for each category of data",
              "Right of access explained with instructions to exercise it",
              "Right to rectification explained",
              "Right to erasure (right to be forgotten) explained",
              "Right to restriction of processing explained",
              "Right to data portability explained",
              "Right to object to processing explained",
              "Rights related to automated decision-making and profiling",
              "Right to withdraw consent at any time",
              "Right to lodge a complaint with a supervisory authority",
              "Whether providing data is a statutory or contractual requirement",
              "Source of the data if not collected directly from the individual",
              "Cookie policy or link to separate cookie notice",
              "Details of any automated decision-making including profiling logic",
              "Date the policy was last updated",
            ].map((item, i) => (
              <label key={i} className="flex items-start gap-3 cursor-pointer">
                <div className="w-5 h-5 mt-0.5 border border-white/20 rounded flex-shrink-0 flex items-center justify-center">
                  <span className="text-xs text-gray-600">{i + 1}</span>
                </div>
                <span className="text-gray-300 text-sm leading-relaxed">
                  {item}
                </span>
              </label>
            ))}
          </div>
          <p className="text-gray-400 leading-relaxed mt-4">
            Missing any of these items? Our{" "}
            <Link href="/" className="text-blue-400 hover:text-blue-300 underline">
              GDPR privacy policy generator
            </Link>{" "}
            includes all 22 requirements automatically when you select the EU/GDPR
            jurisdiction.
          </p>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            Frequently Asked Questions About GDPR Privacy Policies
          </h2>
          <div className="space-y-6">
            <div className="border-b border-white/10 pb-6">
              <h3 className="text-lg font-semibold text-white mb-2">
                Does the GDPR apply to my business if I am based outside the EU?
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Yes. Article 3 of the GDPR has extraterritorial scope. It applies
                to any organisation that offers goods or services to individuals
                in the EEA, or monitors the behaviour of individuals in the EEA
                (such as through website analytics or tracking cookies),
                regardless of where the organisation is incorporated. A company
                in the United States with a website that receives EU traffic is
                subject to the GDPR.
              </p>
            </div>

            <div className="border-b border-white/10 pb-6">
              <h3 className="text-lg font-semibold text-white mb-2">
                What is the difference between a data controller and a data
                processor under the GDPR?
              </h3>
              <p className="text-gray-400 leading-relaxed">
                A data controller determines the purposes and means of processing
                personal data. If you run a website and decide what data to
                collect and why, you are the controller. A data processor
                processes data on behalf of the controller, such as a cloud
                hosting provider, email service, or analytics platform. Your
                privacy policy must be written from the perspective of the
                controller, but it must also identify the processors you use and
                explain their role.
              </p>
            </div>

            <div className="border-b border-white/10 pb-6">
              <h3 className="text-lg font-semibold text-white mb-2">
                How often should I update my GDPR privacy policy?
              </h3>
              <p className="text-gray-400 leading-relaxed">
                There is no fixed update schedule mandated by the GDPR, but you
                must update your privacy policy whenever there is a material
                change to your data processing activities. This includes adding
                new third-party services, changing your lawful basis for
                processing, collecting new categories of data, transferring data
                to new countries, or changing your data retention periods. Best
                practice is to review your policy at least every six months and
                after any significant operational change. Always display a
                &quot;last updated&quot; date prominently on the policy.
              </p>
            </div>

            <div className="border-b border-white/10 pb-6">
              <h3 className="text-lg font-semibold text-white mb-2">
                Can I use a free privacy policy template to comply with the GDPR?
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Generic templates are risky because the GDPR requires your
                privacy policy to be specific to your actual processing
                activities. A template that does not accurately describe the data
                you collect, the purposes you process it for, the third parties
                you share it with, and the lawful bases you rely on is not
                compliant. PolicyForge solves this by generating a policy
                tailored to your inputs, including your business type,
                jurisdiction, data collection practices, and third-party
                services. The{" "}
                <Link
                  href="/"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  free tier
                </Link>{" "}
                covers essential disclosures, while the Pro version adds full
                GDPR-specific sections.
              </p>
            </div>

            <div className="pb-2">
              <h3 className="text-lg font-semibold text-white mb-2">
                What happens if my privacy policy is not GDPR compliant?
              </h3>
              <p className="text-gray-400 leading-relaxed">
                An inadequate privacy policy can result in enforcement action by
                any of the EU&apos;s national Data Protection Authorities (DPAs).
                Fines for transparency violations under Articles 13 and 14 fall
                under the lower tier of GDPR penalties: up to &euro;10 million or
                2% of annual global turnover. However, if the inadequacy is
                linked to broader violations (such as processing without a lawful
                basis), the upper tier of up to &euro;20 million or 4% of
                turnover can apply. Beyond fines, enforcement orders can require
                you to stop processing entirely, which can halt your business
                operations. Use the{" "}
                <Link
                  href="/check"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  compliance checker
                </Link>{" "}
                to identify issues before a regulator does.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-white/10 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Generate a GDPR-Compliant Privacy Policy in Minutes
          </h2>
          <p className="text-gray-400 leading-relaxed mb-6 max-w-2xl mx-auto">
            Answer a few questions about your business, data collection
            practices, and third-party services. PolicyForge will generate a
            privacy policy that covers every GDPR requirement, including lawful
            bases, data subject rights, international transfers, and breach
            notification procedures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg text-lg hover:opacity-90 transition-opacity"
            >
              Generate Your Privacy Policy
            </Link>
            <Link
              href="/check"
              className="inline-block px-8 py-4 border border-white/20 text-white font-semibold rounded-lg text-lg hover:bg-white/5 transition-colors"
            >
              Check Your Existing Policy
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
          informational purposes. It does not constitute legal advice. Consult a
          qualified attorney for jurisdiction-specific compliance guidance.
        </p>
      </footer>
    </div>
  );
}
