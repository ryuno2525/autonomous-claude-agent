import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy for AI Tools & Apps | Free Generator - PolicyForge",
  description:
    "Generate a free privacy policy for your AI tool, chatbot, or machine learning app. Covers training data, model inputs/outputs, automated decisions, and data retention. GDPR & CCPA compliant.",
  keywords:
    "AI privacy policy, AI tool privacy policy, chatbot privacy policy, machine learning privacy policy, LLM privacy policy, AI app GDPR, artificial intelligence data protection, AI data collection policy, automated decision making policy, AI transparency policy",
};

export default function PrivacyPolicyForAITool() {
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
          Privacy Policy for AI Tools &amp; Applications
        </h1>

        <p className="text-gray-400 text-lg mb-8">
          AI tools process data differently from traditional software. Your
          privacy policy must address training data, model behavior, automated
          decisions, and the unique risks AI introduces. Here&apos;s everything
          you need to know.
        </p>

        <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-blue-800/40 rounded-xl p-6 mb-10">
          <h3 className="text-lg font-semibold text-white mb-2">
            Generate Your AI Privacy Policy in 2 Minutes
          </h3>
          <p className="text-gray-300 text-sm mb-4">
            PolicyForge creates customized privacy policies for AI tools,
            chatbots, and ML applications. GDPR, CCPA, and EU AI Act ready.
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
              Scan Your AI Tool
            </Link>
          </div>
        </div>

        <div className="space-y-10 text-gray-300 leading-relaxed text-[17px]">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Why AI Tools Need a Specialized Privacy Policy
            </h2>
            <p className="mb-4">
              Traditional privacy policies cover data collection, cookies, and
              third-party sharing. AI tools introduce entirely new categories of
              data processing that generic templates do not address. When a user
              enters a prompt into a chatbot, uploads an image for analysis, or
              feeds data into a prediction model, they are creating a new type of
              data relationship that privacy law is rapidly evolving to regulate.
            </p>
            <p className="mb-4">
              The EU AI Act, which entered into force in August 2024, creates
              specific transparency obligations for AI systems. Article 52
              requires that users are informed when they are interacting with an
              AI system. High-risk AI systems face additional requirements
              including data governance, documentation, and human oversight
              provisions that must be reflected in your privacy disclosures.
            </p>
            <p className="mb-4">
              Beyond the EU AI Act, the GDPR&apos;s Article 22 gives individuals
              the right not to be subject to decisions based solely on automated
              processing that produce legal or similarly significant effects.
              California&apos;s CCPA and CPRA include specific provisions around
              automated decision-making and profiling. If your AI tool makes
              decisions that affect users &mdash; from content recommendations to
              credit scoring to hiring assessments &mdash; your privacy policy
              must explicitly address this.
            </p>
            <p>
              A standard privacy policy template will leave your AI tool exposed
              to regulatory action, user distrust, and potential lawsuits.
              Companies like Clearview AI, Meta, and OpenAI have all faced
              significant legal challenges related to AI data processing. A clear,
              comprehensive privacy policy is your first line of defense.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              What Your AI Privacy Policy Must Cover
            </h2>
            <p className="mb-4">
              An AI-specific privacy policy needs to address data flows that
              don&apos;t exist in traditional software. Here are the critical
              sections:
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">
              1. Training Data Disclosure
            </h3>
            <p className="mb-4">
              Users need to know whether their data is used to train or improve
              your AI models. This is one of the most contentious issues in AI
              privacy. Your policy should state clearly: Is user input used for
              model training? Can users opt out of having their data used for
              training? How is training data stored and for how long? Is training
              data anonymized or aggregated before use?
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">
              2. Input and Output Data Handling
            </h3>
            <p className="mb-4">
              AI tools process inputs (prompts, images, documents, voice) and
              generate outputs (text, images, predictions, classifications).
              Your policy must explain what happens to both. Are inputs stored
              after processing? Are outputs logged? Who owns the generated
              content? Can inputs contain personal data, and how is that handled?
              Many AI tools process data through third-party APIs (OpenAI,
              Anthropic, Google) &mdash; users must be informed about this data
              sharing.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">
              3. Automated Decision-Making
            </h3>
            <p className="mb-4">
              If your AI tool makes or assists in making decisions that affect
              people, GDPR Article 22 and similar regulations require you to
              disclose: the existence of automated decision-making, the logic
              involved (at a meaningful level), the significance and envisaged
              consequences of such processing, and how users can request human
              review of automated decisions.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">
              4. Third-Party AI Providers
            </h3>
            <p className="mb-4">
              Most AI tools use third-party models and APIs. If you send user
              data to OpenAI, Anthropic, Google, AWS Bedrock, Azure OpenAI, or
              any other provider, your privacy policy must disclose this. Include
              the provider name, what data is sent to them, their data retention
              policies, and links to their own privacy policies. This is
              analogous to the sub-processor disclosure required under GDPR.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">
              5. Data Retention for AI
            </h3>
            <p className="mb-4">
              AI data retention is more complex than traditional software.
              You need to address: how long user inputs are stored, how long
              generated outputs are retained, whether conversation history is
              maintained, how model training data is retained (often indefinitely
              once incorporated into model weights), and how users can request
              deletion of their data from all systems including training
              datasets.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">
              6. AI-Specific User Rights
            </h3>
            <p>
              Beyond standard privacy rights (access, deletion, portability),
              AI users may have additional rights under emerging regulations:
              the right to an explanation of AI decisions, the right to opt out
              of AI profiling, the right to object to AI-based processing, the
              right to human review of automated decisions, and the right to
              know if they are interacting with an AI system.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Regulatory Landscape for AI Privacy
            </h2>

            <div className="bg-gray-900/50 rounded-xl p-6 mb-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                Key Regulations Affecting AI Tools
              </h3>
              <div className="space-y-4 text-sm">
                <div className="flex gap-4">
                  <span className="text-blue-400 font-semibold w-32 flex-shrink-0">GDPR (EU)</span>
                  <span>Articles 13-14 (transparency), Article 22 (automated decisions), Article 35 (impact assessments). Fines up to &euro;20M or 4% global revenue.</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-blue-400 font-semibold w-32 flex-shrink-0">EU AI Act</span>
                  <span>Risk-based framework. Transparency obligations for all AI, strict rules for high-risk systems. Effective from February 2025.</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-blue-400 font-semibold w-32 flex-shrink-0">CCPA/CPRA (CA)</span>
                  <span>Right to know about automated decision-making. Right to opt out of AI profiling. Applies to businesses serving California residents.</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-blue-400 font-semibold w-32 flex-shrink-0">Colorado AI Act</span>
                  <span>First US state comprehensive AI law. Requires impact assessments and disclosures for high-risk AI systems. Effective 2026.</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-blue-400 font-semibold w-32 flex-shrink-0">PIPEDA (Canada)</span>
                  <span>Requires meaningful consent for AI data processing. Proposed AIDA (Artificial Intelligence and Data Act) adds AI-specific rules.</span>
                </div>
              </div>
            </div>

            <p className="mb-4">
              The regulatory landscape is evolving rapidly. At least 30
              countries are developing or have enacted AI-specific legislation.
              Your privacy policy is not a one-time document &mdash; it needs
              regular updates as new regulations take effect.
            </p>
            <p>
              Non-compliance is not just a legal risk. The Italian data
              protection authority temporarily banned ChatGPT in March 2023 for
              GDPR violations. The French CNIL fined Clearview AI &euro;20
              million. FTC enforcement actions against AI companies are
              increasing. A proper privacy policy is cheaper than a lawsuit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              AI Privacy Policy Checklist
            </h2>
            <div className="bg-gray-900/50 rounded-xl p-6">
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                {[
                  "Disclose AI/ML use in your product",
                  "Explain what data is collected as inputs",
                  "State how outputs are generated and stored",
                  "Disclose training data practices",
                  "Provide opt-out for model training",
                  "List third-party AI providers (OpenAI, etc.)",
                  "Address automated decision-making",
                  "Explain AI-specific user rights",
                  "Define data retention for AI data",
                  "Include GDPR legal basis for AI processing",
                  "Address CCPA/CPRA requirements",
                  "Disclose EU AI Act risk classification",
                  "Provide human review mechanisms",
                  "Include contact info for AI-related inquiries",
                  "Document Data Protection Impact Assessment",
                  "Address cross-border data transfers for AI",
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
              Types of AI Tools That Need Privacy Policies
            </h2>
            <p className="mb-4">
              Every AI-powered product needs a privacy policy, but the
              specific requirements vary by category:
            </p>
            <div className="space-y-4">
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-1">AI Chatbots &amp; Assistants</h4>
                <p className="text-sm text-gray-400">ChatGPT-like tools, customer support bots, virtual assistants. Must address conversation logging, context retention, and training data use.</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-1">AI Image &amp; Video Generators</h4>
                <p className="text-sm text-gray-400">Midjourney, DALL-E, Stable Diffusion wrappers. Must address uploaded images, generated content ownership, and model training on user uploads.</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-1">AI Writing &amp; Code Tools</h4>
                <p className="text-sm text-gray-400">Copilot, Jasper, Grammarly. Must address document content processing, code snippet retention, and intellectual property concerns.</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-1">AI Analytics &amp; Prediction</h4>
                <p className="text-sm text-gray-400">Forecasting tools, recommendation engines, fraud detection. Must address profiling, automated decisions, and algorithmic bias.</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-1">AI Healthcare &amp; Fintech</h4>
                <p className="text-sm text-gray-400">Diagnostic tools, risk assessment, credit scoring. High-risk category requiring DPIA, human oversight, and sector-specific compliance (HIPAA, PCI-DSS).</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Common AI Privacy Policy Mistakes
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-white">Using a generic template without AI sections</h4>
                <p className="text-sm text-gray-400">Standard privacy policies don&apos;t cover training data, model inputs/outputs, or automated decisions. Your AI tool has fundamentally different data flows.</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-white">Not disclosing third-party AI providers</h4>
                <p className="text-sm text-gray-400">If you use OpenAI, Anthropic, or Google APIs, users must know their data is being sent to these providers. This is a GDPR requirement.</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-white">Claiming &quot;we don&apos;t store data&quot; when you do</h4>
                <p className="text-sm text-gray-400">Even temporary processing creates data flows. Logs, caches, and API calls all involve data handling. Be honest about what happens.</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-white">No opt-out for model training</h4>
                <p className="text-sm text-gray-400">Users increasingly expect the ability to prevent their data from being used to train AI models. OpenAI and Google both now offer this. Your tool should too.</p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-800/30 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-4 text-center">
              Generate Your AI Privacy Policy Now
            </h2>
            <p className="text-gray-300 text-center mb-6">
              PolicyForge generates customized privacy policies that cover AI
              data processing, training data disclosure, automated decisions,
              and full GDPR/CCPA/EU AI Act compliance. Done in under 2 minutes.
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
                  Do AI tools need a separate privacy policy?
                </h3>
                <p>
                  Not necessarily separate, but your privacy policy must include
                  AI-specific sections covering training data, automated
                  decisions, and model input/output handling. A standard
                  website privacy policy without these sections leaves you
                  non-compliant under GDPR Article 22 and the EU AI Act.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Does the EU AI Act require a privacy policy?
                </h3>
                <p>
                  The EU AI Act requires transparency measures including clear
                  disclosures about AI system capabilities, limitations, and
                  data usage. While it does not specifically mandate a
                  &quot;privacy policy,&quot; the transparency requirements are
                  best fulfilled through privacy and AI disclosure documents.
                  Combined with GDPR obligations, a comprehensive privacy
                  policy is effectively mandatory.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  What if my AI tool uses third-party APIs like OpenAI?
                </h3>
                <p>
                  You must disclose all third-party AI providers in your
                  privacy policy. Under GDPR, these providers are either
                  sub-processors or joint controllers depending on the
                  arrangement. Your policy should name the providers, explain
                  what data is shared with them, and link to their privacy
                  policies.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Can users opt out of AI model training?
                </h3>
                <p>
                  Under GDPR, users have the right to object to processing for
                  certain purposes including profiling. If you use customer
                  data for model training, providing an opt-out mechanism is
                  strongly recommended and may be legally required depending
                  on your legal basis for processing. Major AI companies
                  including OpenAI and Google now offer training data opt-outs.
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-500">
          <p>
            PolicyForge helps AI developers create compliant privacy policies.
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
