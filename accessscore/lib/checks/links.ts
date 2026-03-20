import { CheckResult } from "./images";

export function checkLinkText(html: string): CheckResult {
  const linkRegex = /<a\b([^>]*)>([\s\S]*?)<\/a>/gi;
  const badTexts = ["click here", "here", "read more", "more", "link", "learn more", "this"];
  const issues: { html: string; issue: string }[] = [];
  let total = 0;
  let match;

  while ((match = linkRegex.exec(html)) !== null) {
    const attrs = match[1];
    const textContent = match[2].replace(/<[^>]*>/g, "").trim().toLowerCase();

    // Skip anchor links, empty links (may be icon buttons with aria-label)
    if (!textContent) {
      const hasAriaLabel = /\baria-label\s*=\s*["'][^"']+["']/i.test(attrs);
      if (!hasAriaLabel) {
        total++;
        issues.push({
          html: match[0].slice(0, 200),
          issue: "Link has no text content or aria-label",
        });
      }
      continue;
    }

    total++;

    if (badTexts.includes(textContent)) {
      issues.push({
        html: match[0].slice(0, 200),
        issue: `Link text "${textContent}" is not descriptive — screen reader users hear links out of context`,
      });
    }
  }

  const score = total === 0 ? 100 : Math.round(((total - issues.length) / total) * 100);

  return {
    id: "link-text",
    name: "Link Text Quality",
    category: "Forms & Interactions",
    severity: "MEDIUM",
    passed: issues.length === 0,
    score,
    totalElements: total,
    failingElements: issues.length,
    details:
      total === 0
        ? "No links found."
        : issues.length === 0
          ? `All ${total} links have descriptive text.`
          : `${issues.length} of ${total} links have vague or missing text.`,
    elements: issues.slice(0, 10),
    wcag: "SC 2.4.4 Link Purpose (In Context) (Level A)",
    fixDescription: 'Make link text describe the destination. Avoid "click here" or "read more".',
    fixBefore: '<a href="/pricing">Click here</a>',
    fixAfter: '<a href="/pricing">View pricing plans</a>',
  };
}
