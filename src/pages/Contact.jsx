import React, { useMemo, useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const stepsDef = [
  { id: "name", label: "Your name", type: "text", placeholder: "Ada Lovelace" },
  {
    id: "interests",
    label: "Focus area(s)",
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
  { id: "email", label: "Email", type: "email", placeholder: "you@domain.com" },
  { id: "phone", label: "Phone (optional)", type: "tel", placeholder: "+1 415 555 0123" },
  { id: "org", label: "Organization", type: "text", placeholder: "Institute / Company" },
  {
    id: "budget",
    label: "Budget range",
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
    id: "timeline",
    label: "Desired timeline",
    type: "select",
    options: [
      "Exploration (open)",
      "0–3 months",
      "3–6 months",
      "6–12 months",
      "12+ months",
    ],
  },
  {
    id: "context",
    label: "Context / problem statement",
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

export default function Contact() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    name: "",
    interests: [],
    email: "",
    phone: "",
    org: "",
    budget: "",
    timeline: "",
    context: "",
  });
  const [otherInterest, setOtherInterest] = useState("");

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
    if (current.type === "multi")
      return data.interests.length > 0 || otherInterest.trim().length > 0;
    if (["text", "email", "tel", "select"].includes(current.type))
      return current.id === "phone"
        ? true
        : String(v || "").trim().length > 0;
    if (current.type === "textarea") return true;
    return true;
  }, [data, current, otherInterest]);

  const finalizeInterests = useCallback(() => {
    const list = new Set(data.interests);
    if (otherInterest.trim()) list.add(otherInterest.trim());
    return Array.from(list);
  }, [data.interests, otherInterest]);

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
      <header className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-semibold">
          Start a Research Conversation
        </h1>
        <p className="text-gray-400">
          A short, adaptive workflow so we can route your inquiry to the right
          research lead.
        </p>
        <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden mt-3">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 to-blue-600"
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
                  className="px-5 py-2.5 rounded-lg font-semibold bg-gradient-to-r from-cyan-500 to-blue-700 hover:opacity-90 disabled:opacity-50"
                >
                  Continue
                </button>
              </div>
            </motion.div>
          ) : (
            // Summary step
            <motion.div key="summary" {...variants} className="space-y-6">
              <div className="space-y-2">
                <div className="text-sm text-gray-400">Summary</div>
                <h2 className="text-xl font-semibold">Review your request</h2>
              </div>

              <div className="space-y-3 text-sm">
                <Row k="Name" v={data.name} />
                <Row k="Focus area(s)" v={finalizeInterests().join(", ")} />
                <Row k="Email" v={data.email} />
                <Row k="Phone" v={data.phone || "—"} />
                <Row k="Organization" v={data.org} />
                <Row k="Budget" v={data.budget} />
                <Row k="Timeline" v={data.timeline} />
                <Row k="Context" v={data.context || "—"} />
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={() => setStep(stepsDef.length - 1)}
                  className="px-4 py-2 rounded-lg border border-white/10 text-gray-300 hover:border-white/20"
                >
                  Edit previous
                </button>
                <button
                  type="button"
                  onClick={() =>
                    alert(
                      "This is a demo — wire to your API or CRM integration next."
                    )
                  }
                  className="px-5 py-2.5 rounded-lg font-semibold bg-gradient-to-r from-emerald-500 to-cyan-600 hover:opacity-90"
                >
                  Send request
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
