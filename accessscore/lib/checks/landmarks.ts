import { CheckResult } from "./images";

export function checkSkipNav(html: string): CheckResult {
  // Look for a skip navigation link — typically one of the first <a> tags with href="#main" or similar
  const firstLinks = html.match(/<a\b[^>]*href\s*=\s*["']#[^"']*["'][^>]*>[\s\S]*?<\/a>/gi) || [];
  const skipPatterns = /skip|main.content|jump.to|skip.to/i;

  const hasSkipNav = firstLinks.some((link) => {
    const text = link.replace(/<[^>]*>/g, "").trim();
    return skipPatterns.test(text) || skipPatterns.test(link);
  });

  return {
    id: "skip-nav",
    name: "Skip Navigation",
    category: "Structure & Navigation",
    severity: "MEDIUM",
    passed: hasSkipNav,
    score: hasSkipNav ? 100 : 0,
    totalElements: 1,
    failingElements: hasSkipNav ? 0 : 1,
    details: hasSkipNav
      ? "Skip navigation link found."
      : "No skip navigation link found. Keyboard users must tab through all navigation to reach content.",
    elements: hasSkipNav ? [] : [{ html: "<body>", issue: "No skip navigation link in the first focusable elements" }],
    wcag: "SC 2.4.1 Bypass Blocks (Level A)",
    fixDescription: 'Add a "Skip to main content" link as the first focusable element.',
    fixBefore: "<body>\n  <nav>..long nav..</nav>",
    fixAfter: '<body>\n  <a href="#main" class="skip-link">Skip to main content</a>\n  <nav>..long nav..</nav>\n  <main id="main">',
  };
}

export function checkLandmarks(html: string): CheckResult {
  const issues: { html: string; issue: string }[] = [];
  let total = 0;

  const hasMain = /<main\b/i.test(html) || /role\s*=\s*["']main["']/i.test(html);
  const hasNav = /<nav\b/i.test(html) || /role\s*=\s*["']navigation["']/i.test(html);
  const hasHeader = /<header\b/i.test(html) || /role\s*=\s*["']banner["']/i.test(html);
  const hasFooter = /<footer\b/i.test(html) || /role\s*=\s*["']contentinfo["']/i.test(html);

  total = 4;
  if (!hasMain) issues.push({ html: "<body>", issue: "No <main> landmark — screen readers can't identify primary content" });
  if (!hasNav) issues.push({ html: "<body>", issue: "No <nav> landmark — screen readers can't identify navigation" });
  if (!hasHeader) issues.push({ html: "<body>", issue: "No <header> landmark" });
  if (!hasFooter) issues.push({ html: "<body>", issue: "No <footer> landmark" });

  const score = Math.round(((total - issues.length) / total) * 100);

  return {
    id: "landmarks",
    name: "ARIA Landmarks",
    category: "Structure & Navigation",
    severity: "MEDIUM",
    passed: issues.length <= 1, // Allow missing footer
    score,
    totalElements: total,
    failingElements: issues.length,
    details:
      issues.length === 0
        ? "All essential ARIA landmarks present (main, nav, header, footer)."
        : `Missing ${issues.length} landmark(s). Screen readers rely on landmarks to navigate pages.`,
    elements: issues,
    wcag: "SC 1.3.1 Info and Relationships (Level A)",
    fixDescription: "Use semantic HTML5 elements: <main>, <nav>, <header>, <footer>.",
    fixBefore: '<div class="content">..page content..</div>',
    fixAfter: "<main>..page content..</main>",
  };
}
