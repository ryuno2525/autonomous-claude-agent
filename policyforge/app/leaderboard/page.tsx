import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy Compliance Leaderboard | PolicyForge",
  description: "See how popular websites score on privacy policy compliance. Real-time GDPR/CCPA analysis of top developer tools, startups, and SaaS platforms.",
  openGraph: {
    title: "Privacy Compliance Leaderboard — Who Scores Best?",
    description: "We scanned 20 popular dev tools for privacy compliance. 30% had no discoverable policy. See the full rankings.",
    type: "website",
  },
};

const SCAN_RESULTS = [
  { domain: "vercel.com", score: 100, grade: "A", passed: 10, total: 10 },
  { domain: "linear.app", score: 100, grade: "A", passed: 10, total: 10 },
  { domain: "dub.co", score: 100, grade: "A", passed: 10, total: 10 },
  { domain: "render.com", score: 100, grade: "A", passed: 10, total: 10 },
  { domain: "supabase.com", score: 100, grade: "A", passed: 10, total: 10 },
  { domain: "clerk.com", score: 100, grade: "A", passed: 10, total: 10 },
  { domain: "stripe.com", score: 92, grade: "A", passed: 9, total: 10 },
  { domain: "arcjet.com", score: 92, grade: "A", passed: 9, total: 10 },
  { domain: "trigger.dev", score: 92, grade: "A", passed: 9, total: 10 },
  { domain: "notion.so", score: 90, grade: "A", passed: 9, total: 10 },
  { domain: "planetscale.com", score: 90, grade: "A", passed: 9, total: 10 },
  { domain: "turso.tech", score: 90, grade: "A", passed: 9, total: 10 },
  { domain: "unkey.dev", score: 81, grade: "B", passed: 8, total: 10 },
  { domain: "neon.tech", score: 60, grade: "C", passed: 6, total: 10 },
  { domain: "github.com", score: 0, grade: "?", passed: 0, total: 10, noPolicy: true },
  { domain: "cal.com", score: 0, grade: "?", passed: 0, total: 10, noPolicy: true },
  { domain: "resend.com", score: 0, grade: "?", passed: 0, total: 10, noPolicy: true },
  { domain: "railway.app", score: 0, grade: "?", passed: 0, total: 10, noPolicy: true },
  { domain: "convex.dev", score: 0, grade: "?", passed: 0, total: 10, noPolicy: true },
  { domain: "upstash.com", score: 0, grade: "?", passed: 0, total: 10, noPolicy: true },
];

function GradeCircle({ grade, score, noPolicy }: { grade: string; score: number; noPolicy?: boolean }) {
  if (noPolicy) {
    return (
      <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-gray-400 font-bold text-lg">?</div>
    );
  }
  const color = score >= 90 ? "bg-green-500" : score >= 70 ? "bg-blue-500" : score >= 50 ? "bg-yellow-500" : "bg-red-500";
  return (
    <div className={`w-12 h-12 rounded-full ${color} flex items-center justify-center text-white font-bold text-lg`}>{grade}</div>
  );
}

export default function LeaderboardPage() {
  const withPolicy = SCAN_RESULTS.filter(r => !r.noPolicy);
  const withoutPolicy = SCAN_RESULTS.filter(r => r.noPolicy);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Privacy Compliance Leaderboard</h1>
          <p className="text-xl text-gray-400 mb-6">
            We scanned 20 popular developer tools and ranked their privacy policy compliance.
          </p>
          <div className="flex justify-center gap-8 text-center">
            <div className="bg-gray-900 rounded-xl p-4 px-6">
              <div className="text-3xl font-bold text-green-400">14</div>
              <div className="text-sm text-gray-400">Policies Found</div>
            </div>
            <div className="bg-gray-900 rounded-xl p-4 px-6">
              <div className="text-3xl font-bold text-red-400">6</div>
              <div className="text-sm text-gray-400">Not Found</div>
            </div>
            <div className="bg-gray-900 rounded-xl p-4 px-6">
              <div className="text-3xl font-bold text-blue-400">92</div>
              <div className="text-sm text-gray-400">Avg Score</div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 rounded-2xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Rankings</h2>
          <div className="space-y-3">
            {withPolicy.map((site, i) => (
              <div key={site.domain} className="flex items-center gap-4 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition">
                <span className="text-gray-500 font-mono w-8 text-right">#{i + 1}</span>
                <GradeCircle grade={site.grade} score={site.score} />
                <div className="flex-1">
                  <div className="font-semibold">{site.domain}</div>
                  <div className="text-sm text-gray-400">{site.passed}/{site.total} checks passed</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">{site.score}</div>
                  <div className="text-xs text-gray-400">/100</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {withoutPolicy.length > 0 && (
          <div className="bg-red-950/30 border border-red-900/50 rounded-2xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-2 text-red-400">No Discoverable Privacy Policy</h2>
            <p className="text-gray-400 text-sm mb-4">
              These sites had no privacy policy link discoverable from their homepage. This may indicate a compliance gap,
              or the policy may exist at a non-standard location.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {withoutPolicy.map((site) => (
                <div key={site.domain} className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                  <GradeCircle grade="?" score={0} noPolicy />
                  <span className="font-semibold text-gray-300">{site.domain}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-blue-800/50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">Check Your Own Site</h2>
          <p className="text-gray-300 mb-6">
            Is your website GDPR and CCPA compliant? Scan it for free — instant results, no signup required.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/check" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-8 rounded-lg transition">
              Free Compliance Scan
            </a>
            <a href="/" className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-lg transition">
              Generate a Privacy Policy
            </a>
          </div>
        </div>

        <div className="mt-12 text-center text-sm text-gray-500">
          <p>Scanned on March 8, 2026 using PolicyForge Compliance Scanner.</p>
          <p>Scores are based on automated keyword analysis of 10 compliance categories.</p>
          <p className="mt-2">
            <a href="/check" className="text-blue-400 hover:underline">Scan any website for free</a>
            {" · "}
            <a href="/api/score?url=example.com" className="text-blue-400 hover:underline">Free API</a>
            {" · "}
            <a href="/" className="text-blue-400 hover:underline">Generate a policy</a>
          </p>
        </div>
      </div>
    </div>
  );
}
