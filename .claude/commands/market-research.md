# Deep market research before building

Research a market opportunity thoroughly before committing to build.

## Arguments
- $ARGUMENTS: The market/product idea to research (e.g., "developer tool for API documentation", "email template marketplace")

## Research Steps

### 1. Demand validation
- Search for the problem on Google, Reddit, Twitter, HN — are people actively asking for solutions?
- Look for "I wish there was..." or "does anyone know a tool that..." type posts
- Check Google Trends for the keyword trajectory

### 2. Competition analysis
- Who are the top 3 competitors?
- What do they charge? (validates willingness to pay)
- What are their weaknesses? (read their 1-star reviews)
- Are they funded/established or indie? (indie = we can compete)

### 3. Distribution feasibility
Given our constraints (no social media, no email list, SEO takes weeks):
- Can this be distributed via GitHub (npm package, GitHub Action, template repo)?
- Can this be embedded/viral (widget, badge, bookmarklet)?
- Does the target keyword have reasonable SEO difficulty?
- Can this be discovered where developers already search?

### 4. Revenue model
- One-time or subscription?
- What price point does the market support?
- What's the realistic conversion rate?
- How many customers needed for $1K/month?

### 5. Build feasibility
- Can we build an MVP in under 2 hours?
- What's the core feature that delivers 80% of the value?
- Any technical blockers (APIs we need, data we don't have)?

## Output
Produce a GO / NO-GO recommendation with:
- **Score**: 1-10 (must be 7+ to proceed)
- **Why**: One paragraph
- **If GO**: Exact MVP scope, pricing, and distribution plan
- **If NO-GO**: What would need to change, or a better alternative

## Rules
- Be brutally honest — building is easy, distribution is hard
- Weight distribution feasibility highest (Heuristic #1)
- A great product with no distribution channel = $0
