---
trigger: always_on
---

# Next.js & React 19 Rules (Tailwind 4)

## 🏗️ Technical Standards
- **Next.js App Router**: Always use the `/app` directory for new pages. Follow the server/client component boundary rules.
- **React 19**: Use modern hooks and patterns. Prefer functional components with arrow functions.
- **TypeScript**: Strict typing is required. Use interfaces for props and avoid `any`.
- **Tailwind 4**: Use `@tailwindcss/postcss` and the `@theme` block in `globals.css` for custom tokens. Use utility classes for layout and spacing.

## 🎨 Styling & UI
- **Design Tokens**: Never use hardcoded hex values. Use CSS variables defined in `globals.css`:
  - Colors: `var(--brand)`, `var(--brand-light)`, `var(--navy-deep)`, `var(--navy-mid)`.
  - Fonts: `font-syne` (for headers), `font-dm` (for body), `font-mono`.
- **Glassmorphism**: Use the `.glass-card` class for cards and overlays.
- **Animations**: Use `framer-motion` for all transitions. Follow the existing stagger and variant patterns in `components/team.tsx`.

## 🚦 Component Architecture
- **Client vs Server**: Use `'use client';` only when interactivity (Framer Motion, hooks) is required.
- **Icons**: Use `lucide-react` for standard icons. Use native SVG components for custom brand icons (e.g., LinkedInIcon).
- **Images**: Always use the `next/image` component for optimization, except for SVGs where native `<img>` is preferred.

## 🔍 Verification
- Run `npm run lint` before finalizing any UI changes.
- Check responsiveness across mobile, tablet, and desktop views.
