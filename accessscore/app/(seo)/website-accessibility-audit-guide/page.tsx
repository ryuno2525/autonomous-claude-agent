import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Do a Website Accessibility Audit — Step-by-Step Guide 2026 | AccessScore",
  description:
    "Step-by-step guide to conducting a website accessibility audit. Covers automated scanning, manual testing, screen reader testing, keyboard testing, and creating a remediation plan.",
  keywords: ["how to do a website accessibility audit", "website accessibility audit guide", "WCAG audit steps", "accessibility testing process", "manual accessibility testing"],
  alternates: { canonical: "https://accessscore.autonomous-claude.com/website-accessibility-audit-guide" },
};

export default function WebsiteAccessibilityAuditGuidePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Do a Website Accessibility Audit — Step-by-Step Guide 2026",
    description: "Complete step-by-step guide to conducting a website accessibility audit combining automated scanning with manual testing.",
    datePublished: "2026-03-15",
    dateModified: "2026-03-15",
    author: { "@type": "Organization", name: "AccessScore" },
    publisher: { "@type": "Organization", name: "AccessScore", url: "https://accessscore.autonomous-claude.com" },
    mainEntityOfPage: "https://accessscore.autonomous-claude.com/website-accessibility-audit-guide",
  };

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <h1 className="text-4xl font-bold text-white mb-6">How to Do a Website Accessibility Audit: A Step-by-Step Guide</h1>

      <p className="text-gray-300 leading-relaxed mb-6 text-lg">
        A website accessibility audit evaluates how well your site works for people with disabilities. Done properly, it identifies barriers that prevent users from perceiving, understanding, navigating, and interacting with your content. This guide walks you through the complete process &mdash; from automated scanning to manual testing to creating a prioritized remediation plan.
      </p>

      <div className="bg-[#141414] border border-[#262626] rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold text-white mb-3">What You&apos;ll Need</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-white font-semibold text-sm mb-2">Tools (all free)</h3>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>&#8226; <a href="/" className="text-blue-400 hover:underline">AccessScore</a> (legal risk + quick scan)</li>
              <li>&#8226; axe DevTools browser extension</li>
              <li>&#8226; WAVE browser extension</li>
              <li>&#8226; Google Lighthouse (built into Chrome)</li>
              <li>&#8226; NVDA screen reader (free, Windows)</li>
              <li>&#8226; A color contrast checker</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm mb-2">Time estimate</h3>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>&#8226; Small site (5-10 pages): 2-4 hours</li>
              <li>&#8226; Medium site (20-50 pages): 1-2 days</li>
              <li>&#8226; Large site (100+ pages): 3-5 days</li>
              <li>&#8226; E-commerce (complex interactions): 5-10 days</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Step 1 */}
      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Step 1: Define Scope and Identify Page Templates</h2>
      <p className="text-gray-300 leading-relaxed mb-4">
        Before you start testing, decide what you&apos;re auditing. A full-site audit of a 10,000-page ecommerce site would take weeks. Instead, identify your unique page templates and test a representative sample of each.
      </p>

      <div className="bg-[#141414] border border-[#262626] rounded-xl p-5 mb-6">
        <h3 className="text-white font-semibold mb-3">Typical page templates to audit</h3>
        <div className="grid md:grid-cols-2 gap-2">
          {[
            "Homepage",
            "Contact page / Contact form",
            "Product listing / Category page",
            "Product detail page",
            "Blog post / Article",
            "Shopping cart",
            "Checkout flow (each step)",
            "Search results",
            "Account login / Registration",
            "Account dashboard",
            "Error pages (404, 500)",
            "Any page with unique interactive components",
          ].map((page) => (
            <div key={page} className="flex items-center gap-2 text-gray-400 text-sm">
              <span className="text-green-400 shrink-0">&#9744;</span>
              {page}
            </div>
          ))}
        </div>
      </div>

      <p className="text-gray-300 leading-relaxed mb-8">
        The key insight: if your product detail page template has an unlabeled form field, <em>every</em> product page has that violation. Fixing the template once fixes hundreds or thousands of pages. This is why template-level auditing is more efficient than page-by-page testing.
      </p>

      {/* Step 2 */}
      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Step 2: Run Automated Scans</h2>
      <p className="text-gray-300 leading-relaxed mb-4">
        Automated tools are your first line of defense. They catch low-hanging fruit quickly and establish a baseline. Start here, but understand the limitation: automated tools catch only 30-40% of WCAG violations. The rest requires human judgment.
      </p>

      <div className="space-y-4 mb-8">
        <div className="bg-[#141414] border border-[#262626] rounded-xl p-5">
          <h3 className="text-white font-semibold mb-2">2a. Run AccessScore for Legal Risk Assessment</h3>
          <p className="text-gray-400 text-sm mb-3">
            Go to <a href="/" className="text-blue-400 hover:underline">accessscore.autonomous-claude.com</a> and scan your homepage. This gives you:
          </p>
          <ul className="text-gray-400 text-sm space-y-1">
            <li>&#8226; An overall score (0-100) and letter grade</li>
            <li>&#8226; A legal risk tier (LOW / MODERATE / HIGH / CRITICAL)</li>
            <li>&#8226; Estimated legal exposure in dollars</li>
            <li>&#8226; Your top 5 violations ranked by legal risk</li>
          </ul>
          <p className="text-gray-400 text-sm mt-3">
            This takes 10 seconds and immediately tells you how urgently you need to act. If you&apos;re in the HIGH or CRITICAL tier, prioritize accessibility work now. The Pro Report ($14.99) gives you every violation on every element with code-level fix instructions.
          </p>
        </div>

        <div className="bg-[#141414] border border-[#262626] rounded-xl p-5">
          <h3 className="text-white font-semibold mb-2">2b. Run axe DevTools for Technical Detail</h3>
          <p className="text-gray-400 text-sm mb-3">
            Install the axe DevTools extension, navigate to each page template, open DevTools (F12), go to the axe tab, and click &ldquo;Scan.&rdquo; For each issue:
          </p>
          <ul className="text-gray-400 text-sm space-y-1">
            <li>&#8226; Note the WCAG success criterion it maps to</li>
            <li>&#8226; Note the affected element (axe highlights it in the DOM)</li>
            <li>&#8226; Read the &ldquo;Fix any of&rdquo; or &ldquo;Fix all of&rdquo; suggestion</li>
            <li>&#8226; Record whether it&apos;s a template issue or page-specific</li>
          </ul>
        </div>

        <div className="bg-[#141414] border border-[#262626] rounded-xl p-5">
          <h3 className="text-white font-semibold mb-2">2c. Run WAVE for Visual Context</h3>
          <p className="text-gray-400 text-sm mb-3">
            WAVE overlays icons directly on your page, showing where each issue is. This is invaluable for understanding context. Pay special attention to:
          </p>
          <ul className="text-gray-400 text-sm space-y-1">
            <li>&#8226; Red icons (errors) &mdash; definite WCAG violations</li>
            <li>&#8226; Yellow icons (alerts) &mdash; potential issues needing human review</li>
            <li>&#8226; The &ldquo;Structure&rdquo; tab &mdash; shows heading outline and landmark regions</li>
            <li>&#8226; The &ldquo;Contrast&rdquo; tab &mdash; identifies low-contrast text</li>
          </ul>
        </div>

        <div className="bg-[#141414] border border-[#262626] rounded-xl p-5">
          <h3 className="text-white font-semibold mb-2">2d. Run Lighthouse for Scoring Baseline</h3>
          <p className="text-gray-400 text-sm">
            Open Chrome DevTools &gt; Lighthouse tab &gt; check only &ldquo;Accessibility&rdquo; &gt; Generate report. Record the score for each page template. This gives you a trackable number you can use to show improvement over time. Remember that a Lighthouse 100 does not mean full WCAG compliance &mdash; it only means automated checks pass.
          </p>
        </div>
      </div>

      {/* Step 3 */}
      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Step 3: Keyboard Testing</h2>
      <p className="text-gray-300 leading-relaxed mb-4">
        Keyboard testing is the single most important manual test you can do. Approximately 15% of the population has a motor disability, and many use keyboard or keyboard-equivalent devices to navigate the web. Keyboard testing catches issues that no automated tool can detect.
      </p>

      <div className="bg-[#141414] border border-[#262626] rounded-xl p-6 mb-6">
        <h3 className="text-white font-semibold mb-3">Keyboard Testing Checklist</h3>
        <div className="space-y-3">
          {[
            { key: "Tab", test: "Can you reach every interactive element (links, buttons, form fields, dropdowns) by pressing Tab?", pass: "Every element is reachable", fail: "Some elements are skipped or unreachable" },
            { key: "Shift+Tab", test: "Can you move backwards through elements?", pass: "Backwards navigation works", fail: "Focus disappears or jumps unexpectedly" },
            { key: "Enter/Space", test: "Can you activate links and buttons?", pass: "All interactive elements respond", fail: "Some elements require mouse click" },
            { key: "Escape", test: "Can you close modals, dropdowns, and popups?", pass: "All overlays can be dismissed", fail: "Modal is stuck open or focus is trapped" },
            { key: "Arrow keys", test: "Can you navigate within complex widgets (tabs, menus, carousels)?", pass: "Arrow keys work within components", fail: "No keyboard navigation within widget" },
            { key: "Focus visible?", test: "Can you always tell which element has focus?", pass: "Clear focus ring or highlight on every element", fail: "Focus is invisible (usually outline: none in CSS)" },
            { key: "Focus order", test: "Does the tab order match the visual reading order?", pass: "Left to right, top to bottom", fail: "Focus jumps around the page illogically" },
          ].map((item) => (
            <div key={item.key} className="border-b border-[#262626]/50 last:border-0 pb-3 last:pb-0">
              <div className="flex items-center gap-3 mb-1">
                <span className="bg-[#1a1a1a] text-gray-300 px-2 py-0.5 rounded text-xs font-mono shrink-0">{item.key}</span>
                <p className="text-white text-sm font-medium">{item.test}</p>
              </div>
              <div className="ml-10 grid md:grid-cols-2 gap-2 text-xs">
                <span className="text-green-400">Pass: {item.pass}</span>
                <span className="text-red-400">Fail: {item.fail}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-gray-300 leading-relaxed mb-8">
        Common keyboard testing gotchas: dropdown menus that only open on hover, date pickers that require mouse clicks, sliders with no keyboard control, and modal dialogs that don&apos;t trap focus (allowing users to tab behind the modal into the obscured page). Any of these is a WCAG violation and a potential lawsuit vector.
      </p>

      {/* Step 4 */}
      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Step 4: Screen Reader Testing</h2>
      <p className="text-gray-300 leading-relaxed mb-4">
        Screen reader testing tells you what your site sounds like to blind and low-vision users. This reveals issues that neither automated tools nor keyboard testing can catch: whether headings make sense in isolation, whether images are described meaningfully, and whether dynamic content changes are announced.
      </p>

      <div className="space-y-4 mb-8">
        <div className="bg-[#141414] border border-[#262626] rounded-xl p-5">
          <h3 className="text-white font-semibold mb-2">Recommended screen readers (all free)</h3>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>&#8226; <strong className="text-white">NVDA</strong> (Windows) &mdash; Free, open source, most popular among testers. Download from nvaccess.org.</li>
            <li>&#8226; <strong className="text-white">VoiceOver</strong> (macOS/iOS) &mdash; Built into every Mac and iPhone. Activate with Cmd+F5 on Mac.</li>
            <li>&#8226; <strong className="text-white">TalkBack</strong> (Android) &mdash; Built into Android. Activate in Settings &gt; Accessibility.</li>
            <li>&#8226; <strong className="text-white">JAWS</strong> (Windows) &mdash; Industry standard but expensive ($90/year). 40-minute free trial mode available.</li>
          </ul>
        </div>

        <div className="bg-[#141414] border border-[#262626] rounded-xl p-5">
          <h3 className="text-white font-semibold mb-2">Screen reader testing tasks</h3>
          <div className="space-y-3">
            {[
              { task: "Navigate by headings (H key in NVDA/VO)", what: "Can you understand the page structure from headings alone? Are headings descriptive and in logical order?" },
              { task: "Navigate by landmarks (D key in NVDA)", what: "Are there landmarks for navigation, main content, search, and footer? Can you jump between sections?" },
              { task: "Read through form fields (Tab key)", what: "Does each field announce its label, type, and required state? Are error messages announced?" },
              { task: "Navigate images (G key in NVDA)", what: "Does each image announce meaningful alt text? Are decorative images silent (alt=\"\")?" },
              { task: "Complete a key user flow (e.g., add to cart, checkout)", what: "Can you complete the entire flow without sighted assistance? Are status changes announced?" },
              { task: "Check link text in isolation (K key in NVDA)", what: "Do links make sense without surrounding context? \"Click here\" and \"Read more\" are failures." },
            ].map((item) => (
              <div key={item.task} className="border-b border-[#262626]/50 last:border-0 pb-2 last:pb-0">
                <p className="text-white text-sm font-medium">{item.task}</p>
                <p className="text-gray-500 text-xs mt-1">{item.what}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="text-gray-300 leading-relaxed mb-8">
        <strong className="text-white">Tip:</strong> If you&apos;ve never used a screen reader before, start by closing your eyes and listening to a familiar website. This visceral experience communicates more about accessibility barriers than any checklist. Many developers report that their first screen reader test fundamentally changes how they think about building websites.
      </p>

      {/* Step 5 */}
      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Step 5: Visual and Cognitive Testing</h2>

      <div className="space-y-4 mb-8">
        <div className="bg-[#141414] border border-[#262626] rounded-xl p-5">
          <h3 className="text-white font-semibold mb-2">Color Contrast</h3>
          <p className="text-gray-400 text-sm mb-3">
            Check every text/background combination against WCAG contrast requirements:
          </p>
          <ul className="text-gray-400 text-sm space-y-1">
            <li>&#8226; Normal text: minimum <strong className="text-white">4.5:1</strong> contrast ratio</li>
            <li>&#8226; Large text (18pt+ or 14pt+ bold): minimum <strong className="text-white">3:1</strong> contrast ratio</li>
            <li>&#8226; UI components and graphical objects: minimum <strong className="text-white">3:1</strong></li>
          </ul>
          <p className="text-gray-400 text-sm mt-3">
            Common failures: light gray text on white backgrounds, placeholder text in form fields, disabled button text, and link text that only differs from body text by color (not underline).
          </p>
        </div>

        <div className="bg-[#141414] border border-[#262626] rounded-xl p-5">
          <h3 className="text-white font-semibold mb-2">Zoom and Text Resizing</h3>
          <p className="text-gray-400 text-sm mb-3">
            Test at multiple zoom levels to ensure content remains usable:
          </p>
          <ul className="text-gray-400 text-sm space-y-1">
            <li>&#8226; <strong className="text-white">200% zoom:</strong> All content visible without horizontal scroll (SC 1.4.4)</li>
            <li>&#8226; <strong className="text-white">400% zoom at 1280px:</strong> Content reflows into a single column, no horizontal scroll (SC 1.4.10)</li>
            <li>&#8226; Check that text doesn&apos;t get clipped, overlapped, or hidden behind other elements</li>
            <li>&#8226; Check that interactive elements are still usable (buttons not cut off, forms still submittable)</li>
          </ul>
        </div>

        <div className="bg-[#141414] border border-[#262626] rounded-xl p-5">
          <h3 className="text-white font-semibold mb-2">Color Independence</h3>
          <p className="text-gray-400 text-sm">
            Use a color blindness simulator (e.g., Chrome DevTools &gt; Rendering &gt; Emulate vision deficiencies) to check that information is not conveyed by color alone. Required fields marked only in red, error states with only a color change, and chart data distinguished only by color all fail this test. Every color-coded element needs a secondary indicator (text label, icon, pattern).
          </p>
        </div>

        <div className="bg-[#141414] border border-[#262626] rounded-xl p-5">
          <h3 className="text-white font-semibold mb-2">Motion and Animation</h3>
          <p className="text-gray-400 text-sm">
            Check that auto-playing animations can be paused, that no content flashes more than 3 times per second, and that your site respects the prefers-reduced-motion media query. Parallax scrolling, background videos, and animated hero sections should all have stop/pause controls or be disabled when reduced motion is preferred.
          </p>
        </div>
      </div>

      {/* Step 6 */}
      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Step 6: Document and Prioritize Findings</h2>
      <p className="text-gray-300 leading-relaxed mb-4">
        After completing steps 2-5, you&apos;ll have a list of issues. The next step is organizing them into a prioritized remediation plan. This document serves two purposes: it guides your fix work, and it demonstrates good-faith compliance efforts if you ever face a demand letter.
      </p>

      <div className="bg-[#141414] border border-[#262626] rounded-xl p-6 mb-6">
        <h3 className="text-white font-semibold mb-3">Recommended spreadsheet columns</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[#262626]">
                <th className="text-left text-gray-400 py-2 px-3 font-medium">Column</th>
                <th className="text-left text-gray-400 py-2 px-3 font-medium">Example</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="border-b border-[#262626]/50"><td className="py-2 px-3">Issue ID</td><td className="py-2 px-3">A11Y-001</td></tr>
              <tr className="border-b border-[#262626]/50"><td className="py-2 px-3">Page/Template</td><td className="py-2 px-3">Product detail page</td></tr>
              <tr className="border-b border-[#262626]/50"><td className="py-2 px-3">WCAG Criterion</td><td className="py-2 px-3">SC 1.1.1 Non-text Content</td></tr>
              <tr className="border-b border-[#262626]/50"><td className="py-2 px-3">Description</td><td className="py-2 px-3">Product images missing alt text</td></tr>
              <tr className="border-b border-[#262626]/50"><td className="py-2 px-3">Affected element</td><td className="py-2 px-3">img.product-image (all product pages)</td></tr>
              <tr className="border-b border-[#262626]/50"><td className="py-2 px-3">Legal risk</td><td className="py-2 px-3">CRITICAL</td></tr>
              <tr className="border-b border-[#262626]/50"><td className="py-2 px-3">Scope</td><td className="py-2 px-3">Template (affects ~2,000 pages)</td></tr>
              <tr className="border-b border-[#262626]/50"><td className="py-2 px-3">Suggested fix</td><td className="py-2 px-3">Add descriptive alt attribute to product images from product data</td></tr>
              <tr className="border-b border-[#262626]/50"><td className="py-2 px-3">Effort estimate</td><td className="py-2 px-3">4 hours (developer) + ongoing (content team)</td></tr>
              <tr><td className="py-2 px-3">Status</td><td className="py-2 px-3">Open / In Progress / Fixed / Verified</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">Prioritization framework</h3>
      <p className="text-gray-300 leading-relaxed mb-4">
        Prioritize by legal risk first, then by scope (template issues before page-specific), then by effort (quick wins first within the same risk tier):
      </p>

      <div className="space-y-3 mb-8">
        {[
          { priority: "P0 — Fix immediately", criteria: "CRITICAL legal risk + template-level issue. Missing alt text on product images, unlabeled checkout forms, no page language.", color: "text-red-400 bg-red-500/10" },
          { priority: "P1 — Fix within 2 weeks", criteria: "HIGH legal risk. Empty links/buttons, missing skip navigation, keyboard traps, missing form error identification.", color: "text-orange-400 bg-orange-500/10" },
          { priority: "P2 — Fix within 1 month", criteria: "MEDIUM legal risk. Color contrast failures, missing heading hierarchy, inconsistent navigation, missing ARIA landmarks.", color: "text-yellow-400 bg-yellow-500/10" },
          { priority: "P3 — Fix within 3 months", criteria: "LOWER risk but still non-compliant. Text spacing support, motion control, autocomplete attributes, ARIA live regions for status messages.", color: "text-blue-400 bg-blue-500/10" },
        ].map((item) => (
          <div key={item.priority} className="bg-[#141414] border border-[#262626] rounded-lg p-4">
            <h4 className={`font-semibold text-sm mb-1 ${item.color.split(" ")[0]}`}>{item.priority}</h4>
            <p className="text-gray-400 text-sm">{item.criteria}</p>
          </div>
        ))}
      </div>

      {/* Step 7 */}
      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Step 7: Fix, Verify, and Document</h2>
      <div className="space-y-4 mb-8">
        {[
          {
            step: "Fix template issues first",
            desc: "One template fix can resolve thousands of page-level violations. Work with your developer to update the product detail template, checkout form template, and navigation component first.",
          },
          {
            step: "Re-test after each fix",
            desc: "Run the same automated tools (AccessScore, axe, WAVE) on the fixed page to verify the issue is resolved. Fixes can sometimes introduce new issues, so check the full scan results.",
          },
          {
            step: "Document everything",
            desc: "Keep your audit spreadsheet updated with fix dates and verification dates. Screenshot before/after states. This documentation is your strongest legal defense — it shows ongoing good-faith effort.",
          },
          {
            step: "Publish an accessibility statement",
            desc: "Add a page to your site describing your accessibility commitment, the standard you're targeting (WCAG 2.1 AA), known limitations, and how users can report issues. Include a contact email or phone number.",
          },
          {
            step: "Schedule regular re-audits",
            desc: "Accessibility is not one-and-done. Template changes, new content, plugin updates, and redesigns can reintroduce violations. Run automated scans monthly and a full audit quarterly or after major changes.",
          },
        ].map((item) => (
          <div key={item.step} className="bg-[#141414] border border-[#262626] rounded-xl p-5">
            <h3 className="text-white font-semibold mb-2">{item.step}</h3>
            <p className="text-gray-400 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* DIY vs Professional */}
      <h2 className="text-2xl font-bold text-white mt-12 mb-4">DIY Audit vs. Professional Audit</h2>
      <div className="bg-[#141414] border border-[#262626] rounded-xl p-6 mb-8">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-blue-400 font-semibold mb-3">DIY Audit (This Guide)</h3>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>&#8226; Cost: $0 &ndash; $15 (free tools + AccessScore Pro)</li>
              <li>&#8226; Time: 2 hours to 2 days</li>
              <li>&#8226; Catches: 60-70% of issues (automated + keyboard + basic screen reader)</li>
              <li>&#8226; Best for: Small businesses, startups, developers building new sites</li>
              <li>&#8226; Limitation: May miss complex interaction issues, cognitive accessibility, and nuanced ARIA problems</li>
            </ul>
          </div>
          <div>
            <h3 className="text-purple-400 font-semibold mb-3">Professional Audit</h3>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>&#8226; Cost: $3,000 &ndash; $30,000+</li>
              <li>&#8226; Time: 2 &ndash; 6 weeks</li>
              <li>&#8226; Catches: 90-95% of issues (includes expert manual testing and user testing)</li>
              <li>&#8226; Best for: Large enterprises, high-traffic sites, businesses already facing legal pressure</li>
              <li>&#8226; Includes: VPAT/ACR, detailed remediation guidance, retesting</li>
            </ul>
          </div>
        </div>
      </div>

      <p className="text-gray-300 leading-relaxed mb-8">
        Our recommendation: start with a DIY audit using this guide. It costs almost nothing, takes a few hours, and catches the majority of high-risk issues. If you discover significant problems or you&apos;re in a highly targeted industry (ecommerce, healthcare, financial services), invest in a professional audit. The DIY audit prepares you to get more value from the professional engagement because you&apos;ll already have fixed the obvious issues.
      </p>

      {/* Common Mistakes */}
      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Common Audit Mistakes to Avoid</h2>
      <div className="space-y-3 mb-8">
        {[
          {
            mistake: "Only running automated tools",
            why: "Automated tools catch 30-40% of issues. Skipping keyboard and screen reader testing means missing 60%+ of violations, including many that are cited in lawsuits.",
          },
          {
            mistake: "Testing only the homepage",
            why: "The homepage is often the most polished page. Product pages, checkout flows, and account areas are where most violations live. Test every unique template.",
          },
          {
            mistake: "Treating a Lighthouse 100 as \"compliant\"",
            why: "Lighthouse checks ~40 rules and includes manual checks in the score. A 100 score means you passed automated checks, not that you're WCAG compliant.",
          },
          {
            mistake: "Using an accessibility overlay instead of fixing issues",
            why: "Overlay widgets (accessiBe, AudioEye, UserWay) do not fix accessibility issues. Multiple lawsuits have succeeded against sites using overlays. Courts view overlays as evidence of awareness without action.",
          },
          {
            mistake: "Auditing once and never again",
            why: "Websites change constantly. A single audit is a snapshot. Without ongoing monitoring, new violations accumulate within weeks of a redesign or content update.",
          },
          {
            mistake: "Not documenting the audit",
            why: "Documentation of your audit and remediation effort is your best legal defense. If you get a demand letter, showing a dated audit report and remediation timeline demonstrates good faith.",
          },
        ].map((item) => (
          <div key={item.mistake} className="bg-[#141414] border border-[#262626] rounded-lg p-4">
            <p className="text-white text-sm font-medium">{item.mistake}</p>
            <p className="text-gray-500 text-xs mt-1">{item.why}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-8 text-center mb-10">
        <h2 className="text-2xl font-bold text-white mb-3">Start Your Audit: Free Automated Scan</h2>
        <p className="text-gray-300 mb-6">The first step in any accessibility audit is understanding where you stand. Run a free AccessScore scan to get your legal risk tier, score, and top 5 issues in seconds.</p>
        <a
          href="/"
          className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-lg transition-colors"
        >
          Scan Your Website &mdash; Free
        </a>
        <p className="text-gray-500 text-sm mt-3">Step 2a of this guide, done. Then keep going.</p>
      </div>

      <div className="mt-12 pt-8 border-t border-[#262626]">
        <p className="text-gray-500 text-sm">
          Related: <a href="/free-accessibility-audit" className="text-blue-400 hover:underline">Free Accessibility Audit</a> &middot;{" "}
          <a href="/fix-website-accessibility" className="text-blue-400 hover:underline">Fix Accessibility Issues</a> &middot;{" "}
          <a href="/ada-website-compliance-checklist" className="text-blue-400 hover:underline">ADA Compliance Checklist 2026</a> &middot;{" "}
          <a href="/ada-lawsuit-statistics" className="text-blue-400 hover:underline">ADA Lawsuit Statistics 2026</a> &middot;{" "}
          <a href="/accessibility-checklist" className="text-blue-400 hover:underline">Accessibility Checklist</a>
        </p>
      </div>
    </main>
  );
}
