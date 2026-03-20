import { CheckResult } from "./checks/images";

export interface PrioritizedIssue {
  rank: number;
  checkId: string;
  name: string;
  category: string;
  severity: "HIGH" | "MEDIUM" | "LOW";
  priorityScore: number;
  failingElements: number;
  riskImpact: string;
  details: string;
  wcag: string;
  fixDescription: string;
  fixBefore: string;
  fixAfter: string;
  elements: { html: string; issue: string }[];
}

// Checks most commonly cited in ADA lawsuits get higher legal risk scores
const LEGAL_RISK_SCORES: Record<string, number> = {
  "img-alt": 10,
  "form-labels": 9,
  "lang-attr": 8,
  "page-title": 7,
  "heading-hierarchy": 7,
  "viewport-zoom": 8,
  "button-labels": 7,
  "link-text": 6,
  "landmarks": 5,
  "skip-nav": 5,
  "media-captions": 8,
  "img-alt-quality": 4,
  "autoplay-muted": 4,
  "tabindex": 3,
  "table-headers": 4,
  "iframe-titles": 3,
};

// How easy is each fix (1=hard, 3=easy)
const FIX_EASE: Record<string, number> = {
  "img-alt": 3,
  "form-labels": 2,
  "lang-attr": 3,
  "page-title": 3,
  "heading-hierarchy": 2,
  "viewport-zoom": 3,
  "button-labels": 2,
  "link-text": 2,
  "landmarks": 2,
  "skip-nav": 2,
  "media-captions": 1,
  "img-alt-quality": 2,
  "autoplay-muted": 3,
  "tabindex": 3,
  "table-headers": 2,
  "iframe-titles": 3,
};

function getRiskImpact(check: CheckResult, totalFailures: number): string {
  if (totalFailures === 0) return "N/A";
  const legalWeight = LEGAL_RISK_SCORES[check.id] || 5;
  const estimatedReduction = Math.round((legalWeight / 80) * 100);
  return `Fixing this could reduce your risk exposure by ~${Math.min(estimatedReduction, 40)}%`;
}

export function prioritizeIssues(checks: CheckResult[]): PrioritizedIssue[] {
  const failedChecks = checks.filter((c) => !c.passed);
  const totalFailures = failedChecks.length;

  const scored = failedChecks.map((check) => {
    const legalRisk = LEGAL_RISK_SCORES[check.id] || 5;
    const fixEase = FIX_EASE[check.id] || 2;
    const elementCount = Math.min(check.failingElements, 10); // Cap influence
    const priorityScore = legalRisk * 3 + fixEase * 2 + elementCount;

    return {
      check,
      priorityScore,
    };
  });

  scored.sort((a, b) => b.priorityScore - a.priorityScore);

  return scored.map((item, index) => ({
    rank: index + 1,
    checkId: item.check.id,
    name: item.check.name,
    category: item.check.category,
    severity: item.check.severity,
    priorityScore: item.priorityScore,
    failingElements: item.check.failingElements,
    riskImpact: getRiskImpact(item.check, totalFailures),
    details: item.check.details,
    wcag: item.check.wcag,
    fixDescription: item.check.fixDescription,
    fixBefore: item.check.fixBefore,
    fixAfter: item.check.fixAfter,
    elements: item.check.elements,
  }));
}
