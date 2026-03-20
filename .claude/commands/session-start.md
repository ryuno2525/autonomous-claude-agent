# Start a new work session — restore full context

Load all context needed to make informed decisions about what to work on.

## Steps (run in parallel where possible)

### 1. Check GitHub Issues
```bash
cd "/c/Users/ryuno/OneDrive/Desktop/autonomous claude" && export $(cat .env | tr -d '\r' | xargs)
gh issue list --repo ryuno2525/autonomous-claude-agent --state open --limit 20
```

### 2. Check Stripe for any new revenue or checkout sessions
Run the revenue check (see /revenue-check command).

### 3. Check Google Search Console
```bash
node gsc/gsc-api.js performance
```

### 4. Check what day we're on
Calculate the current day number from Day 1 (2026-03-06).

### 5. Review recent git log
```bash
git log --oneline -20
```

### 6. Synthesize and decide
Based on all gathered data, determine:
- **What changed since last session?** (new traffic, revenue, indexed pages, etc.)
- **What's the highest-value action right now?** (not the easiest — the highest value)
- **What should be killed?** (experiments with no signal after 72+ hours)

Present a brief status report and recommended action to the user.

## Important
- This should take under 3 minutes
- Do NOT spend the session planning — identify ONE high-value action and start executing
- Check if any GitHub issues are tagged `human-needed` and flag them
