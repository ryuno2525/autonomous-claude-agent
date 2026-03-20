import { CheckResult } from "./checks/images";
import { checkAltText, checkAltTextQuality, checkMediaCaptions, checkAutoplay } from "./checks/images";
import { checkHeadingHierarchy } from "./checks/headings";
import { checkFormLabels, checkButtonLabels } from "./checks/forms";
import { checkSkipNav, checkLandmarks } from "./checks/landmarks";
import { checkLinkText } from "./checks/links";
import { checkLangAttribute, checkPageTitle, checkViewport } from "./checks/document";
import { checkTabindex, checkTables, checkIframeTitles } from "./checks/interactive";
import { calculateRiskTier, RiskAssessment } from "./risk-model";
import { prioritizeIssues, PrioritizedIssue } from "./prioritizer";

export interface ScanResult {
  url: string;
  score: number;
  grade: string;
  checks: CheckResult[];
  risk: RiskAssessment;
  prioritizedIssues: PrioritizedIssue[];
  totalIssues: number;
  passedChecks: number;
  failedChecks: number;
  scanDate: string;
}

const CATEGORY_WEIGHTS: Record<string, number> = {
  "Images & Media": 0.25,
  "Structure & Navigation": 0.30,
  "Forms & Interactions": 0.25,
  "Document & Meta": 0.20,
};

function calculateScore(checks: CheckResult[]): number {
  const categories: Record<string, { total: number; weighted: number }> = {};

  for (const check of checks) {
    if (!categories[check.category]) {
      categories[check.category] = { total: 0, weighted: 0 };
    }
    categories[check.category].total++;
    categories[check.category].weighted += check.score;
  }

  let totalWeight = 0;
  let weightedScore = 0;

  for (const [category, data] of Object.entries(categories)) {
    const avgScore = data.weighted / data.total;
    const weight = CATEGORY_WEIGHTS[category] || 0.25;
    weightedScore += avgScore * weight;
    totalWeight += weight;
  }

  return totalWeight > 0 ? Math.round(weightedScore / totalWeight) : 0;
}

function getGrade(score: number): string {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}

export function runScan(html: string, url: string): ScanResult {
  const checks: CheckResult[] = [
    // Images & Media
    checkAltText(html),
    checkAltTextQuality(html),
    checkMediaCaptions(html),
    checkAutoplay(html),
    // Structure & Navigation
    checkHeadingHierarchy(html),
    checkSkipNav(html),
    checkLandmarks(html),
    // Forms & Interactions
    checkFormLabels(html),
    checkButtonLabels(html),
    checkLinkText(html),
    checkTabindex(html),
    // Document & Meta
    checkLangAttribute(html),
    checkPageTitle(html),
    checkViewport(html),
    checkTables(html),
    checkIframeTitles(html),
  ];

  const score = calculateScore(checks);
  const grade = getGrade(score);
  const passedChecks = checks.filter((c) => c.passed).length;
  const failedChecks = checks.filter((c) => !c.passed).length;
  const totalIssues = checks.reduce((sum, c) => sum + c.failingElements, 0);
  const risk = calculateRiskTier(checks);
  const prioritizedIssues = prioritizeIssues(checks);

  return {
    url,
    score,
    grade,
    checks,
    risk,
    prioritizedIssues,
    totalIssues,
    passedChecks,
    failedChecks,
    scanDate: new Date().toISOString(),
  };
}
