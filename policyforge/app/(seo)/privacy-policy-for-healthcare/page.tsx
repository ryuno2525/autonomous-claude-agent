import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy for Healthcare & HIPAA | Free Generator - PolicyForge",
  description:
    "Generate a HIPAA-compliant privacy policy for healthcare businesses. Covers PHI handling, telehealth requirements, patient rights, Business Associate Agreements, and breach notification rules. Free generator.",
  keywords:
    "HIPAA privacy policy, healthcare privacy policy, medical privacy policy, telehealth privacy policy, HIPAA compliance, PHI privacy policy, healthcare data protection, medical practice privacy policy, HIPAA notice of privacy practices, healthcare website privacy policy, patient data privacy, HIPAA policy generator",
};

export default function PrivacyPolicyForHealthcare() {
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
          Privacy Policy for Healthcare &amp; HIPAA: The Complete Guide
        </h1>

        <p className="text-gray-400 text-lg mb-8">
          Healthcare organizations handle the most sensitive category of
          personal data: Protected Health Information (PHI). A generic privacy
          policy is not enough. Federal law under HIPAA mandates specific
          disclosures, patient rights, and data handling procedures that no
          other industry requires. Getting it wrong means fines up to $2.1
          million per violation category per year &mdash; and potential criminal
          prosecution. Here&apos;s how to build a compliant healthcare privacy
          policy from scratch.
        </p>

        <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-blue-800/40 rounded-xl p-6 mb-10">
          <h3 className="text-lg font-semibold text-white mb-2">
            Generate Your Healthcare Privacy Policy in 2 Minutes
          </h3>
          <p className="text-gray-300 text-sm mb-4">
            Skip the $5,000+ healthcare attorney bill. PolicyForge creates
            HIPAA-aware privacy policies tailored to your practice type,
            telehealth usage, and data handling procedures.
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
              Scan Your Site
            </Link>
          </div>
        </div>

        <div className="space-y-10 text-gray-300 leading-relaxed text-[17px]">
          {/* Section 1: Why Healthcare Needs Special Privacy Policies */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Why Healthcare Businesses Need Special Privacy Policies
            </h2>
            <p className="mb-4">
              Unlike a standard e-commerce store or SaaS product, healthcare
              organizations are &ldquo;covered entities&rdquo; under the Health
              Insurance Portability and Accountability Act (HIPAA). This
              federal law, enacted in 1996 and significantly strengthened by
              the HITECH Act of 2009, imposes strict requirements on how
              Protected Health Information is collected, stored, transmitted,
              and disclosed. A generic website privacy policy does not satisfy
              these obligations.
            </p>
            <div className="space-y-4">
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-1">
                  Federal Law, Not Just Best Practice
                </h4>
                <p className="text-sm text-gray-400">
                  HIPAA is a federal mandate. Every healthcare provider,
                  health plan, and healthcare clearinghouse that transmits
                  health information electronically must comply. This is not
                  optional guidance &mdash; it carries civil and criminal
                  penalties.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-1">
                  Notice of Privacy Practices (NPP) Requirement
                </h4>
                <p className="text-sm text-gray-400">
                  HIPAA requires covered entities to provide patients with a
                  Notice of Privacy Practices that explains how their PHI
                  may be used and disclosed. This is a separate legal document
                  from a website privacy policy, and many organizations need
                  both.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-1">
                  Broader Scope Than Other Regulations
                </h4>
                <p className="text-sm text-gray-400">
                  HIPAA covers not just digital data but paper records, verbal
                  communications, faxes, and any medium containing PHI. Your
                  privacy policy must address all channels through which
                  patient information flows.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-1">
                  State Laws Add Additional Requirements
                </h4>
                <p className="text-sm text-gray-400">
                  States like California (CMIA), Texas (THIPA), and New York
                  have healthcare privacy laws that layer on top of HIPAA.
                  When state law is more protective than HIPAA, the stricter
                  standard applies. Your privacy policy must account for the
                  jurisdictions you operate in.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Who Must Comply with HIPAA */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Who Must Comply with HIPAA Privacy Requirements
            </h2>
            <p className="mb-4">
              HIPAA compliance is not limited to hospitals. The law covers a
              wide range of organizations, and many businesses do not realize
              they fall under its scope until an audit or breach occurs.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">
              Covered Entities
            </h3>
            <p className="mb-4">
              These are organizations that directly handle PHI as part of
              their core operations. This includes hospitals and health
              systems, physician and dental practices, pharmacies, health
              insurance companies, nursing facilities, mental health
              providers, laboratories, and any provider that transmits health
              information electronically in connection with a HIPAA-covered
              transaction (such as claims or eligibility inquiries).
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">
              Business Associates
            </h3>
            <p className="mb-4">
              Any organization that performs functions or activities on behalf
              of a covered entity that involve access to PHI is a
              &ldquo;business associate&rdquo; under HIPAA. This includes EHR
              (Electronic Health Record) vendors, cloud hosting providers
              storing patient data, medical billing companies, IT support
              firms with access to systems containing PHI, telehealth
              platform providers, email services used for patient
              communication, and data analytics companies processing health
              data. Business associates must sign a Business Associate
              Agreement (BAA) and are directly liable for HIPAA violations.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">
              Digital Health Startups and Apps
            </h3>
            <p className="mb-4">
              If your health app, wearable platform, or digital therapeutics
              tool collects health information and works with or on behalf of
              a covered entity, HIPAA likely applies. Even if HIPAA does not
              directly apply, the FTC Health Breach Notification Rule may
              require similar privacy protections. The safest approach is to
              build HIPAA-grade privacy practices from the start.
            </p>
          </section>

          {/* Section 3: HIPAA Requirements for Privacy Policies */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              HIPAA Requirements for Privacy Policies
            </h2>
            <p className="mb-4">
              The HIPAA Privacy Rule (45 CFR Part 164) establishes specific
              elements that must be included in your Notice of Privacy
              Practices and, by extension, your overall privacy
              documentation. Here is what the law requires:
            </p>
            <div className="bg-gray-900/50 rounded-xl p-6">
              <div className="space-y-4 text-sm">
                <div className="flex gap-4">
                  <span className="text-green-400 w-6 flex-shrink-0">1.</span>
                  <div>
                    <span className="font-semibold text-white">
                      Uses and disclosures of PHI
                    </span>
                    <p className="text-gray-400 mt-1">
                      Describe how PHI may be used for treatment, payment, and
                      healthcare operations. List other permitted uses
                      (e.g., public health, law enforcement, research) and
                      situations requiring patient authorization.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-green-400 w-6 flex-shrink-0">2.</span>
                  <div>
                    <span className="font-semibold text-white">
                      Patient rights
                    </span>
                    <p className="text-gray-400 mt-1">
                      Enumerate all patient rights under HIPAA: right to access
                      PHI, right to request amendments, right to an accounting
                      of disclosures, right to request restrictions, right to
                      confidential communications, and right to a paper copy
                      of the NPP.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-green-400 w-6 flex-shrink-0">3.</span>
                  <div>
                    <span className="font-semibold text-white">
                      Entity&apos;s duties
                    </span>
                    <p className="text-gray-400 mt-1">
                      State the organization&apos;s obligation to protect
                      PHI, abide by the terms of the NPP, and notify patients
                      of breaches. Include a statement that the entity is
                      required by law to maintain the privacy of PHI.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-green-400 w-6 flex-shrink-0">4.</span>
                  <div>
                    <span className="font-semibold text-white">
                      Contact information
                    </span>
                    <p className="text-gray-400 mt-1">
                      Provide the name, title, and contact information of the
                      person or office to contact for further information about
                      the privacy practices. Include a phone number.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-green-400 w-6 flex-shrink-0">5.</span>
                  <div>
                    <span className="font-semibold text-white">
                      Effective date
                    </span>
                    <p className="text-gray-400 mt-1">
                      The NPP must include the date on which it is first in
                      effect and must be updated whenever material changes
                      are made.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-green-400 w-6 flex-shrink-0">6.</span>
                  <div>
                    <span className="font-semibold text-white">
                      Right to complain
                    </span>
                    <p className="text-gray-400 mt-1">
                      Inform patients they can file complaints with the
                      organization and with the Secretary of Health and Human
                      Services (HHS). Include contact details for both and
                      state that no retaliation will occur for filing a
                      complaint.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-green-400 w-6 flex-shrink-0">7.</span>
                  <div>
                    <span className="font-semibold text-white">
                      Minimum necessary standard
                    </span>
                    <p className="text-gray-400 mt-1">
                      Describe your commitment to using, disclosing, and
                      requesting only the minimum amount of PHI necessary to
                      accomplish the intended purpose of the use or disclosure.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-green-400 w-6 flex-shrink-0">8.</span>
                  <div>
                    <span className="font-semibold text-white">
                      Authorization requirements
                    </span>
                    <p className="text-gray-400 mt-1">
                      Explain when patient authorization is required before
                      disclosing PHI &mdash; including marketing, sale of PHI,
                      psychotherapy notes, and uses not described in the NPP.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: PHI Handling */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Protected Health Information (PHI): What It Covers
            </h2>
            <p className="mb-4">
              PHI is any individually identifiable health information created
              or received by a covered entity that relates to the past,
              present, or future physical or mental health of an individual,
              the provision of healthcare, or the payment for healthcare.
              Understanding what qualifies as PHI is essential for writing an
              accurate privacy policy.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">
              The 18 HIPAA Identifiers
            </h3>
            <p className="mb-4">
              HIPAA defines 18 types of identifiers that, when combined with
              health information, create PHI. Your privacy policy should
              address how you handle each category that applies to your
              practice:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              <div className="bg-gray-800/50 rounded-lg p-3">
                <p className="text-sm text-gray-300">Names</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-3">
                <p className="text-sm text-gray-300">Dates (birth, admission, discharge, death)</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-3">
                <p className="text-sm text-gray-300">Phone and fax numbers</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-3">
                <p className="text-sm text-gray-300">Email addresses</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-3">
                <p className="text-sm text-gray-300">Social Security numbers</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-3">
                <p className="text-sm text-gray-300">Medical record numbers</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-3">
                <p className="text-sm text-gray-300">Health plan beneficiary numbers</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-3">
                <p className="text-sm text-gray-300">Account numbers</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-3">
                <p className="text-sm text-gray-300">Certificate/license numbers</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-3">
                <p className="text-sm text-gray-300">Vehicle identifiers and serial numbers</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-3">
                <p className="text-sm text-gray-300">Device identifiers and serial numbers</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-3">
                <p className="text-sm text-gray-300">Web URLs and IP addresses</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-3">
                <p className="text-sm text-gray-300">Biometric identifiers (fingerprints, voiceprints)</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-3">
                <p className="text-sm text-gray-300">Full-face photographs and comparable images</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-3">
                <p className="text-sm text-gray-300">Geographic data smaller than a state</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-3">
                <p className="text-sm text-gray-300">Any other unique identifying number or code</p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">
              Electronic PHI (ePHI) and the Security Rule
            </h3>
            <p className="mb-4">
              When PHI is created, received, maintained, or transmitted in
              electronic form, it becomes ePHI and is subject to the HIPAA
              Security Rule in addition to the Privacy Rule. Your privacy
              policy should address the technical safeguards you employ:
              encryption at rest and in transit, access controls, audit
              logging, automatic session timeouts, and secure backup
              procedures. For healthcare websites and apps, this means HTTPS
              encryption, encrypted databases, role-based access controls, and
              audit trails for all PHI access.
            </p>
          </section>

          {/* Section 5: Telehealth Requirements */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Telehealth-Specific Privacy Requirements
            </h2>
            <p className="mb-4">
              The rapid expansion of telehealth has created new privacy
              challenges. If you offer virtual consultations, remote patient
              monitoring, or any form of digital healthcare delivery, your
              privacy policy must address these specific concerns:
            </p>
            <div className="space-y-4">
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-1">
                  Video and Audio Recording
                </h4>
                <p className="text-sm text-gray-400">
                  Clearly state whether telehealth sessions are recorded. If
                  recordings are made, explain the purpose, how they are
                  stored, who can access them, and how long they are retained.
                  Many states require two-party consent for recording
                  conversations.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-1">
                  Platform Security
                </h4>
                <p className="text-sm text-gray-400">
                  Identify the telehealth platform used and confirm it has
                  signed a BAA with your organization. Consumer-grade tools
                  like standard Zoom (non-healthcare), FaceTime, or Skype
                  are generally not HIPAA compliant. Use platforms
                  specifically designed for healthcare: Doxy.me, Zoom for
                  Healthcare, or similar services that offer BAAs.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-1">
                  Patient Location and Licensing
                </h4>
                <p className="text-sm text-gray-400">
                  Your privacy policy should note that telehealth services
                  may be subject to different state laws depending on where
                  the patient is located. Some states have stricter privacy
                  requirements than HIPAA, and the patient&apos;s state law
                  generally governs.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-1">
                  Remote Patient Monitoring Data
                </h4>
                <p className="text-sm text-gray-400">
                  If you use wearables, connected devices, or patient-reported
                  outcomes tools, describe what data is collected
                  continuously, how it is transmitted securely, and the
                  circumstances under which this data may be shared with
                  other providers or researchers.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-1">
                  Messaging and Patient Portals
                </h4>
                <p className="text-sm text-gray-400">
                  If patients can message providers through a portal or app,
                  explain the security measures in place for these
                  communications. Clarify that standard email and SMS are not
                  secure channels for PHI unless encrypted, and recommend
                  patients use the portal for sensitive communications.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: Patient Rights Under HIPAA */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Patient Rights Under HIPAA
            </h2>
            <p className="mb-4">
              Your privacy policy must clearly communicate each right that
              patients hold under the HIPAA Privacy Rule. Failure to include
              these or to honor them is a direct violation.
            </p>
            <div className="bg-gray-900/50 rounded-xl p-6">
              <div className="space-y-4 text-sm">
                <div className="flex gap-4">
                  <span className="text-blue-400 w-6 flex-shrink-0">1.</span>
                  <div>
                    <span className="font-semibold text-white">
                      Right to Access PHI
                    </span>
                    <p className="text-gray-400 mt-1">
                      Patients have the right to inspect and obtain a copy of
                      their PHI maintained in a designated record set. You must
                      respond within 30 days (one 30-day extension permitted).
                      You can charge a reasonable, cost-based fee for copies.
                      Under the 21st Century Cures Act, patients also have the
                      right to access their electronic health information via
                      API without special effort.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-blue-400 w-6 flex-shrink-0">2.</span>
                  <div>
                    <span className="font-semibold text-white">
                      Right to Request Amendments
                    </span>
                    <p className="text-gray-400 mt-1">
                      Patients can request corrections to their PHI if they
                      believe it is inaccurate or incomplete. You may deny the
                      request under limited circumstances but must provide a
                      written explanation and allow the patient to submit a
                      statement of disagreement.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-blue-400 w-6 flex-shrink-0">3.</span>
                  <div>
                    <span className="font-semibold text-white">
                      Right to an Accounting of Disclosures
                    </span>
                    <p className="text-gray-400 mt-1">
                      Patients can request a list of disclosures of their PHI
                      made by the covered entity for the previous six years,
                      excluding disclosures for treatment, payment, and
                      healthcare operations. You must track and provide this
                      within 60 days.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-blue-400 w-6 flex-shrink-0">4.</span>
                  <div>
                    <span className="font-semibold text-white">
                      Right to Request Restrictions
                    </span>
                    <p className="text-gray-400 mt-1">
                      Patients can request restrictions on how their PHI is
                      used or disclosed for treatment, payment, or operations.
                      You are not required to agree, except in one case: if
                      the patient pays out of pocket in full, you must restrict
                      disclosure to their health plan upon request.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-blue-400 w-6 flex-shrink-0">5.</span>
                  <div>
                    <span className="font-semibold text-white">
                      Right to Confidential Communications
                    </span>
                    <p className="text-gray-400 mt-1">
                      Patients can request that communications about their
                      health information be sent to a specific address or by a
                      specific method. For example, a patient may request that
                      appointment reminders not be left on a shared voicemail.
                      You must accommodate reasonable requests.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-blue-400 w-6 flex-shrink-0">6.</span>
                  <div>
                    <span className="font-semibold text-white">
                      Right to a Paper Copy of the NPP
                    </span>
                    <p className="text-gray-400 mt-1">
                      Even if a patient has agreed to receive the Notice of
                      Privacy Practices electronically, they retain the right
                      to request a paper copy at any time.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-blue-400 w-6 flex-shrink-0">7.</span>
                  <div>
                    <span className="font-semibold text-white">
                      Right to File a Complaint
                    </span>
                    <p className="text-gray-400 mt-1">
                      Patients can file a complaint with the covered entity or
                      directly with the HHS Office for Civil Rights if they
                      believe their privacy rights have been violated. No
                      retaliation is permitted.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 7: Business Associate Agreements */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Business Associate Agreements (BAAs)
            </h2>
            <p className="mb-4">
              A Business Associate Agreement is a legally binding contract
              between a covered entity and a business associate that
              establishes the permitted uses and disclosures of PHI by the
              business associate. Your privacy policy should reference your
              use of business associates and the protections in place.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">
              What a BAA Must Include
            </h3>
            <p className="mb-4">
              A valid BAA must specify the permitted and required uses of PHI
              by the business associate, prohibit the business associate from
              using or disclosing PHI other than as permitted, require the
              business associate to implement appropriate safeguards, require
              reporting of any unauthorized use or disclosure, ensure that any
              subcontractors agree to the same restrictions, make PHI
              available to fulfill patient access requests, return or destroy
              PHI at termination of the contract, and make internal practices
              available to HHS for compliance audits.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">
              Common Business Associates in Healthcare
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
              <div className="bg-gray-800/50 rounded-lg p-3">
                <p className="text-sm font-semibold text-white">EHR Vendors</p>
                <p className="text-xs text-gray-400">Epic, Cerner, Athenahealth, DrChrono</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-3">
                <p className="text-sm font-semibold text-white">Cloud Hosting</p>
                <p className="text-xs text-gray-400">AWS (with BAA), Google Cloud (with BAA), Azure</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-3">
                <p className="text-sm font-semibold text-white">Billing Services</p>
                <p className="text-xs text-gray-400">Medical billing companies, clearinghouses</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-3">
                <p className="text-sm font-semibold text-white">Telehealth Platforms</p>
                <p className="text-xs text-gray-400">Doxy.me, Zoom for Healthcare, Teladoc</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-3">
                <p className="text-sm font-semibold text-white">Payment Processors</p>
                <p className="text-xs text-gray-400">Stripe (with BAA), PayPal (limited PHI)</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-3">
                <p className="text-sm font-semibold text-white">IT Support / MSPs</p>
                <p className="text-xs text-gray-400">Any IT vendor with access to systems containing PHI</p>
              </div>
            </div>
            <p className="mb-4">
              Your privacy policy should note that all vendors with access to
              PHI have signed BAAs and are contractually obligated to protect
              patient information to the same standard as the covered entity.
            </p>
          </section>

          {/* Section 8: Breach Notification Requirements */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Healthcare Data Breach Notification Requirements
            </h2>
            <p className="mb-4">
              The HIPAA Breach Notification Rule (45 CFR 164.400-414)
              requires covered entities to notify affected individuals, HHS,
              and in some cases the media when a breach of unsecured PHI
              occurs. Your privacy policy should describe your breach
              notification procedures.
            </p>
            <div className="space-y-4">
              <div className="bg-red-900/20 border border-red-800/30 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-1">
                  Individual Notification
                </h4>
                <p className="text-sm text-gray-400">
                  Affected individuals must be notified without unreasonable
                  delay and no later than 60 days after discovery of the
                  breach. Notification must be by first-class mail (or email
                  if the individual has agreed to electronic notice) and
                  must include: a description of the breach, the types of
                  information involved, steps individuals should take to
                  protect themselves, what you are doing to investigate and
                  mitigate, and contact procedures for questions.
                </p>
              </div>
              <div className="bg-red-900/20 border border-red-800/30 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-1">
                  HHS Notification
                </h4>
                <p className="text-sm text-gray-400">
                  Breaches affecting 500 or more individuals must be reported
                  to HHS within 60 days. These appear on the HHS &ldquo;Wall
                  of Shame&rdquo; &mdash; a public list of breaches. Breaches
                  affecting fewer than 500 individuals can be reported
                  annually but must still be logged.
                </p>
              </div>
              <div className="bg-red-900/20 border border-red-800/30 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-1">
                  Media Notification
                </h4>
                <p className="text-sm text-gray-400">
                  If a breach affects 500 or more individuals in a single
                  state or jurisdiction, you must notify prominent media
                  outlets serving that area within 60 days.
                </p>
              </div>
              <div className="bg-red-900/20 border border-red-800/30 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-1">
                  Business Associate Obligations
                </h4>
                <p className="text-sm text-gray-400">
                  Business associates that discover a breach must notify
                  the covered entity without unreasonable delay and no later
                  than 60 days after discovery, providing the identity of
                  each individual affected.
                </p>
              </div>
            </div>
          </section>

          {/* Section 9: Common HIPAA Violations */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Common HIPAA Violations in Privacy Policies
            </h2>
            <p className="mb-4">
              The HHS Office for Civil Rights regularly audits healthcare
              organizations and issues fines for privacy policy deficiencies.
              These are the most commonly cited violations:
            </p>
            <div className="space-y-4">
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-1">
                  Using a Generic Template Without Customization
                </h4>
                <p className="text-sm text-gray-400">
                  A privacy policy that does not reflect your actual data
                  practices is a violation. If your NPP says you do not share
                  data with business associates but you use a cloud EHR, you
                  are non-compliant. Every policy must be tailored to your
                  specific operations.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-1">
                  Failing to Update After Changes
                </h4>
                <p className="text-sm text-gray-400">
                  Adding a new telehealth platform, switching EHR vendors, or
                  changing billing practices all require privacy policy
                  updates. The most common violation is failing to revise the
                  NPP when material changes occur.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-1">
                  Omitting Patient Rights
                </h4>
                <p className="text-sm text-gray-400">
                  Every HIPAA right must be described in the NPP. Omitting
                  the right to an accounting of disclosures or the right to
                  request restrictions is a direct violation, even if you
                  would honor the request in practice.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-1">
                  No Designated Privacy Officer Contact
                </h4>
                <p className="text-sm text-gray-400">
                  HIPAA requires the NPP to include the name or title and
                  telephone number of a contact person or office. Many small
                  practices list only a generic email address, which does not
                  satisfy the requirement.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-1">
                  Not Addressing Electronic Communications
                </h4>
                <p className="text-sm text-gray-400">
                  If your practice sends appointment reminders via text, uses
                  patient portals, or communicates via email, the privacy
                  policy must address the security of these channels and the
                  risks of unencrypted communication.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-1">
                  Lacking a Breach Notification Procedure
                </h4>
                <p className="text-sm text-gray-400">
                  The NPP must describe how patients will be notified in the
                  event of a breach. Many organizations fail to include this
                  required element.
                </p>
              </div>
            </div>
          </section>

          {/* Section 10: HIPAA vs GDPR Comparison */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              HIPAA vs GDPR: How They Differ for Healthcare
            </h2>
            <p className="mb-4">
              If your healthcare organization treats patients from the EU or
              has any EU presence, you must comply with both HIPAA and GDPR.
              While both protect personal data, they differ significantly in
              scope and approach.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-4 text-gray-400">Dimension</th>
                    <th className="text-left py-3 px-4 text-gray-400">HIPAA</th>
                    <th className="text-left py-3 px-4 text-gray-400">GDPR</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 font-semibold">Scope</td>
                    <td className="py-3 px-4">Covered entities and business associates in the US</td>
                    <td className="py-3 px-4">Any organization processing EU residents&apos; data</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 font-semibold">Data covered</td>
                    <td className="py-3 px-4">Protected Health Information (PHI) only</td>
                    <td className="py-3 px-4">All personal data, including health data as a special category</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 font-semibold">Consent model</td>
                    <td className="py-3 px-4">Consent not required for treatment, payment, operations</td>
                    <td className="py-3 px-4">Explicit consent required for processing health data (Article 9)</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 font-semibold">Right to erasure</td>
                    <td className="py-3 px-4">No general right to delete; amendment rights instead</td>
                    <td className="py-3 px-4">Right to erasure (right to be forgotten) with exceptions</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 font-semibold">Data portability</td>
                    <td className="py-3 px-4">Right to access and obtain copies</td>
                    <td className="py-3 px-4">Right to data portability in machine-readable format</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 font-semibold">Breach notification</td>
                    <td className="py-3 px-4">60 days to notify individuals</td>
                    <td className="py-3 px-4">72 hours to notify supervisory authority</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 font-semibold">Maximum penalties</td>
                    <td className="py-3 px-4 text-red-400">$2.1M per violation category/year</td>
                    <td className="py-3 px-4 text-red-400">&euro;20M or 4% of global annual revenue</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold">DPO requirement</td>
                    <td className="py-3 px-4">Privacy Officer required (any designated person)</td>
                    <td className="py-3 px-4">Data Protection Officer required for large-scale health data processing</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              If both regulations apply, you must meet the stricter
              requirement in each category. For example, GDPR&apos;s 72-hour
              breach notification deadline supersedes HIPAA&apos;s 60-day
              window for EU patients. GDPR&apos;s explicit consent
              requirement for health data processing is stricter than
              HIPAA&apos;s treatment-payment-operations exceptions.
            </p>
          </section>

          {/* Section 11: HIPAA Penalty Tiers */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              HIPAA Penalty Structure
            </h2>
            <p className="mb-4">
              HIPAA violations are assessed based on the level of culpability.
              Understanding the penalty tiers helps illustrate why compliance
              is not optional.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-4 text-gray-400">Tier</th>
                    <th className="text-left py-3 px-4 text-gray-400">Culpability Level</th>
                    <th className="text-left py-3 px-4 text-gray-400">Per Violation</th>
                    <th className="text-left py-3 px-4 text-gray-400">Annual Cap</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 font-semibold">Tier 1</td>
                    <td className="py-3 px-4">Did not know (and could not reasonably have known)</td>
                    <td className="py-3 px-4 text-yellow-400">$137 - $68,928</td>
                    <td className="py-3 px-4 text-yellow-400">$68,928</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 font-semibold">Tier 2</td>
                    <td className="py-3 px-4">Reasonable cause (not willful neglect)</td>
                    <td className="py-3 px-4 text-orange-400">$1,379 - $68,928</td>
                    <td className="py-3 px-4 text-orange-400">$137,886</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 font-semibold">Tier 3</td>
                    <td className="py-3 px-4">Willful neglect, corrected within 30 days</td>
                    <td className="py-3 px-4 text-red-400">$13,785 - $68,928</td>
                    <td className="py-3 px-4 text-red-400">$344,638</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold">Tier 4</td>
                    <td className="py-3 px-4">Willful neglect, not corrected</td>
                    <td className="py-3 px-4 text-red-400">$68,928+</td>
                    <td className="py-3 px-4 text-red-400">$2,067,813</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              Criminal penalties can also apply: up to $50,000 and one year
              in prison for knowingly obtaining PHI in violation of HIPAA, up
              to $100,000 and five years for offenses committed under false
              pretenses, and up to $250,000 and ten years for offenses
              committed with intent to sell or use PHI for commercial gain
              or malicious harm.
            </p>
          </section>

          {/* Section 12: Cost Comparison Table */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              The Cost of Healthcare Privacy Compliance
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-4 text-gray-400">Approach</th>
                    <th className="text-left py-3 px-4 text-gray-400">Cost</th>
                    <th className="text-left py-3 px-4 text-gray-400">Time</th>
                    <th className="text-left py-3 px-4 text-gray-400">Coverage</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4">Healthcare attorney</td>
                    <td className="py-3 px-4 text-red-400 font-semibold">$3,000 - $10,000+</td>
                    <td className="py-3 px-4">2 - 6 weeks</td>
                    <td className="py-3 px-4">Customized to your practice</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4">HIPAA compliance consultant</td>
                    <td className="py-3 px-4 text-red-400 font-semibold">$5,000 - $20,000</td>
                    <td className="py-3 px-4">4 - 12 weeks</td>
                    <td className="py-3 px-4">Full compliance program</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4">Enterprise compliance SaaS</td>
                    <td className="py-3 px-4 text-yellow-400 font-semibold">$200 - $800/month</td>
                    <td className="py-3 px-4">1 - 2 weeks setup</td>
                    <td className="py-3 px-4">Policy templates + training</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4">DIY with free template</td>
                    <td className="py-3 px-4 text-yellow-400 font-semibold">$0 (+ your time)</td>
                    <td className="py-3 px-4">8 - 20+ hours</td>
                    <td className="py-3 px-4">Risk of gaps and errors</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-white">PolicyForge Pro</td>
                    <td className="py-3 px-4 text-green-400 font-semibold">$12.99 (one-time)</td>
                    <td className="py-3 px-4 text-green-400">2 minutes</td>
                    <td className="py-3 px-4">HIPAA-aware policy + compliance scan</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 bg-green-900/20 border border-green-800/30 rounded-lg p-4">
              <p className="text-sm text-green-300">
                <strong>PolicyForge Pro: $12.99 one-time.</strong> Generate
                unlimited privacy policies, terms of service, and cookie
                policies. Includes compliance scanning for HIPAA, GDPR, and
                CCPA requirements. No subscription. No hidden fees.
              </p>
            </div>
          </section>

          {/* Section 13: FAQ */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              FAQ: Healthcare Privacy Policies and HIPAA
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Is a website privacy policy the same as a HIPAA Notice of
                  Privacy Practices?
                </h3>
                <p>
                  No. A website privacy policy covers how your website collects
                  and uses visitor data (cookies, analytics, form submissions).
                  A HIPAA Notice of Privacy Practices (NPP) is a separate
                  legal document describing how you use and disclose Protected
                  Health Information. Most healthcare organizations need both
                  documents. Your website privacy policy should reference the
                  NPP and link to it.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Does my small medical practice really need to worry about
                  HIPAA privacy policies?
                </h3>
                <p>
                  Yes. HIPAA applies to all healthcare providers who transmit
                  health information electronically, regardless of size. A
                  solo practitioner who submits electronic claims is just as
                  liable as a hospital system. In fact, small practices are
                  increasingly targeted in HHS audits because they are more
                  likely to have compliance gaps.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Do I need a BAA with every software vendor I use?
                </h3>
                <p>
                  You need a BAA with every vendor that creates, receives,
                  maintains, or transmits PHI on your behalf. This includes
                  your EHR, cloud hosting, billing service, email provider (if
                  used for patient communication), and telehealth platform. It
                  does not include vendors who never access PHI, such as your
                  website hosting provider (if no patient data passes through
                  the website) or your office supply company.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  What happens if I have a data breach but my practice is
                  small?
                </h3>
                <p>
                  Size does not exempt you from breach notification
                  requirements. All breaches of unsecured PHI must be reported,
                  regardless of the number of individuals affected. Breaches
                  affecting fewer than 500 individuals can be reported to HHS
                  annually rather than within 60 days, but you must still
                  notify each affected individual without unreasonable delay.
                  Failure to report is itself a HIPAA violation.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Can I use Google Analytics on my healthcare website?
                </h3>
                <p>
                  Yes, but with caution. Google Analytics on a general
                  informational healthcare website (appointment scheduling,
                  service descriptions) is generally acceptable. However, if
                  your website includes a patient portal, online intake forms,
                  or any feature where PHI is entered, you must ensure
                  analytics tools do not capture PHI in URLs, form fields, or
                  page titles. Google Analytics does not sign BAAs, so it
                  should never have access to PHI. Use server-side analytics
                  or privacy-focused alternatives for pages that handle
                  patient information.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  How does the FTC Health Breach Notification Rule affect
                  health apps?
                </h3>
                <p>
                  If your digital health app or wearable does not meet the
                  definition of a HIPAA covered entity or business associate,
                  you may still be subject to the FTC Health Breach
                  Notification Rule. This rule requires vendors of personal
                  health records and related entities to notify consumers and
                  the FTC following a breach of unsecured health information.
                  Penalties for non-compliance are up to $50,120 per violation
                  per day. Your privacy policy should address this if your
                  app collects health-related data.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Do I need to encrypt patient emails?
                </h3>
                <p>
                  HIPAA does not explicitly mandate encryption, but it is an
                  &ldquo;addressable&rdquo; safeguard under the Security Rule.
                  This means you must either implement encryption or document
                  why an equivalent alternative safeguard is reasonable and
                  appropriate. In practice, if you communicate with patients
                  via email about their health conditions, medications, or
                  treatment plans, encryption is effectively required. If a
                  patient requests unencrypted email communication, you should
                  document the request and warn them of the risks in writing.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  How often should I update my HIPAA privacy policy?
                </h3>
                <p>
                  Review and update whenever you make material changes to your
                  privacy practices &mdash; adding a telehealth platform,
                  changing EHR vendors, expanding to new service lines, or
                  starting to share data with new business associates. At
                  minimum, conduct an annual review to ensure accuracy. HIPAA
                  requires that the revised NPP be made available upon request
                  and posted prominently on your website within 60 days of
                  any material revision.
                </p>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-800/30 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-4 text-center">
              Protect Your Practice. Protect Your Patients.
            </h2>
            <p className="text-gray-300 text-center mb-6">
              HIPAA compliance is not optional, and the penalties for getting
              it wrong are severe. Generate a healthcare-ready privacy policy
              in under 2 minutes and scan your existing website for
              compliance gaps before an auditor does.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/"
                className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-8 rounded-lg transition"
              >
                Generate Free Policy &mdash; $0
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
