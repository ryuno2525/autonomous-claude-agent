import { CheckResult } from "./images";

export function checkLangAttribute(html: string): CheckResult {
  const htmlTag = html.match(/<html\b([^>]*)>/i);
  const hasLang = htmlTag ? /\blang\s*=\s*["']([^"']+)["']/i.test(htmlTag[1]) : false;
  const langValue = htmlTag ? htmlTag[1].match(/\blang\s*=\s*["']([^"']+)["']/i)?.[1] : null;

  // Basic validation of lang code
  const validLang = langValue ? /^[a-z]{2}(-[A-Z]{2})?$/i.test(langValue) : false;

  return {
    id: "lang-attr",
    name: "HTML Language Attribute",
    category: "Document & Meta",
    severity: "HIGH",
    passed: hasLang && validLang,
    score: hasLang && validLang ? 100 : 0,
    totalElements: 1,
    failingElements: hasLang && validLang ? 0 : 1,
    details:
      hasLang && validLang
        ? `HTML lang attribute set to "${langValue}".`
        : !hasLang
          ? "HTML element is missing the lang attribute. Screen readers need this to select the correct voice profile."
          : `HTML lang attribute value "${langValue}" may not be a valid language code.`,
    elements: hasLang ? [] : [{ html: htmlTag?.[0] || "<html>", issue: "Missing lang attribute" }],
    wcag: "SC 3.1.1 Language of Page (Level A)",
    fixDescription: 'Add a lang attribute to the <html> element with the page\'s primary language.',
    fixBefore: "<html>",
    fixAfter: '<html lang="en">',
  };
}

export function checkPageTitle(html: string): CheckResult {
  const titleMatch = html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i);
  const titleText = titleMatch ? titleMatch[1].trim() : null;

  const passed = !!titleText && titleText.length > 0 && titleText.length < 200;

  return {
    id: "page-title",
    name: "Page Title",
    category: "Document & Meta",
    severity: "HIGH",
    passed,
    score: passed ? 100 : 0,
    totalElements: 1,
    failingElements: passed ? 0 : 1,
    details: passed
      ? `Page title found: "${titleText!.slice(0, 80)}${titleText!.length > 80 ? "..." : ""}"`
      : !titleText
        ? "No <title> element found. Every page must have a descriptive title."
        : "Page title is empty.",
    elements: passed ? [] : [{ html: "<head>", issue: "Missing or empty <title> element" }],
    wcag: "SC 2.4.2 Page Titled (Level A)",
    fixDescription: "Add a descriptive <title> element inside <head>.",
    fixBefore: "<head>\n  <!-- no title -->\n</head>",
    fixAfter: "<head>\n  <title>Your Page Title — Site Name</title>\n</head>",
  };
}

export function checkViewport(html: string): CheckResult {
  const viewportMeta = html.match(/<meta\b[^>]*name\s*=\s*["']viewport["'][^>]*>/i);
  if (!viewportMeta) {
    return {
      id: "viewport-zoom",
      name: "Viewport Zoom",
      category: "Document & Meta",
      severity: "HIGH",
      passed: true,
      score: 100,
      totalElements: 0,
      failingElements: 0,
      details: "No viewport meta tag found (zoom not restricted).",
      elements: [],
      wcag: "SC 1.4.4 Resize Text (Level AA)",
      fixDescription: "Don't restrict zoom. Use width=device-width, initial-scale=1.",
      fixBefore: '<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">',
      fixAfter: '<meta name="viewport" content="width=device-width, initial-scale=1">',
    };
  }

  const content = viewportMeta[0];
  const disablesZoom =
    /user-scalable\s*=\s*["']?no/i.test(content) ||
    /maximum-scale\s*=\s*["']?1([.\s,"]|$)/i.test(content);

  return {
    id: "viewport-zoom",
    name: "Viewport Zoom",
    category: "Document & Meta",
    severity: "HIGH",
    passed: !disablesZoom,
    score: disablesZoom ? 0 : 100,
    totalElements: 1,
    failingElements: disablesZoom ? 1 : 0,
    details: disablesZoom
      ? "Viewport meta tag prevents zoom. Users with low vision need to zoom to read content."
      : "Viewport allows zooming.",
    elements: disablesZoom
      ? [{ html: viewportMeta[0], issue: "Zoom is disabled (user-scalable=no or maximum-scale=1)" }]
      : [],
    wcag: "SC 1.4.4 Resize Text (Level AA)",
    fixDescription: "Remove user-scalable=no and set maximum-scale to at least 5.",
    fixBefore: '<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">',
    fixAfter: '<meta name="viewport" content="width=device-width, initial-scale=1">',
  };
}
