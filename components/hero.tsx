"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─────────────────────────────────────────────
   TYPES
───────────────────────────────────────────── */
interface Stat {
  value: string;
  numericEnd: number | null;
  suffix: string;
  label: string;
}

/* ─────────────────────────────────────────────
   CONSTANTS
───────────────────────────────────────────── */
const STATS: Stat[] = [
  { value: "1st", numericEnd: null, suffix: "", label: "Govt Pilot Ready" },
  {
    value: "98%",
    numericEnd: 98,
    suffix: "%",
    label: "AI Diagnostic Accuracy",
  },
  { value: "97%", numericEnd: 97, suffix: "%", label: "Error Reduction" },
  {
    value: "Patent",
    numericEnd: null,
    suffix: "",
    label: "Applied Technology",
  },
];

const HEADLINE_WORDS = ["AI", "Eyes", "for", "Every", "Doctor."];

// Transcript frames that loop inside the glassmorphism card
const TRANSCRIPT_FRAMES = [
  { speaker: "Patient", text: "Chest pain, 3 days now…", type: "patient" },
  {
    speaker: "AI Capturing",
    text: "Scanning chest region…",
    type: "ai-working",
  },
  { speaker: "Confirmed", text: "✓ X-Ray Captured", type: "success" },
  {
    speaker: "AI Suggestion",
    text: "Viral Pneumonia — 74% confidence",
    type: "diagnosis",
  },
];

/* ─────────────────────────────────────────────
   CONTAINER / CHILD VARIANTS
───────────────────────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
      delay: 0.6,
    },
  },
};

/* ─────────────────────────────────────────────
   TYPEWRITER HOOK
   Returns the display text built word-by-word
───────────────────────────────────────────── */
function useTypewriter(words: string[], delayStart = 800) {
  const [displayed, setDisplayed] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let idx = 0;
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        idx += 1;
        setDisplayed(words.slice(0, idx));
        if (idx >= words.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, 220);
      return () => clearInterval(interval);
    }, delayStart);
    return () => clearTimeout(timer);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return { displayed, done };
}

/* ─────────────────────────────────────────────
   COUNT-UP HOOK
───────────────────────────────────────────── */
function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  const raf = useRef<number>(0);

  useEffect(() => {
    if (!start) return;
    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) raf.current = requestAnimationFrame(step);
    };
    raf.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf.current);
  }, [start, target, duration]);

  return count;
}

/* ─────────────────────────────────────────────
   INDIVIDUAL STAT ITEM
───────────────────────────────────────────── */
function StatItem({ stat, start }: { stat: Stat; start: boolean }) {
  const count = useCountUp(
    stat.numericEnd ?? 0,
    2000,
    start && stat.numericEnd !== null,
  );

  const displayValue =
    stat.numericEnd !== null ? `${count}${stat.suffix}` : stat.value;

  return (
    <div className="flex flex-col items-center gap-1">
      <span
        className="font-syne font-bold text-2xl md:text-3xl"
        style={{ color: "var(--orange)" }}
      >
        {displayValue}
      </span>
      <span
        className="font-dm text-xs tracking-wide text-center leading-tight"
        style={{ color: "var(--text-muted)" }}
      >
        {stat.label}
      </span>
    </div>
  );
}

/* ─────────────────────────────────────────────
   GLASSES SVG ICON
───────────────────────────────────────────── */
function GlassesIcon({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size * 0.5}
      viewBox="0 0 80 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Bridge */}
      <path
        d="M32 20 Q40 14 48 20"
        stroke="#E87722"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Left lens */}
      <rect
        x="4"
        y="10"
        width="26"
        height="20"
        rx="10"
        stroke="#E87722"
        strokeWidth="2.5"
        fill="rgba(232,119,34,0.08)"
      />
      {/* Right lens */}
      <rect
        x="50"
        y="10"
        width="26"
        height="20"
        rx="10"
        stroke="#E87722"
        strokeWidth="2.5"
        fill="rgba(232,119,34,0.08)"
      />
      {/* Left arm */}
      <path
        d="M4 20 L0 20"
        stroke="#E87722"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Right arm */}
      <path
        d="M76 20 L80 20"
        stroke="#E87722"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Inner lens glow dots */}
      <circle cx="17" cy="20" r="3" fill="rgba(232,119,34,0.4)" />
      <circle cx="63" cy="20" r="3" fill="rgba(232,119,34,0.4)" />
    </svg>
  );
}

/* ─────────────────────────────────────────────
   TRANSCRIPT LINE
───────────────────────────────────────────── */
function TranscriptLine({
  frame,
  visible,
}: {
  frame: (typeof TRANSCRIPT_FRAMES)[number];
  visible: boolean;
}) {
  const isSuccess = frame.type === "success";
  const isDiagnosis = frame.type === "diagnosis";
  const isPatient = frame.type === "patient";
  const isWorking = frame.type === "ai-working";

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          key={frame.text}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.4 }}
          className="flex items-start gap-2"
        >
          {/* Speaker badge */}
          <span
            className="flex-shrink-0 font-mono text-[10px] font-medium px-2 py-0.5 rounded"
            style={{
              background: isPatient
                ? "rgba(148,163,184,0.12)"
                : isSuccess
                  ? "rgba(34,197,94,0.15)"
                  : isDiagnosis
                    ? "rgba(232,119,34,0.15)"
                    : "rgba(232,119,34,0.1)",
              color: isPatient
                ? "var(--text-muted)"
                : isSuccess
                  ? "#22c55e"
                  : isDiagnosis
                    ? "var(--orange)"
                    : "var(--orange-light)",
              border: isSuccess
                ? "1px solid rgba(34,197,94,0.3)"
                : isDiagnosis
                  ? "1px solid rgba(232,119,34,0.35)"
                  : "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {frame.speaker}
          </span>
          {/* Text */}
          <span
            className="font-dm text-sm leading-snug"
            style={{
              color: isSuccess
                ? "#4ade80"
                : isDiagnosis
                  ? "var(--orange-light)"
                  : isWorking
                    ? "rgba(255,154,69,0.8)"
                    : "var(--text-muted)",
            }}
          >
            {isWorking && (
              <span className="inline-flex gap-0.5 mr-1">
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.2,
                      delay: i * 0.2,
                    }}
                    style={{
                      display: "inline-block",
                      width: 4,
                      height: 4,
                      borderRadius: "50%",
                      background: "var(--orange)",
                      verticalAlign: "middle",
                    }}
                  />
                ))}
              </span>
            )}
            {frame.text}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ─────────────────────────────────────────────
   GLASSMORPHISM CARD (right column)
───────────────────────────────────────────── */
function AIPreviewCard() {
  const [frameIdx, setFrameIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setFrameIdx((i) => (i + 1) % TRANSCRIPT_FRAMES.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div
      variants={cardVariants}
      className="relative w-full max-w-sm mx-auto lg:mx-0"
    >
      {/* Large radial glow behind card */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: "-40px",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse at center, rgba(232,119,34,0.22) 0%, transparent 70%)",
          filter: "blur(24px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Floating card */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        style={{
          position: "relative",
          zIndex: 1,
          background: "rgba(13,21,38,0.72)",
          border: "1px solid rgba(232,119,34,0.28)",
          borderRadius: 20,
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          boxShadow:
            "0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04) inset, 0 0 60px rgba(232,119,34,0.08)",
          overflow: "hidden",
          padding: "0",
        }}
      >
        {/* Card top accent bar */}
        <div
          style={{
            height: 2,
            background:
              "linear-gradient(90deg, transparent, var(--orange), var(--orange-light), transparent)",
            opacity: 0.7,
          }}
        />

        <div style={{ padding: "24px" }}>
          {/* Header row */}
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <div
                style={{
                  background: "rgba(232,119,34,0.1)",
                  border: "1px solid rgba(232,119,34,0.25)",
                  borderRadius: 10,
                  padding: "8px 10px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <GlassesIcon size={36} />
              </div>
              <div>
                <p
                  className="font-syne font-semibold text-sm"
                  style={{ color: "var(--text-primary)" }}
                >
                  Live Consultation
                </p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <motion.span
                    animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                    transition={{ repeat: Infinity, duration: 1.8 }}
                    style={{
                      display: "inline-block",
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      background: "#22c55e",
                      boxShadow: "0 0 8px rgba(34,197,94,0.6)",
                    }}
                  />
                  <span
                    className="font-mono text-[10px]"
                    style={{ color: "#22c55e" }}
                  >
                    ACTIVE
                  </span>
                </div>
              </div>
            </div>

            {/* REC badge */}
            <div
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full"
              style={{
                background: "rgba(232,119,34,0.1)",
                border: "1px solid rgba(232,119,34,0.2)",
              }}
            >
              <motion.span
                animate={{ opacity: [1, 0.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.2 }}
                style={{
                  display: "inline-block",
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "var(--orange)",
                }}
              />
              <span
                className="font-mono text-[10px] font-medium"
                style={{ color: "var(--orange)" }}
              >
                REC
              </span>
            </div>
          </div>

          {/* Waveform visualiser */}
          <div
            className="flex items-end gap-0.5 mb-4"
            style={{ height: 28 }}
            aria-hidden="true"
          >
            {Array.from({ length: 32 }).map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  height: [
                    `${8 + Math.sin(i * 0.8) * 6}px`,
                    `${12 + Math.sin(i * 0.8 + 2) * 10}px`,
                    `${8 + Math.sin(i * 0.8) * 6}px`,
                  ],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.4 + (i % 5) * 0.2,
                  ease: "easeInOut",
                  delay: i * 0.04,
                }}
                style={{
                  flex: 1,
                  borderRadius: 2,
                  background:
                    i % 3 === 0
                      ? "var(--orange)"
                      : i % 3 === 1
                        ? "var(--orange-light)"
                        : "rgba(232,119,34,0.35)",
                }}
              />
            ))}
          </div>

          {/* Transcript area */}
          <div
            style={{
              background: "rgba(10,15,30,0.5)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 12,
              padding: "14px",
              minHeight: 88,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 8,
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span
                className="font-mono text-[9px] tracking-widest uppercase"
                style={{ color: "rgba(148,163,184,0.5)" }}
              >
                AI Transcript
              </span>
              <div
                style={{
                  flex: 1,
                  height: 1,
                  background: "rgba(255,255,255,0.05)",
                }}
              />
            </div>

            {TRANSCRIPT_FRAMES.map((frame, i) => (
              <TranscriptLine key={i} frame={frame} visible={frameIdx === i} />
            ))}
          </div>

          {/* Confidence bar */}
          <div className="mt-4">
            <div className="flex justify-between items-center mb-1.5">
              <span
                className="font-mono text-[10px]"
                style={{ color: "var(--text-muted)" }}
              >
                Confidence Score
              </span>
              <span
                className="font-mono text-[10px] font-medium"
                style={{ color: "var(--orange)" }}
              >
                74%
              </span>
            </div>
            <div
              style={{
                height: 4,
                borderRadius: 4,
                background: "rgba(255,255,255,0.06)",
                overflow: "hidden",
              }}
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "74%" }}
                transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
                style={{
                  height: "100%",
                  borderRadius: 4,
                  background:
                    "linear-gradient(90deg, var(--orange), var(--orange-light))",
                  boxShadow: "0 0 8px rgba(232,119,34,0.5)",
                }}
              />
            </div>
          </div>

          {/* Stat pills row */}
          <div className="flex gap-2 mt-5">
            {[
              { icon: "◎", label: "98% Accuracy" },
              { icon: "⌨", label: "0 Typing" },
              { icon: "⚡", label: "Real-time" },
            ].map((pill) => (
              <div
                key={pill.label}
                className="flex-1 flex items-center justify-center gap-1 py-2 rounded-lg"
                style={{
                  background: "rgba(232,119,34,0.07)",
                  border: "1px solid rgba(232,119,34,0.18)",
                }}
              >
                <span style={{ fontSize: 11, color: "var(--orange)" }}>
                  {pill.icon}
                </span>
                <span
                  className="font-mono text-[10px] font-medium"
                  style={{ color: "var(--text-muted)" }}
                >
                  {pill.label}
                </span>
              </div>
            ))}
          </div>

          {/* Corner decorative dots */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              bottom: 20,
              right: 20,
              width: 60,
              height: 60,
              opacity: 0.15,
              backgroundImage:
                "radial-gradient(circle, var(--orange) 1px, transparent 1px)",
              backgroundSize: "8px 8px",
              pointerEvents: "none",
            }}
          />
        </div>
      </motion.div>

      {/* Secondary floating mini-card (depth effect) */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: "easeInOut",
          delay: 1,
        }}
        style={{
          position: "absolute",
          bottom: -28,
          right: -16,
          zIndex: 0,
          background: "rgba(13,21,38,0.55)",
          border: "1px solid rgba(232,119,34,0.15)",
          borderRadius: 14,
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          padding: "10px 16px",
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <span
          style={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: "#22c55e",
            boxShadow: "0 0 8px rgba(34,197,94,0.8)",
            display: "inline-block",
          }}
        />
        <span
          className="font-dm text-xs"
          style={{ color: "var(--text-muted)" }}
        >
          No EMR entry needed
        </span>
      </motion.div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   HERO — MAIN EXPORT
───────────────────────────────────────────── */
export default function Hero() {
  const { displayed, done } = useTypewriter(HEADLINE_WORDS, 600);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  // Trigger count-up when stats scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStatsVisible(true);
      },
      { threshold: 0.3 },
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  // Immediately visible since hero is above fold
  useEffect(() => {
    const t = setTimeout(() => setStatsVisible(true), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{
        minHeight: "100vh",
        background: "var(--navy-deep)",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* ── BACKGROUND LAYERS ── */}

      {/* Dot grid at low opacity */}
      <div
        aria-hidden="true"
        className="dot-grid-bg absolute inset-0 pointer-events-none"
        style={{ opacity: 0.03 }}
      />

      {/* Orange radial glow — top right */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: "55vw",
          height: "55vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(232,119,34,0.15) 0%, rgba(232,119,34,0.04) 50%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Secondary deep-blue gradient bottom-left */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-10%",
          left: "-5%",
          width: "40vw",
          height: "40vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(13,21,38,0.9) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* ── CONTENT ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-[50px]">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center gap-14 lg:gap-8"
        >
          {/* ════════════════════════════
              LEFT COLUMN  (55%)
          ════════════════════════════ */}
          <div className="flex-1 lg:w-[55%] flex flex-col gap-7">
            {/* 1. Eyebrow pills */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3"
            >
              <span
                className="inline-flex items-center gap-2 font-dm text-xs font-semibold tracking-wider uppercase px-4 py-2 rounded-full"
                style={{
                  background: "rgba(232,119,34,0.08)",
                  border: "1px solid var(--orange-border)",
                  color: "var(--orange)",
                }}
              >
                🌐&nbsp; A Global First for Public Healthcare
              </span>
              <span
                className="inline-flex items-center gap-2 font-dm text-xs font-semibold px-4 py-2 rounded-full"
                style={{
                  background: "rgba(232,119,34,0.05)",
                  border: "1px solid rgba(232,119,34,0.2)",
                  color: "var(--text-muted)",
                }}
              >
                <span style={{ color: "var(--orange)", fontWeight: 700 }}>
                  Patent Applied
                </span>
                &nbsp;·&nbsp; Global Health Holdings, USA
              </span>
            </motion.div>

            {/* 2. H1 typewriter headline */}
            <motion.div variants={itemVariants}>
              <h1
                className="font-syne font-extrabold leading-[1.08] tracking-tight"
                style={{
                  fontSize: "clamp(2.8rem, 6vw, 4.5rem)",
                  color: "var(--text-primary)",
                }}
              >
                {/* Build word by word */}
                <span className="block">
                  {/* "AI Eyes for" — first 3 words on line 1 */}
                  {displayed.slice(0, 3).join(" ")}
                  {displayed.length < 3 && (
                    <span className="typewriter-cursor" />
                  )}
                </span>

                {/* "Every Doctor." on line 2 */}
                {displayed.length >= 3 && (
                  <span className="block mt-1">
                    {displayed.length >= 4 && (
                      <span className="orange-gradient">{displayed[3]}</span>
                    )}{" "}
                    {displayed.length >= 5 ? displayed[4] : ""}
                    {!done && displayed.length >= 3 && (
                      <span className="typewriter-cursor" />
                    )}
                  </span>
                )}
              </h1>
            </motion.div>

            {/* 3. Subheadline */}
            <motion.p
              variants={itemVariants}
              className="font-dm text-lg leading-relaxed max-w-xl"
              style={{ color: "var(--text-muted)" }}
            >
              Deploying AI Smart Glasses to improve Healthcare. DocGlasses sees,
              hears, and assists every doctor in real time — automatically.
            </motion.p>

            {/* 4. CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="btn-orange inline-flex items-center gap-2 text-sm font-semibold"
              >
                Request Demo
                <span aria-hidden="true" style={{ fontSize: "1.1em" }}>
                  →
                </span>
              </a>
              <a
                href="#science"
                className="btn-ghost-orange inline-flex items-center gap-2 text-sm font-semibold"
              >
                See the Science
              </a>
            </motion.div>

            {/* 5. Stats row */}
            {/* <motion.div variants={itemVariants}>
              <div
                ref={statsRef}
                className="flex flex-wrap sm:flex-nowrap items-stretch gap-0 mt-2"
                style={{
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 14,
                  background: "rgba(255,255,255,0.02)",
                  overflow: "hidden",
                }}
              >
                {STATS.map((stat, i) => (
                  <div
                    key={stat.label}
                    className="flex-1 min-w-[120px] flex justify-center items-center py-5 px-3"
                    style={{
                      borderRight:
                        i < STATS.length - 1
                          ? "1px solid rgba(255,255,255,0.06)"
                          : "none",
                    }}
                  >
                    <StatItem stat={stat} start={statsVisible} />
                  </div>
                ))}
              </div>
            </motion.div> */}
          </div>

          {/* ════════════════════════════
              RIGHT COLUMN  (45%)
          ════════════════════════════ */}
          <motion.div
            variants={cardVariants}
            className="w-full lg:w-[45%] flex justify-center items-center px-4 lg:px-0"
          >
            <AIPreviewCard />
          </motion.div>
        </motion.div>
      </div>

      {/* ── BOTTOM HORIZONTAL RULE ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 1,
          background:
            "linear-gradient(90deg, transparent 0%, rgba(232,119,34,0.3) 40%, rgba(232,119,34,0.3) 60%, transparent 100%)",
        }}
      />
    </section>
  );
}
