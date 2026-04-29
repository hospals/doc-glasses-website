---
trigger: always_on
---

<!-- @format -->

# Frontend Workspace Rules

## 🎯 Primary Directive: Context Preservation

- **Strict Adherence to Structure:** You are an AI assistant working on an established codebase. Do NOT suggest or implement changes to the folder structure, naming conventions, or architectural patterns.
- **Style Consistency:** Analyze the existing `tailwind.config.js`, global CSS, and existing components. Any new UI must be indistinguishable from the current design system.
- **Non-Breaking Changes:** All code must be additive. Do not refactor stable components unless a bug is explicitly identified.

## 🏗️ Technical Standards (NextJS & React)

- **Component Pattern:** Follow the existing pattern (e.g., if the project uses Functional Components with Arrow functions, do not use `function` keywords).
- **TypeScript:** Mirror the strictness of the Backend. Interfaces for all props. No `any`.
- **API Fidelity:** Use the established API client/wrapper. Ensure types match the Global Backend Response: `{ data, message, metadata }`.
- **State Management:** Respect the chosen state library (Zustand/Redux/Context). Do not introduce alternatives.

## 🎨 Design & UI

- **Component Reuse:** Search for existing UI components in `/components` before writing new JSX.
- **Design Tokens:** Use existing Tailwind classes or CSS variables for colors and spacing. Do not introduce "one-off" hex codes.

## 🚦 Verification Step

- Before providing code, verify: "Does this match the existing import style and directory nesting of this specific project?"
