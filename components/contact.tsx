"use client";

import { useState, FormEvent, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { submitContactForm } from "@/app/actions";
import { CheckCircle, XCircle, X } from "lucide-react";

/* ─────────────────────────────────────────────
   TYPES
───────────────────────────────────────────── */
interface FormData {
  fullName: string;
  organisation: string;
  designation: string;
  phone: string;
  email: string;
  stateCity: string;
  message: string;
}

type FieldKey = keyof FormData;

/* ─────────────────────────────────────────────
   REQUIRED FIELDS
───────────────────────────────────────────── */
const REQUIRED_FIELDS: FieldKey[] = [
  "fullName",
  "organisation",
  "email",
  "message",
];

/* ─────────────────────────────────────────────
   THEME DETECTION
───────────────────────────────────────────── */
function useIsLightTheme() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const root = document.documentElement;

    const update = () => {
      setIsLight(root.classList.contains("light-theme"));
    };

    update();

    const observer = new MutationObserver(update);
    observer.observe(root, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return isLight;
}

/* ─────────────────────────────────────────────
   FORM FIELD COMPONENT
───────────────────────────────────────────── */
interface FieldProps {
  label: string;
  id: FieldKey;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (id: FieldKey, value: string) => void;
  hasError: boolean;
  isLight: boolean;
  textarea?: boolean;
  rows?: number;
}

function Field({
  label,
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  hasError,
  isLight,
  textarea = false,
  rows = 4,
}: FieldProps) {
  const [focused, setFocused] = useState(false);

  const baseStyle: React.CSSProperties = {
    width: "100%",
    background: isLight ? "rgba(0,0,0,0.04)" : "rgba(255,255,255,0.04)",
    border: `1px solid ${
      hasError
        ? "rgba(239,68,68,0.6)"
        : focused
          ? "var(--brand)"
          : isLight
            ? "rgba(0,0,0,0.12)"
            : "rgba(255,255,255,0.1)"
    }`,
    borderRadius: 8,
    color: "var(--text-primary)",
    padding: "12px 16px",
    fontSize: 14,
    fontFamily: "var(--font-dm-sans), sans-serif",
    outline: "none",
    boxShadow: focused
      ? hasError
        ? "0 0 0 3px rgba(239,68,68,0.15)"
        : "0 0 0 3px rgba(15,118,110,0.15)"
      : "none",
    transition:
      "border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease",
    resize: textarea ? "vertical" : undefined,
  };

  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={id}
        className="font-dm text-xs uppercase tracking-wide"
        style={{ color: "var(--text-muted)" }}
      >
        {label}
        {REQUIRED_FIELDS.includes(id) && (
          <span style={{ color: "var(--brand)", marginLeft: 2 }}>*</span>
        )}
      </label>

      {textarea ? (
        <textarea
          id={id}
          rows={rows}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(id, e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={baseStyle}
          className={
            isLight ? "placeholder:text-slate-500" : "placeholder:text-white/40"
          }
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(id, e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={baseStyle}
          className={
            isLight ? "placeholder:text-slate-500" : "placeholder:text-white/40"
          }
        />
      )}

      {hasError && (
        <span style={{ color: "rgba(239,68,68,0.9)", fontSize: 12 }}>
          {id === "email" && value.trim()
            ? "Please enter a valid email"
            : "This field is required"}
        </span>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
   SUCCESS POPUP (MODAL)
───────────────────────────────────────────── */
function SuccessPopup({
  onClose,
  isLight,
}: {
  onClose: () => void;
  isLight: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        background: isLight ? "rgba(15,22,41,0.18)" : "rgba(8, 12, 26, 0.8)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{
          background: isLight ? "var(--navy-card)" : "var(--navy-deep)",
          border: `1px solid ${
            isLight ? "rgba(15,118,110,0.22)" : "rgba(15,118,110,0.35)"
          }`,
          borderRadius: 24,
          padding: "48px 32px",
          textAlign: "center",
          maxWidth: 480,
          width: "100%",
          position: "relative",
          boxShadow: isLight
            ? "0 24px 60px rgba(15,22,41,0.12), 0 0 24px rgba(15,118,110,0.06)"
            : "0 24px 60px rgba(0,0,0,0.5), 0 0 40px rgba(15,118,110,0.1)",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            color: "var(--text-muted)",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 8,
          }}
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            background: isLight
              ? "rgba(15,118,110,0.08)"
              : "rgba(15,118,110,0.12)",
            border: `2px solid ${
              isLight ? "rgba(15,118,110,0.24)" : "rgba(15,118,110,0.4)"
            }`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 28px",
            boxShadow: isLight
              ? "0 0 16px rgba(15,118,110,0.08)"
              : "0 0 24px rgba(15,118,110,0.2)",
          }}
        >
          <CheckCircle size={40} color="#0f766e" strokeWidth={1.5} />
        </div>

        <h3
          className="font-syne font-bold text-2xl mb-4"
          style={{ color: "var(--text-primary)" }}
        >
          Thank you for contacting DocGlasses!
        </h3>

        <p
          className="font-dm text-base mb-8"
          style={{ color: "var(--text-muted)" }}
        >
          Our team will reach out to you as soon as possible.
        </p>

        <button
          onClick={onClose}
          className="font-syne font-bold"
          style={{
            width: "100%",
            padding: "14px 28px",
            background: "var(--brand)",
            color: "#fff",
            border: "none",
            borderRadius: 9999,
            cursor: "pointer",
            fontSize: 15,
          }}
        >
          Got it
        </button>
      </motion.div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   ERROR TOAST
───────────────────────────────────────────── */
function ErrorToast({
  message,
  onClose,
  isLight,
}: {
  message: string;
  onClose: () => void;
  isLight: boolean;
}) {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 40, scale: 0.9 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 40, scale: 0.9 }}
      style={{
        position: "fixed",
        bottom: 32,
        right: 32,
        zIndex: 200,
        background: isLight
          ? "rgba(255,255,255,0.96)"
          : "rgba(8, 12, 26, 0.95)",
        border: "1px solid rgba(239, 68, 68, 0.5)",
        borderRadius: 12,
        padding: "16px 20px",
        display: "flex",
        alignItems: "center",
        gap: 12,
        maxWidth: 360,
        boxShadow: isLight
          ? "0 12px 40px rgba(15,22,41,0.12), 0 0 20px rgba(239,68,68,0.06)"
          : "0 12px 40px rgba(0,0,0,0.4), 0 0 20px rgba(239, 68, 68, 0.1)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <XCircle size={20} color="#EF4444" />
      <div className="flex-1">
        <p
          className="font-dm text-sm font-medium"
          style={{ color: "var(--text-primary)" }}
        >
          Submission Failed
        </p>
        <p
          className="font-dm text-xs mt-0.5"
          style={{ color: "var(--text-muted)" }}
        >
          {message}
        </p>
      </div>
      <button
        onClick={onClose}
        style={{
          background: "none",
          border: "none",
          color: isLight ? "rgba(15,22,41,0.4)" : "rgba(255,255,255,0.4)",
          cursor: "pointer",
          padding: 4,
          marginLeft: 4,
        }}
      >
        <X size={16} />
      </button>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   EMAIL ICON
───────────────────────────────────────────── */
function EmailIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

/* ─────────────────────────────────────────────
   CONTACT SECTION — MAIN EXPORT
───────────────────────────────────────────── */
export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mountedRef = useRef(true);
  const isLight = useIsLightTheme();

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    organisation: "",
    designation: "",
    phone: "",
    email: "",
    stateCity: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<Record<FieldKey, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);

  function handleChange(id: FieldKey, value: string) {
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (errors[id]) {
      setErrors((prev) => ({ ...prev, [id]: false }));
    }
  }

  function validate(): boolean {
    const newErrors: Partial<Record<FieldKey, boolean>> = {};
    let valid = true;

    REQUIRED_FIELDS.forEach((field) => {
      if (!formData[field].trim()) {
        newErrors[field] = true;
        valid = false;
      }
    });

    if (
      formData.email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = true;
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const result = await submitContactForm(formData);

      if (!mountedRef.current) return;

      if (result.success) {
        setSubmitted(true);
        setFormData({
          fullName: "",
          organisation: "",
          designation: "",
          phone: "",
          email: "",
          stateCity: "",
          message: "",
        });
      } else {
        const msg = result.error || "Failed to send request. Please try again.";
        setSubmitError(msg);
        setShowToast(true);
      }
    } catch {
      if (mountedRef.current) {
        const msg = "An unexpected error occurred. Please try again.";
        setSubmitError(msg);
        setShowToast(true);
      }
    } finally {
      if (mountedRef.current) {
        setIsSubmitting(false);
      }
    }
  }

  const headerVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1] as const,
        delay: 0.15,
      },
    },
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden"
      style={{ background: "var(--navy-deep)", padding: "50px 0" }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-10%",
          right: "-10%",
          width: "50vw",
          height: "50vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(15,118,110,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={headerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-14"
        >
          <span
            className="inline-flex items-center gap-2 font-dm text-xs font-semibold tracking-wider uppercase px-4 py-2 rounded-full mb-5"
            style={{
              background: "rgba(15,118,110,0.08)",
              border: "1px solid var(--brand-border)",
              color: "var(--brand)",
            }}
          >
            Get in Touch
          </span>

          <h2
            className="font-syne font-bold leading-tight"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.75rem)",
              color: "var(--text-primary)",
            }}
          >
            Partner <span className="brand-gradient">With Us</span>
          </h2>

          <p
            className="font-dm text-base mt-4 max-w-lg mx-auto"
            style={{ color: "var(--text-muted)" }}
          >
            Request a pilot program, schedule a presentation, or reach out with
            questions.
          </p>
        </motion.div>

        <motion.div
          variants={formVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-2xl mx-auto"
        >
          <div
            style={{
              background: "var(--glass-bg)",
              border: "1px solid var(--glass-border)",
              borderRadius: 20,
              padding: "36px 32px",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              boxShadow: isLight ? "0 20px 40px rgba(15,22,41,0.06)" : "none",
            }}
          >
            <div
              style={{
                height: 2,
                background:
                  "linear-gradient(90deg, transparent, var(--brand), var(--brand-light), transparent)",
                borderRadius: "1px",
                marginBottom: 28,
                opacity: 0.7,
              }}
            />

            <form onSubmit={handleSubmit} noValidate>
              <div className="flex flex-col gap-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Field
                    label="Full Name"
                    id="fullName"
                    placeholder="Dr. Ravi Shankar"
                    value={formData.fullName}
                    onChange={handleChange}
                    hasError={!!errors.fullName}
                    isLight={isLight}
                  />
                  <Field
                    label="Organisation / Department"
                    id="organisation"
                    placeholder="PHC, Lucknow District"
                    value={formData.organisation}
                    onChange={handleChange}
                    hasError={!!errors.organisation}
                    isLight={isLight}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Field
                    label="Designation"
                    id="designation"
                    placeholder="Chief Medical Officer"
                    value={formData.designation}
                    onChange={handleChange}
                    hasError={!!errors.designation}
                    isLight={isLight}
                  />
                  <Field
                    label="Phone"
                    id="phone"
                    type="tel"
                    placeholder="+91 98XXX XXXXX"
                    value={formData.phone}
                    onChange={handleChange}
                    hasError={!!errors.phone}
                    isLight={isLight}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Field
                    label="Email"
                    id="email"
                    type="email"
                    placeholder="doctor@gov.in"
                    value={formData.email}
                    onChange={handleChange}
                    hasError={!!errors.email}
                    isLight={isLight}
                  />
                  <Field
                    label="State / City"
                    id="stateCity"
                    placeholder="e.g. Maharashtra, Mumbai"
                    value={formData.stateCity}
                    onChange={handleChange}
                    hasError={!!errors.stateCity}
                    isLight={isLight}
                  />
                </div>

                <Field
                  label="Message"
                  id="message"
                  placeholder="Tell us about your healthcare facility and what you're looking to achieve with DocGlasses..."
                  value={formData.message}
                  onChange={handleChange}
                  hasError={!!errors.message}
                  isLight={isLight}
                  textarea
                  rows={4}
                />

                {submitError && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    style={{
                      padding: "10px 14px",
                      borderRadius: 8,
                      background: "rgba(239,68,68,0.1)",
                      border: "1px solid rgba(239,68,68,0.3)",
                      color: "rgba(239,68,68,0.9)",
                      fontSize: 13,
                      textAlign: "center",
                    }}
                  >
                    {submitError}
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{
                    boxShadow:
                      "0 0 30px rgba(15,118,110,0.5), 0 0 60px rgba(15,118,110,0.2)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    width: "100%",
                    padding: "16px 32px",
                    background: isSubmitting
                      ? "rgba(15,118,110,0.7)"
                      : "var(--brand)",
                    color: "#fff",
                    border: "none",
                    borderRadius: 9999,
                    fontFamily: "var(--font-syne), sans-serif",
                    fontWeight: 700,
                    fontSize: 15,
                    cursor: isSubmitting ? "not-allowed" : "pointer",
                    transition: "background 0.2s ease",
                    letterSpacing: 0.3,
                  }}
                >
                  {isSubmitting ? (
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                      }}
                    >
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{
                          repeat: Infinity,
                          duration: 0.8,
                          ease: "linear",
                        }}
                        style={{
                          display: "inline-block",
                          width: 16,
                          height: 16,
                          border: "2px solid rgba(255,255,255,0.3)",
                          borderTopColor: "#fff",
                          borderRadius: "50%",
                        }}
                      />
                      Sending...
                    </span>
                  ) : (
                    "Send Request →"
                  )}
                </motion.button>
              </div>
            </form>
          </div>

          <AnimatePresence>
            {submitted && (
              <SuccessPopup
                onClose={() => setSubmitted(false)}
                isLight={isLight}
              />
            )}
            {showToast && (
              <ErrorToast
                message={submitError || ""}
                onClose={() => setShowToast(false)}
                isLight={isLight}
              />
            )}
          </AnimatePresence>

          <div className="mt-10">
            <div
              style={{
                height: 1,
                background: isLight
                  ? "linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)"
                  : "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",
                marginBottom: 28,
              }}
            />

            <p
              className="font-dm text-sm text-center mb-3"
              style={{ color: "var(--text-muted)" }}
            >
              Or reach out directly to:
            </p>

            <div className="flex items-center justify-center gap-2">
              <span style={{ color: "var(--text-subtle)" }}>
                <EmailIcon />
              </span>
              <p
                className="font-dm text-sm font-medium text-center"
                style={{ color: "var(--text-primary)" }}
              >
                <span style={{ color: "var(--brand)", fontWeight: 600 }}>
                  DocGlasses
                </span>{" "}
                <span style={{ color: "var(--text-subtle)" }}>|</span>{" "}
                <span style={{ color: "var(--text-muted)" }}>
                  Global Health Holdings, USA
                </span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              {[
                "Government pilot programs available now",
                "Full technical demonstration at your convenience",
              ].map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-2"
                  style={{
                    padding: "10px 18px",
                    borderRadius: 8,
                    background: isLight
                      ? "rgba(15,118,110,0.05)"
                      : "rgba(15,118,110,0.06)",
                    border: `1px solid ${
                      isLight
                        ? "rgba(15,118,110,0.14)"
                        : "rgba(15,118,110,0.15)"
                    }`,
                  }}
                >
                  <span style={{ color: "var(--brand)", fontSize: 12 }}>✦</span>
                  <span
                    className="font-dm text-sm"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
