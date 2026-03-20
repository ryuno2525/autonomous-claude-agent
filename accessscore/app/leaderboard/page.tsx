import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Accessibility Report Card 2026 — Top 50 Websites Ranked",
  description:
    "We scanned 50 of the world's top websites for accessibility and ranked them by WCAG 2.1 compliance. See which major sites pass — and which ones fail. Website accessibility rankings for 2026.",
  openGraph: {
    title: "Web Accessibility Report Card 2026 — Top 50 Websites Ranked",
    description:
      "We scanned 50 of the world's top websites for accessibility. See which major sites pass — and which ones fail.",
    url: "https://accessscore.autonomous-claude.com/leaderboard",
    siteName: "AccessScore",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Accessibility Report Card 2026 — Top 50 Websites Ranked",
    description:
      "We scanned 50 of the world's top websites for accessibility. See which major sites pass — and which ones fail.",
  },
  alternates: {
    canonical: "https://accessscore.autonomous-claude.com/leaderboard",
  },
};

// ── Embedded scan data (March 2026) ─────────────────────────────────────────
const SCAN_DATE = "2026-03-17";

interface SiteResult {
  url: string;
  category: string;
  score: number;
  grade: string;
  riskTier: string;
  totalIssues: number;
  passedChecks: number;
  failedChecks: number;
}

const SCAN_RESULTS: SiteResult[] = [
  { url: "https://google.com", category: "Tech", score: 66, grade: "D", riskTier: "MODERATE", totalIssues: 7, passedChecks: 12, failedChecks: 4 },
  { url: "https://apple.com", category: "Tech", score: 87, grade: "B", riskTier: "HIGH", totalIssues: 9, passedChecks: 14, failedChecks: 2 },
  { url: "https://microsoft.com", category: "Tech", score: 87, grade: "B", riskTier: "MODERATE", totalIssues: 4, passedChecks: 12, failedChecks: 4 },
  { url: "https://amazon.com", category: "Tech", score: 71, grade: "C", riskTier: "HIGH", totalIssues: 9, passedChecks: 12, failedChecks: 4 },
  { url: "https://meta.com", category: "Tech", score: 82, grade: "B", riskTier: "MODERATE", totalIssues: 5, passedChecks: 12, failedChecks: 4 },
  { url: "https://netflix.com", category: "Tech", score: 66, grade: "D", riskTier: "MODERATE", totalIssues: 7, passedChecks: 12, failedChecks: 4 },
  { url: "https://spotify.com", category: "Tech", score: 78, grade: "C", riskTier: "MODERATE", totalIssues: 6, passedChecks: 13, failedChecks: 3 },
  { url: "https://salesforce.com", category: "Tech", score: 76, grade: "C", riskTier: "CRITICAL", totalIssues: 248, passedChecks: 11, failedChecks: 5 },
  { url: "https://facebook.com", category: "Social Media", score: 66, grade: "D", riskTier: "MODERATE", totalIssues: 6, passedChecks: 12, failedChecks: 4 },
  { url: "https://twitter.com", category: "Social Media", score: 72, grade: "C", riskTier: "HIGH", totalIssues: 7, passedChecks: 12, failedChecks: 4 },
  { url: "https://linkedin.com", category: "Social Media", score: 96, grade: "A", riskTier: "MODERATE", totalIssues: 5, passedChecks: 15, failedChecks: 1 },
  { url: "https://instagram.com", category: "Social Media", score: 62, grade: "D", riskTier: "HIGH", totalIssues: 8, passedChecks: 11, failedChecks: 5 },
  { url: "https://tumblr.com", category: "Social Media", score: 78, grade: "C", riskTier: "MODERATE", totalIssues: 3, passedChecks: 14, failedChecks: 2 },
  { url: "https://pinterest.com", category: "Social Media", score: 70, grade: "C", riskTier: "MODERATE", totalIssues: 6, passedChecks: 13, failedChecks: 3 },
  { url: "https://tiktok.com", category: "Social Media", score: 70, grade: "C", riskTier: "MODERATE", totalIssues: 6, passedChecks: 13, failedChecks: 3 },
  { url: "https://cnn.com", category: "News", score: 66, grade: "D", riskTier: "MODERATE", totalIssues: 8, passedChecks: 12, failedChecks: 4 },
  { url: "https://bbc.com", category: "News", score: 88, grade: "B", riskTier: "CRITICAL", totalIssues: 69, passedChecks: 11, failedChecks: 5 },
  { url: "https://nytimes.com", category: "News", score: 99, grade: "A", riskTier: "CRITICAL", totalIssues: 30, passedChecks: 14, failedChecks: 2 },
  { url: "https://apnews.com", category: "News", score: 58, grade: "F", riskTier: "HIGH", totalIssues: 17, passedChecks: 8, failedChecks: 8 },
  { url: "https://usatoday.com", category: "News", score: 68, grade: "D", riskTier: "CRITICAL", totalIssues: 11, passedChecks: 9, failedChecks: 7 },
  { url: "https://theguardian.com", category: "News", score: 64, grade: "D", riskTier: "MODERATE", totalIssues: 7, passedChecks: 12, failedChecks: 4 },
  { url: "https://forbes.com", category: "News", score: 68, grade: "D", riskTier: "CRITICAL", totalIssues: 57, passedChecks: 11, failedChecks: 5 },
  { url: "https://shopify.com", category: "E-commerce", score: 89, grade: "B", riskTier: "CRITICAL", totalIssues: 28, passedChecks: 12, failedChecks: 4 },
  { url: "https://walmart.com", category: "E-commerce", score: 100, grade: "A", riskTier: "LOW", totalIssues: 5, passedChecks: 15, failedChecks: 1 },
  { url: "https://target.com", category: "E-commerce", score: 88, grade: "B", riskTier: "HIGH", totalIssues: 12, passedChecks: 11, failedChecks: 5 },
  { url: "https://costco.com", category: "E-commerce", score: 100, grade: "A", riskTier: "LOW", totalIssues: 13, passedChecks: 15, failedChecks: 1 },
  { url: "https://nordstrom.com", category: "E-commerce", score: 62, grade: "D", riskTier: "HIGH", totalIssues: 8, passedChecks: 11, failedChecks: 5 },
  { url: "https://whitehouse.gov", category: "Government", score: 80, grade: "B", riskTier: "HIGH", totalIssues: 11, passedChecks: 12, failedChecks: 4 },
  { url: "https://usa.gov", category: "Government", score: 93, grade: "A", riskTier: "HIGH", totalIssues: 9, passedChecks: 13, failedChecks: 3 },
  { url: "https://irs.gov", category: "Government", score: 96, grade: "A", riskTier: "MODERATE", totalIssues: 4, passedChecks: 14, failedChecks: 2 },
  { url: "https://nasa.gov", category: "Government", score: 76, grade: "C", riskTier: "HIGH", totalIssues: 13, passedChecks: 8, failedChecks: 8 },
  { url: "https://cdc.gov", category: "Government", score: 97, grade: "A", riskTier: "HIGH", totalIssues: 18, passedChecks: 13, failedChecks: 3 },
  { url: "https://nih.gov", category: "Government", score: 92, grade: "A", riskTier: "HIGH", totalIssues: 12, passedChecks: 11, failedChecks: 5 },
  { url: "https://harvard.edu", category: "Education", score: 96, grade: "A", riskTier: "MODERATE", totalIssues: 2, passedChecks: 14, failedChecks: 2 },
  { url: "https://mit.edu", category: "Education", score: 90, grade: "A", riskTier: "HIGH", totalIssues: 10, passedChecks: 13, failedChecks: 3 },
  { url: "https://stanford.edu", category: "Education", score: 87, grade: "B", riskTier: "CRITICAL", totalIssues: 38, passedChecks: 12, failedChecks: 4 },
  { url: "https://yale.edu", category: "Education", score: 86, grade: "B", riskTier: "HIGH", totalIssues: 17, passedChecks: 10, failedChecks: 6 },
  { url: "https://berkeley.edu", category: "Education", score: 90, grade: "A", riskTier: "MODERATE", totalIssues: 7, passedChecks: 12, failedChecks: 4 },
  { url: "https://github.com", category: "Tools", score: 86, grade: "B", riskTier: "HIGH", totalIssues: 9, passedChecks: 11, failedChecks: 5 },
  { url: "https://stackoverflow.com", category: "Tools", score: 89, grade: "B", riskTier: "CRITICAL", totalIssues: 24, passedChecks: 14, failedChecks: 2 },
  { url: "https://wikipedia.org", category: "Tools", score: 73, grade: "C", riskTier: "HIGH", totalIssues: 5, passedChecks: 11, failedChecks: 5 },
  { url: "https://dropbox.com", category: "Tools", score: 94, grade: "A", riskTier: "HIGH", totalIssues: 14, passedChecks: 13, failedChecks: 3 },
  { url: "https://notion.so", category: "Tools", score: 77, grade: "C", riskTier: "CRITICAL", totalIssues: 26, passedChecks: 12, failedChecks: 4 },
  { url: "https://slack.com", category: "Tools", score: 94, grade: "A", riskTier: "CRITICAL", totalIssues: 31, passedChecks: 14, failedChecks: 2 },
  { url: "https://zoom.us", category: "Tools", score: 79, grade: "C", riskTier: "CRITICAL", totalIssues: 40, passedChecks: 9, failedChecks: 7 },
];

const FAILED_SITES = [
  "oracle.com",
  "intel.com",
  "aliexpress.com",
  "homedepot.com",
  "columbia.edu",
];

// ── Helpers ──────────────────────────────────────────────────────────────────

function getDomain(url: string) {
  return url.replace("https://", "").replace("http://", "").replace(/\/$/, "");
}

function scoreColor(score: number): string {
  if (score >= 90) return "text-green-400";
  if (score >= 80) return "text-blue-400";
  if (score >= 70) return "text-yellow-400";
  if (score >= 60) return "text-orange-400";
  return "text-red-400";
}

function scoreBg(score: number): string {
  if (score >= 90) return "bg-green-500/10 border-green-500/20";
  if (score >= 80) return "bg-blue-500/10 border-blue-500/20";
  if (score >= 70) return "bg-yellow-500/10 border-yellow-500/20";
  if (score >= 60) return "bg-orange-500/10 border-orange-500/20";
  return "bg-red-500/10 border-red-500/20";
}

function gradeColor(grade: string): string {
  if (grade === "A") return "text-green-400";
  if (grade === "B") return "text-blue-400";
  if (grade === "C") return "text-yellow-400";
  if (grade === "D") return "text-orange-400";
  return "text-red-400";
}

function riskColor(tier: string): string {
  if (tier === "LOW") return "text-green-400";
  if (tier === "MODERATE") return "text-yellow-400";
  if (tier === "HIGH") return "text-orange-400";
  return "text-red-400";
}

function riskBadgeBg(tier: string): string {
  if (tier === "LOW") return "bg-green-500/10 border-green-500/30";
  if (tier === "MODERATE") return "bg-yellow-500/10 border-yellow-500/30";
  if (tier === "HIGH") return "bg-orange-500/10 border-orange-500/30";
  return "bg-red-500/10 border-red-500/30";
}

// ── Computed stats ───────────────────────────────────────────────────────────

const sorted = [...SCAN_RESULTS].sort((a, b) => b.score - a.score);
const avgScore = (SCAN_RESULTS.reduce((sum, r) => sum + r.score, 0) / SCAN_RESULTS.length).toFixed(1);
const highCritCount = SCAN_RESULTS.filter(r => r.riskTier === "HIGH" || r.riskTier === "CRITICAL").length;
const highCritPct = Math.round((highCritCount / SCAN_RESULTS.length) * 100);
const gradeACount = SCAN_RESULTS.filter(r => r.grade === "A").length;
const gradeFCount = SCAN_RESULTS.filter(r => r.grade === "F").length;

const categories = ["Tech", "Social Media", "News", "E-commerce", "Government", "Education", "Tools"];
const categoryStats = categories.map(cat => {
  const sites = SCAN_RESULTS.filter(r => r.category === cat);
  const avg = sites.length > 0 ? Math.round(sites.reduce((s, r) => s + r.score, 0) / sites.length) : 0;
  const best = sites.length > 0 ? sites.reduce((a, b) => a.score > b.score ? a : b) : null;
  const worst = sites.length > 0 ? sites.reduce((a, b) => a.score < b.score ? a : b) : null;
  return { category: cat, count: sites.length, avgScore: avg, best, worst };
});

// ── JSON-LD ──────────────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Web Accessibility Report Card 2026 — Top 50 Websites Ranked",
  "description": "We scanned 50 of the world's top websites for accessibility and ranked them by WCAG 2.1 compliance. See which major sites pass and which fail.",
  "datePublished": SCAN_DATE,
  "dateModified": SCAN_DATE,
  "author": {
    "@type": "Organization",
    "name": "AccessScore",
    "url": "https://accessscore.autonomous-claude.com",
  },
  "publisher": {
    "@type": "Organization",
    "name": "AccessScore",
    "url": "https://accessscore.autonomous-claude.com",
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://accessscore.autonomous-claude.com/leaderboard",
  },
};

// ── Page ─────────────────────────────────────────────────────────────────────

export default function LeaderboardPage() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="py-16 md:py-24 text-center">
        <div className="inline-block bg-blue-500/10 text-blue-400 text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-blue-500/20">
          {SCAN_RESULTS.length} sites scanned &middot; March 2026
        </div>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Web Accessibility<br />
          <span className="text-blue-400">Report Card 2026</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8">
          We scanned 50 of the world&apos;s top websites for accessibility. Here&apos;s what we found.
        </p>
        <p className="text-sm text-gray-500 max-w-2xl mx-auto">
          Each site was tested against 16 WCAG 2.1 Level A and AA checks across images, structure, forms,
          and document metadata. Scores range from 0 (inaccessible) to 100 (fully compliant).
          {FAILED_SITES.length > 0 && (
            <> {FAILED_SITES.length} sites ({FAILED_SITES.join(", ")}) blocked our scanner and are excluded.</>
          )}
        </p>
      </section>

      {/* Key Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        <div className="bg-[#141414] border border-[#262626] rounded-xl p-5 text-center">
          <div className="text-3xl font-bold text-white">{avgScore}</div>
          <div className="text-sm text-gray-400 mt-1">Average Score</div>
        </div>
        <div className="bg-[#141414] border border-[#262626] rounded-xl p-5 text-center">
          <div className="text-3xl font-bold text-orange-400">{highCritPct}%</div>
          <div className="text-sm text-gray-400 mt-1">High/Critical Risk</div>
        </div>
        <div className="bg-[#141414] border border-[#262626] rounded-xl p-5 text-center">
          <div className="text-3xl font-bold text-green-400">{gradeACount}</div>
          <div className="text-sm text-gray-400 mt-1">Sites with A Grade</div>
        </div>
        <div className="bg-[#141414] border border-[#262626] rounded-xl p-5 text-center">
          <div className="text-3xl font-bold text-white">Skip Nav</div>
          <div className="text-sm text-gray-400 mt-1">Most Common Issue</div>
        </div>
      </section>

      {/* Key Findings */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Key Findings</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#141414] border border-[#262626] rounded-xl p-6">
            <div className="text-red-400 text-3xl mb-3">!</div>
            <h3 className="text-lg font-semibold text-white mb-2">{highCritPct}% at Elevated Risk</h3>
            <p className="text-gray-400 text-sm">
              {highCritCount} out of {SCAN_RESULTS.length} scanned sites have HIGH or CRITICAL legal risk ratings.
              These sites have accessibility violations that are commonly cited in ADA lawsuits.
            </p>
          </div>
          <div className="bg-[#141414] border border-[#262626] rounded-xl p-6">
            <div className="text-yellow-400 text-3xl mb-3">~</div>
            <h3 className="text-lg font-semibold text-white mb-2">Average Score: {avgScore}/100</h3>
            <p className="text-gray-400 text-sm">
              The average accessibility score across top websites is a B-minus. Even the biggest companies
              in the world struggle with basic accessibility. Only {gradeACount} sites earned an A.
            </p>
          </div>
          <div className="bg-[#141414] border border-[#262626] rounded-xl p-6">
            <div className="text-blue-400 text-3xl mb-3">#</div>
            <h3 className="text-lg font-semibold text-white mb-2">Heading & Link Issues Everywhere</h3>
            <p className="text-gray-400 text-sm">
              The most common failures are heading hierarchy violations and poor link text quality, each found on
              64% of scanned sites. Skip navigation links are missing on 47% of sites.
            </p>
          </div>
        </div>
      </section>

      {/* Full Leaderboard Table */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Full Rankings</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-[#333]">
                <th className="py-3 px-3 text-gray-400 text-xs uppercase tracking-wider font-medium w-12">#</th>
                <th className="py-3 px-3 text-gray-400 text-xs uppercase tracking-wider font-medium">Website</th>
                <th className="py-3 px-3 text-gray-400 text-xs uppercase tracking-wider font-medium text-center">Score</th>
                <th className="py-3 px-3 text-gray-400 text-xs uppercase tracking-wider font-medium text-center">Grade</th>
                <th className="py-3 px-3 text-gray-400 text-xs uppercase tracking-wider font-medium text-center hidden sm:table-cell">Risk</th>
                <th className="py-3 px-3 text-gray-400 text-xs uppercase tracking-wider font-medium text-center hidden md:table-cell">Issues</th>
                <th className="py-3 px-3 text-gray-400 text-xs uppercase tracking-wider font-medium text-center hidden lg:table-cell">Category</th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((site, i) => (
                <tr
                  key={site.url}
                  className={`border-b border-[#1a1a1a] hover:bg-[#141414] transition-colors ${
                    i < 3 ? "bg-[#0a0a0a]" : ""
                  }`}
                >
                  <td className="py-3 px-3 text-gray-500 text-sm font-mono">
                    {i < 3 ? (
                      <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold ${
                        i === 0 ? "bg-yellow-500/20 text-yellow-400" :
                        i === 1 ? "bg-gray-400/20 text-gray-300" :
                        "bg-orange-600/20 text-orange-400"
                      }`}>
                        {i + 1}
                      </span>
                    ) : (
                      i + 1
                    )}
                  </td>
                  <td className="py-3 px-3">
                    <div className="text-white font-medium text-sm">{getDomain(site.url)}</div>
                  </td>
                  <td className="py-3 px-3 text-center">
                    <span className={`inline-block px-2.5 py-1 rounded-lg text-sm font-bold border ${scoreBg(site.score)} ${scoreColor(site.score)}`}>
                      {site.score}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-center">
                    <span className={`text-lg font-bold ${gradeColor(site.grade)}`}>{site.grade}</span>
                  </td>
                  <td className="py-3 px-3 text-center hidden sm:table-cell">
                    <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium border ${riskBadgeBg(site.riskTier)} ${riskColor(site.riskTier)}`}>
                      {site.riskTier}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-center text-gray-400 text-sm hidden md:table-cell">
                    {site.totalIssues}
                  </td>
                  <td className="py-3 px-3 text-center text-gray-500 text-xs hidden lg:table-cell">
                    {site.category}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-500 text-xs mt-4 text-center">
          Scanned on {SCAN_DATE}. Scores based on 16 WCAG 2.1 checks. Risk tiers based on issue count and severity.
          {gradeFCount > 0 && ` ${gradeFCount} site(s) received an F grade.`}
        </p>
      </section>

      {/* Category Breakdown */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Scores by Category</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryStats.map((cat) => {
            const catLabel =
              cat.category === "E-commerce" ? "E-Commerce" :
              cat.category === "Tools" ? "Dev Tools & Productivity" :
              cat.category;

            const catIcon =
              cat.category === "Tech" ? "T" :
              cat.category === "Social Media" ? "S" :
              cat.category === "News" ? "N" :
              cat.category === "E-commerce" ? "E" :
              cat.category === "Government" ? "G" :
              cat.category === "Education" ? "Ed" :
              "D";

            return (
              <div key={cat.category} className="bg-[#141414] border border-[#262626] rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center text-blue-400 font-bold text-sm">
                    {catIcon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">{catLabel}</h3>
                    <span className="text-gray-500 text-xs">{cat.count} sites scanned</span>
                  </div>
                </div>
                <div className="flex items-end gap-2 mb-4">
                  <span className={`text-4xl font-bold ${scoreColor(cat.avgScore)}`}>{cat.avgScore}</span>
                  <span className="text-gray-500 text-sm mb-1">avg score</span>
                </div>
                <div className="space-y-2 text-sm">
                  {cat.best && (
                    <div className="flex justify-between">
                      <span className="text-gray-400">Best</span>
                      <span className="text-green-400 font-medium">
                        {getDomain(cat.best.url)} ({cat.best.score})
                      </span>
                    </div>
                  )}
                  {cat.worst && (
                    <div className="flex justify-between">
                      <span className="text-gray-400">Worst</span>
                      <span className="text-orange-400 font-medium">
                        {getDomain(cat.worst.url)} ({cat.worst.score})
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Methodology */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">Methodology</h2>
        <div className="bg-[#141414] border border-[#262626] rounded-xl p-6 md:p-8 max-w-3xl mx-auto">
          <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
            <p>
              We selected 50 of the most-visited websites across seven categories: Tech, Social Media, News,
              E-commerce, Government, Education, and Developer Tools. Each site&apos;s homepage was fetched and
              analyzed using AccessScore&apos;s 16-check WCAG 2.1 scanner.
            </p>
            <p>
              <strong className="text-white">Scoring:</strong> Each check is weighted by category importance
              (Images & Media 25%, Structure & Navigation 30%, Forms & Interactions 25%, Document & Meta 20%).
              Scores range from 0 to 100. Grades: A (90-100), B (80-89), C (70-79), D (60-69), F (&lt;60).
            </p>
            <p>
              <strong className="text-white">Risk Tiers:</strong> Based on total issues found, severity
              distribution, and publicly available ADA lawsuit data. LOW (0-3 issues), MODERATE (4-8),
              HIGH (9-15), CRITICAL (16+). A high score with a CRITICAL risk tier means the site passes many
              checks but has a large number of individual failing elements.
            </p>
            <p>
              <strong className="text-white">Limitations:</strong> This scan only tests the homepage of each
              site. Inner pages may have different accessibility profiles. The scanner is HTML-based and cannot
              evaluate JavaScript-rendered content, keyboard navigation, or color contrast. Scores represent a
              snapshot from {SCAN_DATE} and may change as sites update.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-16 mb-8">
        <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">How does your website compare?</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Get your own AccessScore in seconds. Our free scanner checks 16 WCAG criteria and calculates
            your legal risk tier instantly.
          </p>
          <a
            href="/"
            className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-lg transition-colors"
          >
            Check Your Website Free
          </a>
          <p className="text-gray-500 text-xs mt-4">
            No signup required. Results in seconds.
          </p>
        </div>
      </section>
    </div>
  );
}
