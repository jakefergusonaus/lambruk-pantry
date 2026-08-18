---
description: Check project, Git and Shopify readiness
argument-hint: [optional task]
---

Read `START_HERE.md` and `PROJECT_CONFIG.json`, then run:

```bash
node workflow/scripts/project-status.mjs
```

Report the branch, dirty files, theme-root state, CLI version, store access,
queried live theme, current development theme, optional review theme and exact
blockers. Do not change files or remote state during startup.

If `$ARGUMENTS` contains a task, select its size from `workflow/PIPELINE.md`
after the readiness report.
