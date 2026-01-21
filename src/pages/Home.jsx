import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

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

  const SITE2CRM_API = "https://api.site2crm.io/api/public/leads";
  const SITE2CRM_ORG_KEY = "a57c3429880841438e2e767e8151b4a6";

  const autoSave = React.useCallback(async (formData) => {
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
    } catch (err) { /* silent */ }
  }, []);

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
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <SEO
        title="Custom Software & Web Development Company"
        description="Custom software and web development company building web applications, mobile apps, AI-powered software, and SaaS platforms. Full-stack web development with React, Python, and modern cloud technologies."
        keywords="custom software solutions, web development company, custom software development company, web application development, mobile app development, AI software development, SaaS development"
        canonical="/"
      />

      {/* ═══════════════════════════════════════════════════════════════
          HERO - Full viewport, dramatic
      ═══════════════════════════════════════════════════════════════ */}
      <section className="snap-section min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16">
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
              Axion Deep Labs
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">
            We transform how technology is understood.
            <br />
            <span className="text-gray-500">From idea to launch, done right.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/solutions"
              className="group px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-100 transition-all flex items-center gap-2"
            >
              View Our Work
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 rounded-full border border-white/20 text-white font-medium hover:bg-white/5 transition-all"
            >
              Start a Project
            </Link>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 rounded-full bg-white/40"
            />
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          PROCESS - Asymmetric, left-aligned with connecting line
      ═══════════════════════════════════════════════════════════════ */}
      <section className="snap-section min-h-screen flex items-center px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Header */}
            <motion.div
              initial={prefersReduced ? {} : { opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-32"
            >
              <p className="font-bold tracking-widest uppercase text-lg mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                OUR PROCESS
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-xl md:text-2xl font-light text-gray-400 tracking-widest mr-3">FROM</span>
                <span className="text-white" style={{ textShadow: '0 0 40px rgba(255,255,255,0.5)' }}>THOUGHT</span>
                <br />
                <span className="text-xl md:text-2xl font-light text-gray-400 tracking-widest mr-3">TO</span>
                <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">REALITY</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                A battle-tested process refined over hundreds of projects.
                Clear milestones, constant communication, and no surprises.
              </p>
              <img
                src="/images/process.webp"
                alt="Software development process cycle - from ideation through execution to delivery"
                className="w-full max-w-md opacity-90 hidden lg:block"
                loading="lazy"
              />
            </motion.div>

            {/* Right: Steps */}
            <div className="space-y-8">
              {[
                {
                  num: "01",
                  title: "Discovery",
                  desc: "We dive deep into your business, users, and goals. No assumptions—just clarity.",
                  color: "from-cyan-500 to-blue-500"
                },
                {
                  num: "02",
                  title: "Strategy",
                  desc: "Architecture, tech stack, and roadmap. You'll know exactly what we're building and why.",
                  color: "from-violet-500 to-purple-500"
                },
                {
                  num: "03",
                  title: "Build",
                  desc: "Agile sprints with weekly demos. You see progress, not excuses.",
                  color: "from-fuchsia-500 to-pink-500"
                },
                {
                  num: "04",
                  title: "Launch & Scale",
                  desc: "Deploy with confidence. We stick around to iterate and grow with you.",
                  color: "from-orange-500 to-red-500"
                },
              ].map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={prefersReduced ? {} : { opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative pl-20"
                >
                  {/* Number */}
                  <div className={`absolute left-0 top-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-lg`}>
                    {step.num}
                  </div>
                  {/* Connecting line */}
                  {i < 3 && (
                    <div className="absolute left-7 top-14 w-px h-[calc(100%+2rem)] bg-gradient-to-b from-white/20 to-transparent" />
                  )}
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SERVICES - Bento grid with varied sizes
      ═══════════════════════════════════════════════════════════════ */}
      <section className="snap-section min-h-screen flex items-center px-6 py-16 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-violet-400 font-medium tracking-wide uppercase text-sm mb-4">
              What We Build
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Full-stack expertise
            </h2>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid md:grid-cols-3 gap-4">
            {/* Large card */}
            <motion.div
              initial={prefersReduced ? {} : { opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="md:col-span-2 md:row-span-2 group relative p-8 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-blue-500/5 border border-cyan-500/20 hover:border-cyan-500/40 transition-all overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative flex flex-col h-full">
                <img
                  src="/images/webapps.webp"
                  alt="Web application development - React, Next.js, TypeScript code interface"
                  className="w-32 h-auto mb-6 opacity-90"
                  loading="lazy"
                />
                <h3 className="text-2xl font-bold text-white mb-3">Web Applications</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  React, Next.js, TypeScript. Full-stack SaaS platforms, dashboards, and complex web apps built to scale.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {["React", "Next.js", "TypeScript", "Node.js"].map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-white/5 text-xs text-gray-400 border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Smaller cards */}
            {[
              {
                title: "Mobile Apps",
                desc: "iOS, Android, React Native",
                gradient: "from-violet-500/10 to-purple-500/5",
                border: "border-violet-500/20 hover:border-violet-500/40",
                image: "/images/mobileapps.webp",
                alt: "Mobile app development - iOS and Android smartphone interface"
              },
              {
                title: "AI & ML",
                desc: "LLMs, Custom Models, Automation",
                gradient: "from-fuchsia-500/10 to-pink-500/5",
                border: "border-fuchsia-500/20 hover:border-fuchsia-500/40",
                image: "/images/ai-ml.webp",
                alt: "Artificial intelligence and machine learning neural network"
              },
              {
                title: "Backend & APIs",
                desc: "Python, FastAPI, GraphQL",
                gradient: "from-emerald-500/10 to-teal-500/5",
                border: "border-emerald-500/20 hover:border-emerald-500/40",
                image: "/images/backend-apis.webp",
                alt: "Backend server and API infrastructure"
              },
              {
                title: "Cloud & DevOps",
                desc: "AWS, GCP, CI/CD",
                gradient: "from-orange-500/10 to-red-500/5",
                border: "border-orange-500/20 hover:border-orange-500/40",
                image: "/images/cloud-devops.webp",
                alt: "Cloud computing and DevOps infrastructure"
              },
            ].map((service, i) => (
              <motion.div
                key={service.title}
                initial={prefersReduced ? {} : { opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`group relative p-6 rounded-2xl bg-gradient-to-br ${service.gradient} border ${service.border} transition-all`}
              >
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-16 h-auto mb-4 opacity-90"
                  loading="lazy"
                />
                <h3 className="text-lg font-semibold text-white mb-1">{service.title}</h3>
                <p className="text-sm text-gray-500">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          QUOTE - Big typography, centered
      ═══════════════════════════════════════════════════════════════ */}
      <section className="snap-section min-h-screen flex items-center px-6 py-16">
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <svg className="w-12 h-12 mx-auto mb-8 text-white/10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <blockquote className="text-3xl md:text-4xl font-light text-white leading-relaxed mb-8">
            Great software is built by people who care deeply about
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent"> craft, clarity, and outcomes</span>.
          </blockquote>
          <p className="text-gray-500">— The Axion Deep Philosophy</p>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CONTACT - Two columns
      ═══════════════════════════════════════════════════════════════ */}
      <section className="snap-section min-h-screen flex items-center justify-center px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left: Info */}
            <motion.div
              initial={prefersReduced ? {} : { opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-fuchsia-400 font-medium tracking-wide uppercase text-sm mb-4">
                Let's Talk
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to build something great?
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Whether you have a clear vision or just a spark of an idea,
                we'd love to hear about it. No pressure, just a conversation.
              </p>
              <div className="space-y-4 text-gray-400">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <span>hello@axiondeep.com</span>
                </div>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={prefersReduced ? {} : { opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/[0.06]">
                {submitted ? (
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
                    <p className="text-gray-400">We'll be in touch soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Email *</label>
                      <input
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
                      <label className="block text-sm text-gray-400 mb-2">Name</label>
                      <input
                        type="text"
                        disabled={submitting}
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 outline-none focus:border-cyan-500/50 transition"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Tell us about your project</label>
                      <textarea
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
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
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
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Draft saved
                      </p>
                    )}
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
