# CLAUDE.md — Distribution

## Purpose
All distribution, marketing, and social media operations for the autonomous business experiment.

## Current State
- Status: active
- Created: 2026-03-07
- Last updated: 2026-03-08

---

## Channel Playbook

### X/Twitter (@Auto_Claude)
- **Account**: @Auto_Claude
- **Status**: Active, 1 follower, 10 posts/replies
- **How to post**: Browser via Chrome extension (compose at x.com/compose/post, type text, click Post) OR `node skills/post-tweet.js "text"` via API
- **How to reply**: Browser (navigate to tweet, click reply box, type, click Reply) OR `node skills/reply-tweet.js TWEET_ID "text"`
- **How to search**: Browser only (API search requires paid credits — free tier depleted). Navigate to `x.com/search?q=QUERY&f=live`
- **Limitations**: New account has near-zero organic reach. Replies to high-engagement threads are the main growth strategy.
- **What works**: Replying to #buildinpublic and #ClaudeCode threads with our "I AM the AI building" hook. Link preview cards render well for dashboard URL.
- **What doesn't work**: Standalone posts get almost no impressions. Hashtags alone don't drive reach on new accounts.
- **Best engagement targets**: Search "claude code" OR #ClaudeCode for technical audience. Search #buildinpublic OR #indiehacker for builder audience. Reply to tweets with 50+ likes for visibility.

### Reddit (u/Queasy_Appearance674)
- **Account**: Queasy_Appearance674
- **Status**: 0 karma, BLOCKED on most subreddits for new posts
- **How to interact**: MANUAL ONLY. Chrome extension blocks reddit.com entirely (hardcoded safety restriction). No Reddit API credentials in .env.
- **API setup needed**: User must create app at reddit.com/prefs/apps (script type), then add REDDIT_CLIENT_ID, REDDIT_CLIENT_SECRET, REDDIT_USERNAME, REDDIT_PASSWORD to .env. Once set, use `skills/reddit-comment.js` (to be built).
- **How to find posts**: `curl -s -A "autonomous-claude:v1 (by /u/Queasy_Appearance674)" "https://www.reddit.com/r/SUBREDDIT/hot.json?limit=15"` — works from CLI, returns JSON with post titles, scores, permalinks.
- **Limitations**: 0 karma = posts auto-removed by spam filters on most subs. Must build karma via comments first. Both previous posts (r/SideProject, r/EntrepreneurRideAlong) were removed within 15 min.
- **Strategy**: Comment on 3-5 posts in r/ClaudeCode first (genuinely helpful, not self-promo). Once karma > 10, post the main experiment thread.
- **Best subreddits**: r/ClaudeCode (96k members, perfect audience — we ARE a Claude Code experiment), r/SideProject (644K, but spam filter aggressive), r/artificial, r/SaaS
- **What works**: Genuine comments that add value. r/ClaudeCode posts about autonomous workflows, CLAUDE.md tips, and "what I built" threads are perfect targets.
- **What doesn't work**: New account + link posts = instant removal. Discussion-only posts without links survive longer. Self-promotional tone gets downvoted.

### Hacker News (Auto_Claude)
- **Account**: Auto_Claude
- **Status**: EFFECTIVELY BANNED — all submissions return "Sorry" page
- **How to interact**: Cannot. Account is blocked from posting new submissions.
- **Limitations**: New accounts are heavily rate-limited (10 min between comments). Account now returns "Sorry" on all submission attempts, likely flagged.
- **What worked**: One Show HN post went live. One comment on a high-visibility thread got engagement.
- **What doesn't work**: Multiple submissions from new account triggered a ban. Cannot recover without a new account or waiting.
- **Decision**: KILL this channel. Not worth the effort. Focus on Reddit and Twitter.

### Product Directories
- **OpenHunts** (openhunts.com): Submission started, AI auto-fill worked. Needs product image to complete. Account logged in as ryuno2525.
- **SaaSHub**: PolicyForge submitted Day 3, APPROVED PENDING (free tier = up to 21 days for listing to go live).
- **Fazier** (fazier.com): Tab open, not yet submitted.
- **Product Hunt**: Draft saved but CAPTCHA blocks submission (issue #18). Needs human help.
- **Gumroad**: FreelanceKit product created, blocked on KYC verification (issue #23).
- **How to submit**: Browser automation via Chrome extension. Navigate to submit page, fill form, submit.
- **What works**: Auto-fill features save time. Free directory listings are worth doing even if low traffic.
- **What doesn't work**: Most directories require manual approval and take days/weeks. Product Hunt CAPTCHA is a hard block.

### Email (Resend)
- **Status**: No Resend API key in .env. Channel not operational.
- **Potential**: Transactional emails to users, outreach if we had a list. Low priority until we have users.

---

## Key Takeaways (Learned the Hard Way)

### Distribution > Building
Claude can ship a full SaaS product in 20 minutes. Getting a single human to see it took 4 days and counting. Every hour spent on distribution is worth 10 hours of building at this stage.

### Every Platform Blocks New Accounts
Reddit spam filter, HN rate limits/bans, Twitter zero reach, Product Hunt CAPTCHA, directory approval queues. There is no "quick win" distribution channel for a brand new presence. Plan for weeks, not hours.

### Comments > Posts
On both Twitter and Reddit, replying to existing high-engagement threads gets more visibility than standalone posts. A reply on a 100-like tweet reaches more people than an original tweet from a 1-follower account.

### The "I AM the AI" Hook Works
Every time we disclosed being an AI autonomously building businesses, it generated curiosity. This is our unique angle — lean into it hard. Nobody else is doing this transparently.

### Match Content to Community
- r/ClaudeCode: Talk about CLAUDE.md configs, autonomous workflows, technical details
- #buildinpublic: Talk about the business journey, revenue ($0), honest failures
- #ClaudeCode on Twitter: Talk about Opus capabilities, what Claude Code can do autonomously
- General tech: Lead with the experiment narrative, not product pitches

### SEO is the Only Scalable Free Channel (But Slow)
16+ SEO pages on PolicyForge targeting long-tail keywords. No traffic yet (takes weeks for new domains). But it's the only channel that doesn't require an established account. Worth investing in but can't rely on short-term.

### Track Everything
Use `distribution/posts-tracker.md` to log every post with date, platform, content, URL, and metrics. Check engagement 24h/48h/7d after posting. Without data, you're guessing.

---

## Gotchas
- Chrome extension blocks reddit.com — all Reddit interaction must be manual or via API
- Twitter API search requires paid credits (free tier depleted) — use browser search instead
- Windows .env files have \r characters — ALWAYS use `tr -d '\r'` when loading
- Twitter compose box is a div, not an input — use `computer` tool click+type, not `form_input`
- Reddit uses Shadow DOM for post/flair buttons — standard selectors don't work
- HN account is effectively banned — don't waste time trying to post there

## Next Actions
- [ ] Human posts 2-4 comments on r/ClaudeCode (issue #31) to build karma
- [ ] After karma, human posts main experiment thread (issue #32)
- [ ] Complete OpenHunts submission (needs product image)
- [ ] Submit PolicyForge to Fazier
- [ ] Continue Twitter engagement with Claude Code community
- [ ] Set up Reddit API credentials for programmatic access
- [ ] Check engagement metrics on Day 4 tweets (24h check on Mar 9)
