import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

// Import media
import quantaSandboxVideo from "../assets/quanta-sandbox.webm";
import site2crmVideo from "../assets/features2.webm";
import formaDemo from "../assets/forma-demo.webm";
import vesperDemo from "../assets/vesper-demo.webm";

// Roadmap logos
import quantaLogo from "../assets/icons/icon-solutions-quanta.png";
import site2crmLogo from "../assets/icons/icon-solutions-site2crm.png";
import formaLogo from "../assets/icons/icon-solutions-forma.png";
import vesperLogo from "../assets/icons/icon-solutions-vesper.png";
import founderosLogo from "../assets/icons/icon-solutions-founderos.png";

const prefersReduced =
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

export default function Solutions() {
  return (
    <div className="relative text-gray-300">
      <SEO
        title="Web Development & Software Solutions Portfolio"
        description="Explore our web development and custom software solutions: QUANTA quantum computing platform, Site2CRM AI-powered lead analytics, Forma visual page builder, Vesper security testing, and Made4Founders startup management."
        keywords="web development portfolio, custom software solutions portfolio, software products, SaaS applications, web application examples"
        canonical="/solutions"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Solutions", url: "/solutions" }
        ]}
      />

      {/* Hero */}
      <section className="snap-section min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-bold tracking-widest uppercase text-lg md:text-xl mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
          >
            FROM THE LABS
          </motion.p>
          <motion.h1
            initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8"
          >
            <span className="text-xl md:text-2xl font-light text-gray-400 tracking-widest mr-3">BUILT</span>
            <span className="text-white" style={{ textShadow: '0 0 40px rgba(255,255,255,0.4)' }}>SHIPPED</span>
            <br />
            <span className="text-xl md:text-2xl font-light text-gray-400 tracking-widest mr-3">&</span>
            <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">SCALING</span>
          </motion.h1>
          <motion.p
            initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-gray-400 max-w-xl mx-auto"
          >
            Real software solving real problems.
          </motion.p>
        </div>
      </section>

      {/* Featured: QUANTA */}
      <section className="snap-section min-h-screen flex items-center px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-cyan-500/20 via-violet-500/10 to-transparent border border-cyan-500/20"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent" />
            <div className="relative grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
              {/* Content */}
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <img src={quantaLogo} alt="QUANTA" className="w-12 h-12 rounded-xl" />
                  <div>
                    <h2 className="text-3xl font-bold text-white">QUANTA</h2>
                    <span className="text-xs px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">Education Platform</span>
                  </div>
                </div>
                <p className="text-cyan-400 font-medium mb-4">Build circuits, visualize qubits, master quantum concepts.</p>
                <p className="text-gray-400 leading-relaxed mb-6">
                  A hands-on quantum computing education platform with an interactive circuit builder,
                  real-time Bloch sphere visualization, and structured lessons from qubits to Grover's algorithm.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {["React", "TypeScript", "FastAPI", "Qiskit", "Three.js"].map(t => (
                    <span key={t} className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10">{t}</span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Link to="/projects/quanta" className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 font-semibold hover:opacity-90 transition">
                    Learn More
                  </Link>
                  <a href="https://quanta.axiondeep.com" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full border border-white/20 font-medium hover:bg-white/5 transition flex items-center gap-2">
                    Try It Live
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </a>
                </div>
              </div>
              {/* Video */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden">
                  <video autoPlay loop muted playsInline className="w-full h-auto" onLoadedMetadata={(e) => e.target.playbackRate = 1.7}>
                    <source src={quantaSandboxVideo} type="video/webm" />
                  </video>
                  <div className="absolute inset-0 pointer-events-none" style={{
                    background: 'linear-gradient(to right, rgba(0,0,0,0.3) 0%, transparent 20%), linear-gradient(to left, rgba(0,0,0,0.3) 0%, transparent 20%)'
                  }} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured: Made4Founders */}
      <section className="snap-section min-h-screen flex items-center px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-orange-500/20 via-red-500/10 to-transparent border border-orange-500/20"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent" />
            <div className="relative grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
              {/* Content */}
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <img src={founderosLogo} alt="Made4Founders" className="w-12 h-12 rounded-xl" />
                  <div>
                    <h2 className="text-3xl font-bold text-white">Made4Founders</h2>
                    <span className="text-xs px-2 py-0.5 rounded bg-green-500/20 text-green-300 border border-green-400/30">Live</span>
                  </div>
                </div>
                <p className="text-orange-400 font-medium mb-4">Your startup's command center. One dashboard to rule them all.</p>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Built for founders who juggle a thousand things at once. AI-powered daily briefs surface what matters,
                  encrypted document vaults keep your cap table and contracts secure, and compliance tracking ensures
                  you never miss a deadline. From fundraising to exit.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-3 rounded-xl bg-white/5">
                    <p className="text-2xl font-bold text-orange-400">500+</p>
                    <p className="text-xs text-gray-500">Active Founders</p>
                  </div>
                  <div className="text-center p-3 rounded-xl bg-white/5">
                    <p className="text-2xl font-bold text-orange-400">$2.4B</p>
                    <p className="text-xs text-gray-500">Tracked Raises</p>
                  </div>
                  <div className="text-center p-3 rounded-xl bg-white/5">
                    <p className="text-2xl font-bold text-orange-400">99.9%</p>
                    <p className="text-xs text-gray-500">Uptime SLA</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-8">
                  {["React", "Node.js", "PostgreSQL", "OpenAI", "Stripe", "AWS"].map(t => (
                    <span key={t} className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10">{t}</span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href="https://made4founders.com" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-red-600 font-semibold hover:opacity-90 transition">
                    Try It Free
                  </a>
                  <a href="https://made4founders.com/features" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full border border-white/20 font-medium hover:bg-white/5 transition flex items-center gap-2">
                    See Features
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </a>
                </div>
              </div>
              {/* Feature Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/10">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center mb-3">
                    <svg className="w-5 h-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                  </div>
                  <h4 className="font-semibold text-white mb-1">AI Daily Briefs</h4>
                  <p className="text-xs text-gray-400">Morning summaries of tasks, metrics, and priorities</p>
                </div>
                <div className="p-5 rounded-2xl bg-gradient-to-br from-red-500/10 to-transparent border border-red-500/10">
                  <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center mb-3">
                    <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                  </div>
                  <h4 className="font-semibold text-white mb-1">Encrypted Vault</h4>
                  <p className="text-xs text-gray-400">AES-256 encrypted storage for sensitive docs</p>
                </div>
                <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/10">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center mb-3">
                    <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <h4 className="font-semibold text-white mb-1">Compliance</h4>
                  <p className="text-xs text-gray-400">SOC2, GDPR tracking with deadline alerts</p>
                </div>
                <div className="p-5 rounded-2xl bg-gradient-to-br from-yellow-500/10 to-transparent border border-yellow-500/10">
                  <div className="w-10 h-10 rounded-xl bg-yellow-500/20 flex items-center justify-center mb-3">
                    <svg className="w-5 h-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                  </div>
                  <h4 className="font-semibold text-white mb-1">Investor CRM</h4>
                  <p className="text-xs text-gray-400">Pipeline tracking from intro to term sheet</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Grid - Expanded Cards */}
      <section className="snap-section min-h-screen flex items-center px-6 py-16">
        <div className="max-w-6xl mx-auto space-y-6">

          {/* Vesper - Expanded */}
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-violet-500/15 to-purple-500/5 border border-violet-500/20 hover:border-violet-500/40 transition-all"
          >
            <div className="grid lg:grid-cols-2">
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <img src={vesperLogo} alt="Vesper" className="w-12 h-12 rounded-xl" />
                  <span className="text-xs px-2 py-1 rounded bg-green-500/20 text-green-300 border border-green-500/30">Live</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">Vesper</h3>
                <p className="text-violet-400 font-medium mb-3">AI-Powered Penetration Testing</p>
                <p className="text-gray-400 mb-4">
                  Dual AI agents work in tandem: one attacks, one analyzes. 11,697 vulnerability templates covering OWASP Top 10,
                  CVEs, and custom exploit chains. Learns from every engagement to get smarter over time.
                </p>
                <div className="flex flex-wrap gap-4 mb-6 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-violet-400"></span>
                    <span className="text-gray-400">11,697 Vuln Templates</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-violet-400"></span>
                    <span className="text-gray-400">Dual AI Agents</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-violet-400"></span>
                    <span className="text-gray-400">Auto-Reporting</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Python", "FastAPI", "Claude AI", "Nuclei", "PostgreSQL"].map(t => (
                    <span key={t} className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10">{t}</span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Link to="/projects/vesper" className="px-5 py-2 rounded-full bg-violet-500/20 text-violet-300 font-medium hover:bg-violet-500/30 transition">Learn more</Link>
                </div>
              </div>
              <div className="relative h-64 lg:h-auto min-h-[300px]">
                <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-70" onLoadedMetadata={(e) => e.target.playbackRate = 2.2}>
                  <source src={vesperDemo} type="video/webm" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Two column: Site2CRM + Forma */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Site2CRM */}
            <motion.div
              initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-emerald-500/15 to-teal-500/5 border border-emerald-500/20 hover:border-emerald-500/40 transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-70">
                  <source src={site2crmVideo} type="video/webm" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6">
                  <div className="flex items-center gap-3">
                    <img src={site2crmLogo} alt="Site2CRM" className="w-10 h-10 rounded-lg" />
                    <span className="text-xs px-2 py-1 rounded bg-green-500/20 text-green-300 border border-green-500/30">Live</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-1">Site2CRM</h3>
                <p className="text-emerald-400 text-sm font-medium mb-3">AI-Powered Lead Analytics</p>
                <p className="text-gray-400 text-sm mb-4">
                  Turn anonymous visitors into qualified leads. AI scoring predicts purchase intent,
                  auto-syncs to your CRM, and gamified leaderboards keep your sales team hungry.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs px-2 py-1 rounded bg-emerald-500/10 text-emerald-400">Lead Scoring</span>
                  <span className="text-xs px-2 py-1 rounded bg-emerald-500/10 text-emerald-400">CRM Sync</span>
                  <span className="text-xs px-2 py-1 rounded bg-emerald-500/10 text-emerald-400">Leaderboards</span>
                </div>
                <div className="flex gap-3">
                  <Link to="/projects/site2crm" className="text-emerald-400 hover:text-emerald-300 font-medium text-sm">Explore →</Link>
                  <a href="https://site2crm.io" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm flex items-center gap-1">
                    Visit site ↗
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Forma */}
            <motion.div
              initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-fuchsia-500/15 to-pink-500/5 border border-fuchsia-500/20 hover:border-fuchsia-500/40 transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-70">
                  <source src={formaDemo} type="video/webm" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6">
                  <div className="flex items-center gap-3">
                    <img src={formaLogo} alt="Forma" className="w-10 h-10 rounded-lg" />
                    <span className="text-xs px-2 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">Beta</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-1">Forma</h3>
                <p className="text-fuchsia-400 text-sm font-medium mb-3">AI Visual Page Builder</p>
                <p className="text-gray-400 text-sm mb-4">
                  Design at the speed of thought. 100+ production-ready components, Claude AI generates
                  layouts from prompts, real-time multiplayer editing, and one-click export to Next.js.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs px-2 py-1 rounded bg-fuchsia-500/10 text-fuchsia-400">100+ Components</span>
                  <span className="text-xs px-2 py-1 rounded bg-fuchsia-500/10 text-fuchsia-400">AI Generation</span>
                  <span className="text-xs px-2 py-1 rounded bg-fuchsia-500/10 text-fuchsia-400">Next.js Export</span>
                </div>
                <Link to="/projects/forma" className="text-fuchsia-400 hover:text-fuchsia-300 font-medium text-sm">Explore →</Link>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Roadmap */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={prefersReduced ? {} : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-8"
          >
            What's Next
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { logo: quantaLogo, name: "QUANTA", items: ["Quantum algorithms (Grover's, Deutsch-Jozsa)", "User accounts & progress sync"] },
              { logo: site2crmLogo, name: "Site2CRM", items: ["Attribution dashboard enhancements", "API v2, more CRM connectors"] },
              { logo: vesperLogo, name: "Vesper", items: ["OOB refinement, attack chain viz", "Public beta, CI/CD integration"] },
            ].map((p, i) => (
              <motion.div
                key={p.name}
                initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <img src={p.logo} alt={p.name} className="w-8 h-8 rounded-lg" />
                  <span className="font-semibold text-white">{p.name}</span>
                </div>
                <ul className="space-y-2">
                  {p.items.map((item, j) => (
                    <li key={j} className="flex gap-2 text-sm text-gray-400">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-violet-400/70 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="relative p-12 md:p-16 rounded-3xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/[0.08]">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need something built?
            </h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
              We build products like these for clients too. Let's talk about your project.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold hover:opacity-90 transition"
            >
              Start a Conversation
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
