"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ─────────────────────────────────────────────
   TYPES
 ───────────────────────────────────────────── */
interface TeamMember {
  name: string;
  role: string;
  company?: string;
  bio: string;
  photoUrl?: string;
  linkedin: string;
  category: "Leadership" | "Advisory";
}

/* ─────────────────────────────────────────────
   DATA
 ───────────────────────────────────────────── */
const TEAM: TeamMember[] = [
  {
    name: "Danish Ahmed",
    role: "CEO & Founder",
    company: "Healthtrip",
    bio: "Serial pioneer who has built multiple industry defining companies generating over $100 million in revenues.",
    photoUrl:
      "https://healthpaths.ai/_next/image?url=%2Fimages%2Fteam%2Fdanish-ahmed.jpeg&w=256&q=75",
    linkedin: "https://www.linkedin.com/in/danishyebhi/",
    category: "Leadership",
  },
  {
    name: "Obaidullah Junaid",
    role: "Chief Operating Officer",
    company: "DocGlasses",
    bio: "A pioneer in health travel who led India's top hospital and first government certified health travel company.",
    photoUrl: "https://healthpaths.ai/images/team/obaid.svg",
    linkedin: "https://www.linkedin.com/in/obaidullah-junaid-42874275",
    category: "Leadership",
  },
  {
    name: "Ashok Gautam",
    role: "Chief Technology Officer",
    company: "DocGlasses",
    bio: "AI expert who led technology at top media and community platforms with 800 million site visitors.",
    photoUrl:
      "https://healthpaths.ai/_next/image?url=%2Fimages%2Fteam%2Fashok-pundit.jpeg&w=256&q=75",
    linkedin: "https://www.linkedin.com/in/ashok-gautam-0a6202387/",
    category: "Leadership",
  },
  {
    name: "Rajwant Singh",
    role: "Advisory Board",
    bio: "Strategic advisor with extensive experience in global health initiatives and technology scaling.",
    linkedin: "https://www.linkedin.com/in/rajwant-singh-68b46564/",
    category: "Advisory",
    photoUrl: "/images/team/rajwant.png",
  },
  {
    name: "Jafar Iqbal",
    role: "Strategy & Growth",
    bio: "Focused on operations and strategic development for transformative healthcare technology.",
    linkedin: "https://www.linkedin.com/in/mohd-jafar-iqbal-khan-8b833645/",
    category: "Advisory",
    photoUrl: "/images/team/jafar.png",
  },
  {
    name: "Stuti Sharma",
    role: "Senior Advisor",
    bio: "Expert in healthcare policy and public-private partnerships for large-scale medical deployments.",
    linkedin: "https://www.linkedin.com/in/stuti-sharma-94057122b",
    category: "Advisory",
    photoUrl: "/images/team/stuti.png",
  },
];

/* ─────────────────────────────────────────────
   COMPONENTS
 ───────────────────────────────────────────── */

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Photo Container */}
      <div className="relative mb-6">
        <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-white/5 bg-navy-card/50 shadow-xl">
          {member.photoUrl ? (
            <img
              src={member.photoUrl}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-brand/10 text-brand font-syne text-3xl font-bold">
              {member.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
          )}
        </div>
        {/* LinkedIn Badge */}
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-1 right-1 w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#0077b5] shadow-lg hover:scale-110 transition-transform"
        >
          <LinkedInIcon />
        </a>
      </div>

      {/* Info */}
      <h3 className="text-xl font-bold text-white mb-1 font-syne">
        {member.name}
      </h3>
      <p className="text-brand font-semibold text-sm mb-2 font-dm">
        {member.role}{" "}
        {member.company && (
          <span className="text-white/40 font-normal">at {member.company}</span>
        )}
      </p>
    </div>
  );
}

export default function Management() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const leadership = TEAM.filter((m) => m.category === "Leadership");
  const advisory = TEAM.filter((m) => m.category === "Advisory");

  return (
    <section
      id="management"
      className="py-24 bg-navy-deep relative overflow-hidden"
    >
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(15,118,110,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-syne brand-gradient">
            Management Team
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto font-dm">
            A global team with multiple successful startups and proven
            credentials.
          </p>
        </motion.div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">
          {leadership.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: idx * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <MemberCard member={member} />
            </motion.div>
          ))}
        </div>

        {/* Advisory Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 text-white/60 text-xs font-semibold uppercase tracking-wider mb-4">
            Advisory Board
          </div>
        </motion.div>

        {/* Advisory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {advisory.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.5 + idx * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <MemberCard member={member} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
