"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const P = {
  report: "M 180,105 C 242,105 272,230 308,230",
  idcard: "M 180,230 L 308,230",
  audio: "M 180,355 C 242,355 272,230 308,230",
  toEngine: "M 532,230 L 622,230",
  toEHR: "M 820,230 C 862,230 862,133 902,133",
  toInsight: "M 820,230 C 862,230 862,338 902,338",
} as const;

// function Dot({
//   id,
//   dur,
//   begin,
//   r = 4,
//   op = 0.95,
// }: {
//   id: string;
//   dur: string;
//   begin: string;
//   r?: number;
//   op?: number;
// }) {
//   const pathRef = `#pt-${id}`;

//   return (
//     <circle r={r} fill="#0f766e" opacity={op}>
//       <animateMotion dur={dur} repeatCount="indefinite" begin={begin}>
//         <mpath href={pathRef} xlinkHref={pathRef} />
//       </animateMotion>
//     </circle>
//   );
// }

function TravelDot({
  id,
  dur,
  begin,
  r = 4,
  op = 0.95,
}: {
  id: keyof typeof P;
  dur: string;
  begin: string;
  r?: number;
  op?: number;
}) {
  const circleRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const circle = circleRef.current;
    const path = document.getElementById(`pt-${id}`) as SVGPathElement | null;

    if (!circle || !path) return;

    const totalLength = path.getTotalLength();
    const durationMs = Math.max(parseFloat(dur) * 1000, 1);

    // begin="0s" -> 0
    // begin="-1.3s" -> start 1.3s into the loop
    const beginSeconds = parseFloat(begin);
    const offsetMs = Number.isNaN(beginSeconds)
      ? 0
      : Math.abs(beginSeconds) * 1000;

    let rafId = 0;
    const startedAt = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startedAt + offsetMs;
      const loopTime = ((elapsed % durationMs) + durationMs) % durationMs;
      const progress = loopTime / durationMs;

      const point = path.getPointAtLength(totalLength * progress);

      circle.setAttribute("cx", `${point.x}`);
      circle.setAttribute("cy", `${point.y}`);

      // mimic your old fade in / fade out feel
      let nextOpacity = op;
      if (progress < 0.08) {
        nextOpacity = op * (progress / 0.08);
      } else if (progress > 0.92) {
        nextOpacity = op * ((1 - progress) / 0.08);
      }

      circle.setAttribute("opacity", `${Math.max(0, nextOpacity)}`);

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(rafId);
  }, [id, dur, begin, op]);

  return <circle ref={circleRef} r={r} fill="#0f766e" opacity={0} />;
}

export default function PatentTech() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      ref={ref}
      style={{ padding: "0 0 80px", position: "relative", overflow: "hidden" }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: "70%",
          paddingBottom: "40%",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse at center,rgba(15,118,110,0.07) 0%,transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span
            className="inline-flex items-center gap-2 font-dm text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6"
            style={{
              background: "rgba(15,118,110,0.08)",
              border: "1px solid rgba(15,118,110,0.35)",
              color: "var(--brand)",
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "var(--brand)",
                display: "inline-block",
                animation: "recPulse 1.5s ease-in-out infinite",
              }}
            />
            Patent Pending
          </span>
          <h2
            className="font-syne font-bold leading-tight"
            style={{
              fontSize: "clamp(1.8rem,4vw,3rem)",
              color: "var(--text-primary)",
            }}
          >
            A Unique Patent Pending{" "}
            <span className="brand-gradient">Technology</span>
          </h2>
          <p
            className="font-dm text-base mt-5 max-w-2xl mx-auto"
            style={{ color: "var(--text-muted)", lineHeight: 1.75 }}
          >
            DocGlasses&apos;s AI engine simultaneously processes medical records,
            patient identity, and live consultation audio — delivering real-time
            clinical intelligence directly to the attending doctor via AI smart
            glasses.
          </p>
        </motion.div>

        {/* Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.22 }}
          style={{
            background: "rgba(255,255,255,0.025)",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: 20,
            padding: "6px 8px 8px",
            position: "relative",
            overflowX: "auto",
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: 20,
              pointerEvents: "none",
              background:
                "radial-gradient(ellipse at 50% 50%,rgba(15,118,110,0.04) 0%,transparent 60%)",
            }}
          />

          <svg
            viewBox="0 0 1060 468"
            style={{ display: "block", minWidth: 720, width: "100%" }}
            role="img"
            aria-label="DocGlasses AI technology flow diagram"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <defs>
              {/* {(Object.entries(P) as [string, string][]).map(([k, d]) => (
                <path key={k} id={`pt-${k}`} d={d} fill="none" />
              ))} */}
              <filter id="pt-glow" x="-60%" y="-60%" width="220%" height="220%">
                <feGaussianBlur stdDeviation="7" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <linearGradient id="pt-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(15,118,110,0.14)" />
                <stop offset="100%" stopColor="rgba(10,15,30,0.0)" />
              </linearGradient>
            </defs>

            {/* Section labels */}
            <text
              x={95}
              y={42}
              textAnchor="middle"
              fontFamily="system-ui,sans-serif"
              fontSize={9}
              fontWeight={700}
              fill="#475569"
              letterSpacing={2}
            >
              INPUTS
            </text>
            <text
              x={420}
              y={42}
              textAnchor="middle"
              fontFamily="system-ui,sans-serif"
              fontSize={9}
              fontWeight={700}
              fill="#475569"
              letterSpacing={2}
            >
              AI GLASSES
            </text>
            <text
              x={721}
              y={42}
              textAnchor="middle"
              fontFamily="system-ui,sans-serif"
              fontSize={9}
              fontWeight={700}
              fill="#475569"
              letterSpacing={2}
            >
              AI ENGINE
            </text>
            <text
              x={978}
              y={42}
              textAnchor="middle"
              fontFamily="system-ui,sans-serif"
              fontSize={9}
              fontWeight={700}
              fill="#475569"
              letterSpacing={2}
            >
              OUTPUTS
            </text>

            {/* Divider lines */}
            {[258, 590, 882].map((x) => (
              <line
                key={x}
                x1={x}
                y1={52}
                x2={x}
                y2={430}
                stroke="rgba(71,85,105,0.12)"
                strokeWidth={1}
                strokeDasharray="3 5"
              />
            ))}

            {/* Connector paths */}
            {/* {(Object.entries(P) as [string, string][]).map(([k, d]) => (
              <path
                key={k}
                d={d}
                fill="none"
                stroke="rgba(15,118,110,0.22)"
                strokeWidth={1.5}
                strokeDasharray="5 5"
              />
            ))} */}
            {(Object.entries(P) as [keyof typeof P, string][]).map(([k, d]) => (
              <path
                key={k}
                id={`pt-${k}`}
                d={d}
                fill="none"
                stroke="rgba(15,118,110,0.22)"
                strokeWidth={1.5}
                strokeDasharray="5 5"
              />
            ))}

            {/* Travelling dots */}
            {/* <Dot id="report" dur="2.6s" begin="0s" />
            <Dot id="report" dur="2.6s" begin="-1.3s" r={2.5} op={0.35} />
            <Dot id="idcard" dur="1.8s" begin="-0.5s" />
            <Dot id="idcard" dur="1.8s" begin="-1.4s" r={2.5} op={0.35} />
            <Dot id="audio" dur="2.6s" begin="-0.8s" />
            <Dot id="audio" dur="2.6s" begin="-2.1s" r={2.5} op={0.35} />
            <Dot id="toEngine" dur="1.2s" begin="0s" />
            <Dot id="toEngine" dur="1.2s" begin="-0.6s" r={2.5} op={0.35} />
            <Dot id="toEHR" dur="1.6s" begin="-0.2s" />
            <Dot id="toEHR" dur="1.6s" begin="-1.0s" r={2.5} op={0.35} />
            <Dot id="toInsight" dur="1.6s" begin="-0.6s" />
            <Dot id="toInsight" dur="1.6s" begin="-1.3s" r={2.5} op={0.35} /> */}
            {/* Travelling dots */}
            <TravelDot id="report" dur="2.6s" begin="0s" />
            <TravelDot id="report" dur="2.6s" begin="-1.3s" r={2.5} op={0.35} />
            <TravelDot id="idcard" dur="1.8s" begin="-0.5s" />
            <TravelDot id="idcard" dur="1.8s" begin="-1.4s" r={2.5} op={0.35} />
            <TravelDot id="audio" dur="2.6s" begin="-0.8s" />
            <TravelDot id="audio" dur="2.6s" begin="-2.1s" r={2.5} op={0.35} />
            <TravelDot id="toEngine" dur="1.2s" begin="0s" />
            <TravelDot
              id="toEngine"
              dur="1.2s"
              begin="-0.6s"
              r={2.5}
              op={0.35}
            />
            <TravelDot id="toEHR" dur="1.6s" begin="-0.2s" />
            <TravelDot id="toEHR" dur="1.6s" begin="-1.0s" r={2.5} op={0.35} />
            <TravelDot id="toInsight" dur="1.6s" begin="-0.6s" />
            <TravelDot
              id="toInsight"
              dur="1.6s"
              begin="-1.3s"
              r={2.5}
              op={0.35}
            />

            {/* ── INPUT CARDS ── */}
            {/* Medical Report */}
            <rect
              x={10}
              y={65}
              width={170}
              height={80}
              rx={12}
              fill="rgba(11,17,32,0.95)"
              stroke="rgba(15,118,110,0.35)"
              strokeWidth={1.2}
            />
            <circle
              cx={44}
              cy={105}
              r={19}
              fill="rgba(15,118,110,0.1)"
              stroke="rgba(15,118,110,0.2)"
              strokeWidth={1}
            />
            <rect
              x={36}
              y={93}
              width={14}
              height={18}
              rx={2}
              stroke="#0f766e"
              strokeWidth={1.5}
              fill="rgba(15,118,110,0.06)"
            />
            <line
              x1={39}
              y1={99}
              x2={47}
              y2={99}
              stroke="#0f766e"
              strokeWidth={1.2}
              strokeLinecap="round"
            />
            <line
              x1={39}
              y1={103}
              x2={47}
              y2={103}
              stroke="#0f766e"
              strokeWidth={1.2}
              strokeLinecap="round"
            />
            <line
              x1={39}
              y1={107}
              x2={44}
              y2={107}
              stroke="#0f766e"
              strokeWidth={1.2}
              strokeLinecap="round"
            />
            <text
              x={70}
              y={99}
              fontFamily="system-ui,sans-serif"
              fontSize={11}
              fontWeight={700}
              fill="#F1F5F9"
            >
              Medical Report
            </text>
            <text
              x={70}
              y={114}
              fontFamily="system-ui,sans-serif"
              fontSize={9.5}
              fill="#94A3B8"
            >
              X-rays · Lab results
            </text>
            <circle cx={180} cy={105} r={3.5} fill="#0f766e" opacity={0.8} />

            {/* Patient ID */}
            <rect
              x={10}
              y={190}
              width={170}
              height={80}
              rx={12}
              fill="rgba(11,17,32,0.95)"
              stroke="rgba(15,118,110,0.35)"
              strokeWidth={1.2}
            />
            <circle
              cx={44}
              cy={230}
              r={19}
              fill="rgba(15,118,110,0.1)"
              stroke="rgba(15,118,110,0.2)"
              strokeWidth={1}
            />
            <rect
              x={33}
              y={220}
              width={18}
              height={13}
              rx={2}
              stroke="#0f766e"
              strokeWidth={1.5}
              fill="rgba(15,118,110,0.06)"
            />
            <circle cx={37} cy={225} r={2.5} fill="#0f766e" opacity={0.7} />
            <line
              x1={41}
              y1={224}
              x2={49}
              y2={224}
              stroke="#0f766e"
              strokeWidth={1.1}
              strokeLinecap="round"
            />
            <line
              x1={41}
              y1={227}
              x2={47}
              y2={227}
              stroke="#0f766e"
              strokeWidth={1.1}
              strokeLinecap="round"
            />
            <text
              x={70}
              y={224}
              fontFamily="system-ui,sans-serif"
              fontSize={11}
              fontWeight={700}
              fill="#F1F5F9"
            >
              Patient ID / ABHA
            </text>
            <text
              x={70}
              y={239}
              fontFamily="system-ui,sans-serif"
              fontSize={9.5}
              fill="#94A3B8"
            >
              Health records · History
            </text>
            <circle cx={180} cy={230} r={3.5} fill="#0f766e" opacity={0.8} />

            {/* Consultation Audio */}
            <rect
              x={10}
              y={315}
              width={170}
              height={80}
              rx={12}
              fill="rgba(11,17,32,0.95)"
              stroke="rgba(15,118,110,0.35)"
              strokeWidth={1.2}
            />
            <circle
              cx={44}
              cy={355}
              r={19}
              fill="rgba(15,118,110,0.1)"
              stroke="rgba(15,118,110,0.2)"
              strokeWidth={1}
            />
            {[0, 3, 6, 9, 12, 15, 18].map((ox, i) => {
              const heights = [0, 12, 22, 14, 18, 10, 0];
              const h = heights[i];
              return (
                <line
                  key={ox}
                  x1={32 + ox}
                  y1={355 - h / 2}
                  x2={32 + ox}
                  y2={355 + h / 2}
                  stroke="#0f766e"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              );
            })}
            <text
              x={70}
              y={349}
              fontFamily="system-ui,sans-serif"
              fontSize={11}
              fontWeight={700}
              fill="#F1F5F9"
            >
              Consultation Audio
            </text>
            <text
              x={70}
              y={364}
              fontFamily="system-ui,sans-serif"
              fontSize={9.5}
              fill="#94A3B8"
            >
              Real-time voice capture
            </text>
            <circle cx={180} cy={355} r={3.5} fill="#0f766e" opacity={0.8} />

            {/* ── AI GLASSES ── */}
            <g filter="url(#pt-glow)">
              <rect
                x={308}
                y={138}
                width={224}
                height={184}
                rx={16}
                fill="rgba(10,15,30,0.97)"
                stroke="#0f766e"
                strokeWidth={1.5}
                strokeOpacity={0.65}
              />
              <rect
                x={308}
                y={138}
                width={224}
                height={184}
                rx={16}
                fill="url(#pt-grad)"
                opacity={0.7}
              />
            </g>
            {/* REC */}
            <circle cx={319} cy={152} r={5} fill="#ef4444">
              <animate
                attributeName="opacity"
                values="1;0.25;1"
                dur="1.2s"
                repeatCount="indefinite"
              />
            </circle>
            <text
              x={327}
              y={156}
              fontFamily="system-ui,sans-serif"
              fontSize={9}
              fontWeight={700}
              fill="#ef4444"
            >
              REC
            </text>
            {/* Glasses icon */}
            <g transform="translate(350,168)">
              <rect
                x={63}
                y={-10}
                width={4}
                height={14}
                rx={1.5}
                fill="#0f766e"
              />
              <rect
                x={59}
                y={-6}
                width={12}
                height={4}
                rx={1.5}
                fill="#0f766e"
              />
              <rect
                x={4}
                y={12}
                width={52}
                height={36}
                rx={18}
                stroke="#0f766e"
                strokeWidth={2.5}
                fill="rgba(15,118,110,0.08)"
              />
              <rect
                x={74}
                y={12}
                width={52}
                height={36}
                rx={18}
                stroke="#0f766e"
                strokeWidth={2.5}
                fill="rgba(15,118,110,0.08)"
              />
              <path
                d="M 56 30 Q 65 22 74 30"
                stroke="#0f766e"
                strokeWidth={2.5}
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M 4 30 L -5 30"
                stroke="#0f766e"
                strokeWidth={2.5}
                strokeLinecap="round"
              />
              <path
                d="M 126 30 L 135 30"
                stroke="#0f766e"
                strokeWidth={2.5}
                strokeLinecap="round"
              />
              <circle
                cx={30}
                cy={30}
                r={5}
                fill="rgba(15,118,110,0.45)"
                stroke="#0f766e"
                strokeWidth={0.5}
              >
                <animate
                  attributeName="opacity"
                  values="0.45;0.95;0.45"
                  dur="1.6s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle
                cx={100}
                cy={30}
                r={5}
                fill="rgba(15,118,110,0.45)"
                stroke="#0f766e"
                strokeWidth={0.5}
              >
                <animate
                  attributeName="opacity"
                  values="0.95;0.45;0.95"
                  dur="1.6s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
            <text
              x={420}
              y={268}
              textAnchor="middle"
              fontFamily="system-ui,sans-serif"
              fontSize={12}
              fontWeight={700}
              fill="#F1F5F9"
            >
              AI Smart Glasses
            </text>
            <text
              x={420}
              y={285}
              textAnchor="middle"
              fontFamily="system-ui,sans-serif"
              fontSize={9.5}
              fill="#94A3B8"
            >
              DocGlasses Vision AI
            </text>
            <circle cx={308} cy={230} r={3.5} fill="#0f766e" opacity={0.8} />
            <circle cx={532} cy={230} r={3.5} fill="#0f766e" opacity={0.8} />

            {/* ── DocGlasses AI ENGINE ── */}
            <rect
              x={622}
              y={113}
              width={198}
              height={234}
              rx={16}
              fill="rgba(10,15,30,0.97)"
              stroke="rgba(15,118,110,0.55)"
              strokeWidth={1.5}
            />
            <rect
              x={622}
              y={113}
              width={198}
              height={234}
              rx={16}
              fill="url(#pt-grad)"
            />
            <circle cx={721} cy={172} r={35} fill="rgba(15,118,110,0.05)">
              <animate
                attributeName="r"
                values="28;42;28"
                dur="2.4s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="fillOpacity"
                values="0.05;0;0.05"
                dur="2.4s"
                repeatCount="indefinite"
              />
            </circle>
            <circle
              cx={721}
              cy={172}
              r={28}
              fill="rgba(15,118,110,0.12)"
              stroke="rgba(15,118,110,0.35)"
              strokeWidth={1.2}
            />
            <g transform="translate(706,157)">
              <polygon
                points="15,0 28,7.5 28,22.5 15,30 2,22.5 2,7.5"
                stroke="#0f766e"
                strokeWidth={1.5}
                fill="none"
                strokeLinejoin="round"
              />
              <circle cx={15} cy={15} r={4} fill="#0f766e" opacity={0.8} />
              <line
                x1={15}
                y1={8}
                x2={15}
                y2={11}
                stroke="#0f766e"
                strokeWidth={1.2}
                strokeLinecap="round"
              />
              <line
                x1={15}
                y1={19}
                x2={15}
                y2={22}
                stroke="#0f766e"
                strokeWidth={1.2}
                strokeLinecap="round"
              />
              <line
                x1={8}
                y1={15}
                x2={11}
                y2={15}
                stroke="#0f766e"
                strokeWidth={1.2}
                strokeLinecap="round"
              />
              <line
                x1={19}
                y1={15}
                x2={22}
                y2={15}
                stroke="#0f766e"
                strokeWidth={1.2}
                strokeLinecap="round"
              />
            </g>
            <text
              x={721}
              y={220}
              textAnchor="middle"
              fontFamily="system-ui,sans-serif"
              fontSize={12}
              fontWeight={700}
              fill="#F1F5F9"
            >
              DocGlasses AI Engine
            </text>
            <rect
              x={650}
              y={230}
              width={142}
              height={24}
              rx={7}
              fill="rgba(15,118,110,0.12)"
              stroke="rgba(15,118,110,0.3)"
              strokeWidth={1}
            />
            <circle cx={665} cy={242} r={3.5} fill="#0f766e">
              <animate
                attributeName="opacity"
                values="1;0.3;1"
                dur="1.4s"
                repeatCount="indefinite"
              />
            </circle>
            <text
              x={674}
              y={246}
              fontFamily="system-ui,sans-serif"
              fontSize={9.5}
              fontWeight={600}
              fill="#0f766e"
            >
              Patent Applied
            </text>
            <text
              x={721}
              y={272}
              textAnchor="middle"
              fontFamily="system-ui,sans-serif"
              fontSize={9}
              fill="#94A3B8"
            >
              Global Health Holdings, USA
            </text>
            <rect
              x={637}
              y={283}
              width={168}
              height={22}
              rx={5}
              fill="rgba(34,197,94,0.06)"
              stroke="rgba(34,197,94,0.15)"
              strokeWidth={1}
            />
            <circle cx={651} cy={294} r={3.5} fill="#22c55e">
              <animate
                attributeName="opacity"
                values="1;0.3;1"
                dur="1.6s"
                repeatCount="indefinite"
              />
            </circle>
            <text
              x={660}
              y={298}
              fontFamily="system-ui,sans-serif"
              fontSize={9}
              fill="#94A3B8"
            >
              Processing in real-time
            </text>
            <circle cx={622} cy={230} r={3.5} fill="#0f766e" opacity={0.8} />
            <circle cx={820} cy={230} r={3.5} fill="#0f766e" opacity={0.8} />

            {/* ── EHR OUTPUT ── */}
            <rect
              x={902}
              y={90}
              width={153}
              height={86}
              rx={12}
              fill="rgba(11,17,32,0.95)"
              stroke="rgba(15,118,110,0.35)"
              strokeWidth={1.2}
            />
            <circle
              cx={931}
              cy={133}
              r={19}
              fill="rgba(15,118,110,0.1)"
              stroke="rgba(15,118,110,0.2)"
              strokeWidth={1}
            />
            <ellipse
              cx={931}
              cy={124}
              rx={9}
              ry={3.5}
              stroke="#0f766e"
              strokeWidth={1.4}
              fill="rgba(15,118,110,0.08)"
            />
            <path
              d="M 922 124 L 922 134 Q 922 138 931 138 Q 940 138 940 134 L 940 124"
              stroke="#0f766e"
              strokeWidth={1.4}
              fill="rgba(15,118,110,0.05)"
            />
            <path
              d="M 922 129 Q 922 133 931 133 Q 940 133 940 129"
              stroke="#0f766e"
              strokeWidth={1}
              fill="none"
            />
            <text
              x={956}
              y={127}
              fontFamily="system-ui,sans-serif"
              fontSize={11}
              fontWeight={700}
              fill="#F1F5F9"
            >
              EHR Update
            </text>
            <text
              x={956}
              y={142}
              fontFamily="system-ui,sans-serif"
              fontSize={9.5}
              fill="#94A3B8"
            >
              E-Shrust · ABHA
            </text>
            <circle cx={902} cy={133} r={3.5} fill="#0f766e" opacity={0.8} />

            {/* ── CLINICAL INSIGHTS OUTPUT ── */}
            <rect
              x={902}
              y={295}
              width={153}
              height={86}
              rx={12}
              fill="rgba(11,17,32,0.95)"
              stroke="rgba(15,118,110,0.35)"
              strokeWidth={1.2}
            />
            <circle
              cx={931}
              cy={338}
              r={19}
              fill="rgba(15,118,110,0.1)"
              stroke="rgba(15,118,110,0.2)"
              strokeWidth={1}
            />
            <circle
              cx={931}
              cy={332}
              r={7}
              stroke="#0f766e"
              strokeWidth={1.4}
              fill="none"
            />
            <path
              d="M 928 339 L 928 345 L 934 345 L 934 339"
              stroke="#0f766e"
              strokeWidth={1.4}
              strokeLinecap="round"
              fill="none"
            />
            <line
              x1={929}
              y1={342}
              x2={933}
              y2={342}
              stroke="#0f766e"
              strokeWidth={1}
              strokeLinecap="round"
            />
            <circle cx={931} cy={332} r={2.5} fill="#0f766e" opacity={0.8}>
              <animate
                attributeName="opacity"
                values="0.8;1;0.8"
                dur="1.8s"
                repeatCount="indefinite"
              />
            </circle>
            <text
              x={956}
              y={332}
              fontFamily="system-ui,sans-serif"
              fontSize={11}
              fontWeight={700}
              fill="#F1F5F9"
            >
              Clinical Insights
            </text>
            <text
              x={956}
              y={347}
              fontFamily="system-ui,sans-serif"
              fontSize={9.5}
              fill="#94A3B8"
            >
              Diagnosis · Next steps
            </text>
            <circle cx={902} cy={338} r={3.5} fill="#0f766e" opacity={0.8} />
          </svg>
        </motion.div>
      </div>
      <style>{`
  @keyframes recPulse {
    0%, 100% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.35);
      opacity: 0.55;
    }
  }
`}</style>
    </div>
  );
}
