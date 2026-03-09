#!/usr/bin/env node
// Search tweets using Twitter API v2
// Usage: node skills/search-tweets.js "query" [max_results]

const crypto = require("crypto");
const https = require("https");

const query = process.argv[2];
const maxResults = process.argv[3] || "10";
if (!query) {
  console.error('Usage: node search-tweets.js "search query" [max_results]');
  process.exit(1);
}

const {
  TWITTER_API_KEY,
  TWITTER_API_SECRET_KEY,
  TWITTER_ACCESS_TOKEN,
  TWITTER_ACCESS_TOKEN_SECRET,
} = process.env;

if (!TWITTER_API_KEY || !TWITTER_API_SECRET_KEY || !TWITTER_ACCESS_TOKEN || !TWITTER_ACCESS_TOKEN_SECRET) {
  console.error("ERROR: Twitter API keys not set");
  process.exit(1);
}

function percentEncode(str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, (c) => "%" + c.charCodeAt(0).toString(16).toUpperCase());
}

function generateOAuth(method, baseUrl, queryParams) {
  const timestamp = Math.floor(Date.now() / 1000).toString();
  const nonce = crypto.randomBytes(16).toString("hex");

  const oauthParams = {
    oauth_consumer_key: TWITTER_API_KEY,
    oauth_nonce: nonce,
    oauth_signature_method: "HMAC-SHA1",
    oauth_timestamp: timestamp,
    oauth_token: TWITTER_ACCESS_TOKEN,
    oauth_version: "1.0",
  };

  const allParams = { ...oauthParams, ...queryParams };
  const paramString = Object.keys(allParams)
    .sort()
    .map((k) => `${percentEncode(k)}=${percentEncode(allParams[k])}`)
    .join("&");

  const signatureBase = [method.toUpperCase(), percentEncode(baseUrl), percentEncode(paramString)].join("&");
  const signingKey = `${percentEncode(TWITTER_API_SECRET_KEY)}&${percentEncode(TWITTER_ACCESS_TOKEN_SECRET)}`;
  const signature = crypto.createHmac("sha1", signingKey).update(signatureBase).digest("base64");

  oauthParams.oauth_signature = signature;
  return "OAuth " + Object.keys(oauthParams).sort().map((k) => `${percentEncode(k)}="${percentEncode(oauthParams[k])}"`).join(", ");
}

const baseUrl = "https://api.twitter.com/2/tweets/search/recent";
const queryParams = {
  query: query,
  max_results: maxResults,
  "tweet.fields": "created_at,public_metrics,author_id",
  expansions: "author_id",
  "user.fields": "username,name",
};

const auth = generateOAuth("GET", baseUrl, queryParams);
const qs = Object.entries(queryParams).map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`).join("&");

const options = {
  hostname: "api.twitter.com",
  path: `/2/tweets/search/recent?${qs}`,
  method: "GET",
  headers: { Authorization: auth },
};

const req = https.request(options, (res) => {
  let data = "";
  res.on("data", (chunk) => (data += chunk));
  res.on("end", () => {
    if (res.statusCode === 200) {
      const result = JSON.parse(data);
      const users = {};
      if (result.includes?.users) {
        result.includes.users.forEach((u) => (users[u.id] = u));
      }
      if (result.data) {
        result.data.forEach((t) => {
          const user = users[t.author_id] || {};
          const m = t.public_metrics || {};
          console.log(`---`);
          console.log(`ID: ${t.id}`);
          console.log(`@${user.username || "?"} (${user.name || "?"})`);
          console.log(`Text: ${t.text}`);
          console.log(`Likes: ${m.like_count} | Replies: ${m.reply_count} | RTs: ${m.retweet_count} | Views: ${m.impression_count || "?"}`);
          console.log(`Date: ${t.created_at}`);
        });
        console.log(`\n=== ${result.data.length} results ===`);
      } else {
        console.log("No results found.");
      }
    } else {
      console.error(`Error (${res.statusCode}):`, data);
    }
  });
});

req.on("error", (e) => console.error("Request error:", e.message));
req.end();
