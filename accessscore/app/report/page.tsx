"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";

/* ── Interfaces ── */

interface CheckResult {
  id: string;
  name: string;
  category: string;
  severity: "HIGH" | "MEDIUM" | "LOW";
  passed: boolean;
  score: number;
  totalElements: number;
  failingElements: number;
  details: string;
  elements: { html: string; issue: string }[];
  wcag: string;
  fixDescription: string;
  fixBefore: string;
  fixAfter: string;
}

interface RiskAssessment {
  tier: string;
  minExposure: string;
  maxExposure: string;
  color: string;
  description: string;
  stats: string[];
}

interface PrioritizedIssue {
  rank: number;
  checkId?: string;
  name: string;
  category: string;
  severity: "HIGH" | "MEDIUM" | "LOW";
  priorityScore?: number;
  failingElements: number;
  riskImpact: string;
  details: string;
  wcag: string;
  fixDescription: string;
  fixBefore: string;
  fixAfter: string;
  elements: { html: string; issue: string }[];
}

interface ScanResult {
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

/* ── Helper functions ── */

function getExecutiveSummary(score: number, url: string, totalIssues: number, risk: RiskAssessment): string {
  const domain = (() => {
    try { return new URL(url).hostname; } catch { return url; }
  })();

  if (score >= 90) {
    return `${domain} demonstrates strong accessibility compliance with a score of ${score}/100. The website passes the majority of WCAG 2.1 AA checks and presents minimal legal exposure under ADA Title III requirements. ${totalIssues > 0 ? `The ${totalIssues} remaining issue${totalIssues !== 1 ? "s" : ""} represent${totalIssues === 1 ? "s" : ""} minor improvements that would further strengthen your compliance posture.` : "No significant remediation is required at this time."} Continued monitoring is recommended as accessibility standards evolve.`;
  }
  if (score >= 70) {
    return `${domain} has moderate accessibility issues that should be addressed to reduce legal risk and improve user experience. With a score of ${score}/100, the website meets some WCAG 2.1 AA criteria but has ${totalIssues} issue${totalIssues !== 1 ? "s" : ""} that could expose the organization to ADA-related demand letters or lawsuits. Estimated legal exposure falls in the ${risk.minExposure} to ${risk.maxExposure} range based on current settlement data. A structured remediation plan, prioritized by severity, is outlined in this report.`;
  }
  if (score >= 50) {
    return `${domain} has significant accessibility gaps that increase legal risk. With a score of ${score}/100 and ${totalIssues} identified issue${totalIssues !== 1 ? "s" : ""}, the website fails to meet multiple WCAG 2.1 AA criteria. This level of non-compliance places the organization in the ${risk.tier} risk tier with estimated legal exposure of ${risk.minExposure} to ${risk.maxExposure}. ADA demand letters frequently target websites with this compliance profile. Immediate remediation of high-severity issues is strongly recommended.`;
  }
  return `${domain} has critical accessibility violations that create substantial legal exposure. With a score of ${score}/100 and ${totalIssues} identified issue${totalIssues !== 1 ? "s" : ""}, the website fails fundamental WCAG 2.1 AA requirements including core navigability and perceivability criteria. The organization faces ${risk.tier} legal risk with estimated exposure of ${risk.minExposure} to ${risk.maxExposure}. With over 4,000 ADA website lawsuits filed annually, websites at this compliance level are primary targets. Immediate remediation is critical.`;
}

function getEffortEstimate(failingElements: number, severity: string): { label: string; color: string } {
  if (failingElements <= 3 && severity !== "HIGH") return { label: "Quick fix (< 1 hour)", color: "text-green-600" };
  if (failingElements <= 10) return { label: "Moderate (1-4 hours)", color: "text-yellow-600" };
  return { label: "Complex (4+ hours)", color: "text-red-600" };
}

function getBusinessImpact(severity: string, category: string, failingElements: number): string {
  const impacts: Record<string, Record<string, string>> = {
    HIGH: {
      "Images": `${failingElements} image${failingElements !== 1 ? "s" : ""} without text alternatives prevent screen reader users from understanding visual content. This is the most commonly cited violation in ADA demand letters.`,
      "Forms": `${failingElements} form element${failingElements !== 1 ? "s" : ""} without proper labels prevent users with disabilities from completing transactions, sign-ups, or contact forms — directly impacting revenue.`,
      "Navigation": `Navigation barriers prevent users with disabilities from accessing your website content entirely. Courts have consistently ruled this a fundamental ADA violation.`,
      "Media": `Media content without captions or alternatives excludes deaf and hard-of-hearing users, a population of approximately 48 million Americans.`,
      "Structure": `Missing structural elements prevent assistive technology users from understanding and navigating your content effectively.`,
      "default": `This high-severity issue affects ${failingElements} element${failingElements !== 1 ? "s" : ""} and represents a significant barrier for users with disabilities. High-severity violations are the primary basis for ADA demand letters.`,
    },
    MEDIUM: {
      "default": `This issue affects ${failingElements} element${failingElements !== 1 ? "s" : ""} and degrades the experience for users relying on assistive technology. While less likely to trigger standalone legal action, medium-severity issues strengthen plaintiff arguments when combined with other violations.`,
    },
    LOW: {
      "default": `This issue affects ${failingElements} element${failingElements !== 1 ? "s" : ""} and represents a best-practice recommendation. Addressing it improves overall accessibility maturity and demonstrates good-faith compliance effort.`,
    },
  };

  const severityImpacts = impacts[severity] || impacts["LOW"];
  return severityImpacts[category] || severityImpacts["default"];
}

function getGradeColor(grade: string): string {
  const colors: Record<string, string> = { A: "#22c55e", B: "#84cc16", C: "#f59e0b", D: "#ef4444", F: "#dc2626" };
  return colors[grade] || "#6b7280";
}

function getGradeColorClass(grade: string): string {
  const colors: Record<string, string> = { A: "text-green-500", B: "text-lime-500", C: "text-amber-500", D: "text-red-500", F: "text-red-600" };
  return colors[grade] || "text-gray-500";
}

function getWcagLevel(score: number): { level: string; description: string } {
  if (score >= 90) return { level: "AA (Likely Conformant)", description: "Meets most WCAG 2.1 Level AA success criteria" };
  if (score >= 70) return { level: "AA (Partial)", description: "Meets some WCAG 2.1 Level AA criteria with gaps" };
  if (score >= 50) return { level: "A (Partial)", description: "Fails to meet multiple Level A and AA criteria" };
  return { level: "Non-Conformant", description: "Fails fundamental WCAG 2.1 Level A criteria" };
}

function formatDate(dateStr: string): string {
  try {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric", month: "long", day: "numeric",
    });
  } catch {
    return dateStr;
  }
}

/* ── Components ── */

function ScoreGauge({ score, grade, size = 180 }: { score: number; grade: string; size?: number }) {
  const radius = (size - 20) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;
  const color = getGradeColor(grade);

  return (
    <div className="relative inline-block" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="#262626" strokeWidth="10" className="print:stroke-gray-200" />
        <circle
          cx={size / 2} cy={size / 2} r={radius} fill="none"
          stroke={color} strokeWidth="10"
          strokeDasharray={circumference} strokeDashoffset={offset}
          strokeLinecap="round" className="transition-all duration-1000"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-5xl font-bold text-white print:text-black">{score}</span>
        <span className="text-lg font-semibold" style={{ color }}>Grade {grade}</span>
      </div>
    </div>
  );
}

function SeverityBadge({ severity }: { severity: string }) {
  const config: Record<string, { bg: string; text: string; printBg: string }> = {
    HIGH: { bg: "bg-red-500/15", text: "text-red-400", printBg: "print:bg-red-100 print:text-red-700" },
    MEDIUM: { bg: "bg-yellow-500/15", text: "text-yellow-400", printBg: "print:bg-yellow-100 print:text-yellow-700" },
    LOW: { bg: "bg-green-500/15", text: "text-green-400", printBg: "print:bg-green-100 print:text-green-700" },
  };
  const c = config[severity] || config.LOW;

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-semibold tracking-wide ${c.bg} ${c.text} ${c.printBg}`}>
      {severity}
    </span>
  );
}

function StatCard({ value, label, sublabel }: { value: string | number; label: string; sublabel?: string }) {
  return (
    <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg p-5 text-center print:bg-gray-50 print:border-gray-200">
      <div className="text-3xl font-bold text-white print:text-black">{value}</div>
      <div className="text-sm text-gray-400 mt-1 print:text-gray-600">{label}</div>
      {sublabel && <div className="text-xs text-gray-500 mt-0.5 print:text-gray-500">{sublabel}</div>}
    </div>
  );
}

/* ── Main Report Content ── */

function ReportContent() {
  const searchParams = useSearchParams();
  const [report, setReport] = useState<ScanResult | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const sessionId = searchParams.get("session_id");
    const url = searchParams.get("url");

    if (!sessionId) {
      setError("No payment session found.");
      setLoading(false);
      return;
    }

    fetch(`/api/report?session_id=${sessionId}&url=${encodeURIComponent(url || "")}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else if (data.report) {
          setReport(data.report);
        }
      })
      .catch(() => setError("Failed to load report"))
      .finally(() => setLoading(false));
  }, [searchParams]);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <svg className="animate-spin h-12 w-12 mx-auto mb-4 text-blue-500" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
        <p className="text-gray-400 text-lg">Generating your compliance report...</p>
        <p className="text-gray-500 text-sm mt-2">Verifying payment and compiling audit data</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500/10 mb-6">
          <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <p className="text-red-400 text-lg font-medium mb-2">{error}</p>
        <p className="text-gray-500 text-sm mb-6">If you completed payment, please try refreshing this page.</p>
        <a href="/" className="text-blue-400 hover:underline">Back to home</a>
      </div>
    );
  }

  if (!report) return null;

  const highCount = report.prioritizedIssues.filter(i => i.severity === "HIGH").length;
  const mediumCount = report.prioritizedIssues.filter(i => i.severity === "MEDIUM").length;
  const lowCount = report.prioritizedIssues.filter(i => i.severity === "LOW").length;
  const highIssues = report.prioritizedIssues.filter(i => i.severity === "HIGH");
  const mediumIssues = report.prioritizedIssues.filter(i => i.severity === "MEDIUM");
  const lowIssues = report.prioritizedIssues.filter(i => i.severity === "LOW");
  const wcagLevel = getWcagLevel(report.score);
  const reportDate = formatDate(report.scanDate);

  const domain = (() => {
    try { return new URL(report.url).hostname; } catch { return report.url; }
  })();

  return (
    <div className="report-container">
      {/* ═══════════════════════════════════════════════════════════
          PRINT STYLES
          ═══════════════════════════════════════════════════════════ */}
      <style>{`
        @media print {
          /* Page setup */
          @page {
            size: A4;
            margin: 20mm 15mm 25mm 15mm;
            @bottom-center {
              content: "Prepared for: ${domain} | ${reportDate} | Generated by AccessScore";
              font-size: 8pt;
              color: #666;
            }
          }
          @page :first {
            margin-top: 15mm;
          }

          /* Global print overrides */
          html, body {
            background: white !important;
            color: black !important;
            font-size: 11pt !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }

          /* Hide site chrome */
          nav[aria-label="Main navigation"],
          footer,
          .skip-link,
          .no-print,
          .print\\:hidden {
            display: none !important;
          }

          /* Report container */
          .report-container {
            max-width: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
          }

          /* Cards */
          .report-card {
            background: white !important;
            border: 1px solid #e5e7eb !important;
            box-shadow: none !important;
            break-inside: avoid;
          }

          /* Section breaks */
          .page-break-before {
            break-before: page;
          }

          /* Text colors for print */
          .print-text-black { color: black !important; }
          .print-text-gray { color: #4b5563 !important; }
          .print-text-light { color: #6b7280 !important; }
          .print-bg-white { background: white !important; }
          .print-bg-gray { background: #f9fafb !important; }
          .print-border { border-color: #e5e7eb !important; }

          /* Code blocks */
          pre {
            background: #f3f4f6 !important;
            color: #1f2937 !important;
            border: 1px solid #e5e7eb !important;
            font-size: 9pt !important;
            white-space: pre-wrap !important;
            word-break: break-all !important;
          }

          /* Tables */
          table { font-size: 9pt !important; }
          th { background: #f3f4f6 !important; color: #374151 !important; }
          td { color: #1f2937 !important; }
          tr { border-color: #e5e7eb !important; }

          /* Issue cards */
          .issue-card {
            break-inside: avoid;
            border: 1px solid #e5e7eb !important;
            background: white !important;
            margin-bottom: 12pt !important;
          }

          /* SVG colors for print */
          .score-ring-bg { stroke: #e5e7eb !important; }

          /* Links */
          a { color: #2563eb !important; text-decoration: none !important; }
        }

        /* Screen-only animated gradient border for header */
        @media screen {
          .report-header-gradient {
            background: linear-gradient(135deg, rgba(59,130,246,0.1), rgba(139,92,246,0.1), rgba(59,130,246,0.1));
          }
        }
      `}</style>

      {/* ═══════════════════════════════════════════════════════════
          TOOLBAR (screen only)
          ═══════════════════════════════════════════════════════════ */}
      <div className="no-print bg-green-500/10 border border-green-500/20 rounded-xl p-4 mb-6 flex items-center justify-between flex-wrap gap-4 max-w-5xl mx-auto mt-8 px-6">
        <div>
          <p className="text-green-400 font-semibold">Payment confirmed — your full audit report is ready</p>
          <p className="text-gray-400 text-sm">Bookmark this page to access your report anytime.</p>
        </div>
        <button
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors text-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
          </svg>
          Download as PDF
        </button>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-16">

        {/* ═══════════════════════════════════════════════════════════
            SECTION 1: EXECUTIVE SUMMARY
            ═══════════════════════════════════════════════════════════ */}
        <section className="mb-10">
          <div className="report-card report-header-gradient border border-[#262626] rounded-2xl p-8 print:p-6 print:border-gray-300 print:bg-white">
            {/* Report title bar */}
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-[#262626] print:border-gray-200">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center print:bg-blue-100">
                    <svg className="w-5 h-5 text-white print:text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-white print:text-black tracking-tight">ADA Compliance Audit Report</h1>
                    <p className="text-sm text-gray-400 print:text-gray-500">WCAG 2.1 Accessibility Assessment</p>
                  </div>
                </div>
              </div>
              <div className="text-right text-sm">
                <p className="text-gray-400 print:text-gray-500">Report Date</p>
                <p className="text-white font-medium print:text-black">{reportDate}</p>
              </div>
            </div>

            {/* URL + Score summary row */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Left: URL and summary */}
              <div className="flex-1">
                <div className="mb-4">
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">Website Audited</p>
                  <p className="text-lg font-semibold text-blue-400 print:text-blue-700 break-all">{report.url}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">Risk Tier</p>
                    <p className="text-lg font-bold" style={{ color: report.risk.color }}>{report.risk.tier}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">Legal Exposure</p>
                    <p className="text-lg font-bold text-white print:text-black">{report.risk.minExposure} &ndash; {report.risk.maxExposure}</p>
                  </div>
                </div>

                <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg p-4 print:bg-gray-50 print:border-gray-200">
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Executive Summary</p>
                  <p className="text-sm text-gray-300 leading-relaxed print:text-gray-700">
                    {getExecutiveSummary(report.score, report.url, report.totalIssues, report.risk)}
                  </p>
                </div>
              </div>

              {/* Right: Score ring */}
              <div className="flex flex-col items-center">
                <ScoreGauge score={report.score} grade={report.grade} size={180} />
                <p className="text-xs text-gray-500 mt-3 text-center">
                  Overall Compliance Score
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            SECTION 2: COMPLIANCE DASHBOARD
            ═══════════════════════════════════════════════════════════ */}
        <section className="mb-10 page-break-before">
          <h2 className="text-xl font-bold text-white print:text-black mb-4 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-blue-500 rounded-full inline-block"></span>
            Compliance Dashboard
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <StatCard value={report.checks.length} label="Checks Run" sublabel="WCAG 2.1 AA criteria" />
            <StatCard value={report.passedChecks} label="Passed" sublabel={`${Math.round((report.passedChecks / report.checks.length) * 100)}% pass rate`} />
            <StatCard value={report.failedChecks} label="Failed" sublabel={`${report.totalIssues} total issues`} />
            <StatCard value={report.totalIssues} label="Elements Affected" sublabel="Across all checks" />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Severity breakdown */}
            <div className="report-card bg-[#141414] border border-[#262626] rounded-xl p-6 print:bg-white print:border-gray-200">
              <h3 className="text-sm font-semibold text-gray-400 print:text-gray-600 uppercase tracking-wider mb-4">Issue Severity Breakdown</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm font-medium text-red-400 print:text-red-600">HIGH</span>
                    <span className="text-sm font-bold text-white print:text-black">{highCount}</span>
                  </div>
                  <div className="w-full h-2.5 bg-[#0a0a0a] rounded-full print:bg-gray-200">
                    <div className="h-2.5 bg-red-500 rounded-full transition-all" style={{ width: `${report.prioritizedIssues.length > 0 ? (highCount / report.prioritizedIssues.length) * 100 : 0}%` }} />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm font-medium text-yellow-400 print:text-yellow-600">MEDIUM</span>
                    <span className="text-sm font-bold text-white print:text-black">{mediumCount}</span>
                  </div>
                  <div className="w-full h-2.5 bg-[#0a0a0a] rounded-full print:bg-gray-200">
                    <div className="h-2.5 bg-yellow-500 rounded-full transition-all" style={{ width: `${report.prioritizedIssues.length > 0 ? (mediumCount / report.prioritizedIssues.length) * 100 : 0}%` }} />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm font-medium text-green-400 print:text-green-600">LOW</span>
                    <span className="text-sm font-bold text-white print:text-black">{lowCount}</span>
                  </div>
                  <div className="w-full h-2.5 bg-[#0a0a0a] rounded-full print:bg-gray-200">
                    <div className="h-2.5 bg-green-500 rounded-full transition-all" style={{ width: `${report.prioritizedIssues.length > 0 ? (lowCount / report.prioritizedIssues.length) * 100 : 0}%` }} />
                  </div>
                </div>
              </div>
            </div>

            {/* WCAG conformance + risk */}
            <div className="report-card bg-[#141414] border border-[#262626] rounded-xl p-6 print:bg-white print:border-gray-200">
              <h3 className="text-sm font-semibold text-gray-400 print:text-gray-600 uppercase tracking-wider mb-4">Conformance &amp; Risk</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-gray-500 mb-1">WCAG 2.1 Conformance Level</p>
                  <p className={`text-lg font-bold ${getGradeColorClass(report.grade)}`}>{wcagLevel.level}</p>
                  <p className="text-xs text-gray-400 print:text-gray-500 mt-0.5">{wcagLevel.description}</p>
                </div>
                <div className="pt-3 border-t border-[#262626] print:border-gray-200">
                  <p className="text-xs text-gray-500 mb-1">Legal Risk Assessment</p>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: report.risk.color }} />
                    <p className="text-lg font-bold text-white print:text-black">{report.risk.tier}</p>
                  </div>
                  <p className="text-sm text-gray-400 print:text-gray-600">{report.risk.description}</p>
                </div>
                <div className="pt-3 border-t border-[#262626] print:border-gray-200">
                  <p className="text-xs text-gray-500 mb-1">Estimated Legal Exposure</p>
                  <p className="text-xl font-bold text-white print:text-black">{report.risk.minExposure} &ndash; {report.risk.maxExposure}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Risk statistics */}
          {report.risk.stats.length > 0 && (
            <div className="mt-4 report-card bg-[#141414] border border-[#262626] rounded-xl p-6 print:bg-white print:border-gray-200">
              <h3 className="text-sm font-semibold text-gray-400 print:text-gray-600 uppercase tracking-wider mb-3">ADA Lawsuit Context</h3>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                {report.risk.stats.map((stat, i) => (
                  <p key={i} className="text-sm text-gray-300 print:text-gray-700 flex items-start gap-2">
                    <span className="text-gray-500 mt-0.5 shrink-0">&bull;</span>
                    {stat}
                  </p>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* ═══════════════════════════════════════════════════════════
            SECTION 3: PRIORITIZED REMEDIATION PLAN
            ═══════════════════════════════════════════════════════════ */}
        <section className="mb-10 page-break-before">
          <h2 className="text-xl font-bold text-white print:text-black mb-2 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-blue-500 rounded-full inline-block"></span>
            Prioritized Remediation Plan
          </h2>
          <p className="text-sm text-gray-400 print:text-gray-600 mb-6">
            {report.prioritizedIssues.length} issue{report.prioritizedIssues.length !== 1 ? "s" : ""} identified, ordered by severity and impact. Each includes business context, WCAG reference, and ready-to-use fix code.
          </p>

          {report.prioritizedIssues.map((issue) => {
            const effort = getEffortEstimate(issue.failingElements, issue.severity);
            const businessImpact = getBusinessImpact(issue.severity, issue.category, issue.failingElements);

            return (
              <div key={issue.rank} className="issue-card bg-[#141414] border border-[#262626] rounded-xl mb-4 overflow-hidden print:bg-white print:border-gray-200">
                {/* Issue header */}
                <div className="p-6 pb-4">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center shrink-0 print:bg-blue-50 print:border-blue-200">
                        <span className="text-sm font-bold text-blue-400 print:text-blue-700">{issue.rank}</span>
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-white print:text-black">{issue.name}</h3>
                        <div className="flex flex-wrap items-center gap-2 mt-1 text-xs text-gray-500">
                          <span>{issue.category}</span>
                          <span>&middot;</span>
                          <span className="font-mono">{issue.wcag}</span>
                          <span>&middot;</span>
                          <span>{issue.failingElements} element{issue.failingElements !== 1 ? "s" : ""} affected</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2 shrink-0">
                      <SeverityBadge severity={issue.severity} />
                      <span className={`text-xs font-medium ${effort.color}`}>{effort.label}</span>
                    </div>
                  </div>

                  {/* Business impact */}
                  <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg p-4 mb-4 print:bg-blue-50/50 print:border-blue-100">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Business Impact</p>
                    <p className="text-sm text-gray-300 print:text-gray-700 leading-relaxed">{businessImpact}</p>
                  </div>

                  {/* Technical details */}
                  <p className="text-sm text-gray-300 print:text-gray-700 mb-1">{issue.details}</p>
                  <p className="text-xs text-blue-400 print:text-blue-600 mb-4">{issue.riskImpact}</p>

                  {/* Affected elements */}
                  {issue.elements.length > 0 && (
                    <div className="mb-4">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                        Affected Elements ({issue.failingElements} total)
                      </p>
                      <div className="space-y-2 max-h-48 overflow-y-auto print:max-h-none print:overflow-visible">
                        {issue.elements.map((el, j) => (
                          <div key={j} className="bg-[#0a0a0a] rounded-lg p-3 print:bg-gray-50 print:border print:border-gray-200">
                            <pre className="text-xs text-gray-400 print:text-gray-600 whitespace-pre-wrap break-all font-mono">{el.html}</pre>
                            <p className="text-xs text-red-400 print:text-red-600 mt-1.5 font-medium">{el.issue}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Fix code section */}
                <div className="bg-[#0a0a0a] border-t border-[#262626] p-6 print:bg-gray-50 print:border-gray-200">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Recommended Fix</p>
                  <p className="text-sm text-gray-300 print:text-gray-700 font-medium mb-4">{issue.fixDescription}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs font-semibold text-red-400 print:text-red-600 mb-2 uppercase tracking-wider">Before (Current Code)</p>
                      <pre className="bg-[#141414] print:bg-white border border-[#262626] print:border-gray-300 rounded-lg p-3 text-xs text-gray-400 print:text-gray-700 whitespace-pre-wrap break-all overflow-x-auto font-mono">{issue.fixBefore}</pre>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-green-400 print:text-green-600 mb-2 uppercase tracking-wider">After (Corrected Code)</p>
                      <pre className="bg-[#141414] print:bg-white border border-[#262626] print:border-gray-300 rounded-lg p-3 text-xs text-gray-300 print:text-gray-700 whitespace-pre-wrap break-all overflow-x-auto font-mono">{issue.fixAfter}</pre>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        {/* ═══════════════════════════════════════════════════════════
            SECTION 4: REMEDIATION TIMELINE
            ═══════════════════════════════════════════════════════════ */}
        <section className="mb-10 page-break-before">
          <h2 className="text-xl font-bold text-white print:text-black mb-2 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-blue-500 rounded-full inline-block"></span>
            Remediation Timeline
          </h2>
          <p className="text-sm text-gray-400 print:text-gray-600 mb-6">
            Recommended phased approach based on issue severity and legal risk reduction.
          </p>

          {/* Immediate: HIGH */}
          <div className="report-card bg-[#141414] border border-[#262626] rounded-xl p-6 mb-4 print:bg-white print:border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-red-500/15 flex items-center justify-center print:bg-red-50">
                <svg className="w-5 h-5 text-red-400 print:text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white print:text-black">Immediate (Week 1)</h3>
                <p className="text-sm text-gray-400 print:text-gray-500">High-severity issues &mdash; address these first to reduce legal exposure</p>
              </div>
              <div className="ml-auto">
                <span className="text-2xl font-bold text-red-400 print:text-red-600">{highCount}</span>
                <span className="text-sm text-gray-500 ml-1">issue{highCount !== 1 ? "s" : ""}</span>
              </div>
            </div>
            {highIssues.length > 0 ? (
              <div className="space-y-2">
                {highIssues.map((issue) => (
                  <div key={issue.rank} className="flex items-center gap-3 bg-[#0a0a0a] rounded-lg p-3 print:bg-gray-50 print:border print:border-gray-200">
                    <span className="text-xs font-bold text-blue-400 print:text-blue-600 w-6 text-center">#{issue.rank}</span>
                    <span className="text-sm text-white print:text-black flex-1">{issue.name}</span>
                    <span className="text-xs text-gray-500 font-mono">{issue.wcag}</span>
                    <span className="text-xs text-gray-400">{issue.failingElements} elem.</span>
                    <span className={`text-xs ${getEffortEstimate(issue.failingElements, issue.severity).color}`}>
                      {getEffortEstimate(issue.failingElements, issue.severity).label}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-green-400 print:text-green-600 bg-green-500/10 rounded-lg p-3 print:bg-green-50">No high-severity issues found. Your site handles the most critical accessibility requirements.</p>
            )}
          </div>

          {/* Short-term: MEDIUM */}
          <div className="report-card bg-[#141414] border border-[#262626] rounded-xl p-6 mb-4 print:bg-white print:border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-yellow-500/15 flex items-center justify-center print:bg-yellow-50">
                <svg className="w-5 h-5 text-yellow-400 print:text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white print:text-black">Short-term (Weeks 2-3)</h3>
                <p className="text-sm text-gray-400 print:text-gray-500">Medium-severity issues &mdash; strengthen compliance posture</p>
              </div>
              <div className="ml-auto">
                <span className="text-2xl font-bold text-yellow-400 print:text-yellow-600">{mediumCount}</span>
                <span className="text-sm text-gray-500 ml-1">issue{mediumCount !== 1 ? "s" : ""}</span>
              </div>
            </div>
            {mediumIssues.length > 0 ? (
              <div className="space-y-2">
                {mediumIssues.map((issue) => (
                  <div key={issue.rank} className="flex items-center gap-3 bg-[#0a0a0a] rounded-lg p-3 print:bg-gray-50 print:border print:border-gray-200">
                    <span className="text-xs font-bold text-blue-400 print:text-blue-600 w-6 text-center">#{issue.rank}</span>
                    <span className="text-sm text-white print:text-black flex-1">{issue.name}</span>
                    <span className="text-xs text-gray-500 font-mono">{issue.wcag}</span>
                    <span className="text-xs text-gray-400">{issue.failingElements} elem.</span>
                    <span className={`text-xs ${getEffortEstimate(issue.failingElements, issue.severity).color}`}>
                      {getEffortEstimate(issue.failingElements, issue.severity).label}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-green-400 print:text-green-600 bg-green-500/10 rounded-lg p-3 print:bg-green-50">No medium-severity issues found.</p>
            )}
          </div>

          {/* Ongoing: LOW */}
          <div className="report-card bg-[#141414] border border-[#262626] rounded-xl p-6 mb-4 print:bg-white print:border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-green-500/15 flex items-center justify-center print:bg-green-50">
                <svg className="w-5 h-5 text-green-400 print:text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white print:text-black">Ongoing Maintenance</h3>
                <p className="text-sm text-gray-400 print:text-gray-500">Low-severity best practices &mdash; continuous improvement</p>
              </div>
              <div className="ml-auto">
                <span className="text-2xl font-bold text-green-400 print:text-green-600">{lowCount}</span>
                <span className="text-sm text-gray-500 ml-1">issue{lowCount !== 1 ? "s" : ""}</span>
              </div>
            </div>
            {lowIssues.length > 0 ? (
              <div className="space-y-2">
                {lowIssues.map((issue) => (
                  <div key={issue.rank} className="flex items-center gap-3 bg-[#0a0a0a] rounded-lg p-3 print:bg-gray-50 print:border print:border-gray-200">
                    <span className="text-xs font-bold text-blue-400 print:text-blue-600 w-6 text-center">#{issue.rank}</span>
                    <span className="text-sm text-white print:text-black flex-1">{issue.name}</span>
                    <span className="text-xs text-gray-500 font-mono">{issue.wcag}</span>
                    <span className="text-xs text-gray-400">{issue.failingElements} elem.</span>
                    <span className={`text-xs ${getEffortEstimate(issue.failingElements, issue.severity).color}`}>
                      {getEffortEstimate(issue.failingElements, issue.severity).label}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-green-400 print:text-green-600 bg-green-500/10 rounded-lg p-3 print:bg-green-50">No low-severity issues found.</p>
            )}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            SECTION 5: COMPLETE CHECK RESULTS TABLE
            ═══════════════════════════════════════════════════════════ */}
        <section className="mb-10 page-break-before">
          <h2 className="text-xl font-bold text-white print:text-black mb-2 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-blue-500 rounded-full inline-block"></span>
            Complete Check Results
          </h2>
          <p className="text-sm text-gray-400 print:text-gray-600 mb-6">
            All {report.checks.length} WCAG 2.1 checks with individual scores. Sorted by status.
          </p>

          <div className="report-card bg-[#141414] border border-[#262626] rounded-xl overflow-hidden print:bg-white print:border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#262626] print:border-gray-200">
                  <th className="text-left p-4 text-xs font-semibold text-gray-400 print:text-gray-600 uppercase tracking-wider">Check</th>
                  <th className="text-left p-4 text-xs font-semibold text-gray-400 print:text-gray-600 uppercase tracking-wider">Category</th>
                  <th className="text-center p-4 text-xs font-semibold text-gray-400 print:text-gray-600 uppercase tracking-wider">Severity</th>
                  <th className="text-center p-4 text-xs font-semibold text-gray-400 print:text-gray-600 uppercase tracking-wider">Status</th>
                  <th className="text-center p-4 text-xs font-semibold text-gray-400 print:text-gray-600 uppercase tracking-wider">Score</th>
                  <th className="text-center p-4 text-xs font-semibold text-gray-400 print:text-gray-600 uppercase tracking-wider hidden md:table-cell">Elements</th>
                </tr>
              </thead>
              <tbody>
                {[...report.checks]
                  .sort((a, b) => {
                    if (a.passed === b.passed) return a.score - b.score;
                    return a.passed ? 1 : -1;
                  })
                  .map((check) => (
                    <tr key={check.id} className="border-b border-[#1a1a1a] last:border-b-0 print:border-gray-100">
                      <td className="p-4">
                        <span className="text-white print:text-black font-medium">{check.name}</span>
                        {!check.passed && check.wcag && (
                          <span className="block text-xs text-gray-500 mt-0.5 font-mono">{check.wcag}</span>
                        )}
                      </td>
                      <td className="p-4 text-gray-400 print:text-gray-600">{check.category}</td>
                      <td className="p-4 text-center">
                        <SeverityBadge severity={check.severity} />
                      </td>
                      <td className="p-4 text-center">
                        <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded ${
                          check.passed
                            ? "bg-green-500/15 text-green-400 print:bg-green-50 print:text-green-700"
                            : "bg-red-500/15 text-red-400 print:bg-red-50 print:text-red-700"
                        }`}>
                          {check.passed ? "PASS" : "FAIL"}
                        </span>
                      </td>
                      <td className="p-4 text-center font-mono text-gray-300 print:text-gray-700">{check.score}/100</td>
                      <td className="p-4 text-center text-gray-400 print:text-gray-600 hidden md:table-cell">
                        {check.failingElements > 0 ? (
                          <span className="text-red-400 print:text-red-600">{check.failingElements} failing</span>
                        ) : (
                          <span className="text-gray-500">&mdash;</span>
                        )}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            SECTION 6: REPORT FOOTER
            ═══════════════════════════════════════════════════════════ */}
        <section className="page-break-before">
          {/* Download button (screen only) */}
          <div className="no-print text-center mb-10">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-gray-100 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              Download Report as PDF
            </button>
          </div>

          {/* Disclaimer */}
          <div className="report-card bg-[#141414] border border-[#262626] rounded-xl p-6 mb-8 print:bg-gray-50 print:border-gray-200">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Disclaimer</h3>
            <div className="text-xs text-gray-400 print:text-gray-600 space-y-2 leading-relaxed">
              <p>
                This report is based on automated scanning of publicly accessible web content against WCAG 2.1 Level AA
                success criteria and publicly available ADA lawsuit settlement data. It is provided for informational and
                educational purposes only and does not constitute legal advice, a legal opinion, or a guarantee of compliance.
              </p>
              <p>
                Automated testing can identify many accessibility barriers but cannot detect all issues. Manual testing with
                assistive technology and expert review is recommended for comprehensive accessibility evaluation. Actual legal
                outcomes depend on jurisdiction, specific violations, prior notice, organizational size, remediation efforts,
                and other factors.
              </p>
              <p>
                Consult a qualified attorney for legal guidance specific to your situation.
              </p>
            </div>
          </div>

          {/* Branding footer */}
          <div className="text-center pb-8">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-xl">&#9855;</span>
              <span className="text-lg font-bold text-white print:text-black">AccessScore</span>
            </div>
            <p className="text-xs text-gray-500 print:text-gray-400">
              Report generated on {reportDate} for {report.url}
            </p>
            <p className="text-xs text-gray-500 print:text-gray-400 mt-1">
              accessscore.autonomous-claude.com
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}

/* ── Page Export ── */

export default function ReportPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <svg className="animate-spin h-12 w-12 mx-auto mb-4 text-blue-500" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          <p className="text-gray-400">Loading report...</p>
        </div>
      }
    >
      <ReportContent />
    </Suspense>
  );
}
