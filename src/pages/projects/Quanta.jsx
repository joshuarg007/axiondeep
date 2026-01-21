import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";

// Import media
import quantaSandbox from "../../assets/quanta-sandbox.png";
import quantaSandboxVideo from "../../assets/quanta-sandbox.webm";

export default function Quanta() {
  const appUrl = "https://quanta.axiondeep.com";

  return (
    <div className="relative z-10 text-gray-300 space-y-16 max-w-4xl mx-auto px-6 md:px-8 lg:px-12 pt-32 md:pt-40 pb-20">
      <SEO
        title="QUANTA - Custom Education Software for Quantum Computing | Axion Deep Labs"
        description="Custom educational software for learning quantum computing through interactive simulations. Structured curriculum with visual Bloch sphere and circuit builder. Built by Axion Deep Labs."
        keywords="custom education software, quantum computing education platform, interactive learning software, custom software solutions, quantum simulation software, educational technology"
        canonical="/projects/quanta"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-16"
      >
        {/* Header */}
        <div>
          <Link
            to="/solutions"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition mb-6"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Solutions
          </Link>

          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-sm text-cyan-300 mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                Education Platform
              </div>
              <h1 className="text-4xl md:text-5xl font-semibold text-white">
                QUANTA
              </h1>
            </div>
            <span className="text-xs px-3 py-1.5 rounded-full bg-green-500/10 text-green-300 border border-green-400/20">
              Available Now
            </span>
          </div>
          <p className="text-xl text-gray-300 mt-4">
            Interactive Quantum Computing Learning Platform
          </p>
          <p className="text-gray-400 mt-3 max-w-2xl">
            Master quantum computing fundamentals through hands-on practice with interactive
            simulations, structured curriculum, and real-time visualization.
          </p>
        </div>

        {/* Hero Video */}
        <div className="rounded-xl overflow-hidden border border-white/10">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={quantaSandbox}
            className="w-full"
          >
            <source src={quantaSandboxVideo} type="video/webm" />
            <img src={quantaSandbox} alt="QUANTA Sandbox Mode" loading="lazy" />
          </video>
        </div>

        {/* Target Audiences */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Who QUANTA Is For</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🎓",
                title: "Students",
                description: "Undergraduate and graduate students learning quantum computing concepts. Build intuition through interactive exercises before diving into the mathematics."
              },
              {
                icon: "👩‍🏫",
                title: "Educators",
                description: "University instructors and course designers looking for supplementary teaching tools. Assign lessons, track progress, and enhance lectures with live demonstrations."
              },
              {
                icon: "🏛️",
                title: "Institutions",
                description: "Universities and organizations building quantum computing programs. Provide standardized, accessible training for students at scale."
              }
            ].map((audience, i) => (
              <div key={i} className="border border-white/10 rounded-xl bg-white/[0.03] p-6">
                <div className="text-3xl mb-3">{audience.icon}</div>
                <h3 className="font-semibold text-white mb-2">{audience.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{audience.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Overview */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Overview</h2>
          <p className="text-gray-300 leading-relaxed">
            QUANTA is a hands-on quantum computing education platform designed to make quantum concepts
            accessible through interactive visualization and guided practice. Build quantum circuits,
            watch qubits evolve on the Bloch sphere in real-time, and progress through structured
            lessons from fundamentals to advanced algorithms.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Unlike traditional quantum computing resources that rely heavily on abstract mathematics,
            QUANTA emphasizes visual intuition and immediate feedback. Every gate operation updates
            the Bloch sphere visualization instantly, helping learners build genuine understanding
            of quantum mechanics.
          </p>
          <p className="text-sm text-gray-500 italic">
            Built on insights from our{" "}
            <Link to="/research" className="text-violet-400 hover:text-violet-300 not-italic">
              research program
            </Link>{" "}
            in quantum system behavior.
          </p>

          <a
            href={appUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 font-semibold hover:opacity-90 transition"
          >
            Start Learning Free
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </section>

        {/* Key Features */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Platform Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "🔧",
                title: "Interactive Circuit Builder",
                description: "Drag-and-drop quantum gates onto qubits. Practice with H, X, Y, Z, CNOT, and rotation gates using intuitive controls."
              },
              {
                icon: "🌐",
                title: "Real-time Bloch Sphere",
                description: "Visualize qubit states as they evolve. See superposition, phase, and entanglement come to life in 3D."
              },
              {
                icon: "📚",
                title: "Structured Curriculum",
                description: "Progress from 'What is a Qubit?' to Grover's Search with guided lessons, interactive exercises, and assessments."
              },
              {
                icon: "⚡",
                title: "Instant Simulation",
                description: "Run circuits and see measurement probabilities immediately. Learn quantum behavior through hands-on experimentation."
              },
              {
                icon: "💾",
                title: "Progress Tracking",
                description: "Your lesson progress is saved automatically. Pick up right where you left off across sessions."
              },
              {
                icon: "🎨",
                title: "Visual-First Design",
                description: "Every concept is explained with animations, diagrams, and interactive elements—not just equations."
              }
            ].map((feature, i) => (
              <div key={i} className="border border-white/10 rounded-xl bg-white/5 p-5">
                <div className="text-2xl mb-2">{feature.icon}</div>
                <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Curriculum */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Curriculum</h2>
          <p className="text-gray-400">
            Structured learning paths designed to build competency progressively. Each module includes
            interactive lessons, practice exercises, and knowledge checks.
          </p>
          <div className="space-y-4">
            {[
              {
                track: "Quantum Fundamentals",
                lessons: ["What is a Qubit?", "Superposition", "Measurement", "Entanglement"],
                status: "Available",
                outcomes: "Understand core quantum computing concepts and terminology"
              },
              {
                track: "Quantum Gates",
                lessons: ["Pauli Gates (X, Y, Z)", "Hadamard Gate", "CNOT & Entanglement", "Rotation Gates"],
                status: "Available",
                outcomes: "Master the standard gate set used in quantum circuits"
              },
              {
                track: "Quantum Algorithms",
                lessons: ["Deutsch-Jozsa Algorithm", "Grover's Search", "Quantum Fourier Transform"],
                status: "Coming Soon",
                outcomes: "Apply quantum principles to solve computational problems"
              }
            ].map((track, i) => (
              <div key={i} className="border border-white/10 rounded-xl bg-white/5 p-5">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-white">{track.track}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    track.status === "Available"
                      ? "bg-green-500/10 text-green-300 border border-green-400/20"
                      : "bg-yellow-500/10 text-yellow-300 border border-yellow-400/20"
                  }`}>
                    {track.status}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mb-3">Learning Outcome: {track.outcomes}</p>
                <ul className="space-y-1">
                  {track.lessons.map((lesson, j) => (
                    <li key={j} className="text-sm text-gray-400 flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-cyan-400/70" />
                      {lesson}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Screenshots */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">In Action</h2>
          <div className="space-y-6">
            <div className="space-y-3">
              <img
                src={quantaSandbox}
                alt="QUANTA Sandbox Mode"
                loading="lazy"
                className="w-full rounded-xl border border-white/10"
              />
              <p className="text-sm text-gray-400">
                Sandbox mode: Build circuits with up to 16 qubits, apply gates, and see real-time probability distributions
              </p>
            </div>
          </div>
        </section>

        {/* Example Use Cases */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Practice Exercises</h2>
          <div className="space-y-6">
            {[
              {
                title: "Learn Superposition",
                description: "Start with a qubit in |0⟩, apply a Hadamard gate, and watch it move to the equator of the Bloch sphere. The visualization shows exactly why measurement gives 50/50 probability.",
                link: `${appUrl}/learn/fundamentals/superposition`
              },
              {
                title: "Build a Bell State",
                description: "Create entangled qubits by applying H to qubit 0, then CNOT with qubit 0 as control. Run measurements and observe the correlated outcomes.",
                link: `${appUrl}/sandbox`
              },
              {
                title: "Master Quantum Gates",
                description: "Practice with X, Y, Z rotations and see how they transform qubit states. Understand why Z gates add phase without changing measurement probabilities.",
                link: `${appUrl}/learn/gates/pauli-gates`
              }
            ].map((example, i) => (
              <div key={i} className="border border-white/10 rounded-xl bg-white/5 p-6">
                <h3 className="font-semibold text-white text-lg mb-2">{example.title}</h3>
                <p className="text-gray-400 mb-4">{example.description}</p>
                <a
                  href={example.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 text-sm inline-flex items-center gap-1"
                >
                  Try this lesson →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* University Partnership */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">University Partnerships</h2>
          <div className="border border-cyan-500/20 rounded-xl bg-gradient-to-br from-cyan-900/10 to-violet-900/10 p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Integrate QUANTA Into Your Program</h3>
                <p className="text-gray-400 leading-relaxed">
                  We partner with universities to provide QUANTA as a supplementary learning tool
                  for quantum computing courses. Institutional access includes:
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-400/70 shrink-0" />
                    <span>Cohort management and progress tracking</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-400/70 shrink-0" />
                    <span>Curriculum alignment with your course objectives</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-400/70 shrink-0" />
                    <span>Educator dashboard for assignment creation</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-400/70 shrink-0" />
                    <span>Priority support and onboarding</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col justify-center">
                <div className="border border-white/10 rounded-xl bg-white/[0.03] p-6 text-center">
                  <p className="text-gray-400 mb-4">Interested in institutional access?</p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 font-medium transition"
                  >
                    Contact Us
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Access Options</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                tier: "Free",
                price: "$0",
                period: "forever",
                description: "Get started learning quantum computing fundamentals",
                features: [
                  "Full curriculum access",
                  "Sandbox mode",
                  "Progress tracking",
                  "Community support"
                ],
                cta: "Start Free",
                ctaLink: appUrl,
                highlight: false
              },
              {
                tier: "Individual Pro",
                price: "Coming Soon",
                period: "",
                description: "Advanced features for serious learners",
                features: [
                  "Everything in Free",
                  "Advanced algorithms module",
                  "Completion certificates",
                  "Priority support"
                ],
                cta: "Join Waitlist",
                ctaLink: "/contact",
                highlight: true
              },
              {
                tier: "Institutional",
                price: "Custom",
                period: "",
                description: "For universities and organizations",
                features: [
                  "Unlimited student seats",
                  "Cohort management",
                  "Educator dashboard",
                  "LMS integration",
                  "Dedicated support"
                ],
                cta: "Contact Sales",
                ctaLink: "/contact",
                highlight: false
              }
            ].map((plan, i) => (
              <div
                key={i}
                className={`border rounded-xl p-6 ${
                  plan.highlight
                    ? "border-cyan-500/40 bg-gradient-to-br from-cyan-900/20 to-violet-900/20"
                    : "border-white/10 bg-white/[0.03]"
                }`}
              >
                <h3 className="font-semibold text-white text-lg">{plan.tier}</h3>
                <div className="mt-2 mb-4">
                  <span className="text-2xl font-bold text-white">{plan.price}</span>
                  {plan.period && <span className="text-gray-500 text-sm"> /{plan.period}</span>}
                </div>
                <p className="text-sm text-gray-400 mb-4">{plan.description}</p>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="text-sm text-gray-400 flex items-center gap-2">
                      <svg className="w-4 h-4 text-cyan-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                {plan.ctaLink.startsWith("http") ? (
                  <a
                    href={plan.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block text-center py-2.5 rounded-lg font-medium transition ${
                      plan.highlight
                        ? "bg-gradient-to-r from-cyan-500 to-violet-600 hover:opacity-90"
                        : "bg-white/10 hover:bg-white/15 border border-white/20"
                    }`}
                  >
                    {plan.cta}
                  </a>
                ) : (
                  <Link
                    to={plan.ctaLink}
                    className={`block text-center py-2.5 rounded-lg font-medium transition ${
                      plan.highlight
                        ? "bg-gradient-to-r from-cyan-500 to-violet-600 hover:opacity-90"
                        : "bg-white/10 hover:bg-white/15 border border-white/20"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Technology</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "React", desc: "Frontend" },
              { name: "TypeScript", desc: "Type Safety" },
              { name: "FastAPI", desc: "Backend" },
              { name: "Three.js", desc: "3D Graphics" },
              { name: "NumPy", desc: "Simulation" },
              { name: "Zustand", desc: "State" },
              { name: "Vite", desc: "Build Tool" },
              { name: "Tailwind", desc: "Styling" },
            ].map((tech, i) => (
              <div key={i} className="border border-white/10 rounded-lg bg-white/5 p-3 text-center">
                <div className="font-medium text-white text-sm">{tech.name}</div>
                <div className="text-xs text-gray-500">{tech.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-white/10 pt-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Start Learning Quantum Computing Today</h2>
          <p className="text-gray-400 mb-6">
            QUANTA is free to use and works entirely in your browser. No installation required—just
            open the app and start building circuits.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={appUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 font-semibold hover:opacity-90 transition"
            >
              Launch QUANTA
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <Link
              to="/contact"
              className="inline-block px-6 py-3 rounded-full border border-white/20 font-semibold hover:bg-white/5 transition"
            >
              Contact Sales
            </Link>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
