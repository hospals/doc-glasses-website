---
trigger: always_on
---

# Production Safety Protocols

## 🛡️ Non-Negotiable Rules
1. **No Destructive Deletions**: Never delete files or large blocks of code without explicit confirmation from the user.
2. **Backward Compatibility**: Ensure new changes do not break existing layouts or functionality.
3. **Additive Changes**: Prefer adding new components or hooks over refactoring stable, working ones.
4. **Environment Variables**: Never hardcode secrets. Always use `.env.local` and check for the presence of required variables.

## 🧪 Deployment Safety
1. **Local Validation**: Always verify changes locally using `npm run dev` before proposing them.
2. **Linting**: Run `npm run lint` to ensure no TypeScript or ESLint errors are introduced.
3. **Build Check**: For significant changes, run `npm build` to verify the production bundle compiles correctly.

## 📝 Change Management
1. **Minimal Diffs**: Keep your changes focused. Do not reformat unrelated parts of the file.
2. **Comments & Documentation**: Preserve existing comments. Add meaningful JSDoc/comments to new complex logic.
3. **Atomic Commits**: If you have the ability to commit, group related changes together with clear descriptions.
