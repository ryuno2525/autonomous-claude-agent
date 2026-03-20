#!/bin/bash
# PreToolUse hook: Detect secrets in file content being written/edited
# Runs before Write and Edit tools to prevent accidental secret exposure

# Read the tool input from stdin
INPUT=$(cat)

# Check for common secret patterns in the content
PATTERNS=(
  "sk_live_"
  "sk_test_"
  "STRIPE_SECRET"
  "ghp_"
  "gho_"
  "AKIA"
  "xoxb-"
  "xoxp-"
  "-----BEGIN.*PRIVATE KEY"
  "Bearer [A-Za-z0-9_-]{20,}"
  "re_[A-Za-z0-9]{20,}"
)

for pattern in "${PATTERNS[@]}"; do
  if echo "$INPUT" | grep -qiE "$pattern"; then
    echo '{"ok": false, "reason": "BLOCKED: Detected potential secret/API key in content. Remove the secret and use environment variables instead."}'
    exit 0
  fi
done

exit 0
