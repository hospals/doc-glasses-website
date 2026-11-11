---
name: pre-commit-security-sonar
description: OWASP/security checklist on git diff before commit or push. Use for commit, push, pre-commit gate, security review, or OWASP check.
---

# Pre-commit gate (Website)

Diff only (`git diff`, staged preferred). No weakening cookie consent/headers/contact API without approval.

1. No `CONTACT_API_TOKEN` / `CONTACT_API_COOKIE` / `PROD_API_URL` (or other backend secrets) in client or `NEXT_PUBLIC_*`.
2. Fail on Critical/High **introduced by this diff**:

| ID | Block if |
|----|----------|
| A01 | Privileged access from client; admin-only APIs on marketing site |
| A02 | Secrets / contact credentials in client or bad `NEXT_PUBLIC_` |
| A03 | Unvalidated contact/form/URL input to APIs |
| A04 | Contact `fetch` loses timeout/error handling without replacement |
| A05 | Cookie consent or security headers weakened without approval |
| A06 | Risky new dependency without note + audit awareness |
| A07 | Auth/session bypass if protected surface added |
| A08 | CSRF/origin broken on mutating server actions |
| A09 | PII/tokens in `console.*` |
| A10 | User-controlled URL fetch / SSRF |

3. XSS: no unsanitized `dangerouslySetInnerHTML` except approved Clarity + env id.
4. No new obvious vulns/hotspots (hardcoded creds, secrets in logs, `any` on security boundaries).

```
GATE: PASS | FAIL
OWASP: (failed IDs | none)
Sonar: (issues | none)
Blockers: …
Prod-risk: none | …
```

FAIL → stop. PASS → `16-git-commit`.
