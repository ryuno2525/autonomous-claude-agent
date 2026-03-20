import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "LGPD Privacy Policy Generator | Brazil Data Protection Compliance - PolicyForge",
  description:
    "Generate an LGPD-compliant privacy policy for your website or app serving Brazilian users. Covers Lei Geral de Proteção de Dados requirements, consent management, data subject rights, and ANPD compliance.",
  keywords:
    "LGPD privacy policy, LGPD privacy policy generator, Brazil privacy policy template, LGPD compliance, Lei Geral de Proteção de Dados, Brazil data protection, LGPD compliant website, ANPD privacy requirements, LGPD privacy policy template English",
  openGraph: {
    title: "LGPD Privacy Policy Generator for Brazil - PolicyForge",
    description:
      "Generate an LGPD-compliant privacy policy for websites and apps serving Brazilian users. Full compliance with Brazil's data protection law.",
    type: "website",
  },
};

export default function LGPDPrivacyPolicyBrazil() {
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
          LGPD Privacy Policy Generator for Brazil
        </h1>

        <p className="text-gray-400 text-lg mb-8">
          Brazil&apos;s Lei Geral de Prote&ccedil;&atilde;o de Dados (LGPD) is
          one of the world&apos;s most comprehensive data protection laws,
          modeled after the EU&apos;s GDPR. If your website, app, or service
          collects personal data from anyone in Brazil &mdash; regardless of
          where your business is based &mdash; you must comply with the LGPD.
          With over 150 million internet users, Brazil represents a massive
          market that cannot be ignored. The Autoridade Nacional de
          Prote&ccedil;&atilde;o de Dados (ANPD) actively enforces compliance,
          with penalties reaching 2% of revenue up to R$50 million per
          violation.
        </p>

        <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-blue-800/40 rounded-xl p-6 mb-10">
          <h3 className="text-lg font-semibold text-white mb-2">
            Generate Your LGPD-Compliant Privacy Policy in 2 Minutes
          </h3>
          <p className="text-gray-300 text-sm mb-4">
            PolicyForge creates privacy policies that cover LGPD, GDPR, and
            CCPA requirements simultaneously. One policy, multiple
            jurisdictions. Starting at $4.99 &mdash; not $500 for a lawyer.
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
              What Is the LGPD?
            </h2>
            <p className="mb-4">
              The LGPD (Lei Geral de Prote&ccedil;&atilde;o de Dados, or
              General Data Protection Law) is Brazil&apos;s comprehensive data
              protection regulation, enacted in August 2018 and fully effective
              since August 2020. It regulates how personal data of individuals
              in Brazil is collected, processed, stored, and shared.
            </p>
            <p className="mb-4">
              The LGPD applies to any organization that processes personal data
              of individuals located in Brazil, processes data collected in
              Brazil, or offers goods or services to the Brazilian market. Like
              GDPR, the LGPD has extraterritorial reach &mdash; your business
              does not need to be in Brazil for the law to apply.
            </p>

            <div className="bg-gray-900/50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                LGPD at a Glance
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-blue-400 font-semibold">Full Name</span>
                  <p className="text-gray-400">Lei Geral de Prote&ccedil;&atilde;o de Dados (Law No. 13,709/2018)</p>
                </div>
                <div>
                  <span className="text-blue-400 font-semibold">Effective Date</span>
                  <p className="text-gray-400">August 16, 2020 (penalties from August 2021)</p>
                </div>
                <div>
                  <span className="text-blue-400 font-semibold">Enforcing Authority</span>
                  <p className="text-gray-400">ANPD (Autoridade Nacional de Prote&ccedil;&atilde;o de Dados)</p>
                </div>
                <div>
                  <span className="text-blue-400 font-semibold">Maximum Penalty</span>
                  <p className="text-gray-400">2% of revenue in Brazil, up to R$50 million (~$10M USD) per violation</p>
                </div>
                <div>
                  <span className="text-blue-400 font-semibold">Scope</span>
                  <p className="text-gray-400">Any organization processing data of individuals in Brazil</p>
                </div>
                <div>
                  <span className="text-blue-400 font-semibold">Internet Users in Brazil</span>
                  <p className="text-gray-400">150+ million (5th largest internet population globally)</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              LGPD&apos;s 10 Legal Bases for Processing
            </h2>
            <p className="mb-4">
              Unlike GDPR (which has 6 legal bases), the LGPD provides 10
              legal bases for processing personal data. Your privacy policy
              must identify which base applies to each processing activity:
            </p>

            <div className="space-y-3">
              {[
                { num: "1", title: "Consent", desc: "Free, informed, and unambiguous consent from the data subject. Must be specific and can be revoked at any time." },
                { num: "2", title: "Legal obligation", desc: "Processing necessary to comply with a legal or regulatory obligation." },
                { num: "3", title: "Public policy", desc: "Processing by public administration for executing public policies." },
                { num: "4", title: "Research", desc: "Processing for studies by research bodies, with anonymization where possible." },
                { num: "5", title: "Contract performance", desc: "Processing necessary for executing a contract or preliminary procedures related to a contract." },
                { num: "6", title: "Legal proceedings", desc: "Processing for exercising rights in judicial, administrative, or arbitration proceedings." },
                { num: "7", title: "Protection of life", desc: "Processing to protect the life or physical safety of the data subject or third party." },
                { num: "8", title: "Health protection", desc: "Processing for health-related purposes by health professionals or health services." },
                { num: "9", title: "Legitimate interest", desc: "Processing for the legitimate interests of the controller or third party, unless overridden by the data subject's rights." },
                { num: "10", title: "Credit protection", desc: "Processing for credit protection purposes (unique to LGPD, not found in GDPR)." },
              ].map((item) => (
                <div key={item.num} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-0.5">
                    {item.num}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{item.title}</h4>
                    <p className="text-sm text-gray-400 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              LGPD vs. GDPR: Key Differences
            </h2>
            <p className="mb-4">
              While the LGPD was inspired by GDPR, there are important
              differences that affect your privacy policy:
            </p>

            <div className="bg-gray-900/50 rounded-xl p-6">
              <div className="space-y-3 text-sm">
                <div className="grid grid-cols-3 gap-4 pb-3 border-b border-white/10 font-semibold text-white">
                  <span>Aspect</span>
                  <span className="text-center">GDPR (EU)</span>
                  <span className="text-center text-blue-400">LGPD (Brazil)</span>
                </div>
                {[
                  { aspect: "Legal bases", gdpr: "6 legal bases", lgpd: "10 legal bases (includes credit protection)" },
                  { aspect: "DPO requirement", gdpr: "Required in specific cases", lgpd: "Required for ALL controllers" },
                  { aspect: "Consent definition", gdpr: "Freely given, specific, informed, unambiguous", lgpd: "Free, informed, unambiguous (similar but slightly different standard)" },
                  { aspect: "Breach notification", gdpr: "72 hours to supervisory authority", lgpd: "'Reasonable time' to ANPD (no fixed deadline)" },
                  { aspect: "Maximum fine", gdpr: "€20M or 4% global revenue", lgpd: "R$50M (~$10M USD) or 2% revenue in Brazil" },
                  { aspect: "Data portability", gdpr: "Right to data portability", lgpd: "Right to data portability (broader scope)" },
                  { aspect: "Anonymized data", gdpr: "Excluded from GDPR scope", lgpd: "Excluded unless anonymization can be reversed" },
                  { aspect: "International transfers", gdpr: "Adequacy decisions, SCCs, BCRs", lgpd: "Similar mechanisms, ANPD-approved countries" },
                ].map((row) => (
                  <div
                    key={row.aspect}
                    className="grid grid-cols-3 gap-4 py-2 border-b border-white/5"
                  >
                    <span className="text-gray-300">{row.aspect}</span>
                    <span className="text-center text-gray-400">{row.gdpr}</span>
                    <span className="text-center text-blue-400">{row.lgpd}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Data Subject Rights Under LGPD
            </h2>
            <p className="mb-4">
              Brazilian data subjects (titulares) have extensive rights under
              the LGPD. Your privacy policy must list all of these rights and
              explain how individuals can exercise them:
            </p>

            <div className="space-y-2">
              {[
                "Confirmation of the existence of data processing",
                "Access to their personal data",
                "Correction of incomplete, inaccurate, or outdated data",
                "Anonymization, blocking, or deletion of unnecessary or excessive data",
                "Portability of data to another service provider",
                "Deletion of data processed with consent",
                "Information about public and private entities with whom data has been shared",
                "Information about the possibility of denying consent and its consequences",
                "Revocation of consent at any time",
                "Review of automated decisions that affect their interests",
              ].map((right) => (
                <div key={right} className="flex items-start gap-2 text-sm">
                  <span className="text-green-400 mt-0.5">&#x2713;</span>
                  <span className="text-gray-300">{right}</span>
                </div>
              ))}
            </div>

            <p className="mt-4">
              Under LGPD, data subjects can exercise these rights at any time
              through a simple request. You must respond within 15 days
              (compared to GDPR&apos;s 30 days). Your privacy policy must
              provide clear instructions for how to submit these requests.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              What Your LGPD Privacy Policy Must Include
            </h2>
            <div className="bg-gray-900/50 rounded-xl p-6">
              <div className="space-y-2 text-sm">
                {[
                  "Identity and contact details of the data controller (controlador)",
                  "Identity and contact details of the Data Protection Officer (encarregado)",
                  "All categories of personal data collected",
                  "Purpose of processing for each category of data",
                  "Legal basis for each processing activity (from the 10 legal bases)",
                  "How personal data is collected (forms, cookies, APIs, third parties)",
                  "Third parties and data processors with whom data is shared",
                  "International data transfer details and safeguards",
                  "Data retention periods for each category",
                  "Security measures implemented to protect personal data",
                  "Complete list of data subject rights under LGPD",
                  "How data subjects can exercise their rights (contact method, response time)",
                  "Cookie policy and consent mechanisms",
                  "Whether automated decision-making is used and how to request review",
                  "Policy update procedures and notification methods",
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
              ANPD Enforcement and Penalties
            </h2>
            <p className="mb-4">
              The ANPD (Autoridade Nacional de Prote&ccedil;&atilde;o de Dados)
              is Brazil&apos;s data protection authority, responsible for
              interpreting and enforcing the LGPD. The ANPD has been
              increasingly active since its establishment, issuing guidance
              documents, conducting investigations, and applying sanctions.
            </p>

            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-white">Warning with deadline</h4>
                <p className="text-sm text-gray-400">The ANPD may issue a warning with a deadline for corrective measures.</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-white">Simple fine</h4>
                <p className="text-sm text-gray-400">Up to 2% of the company&apos;s revenue in Brazil, limited to R$50 million (~$10M USD) per violation.</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-white">Daily fine</h4>
                <p className="text-sm text-gray-400">Accumulating daily fines until the violation is corrected, up to the same R$50 million ceiling.</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-white">Public disclosure</h4>
                <p className="text-sm text-gray-400">The ANPD can publicly disclose the violation after investigation and confirmation, causing reputational damage.</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-white">Data processing suspension</h4>
                <p className="text-sm text-gray-400">Partial or total suspension of data processing activities related to the violation for up to 6 months (renewable).</p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-800/30 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-4 text-center">
              Generate Your LGPD-Compliant Privacy Policy Now
            </h2>
            <p className="text-gray-300 text-center mb-6">
              PolicyForge generates privacy policies that comply with LGPD,
              GDPR, and CCPA simultaneously. One policy, full international
              coverage. Done in under 2 minutes for $4.99 &mdash; not $500.
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
                  Does the LGPD apply to my business if I&apos;m not in Brazil?
                </h3>
                <p>
                  Yes. The LGPD has extraterritorial scope. It applies to any
                  organization that processes personal data of individuals in
                  Brazil, collects data in Brazil, or offers goods or services
                  to the Brazilian market. If your website or app is accessible
                  to Brazilian users and collects any personal data (even IP
                  addresses via analytics), the LGPD likely applies.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Do I need a DPO under the LGPD?
                </h3>
                <p>
                  Yes. Unlike GDPR, which only requires a DPO in specific
                  circumstances, the LGPD requires ALL data controllers to
                  appoint an encarregado (DPO). However, the ANPD issued
                  Resolution No. 2/2022 which exempts small businesses and
                  startups from some requirements. Your privacy policy must
                  still name and provide contact details for your DPO or
                  explain the exemption.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Can I use the same privacy policy for LGPD and GDPR?
                </h3>
                <p>
                  Yes, with additions. A GDPR-compliant policy covers most LGPD
                  requirements since the laws are similar. However, you must
                  add: reference to LGPD-specific legal bases (especially credit
                  protection), the 15-day response deadline for data subject
                  requests, ANPD contact information, and the right to review
                  automated decisions. PolicyForge generates policies that cover
                  both frameworks simultaneously.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Does the LGPD require cookie consent?
                </h3>
                <p>
                  The LGPD does not have a specific cookie provision like the
                  EU&apos;s ePrivacy Directive. However, cookies that collect
                  personal data (analytics, advertising, personalization) fall
                  under the LGPD&apos;s general consent requirements. If you
                  rely on consent as your legal basis for processing cookie
                  data, you need a cookie consent mechanism. The ANPD has
                  indicated that cookie banners may be required in future
                  guidance.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  What is the penalty for not having a privacy policy under LGPD?
                </h3>
                <p>
                  Failing to provide transparent information about data
                  processing (which includes not having a privacy policy) can
                  result in penalties up to 2% of your revenue in Brazil,
                  capped at R$50 million (~$10M USD) per violation. The ANPD
                  can also suspend your data processing activities entirely,
                  which for an online business means you cannot serve Brazilian
                  customers.
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
                <span className="text-blue-400 font-semibold">
                  GDPR Privacy Policy Generator
                </span>
                <p className="text-gray-400 mt-1">
                  Full EU GDPR-compliant privacy policy for any website.
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
                  California Consumer Privacy Act compliant privacy policy.
                </p>
              </Link>
              <Link
                href="/pipeda-privacy-policy-generator"
                className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800/70 transition block"
              >
                <span className="text-blue-400 font-semibold">
                  PIPEDA Privacy Policy (Canada)
                </span>
                <p className="text-gray-400 mt-1">
                  Canadian PIPEDA-compliant privacy policy generator.
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
                  SaaS-specific privacy policy covering international users.
                </p>
              </Link>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-500">
          <p>
            PolicyForge helps businesses comply with LGPD, GDPR, and CCPA.
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
