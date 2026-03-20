#!/usr/bin/env node
/**
 * Google Search Console API helper
 * Usage:
 *   node gsc-api.js sitemaps          - List submitted sitemaps
 *   node gsc-api.js submit-sitemap URL - Submit a sitemap
 *   node gsc-api.js index URL          - Request indexing for a URL
 *   node gsc-api.js inspect URL        - Inspect URL indexing status
 *   node gsc-api.js performance        - Get search performance data (last 7 days)
 */

const fs = require("fs");
const crypto = require("crypto");
const https = require("https");
const path = require("path");

const CREDS_PATH = path.join(__dirname, "autonomous-claude-d1a4c3765a20.json");
const SITE = "sc-domain:autonomous-claude.com";
const ENCODED_SITE = encodeURIComponent(SITE);

async function getToken(scopes) {
  const creds = JSON.parse(fs.readFileSync(CREDS_PATH, "utf8"));
  const header = Buffer.from(
    JSON.stringify({ alg: "RS256", typ: "JWT" })
  ).toString("base64url");
  const now = Math.floor(Date.now() / 1000);
  const payload = Buffer.from(
    JSON.stringify({
      iss: creds.client_email,
      scope: scopes,
      aud: "https://oauth2.googleapis.com/token",
      exp: now + 3600,
      iat: now,
    })
  ).toString("base64url");
  const sign = crypto.createSign("RSA-SHA256");
  sign.update(header + "." + payload);
  const signature = sign.sign(creds.private_key, "base64url");
  const jwt = header + "." + payload + "." + signature;

  return new Promise((resolve, reject) => {
    const postData =
      "grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=" + jwt;
    const req = https.request(
      "https://oauth2.googleapis.com/token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Content-Length": postData.length,
        },
      },
      (res) => {
        let d = "";
        res.on("data", (c) => (d += c));
        res.on("end", () => {
          const j = JSON.parse(d);
          if (j.access_token) resolve(j.access_token);
          else reject(new Error(JSON.stringify(j)));
        });
      }
    );
    req.write(postData);
    req.end();
  });
}

function apiCall(url, method, token, body) {
  return new Promise((resolve) => {
    const bodyStr = body ? JSON.stringify(body) : null;
    const headers = {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    };
    if (bodyStr) headers["Content-Length"] = Buffer.byteLength(bodyStr);
    const req = https.request(url, { method, headers }, (res) => {
      let d = "";
      res.on("data", (c) => (d += c));
      res.on("end", () => resolve({ status: res.statusCode, body: d }));
    });
    if (bodyStr) req.write(bodyStr);
    req.end();
  });
}

async function listSitemaps() {
  const token = await getToken(
    "https://www.googleapis.com/auth/webmasters.readonly"
  );
  const res = await apiCall(
    `https://www.googleapis.com/webmasters/v3/sites/${ENCODED_SITE}/sitemaps`,
    "GET",
    token
  );
  console.log(JSON.parse(res.body));
}

async function submitSitemap(url) {
  const token = await getToken(
    "https://www.googleapis.com/auth/webmasters"
  );
  const res = await apiCall(
    `https://www.googleapis.com/webmasters/v3/sites/${ENCODED_SITE}/sitemaps/${encodeURIComponent(url)}`,
    "PUT",
    token
  );
  console.log(res.status === 204 ? "Sitemap submitted OK" : res.body);
}

async function requestIndex(url) {
  const token = await getToken("https://www.googleapis.com/auth/indexing");
  const res = await apiCall(
    "https://indexing.googleapis.com/v3/urlNotifications:publish",
    "POST",
    token,
    { url, type: "URL_UPDATED" }
  );
  console.log(res.status === 200 ? "Index requested OK" : res.body);
}

async function inspectUrl(url) {
  const token = await getToken(
    "https://www.googleapis.com/auth/webmasters.readonly"
  );
  const res = await apiCall(
    "https://searchconsole.googleapis.com/v1/urlInspection/index:inspect",
    "POST",
    token,
    { inspectionUrl: url, siteUrl: SITE }
  );
  const data = JSON.parse(res.body);
  if (data.inspectionResult) {
    const r = data.inspectionResult.indexStatusResult;
    console.log(`URL: ${url}`);
    console.log(`Coverage: ${r.coverageState}`);
    console.log(`Indexing: ${r.indexingState}`);
    console.log(`Last crawl: ${r.lastCrawlTime || "never"}`);
    console.log(`Page fetch: ${r.pageFetchState}`);
    console.log(`Robots: ${r.robotsTxtState}`);
  } else {
    console.log(JSON.stringify(data, null, 2));
  }
}

async function performance() {
  const token = await getToken(
    "https://www.googleapis.com/auth/webmasters.readonly"
  );
  const end = new Date().toISOString().split("T")[0];
  const start = new Date(Date.now() - 7 * 86400000).toISOString().split("T")[0];
  const res = await apiCall(
    `https://searchconsole.googleapis.com/webmasters/v3/sites/${ENCODED_SITE}/searchAnalytics/query`,
    "POST",
    token,
    {
      startDate: start,
      endDate: end,
      dimensions: ["query"],
      rowLimit: 25,
    }
  );
  const data = JSON.parse(res.body);
  if (data.rows) {
    console.log(`Search performance (${start} to ${end}):`);
    console.log("Clicks | Impressions | CTR | Position | Query");
    data.rows.forEach((r) => {
      console.log(
        `${r.clicks} | ${r.impressions} | ${(r.ctr * 100).toFixed(1)}% | ${r.position.toFixed(1)} | ${r.keys[0]}`
      );
    });
  } else {
    console.log("No data yet:", JSON.stringify(data));
  }
}

const [, , cmd, ...args] = process.argv;
switch (cmd) {
  case "sitemaps":
    listSitemaps();
    break;
  case "submit-sitemap":
    submitSitemap(args[0]);
    break;
  case "index":
    requestIndex(args[0]);
    break;
  case "inspect":
    inspectUrl(args[0]);
    break;
  case "performance":
    performance();
    break;
  default:
    console.log("Usage: node gsc-api.js [sitemaps|submit-sitemap|index|inspect|performance] [url]");
}
