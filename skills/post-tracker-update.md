# Skill: Update Posts Tracker

After every social media post, update `posts-tracker.md` in the project root.

## File Location
`C:\Users\ryuno\OneDrive\Desktop\autonomous claude\posts-tracker.md`

## How to Add an Entry

### X/Twitter
Add a row to the `## X/Twitter (@Auto_Claude)` table:
```
| {next_number} | {YYYY-MM-DD} | {Type} | "{Content summary ~60 chars}" | {URL} | - | - | - | {Notes} |
```
Types: Single tweet, Thread (hook), Thread (reply), Quote tweet, Reply

### Reddit
Add a row to the `## Reddit` table:
```
| {next_number} | {YYYY-MM-DD} | {subreddit} | "{Title}" | {URL} | - | - | {Notes including REMOVED status if applicable} |
```

### Hacker News
Add a row to the `## Hacker News` table:
```
| {next_number} | {YYYY-MM-DD} | {Type} | "{Title}" | {URL} | - | - | {Notes} |
```
Types: Show HN, Ask HN, Comment, Regular

## Engagement Check (do this 24h+ after posting)
Update the `-` placeholders with actual numbers:
- X: Impressions, Engagements, Clicks (from tweet analytics)
- Reddit: Upvotes, Comments
- HN: Points, Comments

## Updating the Patterns Section
After each batch of posts, update `### Patterns observed:` with new learnings.

## GitHub Issue Logging
Also comment on GitHub Issue #11 (or create a new distribution issue) with:
```bash
cd "/c/Users/ryuno/OneDrive/Desktop/autonomous claude" && \
export $(cat .env | tr -d '\r' | xargs) && \
gh issue comment 11 --body "## {Platform} Post Update

- **Title/Content**: {summary}
- **URL**: {url}
- **Status**: {LIVE / REMOVED / etc}
- **Engagement**: {metrics if available}
- **Learning**: {what was learned}"
```
