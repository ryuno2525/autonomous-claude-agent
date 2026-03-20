import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Complete Website Accessibility Checklist 2026 | AccessScore",
  description:
    "Comprehensive WCAG 2.1 AA accessibility checklist for websites. Covers images, forms, navigation, structure, and more. With automated checking tool.",
  alternates: { canonical: "https://accessscore.autonomous-claude.com/accessibility-checklist" },
};

export default function AccessibilityChecklistPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Complete Website Accessibility Checklist 2026",
    "description": "Comprehensive WCAG 2.1 AA accessibility checklist for websites. Covers images, forms, navigation, structure, and more. With automated checking tool.",
    "datePublished": "2026-03-14",
    "dateModified": "2026-03-14",
    "author": { "@type": "Organization", "name": "AccessScore" },
    "publisher": { "@type": "Organization", "name": "AccessScore", "url": "https://accessscore.autonomous-claude.com" },
    "mainEntityOfPage": "https://accessscore.autonomous-claude.com/accessibility-checklist"
  };

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <h1 className="text-4xl font-bold text-white mb-6">Complete Website Accessibility Checklist 2026</h1>

      <p className="text-gray-300 leading-relaxed mb-6 text-lg">
        This checklist covers the most critical WCAG 2.1 Level A and AA success criteria for website
        accessibility. Use it alongside our <a href="/" className="text-blue-400 hover:underline">free automated scanner</a> to
        identify and fix accessibility barriers on your website.
      </p>

      <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 mb-8">
        <p className="text-blue-300 text-sm">
          <strong>Note:</strong> Automated tools can detect approximately 30-40% of accessibility issues.
          This checklist includes items that require manual verification. Items marked with ⚡ can be
          automatically checked by AccessScore.
        </p>
      </div>

      {/* Checklist sections */}
      {[
        {
          title: "Images & Media",
          items: [
            { text: "All <img> elements have alt attributes", auto: true, wcag: "SC 1.1.1" },
            { text: "Alt text is descriptive and concise (not file names or placeholder text)", auto: true, wcag: "SC 1.1.1" },
            { text: "Decorative images use alt=\"\" (empty alt)", auto: false, wcag: "SC 1.1.1" },
            { text: "Complex images (charts, diagrams) have extended descriptions", auto: false, wcag: "SC 1.1.1" },
            { text: "Videos have captions (closed captions or subtitles)", auto: true, wcag: "SC 1.2.2" },
            { text: "Videos have audio descriptions for visual-only content", auto: false, wcag: "SC 1.2.5" },
            { text: "Audio-only content has a text transcript", auto: false, wcag: "SC 1.2.1" },
            { text: "No autoplaying audio without mute controls", auto: true, wcag: "SC 1.4.2" },
            { text: "No content that flashes more than 3 times per second", auto: false, wcag: "SC 2.3.1" },
          ],
        },
        {
          title: "Text & Typography",
          items: [
            { text: "Text color contrast ratio is at least 4.5:1 (normal text) or 3:1 (large text)", auto: false, wcag: "SC 1.4.3" },
            { text: "Text can be resized to 200% without loss of content", auto: true, wcag: "SC 1.4.4" },
            { text: "Content reflows properly at 320px width (no horizontal scrolling)", auto: false, wcag: "SC 1.4.10" },
            { text: "Text spacing can be adjusted without breaking layout", auto: false, wcag: "SC 1.4.12" },
            { text: "No images of text (use real text with CSS styling)", auto: false, wcag: "SC 1.4.5" },
          ],
        },
        {
          title: "Structure & Headings",
          items: [
            { text: "One H1 per page, used for the main topic", auto: true, wcag: "SC 1.3.1" },
            { text: "Heading levels don't skip (H1 → H2 → H3, not H1 → H3)", auto: true, wcag: "SC 1.3.1" },
            { text: "Headings accurately describe the content that follows", auto: false, wcag: "SC 2.4.6" },
            { text: "Semantic HTML used (main, nav, header, footer, article, section)", auto: true, wcag: "SC 1.3.1" },
            { text: "Lists use proper markup (ul, ol, li)", auto: false, wcag: "SC 1.3.1" },
            { text: "Data tables have th elements for headers", auto: true, wcag: "SC 1.3.1" },
            { text: "Complex tables use scope or headers attributes", auto: false, wcag: "SC 1.3.1" },
          ],
        },
        {
          title: "Navigation & Links",
          items: [
            { text: "Skip navigation link is the first focusable element", auto: true, wcag: "SC 2.4.1" },
            { text: "All functionality is available via keyboard", auto: false, wcag: "SC 2.1.1" },
            { text: "No keyboard traps (focus can always be moved away)", auto: false, wcag: "SC 2.1.2" },
            { text: "Focus indicator is visible on all interactive elements", auto: false, wcag: "SC 2.4.7" },
            { text: "Tab order follows visual reading order", auto: true, wcag: "SC 2.4.3" },
            { text: "Link text describes the destination (no 'click here')", auto: true, wcag: "SC 2.4.4" },
            { text: "Navigation is consistent across pages", auto: false, wcag: "SC 3.2.3" },
            { text: "Multiple ways to find pages (search, sitemap, navigation)", auto: false, wcag: "SC 2.4.5" },
          ],
        },
        {
          title: "Forms & Input",
          items: [
            { text: "All form inputs have associated labels", auto: true, wcag: "SC 1.3.1" },
            { text: "Required fields are identified (not just by color)", auto: false, wcag: "SC 1.3.1" },
            { text: "Error messages identify the field and describe the error", auto: false, wcag: "SC 3.3.1" },
            { text: "Error suggestions provide correction guidance", auto: false, wcag: "SC 3.3.3" },
            { text: "Form submissions can be reviewed and corrected before final submission", auto: false, wcag: "SC 3.3.4" },
            { text: "All buttons have accessible names", auto: true, wcag: "SC 4.1.2" },
            { text: "Custom widgets have appropriate ARIA roles, states, and properties", auto: false, wcag: "SC 4.1.2" },
          ],
        },
        {
          title: "Document & Page Level",
          items: [
            { text: "HTML lang attribute is set and valid", auto: true, wcag: "SC 3.1.1" },
            { text: "Page has a descriptive <title>", auto: true, wcag: "SC 2.4.2" },
            { text: "Iframes have descriptive title attributes", auto: true, wcag: "SC 4.1.2" },
            { text: "HTML validates without significant errors", auto: false, wcag: "SC 4.1.1" },
            { text: "No timed content without ability to extend or disable timer", auto: false, wcag: "SC 2.2.1" },
            { text: "Status messages use ARIA live regions", auto: false, wcag: "SC 4.1.3" },
          ],
        },
      ].map((section) => (
        <section key={section.title} className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">{section.title}</h2>
          <div className="space-y-2">
            {section.items.map((item) => (
              <div
                key={item.text}
                className="bg-[#141414] border border-[#262626] rounded-lg p-4 flex items-start gap-3"
              >
                <div className="w-5 h-5 border-2 border-[#444] rounded mt-0.5 shrink-0" />
                <div className="flex-1">
                  <p className="text-gray-300 text-sm">{item.text}</p>
                  <p className="text-gray-600 text-xs mt-1">{item.wcag}</p>
                </div>
                {item.auto && (
                  <span className="text-blue-400 text-xs shrink-0" title="Automatically checked by AccessScore">
                    ⚡ Auto
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>
      ))}

      <div className="text-center mt-10">
        <a
          href="/"
          className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-lg transition-colors"
        >
          Run Automated Checks — Free
        </a>
        <p className="text-gray-500 text-sm mt-3">
          AccessScore automatically checks items marked with ⚡ across your entire page.
        </p>
      </div>

      <div className="mt-12 pt-8 border-t border-[#262626]">
        <p className="text-gray-500 text-sm">
          Related: <a href="/free-accessibility-audit" className="text-blue-400 hover:underline">Free Accessibility Audit</a> &middot;{" "}
          <a href="/fix-website-accessibility" className="text-blue-400 hover:underline">Fix Accessibility Issues</a> &middot;{" "}
          <a href="/wcag-checker" className="text-blue-400 hover:underline">WCAG 2.1 Checker</a> &middot;{" "}
          <a href="/ada-compliance-checker" className="text-blue-400 hover:underline">ADA Compliance Checker</a> &middot;{" "}
          <a href="/website-accessibility-audit-guide" className="text-blue-400 hover:underline">Audit Guide</a>
        </p>
      </div>
    </main>
  );
}
