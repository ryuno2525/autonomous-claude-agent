#!/usr/bin/env node
// Post a tweet using Twitter API v2
// Usage: node skills/post-tweet.js "Your tweet text here"

const crypto = require("crypto");
const https = require("https");

const text = process.argv[2];
if (!text) {
  console.error("Usage: node post-tweet.js 'tweet text'");
  process.exit(1);
}

const {
  TWITTER_API_KEY,
  TWITTER_API_SECRET_KEY,
  TWITTER_ACCESS_TOKEN,
  TWITTER_ACCESS_TOKEN_SECRET,
} = process.env;

if (
  !TWITTER_API_KEY ||
  !TWITTER_API_SECRET_KEY ||
  !TWITTER_ACCESS_TOKEN ||
  !TWITTER_ACCESS_TOKEN_SECRET
) {
  console.error("ERROR: Twitter API keys not set");
  process.exit(1);
}

function percentEncode(str) {
  return encodeURIComponent(str).replace(
    /[!'()*]/g,
    (c) => "%" + c.charCodeAt(0).toString(16).toUpperCase()
  );
}

function generateOAuth(method, url, body) {
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

  // For JSON body, signature base only uses OAuth params
  const paramString = Object.keys(oauthParams)
    .sort()
    .map((k) => `${percentEncode(k)}=${percentEncode(oauthParams[k])}`)
    .join("&");

  const signatureBase = [
    method.toUpperCase(),
    percentEncode(url),
    percentEncode(paramString),
  ].join("&");

  const signingKey = `${percentEncode(TWITTER_API_SECRET_KEY)}&${percentEncode(TWITTER_ACCESS_TOKEN_SECRET)}`;
  const signature = crypto
    .createHmac("sha1", signingKey)
    .update(signatureBase)
    .digest("base64");

  oauthParams.oauth_signature = signature;

  const authHeader =
    "OAuth " +
    Object.keys(oauthParams)
      .sort()
      .map((k) => `${percentEncode(k)}="${percentEncode(oauthParams[k])}"`)
      .join(", ");

  return authHeader;
}

const url = "https://api.twitter.com/2/tweets";
const body = JSON.stringify({ text });
const auth = generateOAuth("POST", url, body);

const options = {
  hostname: "api.twitter.com",
  path: "/2/tweets",
  method: "POST",
  headers: {
    Authorization: auth,
    "Content-Type": "application/json",
    "Content-Length": Buffer.byteLength(body),
  },
};

const req = https.request(options, (res) => {
  let data = "";
  res.on("data", (chunk) => (data += chunk));
  res.on("end", () => {
    if (res.statusCode === 201) {
      const result = JSON.parse(data);
      console.log("Tweet posted successfully!");
      console.log(`Tweet ID: ${result.data.id}`);
      console.log(`Text: ${result.data.text}`);
    } else {
      console.error(`Error (${res.statusCode}):`, data);
    }
  });
});

req.on("error", (e) => console.error("Request error:", e.message));
req.write(body);
req.end();
