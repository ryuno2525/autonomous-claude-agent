import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Fix Website Accessibility Issues — Step-by-Step Guide | AccessScore",
  description:
    "Fix the 10 most common website accessibility issues with copy-paste code examples. WCAG 2.1 fixes for alt text, form labels, ARIA, headings, and more. Reduce ADA lawsuit risk today.",
  alternates: { canonical: "https://accessscore.autonomous-claude.com/fix-website-accessibility" },
};

export default function FixWebsiteAccessibilityPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Fix the 10 Most Common Website Accessibility Issues",
    description: "Step-by-step guide to fixing WCAG 2.1 violations with code examples. Cover alt text, form labels, ARIA landmarks, heading hierarchy, and more.",
    datePublished: "2026-03-17",
    dateModified: "2026-03-17",
    author: { "@type": "Organization", name: "AccessScore" },
    publisher: { "@type": "Organization", name: "AccessScore", url: "https://accessscore.autonomous-claude.com" },
    mainEntityOfPage: "https://accessscore.autonomous-claude.com/fix-website-accessibility",
  };

  const fixes = [
    {
      rank: 1,
      title: "Missing Image Alt Text",
      wcag: "WCAG 1.1.1 (Level A)",
      lawsuitRate: "68% of ADA lawsuits cite this",
      description: "Screen readers announce images without alt text as their filename or nothing at all. This is the #1 cited violation in ADA website lawsuits.",
      before: `<img src="product-photo.jpg">`,
      after: `<img src="product-photo.jpg" alt="Red running shoe, side view, Nike Air Max 90">`,
      tip: "Decorative images (borders, spacers) should use alt=\"\" to be skipped by screen readers. Don't use alt text like \"image\" or \"photo\" — describe what the image shows.",
    },
    {
      rank: 2,
      title: "Missing Form Labels",
      wcag: "WCAG 1.3.1, 4.1.2 (Level A)",
      lawsuitRate: "54% of ADA lawsuits cite this",
      description: "Form inputs without associated labels are impossible for screen reader users to identify. They can't tell what information a field expects.",
      before: `<input type="email" placeholder="Enter email">`,
      after: `<label for="email">Email address</label>\n<input type="email" id="email" placeholder="Enter email">`,
      tip: "Placeholder text is NOT a substitute for labels. It disappears when typing, making forms confusing. Always use <label> elements with matching for/id attributes.",
    },
    {
      rank: 3,
      title: "Empty Links and Buttons",
      wcag: "WCAG 2.4.4, 4.1.2 (Level A)",
      lawsuitRate: "42% of ADA lawsuits cite this",
      description: "Links and buttons with no text content (or only an icon) are announced as 'link' or 'button' with no description. Users can't tell what they do.",
      before: `<a href="/cart"><i class="icon-cart"></i></a>\n<button><svg>...</svg></button>`,
      after: `<a href="/cart" aria-label="Shopping cart (3 items)">\n  <i class="icon-cart"></i>\n</a>\n<button aria-label="Close dialog">\n  <svg aria-hidden="true">...</svg>\n</button>`,
      tip: "Use aria-label for icon-only buttons/links. If a button contains visible text, don't add aria-label — the text itself serves as the accessible name.",
    },
    {
      rank: 4,
      title: "Missing HTML Language Attribute",
      wcag: "WCAG 3.1.1 (Level A)",
      lawsuitRate: "29% of ADA lawsuits cite this",
      description: "Without a lang attribute on the <html> element, screen readers don't know what language to use for pronunciation, producing garbled speech.",
      before: `<html>\n  <head>...</head>`,
      after: `<html lang="en">\n  <head>...</head>`,
      tip: "This is a 5-second fix that eliminates an entire category of legal risk. For multilingual pages, use the lang attribute on specific elements too: <p lang=\"es\">Hola mundo</p>.",
    },
    {
      rank: 5,
      title: "Missing Page Title",
      wcag: "WCAG 2.4.2 (Level A)",
      lawsuitRate: "28% of ADA lawsuits cite this",
      description: "The <title> element is the first thing screen readers announce when a page loads. Without it, users don't know where they are.",
      before: `<head>\n  <meta charset="utf-8">\n</head>`,
      after: `<head>\n  <meta charset="utf-8">\n  <title>Product Catalog - ACME Store</title>\n</head>`,
      tip: "Make titles unique and descriptive. Format: 'Page Name - Site Name'. In React/Next.js, set this in your metadata export or <Head> component.",
    },
    {
      rank: 6,
      title: "Broken Heading Hierarchy",
      wcag: "WCAG 1.3.1 (Level A)",
      lawsuitRate: "25% of lawsuits mention heading issues",
      description: "Screen reader users navigate by headings like a table of contents. Skipping levels (h1 → h3) or using multiple h1 tags creates a confusing page structure.",
      before: `<h1>Welcome</h1>\n<h3>Our Products</h3>  <!-- skipped h2 -->\n<h1>Contact</h1>     <!-- duplicate h1 -->`,
      after: `<h1>Welcome to ACME Store</h1>\n<h2>Our Products</h2>\n<h3>Electronics</h3>\n<h3>Clothing</h3>\n<h2>Contact Us</h2>`,
      tip: "Every page should have exactly one h1. Headings should follow a logical hierarchy (h1 → h2 → h3). Don't use headings for styling — use CSS classes instead.",
    },
    {
      rank: 7,
      title: "Missing Skip Navigation",
      wcag: "WCAG 2.4.1 (Level A)",
      lawsuitRate: "Increasingly cited in lawsuits",
      description: "Without a skip navigation link, keyboard and screen reader users must tab through every navigation link on every page load before reaching the main content.",
      before: `<body>\n  <nav><!-- 20 links --></nav>\n  <main>Content</main>\n</body>`,
      after: `<body>\n  <a href="#main" class="sr-only focus:not-sr-only\n    focus:absolute focus:top-4 focus:left-4\n    focus:bg-white focus:text-black focus:p-2\n    focus:rounded focus:z-50">\n    Skip to main content\n  </a>\n  <nav><!-- 20 links --></nav>\n  <main id="main">Content</main>\n</body>`,
      tip: "The skip link should be the first focusable element on the page. It's visually hidden until focused (using sr-only + focus:not-sr-only in Tailwind).",
    },
    {
      rank: 8,
      title: "Missing ARIA Landmarks",
      wcag: "WCAG 1.3.1 (Level A)",
      lawsuitRate: "Referenced in landmark navigation complaints",
      description: "ARIA landmarks (or their HTML5 equivalents) let screen reader users jump between major page sections — navigation, main content, search, footer.",
      before: `<div class="header">...</div>\n<div class="sidebar">...</div>\n<div class="content">...</div>\n<div class="footer">...</div>`,
      after: `<header>...</header>\n<nav aria-label="Main navigation">...</nav>\n<aside aria-label="Sidebar">...</aside>\n<main>...</main>\n<footer>...</footer>`,
      tip: "Use semantic HTML5 elements (<header>, <nav>, <main>, <footer>, <aside>) instead of <div> with ARIA roles. When you have multiple <nav> elements, give each a unique aria-label.",
    },
    {
      rank: 9,
      title: "Viewport Zoom Disabled",
      wcag: "WCAG 1.4.4 (Level AA)",
      lawsuitRate: "Increasingly cited for mobile sites",
      description: "Setting maximum-scale=1 or user-scalable=no prevents users with low vision from zooming in to read content. This is an outright WCAG failure.",
      before: `<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">`,
      after: `<meta name="viewport" content="width=device-width, initial-scale=1">`,
      tip: "Simply remove maximum-scale and user-scalable=no. If you're worried about layout breaking on zoom, fix the layout with responsive CSS — don't disable zoom.",
    },
    {
      rank: 10,
      title: "Low-Quality Link Text",
      wcag: "WCAG 2.4.4 (Level A)",
      lawsuitRate: "Common in comprehensive audits",
      description: "Links that say 'click here', 'read more', or 'learn more' give no context when read out of order. Screen reader users often navigate by listing all links on a page.",
      before: `<p>To see our products, <a href="/products">click here</a></p>\n<a href="/blog/post-1">Read more</a>`,
      after: `<p><a href="/products">View our product catalog</a></p>\n<a href="/blog/post-1">Read more about responsive design patterns</a>`,
      tip: "Each link should make sense out of context. Ask: 'If I read just this link text with no surrounding words, would I know where it goes?' If not, rewrite it.",
    },
  ];

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <h1 className="text-4xl font-bold text-white mb-6">How to Fix the 10 Most Common Website Accessibility Issues</h1>

      <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 mb-8">
        <p className="text-red-300 font-medium">
          These 10 issues account for over 85% of violations found in ADA website lawsuits.
          Fix them and you eliminate the vast majority of your legal risk. Each fix includes copy-paste code.
        </p>
      </div>

      <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 mb-8 text-center">
        <p className="text-blue-300 mb-3">Don&apos;t know which issues affect YOUR site?</p>
        <Link href="/" className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-colors">
          Run Free Scan — Results in 30 Seconds
        </Link>
      </div>

      <div className="prose prose-invert max-w-none">
        <p className="text-gray-300 leading-relaxed mb-6">
          Website accessibility doesn&apos;t require a $30,000 audit or a complete redesign. Most violations are straightforward
          HTML fixes that any developer can implement in minutes. Below are the 10 most impactful issues to fix, ranked by
          how frequently they appear in ADA lawsuits, with exact before-and-after code for each.
        </p>

        {fixes.map((fix) => (
          <div key={fix.rank} className="not-prose mb-8">
            <div className="bg-[#141414] border border-[#262626] rounded-xl p-6">
              <div className="flex items-start gap-4 mb-4">
                <span className="bg-blue-600 text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                  {fix.rank}
                </span>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-white">{fix.title}</h2>
                  <div className="flex flex-wrap gap-3 mt-1">
                    <span className="text-xs text-gray-500">{fix.wcag}</span>
                    <span className="text-xs text-red-400">{fix.lawsuitRate}</span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-300 mb-4">{fix.description}</p>

              <div className="grid md:grid-cols-2 gap-3 mb-4">
                <div className="bg-[#0a0a0a] rounded-lg p-3">
                  <p className="text-red-400 text-xs font-medium mb-2">BEFORE (broken):</p>
                  <pre className="text-gray-400 text-xs overflow-x-auto whitespace-pre-wrap">{fix.before}</pre>
                </div>
                <div className="bg-[#0a0a0a] rounded-lg p-3">
                  <p className="text-green-400 text-xs font-medium mb-2">AFTER (fixed):</p>
                  <pre className="text-gray-300 text-xs overflow-x-auto whitespace-pre-wrap">{fix.after}</pre>
                </div>
              </div>

              <div className="bg-blue-500/5 border border-blue-500/10 rounded-lg p-3">
                <p className="text-xs text-blue-300"><strong>Tip:</strong> {fix.tip}</p>
              </div>
            </div>
          </div>
        ))}

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">After Fixing: Verify Your Changes</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          After implementing these fixes, run a scan to verify they worked:
        </p>
        <div className="not-prose bg-[#141414] border border-[#262626] rounded-xl p-6 mb-6">
          <p className="text-gray-300 text-sm mb-3"><strong className="text-white">Option 1:</strong> Web scanner</p>
          <p className="text-gray-400 text-sm mb-4">Visit <Link href="/" className="text-blue-400 hover:underline">accessscore.autonomous-claude.com</Link> and enter your URL.</p>
          <p className="text-gray-300 text-sm mb-3"><strong className="text-white">Option 2:</strong> Command line</p>
          <pre className="text-green-400 text-sm bg-[#0a0a0a] rounded-lg p-3">npx accessscore https://your-website.com</pre>
        </div>

        <p className="text-gray-300 leading-relaxed mb-6">
          If your score improved, you&apos;ve reduced your ADA lawsuit risk. For a complete analysis of every issue with
          affected elements and a prioritized remediation plan, upgrade to the{" "}
          <Link href="/" className="text-blue-400 hover:underline">Pro Report for $1.99</Link>.
        </p>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">Common Frameworks: Quick Fixes</h2>
        <div className="not-prose grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { fw: "React / Next.js", tips: ["Use next/image with alt prop", "Add htmlFor on <label>", "Use next/head for <title>", "aria-label on icon buttons"] },
            { fw: "WordPress", tips: ["Always fill alt text on upload", "Use heading blocks properly", "Install WP Accessibility plugin", "Test with WAVE extension"] },
            { fw: "Vue / Nuxt", tips: ["Use v-bind:alt on images", "Add label with :for binding", "Use useHead() for title", "aria-label on router-links"] },
            { fw: "Static HTML", tips: ["Add lang to <html> tag", "Use semantic HTML5 elements", "Add skip nav link first", "Remove viewport zoom restrictions"] },
          ].map((f) => (
            <div key={f.fw} className="bg-[#141414] border border-[#262626] rounded-xl p-4">
              <h3 className="text-white font-semibold mb-2">{f.fw}</h3>
              <ul className="space-y-1">
                {f.tips.map((t) => (
                  <li key={t} className="text-xs text-gray-400 flex items-center gap-2">
                    <span className="text-green-400">&#10003;</span> {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-2xl p-8 mt-12 text-center">
        <h2 className="text-2xl font-bold text-white mb-3">Not Sure What to Fix First?</h2>
        <p className="text-gray-300 mb-6">Our free scan identifies your specific issues and prioritizes them by legal risk. Fix the highest-risk issues first.</p>
        <Link href="/" className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-lg transition-colors">
          Scan Your Site Free
        </Link>
      </div>

      {/* Related */}
      <div className="mt-12 pt-8 border-t border-[#262626]">
        <h3 className="text-lg font-semibold text-white mb-4">Related Resources</h3>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link href="/free-accessibility-audit" className="text-blue-400 hover:underline text-sm">Free Website Accessibility Audit</Link>
          <Link href="/ada-compliance-checker" className="text-blue-400 hover:underline text-sm">ADA Compliance Checker</Link>
          <Link href="/accessibility-checklist" className="text-blue-400 hover:underline text-sm">Complete Accessibility Checklist</Link>
          <Link href="/wcag-checker" className="text-blue-400 hover:underline text-sm">WCAG 2.1 Compliance Checker</Link>
          <Link href="/ada-lawsuit-statistics" className="text-blue-400 hover:underline text-sm">ADA Lawsuit Statistics 2026</Link>
          <Link href="/small-business-ada-compliance" className="text-blue-400 hover:underline text-sm">Small Business ADA Compliance</Link>
        </div>
      </div>
    </main>
  );
}
