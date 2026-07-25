# GUILD Project Rules

## Commit & PR Rules

- **Never** include `Claude-Session:` URLs in commit messages or PR descriptions. These are internal session links and must not be public-facing.
- Always include `Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>` in commit messages.
- The `.githooks/commit-msg` hook enforces both rules for commits. PR descriptions must be checked manually before submission.
