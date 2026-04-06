"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ─────────────────────────────────────────────
   NAV LINKS DATA
───────────────────────────────────────────── */
const NAV_COL_A = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Benefits", href: "#benefits" },
];

const NAV_COL_B = [
  { label: "Science", href: "#science" },
  { label: "Contact", href: "#contact" },
];

/* ─────────────────────────────────────────────
   FOOTER LINK
───────────────────────────────────────────── */
function FooterLink({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      className="font-dm text-sm transition-colors duration-200"
      style={{ color: "var(--text-muted)", display: "block" }}
      onMouseEnter={(e) =>
        ((e.currentTarget as HTMLAnchorElement).style.color = "var(--brand)")
      }
      onMouseLeave={(e) =>
      ((e.currentTarget as HTMLAnchorElement).style.color =
        "var(--text-muted)")
      }
    >
      {label}
    </a>
  );
}

/* ─────────────────────────────────────────────
   EXTERNAL LINK ICON
───────────────────────────────────────────── */
function ExternalLinkIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ display: "inline", marginLeft: 4, verticalAlign: "middle" }}
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

/* ─────────────────────────────────────────────
   FOOTER — MAIN EXPORT
───────────────────────────────────────────── */
export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  return (
    <footer
      ref={ref}
      style={{
        background: "var(--navy-deep)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8"
      >
        {/* ── MAIN FOOTER ROW ── */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-12">
          {/* LEFT COLUMN */}
          <motion.div variants={fadeIn} className="flex-1 max-w-xs">
            {/* Logo */}
            <a href="#home" aria-label="DocGlasses home">
              <Image
                src="/docglasses-logo.png"
                alt="DocGlasses"
                width={140}
                height={36}
                priority
                style={{ width: "auto", height: "auto" }}
              />
            </a>

            {/* Tagline */}
            <p
              className="font-syne font-semibold text-lg mt-4"
              style={{ color: "var(--text-primary)" }}
            >
              AI Eyes for Every Doctor.
            </p>

            {/* Sub */}
            <p
              className="font-dm text-sm mt-2 leading-relaxed max-w-xs"
              style={{ color: "var(--text-muted)" }}
            >
              Making AI-assisted consultation accessible to every public doctor
              in India.
            </p>

            {/* Attribution */}
            <p
              className="font-dm text-xs mt-3"
              style={{ color: "var(--text-subtle)" }}
            >
              A platform by Global Health Holdings, USA
            </p>

            {/* Brand-Teal accent line */}
            <div
              aria-hidden="true"
              style={{
                marginTop: 20,
                height: 2,
                width: 48,
                borderRadius: 2,
                background:
                  "linear-gradient(90deg, var(--brand), var(--brand-light))",
                opacity: 0.7,
              }}
            />
          </motion.div>

          {/* RIGHT COLUMN: nav links */}
          <motion.div
            variants={fadeIn}
            className="flex flex-row gap-12 sm:gap-16 flex-wrap"
          >
            {/* Column A */}
            <div className="flex flex-col gap-3">
              <p
                className="font-syne font-semibold text-xs uppercase tracking-widest mb-1"
                style={{ color: "var(--text-subtle)" }}
              >
                Platform
              </p>
              {NAV_COL_A.map((link) => (
                <FooterLink
                  key={link.label}
                  label={link.label}
                  href={link.href}
                />
              ))}
            </div>

            {/* Column B */}
            <div className="flex flex-col gap-3">
              <p
                className="font-syne font-semibold text-xs uppercase tracking-widest mb-1"
                style={{ color: "var(--text-subtle)" }}
              >
                Company
              </p>
              {NAV_COL_B.map((link) => (
                <FooterLink
                  key={link.label}
                  label={link.label}
                  href={link.href}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── PATENT + COMPANY BAND ── */}
        <motion.div variants={fadeIn} className="mb-10">
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "10px 18px",
              borderRadius: 8,
              background: "rgba(15, 118, 110, 0.06)",
              border: "1px solid rgba(15, 118, 110, 0.18)",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "var(--brand)",
                flexShrink: 0,
                boxShadow: "0 0 8px rgba(15, 118, 110, 0.6)",
              }}
            />
            <span
              className="font-dm text-xs font-medium"
              style={{ color: "var(--brand)" }}
            >
              Patent Applied Technology
            </span>
            <span style={{ color: "rgba(15, 118, 110, 0.3)", fontSize: 10 }}>
              |
            </span>
            <span
              className="font-dm text-xs"
              style={{ color: "var(--text-muted)" }}
            >
              Global Health Holdings, USA
            </span>
          </div>
        </motion.div>

        {/* ── BOTTOM BAR ── */}
        <motion.div variants={fadeIn}>
          {/* Horizontal rule */}
          <div
            aria-hidden="true"
            style={{
              height: 1,
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)",
              marginBottom: 20,
            }}
          />

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <p
              className="font-dm text-xs"
              style={{ color: "var(--text-subtle)" }}
            >
              &copy; 2026 Global Health Holdings, USA. All rights reserved.
            </p>
            <p
              className="font-dm text-xs"
              style={{ color: "var(--text-subtle)" }}
            >
              A portfolio of Ansan Holdings, Singapore.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
