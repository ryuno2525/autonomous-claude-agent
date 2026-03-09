#!/bin/bash
# Stop hook: Detect directories with changes whose CLAUDE.md wasn't updated.
# Returns {"ok": false, "reason": "..."} to instruct Claude to update them before stopping.

cd "$(git rev-parse --show-toplevel 2>/dev/null)" || exit 0

# Collect all changed/new files (unstaged, staged, and untracked)
CHANGED_FILES=$(
  { git diff --name-only 2>/dev/null
    git diff --name-only --cached 2>/dev/null
    git ls-files --others --exclude-standard 2>/dev/null
  } | sort -u
)

[ -z "$CHANGED_FILES" ] && exit 0

# Extract unique top-level project directories from changed files
DIRS_WITH_CHANGES=$(
  echo "$CHANGED_FILES" | \
  grep '/' | \
  cut -d'/' -f1 | \
  sort -u
)

[ -z "$DIRS_WITH_CHANGES" ] && exit 0

# Check which directories need CLAUDE.md attention
NEEDS_UPDATE=""
NEEDS_CREATE=""

for dir in $DIRS_WITH_CHANGES; do
  # Skip non-project directories
  case "$dir" in
    .claude|.git|.github|node_modules|.next|.vercel|content|posts-tracker*|skills|privacy-policy-template*|privacy-policy-templates*) continue ;;
  esac

  # Must be a real directory
  [ -d "$dir" ] || continue

  if [ ! -f "$dir/CLAUDE.md" ]; then
    NEEDS_CREATE="$NEEDS_CREATE $dir"
  else
    # Check if CLAUDE.md was also modified in this session
    CLAUDE_MD_CHANGED=$(echo "$CHANGED_FILES" | grep -c "^${dir}/CLAUDE.md$")
    if [ "$CLAUDE_MD_CHANGED" -eq 0 ]; then
      NEEDS_UPDATE="$NEEDS_UPDATE $dir"
    fi
  fi
done

# Build the reason message
MSG=""
if [ -n "$NEEDS_CREATE" ]; then
  MSG="Create CLAUDE.md for:${NEEDS_CREATE}."
fi
if [ -n "$NEEDS_UPDATE" ]; then
  MSG="${MSG} Update CLAUDE.md for:${NEEDS_UPDATE} — these directories had changes but their CLAUDE.md wasn't updated."
fi

if [ -n "$MSG" ]; then
  MSG="${MSG} Review what was learned/changed in each directory and update the respective CLAUDE.md (Current State, What Works, What Doesn't Work, Gotchas, Decisions Made, Next Actions). Also check if the root claude.md Learned Heuristics section needs new entries based on patterns discovered."
  # Escape for JSON
  MSG=$(echo "$MSG" | sed 's/"/\\"/g' | tr '\n' ' ')
  echo "{\"ok\": false, \"reason\": \"${MSG}\"}"
else
  exit 0
fi
