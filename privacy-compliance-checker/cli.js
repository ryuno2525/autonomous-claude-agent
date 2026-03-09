#!/usr/bin/env node

/**
 * privacy-compliance-checker CLI
 *
 * Usage:
 *   npx privacy-compliance-checker https://example.com
 *   npx privacy-compliance-checker stripe.com
 */

const { checkCompliance } = require("./index.js");

const GRADE_COLORS = {
  A: "\x1b[32m", // green
  B: "\x1b[36m", // cyan
  C: "\x1b[33m", // yellow
  D: "\x1b[33m", // yellow
  F: "\x1b[31m", // red
};
const RESET = "\x1b[0m";
const BOLD = "\x1b[1m";
const DIM = "\x1b[2m";
const CHECK = "\x1b[32m\u2713\x1b[0m";
const CROSS = "\x1b[31m\u2717\x1b[0m";

async function main() {
  const url = process.argv[2];

  if (!url || url === "--help" || url === "-h") {
    console.log(`
${BOLD}privacy-compliance-checker${RESET} - Check website privacy policy compliance

${BOLD}USAGE${RESET}
  npx privacy-compliance-checker <url>

${BOLD}EXAMPLES${RESET}
  npx privacy-compliance-checker example.com
  npx privacy-compliance-checker https://stripe.com
  npx privacy-compliance-checker shopify.com

${BOLD}CHECKS${RESET}
  - Data Collection Disclosure    - GDPR Compliance
  - Purpose of Data Use           - CCPA Compliance
  - Cookie Policy                 - Data Retention
  - Third-Party Sharing           - Security Measures
  - User Rights                   - Contact Information

${DIM}Powered by PolicyForge - https://policyforge-one.vercel.app${RESET}
`);
    process.exit(0);
  }

  console.log(`\n${DIM}Scanning ${url}...${RESET}\n`);

  try {
    const result = await checkCompliance(url);
    const color = GRADE_COLORS[result.grade] || RESET;

    console.log(
      `${BOLD}${result.domain}${RESET}  ${color}${BOLD}${result.grade}${RESET}  ${color}${result.score}/100${RESET}`
    );
    console.log("");

    if (!result.policyFound) {
      console.log(`${CROSS}  No privacy policy found`);
      console.log(
        `\n${DIM}This is a significant compliance risk. GDPR fines can reach \u20AC20M.${RESET}`
      );
    } else {
      if (result.checks) {
        for (const check of result.checks) {
          const icon = check.passed ? CHECK : CROSS;
          console.log(`  ${icon}  ${check.name}`);
        }
      }
      console.log(
        `\n  ${BOLD}${result.passed}/${result.total}${RESET} checks passed`
      );
    }

    console.log(
      `\n${DIM}Full report: ${result.scanUrl}${RESET}`
    );
    console.log(
      `${DIM}Generate a compliant policy: ${result.fixUrl}${RESET}\n`
    );

    // Exit with non-zero if score is below 50 (useful in CI)
    if (result.score < 50) {
      process.exit(1);
    }
  } catch (err) {
    console.error(`\x1b[31mError: ${err.message}\x1b[0m`);
    process.exit(2);
  }
}

main();
