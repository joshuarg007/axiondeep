import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "QUANTA | Quantum Computing Education",
  description: "Interactive quantum computing education with drag-and-drop circuit builder, 3D Bloch sphere, and curriculum from qubits to Grover's algorithm.",
  keywords: [
    "quantum computing education",
    "quantum simulation",
    "learn quantum computing",
    "quantum circuit builder",
    "Bloch sphere visualization",
    "Qiskit education",
  ],
  robots: { index: false, follow: true },
  alternates: { canonical: "/projects/quanta" },
};

export default function QuantaPage() {
  return (
    <div className="no-snap min-h-screen pt-32 px-6 pb-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs px-2 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
              Beta
            </span>
            <span className="text-xs px-2 py-1 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
              Education
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">QUANTA: Interactive Quantum Computing Education Platform</h1>
          <p className="text-xl text-cyan-400 font-medium mb-4">
            Learn quantum computing by building circuits, not reading textbooks.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            QUANTA is a hands-on quantum computing education platform that makes abstract
            quantum concepts tangible. Build circuits with a drag-and-drop interface, watch
            quantum states evolve on a real-time 3D Bloch sphere, and progress through a
            structured curriculum that takes you from single qubits to multi-qubit algorithms
            like Grover&apos;s search and quantum teleportation.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-12">
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/20">
            <p className="text-3xl font-bold text-cyan-400">16</p>
            <p className="text-sm text-gray-500 mt-1">Qubit Simulation</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-violet-500/10 to-transparent border border-violet-500/20">
            <p className="text-3xl font-bold text-violet-400">20+</p>
            <p className="text-sm text-gray-500 mt-1">Quantum Gates</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20">
            <p className="text-3xl font-bold text-blue-400">3D</p>
            <p className="text-sm text-gray-500 mt-1">Bloch Sphere</p>
          </div>
        </div>

        {/* Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Core Features</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/10">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="font-semibold text-white mb-2">Drag-and-Drop Circuit Builder</h3>
              <p className="text-sm text-gray-400">
                Build quantum circuits visually by dragging gates onto qubit wires. Supports
                Hadamard, CNOT, Pauli, phase, and measurement gates. See results update in
                real time as you modify your circuit.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-violet-500/10 to-transparent border border-violet-500/10">
              <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
                </svg>
              </div>
              <h3 className="font-semibold text-white mb-2">3D Bloch Sphere Visualization</h3>
              <p className="text-sm text-gray-400">
                Watch quantum states evolve on an interactive 3D Bloch sphere rendered with
                Three.js. See how gates rotate state vectors in real time, making superposition
                and entanglement intuitive rather than abstract.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/10">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-semibold text-white mb-2">Structured Curriculum</h3>
              <p className="text-sm text-gray-400">
                Progress from single-qubit operations through multi-qubit entanglement to
                full algorithms. Each module builds on the last with interactive exercises,
                covering topics from superposition to Grover&apos;s search algorithm.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-teal-500/10 to-transparent border border-teal-500/10">
              <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-white mb-2">Measurement &amp; Probability</h3>
              <p className="text-sm text-gray-400">
                Run simulated measurements and see probability distributions update across
                multiple shots. Understand the probabilistic nature of quantum computing by
                observing how measurement collapses superposition states.
              </p>
            </div>
          </div>
        </div>

        {/* Research Connection */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Research Connection</h2>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/[0.08] to-violet-500/[0.04] border border-white/[0.08]">
            <p className="text-gray-400 leading-relaxed">
              QUANTA is directly connected to our{" "}
              <Link href="/research#drift" className="text-cyan-400 hover:text-cyan-300">
                Project DRIFT
              </Link>{" "}
              research program, which investigates stability degradation in quantum systems
              under repeated operations. The platform serves as both an educational tool and a
              research instrument for exploring how operator ordering and gate diversity affect
              quantum state evolution. Concepts explored in QUANTA&apos;s curriculum, gate
              composition, measurement, and entanglement, map directly to the phenomena under
              study in our active research.
            </p>
          </div>
        </div>

        {/* How QUANTA Teaches Quantum Computing */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">How QUANTA Teaches Quantum Computing</h2>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/[0.08] to-violet-500/[0.04] border border-white/[0.08]">
            <p className="text-gray-400 leading-relaxed mb-4">
              Traditional quantum computing education relies heavily on linear algebra notation
              and abstract mathematical formalism. QUANTA takes a different approach: every concept
              is paired with an interactive simulation. When you learn about superposition, you
              place a Hadamard gate on a qubit wire and watch the Bloch sphere rotate in real time.
              When you study entanglement, you build a Bell state circuit and observe correlated
              measurement outcomes across multiple shots.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              The structured curriculum progresses from single-qubit operations through multi-qubit
              entanglement to complete algorithms. Each module builds on the previous one with
              interactive exercises that reinforce concepts through hands-on circuit building.
              The platform supports up to 16 qubits, enabling exploration of algorithms like
              Grover&apos;s search, quantum teleportation, and the Deutsch-Jozsa algorithm.
            </p>
            <p className="text-gray-400 leading-relaxed">
              QUANTA&apos;s drag-and-drop circuit builder supports over 20 quantum gates including
              Hadamard, CNOT, Pauli-X/Y/Z, phase gates, T gates, and controlled rotations. The
              3D Bloch sphere visualization, rendered with Three.js and WebGL, provides immediate
              visual feedback as you modify circuits, making abstract quantum states tangible and
              intuitive for learners at every level.
            </p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {["React", "TypeScript", "FastAPI", "Qiskit", "Three.js", "WebGL", "Python"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-white/5 text-gray-400 border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex gap-4">
          <Link
            href="/contact"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 font-semibold text-white hover:opacity-90 transition"
          >
            Request Beta Access
          </Link>
          <Link
            href="/research#drift"
            className="px-8 py-4 rounded-full border border-white/20 font-medium text-white hover:bg-white/5 transition flex items-center gap-2"
          >
            Related Research
          </Link>
        </div>

        {/* Back Link */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <Link href="/projects" className="text-gray-400 hover:text-white transition flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
