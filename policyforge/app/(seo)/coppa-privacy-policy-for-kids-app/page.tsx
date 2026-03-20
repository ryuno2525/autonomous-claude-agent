import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "COPPA Privacy Policy for Kids Apps | Children's App Privacy Policy Generator - PolicyForge",
  description:
    "Generate a COPPA-compliant privacy policy for your kids app. Covers verifiable parental consent, data minimization, no behavioral advertising, Apple Kids Category, Google Designed for Families, and FTC enforcement.",
  keywords:
    "COPPA privacy policy, kids app privacy policy, COPPA compliant privacy policy generator, children's app privacy policy template, COPPA compliance, children's online privacy, kids app COPPA requirements, parental consent privacy policy, FTC COPPA enforcement, children's data protection",
  openGraph: {
    title: "COPPA Privacy Policy for Kids Apps — Free Generator",
    description:
      "Create a COPPA-compliant privacy policy for your children's app. Covers parental consent, data minimization, Apple Kids Category, Google Play Families Policy, and FTC requirements.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "COPPA Privacy Policy for Kids Apps — Free Generator | PolicyForge",
    description:
      "Generate a kids-app-specific privacy policy covering COPPA, parental consent, data minimization, app store kids category rules, and GDPR children's provisions.",
  },
};

const COPPA_CORE_REQUIREMENTS = [
  {
    title: "Verifiable Parental Consent (VPC)",
    description:
      "Before collecting, using, or disclosing personal information from a child under 13, operators must obtain verifiable parental consent. The FTC recognizes several methods: signed consent forms returned by mail, fax, or email scan; credit card transactions; calls to trained personnel; video conferencing; government-issued ID checked against a database; and knowledge-based challenge questions. The 'email plus' method is allowed for internal use only — not for public disclosure of a child's data.",
    severity: "critical",
  },
  {
    title: "Data Minimization",
    description:
      "You may only collect personal information that is reasonably necessary for the child to participate in the activity. No profiling, no building behavioral profiles, no collecting data 'just in case.' If a drawing app only needs a username, you cannot also collect location, contacts, or device identifiers beyond what is strictly required for the app to function.",
    severity: "critical",
  },
  {
    title: "No Behavioral Advertising to Children",
    description:
      "COPPA prohibits serving behaviorally targeted advertisements to children under 13. Only contextual advertising — ads based on the content of the page or app, not the user's behavior — is permitted. This means no AdMob personalized ads, no Facebook Audience Network retargeting, no cross-app tracking for ad purposes. Violating this is one of the most common reasons for FTC enforcement actions.",
    severity: "critical",
  },
  {
    title: "Clear and Comprehensive Privacy Policy",
    description:
      "Your privacy policy must be written in clear, understandable language (not legal jargon). It must describe: all personal information collected from children, how that information is used, disclosure practices, and parental rights. The policy must be prominently linked from every point where data is collected and from your app store listing.",
    severity: "high",
  },
  {
    title: "Parental Access and Deletion Rights",
    description:
      "Parents have the right to review all personal information collected from their child, request that the information be deleted, and refuse to allow any further collection. You must provide a reasonable mechanism (email, web form, toll-free number) for parents to exercise these rights, and you must respond to requests promptly.",
    severity: "high",
  },
  {
    title: "Data Retention Limits",
    description:
      "Personal information collected from children must be retained only as long as reasonably necessary to fulfill the purpose for which it was collected. After that purpose is fulfilled, the data must be deleted using reasonable measures to protect against unauthorized access. Indefinite retention for analytics is not permitted.",
    severity: "high",
  },
  {
    title: "Confidentiality and Security",
    description:
      "Operators must establish and maintain reasonable procedures to protect the confidentiality, security, and integrity of personal information collected from children. This includes both technical safeguards (encryption, access controls) and organizational measures (employee training, vendor agreements).",
    severity: "medium",
  },
];

const KIDS_APP_DATA_TYPES = [
  {
    category: "Device Identifiers",
    examples: [
      "Advertising ID (GAID / IDFA)",
      "Android ID or IDFV",
      "Device fingerprint data",
      "Installation UUID",
    ],
    coppaNote:
      "Persistent identifiers are considered personal information under COPPA when they can be used to recognize a user over time or across apps. Even 'anonymous' device IDs count.",
  },
  {
    category: "Location Data",
    examples: [
      "GPS coordinates",
      "IP-based geolocation",
      "Wi-Fi access point data",
      "Cell tower triangulation",
    ],
    coppaNote:
      "Precise geolocation is personal information under COPPA. Even approximate location derived from IP addresses is regulated. Kids apps should avoid collecting any location data unless absolutely essential.",
  },
  {
    category: "Chat & Communication",
    examples: [
      "Free-text chat messages",
      "Voice chat audio",
      "Emoji reactions and stickers",
      "Friend requests and social connections",
    ],
    coppaNote:
      "Open-format chat in kids apps is extremely risky under COPPA. Best practice is to use pre-set phrases or emoji-only communication. If free-text chat is offered, it must be monitored and parental consent is required.",
  },
  {
    category: "Photos & Media",
    examples: [
      "Camera access for AR features",
      "Photo uploads for avatars or profiles",
      "Drawings and creative content",
      "Screenshots shared within the app",
    ],
    coppaNote:
      "Photos that contain a child's image are personal information. Apps that allow photo sharing between users need parental consent. Even locally processed photos can trigger COPPA if metadata is transmitted.",
  },
  {
    category: "Usage & Behavioral Data",
    examples: [
      "Session duration and frequency",
      "Feature usage patterns",
      "Content preferences and interactions",
      "Search queries within the app",
    ],
    coppaNote:
      "Behavioral data tied to a persistent identifier constitutes personal information under COPPA. Aggregate analytics (not tied to individual children) are permitted without parental consent.",
  },
  {
    category: "Account & Profile Data",
    examples: [
      "Username or display name",
      "Age or date of birth",
      "Email address (child's or parent's)",
      "Avatar selections and customizations",
    ],
    coppaNote:
      "Collect the minimum needed. A child's email should only be collected to obtain parental consent, then deleted if consent is not received. Usernames should not require real names.",
  },
];

const PARENTAL_CONSENT_METHODS = [
  {
    method: "Email Plus",
    description:
      "Send a consent notice to the parent's email, then use an additional confirmation step (e.g., delayed confirmation email, phone call, or letter). Allowed only for internal use of data — not for disclosing a child's information publicly.",
    reliability: "Moderate",
    bestFor: "Internal data use only, lower-friction onboarding",
  },
  {
    method: "Credit Card / Payment Verification",
    description:
      "Charge a small transaction amount to the parent's credit card as proof of identity. The charge can be nominal ($0.50-$1.00). Provides strong identity verification since only adults typically have credit cards.",
    reliability: "High",
    bestFor: "Apps with in-app purchases or paid tiers",
  },
  {
    method: "Government ID Check",
    description:
      "Parent submits a government-issued ID (driver's license, passport) which is checked against a database. The ID must be deleted promptly after verification. Often handled by third-party age verification services.",
    reliability: "Very High",
    bestFor: "High-sensitivity data collection, social features",
  },
  {
    method: "Knowledge-Based Authentication",
    description:
      "Ask the parent questions that only an adult would be able to answer, drawn from public databases (e.g., financial history questions similar to credit bureau authentication). Must be sufficiently rigorous to prevent child bypass.",
    reliability: "High",
    bestFor: "No-cost verification, broad accessibility",
  },
  {
    method: "Video Conference",
    description:
      "Conduct a live video call with the parent to verify identity. Requires trained staff and scheduling infrastructure. Provides very strong verification but has high operational cost.",
    reliability: "Very High",
    bestFor: "Small user base, premium apps, highest-sensitivity data",
  },
  {
    method: "Signed Consent Form",
    description:
      "Send a consent form to the parent via mail, fax, or email. Parent signs and returns the form. Physical mail is the most traditional method but introduces significant delay in the user experience.",
    reliability: "High",
    bestFor: "Educational apps, institutional settings (schools)",
  },
];

const ENFORCEMENT_ACTIONS = [
  {
    company: "Epic Games (Fortnite)",
    year: "2022",
    fine: "$275 million",
    violation:
      "Collected personal information from children under 13 without parental consent. Used dark patterns to trick players into unintended purchases. Default privacy settings exposed children to voice and text chat with strangers.",
  },
  {
    company: "Microsoft (Xbox)",
    year: "2023",
    fine: "$20 million",
    violation:
      "Collected personal information from children who signed up for Xbox Live accounts without notifying parents or obtaining consent. Retained children's data beyond what was necessary.",
  },
  {
    company: "Edmodo",
    year: "2023",
    fine: "$6 million",
    violation:
      "Ed-tech platform collected personal data from children and used it for advertising purposes. Failed to obtain parental consent before collecting data from students under 13.",
  },
  {
    company: "Fortnite (additional)",
    year: "2022",
    fine: "$245 million (refunds)",
    violation:
      "FTC ordered Epic Games to pay $245 million in refunds to consumers over dark pattern charges, in addition to the $275 million COPPA penalty. Combined total: $520 million.",
  },
  {
    company: "Musical.ly (TikTok)",
    year: "2019",
    fine: "$5.7 million",
    violation:
      "Collected personal information from children under 13 without parental consent. Failed to delete children's data upon parental request. This was the largest COPPA fine at the time.",
  },
  {
    company: "Google (YouTube)",
    year: "2019",
    fine: "$170 million",
    violation:
      "Collected persistent identifiers from children watching kid-directed content on YouTube channels without parental consent. Used the data to serve targeted advertising to children.",
  },
];

const COMPETITOR_PRICING = [
  {
    name: "Termly",
    price: "$120/year",
    note: "Annual subscription, generic template — no COPPA-specific sections",
  },
  {
    name: "iubenda",
    price: "$90/year",
    note: "Pro plan required for apps, limited COPPA customization",
  },
  {
    name: "TermsFeed",
    price: "$89+",
    note: "One-time, but no kids-app-specific flow or parental consent language",
  },
  {
    name: "A COPPA attorney",
    price: "$2,000-5,000+",
    note: "Per document, specialized but expensive for indie developers",
  },
  {
    name: "PolicyForge",
    price: "$4.99",
    note: "One-time, COPPA-specific sections, parental consent clauses, app store kids category coverage",
    highlight: true,
  },
];

const FAQ_ITEMS = [
  {
    q: "What is COPPA and does it apply to my kids app?",
    a: "COPPA (Children's Online Privacy Protection Act) is a US federal law enforced by the FTC that applies to operators of websites, apps, and online services directed at children under 13, or that have actual knowledge they are collecting personal information from children under 13. If your app is listed in the Kids category on the App Store or Google Play, targets children in its marketing, features child-oriented content (cartoons, bright colors, simplified interfaces), or is likely to attract a primarily under-13 audience, COPPA almost certainly applies to you. The law applies regardless of where your company is based — if your app is accessible to US children, you must comply. Penalties are severe: the FTC can impose civil penalties of up to $50,120 per violation, and recent enforcement actions have resulted in fines exceeding $275 million (Epic Games, 2022).",
  },
  {
    q: "What counts as 'personal information' under COPPA?",
    a: "COPPA defines personal information more broadly than many developers expect. It includes: first and last name; home or physical address; email address; telephone number; Social Security number; any persistent identifier that can be used to recognize a user over time and across websites or apps (including device IDs, cookies, and IP addresses when used for tracking); a photograph, video, or audio file containing a child's image or voice; geolocation data sufficient to identify a street name and city; and any information combined with any of the above. This means that even collecting an advertising ID (GAID/IDFA), an IP address logged server-side, or a photo taken with the device camera constitutes collecting personal information from a child and triggers COPPA obligations.",
  },
  {
    q: "Can I show ads in a kids app?",
    a: "Yes, but only contextual ads — never behaviorally targeted ads. Under COPPA, you cannot use personal information (including persistent identifiers) to build profiles of children for advertising purposes. This means no personalized ads from AdMob, no Facebook Audience Network, no retargeting, and no interest-based ad targeting. You can show ads based on the content of the app itself (e.g., a math game showing ads for educational products) but not based on the child's browsing or usage behavior. On Apple's App Store, Kids Category apps face even stricter rules: no third-party advertising SDKs are allowed at all. Google Play's Families Policy restricts ads to Google-certified ad SDKs only and prohibits personalized advertising. Many developers choose to monetize kids apps through one-time purchases or parent-gated subscriptions rather than advertising.",
  },
  {
    q: "How does COPPA interact with GDPR for kids apps available in Europe?",
    a: "If your kids app is available in EU countries, you must comply with both COPPA (for US children) and GDPR (for EU children). GDPR's Article 8 sets the default age of consent for data processing at 16, though individual EU member states can lower it to as young as 13. The actual age varies: the UK, France, and others use 13; Germany and the Netherlands use 16; Italy uses 14; Spain uses 13. Under GDPR, you need parental consent for children below the applicable age of digital consent in their country. GDPR also requires a lawful basis for processing, data minimization, and grants children (through their parents) the right to access, rectify, and delete data. The key practical impact is that you may need separate consent flows for US users (under 13 per COPPA) and EU users (under 13-16 depending on country per GDPR). Your privacy policy must address both frameworks. PolicyForge Pro generates policies covering both COPPA and GDPR children's provisions in a single document.",
  },
  {
    q: "What happens if my kids app violates COPPA?",
    a: "COPPA violations carry serious consequences. The FTC can impose civil penalties of up to $50,120 per violation — and each instance of collecting a child's data without consent can be counted as a separate violation, meaning fines can accumulate to millions of dollars quickly. Recent enforcement shows the FTC is actively pursuing cases: Epic Games paid $275 million (2022), Google/YouTube paid $170 million (2019), Microsoft paid $20 million (2023), and Musical.ly/TikTok paid $5.7 million (2019). Beyond FTC fines, consequences include: mandatory deletion of all children's data collected without consent, required implementation of comprehensive privacy programs under FTC oversight for 20 years, removal from app stores (both Apple and Google will pull non-compliant kids apps), reputational damage and negative press coverage, and potential class-action lawsuits from parents. State attorneys general can also enforce COPPA, creating additional enforcement risk. The cost of compliance is trivial compared to the cost of non-compliance.",
  },
];

export default function CoppaPrivacyPolicyForKidsApp() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#ededed]">
      <header className="border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
              P
            </div>
            <span className="text-white font-semibold text-lg">
              PolicyForge
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/check"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Compliance Checker
            </Link>
            <Link
              href="/"
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              Generate Policy
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-4 flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-red-500/10 text-red-400 text-xs font-medium rounded-full border border-red-500/20">
            COPPA Compliance
          </span>
          <span className="px-3 py-1 bg-purple-500/10 text-purple-400 text-xs font-medium rounded-full border border-purple-500/20">
            Kids Apps
          </span>
          <span className="px-3 py-1 bg-green-500/10 text-green-400 text-xs font-medium rounded-full border border-green-500/20">
            FTC Regulated
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          COPPA Privacy Policy for Kids Apps
        </h1>
        <p className="text-xl text-gray-400 mb-8">
          Apps targeting children under 13 face the strictest privacy
          requirements of any app category. The FTC can impose civil penalties
          of up to <strong className="text-red-400">$50,120 per violation</strong>{" "}
          under COPPA, and recent enforcement actions have resulted in fines
          exceeding $275 million. Generate a COPPA-compliant privacy policy
          that covers verifiable parental consent, data minimization, app
          store kids category rules, and GDPR children&apos;s provisions.
        </p>

        <div className="flex flex-wrap gap-3 mb-12">
          <Link
            href="https://policyforge.autonomous-claude.com/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg text-lg hover:opacity-90 transition-opacity"
          >
            Generate COPPA-Compliant Policy
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
          <Link
            href="/check"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-lg text-lg hover:bg-white/20 transition-colors"
          >
            Check Existing Policy
          </Link>
        </div>

        <div className="space-y-12 text-gray-300 leading-relaxed">
          {/* Why Kids Apps Need COPPA-Compliant Privacy Policies */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Why Apps Targeting Children Need COPPA-Compliant Privacy Policies
            </h2>
            <p className="mb-4">
              The Children&apos;s Online Privacy Protection Act (COPPA) is a
              US federal law enacted in 1998 and significantly updated in
              2013, enforced by the Federal Trade Commission (FTC). It applies
              to any app, website, or online service that is either directed
              at children under 13 or has actual knowledge that it collects
              personal information from children under 13. COPPA is not
              optional guidance — it is a legally binding regulation with
              severe penalties for non-compliance.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="p-4 bg-red-500/5 border border-red-500/20 rounded-lg">
                <h3 className="font-semibold text-red-400 mb-2">
                  FTC Penalties
                </h3>
                <p className="text-sm text-gray-400">
                  Up to <strong className="text-red-300">$50,120 per violation</strong>.
                  Each instance of collecting a child&apos;s data without
                  consent can be a separate violation. Epic Games paid $275M,
                  Google/YouTube paid $170M, and Microsoft paid $20M in
                  recent enforcement actions.
                </p>
              </div>
              <div className="p-4 bg-red-500/5 border border-red-500/20 rounded-lg">
                <h3 className="font-semibold text-red-400 mb-2">
                  App Store Removal
                </h3>
                <p className="text-sm text-gray-400">
                  Both Apple and Google will remove kids apps that violate
                  their children&apos;s content policies. Apple&apos;s Kids
                  Category requires strict COPPA compliance. Google&apos;s
                  Families Policy mandates compliance for all apps targeting
                  children.
                </p>
              </div>
              <div className="p-4 bg-red-500/5 border border-red-500/20 rounded-lg">
                <h3 className="font-semibold text-red-400 mb-2">
                  20-Year Oversight
                </h3>
                <p className="text-sm text-gray-400">
                  FTC consent orders typically include 20 years of mandatory
                  compliance monitoring. Companies must submit regular
                  compliance reports, maintain privacy programs, and undergo
                  independent assessments for two decades.
                </p>
              </div>
            </div>
            <p className="mb-4">
              COPPA applies regardless of where your company is based. If your
              app is accessible to children in the United States through the
              App Store or Google Play, you are subject to COPPA. The FTC
              determines whether an app is &quot;directed at children&quot;
              based on factors including: subject matter, visual content,
              characters, music, language, age of models, advertising placement,
              and whether the app is listed in a kids category on app stores.
            </p>
            <div className="p-4 bg-yellow-500/5 border border-yellow-500/20 rounded-lg">
              <p className="text-sm text-yellow-300">
                <strong>Critical distinction:</strong> Even if you do not
                intend your app for children, if it collects data from users
                you have &quot;actual knowledge&quot; are under 13 (e.g.,
                they entered an age below 13, or a parent reported their
                child&apos;s account), COPPA applies. Many general-audience
                apps have been fined for failing to implement age gates and
                treating known child users the same as adults.
              </p>
            </div>
          </section>

          {/* What COPPA Requires */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              What COPPA Requires: The 7 Core Obligations
            </h2>
            <p className="mb-4">
              COPPA imposes specific, non-negotiable requirements on operators
              of children&apos;s apps. Understanding these requirements is
              essential before designing your app or drafting your privacy
              policy. Here is what the law demands:
            </p>
            <div className="space-y-3 mb-4">
              {COPPA_CORE_REQUIREMENTS.map((req) => (
                <div
                  key={req.title}
                  className="flex items-start gap-3 p-4 bg-white/5 rounded-lg"
                >
                  <span
                    className={`mt-0.5 font-bold text-sm ${
                      req.severity === "critical"
                        ? "text-red-400"
                        : req.severity === "high"
                        ? "text-orange-400"
                        : "text-yellow-400"
                    }`}
                  >
                    &gt;
                  </span>
                  <div>
                    <p className="font-medium text-white text-sm flex items-center gap-2">
                      {req.title}
                      {req.severity === "critical" && (
                        <span className="text-xs bg-red-500/20 text-red-300 px-2 py-0.5 rounded-full">
                          Critical
                        </span>
                      )}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      {req.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* What Data Kids Apps Commonly Collect */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              What Data Kids Apps Commonly Collect
            </h2>
            <p className="mb-4">
              Many developers underestimate how much personal information their
              kids app collects. Under COPPA, &quot;personal information&quot;
              includes any persistent identifier that can recognize a user over
              time — even anonymous device IDs. Here are the data categories
              you need to address in your privacy policy:
            </p>
            <div className="space-y-4 mb-4">
              {KIDS_APP_DATA_TYPES.map((dataType) => (
                <div
                  key={dataType.category}
                  className="p-4 bg-white/5 border border-white/10 rounded-lg"
                >
                  <h3 className="font-semibold text-white mb-2">
                    {dataType.category}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    <ul className="space-y-1">
                      {dataType.examples.map((example) => (
                        <li
                          key={example}
                          className="flex items-start gap-2 text-sm text-gray-400"
                        >
                          <span className="text-purple-400 mt-0.5">
                            &#8226;
                          </span>
                          {example}
                        </li>
                      ))}
                    </ul>
                    <div className="p-2 bg-yellow-500/5 border border-yellow-500/10 rounded text-xs text-yellow-300/80">
                      <strong>COPPA note:</strong> {dataType.coppaNote}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Apple and Google Kids Category Requirements */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Apple App Store and Google Play Kids Category Requirements
            </h2>
            <p className="mb-4">
              Both Apple and Google impose their own children&apos;s app
              policies on top of COPPA. These platform-specific rules are
              often stricter than COPPA itself, and non-compliance results in
              app rejection or removal. Your privacy policy must address
              these requirements.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                <h3 className="font-semibold text-white mb-2">
                  Apple Kids Category
                </h3>
                <ul className="space-y-1.5 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">&#8226;</span>
                    No third-party analytics SDKs allowed (no Firebase
                    Analytics, no Mixpanel, no Amplitude)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">&#8226;</span>
                    No third-party advertising SDKs allowed (no AdMob, no
                    Unity Ads, no AppLovin)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">&#8226;</span>
                    No links that leave the app without a parental gate
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">&#8226;</span>
                    Login must not be required (optional login with parental
                    gate permitted)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">&#8226;</span>
                    Must select one of three age bands: 5 and Under, 6-8,
                    or 9-11
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">&#8226;</span>
                    Cannot use App Tracking Transparency (ATT) — kids apps
                    must not request IDFA access
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">&#8226;</span>
                    Data collection must comply with Apple&apos;s privacy
                    nutrition labels
                  </li>
                </ul>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                <h3 className="font-semibold text-white mb-2">
                  Google Play Designed for Families
                </h3>
                <ul className="space-y-1.5 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">&#8226;</span>
                    Only Google-certified ad SDKs can be used (listed in
                    Google&apos;s Families Self-Certified Ads SDK program)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">&#8226;</span>
                    No personalized advertising — contextual ads only
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">&#8226;</span>
                    Must complete the Families Policy target audience
                    questionnaire in Play Console
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">&#8226;</span>
                    APIs and SDKs used must be approved for use in
                    child-directed services
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">&#8226;</span>
                    Ads must be age-appropriate in content
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">&#8226;</span>
                    Must declare Data Safety section accurately for all SDKs
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">&#8226;</span>
                    Teacher Approved badge available for educational apps
                    meeting additional criteria
                  </li>
                </ul>
              </div>
            </div>
            <div className="p-4 bg-yellow-500/5 border border-yellow-500/20 rounded-lg">
              <p className="text-sm text-yellow-300">
                <strong>Mixed-audience apps:</strong> If your app targets both
                children and older users, you must implement an age gate at
                first launch. Google Play requires you to declare your target
                audience in Play Console. If you include children under 13 in
                your target audience, the Families Policy applies. Apple does
                not allow mixed-audience apps in the Kids Category — you must
                choose between Kids Category (strict rules) and a general
                category with an age gate.
              </p>
            </div>
          </section>

          {/* Parental Consent Mechanisms */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Parental Consent Mechanisms: What the FTC Accepts
            </h2>
            <p className="mb-4">
              Obtaining verifiable parental consent (VPC) is the central
              obligation of COPPA. The FTC has approved several methods, each
              with different levels of reliability and friction. Your privacy
              policy must describe which method(s) you use and how parents can
              provide or withdraw consent.
            </p>
            <div className="space-y-3 mb-4">
              {PARENTAL_CONSENT_METHODS.map((method) => (
                <div
                  key={method.method}
                  className="p-4 bg-white/5 border border-white/10 rounded-lg"
                >
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="font-semibold text-white text-sm">
                      {method.method}
                    </h3>
                    <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full">
                      Reliability: {method.reliability}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mb-1">
                    {method.description}
                  </p>
                  <p className="text-xs text-gray-500">
                    <strong>Best for:</strong> {method.bestFor}
                  </p>
                </div>
              ))}
            </div>
            <div className="p-4 bg-blue-500/5 border border-blue-500/20 rounded-lg">
              <p className="text-sm text-blue-300">
                <strong>FTC tip:</strong> The &quot;email plus&quot; method
                (sending a consent email to the parent, then confirming via a
                follow-up email after a delay) is the lowest-friction option
                but is only approved for internal use of data. If your app
                makes a child&apos;s personal information publicly available
                (e.g., a public username, leaderboard, or social features),
                you must use a higher-assurance method like credit card
                verification or government ID check.
              </p>
            </div>
          </section>

          {/* COPPA and GDPR Interaction */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              How COPPA Interacts with GDPR for International Kids Apps
            </h2>
            <p className="mb-4">
              If your kids app is available in European Union countries (which
              most App Store and Google Play apps are), you must comply with
              both COPPA and GDPR simultaneously. While both laws protect
              children&apos;s data, they differ in significant ways:
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-3 text-gray-400 font-medium">
                      Aspect
                    </th>
                    <th className="text-left py-3 px-3 text-gray-400 font-medium">
                      COPPA (US)
                    </th>
                    <th className="text-left py-3 px-3 text-gray-400 font-medium">
                      GDPR (EU)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      aspect: "Age threshold",
                      coppa: "Under 13 (fixed)",
                      gdpr: "Under 13-16 (varies by EU member state)",
                    },
                    {
                      aspect: "Parental consent required?",
                      coppa: "Yes — verifiable parental consent before any data collection",
                      gdpr: "Yes — for children below the age of digital consent in their country",
                    },
                    {
                      aspect: "What triggers the law?",
                      coppa: "App directed at children OR actual knowledge of child users",
                      gdpr: "Any processing of personal data of EU residents, including children",
                    },
                    {
                      aspect: "Penalties",
                      coppa: "Up to $50,120 per violation (FTC civil penalties)",
                      gdpr: "Up to 4% of annual global revenue or EUR 20M (whichever is higher)",
                    },
                    {
                      aspect: "Data deletion rights",
                      coppa: "Parents can request deletion of child's data",
                      gdpr: "Right to erasure (Article 17) — broader scope including automated data",
                    },
                    {
                      aspect: "Data minimization",
                      coppa: "Only what is reasonably necessary for the activity",
                      gdpr: "Data must be adequate, relevant, and limited to what is necessary (Article 5)",
                    },
                    {
                      aspect: "Age of consent by country",
                      coppa: "13 (uniform across all US states)",
                      gdpr: "UK: 13, France: 15, Germany: 16, Spain: 13, Italy: 14, Netherlands: 16, Ireland: 16",
                    },
                  ].map((row) => (
                    <tr
                      key={row.aspect}
                      className="border-b border-white/5"
                    >
                      <td className="py-3 px-3 font-medium text-white">
                        {row.aspect}
                      </td>
                      <td className="py-3 px-3 text-gray-400">{row.coppa}</td>
                      <td className="py-3 px-3 text-gray-400">{row.gdpr}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mb-4">
              The practical impact is significant: if your kids app is available
              globally, you need a privacy policy that addresses both COPPA and
              GDPR requirements. For US children under 13, you need verifiable
              parental consent under COPPA. For EU children, you need parental
              consent under GDPR Article 8, with the age threshold varying by
              country (13 in the UK, 15 in France, 16 in Germany).
            </p>
            <p className="text-sm text-gray-400">
              PolicyForge Pro generates a single privacy policy that covers
              both COPPA and GDPR children&apos;s provisions, including
              country-specific age thresholds. See our{" "}
              <Link
                href="/gdpr-privacy-policy-generator"
                className="text-blue-400 hover:text-blue-300"
              >
                GDPR Privacy Policy Generator
              </Link>{" "}
              for detailed EU compliance guidance.
            </p>
          </section>

          {/* Common COPPA Violations and Enforcement */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Common COPPA Violations and FTC Enforcement Actions
            </h2>
            <p className="mb-4">
              The FTC has dramatically increased COPPA enforcement in recent
              years, with penalties growing from millions to hundreds of
              millions of dollars. Understanding past enforcement actions
              helps you avoid the same mistakes:
            </p>
            <div className="space-y-3 mb-4">
              {ENFORCEMENT_ACTIONS.map((action) => (
                <div
                  key={`${action.company}-${action.year}`}
                  className="p-4 bg-red-500/5 border border-red-500/10 rounded-lg"
                >
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-semibold text-white text-sm">
                      {action.company}
                    </h3>
                    <span className="text-xs text-gray-500">
                      ({action.year})
                    </span>
                    <span className="text-xs bg-red-500/20 text-red-300 px-2 py-0.5 rounded-full font-medium">
                      {action.fine}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400">{action.violation}</p>
                </div>
              ))}
            </div>
            <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
              <h3 className="font-semibold text-white mb-2 text-sm">
                Most Common Violations
              </h3>
              <div className="grid md:grid-cols-2 gap-2">
                {[
                  "Collecting persistent identifiers (device IDs, cookies) without consent",
                  "Serving behaviorally targeted ads to children",
                  "Failing to provide a clear, complete privacy policy",
                  "Not obtaining verifiable parental consent before data collection",
                  "Retaining children's data longer than necessary",
                  "Sharing children's data with third-party ad networks",
                  "Using dark patterns to pressure children into sharing data",
                  "Failing to honor parental deletion requests",
                ].map((violation) => (
                  <div
                    key={violation}
                    className="flex items-start gap-2 text-xs text-gray-400"
                  >
                    <span className="text-red-400 mt-0.5">&#8226;</span>
                    {violation}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* PolicyForge vs Generic Templates */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              COPPA Privacy Policy: PolicyForge vs Generic Templates
            </h2>
            <p className="mb-4">
              Generic privacy policy generators don&apos;t address
              COPPA-specific requirements. They miss critical sections like
              parental consent mechanisms, children&apos;s data handling
              procedures, and app store kids category compliance. Here is
              how PolicyForge compares:
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-3 text-gray-400 font-medium">
                      Feature
                    </th>
                    <th className="text-center py-3 px-3 text-gray-400 font-medium">
                      Generic Templates
                    </th>
                    <th className="text-center py-3 px-3 text-blue-400 font-medium">
                      PolicyForge
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      feature: "COPPA-specific parental consent section",
                      generic: false,
                      policyforge: true,
                    },
                    {
                      feature: "Verifiable parental consent method descriptions",
                      generic: false,
                      policyforge: true,
                    },
                    {
                      feature: "Children's data collection disclosures",
                      generic: false,
                      policyforge: true,
                    },
                    {
                      feature: "Parental access and deletion rights section",
                      generic: false,
                      policyforge: true,
                    },
                    {
                      feature: "Apple Kids Category compliance",
                      generic: false,
                      policyforge: true,
                    },
                    {
                      feature: "Google Designed for Families compliance",
                      generic: false,
                      policyforge: true,
                    },
                    {
                      feature: "No behavioral advertising disclosure",
                      generic: false,
                      policyforge: true,
                    },
                    {
                      feature: "GDPR children's provisions (Article 8)",
                      generic: false,
                      policyforge: true,
                    },
                    {
                      feature: "Data minimization for kids section",
                      generic: false,
                      policyforge: true,
                    },
                    {
                      feature: "Basic data collection disclosure",
                      generic: true,
                      policyforge: true,
                    },
                    {
                      feature: "Contact information section",
                      generic: true,
                      policyforge: true,
                    },
                    {
                      feature: "General GDPR/CCPA provisions",
                      generic: true,
                      policyforge: true,
                    },
                  ].map((row) => (
                    <tr
                      key={row.feature}
                      className="border-b border-white/5"
                    >
                      <td className="py-2 px-3 text-gray-300">
                        {row.feature}
                      </td>
                      <td className="py-2 px-3 text-center">
                        {row.generic ? (
                          <span className="text-green-400">&#10003;</span>
                        ) : (
                          <span className="text-red-400">&#10007;</span>
                        )}
                      </td>
                      <td className="py-2 px-3 text-center">
                        {row.policyforge ? (
                          <span className="text-green-400">&#10003;</span>
                        ) : (
                          <span className="text-red-400">&#10007;</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-semibold text-white mb-3">
              Cost Comparison
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-3 text-gray-400 font-medium">
                      Provider
                    </th>
                    <th className="text-left py-3 px-3 text-gray-400 font-medium">
                      Price
                    </th>
                    <th className="text-left py-3 px-3 text-gray-400 font-medium">
                      Notes
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPETITOR_PRICING.map((comp) => (
                    <tr
                      key={comp.name}
                      className={`border-b border-white/5 ${
                        comp.highlight
                          ? "bg-blue-500/5 border-blue-500/20"
                          : ""
                      }`}
                    >
                      <td
                        className={`py-3 px-3 font-medium ${
                          comp.highlight ? "text-blue-400" : "text-white"
                        }`}
                      >
                        {comp.name}
                        {comp.highlight && (
                          <span className="ml-2 text-xs bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full">
                            Best Value
                          </span>
                        )}
                      </td>
                      <td
                        className={`py-3 px-3 ${
                          comp.highlight
                            ? "text-green-400 font-bold"
                            : "text-gray-400"
                        }`}
                      >
                        {comp.price}
                      </td>
                      <td className="py-3 px-3 text-gray-400">{comp.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Main CTA */}
          <section className="p-8 bg-gradient-to-r from-red-500/10 to-blue-500/10 border border-red-500/20 rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-3">
              Generate Your COPPA-Compliant Privacy Policy Now
            </h2>
            <p className="text-gray-300 mb-2">
              PolicyForge generates privacy policies built for kids apps.
              Select your target age group, data collection practices, and
              parental consent method — get a policy that covers COPPA, app
              store kids category rules, GDPR children&apos;s provisions,
              and CCPA in under 2 minutes.
            </p>
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <div className="text-sm text-gray-400">
                <span className="text-green-400">&#10003;</span> COPPA
                compliant
              </div>
              <div className="text-sm text-gray-400">
                <span className="text-green-400">&#10003;</span> Parental
                consent clauses
              </div>
              <div className="text-sm text-gray-400">
                <span className="text-green-400">&#10003;</span> Apple Kids
                Category ready
              </div>
              <div className="text-sm text-gray-400">
                <span className="text-green-400">&#10003;</span> Google
                Families Policy ready
              </div>
              <div className="text-sm text-gray-400">
                <span className="text-green-400">&#10003;</span> GDPR
                children&apos;s provisions
              </div>
              <div className="text-sm text-gray-400">
                <span className="text-green-400">&#10003;</span> No
                behavioral ads disclosure
              </div>
            </div>
            <div className="flex flex-wrap gap-3 items-center">
              <Link
                href="https://policyforge.autonomous-claude.com/"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Generate Now — Free
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
              <span className="text-sm text-gray-500">
                Free tier available &middot; Pro from $4.99
              </span>
            </div>
          </section>

          {/* Scan CTA */}
          <section className="p-6 bg-white/5 border border-white/10 rounded-xl text-center">
            <h2 className="text-xl font-bold text-white mb-2">
              Already Have a Privacy Policy for Your Kids App?
            </h2>
            <p className="text-gray-400 text-sm mb-4">
              Scan your kids app&apos;s privacy policy URL to check COPPA
              compliance, parental consent disclosures, data minimization,
              GDPR children&apos;s provisions, and app store requirements.
            </p>
            <Link
              href="/check"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
            >
              Free Compliance Scan
            </Link>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">
              Frequently Asked Questions: COPPA Privacy Policies for Kids Apps
            </h2>
            <div className="space-y-4">
              {FAQ_ITEMS.map((faq) => (
                <div key={faq.q} className="p-4 bg-white/5 rounded-lg">
                  <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Resources */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Related Resources
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link
                href="/privacy-policy-for-game-app"
                className="p-4 bg-white/5 border border-white/10 rounded-lg hover:border-blue-500/30 transition-colors group"
              >
                <h3 className="font-semibold text-white text-sm group-hover:text-blue-400">
                  Privacy Policy for Game Apps
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  Game-specific privacy requirements including ad SDKs,
                  analytics, and COPPA for children&apos;s games
                </p>
              </Link>
              <Link
                href="/privacy-policy-for-mobile-app"
                className="p-4 bg-white/5 border border-white/10 rounded-lg hover:border-blue-500/30 transition-colors group"
              >
                <h3 className="font-semibold text-white text-sm group-hover:text-blue-400">
                  Privacy Policy for Mobile Apps
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  General mobile app privacy requirements for iOS and Android
                </p>
              </Link>
              <Link
                href="/privacy-policy-for-app-store"
                className="p-4 bg-white/5 border border-white/10 rounded-lg hover:border-blue-500/30 transition-colors group"
              >
                <h3 className="font-semibold text-white text-sm group-hover:text-blue-400">
                  Privacy Policy for App Store
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  Apple App Store and Google Play privacy policy requirements
                </p>
              </Link>
              <Link
                href="/gdpr-privacy-policy-generator"
                className="p-4 bg-white/5 border border-white/10 rounded-lg hover:border-blue-500/30 transition-colors group"
              >
                <h3 className="font-semibold text-white text-sm group-hover:text-blue-400">
                  GDPR Privacy Policy Generator
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  EU General Data Protection Regulation compliance including
                  Article 8 children&apos;s provisions
                </p>
              </Link>
              <Link
                href="/check"
                className="p-4 bg-white/5 border border-white/10 rounded-lg hover:border-blue-500/30 transition-colors group"
              >
                <h3 className="font-semibold text-white text-sm group-hover:text-blue-400">
                  Free Compliance Checker
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  Scan any privacy policy URL for COPPA, GDPR, and app store
                  compliance gaps
                </p>
              </Link>
              <Link
                href="/tos"
                className="p-4 bg-white/5 border border-white/10 rounded-lg hover:border-blue-500/30 transition-colors group"
              >
                <h3 className="font-semibold text-white text-sm group-hover:text-blue-400">
                  Terms of Service Generator
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  Generate Terms of Service for your kids app alongside your
                  privacy policy
                </p>
              </Link>
            </div>
          </section>
        </div>
      </main>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQ_ITEMS.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }),
        }}
      />

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
          informational purposes. Consult a qualified attorney for
          jurisdiction-specific legal advice, especially regarding COPPA
          compliance for children&apos;s applications.
        </p>
      </footer>
    </div>
  );
}
