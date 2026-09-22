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
    <div className="obs-page">
      <div className="obs-container">
        {/* Header */}
        <div className="obs-narrow" style={{ marginLeft: 0, textAlign: "left" }}>
          <div style={{ display: "flex", gap: 10, marginBottom: 22 }}>
            <span className="obs-chip">Beta</span>
            <span className="obs-chip live">Education</span>
          </div>
          <span className="obs-eyebrow line">QUANTA</span>
          <h1 className="obs-h1">
            Interactive <span className="g">quantum computing</span> education platform
          </h1>
          <p
            className="obs-eyebrow"
            style={{ color: "var(--cyan)", marginTop: 22, letterSpacing: ".08em" }}
          >
            Learn quantum computing by building circuits, not reading textbooks.
          </p>
          <p className="obs-lead">
            QUANTA is a hands-on quantum computing education platform that makes abstract
            quantum concepts tangible. Build circuits with a drag-and-drop interface, watch
            quantum states evolve on a real-time 3D Bloch sphere, and progress through a
            structured curriculum that takes you from single qubits to multi-qubit algorithms
            like Grover&apos;s search and quantum teleportation.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 26 }}>
            <span className="obs-metric">
              Qubit simulation <b>16</b>
            </span>
            <span className="obs-metric">
              Quantum gates <b>20+</b>
            </span>
            <span className="obs-metric">
              Bloch sphere <b>3D</b>
            </span>
          </div>
        </div>

        {/* Features */}
        <section className="obs-section">
          <div className="obs-sec-head">
            <span className="obs-eyebrow">Core features</span>
            <h2 className="obs-h2">What you build with</h2>
          </div>
          <div className="obs-grid obs-grid-2">
            <div className="obs-card">
              <div style={{ color: "var(--cyan)", marginBottom: 14 }}>
                <svg width={26} height={26} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3>Drag-and-Drop Circuit Builder</h3>
              <p>
                Build quantum circuits visually by dragging gates onto qubit wires. Supports
                Hadamard, CNOT, Pauli, phase, and measurement gates. See results update in
                real time as you modify your circuit.
              </p>
            </div>
            <div className="obs-card">
              <div style={{ color: "var(--violet)", marginBottom: 14 }}>
                <svg width={26} height={26} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
                </svg>
              </div>
              <h3>3D Bloch Sphere Visualization</h3>
              <p>
                Watch quantum states evolve on an interactive 3D Bloch sphere rendered with
                Three.js. See how gates rotate state vectors in real time, making superposition
                and entanglement intuitive rather than abstract.
              </p>
            </div>
            <div className="obs-card">
              <div style={{ color: "var(--cyan)", marginBottom: 14 }}>
                <svg width={26} height={26} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3>Structured Curriculum</h3>
              <p>
                Progress from single-qubit operations through multi-qubit entanglement to
                full algorithms. Each module builds on the last with interactive exercises,
                covering topics from superposition to Grover&apos;s search algorithm.
              </p>
            </div>
            <div className="obs-card">
              <div style={{ color: "var(--fuchsia)", marginBottom: 14 }}>
                <svg width={26} height={26} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3>Measurement &amp; Probability</h3>
              <p>
                Run simulated measurements and see probability distributions update across
                multiple shots. Understand the probabilistic nature of quantum computing by
                observing how measurement collapses superposition states.
              </p>
            </div>
          </div>
        </section>

        {/* Research Connection */}
        <section className="obs-section">
          <div className="obs-sec-head">
            <span className="obs-eyebrow">Research connection</span>
            <h2 className="obs-h2">A teaching tool and a research instrument</h2>
          </div>
          <div className="obs-prose">
            <p>
              QUANTA is directly connected to our{" "}
              <Link href="/research#drift">Project DRIFT</Link> research program, which
              investigates stability degradation in quantum systems under repeated operations.
              The platform serves as both an educational tool and a research instrument for
              exploring how operator ordering and gate diversity affect quantum state evolution.
              Concepts explored in QUANTA&apos;s curriculum, gate composition, measurement, and
              entanglement, map directly to the phenomena under study in our active research.
            </p>
          </div>
        </section>

        {/* How QUANTA Teaches Quantum Computing */}
        <section className="obs-section">
          <div className="obs-sec-head">
            <span className="obs-eyebrow">The approach</span>
            <h2 className="obs-h2">How QUANTA teaches quantum computing</h2>
          </div>
          <div className="obs-prose">
            <p>
              Traditional quantum computing education relies heavily on linear algebra notation
              and abstract mathematical formalism. QUANTA takes a different approach: every concept
              is paired with an interactive simulation. When you learn about superposition, you
              place a Hadamard gate on a qubit wire and watch the Bloch sphere rotate in real time.
              When you study entanglement, you build a Bell state circuit and observe correlated
              measurement outcomes across multiple shots.
            </p>
            <p>
              The structured curriculum progresses from single-qubit operations through multi-qubit
              entanglement to complete algorithms. Each module builds on the previous one with
              interactive exercises that reinforce concepts through hands-on circuit building.
              The platform supports up to 16 qubits, enabling exploration of algorithms like
              Grover&apos;s search, quantum teleportation, and the Deutsch-Jozsa algorithm.
            </p>
            <p>
              QUANTA&apos;s drag-and-drop circuit builder supports over 20 quantum gates including
              Hadamard, CNOT, Pauli-X/Y/Z, phase gates, T gates, and controlled rotations. The
              3D Bloch sphere visualization, rendered with Three.js and WebGL, provides immediate
              visual feedback as you modify circuits, making abstract quantum states tangible and
              intuitive for learners at every level.
            </p>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="obs-section">
          <div className="obs-sec-head">
            <span className="obs-eyebrow">Tech stack</span>
            <h2 className="obs-h2">Built on</h2>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {["React", "TypeScript", "FastAPI", "Qiskit", "Three.js", "WebGL", "Python"].map((tech) => (
              <span key={tech} className="obs-chip">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="obs-section">
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
            <Link href="/contact" className="obs-btn obs-btn-p">
              Request Beta Access
            </Link>
            <Link href="/research#drift" className="obs-btn obs-btn-g">
              Related Research
            </Link>
          </div>
          <div style={{ marginTop: 40 }}>
            <Link
              href="/projects"
              className="obs-eyebrow"
              style={{ color: "var(--muted)", gap: 8 }}
            >
              <svg width={15} height={15} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Projects
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
