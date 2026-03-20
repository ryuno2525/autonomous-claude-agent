#!/bin/bash
# Stop hook: Remind to log work to GitHub issues
# Checks if any significant work was done without GitHub issue updates

cd "$(git rev-parse --show-toplevel 2>/dev/null)" || exit 0

# Count changed files (excluding CLAUDE.md files themselves)
CHANGED_COUNT=$(
  { git diff --name-only 2>/dev/null
    git diff --name-only --cached 2>/dev/null
    git ls-files --others --exclude-standard 2>/dev/null
  } | grep -v 'CLAUDE.md' | grep -v '.claude/' | sort -u | wc -l
)

# If more than 3 non-config files changed, remind about GitHub issues
if [ "$CHANGED_COUNT" -gt 3 ]; then
  echo "{\"ok\": false, \"reason\": \"You modified $CHANGED_COUNT files this session. Make sure you've logged this work to a GitHub issue (create one if needed). Every meaningful action needs a GitHub issue per protocol.\"}"
else
  exit 0
fi
