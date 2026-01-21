import React, { useMemo, useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "../components/SEO";
import contactConnect from "../assets/images/contact-connect.webp";

const stepsDef = [
  { id: "email", label: "Email", type: "email", placeholder: "you@domain.com", required: true },
  { id: "name", label: "Your name (optional)", type: "text", placeholder: "Ada Lovelace" },
  {
    id: "interests",
    label: "Focus area(s) (optional)",
    type: "multi",
    options: [
      "AI Research",
      "Quantum-Inspired Methods",
      "Data Systems",
      "Human+Machine Interfaces",
      "Research Infrastructure",
      "Simulations (VR/AR)",
      "Advanced Systems & Web Technologies",
      "Other",
    ],
  },
  { id: "org", label: "Organization (optional)", type: "text", placeholder: "Institute / Company" },
  {
    id: "budget",
    label: "Budget range (optional)",
    type: "select",
    options: [
      "Exploratory (≤ $10k)",
      "$10k–$50k",
      "$50k–$250k",
      "$250k–$1M",
      "$1M+",
    ],
  },
  {
    id: "context",
    label: "Context / problem statement (optional)",
    type: "textarea",
    placeholder: "What question are you trying to answer?",
  },
];

const prefersReduced =
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

const Panel = ({ children }) => (
  <div className="border border-white/10 bg-white/5 rounded-2xl p-6">{children}</div>
);

// Site2CRM configuration
const SITE2CRM_API = "https://api.site2crm.io/api/public/leads";
const SITE2CRM_ORG_KEY = "a57c3429880841438e2e767e8151b4a6";

export default function Contact() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    email: "",
    name: "",
    interests: [],
    org: "",
    budget: "",
    context: "",
  });
  const [otherInterest, setOtherInterest] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [autoSaved, setAutoSaved] = useState(false);
  const lastSavedData = useRef({ email: "", step: -1 });

  // --- Persistence ---
  useEffect(() => {
    const saved = localStorage.getItem("axiondeep_contact_draft");
    if (saved) {
      try {
        setData(JSON.parse(saved));
      } catch (err) {
        console.warn("Bad draft data:", err);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("axiondeep_contact_draft", JSON.stringify(data));
  }, [data]);

  const current = stepsDef[step];
  const progress = useMemo(
    () => Math.round(((step + 1) / (stepsDef.length + 1)) * 100),
    [step]
  );

  const update = useCallback((id, value) => {
    setData((d) => ({ ...d, [id]: value }));
  }, []);

  const next = useCallback(() => {
    setStep((s) => (s < stepsDef.length ? s + 1 : s));
  }, []);

  const back = useCallback(() => {
    setStep((s) => (s > 0 ? s - 1 : s));
  }, []);

  const canContinue = useCallback(() => {
    const v = data[current?.id];
    if (!current) return true;
    // Only email is required
    if (current.required) {
      return String(v || "").trim().length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
    }
    // All other fields are optional
    return true;
  }, [data, current]);

  const finalizeInterests = useCallback(() => {
    const list = new Set(data.interests);
    if (otherInterest.trim()) list.add(otherInterest.trim());
    return Array.from(list);
  }, [data.interests, otherInterest]);

  // Auto-save to Site2CRM when moving past email step
  const autoSave = useCallback(async () => {
    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return;
    if (data.email === lastSavedData.current.email && step <= lastSavedData.current.step) return;

    const interests = finalizeInterests();
    const notes = [
      interests.length ? `Focus areas: ${interests.join(", ")}` : "",
      data.org ? `Organization: ${data.org}` : "",
      data.budget ? `Budget: ${data.budget}` : "",
      data.context ? `Context: ${data.context}` : "",
      "[Auto-captured - wizard in progress]",
    ].filter(Boolean).join("\n");

    try {
      await fetch(SITE2CRM_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Org-Key": SITE2CRM_ORG_KEY,
        },
        body: JSON.stringify({
          name: data.name || "(not provided)",
          email: data.email,
          company: data.org || undefined,
          notes: notes,
          source: "axiondeep.com/contact (auto)",
        }),
      });
      lastSavedData.current = { email: data.email, step };
      setAutoSaved(true);
    } catch (err) {
      // Silent fail
    }
  }, [data, step, finalizeInterests]);

  // Auto-save when step changes (after email is captured)
  useEffect(() => {
    if (step > 0 && data.email) {
      autoSave();
    }
  }, [step, autoSave, data.email]);

  const handleSubmit = async () => {
    setSubmitting(true);
    setError("");

    try {
      const interests = finalizeInterests();
      const notes = [
        interests.length ? `Focus areas: ${interests.join(", ")}` : "",
        data.org ? `Organization: ${data.org}` : "",
        data.budget ? `Budget: ${data.budget}` : "",
        data.context ? `Context: ${data.context}` : "",
      ].filter(Boolean).join("\n") || "(no additional info)";

      const response = await fetch(SITE2CRM_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Org-Key": SITE2CRM_ORG_KEY,
        },
        body: JSON.stringify({
          name: data.name || "(not provided)",
          email: data.email,
          company: data.org || undefined,
          notes: notes,
          source: "axiondeep.com/contact",
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        localStorage.removeItem("axiondeep_contact_draft");
        lastSavedData.current = { email: "", step: -1 };
      } else {
        const result = await response.json().catch(() => ({}));
        setError(result.detail || "Failed to send. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please check your connection.");
    } finally {
      setSubmitting(false);
    }
  };

  // --- Enter key support ---
  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Enter" && canContinue()) {
        e.preventDefault();
        next();
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [step, data, canContinue, next]);

  const variants = prefersReduced
    ? {}
    : {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.25 } },
        exit: { opacity: 0, y: -8, transition: { duration: 0.18 } },
      };

  return (
    <div className="relative z-10 text-gray-300 space-y-20 max-w-5xl mx-auto px-6 md:px-8 lg:px-12 pt-32 md:pt-40">
      <SEO
        title="Contact Us - Start Your Custom Software Project"
        description="Get in touch with Axion Deep Labs for custom software solutions. Request a quote for web applications, mobile apps, AI-powered software, SaaS platforms, and enterprise software development."
        keywords="contact custom software company, hire software developers, custom software quote, software development consultation, custom software development services, web application development quote"
        canonical="/contact"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" }
        ]}
      />
      <header className="space-y-4">
        <img
          src={contactConnect}
          alt="Connect with Axion Deep Labs for custom software solutions"
          className="w-full h-48 object-cover rounded-2xl mb-4"
          loading="lazy"
        />
        <h1 className="text-3xl md:text-4xl font-semibold">
          Start a Research Conversation
        </h1>
        <p className="text-gray-400">
          A short, adaptive workflow so we can route your inquiry to the right
          research lead.
        </p>
        <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden mt-3">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 to-violet-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="text-xs text-gray-500">{progress}%</div>
      </header>

      <Panel>
        <AnimatePresence mode="wait">
          {step < stepsDef.length ? (
            <motion.div key={current.id} {...variants} className="space-y-6">
              <div className="space-y-2">
                <div className="text-sm text-gray-400">
                  Step {step + 1} of {stepsDef.length}
                </div>
                <h2 className="text-xl font-semibold">{current.label}</h2>
              </div>

              {/* Field types */}
              {["text", "email", "tel"].includes(current.type) && (
                <input
                  type={current.type}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-cyan-500"
                  placeholder={current.placeholder}
                  value={data[current.id] || ""}
                  onChange={(e) => update(current.id, e.target.value)}
                />
              )}

              {current.type === "textarea" && (
                <textarea
                  rows={5}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-cyan-500"
                  placeholder={current.placeholder}
                  value={data[current.id] || ""}
                  onChange={(e) => update(current.id, e.target.value)}
                />
              )}

              {current.type === "select" && (
                <select
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-cyan-500"
                  value={data[current.id] || ""}
                  onChange={(e) => update(current.id, e.target.value)}
                >
                  <option value="" disabled>
                    Select an option…
                  </option>
                  {current.options.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              )}

              {current.type === "multi" && (
                <div className="space-y-3">
                  <div className="grid sm:grid-cols-2 gap-2">
                    {current.options.map((opt) => {
                      const active = data.interests.includes(opt);
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() =>
                            setData((d) => {
                              const selected = new Set(d.interests);
                              active
                                ? selected.delete(opt)
                                : selected.add(opt);
                              return {
                                ...d,
                                interests: Array.from(selected),
                              };
                            })
                          }
                          className={
                            "px-4 py-3 rounded-xl border transition " +
                            (active
                              ? "border-cyan-500/60 bg-cyan-500/10 text-white"
                              : "border-white/10 bg-black/40 text-gray-300 hover:border-white/20")
                          }
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                  <input
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-cyan-500"
                    placeholder="Add another focus (optional)…"
                    value={otherInterest}
                    onChange={(e) => setOtherInterest(e.target.value)}
                  />
                </div>
              )}

              {/* Navigation */}
              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={back}
                  disabled={step === 0}
                  className="px-4 py-2 rounded-lg border border-white/10 text-gray-300 hover:border-white/20 disabled:opacity-50"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={next}
                  disabled={!canContinue()}
                  className="px-5 py-2.5 rounded-lg font-semibold bg-gradient-to-r from-cyan-500 to-violet-600 hover:opacity-90 disabled:opacity-50"
                >
                  Continue
                </button>
              </div>
            </motion.div>
          ) : submitted ? (
            // Success state
            <motion.div key="success" {...variants} className="space-y-6 text-center py-8">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-white">Request sent!</h2>
              <p className="text-gray-400">
                We'll review your inquiry and get back to you shortly.
              </p>
            </motion.div>
          ) : (
            // Summary step
            <motion.div key="summary" {...variants} className="space-y-6">
              <div className="space-y-2">
                <div className="text-sm text-gray-400">Summary</div>
                <h2 className="text-xl font-semibold">Review your request</h2>
              </div>

              <div className="space-y-3 text-sm">
                <Row k="Email" v={data.email} />
                <Row k="Name" v={data.name || "—"} />
                <Row k="Focus area(s)" v={finalizeInterests().join(", ") || "—"} />
                <Row k="Organization" v={data.org || "—"} />
                <Row k="Budget" v={data.budget || "—"} />
                <Row k="Context" v={data.context || "—"} />
              </div>

              {autoSaved && (
                <p className="text-xs text-gray-500 flex items-center gap-1">
                  <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Progress auto-saved
                </p>
              )}

              {error && (
                <div className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-2">
                  {error}
                </div>
              )}

              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={() => setStep(stepsDef.length - 1)}
                  disabled={submitting}
                  className="px-4 py-2 rounded-lg border border-white/10 text-gray-300 hover:border-white/20 disabled:opacity-50"
                >
                  Edit previous
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={submitting}
                  className="px-5 py-2.5 rounded-lg font-semibold bg-gradient-to-r from-cyan-500 to-violet-600 hover:opacity-90 disabled:opacity-50 flex items-center gap-2"
                >
                  {submitting ? (
                    <>
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send request"
                  )}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Panel>

      <p className="text-xs text-gray-500">
        We’ll only use your information to triage your inquiry. Prefer a secure
        channel? Mention it in the context field and we’ll accommodate.
      </p>
    </div>
  );
}

function Row({ k, v }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
      <span className="text-gray-400 w-48">{k}</span>
      <span className="text-white/90">{v}</span>
    </div>
  );
}
