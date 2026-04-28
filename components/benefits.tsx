"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

/* ─── Types ───────────────────────────────────────────────── */

type TabKey = "doctors" | "patients" | "government";

interface BenefitCard {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

/* ─── Inline SVG icons ─────────────────────────────────────── */

function IconCoaching() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 2L15 9H22L16.5 13.5L18.5 21L12 17L5.5 21L7.5 13.5L2 9H9Z"
        stroke="var(--brand)"
        strokeWidth="1.6"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="12" cy="11" r="2" fill="var(--brand)" />
    </svg>
  );
}

function IconZeroData() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="3"
        stroke="var(--brand)"
        strokeWidth="1.6"
        fill="none"
      />
      <path
        d="M8 9 L5 12 L8 15"
        stroke="var(--brand)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 9 L19 12 L16 15"
        stroke="var(--brand)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="12"
        y1="8"
        x2="12"
        y2="16"
        stroke="var(--brand-light)"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconAccuracy() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="var(--brand)"
        strokeWidth="1.6"
        fill="none"
      />
      <circle
        cx="12"
        cy="12"
        r="5"
        stroke="var(--brand)"
        strokeWidth="1.4"
        fill="none"
      />
      <circle cx="12" cy="12" r="2" fill="var(--brand)" />
      <line
        x1="12"
        y1="2"
        x2="12"
        y2="5"
        stroke="var(--brand)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <line
        x1="12"
        y1="19"
        x2="12"
        y2="22"
        stroke="var(--brand)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <line
        x1="2"
        y1="12"
        x2="5"
        y2="12"
        stroke="var(--brand)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <line
        x1="19"
        y1="12"
        x2="22"
        y2="12"
        stroke="var(--brand)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconLearning() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 3 L22 8 L12 13 L2 8 Z"
        stroke="var(--brand)"
        strokeWidth="1.6"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M6 10.5 L6 16 Q12 20 18 16 L18 10.5"
        stroke="var(--brand)"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M22 8 L22 14"
        stroke="var(--brand)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconFewerErrors() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 3 L22 19 H2 Z"
        stroke="var(--brand)"
        strokeWidth="1.6"
        strokeLinejoin="round"
        fill="none"
      />
      <line
        x1="12"
        y1="10"
        x2="12"
        y2="14"
        stroke="var(--brand)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="12" cy="17" r="1.2" fill="var(--brand)" />
      <path
        d="M19 6 L21 4"
        stroke="var(--brand-light)"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M20 4 L18 6"
        stroke="var(--brand-light)"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconNoWrong() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="var(--brand)"
        strokeWidth="1.6"
        fill="none"
      />
      <path
        d="M8 12 L10.5 14.5 L16 9"
        stroke="var(--brand)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconDataCapture() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 7 L12 3 L20 7 L20 17 L12 21 L4 17 Z"
        stroke="var(--brand)"
        strokeWidth="1.6"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M12 3 L12 21"
        stroke="var(--brand)"
        strokeWidth="1.2"
        strokeDasharray="2 2"
      />
      <path
        d="M4 7 L20 7"
        stroke="var(--brand)"
        strokeWidth="1.2"
        strokeDasharray="2 2"
      />
      <circle
        cx="12"
        cy="12"
        r="2.5"
        fill="none"
        stroke="var(--brand-light)"
        strokeWidth="1.4"
      />
    </svg>
  );
}

function IconFollowUp() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="4"
        width="18"
        height="18"
        rx="3"
        stroke="var(--brand)"
        strokeWidth="1.6"
        fill="none"
      />
      <line
        x1="8"
        y1="2"
        x2="8"
        y2="6"
        stroke="var(--brand)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <line
        x1="16"
        y1="2"
        x2="16"
        y2="6"
        stroke="var(--brand)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <line
        x1="3"
        y1="9"
        x2="21"
        y2="9"
        stroke="var(--brand)"
        strokeWidth="1.2"
      />
      <path
        d="M8 14 L10 16 L14 12"
        stroke="var(--brand-light)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconStateHealth() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 2 C7 2 3 6 3 11 C3 16 12 22 12 22 C12 22 21 16 21 11 C21 6 17 2 12 2 Z"
        stroke="var(--brand)"
        strokeWidth="1.6"
        fill="none"
      />
      <path
        d="M12 8 L12 14 M9 11 L15 11"
        stroke="var(--brand)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconRichData() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="2"
        y="14"
        width="4"
        height="8"
        rx="1"
        fill="none"
        stroke="var(--brand)"
        strokeWidth="1.6"
      />
      <rect
        x="8"
        y="9"
        width="4"
        height="13"
        rx="1"
        fill="none"
        stroke="var(--brand)"
        strokeWidth="1.6"
      />
      <rect
        x="14"
        y="5"
        width="4"
        height="17"
        rx="1"
        fill="none"
        stroke="var(--brand)"
        strokeWidth="1.6"
      />
      <rect
        x="20"
        y="2"
        width="2"
        height="20"
        rx="1"
        fill="var(--brand-light)"
        opacity="0.6"
      />
    </svg>
  );
}

function IconDashboard() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="2"
        y="3"
        width="20"
        height="15"
        rx="2"
        stroke="var(--brand)"
        strokeWidth="1.6"
        fill="none"
      />
      <line
        x1="2"
        y1="8"
        x2="22"
        y2="8"
        stroke="var(--brand)"
        strokeWidth="1.2"
      />
      <line
        x1="12"
        y1="8"
        x2="12"
        y2="18"
        stroke="var(--brand)"
        strokeWidth="1.2"
      />
      <circle
        cx="7"
        cy="13"
        r="2"
        stroke="var(--brand-light)"
        strokeWidth="1.4"
        fill="none"
      />
      <path
        d="M15 11 L19 11 M15 14 L18 14"
        stroke="var(--brand)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <line
        x1="8"
        y1="21"
        x2="16"
        y2="21"
        stroke="var(--brand)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <line
        x1="12"
        y1="18"
        x2="12"
        y2="21"
        stroke="var(--brand)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconRetraining() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 12 C4 7.6 7.6 4 12 4 C16.4 4 20 7.6 20 12"
        stroke="var(--brand)"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M20 12 C20 16.4 16.4 20 12 20 C7.6 20 4 16.4 4 12"
        stroke="var(--brand)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeDasharray="3 2"
        fill="none"
      />
      <path
        d="M17 9 L20 12 L23 9"
        stroke="var(--brand)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M10 12 L11.5 13.5 L14 10"
        stroke="var(--brand-light)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ─── Tab data ─────────────────────────────────────────────── */

const TAB_DATA: Record<TabKey, BenefitCard[]> = {
  doctors: [
    {
      icon: <IconCoaching />,
      title: "Real-Time AI Coaching",
      desc: "AI prompts the right questions and flags risks during every consultation. Learn while you work.",
    },
    {
      icon: <IconZeroData />,
      title: "Zero Data Entry",
      desc: "Glasses capture everything automatically. No typing, no clicking. Complete focus on the patient.",
    },
    {
      icon: <IconAccuracy />,
      title: "Enhanced Accuracy",
      desc: "Differential diagnosis support reduces misdiagnosis rates. AI cross-checks every consultation.",
    },
    {
      icon: <IconLearning />,
      title: "Continuous Learning",
      desc: "Personalised retraining recommendations from AI. Your performance dashboard improves you automatically.",
    },
  ],
  patients: [
    {
      icon: <IconFewerErrors />,
      title: "Fewer Misdiagnoses",
      desc: "AI-assisted diagnosis catches what tired or rushed doctors might miss. Better outcomes every visit.",
    },
    {
      icon: <IconNoWrong />,
      title: "No Wrong Treatments",
      desc: "Complete medical context at every consultation means treatments are always informed and appropriate.",
    },
    {
      icon: <IconDataCapture />,
      title: "Complete Data Capture",
      desc: "Your full medical history is built and maintained automatically. Every symptom, every finding recorded.",
    },
    {
      icon: <IconFollowUp />,
      title: "Auto Follow-Up",
      desc: "Automatic reminders ensure you never miss a follow-up. Continuity of care built into every visit.",
    },
  ],
  government: [
    {
      icon: <IconStateHealth />,
      title: "Improved State Health",
      desc: "Consistent AI-assisted quality across every public clinic. Diagnostic standards rise uniformly.",
    },
    {
      icon: <IconRichData />,
      title: "Rich Data Capture",
      desc: "Every consultation captured: dialogue, images, diagnoses, outcomes. A goldmine for health policy.",
    },
    {
      icon: <IconDashboard />,
      title: "Quality Dashboards",
      desc: "Live monitoring by doctor, hospital, district, city. Identify gaps and act with data, not guesses.",
    },
    {
      icon: <IconRetraining />,
      title: "Doctor Retraining",
      desc: "AI auto-generates performance reports and targeted retraining plans. Continuous quality improvement built-in.",
    },
  ],
};

const TABS: { key: TabKey; label: string }[] = [
  { key: "government", label: "For Government" },
  { key: "doctors", label: "For Doctors" },
  { key: "patients", label: "For Patients" },
];

/* ─── Main component ───────────────────────────────────────── */

export default function Benefits() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [activeTab, setActiveTab] = useState<TabKey>("government");

  return (
    <section
      id="benefits"
      ref={sectionRef}
      style={{ background: "var(--navy-deep)", padding: "50px 0" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* ── Header ── */}
        <motion.div
          className="text-center mb-14"
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
            Transforming Healthcare <br className="hidden md:block" />
            at <span className="brand-gradient">Every Level</span>
          </h2>
          <p
            className="text-lg max-w-xl mx-auto"
            style={{
              fontFamily: "var(--font-dm-sans)",
              color: "var(--text-muted)",
            }}
          >
            DocGlasses creates value for every stakeholder in the healthcare
            system.
          </p>
        </motion.div>

        {/* ── Tab bar ── */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        >
          <div
            style={{
              display: "inline-flex",
              background: "var(--glass-bg)",
              border: "1px solid var(--glass-border)",
              borderRadius: "9999px",
              padding: "6px",
              gap: "4px",
            }}
          >
            {TABS.map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  suppressHydrationWarning
                  onClick={() => setActiveTab(tab.key)}
                  style={{
                    position: "relative",
                    borderRadius: "9999px",
                    padding: "10px 22px",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    fontFamily: "var(--font-dm-sans)",
                    color: isActive ? "#fff" : "var(--text-muted)",
                    background: isActive ? "var(--brand)" : "transparent",
                    border: "none",
                    cursor: "pointer",
                    transition:
                      "color 0.25s ease, background 0.25s ease, box-shadow 0.25s ease",
                    boxShadow: isActive ? "0 0 20px var(--brand-glow)" : "none",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = "var(--brand)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = "var(--text-muted)";
                    }
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* ── Tab content ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6"
          >
            {TAB_DATA[activeTab].map((card, i) => (
              <BenefitCard key={card.title} card={card} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ─── Individual benefit card ──────────────────────────────── */

function BenefitCard({ card, index }: { card: BenefitCard; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ y: -3 }}
    >
      <div
        className="glass-card"
        style={{
          padding: "1.75rem",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem",
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: "12px",
            background: "var(--brand-glow)",
            border: "1px solid var(--brand-border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          {card.icon}
        </div>

        <h3
          className="text-lg font-bold"
          style={{
            fontFamily: "var(--font-syne)",
            color: "var(--text-primary)",
          }}
        >
          {card.title}
        </h3>

        <p
          className="text-sm leading-relaxed"
          style={{
            fontFamily: "var(--font-dm-sans)",
            color: "var(--text-muted)",
            lineHeight: 1.7,
          }}
        >
          {card.desc}
        </p>
      </div>
    </motion.div>
  );
}
