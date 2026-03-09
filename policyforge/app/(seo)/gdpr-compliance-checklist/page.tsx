import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GDPR Compliance Checklist 2026 | Free Audit Tool - PolicyForge",
  description:
    "Complete GDPR compliance checklist with 50+ actionable items organized by category. Covers consent, data subject rights, DPAs, breach notification, cookies, international transfers, and more. Free compliance scanner included.",
  keywords:
    "GDPR compliance checklist, GDPR checklist, GDPR audit checklist, GDPR requirements checklist, GDPR compliance requirements, GDPR data protection checklist, GDPR readiness checklist, GDPR compliance guide, GDPR vs CCPA, GDPR compliance tool",
};

export default function GDPRComplianceChecklist() {
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
          GDPR Compliance Checklist: 50+ Actionable Items for 2026
        </h1>

        <p className="text-gray-400 text-lg mb-8">
          The General Data Protection Regulation carries fines of up to
          &euro;20,000,000 or 4% of global annual revenue &mdash; whichever is
          higher. This isn&apos;t theoretical: regulators issued over &euro;4.5
          billion in GDPR fines between 2018 and 2025. Use this checklist to
          systematically audit your compliance posture, identify gaps, and
          prioritize remediation before an enforcement action finds them first.
        </p>

        <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-blue-800/40 rounded-xl p-6 mb-10">
          <h3 className="text-lg font-semibold text-white mb-2">
            Instant GDPR Compliance Scan
          </h3>
          <p className="text-gray-300 text-sm mb-4">
            Enter your website URL and get an automated 11-point compliance
            analysis in seconds. PolicyForge checks your privacy policy, cookie
            consent, data collection practices, and more.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link
              href="/check"
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2.5 px-6 rounded-lg transition text-sm"
            >
              Scan Your Site Free
            </Link>
            <Link
              href="/"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold py-2.5 px-6 rounded-lg transition text-sm"
            >
              Generate Privacy Policy
            </Link>
          </div>
        </div>

        <div className="space-y-10 text-gray-300 leading-relaxed text-[17px]">
          {/* Section 1: Data Collection & Consent */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              1. Data Collection &amp; Consent
            </h2>
            <p className="mb-4">
              GDPR Article 6 requires a lawful basis for every instance of
              personal data processing. Consent (Article 7) must be freely
              given, specific, informed, and unambiguous. Pre-ticked boxes,
              silence, or inactivity do not constitute consent. You must be
              able to demonstrate that consent was obtained &mdash; the burden
              of proof falls on the data controller.
            </p>
            <div className="space-y-3">
              <div className="bg-gray-800/50 rounded-lg p-4 flex gap-3">
                <span className="text-green-400 flex-shrink-0 mt-0.5">&#9744;</span>
                <div>
                  <span className="font-semibold text-white">Identify every lawful basis for processing</span>
                  <p className="text-sm text-gray-400 mt-1">Map each data processing activity to one of the six lawful bases: consent, contract, legal obligation, vital interests, public task, or legitimate interests. Document this mapping.</p>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 flex gap-3">
                <span className="text-green-400 flex-shrink-0 mt-0.5">&#9744;</span>
                <div>
                  <span className="font-semibold text-white">Implement opt-in consent mechanisms</span>
                  <p className="text-sm text-gray-400 mt-1">Consent must require a clear affirmative action. No pre-checked boxes, no bundled consent, no &ldquo;by using this site you agree&rdquo; banners. Each purpose requires separate consent.</p>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 flex gap-3">
                <span className="text-green-400 flex-shrink-0 mt-0.5">&#9744;</span>
                <div>
                  <span className="font-semibold text-white">Record and store consent evidence</span>
                  <p className="text-sm text-gray-400 mt-1">Maintain timestamped records of who consented, when, how, what they were told, and what they consented to. This evidence must be retrievable on demand.</p>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 flex gap-3">
                <span className="text-green-400 flex-shrink-0 mt-0.5">&#9744;</span>
                <div>
                  <span className="font-semibold text-white">Provide easy consent withdrawal</span>
                  <p className="text-sm text-gray-400 mt-1">Withdrawing consent must be as easy as giving it. If consent was one click, withdrawal should be one click &mdash; not a 5-step process buried in account settings.</p>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 flex gap-3">
                <span className="text-green-400 flex-shrink-0 mt-0.5">&#9744;</span>
                <div>
                  <span className="font-semibold text-white">Conduct Legitimate Interest Assessments (LIAs)</span>
                  <p className="text-sm text-gray-400 mt-1">If relying on legitimate interest as a lawful basis, complete a documented three-part test: purpose, necessity, and balancing test against individuals&apos; rights.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Privacy Policy Requirements */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              2. Privacy Policy Requirements
            </h2>
            <p className="mb-4">
              Articles 13 and 14 of the GDPR specify exactly what information
              must be provided to data subjects. Your privacy policy is the
              primary vehicle for meeting these transparency obligations. It
              must be concise, transparent, intelligible, and written in clear,
              plain language &mdash; not legalese.
            </p>
            <div className="space-y-3">
              <div className="bg-gray-800/50 rounded-lg p-4 flex gap-3">
                <span className="text-green-400 flex-shrink-0 mt-0.5">&#9744;</span>
                <div>
                  <span className="font-semibold text-white">Include controller identity and contact details</span>
                  <p className="text-sm text-gray-400 mt-1">Full legal name, registered address, and email address of the data controller. Include DPO contact details if one is appointed.</p>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 flex gap-3">
                <span className="text-green-400 flex-shrink-0 mt-0.5">&#9744;</span>
                <div>
                  <span className="font-semibold text-white">Specify data types collected and purposes</span>
                  <p className="text-sm text-gray-400 mt-1">List every category of personal data you collect (name, email, IP, device ID, location, etc.) and clearly state the purpose for each collection.</p>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 flex gap-3">
                <span className="text-green-400 flex-shrink-0 mt-0.5">&#9744;</span>
                <div>
                  <span className="font-semibold text-white">State the lawful basis for each processing activity</span>
                  <p className="text-sm text-gray-400 mt-1">Don&apos;t just list the six lawful bases &mdash; specify which one applies to each specific purpose. &ldquo;We process your email based on consent for marketing&rdquo; not &ldquo;we may rely on consent.&rdquo;</p>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 flex gap-3">
                <span className="text-green-400 flex-shrink-0 mt-0.5">&#9744;</span>
                <div>
                  <span className="font-semibold text-white">Disclose all third-party recipients</span>
                  <p className="text-sm text-gray-400 mt-1">Name every third party that receives personal data: analytics providers (Google Analytics, Mixpanel), payment processors (Stripe), hosting (AWS, Vercel), email services, ad networks.</p>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 flex gap-3">
                <span className="text-green-400 flex-shrink-0 mt-0.5">&#9744;</span>
                <div>
                  <span className="font-semibold text-white">Define data retention periods</span>
                  <p className="text-sm text-gray-400 mt-1">State how long each category of data is kept and the criteria used to determine retention periods. &ldquo;As long as necessary&rdquo; is not sufficient.</p>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 flex gap-3">
                <span className="text-green-400 flex-shrink-0 mt-0.5">&#9744;</span>
                <div>
                  <span className="font-semibold text-white">List all data subject rights</span>
                  <p className="text-sm text-gray-400 mt-1">Clearly explain each right and how to exercise it: access, rectification, erasure, restriction, portability, objection, and rights related to automated decision-making.</p>
                </div>
              </div>
            </div>
            <div className="mt-4 bg-blue-900/20 border border-blue-800/30 rounded-lg p-4">
              <p className="text-sm text-blue-300">
                <strong>Generate yours automatically:</strong> PolicyForge
                creates a fully GDPR-compliant privacy policy tailored to your
                specific data practices in under 2 minutes.{" "}
                <Link href="/" className="underline hover:text-blue-200">
                  Try it free &rarr;
                </Link>
              </p>
            </div>
          </section>

          {/* Section 3: Data Subject Rights */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              3. Data Subject Rights (Articles 15-22)
            </h2>
            <p className="mb-4">
              GDPR grants individuals eight specific rights over their personal
              data. You must respond to rights requests within one calendar
              month (extendable to three months for complex requests). Failure
              to respond is itself a violation, even if you believe the request
              is invalid.
            </p>
            <div className="space-y-3">
              <div className="bg-gray-800/50 rounded-lg p-4 flex gap-3">
                <span className="text-green-400 flex-shrink-0 mt-0.5">&#9744;</span>
                <div>
                  <span className="font-semibold text-white">Right of Access (Article 15)</span>
                  <p className="text-sm text-gray-400 mt-1">Build a process to provide individuals with a copy of all their personal data within 30 days. Include the purposes, categories, recipients, retention periods, and source of the data.</p>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 flex gap-3">
                <span className="text-green-400 flex-shrink-0 mt-0.5">&#9744;</span>
                <div>
                  <span className="font-semibold text-white">Right to Rectification (Article 16)</span>
                  <p className="text-sm text-gray-400 mt-1">Allow users to correct inaccurate data and complete incomplete data. Implement self-service editing where possible and a manual request process for other data.</p>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 flex gap-3">
                <span className="text-green-400 flex-shrink-0 mt-0.5">&#9744;</span>
                <div>
                  <span className="font-semibold text-white">Right to Erasure / Right to Be Forgotten (Article 17)</span>
                  <p className="text-sm text-gray-400 mt-1">Implement a deletion process that removes personal data from all systems, including backups, within 30 days. Notify third parties who received the data to also delete it.</p>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 flex gap-3">
                <span className="text-green-400 flex-shrink-0 mt-0.5">&#9744;</span>
                <div>
                  <span className="font-semibold text-white">Right to Restriction of Processing (Article 18)</span>
                  <p className="text-sm text-gray-400 mt-1">Enable marking data as &ldquo;restricted&rdquo; so it can be stored but not further processed. This applies when accuracy is contested, processing is unlawful, or processing is no longer needed but the individual needs it for legal claims.</p>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 flex gap-3">
                <span className="text-green-400 flex-shrink-0 mt-0.5">&#9744;</span>
                <div>
                  <span className="font-semibold text-white">Right to Data Portability (Article 20)</span>
                  <p className="text-sm text-gray-400 mt-1">Provide personal data in a structured, commonly used, machine-readable format (JSON, CSV, XML). Where technically feasible, enable direct transfer to another controller.</p>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 flex gap-3">
                <span className="text-green-400 flex-shrink-0 mt-0.5">&#9744;</span>
                <div>
                  <span className="font-semibold text-white">Right to Object (Article 21)</span>
                  <p className="text-sm text-gray-400 mt-1">Allow individuals to object to processing based on legitimate interest or public task. For direct marketing, objection is absolute &mdash; you must stop processing immediately.</p>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 flex gap-3">
                <span className="text-green-400 flex-shrink-0 mt-0.5">&#9744;</span>
                <div>
                  <span className="font-semibold text-white">Rights related to Automated Decision-Making (Article 22)</span>
                  <p className="text-sm text-gray-400 mt-1">If you use automated profiling or decision-making with legal or significant effects, provide the right to human intervention, express a point of view, and contest the decision.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Data Processing Agreements */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              4. Data Processing Agreements (Article 28)
            </h2>
            <p className="mb-4">
              Every entity that processes personal data on your behalf is a
              &ldquo;data processor&rdquo; under GDPR. You are legally required
              to have a written Data Processing Agreement (DPA) with each one.
              This includes your hosting provider, analytics platform, email
              service, payment processor, CRM &mdash; any third party that
              touches personal data.
            </p>
            <div className="space-y-3">
              <div className="bg-gray-800/50 rounded-lg p-4 flex gap-3">
                <span className="text-green-400 flex-shrink-0 mt-0.5">&#9744;</span>
                <div>
                  <span className="font-semibold text-white">Inventory all data processors</span>
                  <p className="text-sm text-gray-400 mt-1">Create a complete list of every third party that processes personal data on your behalf. Include SaaS tools, cloud providers, analytics, marketing, support, and payment services.</p>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 flex gap-3">
                <span className="text-green-400 flex-shrink-0 mt-0.5">&#9744;</span>
                <div>
                  <span className="font-semibold text-white">Sign DPAs with every processor</span>
                  <p className="text-sm text-gray-400 mt-1">Each DPA must define the subject matter, duration, nature and purpose of processing, data types, categories of data subjects, and the processor&apos;s obligations. Most major SaaS providers offer a standard DPA on request.</p>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 flex gap-3">
                <span className="text-green-400 flex-shrink-0 mt-0.5">&#9744;</span>
                <div>
                  <span className="font-semibold text-white">Verify sub-processor management</span>
                  <p className="text-sm text-gray-400 mt-1">Processors must obtain your prior authorization before engaging sub-processors. Your DPA should include either general or specific authorization, with a notification mechanism for changes.</p>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 flex gap-3">
                <span className="text-green-400 flex-shrink-0 mt-0.5">&#9744;</span>
                <div>
                  <span className="font-semibold text-white">Review processor security measures</span>
                  <p className="text-sm text-gray-400 mt-1">Confirm each processor implements appropriate technical and organizational measures: encryption, access controls, incident response, and regular security testing.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Cookie Consent */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              5. Cookie Consent (ePrivacy Directive + GDPR)
            </h2>
            <p className="mb-4">
              The ePrivacy Directive (often called the &ldquo;Cookie Law&rdquo;)
              works alongside GDPR. Non-essential cookies &mdash; analytics,
              advertising, social media &mdash; require opt-in consent before
              they are set. A simple &ldquo;This site uses cookies&rdquo;
              banner with only an &ldquo;OK&rdquo; button is not compliant.
              Multiple high-profile fines have been issued specifically for
              cookie consent violations, including Google&apos;s &euro;150
              million fine by France&apos;s CNIL.
            </p>
            <div className="space-y-3">
              <div className="bg-gray-800/50 rounded-lg p-4 flex gap-3">
                <span className="text-green-400 flex-shrink-0 mt-0.5">&#9744;</span>
                <div>
                  <span className="font-semibold text-white">Audit all cookies on your site</span>
                  <p className="text-sm text-gray-400 mt-1">Scan every page for cookies set by your code, third-party scripts, and embedded content. Categorize each as strictly necessary, analytics, functional, or advertising.</p>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 flex gap-3">
                <span className="text-green-400 flex-shrink-0 mt-0.5">&#9744;</span>
                <div>
                  <span className="font-semibold text-white">Implement a proper consent management platform (CMP)</span>
                  <p className="text-sm text-gray-400 mt-1">Use a CMP that blocks non-essential cookies until consent is given, offers granular category-level control, and records consent for audit purposes.</p>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 flex gap-3">
                <span className="text-green-400 flex-shrink-0 mt-0.5">&#9744;</span>
                <div>
                  <span className="font-semibold text-white">Offer equal prominence to accept and reject</span>
                  <p className="text-sm text-gray-400 mt-1">The &ldquo;Reject All&rdquo; option must be as easy to find and click as &ldquo;Accept All.&rdquo; Dark patterns (hiding the reject option, using different colors) are a violation.</p>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 flex gap-3">
                <span className="text-green-400 flex-shrink-0 mt-0.5">&#9744;</span>
                <div>
                  <span className="font-semibold text-white">Maintain a cookie policy page</span>
                  <p className="text-sm text-gray-400 mt-1">Publish a dedicated cookie policy listing every cookie: name, provider, purpose, type (session/persistent), and expiration. Link to it from your consent banner.</p>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 flex gap-3">
                <span className="text-green-400 flex-shrink-0 mt-0.5">&#9744;</span>
                <div>
                  <span className="font-semibold text-white">Allow users to change preferences later</span>
                  <p className="text-sm text-gray-400 mt-1">Provide a persistent link (e.g., in the footer) to re-open the cookie consent interface and modify choices at any time.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: International Data Transfers */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              6. International Data Transfers (Chapter V)
            </h2>
            <p className="mb-4">
              Transferring personal data outside the EEA requires a legal
              transfer mechanism. The EU-US Data Privacy Framework (DPF)
              provides one path for US transfers, but it applies only to
              certified organizations. For other countries, Standard
              Contractual Clauses (SCCs) remain the primary tool. Each transfer
              must also be assessed for the data protection laws in the
              receiving country.
            </p>
            <div className="space-y-3">
              <div className="bg-gray-800/50 rounded-lg p-4 flex gap-3">
                <span className="text-green-400 flex-shrink-0 mt-0.5">&#9744;</span>
                <div>
                  <span className="font-semibold text-white">Map all cross-border data flows</span>
                  <p className="text-sm text-gray-400 mt-1">Identify every transfer of personal data outside the EEA, including transfers to cloud providers, CDNs, SaaS tools, and support teams in other countries.</p>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 flex gap-3">
                <span className="text-green-400 flex-shrink-0 mt-0.5">&#9744;</span>
                <div>
                  <span className="font-semibold text-white">Implement appropriate transfer mechanisms</span>
                  <p className="text-sm text-gray-400 mt-1">Use adequacy decisions, SCCs (2021 version), Binding Corporate Rules, or the EU-US DPF as appropriate. The old Privacy Shield is invalid &mdash; ensure you&apos;re using current mechanisms.</p>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 flex gap-3">
                <span className="text-green-400 flex-shrink-0 mt-0.5">&#9744;</span>
                <div>
                  <span className="font-semibold text-white">Conduct Transfer Impact Assessments (TIAs)</span>
                  <p className="text-sm text-gray-400 mt-1">For each transfer relying on SCCs, assess whether the destination country&apos;s laws provide essentially equivalent protection. Document supplementary measures if needed.</p>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 flex gap-3">
                <span className="text-green-400 flex-shrink-0 mt-0.5">&#9744;</span>
                <div>
                  <span className="font-semibold text-white">Disclose transfers in your privacy policy</span>
                  <p className="text-sm text-gray-400 mt-1">Tell data subjects which countries their data is transferred to, the transfer mechanism used, and where they can obtain a copy of the safeguards.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 7: Data Breach Notification */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              7. Data Breach Notification (Articles 33-34)
            </h2>
            <p className="mb-4">
              A personal data breach must be reported to your supervisory
              authority within 72 hours of becoming aware of it. If the breach
              poses a high risk to individuals&apos; rights and freedoms, you
              must also notify those individuals directly. The 72-hour clock
              is unforgiving &mdash; having a pre-built incident response plan
              is not optional.
            </p>
            <div className="space-y-3">
              <div className="bg-gray-800/50 rounded-lg p-4 flex gap-3">
                <span className="text-green-400 flex-shrink-0 mt-0.5">&#9744;</span>
                <div>
                  <span className="font-semibold text-white">Create an incident response plan</span>
                  <p className="text-sm text-gray-400 mt-1">Document the step-by-step process: detection, containment, assessment, authority notification, individual notification (if required), and post-incident review. Assign roles and responsibilities.</p>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 flex gap-3">
                <span className="text-green-400 flex-shrink-0 mt-0.5">&#9744;</span>
                <div>
                  <span className="font-semibold text-white">Know your supervisory authority</span>
                  <p className="text-sm text-gray-400 mt-1">Identify and document the correct supervisory authority for reporting. If you operate across multiple EU countries, determine your lead supervisory authority under the one-stop-shop mechanism.</p>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 flex gap-3">
                <span className="text-green-400 flex-shrink-0 mt-0.5">&#9744;</span>
                <div>
                  <span className="font-semibold text-white">Maintain a breach register</span>
                  <p className="text-sm text-gray-400 mt-1">Article 33(5) requires you to record all breaches, regardless of whether they are reportable. Document the facts, effects, and remedial action taken for every incident.</p>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 flex gap-3">
                <span className="text-green-400 flex-shrink-0 mt-0.5">&#9744;</span>
                <div>
                  <span className="font-semibold text-white">Prepare notification templates</span>
                  <p className="text-sm text-gray-400 mt-1">Draft templates for both authority and individual notifications in advance. Under the 72-hour deadline, you won&apos;t have time to start from scratch. Include the required information: nature of breach, categories and approximate number of data subjects, likely consequences, and measures taken.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 8: Record Keeping */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              8. Record Keeping (Article 30)
            </h2>
            <p className="mb-4">
              Controllers with 250+ employees, or any organization processing
              sensitive data or data that poses a risk, must maintain Records
              of Processing Activities (ROPA). In practice, every organization
              should maintain ROPA &mdash; it&apos;s the first document a
              supervisory authority will request during an investigation.
            </p>
            <div className="space-y-3">
              <div className="bg-gray-800/50 rounded-lg p-4 flex gap-3">
                <span className="text-green-400 flex-shrink-0 mt-0.5">&#9744;</span>
                <div>
                  <span className="font-semibold text-white">Create Records of Processing Activities</span>
                  <p className="text-sm text-gray-400 mt-1">Document all processing activities including: purposes, data categories, recipient categories, international transfers, retention periods, and a general description of security measures.</p>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 flex gap-3">
                <span className="text-green-400 flex-shrink-0 mt-0.5">&#9744;</span>
                <div>
                  <span className="font-semibold text-white">Conduct Data Protection Impact Assessments (DPIAs)</span>
                  <p className="text-sm text-gray-400 mt-1">Article 35 requires a DPIA before processing that is likely to result in high risk. This includes systematic monitoring, large-scale processing of sensitive data, and automated decision-making with legal effects.</p>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 flex gap-3">
                <span className="text-green-400 flex-shrink-0 mt-0.5">&#9744;</span>
                <div>
                  <span className="font-semibold text-white">Implement data minimization and retention policies</span>
                  <p className="text-sm text-gray-400 mt-1">Only collect data you actually need (minimization). Define retention periods for each data category and implement automated deletion when retention periods expire. &ldquo;Keep everything forever&rdquo; is a compliance failure.</p>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 flex gap-3">
                <span className="text-green-400 flex-shrink-0 mt-0.5">&#9744;</span>
                <div>
                  <span className="font-semibold text-white">Document security measures</span>
                  <p className="text-sm text-gray-400 mt-1">Article 32 requires appropriate technical and organizational measures: encryption at rest and in transit, access controls, regular testing, and the ability to restore data availability after an incident.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 9: Children's Data */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              9. Children&apos;s Data (Article 8)
            </h2>
            <p className="mb-4">
              If your service is offered to children, consent for processing
              their data must be given or authorized by a parent or guardian.
              The GDPR sets the threshold at 16 years, but member states can
              lower it to 13. The UK, for example, sets it at 13. If children
              could plausibly use your service, you need age verification and
              parental consent mechanisms.
            </p>
            <div className="space-y-3">
              <div className="bg-gray-800/50 rounded-lg p-4 flex gap-3">
                <span className="text-green-400 flex-shrink-0 mt-0.5">&#9744;</span>
                <div>
                  <span className="font-semibold text-white">Determine if your service targets or is accessible to children</span>
                  <p className="text-sm text-gray-400 mt-1">Consider the content, language, advertising, and visual design of your service. If children could reasonably use it, child-specific protections apply regardless of your terms of service age restrictions.</p>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 flex gap-3">
                <span className="text-green-400 flex-shrink-0 mt-0.5">&#9744;</span>
                <div>
                  <span className="font-semibold text-white">Implement age verification if applicable</span>
                  <p className="text-sm text-gray-400 mt-1">Use an age gate appropriate to your service. For consent-based processing of children&apos;s data, implement verifiable parental consent mechanisms.</p>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 flex gap-3">
                <span className="text-green-400 flex-shrink-0 mt-0.5">&#9744;</span>
                <div>
                  <span className="font-semibold text-white">Provide child-friendly privacy information</span>
                  <p className="text-sm text-gray-400 mt-1">If your service is used by children, provide privacy information in language they can understand. The ICO recommends a layered approach with age-appropriate versions.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 10: Data Protection Officer */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              10. Data Protection Officer (Articles 37-39)
            </h2>
            <p className="mb-4">
              A DPO is mandatory if you are a public authority, if your core
              activities involve regular and systematic monitoring of
              individuals at scale, or if you process special categories of
              data at scale. Even when not mandatory, appointing a DPO
              demonstrates proactive compliance. The DPO must operate
              independently and report directly to the highest management
              level.
            </p>
            <div className="space-y-3">
              <div className="bg-gray-800/50 rounded-lg p-4 flex gap-3">
                <span className="text-green-400 flex-shrink-0 mt-0.5">&#9744;</span>
                <div>
                  <span className="font-semibold text-white">Assess whether a DPO is required</span>
                  <p className="text-sm text-gray-400 mt-1">Evaluate your processing against the three mandatory criteria. If you process health data, biometric data, or conduct large-scale behavioral tracking, a DPO is almost certainly required.</p>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 flex gap-3">
                <span className="text-green-400 flex-shrink-0 mt-0.5">&#9744;</span>
                <div>
                  <span className="font-semibold text-white">Ensure DPO independence</span>
                  <p className="text-sm text-gray-400 mt-1">The DPO must not receive instructions regarding the exercise of their tasks, must not be dismissed or penalized for performing them, and must have direct access to senior management.</p>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 flex gap-3">
                <span className="text-green-400 flex-shrink-0 mt-0.5">&#9744;</span>
                <div>
                  <span className="font-semibold text-white">Publish DPO contact details</span>
                  <p className="text-sm text-gray-400 mt-1">Include the DPO&apos;s contact details in your privacy policy and communicate them to your supervisory authority. Data subjects must be able to contact the DPO directly.</p>
                </div>
              </div>
            </div>
          </section>

          {/* GDPR vs CCPA Comparison Table */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              GDPR vs. CCPA: Key Differences
            </h2>
            <p className="mb-4">
              Many organizations need to comply with both GDPR and CCPA. While
              they share privacy protection goals, the requirements differ
              significantly. GDPR is generally stricter and broader in scope.
              Complying with GDPR first typically covers most CCPA requirements,
              but not all &mdash; the CCPA has unique provisions around the sale
              of personal information.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-4 text-gray-400">Requirement</th>
                    <th className="text-left py-3 px-4 text-gray-400">GDPR</th>
                    <th className="text-left py-3 px-4 text-gray-400">CCPA/CPRA</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 font-semibold text-white">Scope</td>
                    <td className="py-3 px-4">All organizations processing EU residents&apos; data, regardless of size or location</td>
                    <td className="py-3 px-4">Businesses with $25M+ revenue, 100K+ consumers/households, or 50%+ revenue from selling data</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 font-semibold text-white">Consent Model</td>
                    <td className="py-3 px-4 text-yellow-400">Opt-in required before processing</td>
                    <td className="py-3 px-4">Opt-out (for sale/sharing of data)</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 font-semibold text-white">Lawful Basis</td>
                    <td className="py-3 px-4">Six specific lawful bases required</td>
                    <td className="py-3 px-4">No lawful basis requirement &mdash; focuses on disclosure and opt-out rights</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 font-semibold text-white">Right to Delete</td>
                    <td className="py-3 px-4">Yes, with limited exceptions</td>
                    <td className="py-3 px-4">Yes, with broader exceptions (security, legal claims, etc.)</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 font-semibold text-white">Data Portability</td>
                    <td className="py-3 px-4">Yes &mdash; machine-readable format</td>
                    <td className="py-3 px-4">Yes &mdash; &ldquo;readily useable format&rdquo;</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 font-semibold text-white">Do Not Sell</td>
                    <td className="py-3 px-4">Not explicitly (covered by consent + legitimate interest)</td>
                    <td className="py-3 px-4 text-yellow-400">Explicit &ldquo;Do Not Sell My Personal Information&rdquo; link required</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 font-semibold text-white">DPO Requirement</td>
                    <td className="py-3 px-4">Required in certain cases</td>
                    <td className="py-3 px-4">Not required</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 font-semibold text-white">Breach Notification</td>
                    <td className="py-3 px-4 text-red-400">72 hours to authority</td>
                    <td className="py-3 px-4">&ldquo;Most expedient time possible&rdquo; &mdash; no fixed deadline</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 font-semibold text-white">Maximum Fines</td>
                    <td className="py-3 px-4 text-red-400 font-semibold">&euro;20M or 4% global revenue</td>
                    <td className="py-3 px-4 text-red-400 font-semibold">$2,500 - $7,500 per violation</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-white">Private Right of Action</td>
                    <td className="py-3 px-4">Yes, individuals can sue</td>
                    <td className="py-3 px-4">Limited to data breaches only</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              FAQ: GDPR Compliance Checklist
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Does GDPR apply to my business if I&apos;m based outside the EU?
                </h3>
                <p>
                  Yes, if you offer goods or services to people in the EU or
                  monitor their behavior (e.g., via website analytics or ad
                  tracking). GDPR has extraterritorial scope &mdash; it applies
                  based on the location of the data subjects, not the location
                  of your business. A US-based SaaS company with EU users is
                  fully subject to GDPR.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  What is the first step to becoming GDPR compliant?
                </h3>
                <p>
                  Start with a data mapping exercise. Document every piece of
                  personal data you collect, where it comes from, where it goes,
                  why you process it, and how long you keep it. This becomes
                  your Records of Processing Activities and informs everything
                  else: your privacy policy, consent mechanisms, DPAs, and
                  breach response plans. Without knowing what data you have,
                  you can&apos;t protect it.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  How much does GDPR compliance cost for a small business?
                </h3>
                <p>
                  The cost varies enormously. A solo founder or small SaaS can
                  achieve basic compliance with a proper privacy policy ($0-$50
                  with a tool like PolicyForge), a cookie consent platform
                  (free tiers available), and documented processes (your time).
                  Enterprise compliance with a DPO, audits, and legal counsel
                  can run $50,000-$500,000+ annually. The key is starting with
                  the fundamentals: a compliant privacy policy, lawful consent
                  mechanisms, and documented processing activities.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Can I get a GDPR fine even if there&apos;s no data breach?
                </h3>
                <p>
                  Absolutely. Many of the largest GDPR fines have been for
                  non-breach violations: insufficient legal basis for processing,
                  inadequate consent mechanisms, lack of transparency, missing
                  DPAs, and failure to respond to data subject requests. A data
                  breach is not a prerequisite for enforcement. Regulators can
                  investigate based on complaints, media reports, or their own
                  initiative.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  How do I handle GDPR compliance with Google Analytics?
                </h3>
                <p>
                  Google Analytics (GA4) has been the subject of enforcement
                  actions in multiple EU countries. To use it compliantly:
                  obtain explicit consent before loading the GA4 script, enable
                  IP anonymization, configure data retention settings to the
                  minimum needed, sign Google&apos;s DPA, and disclose the
                  transfer of data to the US in your privacy policy along with
                  the transfer mechanism (EU-US DPF or SCCs). Some organizations
                  are switching to EU-hosted analytics alternatives to simplify
                  compliance.
                </p>
              </div>
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-800/30 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-4 text-center">
              Start Your GDPR Compliance Today
            </h2>
            <p className="text-gray-300 text-center mb-6">
              A compliant privacy policy is the foundation of GDPR readiness.
              Don&apos;t spend thousands on lawyers for something you can
              generate in 2 minutes. PolicyForge creates customized,
              GDPR-compliant privacy policies based on your actual data
              practices.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/"
                className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-8 rounded-lg transition"
              >
                Generate Free Policy — $0
              </Link>
              <Link
                href="/check"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-lg transition"
              >
                Check Your Compliance
              </Link>
            </div>
            <p className="text-center text-sm text-gray-500 mt-4">
              Free tier: 2 generations/day. Pro: $12.99 one-time for unlimited.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
