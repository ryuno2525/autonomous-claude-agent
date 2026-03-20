import { CheckResult } from "./images";

export function checkFormLabels(html: string): CheckResult {
  const inputRegex = /<(input|select|textarea)\b([^>]*)>/gi;
  const labelRegex = /<label\b[^>]*\bfor\s*=\s*["']([^"']*)["'][^>]*>/gi;
  const issues: { html: string; issue: string }[] = [];

  // Collect all label "for" values
  const labelFors = new Set<string>();
  let labelMatch;
  while ((labelMatch = labelRegex.exec(html)) !== null) {
    labelFors.add(labelMatch[1]);
  }

  const inputs: string[] = [];
  let match;

  while ((match = inputRegex.exec(html)) !== null) {
    const attrs = match[2];
    const type = attrs.match(/\btype\s*=\s*["']([^"']*)["']/i);
    const typeVal = type ? type[1].toLowerCase() : "text";

    // Skip hidden, submit, button, image, reset types
    if (["hidden", "submit", "button", "image", "reset"].includes(typeVal)) continue;

    inputs.push(match[0]);

    const idMatch = attrs.match(/\bid\s*=\s*["']([^"']*)["']/i);
    const hasAriaLabel = /\baria-label\s*=\s*["'][^"']+["']/i.test(attrs);
    const hasAriaLabelledby = /\baria-labelledby\s*=\s*["'][^"']+["']/i.test(attrs);
    const hasTitle = /\btitle\s*=\s*["'][^"']+["']/i.test(attrs);

    const hasLabelFor = idMatch ? labelFors.has(idMatch[1]) : false;

    if (!hasLabelFor && !hasAriaLabel && !hasAriaLabelledby && !hasTitle) {
      issues.push({
        html: match[0].slice(0, 200),
        issue: `${match[1]} element (type="${typeVal}") has no associated label, aria-label, or title`,
      });
    }
  }

  const total = inputs.length;
  const score = total === 0 ? 100 : Math.round(((total - issues.length) / total) * 100);

  return {
    id: "form-labels",
    name: "Form Labels",
    category: "Forms & Interactions",
    severity: "HIGH",
    passed: issues.length === 0,
    score,
    totalElements: total,
    failingElements: issues.length,
    details:
      total === 0
        ? "No form inputs found."
        : issues.length === 0
          ? `All ${total} form inputs have proper labels.`
          : `${issues.length} of ${total} form inputs are missing labels. This is the #2 most cited ADA violation.`,
    elements: issues.slice(0, 10),
    wcag: "SC 1.3.1 Info and Relationships (Level A), SC 4.1.2 Name, Role, Value (Level A)",
    fixDescription: "Add a <label> with matching for/id attributes, or use aria-label on the input.",
    fixBefore: '<input type="email" placeholder="Email">',
    fixAfter: '<label for="email">Email address</label>\n<input type="email" id="email" placeholder="Email">',
  };
}

export function checkButtonLabels(html: string): CheckResult {
  const buttonRegex = /<button\b([^>]*)>([\s\S]*?)<\/button>/gi;
  const issues: { html: string; issue: string }[] = [];
  let total = 0;
  let match;

  while ((match = buttonRegex.exec(html)) !== null) {
    total++;
    const attrs = match[1];
    const content = match[2].replace(/<[^>]*>/g, "").trim();
    const hasAriaLabel = /\baria-label\s*=\s*["'][^"']+["']/i.test(attrs);
    const hasTitle = /\btitle\s*=\s*["'][^"']+["']/i.test(attrs);

    if (!content && !hasAriaLabel && !hasTitle) {
      issues.push({
        html: match[0].slice(0, 200),
        issue: "Button has no text content, aria-label, or title",
      });
    }
  }

  // Also check input[type=button/submit] without value
  const inputBtnRegex = /<input\b([^>]*\btype\s*=\s*["'](button|submit)["'][^>]*)>/gi;
  while ((match = inputBtnRegex.exec(html)) !== null) {
    total++;
    const attrs = match[1];
    const hasValue = /\bvalue\s*=\s*["'][^"']+["']/i.test(attrs);
    const hasAriaLabel = /\baria-label\s*=\s*["'][^"']+["']/i.test(attrs);

    if (!hasValue && !hasAriaLabel) {
      issues.push({
        html: match[0].slice(0, 200),
        issue: "Submit/button input has no value or aria-label",
      });
    }
  }

  const score = total === 0 ? 100 : Math.round(((total - issues.length) / total) * 100);

  return {
    id: "button-labels",
    name: "Button Accessible Names",
    category: "Forms & Interactions",
    severity: "HIGH",
    passed: issues.length === 0,
    score,
    totalElements: total,
    failingElements: issues.length,
    details:
      total === 0
        ? "No buttons found."
        : issues.length === 0
          ? `All ${total} buttons have accessible names.`
          : `${issues.length} of ${total} buttons are missing accessible names.`,
    elements: issues.slice(0, 10),
    wcag: "SC 4.1.2 Name, Role, Value (Level A)",
    fixDescription: "Add text content, aria-label, or title to all buttons.",
    fixBefore: '<button><svg>...</svg></button>',
    fixAfter: '<button aria-label="Close menu"><svg>...</svg></button>',
  };
}
