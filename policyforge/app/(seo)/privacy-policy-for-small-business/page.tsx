import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Privacy Policy Generator for Small Business | GDPR & CCPA - PolicyForge",
  description:
    "Generate a free, legally compliant privacy policy for your small business website. Covers GDPR, CCPA, PIPEDA, cookies, and data collection. No lawyer needed. Ready in minutes.",
  keywords:
    "privacy policy for small business, small business privacy policy generator, free privacy policy small business, do I need a privacy policy, small business website privacy policy, privacy policy template small business, GDPR small business, CCPA small business, privacy policy requirements",
};

export default function SmallBusinessPage() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#ededed]">
      <header className="border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">P</div>
            <span className="text-white font-semibold text-lg">PolicyForge</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link href="/check" className="text-sm text-gray-400 hover:text-white transition-colors">Check Compliance</Link>
            <Link href="/tos" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/" className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity">
              Generate Policy
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Free Privacy Policy for Small Business
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Every small business that operates online needs a privacy policy. Generate yours in minutes &mdash; free, legally compliant with GDPR, CCPA, and other major regulations. No lawyer required.
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity text-lg"
          >
            Generate Your Privacy Policy Now
          </Link>
          <p className="text-gray-500 text-sm mt-3">Free basic policy. Pro plans from $4.99 for full compliance.</p>
        </div>

        {/* Why Small Businesses Need a Privacy Policy */}
        <section className="mb-14">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Does Your Small Business Need a Privacy Policy?</h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              If you run a small business with any kind of online presence &mdash; a website, an e-commerce store, a mobile app, or even just a Facebook page &mdash; you almost certainly need a privacy policy. This is not optional. It is a legal requirement in most countries and a practical necessity for building trust with your customers.
            </p>
            <p>
              A privacy policy is a legal document that explains what personal data your business collects from visitors and customers, how you use that data, who you share it with, and what rights individuals have over their information. Even if you think your website &quot;doesn&apos;t collect data,&quot; it almost certainly does. If you use Google Analytics, embed YouTube videos, accept contact form submissions, process payments through Stripe or PayPal, or use cookies of any kind, you are collecting personal information.
            </p>
            <p>
              Beyond the legal requirement, a visible and transparent privacy policy signals professionalism. Customers are increasingly aware of their data rights, and a missing privacy policy is a red flag that can cost you sales. Payment processors like Stripe and PayPal require merchants to have one. Advertising platforms like Google Ads and Facebook Ads will reject your account without one. Apple and Google&apos;s app stores mandate a privacy policy for every listed app.
            </p>
            <p>
              The consequences of operating without a privacy policy range from platform bans and rejected ad accounts to regulatory fines that can reach into the millions. For small businesses operating on thin margins, even a modest fine can be devastating.
            </p>
          </div>
        </section>

        {/* What Laws Apply */}
        <section className="mb-14">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What Privacy Laws Apply to Small Businesses?</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Privacy legislation has expanded dramatically in recent years. Even if your small business is based in a single city, you may be subject to privacy laws from multiple jurisdictions if your website is accessible globally. Here are the major regulations you need to know about:
          </p>
          <div className="space-y-6">
            <div className="p-5 bg-white/5 rounded-xl border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-2">GDPR &mdash; General Data Protection Regulation (EU/EEA)</h3>
              <p className="text-gray-400 leading-relaxed">
                The GDPR applies to any business that processes personal data of individuals located in the European Union, regardless of where the business is based. If a single visitor from France, Germany, or any other EU country lands on your website, the GDPR applies to you. It requires explicit consent for data collection, a clear explanation of data processing purposes, the right to access and delete personal data, and mandatory breach notification within 72 hours. Fines can reach 4% of annual global turnover or 20 million EUR, whichever is higher. Small businesses are not exempt &mdash; though enforcement typically starts with warnings for first-time violations, the risk is real.
              </p>
            </div>
            <div className="p-5 bg-white/5 rounded-xl border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-2">CCPA / CPRA &mdash; California Consumer Privacy Act</h3>
              <p className="text-gray-400 leading-relaxed">
                The CCPA, as amended by the CPRA, applies to for-profit businesses that collect personal information from California residents and meet any of the following: annual gross revenue exceeding $25 million, buying or selling personal information of 100,000+ consumers, or deriving 50% or more of revenue from selling personal data. Even if your business falls below these thresholds, having a compliant privacy policy is considered best practice and may be required under CalOPPA (the California Online Privacy Protection Act), which has no revenue threshold. Fines can reach $7,500 per intentional violation.
              </p>
            </div>
            <div className="p-5 bg-white/5 rounded-xl border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-2">PIPEDA &mdash; Personal Information Protection and Electronic Documents Act (Canada)</h3>
              <p className="text-gray-400 leading-relaxed">
                Canadian small businesses that collect, use, or disclose personal information in the course of commercial activity must comply with PIPEDA (or equivalent provincial legislation in Alberta, British Columbia, and Quebec). PIPEDA requires meaningful consent, limits collection to what is necessary, and gives individuals the right to access their data. Quebec&apos;s Law 25, which came into full effect in 2024, adds stricter requirements including privacy impact assessments and breach reporting.
              </p>
            </div>
            <div className="p-5 bg-white/5 rounded-xl border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-2">U.S. State Privacy Laws</h3>
              <p className="text-gray-400 leading-relaxed">
                Beyond California, a growing number of U.S. states have enacted comprehensive privacy laws. Virginia (VCDPA), Colorado (CPA), Connecticut (CTDPA), Utah (UCPA), Texas (TDPSA), Oregon, Montana, and others now have active privacy legislation. Each has different thresholds and requirements, but the trend is clear: privacy regulation is expanding across the United States. If you sell to customers nationwide, you need a privacy policy that addresses these laws.
              </p>
            </div>
            <div className="p-5 bg-white/5 rounded-xl border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-2">Platform Requirements</h3>
              <p className="text-gray-400 leading-relaxed">
                Even where no government regulation applies, major platforms impose their own privacy policy requirements. Google (Analytics, Ads, Play Store), Apple (App Store), Meta (Facebook, Instagram Ads), Amazon, Shopify, and Stripe all require merchants and developers to maintain a publicly accessible privacy policy. Failing to have one can result in account suspension, rejected ad campaigns, or removal from app stores.
              </p>
            </div>
          </div>
        </section>

        {/* What to Include */}
        <section className="mb-14">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What Should a Small Business Privacy Policy Include?</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            A comprehensive privacy policy for a small business should cover all of the following areas. Missing any of these sections can create compliance gaps that expose your business to liability.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Types of data collected", desc: "List every category of personal information you collect: names, email addresses, phone numbers, mailing addresses, IP addresses, device identifiers, payment information, browsing behavior, and any other data points." },
              { title: "Purpose of collection", desc: "Explain clearly why you collect each type of data. Common purposes include order fulfillment, customer support, email marketing, website analytics, fraud prevention, and legal compliance." },
              { title: "Legal basis for processing", desc: "Under GDPR, you must state the legal basis for each processing activity: consent, contractual necessity, legal obligation, legitimate interest, or vital interest. Even outside the EU, stating this builds trust." },
              { title: "Cookie and tracking disclosure", desc: "Detail every cookie and tracking technology on your site: Google Analytics, Facebook Pixel, marketing cookies, session cookies, and third-party embeds. Include how users can manage cookie preferences." },
              { title: "Third-party data sharing", desc: "Name the categories of third parties you share data with: payment processors (Stripe, PayPal), email services (Mailchimp, Sendgrid), analytics (Google), advertising platforms, hosting providers, and any others." },
              { title: "User rights and how to exercise them", desc: "Explain the rights users have over their data: access, correction, deletion, portability, and the right to withdraw consent. Provide clear instructions for how to submit requests." },
              { title: "Data retention periods", desc: "State how long you keep different categories of data. For example, transaction records may be kept for 7 years for tax purposes, while marketing preferences may be deleted upon unsubscription." },
              { title: "Data security measures", desc: "Describe the technical and organizational measures you use to protect data: SSL/TLS encryption, secure payment processing, access controls, regular backups, and employee training." },
              { title: "Children&apos;s privacy (COPPA)", desc: "If your business could attract users under 13, you must address COPPA compliance. State whether you knowingly collect data from children and what measures you take to prevent it." },
              { title: "Contact information", desc: "Provide a dedicated email address or contact method for privacy inquiries. GDPR requires naming a Data Protection Officer (DPO) if applicable, though most small businesses are exempt from this requirement." },
            ].map((item) => (
              <div key={item.title} className="p-5 bg-white/5 rounded-xl border border-white/10">
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Step by Step */}
        <section className="mb-14">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Privacy Policy for Small Business: Step by Step</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Creating a privacy policy does not have to be overwhelming. Follow these steps to build a policy that protects your business and satisfies regulatory requirements.
          </p>
          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Audit your data collection practices",
                desc: "Before writing a single word of your privacy policy, you need to understand exactly what data your business collects and how. Walk through every touchpoint: your website forms, checkout process, email signup, customer support channels, analytics tools, and any third-party integrations. Make a complete list of every piece of personal information that flows through your business. This audit is the foundation of an accurate privacy policy."
              },
              {
                step: "2",
                title: "Identify your third-party services",
                desc: "List every third-party service that receives or processes your users' data. This includes your hosting provider, payment processor, email marketing platform, analytics tools, advertising networks, customer support software, and social media plugins. Each of these services needs to be disclosed in your privacy policy, and you should verify that each has its own compliant privacy practices."
              },
              {
                step: "3",
                title: "Determine which laws apply to your business",
                desc: "Based on where your customers are located, identify which privacy regulations apply. If you have any international web traffic (and you almost certainly do), assume GDPR applies. If you have U.S. customers, check whether CCPA and state-level laws apply. Use our free compliance checker to scan your current setup and identify gaps."
              },
              {
                step: "4",
                title: "Generate your privacy policy",
                desc: "Use PolicyForge to generate a customized privacy policy based on your specific data practices. Our generator asks you targeted questions about your business type, data collection methods, third-party services, and target audience, then produces a policy tailored to your situation. The free tier covers essential disclosures, while the Pro tier ($4.99) adds full GDPR and CCPA compliance sections, cookie policy language, and data processing agreements."
              },
              {
                step: "5",
                title: "Review and customize",
                desc: "Read through your generated policy carefully. While PolicyForge produces comprehensive policies, every business is unique. Add any specific data practices that are particular to your operation. Remove sections that don't apply. Make sure the language accurately reflects what your business actually does with data, not what you think sounds good."
              },
              {
                step: "6",
                title: "Publish and link prominently",
                desc: "Add your privacy policy to a dedicated page on your website. Link to it from your website footer (visible on every page), your signup and checkout forms, your email subscription forms, and your app store listings if applicable. The policy must be easy for any visitor to find without searching."
              },
              {
                step: "7",
                title: "Set a review schedule",
                desc: "Privacy policies are not set-and-forget documents. Schedule a review at least once per year, and update immediately whenever you add new data collection tools, change your business model, expand to new markets, or when new regulations take effect. Always notify users of material changes."
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 p-5 bg-white/5 rounded-xl border border-white/10">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-400 mb-3">Not sure if your current policy covers everything? Run a free compliance check.</p>
            <Link href="/check" className="inline-block px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors">
              Check Your Privacy Policy
            </Link>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-14">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Common Privacy Policy Mistakes Small Businesses Make</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Many small business owners treat their privacy policy as an afterthought &mdash; a box to check rather than a meaningful document. Here are the most common mistakes that can leave your business exposed to fines, lawsuits, and lost customer trust.
          </p>
          <div className="space-y-5">
            {[
              {
                mistake: "Copying another company's privacy policy",
                explanation: "This is the single most common mistake. A privacy policy must accurately describe your specific data practices. Copying a competitor's policy means your policy likely contains inaccuracies about what data you collect and how you use it. Ironically, an inaccurate privacy policy can create more legal liability than having no policy at all, because you are making false representations to your users."
              },
              {
                mistake: "Using vague or overly broad language",
                explanation: "Phrases like 'we may collect various types of information' or 'we use your data to improve our services' are too vague to satisfy GDPR or CCPA requirements. Regulators expect specific, concrete disclosures. Name the exact types of data you collect and the exact purposes you use them for."
              },
              {
                mistake: "Failing to disclose third-party data sharing",
                explanation: "If you use Google Analytics, you are sharing data with Google. If you process payments through Stripe, you are sharing data with Stripe. Many small businesses forget to list these third-party relationships, which is a direct violation of most privacy laws and can trigger enforcement action."
              },
              {
                mistake: "Not updating the policy when things change",
                explanation: "Adding a new email marketing tool, switching payment processors, or expanding into a new market all require updates to your privacy policy. Many businesses create a policy once and never touch it again, leading to a document that no longer reflects reality."
              },
              {
                mistake: "Hiding the privacy policy",
                explanation: "A privacy policy that requires three clicks to find, is buried in a terms page, or only appears during checkout does not meet accessibility requirements. It should be linked in your website footer and visible from every page. CalOPPA specifically requires the link to contain the word 'privacy.'"
              },
              {
                mistake: "Ignoring cookie consent requirements",
                explanation: "Under GDPR, you must obtain informed consent before setting non-essential cookies. Many small businesses load Google Analytics, Facebook Pixel, and advertising cookies before any consent is given, which is a clear violation. A proper cookie consent banner is not optional for businesses with EU visitors."
              },
            ].map((item) => (
              <div key={item.mistake} className="p-5 bg-white/5 rounded-xl border border-white/10">
                <h3 className="font-semibold text-white mb-2">{item.mistake}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.explanation}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How to Display Your Privacy Policy */}
        <section className="mb-14">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How to Display Your Privacy Policy</h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              Where and how you display your privacy policy matters almost as much as what it says. Regulators and courts look at whether your policy was &quot;conspicuous&quot; and &quot;accessible&quot; to users. Here are the best practices for displaying your privacy policy effectively:
            </p>
            <ul className="space-y-3 text-gray-400">
              <li className="flex gap-3">
                <span className="text-blue-400 font-bold mt-0.5">&#8226;</span>
                <span><strong className="text-white">Website footer:</strong> Include a clearly labeled &quot;Privacy Policy&quot; link in your site-wide footer. This is the most common and expected location. CalOPPA requires the link to use the word &quot;privacy.&quot;</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 font-bold mt-0.5">&#8226;</span>
                <span><strong className="text-white">Signup and registration forms:</strong> Place a link to your privacy policy directly on any form where users provide personal information. A checkbox with &quot;I have read and agree to the Privacy Policy&quot; is required under GDPR.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 font-bold mt-0.5">&#8226;</span>
                <span><strong className="text-white">Checkout pages:</strong> Display or link your privacy policy during the purchase process, especially if you collect shipping addresses, phone numbers, or other personal details beyond payment information.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 font-bold mt-0.5">&#8226;</span>
                <span><strong className="text-white">Email subscription forms:</strong> Any email opt-in should include a privacy policy link. This is required by GDPR and considered best practice under CAN-SPAM and CASL.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 font-bold mt-0.5">&#8226;</span>
                <span><strong className="text-white">Mobile apps:</strong> Link your privacy policy in the app store listing and within the app settings. Both Apple and Google require this for all published apps.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 font-bold mt-0.5">&#8226;</span>
                <span><strong className="text-white">Cookie consent banner:</strong> Your cookie banner should link directly to your privacy policy or a dedicated cookie policy page that explains what cookies you use and why.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* When to Update */}
        <section className="mb-14">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">When to Update Your Privacy Policy</h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              A privacy policy is a living document. Treating it as a one-time task is one of the most common compliance failures among small businesses. You should review and update your privacy policy whenever any of the following occur:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {[
                { trigger: "New tools or services", detail: "Adding Google Analytics, switching to a new email platform, integrating a chatbot, or adding social login all change your data practices and must be reflected in your policy." },
                { trigger: "New data collection", detail: "Starting to collect phone numbers, adding a survey, launching a loyalty program, or enabling user accounts all introduce new personal data that needs disclosure." },
                { trigger: "Business model changes", detail: "Starting to sell products online, offering subscriptions, launching a mobile app, or expanding into B2B services can change your data processing significantly." },
                { trigger: "Geographic expansion", detail: "If you start serving customers in the EU, Canada, or new U.S. states with privacy laws, your policy must be updated to address those jurisdictions." },
                { trigger: "Regulatory changes", detail: "When new privacy laws take effect or existing laws are amended, your policy needs to reflect the updated requirements. State privacy laws in the U.S. are changing rapidly." },
                { trigger: "Annual review", detail: "Even if nothing has obviously changed, schedule a comprehensive review at least once per year. It is common to discover undocumented data practices during an annual audit." },
              ].map((item) => (
                <div key={item.trigger} className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <h3 className="font-semibold text-white text-sm mb-1">{item.trigger}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-4">
              Whenever you make a material change to your privacy policy, notify your users. This can be done through a website banner, an email notification, or a prominent notice on your homepage. GDPR requires that users be informed of significant changes, and several U.S. state laws have similar requirements.
            </p>
          </div>
        </section>

        {/* Common Small Business Types */}
        <section className="mb-14">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Privacy Policies for Every Type of Small Business</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            PolicyForge generates tailored privacy policies for all types of small businesses. Whether you run a local shop with an online presence or a fully digital operation, our generator adapts to your specific needs.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              "E-commerce stores",
              "Consulting firms",
              "Restaurants & cafes",
              "Freelancers & contractors",
              "Local service businesses",
              "SaaS products",
              "Blogs & content sites",
              "Mobile apps",
              "Professional services",
              "Health & wellness",
              "Real estate agencies",
              "Nonprofits & charities",
            ].map((type) => (
              <div key={type} className="p-3 bg-white/5 rounded-lg border border-white/10 text-sm text-gray-300 text-center">{type}</div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-14">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="p-5 bg-white/5 rounded-xl border border-white/10">
              <h3 className="font-semibold text-white text-lg mb-2">How much does a privacy policy cost for a small business?</h3>
              <p className="text-gray-400 leading-relaxed">
                Hiring a lawyer to draft a custom privacy policy typically costs between $500 and $3,000, depending on the complexity of your data practices and the jurisdictions you need to cover. Online privacy policy generators like PolicyForge offer a dramatically more affordable alternative. You can generate a basic privacy policy for free, and our Pro plan at $4.99 includes full GDPR and CCPA compliance sections, cookie policy language, and customization options. For most small businesses, a well-crafted generated policy is sufficient. If your business handles sensitive data (health records, children&apos;s information, financial data), consider having a lawyer review your generated policy as an added safeguard.
              </p>
            </div>
            <div className="p-5 bg-white/5 rounded-xl border border-white/10">
              <h3 className="font-semibold text-white text-lg mb-2">Do I need a privacy policy if I only have a simple website with a contact form?</h3>
              <p className="text-gray-400 leading-relaxed">
                Yes. A contact form collects names and email addresses, which are personal data under GDPR and most other privacy laws. If your website also uses analytics (Google Analytics, for example), it collects IP addresses, device information, and browsing behavior. Even a &quot;simple&quot; website typically collects more personal data than the owner realizes. Under CalOPPA, any commercial website that collects personally identifiable information from California residents must have a privacy policy &mdash; and with no minimum traffic threshold, this applies to virtually every business website.
              </p>
            </div>
            <div className="p-5 bg-white/5 rounded-xl border border-white/10">
              <h3 className="font-semibold text-white text-lg mb-2">Can I use a free privacy policy template, or do I need a custom one?</h3>
              <p className="text-gray-400 leading-relaxed">
                A generic template is better than nothing, but it carries risks. Templates often include clauses that do not apply to your business or, worse, omit disclosures that do apply. The safest approach is a generated policy that is customized to your specific data practices. PolicyForge asks you targeted questions about your business and produces a policy that reflects what you actually do, rather than a one-size-fits-all template. You can also use our <Link href="/check" className="text-blue-400 hover:text-blue-300 underline">compliance checker</Link> to evaluate an existing policy and identify gaps.
              </p>
            </div>
            <div className="p-5 bg-white/5 rounded-xl border border-white/10">
              <h3 className="font-semibold text-white text-lg mb-2">What happens if my small business doesn&apos;t have a privacy policy?</h3>
              <p className="text-gray-400 leading-relaxed">
                The consequences vary by jurisdiction but can be severe. Under GDPR, fines can reach 20 million EUR or 4% of global annual turnover. Under CCPA, fines are up to $7,500 per intentional violation. Under CalOPPA, you have 30 days to comply after being notified of a violation before fines of up to $2,500 per violation kick in. Beyond regulatory fines, operating without a privacy policy can result in your Google Ads account being suspended, your app being removed from app stores, your Shopify or Stripe account being flagged, and a general erosion of customer trust. In the event of a data breach, not having a privacy policy can also increase your liability exposure significantly.
              </p>
            </div>
            <div className="p-5 bg-white/5 rounded-xl border border-white/10">
              <h3 className="font-semibold text-white text-lg mb-2">Do I also need a terms of service for my small business?</h3>
              <p className="text-gray-400 leading-relaxed">
                While a privacy policy is legally required in most situations, a terms of service (also called terms and conditions or terms of use) is technically optional but strongly recommended. A terms of service protects your business by defining the rules of engagement with your website or product: it limits your liability, establishes dispute resolution procedures, protects your intellectual property, and sets acceptable use policies. PolicyForge also offers a <Link href="/tos" className="text-blue-400 hover:text-blue-300 underline">terms of service generator</Link> so you can create both documents in one session. Together, a privacy policy and terms of service form the legal foundation of your online business presence.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <div className="p-8 md:p-10 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl text-center">
          <h3 className="text-2xl font-bold text-white mb-3">Protect Your Small Business Today</h3>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">
            Generate a legally compliant privacy policy in minutes. Free for basic policies. Pro from $4.99 for full GDPR, CCPA, and multi-jurisdiction coverage.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/" className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity">
              Generate Privacy Policy
            </Link>
            <Link href="/check" className="px-8 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors">
              Check Existing Policy
            </Link>
            <Link href="/tos" className="px-8 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors">
              Generate Terms of Service
            </Link>
          </div>
        </div>
      </main>

      <footer className="border-t border-white/10 mt-16 py-8 text-center text-sm text-gray-500">
        <p>PolicyForge &mdash; Free privacy policy generator for small businesses, freelancers, and startups</p>
      </footer>
    </div>
  );
}
