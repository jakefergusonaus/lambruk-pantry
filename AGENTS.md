# Codex adapter

`workflow/PIPELINE.md` is the authoritative operating guide for this project.

At the start of a fresh session:

1. Read `START_HERE.md` and `PROJECT_CONFIG.json`.
2. Run `node workflow/scripts/project-status.mjs`.
3. Select the task size from `workflow/PIPELINE.md`.

Read the relevant `.claude/rules/` file before changing theme files; the rules
are shared guidance even though Codex does not auto-load Claude path rules.

Do not trust remembered branch, dirty-tree, CLI, authentication or theme-role
state. Query it immediately before edits, commits and remote transfers.

The published theme is read-only. Never use `--live`, `--allow-live` or
`--publish`, and never mutate store data as an incidental theme-build step.
