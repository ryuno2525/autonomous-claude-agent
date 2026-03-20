# AGENTS.md — Autonomous Business Experiment

## Agent Definitions

Specialized subagents for parallelizing work toward the $1M revenue goal. Each agent has a bounded scope, clear success/failure criteria, and restricted tool access where appropriate.

---

### seo-writer

**Purpose**: Create high-quality, long-form SEO content that ranks and converts.

**When to spawn**: When we need SEO pages created for a product. Spawn multiple in parallel for an "SEO blitz" (one per keyword).

**Model**: sonnet (cost-effective for content generation)

**Prompt template**:
```
You are an SEO content writer for autonomous-claude.com. Create a page targeting the keyword "{keyword}" for the product {product}.

Requirements:
- Minimum 1,500 words of genuine, helpful content
- H1 with primary keyword → intro hook → H2 sections → FAQ with schema → CTA
- Include comparison tables where relevant
- Internal links to other pages on {product}.autonomous-claude.com
- NO keyword stuffing, NO generic filler ("In today's digital landscape...")
- Clear CTA to the product, naturally placed
- Follow the exact patterns of existing pages in {product}/app/(seo)/

Create the page file, add it to sitemap.ts, and add cross-links from 2 existing pages.
Update {product}/CLAUDE.md when done.
```

**Success signal**: Page created, added to sitemap, cross-linked
**Failure signal**: Content under 1000 words, missing from sitemap, no cross-links

---

### deployer

**Purpose**: Handle the full Vercel deployment pipeline for a product.

**When to spawn**: After building/modifying a product, spawn this to deploy while you continue other work.

**Model**: haiku (deployment is mechanical, doesn't need reasoning)

**Prompt template**:
```
Deploy {product} to Vercel production.

Steps:
1. cd "/c/Users/ryuno/OneDrive/Desktop/autonomous claude"
2. export $(cat .env | tr -d '\r' | xargs)
3. cd {product} && npx vercel --token "$VERCEL_TOKEN" --yes --prod --scope ryuno2525s-projects
4. Verify deployment at https://{product}.autonomous-claude.com (check for 200 status)
5. Submit sitemap: node gsc/gsc-api.js submit-sitemap https://{product}.autonomous-claude.com/sitemap.xml
6. IndexNow ping: curl "https://api.indexnow.org/indexnow?url=https://{product}.autonomous-claude.com&key=20a3757a4c82443fb9ad3658f84a47e4"
7. Report: deployed URL, status code, sitemap submission result

CRITICAL: Always use tr -d '\r' when loading .env.
```

**Success signal**: 200 status on live URL
**Failure signal**: Non-200 status or build failure

---

### market-researcher

**Purpose**: Deep research on market opportunities before committing to build.

**When to spawn**: Before starting a new product/experiment. Run in background while working on other tasks.

**Model**: sonnet (needs reasoning for analysis)

**Prompt template**:
```
Research the market opportunity for: {idea}

Analyze:
1. DEMAND: Search for people asking for this solution (Reddit, HN, Twitter, forums). Find "I wish there was..." posts.
2. COMPETITION: Top 3 competitors, their pricing, their weaknesses (1-star reviews)
3. DISTRIBUTION: Can this be distributed via GitHub (npm, Action, template)? Is it embeddable/viral? SEO keyword difficulty?
4. REVENUE: What price point works? How many customers for $1K/month?
5. BUILD: Can we MVP in 2 hours? What's the core feature?

Given our constraints:
- No social media (Twitter suspended, Reddit 0 karma)
- SEO takes 2-4 weeks to index
- GitHub is our only working distribution channel
- We have 12 products but $0 revenue

Output: GO/NO-GO with score 1-10, reasoning, and if GO: exact MVP scope + distribution plan.
Weight distribution feasibility HIGHEST.
```

**Success signal**: Clear GO/NO-GO recommendation with evidence
**Failure signal**: Vague analysis without data

---

### landing-page-builder

**Purpose**: Build high-converting landing pages for products.

**When to spawn**: When creating a new product or redesigning an existing one.

**Model**: sonnet

**Prompt template**:
```
Build a landing page for {product} at {product}/app/page.tsx.

The page MUST include:
1. Hero section: Clear headline (what it does), subheadline (why it matters), primary CTA
2. Problem section: 3 pain points the target audience faces
3. Solution section: How our product solves each pain point
4. Social proof or trust elements (secure payment, money-back guarantee)
5. Pricing section: Clear price, what's included, comparison to alternatives
6. FAQ section: 5 common questions
7. Final CTA section

Design principles:
- Mobile-first responsive layout
- Use Tailwind CSS (already configured)
- High contrast, readable typography
- Single-column layout (proven higher conversion)
- Stripe checkout integration via /api/checkout route

Price ID: {stripe_price_id}
Product name: {product_name}
Target audience: {audience}

Follow patterns from existing products in the repo.
```

**Success signal**: Complete landing page with all sections, working Stripe CTA
**Failure signal**: Missing CTA, broken layout, no Stripe integration

---

### conversion-optimizer

**Purpose**: Audit and improve conversion rates on existing products.

**When to spawn**: When a product has traffic but no purchases, or expired checkout sessions.

**Model**: opus (needs deep analysis)

**Prompt template**:
```
Audit the conversion funnel for {product} at {product}.autonomous-claude.com.

Check:
1. Landing page: Is the value proposition clear in 5 seconds? Is the CTA visible above the fold?
2. Pricing: Is the price justified? Is there a comparison to alternatives?
3. Trust: Are there trust elements (guarantees, security badges, testimonials)?
4. Friction: How many clicks from landing to checkout? Any unnecessary steps?
5. Checkout: Does the Stripe checkout flow work? Is the success/cancel URL correct?
6. Mobile: Does the page work well on mobile?

We have 5 expired Stripe checkout sessions (people clicked buy but didn't complete).
This means we're getting clicks but losing people at checkout.

Analyze the checkout flow specifically:
- What does the user see when they click "Buy"?
- Is the Stripe checkout page clear about what they're getting?
- Is the price shown consistently?

Output: Ranked list of changes by expected conversion impact, with specific code changes.
```

**Success signal**: Actionable ranked list with specific changes
**Failure signal**: Generic advice without specifics

---

### cross-linker

**Purpose**: Build internal link network across all products for SEO.

**When to spawn**: After creating new pages or products. Run periodically.

**Model**: haiku (mechanical task)

**Prompt template**:
```
Audit and improve internal linking across all products on autonomous-claude.com.

Products to cross-link:
- policyforge.autonomous-claude.com (59 pages)
- accessscore.autonomous-claude.com (14 pages)
- dashboard at autonomous-claude.com (blog posts)

For each product:
1. Read all pages and find outgoing links
2. Identify pages with 0 or few internal links
3. Add relevant cross-links where they fit naturally (not forced)
4. Ensure every product links to at least 2 other products
5. Add a footer section with "More tools" linking to sibling products

Do NOT add irrelevant links. Only link where the content is genuinely related.
Update each product's CLAUDE.md with the linking changes.
```

**Success signal**: Increased internal links per page, every product cross-linked
**Failure signal**: Forced/irrelevant links

---

## Orchestration Patterns

### Ship Pipeline (Sequential)
```
planner → builder → deployer → verifier → indexer
```

### SEO Blitz (Parallel)
```
seo-writer(kw1) ─┐
seo-writer(kw2) ─┼→ deployer → indexer
seo-writer(kw3) ─┘
```

### New Product (Mixed)
```
market-researcher → [GATE: score >= 7] → landing-page-builder ─┐
                                          seo-writer(kw1) ──────┼→ deployer → cross-linker
                                          seo-writer(kw2) ──────┘
```

### Audit (Parallel)
```
conversion-optimizer ─┐
cross-linker ─────────┼→ merge action plan → prioritize by revenue impact
seo-auditor ──────────┘
```

## Rules
1. Always create a GitHub issue before spawning agents
2. Use the cheapest model that can do the job (haiku for mechanical, sonnet for creative, opus for analysis)
3. Run independent agents in parallel — never sequentially when they don't depend on each other
4. Kill agents that stall — set reasonable timeouts
5. Log all agent outputs back to the parent GitHub issue
