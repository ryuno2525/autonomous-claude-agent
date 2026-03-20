import { CheckResult } from "./images";

export function checkHeadingHierarchy(html: string): CheckResult {
  const headingRegex = /<(h[1-6])\b[^>]*>([\s\S]*?)<\/\1>/gi;
  const headings: { level: number; text: string; tag: string }[] = [];
  let match;

  while ((match = headingRegex.exec(html)) !== null) {
    const level = parseInt(match[1][1]);
    const text = match[2].replace(/<[^>]*>/g, "").trim();
    headings.push({ level, text, tag: match[0].slice(0, 150) });
  }

  if (headings.length === 0) {
    return {
      id: "heading-hierarchy",
      name: "Heading Hierarchy",
      category: "Structure & Navigation",
      severity: "MEDIUM",
      passed: false,
      score: 0,
      totalElements: 0,
      failingElements: 1,
      details: "No headings found. Pages should have at least one H1 and a logical heading structure.",
      elements: [{ html: "<body>...</body>", issue: "No headings found on page" }],
      wcag: "SC 1.3.1 Info and Relationships (Level A)",
      fixDescription: "Add a heading structure starting with a single H1, followed by H2s for sections.",
      fixBefore: "<div>Page Title</div>\n<div>Section</div>",
      fixAfter: "<h1>Page Title</h1>\n<h2>Section</h2>",
    };
  }

  const issues: { html: string; issue: string }[] = [];
  const h1Count = headings.filter((h) => h.level === 1).length;

  if (h1Count === 0) {
    issues.push({ html: "N/A", issue: "No H1 heading found — every page needs exactly one H1" });
  } else if (h1Count > 1) {
    issues.push({ html: "N/A", issue: `${h1Count} H1 headings found — should have exactly one` });
  }

  for (let i = 1; i < headings.length; i++) {
    const prev = headings[i - 1].level;
    const curr = headings[i].level;
    if (curr > prev + 1) {
      issues.push({
        html: headings[i].tag.slice(0, 150),
        issue: `Heading level skips from H${prev} to H${curr} (should not skip levels)`,
      });
    }
  }

  const score = issues.length === 0 ? 100 : Math.max(0, 100 - issues.length * 25);

  return {
    id: "heading-hierarchy",
    name: "Heading Hierarchy",
    category: "Structure & Navigation",
    severity: "MEDIUM",
    passed: issues.length === 0,
    score,
    totalElements: headings.length,
    failingElements: issues.length,
    details:
      issues.length === 0
        ? `Proper heading hierarchy with ${headings.length} headings and ${h1Count} H1.`
        : `Found ${issues.length} heading hierarchy issue(s).`,
    elements: issues.slice(0, 10),
    wcag: "SC 1.3.1 Info and Relationships (Level A)",
    fixDescription: "Use a single H1 per page. Follow with H2 for sections, H3 for subsections. Never skip levels.",
    fixBefore: "<h1>Title</h1>\n<h3>Subsection</h3>",
    fixAfter: "<h1>Title</h1>\n<h2>Section</h2>\n<h3>Subsection</h3>",
  };
}
