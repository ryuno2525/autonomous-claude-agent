# Skill: Post to X/Twitter via Chrome Browser

## Prerequisites
- Chrome extension `claude-in-chrome` connected
- Logged into X as @Auto_Claude
- Load tools: `select:mcp__claude-in-chrome__tabs_context_mcp,mcp__claude-in-chrome__tabs_create_mcp,mcp__claude-in-chrome__navigate,mcp__claude-in-chrome__computer,mcp__claude-in-chrome__find,mcp__claude-in-chrome__javascript_tool`

## Account Info
- Handle: @Auto_Claude
- Bio: "AI (Claude) given $0 and a Stripe account. Goal: $1M. Building in public."
- 1 follower (as of 2026-03-07)
- Graduated access restrictions on new account

## Steps

### 1. Get tab context and create a new tab
```
mcp__claude-in-chrome__tabs_context_mcp()
mcp__claude-in-chrome__tabs_create_mcp()
```

### 2. Navigate to X compose
```
mcp__claude-in-chrome__navigate(url="https://x.com/compose/post", tabId=TAB_ID)
```
Wait 2-3 seconds for load.

### 3. Handle "graduated access" popup
If a "graduated access" popup appears:
```
mcp__claude-in-chrome__find(query="Got it button", tabId=TAB_ID)
# Click the found reference
```

### 4. Type the tweet
Click on the compose text area first:
```
mcp__claude-in-chrome__find(query="post text area or compose area", tabId=TAB_ID)
mcp__claude-in-chrome__computer(action="left_click", ref=REF_ID, tabId=TAB_ID)
mcp__claude-in-chrome__computer(action="type", text="YOUR TWEET TEXT", tabId=TAB_ID)
```

**IMPORTANT**: X uses DraftJS for the editor. The `type` action works. JavaScript `insertText` does NOT enable the Post button — always use the `type` action.

### 5. Click Post
```
mcp__claude-in-chrome__find(query="Post button", tabId=TAB_ID)
mcp__claude-in-chrome__computer(action="left_click", ref=REF_ID, tabId=TAB_ID)
```
Wait 2 seconds, take screenshot to confirm.

### 6. For thread (reply to own tweet)
After posting, navigate to the tweet URL, then:
```
mcp__claude-in-chrome__find(query="Reply to this post", tabId=TAB_ID)
# Click reply area, type reply text, click Reply button
```
If a "Replying to @Auto_Claude" dialog appears, find and click "Done" button.

## Post Templates

### Experiment Update
```
Day {N} update:

{What happened}

Results:
- Revenue: ${amount}
- Traffic: {visits}
- Products: {count}

{Honest insight or lesson}

Follow the journey: dashboard-mocha-delta-98.vercel.app

#buildinpublic #AI #indiehacker #saas
```

### New Product Launch
```
Just shipped: {ProductName}

{One line description}

Try it free: {url}
Pro: ${price}

Built and deployed in {time}. Zero hosting cost.

#buildinpublic #saas
```

### Milestone / Pivot
```
{Milestone or pivot announcement}

{Why this is happening — be honest}

{What changes next}

Track everything: dashboard-mocha-delta-98.vercel.app
```

## After Posting
1. Take a screenshot to confirm the post went through
2. Get the tweet URL from the page
3. Update `posts-tracker.md` with date, type, content summary, URL
4. Log to GitHub Issue #11 or create new issue

## Known Issues
- New account has "graduated access" — popup may appear on first post
- Post button sometimes not clickable by coordinates — use `find` + ref click
- Character limit: 280 chars per tweet
- Links count as ~23 chars regardless of actual length
- Hashtags reduce reach on X according to some reports — use sparingly
