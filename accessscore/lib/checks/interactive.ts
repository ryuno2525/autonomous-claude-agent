import { CheckResult } from "./images";

export function checkTabindex(html: string): CheckResult {
  const tabindexRegex = /\btabindex\s*=\s*["'](\d+)["']/gi;
  const issues: { html: string; issue: string }[] = [];
  let total = 0;
  let match;

  while ((match = tabindexRegex.exec(html)) !== null) {
    const value = parseInt(match[1]);
    if (value > 0) {
      total++;
      // Get surrounding context
      const start = Math.max(0, match.index - 50);
      const end = Math.min(html.length, match.index + match[0].length + 50);
      const context = html.slice(start, end).replace(/[\n\r]+/g, " ").trim();
      issues.push({
        html: context.slice(0, 200),
        issue: `tabindex="${value}" — positive tabindex breaks natural tab order`,
      });
    }
  }

  return {
    id: "tabindex",
    name: "Tab Order",
    category: "Forms & Interactions",
    severity: "MEDIUM",
    passed: issues.length === 0,
    score: issues.length === 0 ? 100 : Math.max(0, 100 - issues.length * 20),
    totalElements: total || 0,
    failingElements: issues.length,
    details:
      issues.length === 0
        ? "No positive tabindex values found. Tab order follows DOM order."
        : `${issues.length} element(s) with positive tabindex values. This overrides the natural reading order and causes navigation confusion.`,
    elements: issues.slice(0, 10),
    wcag: "SC 2.4.3 Focus Order (Level A)",
    fixDescription: "Remove positive tabindex values. Use tabindex=\"0\" to make elements focusable, or tabindex=\"-1\" for programmatic focus.",
    fixBefore: '<div tabindex="5">Important</div>',
    fixAfter: '<div tabindex="0">Important</div>',
  };
}

export function checkTables(html: string): CheckResult {
  const tableRegex = /<table\b[^>]*>[\s\S]*?<\/table>/gi;
  const issues: { html: string; issue: string }[] = [];
  let total = 0;
  let match;

  while ((match = tableRegex.exec(html)) !== null) {
    const table = match[0];
    // Skip layout tables (common pattern: single cell, no th)
    const hasTh = /<th\b/i.test(table);
    const hasTd = /<td\b/i.test(table);

    if (!hasTd) continue; // Not a real data table

    total++;

    if (!hasTh) {
      issues.push({
        html: table.slice(0, 200),
        issue: "Data table has no <th> header cells — screen readers can't announce column/row headers",
      });
    }
  }

  const score = total === 0 ? 100 : Math.round(((total - issues.length) / total) * 100);

  return {
    id: "table-headers",
    name: "Table Headers",
    category: "Document & Meta",
    severity: "MEDIUM",
    passed: issues.length === 0,
    score,
    totalElements: total,
    failingElements: issues.length,
    details:
      total === 0
        ? "No data tables found."
        : issues.length === 0
          ? `All ${total} data tables have header cells.`
          : `${issues.length} of ${total} data tables are missing <th> header cells.`,
    elements: issues.slice(0, 5),
    wcag: "SC 1.3.1 Info and Relationships (Level A)",
    fixDescription: "Use <th> elements for table headers, not <td> with bold styling.",
    fixBefore: "<tr><td><b>Name</b></td><td><b>Price</b></td></tr>",
    fixAfter: "<tr><th>Name</th><th>Price</th></tr>",
  };
}

export function checkIframeTitles(html: string): CheckResult {
  const iframeRegex = /<iframe\b([^>]*)>/gi;
  const issues: { html: string; issue: string }[] = [];
  let total = 0;
  let match;

  while ((match = iframeRegex.exec(html)) !== null) {
    total++;
    const attrs = match[1];
    const hasTitle = /\btitle\s*=\s*["'][^"']+["']/i.test(attrs);
    const hasAriaLabel = /\baria-label\s*=\s*["'][^"']+["']/i.test(attrs);

    if (!hasTitle && !hasAriaLabel) {
      issues.push({
        html: match[0].slice(0, 200),
        issue: "Iframe missing title attribute — screen readers can't describe embedded content",
      });
    }
  }

  const score = total === 0 ? 100 : Math.round(((total - issues.length) / total) * 100);

  return {
    id: "iframe-titles",
    name: "Iframe Titles",
    category: "Document & Meta",
    severity: "MEDIUM",
    passed: issues.length === 0,
    score,
    totalElements: total,
    failingElements: issues.length,
    details:
      total === 0
        ? "No iframes found."
        : issues.length === 0
          ? `All ${total} iframes have titles.`
          : `${issues.length} of ${total} iframes are missing title attributes.`,
    elements: issues.slice(0, 10),
    wcag: "SC 4.1.2 Name, Role, Value (Level A)",
    fixDescription: "Add a descriptive title attribute to every <iframe>.",
    fixBefore: '<iframe src="https://maps.google.com/..."></iframe>',
    fixAfter: '<iframe src="https://maps.google.com/..." title="Google Maps showing office location"></iframe>',
  };
}
