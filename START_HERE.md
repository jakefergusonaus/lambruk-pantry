# Start here

Use this checklist at the start of a new Codex or Claude Code session.

1. Read `PROJECT_CONFIG.json`.
2. Run `node workflow/scripts/project-status.mjs` from the project root.
3. Read `workflow/PIPELINE.md` and select micro-fix, fast path or full pipeline.
4. Preserve every unrelated dirty file reported by the status helper.
5. Before a pull, push, share or commit, query the branch, dirty files, store,
   remote theme role and exact direction again.

If status reports a missing configuration value, CLI, authentication or theme
root, fix that blocker before implementation.

For local development, use the command printed by the status helper. Theme
Editor synchronization should abort on conflicts rather than silently choosing
local or remote content.

The published theme is read-only. Nothing in normal startup publishes, deletes,
renames or overwrites it.
