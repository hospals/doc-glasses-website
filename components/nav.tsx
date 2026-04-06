"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Benefits", href: "#benefits" },
  { label: "Science", href: "#science" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    // Give AnimatePresence time to close before scrolling
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <>
      {/* ── NAV BAR ── */}
      <motion.nav
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition:
            "background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease",
          background: scrolled
            ? "color-mix(in srgb, var(--navy-deep) 85%, transparent)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(15, 118, 110, 0.25)"
            : "1px solid transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            {/* ── LEFT: Logo ── */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#home");
              }}
              className="flex-shrink-0 flex items-center"
              aria-label="DocGlasses — home"
            >
              <Image
                src="/docglasses-logo.png"
                alt="DocGlasses"
                width={160}
                height={40}
                priority
                style={{ width: "auto", height: "60px" }}
              />
            </a>

            {/* ── CENTER: Desktop links ── */}
            <div className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <NavLink key={link.href} link={link} onClick={handleNavClick} />
              ))}
            </div>

            {/* ── RIGHT: CTA + Hamburger ── */}
            <div className="flex items-center gap-4">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#contact");
                }}
                className="hidden sm:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold font-dm transition-all duration-300"
                style={{
                  background: "var(--brand)",
                  color: "#fff",
                  boxShadow: "0 0 0 rgba(15, 118, 110, 0)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                    "0 0 24px rgba(15, 118, 110, 0.55), 0 0 48px rgba(15, 118, 110, 0.2)";
                  (e.currentTarget as HTMLAnchorElement).style.transform =
                    "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                    "0 0 0 rgba(15, 118, 110, 0)";
                  (e.currentTarget as HTMLAnchorElement).style.transform =
                    "translateY(0)";
                }}
              >
                Request Demo
              </a>

              {/* Hamburger (mobile only) */}
              <button
                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg transition-colors"
                style={{ color: "var(--text-primary)" }}
                onClick={() => setMenuOpen((o) => !o)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* ── MOBILE FULL-SCREEN OVERLAY ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] as const }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 40,
              background:
                "color-mix(in srgb, var(--navy-deep) 97%, transparent)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "2.5rem",
            }}
          >
            {/* Decorative glow */}
            <div
              style={{
                position: "absolute",
                top: "20%",
                left: "50%",
                transform: "translateX(-50%)",
                width: 300,
                height: 300,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(15, 118, 110, 0.12) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />

            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: i * 0.07, duration: 0.3 }}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="font-dm font-semibold tracking-widest uppercase text-lg transition-colors duration-200"
                style={{ color: "var(--text-muted)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "var(--brand)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "var(--text-muted)";
                }}
              >
                {link.label}
              </motion.a>
            ))}

            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ delay: NAV_LINKS.length * 0.07, duration: 0.3 }}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}
              className="rounded-full px-8 py-3 text-base font-semibold font-dm mt-4"
              style={{ background: "var(--brand)", color: "#fff" }}
            >
              Request Demo
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ── Individual desktop nav link with animated underline ── */
function NavLink({
  link,
  onClick,
}: {
  link: { label: string; href: string };
  onClick: (href: string) => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={link.href}
      onClick={(e) => {
        e.preventDefault();
        onClick(link.href);
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative font-dm text-sm tracking-wider uppercase transition-colors duration-200"
      style={{ color: hovered ? "var(--brand)" : "var(--text-muted)" }}
    >
      {link.label}
      {/* Underline slide */}
      <motion.span
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        style={{
          position: "absolute",
          bottom: -2,
          left: 0,
          right: 0,
          height: 1.5,
          background: "var(--brand)",
          borderRadius: 2,
          transformOrigin: "left",
          display: "block",
        }}
      />
    </a>
  );
}
