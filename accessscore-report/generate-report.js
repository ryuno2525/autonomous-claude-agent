#!/usr/bin/env node

/**
 * AccessScore Professional PDF Report Generator
 *
 * Runs TWO scan engines:
 *   1. axe-core (via Puppeteer) — industry-standard, 90+ WCAG rules, real browser rendering
 *   2. AccessScore custom checks (via Cheerio) — supplementary checks axe-core doesn't cover
 *
 * Usage: node generate-report.js <url> [output.html]
 */

import * as cheerio from 'cheerio';
import puppeteer from 'puppeteer';
import { readFileSync, writeFileSync } from 'fs';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const axeCorePath = require.resolve('axe-core');
const axeCoreSource = readFileSync(axeCorePath, 'utf8');

// ─── axe-core scan (real browser) ───────────────────────────────────────────

async function runAxeScan(url) {
  let browser;
  try {
    browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
    await page.setBypassCSP(true);
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 });
    // Wait a bit for JS to render
    await new Promise(r => setTimeout(r, 3000));

    // Inject and run axe-core
    await page.evaluate(axeCoreSource);
    const results = await page.evaluate(async () => {
      return await window.axe.run(document, {
        runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'] },
      });
    });

    await browser.close();
    return results;
  } catch (err) {
    if (browser) await browser.close();
    throw err;
  }
}

// ─── AccessScore custom checks (cheerio / static HTML) ─────────────────────

const SEVERITY = {
  CRITICAL: { label: 'CRITICAL', weight: 8, color: '#ef4444' },
  SERIOUS:  { label: 'SERIOUS',  weight: 5, color: '#f59e0b' },
  MODERATE: { label: 'MODERATE', weight: 3, color: '#3b82f6' },
  MINOR:    { label: 'MINOR',    weight: 1, color: '#6b7280' },
};

function runCustomChecks($) {
  const issues = [];

  // Skip navigation (axe doesn't check this)
  const skipLink = $('a[href^="#"]').filter((_, el) => {
    const text = $(el).text().toLowerCase();
    return text.includes('skip') || text.includes('jump to');
  });
  if (skipLink.length === 0) {
    issues.push({
      severity: SEVERITY.SERIOUS, count: 1,
      message: 'Page missing skip navigation link',
      wcag: '2.4.1 Bypass Blocks (Level A)',
      fix: 'Add a skip link as the first child of <body>:\n\n<body>\n  <a href="#main-content" class="skip-link">Skip to main content</a>\n  ...\n  <main id="main-content">...</main>\n</body>\n\nCSS:\n.skip-link { position: absolute; top: -40px; left: 0; padding: 8px; z-index: 100; }\n.skip-link:focus { top: 0; }',
      source: 'accessscore',
    });
  }

  // Heading hierarchy (axe checks individual headings but not full hierarchy flow)
  const headings = [];
  $('h1, h2, h3, h4, h5, h6').each((_, el) => {
    headings.push(parseInt(el.tagName.replace('h', ''), 10));
  });
  const skippedLevels = [];
  for (let i = 1; i < headings.length; i++) {
    if (headings[i] > headings[i - 1] + 1) {
      skippedLevels.push(`h${headings[i - 1]} → h${headings[i]}`);
    }
  }
  if (skippedLevels.length > 0) {
    issues.push({
      severity: SEVERITY.MODERATE, count: skippedLevels.length,
      message: `Heading hierarchy skips: ${skippedLevels.join(', ')}`,
      wcag: '1.3.1 Info and Relationships (Level A)',
      fix: 'Ensure headings follow a logical order without skipping levels.\n\nBefore: <h1>Title</h1> then <h3>Sub</h3>\nAfter:  <h1>Title</h1> then <h2>Section</h2> then <h3>Sub</h3>',
      source: 'accessscore',
    });
  }

  // Low contrast inline styles (axe checks computed contrast, this catches inline style hints)
  const lightColorPattern = /color\s*:\s*(#(?:fff|fef|fdf|fce|fcf|eee|ddd|ccc|bbb|f[0-9a-f]{5}|e[0-9a-f]{5})|(?:white|whitesmoke|snow|ghostwhite|lightyellow|lightgray|gainsboro))/i;
  const suspectContrast = $('[style]').filter((_, el) => lightColorPattern.test($(el).attr('style') || ''));
  if (suspectContrast.length > 0) {
    issues.push({
      severity: SEVERITY.MODERATE, count: suspectContrast.length,
      message: `${suspectContrast.length} element${suspectContrast.length > 1 ? 's' : ''} with potential low-contrast inline styles`,
      wcag: '1.4.3 Contrast Minimum (Level AA)',
      fix: 'Ensure text has at least 4.5:1 contrast ratio against its background.\n\nBefore: color: #999; (2.8:1 on white)\nAfter:  color: #595959; (7:1 on white)\n\nUse a contrast checker: https://webaim.org/resources/contrastchecker/',
      source: 'accessscore',
    });
  }

  // Tables without headers
  const tablesNoHeaders = $('table').filter((_, el) => !$(el).find('th').length && !$(el).attr('role'));
  if (tablesNoHeaders.length > 0) {
    issues.push({
      severity: SEVERITY.SERIOUS, count: tablesNoHeaders.length,
      message: `${tablesNoHeaders.length} data table${tablesNoHeaders.length > 1 ? 's' : ''} without header cells`,
      wcag: '1.3.1 Info and Relationships (Level A)',
      fix: 'Add <th> elements for column/row headers.\n\n<table>\n  <thead>\n    <tr><th scope="col">Name</th><th scope="col">Email</th></tr>\n  </thead>\n  <tbody>...</tbody>\n</table>',
      source: 'accessscore',
    });
  }

  return issues;
}

// ─── Scoring ────────────────────────────────────────────────────────────────

function computeScore(axeViolations, customIssues) {
  const impactWeight = { critical: 10, serious: 7, moderate: 4, minor: 1 };
  let deductions = 0;

  for (const v of axeViolations) {
    const w = impactWeight[v.impact] || 4;
    deductions += w * Math.min(v.nodes.length, 10); // cap per-rule to avoid single rule tanking score
  }
  for (const issue of customIssues) {
    deductions += issue.severity.weight * issue.count;
  }

  return Math.max(0, Math.min(100, 100 - deductions));
}

function getGrade(score) {
  if (score >= 90) return 'A';
  if (score >= 80) return 'B';
  if (score >= 70) return 'C';
  if (score >= 60) return 'D';
  return 'F';
}

function getRiskTier(score) {
  if (score >= 90) return { tier: 'LOW', exposure: 'Minimal', color: '#22c55e' };
  if (score >= 70) return { tier: 'MODERATE', exposure: '$10,000 - $50,000', color: '#f59e0b' };
  if (score >= 50) return { tier: 'HIGH', exposure: '$25,000 - $75,000', color: '#ef4444' };
  return { tier: 'CRITICAL', exposure: '$50,000 - $150,000+', color: '#dc2626' };
}

function escapeHtml(str) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// ─── HTML Report ────────────────────────────────────────────────────────────

function generateHTML(url, score, grade, risk, axeResults, customIssues, scanDate) {
  const violations = [...axeResults.violations].sort((a, b) => {
    const order = { critical: 0, serious: 1, moderate: 2, minor: 3 };
    return (order[a.impact] ?? 2) - (order[b.impact] ?? 2);
  });

  const impactColor = { critical: '#ef4444', serious: '#f59e0b', moderate: '#3b82f6', minor: '#6b7280' };
  const gradeColor = { A: '#22c55e', B: '#84cc16', C: '#f59e0b', D: '#ef4444', F: '#dc2626' }[grade] || '#666';

  const axeCounts = { critical: 0, serious: 0, moderate: 0, minor: 0 };
  let totalAxeElements = 0;
  for (const v of violations) {
    axeCounts[v.impact] += v.nodes.length;
    totalAxeElements += v.nodes.length;
  }

  // axe-core violation cards
  const axeCards = violations.map((v, i) => {
    const color = impactColor[v.impact] || '#6b7280';
    const nodeExamples = v.nodes.slice(0, 3).map(n =>
      `<div style="background: #f1f5f9; border-radius: 4px; padding: 8px; margin-bottom: 4px; font-family: monospace; font-size: 11px; color: #334155; overflow-x: auto; white-space: pre-wrap;">${escapeHtml(n.html.substring(0, 300))}${n.html.length > 300 ? '...' : ''}</div>`
    ).join('');
    const moreCount = v.nodes.length > 3 ? `<p style="font-size: 11px; color: #9ca3af; margin-top: 4px;">...and ${v.nodes.length - 3} more element${v.nodes.length - 3 > 1 ? 's' : ''}</p>` : '';

    const fixSuggestions = v.nodes.slice(0, 1).map(n => {
      if (n.failureSummary) {
        return `<pre style="font-family: monospace; font-size: 11px; color: #334155; white-space: pre-wrap;">${escapeHtml(n.failureSummary)}</pre>`;
      }
      return '';
    }).join('');

    return `
    <div class="issue-card">
      <div class="issue-header">
        <span class="issue-number">${i + 1}</span>
        <span class="severity-badge" style="background: ${color}15; color: ${color}; border: 1px solid ${color}40;">
          ${v.impact.toUpperCase()}
        </span>
        <span class="issue-title">${escapeHtml(v.help)}</span>
      </div>
      <div class="issue-wcag">${v.tags.filter(t => t.startsWith('wcag')).join(', ')} &mdash; ${v.nodes.length} element${v.nodes.length !== 1 ? 's' : ''} affected</div>
      <div style="margin-left: 38px; margin-bottom: 8px; font-size: 13px; color: #4b5563;">${escapeHtml(v.description)}</div>
      <div style="margin-left: 38px; margin-bottom: 8px;">
        <div style="font-size: 11px; font-weight: 600; color: #6b7280; text-transform: uppercase; margin-bottom: 4px;">Affected Elements:</div>
        ${nodeExamples}
        ${moreCount}
      </div>
      ${fixSuggestions ? `<div class="issue-fix"><div class="fix-label">How to fix:</div>${fixSuggestions}</div>` : ''}
      <div style="margin-left: 38px; margin-top: 8px;"><a href="${v.helpUrl}" style="font-size: 11px; color: #3b82f6;">Learn more: ${v.id} rule documentation</a></div>
    </div>`;
  }).join('\n');

  // Custom check cards
  const customCards = customIssues.map((issue, i) => `
    <div class="issue-card">
      <div class="issue-header">
        <span class="issue-number">${i + 1}</span>
        <span class="severity-badge" style="background: ${issue.severity.color}15; color: ${issue.severity.color}; border: 1px solid ${issue.severity.color}40;">
          ${issue.severity.label}
        </span>
        <span class="issue-title">${escapeHtml(issue.message)}</span>
      </div>
      <div class="issue-wcag">WCAG ${issue.wcag}</div>
      <div class="issue-fix">
        <div class="fix-label">How to fix:</div>
        <pre class="fix-code">${escapeHtml(issue.fix)}</pre>
      </div>
    </div>
  `).join('\n');

  const totalIssues = violations.length + customIssues.length;
  const passedRules = axeResults.passes.length;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AccessScore Audit Report - ${escapeHtml(url)}</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #1a1a1a; line-height: 1.6; background: #fff; }

    .header { background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); color: white; padding: 40px; }
    .header h1 { font-size: 28px; margin-bottom: 4px; }
    .header .subtitle { color: #94a3b8; font-size: 14px; }
    .header .url { color: #60a5fa; font-size: 16px; margin-top: 12px; word-break: break-all; }
    .header .date { color: #64748b; font-size: 12px; margin-top: 4px; }
    .header .engines { color: #94a3b8; font-size: 11px; margin-top: 8px; }
    .header .engines span { background: rgba(255,255,255,0.1); padding: 2px 8px; border-radius: 4px; margin-right: 6px; }

    .summary { display: flex; gap: 24px; padding: 32px 40px; border-bottom: 1px solid #e5e7eb; flex-wrap: wrap; }
    .score-box { text-align: center; min-width: 140px; }
    .score-number { font-size: 64px; font-weight: 800; color: ${gradeColor}; line-height: 1; }
    .score-label { font-size: 14px; color: #6b7280; margin-top: 4px; }
    .grade-badge { display: inline-block; background: ${gradeColor}15; color: ${gradeColor}; border: 2px solid ${gradeColor}; border-radius: 8px; padding: 2px 12px; font-size: 20px; font-weight: 700; margin-top: 8px; }

    .risk-box { flex: 1; min-width: 200px; }
    .risk-tier { font-size: 24px; font-weight: 700; color: ${risk.color}; }
    .risk-exposure { font-size: 14px; color: #6b7280; margin-top: 4px; }
    .risk-description { font-size: 13px; color: #4b5563; margin-top: 8px; }

    .stats-box { display: flex; gap: 12px; flex-wrap: wrap; }
    .stat { text-align: center; min-width: 70px; padding: 10px; background: #f9fafb; border-radius: 8px; }
    .stat-number { font-size: 22px; font-weight: 700; }
    .stat-label { font-size: 10px; color: #6b7280; text-transform: uppercase; }
    .stat-critical { color: #ef4444; }
    .stat-serious { color: #f59e0b; }
    .stat-moderate { color: #3b82f6; }
    .stat-minor { color: #6b7280; }
    .stat-pass { color: #22c55e; }

    .section { padding: 32px 40px; }
    .section h2 { font-size: 22px; margin-bottom: 16px; padding-bottom: 8px; border-bottom: 2px solid #e5e7eb; }
    .section-label { display: inline-block; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; padding: 3px 8px; border-radius: 4px; margin-left: 8px; vertical-align: middle; }

    .issue-card { border: 1px solid #e5e7eb; border-radius: 8px; padding: 20px; margin-bottom: 16px; page-break-inside: avoid; }
    .issue-header { display: flex; align-items: center; gap: 10px; margin-bottom: 8px; flex-wrap: wrap; }
    .issue-number { background: #f1f5f9; color: #475569; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 600; flex-shrink: 0; }
    .severity-badge { font-size: 11px; font-weight: 600; padding: 2px 8px; border-radius: 4px; text-transform: uppercase; flex-shrink: 0; }
    .issue-title { font-weight: 600; font-size: 15px; }
    .issue-wcag { font-size: 12px; color: #6b7280; margin-bottom: 12px; margin-left: 38px; }
    .issue-fix { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 14px; margin-left: 38px; }
    .fix-label { font-size: 12px; font-weight: 600; color: #059669; text-transform: uppercase; margin-bottom: 6px; }
    .fix-code { font-family: 'SF Mono', Monaco, 'Cascadia Code', monospace; font-size: 12px; color: #334155; white-space: pre-wrap; line-height: 1.5; }

    .footer { background: #f8fafc; border-top: 1px solid #e5e7eb; padding: 24px 40px; text-align: center; font-size: 12px; color: #6b7280; }
    .footer a { color: #3b82f6; }
    .disclaimer { padding: 16px 40px; font-size: 11px; color: #9ca3af; border-top: 1px solid #f3f4f6; }

    @media print {
      body { font-size: 12px; }
      .header { padding: 24px 32px; }
      .section { padding: 24px 32px; }
      .issue-card { page-break-inside: avoid; }
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>Website Accessibility Audit Report</h1>
    <div class="subtitle">ADA / WCAG 2.1 Compliance Assessment</div>
    <div class="url">${escapeHtml(url)}</div>
    <div class="date">Generated ${scanDate} by AccessScore</div>
    <div class="engines">
      Scan engines: <span>axe-core ${axeResults.testEngine?.version || '4.x'}</span> <span>AccessScore Custom Checks</span>
    </div>
  </div>

  <div class="summary">
    <div class="score-box">
      <div class="score-number">${score}</div>
      <div class="score-label">out of 100</div>
      <div class="grade-badge">Grade ${grade}</div>
    </div>

    <div class="risk-box">
      <div class="risk-tier">${risk.tier} RISK</div>
      <div class="risk-exposure">Estimated legal exposure: ${risk.exposure}</div>
      <div class="risk-description">
        Based on ADA lawsuit settlement data. Over 4,000 ADA website lawsuits were filed in 2024,
        with settlements averaging $25,000–$75,000 for small businesses.
      </div>
    </div>

    <div class="stats-box">
      <div class="stat"><div class="stat-number stat-critical">${axeCounts.critical}</div><div class="stat-label">Critical</div></div>
      <div class="stat"><div class="stat-number stat-serious">${axeCounts.serious}</div><div class="stat-label">Serious</div></div>
      <div class="stat"><div class="stat-number stat-moderate">${axeCounts.moderate}</div><div class="stat-label">Moderate</div></div>
      <div class="stat"><div class="stat-number stat-minor">${axeCounts.minor}</div><div class="stat-label">Minor</div></div>
      <div class="stat"><div class="stat-number stat-pass">${passedRules}</div><div class="stat-label">Passed</div></div>
    </div>
  </div>

  <!-- axe-core findings -->
  <div class="section">
    <h2>
      WCAG Violations (${violations.length})
      <span class="section-label" style="background: #dbeafe; color: #1d4ed8;">axe-core ${axeResults.testEngine?.version || ''}</span>
    </h2>
    <p style="color: #6b7280; font-size: 14px; margin-bottom: 20px;">
      ${totalAxeElements} accessibility violation${totalAxeElements !== 1 ? 's' : ''} across ${violations.length} rules,
      detected via axe-core (Deque Systems) — the industry-standard WCAG testing engine used by
      Microsoft, Google, and the US Department of Homeland Security.
    </p>
    ${violations.length === 0 ? '<p style="color: #22c55e; font-size: 16px; font-weight: 600;">No WCAG violations detected by axe-core. Excellent!</p>' : axeCards}
  </div>

  ${customIssues.length > 0 ? `
  <!-- Custom checks -->
  <div class="section">
    <h2>
      Additional Checks (${customIssues.length})
      <span class="section-label" style="background: #f0fdf4; color: #15803d;">AccessScore</span>
    </h2>
    <p style="color: #6b7280; font-size: 14px; margin-bottom: 20px;">
      Supplementary checks for common accessibility patterns not covered by axe-core's automated rules.
    </p>
    ${customCards}
  </div>
  ` : ''}

  <!-- Remediation Priority -->
  <div class="section" style="page-break-before: always;">
    <h2>Remediation Priority</h2>
    <p style="color: #6b7280; font-size: 14px; margin-bottom: 16px;">
      Fix issues in this order for maximum legal risk reduction:
    </p>
    <div style="font-size: 14px; color: #374151;">
      <div style="padding: 12px; background: #fef2f2; border-left: 4px solid #ef4444; margin-bottom: 8px; border-radius: 0 4px 4px 0;">
        <strong>Week 1 — Critical + Serious:</strong> Fix all critical and serious violations first.
        These are most commonly cited in ADA lawsuits and have the highest legal risk.
        ${axeCounts.critical + axeCounts.serious > 0 ? `(${axeCounts.critical + axeCounts.serious} issues)` : '(None found!)'}
      </div>
      <div style="padding: 12px; background: #eff6ff; border-left: 4px solid #3b82f6; margin-bottom: 8px; border-radius: 0 4px 4px 0;">
        <strong>Week 2-3 — Moderate:</strong> Address moderate issues to reach full WCAG 2.1 AA compliance.
        ${axeCounts.moderate > 0 ? `(${axeCounts.moderate} issues)` : '(None found!)'}
      </div>
      <div style="padding: 12px; background: #f9fafb; border-left: 4px solid #6b7280; border-radius: 0 4px 4px 0;">
        <strong>Ongoing — Minor + Monitoring:</strong> Fix minor issues and implement monitoring to
        prevent regression during future updates.
      </div>
    </div>
  </div>

  <!-- Passed checks -->
  <div class="section">
    <h2>Passed Checks (${passedRules})</h2>
    <p style="color: #6b7280; font-size: 14px; margin-bottom: 12px;">
      Your page passed these ${passedRules} WCAG rules:
    </p>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 6px; font-size: 12px; color: #4b5563;">
      ${axeResults.passes.map(p => `<div style="display: flex; align-items: center; gap: 6px;"><span style="color: #22c55e; font-weight: bold;">&#10003;</span> ${escapeHtml(p.help)}</div>`).join('\n      ')}
    </div>
  </div>

  <!-- Methodology -->
  <div class="section">
    <h2>Methodology</h2>
    <p style="color: #6b7280; font-size: 13px; margin-bottom: 12px;">This report was generated using two complementary scan engines:</p>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; font-size: 13px;">
      <div style="background: #f9fafb; border-radius: 8px; padding: 16px;">
        <div style="font-weight: 600; margin-bottom: 4px; color: #1d4ed8;">axe-core ${axeResults.testEngine?.version || ''}</div>
        <div style="color: #6b7280; font-size: 12px;">Industry-standard WCAG testing engine by Deque Systems. Tests the fully rendered page in a real browser (Chromium). Covers 90+ WCAG 2.1 Level A and AA rules including color contrast, ARIA usage, keyboard accessibility, and more.</div>
      </div>
      <div style="background: #f9fafb; border-radius: 8px; padding: 16px;">
        <div style="font-weight: 600; margin-bottom: 4px; color: #15803d;">AccessScore Custom Checks</div>
        <div style="color: #6b7280; font-size: 12px;">Supplementary static HTML analysis covering patterns not included in axe-core's automated ruleset, such as skip navigation links, heading hierarchy flow, and inline style contrast indicators.</div>
      </div>
    </div>
  </div>

  <div class="disclaimer">
    <strong>Disclaimer:</strong> This report is based on automated testing and covers common WCAG 2.1 Level A and AA violations.
    Automated tools typically detect 30-57% of accessibility issues. This report does not replace manual testing,
    assistive technology testing (screen readers, keyboard-only navigation), or legal counsel.
    Legal risk estimates are based on publicly available ADA lawsuit settlement data and are provided for
    educational purposes only. This report does not constitute a certification of compliance.
    Consult a qualified attorney for legal guidance specific to your situation.
  </div>

  <div class="footer">
    Report generated by <a href="https://accessscore.autonomous-claude.com">AccessScore</a> —
    powered by <a href="https://github.com/dequelabs/axe-core">axe-core</a> + custom analysis
  </div>
</body>
</html>`;
}

// ─── Main ───────────────────────────────────────────────────────────────────

async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0 || args.includes('--help')) {
    console.log(`
  AccessScore Report Generator (axe-core + custom checks)

  Usage: node generate-report.js <url> [output.html]

  Runs axe-core (90+ WCAG rules, real browser) AND custom AccessScore checks.

  Examples:
    node generate-report.js https://example.com
    node generate-report.js https://example.com report.html
    `);
    process.exit(0);
  }

  const url = args[0];
  const outputFile = args[1] || `report-${new URL(url).hostname.replace(/\./g, '-')}.html`;
  const scanDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  // Run axe-core (real browser)
  console.log(`[axe-core] Scanning ${url} in headless Chrome...`);
  let axeResults;
  try {
    axeResults = await runAxeScan(url);
    console.log(`[axe-core] ${axeResults.violations.length} violations, ${axeResults.passes.length} passed rules`);
  } catch (err) {
    console.error(`[axe-core] Failed: ${err.message}`);
    process.exit(1);
  }

  // Run custom checks (static HTML)
  console.log(`[AccessScore] Running supplementary checks...`);
  let customIssues = [];
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    const response = await fetch(url, {
      headers: { 'User-Agent': 'AccessScore/2.0 (accessibility-checker)', 'Accept': 'text/html' },
      signal: controller.signal,
      redirect: 'follow',
    });
    clearTimeout(timeout);
    if (response.ok) {
      const html = await response.text();
      const $ = cheerio.load(html);
      customIssues = runCustomChecks($);
      console.log(`[AccessScore] ${customIssues.length} additional issues`);
    }
  } catch {
    console.log(`[AccessScore] Static fetch failed, skipping custom checks`);
  }

  // Compute score
  const score = computeScore(axeResults.violations, customIssues);
  const grade = getGrade(score);
  const risk = getRiskTier(score);

  console.log(`\nScore: ${score}/100 (${grade}) — ${risk.tier} risk`);
  console.log(`Total: ${axeResults.violations.length + customIssues.length} issues (${axeResults.violations.length} axe-core + ${customIssues.length} custom)`);

  // Generate report
  const reportHTML = generateHTML(url, score, grade, risk, axeResults, customIssues, scanDate);
  writeFileSync(outputFile, reportHTML);
  console.log(`\nReport saved to: ${outputFile}`);
  console.log(`Open in browser and print to PDF (Ctrl+P → Save as PDF)`);
}

main();
