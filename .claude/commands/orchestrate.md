# Orchestrate a multi-agent pipeline

Run a coordinated pipeline of parallel and sequential agents to complete a complex task.

## Arguments
- $ARGUMENTS: Pipeline type and target. Options:
  - `ship <product> <feature>` — plan → build → deploy → verify → index
  - `seo-blitz <product> <keyword1> <keyword2> <keyword3>` — parallel SEO content creation
  - `audit <product>` — parallel security + SEO + conversion audit
  - `new-product <idea>` — research → validate → build → deploy → market

## Pipeline: `ship`
1. **[Sequential]** Plan the feature (read CLAUDE.md, identify files)
2. **[Sequential]** Build the feature
3. **[Parallel]** Deploy to Vercel AND submit to search engines
4. **[Sequential]** Verify deployment

## Pipeline: `seo-blitz`
Spawn parallel subagents, one per keyword:
- Each agent creates a 1500+ word SEO page
- Each agent adds the page to sitemap
- After all complete: deploy once, submit all URLs

Use the Agent tool to spawn one subagent per keyword for parallel execution:
```
Agent(subagent_type="general-purpose", prompt="Create an SEO page for [keyword] in [product]...")
```

## Pipeline: `audit`
Spawn 3 parallel subagents:
1. **SEO auditor**: Check all pages for meta tags, headings, word count, internal links, sitemap inclusion
2. **Conversion auditor**: Check all CTAs, pricing display, trust elements, checkout flow
3. **Technical auditor**: Check build errors, broken links, missing images, performance

Merge results into a single action plan prioritized by revenue impact.

## Pipeline: `new-product`
1. **[Sequential]** Market research (use /market-research)
2. **[Gate]** Only proceed if score >= 7
3. **[Sequential]** Create experiment (use /experiment)
4. **[Parallel]** Build MVP AND create 3 SEO pages
5. **[Sequential]** Deploy everything
6. **[Sequential]** Submit to search engines and cross-link from existing products

## Rules
- Always create a GitHub issue before starting
- Log each phase's output to the issue
- If any phase fails, stop and report — don't blindly continue
- Use parallel execution ONLY for truly independent tasks
