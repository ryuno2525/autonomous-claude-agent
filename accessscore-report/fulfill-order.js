#!/usr/bin/env node

/**
 * Fiverr Order Fulfillment Script
 *
 * Usage:
 *   node fulfill-order.js <url>                    # Basic ($25) - 1 page
 *   node fulfill-order.js <url1> <url2> ...        # Standard ($50) - up to 5 pages
 *   node fulfill-order.js --file urls.txt          # Premium ($100) - up to 10 pages from file
 *
 * Generates individual reports + a combined summary report.
 * Output goes to ./orders/<order-name>/ directory.
 */

import * as cheerio from 'cheerio';
import { writeFileSync, mkdirSync, readFileSync, existsSync } from 'fs';

// ─── Scanner (same as generate-report.js) ──────────────────────────────────

const SEVERITY = {
  CRITICAL: { label: 'CRITICAL', weight: 8, color: '#ef4444' },
  SERIOUS:  { label: 'SERIOUS',  weight: 5, color: '#f59e0b' },
  MODERATE: { label: 'MODERATE', weight: 3, color: '#3b82f6' },
  MINOR:    { label: 'MINOR',    weight: 1, color: '#6b7280' },
};

function runChecks($) {
  const issues = [];

  const imgsNoAlt = $('img').filter((_, el) => {
    const alt = $(el).attr('alt');
    return alt === undefined || alt === null;
  });
  if (imgsNoAlt.length > 0) {
    issues.push({ severity: SEVERITY.CRITICAL, count: imgsNoAlt.length, message: `${imgsNoAlt.length} image${imgsNoAlt.length > 1 ? 's' : ''} missing alt text`, wcag: '1.1.1 Non-text Content (Level A)', fix: 'Add descriptive alt attributes to each <img> tag.\n\nBefore: <img src="photo.jpg">\nAfter:  <img src="photo.jpg" alt="Description of image">' });
  }

  const htmlLang = $('html').attr('lang');
  if (!htmlLang || htmlLang.trim() === '') {
    issues.push({ severity: SEVERITY.SERIOUS, count: 1, message: 'Page missing lang attribute on <html> element', wcag: '3.1.1 Language of Page (Level A)', fix: 'Add lang attribute: <html lang="en">' });
  }

  const title = $('title').text().trim();
  if (!title) {
    issues.push({ severity: SEVERITY.SERIOUS, count: 1, message: 'Page missing <title> element', wcag: '2.4.2 Page Titled (Level A)', fix: 'Add <title> inside <head>' });
  }

  const headings = [];
  $('h1, h2, h3, h4, h5, h6').each((_, el) => headings.push(parseInt(el.tagName.replace('h', ''), 10)));
  let skippedLevels = [];
  for (let i = 1; i < headings.length; i++) {
    if (headings[i] > headings[i - 1] + 1) skippedLevels.push(`h${headings[i - 1]} → h${headings[i]}`);
  }
  if (skippedLevels.length > 0) {
    issues.push({ severity: SEVERITY.MODERATE, count: skippedLevels.length, message: `Heading hierarchy skips: ${skippedLevels.join(', ')}`, wcag: '1.3.1 Info and Relationships (Level A)', fix: 'Ensure headings follow logical order without skipping levels' });
  }

  const inputsWithoutLabels = $('input, select, textarea').filter((_, el) => {
    const $el = $(el);
    const type = ($el.attr('type') || '').toLowerCase();
    if (['hidden', 'submit', 'button', 'reset', 'image'].includes(type)) return false;
    const id = $el.attr('id');
    if (id && $(`label[for="${id}"]`).length > 0) return false;
    if ($el.closest('label').length > 0) return false;
    if ($el.attr('aria-label') || $el.attr('aria-labelledby') || $el.attr('title')) return false;
    return true;
  });
  if (inputsWithoutLabels.length > 0) {
    issues.push({ severity: SEVERITY.SERIOUS, count: inputsWithoutLabels.length, message: `${inputsWithoutLabels.length} form input${inputsWithoutLabels.length > 1 ? 's' : ''} missing labels`, wcag: '1.3.1 Info and Relationships (Level A)', fix: 'Associate <label> with each input via for/id or wrapping' });
  }

  if ($('meta[name="viewport"]').length === 0) {
    issues.push({ severity: SEVERITY.MODERATE, count: 1, message: 'Page missing meta viewport tag', wcag: '1.4.4 Resize Text (Level AA)', fix: 'Add <meta name="viewport" content="width=device-width, initial-scale=1">' });
  }

  const linksNoText = $('a').filter((_, el) => {
    const $el = $(el);
    return !$el.text().trim() && !$el.attr('aria-label') && !$el.attr('aria-labelledby') && !$el.attr('title') && !$el.find('img[alt]').attr('alt');
  });
  if (linksNoText.length > 0) {
    issues.push({ severity: SEVERITY.CRITICAL, count: linksNoText.length, message: `${linksNoText.length} link${linksNoText.length > 1 ? 's' : ''} without accessible text`, wcag: '2.4.4 Link Purpose (Level A)', fix: 'Add aria-label or visible text to all links' });
  }

  const skipLink = $('a[href^="#"]').filter((_, el) => {
    const text = $(el).text().toLowerCase();
    return text.includes('skip') || text.includes('jump to');
  });
  if (skipLink.length === 0) {
    issues.push({ severity: SEVERITY.SERIOUS, count: 1, message: 'Page missing skip navigation link', wcag: '2.4.1 Bypass Blocks (Level A)', fix: 'Add skip link as first child of <body>: <a href="#main-content">Skip to main content</a>' });
  }

  const landmarks = $('main, [role="main"], nav, [role="navigation"], header, [role="banner"], footer, [role="contentinfo"]');
  if (landmarks.length === 0) {
    issues.push({ severity: SEVERITY.MINOR, count: 1, message: 'No ARIA landmark regions found', wcag: '1.3.1 Info and Relationships (Level A)', fix: 'Use semantic HTML5: <header>, <nav>, <main>, <footer>' });
  }

  const tablesNoHeaders = $('table').filter((_, el) => !$(el).find('th').length && !$(el).attr('role'));
  if (tablesNoHeaders.length > 0) {
    issues.push({ severity: SEVERITY.SERIOUS, count: tablesNoHeaders.length, message: `${tablesNoHeaders.length} table${tablesNoHeaders.length > 1 ? 's' : ''} without header cells`, wcag: '1.3.1 Info and Relationships (Level A)', fix: 'Add <th> elements for column/row headers' });
  }

  const emptyButtons = $('button').filter((_, el) => {
    const $el = $(el);
    return !$el.text().trim() && !$el.attr('aria-label') && !$el.attr('aria-labelledby') && !$el.attr('title') && !$el.find('img[alt]').attr('alt');
  });
  if (emptyButtons.length > 0) {
    issues.push({ severity: SEVERITY.CRITICAL, count: emptyButtons.length, message: `${emptyButtons.length} empty button${emptyButtons.length > 1 ? 's' : ''} (no accessible name)`, wcag: '4.1.2 Name, Role, Value (Level A)', fix: 'Add aria-label or visible text to all buttons' });
  }

  return issues;
}

function calculateScore(issues) {
  let deductions = 0;
  for (const issue of issues) deductions += issue.severity.weight * issue.count;
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
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// ─── Scan a single URL ──────────────────────────────────────────────────────

async function scanUrl(url) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);
  try {
    const response = await fetch(url, {
      headers: { 'User-Agent': 'AccessScore/1.0 (accessibility-checker)', 'Accept': 'text/html' },
      signal: controller.signal,
      redirect: 'follow',
    });
    clearTimeout(timeout);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const html = await response.text();
    const $ = cheerio.load(html);
    const issues = runChecks($);
    const score = calculateScore(issues);
    const grade = getGrade(score);
    const risk = getRiskTier(score);
    return { url, score, grade, risk, issues, error: null };
  } catch (err) {
    clearTimeout(timeout);
    return { url, score: 0, grade: 'F', risk: getRiskTier(0), issues: [], error: err.message };
  }
}

// ─── Generate individual page report ────────────────────────────────────────

function generatePageReport(result, scanDate) {
  const { url, score, grade, risk, issues } = result;
  const sorted = [...issues].sort((a, b) => b.severity.weight - a.severity.weight || b.count - a.count);
  const gradeColor = { A: '#22c55e', B: '#84cc16', C: '#f59e0b', D: '#ef4444', F: '#dc2626' }[grade] || '#666';

  const issueRows = sorted.map((issue, i) => `
    <div style="border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px; margin-bottom: 12px; page-break-inside: avoid;">
      <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
        <span style="background: #f1f5f9; color: #475569; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 600;">${i + 1}</span>
        <span style="font-size: 11px; font-weight: 600; padding: 2px 6px; border-radius: 4px; background: ${issue.severity.color}15; color: ${issue.severity.color}; border: 1px solid ${issue.severity.color}40;">${issue.severity.label}</span>
        <span style="font-weight: 600; font-size: 14px;">${issue.message}</span>
      </div>
      <div style="font-size: 11px; color: #6b7280; margin-left: 32px;">WCAG ${issue.wcag}</div>
      <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 10px; margin-top: 8px; margin-left: 32px;">
        <div style="font-size: 11px; font-weight: 600; color: #059669; text-transform: uppercase; margin-bottom: 4px;">How to fix:</div>
        <pre style="font-family: monospace; font-size: 11px; color: #334155; white-space: pre-wrap;">${escapeHtml(issue.fix)}</pre>
      </div>
    </div>
  `).join('\n');

  return `
    <div style="page-break-before: always; padding-top: 32px;">
      <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #e5e7eb;">
        <div style="text-align: center; min-width: 80px;">
          <div style="font-size: 36px; font-weight: 800; color: ${gradeColor};">${score}</div>
          <div style="font-size: 14px; font-weight: 700; color: ${gradeColor};">Grade ${grade}</div>
        </div>
        <div>
          <h2 style="font-size: 18px; margin: 0; word-break: break-all;">${escapeHtml(url)}</h2>
          <div style="font-size: 13px; color: ${risk.color}; font-weight: 600;">${risk.tier} RISK — Estimated exposure: ${risk.exposure}</div>
        </div>
      </div>
      ${issues.length === 0 ? '<p style="color: #22c55e; font-size: 16px; font-weight: 600;">No accessibility issues detected.</p>' : issueRows}
    </div>
  `;
}

// ─── Generate combined summary report ───────────────────────────────────────

function generateSummaryReport(results, scanDate) {
  const avgScore = Math.round(results.reduce((sum, r) => sum + r.score, 0) / results.length);
  const avgGrade = getGrade(avgScore);
  const avgRisk = getRiskTier(avgScore);
  const gradeColor = { A: '#22c55e', B: '#84cc16', C: '#f59e0b', D: '#ef4444', F: '#dc2626' }[avgGrade] || '#666';

  const totalIssues = results.reduce((sum, r) => sum + r.issues.length, 0);
  const criticalCount = results.reduce((sum, r) => sum + r.issues.filter(i => i.severity.label === 'CRITICAL').length, 0);
  const seriousCount = results.reduce((sum, r) => sum + r.issues.filter(i => i.severity.label === 'SERIOUS').length, 0);

  const overviewRows = results.map(r => {
    const gc = { A: '#22c55e', B: '#84cc16', C: '#f59e0b', D: '#ef4444', F: '#dc2626' }[r.grade] || '#666';
    return `<tr>
      <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-size: 13px; word-break: break-all;">${escapeHtml(r.url)}</td>
      <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; text-align: center; font-weight: 700; color: ${gc};">${r.score}</td>
      <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; text-align: center; font-weight: 700; color: ${gc};">${r.grade}</td>
      <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; text-align: center; color: ${r.risk.color}; font-weight: 600;">${r.risk.tier}</td>
      <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; text-align: center;">${r.issues.length}</td>
    </tr>`;
  }).join('\n');

  const pageReports = results.map(r => generatePageReport(r, scanDate)).join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AccessScore Multi-Page Audit Report</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #1a1a1a; line-height: 1.6; background: #fff; }
    @media print { .page-break { page-break-before: always; } }
  </style>
</head>
<body>
  <!-- Cover -->
  <div style="background: linear-gradient(135deg, #0f172a, #1e293b); color: white; padding: 48px 40px; min-height: 200px;">
    <h1 style="font-size: 32px; margin-bottom: 4px;">Website Accessibility Audit Report</h1>
    <div style="color: #94a3b8; font-size: 14px;">ADA / WCAG 2.1 Compliance Assessment — ${results.length} Page${results.length > 1 ? 's' : ''}</div>
    <div style="color: #64748b; font-size: 13px; margin-top: 12px;">Generated ${scanDate} by AccessScore</div>
  </div>

  <!-- Executive Summary -->
  <div style="padding: 32px 40px; border-bottom: 1px solid #e5e7eb;">
    <h2 style="font-size: 22px; margin-bottom: 16px;">Executive Summary</h2>
    <div style="display: flex; gap: 24px; flex-wrap: wrap;">
      <div style="text-align: center; min-width: 120px; padding: 16px; background: #f9fafb; border-radius: 8px;">
        <div style="font-size: 48px; font-weight: 800; color: ${gradeColor};">${avgScore}</div>
        <div style="font-size: 12px; color: #6b7280;">Average Score</div>
        <div style="font-size: 16px; font-weight: 700; color: ${gradeColor}; margin-top: 4px;">Grade ${avgGrade}</div>
      </div>
      <div style="flex: 1; min-width: 200px;">
        <div style="font-size: 20px; font-weight: 700; color: ${avgRisk.color};">${avgRisk.tier} RISK</div>
        <div style="font-size: 13px; color: #6b7280; margin-top: 4px;">Estimated legal exposure: ${avgRisk.exposure}</div>
        <div style="margin-top: 12px; font-size: 14px; color: #374151;">
          <strong>${results.length}</strong> pages scanned &middot;
          <strong>${totalIssues}</strong> total issues &middot;
          <strong style="color: #ef4444;">${criticalCount}</strong> critical &middot;
          <strong style="color: #f59e0b;">${seriousCount}</strong> serious
        </div>
        <div style="margin-top: 8px; font-size: 13px; color: #6b7280;">
          Over 4,000 ADA website lawsuits were filed in 2024. Settlements average $25,000-$75,000 for small businesses.
          67% of these lawsuits target companies with under $25M in revenue.
        </div>
      </div>
    </div>
  </div>

  <!-- Pages Overview -->
  <div style="padding: 32px 40px; border-bottom: 1px solid #e5e7eb;">
    <h2 style="font-size: 22px; margin-bottom: 16px;">Pages Overview</h2>
    <table style="width: 100%; border-collapse: collapse;">
      <thead>
        <tr style="background: #f9fafb;">
          <th style="padding: 10px; text-align: left; font-size: 12px; color: #6b7280; text-transform: uppercase;">URL</th>
          <th style="padding: 10px; text-align: center; font-size: 12px; color: #6b7280; text-transform: uppercase;">Score</th>
          <th style="padding: 10px; text-align: center; font-size: 12px; color: #6b7280; text-transform: uppercase;">Grade</th>
          <th style="padding: 10px; text-align: center; font-size: 12px; color: #6b7280; text-transform: uppercase;">Risk</th>
          <th style="padding: 10px; text-align: center; font-size: 12px; color: #6b7280; text-transform: uppercase;">Issues</th>
        </tr>
      </thead>
      <tbody>${overviewRows}</tbody>
    </table>
  </div>

  <!-- Individual Page Reports -->
  <div style="padding: 0 40px 32px;">
    <h2 style="font-size: 22px; margin: 32px 0 16px; padding-bottom: 8px; border-bottom: 2px solid #e5e7eb;">Detailed Findings</h2>
    ${pageReports}
  </div>

  <!-- Remediation Timeline -->
  <div style="padding: 32px 40px; border-top: 1px solid #e5e7eb; page-break-before: always;">
    <h2 style="font-size: 22px; margin-bottom: 16px;">Recommended Remediation Timeline</h2>
    <div style="font-size: 14px; color: #374151;">
      <div style="padding: 12px; background: #fef2f2; border-left: 4px solid #ef4444; margin-bottom: 8px; border-radius: 0 4px 4px 0;">
        <strong>Week 1 (Critical):</strong> Fix all CRITICAL severity issues first. These represent the highest legal risk and are most commonly cited in ADA lawsuits.
      </div>
      <div style="padding: 12px; background: #fffbeb; border-left: 4px solid #f59e0b; margin-bottom: 8px; border-radius: 0 4px 4px 0;">
        <strong>Week 2 (Serious):</strong> Address SERIOUS severity issues. These are frequently cited in demand letters and significantly impact assistive technology users.
      </div>
      <div style="padding: 12px; background: #eff6ff; border-left: 4px solid #3b82f6; margin-bottom: 8px; border-radius: 0 4px 4px 0;">
        <strong>Week 3-4 (Moderate):</strong> Resolve MODERATE issues to reach full WCAG 2.1 AA compliance.
      </div>
      <div style="padding: 12px; background: #f9fafb; border-left: 4px solid #6b7280; border-radius: 0 4px 4px 0;">
        <strong>Ongoing:</strong> Fix MINOR issues and implement monitoring to prevent regression during future updates.
      </div>
    </div>
  </div>

  <!-- Disclaimer -->
  <div style="padding: 16px 40px; font-size: 11px; color: #9ca3af; border-top: 1px solid #f3f4f6;">
    <strong>Disclaimer:</strong> This report is based on automated static HTML analysis covering common WCAG 2.1 Level A and AA violations.
    It does not replace manual testing, screen reader testing, or legal counsel. Legal risk estimates are based on publicly available
    ADA lawsuit settlement data and are provided for educational purposes only. Consult a qualified attorney for legal guidance.
  </div>

  <div style="background: #f8fafc; border-top: 1px solid #e5e7eb; padding: 24px 40px; text-align: center; font-size: 12px; color: #6b7280;">
    Report generated by <a href="https://accessscore.autonomous-claude.com" style="color: #3b82f6;">AccessScore</a> — ADA/WCAG Accessibility Checker
  </div>
</body>
</html>`;
}

// ─── Main ───────────────────────────────────────────────────────────────────

async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0 || args.includes('--help')) {
    console.log(`
  AccessScore Order Fulfillment

  Usage:
    node fulfill-order.js <url>                          # Basic (1 page)
    node fulfill-order.js <url1> <url2> <url3>           # Standard (up to 5)
    node fulfill-order.js --file urls.txt                # Premium (up to 10)
    node fulfill-order.js --name "ClientName" <urls...>  # Custom order name

  Output: ./orders/<name>/report.html (open in browser, Ctrl+P to save as PDF)
    `);
    process.exit(0);
  }

  let urls = [];
  let orderName = '';

  // Parse args
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--file' && args[i + 1]) {
      const lines = readFileSync(args[i + 1], 'utf8').split('\n').map(l => l.trim()).filter(l => l && !l.startsWith('#'));
      urls.push(...lines);
      i++;
    } else if (args[i] === '--name' && args[i + 1]) {
      orderName = args[i + 1];
      i++;
    } else if (args[i].startsWith('http')) {
      urls.push(args[i]);
    }
  }

  if (urls.length === 0) {
    console.error('No URLs provided. Use --help for usage.');
    process.exit(1);
  }

  if (!orderName) {
    orderName = new URL(urls[0]).hostname.replace(/\./g, '-');
  }

  const orderDir = `./orders/${orderName}`;
  if (!existsSync('./orders')) mkdirSync('./orders');
  if (!existsSync(orderDir)) mkdirSync(orderDir, { recursive: true });

  const scanDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  console.log(`\n  AccessScore Order Fulfillment`);
  console.log(`  Order: ${orderName}`);
  console.log(`  Pages: ${urls.length}`);
  console.log(`  ${'─'.repeat(40)}\n`);

  const results = [];
  for (const url of urls) {
    process.stdout.write(`  Scanning ${url}... `);
    const result = await scanUrl(url);
    if (result.error) {
      console.log(`ERROR: ${result.error}`);
    } else {
      console.log(`${result.score}/100 (${result.grade}) — ${result.risk.tier} risk, ${result.issues.length} issues`);
    }
    results.push(result);
  }

  const successfulResults = results.filter(r => !r.error);

  if (successfulResults.length === 0) {
    console.error('\n  All scans failed. No report generated.');
    process.exit(1);
  }

  // Generate combined report
  const reportHtml = generateSummaryReport(successfulResults, scanDate);
  const reportPath = `${orderDir}/report.html`;
  writeFileSync(reportPath, reportHtml);

  const avgScore = Math.round(successfulResults.reduce((s, r) => s + r.score, 0) / successfulResults.length);

  console.log(`\n  ${'─'.repeat(40)}`);
  console.log(`  Report saved: ${reportPath}`);
  console.log(`  Average score: ${avgScore}/100 (${getGrade(avgScore)})`);
  console.log(`  Total issues: ${successfulResults.reduce((s, r) => s + r.issues.length, 0)}`);
  console.log(`\n  Open in browser → Ctrl+P → Save as PDF\n`);
}

main();
