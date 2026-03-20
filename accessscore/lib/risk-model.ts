import { CheckResult } from "./checks/images";

export interface RiskAssessment {
  tier: "LOW" | "MODERATE" | "HIGH" | "CRITICAL";
  minExposure: string;
  maxExposure: string;
  color: string;
  description: string;
  stats: string[];
}

export function calculateRiskTier(checks: CheckResult[]): RiskAssessment {
  const failedChecks = checks.filter((c) => !c.passed);
  const highSeverityFailures = failedChecks.filter((c) => c.severity === "HIGH");
  const totalIssues = checks.reduce((sum, c) => sum + c.failingElements, 0);

  if (totalIssues === 0 || (failedChecks.length <= 1 && highSeverityFailures.length === 0)) {
    return {
      tier: "LOW",
      minExposure: "$0",
      maxExposure: "$2,000",
      color: "#22c55e",
      description: "Your site has minimal accessibility issues. Low risk of ADA-related legal action.",
      stats: [
        "Sites with strong accessibility practices are rarely targeted",
        "Maintaining compliance prevents future issues",
      ],
    };
  }

  if (failedChecks.length <= 4 && highSeverityFailures.length <= 1 && totalIssues <= 8) {
    return {
      tier: "MODERATE",
      minExposure: "$2,000",
      maxExposure: "$10,000",
      color: "#f59e0b",
      description: "Several accessibility issues found. Moderate risk if a complaint is filed.",
      stats: [
        "Average single-plaintiff ADA settlement: $5,000–$25,000",
        "67% of ADA lawsuits target businesses under $25M revenue",
      ],
    };
  }

  if (failedChecks.length <= 8 && highSeverityFailures.length <= 3 && totalIssues <= 20) {
    return {
      tier: "HIGH",
      minExposure: "$10,000",
      maxExposure: "$35,000",
      color: "#ef4444",
      description: "Multiple serious accessibility violations. High lawsuit risk — especially for e-commerce or public-facing sites.",
      stats: [
        "4,000+ ADA website lawsuits filed in 2024 — up 37% year-over-year",
        "Sites with 10+ violations are prime targets for serial ADA plaintiffs",
        "Illinois ADA lawsuits up 745% year-over-year",
      ],
    };
  }

  return {
    tier: "CRITICAL",
    minExposure: "$25,000",
    maxExposure: "$75,000+",
    color: "#dc2626",
    description: "Severe accessibility barriers. Critical lawsuit risk. Immediate remediation strongly recommended.",
    stats: [
      "Multi-plaintiff ADA cases can exceed $75,000 in settlements and legal fees",
      "Serial ADA plaintiffs file 50+ lawsuits per year targeting sites like yours",
      "DOJ has affirmed that websites are covered under ADA Title III",
      "Remediation now costs far less than defending a lawsuit",
    ],
  };
}
