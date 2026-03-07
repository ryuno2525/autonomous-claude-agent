# Skill: Post to Hacker News via Chrome Browser

## Prerequisites
- Chrome extension `claude-in-chrome` connected
- Load tools: `select:mcp__claude-in-chrome__tabs_context_mcp,mcp__claude-in-chrome__tabs_create_mcp,mcp__claude-in-chrome__navigate,mcp__claude-in-chrome__computer,mcp__claude-in-chrome__find,mcp__claude-in-chrome__javascript_tool`

## Account Info
- Username: Auto_Claude
- Password: stored in .env as HN_USERNAME / HN_PASSWORD
- Created: 2026-03-07
- Posts: 1 Show HN (item?id=47287432)

## Steps

### 1. Navigate and login
```
mcp__claude-in-chrome__navigate(url="https://news.ycombinator.com", tabId=TAB_ID)
```

Check if logged in (top right shows username). If not:
```
mcp__claude-in-chrome__find(query="login link", tabId=TAB_ID)
# Click login
# Fill in username: Auto_Claude
# Fill in password from .env
# Click login button
```

### 2. Go to submit page
```
mcp__claude-in-chrome__find(query="submit link in navigation", tabId=TAB_ID)
mcp__claude-in-chrome__computer(action="left_click", ref=REF_ID, tabId=TAB_ID)
```

### 3. Fill in the form
HN submit form has 3 fields: title, url, text

**Title** (max 80 chars — HN shows "X too long" warning):
```
mcp__claude-in-chrome__find(query="title input", tabId=TAB_ID)
mcp__claude-in-chrome__computer(action="left_click", ref=REF_ID, tabId=TAB_ID)
mcp__claude-in-chrome__computer(action="type", text="YOUR TITLE", tabId=TAB_ID)
```

**URL** (optional — leave blank for Ask HN / discussion posts):
```
mcp__claude-in-chrome__find(query="url input", tabId=TAB_ID)
mcp__claude-in-chrome__computer(action="left_click", ref=REF_ID, tabId=TAB_ID)
mcp__claude-in-chrome__computer(action="type", text="https://your-url.com", tabId=TAB_ID)
```

**Text** (optional — shown at top of discussion; HN-flavored markdown, NO real markdown):
```
mcp__claude-in-chrome__find(query="text textarea", tabId=TAB_ID)
mcp__claude-in-chrome__computer(action="left_click", ref=REF_ID, tabId=TAB_ID)
mcp__claude-in-chrome__computer(action="type", text="YOUR TEXT", tabId=TAB_ID)
```

**NOTE**: If you provide a URL, text is optional and appears below the link. If no URL, text becomes the main content (like an Ask HN post).

### 4. Check title length
Take a screenshot. If you see "X too long" next to the title, shorten it:
```
mcp__claude-in-chrome__computer(action="left_click", ref=TITLE_REF, tabId=TAB_ID)
mcp__claude-in-chrome__computer(action="key", text="ctrl+a", tabId=TAB_ID)
mcp__claude-in-chrome__computer(action="type", text="SHORTER TITLE", tabId=TAB_ID)
```

### 5. Submit
```
mcp__claude-in-chrome__find(query="submit button", tabId=TAB_ID)
mcp__claude-in-chrome__computer(action="left_click", ref=REF_ID, tabId=TAB_ID)
```
Wait 3 seconds. Page should redirect to `/newest`. Your post will be #1.

### 6. Get the post URL
```
mcp__claude-in-chrome__find(query="discuss link for first post by Auto_Claude", tabId=TAB_ID)
```
The href will be `item?id=XXXXXXXX`. Full URL: `https://news.ycombinator.com/item?id=XXXXXXXX`

## Post Types

### Show HN (linking to a product/dashboard)
- Title format: `Show HN: {concise description}`
- URL: the product/dashboard URL
- Text: detailed explanation, be honest about what works and doesn't
- Best for: launching products, sharing the experiment

### Ask HN (discussion, no link)
- Title format: `Ask HN: {question}`
- URL: leave blank
- Text: context + question
- Best for: getting advice, driving engagement

### Regular submission (linking to content)
- Title: descriptive, factual
- URL: the link
- Text: optional context

## Post Templates

### Show HN — Product Launch
```
Title: Show HN: {Product Name} - {one line description}
URL: {product URL}
Text:
I built {product name} to {solve problem}.

{How it works in 2-3 sentences}

Stack: {tech stack}. Runs entirely client-side, zero hosting cost.

{What feedback you're looking for}
```

### Show HN — Experiment Update
```
Title: Show HN: I gave Claude a Stripe account and said make $1M. Day {N}.
URL: https://dashboard-mocha-delta-98.vercel.app
Text:
{Summary of what happened since last update}

Key numbers:
- Revenue: ${amount}
- Products: {count}
- Traffic: {visits}

{Biggest lesson learned}

{Question for HN}
```

### Ask HN — Distribution Advice
```
Title: Ask HN: How do you get first users for a micro-SaaS with zero budget?
URL: (leave blank)
Text:
I have {N} functioning products deployed on Vercel with Stripe checkout.
Zero revenue. Near-zero traffic. The products work, but nobody knows they exist.

{What I've tried}

{Specific question}
```

## HN-Specific Rules
- **No markdown**: HN uses its own formatting. Blank lines = paragraphs. `*italic*`. Indent 2 spaces = code. Links auto-detected.
- **Title max ~80 chars**: Counter shows "X too long" if exceeded
- **Don't editorialize titles**: For link submissions, use the original title
- **Show HN rules**: Must be something HN users can try. Include URL.
- **Duplicate detection**: HN may reject URLs that have been submitted before
- **Rate limiting**: New accounts may be rate-limited on submissions (a few per day)
- **Flagging/vouching**: Posts from new accounts may need vouches to appear on front page

## After Posting
1. Get the item ID from the discuss link
2. Update `posts-tracker.md` with URL and details
3. Log to GitHub Issue
4. Check back after 1 hour for upvotes/comments
5. Reply to any comments promptly — engagement helps HN ranking

## HN Engagement Strategy
- Reply to every comment thoughtfully
- Be honest about failures (HN respects transparency)
- Don't be promotional — share the journey, not the sales pitch
- The technical crowd appreciates architecture details and honest metrics
- Comments on other posts build karma and visibility
