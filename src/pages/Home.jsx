import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import heroInnovation from "../assets/images/hero-innovation.webp";
import processDiscover from "../assets/images/process-discover.webp";
import processDesign from "../assets/images/process-design.webp";
import processDeliver from "../assets/images/process-deliver.webp";

const prefersReduced =
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

export default function Home() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [autoSaved, setAutoSaved] = useState(false);
  const autoSaveTimeout = React.useRef(null);
  const lastSavedEmail = React.useRef("");

  // Site2CRM configuration
  const SITE2CRM_API = "https://api.site2crm.io/api/public/leads";
  const SITE2CRM_ORG_KEY = "a57c3429880841438e2e767e8151b4a6";

  // Auto-save to Site2CRM when email is valid (captures partial leads)
  const autoSave = React.useCallback(async (formData) => {
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return;
    if (formData.email === lastSavedEmail.current && !formData.name && !formData.message) return;

    try {
      await fetch(SITE2CRM_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Org-Key": SITE2CRM_ORG_KEY,
        },
        body: JSON.stringify({
          name: formData.name || "(not provided)",
          email: formData.email,
          notes: formData.message ? `[Auto-captured] ${formData.message}` : "[Auto-captured - form not submitted]",
          source: "axiondeep.com (auto)",
        }),
      });
      lastSavedEmail.current = formData.email;
      setAutoSaved(true);
    } catch (err) {
      // Silent fail for auto-save
    }
  }, []);

  // Debounced auto-save on form changes
  React.useEffect(() => {
    if (form.email) {
      clearTimeout(autoSaveTimeout.current);
      autoSaveTimeout.current = setTimeout(() => autoSave(form), 2000);
    }
    return () => clearTimeout(autoSaveTimeout.current);
  }, [form, autoSave]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const response = await fetch(SITE2CRM_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Org-Key": SITE2CRM_ORG_KEY,
        },
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
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="text-center">
      <SEO
        title="Custom Software & Web Development Company"
        description="Custom software and web development company building web applications, mobile apps, AI-powered software, and SaaS platforms. Full-stack web development with React, Python, and modern cloud technologies. From MVP to enterprise scale."
        keywords="custom software solutions, web development company, web development services, custom software development company, software development services, web application development, mobile app development, AI software development, SaaS development, enterprise software solutions, React developers, Python developers, full-stack web development, MVP development, hire web developers"
        canonical="/"
      />
      {/* Hero text - no animation delays to improve LCP */}
      <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text animate-fade-in">
        Axion Deep
      </h1>

      <h2 className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in animation-delay-100">
        Custom Software Development & Digital Innovation
      </h2>

      <p className="max-w-2xl mx-auto text-gray-400 mb-10 animate-fade-in animation-delay-200">
        We build custom web applications, mobile apps, and AI-powered software solutions.
        From MVPs to enterprise platforms—our full-stack development team transforms ideas
        into production-ready products with modern technologies like React, Python, and cloud infrastructure.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 justify-center mb-20">
        <Link
          to="/solutions"
          aria-label="Explore Axion Deep solutions"
          className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 font-semibold hover:opacity-90 transition"
        >
          Explore Solutions
        </Link>
        <Link
          to="/mission"
          aria-label="Learn about our mission"
          className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/5 transition"
        >
          Our Mission
        </Link>
      </div>

      <div className="text-xs tracking-widest text-gray-500 mb-16">
        WEB APPS • MOBILE • AI • VR/AR • SAAS • ENTERPRISE SOFTWARE
      </div>

      {/* Hero Image */}
      <motion.div
        initial={prefersReduced ? false : { opacity: 0, y: 20 }}
        animate={prefersReduced ? {} : { opacity: 1, y: 0 }}
        transition={prefersReduced ? {} : { delay: 0.7, duration: 0.8 }}
        className="mb-24 max-w-4xl mx-auto"
      >
        <img
          src={heroInnovation}
          alt="Custom software development innovation concept"
          className="w-full rounded-2xl border border-white/10 shadow-2xl shadow-cyan-500/10"
          width={1200}
          height={800}
          fetchPriority="high"
        />
      </motion.div>

      {/* How It Works Section */}
      <motion.div
        initial={prefersReduced ? false : { opacity: 0, y: 20 }}
        animate={prefersReduced ? {} : { opacity: 1, y: 0 }}
        transition={prefersReduced ? {} : { delay: 0.8, duration: 0.8 }}
        className="max-w-4xl mx-auto mb-24"
      >
        <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
          How We Work
        </h3>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          From initial discovery to deployed solution, our process is built for clarity and results.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {/* Step 1 */}
          <div className="relative overflow-visible">
            <img
              src={processDiscover}
              alt="Discovery phase - understanding software requirements"
              className="w-full h-40 object-contain mb-4"
              loading="lazy"
            />
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center text-white font-bold text-sm">
                1
              </div>
              <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-cyan-500/50 to-transparent" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Discover</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              We start by understanding your challenge. Deep listening, sharp questions, and mapping the problem space together.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative overflow-visible">
            <img
              src={processDesign}
              alt="Design phase - architecting custom software solutions"
              className="w-full h-40 object-contain mb-4"
              loading="lazy"
            />
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-violet-600 flex items-center justify-center text-white font-bold text-sm">
                2
              </div>
              <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-violet-500/50 to-transparent" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Design</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              We architect a solution tailored to your needs. Prototypes, validation, and iterative refinement until it's right.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative overflow-visible">
            <img
              src={processDeliver}
              alt="Delivery phase - deploying production-ready software"
              className="w-full h-40 object-contain mb-4"
              loading="lazy"
            />
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center text-white font-bold text-sm">
                3
              </div>
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Deliver</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              We build, test, and deploy with precision. Ongoing support ensures your solution evolves with your needs.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Contact Form Section */}
      <motion.div
        initial={prefersReduced ? false : { opacity: 0, y: 20 }}
        animate={prefersReduced ? {} : { opacity: 1, y: 0 }}
        transition={prefersReduced ? {} : { delay: 0.9, duration: 0.8 }}
        className="max-w-xl mx-auto"
      >
        <div className="border border-white/10 rounded-2xl bg-white/[0.03] backdrop-blur-sm p-8">
          <h3 className="text-2xl font-semibold text-white mb-2">
            Let's Connect
          </h3>
          <p className="text-gray-400 text-sm mb-6">
            Have a question or want to collaborate? Drop us a message.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-8 text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-white font-medium">Message sent!</p>
              <p className="text-gray-400 text-sm">We'll be in touch soon.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              {/* Email first - required */}
              <div>
                <label className="block text-xs text-gray-400 mb-1.5 uppercase tracking-wide">
                  Email <span className="text-cyan-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  disabled={submitting}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-cyan-500 transition disabled:opacity-50"
                  placeholder="you@example.com"
                />
              </div>

              {/* Name and Message - optional */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-400 mb-1.5 uppercase tracking-wide">
                    Name <span className="text-gray-600">(optional)</span>
                  </label>
                  <input
                    type="text"
                    disabled={submitting}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-cyan-500 transition disabled:opacity-50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1.5 uppercase tracking-wide">
                    Message <span className="text-gray-600">(optional)</span>
                  </label>
                  <input
                    type="text"
                    disabled={submitting}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-cyan-500 transition disabled:opacity-50"
                    placeholder="How can we help?"
                  />
                </div>
              </div>

              {error && (
                <div className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-2">
                  {error}
                </div>
              )}

              <div className="flex items-center gap-3">
                <button
                  type="submit"
                  disabled={submitting || !form.email}
                  className="flex-1 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 font-semibold text-white hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
                    "Send Message"
                  )}
                </button>
                {autoSaved && (
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Saved
                  </span>
                )}
              </div>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
}
