import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Import media
import quantaSandbox from "../../assets/quanta-sandbox.png";
import quantaSandboxVideo from "../../assets/quanta-sandbox.webm";

export default function Quanta() {
  const appUrl = "https://quanta.axiondeep.com";

  return (
    <div className="relative z-10 text-gray-300 space-y-16 max-w-4xl mx-auto px-6 md:px-8 lg:px-12 pt-32 md:pt-40 pb-20">
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
            <h1 className="text-4xl md:text-5xl font-semibold text-white">
              QUANTA
            </h1>
            <span className="text-xs px-3 py-1.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-400/20">
              In active development
            </span>
          </div>
          <p className="text-xl text-gray-300 mt-4">
            Interactive Quantum Computing Learning Platform
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
            <img src={quantaSandbox} alt="QUANTA Sandbox Mode" />
          </video>
        </div>

        {/* Overview */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Overview</h2>
          <p className="text-gray-300 leading-relaxed">
            QUANTA is a hands-on quantum computing education platform designed to make quantum concepts
            accessible through interactive visualization and experimentation. Build quantum circuits,
            watch qubits evolve on the Bloch sphere in real-time, and progress through structured
            lessons from fundamentals to advanced algorithms.
          </p>
          <p className="text-sm text-gray-500 italic">
            Built on insights from our{" "}
            <Link to="/research" className="text-violet-400 hover:text-violet-300 not-italic">
              research work
            </Link>{" "}
            in quantum systems and interactive learning.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Unlike traditional quantum computing resources that rely heavily on abstract mathematics,
            QUANTA emphasizes visual intuition and immediate feedback. Every gate operation updates
            the Bloch sphere visualization instantly, helping learners build genuine understanding
            of quantum mechanics.
          </p>

          <a
            href={appUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 font-semibold hover:opacity-90 transition"
          >
            Try QUANTA
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </section>

        {/* Key Features */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "🔧",
                title: "Interactive Circuit Builder",
                description: "Drag-and-drop quantum gates onto qubits. Add H, X, Y, Z, CNOT, and rotation gates with intuitive controls."
              },
              {
                icon: "🌐",
                title: "Real-time Bloch Sphere",
                description: "Visualize qubit states as they evolve. See superposition, phase, and entanglement come to life in 3D."
              },
              {
                icon: "📚",
                title: "Structured Lessons",
                description: "Progress from 'What is a Qubit?' to Grover's Search with interactive exercises and quizzes."
              },
              {
                icon: "⚡",
                title: "Instant Simulation",
                description: "Run circuits and see measurement probabilities immediately. Understand quantum behavior through experimentation."
              },
              {
                icon: "💾",
                title: "Progress Tracking",
                description: "Your lesson progress is saved automatically. Pick up right where you left off."
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

        {/* Screenshots */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">In Action</h2>
          <div className="space-y-6">
            <div className="space-y-3">
              <img
                src={quantaSandbox}
                alt="QUANTA Sandbox Mode"
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
          <h2 className="text-2xl font-semibold text-white">Example Use Cases</h2>
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
                title: "Explore Quantum Gates",
                description: "Experiment with X, Y, Z rotations and see how they transform qubit states. Understand why Z gates add phase without changing measurement probabilities.",
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
                  Try it →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Curriculum */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Curriculum</h2>
          <div className="space-y-4">
            {[
              {
                track: "Quantum Fundamentals",
                lessons: ["What is a Qubit?", "Superposition", "Measurement", "Entanglement"],
                status: "Available"
              },
              {
                track: "Quantum Gates",
                lessons: ["Pauli Gates (X, Y, Z)", "Hadamard Gate", "CNOT & Entanglement", "Rotation Gates"],
                status: "Available"
              },
              {
                track: "Quantum Algorithms",
                lessons: ["Deutsch-Jozsa Algorithm", "Grover's Search"],
                status: "Coming Soon"
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
                <ul className="space-y-1">
                  {track.lessons.map((lesson, j) => (
                    <li key={j} className="text-sm text-gray-400 flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-violet-400/70" />
                      {lesson}
                    </li>
                  ))}
                </ul>
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
          <h2 className="text-2xl font-semibold text-white mb-4">Start Learning Quantum Computing</h2>
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
              Get in Touch
            </Link>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
