# privacy-compliance-checker

[![npm version](https://img.shields.io/npm/v/privacy-compliance-checker.svg)](https://www.npmjs.com/package/privacy-compliance-checker)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/node-%3E%3D18-brightgreen.svg)](https://nodejs.org)

Check any website's privacy policy compliance against **GDPR**, **CCPA**, and 10 other privacy requirements. Zero dependencies. Works in Node.js 18+ and CI pipelines.

Powered by [PolicyForge](https://policyforge-one.vercel.app) - the free privacy policy compliance scanner.

## Quick Start

```bash
# Scan any website instantly
npx privacy-compliance-checker stripe.com
```

Output:

```
stripe.com  A  92/100

  ✓  Data Collection Disclosure
  ✓  Purpose of Data Use
  ✓  Cookie Policy
  ✓  Third-Party Sharing
  ✓  User Rights
  ✓  GDPR Compliance
  ✓  CCPA Compliance
  ✓  Data Retention
  ✓  Security Measures
  ✗  Contact Information

  9/10 checks passed
```

## Installation

```bash
npm install privacy-compliance-checker
```

Or use directly with npx (no install needed):

```bash
npx privacy-compliance-checker example.com
```

## Programmatic Usage

```javascript
const { checkCompliance } = require('privacy-compliance-checker');

// ES Module import also works:
// import { checkCompliance } from 'privacy-compliance-checker';

const result = await checkCompliance('stripe.com');

console.log(result.score);   // 92
console.log(result.grade);   // "A"
console.log(result.checks);  // Array of individual check results
```

### Response Shape

```json
{
  "domain": "stripe.com",
  "url": "https://stripe.com",
  "policyFound": true,
  "policySource": "/privacy",
  "score": 92,
  "grade": "A",
  "passed": 9,
  "total": 10,
  "checks": [
    { "name": "Data Collection Disclosure", "passed": true },
    { "name": "Purpose of Data Use", "passed": true },
    { "name": "Cookie Policy", "passed": true },
    { "name": "Third-Party Sharing", "passed": true },
    { "name": "User Rights", "passed": true },
    { "name": "GDPR Compliance", "passed": true },
    { "name": "CCPA Compliance", "passed": true },
    { "name": "Data Retention", "passed": true },
    { "name": "Security Measures", "passed": true },
    { "name": "Contact Information", "passed": false }
  ],
  "scanUrl": "https://policyforge-one.vercel.app/check",
  "fixUrl": "https://policyforge-one.vercel.app"
}
```

When no privacy policy is found:

```json
{
  "domain": "example.com",
  "url": "https://example.com",
  "policyFound": false,
  "score": 0,
  "grade": "F",
  "message": "No privacy policy found. This is a significant compliance risk.",
  "scanUrl": "https://policyforge-one.vercel.app/check",
  "fixUrl": "https://policyforge-one.vercel.app"
}
```

## CLI Usage

```bash
# Basic scan
npx privacy-compliance-checker example.com

# Full URL also works
npx privacy-compliance-checker https://shopify.com

# Show help
npx privacy-compliance-checker --help
```

### Exit Codes

| Code | Meaning |
|------|---------|
| 0 | Score >= 50 (passing) |
| 1 | Score < 50 (failing) |
| 2 | Error (network, invalid URL, etc.) |

## Use in CI/CD

Add a privacy compliance check to your pipeline. The CLI exits with code 1 if the score is below 50, making it easy to use as a gate.

### GitHub Actions

```yaml
- name: Privacy Policy Compliance Check
  run: npx privacy-compliance-checker your-domain.com
```

### Pre-deploy Script

```json
{
  "scripts": {
    "check:privacy": "npx privacy-compliance-checker your-domain.com",
    "predeploy": "npm run check:privacy"
  }
}
```

## What It Checks

| Check | Weight | Description |
|-------|--------|-------------|
| Data Collection Disclosure | 15% | Explains what data is collected |
| Purpose of Data Use | 12% | States why data is collected |
| Third-Party Sharing | 12% | Discloses third-party data sharing |
| User Rights | 12% | Informs users of their data rights |
| GDPR Compliance | 10% | Meets EU GDPR requirements |
| Cookie Policy | 10% | Addresses cookie/tracking usage |
| CCPA Compliance | 8% | Meets California CCPA requirements |
| Data Retention | 8% | Specifies data retention periods |
| Security Measures | 5% | Describes security practices |
| Contact Information | 5% | Provides contact details |

## Grading Scale

| Grade | Score | Meaning |
|-------|-------|---------|
| A | 90-100 | Excellent compliance |
| B | 70-89 | Good, minor gaps |
| C | 50-69 | Fair, notable gaps |
| D | 30-49 | Poor, major gaps |
| F | 0-29 | Critical compliance risk |

## Requirements

- **Node.js 18+** (uses built-in `fetch`)
- No external dependencies

## Need a Privacy Policy?

If your site scores low, [PolicyForge](https://policyforge-one.vercel.app) can generate a compliant privacy policy in under 2 minutes. Covers GDPR, CCPA, CalOPPA, and more.

## License

MIT
