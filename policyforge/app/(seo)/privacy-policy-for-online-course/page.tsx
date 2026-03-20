import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Privacy Policy for Online Course | Free Generator & Template - PolicyForge",
  description:
    "Create a legally compliant privacy policy for your online course platform. Covers student data, payment processing, LMS integrations (Teachable, Thinkific, Kajabi, Udemy), GDPR, CCPA, and FERPA requirements.",
  keywords:
    "privacy policy for online course, online course privacy policy template, teachable privacy policy, thinkific privacy policy, kajabi privacy policy, course creator privacy policy, LMS privacy policy, online education privacy, FERPA compliance online course, student data privacy policy",
  openGraph: {
    title: "Free Privacy Policy for Online Courses - PolicyForge",
    description:
      "Generate a GDPR & CCPA compliant privacy policy for your online course. Covers student data, payment processing, LMS platforms, and educational privacy regulations.",
    type: "website",
  },
};

export default function PrivacyPolicyForOnlineCourse() {
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
          Privacy Policy for Your Online Course
        </h1>

        <p className="text-gray-400 text-lg mb-8">
          Online course creators collect sensitive student data from the moment
          someone visits your sales page through enrollment, lesson completion,
          quizzes, and certificate issuance. Under GDPR, CCPA, and potentially
          FERPA, you are legally required to disclose how you collect, use,
          store, and protect this data. Whether you sell courses on Teachable,
          Thinkific, Kajabi, Podia, Udemy, or your own platform, a privacy
          policy is not optional &mdash; it is a legal necessity.
        </p>

        <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-blue-800/40 rounded-xl p-6 mb-10">
          <h3 className="text-lg font-semibold text-white mb-2">
            Generate Your Online Course Privacy Policy in 2 Minutes
          </h3>
          <p className="text-gray-300 text-sm mb-4">
            PolicyForge creates customized privacy policies for online course
            creators. Covers student enrollment data, payment processing,
            learning management systems, email marketing, and full GDPR/CCPA
            compliance &mdash; all for $4.99 instead of $500+ for a lawyer.
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
              Why Online Course Creators Need a Privacy Policy
            </h2>
            <p className="mb-4">
              If you sell online courses, you are collecting personal data at
              every stage of the student journey. When a potential student visits
              your sales page, analytics tools record their IP address, browser
              type, device, and browsing behavior. When they sign up for a free
              lead magnet or webinar, you collect their name and email. When they
              enroll in a paid course, you process their payment information.
              During the course, you track lesson completion, quiz scores,
              assignment submissions, and discussion forum posts. Every one of
              these data points is regulated under modern privacy law.
            </p>
            <p className="mb-4">
              The GDPR applies to your online courses if even one student is in
              the European Union, regardless of where you are based. The CCPA
              applies if you have California students and meet revenue or
              data-volume thresholds. If your course involves students under 13,
              COPPA applies. If you are affiliated with an educational
              institution in the US, FERPA may apply to student records. The
              regulatory landscape for online education is complex and
              overlapping.
            </p>
            <p className="mb-4">
              Beyond legal requirements, major course platforms require sellers
              to have privacy policies. Teachable, Thinkific, and Kajabi all
              require creators to comply with applicable data protection laws.
              Payment processors like Stripe and PayPal require a visible
              privacy policy. Email marketing platforms like ConvertKit,
              Mailchimp, and ActiveCampaign require consent documentation.
              Without a privacy policy, you risk losing access to the tools your
              business depends on.
            </p>
            <p>
              GDPR fines can reach &euro;20 million or 4% of global annual
              revenue. CCPA violations carry penalties of $2,500 per
              unintentional violation and $7,500 per intentional violation. Even
              individual course creators have received compliance notices. A
              proper privacy policy costs a fraction of even a single fine.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              What Data Do Online Courses Collect?
            </h2>
            <p className="mb-4">
              Most course creators underestimate the volume and sensitivity of
              data they collect. It extends far beyond the enrollment form.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-900/50 rounded-xl p-5">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Student Identity &amp; Account Data
                </h3>
                <p className="text-sm text-gray-400 mb-3">
                  Collected at enrollment and account creation.
                </p>
                <ul className="text-sm text-gray-300 space-y-1.5 list-disc list-inside">
                  <li>Full name, email address, and profile photo</li>
                  <li>Username and password (hashed)</li>
                  <li>Billing address and country of residence</li>
                  <li>Phone number (if collected for SMS notifications)</li>
                  <li>Professional background or bio (if profile fields exist)</li>
                  <li>Date of birth or age (if age verification is required)</li>
                </ul>
              </div>

              <div className="bg-gray-900/50 rounded-xl p-5">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Learning &amp; Progress Data
                </h3>
                <p className="text-sm text-gray-400 mb-3">
                  Tracked automatically by the LMS platform.
                </p>
                <ul className="text-sm text-gray-300 space-y-1.5 list-disc list-inside">
                  <li>Course enrollment dates and completion status</li>
                  <li>Lesson views, time spent on each lesson, and video watch percentage</li>
                  <li>Quiz and assessment scores, attempts, and answers</li>
                  <li>Assignment submissions (text, files, video recordings)</li>
                  <li>Discussion forum posts and comments</li>
                  <li>Certificate issuance records</li>
                  <li>Course ratings and reviews</li>
                </ul>
              </div>

              <div className="bg-gray-900/50 rounded-xl p-5">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Payment &amp; Transaction Data
                </h3>
                <p className="text-sm text-gray-400 mb-3">
                  Processed through the platform or external payment gateways.
                </p>
                <ul className="text-sm text-gray-300 space-y-1.5 list-disc list-inside">
                  <li>Credit/debit card details (tokenized by payment processor)</li>
                  <li>PayPal, Apple Pay, or Google Pay identifiers</li>
                  <li>Transaction amounts, dates, and currency</li>
                  <li>Subscription status and renewal dates (for membership sites)</li>
                  <li>Refund and dispute records</li>
                  <li>Coupon and discount code usage</li>
                </ul>
              </div>

              <div className="bg-gray-900/50 rounded-xl p-5">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Marketing &amp; Analytics Data
                </h3>
                <p className="text-sm text-gray-400 mb-3">
                  Collected through marketing funnels and analytics tools.
                </p>
                <ul className="text-sm text-gray-300 space-y-1.5 list-disc list-inside">
                  <li>Email opt-in status and consent records</li>
                  <li>Webinar registration and attendance data</li>
                  <li>Lead magnet download history</li>
                  <li>Email open rates, click-throughs, and engagement</li>
                  <li>Facebook Pixel, Google Ads, and TikTok tracking data</li>
                  <li>UTM parameters and referral sources</li>
                  <li>Sales page visit history and funnel progression</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Platform-Specific Privacy Requirements
            </h2>
            <p className="mb-4">
              Each course platform handles data differently. Your privacy policy
              must reflect the specific platform you use.
            </p>

            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-white">Teachable</h4>
                <p className="text-sm text-gray-400">
                  Teachable acts as your data processor. They store student data
                  on AWS servers (primarily US). Teachable collects student
                  browsing behavior, quiz responses, and video watch data on your
                  behalf. You need your own privacy policy as the data
                  controller. Teachable provides a DPA for GDPR compliance. You
                  must disclose Teachable as a processor and explain what data
                  they access.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-white">Thinkific</h4>
                <p className="text-sm text-gray-400">
                  Thinkific processes student data on your behalf and provides
                  GDPR-compliant data processing agreements. Thinkific stores
                  data in Canada and the US. Their platform tracks course
                  progress, quiz scores, and certificate completion. As the site
                  owner, you must have your own privacy policy that discloses
                  Thinkific&apos;s role and your specific data practices.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-white">Kajabi</h4>
                <p className="text-sm text-gray-400">
                  Kajabi is an all-in-one platform that handles courses, email
                  marketing, sales funnels, and community features. This means
                  Kajabi processes an unusually broad set of student data:
                  course progress, email engagement, purchase history, community
                  posts, and pipeline stage. Your privacy policy must cover all
                  of these data categories.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-white">Udemy / Skillshare / Coursera</h4>
                <p className="text-sm text-gray-400">
                  If you sell on marketplace platforms, the platform is the
                  primary data controller for student data. However, if you also
                  collect student emails for your own list, run your own website,
                  or use external marketing tools, you need your own privacy
                  policy for that data. Many Udemy instructors have separate
                  websites that require their own privacy policy.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              GDPR Requirements for Online Course Creators
            </h2>
            <p className="mb-4">
              If any of your students are in the EU, GDPR applies to your
              online course business. Here are the specific requirements:
            </p>

            <div className="space-y-4">
              <div className="bg-gray-900/50 rounded-xl p-5">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Lawful Basis for Processing Student Data
                </h3>
                <div className="space-y-2 text-sm">
                  {[
                    { basis: "Contract", use: "Processing enrollment, delivering course content, issuing certificates" },
                    { basis: "Consent", use: "Email marketing, newsletter subscriptions, webinar follow-ups" },
                    { basis: "Legitimate Interest", use: "Course analytics, fraud prevention, improving course content" },
                  ].map((item) => (
                    <div key={item.basis} className="flex gap-3">
                      <span className="text-blue-400 font-semibold min-w-[140px]">{item.basis}</span>
                      <span className="text-gray-400">{item.use}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-900/50 rounded-xl p-5">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Student Rights You Must Support
                </h3>
                <div className="space-y-2 text-sm">
                  {[
                    "Right to access all personal data you hold about them",
                    "Right to rectify inaccurate data (e.g., correct their name or email)",
                    "Right to erasure (delete their account and course data)",
                    "Right to restrict processing (pause marketing while keeping enrollment)",
                    "Right to data portability (export their data in a common format)",
                    "Right to object to processing based on legitimate interest",
                    "Right to withdraw consent for marketing at any time",
                  ].map((right) => (
                    <div key={right} className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">&#x2713;</span>
                      <span className="text-gray-300">{right}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="mt-4">
              Note: when a student requests data deletion, you must delete their
              data from your course platform, your email marketing tool, your
              analytics, and any other system that stores their information. A
              deletion request to one system must propagate to all systems.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Common Third-Party Services in Online Course Businesses
            </h2>
            <p className="mb-4">
              Your privacy policy must disclose every third-party service that
              processes student data. Online course businesses typically use
              more third-party tools than they realize:
            </p>

            <div className="bg-gray-900/50 rounded-xl p-6">
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <span className="text-blue-400 font-semibold">ConvertKit / Mailchimp / ActiveCampaign</span>
                  <p className="text-gray-400 mt-1">Email marketing: stores student emails, names, tags, sequences, and engagement data.</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <span className="text-blue-400 font-semibold">Stripe / PayPal</span>
                  <p className="text-gray-400 mt-1">Payment processing: handles credit card data, transaction records, and refund processing.</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <span className="text-blue-400 font-semibold">Zoom / Vimeo / Wistia</span>
                  <p className="text-gray-400 mt-1">Video hosting/live sessions: collects viewer data, watch duration, IP addresses, and attendance records.</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <span className="text-blue-400 font-semibold">Google Analytics / Hotjar</span>
                  <p className="text-gray-400 mt-1">Analytics: tracks page views, session behavior, demographics, and conversion funnels.</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <span className="text-blue-400 font-semibold">Meta Pixel / Google Ads</span>
                  <p className="text-gray-400 mt-1">Advertising: tracks conversions, builds retargeting audiences, and creates lookalike audiences from student data.</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <span className="text-blue-400 font-semibold">Slack / Circle / Discord</span>
                  <p className="text-gray-400 mt-1">Community platforms: stores student messages, profiles, files shared, and engagement history.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              PolicyForge vs. Generic Templates
            </h2>

            <div className="bg-gray-900/50 rounded-xl p-6">
              <div className="space-y-3 text-sm">
                <div className="grid grid-cols-3 gap-4 pb-3 border-b border-white/10 font-semibold text-white">
                  <span>Feature</span>
                  <span className="text-center">Free Templates</span>
                  <span className="text-center text-blue-400">PolicyForge</span>
                </div>
                {[
                  { feature: "Cost", template: "Free (but generic)", pf: "$4.99 - $12.99" },
                  { feature: "Online course-specific", template: "No", pf: "Yes" },
                  { feature: "LMS platform coverage", template: "No", pf: "Teachable, Thinkific, Kajabi" },
                  { feature: "Third-party service disclosures", template: "Generic list", pf: "Specific to your tools" },
                  { feature: "GDPR + CCPA compliance", template: "Partial", pf: "Full compliance" },
                  { feature: "Student data rights section", template: "Rarely included", pf: "Included" },
                  { feature: "Updates when services change", template: "Start over", pf: "Regenerate instantly" },
                ].map((row) => (
                  <div
                    key={row.feature}
                    className="grid grid-cols-3 gap-4 py-2 border-b border-white/5"
                  >
                    <span className="text-gray-300">{row.feature}</span>
                    <span className="text-center text-gray-400">{row.template}</span>
                    <span className="text-center text-blue-400">{row.pf}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-800/30 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-4 text-center">
              Create Your Online Course Privacy Policy Now
            </h2>
            <p className="text-gray-300 text-center mb-6">
              PolicyForge generates customized privacy policies for online
              course creators. Covers student data, payment processing, LMS
              platforms, email marketing tools, and full GDPR/CCPA compliance.
              Done in under 2 minutes for $4.99 &mdash; not $500.
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
                  Do I need a privacy policy if I only sell on Teachable or Udemy?
                </h3>
                <p>
                  If you only sell on a marketplace like Udemy, the platform&apos;s
                  privacy policy covers most student data. However, if you also
                  collect emails (lead magnets, webinar signups), have your own
                  website, run ads, or use external analytics, you need your own
                  privacy policy for that data. Most course creators use multiple
                  tools beyond the platform itself.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Does FERPA apply to my online courses?
                </h3>
                <p>
                  FERPA (Family Educational Rights and Privacy Act) applies to
                  educational institutions that receive federal funding.
                  Independent course creators typically are not subject to FERPA.
                  However, if your course is offered through or accredited by a
                  US educational institution, FERPA may apply to student records.
                  When in doubt, include FERPA-aligned protections in your privacy
                  policy as a best practice.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Can I use student quiz scores and progress data for marketing?
                </h3>
                <p>
                  Under GDPR, using learning data for marketing requires explicit
                  consent separate from course enrollment. The data was collected
                  for educational purposes (contractual basis) and repurposing it
                  for marketing is a different purpose. You must obtain separate
                  consent or rely on legitimate interest with an opt-out
                  mechanism. Your privacy policy must clearly state this practice.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  What if a student requests deletion of their course data?
                </h3>
                <p>
                  Under GDPR&apos;s right to erasure, you must delete a student&apos;s
                  personal data upon request unless you have a legitimate reason
                  to retain it (e.g., financial records required by tax law). You
                  may need to retain transaction records for accounting purposes
                  but must delete profile data, progress data, and marketing data.
                  Your privacy policy should explain your data retention periods.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Do I need a cookie consent banner on my course website?
                </h3>
                <p>
                  If you serve EU students and use analytics cookies (Google
                  Analytics), advertising cookies (Meta Pixel), or any
                  non-essential cookies, you need a cookie consent banner under
                  the ePrivacy Directive. Most course creators use multiple
                  tracking tools, making a{" "}
                  <Link
                    href="/cookie-policy-generator"
                    className="text-blue-400 hover:underline"
                  >
                    cookie policy
                  </Link>
                  {" "}and consent banner mandatory for EU compliance.
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
                href="/privacy-policy-for-saas"
                className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800/70 transition block"
              >
                <span className="text-blue-400 font-semibold">
                  Privacy Policy for SaaS
                </span>
                <p className="text-gray-400 mt-1">
                  For membership-based course platforms and SaaS tools.
                </p>
              </Link>
              <Link
                href="/privacy-policy-for-small-business"
                className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800/70 transition block"
              >
                <span className="text-blue-400 font-semibold">
                  Privacy Policy for Small Business
                </span>
                <p className="text-gray-400 mt-1">
                  General privacy policy guide for solopreneurs and small teams.
                </p>
              </Link>
              <Link
                href="/gdpr-privacy-policy-generator"
                className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800/70 transition block"
              >
                <span className="text-blue-400 font-semibold">
                  GDPR Privacy Policy Generator
                </span>
                <p className="text-gray-400 mt-1">
                  Full GDPR-compliant privacy policy for any website or service.
                </p>
              </Link>
              <Link
                href="/privacy-policy-for-newsletter"
                className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800/70 transition block"
              >
                <span className="text-blue-400 font-semibold">
                  Privacy Policy for Newsletter
                </span>
                <p className="text-gray-400 mt-1">
                  For course creators who also run email newsletters.
                </p>
              </Link>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-500">
          <p>
            PolicyForge helps online course creators build compliant privacy
            policies.
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
