import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Data Subject Access Request (DSAR) Template 2026 | Free GDPR SAR Guide - PolicyForge",
  description:
    "Free DSAR template and complete guide to handling data subject access requests under GDPR Article 15. Includes response checklist, identity verification steps, 30-day timeline, exemptions, and practical templates. Handle SARs with confidence.",
  keywords:
    "data subject access request template, DSAR template, GDPR data request template, SAR template free, subject access request, GDPR Article 15, data access request, DSAR response template, GDPR SAR, data subject rights, right of access GDPR, DSAR process, DSAR checklist, how to respond to DSAR",
  openGraph: {
    title:
      "Data Subject Access Request (DSAR) Template 2026 | Free Guide - PolicyForge",
    description:
      "Free DSAR template and complete guide to handling data subject access requests under GDPR Article 15. Response checklist, identity verification, 30-day timeline, and practical templates.",
    url: "https://policyforge.autonomous-claude.com/data-subject-access-request-template",
    siteName: "PolicyForge",
    type: "article",
    images: [
      {
        url: "https://policyforge.autonomous-claude.com/api/og?score=95&domain=DSAR+Template+Guide",
        width: 1200,
        height: 630,
        alt: "PolicyForge DSAR Template Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Data Subject Access Request (DSAR) Template 2026 | Free Guide - PolicyForge",
    description:
      "Free DSAR template and complete guide to handling data subject access requests under GDPR. Includes 30-day timeline, identity verification, exemptions, and response checklist.",
    images: [
      "https://policyforge.autonomous-claude.com/api/og?score=95&domain=DSAR+Template+Guide",
    ],
  },
  alternates: {
    canonical:
      "https://policyforge.autonomous-claude.com/data-subject-access-request-template",
  },
};

const faqItems = [
  {
    question: "What is a Data Subject Access Request (DSAR)?",
    answer:
      "A Data Subject Access Request (DSAR), also called a Subject Access Request (SAR), is a formal request from an individual to an organization asking for a copy of all the personal data the organization holds about them. Under GDPR Article 15, individuals have the right to obtain confirmation of whether their data is being processed and, if so, access to that data along with supplementary information about how it is used.",
  },
  {
    question: "How long do I have to respond to a DSAR?",
    answer:
      "Under GDPR, you must respond to a DSAR within one calendar month (approximately 30 days) of receiving the request. This can be extended by a further two months if the request is complex or you have received a large number of requests from the same individual. If you extend the deadline, you must inform the individual within the first month, explaining why the extension is necessary.",
  },
  {
    question: "Can I charge a fee for responding to a DSAR?",
    answer:
      "Generally, no. Under GDPR, the first copy of the data must be provided free of charge. However, you may charge a reasonable fee based on administrative costs if the individual requests further copies of the same data, or if the request is manifestly unfounded or excessive (particularly if it is repetitive). You must be able to demonstrate why you consider the request excessive.",
  },
  {
    question: "Can I refuse a data subject access request?",
    answer:
      "You can only refuse a DSAR if the request is manifestly unfounded or manifestly excessive. You must be able to demonstrate this and must inform the individual of the refusal within one month, providing the reasons and informing them of their right to lodge a complaint with a supervisory authority. The bar for refusal is very high and regulators scrutinize refusals closely.",
  },
  {
    question:
      "Do I need to verify the identity of the person making the DSAR?",
    answer:
      "Yes, you should take reasonable steps to verify the identity of the person making the request before disclosing any personal data. This is to prevent unauthorized disclosure. However, you should not use identity verification as a barrier to delay or obstruct the request. The level of verification should be proportionate to the sensitivity of the data.",
  },
  {
    question: "Does a DSAR have to be in writing?",
    answer:
      "No. Under GDPR, a DSAR can be made verbally (e.g., over the phone or in person), by email, through social media, or via any other channel. There is no requirement for a specific format. If you receive a verbal request, it is good practice to document it immediately. You cannot require individuals to use a specific form, although you can provide one for convenience.",
  },
  {
    question:
      "What happens if I fail to respond to a DSAR within the deadline?",
    answer:
      "Failure to respond to a DSAR within the required timeframe is a breach of GDPR. The individual can lodge a complaint with their supervisory authority, which can investigate and impose fines. Supervisory authorities have issued significant fines for failure to respond to DSARs. Under GDPR, fines for infringement of data subject rights can reach up to \u20AC20 million or 4% of annual global turnover, whichever is higher.",
  },
  {
    question: "How does having a privacy policy help with DSARs?",
    answer:
      "A comprehensive privacy policy is essential for DSAR compliance because it documents your data processing activities, making it easier to locate and compile the data you hold about an individual. It also sets clear expectations about what data you collect and why, reducing the scope of DSAR responses. A well-structured privacy policy generated by a tool like PolicyForge ensures you have a clear record of processing activities that directly supports your DSAR response process.",
  },
];

export default function DataSubjectAccessRequestTemplate() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#ededed]">
      {/* FAQ Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }),
        }}
      />

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
          Data Subject Access Request (DSAR) Template: Complete Guide for 2026
        </h1>

        <p className="text-gray-400 text-lg mb-8">
          Under GDPR Article 15, every individual has the right to request
          access to the personal data an organization holds about them. This is
          called a Data Subject Access Request (DSAR) or Subject Access Request
          (SAR). Organizations must respond within{" "}
          <strong className="text-white">one calendar month</strong> &mdash;
          failure to comply can result in fines of up to{" "}
          <strong className="text-red-400">
            &euro;20,000,000 or 4% of global annual revenue
          </strong>
          . This guide covers everything you need to know about handling DSARs,
          including free templates, checklists, and practical advice.
        </p>

        {/* Top CTA */}
        <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-blue-800/40 rounded-xl p-6 mb-10">
          <h3 className="text-lg font-semibold text-white mb-2">
            Your Privacy Policy Is the Foundation of DSAR Compliance
          </h3>
          <p className="text-gray-300 text-sm mb-4">
            A clear, comprehensive privacy policy documents exactly what data
            you collect and why &mdash; making it significantly easier to locate
            and compile data when a DSAR arrives. PolicyForge generates
            GDPR-compliant privacy policies tailored to your specific data
            practices in under 2 minutes.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link
              href="https://policyforge.autonomous-claude.com/"
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2.5 px-6 rounded-lg transition text-sm"
            >
              Generate Privacy Policy Free
            </Link>
            <Link
              href="https://policyforge.autonomous-claude.com/check"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold py-2.5 px-6 rounded-lg transition text-sm"
            >
              Scan Your Compliance Free
            </Link>
          </div>
        </div>

        <div className="space-y-10 text-gray-300 leading-relaxed text-[17px]">
          {/* Section 1: What is a DSAR */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              What Is a Data Subject Access Request (DSAR)?
            </h2>
            <p className="mb-4">
              A Data Subject Access Request (DSAR) &mdash; also known as a
              Subject Access Request (SAR) &mdash; is a legal mechanism under
              the General Data Protection Regulation (GDPR) that allows any
              individual (&ldquo;data subject&rdquo;) to ask an organization
              for a copy of the personal data it holds about them. The right of
              access is codified in{" "}
              <strong className="text-white">GDPR Article 15</strong> and is
              one of the most frequently exercised data subject rights.
            </p>
            <p className="mb-4">
              DSARs can come from anyone whose personal data you process:
              customers, employees, job applicants, website visitors,
              newsletter subscribers, or any other individual. The request does
              not need to reference GDPR or Article 15 specifically &mdash; any
              communication that clearly expresses a desire to access personal
              data should be treated as a DSAR.
            </p>
            <p className="mb-4">
              Since GDPR came into force in May 2018, DSARs have increased
              dramatically. The{" "}
              <strong className="text-white">
                UK Information Commissioner&apos;s Office (ICO)
              </strong>{" "}
              reported a 159% increase in subject access complaints between
              2018 and 2023. Organizations that are not prepared to handle
              DSARs efficiently face both regulatory risk and significant
              operational burden.
            </p>
            <div className="bg-yellow-900/20 border border-yellow-800/30 rounded-lg p-4 mt-4">
              <p className="text-sm text-yellow-300">
                <strong>Key Point:</strong> A DSAR is not just an
                administrative task &mdash; it is a legal obligation. Failing
                to respond within 30 days, providing incomplete data, or
                refusing without valid justification are all enforceable
                violations under GDPR.
              </p>
            </div>
          </section>

          {/* Section 2: GDPR Article 15 Requirements */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              GDPR Article 15: What the Law Actually Requires
            </h2>
            <p className="mb-4">
              Article 15 of the GDPR is the legal basis for data subject access
              requests. Understanding its exact requirements is essential for
              compliance. The article grants data subjects the right to obtain
              from the data controller:
            </p>
            <div className="space-y-3 mb-6">
              <div className="bg-gray-800/50 rounded-lg p-4 flex gap-3">
                <span className="text-blue-400 flex-shrink-0 mt-0.5 font-bold">
                  1
                </span>
                <div>
                  <span className="font-semibold text-white">
                    Confirmation of processing
                  </span>
                  <p className="text-sm text-gray-400 mt-1">
                    Whether or not their personal data is being processed. If
                    you hold no data about the individual, you must confirm
                    this &mdash; a &ldquo;nil return&rdquo; is still a valid
                    and required response.
                  </p>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 flex gap-3">
                <span className="text-blue-400 flex-shrink-0 mt-0.5 font-bold">
                  2
                </span>
                <div>
                  <span className="font-semibold text-white">
                    A copy of the personal data
                  </span>
                  <p className="text-sm text-gray-400 mt-1">
                    A complete copy of all personal data you hold about the
                    individual, in a commonly used electronic format if the
                    request was made electronically. This includes data in
                    databases, email threads, CRM records, support tickets,
                    logs, and any other system.
                  </p>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 flex gap-3">
                <span className="text-blue-400 flex-shrink-0 mt-0.5 font-bold">
                  3
                </span>
                <div>
                  <span className="font-semibold text-white">
                    The purposes of processing
                  </span>
                  <p className="text-sm text-gray-400 mt-1">
                    A clear explanation of why you are processing their data
                    &mdash; marketing, contract performance, legal obligations,
                    analytics, etc. Each processing purpose must be disclosed.
                  </p>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 flex gap-3">
                <span className="text-blue-400 flex-shrink-0 mt-0.5 font-bold">
                  4
                </span>
                <div>
                  <span className="font-semibold text-white">
                    Categories of data concerned
                  </span>
                  <p className="text-sm text-gray-400 mt-1">
                    The types of personal data being processed: identity data,
                    contact details, financial data, usage data, location data,
                    health data, biometric data, etc.
                  </p>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 flex gap-3">
                <span className="text-blue-400 flex-shrink-0 mt-0.5 font-bold">
                  5
                </span>
                <div>
                  <span className="font-semibold text-white">
                    Recipients or categories of recipients
                  </span>
                  <p className="text-sm text-gray-400 mt-1">
                    Who has received or will receive the data: third-party
                    processors, partners, government agencies, etc. Where
                    possible, name specific recipients rather than just
                    categories.
                  </p>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 flex gap-3">
                <span className="text-blue-400 flex-shrink-0 mt-0.5 font-bold">
                  6
                </span>
                <div>
                  <span className="font-semibold text-white">
                    Retention periods
                  </span>
                  <p className="text-sm text-gray-400 mt-1">
                    How long you intend to store the data, or the criteria used
                    to determine that period. &ldquo;Indefinitely&rdquo; or
                    &ldquo;as long as necessary&rdquo; is not acceptable.
                  </p>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 flex gap-3">
                <span className="text-blue-400 flex-shrink-0 mt-0.5 font-bold">
                  7
                </span>
                <div>
                  <span className="font-semibold text-white">
                    Data subject rights information
                  </span>
                  <p className="text-sm text-gray-400 mt-1">
                    Inform them of their right to rectification, erasure,
                    restriction of processing, and the right to object. Also
                    inform them of their right to lodge a complaint with a
                    supervisory authority.
                  </p>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 flex gap-3">
                <span className="text-blue-400 flex-shrink-0 mt-0.5 font-bold">
                  8
                </span>
                <div>
                  <span className="font-semibold text-white">
                    Source of the data
                  </span>
                  <p className="text-sm text-gray-400 mt-1">
                    If the data was not collected directly from the individual,
                    provide information about the source &mdash; e.g., a
                    third-party data broker, a referral, public records, or
                    another controller.
                  </p>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 flex gap-3">
                <span className="text-blue-400 flex-shrink-0 mt-0.5 font-bold">
                  9
                </span>
                <div>
                  <span className="font-semibold text-white">
                    Automated decision-making information
                  </span>
                  <p className="text-sm text-gray-400 mt-1">
                    If automated decision-making (including profiling) is
                    involved, provide meaningful information about the logic,
                    significance, and envisaged consequences for the data
                    subject.
                  </p>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 flex gap-3">
                <span className="text-blue-400 flex-shrink-0 mt-0.5 font-bold">
                  10
                </span>
                <div>
                  <span className="font-semibold text-white">
                    International transfer safeguards
                  </span>
                  <p className="text-sm text-gray-400 mt-1">
                    If data is transferred to a third country or international
                    organization, inform the data subject of the appropriate
                    safeguards in place under Article 46 (SCCs, BCRs, adequacy
                    decisions, etc.).
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-blue-900/20 border border-blue-800/30 rounded-lg p-4">
              <p className="text-sm text-blue-300">
                <strong>PolicyForge makes this easier:</strong> When your
                privacy policy clearly documents processing purposes,
                recipients, retention periods, and lawful bases, you already
                have the supplementary information DSAR responses require.{" "}
                <Link
                  href="https://policyforge.autonomous-claude.com/"
                  className="underline hover:text-blue-200"
                >
                  Generate your privacy policy &rarr;
                </Link>
              </p>
            </div>
          </section>

          {/* Section 3: How to Handle DSARs */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              How to Handle a Data Subject Access Request: Step-by-Step
            </h2>
            <p className="mb-4">
              Handling DSARs correctly requires a systematic process. The
              following steps cover the complete lifecycle from receiving a
              request to delivering the response. Having a documented process
              before you receive your first DSAR is essential &mdash; you
              cannot build the process during the 30-day deadline.
            </p>

            {/* Step 1 */}
            <div className="bg-gray-800/30 rounded-xl p-6 mb-4 border border-white/5">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <span className="bg-blue-600 text-white text-sm font-bold w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0">
                  1
                </span>
                Recognize the Request
              </h3>
              <p className="mb-3">
                A DSAR does not have to use specific legal language. Any
                request such as &ldquo;I want to know what data you have about
                me&rdquo; or &ldquo;Send me my personal information&rdquo;
                qualifies. Train all staff who interact with customers, users,
                or the public to recognize DSARs &mdash; they can arrive via
                email, social media, phone calls, live chat, postal mail, or
                even in person.
              </p>
              <p className="text-sm text-gray-400">
                <strong className="text-yellow-400">Common mistake:</strong>{" "}
                Routing DSARs through general customer support where they sit
                in a queue. DSARs have a legal deadline and must be escalated
                to your data protection team (or designated handler)
                immediately.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-gray-800/30 rounded-xl p-6 mb-4 border border-white/5">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <span className="bg-blue-600 text-white text-sm font-bold w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0">
                  2
                </span>
                Log and Acknowledge
              </h3>
              <p className="mb-3">
                Record the date the request was received &mdash; this starts
                the 30-day clock. Log the request in a DSAR tracker that
                records: the date received, the requestor&apos;s identity,
                the channel used, the assigned handler, and the deadline. Send
                an acknowledgment to the requestor within 2-3 business days
                confirming receipt and the expected response date.
              </p>
              <p className="text-sm text-gray-400">
                <strong className="text-yellow-400">Tip:</strong> Use a
                dedicated email address (e.g., privacy@yourcompany.com or
                dsar@yourcompany.com) and mention it in your privacy policy.
                This centralizes requests and prevents them from getting lost.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-gray-800/30 rounded-xl p-6 mb-4 border border-white/5">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <span className="bg-blue-600 text-white text-sm font-bold w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0">
                  3
                </span>
                Verify Identity
              </h3>
              <p className="mb-3">
                Before disclosing any personal data, verify the requestor is
                who they claim to be. The level of verification should be
                proportionate to the sensitivity of the data &mdash; do not
                over-verify to the point of discouraging requests, but do not
                under-verify and risk disclosing data to the wrong person.
              </p>
              <div className="bg-gray-800/50 rounded-lg p-4 mt-3">
                <p className="text-sm font-semibold text-white mb-2">
                  Appropriate verification methods:
                </p>
                <ul className="text-sm text-gray-400 space-y-1.5">
                  <li>
                    &bull; If the request comes from a verified email on file,
                    this is often sufficient for non-sensitive data
                  </li>
                  <li>
                    &bull; Ask the individual to confirm details only they would
                    know (account number, recent transaction, date of birth)
                  </li>
                  <li>
                    &bull; For sensitive data (health, financial), request a
                    copy of government-issued ID
                  </li>
                  <li>
                    &bull; For employee DSARs, verify through existing HR
                    authentication channels
                  </li>
                  <li>
                    &bull; Never request more personal data than necessary for
                    verification
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-gray-800/30 rounded-xl p-6 mb-4 border border-white/5">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <span className="bg-blue-600 text-white text-sm font-bold w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0">
                  4
                </span>
                Locate and Compile Data
              </h3>
              <p className="mb-3">
                Search all systems where personal data may be stored. This is
                often the most time-consuming step. Systems to check typically
                include:
              </p>
              <div className="grid md:grid-cols-2 gap-3 mt-3">
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <p className="text-sm font-semibold text-white mb-1">
                    Digital Systems
                  </p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>&bull; CRM (Salesforce, HubSpot, etc.)</li>
                    <li>&bull; Email servers and threads</li>
                    <li>&bull; Databases and application data</li>
                    <li>&bull; Analytics platforms</li>
                    <li>&bull; Marketing automation tools</li>
                    <li>&bull; Cloud storage (Google Drive, Dropbox)</li>
                    <li>&bull; Support ticket systems</li>
                    <li>&bull; Payment processors (Stripe, PayPal)</li>
                  </ul>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <p className="text-sm font-semibold text-white mb-1">
                    Additional Sources
                  </p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>&bull; CCTV/surveillance footage</li>
                    <li>&bull; HR and payroll systems</li>
                    <li>&bull; Backup and archived data</li>
                    <li>&bull; Physical files and records</li>
                    <li>&bull; Third-party processors</li>
                    <li>&bull; Server logs and access logs</li>
                    <li>&bull; Chat/messaging platforms</li>
                    <li>&bull; Social media interactions</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="bg-gray-800/30 rounded-xl p-6 mb-4 border border-white/5">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <span className="bg-blue-600 text-white text-sm font-bold w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0">
                  5
                </span>
                Review and Redact
              </h3>
              <p className="mb-3">
                Before sending data to the requestor, review it carefully.
                You must not disclose personal data about other identifiable
                individuals unless they have consented or it is reasonable to
                disclose without consent. Redact third-party personal data from
                documents, emails, and records. Also review for any applicable
                exemptions (see the Exemptions section below).
              </p>
              <p className="text-sm text-gray-400">
                <strong className="text-yellow-400">Important:</strong>{" "}
                Redaction must be thorough. A poorly redacted PDF where hidden
                text can be copied is a data breach in itself. Use proper
                redaction tools, not just black highlight.
              </p>
            </div>

            {/* Step 6 */}
            <div className="bg-gray-800/30 rounded-xl p-6 mb-4 border border-white/5">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <span className="bg-blue-600 text-white text-sm font-bold w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0">
                  6
                </span>
                Prepare and Send the Response
              </h3>
              <p className="mb-3">
                Compile the personal data into a clear, organized format. If
                the request was made electronically, provide the data in a
                commonly used electronic format (PDF, CSV, or JSON). Include
                the supplementary information required by Article 15 &mdash;
                processing purposes, categories, recipients, retention
                periods, rights information, data sources, and automated
                decision-making details. Send via a secure channel (encrypted
                email, secure download link, or the platform the request came
                through).
              </p>
            </div>

            {/* Step 7 */}
            <div className="bg-gray-800/30 rounded-xl p-6 border border-white/5">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <span className="bg-blue-600 text-white text-sm font-bold w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0">
                  7
                </span>
                Document and Close
              </h3>
              <p>
                Record the response in your DSAR log: what was provided, the
                date of response, any exemptions applied, and any third-party
                data redacted. Retain this record for accountability purposes.
                If you applied any exemptions or extensions, document your
                reasoning in detail &mdash; this is what a supervisory
                authority will review if the individual complains.
              </p>
            </div>
          </section>

          {/* Section 4: 30-Day Response Timeline */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              The 30-Day DSAR Response Timeline
            </h2>
            <p className="mb-4">
              The GDPR mandates a strict timeline for DSAR responses. Here is
              how to manage it effectively:
            </p>
            <div className="space-y-3">
              <div className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-green-500">
                <div className="flex items-start gap-3">
                  <div>
                    <span className="font-semibold text-white">
                      Day 0: Request received
                    </span>
                    <p className="text-sm text-gray-400 mt-1">
                      The clock starts on the day you receive the request (not
                      the day you recognize it as a DSAR). This is why
                      training staff to recognize DSARs immediately is
                      critical. If identity verification is needed, the clock
                      pauses until you receive verification &mdash; but you
                      must request verification promptly.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-blue-500">
                <div className="flex items-start gap-3">
                  <div>
                    <span className="font-semibold text-white">
                      Days 1-3: Acknowledge and verify
                    </span>
                    <p className="text-sm text-gray-400 mt-1">
                      Send an acknowledgment confirming receipt. If identity
                      verification is needed, request it immediately. Do not
                      delay verification requests &mdash; this eats into your
                      response window unnecessarily.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-blue-500">
                <div className="flex items-start gap-3">
                  <div>
                    <span className="font-semibold text-white">
                      Days 3-14: Locate and compile data
                    </span>
                    <p className="text-sm text-gray-400 mt-1">
                      Search all systems, contact third-party processors if
                      needed, and begin compiling the response. If the request
                      is complex (multiple systems, large volumes, exemptions
                      to evaluate), assess whether a 2-month extension is
                      needed and notify the requestor before day 30.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-blue-500">
                <div className="flex items-start gap-3">
                  <div>
                    <span className="font-semibold text-white">
                      Days 14-25: Review, redact, and prepare
                    </span>
                    <p className="text-sm text-gray-400 mt-1">
                      Review all compiled data for third-party personal data
                      that must be redacted. Apply any exemptions. Prepare the
                      supplementary information. Format the response package.
                      Have it reviewed by your DPO or data protection lead.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-red-500">
                <div className="flex items-start gap-3">
                  <div>
                    <span className="font-semibold text-white">
                      Day 30: Deadline
                    </span>
                    <p className="text-sm text-gray-400 mt-1">
                      The response must be sent to the data subject by this
                      date. If the deadline falls on a weekend or public
                      holiday, the deadline is the next business day. If you
                      have notified the requestor of an extension, the
                      extended deadline is a maximum of 3 months from the
                      original request date.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-red-900/20 border border-red-800/30 rounded-lg p-4 mt-4">
              <p className="text-sm text-red-300">
                <strong>Warning:</strong> The 2-month extension is not
                automatic. You must: (a) have a genuinely complex reason, (b)
                notify the individual within the first 30 days, and (c)
                explain why the extension is necessary. Routinely extending
                all DSARs will attract regulatory scrutiny.
              </p>
            </div>
          </section>

          {/* Section 5: Identity Verification */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Identity Verification for DSARs
            </h2>
            <p className="mb-4">
              Identity verification is a balancing act. You need to confirm the
              requestor&apos;s identity to prevent unauthorized disclosure
              (which would itself be a data breach), but you cannot use
              verification as a barrier to discourage or delay requests.
              Recital 64 of GDPR states that controllers should use{" "}
              <strong className="text-white">
                &ldquo;all reasonable means&rdquo;
              </strong>{" "}
              to verify identity.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-4 text-gray-400">
                      Scenario
                    </th>
                    <th className="text-left py-3 px-4 text-gray-400">
                      Appropriate Verification
                    </th>
                    <th className="text-left py-3 px-4 text-gray-400">
                      Too Much / Too Little
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 font-semibold text-white">
                      Request from registered email
                    </td>
                    <td className="py-3 px-4">
                      Email match to account is sufficient for basic account
                      data
                    </td>
                    <td className="py-3 px-4 text-green-400">
                      Appropriate
                    </td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 font-semibold text-white">
                      Request from unknown email
                    </td>
                    <td className="py-3 px-4">
                      Ask for account identifiers + one additional proof
                    </td>
                    <td className="py-3 px-4 text-green-400">
                      Appropriate
                    </td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 font-semibold text-white">
                      Request for sensitive data (health, financial)
                    </td>
                    <td className="py-3 px-4">
                      Government-issued photo ID + additional verification
                    </td>
                    <td className="py-3 px-4 text-green-400">
                      Appropriate
                    </td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 font-semibold text-white">
                      Requesting notarized affidavit for newsletter data
                    </td>
                    <td className="py-3 px-4">
                      Disproportionate for low-sensitivity data
                    </td>
                    <td className="py-3 px-4 text-red-400">Too much</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-white">
                      No verification at all for sensitive data
                    </td>
                    <td className="py-3 px-4">
                      Risk of unauthorized disclosure (a data breach)
                    </td>
                    <td className="py-3 px-4 text-red-400">Too little</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 6: What Data to Include */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              What Data Must You Include in a DSAR Response?
            </h2>
            <p className="mb-4">
              A DSAR response must include{" "}
              <strong className="text-white">all personal data</strong> you
              hold about the individual, plus the supplementary information
              required by Article 15. &ldquo;Personal data&rdquo; is broadly
              defined under GDPR and includes any information relating to an
              identified or identifiable natural person.
            </p>
            <div className="space-y-3 mb-6">
              <div className="bg-gray-800/50 rounded-lg p-4">
                <span className="font-semibold text-white">
                  Identity &amp; Contact Data
                </span>
                <p className="text-sm text-gray-400 mt-1">
                  Name, email address, phone number, postal address, username,
                  account ID, customer reference number
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <span className="font-semibold text-white">
                  Transaction &amp; Financial Data
                </span>
                <p className="text-sm text-gray-400 mt-1">
                  Purchase history, payment records, invoices, subscription
                  details, billing information (redact full card numbers)
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <span className="font-semibold text-white">
                  Technical &amp; Usage Data
                </span>
                <p className="text-sm text-gray-400 mt-1">
                  IP addresses, device identifiers, browser fingerprints,
                  cookies, login timestamps, page visit history, click data,
                  search queries
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <span className="font-semibold text-white">
                  Communications Data
                </span>
                <p className="text-sm text-gray-400 mt-1">
                  Emails sent/received, support tickets, chat transcripts,
                  call recordings, notes made about the individual by staff
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <span className="font-semibold text-white">
                  Marketing &amp; Preferences
                </span>
                <p className="text-sm text-gray-400 mt-1">
                  Consent records, marketing opt-in/out history, preference
                  settings, segmentation data, profiling information
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <span className="font-semibold text-white">
                  HR &amp; Employment Data (for employee DSARs)
                </span>
                <p className="text-sm text-gray-400 mt-1">
                  Performance reviews, disciplinary records, salary
                  information, attendance records, training records, internal
                  emails about the employee
                </p>
              </div>
            </div>
            <div className="bg-yellow-900/20 border border-yellow-800/30 rounded-lg p-4">
              <p className="text-sm text-yellow-300">
                <strong>Don&apos;t forget:</strong> Personal data includes
                opinions and assessments about the individual (e.g., staff
                notes saying &ldquo;this customer is difficult&rdquo;), CCTV
                footage, recorded phone calls, and metadata like login times.
                If it relates to an identifiable person, it is personal data.
              </p>
            </div>
          </section>

          {/* Section 7: Exemptions */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              DSAR Exemptions: When You Can Withhold Data
            </h2>
            <p className="mb-4">
              While the right of access is broad, it is not absolute. GDPR and
              national laws provide several exemptions where you may withhold
              some or all data. However, exemptions are narrowly interpreted
              and you must apply them on a case-by-case basis &mdash; you
              cannot apply blanket exemptions to all DSARs.
            </p>
            <div className="space-y-3">
              <div className="bg-gray-800/50 rounded-lg p-4 flex gap-3">
                <span className="text-red-400 flex-shrink-0 mt-0.5 font-bold text-lg">
                  &times;
                </span>
                <div>
                  <span className="font-semibold text-white">
                    Third-party personal data
                  </span>
                  <p className="text-sm text-gray-400 mt-1">
                    You must not disclose personal data about other
                    identifiable individuals unless they have consented or it
                    is reasonable in the circumstances. Redact third-party
                    names, contact details, and identifiers from documents.
                  </p>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 flex gap-3">
                <span className="text-red-400 flex-shrink-0 mt-0.5 font-bold text-lg">
                  &times;
                </span>
                <div>
                  <span className="font-semibold text-white">
                    Legal professional privilege
                  </span>
                  <p className="text-sm text-gray-400 mt-1">
                    Communications between a client and their lawyer for the
                    purpose of giving or receiving legal advice are exempt.
                    This includes internal legal assessments of the
                    individual&apos;s case.
                  </p>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 flex gap-3">
                <span className="text-red-400 flex-shrink-0 mt-0.5 font-bold text-lg">
                  &times;
                </span>
                <div>
                  <span className="font-semibold text-white">
                    Manifestly unfounded or excessive requests
                  </span>
                  <p className="text-sm text-gray-400 mt-1">
                    If a request is clearly made with no real intent to access
                    data (e.g., to harass or cause disruption) or is
                    repetitive with no change in circumstances, you may refuse
                    or charge a reasonable fee. The burden of proof is on you
                    to demonstrate the request is manifestly unfounded or
                    excessive.
                  </p>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 flex gap-3">
                <span className="text-red-400 flex-shrink-0 mt-0.5 font-bold text-lg">
                  &times;
                </span>
                <div>
                  <span className="font-semibold text-white">
                    Prejudice to crime prevention or detection
                  </span>
                  <p className="text-sm text-gray-400 mt-1">
                    Under national law exemptions (e.g., UK DPA 2018 Schedule
                    2), data may be withheld if disclosure would prejudice the
                    prevention or detection of crime, or the apprehension or
                    prosecution of offenders.
                  </p>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 flex gap-3">
                <span className="text-red-400 flex-shrink-0 mt-0.5 font-bold text-lg">
                  &times;
                </span>
                <div>
                  <span className="font-semibold text-white">
                    Trade secrets and intellectual property
                  </span>
                  <p className="text-sm text-gray-400 mt-1">
                    While not a blanket exemption, you may redact information
                    that would reveal trade secrets or proprietary algorithms.
                    However, you must still provide the personal data itself
                    &mdash; you can redact the method by which it was derived,
                    not the data about the individual.
                  </p>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 flex gap-3">
                <span className="text-red-400 flex-shrink-0 mt-0.5 font-bold text-lg">
                  &times;
                </span>
                <div>
                  <span className="font-semibold text-white">
                    Management forecasting and planning
                  </span>
                  <p className="text-sm text-gray-400 mt-1">
                    Under certain national exemptions, data relating to
                    management forecasting or planning may be exempt if
                    disclosure would prejudice the conduct of the business
                    (e.g., planned redundancies before they are announced).
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 8: DSAR Response Template */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Free DSAR Response Template
            </h2>
            <p className="mb-4">
              Use this template as a starting point for your DSAR response
              letter. Customize it to match your organization&apos;s specific
              data processing activities and the scope of the individual
              request.
            </p>

            <div className="bg-gray-800/70 rounded-xl p-6 border border-white/10 font-mono text-sm leading-relaxed">
              <p className="text-green-400 mb-4">
                {"// DSAR Response Letter Template"}
              </p>
              <p className="text-gray-300 mb-2">
                <span className="text-white">[Your Company Name]</span>
              </p>
              <p className="text-gray-300 mb-2">
                <span className="text-white">[Company Address]</span>
              </p>
              <p className="text-gray-300 mb-4">
                <span className="text-white">[Date]</span>
              </p>
              <p className="text-gray-300 mb-4">
                Dear <span className="text-white">[Data Subject Name]</span>,
              </p>
              <p className="text-gray-300 mb-4">
                Thank you for your data subject access request received on{" "}
                <span className="text-white">[Date Received]</span>. In
                accordance with Article 15 of the General Data Protection
                Regulation (GDPR), we are writing to provide you with the
                personal data we hold about you and the required supplementary
                information.
              </p>
              <p className="text-gray-300 mb-2">
                <span className="text-cyan-400 font-semibold">
                  1. Personal Data We Hold About You
                </span>
              </p>
              <p className="text-gray-300 mb-4">
                Please find attached a complete copy of the personal data we
                hold about you in{" "}
                <span className="text-white">[format: PDF/CSV/JSON]</span>{" "}
                format. This includes data from the following systems:{" "}
                <span className="text-white">
                  [list systems: CRM, email, database, etc.]
                </span>
              </p>
              <p className="text-gray-300 mb-2">
                <span className="text-cyan-400 font-semibold">
                  2. Purposes of Processing
                </span>
              </p>
              <p className="text-gray-300 mb-4">
                We process your personal data for the following purposes:{" "}
                <span className="text-white">
                  [e.g., providing our service, processing payments, sending
                  marketing communications, etc.]
                </span>
              </p>
              <p className="text-gray-300 mb-2">
                <span className="text-cyan-400 font-semibold">
                  3. Categories of Data
                </span>
              </p>
              <p className="text-gray-300 mb-4">
                The categories of personal data we process include:{" "}
                <span className="text-white">
                  [identity data, contact data, transaction data, usage data,
                  etc.]
                </span>
              </p>
              <p className="text-gray-300 mb-2">
                <span className="text-cyan-400 font-semibold">
                  4. Recipients
                </span>
              </p>
              <p className="text-gray-300 mb-4">
                Your data has been shared with the following recipients:{" "}
                <span className="text-white">
                  [list: payment processor, hosting provider, analytics, etc.]
                </span>
              </p>
              <p className="text-gray-300 mb-2">
                <span className="text-cyan-400 font-semibold">
                  5. Retention Period
                </span>
              </p>
              <p className="text-gray-300 mb-4">
                We retain your personal data for{" "}
                <span className="text-white">[retention period]</span> from{" "}
                <span className="text-white">
                  [starting point: last activity, account closure, etc.]
                </span>
              </p>
              <p className="text-gray-300 mb-2">
                <span className="text-cyan-400 font-semibold">
                  6. Your Rights
                </span>
              </p>
              <p className="text-gray-300 mb-4">
                You have the right to: request rectification of inaccurate
                data, request erasure of your data, restrict processing,
                object to processing, data portability, and lodge a complaint
                with{" "}
                <span className="text-white">
                  [relevant supervisory authority]
                </span>
                .
              </p>
              <p className="text-gray-300 mb-2">
                <span className="text-cyan-400 font-semibold">
                  7. Data Source
                </span>
              </p>
              <p className="text-gray-300 mb-4">
                Your data was collected{" "}
                <span className="text-white">
                  [directly from you / from the following sources: ...]
                </span>
              </p>
              <p className="text-gray-300 mb-4">
                If you have any questions about this response, please contact
                us at{" "}
                <span className="text-white">[privacy email address]</span>.
              </p>
              <p className="text-gray-300 mb-2">Sincerely,</p>
              <p className="text-gray-300">
                <span className="text-white">[DPO / Privacy Team Name]</span>
              </p>
              <p className="text-gray-300">
                <span className="text-white">[Your Company Name]</span>
              </p>
            </div>
          </section>

          {/* Section 9: DSAR Response Checklist */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              DSAR Response Checklist
            </h2>
            <p className="mb-4">
              Use this checklist to ensure your DSAR response is complete and
              compliant. Missing even one element can result in a regulatory
              complaint.
            </p>
            <div className="space-y-3">
              <div className="bg-gray-800/50 rounded-lg p-4 flex gap-3">
                <span className="text-green-400 flex-shrink-0 mt-0.5">
                  &#9744;
                </span>
                <div>
                  <span className="font-semibold text-white">
                    Request logged with date received
                  </span>
                  <p className="text-sm text-gray-400 mt-1">
                    Record the exact date the request was received. This is
                    day zero for your 30-day deadline.
                  </p>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 flex gap-3">
                <span className="text-green-400 flex-shrink-0 mt-0.5">
                  &#9744;
                </span>
                <div>
                  <span className="font-semibold text-white">
                    Acknowledgment sent to requestor
                  </span>
                  <p className="text-sm text-gray-400 mt-1">
                    Confirm receipt within 2-3 business days and provide the
                    expected response date.
                  </p>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 flex gap-3">
                <span className="text-green-400 flex-shrink-0 mt-0.5">
                  &#9744;
                </span>
                <div>
                  <span className="font-semibold text-white">
                    Identity verified proportionately
                  </span>
                  <p className="text-sm text-gray-400 mt-1">
                    Verify identity using methods proportionate to data
                    sensitivity. Document the verification method used.
                  </p>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 flex gap-3">
                <span className="text-green-400 flex-shrink-0 mt-0.5">
                  &#9744;
                </span>
                <div>
                  <span className="font-semibold text-white">
                    All systems searched for personal data
                  </span>
                  <p className="text-sm text-gray-400 mt-1">
                    Check every system where personal data may be stored:
                    databases, CRM, email, analytics, backups, physical files,
                    third-party processors.
                  </p>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 flex gap-3">
                <span className="text-green-400 flex-shrink-0 mt-0.5">
                  &#9744;
                </span>
                <div>
                  <span className="font-semibold text-white">
                    Third-party data redacted
                  </span>
                  <p className="text-sm text-gray-400 mt-1">
                    Remove or redact personal data of other identifiable
                    individuals from the response documents.
                  </p>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 flex gap-3">
                <span className="text-green-400 flex-shrink-0 mt-0.5">
                  &#9744;
                </span>
                <div>
                  <span className="font-semibold text-white">
                    Exemptions assessed and documented
                  </span>
                  <p className="text-sm text-gray-400 mt-1">
                    If withholding any data, document which exemption applies
                    and why. Be prepared to justify this to a supervisory
                    authority.
                  </p>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 flex gap-3">
                <span className="text-green-400 flex-shrink-0 mt-0.5">
                  &#9744;
                </span>
                <div>
                  <span className="font-semibold text-white">
                    Supplementary information included
                  </span>
                  <p className="text-sm text-gray-400 mt-1">
                    Processing purposes, data categories, recipients,
                    retention periods, rights information, data sources, and
                    automated decision-making details are all required.
                  </p>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 flex gap-3">
                <span className="text-green-400 flex-shrink-0 mt-0.5">
                  &#9744;
                </span>
                <div>
                  <span className="font-semibold text-white">
                    Data provided in accessible format
                  </span>
                  <p className="text-sm text-gray-400 mt-1">
                    If the request was electronic, provide data in a commonly
                    used electronic format (PDF, CSV, JSON). Ensure it is
                    readable and well-organized.
                  </p>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 flex gap-3">
                <span className="text-green-400 flex-shrink-0 mt-0.5">
                  &#9744;
                </span>
                <div>
                  <span className="font-semibold text-white">
                    Response sent via secure channel
                  </span>
                  <p className="text-sm text-gray-400 mt-1">
                    Use encrypted email, a secure download portal, or the same
                    authenticated channel the request was received through. Do
                    not send personal data via unencrypted email.
                  </p>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 flex gap-3">
                <span className="text-green-400 flex-shrink-0 mt-0.5">
                  &#9744;
                </span>
                <div>
                  <span className="font-semibold text-white">
                    Response sent within 30-day deadline
                  </span>
                  <p className="text-sm text-gray-400 mt-1">
                    Verify the response was delivered before the deadline
                    expires. If an extension is needed, it must be communicated
                    before the original 30-day deadline.
                  </p>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 flex gap-3">
                <span className="text-green-400 flex-shrink-0 mt-0.5">
                  &#9744;
                </span>
                <div>
                  <span className="font-semibold text-white">
                    DSAR log updated and closed
                  </span>
                  <p className="text-sm text-gray-400 mt-1">
                    Record the response date, what was provided, any
                    exemptions applied, and any issues encountered. Retain for
                    accountability.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 10: Privacy Policy and DSARs */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Why a Proper Privacy Policy Makes DSARs Easier
            </h2>
            <p className="mb-4">
              A well-structured privacy policy is not just a compliance
              checkbox &mdash; it is the operational foundation of your DSAR
              response process. Here is why:
            </p>
            <div className="space-y-4">
              <div className="flex gap-3">
                <span className="text-blue-400 flex-shrink-0 mt-1 font-bold">
                  &rarr;
                </span>
                <div>
                  <span className="font-semibold text-white">
                    It documents your processing activities
                  </span>
                  <p className="text-sm text-gray-400 mt-1">
                    A comprehensive privacy policy forces you to inventory all
                    the personal data you collect, which systems store it, who
                    receives it, and how long you keep it. This mapping is
                    exactly what you need to locate data when a DSAR arrives.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-blue-400 flex-shrink-0 mt-1 font-bold">
                  &rarr;
                </span>
                <div>
                  <span className="font-semibold text-white">
                    It provides the supplementary information
                  </span>
                  <p className="text-sm text-gray-400 mt-1">
                    Article 15 requires you to include processing purposes,
                    data categories, recipients, retention periods, and rights
                    information in every DSAR response. If your privacy policy
                    already contains this, you can reference or include it
                    directly.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-blue-400 flex-shrink-0 mt-1 font-bold">
                  &rarr;
                </span>
                <div>
                  <span className="font-semibold text-white">
                    It sets expectations for data subjects
                  </span>
                  <p className="text-sm text-gray-400 mt-1">
                    When your privacy policy clearly explains what data you
                    collect and why, data subjects have realistic expectations
                    about what a DSAR response will contain. This reduces
                    disputes and follow-up requests.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-blue-400 flex-shrink-0 mt-1 font-bold">
                  &rarr;
                </span>
                <div>
                  <span className="font-semibold text-white">
                    It demonstrates proactive compliance
                  </span>
                  <p className="text-sm text-gray-400 mt-1">
                    If a data subject complains to a supervisory authority, the
                    regulator will look at your privacy policy first. A
                    comprehensive, up-to-date privacy policy generated by a
                    tool like PolicyForge shows you take data protection
                    seriously.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Price Comparison Table */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              DSAR Compliance: What It Costs
            </h2>
            <p className="mb-4">
              Proper DSAR handling starts with a comprehensive privacy policy
              that documents your data processing activities. Here is how the
              costs compare:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-4 text-gray-400">
                      Option
                    </th>
                    <th className="text-left py-3 px-4 text-gray-400">
                      Cost
                    </th>
                    <th className="text-left py-3 px-4 text-gray-400">
                      Includes
                    </th>
                    <th className="text-left py-3 px-4 text-gray-400">
                      Time
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-white/5 bg-green-900/10">
                    <td className="py-3 px-4 font-semibold text-green-400">
                      PolicyForge Starter
                    </td>
                    <td className="py-3 px-4 text-green-400 font-bold">
                      $4.99
                    </td>
                    <td className="py-3 px-4">
                      GDPR-compliant privacy policy, compliance checker, DSAR
                      documentation foundation
                    </td>
                    <td className="py-3 px-4">2 minutes</td>
                  </tr>
                  <tr className="border-b border-white/5 bg-green-900/5">
                    <td className="py-3 px-4 font-semibold text-blue-400">
                      PolicyForge Pro
                    </td>
                    <td className="py-3 px-4 text-blue-400 font-bold">
                      $12.99
                    </td>
                    <td className="py-3 px-4">
                      Unlimited policies, ToS generator, cookie policy,
                      compliance scanner, email reports
                    </td>
                    <td className="py-3 px-4">2 minutes</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 font-semibold text-white">
                      Termly / Iubenda
                    </td>
                    <td className="py-3 px-4">$120-240/year</td>
                    <td className="py-3 px-4">
                      Privacy policy generator, cookie consent, ongoing
                      subscription
                    </td>
                    <td className="py-3 px-4">15-30 minutes</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 font-semibold text-white">
                      Privacy lawyer consultation
                    </td>
                    <td className="py-3 px-4 text-red-400 font-bold">
                      $500-5,000+
                    </td>
                    <td className="py-3 px-4">
                      Custom privacy policy, legal advice, DSAR process
                      design
                    </td>
                    <td className="py-3 px-4">1-4 weeks</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 font-semibold text-white">
                      DSAR management software
                    </td>
                    <td className="py-3 px-4 text-red-400 font-bold">
                      $200-2,000/month
                    </td>
                    <td className="py-3 px-4">
                      Automated DSAR workflow, data discovery, redaction tools
                    </td>
                    <td className="py-3 px-4">Weeks to implement</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-white">
                      GDPR non-compliance fine
                    </td>
                    <td className="py-3 px-4 text-red-400 font-bold">
                      Up to &euro;20M / 4% revenue
                    </td>
                    <td className="py-3 px-4">
                      Regulatory investigation, reputational damage, legal
                      costs
                    </td>
                    <td className="py-3 px-4">Months-years of disruption</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 bg-blue-900/20 border border-blue-800/30 rounded-lg p-4">
              <p className="text-sm text-blue-300">
                <strong>Start with the foundation:</strong> Even if you need
                dedicated DSAR software later, a GDPR-compliant privacy policy
                is step one. It documents the processing activities that
                define the scope of every DSAR response.{" "}
                <Link
                  href="https://policyforge.autonomous-claude.com/"
                  className="underline hover:text-blue-200"
                >
                  Generate yours for $4.99 &rarr;
                </Link>
              </p>
            </div>
          </section>

          {/* Section: DSAR Request Template for Individuals */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Free DSAR Request Template (For Individuals)
            </h2>
            <p className="mb-4">
              If you are an individual wanting to submit a DSAR to an
              organization, here is a free template you can use. Simply fill
              in the bracketed fields and send it to the organization&apos;s
              privacy contact (usually found in their privacy policy).
            </p>
            <div className="bg-gray-800/70 rounded-xl p-6 border border-white/10 font-mono text-sm leading-relaxed">
              <p className="text-green-400 mb-4">
                {"// Data Subject Access Request — Individual Template"}
              </p>
              <p className="text-gray-300 mb-2">
                To: <span className="text-white">[Organization Name]</span>
              </p>
              <p className="text-gray-300 mb-2">
                From: <span className="text-white">[Your Full Name]</span>
              </p>
              <p className="text-gray-300 mb-2">
                Email:{" "}
                <span className="text-white">[Your Email Address]</span>
              </p>
              <p className="text-gray-300 mb-2">
                Date: <span className="text-white">[Today&apos;s Date]</span>
              </p>
              <p className="text-gray-300 mb-4">
                Account/Customer Reference:{" "}
                <span className="text-white">[If applicable]</span>
              </p>
              <p className="text-gray-300 mb-4">
                Subject:{" "}
                <span className="text-white font-semibold">
                  Data Subject Access Request under GDPR Article 15
                </span>
              </p>
              <p className="text-gray-300 mb-4">
                Dear Data Protection Officer / Privacy Team,
              </p>
              <p className="text-gray-300 mb-4">
                I am writing to exercise my right of access under Article 15
                of the General Data Protection Regulation (GDPR). I request
                that you provide me with a copy of all personal data you hold
                about me, along with the following supplementary information:
              </p>
              <ul className="text-gray-300 space-y-1 mb-4 ml-4">
                <li>&bull; The purposes of the processing</li>
                <li>&bull; The categories of personal data concerned</li>
                <li>
                  &bull; The recipients to whom my data has been or will be
                  disclosed
                </li>
                <li>
                  &bull; The envisaged period for which my data will be stored
                </li>
                <li>
                  &bull; The source of the data, if not collected directly from
                  me
                </li>
                <li>
                  &bull; Whether any automated decision-making or profiling is
                  applied to my data
                </li>
              </ul>
              <p className="text-gray-300 mb-4">
                Please respond within one calendar month as required by
                Article 12(3) of the GDPR. If you need to verify my identity,
                please let me know promptly and I will provide the necessary
                information.
              </p>
              <p className="text-gray-300 mb-4">
                If you do not respond within the statutory timeframe, I
                reserve the right to lodge a complaint with{" "}
                <span className="text-white">
                  [relevant supervisory authority, e.g., the ICO, CNIL, BfDI]
                </span>
                .
              </p>
              <p className="text-gray-300 mb-2">Yours sincerely,</p>
              <p className="text-gray-300">
                <span className="text-white">[Your Full Name]</span>
              </p>
            </div>
          </section>

          {/* Section: Common DSAR Mistakes */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Common DSAR Mistakes That Lead to Fines
            </h2>
            <p className="mb-4">
              Supervisory authorities across the EU have issued fines and
              reprimands for DSAR handling failures. Here are the most common
              mistakes organizations make:
            </p>
            <div className="space-y-4">
              <div className="bg-red-900/10 border border-red-800/20 rounded-lg p-4">
                <h3 className="text-white font-semibold mb-1">
                  1. Missing the 30-day deadline
                </h3>
                <p className="text-sm text-gray-400">
                  The most common violation. Organizations that lack a
                  documented DSAR process often discover the request too late,
                  or underestimate the time needed to locate and compile data.
                  Set calendar reminders and track every DSAR from day one.
                </p>
              </div>
              <div className="bg-red-900/10 border border-red-800/20 rounded-lg p-4">
                <h3 className="text-white font-semibold mb-1">
                  2. Providing incomplete data
                </h3>
                <p className="text-sm text-gray-400">
                  Searching only your main database and missing email threads,
                  support tickets, CRM notes, analytics data, or backup
                  systems. A DSAR requires all personal data, not just the
                  data in your primary system.
                </p>
              </div>
              <div className="bg-red-900/10 border border-red-800/20 rounded-lg p-4">
                <h3 className="text-white font-semibold mb-1">
                  3. Failing to provide supplementary information
                </h3>
                <p className="text-sm text-gray-400">
                  Sending a data export without the supplementary information
                  required by Article 15: processing purposes, categories,
                  recipients, retention periods, rights, sources, and
                  automated decision-making details. The data alone is not
                  sufficient.
                </p>
              </div>
              <div className="bg-red-900/10 border border-red-800/20 rounded-lg p-4">
                <h3 className="text-white font-semibold mb-1">
                  4. Disclosing third-party data
                </h3>
                <p className="text-sm text-gray-400">
                  Including other people&apos;s personal data in the response
                  without proper redaction. This is itself a data breach and
                  can result in additional enforcement action.
                </p>
              </div>
              <div className="bg-red-900/10 border border-red-800/20 rounded-lg p-4">
                <h3 className="text-white font-semibold mb-1">
                  5. Using verification as a barrier
                </h3>
                <p className="text-sm text-gray-400">
                  Requesting excessive identification documents for low-risk
                  data, or using verification delays to run down the clock.
                  Supervisory authorities view this as obstruction of data
                  subject rights.
                </p>
              </div>
              <div className="bg-red-900/10 border border-red-800/20 rounded-lg p-4">
                <h3 className="text-white font-semibold mb-1">
                  6. Not recognizing verbal or informal requests
                </h3>
                <p className="text-sm text-gray-400">
                  A customer saying &ldquo;I want to see what data you have on
                  me&rdquo; in a phone call or chat is a valid DSAR, even if
                  they do not use legal terminology. Staff must be trained to
                  recognize and escalate these.
                </p>
              </div>
            </div>
          </section>

          {/* Section: DSAR Statistics */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              DSAR Statistics and Trends (2024-2026)
            </h2>
            <p className="mb-4">
              Understanding the scale and trajectory of DSAR volumes helps
              organizations plan their response capacity:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-800/50 rounded-lg p-5 text-center">
                <p className="text-3xl font-bold text-blue-400 mb-1">159%</p>
                <p className="text-sm text-gray-400">
                  Increase in UK subject access complaints (2018-2023,
                  ICO data)
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-5 text-center">
                <p className="text-3xl font-bold text-red-400 mb-1">
                  &euro;4.5B+
                </p>
                <p className="text-sm text-gray-400">
                  Total GDPR fines issued since 2018 (including DSAR-related
                  violations)
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-5 text-center">
                <p className="text-3xl font-bold text-yellow-400 mb-1">
                  30 days
                </p>
                <p className="text-sm text-gray-400">
                  Maximum response time (extendable to 90 days for complex
                  requests)
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-5 text-center">
                <p className="text-3xl font-bold text-green-400 mb-1">
                  48%
                </p>
                <p className="text-sm text-gray-400">
                  Of organizations report increased DSAR volume year-over-year
                  (IAPP survey)
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Frequently Asked Questions: Data Subject Access Requests
            </h2>
            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {item.question}
                  </h3>
                  <p>{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Internal Links Section */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Related GDPR Resources
            </h2>
            <p className="mb-4">
              Data subject access requests are just one part of GDPR
              compliance. Explore our other free guides and tools:
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              <Link
                href="/gdpr-privacy-policy-generator"
                className="bg-gray-800/50 hover:bg-gray-700/50 rounded-lg p-4 transition block"
              >
                <span className="font-semibold text-white block mb-1">
                  GDPR Privacy Policy Generator
                </span>
                <span className="text-sm text-gray-400">
                  Generate a GDPR-compliant privacy policy tailored to your
                  specific data processing activities.
                </span>
              </Link>
              <Link
                href="/gdpr-compliance-checklist"
                className="bg-gray-800/50 hover:bg-gray-700/50 rounded-lg p-4 transition block"
              >
                <span className="font-semibold text-white block mb-1">
                  GDPR Compliance Checklist
                </span>
                <span className="text-sm text-gray-400">
                  50+ actionable items covering consent, data subject rights,
                  DPAs, breach notification, and more.
                </span>
              </Link>
              <Link
                href="/free-gdpr-compliance-tool"
                className="bg-gray-800/50 hover:bg-gray-700/50 rounded-lg p-4 transition block"
              >
                <span className="font-semibold text-white block mb-1">
                  Free GDPR Compliance Tool
                </span>
                <span className="text-sm text-gray-400">
                  Scan any website for GDPR compliance issues with our free
                  automated compliance checker.
                </span>
              </Link>
              <Link
                href="/privacy-policy-for-saas"
                className="bg-gray-800/50 hover:bg-gray-700/50 rounded-lg p-4 transition block"
              >
                <span className="font-semibold text-white block mb-1">
                  Privacy Policy for SaaS
                </span>
                <span className="text-sm text-gray-400">
                  Specialized guidance for SaaS companies on GDPR privacy
                  policy requirements and data processing.
                </span>
              </Link>
              <Link
                href="/cookie-policy-generator"
                className="bg-gray-800/50 hover:bg-gray-700/50 rounded-lg p-4 transition block"
              >
                <span className="font-semibold text-white block mb-1">
                  Cookie Policy Generator
                </span>
                <span className="text-sm text-gray-400">
                  Generate a compliant cookie policy covering all cookie
                  categories on your website.
                </span>
              </Link>
              <Link
                href="/best-free-privacy-policy-generator"
                className="bg-gray-800/50 hover:bg-gray-700/50 rounded-lg p-4 transition block"
              >
                <span className="font-semibold text-white block mb-1">
                  Best Free Privacy Policy Generators Compared
                </span>
                <span className="text-sm text-gray-400">
                  Compare the top privacy policy generators by features,
                  GDPR compliance, and pricing.
                </span>
              </Link>
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-800/30 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-4 text-center">
              Get Your DSAR Compliance Foundation in 2 Minutes
            </h2>
            <p className="text-gray-300 text-center mb-6">
              Every DSAR response requires you to document your processing
              activities, data categories, recipients, and retention periods.
              A GDPR-compliant privacy policy from PolicyForge gives you this
              foundation instantly &mdash; no lawyer required, no ongoing
              subscription.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="https://policyforge.autonomous-claude.com/"
                className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-8 rounded-lg transition"
              >
                Generate Privacy Policy &mdash; $4.99
              </Link>
              <Link
                href="https://policyforge.autonomous-claude.com/check"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-lg transition"
              >
                Free Compliance Scan
              </Link>
            </div>
            <p className="text-center text-sm text-gray-500 mt-4">
              Free tier: 2 generations/day. Starter: $4.99 one-time. Pro:
              $12.99 one-time for unlimited access.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
