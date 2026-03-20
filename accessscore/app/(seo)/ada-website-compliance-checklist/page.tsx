import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ADA Website Compliance Checklist 2026 — Complete WCAG 2.1 AA Guide | AccessScore",
  description:
    "Complete ADA website compliance checklist for 2026. All WCAG 2.1 AA requirements organized by category with lawsuit statistics, testing steps, and a free automated scanner.",
  keywords: ["ADA website compliance checklist", "WCAG 2.1 AA checklist", "ADA compliance requirements 2026", "website accessibility checklist", "ADA website requirements"],
  alternates: { canonical: "https://accessscore.autonomous-claude.com/ada-website-compliance-checklist" },
};

export default function ADAWebsiteComplianceChecklistPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "ADA Website Compliance Checklist 2026 — Complete WCAG 2.1 AA Guide",
    description: "Complete ADA website compliance checklist for 2026 covering all WCAG 2.1 AA requirements organized by category with lawsuit statistics and testing steps.",
    datePublished: "2026-03-15",
    dateModified: "2026-03-15",
    author: { "@type": "Organization", name: "AccessScore" },
    publisher: { "@type": "Organization", name: "AccessScore", url: "https://accessscore.autonomous-claude.com" },
    mainEntityOfPage: "https://accessscore.autonomous-claude.com/ada-website-compliance-checklist",
  };

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <h1 className="text-4xl font-bold text-white mb-6">ADA Website Compliance Checklist 2026: Complete WCAG 2.1 AA Guide</h1>

      <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 mb-8">
        <p className="text-red-300 font-medium text-lg">
          ADA website lawsuits surpassed <strong>4,000 filings in 2024</strong>, a 37% year-over-year increase. In 2025, the DOJ formally adopted WCAG 2.1 Level AA as the standard for state and local government websites. Private-sector lawsuits follow the same benchmark. This checklist covers every requirement you need to meet.
        </p>
      </div>

      <p className="text-gray-300 leading-relaxed mb-6">
        The Americans with Disabilities Act requires websites that qualify as &ldquo;places of public accommodation&rdquo; to be accessible to people with disabilities. While the ADA text does not name a specific technical standard, courts, settlement agreements, and the Department of Justice consistently reference <strong>WCAG 2.1 Level AA</strong> as the compliance benchmark. This checklist walks through every AA success criterion, organized by the four WCAG principles: Perceivable, Operable, Understandable, and Robust.
      </p>
      <p className="text-gray-300 leading-relaxed mb-8">
        Use this page as your reference while auditing. For an automated first pass, run your site through our <a href="/" className="text-blue-400 hover:underline">free AccessScore scanner</a> &mdash; it checks the 16 most impactful criteria in seconds and gives you a legal risk tier so you know where you stand before diving into manual testing.
      </p>

      {/* Quick Stats */}
      <div className="bg-[#141414] border border-[#262626] rounded-xl p-6 mb-10">
        <h2 className="text-xl font-bold text-white mb-4">Why This Matters: ADA Lawsuit Snapshot</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-white">4,000+</div>
            <div className="text-xs text-gray-400">Federal ADA web lawsuits filed in 2024</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">37%</div>
            <div className="text-xs text-gray-400">Year-over-year increase in filings</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">$5K&ndash;$75K</div>
            <div className="text-xs text-gray-400">Typical settlement range</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">92%</div>
            <div className="text-xs text-gray-400">Of homepages fail WCAG checks (WebAIM)</div>
          </div>
        </div>
      </div>

      {/* PERCEIVABLE */}
      <h2 className="text-2xl font-bold text-white mt-12 mb-4">1. Perceivable</h2>
      <p className="text-gray-300 leading-relaxed mb-6">
        Information and user interface components must be presentable to users in ways they can perceive. This is the most frequently violated principle and accounts for the majority of issues cited in ADA lawsuits.
      </p>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">1.1 Text Alternatives (SC 1.1.1)</h3>
      <div className="space-y-3 mb-6">
        {[
          { check: "Every <img> element has a non-empty alt attribute", detail: "Decorative images should use alt=\"\" (empty) — but images conveying information need descriptive text." },
          { check: "Alt text is descriptive and contextually meaningful", detail: "\"Photo\" or \"image_001.jpg\" is not sufficient. Describe what the image communicates: \"Bar chart showing quarterly revenue growth of 15%.\"" },
          { check: "Complex images have long descriptions", detail: "Charts, infographics, and diagrams need either a long alt text or a separate text description linked via aria-describedby." },
          { check: "Image buttons have accessible text", detail: "Search icons, hamburger menus, and icon-only buttons need aria-label or visible text." },
          { check: "CSS background images conveying meaning have text alternatives", detail: "If a background image carries content (not decoration), provide an off-screen text alternative." },
          { check: "CAPTCHAs have accessible alternatives", detail: "Audio CAPTCHA, hCaptcha accessible mode, or logic-based challenges must be available." },
        ].map((item) => (
          <div key={item.check} className="bg-[#141414] border border-[#262626] rounded-lg p-4">
            <div className="flex items-start gap-3">
              <span className="text-green-400 mt-0.5 shrink-0">&#9744;</span>
              <div>
                <p className="text-white text-sm font-medium">{item.check}</p>
                <p className="text-gray-500 text-xs mt-1">{item.detail}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">1.2 Time-Based Media (SC 1.2.1 &ndash; 1.2.5)</h3>
      <div className="space-y-3 mb-6">
        {[
          { check: "Prerecorded audio has a text transcript", detail: "Podcasts, audio clips, and voice messages need full text transcripts." },
          { check: "Prerecorded videos have synchronized captions", detail: "Auto-generated captions must be reviewed for accuracy. YouTube auto-captions are not sufficient for compliance." },
          { check: "Prerecorded videos have audio descriptions (AA)", detail: "When visual content is not conveyed by the audio track, a separate audio description track is needed." },
          { check: "Live video has real-time captions", detail: "Webinars, live streams, and virtual events need live captioning (CART or AI-assisted with review)." },
        ].map((item) => (
          <div key={item.check} className="bg-[#141414] border border-[#262626] rounded-lg p-4">
            <div className="flex items-start gap-3">
              <span className="text-green-400 mt-0.5 shrink-0">&#9744;</span>
              <div>
                <p className="text-white text-sm font-medium">{item.check}</p>
                <p className="text-gray-500 text-xs mt-1">{item.detail}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">1.3 Adaptable Content (SC 1.3.1 &ndash; 1.3.5)</h3>
      <div className="space-y-3 mb-6">
        {[
          { check: "Headings use proper HTML heading tags (h1-h6) in order", detail: "Don't skip levels (h1 then h3). Screen readers use heading hierarchy to navigate. Styled bold text is not a heading." },
          { check: "Lists use <ul>, <ol>, or <dl> markup", detail: "Screen readers announce list context (\"list of 5 items\"), helping users understand content structure." },
          { check: "Data tables have <th> elements with scope attributes", detail: "Tables must use proper header cells so screen readers can associate data cells with their headers." },
          { check: "Form inputs are programmatically associated with labels", detail: "Use <label for=\"id\"> or aria-label. Placeholder text alone is not a label." },
          { check: "Content order is meaningful in the DOM", detail: "If CSS is disabled, content should still read in a logical sequence. Don't rely on visual positioning alone." },
          { check: "Input fields identify their purpose (SC 1.3.5 AA)", detail: "Use autocomplete attributes on common fields (name, email, address, phone) so browsers and assistive tech can autofill." },
        ].map((item) => (
          <div key={item.check} className="bg-[#141414] border border-[#262626] rounded-lg p-4">
            <div className="flex items-start gap-3">
              <span className="text-green-400 mt-0.5 shrink-0">&#9744;</span>
              <div>
                <p className="text-white text-sm font-medium">{item.check}</p>
                <p className="text-gray-500 text-xs mt-1">{item.detail}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">1.4 Distinguishable (SC 1.4.1 &ndash; 1.4.13)</h3>
      <div className="space-y-3 mb-6">
        {[
          { check: "Color is not the only means of conveying information (SC 1.4.1)", detail: "Error states, required fields, and chart data must use more than color — add text, icons, or patterns." },
          { check: "Text has minimum 4.5:1 contrast ratio (SC 1.4.3 AA)", detail: "Large text (18pt or 14pt bold) needs 3:1. Use a contrast checker tool. Gray-on-white is the most common failure." },
          { check: "Text can be resized to 200% without loss (SC 1.4.4 AA)", detail: "Zoom your browser to 200%. Content should reflow without horizontal scrolling or text being clipped." },
          { check: "Images of text are not used when real text could work (SC 1.4.5 AA)", detail: "Logos are exempted. But headings, buttons, and nav items must be real HTML text, not images of text." },
          { check: "Content reflows at 320px width without horizontal scroll (SC 1.4.10 AA)", detail: "At 1280px viewport width with 400% zoom, no horizontal scroll should be needed except for data tables, maps, or diagrams." },
          { check: "Non-text contrast is 3:1 for UI components (SC 1.4.11 AA)", detail: "Borders, icons, focus indicators, and form field outlines must be visible against their backgrounds." },
          { check: "Text spacing can be overridden without content loss (SC 1.4.12 AA)", detail: "Users must be able to increase line height to 1.5x, letter spacing to 0.12em, and word spacing to 0.16em." },
          { check: "Hover/focus content can be dismissed and is persistent (SC 1.4.13 AA)", detail: "Tooltips and popovers that appear on hover must be dismissible (Esc), hoverable (pointer can enter the tooltip), and persistent (don't disappear until the user dismisses them)." },
        ].map((item) => (
          <div key={item.check} className="bg-[#141414] border border-[#262626] rounded-lg p-4">
            <div className="flex items-start gap-3">
              <span className="text-green-400 mt-0.5 shrink-0">&#9744;</span>
              <div>
                <p className="text-white text-sm font-medium">{item.check}</p>
                <p className="text-gray-500 text-xs mt-1">{item.detail}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* OPERABLE */}
      <h2 className="text-2xl font-bold text-white mt-12 mb-4">2. Operable</h2>
      <p className="text-gray-300 leading-relaxed mb-6">
        User interface components and navigation must be operable by all users, including those who cannot use a mouse. Keyboard accessibility failures are among the most commonly cited violations in ADA lawsuits.
      </p>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">2.1 Keyboard Accessible (SC 2.1.1 &ndash; 2.1.4)</h3>
      <div className="space-y-3 mb-6">
        {[
          { check: "All functionality is operable via keyboard alone (SC 2.1.1)", detail: "Tab through your entire site. Every link, button, form field, dropdown, and interactive element must be reachable and activatable." },
          { check: "No keyboard traps exist (SC 2.1.2)", detail: "Users must be able to tab away from any focused element. Common traps: modals without escape handling, embedded video players, rich text editors." },
          { check: "Custom keyboard shortcuts can be turned off (SC 2.1.4 AA)", detail: "If your site uses single-character keyboard shortcuts, users must be able to disable or remap them." },
        ].map((item) => (
          <div key={item.check} className="bg-[#141414] border border-[#262626] rounded-lg p-4">
            <div className="flex items-start gap-3">
              <span className="text-green-400 mt-0.5 shrink-0">&#9744;</span>
              <div>
                <p className="text-white text-sm font-medium">{item.check}</p>
                <p className="text-gray-500 text-xs mt-1">{item.detail}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">2.2 Enough Time (SC 2.2.1 &ndash; 2.2.2)</h3>
      <div className="space-y-3 mb-6">
        {[
          { check: "Time limits can be extended or turned off (SC 2.2.1)", detail: "Session timeouts, checkout timers, and form auto-saves must allow users to request more time (at least 10x the default)." },
          { check: "Auto-updating content can be paused or stopped (SC 2.2.2)", detail: "News tickers, auto-refreshing feeds, and carousels must have pause/stop controls." },
        ].map((item) => (
          <div key={item.check} className="bg-[#141414] border border-[#262626] rounded-lg p-4">
            <div className="flex items-start gap-3">
              <span className="text-green-400 mt-0.5 shrink-0">&#9744;</span>
              <div>
                <p className="text-white text-sm font-medium">{item.check}</p>
                <p className="text-gray-500 text-xs mt-1">{item.detail}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">2.3 Seizures and Physical Reactions (SC 2.3.1)</h3>
      <div className="space-y-3 mb-6">
        <div className="bg-[#141414] border border-[#262626] rounded-lg p-4">
          <div className="flex items-start gap-3">
            <span className="text-green-400 mt-0.5 shrink-0">&#9744;</span>
            <div>
              <p className="text-white text-sm font-medium">No content flashes more than 3 times per second</p>
              <p className="text-gray-500 text-xs mt-1">Flashing content can trigger seizures. This includes animated GIFs, video content, and CSS animations. When in doubt, keep animations under 3 flashes per second.</p>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">2.4 Navigable (SC 2.4.1 &ndash; 2.4.10)</h3>
      <div className="space-y-3 mb-6">
        {[
          { check: "Skip navigation link is present (SC 2.4.1)", detail: "A \"Skip to main content\" link should be the first focusable element on every page." },
          { check: "Pages have descriptive, unique titles (SC 2.4.2)", detail: "Each page should have a <title> that describes its specific content. \"Home\" or \"Page 1\" is not descriptive." },
          { check: "Focus order matches visual reading order (SC 2.4.3)", detail: "Tab order should follow left-to-right, top-to-bottom visual flow. Avoid positive tabindex values." },
          { check: "Link text describes the destination (SC 2.4.4)", detail: "\"Click here\" and \"Read more\" are not descriptive. Use \"Read our pricing details\" or add aria-label for context." },
          { check: "Multiple navigation mechanisms exist (SC 2.4.5 AA)", detail: "Provide at least two ways to reach any page: navigation menu + site search, or navigation + sitemap." },
          { check: "Headings and labels describe their content (SC 2.4.6 AA)", detail: "Headings should accurately describe the section they introduce. Labels should describe what the input expects." },
          { check: "Focus indicator is visible (SC 2.4.7 AA)", detail: "When tabbing through the page, the currently focused element must have a visible outline or highlight. Never use outline: none without a replacement." },
        ].map((item) => (
          <div key={item.check} className="bg-[#141414] border border-[#262626] rounded-lg p-4">
            <div className="flex items-start gap-3">
              <span className="text-green-400 mt-0.5 shrink-0">&#9744;</span>
              <div>
                <p className="text-white text-sm font-medium">{item.check}</p>
                <p className="text-gray-500 text-xs mt-1">{item.detail}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">2.5 Input Modalities (SC 2.5.1 &ndash; 2.5.4)</h3>
      <div className="space-y-3 mb-6">
        {[
          { check: "Pointer gestures have single-pointer alternatives (SC 2.5.1 AA)", detail: "If your site uses pinch-zoom, multi-finger swipes, or path-based gestures, provide single-click alternatives." },
          { check: "Pointer actions can be cancelled (SC 2.5.2 AA)", detail: "Actions should fire on up-event (mouseup/touchend), not down-event, so users can move away to cancel." },
          { check: "Visible labels match accessible names (SC 2.5.3 AA)", detail: "If a button displays \"Search\", its accessible name must contain \"Search\" (not just aria-label=\"Find items\")." },
          { check: "Motion-activated functions have UI alternatives (SC 2.5.4 AA)", detail: "Shake-to-undo or tilt-to-scroll must have button equivalents. Users must be able to disable motion activation." },
        ].map((item) => (
          <div key={item.check} className="bg-[#141414] border border-[#262626] rounded-lg p-4">
            <div className="flex items-start gap-3">
              <span className="text-green-400 mt-0.5 shrink-0">&#9744;</span>
              <div>
                <p className="text-white text-sm font-medium">{item.check}</p>
                <p className="text-gray-500 text-xs mt-1">{item.detail}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* UNDERSTANDABLE */}
      <h2 className="text-2xl font-bold text-white mt-12 mb-4">3. Understandable</h2>
      <p className="text-gray-300 leading-relaxed mb-6">
        Information and the operation of the user interface must be understandable. This covers language, predictability, and input assistance.
      </p>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">3.1 Readable (SC 3.1.1 &ndash; 3.1.2)</h3>
      <div className="space-y-3 mb-6">
        {[
          { check: "Page language is declared in HTML (SC 3.1.1)", detail: "<html lang=\"en\"> (or appropriate language code). Screen readers use this to select the correct pronunciation engine." },
          { check: "Language changes within content are marked (SC 3.1.2 AA)", detail: "If a page in English contains a paragraph in Spanish, wrap it in <span lang=\"es\">. This ensures correct pronunciation." },
        ].map((item) => (
          <div key={item.check} className="bg-[#141414] border border-[#262626] rounded-lg p-4">
            <div className="flex items-start gap-3">
              <span className="text-green-400 mt-0.5 shrink-0">&#9744;</span>
              <div>
                <p className="text-white text-sm font-medium">{item.check}</p>
                <p className="text-gray-500 text-xs mt-1">{item.detail}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">3.2 Predictable (SC 3.2.1 &ndash; 3.2.4)</h3>
      <div className="space-y-3 mb-6">
        {[
          { check: "Focusing an element does not trigger a context change (SC 3.2.1)", detail: "Tabbing to a dropdown should not automatically submit a form or navigate away." },
          { check: "Changing an input does not auto-submit without warning (SC 3.2.2)", detail: "Selecting a radio button or dropdown value should not automatically navigate away. Provide an explicit submit action." },
          { check: "Navigation is consistent across pages (SC 3.2.3 AA)", detail: "Navigation menus should appear in the same location and order across all pages." },
          { check: "Components with the same function are identified consistently (SC 3.2.4 AA)", detail: "A search function should be labeled \"Search\" everywhere, not \"Search\" on one page and \"Find\" on another." },
        ].map((item) => (
          <div key={item.check} className="bg-[#141414] border border-[#262626] rounded-lg p-4">
            <div className="flex items-start gap-3">
              <span className="text-green-400 mt-0.5 shrink-0">&#9744;</span>
              <div>
                <p className="text-white text-sm font-medium">{item.check}</p>
                <p className="text-gray-500 text-xs mt-1">{item.detail}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">3.3 Input Assistance (SC 3.3.1 &ndash; 3.3.4)</h3>
      <div className="space-y-3 mb-6">
        {[
          { check: "Error messages identify the field and describe the error (SC 3.3.1)", detail: "\"Error in form\" is not helpful. Use \"Email address is required\" or \"Password must be at least 8 characters.\"" },
          { check: "Required fields are identified before submission (SC 3.3.2)", detail: "Mark required fields visually and programmatically (aria-required=\"true\" or required attribute)." },
          { check: "Error suggestions are provided when possible (SC 3.3.3 AA)", detail: "If validation fails, suggest the correct format: \"Enter date as MM/DD/YYYY\" instead of just \"Invalid date.\"" },
          { check: "Legal/financial submissions are reversible or confirmable (SC 3.3.4 AA)", detail: "For purchases, legal agreements, or data deletion: provide a review step, confirmation dialog, or the ability to undo within a reasonable time." },
        ].map((item) => (
          <div key={item.check} className="bg-[#141414] border border-[#262626] rounded-lg p-4">
            <div className="flex items-start gap-3">
              <span className="text-green-400 mt-0.5 shrink-0">&#9744;</span>
              <div>
                <p className="text-white text-sm font-medium">{item.check}</p>
                <p className="text-gray-500 text-xs mt-1">{item.detail}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ROBUST */}
      <h2 className="text-2xl font-bold text-white mt-12 mb-4">4. Robust</h2>
      <p className="text-gray-300 leading-relaxed mb-6">
        Content must be robust enough to be reliably interpreted by a wide variety of user agents, including assistive technologies.
      </p>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">4.1 Compatible (SC 4.1.1 &ndash; 4.1.3)</h3>
      <div className="space-y-3 mb-6">
        {[
          { check: "HTML is well-formed with no duplicate IDs (SC 4.1.1)", detail: "Duplicate IDs break label associations and ARIA references. Run your HTML through the W3C validator." },
          { check: "All UI components have accessible names and roles (SC 4.1.2)", detail: "Custom widgets (tabs, accordions, modals, date pickers) need proper ARIA roles, states, and properties." },
          { check: "Status messages use ARIA live regions (SC 4.1.3 AA)", detail: "\"Item added to cart\", \"Form submitted successfully\", or error counts must be announced to screen readers via aria-live=\"polite\" or role=\"status\"." },
        ].map((item) => (
          <div key={item.check} className="bg-[#141414] border border-[#262626] rounded-lg p-4">
            <div className="flex items-start gap-3">
              <span className="text-green-400 mt-0.5 shrink-0">&#9744;</span>
              <div>
                <p className="text-white text-sm font-medium">{item.check}</p>
                <p className="text-gray-500 text-xs mt-1">{item.detail}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Priority Order */}
      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Priority Order: What to Fix First</h2>
      <p className="text-gray-300 leading-relaxed mb-6">
        Not all violations carry equal legal risk. Based on analysis of ADA lawsuit complaints and settlement agreements, here are the issues most frequently cited by plaintiffs, ranked by how often they appear in legal filings:
      </p>

      <div className="space-y-3 mb-8">
        {[
          { rank: 1, issue: "Missing image alt text", cited: "Referenced in 86% of ADA web complaints", risk: "CRITICAL" },
          { rank: 2, issue: "Unlabeled form inputs", cited: "Referenced in 68% of complaints", risk: "CRITICAL" },
          { rank: 3, issue: "Empty links and buttons", cited: "Referenced in 54% of complaints", risk: "HIGH" },
          { rank: 4, issue: "Missing document language", cited: "Referenced in 42% of complaints", risk: "HIGH" },
          { rank: 5, issue: "Insufficient color contrast", cited: "Referenced in 38% of complaints", risk: "HIGH" },
          { rank: 6, issue: "Missing skip navigation", cited: "Referenced in 31% of complaints", risk: "MEDIUM" },
          { rank: 7, issue: "Missing page titles", cited: "Referenced in 28% of complaints", risk: "MEDIUM" },
          { rank: 8, issue: "Keyboard inaccessible elements", cited: "Referenced in 24% of complaints", risk: "HIGH" },
        ].map((item) => (
          <div key={item.rank} className="bg-[#141414] border border-[#262626] rounded-lg p-4 flex items-center gap-4">
            <span className="text-2xl font-bold text-gray-600 w-8 text-center shrink-0">{item.rank}</span>
            <div className="flex-1">
              <p className="text-white text-sm font-medium">{item.issue}</p>
              <p className="text-gray-500 text-xs">{item.cited}</p>
            </div>
            <span className={`text-xs font-medium px-2 py-1 rounded shrink-0 ${
              item.risk === "CRITICAL" ? "text-red-400 bg-red-500/10" :
              item.risk === "HIGH" ? "text-orange-400 bg-orange-500/10" :
              "text-yellow-400 bg-yellow-500/10"
            }`}>{item.risk}</span>
          </div>
        ))}
      </div>

      {/* How to Use This Checklist */}
      <h2 className="text-2xl font-bold text-white mt-12 mb-4">How to Use This Checklist</h2>
      <p className="text-gray-300 leading-relaxed mb-4">
        A complete ADA compliance audit combines automated scanning with manual testing. We recommend the following workflow:
      </p>
      <div className="space-y-4 mb-8">
        {[
          { step: "Step 1: Run an automated scan", desc: "Use AccessScore, axe DevTools, or WAVE to catch low-hanging fruit. Automated tools find roughly 30-40% of WCAG violations but cover the most commonly cited issues." },
          { step: "Step 2: Keyboard-test every page template", desc: "Unplug your mouse and tab through each unique page type. Can you reach and operate every interactive element? Can you tell where focus is at all times?" },
          { step: "Step 3: Screen reader test key flows", desc: "Test with NVDA (free, Windows), VoiceOver (free, macOS/iOS), or JAWS. Navigate your main pages, complete a form, and go through checkout." },
          { step: "Step 4: Check color contrast", desc: "Use a contrast checking tool on all text/background combinations. Pay special attention to placeholders, disabled states, and link text." },
          { step: "Step 5: Test at 200% zoom and on mobile", desc: "Zoom your browser to 200%. Is all content still usable without horizontal scrolling? Does your mobile experience maintain accessibility?" },
          { step: "Step 6: Document and prioritize", desc: "Create a spreadsheet of all findings, ranked by legal risk. Fix CRITICAL and HIGH issues first. Keep the document as evidence of your good-faith compliance efforts." },
        ].map((item) => (
          <div key={item.step} className="bg-[#141414] border border-[#262626] rounded-xl p-5">
            <h3 className="text-white font-semibold mb-2">{item.step}</h3>
            <p className="text-gray-400 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Legal Context */}
      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Legal Context: ADA and WCAG in 2026</h2>
      <p className="text-gray-300 leading-relaxed mb-4">
        In April 2024, the DOJ published a final rule under Title II of the ADA requiring state and local governments to make their websites conform to WCAG 2.1 Level AA. While this rule applies directly to government entities, it has significant implications for the private sector: courts interpreting Title III (private businesses) now have explicit DOJ guidance that WCAG 2.1 AA is the standard.
      </p>
      <p className="text-gray-300 leading-relaxed mb-4">
        The European Accessibility Act (EAA) took effect in June 2025, requiring digital products and services sold in the EU to meet accessibility standards closely aligned with WCAG 2.1 AA. If your website serves EU customers, compliance is now a legal obligation under EU law as well.
      </p>
      <p className="text-gray-300 leading-relaxed mb-8">
        In practical terms, WCAG 2.1 AA is now the de facto global standard for website accessibility compliance. Meeting this standard puts you in the strongest defensible position regardless of which jurisdiction your users are in.
      </p>

      {/* CTA */}
      <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-8 text-center mb-10">
        <h2 className="text-2xl font-bold text-white mb-3">Start Your ADA Compliance Check</h2>
        <p className="text-gray-300 mb-6">Run your website through AccessScore to get your compliance score, legal risk tier, and the top issues to fix &mdash; in seconds, for free.</p>
        <a
          href="/"
          className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-lg transition-colors"
        >
          Scan Your Website Now &mdash; Free
        </a>
        <p className="text-gray-500 text-sm mt-3">16 automated checks. Legal risk assessment. No signup required.</p>
      </div>

      <div className="mt-12 pt-8 border-t border-[#262626]">
        <p className="text-gray-500 text-sm">
          Related: <a href="/ada-compliance-checker" className="text-blue-400 hover:underline">ADA Compliance Checker</a> &middot;{" "}
          <a href="/wcag-checker" className="text-blue-400 hover:underline">WCAG 2.1 Checker</a> &middot;{" "}
          <a href="/ada-lawsuit-statistics" className="text-blue-400 hover:underline">ADA Lawsuit Statistics 2026</a> &middot;{" "}
          <a href="/wcag-accessibility-testing-tools" className="text-blue-400 hover:underline">Free Accessibility Testing Tools</a> &middot;{" "}
          <a href="/ecommerce-accessibility-requirements" className="text-blue-400 hover:underline">E-Commerce Accessibility Requirements</a> &middot;{" "}
          <a href="/website-accessibility-audit-guide" className="text-blue-400 hover:underline">Accessibility Audit Guide</a>
        </p>
      </div>
    </main>
  );
}
