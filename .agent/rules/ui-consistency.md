---
trigger: always_on
---

# UI Consistency & Aesthetics (Skill Rule)

## 🎨 Design Language
- **Theme**: High-tech, premium, healthcare-focused.
- **Palette**:
  - Deep Navy background (`var(--navy-deep)`)
  - Teal/Emerald Brand colors (`var(--brand)`)
  - White/Slate text (`var(--text-primary)`, `var(--text-muted)`)
- **Effects**:
  - Backdrop blur (12px) for cards.
  - Subtle borders (`var(--glass-border)`).
  - Radial gradients for section backgrounds (subtle glows).

## ✨ Animation Patterns (Framer Motion)
- **Entrance**: Staggered fade-in and slide-up for grid items.
  - `initial={{ opacity: 0, y: 20 }}`
  - `whileInView={{ opacity: 1, y: 0 }}`
  - `transition={{ duration: 0.5, ease: "easeOut" }}`
- **Hover**: Subtle scale or lift.
  - `whileHover={{ y: -4, transition: { duration: 0.2 } }}`
- **Viewport**: Use `whileInView` or `useInView` with `once: true` to trigger animations only once.

## 📏 Layout & Spacing
- **Container**: Max-width `7xl` (`1280px`) with consistent padding (`px-6 lg:px-8`).
- **Section Padding**: Standardize vertical padding (e.g., `py-20` or `py-32`).
- **Typography**: 
  - `font-syne` for bold, futuristic headings.
  - `font-dm` for highly readable body text.
  - Use `tracking-tight` for large headings.

## 🛠️ Reusable Patterns
- **Buttons**: Use `.btn-brand` for primary CTA and `.btn-ghost-brand` for secondary.
- **Cards**: Wrap card content in a `motion.div` with `.glass-card` class.
- **Gradients**: Use `.brand-gradient` for emphasis on text.
