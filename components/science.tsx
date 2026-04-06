"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

/* ─── Animated counter hook ────────────────────────────────── */

function useCountUp(target: number, duration: number, triggered: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!triggered) return;
    let startTime: number | null = null;
    const startValue = 0;

    function step(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(startValue + (target - startValue) * eased));
      if (progress < 1) requestAnimationFrame(step);
    }

    if (typeof window === "undefined") return;
    requestAnimationFrame(step);
  }, [triggered, target, duration]);

  return value;
}

/* ─── Circular progress ring ───────────────────────────────── */

function CircleRing({
  percentage,
  size = 110,
  strokeWidth = 8,
  triggered,
}: {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  triggered: boolean;
}) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const [offset, setOffset] = useState(circumference);

  useEffect(() => {
    if (!triggered) return;
    let startTime: number | null = null;
    const duration = 2000;
    const targetOffset = circumference * (1 - percentage / 100);

    function step(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setOffset(circumference - eased * (circumference - targetOffset));
      if (progress < 1) requestAnimationFrame(step);
    }

    if (typeof window === "undefined") return;
    requestAnimationFrame(step);
  }, [triggered, circumference, percentage]);

  return (
    <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
      {/* Track */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="rgba(255,255,255,0.07)"
        strokeWidth={strokeWidth}
      />
      {/* Progress */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="url(#orangeGrad)"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        style={{ transition: "none" }}
      />
      <defs>
        <linearGradient id="orangeGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#E87722" />
          <stop offset="100%" stopColor="#FF9A45" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ─── Stat counter card ────────────────────────────────────── */

function StatCounter({
  value,
  suffix,
  label,
  sublabel,
  showRing,
  ringPct,
  isLow,
  triggered,
  delay,
}: {
  value: number;
  suffix?: string;
  label: string;
  sublabel?: string;
  showRing?: boolean;
  ringPct?: number;
  isLow?: boolean;
  triggered: boolean;
  delay: number;
}) {
  const count = useCountUp(value, 2000, triggered);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={triggered ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.65, delay, ease: "easeOut" }}
      className="glass-card"
      style={{
        padding: "2rem 1.5rem",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.75rem",
      }}
    >
      {showRing && ringPct !== undefined ? (
        <div style={{ position: "relative", width: 110, height: 110 }}>
          <CircleRing percentage={ringPct} triggered={triggered} />
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              className="orange-gradient"
              style={{
                fontFamily: "var(--font-syne)",
                fontWeight: 800,
                fontSize: "1.75rem",
                lineHeight: 1,
              }}
            >
              {count}
              {suffix}
            </span>
          </div>
        </div>
      ) : (
        <span
          style={{
            fontFamily: "var(--font-syne)",
            fontWeight: 800,
            fontSize: "3.5rem",
            lineHeight: 1,
            color: isLow ? "var(--orange)" : "var(--text-muted)",
            background: isLow
              ? "linear-gradient(135deg,#E87722,#FF9A45)"
              : undefined,
            WebkitBackgroundClip: isLow ? "text" : undefined,
            WebkitTextFillColor: isLow ? "transparent" : undefined,
            backgroundClip: isLow ? "text" : undefined,
          }}
        >
          {count}
        </span>
      )}

      <div>
        <p
          className="font-bold text-base"
          style={{
            fontFamily: "var(--font-syne)",
            color: "var(--text-primary)",
          }}
        >
          {label}
        </p>
        {sublabel && (
          <p
            className="text-xs mt-1"
            style={{
              fontFamily: "var(--font-dm-sans)",
              color: "var(--text-subtle)",
            }}
          >
            {sublabel}
          </p>
        )}
      </div>
    </motion.div>
  );
}

/* ─── Bar comparison visual ────────────────────────────────── */

function ErrorBar({ triggered }: { triggered: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={triggered ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.65, delay: 0.5, ease: "easeOut" }}
      className="glass-card"
      style={{ padding: "2rem 1.5rem", gridColumn: "span 2" }}
    >
      <p
        className="text-center text-sm font-semibold mb-6 uppercase tracking-widest"
        style={{
          fontFamily: "var(--font-dm-sans)",
          color: "var(--text-subtle)",
        }}
      >
        Omission Errors: Vision AI vs Audio-Only
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {/* Vision AI bar */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <span
            style={{
              fontFamily: "var(--font-dm-sans)",
              color: "var(--text-muted)",
              fontSize: "0.8rem",
              width: 90,
              flexShrink: 0,
            }}
          >
            Vision AI
          </span>
          <div
            style={{
              flex: 1,
              height: 14,
              background: "rgba(255,255,255,0.06)",
              borderRadius: 7,
              overflow: "hidden",
            }}
          >
            <motion.div
              initial={{ width: 0 }}
              animate={triggered ? { width: "2.8%" } : { width: 0 }}
              transition={{ duration: 1.4, delay: 0.7, ease: "easeOut" }}
              style={{
                height: "100%",
                background: "linear-gradient(90deg,#E87722,#FF9A45)",
                borderRadius: 7,
              }}
            />
          </div>
          <span
            className="orange-gradient font-bold"
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "1.1rem",
              width: 40,
              textAlign: "right",
              flexShrink: 0,
            }}
          >
            10
          </span>
        </div>

        {/* Audio-only bar */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <span
            style={{
              fontFamily: "var(--font-dm-sans)",
              color: "var(--text-muted)",
              fontSize: "0.8rem",
              width: 90,
              flexShrink: 0,
            }}
          >
            Audio-Only
          </span>
          <div
            style={{
              flex: 1,
              height: 14,
              background: "rgba(255,255,255,0.06)",
              borderRadius: 7,
              overflow: "hidden",
            }}
          >
            <motion.div
              initial={{ width: 0 }}
              animate={triggered ? { width: "100%" } : { width: 0 }}
              transition={{ duration: 1.4, delay: 0.7, ease: "easeOut" }}
              style={{
                height: "100%",
                background: "rgba(148,163,184,0.35)",
                borderRadius: 7,
              }}
            />
          </div>
          <span
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "1.1rem",
              color: "var(--text-muted)",
              fontWeight: 700,
              width: 40,
              textAlign: "right",
              flexShrink: 0,
            }}
          >
            358
          </span>
        </div>
      </div>

      <p
        className="text-center mt-5 text-xs"
        style={{
          fontFamily: "var(--font-dm-sans)",
          color: "var(--text-subtle)",
        }}
      >
        35× fewer errors with vision-enabled AI — a transformative reduction
      </p>
    </motion.div>
  );
}

/* ─── Main component ───────────────────────────────────────── */

export default function Science() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="science"
      ref={sectionRef}
      style={{ background: "var(--navy-deep)", padding: "50px 0" }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* ── Header ── */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(232,119,34,0.1)",
              border: "1px solid rgba(232,119,34,0.3)",
              borderRadius: "9999px",
              padding: "6px 16px",
              marginBottom: "1.25rem",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-jetbrains-mono)",
                fontSize: "0.75rem",
                color: "var(--orange)",
                letterSpacing: "0.1em",
              }}
            >
              PEER-REVIEWED EVIDENCE
            </span>
          </div>

          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight"
            style={{
              fontFamily: "var(--font-syne)",
              color: "var(--text-primary)",
            }}
          >
            Peer-Reviewed. <br className="hidden md:block" />
            <span className="orange-gradient">Scientifically Validated.</span>
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{
              fontFamily: "var(--font-dm-sans)",
              color: "var(--text-muted)",
            }}
          >
            Independently validated in <em>npj Digital Medicine</em>, 2026.
            Flinders University, Australia.
          </p>
        </motion.div>

        {/* ── Stats grid ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
          <StatCounter
            value={98}
            suffix="%"
            label="Vision AI Accuracy"
            showRing
            ringPct={98}
            triggered={isInView}
            delay={0.1}
          />
          <StatCounter
            value={81}
            suffix="%"
            label="Audio-Only Accuracy"
            sublabel="Previous method"
            showRing
            ringPct={81}
            triggered={isInView}
            delay={0.2}
          />
          <StatCounter
            value={10}
            label="Omission Errors"
            sublabel="Vision AI"
            isLow
            triggered={isInView}
            delay={0.3}
          />
          <StatCounter
            value={358}
            label="Omission Errors"
            sublabel="Audio-Only"
            triggered={isInView}
            delay={0.4}
          />
        </div>

        {/* ── Error bar visual ── */}
        <div className="grid grid-cols-2 gap-4 mb-10">
          <ErrorBar triggered={isInView} />
        </div>

        {/* ── Study summary card ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.55, ease: "easeOut" }}
          className="glass-card"
          style={{
            padding: "2.5rem",
            marginBottom: "2rem",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Background glow */}
          <div
            style={{
              position: "absolute",
              top: "-40px",
              right: "-40px",
              width: 200,
              height: 200,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(232,119,34,0.08) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <p
            className="text-lg leading-relaxed mb-6"
            style={{
              fontFamily: "var(--font-dm-sans)",
              color: "var(--text-primary)",
              lineHeight: 1.85,
            }}
          >
            Flinders University, Australia tested vision-enabled AI scribes
            using{" "}
            <strong style={{ color: "var(--orange-light)" }}>
              AI smart glasses
            </strong>{" "}
            on{" "}
            <strong style={{ color: "var(--text-primary)" }}>
              110 simulated clinical consultations
            </strong>
            . Vision AI achieved{" "}
            <strong className="orange-gradient">98% accuracy</strong> vs{" "}
            <strong style={{ color: "var(--text-muted)" }}>
              81% for audio-only
            </strong>
            , reducing omission errors from{" "}
            <strong style={{ color: "var(--text-muted)" }}>358</strong> to just{" "}
            <strong className="orange-gradient">10</strong>.
          </p>

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <a
              href="https://www.nature.com/npjdigitalmed/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                fontFamily: "var(--font-jetbrains-mono)",
                fontSize: "0.8rem",
                color: "var(--orange)",
                background: "rgba(232,119,34,0.1)",
                border: "1px solid rgba(232,119,34,0.3)",
                borderRadius: "9999px",
                padding: "6px 14px",
                textDecoration: "none",
                transition: "background 0.2s ease",
              }}
            >
              npj Digital Medicine, 2026 ↗
            </a>
          </div>
        </motion.div>

        {/* ── Pull quote ── */}
        <motion.blockquote
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.7, delay: 0.65, ease: "easeOut" }}
          style={{
            borderLeft: "4px solid var(--orange)",
            paddingLeft: "2rem",
            marginBottom: "2.5rem",
          }}
        >
          <p
            className="text-xl md:text-2xl italic leading-relaxed mb-4"
            style={{
              fontFamily: "var(--font-syne)",
              color: "var(--text-primary)",
              fontStyle: "italic",
            }}
          >
            "Vision-enabled AI scribes are transformatively more accurate at
            capturing what matters most in a clinical setting."
          </p>
          <cite
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "0.9rem",
              color: "var(--text-muted)",
              fontStyle: "normal",
            }}
          >
            — npj Digital Medicine, 2026
          </cite>
        </motion.blockquote>

        {/* ── Why it matters ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.65, delay: 0.75, ease: "easeOut" }}
          className="glass-card"
          style={{
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              flexWrap: "wrap",
            }}
          >
            <h3
              className="text-xl font-bold"
              style={{
                fontFamily: "var(--font-syne)",
                color: "var(--text-primary)",
              }}
            >
              Why This Matters for DocGlasses
            </h3>
            <span
              style={{
                fontFamily: "var(--font-jetbrains-mono)",
                fontSize: "0.7rem",
                color: "var(--orange)",
                background: "rgba(232,119,34,0.12)",
                border: "1px solid rgba(232,119,34,0.3)",
                borderRadius: "9999px",
                padding: "3px 12px",
                letterSpacing: "0.08em",
                whiteSpace: "nowrap",
              }}
            >
              PATENT FILED TECHNOLOGY
            </span>
          </div>
          <p
            style={{
              fontFamily: "var(--font-dm-sans)",
              color: "var(--text-muted)",
              lineHeight: 1.75,
              fontSize: "1rem",
            }}
          >
            This is the exact technology architecture DocGlasses is built on —
            peer-reviewed, independently validated vision AI with AI smart
            glasses. The numbers above are not projections — they are published
            research results from the precise AI and hardware combination at the
            core of DocGlasses&apos;s patent-applied technology.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
