---
name: component-generation
description: Typed reusable DocGlasses marketing components. Use when creating or extracting UI under components/ or shared sections.
---

# Component generation

Rules: `01`, `02`, `04`. Also `.agent/rules/ui-consistency.md`.

1. Search `components/` + `globals.css` before new primitives.
2. Props `interface`; no `any`.
3. `'use client'` only for motion/hooks/events.
4. Tokens/classes (`.glass-card`, `.btn-brand`, `.btn-ghost-brand`, `.brand-gradient`); no hardcoded hex if token exists.
5. Lucide or brand SVG; `next/image` + `alt` for rasters.
6. A11y: button label/`aria-label` + `type="button"` if non-submit; real `href` or use button.
7. Extract shared component at 3+ similar blocks.
8. `npm run lint` after changes.

No ShadCN/`cn()`/CRM design system.
