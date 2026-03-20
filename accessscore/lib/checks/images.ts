export interface CheckResult {
  id: string;
  name: string;
  category: string;
  severity: "HIGH" | "MEDIUM" | "LOW";
  passed: boolean;
  score: number; // 0-100
  totalElements: number;
  failingElements: number;
  details: string;
  elements: { html: string; issue: string }[];
  wcag: string;
  fixDescription: string;
  fixBefore: string;
  fixAfter: string;
}

export function checkAltText(html: string): CheckResult {
  const imgRegex = /<img\b([^>]*)>/gi;
  const images: { tag: string; hasAlt: boolean; altValue: string }[] = [];
  let match;

  while ((match = imgRegex.exec(html)) !== null) {
    const attrs = match[1];
    const altMatch = attrs.match(/\balt\s*=\s*["']([^"']*)["']/i);
    const hasAlt = altMatch !== null;
    const altValue = altMatch ? altMatch[1] : "";
    images.push({ tag: match[0], hasAlt, altValue });
  }

  if (images.length === 0) {
    return {
      id: "img-alt",
      name: "Image Alt Text",
      category: "Images & Media",
      severity: "HIGH",
      passed: true,
      score: 100,
      totalElements: 0,
      failingElements: 0,
      details: "No images found on the page.",
      elements: [],
      wcag: "SC 1.1.1 Non-text Content (Level A)",
      fixDescription: "Add descriptive alt text to every <img> tag.",
      fixBefore: '<img src="/photo.jpg">',
      fixAfter: '<img src="/photo.jpg" alt="Description of the image">',
    };
  }

  const missing = images.filter((i) => !i.hasAlt);
  const failCount = missing.length;
  const score = Math.round(((images.length - failCount) / images.length) * 100);

  return {
    id: "img-alt",
    name: "Image Alt Text",
    category: "Images & Media",
    severity: "HIGH",
    passed: failCount === 0,
    score,
    totalElements: images.length,
    failingElements: failCount,
    details:
      failCount === 0
        ? `All ${images.length} images have alt text.`
        : `${failCount} of ${images.length} images are missing alt text. This is the #1 most cited violation in ADA lawsuits.`,
    elements: missing.slice(0, 10).map((m) => ({
      html: m.tag.slice(0, 200),
      issue: "Missing alt attribute",
    })),
    wcag: "SC 1.1.1 Non-text Content (Level A)",
    fixDescription:
      "Add descriptive alt text to every <img> tag. If an image is purely decorative, use alt=\"\" (empty string).",
    fixBefore: '<img src="/hero-banner.jpg">',
    fixAfter: '<img src="/hero-banner.jpg" alt="Team working in modern office space">',
  };
}

export function checkAltTextQuality(html: string): CheckResult {
  const imgRegex = /<img\b([^>]*)>/gi;
  const badPatterns = [/^image/i, /^img/i, /^photo/i, /^picture/i, /^untitled/i, /^\d+$/, /\.(jpg|jpeg|png|gif|svg|webp|bmp)$/i];
  const issues: { html: string; issue: string }[] = [];
  let total = 0;
  let match;

  while ((match = imgRegex.exec(html)) !== null) {
    const attrs = match[1];
    const altMatch = attrs.match(/\balt\s*=\s*["']([^"']*)["']/i);
    if (!altMatch) continue;
    const altValue = altMatch[1].trim();
    if (!altValue) continue; // empty alt is valid for decorative
    total++;

    for (const pattern of badPatterns) {
      if (pattern.test(altValue)) {
        issues.push({
          html: match[0].slice(0, 200),
          issue: `Alt text "${altValue}" is not descriptive`,
        });
        break;
      }
    }

    if (altValue.length > 150) {
      issues.push({
        html: match[0].slice(0, 200),
        issue: `Alt text is too long (${altValue.length} chars) — keep under 125 characters`,
      });
    }
  }

  if (total === 0) {
    return {
      id: "img-alt-quality",
      name: "Alt Text Quality",
      category: "Images & Media",
      severity: "MEDIUM",
      passed: true,
      score: 100,
      totalElements: 0,
      failingElements: 0,
      details: "No images with alt text to evaluate.",
      elements: [],
      wcag: "SC 1.1.1 Non-text Content (Level A)",
      fixDescription: "Use descriptive, concise alt text.",
      fixBefore: '<img src="/photo.jpg" alt="IMG_2847.jpg">',
      fixAfter: '<img src="/photo.jpg" alt="Golden retriever playing in park">',
    };
  }

  const score = Math.round(((total - issues.length) / total) * 100);

  return {
    id: "img-alt-quality",
    name: "Alt Text Quality",
    category: "Images & Media",
    severity: "MEDIUM",
    passed: issues.length === 0,
    score,
    totalElements: total,
    failingElements: issues.length,
    details:
      issues.length === 0
        ? `All ${total} images have descriptive alt text.`
        : `${issues.length} of ${total} images have poor quality alt text (file names, generic text, or excessively long).`,
    elements: issues.slice(0, 10),
    wcag: "SC 1.1.1 Non-text Content (Level A)",
    fixDescription: "Replace generic alt text with descriptive, concise descriptions (under 125 characters).",
    fixBefore: '<img src="/photo.jpg" alt="IMG_2847.jpg">',
    fixAfter: '<img src="/photo.jpg" alt="Golden retriever playing in a sunlit park">',
  };
}

export function checkMediaCaptions(html: string): CheckResult {
  const videoRegex = /<video\b[^>]*>[\s\S]*?<\/video>/gi;
  const audioRegex = /<audio\b[^>]*>[\s\S]*?<\/audio>/gi;
  const issues: { html: string; issue: string }[] = [];
  let total = 0;
  let match;

  while ((match = videoRegex.exec(html)) !== null) {
    total++;
    if (!/<track\b/i.test(match[0])) {
      issues.push({
        html: match[0].slice(0, 200),
        issue: "Video missing <track> element for captions",
      });
    }
  }

  while ((match = audioRegex.exec(html)) !== null) {
    total++;
    if (!/<track\b/i.test(match[0])) {
      issues.push({
        html: match[0].slice(0, 200),
        issue: "Audio missing <track> element for captions/transcript",
      });
    }
  }

  const score = total === 0 ? 100 : Math.round(((total - issues.length) / total) * 100);

  return {
    id: "media-captions",
    name: "Media Captions",
    category: "Images & Media",
    severity: "HIGH",
    passed: issues.length === 0,
    score,
    totalElements: total,
    failingElements: issues.length,
    details:
      total === 0
        ? "No video or audio elements found."
        : issues.length === 0
          ? `All ${total} media elements have caption tracks.`
          : `${issues.length} of ${total} media elements are missing caption tracks.`,
    elements: issues.slice(0, 10),
    wcag: "SC 1.2.2 Captions (Prerecorded) (Level A)",
    fixDescription: "Add <track> elements with captions to all video and audio content.",
    fixBefore: '<video src="/demo.mp4" controls></video>',
    fixAfter: '<video src="/demo.mp4" controls>\n  <track kind="captions" src="/captions.vtt" srclang="en" label="English">\n</video>',
  };
}

export function checkAutoplay(html: string): CheckResult {
  const mediaRegex = /<(video|audio)\b([^>]*)>/gi;
  const issues: { html: string; issue: string }[] = [];
  let total = 0;
  let match;

  while ((match = mediaRegex.exec(html)) !== null) {
    const attrs = match[2];
    if (/\bautoplay\b/i.test(attrs)) {
      total++;
      if (!/\bmuted\b/i.test(attrs)) {
        issues.push({
          html: match[0].slice(0, 200),
          issue: `${match[1]} has autoplay without muted attribute`,
        });
      }
    }
  }

  return {
    id: "autoplay-muted",
    name: "Autoplay Media",
    category: "Images & Media",
    severity: "MEDIUM",
    passed: issues.length === 0,
    score: total === 0 ? 100 : Math.round(((total - issues.length) / total) * 100),
    totalElements: total,
    failingElements: issues.length,
    details:
      total === 0
        ? "No autoplaying media found."
        : issues.length === 0
          ? "All autoplaying media are muted."
          : `${issues.length} media element(s) autoplay without being muted.`,
    elements: issues.slice(0, 10),
    wcag: "SC 1.4.2 Audio Control (Level A)",
    fixDescription: "Add the muted attribute to any autoplaying media, or remove autoplay.",
    fixBefore: '<video autoplay src="/bg.mp4">',
    fixAfter: '<video autoplay muted src="/bg.mp4">',
  };
}
