"use client";

import { useState } from "react";
import Link from "next/link";

type ComplianceStandard = "WCAG 2.1 AA" | "WCAG 2.2 AA" | "Section 508";

interface FormData {
  orgName: string;
  websiteUrl: string;
  standard: ComplianceStandard;
  contactEmail: string;
  contactPhone: string;
  lastAuditDate: string;
  knownLimitations: string;
}

function generateStatement(data: FormData): string {
  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const auditDateFormatted = data.lastAuditDate
    ? new Date(data.lastAuditDate + "T00:00:00").toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  const standardDescription: Record<ComplianceStandard, string> = {
    "WCAG 2.1 AA":
      "Web Content Accessibility Guidelines (WCAG) 2.1 at conformance Level AA",
    "WCAG 2.2 AA":
      "Web Content Accessibility Guidelines (WCAG) 2.2 at conformance Level AA",
    "Section 508":
      "Section 508 of the Rehabilitation Act, which incorporates WCAG 2.0 Level AA by reference",
  };

  const standardRef = standardDescription[data.standard];

  let statement = `Accessibility Statement for ${data.orgName}

Last updated: ${today}

Commitment to Accessibility

${data.orgName} is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards to ensure we provide equal access to all users.

Conformance Status

We aim to conform to the ${standardRef}. These guidelines explain how to make web content more accessible to people with a wide array of disabilities, including visual, auditory, physical, speech, cognitive, language, learning, and neurological disabilities.

Our goal is to meet or exceed these standards across ${data.websiteUrl}. We view accessibility as an ongoing effort and are continuously working to improve the accessibility of our digital properties.`;

  if (auditDateFormatted) {
    statement += `

Accessibility Audit

Our most recent accessibility review was conducted on ${auditDateFormatted}. During this review, we tested our website against the ${data.standard} success criteria using a combination of automated scanning tools and manual evaluation techniques.

We regularly conduct accessibility audits to identify and remediate any barriers that may prevent users with disabilities from accessing our content or functionality.`;
  }

  statement += `

Measures to Support Accessibility

${data.orgName} takes the following measures to ensure accessibility of ${data.websiteUrl}:

- Include accessibility as part of our internal policies and development practices.
- Integrate accessibility into our procurement and vendor requirements.
- Provide ongoing accessibility training and awareness for our staff.
- Assign clear accessibility goals and responsibilities within our organization.
- Employ formal accessibility quality assurance methods throughout development and content creation.
- Use automated accessibility testing tools to identify issues during the development process.
- Conduct periodic manual testing with assistive technologies including screen readers, keyboard navigation, and voice control software.`;

  if (data.knownLimitations && data.knownLimitations.trim()) {
    statement += `

Known Limitations

While we strive to ensure that ${data.websiteUrl} is fully accessible, we acknowledge the following known limitations:

${data.knownLimitations.trim()}

We are actively working to resolve these limitations. If you encounter any of these issues, please contact us using the information below and we will provide the information or functionality through an alternative means.`;
  }

  statement += `

Feedback and Contact Information

We welcome your feedback on the accessibility of ${data.websiteUrl}. If you encounter accessibility barriers or have suggestions for improvement, please contact us:

Email: ${data.contactEmail}${data.contactPhone ? `\nPhone: ${data.contactPhone}` : ""}

We aim to respond to accessibility feedback within 2 business days and to propose a solution within 10 business days. If you are not satisfied with our response, you may escalate your concern through the contact information provided above.

Compatibility with Browsers and Assistive Technology

${data.websiteUrl} is designed to be compatible with the following assistive technologies:

- Screen readers (including JAWS, NVDA, VoiceOver, and TalkBack)
- Screen magnification software
- Voice recognition software (including Dragon NaturallySpeaking)
- Keyboard-only navigation
- Switch access devices

The site is best experienced in the latest stable versions of Chrome, Firefox, Safari, and Edge.

Technical Specifications

Accessibility of ${data.websiteUrl} relies on the following technologies to work with the particular combination of web browser and any assistive technologies or plugins installed on your computer:

- HTML
- WAI-ARIA
- CSS
- JavaScript

These technologies are relied upon for conformance with the accessibility standards used.

Assessment Approach

${data.orgName} assesses the accessibility of ${data.websiteUrl} using the following approaches:

- Self-evaluation using automated accessibility scanning tools
- External evaluation when resources allow
- User testing with people who use assistive technologies

This statement was created on ${today}.`;

  return statement;
}

export default function AccessibilityStatementGeneratorPage() {
  const [formData, setFormData] = useState<FormData>({
    orgName: "",
    websiteUrl: "",
    standard: "WCAG 2.1 AA",
    contactEmail: "",
    contactPhone: "",
    lastAuditDate: "",
    knownLimitations: "",
  });

  const [generatedStatement, setGeneratedStatement] = useState<string>("");
  const [copied, setCopied] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  function validate(): boolean {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!formData.orgName.trim()) newErrors.orgName = "Organization name is required.";
    if (!formData.websiteUrl.trim()) newErrors.websiteUrl = "Website URL is required.";
    if (!formData.contactEmail.trim()) newErrors.contactEmail = "Contact email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.contactEmail))
      newErrors.contactEmail = "Please enter a valid email address.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleGenerate() {
    if (!validate()) return;
    const statement = generateStatement(formData);
    setGeneratedStatement(statement);
    setCopied(false);
  }

  function handleCopy() {
    navigator.clipboard.writeText(generatedStatement).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  }

  function updateField(field: keyof FormData, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is a website accessibility statement?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A website accessibility statement is a public declaration that describes your organization's commitment to digital accessibility, the standards you follow (such as WCAG 2.1 AA), the current conformance status of your website, known limitations, and how users can report accessibility issues. It serves as both a legal document and a communication tool.",
        },
      },
      {
        "@type": "Question",
        name: "Is an accessibility statement legally required?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In the European Union, an accessibility statement is legally required under the Web Accessibility Directive (WAD) and the European Accessibility Act (EAA). In the United States, while the ADA does not explicitly require a statement, having one demonstrates good faith effort toward compliance, which can be important in legal proceedings. Section 508 requires federal agencies to document accessibility conformance.",
        },
      },
      {
        "@type": "Question",
        name: "Where should I put my accessibility statement on my website?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Place a link to your accessibility statement in your website footer, so it is accessible from every page. Common link text includes 'Accessibility' or 'Accessibility Statement.' You should also consider linking to it from your legal pages and your contact page.",
        },
      },
      {
        "@type": "Question",
        name: "How often should I update my accessibility statement?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You should update your accessibility statement at least annually, and whenever you conduct a new accessibility audit, make significant changes to your website, resolve known limitations, or receive feedback that reveals new barriers. Keeping the statement current is essential for legal compliance.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use a generated accessibility statement as-is?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A generated accessibility statement provides a strong starting point, but you should review and customize it to accurately reflect your organization's specific accessibility efforts, testing methods, and current status. The statement should be truthful and specific to your website. Making false claims about conformance can create legal liability.",
        },
      },
    ],
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Free Accessibility Statement Generator",
    description:
      "Generate a free WCAG/ADA accessibility statement for your website in 60 seconds. Customizable template that meets legal requirements.",
    url: "https://accessscore.autonomous-claude.com/accessibility-statement-generator",
    applicationCategory: "UtilityApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Organization",
      name: "AccessScore",
      url: "https://accessscore.autonomous-claude.com",
    },
  };

  const inputClasses =
    "w-full bg-[#141414] border border-[#333] rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors";
  const labelClasses = "block text-sm font-medium text-gray-300 mb-2";
  const errorClasses = "text-red-400 text-sm mt-1";

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <h1 className="text-4xl font-bold text-white mb-6">
        Free Accessibility Statement Generator
      </h1>

      <p className="text-lg text-gray-300 leading-relaxed mb-8">
        Generate a professional, legally-sound accessibility statement for your website in
        under 60 seconds. No signup required. Just fill in your details, click generate, and
        copy the statement directly into your site.
      </p>

      {/* SEO Introduction Section */}
      <div className="prose prose-invert max-w-none mb-12">
        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          What Is a Website Accessibility Statement?
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          A website accessibility statement is a formal document published on your website that
          communicates your organization&apos;s commitment to digital accessibility. It describes the
          accessibility standards your website follows, the current conformance status, any known
          limitations, and how users with disabilities can contact you to report issues or request
          assistance.
        </p>
        <p className="text-gray-300 leading-relaxed mb-4">
          Think of it as a contract between your organization and your users. It tells visitors
          with disabilities that you take their experience seriously, that you are actively working
          to remove barriers, and that there is a clear pathway for them to get help when they
          encounter problems. An honest, well-written accessibility statement builds trust and
          demonstrates good faith, which matters both ethically and legally.
        </p>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          Why Your Website Needs an Accessibility Statement
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          There are three compelling reasons to publish an accessibility statement on your website:
          legal protection, regulatory compliance, and user trust.
        </p>
        <h3 className="text-xl font-semibold text-white mt-6 mb-3">Legal Protection</h3>
        <p className="text-gray-300 leading-relaxed mb-4">
          ADA website accessibility lawsuits exceeded 4,000 in 2024, a 37% increase from the
          previous year. When a business faces a demand letter or lawsuit, one of the first things
          attorneys examine is whether the organization demonstrated awareness of accessibility
          requirements. An accessibility statement, combined with evidence of ongoing remediation
          efforts, establishes a documented good faith effort. While a statement alone does not
          constitute a legal defense, courts have consistently considered demonstrated commitment
          to accessibility as a mitigating factor in settlement negotiations.
        </p>
        <h3 className="text-xl font-semibold text-white mt-6 mb-3">Regulatory Compliance</h3>
        <p className="text-gray-300 leading-relaxed mb-4">
          Under the European Union&apos;s Web Accessibility Directive, public sector organizations
          are required by law to publish an accessibility statement. The European Accessibility Act
          (EAA), which takes effect in June 2025, extends similar requirements to private sector
          businesses selling products and services in the EU. In the United States, Section 508 of
          the Rehabilitation Act requires federal agencies to publish accessibility conformance
          documentation. Even where a statement is not explicitly mandated, publishing one
          demonstrates compliance awareness that regulators view favorably.
        </p>
        <h3 className="text-xl font-semibold text-white mt-6 mb-3">User Trust and Experience</h3>
        <p className="text-gray-300 leading-relaxed mb-4">
          Over 1.3 billion people worldwide live with some form of disability. When these users
          visit your website and encounter barriers, an accessibility statement tells them you are
          aware of the issue and working to fix it. It provides a direct channel for them to report
          problems and request assistance. Without a statement, users have no way to know whether
          barriers are the result of negligence or simply an oversight that is being addressed. The
          statement transforms a frustrating experience into one where the user feels heard and
          supported.
        </p>

        <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 my-8">
          <p className="text-blue-300 font-medium">
            Before you write your accessibility statement, you need to know what issues exist on
            your site. Use the generator below, then{" "}
            <Link href="/" className="text-blue-400 underline hover:text-blue-300">
              scan your site with AccessScore
            </Link>{" "}
            to identify the specific WCAG violations you should address in your remediation plan.
          </p>
        </div>
      </div>

      {/* THE GENERATOR TOOL */}
      <div className="bg-[#1a1a1a] border border-[#262626] rounded-2xl p-8 mb-12">
        <h2 className="text-2xl font-bold text-white mb-2">
          Generate Your Accessibility Statement
        </h2>
        <p className="text-gray-400 mb-8">
          Fill in your details below. All fields marked with * are required.
        </p>

        <div className="space-y-6">
          {/* Organization Name */}
          <div>
            <label htmlFor="orgName" className={labelClasses}>
              Organization Name *
            </label>
            <input
              id="orgName"
              type="text"
              className={inputClasses}
              placeholder="Acme Corporation"
              value={formData.orgName}
              onChange={(e) => updateField("orgName", e.target.value)}
              aria-required="true"
              aria-invalid={!!errors.orgName}
              aria-describedby={errors.orgName ? "orgName-error" : undefined}
            />
            {errors.orgName && (
              <p id="orgName-error" className={errorClasses} role="alert">
                {errors.orgName}
              </p>
            )}
          </div>

          {/* Website URL */}
          <div>
            <label htmlFor="websiteUrl" className={labelClasses}>
              Website URL *
            </label>
            <input
              id="websiteUrl"
              type="url"
              className={inputClasses}
              placeholder="https://www.example.com"
              value={formData.websiteUrl}
              onChange={(e) => updateField("websiteUrl", e.target.value)}
              aria-required="true"
              aria-invalid={!!errors.websiteUrl}
              aria-describedby={errors.websiteUrl ? "websiteUrl-error" : undefined}
            />
            {errors.websiteUrl && (
              <p id="websiteUrl-error" className={errorClasses} role="alert">
                {errors.websiteUrl}
              </p>
            )}
          </div>

          {/* Compliance Standard */}
          <div>
            <label htmlFor="standard" className={labelClasses}>
              Compliance Standard *
            </label>
            <select
              id="standard"
              className={inputClasses}
              value={formData.standard}
              onChange={(e) => updateField("standard", e.target.value)}
              aria-required="true"
            >
              <option value="WCAG 2.1 AA">WCAG 2.1 AA (recommended)</option>
              <option value="WCAG 2.2 AA">WCAG 2.2 AA</option>
              <option value="Section 508">Section 508</option>
            </select>
          </div>

          {/* Contact Email */}
          <div>
            <label htmlFor="contactEmail" className={labelClasses}>
              Contact Email *
            </label>
            <input
              id="contactEmail"
              type="email"
              className={inputClasses}
              placeholder="accessibility@example.com"
              value={formData.contactEmail}
              onChange={(e) => updateField("contactEmail", e.target.value)}
              aria-required="true"
              aria-invalid={!!errors.contactEmail}
              aria-describedby={errors.contactEmail ? "contactEmail-error" : undefined}
            />
            {errors.contactEmail && (
              <p id="contactEmail-error" className={errorClasses} role="alert">
                {errors.contactEmail}
              </p>
            )}
          </div>

          {/* Contact Phone */}
          <div>
            <label htmlFor="contactPhone" className={labelClasses}>
              Contact Phone (optional)
            </label>
            <input
              id="contactPhone"
              type="tel"
              className={inputClasses}
              placeholder="+1 (555) 123-4567"
              value={formData.contactPhone}
              onChange={(e) => updateField("contactPhone", e.target.value)}
            />
          </div>

          {/* Last Audit Date */}
          <div>
            <label htmlFor="lastAuditDate" className={labelClasses}>
              Last Accessibility Audit Date (optional)
            </label>
            <input
              id="lastAuditDate"
              type="date"
              className={inputClasses}
              value={formData.lastAuditDate}
              onChange={(e) => updateField("lastAuditDate", e.target.value)}
            />
            <p className="text-gray-500 text-sm mt-1">
              If you have conducted an accessibility audit, enter the date here. This adds an
              audit section to your statement.
            </p>
          </div>

          {/* Known Limitations */}
          <div>
            <label htmlFor="knownLimitations" className={labelClasses}>
              Known Limitations (optional)
            </label>
            <textarea
              id="knownLimitations"
              className={`${inputClasses} min-h-[120px] resize-y`}
              placeholder={"- Some older PDF documents may not be fully accessible.\n- Third-party embedded content (maps, videos) may have limited accessibility.\n- Some legacy pages are pending remediation."}
              value={formData.knownLimitations}
              onChange={(e) => updateField("knownLimitations", e.target.value)}
              rows={4}
            />
            <p className="text-gray-500 text-sm mt-1">
              List any known accessibility barriers on your site. Being transparent about
              limitations demonstrates good faith.
            </p>
          </div>

          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-colors text-lg"
            aria-label="Generate accessibility statement"
          >
            Generate Accessibility Statement
          </button>
        </div>
      </div>

      {/* Generated Output */}
      {generatedStatement && (
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-white">Your Accessibility Statement</h2>
            <button
              onClick={handleCopy}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                copied
                  ? "bg-green-600 text-white"
                  : "bg-[#262626] hover:bg-[#333] text-gray-300"
              }`}
              aria-label={copied ? "Copied to clipboard" : "Copy statement to clipboard"}
            >
              {copied ? "Copied" : "Copy to Clipboard"}
            </button>
          </div>
          <div className="bg-[#0a0a0a] border border-blue-500/30 rounded-xl p-8">
            <pre className="text-gray-300 whitespace-pre-wrap font-sans text-sm leading-relaxed">
              {generatedStatement}
            </pre>
          </div>
          <div className="mt-6 bg-[#141414] border border-[#262626] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">Next Steps</h3>
            <ol className="text-gray-400 space-y-2 list-decimal list-inside">
              <li>
                Copy the statement above and create an <code className="text-blue-400">/accessibility</code> page on your website.
              </li>
              <li>
                Add a link to it in your website footer (use the text &quot;Accessibility&quot; or &quot;Accessibility Statement&quot;).
              </li>
              <li>
                <Link href="/" className="text-blue-400 underline hover:text-blue-300">
                  Scan your website with AccessScore
                </Link>{" "}
                to identify the specific WCAG violations that need to be fixed.
              </li>
              <li>
                Address the issues found and update your statement as you make improvements.
              </li>
              <li>
                Set a calendar reminder to review and update the statement at least once per year.
              </li>
            </ol>
          </div>
        </div>
      )}

      {/* SEO Content: What to Include */}
      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-white mt-16 mb-4">
          What to Include in an Accessibility Statement
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          A complete accessibility statement should contain several key components. The W3C Web
          Accessibility Initiative (WAI) provides a{" "}
          <a
            href="https://www.w3.org/WAI/planning/statements/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline hover:text-blue-300"
          >
            model accessibility statement template
          </a>{" "}
          that outlines the recommended structure. Our generator follows these guidelines and
          includes the following sections:
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {[
            {
              title: "Commitment Statement",
              desc: "A clear declaration that your organization is committed to making the website accessible to people with disabilities. This sets the tone and intent.",
            },
            {
              title: "Conformance Standard",
              desc: "Which accessibility standard you are targeting (WCAG 2.1 AA, WCAG 2.2 AA, or Section 508) and your current level of conformance.",
            },
            {
              title: "Measures Taken",
              desc: "Specific steps your organization takes to maintain accessibility: training, testing processes, development practices, and quality assurance methods.",
            },
            {
              title: "Known Limitations",
              desc: "Honest disclosure of any known accessibility barriers, with an explanation of why they exist and when you plan to resolve them.",
            },
            {
              title: "Feedback Mechanism",
              desc: "Clear contact information (email, phone, form) where users can report accessibility issues and request assistance.",
            },
            {
              title: "Technical Specifications",
              desc: "The technologies your site relies on and the browsers and assistive technologies it is designed to work with.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-[#141414] border border-[#262626] rounded-lg p-4"
            >
              <h3 className="text-white font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-white mt-12 mb-4">
          Legal Requirements for Accessibility Statements
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          The legal landscape for web accessibility is evolving rapidly. Understanding the
          requirements in your jurisdiction is essential for compliance.
        </p>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">
          Americans with Disabilities Act (ADA)
        </h3>
        <p className="text-gray-300 leading-relaxed mb-4">
          The ADA does not explicitly require an accessibility statement. However, the Department
          of Justice published a final rule in April 2024 (28 CFR Part 35) requiring state and
          local governments to make their websites accessible to WCAG 2.1 Level AA. For private
          businesses, courts have consistently held that websites are &quot;places of public
          accommodation&quot; under Title III. While there is no specific mandate for a statement, having
          one demonstrates proactive compliance effort. In the event of a demand letter or
          lawsuit, a well-maintained accessibility statement combined with documented remediation
          efforts can serve as evidence of good faith, which courts and plaintiffs&apos; attorneys
          weigh during settlement negotiations.
        </p>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">
          European Accessibility Act (EAA)
        </h3>
        <p className="text-gray-300 leading-relaxed mb-4">
          The European Accessibility Act takes effect on June 28, 2025, and applies to private
          sector businesses that provide products and services within the EU, including websites,
          mobile applications, e-commerce platforms, banking services, and transportation ticketing.
          The act requires businesses to make their digital products accessible and to provide
          documentation of their conformance status. An accessibility statement is a practical way
          to satisfy this documentation requirement. Businesses that fail to comply face penalties
          that vary by member state but can include fines and restrictions on market access.
        </p>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">
          EU Web Accessibility Directive
        </h3>
        <p className="text-gray-300 leading-relaxed mb-4">
          Since September 2020, the EU Web Accessibility Directive has required all public sector
          websites and mobile applications in EU member states to publish a detailed accessibility
          statement. The directive specifies the content the statement must include: conformance
          status, inaccessible content with explanations, the date of the assessment, the
          assessment method used, and a feedback mechanism with a link to the national enforcement
          body. This is the most prescriptive requirement globally and serves as a useful template
          for all organizations, regardless of jurisdiction.
        </p>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">
          Section 508 (United States Federal Government)
        </h3>
        <p className="text-gray-300 leading-relaxed mb-4">
          Section 508 of the Rehabilitation Act requires federal agencies to make their electronic
          and information technology accessible to people with disabilities. Federal agencies are
          required to publish Accessibility Conformance Reports (ACRs) using the Voluntary Product
          Accessibility Template (VPAT). While Section 508 applies directly to federal agencies, it
          also affects any vendor that sells technology products or services to the federal
          government, making VPAT documentation a de facto requirement for government contractors.
        </p>

        <h2 className="text-2xl font-bold text-white mt-12 mb-4">
          Where to Put Your Accessibility Statement
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          The placement of your accessibility statement directly affects its usefulness and legal
          weight. Here are the recommended practices:
        </p>
        <ul className="text-gray-300 space-y-3 mb-6">
          <li className="leading-relaxed">
            <strong className="text-white">Website footer:</strong> Place a link to your
            accessibility statement in your site-wide footer. This ensures it is accessible from
            every page on your website. Use clear link text such as &quot;Accessibility&quot; or
            &quot;Accessibility Statement.&quot; Avoid vague labels like &quot;Legal&quot; or burying it inside a
            submenu.
          </li>
          <li className="leading-relaxed">
            <strong className="text-white">Dedicated page:</strong> Create a standalone page at a
            predictable URL such as <code className="text-blue-400">/accessibility</code> or{" "}
            <code className="text-blue-400">/accessibility-statement</code>. This makes it easy for
            users and auditors to find directly.
          </li>
          <li className="leading-relaxed">
            <strong className="text-white">Legal section:</strong> Link to the accessibility
            statement from your Terms of Service and Privacy Policy pages, as users with
            disabilities often check these areas for accessibility information.
          </li>
          <li className="leading-relaxed">
            <strong className="text-white">Contact page:</strong> Mention your commitment to
            accessibility on your contact page and link to the full statement, so users who are
            already seeking help can find accessibility-specific information easily.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-12 mb-4">
          How Often to Update Your Accessibility Statement
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          An accessibility statement is a living document, not a one-time deliverable. Outdated
          statements undermine trust and can create legal risk if they claim conformance that no
          longer reflects the actual state of your website. Follow these guidelines for keeping
          your statement current:
        </p>
        <ul className="text-gray-300 space-y-3 mb-6">
          <li className="leading-relaxed">
            <strong className="text-white">Annual review (minimum):</strong> Even if nothing has
            changed, review your statement annually to confirm it still accurately represents your
            website&apos;s accessibility status. Update the &quot;last reviewed&quot; date.
          </li>
          <li className="leading-relaxed">
            <strong className="text-white">After every audit:</strong> Whenever you conduct an
            accessibility audit (automated or manual), update your statement with the new audit
            date, any newly discovered limitations, and any issues that have been resolved since
            the last update.
          </li>
          <li className="leading-relaxed">
            <strong className="text-white">After major site changes:</strong> A website redesign,
            new feature launch, platform migration, or CMS upgrade can introduce new accessibility
            issues. Update your statement to reflect the current state and note that testing is
            underway.
          </li>
          <li className="leading-relaxed">
            <strong className="text-white">After resolving reported issues:</strong> When a user
            reports an accessibility barrier and you fix it, update your statement to remove it from
            the known limitations list. This demonstrates responsiveness.
          </li>
          <li className="leading-relaxed">
            <strong className="text-white">When regulations change:</strong> As new accessibility
            laws take effect (such as the EAA in 2025), review your statement to ensure it
            references the correct standards and requirements.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-12 mb-4">
          Common Mistakes in Accessibility Statements
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Many organizations publish accessibility statements that are ineffective, misleading, or
          counterproductive. Avoid these common pitfalls:
        </p>
        <div className="space-y-4 mb-8">
          {[
            {
              mistake: "Claiming full conformance without evidence",
              why: "Stating that your website \"fully conforms\" to WCAG 2.1 AA when you have never conducted an audit is a false claim. If a user or plaintiff can easily find violations, this statement becomes evidence of negligence rather than good faith. Only claim conformance levels you can support with audit documentation.",
            },
            {
              mistake: "Using an inaccessible statement page",
              why: "If your accessibility statement page itself has accessibility issues (poor contrast, missing labels, keyboard traps), it undermines your credibility entirely. Ensure the statement page is one of the most accessible pages on your site.",
            },
            {
              mistake: "Providing no contact information",
              why: "A statement without a feedback mechanism is incomplete. Users need a way to report issues they encounter. Include at least an email address, and respond to reports within a reasonable timeframe (2-5 business days).",
            },
            {
              mistake: "Using generic boilerplate without customization",
              why: "A generic statement that could apply to any website provides minimal legal protection and zero user value. Customize your statement with specific details about your testing methods, audit dates, known issues, and remediation plans.",
            },
            {
              mistake: "Never updating the statement",
              why: "A statement dated three years ago suggests your organization stopped caring about accessibility. Keep the date current and the content accurate. An outdated statement is worse than no statement in many legal contexts.",
            },
            {
              mistake: "Hiding the statement in obscure locations",
              why: "If users cannot find your accessibility statement, it serves no practical purpose. Place it in the footer of every page with clear, descriptive link text.",
            },
          ].map((item) => (
            <div
              key={item.mistake}
              className="bg-[#141414] border border-[#262626] rounded-lg p-5"
            >
              <h3 className="text-white font-semibold mb-2">{item.mistake}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{item.why}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-white mt-12 mb-4">
          Scan Your Website Before Writing Your Statement
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          An accessibility statement is only as credible as the effort behind it. Before publishing
          your statement, you need to understand the actual accessibility status of your website.
          Claiming conformance without evidence creates legal risk. Identifying real issues and
          documenting them honestly demonstrates genuine commitment to accessibility.
        </p>

        <div className="bg-[#1a1a1a] border border-[#262626] rounded-xl p-8 my-8">
          <h3 className="text-xl font-bold text-white mb-3">
            Know what to put in your statement
          </h3>
          <p className="text-gray-300 mb-4">
            AccessScore scans your website for WCAG 2.1 violations in seconds and identifies the
            specific issues you should address. Use the scan results to accurately fill in your
            accessibility statement&apos;s conformance status and known limitations sections.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors text-center"
            >
              Scan Your Website Free
            </Link>
            <a
              href="https://buy.stripe.com/aFadR27DD1Dd0qB9sbdfG00"
              className="inline-block bg-[#262626] hover:bg-[#333] text-white font-semibold py-3 px-6 rounded-xl transition-colors text-center"
            >
              Get Professional Audit Report -- $29.99
            </a>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            The professional report includes an executive summary, full issue inventory,
            remediation timeline, and compliance dashboard -- ready to share with your team or
            legal counsel.
          </p>
        </div>

        {/* FAQ Section */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6 mb-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">
              What is a website accessibility statement?
            </h3>
            <p className="text-gray-300 leading-relaxed">
              A website accessibility statement is a public declaration that describes your
              organization&apos;s commitment to digital accessibility, the standards you follow (such
              as WCAG 2.1 AA), the current conformance status of your website, known limitations,
              and how users can report accessibility issues. It serves as both a legal document and
              a communication tool that builds trust with users who have disabilities.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Is an accessibility statement legally required?
            </h3>
            <p className="text-gray-300 leading-relaxed">
              It depends on your jurisdiction and sector. In the European Union, accessibility
              statements are legally required for public sector websites under the Web Accessibility
              Directive, and the European Accessibility Act extends requirements to the private
              sector starting June 2025. In the United States, the ADA does not explicitly require
              a statement, but having one demonstrates good faith compliance effort. Section 508
              requires federal agencies to document accessibility conformance.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Where should I put my accessibility statement on my website?
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Place a link to your accessibility statement in your website footer so it is
              accessible from every page. Use clear link text such as &quot;Accessibility&quot; or
              &quot;Accessibility Statement.&quot; Create a dedicated page at a predictable URL like{" "}
              <code className="text-blue-400">/accessibility</code>. Also consider linking to it
              from your Terms of Service, Privacy Policy, and Contact pages.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-2">
              How often should I update my accessibility statement?
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Review your accessibility statement at least once per year. Update it immediately
              after conducting a new accessibility audit, making significant website changes,
              resolving known limitations, or receiving user feedback about new barriers. An
              outdated statement can be more damaging than no statement at all.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Can I use a generated accessibility statement as-is?
            </h3>
            <p className="text-gray-300 leading-relaxed">
              A generated statement provides a strong, legally-informed starting point. However, you
              should review and customize it to accurately reflect your specific organization&apos;s
              accessibility efforts, testing methods, and current conformance status. The statement
              should be truthful. Making false claims about conformance can create legal liability
              rather than protection.
            </p>
          </div>
        </div>

        {/* Internal Links */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">
          Related Accessibility Resources
        </h2>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <Link
            href="/ada-compliance-checker"
            className="block bg-[#141414] border border-[#262626] rounded-lg p-4 hover:border-blue-500/50 transition-colors"
          >
            <h3 className="text-white font-semibold mb-1">ADA Compliance Checker</h3>
            <p className="text-sm text-gray-400">
              Free automated ADA compliance scanning for your website with legal risk assessment.
            </p>
          </Link>
          <Link
            href="/accessibility-checklist"
            className="block bg-[#141414] border border-[#262626] rounded-lg p-4 hover:border-blue-500/50 transition-colors"
          >
            <h3 className="text-white font-semibold mb-1">Accessibility Checklist</h3>
            <p className="text-sm text-gray-400">
              Complete WCAG 2.1 AA checklist for 2026 with actionable items and priority ratings.
            </p>
          </Link>
          <Link
            href="/wcag-checker"
            className="block bg-[#141414] border border-[#262626] rounded-lg p-4 hover:border-blue-500/50 transition-colors"
          >
            <h3 className="text-white font-semibold mb-1">WCAG Checker</h3>
            <p className="text-sm text-gray-400">
              Test your website against WCAG 2.1 Level AA success criteria with detailed results.
            </p>
          </Link>
          <Link
            href="/ada-compliance-cost"
            className="block bg-[#141414] border border-[#262626] rounded-lg p-4 hover:border-blue-500/50 transition-colors"
          >
            <h3 className="text-white font-semibold mb-1">ADA Compliance Cost Guide</h3>
            <p className="text-sm text-gray-400">
              Understand the true costs of ADA compliance versus the cost of non-compliance.
            </p>
          </Link>
        </div>

        <p className="text-gray-500 text-sm mt-12 border-t border-[#262626] pt-6">
          This accessibility statement generator creates template text based on your inputs and
          widely accepted accessibility statement practices recommended by the W3C Web
          Accessibility Initiative. The generated text is not legal advice. Consult with a
          qualified attorney or accessibility professional to ensure your statement meets the
          specific requirements applicable to your organization, jurisdiction, and industry.
        </p>
      </div>
    </main>
  );
}
