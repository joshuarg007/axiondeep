"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const SITE2CRM_API = "https://api.site2crm.io";

const UNSUB_REASONS = [
  "I get too many emails",
  "The content isn't relevant to me",
  "I didn't sign up for this",
  "Other",
];

function UnsubscribeInner() {
  const searchParams = useSearchParams();
  const emailParam = searchParams.get("email") || "";

  const [email, setEmail] = useState(emailParam);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [reason, setReason] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setErrorMsg("");
    setStatus("loading");
    try {
      const res = await fetch(`${SITE2CRM_API}/api/public/unsubscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          ...(reason ? { reason } : {}),
          source: "axiondeep",
        }),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        const data = await res.json().catch(() => ({}));
        setStatus("error");
        setErrorMsg(data.detail || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Unable to connect. Please try again later.");
    }
  }

  if (status === "success") {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 py-24">
        <div className="max-w-lg w-full text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-emerald-500/10 flex items-center justify-center">
            <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-2xl font-bold text-white mb-3">You&apos;ve been unsubscribed</h1>

          <p className="text-gray-400 mb-4">
            You will no longer receive any marketing emails from Axion Deep, including research updates, product announcements, and SEO audit follow-ups.
          </p>

          <p className="text-gray-500 text-sm mb-8">
            A confirmation email has been sent to <span className="text-white">{email}</span>.
          </p>

          <div className="p-6 rounded-2xl border border-violet-500/20 bg-violet-500/[0.05] text-left mb-8">
            <h2 className="text-white font-semibold mb-2">Our research is still open</h2>
            <p className="text-gray-400 text-sm mb-4">
              Published papers, experiment logs, and open-source code are always available on our website.
            </p>
            <Link
              href="/research"
              className="inline-flex items-center gap-2 text-sm font-semibold text-violet-400 hover:text-violet-300 transition-colors"
            >
              View research
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          <div className="flex flex-col items-center gap-4">
            <p className="text-sm text-gray-500">
              Changed your mind?{" "}
              <a
                href="mailto:labs@axiondeep.com?subject=Re-subscribe&body=Hi%2C%20I%27d%20like%20to%20re-subscribe%20to%20Axion%20Deep%20emails."
                className="text-violet-400 hover:text-violet-300 font-medium transition-colors"
              >
                Email us to re-subscribe
              </a>
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-24">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-violet-500/10 flex items-center justify-center">
            <svg className="w-8 h-8 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5-1.635a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.375c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v11.25z"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Unsubscribe</h1>
          <p className="text-gray-400">
            This will remove you from all Axion Deep marketing emails, including research updates, product announcements, and SEO audit follow-ups.
          </p>
        </div>

        {errorMsg && (
          <div className="mb-6 p-4 rounded-xl border border-red-500/20 bg-red-500/10 flex items-start gap-3">
            <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className="text-sm text-red-300">{errorMsg}</div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="unsub-email" className="block text-sm font-medium text-gray-400 mb-1.5">
              Email address
            </label>
            <input
              id="unsub-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@company.com"
              className="w-full px-4 py-3 rounded-xl border text-white placeholder-gray-500 outline-none transition bg-white/[0.03] border-white/[0.08] focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
            />
          </div>

          <div>
            <label htmlFor="unsub-reason" className="block text-sm font-medium text-gray-400 mb-1.5">
              Why are you unsubscribing? <span className="text-gray-600 font-normal">(optional, helps us improve)</span>
            </label>
            <select
              id="unsub-reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border text-white outline-none transition bg-white/[0.03] border-white/[0.08] focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
            >
              <option value="" className="bg-gray-900">Select a reason...</option>
              {UNSUB_REASONS.map(r => (
                <option key={r} value={r} className="bg-gray-900">{r}</option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-3.5 px-4 rounded-xl bg-gray-700 hover:bg-gray-600 text-white font-semibold disabled:opacity-60 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
          >
            {status === "loading" ? (
              <>
                <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Processing...
              </>
            ) : (
              "Unsubscribe Me"
            )}
          </button>
        </form>

        <div className="mt-8 space-y-4">
          <div className="p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] text-center">
            <p className="text-xs text-gray-500 mb-2">
              Want your data deleted entirely? This removes all lead records and contact information.
            </p>
            <button
              type="button"
              onClick={async () => {
                if (!email.trim()) return;
                if (!confirm("This will permanently delete all data associated with your email. This cannot be undone. Continue?")) return;
                try {
                  await fetch(`${SITE2CRM_API}/api/public/data-deletion`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email: email.trim().toLowerCase() }),
                  });
                  alert("Done. All data associated with your email has been deleted. A confirmation email has been sent.");
                } catch {
                  alert("Something went wrong. Please email labs@axiondeep.com with your deletion request.");
                }
              }}
              className="text-xs text-red-400 hover:text-red-300 font-medium transition-colors underline"
            >
              Delete my data (permanent, GDPR)
            </button>
          </div>

          <div className="text-center space-y-3">
            <p className="text-xs text-gray-600">
              Axion Deep Labs Inc., 5045 El Camino Real, Las Cruces, NM 88007
            </p>
            <div className="flex items-center justify-center gap-4 text-xs">
              <Link href="/privacy" className="text-gray-500 hover:text-violet-400 transition-colors">Privacy Policy</Link>
              <span className="text-gray-700">|</span>
              <Link href="/legal" className="text-gray-500 hover:text-violet-400 transition-colors">Terms</Link>
              <span className="text-gray-700">|</span>
              <a href="mailto:labs@axiondeep.com" className="text-gray-500 hover:text-violet-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function UnsubscribeClient() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <svg className="animate-spin h-6 w-6 text-violet-400" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      </div>
    }>
      <UnsubscribeInner />
    </Suspense>
  );
}
