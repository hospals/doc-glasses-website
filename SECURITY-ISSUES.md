# Security Issues — Dependency Vulnerabilities

Flagged by GitHub Dependabot on `master` branch (detected 2026-09-28).

## Summary

| Severity | Count |
|----------|-------|
| Critical | 4     |
| High     | 16    |
| Moderate | 9     |
| Low      | 1     |
| **Total**| **30**|

## Action Required

Review and resolve via GitHub Dependabot alerts:
https://github.com/hospals/doc-glasses-website/security/dependabot

## Steps to Fix

1. Run `npm audit` locally to see full details.
2. Run `npm audit fix` for auto-fixable issues.
3. Manually update packages flagged as critical/high that require breaking changes.
4. Re-run `npm audit` to confirm issues are resolved.
