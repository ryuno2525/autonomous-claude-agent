import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy for APIs & Developer Platforms | Free Generator - PolicyForge",
  description:
    "Generate a free privacy policy for your REST API, GraphQL endpoint, or developer platform. Covers API data collection, OAuth, webhooks, rate limiting, and data processor agreements. GDPR & CCPA compliant.",
  keywords:
    "API privacy policy, REST API privacy policy, GraphQL privacy policy, developer platform privacy policy, API data protection, API GDPR compliance, webhook privacy policy, OAuth privacy policy, API data processor agreement, API terms of service, developer API legal requirements, API endpoint data collection",
};

export default function PrivacyPolicyForAPI() {
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
          Privacy Policy for APIs &amp; Developer Platforms
        </h1>

        <p className="text-gray-400 text-lg mb-8">
          APIs are the connective tissue of modern software. Every API call
          carries data &mdash; authentication tokens, user payloads, IP
          addresses, request metadata &mdash; and every one of those data points
          creates privacy obligations. If you expose an API to third-party
          developers, you need a privacy policy that speaks their language.
        </p>

        <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-blue-800/40 rounded-xl p-6 mb-10">
          <h3 className="text-lg font-semibold text-white mb-2">
            Generate Your API Privacy Policy in 2 Minutes
          </h3>
          <p className="text-gray-300 text-sm mb-4">
            PolicyForge creates customized privacy policies for APIs, developer
            platforms, and data services. Covers OAuth, webhooks, data processor
            agreements, and GDPR Article 28 compliance.
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
              Scan Your API Documentation
            </Link>
          </div>
        </div>

        <div className="space-y-10 text-gray-300 leading-relaxed text-[17px]">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Why APIs Need a Dedicated Privacy Policy
            </h2>
            <p className="mb-4">
              Most privacy policies are written for websites and mobile apps
              &mdash; they address cookies, analytics pixels, and form
              submissions. APIs have fundamentally different data flows. When a
              developer sends a POST request to your endpoint, there are no
              cookies involved, but there is an API key tied to an identity, a
              request body that may contain personal data, server logs capturing
              IP addresses and timestamps, and potentially webhook callbacks
              sending data to third-party URLs.
            </p>
            <p className="mb-4">
              The legal landscape treats API providers as data processors under
              GDPR Article 28. This means you have specific contractual
              obligations to the data controllers (your API consumers) that go
              far beyond what a standard privacy policy covers. You need to
              document processing instructions, security measures, sub-processor
              lists, and data breach notification procedures.
            </p>
            <p className="mb-4">
              The consequences of getting this wrong are significant. Stripe,
              Twilio, and Plaid have all faced regulatory scrutiny over their
              API data handling practices. The FTC&apos;s enforcement against
              data brokers increasingly extends to API-based data services.
              GDPR fines of up to &euro;20 million or 4% of global revenue
              apply equally to API providers as to consumer-facing applications.
            </p>
            <p>
              If third-party developers integrate your API into their products,
              your data practices directly affect their compliance posture.
              Developers evaluate API providers not just on performance and
              documentation quality, but on legal readiness. A clear, thorough
              privacy policy is a competitive advantage in the API economy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              What Your API Privacy Policy Must Cover
            </h2>
            <p className="mb-4">
              API privacy policies must address data flows that are unique to
              programmatic interfaces. Here are the critical sections every API
              provider needs:
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">
              1. Data Collection via API Endpoints
            </h3>
            <p className="mb-4">
              Document every category of data your API receives. This includes
              request body payloads (which may contain personal data your
              consumers pass through), authentication credentials (API keys,
              OAuth tokens, JWTs), request metadata (IP addresses, User-Agent
              strings, timestamps), query parameters and path variables, and
              file uploads or binary data sent via multipart requests. Be
              specific about which endpoints collect which types of data.
              Developers need to know exactly what happens when they call
              <code className="bg-gray-800 px-1.5 py-0.5 rounded text-sm text-blue-300 mx-1">POST /v1/users</code>
              versus
              <code className="bg-gray-800 px-1.5 py-0.5 rounded text-sm text-blue-300 mx-1">GET /v1/analytics</code>.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">
              2. Authentication &amp; API Key Data
            </h3>
            <p className="mb-4">
              API authentication creates a direct identity link. Your policy
              must explain how API keys are stored and whether they are hashed
              or encrypted at rest, what data is associated with each API key
              (account email, billing info, usage history), how OAuth tokens
              are handled including scope, expiry, and refresh token lifecycle,
              whether authentication logs are retained and for how long, and
              what happens to data when an API key is revoked or an account is
              closed. Developers need to understand the identity chain from API
              key to person to comply with their own privacy obligations.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">
              3. Rate Limiting &amp; Usage Logging
            </h3>
            <p className="mb-4">
              Rate limiting is a standard API practice, but it generates
              privacy-relevant data. Every rate limit check logs a request
              against an identity. Your policy should disclose what usage
              metrics are tracked per API key (request counts, bandwidth,
              error rates), how long usage logs are retained, whether usage
              data is used for purposes beyond rate limiting (analytics,
              billing, abuse detection), and whether aggregated or anonymized
              usage data is shared with third parties.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">
              4. Webhook &amp; Callback Data
            </h3>
            <p className="mb-4">
              Webhooks invert the data flow &mdash; your API sends data to
              URLs controlled by your consumers. This creates distinct privacy
              considerations. Your policy should cover what personal data is
              included in webhook payloads, how webhook endpoint URLs are
              stored and secured, what retry logic applies to failed webhook
              deliveries (and whether payload data is queued), whether webhook
              delivery logs (including response codes from consumer servers)
              are retained, and how webhook signing secrets are managed.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">
              5. Third-Party Data Processors &amp; Sub-processors
            </h3>
            <p className="mb-4">
              APIs rarely operate in isolation. Your infrastructure likely
              involves cloud providers (AWS, GCP, Azure) that host API
              servers, CDN providers that may cache API responses, logging
              services (Datadog, Splunk, CloudWatch) that ingest request data,
              payment processors for API billing, and email services for
              developer notifications. Under GDPR Article 28, you must
              maintain a list of sub-processors and notify API consumers
              before adding new ones. Many enterprise API consumers require
              this contractually as well.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">
              6. Data Retention &amp; Deletion
            </h3>
            <p>
              API data retention is more nuanced than web application retention.
              You need to specify retention periods for request/response logs,
              how long processed data is stored versus transient data that is
              discarded after processing, whether data persists in backups after
              deletion from primary storage, the procedure for data deletion
              requests (including whether deletion propagates to sub-processors),
              and retention of API keys and associated metadata after account
              closure. Developers integrating your API will map your retention
              periods to their own data processing records, so precision
              matters.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              GDPR Article 28: The Data Processor Agreement
            </h2>
            <p className="mb-4">
              If your API processes personal data on behalf of other companies
              (which most APIs do), GDPR Article 28 requires a Data Processing
              Agreement (DPA) between you (the processor) and your API
              consumers (the controllers). Your privacy policy should reference
              or incorporate key DPA elements:
            </p>
            <div className="bg-gray-900/50 rounded-xl p-6 mb-6">
              <div className="space-y-4 text-sm">
                <div className="flex gap-4">
                  <span className="text-blue-400 font-semibold w-44 flex-shrink-0">Processing Instructions</span>
                  <span>Document that you process data only on the controller&apos;s instructions, not for your own purposes (unless separately disclosed).</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-blue-400 font-semibold w-44 flex-shrink-0">Security Measures</span>
                  <span>Describe technical and organizational measures: encryption in transit (TLS 1.2+), encryption at rest, access controls, incident response.</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-blue-400 font-semibold w-44 flex-shrink-0">Sub-processor List</span>
                  <span>Maintain a public list of sub-processors with notification mechanism for changes. Many API providers host this at a <code className="bg-gray-800 px-1 rounded text-blue-300">/legal/sub-processors</code> URL.</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-blue-400 font-semibold w-44 flex-shrink-0">Breach Notification</span>
                  <span>Commit to notifying API consumers within 72 hours of discovering a data breach, per GDPR Article 33.</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-blue-400 font-semibold w-44 flex-shrink-0">Data Return/Deletion</span>
                  <span>Explain what happens to processed data when an API consumer terminates their account or ends the processing relationship.</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-blue-400 font-semibold w-44 flex-shrink-0">Audit Rights</span>
                  <span>Address whether API consumers have the right to audit your data processing practices (standard in enterprise DPAs).</span>
                </div>
              </div>
            </div>
            <p>
              Many API providers publish a standalone DPA alongside their
              privacy policy. If your API serves European customers, a DPA is
              not optional &mdash; it is a legal requirement. PolicyForge can
              help you generate both documents in a consistent format.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              REST vs GraphQL Privacy Considerations
            </h2>
            <p className="mb-4">
              The architecture of your API affects what data is exposed and how
              it needs to be documented in your privacy policy.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-800/50 rounded-lg p-5">
                <h4 className="font-semibold text-white mb-3">REST APIs</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>&bull; Each endpoint has a defined data contract &mdash; document per-endpoint data collection</li>
                  <li>&bull; URL path parameters may contain PII (e.g., <code className="bg-gray-800 px-1 rounded text-blue-300">/users/email@example.com</code>)</li>
                  <li>&bull; Server logs capture full URLs including query strings with potential personal data</li>
                  <li>&bull; Versioned endpoints (v1, v2) may have different data handling &mdash; document each version</li>
                  <li>&bull; HATEOAS links in responses may expose internal resource identifiers</li>
                </ul>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-5">
                <h4 className="font-semibold text-white mb-3">GraphQL APIs</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>&bull; Single endpoint means data collection cannot be mapped per-URL &mdash; must document per-query/mutation</li>
                  <li>&bull; Introspection queries can expose your entire data schema if not disabled in production</li>
                  <li>&bull; Query depth and complexity limits create usage data &mdash; disclose logging practices</li>
                  <li>&bull; Batched queries may combine personal and non-personal data in a single request</li>
                  <li>&bull; Subscriptions (WebSocket) create persistent connections with ongoing data exchange</li>
                </ul>
              </div>
            </div>
            <p className="mt-4">
              Regardless of architecture, document whether API responses are
              cached (at CDN, gateway, or application level) and how long
              cached responses containing personal data persist. API gateway
              logs from services like Kong, Apigee, or AWS API Gateway often
              capture full request/response bodies &mdash; your policy must
              account for this.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Documenting API Data Handling in Code
            </h2>
            <p className="mb-4">
              Developer-focused privacy policies benefit from concrete examples.
              Consider including documentation patterns like these in your API
              docs alongside your privacy policy:
            </p>
            <div className="bg-gray-900/80 rounded-xl p-5 mb-4 font-mono text-sm overflow-x-auto">
              <div className="text-gray-500 mb-2">// Example: Documenting data collection per endpoint</div>
              <div className="text-gray-300">
                <span className="text-blue-400">/**</span><br />
                <span className="text-blue-400">&nbsp;* POST /v1/users</span><br />
                <span className="text-blue-400">&nbsp;*</span><br />
                <span className="text-blue-400">&nbsp;* Data collected:</span><br />
                <span className="text-blue-400">&nbsp;*&nbsp;&nbsp;- email (PII, stored, encrypted at rest)</span><br />
                <span className="text-blue-400">&nbsp;*&nbsp;&nbsp;- name (PII, stored, encrypted at rest)</span><br />
                <span className="text-blue-400">&nbsp;*&nbsp;&nbsp;- ip_address (logged, retained 90 days)</span><br />
                <span className="text-blue-400">&nbsp;*&nbsp;&nbsp;- api_key (hashed, linked to account)</span><br />
                <span className="text-blue-400">&nbsp;*</span><br />
                <span className="text-blue-400">&nbsp;* Retention: User data until deletion request.</span><br />
                <span className="text-blue-400">&nbsp;* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Request logs retained 90 days.</span><br />
                <span className="text-blue-400">&nbsp;* Legal basis: Contract (Art. 6(1)(b) GDPR)</span><br />
                <span className="text-blue-400">&nbsp;*/</span>
              </div>
            </div>
            <div className="bg-gray-900/80 rounded-xl p-5 mb-4 font-mono text-sm overflow-x-auto">
              <div className="text-gray-500 mb-2">// Example: Privacy-aware API response headers</div>
              <div className="text-gray-300">
                <span className="text-green-400">HTTP/1.1 200 OK</span><br />
                <span className="text-yellow-400">X-Data-Processing</span>: contract<br />
                <span className="text-yellow-400">X-Data-Retention</span>: 90d<br />
                <span className="text-yellow-400">X-Sub-Processors</span>: aws, datadog, stripe<br />
                <span className="text-yellow-400">X-Privacy-Policy</span>: https://api.example.com/privacy<br />
                <span className="text-yellow-400">Cache-Control</span>: private, no-store
              </div>
            </div>
            <p>
              These patterns make your privacy practices machine-readable and
              auditable. Enterprise API consumers increasingly expect this
              level of transparency. Including examples like these in your
              privacy policy demonstrates technical competence and builds
              trust with developer audiences.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              API Privacy Policy Checklist
            </h2>
            <div className="bg-gray-900/50 rounded-xl p-6">
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                {[
                  "Document data collected per API endpoint",
                  "Describe API key storage and hashing",
                  "Explain OAuth token lifecycle and scope",
                  "Disclose server-side request/response logging",
                  "Specify rate limiting data retention",
                  "Document webhook payload contents",
                  "List all sub-processors (hosting, CDN, logging)",
                  "Include GDPR Article 28 DPA provisions",
                  "Address cross-border data transfers",
                  "Define data retention per data category",
                  "Explain data deletion procedures for API consumers",
                  "Document breach notification timeline (72 hours)",
                  "Address API response caching and PII",
                  "Disclose sandbox vs production data handling",
                  "Include API versioning and deprecation data impact",
                  "Provide contact for data protection inquiries",
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
              Types of APIs That Need Privacy Policies
            </h2>
            <p className="mb-4">
              Every API that touches user data needs a privacy policy, but
              the specific requirements vary by category:
            </p>
            <div className="space-y-4">
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-1">Payment &amp; Fintech APIs</h4>
                <p className="text-sm text-gray-400">Stripe, Square, Plaid integrations. Must address PCI-DSS compliance, financial data handling, transaction logging, and bank account/card data storage policies.</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-1">Communication APIs</h4>
                <p className="text-sm text-gray-400">Twilio, SendGrid, Vonage. Must address message content logging, phone number storage, call recording retention, and telecoms-specific regulations.</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-1">Authentication &amp; Identity APIs</h4>
                <p className="text-sm text-gray-400">Auth0, Okta, Firebase Auth. Must address credential storage, session management, biometric data (if applicable), and cross-service identity linking.</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-1">Data &amp; Analytics APIs</h4>
                <p className="text-sm text-gray-400">Segment, Mixpanel, Clearbit. Must address data enrichment practices, profiling, cross-device tracking, and data broker regulations.</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-1"><Link href="/privacy-policy-for-ai-tool" className="text-blue-400 hover:underline">AI &amp; Machine Learning APIs</Link></h4>
                <p className="text-sm text-gray-400">OpenAI, Anthropic, Google AI. Must address training data usage, model input/output retention, automated decision-making disclosure, and the EU AI Act.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Common API Privacy Policy Mistakes
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-white">Only covering the dashboard, not the API itself</h4>
                <p className="text-sm text-gray-400">Many developer platforms write privacy policies for their web dashboard but fail to address data flows through API endpoints. The API is the product &mdash; document it.</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-white">No distinction between developer data and end-user data</h4>
                <p className="text-sm text-gray-400">Your API consumers are developers, but their end-users&apos; data flows through your API. Your policy must distinguish between these two data subjects and their respective rights.</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-white">Missing sub-processor disclosures</h4>
                <p className="text-sm text-gray-400">If your API runs on AWS and logs to Datadog, those are sub-processors. GDPR Article 28 requires you to list them and notify consumers before changes. Most API providers skip this.</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-white">Ignoring sandbox environments</h4>
                <p className="text-sm text-gray-400">Sandbox and testing environments often receive real personal data from developers testing integrations. Your policy should clarify data handling in non-production environments.</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-white">No data minimization commitment</h4>
                <p className="text-sm text-gray-400">GDPR Article 5(1)(c) requires data minimization. Your API should only collect data necessary for the service. Document which fields are required versus optional and why.</p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-800/30 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-4 text-center">
              Generate Your API Privacy Policy Now
            </h2>
            <p className="text-gray-300 text-center mb-6">
              PolicyForge generates customized privacy policies for API
              providers and developer platforms. Covers data processor
              agreements, endpoint-level data collection, webhook handling,
              and full GDPR/CCPA compliance. Done in under 2 minutes.
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
                  Do I need a separate privacy policy for my API?
                </h3>
                <p>
                  Not necessarily separate, but your privacy policy must
                  explicitly address API-specific data flows including
                  endpoint-level data collection, API key handling,
                  request/response logging, and webhook data. If your existing
                  privacy policy only covers your website or app, it is
                  insufficient for your API product. Many companies like
                  Stripe and Twilio maintain a dedicated API privacy section
                  or data processing addendum alongside their main policy.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Is my API a data controller or data processor under GDPR?
                </h3>
                <p>
                  In most cases, your API acts as a data processor &mdash; you
                  process personal data on behalf of your API consumers (the
                  controllers). However, if your API collects data for your
                  own purposes (analytics, model training, product improvement),
                  you may be a joint controller for that processing. Your
                  privacy policy must clearly state your role and ensure you
                  have appropriate agreements (DPAs) in place with your API
                  consumers under GDPR Article 28.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  What about API keys &mdash; are they personal data?
                </h3>
                <p>
                  API keys themselves may not be personal data, but they are
                  linked to accounts that contain personal data (name, email,
                  billing information). This makes API keys pseudonymous
                  identifiers under GDPR. Your policy should explain how API
                  keys are generated, stored (ideally hashed), and what
                  account data they are associated with. When an API key is
                  used to authenticate a request, the resulting logs contain
                  a pseudonymous identifier that can be linked back to a
                  person.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  How do I handle data deletion requests from API consumers?
                </h3>
                <p>
                  Under GDPR Article 17, data subjects have the right to
                  erasure. For API providers, this means you must be able to
                  delete all data associated with an API consumer&apos;s
                  account, including request logs, stored payloads, and
                  webhook delivery records. You should also provide an API
                  endpoint (e.g.,
                  <code className="bg-gray-800 px-1.5 py-0.5 rounded text-sm text-blue-300 mx-1">DELETE /v1/data-subject/{"{id}"}</code>)
                  for programmatic deletion requests. Document the timeline
                  for deletion completion and whether data persists in
                  backups.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Do I need a{" "}
                  <Link href="/tos" className="text-blue-400 hover:underline">
                    terms of service
                  </Link>
                  {" "}in addition to a privacy policy?
                </h3>
                <p>
                  Yes. API terms of service and privacy policies serve
                  different purposes. Your{" "}
                  <Link href="/tos" className="text-blue-400 hover:underline">
                    terms of service
                  </Link>
                  {" "}govern the contractual relationship (usage limits,
                  intellectual property, liability), while the privacy policy
                  addresses data protection obligations. Most developer
                  platforms also need a Data Processing Agreement (DPA) and
                  an Acceptable Use Policy. PolicyForge can generate all of
                  these documents for your API.
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-500">
          <p>
            PolicyForge helps API developers create compliant privacy policies.
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
            {" | "}
            <Link href="/privacy-policy-for-saas" className="text-blue-400 hover:underline">
              SaaS privacy policy
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
