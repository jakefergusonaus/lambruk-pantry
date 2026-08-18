# Phase 0 — Intake and Safety

Do not build until the theme mode and safety boundary are clear.

## Required questions

Ask in one concise batch, then follow up only on material gaps:

First read `PROJECT_CONFIG.json` and run the status helper. Ask only for facts
that cannot be discovered from the project or store:

1. Is this an existing-theme rebuild or a new theme?
2. Is the intended base already present locally?
3. Which design sources are authoritative?
4. Which templates, features and integrations are in scope?
5. Which existing commerce, app and custom-data behaviour must be preserved?
6. Which content genuinely needs merchant control without code?
7. Is a durable unpublished client-review theme required?

## Hard gate

State explicitly that this workflow will not alter or publish the live theme.
Record the full intake only for full-pipeline work. Micro-fixes and fast-path
work use the existing confirmed project context.

Ask again before proceeding whenever a missing answer could change theme architecture, remove existing functionality, target the wrong store/theme, or create an external change.
