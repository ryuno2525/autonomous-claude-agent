import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Terms of Service Generator | Website ToS Template - PolicyForge",
  description:
    "Generate free terms of service for your website, app, or SaaS. Covers liability limits, user accounts, payments, refunds, and intellectual property. Customizable template.",
  keywords:
    "terms of service generator, free terms of service, terms and conditions generator, website terms of service, ToS generator, terms of use generator, SaaS terms of service, app terms of service",
};

export default function TermsOfServiceGenerator() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#ededed]">
      <header className="border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
              P
            </div>
            <span className="text-white font-semibold text-lg">PolicyForge</span>
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Free Terms of Service Generator
        </h1>

        <div className="space-y-5 text-gray-300 leading-relaxed text-lg">
          <p>
            Every website, mobile app, and SaaS product needs terms of service.
            A terms of service agreement (also called terms and conditions or
            terms of use) is the legal contract between you and the people who
            use your product. It defines what users can and cannot do, what you
            are and are not responsible for, and what happens when things go
            wrong. Without one, you are exposed to lawsuits, chargebacks,
            intellectual property theft, and regulatory fines with almost no
            legal recourse.
          </p>

          <p>
            PolicyForge lets you{" "}
            <Link href="/tos" className="text-blue-400 hover:text-blue-300 underline">
              generate a complete terms of service document
            </Link>{" "}
            in minutes. Answer a few questions about your business type, payment
            model, and user interactions, and receive a professionally
            structured, legally comprehensive ToS tailored to your product. No
            lawyer fees. No copy-pasting generic templates that miss critical
            clauses.
          </p>

          {/* --- Section: Why You Need Terms of Service --- */}
          <h2 className="text-2xl font-bold text-white pt-6">
            Why You Need Terms of Service
          </h2>
          <p>
            Terms of service are not just boilerplate. They are the single most
            important legal document protecting your online business. Here is
            what a proper ToS agreement does for you:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-400">
            <li>
              <strong className="text-gray-200">Limits your liability.</strong>{" "}
              If your service goes down, if a user loses data, or if a
              third-party integration fails, a well-written liability limitation
              clause caps the amount a user can claim from you &mdash; often to
              the amount they paid in the last 12 months.
            </li>
            <li>
              <strong className="text-gray-200">Protects your intellectual property.</strong>{" "}
              Your code, branding, content, and designs are your assets. A ToS
              makes clear that users receive a limited license to use your
              product, not ownership of any part of it.
            </li>
            <li>
              <strong className="text-gray-200">Defines acceptable behavior.</strong>{" "}
              Without an acceptable use policy, you have no grounds to ban users
              who abuse your platform, scrape your data, or harass other users.
            </li>
            <li>
              <strong className="text-gray-200">Enables account termination.</strong>{" "}
              You need the contractual right to suspend or terminate accounts.
              Without it, removing a bad actor can expose you to breach of
              contract claims.
            </li>
            <li>
              <strong className="text-gray-200">Satisfies platform requirements.</strong>{" "}
              Apple&apos;s App Store, Google Play, Stripe, PayPal, and
              virtually every payment processor and app marketplace require you
              to have published terms of service before you can list or accept
              payments.
            </li>
            <li>
              <strong className="text-gray-200">Reduces chargeback disputes.</strong>{" "}
              Clear refund and payment terms give you evidence to dispute
              chargebacks with payment processors. Without documented terms, you
              almost always lose the dispute.
            </li>
          </ul>

          {/* --- Section: Key Clauses --- */}
          <h2 className="text-2xl font-bold text-white pt-6">
            Key Clauses Every Terms of Service Should Include
          </h2>
          <p>
            A terms of service document is only as strong as the clauses it
            contains. Here are the essential sections every ToS needs, whether
            you run a blog, an ecommerce store, a SaaS platform, or a mobile
            app.
          </p>

          <h3 className="text-xl font-semibold text-white pt-3">
            1. Acceptance of Terms
          </h3>
          <p className="text-gray-400">
            This clause establishes that by using your service, visitors agree
            to be bound by your terms. It should specify that continued use
            constitutes acceptance, define who is eligible to use the service
            (e.g., minimum age requirements), and state that users who do not
            agree must stop using the product immediately. For SaaS products,
            this is often reinforced through a clickwrap agreement during
            signup.
          </p>

          <h3 className="text-xl font-semibold text-white pt-3">
            2. Limitation of Liability
          </h3>
          <p className="text-gray-400">
            The limitation of liability clause is arguably the most important
            section of your entire ToS. It caps the maximum damages a user can
            recover from you, typically to the amount the user paid in the
            preceding 12 months. It disclaims liability for indirect,
            incidental, consequential, and punitive damages. Without this
            clause, a single user dispute could theoretically result in
            unlimited financial exposure for your business.
          </p>

          <h3 className="text-xl font-semibold text-white pt-3">
            3. Acceptable Use Policy
          </h3>
          <p className="text-gray-400">
            An acceptable use policy (AUP) defines what users may and may not
            do on your platform. Common prohibitions include: reverse
            engineering your software, scraping or automated data collection,
            uploading malicious code, impersonating others, distributing spam,
            and using the service for illegal activity. This clause gives you
            the contractual basis to ban users and remove content that violates
            your rules.
          </p>

          <h3 className="text-xl font-semibold text-white pt-3">
            4. Termination and Suspension
          </h3>
          <p className="text-gray-400">
            This section gives you the right to suspend or terminate user
            accounts for violations of your terms, at your discretion, with or
            without notice. It should also address what happens to user data
            after termination &mdash; whether you delete it immediately, retain
            it for a grace period, or allow data export. For subscription
            services, define how termination affects billing and whether partial
            refunds are available.
          </p>

          <h3 className="text-xl font-semibold text-white pt-3">
            5. Intellectual Property Rights
          </h3>
          <p className="text-gray-400">
            Your ToS must address two sides of intellectual property: what you
            own and what users own. You retain all rights to your software,
            trademarks, designs, and content. Users retain ownership of any
            content they upload but grant you a license to host, display, and
            process that content as needed to provide the service. For
            user-generated content platforms, this license is critical &mdash;
            without it, you technically cannot display the content users upload.
          </p>

          <h3 className="text-xl font-semibold text-white pt-3">
            6. Dispute Resolution and Governing Law
          </h3>
          <p className="text-gray-400">
            Dispute resolution clauses determine how conflicts are handled.
            Many businesses include a mandatory arbitration clause that requires
            disputes to be resolved through binding arbitration rather than
            court litigation, along with a class action waiver preventing users
            from joining together in a lawsuit. The governing law clause
            specifies which jurisdiction&apos;s laws apply, which is
            particularly important for international SaaS companies serving
            users across multiple countries.
          </p>

          <h3 className="text-xl font-semibold text-white pt-3">
            7. Payment Terms and Refund Policy
          </h3>
          <p className="text-gray-400">
            For any paid product, your ToS should define billing cycles, auto-renewal terms, how price changes are communicated, and your refund policy. Be specific: state whether refunds are prorated, whether there is a money-back guarantee period, and what happens if a payment fails. Clear payment terms are your primary defense against chargeback disputes.
          </p>

          {/* --- Checklist --- */}
          <h2 className="text-2xl font-bold text-white pt-6">
            Essential Terms of Service Clauses Checklist
          </h2>
          <p>
            Use this checklist to audit your existing terms of service or
            ensure your new ToS covers all critical areas. PolicyForge&apos;s{" "}
            <Link href="/tos" className="text-blue-400 hover:text-blue-300 underline">
              ToS generator
            </Link>{" "}
            includes all of these automatically.
          </p>
          <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 mt-3">
            <ul className="space-y-3 text-gray-400">
              {[
                "Acceptance of terms and eligibility requirements (age, jurisdiction)",
                "Description of the service and what is included",
                "User account responsibilities (password security, accurate information)",
                "Acceptable use policy with specific prohibited activities",
                "Intellectual property ownership and user content licenses",
                "Payment terms, billing cycles, and auto-renewal disclosures",
                "Refund and cancellation policy",
                "Limitation of liability and warranty disclaimers",
                "Indemnification clause (user agrees to cover your legal costs if they cause a claim)",
                "Termination rights and data handling after account closure",
                "Dispute resolution mechanism (arbitration vs. litigation)",
                "Governing law and jurisdiction",
                "Modification of terms and how users will be notified",
                "Severability clause (if one clause is invalid, the rest survive)",
                "Contact information for legal notices",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1 flex-shrink-0">&#9744;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* --- Section: ToS vs Privacy Policy --- */}
          <h2 className="text-2xl font-bold text-white pt-6">
            Terms of Service vs. Privacy Policy: What Is the Difference?
          </h2>
          <p>
            These two documents serve fundamentally different purposes, and you
            need both. A terms of service is a contract between you and your
            users that governs how the product may be used. A privacy policy is
            a legal disclosure required by data protection laws (GDPR, CCPA,
            PIPEDA) that explains what personal data you collect, how you use
            it, and what rights users have over that data.
          </p>
          <div className="overflow-x-auto mt-3">
            <table className="w-full text-sm text-gray-400 border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-left">
                  <th className="py-3 pr-4 text-gray-200 font-semibold">Aspect</th>
                  <th className="py-3 pr-4 text-gray-200 font-semibold">Terms of Service</th>
                  <th className="py-3 text-gray-200 font-semibold">Privacy Policy</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr>
                  <td className="py-3 pr-4 text-gray-300">Purpose</td>
                  <td className="py-3 pr-4">Defines rules of use and limits liability</td>
                  <td className="py-3">Discloses data collection and processing practices</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-300">Legally required?</td>
                  <td className="py-3 pr-4">Not always, but practically essential</td>
                  <td className="py-3">Yes, in most jurisdictions (GDPR, CCPA, etc.)</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-300">Protects</td>
                  <td className="py-3 pr-4">The business owner</td>
                  <td className="py-3">The user&apos;s personal data</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-300">Covers</td>
                  <td className="py-3 pr-4">Liability, IP, acceptable use, payments, disputes</td>
                  <td className="py-3">Data types, storage, sharing, user rights, cookies</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-300">Enforcement</td>
                  <td className="py-3 pr-4">Contract law</td>
                  <td className="py-3">Data protection regulations</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-400 mt-3">
            Most businesses need both documents. PolicyForge generates both &mdash;{" "}
            <Link href="/" className="text-blue-400 hover:text-blue-300 underline">
              create your privacy policy here
            </Link>{" "}
            and{" "}
            <Link href="/tos" className="text-blue-400 hover:text-blue-300 underline">
              generate your terms of service here
            </Link>.
            You can also use our{" "}
            <Link href="/check" className="text-blue-400 hover:text-blue-300 underline">
              compliance checker
            </Link>{" "}
            to audit an existing website&apos;s legal policies.
          </p>

          {/* --- Section: Common Mistakes --- */}
          <h2 className="text-2xl font-bold text-white pt-6">
            Common Terms of Service Mistakes to Avoid
          </h2>
          <p>
            A poorly written ToS can be worse than having none at all because
            it gives you a false sense of security. Here are the most common
            mistakes businesses make:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-400">
            <li>
              <strong className="text-gray-200">Copying another company&apos;s ToS word-for-word.</strong>{" "}
              Their terms were written for their business model, jurisdiction,
              and risk profile. A SaaS ToS applied to a marketplace will have
              gaping holes around seller liability, dispute mediation, and
              payment splitting.
            </li>
            <li>
              <strong className="text-gray-200">Using overly broad or vague language.</strong>{" "}
              Courts routinely strike down clauses that are unconscionably
              one-sided or too vague to enforce. &quot;We can do anything we
              want at any time&quot; will not hold up. Specific, reasonable
              terms are far more enforceable than sweeping ones.
            </li>
            <li>
              <strong className="text-gray-200">Forgetting to include a limitation of liability.</strong>{" "}
              This is the most expensive omission. Without a liability cap, a
              single incident could expose your business to claims far
              exceeding your total revenue.
            </li>
            <li>
              <strong className="text-gray-200">No process for notifying users of changes.</strong>{" "}
              If you update your terms without a clear notification mechanism
              (email notice, in-app banner, 30-day advance notice), courts may
              find that users never agreed to the updated terms.
            </li>
            <li>
              <strong className="text-gray-200">Missing refund and cancellation terms.</strong>{" "}
              Vague or absent refund policies are the number one cause of
              chargeback losses. Payment processors side with the customer when
              refund terms are unclear.
            </li>
            <li>
              <strong className="text-gray-200">Not addressing user-generated content.</strong>{" "}
              If users can post, upload, or create anything on your platform,
              you need a content license clause. Without it, you may not have
              the legal right to display, moderate, or remove their content.
            </li>
          </ul>

          {/* --- Section: How to Enforce --- */}
          <h2 className="text-2xl font-bold text-white pt-6">
            How to Make Your Terms of Service Legally Enforceable
          </h2>
          <p>
            Writing terms of service is only half the battle. You also need to
            make sure they are legally enforceable. Courts evaluate several
            factors when determining whether a user actually agreed to your
            terms:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-400">
            <li>
              <strong className="text-gray-200">Use clickwrap, not browsewrap.</strong>{" "}
              A clickwrap agreement requires users to actively check a box or
              click &quot;I agree&quot; before using your service. Browsewrap
              (a passive link at the bottom of the page) is much harder to
              enforce because you cannot prove the user saw or agreed to the
              terms.
            </li>
            <li>
              <strong className="text-gray-200">Keep terms accessible.</strong>{" "}
              Your ToS should always be one click away from any page on your
              site. Link to it in your footer, during signup, and at checkout.
              If users cannot easily find or read your terms, a court may rule
              they were not reasonably presented.
            </li>
            <li>
              <strong className="text-gray-200">Version and date your terms.</strong>{" "}
              Maintain a clear &quot;Last Updated&quot; date at the top and
              keep an archive of previous versions. If a dispute arises, you
              need to prove which version was in effect at the relevant time.
            </li>
            <li>
              <strong className="text-gray-200">Notify users of material changes.</strong>{" "}
              Send email notifications or display an in-app banner when you
              make significant changes. Give users a reasonable period (14 to
              30 days) to review the updates before they take effect. State
              that continued use after the notice period constitutes acceptance
              of the new terms.
            </li>
            <li>
              <strong className="text-gray-200">Keep clauses reasonable.</strong>{" "}
              Courts have the power to void unconscionable terms. A clause that
              says users waive all rights to any legal recourse under any
              circumstances is likely to be struck down. Reasonable, specific
              limitations are far more likely to be upheld.
            </li>
          </ul>

          {/* --- Section: When to Update --- */}
          <h2 className="text-2xl font-bold text-white pt-6">
            When Should You Update Your Terms of Service?
          </h2>
          <p>
            Your terms of service are not a set-and-forget document. You should
            review and update them whenever your business changes in a way that
            affects the user relationship. Specific triggers include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-400">
            <li>
              You launch a new feature that changes how users interact with
              your product (e.g., adding user-generated content, a marketplace,
              or an API).
            </li>
            <li>
              You change your pricing model, billing cycle, or refund policy.
            </li>
            <li>
              You expand to new jurisdictions or begin serving users in regions
              with different legal requirements (EU, California, Brazil,
              Canada).
            </li>
            <li>
              New regulations take effect that impact your industry (e.g., the
              Digital Services Act in the EU, updated FTC guidelines in the
              US).
            </li>
            <li>
              You add third-party integrations or data processors that affect
              how user data is handled.
            </li>
            <li>
              You experience a legal dispute that reveals a gap in your current
              terms.
            </li>
            <li>
              At a minimum, review your ToS annually even if nothing has
              changed, to ensure it still reflects your current operations.
            </li>
          </ul>
          <p className="text-gray-400 mt-3">
            When you do update, use PolicyForge&apos;s{" "}
            <Link href="/tos" className="text-blue-400 hover:text-blue-300 underline">
              terms of service generator
            </Link>{" "}
            to produce an updated document quickly, then have it reviewed by
            legal counsel for your specific jurisdiction.
          </p>
        </div>

        {/* --- CTA --- */}
        <div className="mt-10 space-y-4">
          <Link
            href="/tos"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg text-lg hover:opacity-90 transition-opacity"
          >
            Generate Your Terms of Service Free
          </Link>
          <p className="text-sm text-gray-500">
            Free tier available. Pro terms include SaaS SLA, marketplace
            liability, and international jurisdiction clauses for $12.99.
          </p>
        </div>

        {/* --- FAQ --- */}
        <div className="mt-14">
          <h2 className="text-2xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Are terms of service legally required?",
                a: "In most jurisdictions, terms of service are not legally mandated the way privacy policies are under GDPR or CCPA. However, they are practically essential. Payment processors (Stripe, PayPal), app stores (Apple, Google), and marketplace platforms all require them. More importantly, without a ToS you have no contractual basis to limit liability, terminate abusive accounts, or resolve disputes on your terms.",
              },
              {
                q: "What is the difference between terms of service and terms and conditions?",
                a: "There is no meaningful legal difference. \"Terms of service,\" \"terms and conditions,\" and \"terms of use\" all refer to the same type of agreement. The naming is a matter of preference. \"Terms of service\" is more common for SaaS and digital products, while \"terms and conditions\" is more common for ecommerce and physical goods. PolicyForge generates the same comprehensive document regardless of what you call it.",
              },
              {
                q: "Can I write my own terms of service without a lawyer?",
                a: "You can, and tools like PolicyForge make it much easier by providing legally structured templates tailored to your business type. However, for businesses handling significant revenue, sensitive data, or operating across multiple jurisdictions, we recommend having an attorney review the generated document. PolicyForge gives you a strong starting point that covers all critical clauses, which significantly reduces the time and cost of legal review.",
              },
              {
                q: "How do I get users to agree to my terms of service?",
                a: "The most enforceable method is a clickwrap agreement: require users to actively check a box next to a statement like \"I agree to the Terms of Service\" (with a hyperlink to the document) during account creation or before making a purchase. Avoid relying solely on browsewrap (a passive footer link), as courts have frequently found that insufficient to constitute agreement.",
              },
              {
                q: "Do I need separate terms of service for my website and my mobile app?",
                a: "Not necessarily. A well-written ToS can cover both your website and mobile app as long as it addresses platform-specific considerations like in-app purchases, push notifications, and app store requirements. PolicyForge generates unified terms that work across web and mobile. If your app has substantially different functionality from your website, you may want to add app-specific sections or maintain separate documents.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="p-5 bg-white/[0.03] border border-white/10 rounded-xl"
              >
                <h3 className="text-lg font-semibold text-white mb-2">
                  {faq.q}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* --- Cross-links --- */}
        <div className="mt-14 grid sm:grid-cols-2 gap-4">
          <div className="p-6 bg-white/[0.03] border border-white/10 rounded-xl">
            <h3 className="text-lg font-bold text-white mb-2">
              Need a privacy policy too?
            </h3>
            <p className="text-gray-400 text-sm mb-3">
              Most businesses need both terms of service and a privacy policy.
              Generate a GDPR and CCPA compliant privacy policy in minutes.
            </p>
            <Link
              href="/"
              className="text-blue-400 hover:text-blue-300 text-sm font-medium"
            >
              Generate Privacy Policy &rarr;
            </Link>
          </div>
          <div className="p-6 bg-white/[0.03] border border-white/10 rounded-xl">
            <h3 className="text-lg font-bold text-white mb-2">
              Check your website&apos;s compliance
            </h3>
            <p className="text-gray-400 text-sm mb-3">
              Scan any URL to see if its privacy policy and terms of service
              meet current legal requirements. Free instant report.
            </p>
            <Link
              href="/check"
              className="text-blue-400 hover:text-blue-300 text-sm font-medium"
            >
              Run Compliance Check &rarr;
            </Link>
          </div>
        </div>
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
          Disclaimer: This generator provides template terms of service for
          informational purposes. Consult a qualified attorney for
          jurisdiction-specific legal advice.
        </p>
      </footer>
    </div>
  );
}
