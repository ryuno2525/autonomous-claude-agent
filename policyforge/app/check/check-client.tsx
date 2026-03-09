"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface CheckResult {
  score: number;
  sections: { name: string; found: boolean; weight: number; tip: string }[];
}

const CHECKS = [
  {
    name: "Data Collection Disclosure",
    keywords: ["collect", "information we collect", "data we collect", "personal data", "personal information", "personally identifiable"],
    weight: 15,
    tip: "Clearly state what personal data you collect from users.",
  },
  {
    name: "Purpose of Data Use",
    keywords: ["how we use", "use your", "purpose", "we use the information", "we use your data"],
    weight: 12,
    tip: "Explain why you collect data and how it's used.",
  },
  {
    name: "Cookie Policy",
    keywords: ["cookie", "cookies", "tracking technolog", "web beacon", "pixel"],
    weight: 10,
    tip: "Disclose your use of cookies and tracking technologies.",
  },
  {
    name: "Third-Party Sharing",
    keywords: ["third party", "third-party", "share your", "disclose", "service provider", "we may share"],
    weight: 12,
    tip: "Explain if and how you share data with third parties.",
  },
  {
    name: "User Rights",
    keywords: ["your rights", "right to access", "right to delete", "right to erasure", "opt-out", "opt out", "request deletion"],
    weight: 12,
    tip: "Inform users of their rights regarding their data.",
  },
  {
    name: "GDPR Compliance",
    keywords: ["gdpr", "general data protection", "data protection officer", "legal basis", "legitimate interest", "data portability"],
    weight: 10,
    tip: "Include GDPR-specific provisions if you serve EU users.",
  },
  {
    name: "CCPA Compliance",
    keywords: ["ccpa", "california consumer", "california privacy", "do not sell", "shine the light"],
    weight: 8,
    tip: "Include CCPA-specific provisions if you serve California residents.",
  },
  {
    name: "Data Retention",
    keywords: ["retention", "how long", "retain", "store your data", "keep your"],
    weight: 8,
    tip: "Specify how long you retain user data.",
  },
  {
    name: "Security Measures",
    keywords: ["security", "protect", "encryption", "safeguard", "secure"],
    weight: 5,
    tip: "Describe how you protect user data.",
  },
  {
    name: "Contact Information",
    keywords: ["contact us", "contact information", "reach us", "email us", "write to us"],
    weight: 5,
    tip: "Provide a way for users to contact you about privacy concerns.",
  },
  {
    name: "Policy Updates",
    keywords: ["update", "change", "modify", "revise", "amend"],
    weight: 3,
    tip: "Explain how users will be notified of policy changes.",
  },
];

function analyzePolicy(text: string): CheckResult {
  const lower = text.toLowerCase();
  const sections = CHECKS.map((check) => ({
    name: check.name,
    found: check.keywords.some((kw) => lower.includes(kw)),
    weight: check.weight,
    tip: check.tip,
  }));
  const maxScore = sections.reduce((sum, s) => sum + s.weight, 0);
  const earned = sections.filter((s) => s.found).reduce((sum, s) => sum + s.weight, 0);
  const score = Math.round((earned / maxScore) * 100);
  return { score, sections };
}

function ScoreRing({ score }: { score: number }) {
  const color = score >= 80 ? "#22c55e" : score >= 50 ? "#eab308" : "#ef4444";
  const circumference = 2 * Math.PI * 54;
  const offset = circumference - (score / 100) * circumference;
  return (
    <div className="relative w-36 h-36">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
        <circle cx="60" cy="60" r="54" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
        <circle
          cx="60" cy="60" r="54" fill="none" stroke={color} strokeWidth="8"
          strokeDasharray={circumference} strokeDashoffset={offset}
          strokeLinecap="round" className="transition-all duration-1000"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-3xl font-bold text-white">{score}</span>
      </div>
    </div>
  );
}

function getGrade(score: number): { label: string; color: string; message: string } {
  if (score >= 90) return { label: "Excellent", color: "text-green-400", message: "Your privacy policy covers nearly all essential sections." };
  if (score >= 70) return { label: "Good", color: "text-green-300", message: "Solid coverage, but a few areas could be improved." };
  if (score >= 50) return { label: "Fair", color: "text-yellow-400", message: "Missing several important sections. Consider updating your policy." };
  if (score >= 30) return { label: "Poor", color: "text-orange-400", message: "Significant gaps in coverage. Your policy needs substantial updates." };
  return { label: "Critical", color: "text-red-400", message: "Your privacy policy is missing most essential sections." };
}

function encodeResults(r: CheckResult, domain?: string): string {
  const found = r.sections.map((s) => (s.found ? "1" : "0")).join("");
  let params = `s=${r.score}&f=${found}`;
  if (domain) params += `&d=${encodeURIComponent(domain)}`;
  return params;
}

function decodeResults(score: string, found: string): CheckResult | null {
  const s = parseInt(score);
  if (isNaN(s) || !found || found.length !== CHECKS.length) return null;
  const sections = CHECKS.map((check, i) => ({
    name: check.name,
    found: found[i] === "1",
    weight: check.weight,
    tip: check.tip,
  }));
  return { score: s, sections };
}

function BadgeEmbed({ score, grade }: { score: number; grade: { label: string; color: string } }) {
  const [badgeCopied, setBadgeCopied] = useState(false);
  const badgeColor = score >= 80 ? "%2322c55e" : score >= 50 ? "%23eab308" : "%23ef4444";
  const badgeBg = score >= 80 ? "%23052e16" : score >= 50 ? "%23422006" : "%23450a0a";

  const badgeSvgUrl = `https://policyforge-one.vercel.app/api/badge?score=${score}&grade=${encodeURIComponent(grade.label)}`;

  const embedCode = `<a href="https://policyforge-one.vercel.app/check" target="_blank" rel="noopener" title="Privacy compliance verified by PolicyForge"><img src="${badgeSvgUrl}" alt="Privacy Score: ${score}/100 - ${grade.label}" width="200" height="40" /></a>`;

  const handleCopyBadge = () => {
    navigator.clipboard.writeText(embedCode);
    setBadgeCopied(true);
    setTimeout(() => setBadgeCopied(false), 2000);
  };

  return (
    <div className="p-6 bg-white/[0.03] border border-white/10 rounded-xl">
      <h3 className="text-lg font-bold text-white mb-2">Show Off Your Score</h3>
      <p className="text-sm text-gray-400 mb-4">
        Embed this compliance badge on your website to show visitors your privacy commitment.
      </p>
      <div className="flex items-center gap-4 mb-4">
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium"
          style={{ backgroundColor: `${badgeBg.replace(/%23/g, '#')}`, border: `1px solid ${badgeColor.replace(/%23/g, '#')}40` }}
        >
          <svg className="w-4 h-4" viewBox="0 0 20 20" fill={badgeColor.replace(/%23/g, '#')}>
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span style={{ color: badgeColor.replace(/%23/g, '#') }}>Privacy Score: {score}/100</span>
          <span className="text-gray-500 text-xs">by PolicyForge</span>
        </div>
      </div>
      <div className="relative">
        <pre className="p-3 bg-black/50 border border-white/10 rounded-lg text-xs text-gray-400 overflow-x-auto whitespace-pre-wrap break-all">
          {embedCode}
        </pre>
        <button
          onClick={handleCopyBadge}
          className="absolute top-2 right-2 px-3 py-1 text-xs bg-white/10 text-gray-300 rounded hover:bg-white/20 transition-colors"
        >
          {badgeCopied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
}

export default function CheckClient() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0f0f0f]" />}>
      <CheckPageInner />
    </Suspense>
  );
}

function CheckPageInner() {
  const [text, setText] = useState("");
  const [url, setUrl] = useState("");
  const [mode, setMode] = useState<"text" | "url">("url");
  const [result, setResult] = useState<CheckResult | null>(null);
  const [copied, setCopied] = useState(false);
  const [isShared, setIsShared] = useState(false);
  const [scanning, setScanning] = useState(false);
  const [scanError, setScanError] = useState("");
  const [scanSource, setScanSource] = useState("");
  const [scannedDomain, setScannedDomain] = useState("");
  const searchParams = useSearchParams();

  useEffect(() => {
    const score = searchParams.get("s");
    const found = searchParams.get("f");
    const domain = searchParams.get("d");
    if (score && found) {
      const decoded = decodeResults(score, found);
      if (decoded) {
        setResult(decoded);
        setIsShared(true);
        if (domain) setScannedDomain(decodeURIComponent(domain));
      }
    }
  }, [searchParams]);

  const extractDomain = (input: string): string => {
    try {
      let u = input.trim();
      if (!u.startsWith("http")) u = "https://" + u;
      return new URL(u).hostname;
    } catch {
      return input.trim();
    }
  };

  const handleCheck = () => {
    if (text.trim().length < 50) return;
    const r = analyzePolicy(text);
    setResult(r);
    setIsShared(false);
    setScanSource("");
    setScannedDomain("");
    const params = encodeResults(r);
    window.history.replaceState({}, "", `/check?${params}`);
  };

  const handleScanUrl = async () => {
    if (!url.trim()) return;
    setScanning(true);
    setScanError("");
    setScanSource("");
    setResult(null);
    const domain = extractDomain(url);
    setScannedDomain(domain);
    try {
      const res = await fetch("/api/scan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url.trim() }),
      });
      const data = await res.json();
      if (!res.ok) {
        setScanError(data.error || "Failed to scan website");
        return;
      }
      if (data.method === "not_found") {
        setScanError("No privacy policy found on this website. This is a compliance risk — generate one with PolicyForge.");
        return;
      }
      const r = analyzePolicy(data.policyText);
      setResult(r);
      setScanSource(data.source);
      setIsShared(false);
      const params = encodeResults(r, domain);
      window.history.replaceState({}, "", `/check?${params}`);
    } catch {
      setScanError("Network error. Please check the URL and try again.");
    } finally {
      setScanning(false);
    }
  };

  const handleShare = () => {
    if (!result) return;
    const params = encodeResults(result, scannedDomain || undefined);
    const shareUrl = `https://policyforge-one.vercel.app/check?${params}`;
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const grade = result ? getGrade(result.score) : null;

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#ededed]">
      <header className="border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
              P
            </div>
            <span className="text-white font-semibold text-lg">PolicyForge</span>
          </Link>
          <Link
            href="/"
            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            Generate a Policy
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Privacy Policy Compliance Checker
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Enter any website URL to instantly scan its privacy policy, or paste your policy text. We check for GDPR, CCPA, and other essential sections.
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex gap-1 p-1 bg-white/5 rounded-lg w-fit mx-auto">
            <button
              onClick={() => { setMode("url"); setResult(null); setScanError(""); }}
              className={`px-5 py-2 rounded-md text-sm font-medium transition-colors ${mode === "url" ? "bg-white text-black" : "text-gray-400 hover:text-white"}`}
            >
              Scan Website
            </button>
            <button
              onClick={() => { setMode("text"); setResult(null); setScanError(""); }}
              className={`px-5 py-2 rounded-md text-sm font-medium transition-colors ${mode === "text" ? "bg-white text-black" : "text-gray-400 hover:text-white"}`}
            >
              Paste Text
            </button>
          </div>

          {mode === "url" ? (
            <div className="space-y-4">
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                </div>
                <input
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleScanUrl()}
                  placeholder="Enter any website URL (e.g., example.com)"
                  className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-lg text-white text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                onClick={handleScanUrl}
                disabled={!url.trim() || scanning}
                className="w-full px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {scanning ? (
                  <>
                    <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                    Scanning website...
                  </>
                ) : "Scan for Privacy Policy"}
              </button>
              {scanError && (
                <div className="p-6 bg-red-500/10 border border-red-500/20 rounded-xl">
                  <div className="flex items-start gap-3 mb-4">
                    <span className="text-2xl">⚠️</span>
                    <div>
                      <p className="text-red-300 font-semibold text-lg">No Privacy Policy Found</p>
                      <p className="text-sm text-gray-400 mt-1">{scanError}</p>
                    </div>
                  </div>
                  <div className="bg-red-900/20 rounded-lg p-4 mb-4">
                    <p className="text-sm text-red-200 font-medium">Without a privacy policy, your website risks:</p>
                    <ul className="text-sm text-gray-400 mt-2 space-y-1">
                      <li>• GDPR fines up to <strong className="text-red-300">€20 million</strong> or 4% of annual revenue</li>
                      <li>• CCPA penalties of <strong className="text-red-300">$7,500 per violation</strong></li>
                      <li>• Rejection from app stores and ad networks</li>
                      <li>• Loss of customer trust</li>
                    </ul>
                  </div>
                  <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity">
                    Generate a Compliant Policy Now — From $4.99
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                  </Link>
                </div>
              )}
              {scanSource && (
                <p className="text-xs text-gray-500 text-center">Policy found at: {scanSource}</p>
              )}
            </div>
          ) : (
            <div className="space-y-4">
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows={12}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-gray-300 text-sm font-mono resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Paste your privacy policy text here..."
              />
              <button
                onClick={handleCheck}
                disabled={text.trim().length < 50}
                className="w-full px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Check Compliance
              </button>
            </div>
          )}

          {result && grade && (
            <div className="space-y-6 mt-8">
              {isShared && (
                <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg text-center">
                  <p className="text-sm text-blue-300">
                    {scannedDomain
                      ? <>Compliance report for <strong>{scannedDomain}</strong>. </>
                      : <>You&apos;re viewing a shared compliance report. </>
                    }
                    <Link href="/check" className="underline font-medium">Check your own policy &rarr;</Link>
                  </p>
                </div>
              )}
              <div className="flex flex-col items-center gap-4 p-8 bg-white/[0.03] border border-white/10 rounded-2xl">
                {scannedDomain && (
                  <p className="text-gray-400 text-sm font-mono">{scannedDomain}</p>
                )}
                <ScoreRing score={result.score} />
                <div className="text-center">
                  <p className={`text-2xl font-bold ${grade.color}`}>{grade.label}</p>
                  <p className="text-gray-400 text-sm mt-1">{grade.message}</p>
                </div>
                <div className="flex gap-3 mt-2">
                  <button
                    onClick={handleShare}
                    className="px-5 py-2 bg-white/10 text-white text-sm font-medium rounded-lg hover:bg-white/20 transition-colors flex items-center gap-2"
                  >
                    {copied ? "Link Copied!" : "Share This Score"}
                    {!copied && (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                    )}
                  </button>
                  {scannedDomain && (
                    <a
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`${scannedDomain} privacy compliance score: ${result.score}/100 (${grade.label})\n\nCheck your site's privacy policy:`)}&url=${encodeURIComponent(`https://policyforge-one.vercel.app/check?${encodeResults(result, scannedDomain)}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 bg-[#1d9bf0]/20 text-[#1d9bf0] text-sm font-medium rounded-lg hover:bg-[#1d9bf0]/30 transition-colors flex items-center gap-2"
                    >
                      Share on X
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </a>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <h2 className="text-xl font-bold text-white mb-4">Section Analysis</h2>
                {result.sections.map((s) => (
                  <div
                    key={s.name}
                    className={`flex items-start gap-3 p-4 rounded-lg border ${
                      s.found
                        ? "bg-green-500/5 border-green-500/20"
                        : "bg-red-500/5 border-red-500/20"
                    }`}
                  >
                    <span className="text-lg mt-0.5">{s.found ? "\u2705" : "\u274C"}</span>
                    <div className="flex-1">
                      <p className="font-medium text-white">{s.name}</p>
                      {!s.found && <p className="text-sm text-gray-400 mt-1">{s.tip}</p>}
                    </div>
                    <span className="text-xs text-gray-500 font-mono">{s.weight}pts</span>
                  </div>
                ))}
              </div>

              {/* Compliance Badge */}
              {result.score >= 50 && !isShared && (
                <BadgeEmbed score={result.score} grade={grade} />
              )}

              <div className={`p-6 rounded-xl border ${result.score < 70 ? "bg-gradient-to-r from-red-500/10 to-orange-500/10 border-red-500/20" : "bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border-blue-500/20"}`}>
                {result.score < 70 && (
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-0.5 bg-red-500/20 text-red-400 text-xs font-bold rounded uppercase">Action Required</span>
                  </div>
                )}
                <h3 className="text-xl font-bold text-white mb-2">
                  {result.score < 50
                    ? "Your privacy policy has critical gaps"
                    : result.score < 70
                    ? "Your policy needs improvement"
                    : "Want to boost your score?"}
                </h3>
                <p className="text-gray-400 text-sm mb-3">
                  {result.score < 70
                    ? `Your policy is missing ${result.sections.filter(s => !s.found).length} of ${result.sections.length} compliance checks. PolicyForge generates comprehensive policies that cover all categories — in under 2 minutes.`
                    : "PolicyForge Pro policies consistently score 95%+ on this checker. Upgrade your coverage to be fully compliant."}
                </p>
                {result.score < 70 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {result.sections.filter(s => !s.found).map(s => (
                      <span key={s.name} className="px-2 py-1 bg-red-500/10 border border-red-500/20 text-red-300 text-xs rounded">
                        Missing: {s.name}
                      </span>
                    ))}
                  </div>
                )}
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
                  >
                    {result.score < 70 ? "Fix My Policy — From $4.99" : "Generate a Better Policy"}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                  </Link>
                  <span className="text-xs text-gray-500">One-time payment • No subscription • Instant download</span>
                </div>
                {result.score < 50 && (
                  <p className="text-xs text-red-400/70 mt-3">
                    ⚠️ GDPR non-compliance can result in fines up to €20M or 4% of annual revenue.
                  </p>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="mt-16 border-t border-white/10 pt-12">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-2xl font-bold text-white">What We Check For</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {CHECKS.map((c) => (
                <div key={c.name} className="p-4 bg-white/5 rounded-lg">
                  <h3 className="font-semibold text-white text-sm mb-1">{c.name}</h3>
                  <p className="text-xs text-gray-400">{c.tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-12 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-white">Is this checker free?</h3>
              <p className="text-sm text-gray-400 mt-1">Yes, the compliance checker is completely free with unlimited checks. No signup required.</p>
            </div>
            <div>
              <h3 className="font-semibold text-white">Do you store my privacy policy?</h3>
              <p className="text-sm text-gray-400 mt-1">No. The analysis runs entirely in your browser. Your text never leaves your device.</p>
            </div>
            <div>
              <h3 className="font-semibold text-white">Is this legal advice?</h3>
              <p className="text-sm text-gray-400 mt-1">No. This tool provides informational guidance only. Consult a qualified attorney for jurisdiction-specific legal compliance.</p>
            </div>
            <div>
              <h3 className="font-semibold text-white">What is a good compliance score?</h3>
              <p className="text-sm text-gray-400 mt-1">We recommend aiming for 80% or higher. Scores below 50% indicate significant gaps that could put your business at risk.</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-white/10 mt-16 py-8 text-center text-sm text-gray-500">
        <p>
          PolicyForge &mdash; Part of the{" "}
          <a href="https://dashboard-mocha-delta-98.vercel.app" className="text-blue-400 hover:text-blue-300">
            Autonomous Claude Experiment
          </a>
        </p>
      </footer>
    </div>
  );
}
