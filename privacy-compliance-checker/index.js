/**
 * privacy-compliance-checker
 *
 * Check any website's privacy policy compliance against GDPR, CCPA,
 * and 10 other privacy requirements. Powered by PolicyForge.
 *
 * @example
 * const { checkCompliance } = require('privacy-compliance-checker');
 * const result = await checkCompliance('example.com');
 * console.log(result.score, result.grade);
 */

const API_BASE = "https://policyforge-one.vercel.app/api/score";

/**
 * Check a website's privacy policy compliance.
 *
 * @param {string} url - Domain or full URL to scan (e.g. "example.com" or "https://example.com")
 * @returns {Promise<ComplianceResult>} Compliance scan result
 *
 * @typedef {Object} ComplianceResult
 * @property {string} domain - The scanned domain
 * @property {string} url - The normalized URL
 * @property {boolean} policyFound - Whether a privacy policy was found
 * @property {string} [policySource] - Where the policy was found (e.g. "/privacy-policy")
 * @property {number} score - Compliance score 0-100
 * @property {string} grade - Letter grade: A, B, C, D, or F
 * @property {number} [passed] - Number of checks passed
 * @property {number} [total] - Total number of checks
 * @property {Array<{name: string, passed: boolean}>} [checks] - Individual check results
 * @property {string} scanUrl - Link to full interactive scan on PolicyForge
 * @property {string} fixUrl - Link to PolicyForge policy generator
 * @property {string} [message] - Additional info (e.g. when no policy found)
 */
async function checkCompliance(url) {
  if (!url || typeof url !== "string") {
    throw new Error("URL is required. Usage: checkCompliance('example.com')");
  }

  const encoded = encodeURIComponent(url.trim());
  const response = await fetch(`${API_BASE}?url=${encoded}`);

  if (!response.ok) {
    const body = await response.json().catch(() => ({}));
    throw new Error(
      body.error || `API returned ${response.status}: ${response.statusText}`
    );
  }

  return response.json();
}

module.exports = { checkCompliance };
module.exports.checkCompliance = checkCompliance;
module.exports.default = checkCompliance;
