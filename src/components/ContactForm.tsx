"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion } from "framer-motion";

const SITE2CRM_API = "https://api.site2crm.io/api/public/leads";
const SITE2CRM_ORG_KEY = "a57c3429880841438e2e767e8151b4a6";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [autoSaved, setAutoSaved] = useState(false);
  const autoSaveTimeout = useRef<NodeJS.Timeout | null>(null);
  const lastSavedEmail = useRef("");

  const autoSave = useCallback(async (formData: typeof form) => {
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return;
    if (formData.email === lastSavedEmail.current && !formData.name && !formData.message) return;
    try {
      await fetch(SITE2CRM_API, {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-Org-Key": SITE2CRM_ORG_KEY },
        body: JSON.stringify({
          name: formData.name || "(not provided)",
          email: formData.email,
          notes: formData.message ? `[Auto-captured] ${formData.message}` : "[Auto-captured - form not submitted]",
          source: "axiondeep.com (auto)",
        }),
      });
      lastSavedEmail.current = formData.email;
      setAutoSaved(true);
    } catch {
      /* silent */
    }
  }, []);

  useEffect(() => {
    if (form.email) {
      if (autoSaveTimeout.current) clearTimeout(autoSaveTimeout.current);
      autoSaveTimeout.current = setTimeout(() => autoSave(form), 2000);
    }
    return () => {
      if (autoSaveTimeout.current) clearTimeout(autoSaveTimeout.current);
    };
  }, [form, autoSave]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const response = await fetch(SITE2CRM_API, {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-Org-Key": SITE2CRM_ORG_KEY },
        body: JSON.stringify({
          name: form.name || "(not provided)",
          email: form.email,
          notes: form.message || "(no message)",
          source: "axiondeep.com",
        }),
      });
      if (response.ok) {
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
        lastSavedEmail.current = "";
        setAutoSaved(false);
        setTimeout(() => setSubmitted(false), 4000);
      } else {
        const data = await response.json().catch(() => ({}));
        setError(data.detail || "Failed to send message. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="py-12 text-center"
      >
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 flex items-center justify-center">
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-xl text-white font-medium mb-2">Message sent!</p>
        <p className="text-gray-400">We&apos;ll be in touch soon.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
          Email *
        </label>
        <input
          id="email"
          type="email"
          required
          disabled={submitting}
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 outline-none focus:border-cyan-500/50 transition"
          placeholder="you@company.com"
        />
      </div>
      <div>
        <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
          Name
        </label>
        <input
          id="name"
          type="text"
          disabled={submitting}
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 outline-none focus:border-cyan-500/50 transition"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
          Tell us about your project
        </label>
        <textarea
          id="message"
          disabled={submitting}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          rows={4}
          className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 outline-none focus:border-cyan-500/50 transition resize-none"
          placeholder="What are you building?"
        />
      </div>
      {error && (
        <div className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-2">
          {error}
        </div>
      )}
      <button
        type="submit"
        disabled={submitting || !form.email}
        className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 font-semibold text-white hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {submitting ? (
          <>
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </button>
      {autoSaved && (
        <p className="text-xs text-gray-500 text-center flex items-center justify-center gap-1">
          <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          Draft saved
        </p>
      )}
    </form>
  );
}
