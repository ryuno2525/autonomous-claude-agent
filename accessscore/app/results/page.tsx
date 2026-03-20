"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";

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

function ScoreRing({ score, grade, size = 160 }: { score: number; grade: string; size?: number }) {
  const radius = (size - 16) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  const gradeColors: Record<string, string> = {
    A: "#22c55e",
    B: "#84cc16",
    C: "#f59e0b",
    D: "#ef4444",
    F: "#dc2626",
  };

  const color = gradeColors[grade] || "#666";

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="#262626" strokeWidth="8" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-1000"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-4xl font-bold text-white">{score}</span>
        <span className="text-lg font-semibold" style={{ color }}>
          Grade {grade}
        </span>
      </div>
    </div>
  );
}

function ResultsContent() {
  const searchParams = useSearchParams();
  const [result, setResult] = useState<ScanResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [checkingOut, setCheckingOut] = useState(false);

  useEffect(() => {
    const dataParam = searchParams.get("data");
    const urlParam = searchParams.get("url");

    if (dataParam) {
      try {
        setResult(JSON.parse(decodeURIComponent(dataParam)));
      } catch {
        setError("Invalid scan data");
      }
    } else if (urlParam) {
      // Re-scan from URL
      setLoading(true);
      fetch("/api/scan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: urlParam }),
      })
        .then((r) => r.json())
        .then((data) => {
          if (data.error) {
            setError(data.error);
          } else {
            setResult(data);
          }
        })
        .catch(() => setError("Failed to scan"))
        .finally(() => setLoading(false));
    }
  }, [searchParams]);

  async function handleCheckout(tier: string = "professional") {
    if (!result) return;
    setCheckingOut(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: result.url, score: result.score, grade: result.grade, tier }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setCheckingOut(false);
      }
    } catch {
      setCheckingOut(false);
    }
  }

  if (loading) {
    return (
      <main className="max-w-4xl mx-auto px-6 py-20 text-center">
        <svg className="animate-spin h-12 w-12 mx-auto mb-4 text-blue-500" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
        <p className="text-gray-400">Scanning for accessibility issues...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="max-w-4xl mx-auto px-6 py-20 text-center">
        <p className="text-red-400 mb-4">{error}</p>
        <a href="/" className="text-blue-400 hover:underline">Try another URL</a>
      </main>
    );
  }

  if (!result) {
    return (
      <main className="max-w-4xl mx-auto px-6 py-20 text-center">
        <p className="text-gray-400">No scan results. <a href="/" className="text-blue-400 hover:underline">Scan a website</a></p>
      </main>
    );
  }

  const severityColors = { HIGH: "text-red-400", MEDIUM: "text-yellow-400", LOW: "text-green-400" };

  return (
    <main className="max-w-5xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="text-center mb-10">
        <p className="text-gray-400 text-sm mb-2">Scan results for</p>
        <h1 className="text-2xl font-bold text-white break-all">{result.url}</h1>
        <p className="text-gray-500 text-xs mt-1">
          Scanned {new Date(result.scanDate).toLocaleString()} &middot; {result.checks.length} checks
        </p>
      </div>

      {/* Score + Risk */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 flex flex-col items-center">
          <ScoreRing score={result.score} grade={result.grade} />
          <div className="mt-4 text-center">
            <p className="text-gray-400 text-sm">
              {result.passedChecks} of {result.checks.length} checks passed &middot;{" "}
              {result.totalIssues} issue{result.totalIssues !== 1 ? "s" : ""} found
            </p>
          </div>
        </div>

        <div className="bg-[#141414] border border-[#262626] rounded-xl p-8">
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: result.risk.color }}
            />
            <h2 className="text-xl font-bold text-white">
              {result.risk.tier} Risk
            </h2>
          </div>
          <div className="mb-4">
            <p className="text-sm text-gray-400 mb-1">Estimated legal exposure</p>
            <p className="text-2xl font-bold text-white">
              {result.risk.minExposure} – {result.risk.maxExposure}
            </p>
          </div>
          <p className="text-sm text-gray-300 mb-4">{result.risk.description}</p>
          <ul className="space-y-2">
            {result.risk.stats.map((stat, i) => (
              <li key={i} className="text-xs text-gray-400 flex items-start gap-2">
                <span className="text-gray-500 mt-0.5">•</span>
                {stat}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Top Issues */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-2">
          {result.prioritizedIssues.length === 0 ? "No Issues Found" : "Top Issues to Fix"}
        </h2>
        {result.prioritizedIssues.length > 0 && (
          <p className="text-gray-400 text-sm mb-6">
            {result.totalIssues} issue{result.totalIssues !== 1 ? "s" : ""} found across {result.failedChecks} failed checks, prioritized by severity and impact.
          </p>
        )}

        {result.prioritizedIssues.map((issue, i) => (
            <div key={issue.checkId} className="bg-[#141414] border border-[#262626] rounded-xl p-6 mb-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center bg-[#262626] text-gray-300">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-white font-semibold">{issue.name}</h3>
                    <span className="text-xs text-gray-500">{issue.category}</span>
                  </div>
                </div>
                <span className={`text-xs font-medium px-2 py-1 rounded ${severityColors[issue.severity]} bg-white/5`}>
                  {issue.severity}
                </span>
              </div>
              <p className="text-sm text-gray-300 mb-3">{issue.details}</p>
              <div className="text-xs text-gray-500 mb-3">
                {issue.wcag} &middot; {issue.failingElements} element{issue.failingElements !== 1 ? "s" : ""} affected
              </div>

              <div className="bg-[#0a0a0a] rounded-lg p-4 text-sm">
                <p className="text-gray-400 mb-2 font-medium">{issue.fixDescription}</p>
                <div className="grid md:grid-cols-2 gap-4 mt-3">
                  <div>
                    <p className="text-red-400 text-xs mb-1 font-medium">BEFORE:</p>
                    <pre className="text-gray-400 text-xs overflow-x-auto whitespace-pre-wrap">{issue.fixBefore}</pre>
                  </div>
                  <div>
                    <p className="text-green-400 text-xs mb-1 font-medium">AFTER:</p>
                    <pre className="text-gray-300 text-xs overflow-x-auto whitespace-pre-wrap">{issue.fixAfter}</pre>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </section>

      {/* Professional Audit Report CTA */}
      {result.prioritizedIssues.length > 0 && (
        <section className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-2xl p-8 mb-10">
          <div className="text-center mb-6">
            <div className="inline-block bg-blue-500/20 text-blue-400 text-xs font-bold px-3 py-1 rounded-full mb-4">
              PROFESSIONAL AUDIT REPORT
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">Need to share this with your team or web developer?</h2>
            <p className="text-gray-300 max-w-lg mx-auto">
              Get a professionally formatted <strong className="text-white">ADA Compliance Audit Report</strong> — ready to download as PDF, with executive summary, remediation timeline, and compliance dashboard.
            </p>
          </div>

          <div className="max-w-md mx-auto mb-6">
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2"><span className="text-green-400">&#10003;</span> Executive summary with compliance score breakdown</li>
              <li className="flex items-center gap-2"><span className="text-green-400">&#10003;</span> Prioritized remediation timeline for your dev team</li>
              <li className="flex items-center gap-2"><span className="text-green-400">&#10003;</span> Full compliance dashboard with WCAG 2.1 mapping</li>
              <li className="flex items-center gap-2"><span className="text-green-400">&#10003;</span> Legal risk analysis with ADA lawsuit exposure estimate</li>
              <li className="flex items-center gap-2"><span className="text-green-400">&#10003;</span> Downloadable PDF — share with stakeholders instantly</li>
            </ul>
          </div>

          <div className="text-center">
            <button
              onClick={() => handleCheckout("professional")}
              disabled={checkingOut}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white rounded-xl font-semibold text-lg transition-colors shadow-lg shadow-blue-600/20"
            >
              {checkingOut ? "Redirecting to checkout..." : "Get Professional Report — $29.99"}
            </button>
            <p className="text-gray-500 text-xs mt-3">
              One-time payment &middot; Instant PDF &middot; Share with your team
            </p>
          </div>
        </section>
      )}

      {/* All Checks Summary */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4">All Checks</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {result.checks.map((check) => (
            <div
              key={check.id}
              className="bg-[#141414] border border-[#262626] rounded-lg p-4 flex items-center gap-3"
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  check.passed ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"
                }`}
              >
                {check.passed ? "✓" : "✗"}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-white font-medium truncate">{check.name}</p>
                <p className="text-xs text-gray-500 truncate">{check.category}</p>
              </div>
              <span className="text-sm font-bold text-gray-400">{check.score}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Share + Badge */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4">Share Your Score</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#141414] border border-[#262626] rounded-xl p-6">
            <h3 className="text-white font-medium mb-3">Share Link</h3>
            <div className="flex gap-2">
              <input
                readOnly
                value={`${typeof window !== "undefined" ? window.location.origin : ""}/results?url=${encodeURIComponent(result.url)}`}
                className="flex-1 bg-[#0a0a0a] border border-[#333] rounded-lg px-3 py-2 text-sm text-gray-300"
              />
              <button
                onClick={() => {
                  navigator.clipboard.writeText(
                    `${window.location.origin}/results?url=${encodeURIComponent(result.url)}`
                  );
                }}
                className="px-4 py-2 bg-[#262626] hover:bg-[#333] text-white rounded-lg text-sm transition-colors"
              >
                Copy
              </button>
            </div>
          </div>

          <div className="bg-[#141414] border border-[#262626] rounded-xl p-6">
            <h3 className="text-white font-medium mb-3">Badge Embed</h3>
            <div className="mb-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/api/badge?url=${encodeURIComponent(result.url)}`}
                alt={`AccessScore ${result.grade}`}
                width={160}
                height={28}
              />
            </div>
            <textarea
              readOnly
              rows={2}
              value={`<a href="https://accessscore.autonomous-claude.com/results?url=${encodeURIComponent(result.url)}"><img src="https://accessscore.autonomous-claude.com/api/badge?url=${encodeURIComponent(result.url)}" alt="AccessScore ${result.grade}" /></a>`}
              className="w-full bg-[#0a0a0a] border border-[#333] rounded-lg px-3 py-2 text-xs text-gray-400 font-mono resize-none"
            />
          </div>
        </div>
      </section>

      {/* Done-For-You CTA */}
      {result.prioritizedIssues.length > 0 && (
        <section className="mb-10 bg-[#141414] border border-[#262626] rounded-xl p-6 text-center">
          <h2 className="text-lg font-bold text-white mb-2">Need Help Fixing These Issues?</h2>
          <p className="text-gray-400 text-sm mb-4">
            Our team can audit your full site and deliver a professional compliance report with step-by-step fixes.
          </p>
          <a
            href="https://www.fiverr.com/ryunosuke_saito/audit-your-website-for-ada-accessibility-and-wcag-compliance"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold text-sm transition-colors"
          >
            Order Professional Audit — from $25
          </a>
        </section>
      )}

      {/* Disclaimer */}
      <div className="text-center text-xs text-gray-600 max-w-2xl mx-auto">
        <p>
          This risk estimate is based on publicly available ADA lawsuit settlement data and is provided
          for educational purposes only. It is not legal advice. Actual outcomes depend on jurisdiction,
          specific violations, and other factors. Consult a qualified attorney for legal guidance.
        </p>
      </div>
    </main>
  );
}

export default function ResultsPage() {
  return (
    <Suspense
      fallback={
        <main className="max-w-4xl mx-auto px-6 py-20 text-center">
          <p className="text-gray-400">Loading results...</p>
        </main>
      }
    >
      <ResultsContent />
    </Suspense>
  );
}
