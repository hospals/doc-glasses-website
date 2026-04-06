"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Demo from "./demo";
import PatentTech from "./patent-tech";

interface Step {
  number: number;
  icon: string;
  title: string;
  description: string;
}

const STEPS: Step[] = [
  {
    number: 1,
    icon: "👁",
    title: "See",
    description:
      "AI glasses see and hear the full consultation alongside the doctor. Every word. Every image. In real time.",
  },
  {
    number: 2,
    icon: "🧠",
    title: "Suggest",
    description:
      "AI checks patient history and suggests diagnoses and triage questions directly in the doctor's field of view.",
  },
  {
    number: 3,
    icon: "📋",
    title: "Summarize",
    description:
      "The full consultation is drafted into a structured medical note and pushed to the EHR. One tap to save.",
  },
  {
    number: 4,
    icon: "📊",
    title: "Monitor",
    description:
      "Government dashboard tracks quality, volumes, and outcomes across every doctor, hospital, and district.",
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      style={{
        background: "var(--navy-mid)",
        padding: "50px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle, rgba(232,119,34,0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          pointerEvents: "none",
        }}
      />

      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: -100,
          right: -100,
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(232,119,34,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <PatentTech />

        <StepsRow inView={inView} />
        <DemoSection inView={inView} />
      </div>
    </section>
  );
}

function StepsRow({ inView }: { inView: boolean }) {
  const [connectorVisible, setConnectorVisible] = useState(false);

  useEffect(() => {
    if (!inView) return;
    const id = setTimeout(() => setConnectorVisible(true), 600);
    return () => clearTimeout(id);
  }, [inView]);

  return (
    <div style={{ position: "relative", marginBottom: 80 }}>
      <DesktopConnectors visible={connectorVisible} />

      <div className="how-steps-grid">
        {STEPS.map((step, index) => (
          <StepCard
            key={step.number}
            step={step}
            index={index}
            inView={inView}
          />
        ))}
      </div>

      <style>{`
        .how-steps-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
        }

        @media (max-width: 1024px) {
          .how-steps-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 640px) {
          .how-steps-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }
        }
      `}</style>
    </div>
  );
}

function DesktopConnectors({ visible }: { visible: boolean }) {
  return (
    <div className="how-desktop-connectors">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          style={{
            flex: 1,
            height: 1,
            margin: "0 calc(25% / 2 - 8px)",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderTop: "1px dashed rgba(232,119,34,0.3)",
              clipPath: visible ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)",
              transition: `clip-path 0.8s ease ${0.2 + i * 0.15}s`,
            }}
          />
        </div>
      ))}

      <style>{`
        .how-desktop-connectors {
          position: absolute;
          top: 50%;
          left: 12.5%;
          right: 12.5%;
          height: 1px;
          z-index: 0;
          pointer-events: none;
          display: flex;
          align-items: center;
        }

        @media (max-width: 1024px) {
          .how-desktop-connectors {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}

function StepCard({
  step,
  index,
  inView,
}: {
  step: Step;
  index: number;
  inView: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
        delay: 0.15 + index * 0.1,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        background: "rgba(255,255,255,0.03)",
        border: hovered
          ? "1px solid rgba(232,119,34,0.4)"
          : "1px solid rgba(255,255,255,0.07)",
        borderRadius: 16,
        padding: "24px 20px 22px",
        overflow: "hidden",
        cursor: "default",
        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
        boxShadow: hovered ? "0 0 24px rgba(232,119,34,0.1)" : "none",
        zIndex: 1,
        minWidth: 0,
      }}
    >
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          top: -18,
          right: -6,
          fontFamily: "var(--font-syne), sans-serif",
          fontWeight: 800,
          fontSize: 110,
          lineHeight: 1,
          color: hovered ? "rgba(232,119,34,0.10)" : "rgba(232,119,34,0.06)",
          userSelect: "none",
          pointerEvents: "none",
          zIndex: 0,
          transition: "color 0.3s ease",
        }}
      >
        {step.number}
      </span>

      <div style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 28,
            height: 28,
            borderRadius: "50%",
            background: "#E87722",
            fontFamily: "var(--font-syne), sans-serif",
            fontWeight: 700,
            fontSize: 12,
            color: "#fff",
            marginBottom: 14,
          }}
        >
          {step.number}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: 12,
            marginBottom: 10,
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontWeight: 700,
              fontSize: "1.08rem",
              color: "var(--text-primary)",
              letterSpacing: "-0.01em",
              margin: 0,
            }}
          >
            {step.title}
          </h3>

          <span
            aria-hidden="true"
            style={{
              fontSize: 26,
              lineHeight: 1,
              flexShrink: 0,
            }}
          >
            {step.icon}
          </span>
        </div>

        <p
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: "0.92rem",
            color: "var(--text-muted)",
            lineHeight: 1.65,
            margin: 0,
          }}
        >
          {step.description}
        </p>
      </div>

      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 2,
          background: hovered
            ? "linear-gradient(90deg, transparent, rgba(232,119,34,0.6), transparent)"
            : "transparent",
          transition: "background 0.3s ease",
        }}
      />
    </motion.div>
  );
}

function DemoSection({ inView }: { inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1] as const,
        delay: 0.55,
      }}
    >
      <div style={{ textAlign: "center", marginBottom: 32 }}>
        <div className="how-demo-title-row">
          <div className="how-demo-title-line how-demo-title-line-left" />
          <span
            className="orange-gradient"
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.15rem, 3vw, 1.9rem)",
              letterSpacing: "-0.01em",
              textAlign: "center",
            }}
          >
            See It Live <span style={{ color: "#E87722" }}>→</span>
          </span>
          <div className="how-demo-title-line how-demo-title-line-right" />
        </div>
      </div>

      <div
        style={{
          maxWidth: 1040,
          width: "100%",
          margin: "0 auto",
          position: "relative",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: -1,
            borderRadius: 24,
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(232,119,34,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <Demo />
      </div>

      <p
        style={{
          textAlign: "center",
          marginTop: 16,
          fontFamily: "var(--font-dm-sans), sans-serif",
          fontSize: "0.8rem",
          color: "var(--text-subtle)",
          letterSpacing: "0.02em",
        }}
      >
        Demo auto-plays. Loops every 20 seconds.
      </p>

      <style>{`
        .how-demo-title-row {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
          max-width: 100%;
        }

        .how-demo-title-line {
          width: 56px;
          height: 1px;
          flex: 0 0 auto;
        }

        .how-demo-title-line-left {
          background: linear-gradient(90deg, transparent, rgba(232,119,34,0.5));
        }

        .how-demo-title-line-right {
          background: linear-gradient(90deg, rgba(232,119,34,0.5), transparent);
        }

        @media (max-width: 640px) {
          .how-demo-title-line {
            width: 28px;
          }
        }
      `}</style>
    </motion.div>
  );
}
