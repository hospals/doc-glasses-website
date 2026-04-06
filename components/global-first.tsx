"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ─── Bullet point data ────────────────────────────────────── */

const BULLETS = [
  {
    label: "Technology",
    value: "Patent-filed, validated by peer-reviewed research",
  },
  {
    label: "Infrastructure",
    value: "E-Shrust + ABHA integrated, government dashboard ready",
  },
  {
    label: "Proof",
    value:
      "Sister platform HealthPaths.ai — 19,000+ doctors, 102,000+ patients served",
  },
] as const;

/* ─── Dot-grid SVG overlay ─────────────────────────────────── */

function DotGrid() {
  return (
    <svg
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        opacity: 0.35,
      }}
    >
      <defs>
        <pattern
          id="dotgrid"
          x="0"
          y="0"
          width="28"
          height="28"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="1" cy="1" r="1" fill="rgba(232,119,34,0.25)" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dotgrid)" />
    </svg>
  );
}

/* ─── Main component ───────────────────────────────────────── */

export default function GlobalFirst() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 36 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      id="global-first"
      ref={sectionRef}
      style={{
        background: "var(--navy-deep)",
        padding: "128px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ── Decorative: top orange line ── */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "10%",
          right: "10%",
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(232,119,34,0.5), transparent)",
        }}
      />

      {/* ── Decorative: bottom orange line ── */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "10%",
          right: "10%",
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(232,119,34,0.5), transparent)",
        }}
      />

      {/* ── Dot-grid overlay ── */}
      <DotGrid />

      {/* ── Orange radial glow — centred behind text ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "200%",
          paddingBottom: "80%",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse at center, rgba(232,119,34,0.13) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      {/* ── Content ── */}
      <div
        className="max-w-4xl mx-auto px-6 lg:px-8"
        style={{ position: "relative", zIndex: 1, textAlign: "center" }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Eyebrow */}
          <motion.div
            variants={itemVariants}
            style={{ marginBottom: "1.75rem" }}
          >
            <span
              style={{
                fontFamily: "var(--font-jetbrains-mono)",
                fontSize: "0.8rem",
                color: "var(--orange)",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "rgba(232,119,34,0.1)",
                border: "1px solid rgba(232,119,34,0.28)",
                borderRadius: "9999px",
                padding: "6px 18px",
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "var(--orange)",
                  display: "inline-block",
                  animation: "recPulse 1.2s ease-in-out infinite",
                }}
              />
              A Global First
            </span>
          </motion.div>

          {/* Main title */}
          <motion.div variants={itemVariants} style={{ marginBottom: "2rem" }}>
            <h2
              style={{
                fontFamily: "var(--font-syne)",
                fontWeight: 800,
                lineHeight: 1.2,
                color: "var(--text-primary)",
              }}
            >
              {/* Setup line — smaller, muted, single line */}
              <span
                className="block"
                style={{
                  fontSize: "clamp(1.1rem, 2.4vw, 1.6rem)",
                  fontWeight: 600,
                  color: "var(--text-muted)",
                  letterSpacing: "0.02em",
                  marginBottom: "0.75rem",
                }}
              >
                Any government today has the power to become the
              </span>

              {/* HERO LINE — huge, orange gradient */}
              <span
                className="orange-gradient block"
                style={{
                  fontSize: "clamp(2.2rem, 7vw, 4.8rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.05,
                  margin: "0 0 0.5rem",
                }}
              >
                FIRST GOVERNMENT
                <br />
                IN THE WORLD
              </span>

              {/* Closing — one clean line */}
              <span
                className="block"
                style={{
                  fontSize: "clamp(1.3rem, 3vw, 2rem)",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginTop: "0.25rem",
                }}
              >
                to deploy AI Smart Glasses in public healthcare.
              </span>
            </h2>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            style={{
              fontFamily: "var(--font-dm-sans)",
              color: "var(--text-muted)",
              fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
              maxWidth: "680px",
              margin: "0 auto 2.75rem",
              lineHeight: 1.8,
            }}
          >
            DocGlasses is fully built, scientifically validated, and ready to
            deploy. The technology exists. The evidence is peer-reviewed.{" "}
            <strong style={{ color: "var(--text-primary)" }}>
              We are ready to begin the pilot.
            </strong>
          </motion.p>

          {/* Bullet points */}
          <motion.ul
            variants={itemVariants}
            style={{
              display: "inline-flex",
              flexDirection: "column",
              gap: "0.9rem",
              textAlign: "left",
              marginBottom: "3rem",
            }}
          >
            {BULLETS.map((b) => (
              <li
                key={b.label}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.85rem",
                }}
              >
                {/* Diamond bullet */}
                <span
                  style={{
                    color: "var(--orange)",
                    fontSize: "0.85rem",
                    marginTop: "0.15rem",
                    flexShrink: 0,
                  }}
                  aria-hidden="true"
                >
                  ✦
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "1rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.6,
                  }}
                >
                  <strong
                    style={{
                      color: "var(--text-primary)",
                      fontWeight: 600,
                    }}
                  >
                    {b.label}:
                  </strong>{" "}
                  {b.value}
                </span>
              </li>
            ))}
          </motion.ul>

          {/* CTA button */}
          <motion.div variants={itemVariants}>
            <a
              href="#contact"
              className="btn-ghost-orange"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "1rem",
                padding: "0.9rem 2.25rem",
              }}
            >
              Request Demo
              <span aria-hidden="true" style={{ fontSize: "1.1rem" }}>
                →
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
