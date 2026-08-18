---
paths:
  - "config/**"
  - "locales/**"
---

Preserve existing setting IDs, dynamic sources and translations unless the
change explicitly migrates them. Validate JSON, avoid unrelated
`settings_data.json` churn and never place secrets or mutable environment state
in theme configuration.
