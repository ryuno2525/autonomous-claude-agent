const fs = require("fs");
const path = require("path");

const API_URL = "https://accessscore.autonomous-claude.com/api/scan";
const DELAY_MS = 2000;

const SITES = [
  // Tech companies (10)
  { url: "https://google.com", category: "Tech" },
  { url: "https://apple.com", category: "Tech" },
  { url: "https://microsoft.com", category: "Tech" },
  { url: "https://amazon.com", category: "Tech" },
  { url: "https://meta.com", category: "Tech" },
  { url: "https://netflix.com", category: "Tech" },
  { url: "https://spotify.com", category: "Tech" },
  { url: "https://salesforce.com", category: "Tech" },
  { url: "https://oracle.com", category: "Tech" },
  { url: "https://intel.com", category: "Tech" },

  // Social media (7)
  { url: "https://facebook.com", category: "Social Media" },
  { url: "https://twitter.com", category: "Social Media" },
  { url: "https://linkedin.com", category: "Social Media" },
  { url: "https://instagram.com", category: "Social Media" },
  { url: "https://tumblr.com", category: "Social Media" },
  { url: "https://pinterest.com", category: "Social Media" },
  { url: "https://tiktok.com", category: "Social Media" },

  // News (7)
  { url: "https://cnn.com", category: "News" },
  { url: "https://bbc.com", category: "News" },
  { url: "https://nytimes.com", category: "News" },
  { url: "https://apnews.com", category: "News" },
  { url: "https://usatoday.com", category: "News" },
  { url: "https://theguardian.com", category: "News" },
  { url: "https://forbes.com", category: "News" },

  // E-commerce (7)
  { url: "https://shopify.com", category: "E-commerce" },
  { url: "https://aliexpress.com", category: "E-commerce" },
  { url: "https://walmart.com", category: "E-commerce" },
  { url: "https://target.com", category: "E-commerce" },
  { url: "https://costco.com", category: "E-commerce" },
  { url: "https://homedepot.com", category: "E-commerce" },
  { url: "https://nordstrom.com", category: "E-commerce" },

  // Government (6)
  { url: "https://whitehouse.gov", category: "Government" },
  { url: "https://usa.gov", category: "Government" },
  { url: "https://irs.gov", category: "Government" },
  { url: "https://nasa.gov", category: "Government" },
  { url: "https://cdc.gov", category: "Government" },
  { url: "https://nih.gov", category: "Government" },

  // Education (6)
  { url: "https://harvard.edu", category: "Education" },
  { url: "https://mit.edu", category: "Education" },
  { url: "https://stanford.edu", category: "Education" },
  { url: "https://yale.edu", category: "Education" },
  { url: "https://berkeley.edu", category: "Education" },
  { url: "https://columbia.edu", category: "Education" },

  // Popular tools (7)
  { url: "https://github.com", category: "Tools" },
  { url: "https://stackoverflow.com", category: "Tools" },
  { url: "https://wikipedia.org", category: "Tools" },
  { url: "https://dropbox.com", category: "Tools" },
  { url: "https://notion.so", category: "Tools" },
  { url: "https://slack.com", category: "Tools" },
  { url: "https://zoom.us", category: "Tools" },
];

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function scanSite(site) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 30000);

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: site.url }),
      signal: controller.signal,
    });
    clearTimeout(timeout);

    const data = await res.json();

    if (!res.ok) {
      return {
        url: site.url,
        category: site.category,
        status: "error",
        error: data.error || `HTTP ${res.status}`,
      };
    }

    return {
      url: data.url || site.url,
      category: site.category,
      status: "success",
      score: data.score,
      grade: data.grade,
      riskTier: data.risk?.tier || "UNKNOWN",
      riskExposure: data.risk?.estimatedExposure || "N/A",
      totalIssues: data.totalIssues,
      passedChecks: data.passedChecks,
      failedChecks: data.failedChecks,
      topIssues: (data.prioritizedIssues || []).slice(0, 5).map((i) => ({
        name: i.name,
        checkId: i.checkId,
        severity: i.severity,
        failingElements: i.failingElements,
        wcag: i.wcag,
      })),
      categories: (data.checks || []).reduce((acc, check) => {
        if (!acc[check.category]) acc[check.category] = { passed: 0, failed: 0 };
        if (check.passed) acc[check.category].passed++;
        else acc[check.category].failed++;
        return acc;
      }, {}),
      scanDate: data.scanDate,
    };
  } catch (e) {
    clearTimeout(timeout);
    return {
      url: site.url,
      category: site.category,
      status: "error",
      error: e.name === "AbortError" ? "Request timed out (30s)" : e.message,
    };
  }
}

function generateReadme(report) {
  const successful = report.results.filter((r) => r.status === "success");
  const failed = report.results.filter((r) => r.status === "error");

  // Sort by score (best to worst)
  const sorted = [...successful].sort((a, b) => b.score - a.score);

  // Grade distribution
  const grades = {};
  for (const r of successful) {
    grades[r.grade] = (grades[r.grade] || 0) + 1;
  }

  // Risk tier distribution
  const risks = {};
  for (const r of successful) {
    risks[r.riskTier] = (risks[r.riskTier] || 0) + 1;
  }

  // Average score
  const avgScore =
    successful.length > 0
      ? Math.round(successful.reduce((s, r) => s + r.score, 0) / successful.length)
      : 0;

  // Category breakdowns
  const categoryStats = {};
  for (const r of successful) {
    if (!categoryStats[r.category]) {
      categoryStats[r.category] = { scores: [], grades: {} };
    }
    categoryStats[r.category].scores.push(r.score);
    categoryStats[r.category].grades[r.grade] =
      (categoryStats[r.category].grades[r.grade] || 0) + 1;
  }

  // Most common issues across all sites
  const issueCounts = {};
  for (const r of successful) {
    for (const issue of r.topIssues || []) {
      const key = issue.name || issue.checkId || "Unknown";
      if (!issueCounts[key]) issueCounts[key] = { count: 0, severity: issue.severity };
      issueCounts[key].count++;
    }
  }
  const commonIssues = Object.entries(issueCounts)
    .sort((a, b) => b[1].count - a[1].count)
    .slice(0, 10);

  let md = `# AccessScore Report: Accessibility Audit of 50 Popular Websites

**Scan Date:** ${report.scanDate}
**Scanner:** [AccessScore](https://accessscore.autonomous-claude.com) — ADA & WCAG 2.1 Accessibility Checker
**Sites Attempted:** ${report.totalSites}
**Successfully Scanned:** ${successful.length}
**Failed/Skipped:** ${failed.length}

---

## Summary Statistics

| Metric | Value |
|--------|-------|
| Average Score | **${avgScore}/100** |
| Highest Score | **${sorted.length > 0 ? sorted[0].score : "N/A"}/100** (${sorted.length > 0 ? sorted[0].url : "N/A"}) |
| Lowest Score | **${sorted.length > 0 ? sorted[sorted.length - 1].score : "N/A"}/100** (${sorted.length > 0 ? sorted[sorted.length - 1].url : "N/A"}) |
| Sites with Grade A (90+) | ${grades["A"] || 0} |
| Sites with Grade B (80-89) | ${grades["B"] || 0} |
| Sites with Grade C (70-79) | ${grades["C"] || 0} |
| Sites with Grade D (60-69) | ${grades["D"] || 0} |
| Sites with Grade F (<60) | ${grades["F"] || 0} |

### Risk Tier Distribution

| Risk Tier | Count | Percentage |
|-----------|-------|------------|
`;

  for (const tier of ["LOW", "MODERATE", "HIGH", "CRITICAL"]) {
    const count = risks[tier] || 0;
    const pct = successful.length > 0 ? ((count / successful.length) * 100).toFixed(1) : "0.0";
    md += `| ${tier} | ${count} | ${pct}% |\n`;
  }

  md += `
---

## Full Results (Sorted by Score)

| Rank | Website | Category | Score | Grade | Risk Tier | Issues | Passed | Failed |
|------|---------|----------|-------|-------|-----------|--------|--------|--------|
`;

  sorted.forEach((r, i) => {
    const domain = r.url.replace(/^https?:\/\//, "").replace(/\/$/, "");
    md += `| ${i + 1} | ${domain} | ${r.category} | ${r.score} | ${r.grade} | ${r.riskTier} | ${r.totalIssues} | ${r.passedChecks}/16 | ${r.failedChecks}/16 |\n`;
  });

  md += `
---

## Category Breakdown

`;

  const categoryOrder = [
    "Tech",
    "Social Media",
    "News",
    "E-commerce",
    "Government",
    "Education",
    "Tools",
  ];

  for (const cat of categoryOrder) {
    const stats = categoryStats[cat];
    if (!stats) continue;
    const avg = Math.round(stats.scores.reduce((s, v) => s + v, 0) / stats.scores.length);
    const best = Math.max(...stats.scores);
    const worst = Math.min(...stats.scores);
    const gradeStr = Object.entries(stats.grades)
      .sort((a, b) => b[1] - a[1])
      .map(([g, c]) => `${g}: ${c}`)
      .join(", ");

    md += `### ${cat}
- **Average Score:** ${avg}/100
- **Best:** ${best}/100 | **Worst:** ${worst}/100
- **Grade Distribution:** ${gradeStr}
- **Sites Scanned:** ${stats.scores.length}

`;
  }

  md += `---

## Most Common Issues

| Rank | Issue | Severity | Found On (sites) |
|------|-------|----------|-------------------|
`;

  commonIssues.forEach(([issue, data], i) => {
    md += `| ${i + 1} | ${issue} | ${data.severity} | ${data.count}/${successful.length} |\n`;
  });

  if (failed.length > 0) {
    md += `
---

## Failed Scans

The following sites could not be scanned (timeout, blocked, or non-HTML response):

| Website | Error |
|---------|-------|
`;
    for (const r of failed) {
      md += `| ${r.url} | ${r.error} |\n`;
    }
  }

  md += `
---

## Methodology

This report was generated using [AccessScore](https://accessscore.autonomous-claude.com), an automated ADA & WCAG 2.1 accessibility scanner.

### How Scores Are Calculated
- **16 automated checks** across 4 categories: Images & Media (25%), Structure & Navigation (30%), Forms & Interactions (25%), Document & Meta (20%)
- Scores range from **0-100**, with grades A (90+) through F (<60)
- **Risk tiers** estimate legal exposure based on violation count, severity, and ADA lawsuit data

### What Is Checked
1. Image alt text presence and quality
2. Media captions and autoplay behavior
3. Heading hierarchy (H1-H6)
4. Skip navigation links
5. ARIA landmarks
6. Form labels and button accessible names
7. Link text quality (no "click here")
8. Tab index ordering
9. HTML lang attribute
10. Page title
11. Viewport zoom restrictions
12. Table headers
13. Iframe titles

### Limitations
- This is an **automated scan** of the homepage only — it does not crawl entire sites
- Some checks are regex-based and may miss patterns in heavily minified HTML
- Manual testing (keyboard navigation, screen reader testing, color contrast) is not included
- Scores reflect a snapshot in time; sites change frequently
- Server-rendered vs. client-rendered pages may yield different results

### Scan Your Own Site
Visit [accessscore.autonomous-claude.com](https://accessscore.autonomous-claude.com) to scan any website for free.

---

*Generated by [AccessScore](https://accessscore.autonomous-claude.com) on ${report.scanDate}*
`;

  return md;
}

async function main() {
  console.log(`AccessScore Bulk Scanner`);
  console.log(`Scanning ${SITES.length} websites...`);
  console.log(`API: ${API_URL}`);
  console.log(`Delay between requests: ${DELAY_MS}ms`);
  console.log("---");

  const results = [];
  let successCount = 0;
  let errorCount = 0;

  for (let i = 0; i < SITES.length; i++) {
    const site = SITES[i];
    const progress = `[${i + 1}/${SITES.length}]`;
    process.stdout.write(`${progress} Scanning ${site.url}...`);

    const result = await scanSite(site);
    results.push(result);

    if (result.status === "success") {
      successCount++;
      console.log(` Score: ${result.score}/100 (${result.grade}) | Risk: ${result.riskTier} | Issues: ${result.totalIssues}`);
    } else {
      errorCount++;
      console.log(` ERROR: ${result.error}`);
    }

    // Wait between requests (skip delay on last item)
    if (i < SITES.length - 1) {
      await sleep(DELAY_MS);
    }
  }

  console.log("\n---");
  console.log(`Done! ${successCount} successful, ${errorCount} failed.`);

  const report = {
    scanDate: new Date().toISOString().split("T")[0],
    totalSites: SITES.length,
    successfulScans: successCount,
    failedScans: errorCount,
    results: results,
  };

  // Save results JSON
  const jsonPath = path.join(__dirname, "results.json");
  fs.writeFileSync(jsonPath, JSON.stringify(report, null, 2));
  console.log(`Results saved to ${jsonPath}`);

  // Generate README
  const readmePath = path.join(__dirname, "README.md");
  const readme = generateReadme(report);
  fs.writeFileSync(readmePath, readme);
  console.log(`Report saved to ${readmePath}`);
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
