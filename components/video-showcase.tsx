"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

type TabKey = "doctors" | "patients" | "government" | "nurses" | "paramedic" | "dermatologist";

/* ─── Inline SVG icons ─────────────────────────────────────── */

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

/* ─── Tab data ─────────────────────────────────────────────── */

const TABS: { key: TabKey; label: string }[] = [
  { key: "doctors", label: "For Doctors" },
  { key: "nurses", label: "For Home Nurses" },
  { key: "paramedic", label: "For Paramedic" },
  { key: "dermatologist", label: "For Dermatologist" },
];

/* ─── Main component ───────────────────────────────────────── */

export default function VideoShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [activeTab, setActiveTab] = useState<TabKey>("doctors");

  return (
    <section
      id="video-showcase"
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
            See it in <span className="brand-gradient">Action</span>
          </h2>
          <p
            className="text-lg max-w-xl mx-auto"
            style={{
              fontFamily: "var(--font-dm-sans)",
              color: "var(--text-muted)",
            }}
          >
            Watch how DocGlasses transforms workflows for every medical professional.
          </p>
        </motion.div>

        {/* ── Tab bar ── */}
        <motion.div
          className="flex justify-center mb-12 w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        >
          <div
            className="flex overflow-x-auto items-center"
            style={{
              background: "var(--glass-bg)",
              border: "1px solid var(--glass-border)",
              borderRadius: "9999px",
              padding: "6px",
              gap: "4px",
              maxWidth: "100%",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {TABS.map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  style={{
                    position: "relative",
                    borderRadius: "9999px",
                    padding: "10px 22px",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    whiteSpace: "nowrap",
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
          {activeTab === "doctors" && (
            <motion.div
              key="doctors-video"
              initial={{ opacity: 0, scale: 0.95, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -16 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex justify-center w-full"
            >
              <div
                className="w-full max-w-4xl"
                style={{
                  aspectRatio: "16/9",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
                  border: "1px solid var(--glass-border)",
                  background: "var(--glass-bg)",
                }}
              >
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/peLoLnxYq2k?si=2Zl-cWW8UltNcgJ4"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          )}

          {activeTab === "nurses" && (
            <motion.div
              key="nurses-video"
              initial={{ opacity: 0, scale: 0.95, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -16 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex justify-center w-full"
            >
              <div
                className="w-full max-w-4xl"
                style={{
                  aspectRatio: "16/9",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
                  border: "1px solid var(--glass-border)",
                  background: "var(--glass-bg)",
                }}
              >
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/jn5xFqpDHGI?si=Jb3MVLtlpA3YhYxD"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          )}

          {(activeTab === "paramedic" || activeTab === "dermatologist") && (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex justify-center w-full"
            >
              <div
                className="glass-card text-center flex flex-col items-center justify-center p-12"
                style={{
                  width: "100%",
                  maxWidth: "600px",
                  borderRadius: "16px",
                  gap: "1.25rem",
                  border: "1px solid var(--glass-border)",
                  background: "var(--glass-bg)",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
                }}
              >
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: "16px",
                    background: "var(--brand-glow)",
                    border: "1px solid var(--brand-border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "0.5rem"
                  }}
                >
                  <IconLearning />
                </div>
                <h3
                  className="text-2xl font-bold"
                  style={{
                    fontFamily: "var(--font-syne)",
                    color: "var(--text-primary)",
                  }}
                >
                  Features for {activeTab === "paramedic" ? "Paramedics" : "Dermatologists"}
                </h3>
                <div
                  style={{
                    display: "inline-block",
                    padding: "6px 16px",
                    borderRadius: "999px",
                    background: "rgba(236, 156, 87, 0.15)",
                    border: "1px solid var(--brand)",
                  }}
                >
                  <span
                    className="font-semibold text-sm uppercase tracking-wide"
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      color: "var(--brand)",
                    }}
                  >
                    Coming Soon
                  </span>
                </div>
                <p
                  className="text-[1.05rem] leading-relaxed max-w-sm mt-2"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    color: "var(--text-muted)",
                  }}
                >
                  We are building tailored modules to perfectly fit this specialized workflow. Stay tuned!
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
