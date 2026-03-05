"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AuditResult {
  performance: number;
  seo: number;
  accessibility: number;
  bestPractices: number;
  fcp: string;
  lcp: string;
  cls: string;
}

type AuditState = "idle" | "loading" | "results" | "email-gate" | "submitted";

function ScoreRing({ score, label, delay }: { score: number; label: string; delay: number }) {
  const radius = 38;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;
  const color =
    score >= 90 ? "#10b981" : score >= 50 ? "#f59e0b" : "#ef4444";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center"
    >
      <div className="relative w-24 h-24">
        <svg className="w-24 h-24 -rotate-90" viewBox="0 0 96 96">
          <circle
            cx="48"
            cy="48"
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="4"
          />
          <motion.circle
            cx="48"
            cy="48"
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.2, delay: delay + 0.3, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-bold text-white">{score}</span>
        </div>
      </div>
      <span className="text-sm text-gray-400 mt-2">{label}</span>
    </motion.div>
  );
}

export default function SEOAuditTool() {
  const [state, setState] = useState<AuditState>("idle");
  const [url, setUrl] = useState("");
  const [email, setEmail] = useState("");
  const [result, setResult] = useState<AuditResult | null>(null);
  const [error, setError] = useState("");

  const runAudit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    let testUrl = url.trim();
    if (!testUrl) return;
    if (!testUrl.startsWith("http")) testUrl = `https://${testUrl}`;

    try {
      new URL(testUrl);
    } catch {
      setError("Please enter a valid URL");
      return;
    }

    setState("loading");

    try {
      const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(testUrl)}&strategy=mobile&category=PERFORMANCE&category=SEO&category=ACCESSIBILITY&category=BEST_PRACTICES`;
      const res = await fetch(apiUrl);

      if (!res.ok) {
        throw new Error("Could not analyze this URL. Please check the address and try again.");
      }

      const data = await res.json();
      const cats = data.lighthouseResult?.categories;
      const audits = data.lighthouseResult?.audits;

      setResult({
        performance: Math.round((cats?.performance?.score ?? 0) * 100),
        seo: Math.round((cats?.seo?.score ?? 0) * 100),
        accessibility: Math.round((cats?.accessibility?.score ?? 0) * 100),
        bestPractices: Math.round((cats?.["best-practices"]?.score ?? 0) * 100),
        fcp: audits?.["first-contentful-paint"]?.displayValue ?? "N/A",
        lcp: audits?.["largest-contentful-paint"]?.displayValue ?? "N/A",
        cls: audits?.["cumulative-layout-shift"]?.displayValue ?? "N/A",
      });
      setState("results");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Audit failed. Please try again.");
      setState("idle");
    }
  };

  const submitEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    try {
      await fetch("https://api.site2crm.io/api/public/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Org-Key": "org_jUITQNG0ZcPF_KJ0vplRQV8rwWk0pvR9",
        },
        body: JSON.stringify({
          email: email.trim(),
          notes: `[SEO Audit] URL: ${url} | Performance: ${result?.performance} | SEO: ${result?.seo} | Accessibility: ${result?.accessibility}`,
          source: "axiondeep.com/marketing (SEO audit)",
        }),
      });
    } catch {
      /* Lead capture is best-effort */
    }
    setState("submitted");
  };

  return (
    <section id="seo-audit" className="px-6 py-24 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-emerald-400 font-medium tracking-widest uppercase text-sm mb-4">
            Free Tool
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Instant SEO audit
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Enter any URL and see exactly how your website performs. Real data from Google&apos;s own analysis engine — no signup required.
          </p>
        </div>

        {/* Audit card */}
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 md:p-12">
          <AnimatePresence mode="wait">
            {(state === "idle" || state === "loading") && (
              <motion.form
                key="form"
                onSubmit={runAudit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <input
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="Enter your website URL..."
                  disabled={state === "loading"}
                  className="flex-1 bg-black/30 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 outline-none focus:border-violet-500/50 transition text-lg"
                />
                <button
                  type="submit"
                  disabled={state === "loading" || !url.trim()}
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 font-semibold text-white hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  {state === "loading" ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Analyzing...
                    </>
                  ) : (
                    "Run Audit"
                  )}
                </button>
              </motion.form>
            )}

            {state === "results" && result && (
              <motion.div
                key="results"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                <div className="text-center mb-2">
                  <p className="text-sm text-gray-500 mb-6">Results for <span className="text-white">{url}</span></p>
                </div>

                {/* Score rings */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                  <ScoreRing score={result.performance} label="Performance" delay={0} />
                  <ScoreRing score={result.seo} label="SEO" delay={0.15} />
                  <ScoreRing score={result.accessibility} label="Accessibility" delay={0.3} />
                  <ScoreRing score={result.bestPractices} label="Best Practices" delay={0.45} />
                </div>

                {/* Core Web Vitals */}
                <div className="grid grid-cols-3 gap-4 mb-8 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="text-center">
                    <p className="text-xs text-gray-500 mb-1">First Contentful Paint</p>
                    <p className="text-lg font-semibold text-white">{result.fcp}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-500 mb-1">Largest Contentful Paint</p>
                    <p className="text-lg font-semibold text-white">{result.lcp}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-500 mb-1">Cumulative Layout Shift</p>
                    <p className="text-lg font-semibold text-white">{result.cls}</p>
                  </div>
                </div>

                {/* Email gate */}
                <div className="border-t border-white/[0.06] pt-6">
                  <p className="text-center text-gray-400 mb-4">
                    Want a detailed breakdown with actionable recommendations?
                  </p>
                  <form onSubmit={submitEmail} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email..."
                      required
                      className="flex-1 bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 outline-none focus:border-violet-500/50 transition"
                    />
                    <button
                      type="submit"
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 font-semibold text-white hover:opacity-90 transition whitespace-nowrap"
                    >
                      Get Full Report
                    </button>
                  </form>
                </div>
              </motion.div>
            )}

            {state === "submitted" && (
              <motion.div
                key="submitted"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-xl text-white font-medium mb-2">Report on the way!</p>
                <p className="text-gray-400">We&apos;ll send a detailed audit with recommendations within 24 hours.</p>
                <button
                  onClick={() => { setState("idle"); setUrl(""); setEmail(""); setResult(null); }}
                  className="mt-6 text-sm text-violet-400 hover:text-white transition-colors"
                >
                  Audit another site
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {error && (
            <div className="mt-4 text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-2 text-center">
              {error}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
