"use client";

import { useState, useEffect, useCallback, type ReactNode } from "react";
import Link from "next/link";

/* ─── Types ─────────────────────────────────────────────────── */

interface ColorScheme {
  gradient: string;
  gradientBg: string;
  text: string;
  textMuted: string;
  border: string;
  dot: string;
  statusBg: string;
}

interface Reference {
  text: ReactNode;
}

interface ResultRow {
  arch: string;
  params: string;
  h0: string;
  retention: string;
  highlight?: boolean;
}

interface MethodologyColumn {
  label: string;
  content: string;
}

interface Section {
  title: string;
  content: ReactNode;
}

interface Program {
  id: string;
  number: string;
  name: string;
  fullName: string;
  status: string;
  colors: ColorScheme;
  sections: Section[];
  methodology?: { columns: MethodologyColumn[] };
  results?: { rows: ResultRow[]; summary: ReactNode; pending: string; findingsLink?: boolean };
  connections?: Section;
  references: Reference[];
  publicationTarget: string;
  footnote?: ReactNode;
  protocolAnchor?: string;
}

/* ─── Color Schemes ─────────────────────────────────────────── */

const COLORS: Record<string, ColorScheme> = {
  persist: {
    gradient: "from-emerald-500 to-teal-600",
    gradientBg: "from-emerald-500/10 to-teal-500/5",
    text: "text-emerald-300",
    textMuted: "text-emerald-400/60",
    border: "border-emerald-500/20",
    dot: "bg-emerald-400/40",
    statusBg: "bg-emerald-500/20",
  },
  drift: {
    gradient: "from-violet-500 to-purple-600",
    gradientBg: "from-violet-500/10 to-purple-500/5",
    text: "text-violet-300",
    textMuted: "text-violet-400/60",
    border: "border-violet-500/20",
    dot: "bg-violet-400/40",
    statusBg: "bg-violet-500/20",
  },
  phi: {
    gradient: "from-amber-500 to-orange-600",
    gradientBg: "from-amber-500/10 to-orange-500/5",
    text: "text-amber-300",
    textMuted: "text-amber-400/60",
    border: "border-amber-500/20",
    dot: "bg-amber-400/40",
    statusBg: "bg-amber-500/20",
  },
  genesis: {
    gradient: "from-cyan-500 to-blue-600",
    gradientBg: "from-cyan-500/10 to-blue-500/5",
    text: "text-cyan-300",
    textMuted: "text-cyan-400/60",
    border: "border-cyan-500/20",
    dot: "bg-cyan-400/40",
    statusBg: "bg-cyan-500/20",
  },
};

/* ─── Program Data ──────────────────────────────────────────── */

const PROGRAMS: Program[] = [
  {
    id: "persist",
    number: "I",
    name: "Project PERSIST",
    fullName: "Plasticity-Enabled Retention through Structured Information Synthesis over Time",
    status: "Preliminary Complete \u2014 Phase I Scale Validation Planned (Requires Supercomputer)",
    colors: COLORS.persist,
    sections: [
      {
        title: "Problem",
        content:
          "Catastrophic forgetting (McCloskey & Cohen, 1989) prevents neural networks from learning sequential tasks without destroying previously acquired knowledge. Current mitigations \u2014 elastic weight consolidation (Kirkpatrick et al., 2017), replay buffers, progressive networks \u2014 reduce but do not eliminate interference. The underlying geometric mechanism remains poorly understood.",
      },
      {
        title: "Hypothesis",
        content:
          "The persistence of learned knowledge under sequential task training is predictable from the topological features of the loss landscape around converged weight configurations. Architectures whose landscapes exhibit richer topological structure (measured via persistent homology H\u2081) are more resistant to catastrophic forgetting, independent of model size.",
      },
    ],
    methodology: {
      columns: [
        {
          label: "Datasets & Training",
          content:
            "3 datasets: CIFAR-100, CUB-200-2011 (fine-grained birds), NWPU-RESISC45 (satellite scenes). 19 architectures (14 diverse + WRN-28-k width ladder, k=1,2,4,6,8,10) trained to convergence on Task A, then sequentially on Task B (naive, EWC, and cosine LR variants).",
        },
        {
          label: "Topological Analysis",
          content:
            "Loss landscape sampled on 50x50 grid along 5 independent filter-normalized random 2D slices. Persistent homology via Ripser (graph-based) and GUDHI cubical complexes (validation). LOAO predictive model with permutation test for incremental topology value.",
        },
      ],
    },
    results: {
      rows: [
        { arch: "ViT-Tiny", params: "0.3M", h0: "0.01", retention: "22.5%", highlight: true },
        { arch: "ShuffleNet-V2", params: "1.3M", h0: "0.79", retention: "17.3%" },
        { arch: "EfficientNet-B0", params: "4.1M", h0: "1.91", retention: "7.1%" },
        { arch: "WRN-28-10", params: "36.5M", h0: "0.07", retention: "0.3%" },
        { arch: "ResNet-18 Wide", params: "44.7M", h0: "0.00", retention: "0.0%" },
      ],
      summary: (
        <>
          <strong>Preliminary proof-of-concept (small-scale, 0.3M-44.7M params):</strong> On CIFAR-100 (n=19), parameter count dominates (rho = -0.76, survives Bonferroni) and topology is redundant. On CUB-200 (n=19), topology rescues prediction (p = 0.037), but this does not survive Bonferroni across 3 datasets. On RESISC-45 (n=19), topology does not help (p = 0.566), but H0 strongly predicts EWC benefit (rho = 0.86, p = 2.4e-6). Phase 6 pooled interaction analysis (n=57, clustered bootstrap) formally confirms dataset moderation (p=0.046). <strong>Phase I (planned, requires supercomputer):</strong> Whether these signals survive at production scale (100M-7B+ params) is genuinely unknown. Computing persistent homology on large parameter spaces introduces fundamental computational barriers requiring novel distributed algorithms and supercomputer resources.
        </>
      ),
      pending: "Preliminary: 57/57 configurations complete (small-scale proof-of-concept). Phase I: Scale validation to 100M-7B+ parameter models planned (requires supercomputer allocation).",
      findingsLink: true,
    },
    references: [
      { text: <>McCloskey &amp; Cohen (1989). Catastrophic interference in connectionist networks. <i>Psych. of Learning and Motivation</i>.</> },
      { text: <>Kirkpatrick et al. (2017). Overcoming catastrophic forgetting. <i>PNAS</i>, 114(13).</> },
      { text: <>Ballester &amp; Araujo (2020). TDA and deep learning. <i>NeurIPS Workshop</i>.</> },
      { text: <>Li et al. (2018). Visualizing the loss landscape of neural nets. <i>NeurIPS</i>.</> },
    ],
    publicationTarget: "NeurIPS / ICML (Continual Learning track)",
    protocolAnchor: "#exp-01",
  },
  {
    id: "drift",
    number: "II",
    name: "Project DRIFT",
    fullName: "Degradation Regimes In Iterated Field Transformations",
    status: "Active",
    colors: COLORS.drift,
    sections: [
      {
        title: "Focus",
        content:
          "Investigating behavioral uncertainty in quantum system state evolution under repeated manipulation. Focused on stability degradation under variation in operator ordering and diversity, in regimes where closed-form analytical prediction is not feasible across all configurations.",
      },
      {
        title: "Research Themes",
        content: null, // Rendered as a bullet list instead
      },
    ],
    references: [
      { text: "Tranter et al. (2019). Ordering and Trotter error in quantum simulation." },
      { text: "Nakamura & Ankerhold (2024). Non-Markovian effects in iterated quantum channels." },
      { text: "Huang et al. (2024). Gate diversity as a design axis in quantum circuits." },
      { text: "Kwon et al. (2021). Gate-based quantum computing review." },
    ],
    publicationTarget: "Physical Review A / Quantum Science and Technology",
  },
  {
    id: "phi",
    number: "III",
    name: "Project \u03a6",
    fullName: "Systematic Survey of Integrated Information in Neural Network Architectures",
    status: "Protocol Defined",
    colors: COLORS.phi,
    sections: [
      {
        title: "Objective",
        content:
          'Compute integrated information (\u03a6*) \u2014 a scalar measure of how much a system is \u201cmore than the sum of its parts\u201d (Tononi, 2004) \u2014 across major deep learning architecture families. Test whether \u03a6* correlates with generalization, transfer learning, and robustness. No systematic \u03a6* survey across modern deep learning architectures has been published.',
      },
      {
        title: "Methodology",
        content: (
          <>
            <p className="mb-3">
              \u03a6* approximation adapted for neural networks using the KSG mutual
              information estimator (Kraskov et al., 2004). Greedy bipartition search
              for the minimum information partition. Validated independently using
              Perturbational Complexity Index (Casali et al., 2013).
            </p>
            <p>
              Architecture survey: MLPs, CNNs (ResNet), RNNs (LSTM, GRU), Transformers
              (GPT-2, ViT), Graph Networks (GCN, GAT). \u03a6* measured at 5 training
              checkpoints per architecture.
            </p>
          </>
        ),
      },
    ],
    connections: {
      title: "Connection to PERSIST",
      content:
        "If topological depth (PERSIST) predicts forgetting resistance, does information integration (\u03a6*) also predict it? Networks with higher integrated information may create deeper topological features because integration requires complex, multi-scale structure in the loss landscape. QUANTA serves as a research instrument for interactive exploration of these measurements.",
    },
    references: [
      { text: <>Tononi (2004). An information integration theory of consciousness. <i>BMC Neuroscience</i>.</> },
      { text: <>Oizumi et al. (2014). From phenomenology to mechanisms of consciousness: IIT 3.0. <i>PLoS Comp. Bio.</i></> },
      { text: <>Barrett &amp; Seth (2011). Practical measures of integrated information. <i>PLoS Comp. Bio.</i></> },
      { text: <>Casali et al. (2013). Perturbational complexity index. <i>Science Translational Medicine</i>.</> },
    ],
    publicationTarget: "Nature Machine Intelligence / ICLR / Neuroscience of Consciousness",
    footnote: (
      <p>
        IIT&apos;s \u03a6 metric has implications beyond computational systems. The
        relationship between integrated information and quantum measurement \u2014
        whether systems with measurable \u03a6 interact with quantum states differently
        \u2014 is an open question in the foundations of physics. Relevant work includes
        Von Neumann (1932) on quantum measurement, Wigner (1961) on consciousness and
        wave function collapse, and experimental investigations by Radin et al. (2012,
        2016) and Nelson (2001). These connections inform our long-term research
        direction but are not the focus of EXP-02.
      </p>
    ),
    protocolAnchor: "#exp-02",
  },
  {
    id: "genesis",
    number: "IV",
    name: "Project GENESIS",
    fullName: "Information Capacity Scaling Laws in Neural Networks",
    status: "Protocol Defined",
    colors: COLORS.genesis,
    sections: [
      {
        title: "Hypothesis",
        content: (
          <>
            Neural network information capacity follows an area law \u2014 proportional
            to boundary parameters (input/output interface) \u2014 rather than a volume
            law proportional to total parameter count. This would constitute a
            computational analog of the Bekenstein bound (Bekenstein, 1973), which
            establishes that maximum entropy in a physical region is proportional to
            surface area, not volume.
          </>
        ),
      },
      {
        title: "Methodology",
        content: (
          <>
            Memorization capacity measurement (Zhang et al., 2017) across 15+
            architecture configurations varying depth/width ratios. Power-law fitting
            on log-log axes: C ~ V<sup>\u03b1</sup> vs C ~ A<sup>\u03b2</sup>. Bayesian
            model comparison (BIC) to determine which scaling relationship is
            statistically preferred. Decisive test: vary depth at constant width \u2014
            if capacity saturates, area law is supported.
          </>
        ),
      },
    ],
    connections: {
      title: "Connection to PERSIST",
      content:
        "If capacity is boundary-limited, catastrophic forgetting may occur when new task information competes for limited boundary capacity. Topological protection (PERSIST) may work by encoding knowledge in interior parameters that new learning cannot overwrite. The area law, if confirmed, would provide a theoretical explanation for why topology predicts forgetting.",
    },
    references: [
      { text: <>Bekenstein (1973). Black holes and entropy. <i>Physical Review D</i>.</> },
      { text: <>Zhang et al. (2017). Understanding deep learning requires rethinking generalization. <i>ICLR</i>.</> },
      { text: "Kaplan et al. (2020). Scaling laws for neural language models." },
      { text: "Wheeler (1990). Information, physics, quantum: the search for links." },
    ],
    publicationTarget: "Nature Physics / Physical Review Letters / ICML",
    protocolAnchor: "#exp-03",
  },
];

/* ─── DRIFT Research Themes (special rendering) ─────────────── */

const DRIFT_THEMES = [
  "State distribution dynamics under iteration",
  "Operator ordering effects on error profiles",
  "Operator diversity as experimental variable",
  "Predictability boundaries and stability thresholds",
];

/* ─── Clickable Frame Card ──────────────────────────────────── */

function FrameCard({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="group/card rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6 cursor-pointer transition-all duration-200 hover:bg-white/[0.05] hover:border-white/[0.12] hover:scale-[1.01]"
    >
      {children}
      <span className="block mt-3 text-xs text-gray-600 opacity-0 group-hover/card:opacity-100 transition-opacity duration-200">
        Click to explore full experiment &rarr;
      </span>
    </div>
  );
}

/* ─── Section Divider ───────────────────────────────────────── */

function Divider() {
  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
}

/* ─── Modal ─────────────────────────────────────────────────── */

function ProgramModal({
  program,
  onClose,
}: {
  program: Program;
  onClose: () => void;
}) {
  const c = program.colors;

  // Escape key handler
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0f1015] border border-white/10 scrollbar-hide"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Gradient Header */}
        <div
          className={`relative h-40 bg-gradient-to-br ${c.gradient} opacity-20 rounded-t-2xl`}
        />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition z-10"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="p-6 md:p-8 -mt-24 relative">
          {/* Header Info */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className={`text-xs font-bold tracking-[0.3em] uppercase ${c.textMuted}`}>
                Program {program.number}
              </span>
              <span className={`text-xs px-3 py-1 rounded-full ${c.statusBg} ${c.text}`}>
                {program.status}
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              {program.name}
            </h2>
            <p className={`${c.text} opacity-80`}>{program.fullName}</p>
          </div>

          {/* Main Sections (Problem/Hypothesis or Focus/Themes or Objective/Methodology) */}
          {program.id === "drift" ? (
            /* DRIFT: Focus + Themes side by side */
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="rounded-xl bg-white/[0.04] border border-white/[0.08] p-5">
                <h3 className="font-semibold text-white mb-3">Focus</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {program.sections[0].content}
                </p>
              </div>
              <div className="rounded-xl bg-white/[0.04] border border-white/[0.08] p-5">
                <h3 className="font-semibold text-white mb-3">Research Themes</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  {DRIFT_THEMES.map((theme) => (
                    <li key={theme} className="flex gap-2">
                      <span className={`mt-1.5 h-1.5 w-1.5 rounded-full ${c.dot} shrink-0`} />
                      {theme}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            /* All other programs: pair of section cards */
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {program.sections.map((section) => (
                <div
                  key={section.title}
                  className="rounded-xl bg-white/[0.04] border border-white/[0.08] p-5"
                >
                  <h3 className="font-semibold text-white mb-3">{section.title}</h3>
                  <div className="text-sm text-gray-400 leading-relaxed">
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Methodology (PERSIST only, has 2-column sub-layout) */}
          {program.methodology && (
            <div className="rounded-xl bg-white/[0.04] border border-white/[0.08] p-5 mb-6">
              <h3 className="font-semibold text-white mb-3">Methodology</h3>
              <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-400">
                {program.methodology.columns.map((col) => (
                  <div key={col.label}>
                    <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                      {col.label}
                    </h4>
                    <p className="leading-relaxed">{col.content}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Preliminary Results (PERSIST only) */}
          {program.results && (
            <div className={`rounded-xl bg-gradient-to-br ${c.gradientBg} border ${c.border} p-5 mb-6`}>
              <h3 className="font-semibold text-white mb-4">
                Results (19 Architectures, 3 Datasets)
              </h3>
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr className={`border-b ${c.border} text-left`}>
                      <th className="pb-2 text-gray-500 font-medium">Architecture</th>
                      <th className="pb-2 text-gray-500 font-medium">Params</th>
                      <th className="pb-2 text-gray-500 font-medium">H₁ Persistence</th>
                      <th className="pb-2 text-gray-500 font-medium">Retention @100</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-400">
                    {program.results.rows.map((row, i) => (
                      <tr
                        key={row.arch}
                        className={i < program.results!.rows.length - 1 ? "border-b border-white/5" : ""}
                      >
                        <td className={`py-2 ${row.highlight ? c.text : ""}`}>{row.arch}</td>
                        <td className="py-2">{row.params}</td>
                        <td className="py-2 font-mono">{row.h0}</td>
                        <td className={`py-2 ${row.highlight ? c.text : ""}`}>{row.retention}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-400 mb-2">{program.results.summary}</p>
              <p className="text-sm text-gray-500">{program.results.pending}</p>
              {program.results.findingsLink && (
                <div className="mt-4">
                  <Link
                    href={`/research/${program.id}/findings`}
                    className={`text-sm ${c.text} hover:opacity-80 transition underline underline-offset-4`}
                  >
                    Full results with figures &rarr;
                  </Link>
                </div>
              )}
            </div>
          )}

          {/* Connection to PERSIST (PHI + GENESIS) */}
          {program.connections && (
            <div className="rounded-xl bg-white/[0.04] border border-white/[0.08] p-5 mb-6">
              <h3 className="font-semibold text-white mb-3">
                {program.connections.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {program.connections.content}
              </p>
            </div>
          )}

          {/* References */}
          <div className="rounded-xl bg-white/[0.04] border border-white/[0.08] p-5 mb-6">
            <h3 className="font-semibold text-white mb-3 text-sm">References</h3>
            <ul className="space-y-1 text-xs text-gray-500">
              {program.references.map((ref, i) => (
                <li key={i}>{ref.text}</li>
              ))}
            </ul>
            <p className="text-xs text-gray-600 mt-2">
              Publication target: {program.publicationTarget}
            </p>
          </div>

          {/* Footnote (PHI only) */}
          {program.footnote && (
            <details className="mb-6">
              <summary className="text-xs text-gray-600 cursor-pointer hover:text-gray-400 transition">
                Note on broader theoretical context
              </summary>
              <div className="mt-2 rounded-xl bg-white/[0.02] border border-white/[0.04] p-4 text-xs text-gray-500 leading-relaxed">
                {program.footnote}
              </div>
            </details>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Link
              href={`/research/experiments${program.protocolAnchor || ""}`}
              className={`px-6 py-3 rounded-xl bg-gradient-to-r ${c.gradient} font-semibold text-white hover:opacity-90 transition text-center`}
            >
              View Full Protocol &rarr;
            </Link>
            <button
              onClick={onClose}
              className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 font-medium text-white hover:bg-white/10 transition"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Component ────────────────────────────────────────── */

export default function ResearchPrograms() {
  const [activeProgram, setActiveProgram] = useState<string | null>(null);

  const closeModal = useCallback(() => setActiveProgram(null), []);

  const activeProgramData = PROGRAMS.find((p) => p.id === activeProgram) || null;

  const openProgram = (id: string) => setActiveProgram(id);

  return (
    <>
      {/* ══════ PERSIST ══════ */}
      <section id="persist" className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-emerald-400/60">
                Program I
              </span>
              <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300">
                Active &mdash; Producing Results
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Project PERSIST
            </h2>
            <p className="text-emerald-300/80">
              Plasticity-Enabled Retention through Structured Information Synthesis
              over Time
            </p>
          </div>

          {/* Problem + Hypothesis */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <FrameCard onClick={() => openProgram("persist")}>
              <h3 className="font-semibold text-white mb-3">Problem</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Catastrophic forgetting (McCloskey &amp; Cohen, 1989) prevents
                neural networks from learning sequential tasks without destroying
                previously acquired knowledge. Current mitigations (EWC, replay
                buffers, progressive networks) reduce but do not eliminate
                interference. The underlying geometric mechanism remains poorly
                understood.
              </p>
            </FrameCard>
            <FrameCard onClick={() => openProgram("persist")}>
              <h3 className="font-semibold text-white mb-3">Hypothesis</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                The persistence of learned knowledge under sequential task training is
                predictable from the topological features of the loss landscape around
                converged weight configurations. Architectures whose landscapes exhibit
                richer topological structure (measured via persistent homology H₁) are
                more resistant to catastrophic forgetting, independent of model size.
              </p>
            </FrameCard>
          </div>

          {/* Methodology */}
          <FrameCard onClick={() => openProgram("persist")}>
            <h3 className="font-semibold text-white mb-3">Methodology</h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-400">
              <div>
                <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                  Datasets (3)
                </h4>
                <p>
                  CIFAR-100 (50/50 class split), CUB-200-2011 (fine-grained birds,
                  100/100), NWPU-RESISC45 (satellite scenes, 23/22). All resized to
                  32x32 for cross-architecture consistency.
                </p>
              </div>
              <div>
                <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                  Architectures (19)
                </h4>
                <p>
                  14 diverse architectures (CNNs, ViTs, MLP-Mixer) plus a WRN-28-k
                  width ladder (k=1,2,4,6,8,10) to isolate scale from topology. Range:
                  0.3M to 44.7M parameters.
                </p>
              </div>
              <div>
                <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                  Topological Analysis
                </h4>
                <p>
                  50x50 loss landscape grid along filter-normalized random directions.
                  5 independent slices per architecture. Persistent homology via both
                  Ripser (graph-based) and GUDHI (cubical complexes).
                </p>
              </div>
            </div>
          </FrameCard>

          {/* Preliminary Results */}
          <div className="mt-8 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/5 border border-emerald-500/15 p-6 mb-8">
            <h3 className="font-semibold text-white mb-4">
              Results (19 Architectures, 3 Datasets Complete)
            </h3>

            {/* Key stats */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
              <div className="rounded-xl bg-white/[0.04] border border-white/[0.06] p-4 text-center">
                <p className="text-2xl font-bold text-amber-300 font-mono">0.037</p>
                <p className="text-xs text-gray-500 mt-1">CUB-200 Perm. p (suggestive; does not survive Bonferroni across 3 datasets)</p>
              </div>
              <div className="rounded-xl bg-white/[0.04] border border-white/[0.06] p-4 text-center">
                <p className="text-2xl font-bold text-emerald-300 font-mono">0.046</p>
                <p className="text-xs text-gray-500 mt-1">Phase 6 Pooled Interaction (n=57, clustered bootstrap, EWC moderation)</p>
              </div>
              <div className="rounded-xl bg-white/[0.04] border border-white/[0.06] p-4 text-center">
                <p className="text-2xl font-bold text-amber-300 font-mono">-0.92</p>
                <p className="text-xs text-gray-500 mt-1">Params-only (CUB)</p>
              </div>
              <div className="rounded-xl bg-white/[0.04] border border-white/[0.06] p-4 text-center">
                <p className="text-2xl font-bold text-emerald-300 font-mono">0.34</p>
                <p className="text-xs text-gray-500 mt-1">+Topology (CUB)</p>
              </div>
              <div className="rounded-xl bg-white/[0.04] border border-white/[0.06] p-4 text-center">
                <p className="text-2xl font-bold text-cyan-300 font-mono">-0.76</p>
                <p className="text-xs text-gray-500 mt-1">Params (CIFAR)</p>
              </div>
            </div>

            <p className="text-sm text-gray-400 mb-2">
              On CIFAR-100 (n=19), parameter count dominates (rho = -0.76, p = 0.0002, survives Bonferroni) and topology adds no predictive value. On CUB-200 (n=19, fine-grained birds), topology rescues prediction (permutation p = 0.037), but this does not survive Bonferroni correction across 3 datasets. On RESISC-45 (n=19, satellite scenes), topology also does not help predict forgetting (p = 0.566). However, H0 strongly predicts EWC benefit on RESISC-45 (rho = 0.86, p = 2.4e-6). Phase 6 pooled interaction analysis (n=57, clustered bootstrap) formally confirms dataset moderation: H0 predicts EWC benefit on CIFAR-100 and RESISC-45 (CIs excluding zero, permutation p=0.046) but not CUB-200.
            </p>
            <p className="text-sm text-gray-500">
              57 of 57 configurations complete across 3 datasets. Most stable signal: H0 predicts EWC benefit (CIFAR-100 rho = 0.76, RESISC-45 rho = 0.86).
            </p>
            <div className="mt-4">
              <Link
                href="/research/persist/findings"
                className="text-sm text-emerald-300 hover:text-emerald-200 transition underline underline-offset-4"
              >
                Full results and statistical analysis →
              </Link>
            </div>
          </div>

          {/* References */}
          <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6">
            <h3 className="font-semibold text-white mb-3 text-sm">
              PERSIST References
            </h3>
            <ul className="space-y-1 text-xs text-gray-500">
              <li>
                McCloskey &amp; Cohen (1989). Catastrophic interference in
                connectionist networks. <i>Psych. of Learning and Motivation</i>.
              </li>
              <li>
                Kirkpatrick et al. (2017). Overcoming catastrophic forgetting.
                <i> PNAS</i>, 114(13).
              </li>
              <li>
                Li et al. (2018). Visualizing the loss landscape of neural nets.
                <i> NeurIPS</i>.
              </li>
              <li>
                Maria et al. (2014). The GUDHI Library: simplicial complexes and
                persistent homology.
              </li>
              <li>
                Bauer (2021). Ripser: efficient computation of Vietoris-Rips
                persistence barcodes. <i>JOSS</i>.
              </li>
            </ul>
            <p className="text-xs text-gray-600 mt-2">
              Publication target: NeurIPS / ICML (Continual Learning track)
            </p>
          </div>
        </div>
      </section>

      <Divider />

      {/* ══════ DRIFT ══════ */}
      <section id="drift" className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-violet-400/60">
                Program II
              </span>
              <span className="text-xs px-3 py-1 rounded-full bg-violet-500/20 text-violet-300">
                Active
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Project DRIFT
            </h2>
            <p className="text-violet-300/80">
              Degradation Regimes In Iterated Field Transformations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <FrameCard onClick={() => openProgram("drift")}>
              <h3 className="font-semibold text-white mb-3">Focus</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Investigating behavioral uncertainty in quantum system state evolution
                under repeated manipulation. Focused on stability degradation under
                variation in operator ordering and diversity, in regimes where
                closed-form analytical prediction is not feasible across all
                configurations.
              </p>
            </FrameCard>
            <FrameCard onClick={() => openProgram("drift")}>
              <h3 className="font-semibold text-white mb-3">Research Themes</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                {DRIFT_THEMES.map((theme) => (
                  <li key={theme} className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-violet-400/40 shrink-0" />
                    {theme}
                  </li>
                ))}
              </ul>
            </FrameCard>
          </div>

          <div className="mt-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6">
            <h3 className="font-semibold text-white mb-3 text-sm">
              DRIFT References
            </h3>
            <ul className="space-y-1 text-xs text-gray-500">
              <li>
                Tranter et al. (2019). Ordering and Trotter error in quantum
                simulation.
              </li>
              <li>
                Nakamura &amp; Ankerhold (2024). Non-Markovian effects in iterated
                quantum channels.
              </li>
              <li>
                Huang et al. (2024). Gate diversity as a design axis in quantum
                circuits.
              </li>
              <li>Kwon et al. (2021). Gate-based quantum computing review.</li>
            </ul>
          </div>
        </div>
      </section>

      <Divider />

      {/* ══════ PHI ══════ */}
      <section id="phi" className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-amber-400/60">
                Program III
              </span>
              <span className="text-xs px-3 py-1 rounded-full bg-amber-500/20 text-amber-300">
                Protocol Defined
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Project Φ
            </h2>
            <p className="text-amber-300/80">
              Systematic Survey of Integrated Information in Neural Network
              Architectures
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <FrameCard onClick={() => openProgram("phi")}>
              <h3 className="font-semibold text-white mb-3">Objective</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Compute integrated information (Φ*), a scalar measure of how much a
                system is &ldquo;more than the sum of its parts&rdquo; (Tononi, 2004),
                across major deep learning architecture families. Test whether Φ*
                correlates with generalization, transfer learning, and robustness. No
                systematic Φ* survey across modern deep learning architectures has been
                published.
              </p>
            </FrameCard>
            <FrameCard onClick={() => openProgram("phi")}>
              <h3 className="font-semibold text-white mb-3">Methodology</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-3">
                Φ* approximation adapted for neural networks using the KSG mutual
                information estimator (Kraskov et al., 2004). Greedy bipartition search
                for the minimum information partition. Validated independently using
                Perturbational Complexity Index (Casali et al., 2013).
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                Architecture survey: MLPs, CNNs (ResNet), RNNs (LSTM, GRU),
                Transformers (GPT-2, ViT), Graph Networks (GCN, GAT). Φ* measured at 5
                training checkpoints per architecture.
              </p>
            </FrameCard>
          </div>

          <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6 mb-6">
            <h3 className="font-semibold text-white mb-3">
              Connection to PERSIST
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              If topological depth (PERSIST) predicts forgetting resistance, does
              information integration (Φ*) also predict it? Networks with higher
              integrated information may create deeper topological features because
              integration requires complex, multi-scale structure in the loss landscape.
              QUANTA serves as a research instrument for interactive exploration of
              these measurements.
            </p>
          </div>

          <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6">
            <h3 className="font-semibold text-white mb-3 text-sm">
              PHI References
            </h3>
            <ul className="space-y-1 text-xs text-gray-500">
              <li>
                Tononi (2004). An information integration theory of consciousness.{" "}
                <i>BMC Neuroscience</i>.
              </li>
              <li>
                Oizumi et al. (2014). From phenomenology to mechanisms of
                consciousness: IIT 3.0. <i>PLoS Comp. Bio.</i>
              </li>
              <li>
                Barrett &amp; Seth (2011). Practical measures of integrated
                information. <i>PLoS Comp. Bio.</i>
              </li>
              <li>
                Casali et al. (2013). Perturbational complexity index.{" "}
                <i>Science Translational Medicine</i>.
              </li>
            </ul>
            <p className="text-xs text-gray-600 mt-2">
              Publication target: Nature Machine Intelligence / ICLR / Neuroscience of
              Consciousness
            </p>
          </div>

          {/* Footnote */}
          <details className="mt-4">
            <summary className="text-xs text-gray-600 cursor-pointer hover:text-gray-400 transition">
              Note on broader theoretical context
            </summary>
            <div className="mt-2 rounded-xl bg-white/[0.02] border border-white/[0.04] p-4 text-xs text-gray-500 leading-relaxed">
              <p className="mb-2">
                IIT&apos;s Φ metric has implications beyond computational systems. The
                relationship between integrated information and quantum measurement,                 whether systems with measurable Φ interact with quantum states
                differently, is an open question in the foundations of physics.
                Relevant work includes Von Neumann (1932) on quantum measurement,
                Wigner (1961) on consciousness and wave function collapse, and
                experimental investigations by Radin et al. (2012, 2016) and Nelson
                (2001). These connections inform our long-term research direction but
                are not the focus of EXP-02.
              </p>
            </div>
          </details>
        </div>
      </section>

      <Divider />

      {/* ══════ GENESIS ══════ */}
      <section id="genesis" className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-cyan-400/60">
                Program IV
              </span>
              <span className="text-xs px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300">
                Protocol Defined
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Project GENESIS
            </h2>
            <p className="text-cyan-300/80">
              Information Capacity Scaling Laws in Neural Networks
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <FrameCard onClick={() => openProgram("genesis")}>
              <h3 className="font-semibold text-white mb-3">Hypothesis</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Neural network information capacity follows an area law, proportional
                to boundary parameters (input/output interface), rather than a volume
                law proportional to total parameter count. This would constitute a
                computational analog of the Bekenstein bound (Bekenstein, 1973), which
                establishes that maximum entropy in a physical region is proportional to
                surface area, not volume.
              </p>
            </FrameCard>
            <FrameCard onClick={() => openProgram("genesis")}>
              <h3 className="font-semibold text-white mb-3">Methodology</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Memorization capacity measurement (Zhang et al., 2017) across 15+
                architecture configurations varying depth/width ratios. Power-law
                fitting on log-log axes: C ~ V<sup>α</sup> vs C ~ A<sup>β</sup>.
                Bayesian model comparison (BIC) to determine which scaling relationship
                is statistically preferred. Decisive test: vary depth at constant width.
                If capacity saturates, area law is supported.
              </p>
            </FrameCard>
          </div>

          <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6 mb-6">
            <h3 className="font-semibold text-white mb-3">
              Connection to PERSIST
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              If capacity is boundary-limited, catastrophic forgetting may occur when
              new task information competes for limited boundary capacity. Topological
              protection (PERSIST) may work by encoding knowledge in interior parameters
              that new learning cannot overwrite. The area law, if confirmed, would
              provide a theoretical explanation for why topology predicts forgetting.
            </p>
          </div>

          <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6">
            <h3 className="font-semibold text-white mb-3 text-sm">
              GENESIS References
            </h3>
            <ul className="space-y-1 text-xs text-gray-500">
              <li>
                Bekenstein (1973). Black holes and entropy.{" "}
                <i>Physical Review D</i>.
              </li>
              <li>
                Zhang et al. (2017). Understanding deep learning requires rethinking
                generalization. <i>ICLR</i>.
              </li>
              <li>
                Kaplan et al. (2020). Scaling laws for neural language models.
              </li>
              <li>
                Wheeler (1990). Information, physics, quantum: the search for links.
              </li>
            </ul>
            <p className="text-xs text-gray-600 mt-2">
              Publication target: Nature Physics / Physical Review Letters / ICML
            </p>
          </div>
        </div>
      </section>

      {/* ══════ Modal ══════ */}
      {activeProgramData && (
        <ProgramModal program={activeProgramData} onClose={closeModal} />
      )}
    </>
  );
}
