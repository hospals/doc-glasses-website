"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ─── Icon components ─────────────────────────────────────── */

function IconCamera() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      {/* Glasses / camera hybrid — two lens circles joined by a bridge */}
      <rect
        x="1"
        y="10"
        width="30"
        height="14"
        rx="4"
        stroke="#E87722"
        strokeWidth="1.8"
        fill="none"
      />
      <circle
        cx="9"
        cy="17"
        r="5"
        stroke="#E87722"
        strokeWidth="1.8"
        fill="none"
      />
      <circle
        cx="23"
        cy="17"
        r="5"
        stroke="#E87722"
        strokeWidth="1.8"
        fill="none"
      />
      <line
        x1="14"
        y1="17"
        x2="18"
        y2="17"
        stroke="#E87722"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Camera shutter dot in right lens */}
      <circle cx="23" cy="17" r="2" fill="#E87722" opacity="0.7" />
      {/* Capture flash arc */}
      <path
        d="M26 8 L28 4 L22 7"
        stroke="#FF9A45"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function IconBrain() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      {/* Brain outline — simplified left + right hemispheres */}
      <path
        d="M16 6 C10 6 4 10 4 17 C4 22 8 26 13 27 L16 28 L19 27 C24 26 28 22 28 17 C28 10 22 6 16 6 Z"
        stroke="#E87722"
        strokeWidth="1.8"
        fill="none"
      />
      {/* Centre divide */}
      <line
        x1="16"
        y1="6"
        x2="16"
        y2="28"
        stroke="#E87722"
        strokeWidth="1.4"
        strokeDasharray="2 2"
      />
      {/* Folds left */}
      <path
        d="M9 13 Q7 17 9 21"
        stroke="#E87722"
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
      />
      {/* Folds right */}
      <path
        d="M23 13 Q25 17 23 21"
        stroke="#E87722"
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
      />
      {/* Lightning bolt — AI spark */}
      <path
        d="M18 4 L14 13 L17 13 L13 22"
        stroke="#FF9A45"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function IconDocument() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      {/* Document body */}
      <rect
        x="6"
        y="3"
        width="20"
        height="26"
        rx="3"
        stroke="#E87722"
        strokeWidth="1.8"
        fill="none"
      />
      {/* Folded corner */}
      <path
        d="M20 3 L26 9 L20 9 Z"
        stroke="#E87722"
        strokeWidth="1.4"
        fill="none"
      />
      {/* Lines of text */}
      <line
        x1="10"
        y1="14"
        x2="22"
        y2="14"
        stroke="#E87722"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <line
        x1="10"
        y1="18"
        x2="19"
        y2="18"
        stroke="#E87722"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <line
        x1="10"
        y1="22"
        x2="21"
        y2="22"
        stroke="#E87722"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      {/* Checkmark badge */}
      <circle
        cx="24"
        cy="25"
        r="5"
        fill="var(--navy-mid)"
        stroke="#E87722"
        strokeWidth="1.6"
      />
      <path
        d="M21.5 25 L23.2 26.8 L26.5 23"
        stroke="#FF9A45"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ─── Card data ────────────────────────────────────────────── */

const CARDS = [
  {
    icon: <IconCamera />,
    title: "Voice & Video Capture",
    desc: "Say 'capture' — AI instantly photographs reports, X-rays, or skin conditions through the glasses. Zero typing. Zero delay. Every moment preserved.",
  },
  {
    icon: <IconBrain />,
    title: "Real-Time AI Suggestions",
    desc: "Differential diagnosis and triage question prompts appear in the doctor's view, backed by the patient's full history and latest clinical guidelines.",
  },
  {
    icon: <IconDocument />,
    title: "Automated EHR Drafting",
    desc: "Every consultation summarised into a structured medical note, ready for one-tap approval. E-Shrust + ABHA integrated. Follow-up reminders auto-set.",
  },
] as const;

/* ─── Main component ───────────────────────────────────────── */

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="features"
      ref={sectionRef}
      style={{ background: "var(--navy-mid)", padding: "50px 0" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* ── Header ── */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight"
            style={{
              fontFamily: "var(--font-syne)",
              color: "var(--text-primary)",
            }}
          >
            Built for the Reality of <br className="hidden md:block" />
            <span className="orange-gradient">Indian Public Healthcare</span>
          </h2>
          <p
            className="text-lg max-w-xl mx-auto"
            style={{
              fontFamily: "var(--font-dm-sans)",
              color: "var(--text-muted)",
            }}
          >
            Five integrated capabilities that transform how doctors work.
          </p>
        </motion.div>

        {/* ── Cards grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {CARDS.map((card, i) => (
            <FeatureCard
              key={card.title}
              card={card}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Individual card ──────────────────────────────────────── */

function FeatureCard({
  card,
  index,
  isInView,
}: {
  card: { icon: React.ReactNode; title: string; desc: string };
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.65,
        delay: 0.15 + index * 0.12,
        ease: "easeOut",
      }}
      whileHover={{ y: -4 }}
      style={{ position: "relative" }}
    >
      {/* Card shell */}
      <div
        className="glass-card feature-card group"
        style={{
          padding: "2rem",
          borderRadius: "1rem",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Animated orange bottom border on hover */}
        <div
          className="feature-card-border"
          style={{
            position: "absolute",
            bottom: 0,
            left: "10%",
            right: "10%",
            height: "2px",
            background:
              "linear-gradient(90deg, transparent, var(--orange), transparent)",
            borderRadius: "2px",
            opacity: 0,
            transition: "opacity 0.35s ease",
          }}
        />

        {/* Icon */}
        <div
          style={{
            background: "rgba(232,119,34,0.12)",
            border: "1px solid rgba(232,119,34,0.3)",
            width: 64,
            height: 64,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 1.5rem",
            flexShrink: 0,
          }}
        >
          {card.icon}
        </div>

        {/* Title */}
        <h3
          className="text-xl font-bold text-center mb-4"
          style={{
            fontFamily: "var(--font-syne)",
            color: "var(--text-primary)",
          }}
        >
          {card.title}
        </h3>

        {/* Description */}
        <p
          className="text-center text-sm leading-relaxed"
          style={{
            fontFamily: "var(--font-dm-sans)",
            color: "var(--text-muted)",
            lineHeight: 1.75,
          }}
        >
          {card.desc}
        </p>
      </div>

      {/* Inline hover styles via style tag trick — use a wrapper approach instead */}
      <style>{`
        .feature-card:hover .feature-card-border {
          opacity: 1 !important;
        }
      `}</style>
    </motion.div>
  );
}
