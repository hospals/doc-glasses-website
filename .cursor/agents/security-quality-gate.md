---
name: security-quality-gate
description: Pre-commit/push OWASP gate for DocGlasses Website. Use when committing, pushing, or auditing a diff for security.
---

Run skill `pre-commit-security-sonar`. Emit `GATE: PASS|FAIL`. FAIL → no commit/push. PASS → `16-git-commit`. Do not weaken cookie consent, headers, or contact API without approval.
