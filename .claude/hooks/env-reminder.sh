#!/bin/bash
# PreToolUse hook for Bash: Remind about tr -d '\r' when loading .env
# Catches the common Windows line-ending corruption issue

INPUT=$(cat)

# Check if the command loads .env without tr -d '\r'
if echo "$INPUT" | grep -q '\.env' && echo "$INPUT" | grep -q 'export' && ! echo "$INPUT" | grep -q "tr -d"; then
  echo '{"ok": false, "reason": "BLOCKED: Loading .env without tr -d \"\\r\" will corrupt values on Windows. Use: export $(cat .env | tr -d \"\\r\" | xargs)"}'
  exit 0
fi

exit 0
