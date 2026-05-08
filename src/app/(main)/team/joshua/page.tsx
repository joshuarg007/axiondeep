import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Joshua R. Gutierrez — CEO & Principal Investigator",
  description:
    "Joshua R. Gutierrez is co-founder, CEO, and Principal Investigator at Axion Deep Labs, Inc. AI researcher in topological deep learning, full-stack engineer, and lead author on PERSIST — an NSF SBIR-track research program investigating loss-landscape topology and catastrophic forgetting.",
  keywords: [
    "Joshua Gutierrez",
    "Joshua R. Gutierrez",
    "Axion Deep Labs CEO",
    "Axion Deep Labs founder",
    "PERSIST research",
    "topological deep learning",
    "loss landscape topology",
    "catastrophic forgetting research",
    "NSF SBIR Phase I",
    "DeepAudit AI",
    "Vesper AI",
    "Made4Founders",
    "Site2CRM",
    "AI researcher New Mexico",
  ],
  alternates: { canonical: "/team/joshua" },
  openGraph: {
    title: "Joshua R. Gutierrez | Axion Deep Labs",
    description:
      "Co-founder, CEO & Principal Investigator at Axion Deep Labs. AI researcher in topological deep learning and full-stack engineer behind six production AI products.",
    url: "/team/joshua",
    images: [
      {
        url: "/images/team/joshua.jpg",
        width: 1200,
        height: 1200,
        alt: "Joshua R. Gutierrez, CEO and Principal Investigator at Axion Deep Labs",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.axiondeep.com" },
        { "@type": "ListItem", position: 2, name: "Team", item: "https://www.axiondeep.com/team" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Joshua R. Gutierrez",
          item: "https://www.axiondeep.com/team/joshua",
        },
      ],
    },
    {
      "@type": "Person",
      name: "Joshua R. Gutierrez",
      jobTitle: "Chief Executive Officer & Principal Investigator",
      worksFor: {
        "@type": "Organization",
        name: "Axion Deep Labs, Inc.",
        url: "https://www.axiondeep.com",
      },
      alumniOf: [{ "@type": "CollegeOrUniversity", name: "Colorado State University" }],
      image: "https://www.axiondeep.com/images/team/joshua.jpg",
      url: "https://www.axiondeep.com/team/joshua",
      sameAs: [
        "https://www.linkedin.com/in/joshua-gutierrez-b198117a",
        "https://github.com/Axion-Deep-Labs",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Las Cruces",
        addressRegion: "NM",
        addressCountry: "US",
      },
    },
  ],
};

const sectionHeading =
  "text-[11px] font-semibold text-gray-500 uppercase tracking-[0.18em] mb-4";

export default function JoshuaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen px-6 py-24 sm:py-32 relative overflow-hidden">
        {/* Background glow */}
        <div className="pointer-events-none absolute -top-40 -right-40 w-[40rem] h-[40rem] rounded-full bg-gradient-radial from-cyan-500/15 via-blue-500/8 to-transparent blur-3xl" />

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-10">
            <ol className="flex items-center gap-2 text-xs text-gray-500">
              <li>
                <Link href="/team" className="hover:text-white transition-colors">
                  Team
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-gray-300">Joshua R. Gutierrez</li>
            </ol>
          </nav>

          {/* Hero */}
          <header className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10 mb-16 items-start">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-white/[0.08] ring-1 ring-cyan-400/20">
              <Image
                src="/images/team/joshua.jpg"
                alt="Joshua R. Gutierrez, CEO and Principal Investigator at Axion Deep Labs"
                fill
                sizes="(max-width: 768px) 100vw, 280px"
                className="object-cover object-top"
                priority
              />
            </div>
            <div>
              <p className="text-xs font-medium tracking-[0.2em] uppercase mb-3 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Co-Founder &middot; Chief Executive Officer
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-3">
                Joshua R. Gutierrez
              </h1>
              <p className="text-cyan-300 text-base font-medium tracking-wide mb-6">
                CEO, Principal Investigator & Full-Stack Engineer
              </p>
              <p className="text-gray-300 leading-relaxed text-base mb-4">
                Joshua R. Gutierrez is the co-founder and Chief Executive Officer
                of Axion Deep Labs, Inc., and the Principal Investigator on the
                laboratory&apos;s flagship research programs. He directs the
                laboratory&apos;s scientific agenda, full-stack product engineering,
                and grant strategy, working at the intersection of theoretical
                deep learning and shipped, revenue-generating software.
              </p>
              <p className="text-gray-400 leading-relaxed text-sm">
                His current research investigates how the topology of neural
                loss landscapes predicts model behavior — specifically
                catastrophic forgetting in continual learning and the grokking
                transition in small transformers. In parallel, he has shipped
                six production SaaS products spanning AI tooling, marketing
                technology, cybersecurity, and quantum computing education.
              </p>
            </div>
          </header>

          {/* Narrative bio */}
          <section className="mb-16 prose prose-invert max-w-none">
            <h2 className={sectionHeading}>Profile</h2>
            <div className="space-y-5 text-gray-300 leading-relaxed text-[15px]">
              <p>
                Joshua leads Axion Deep Labs as a research-first
                C-corporation: every commercial product is, by design, an
                applied counterpart to an open research question, and every
                research program is built to a standard of operational rigor
                inherited from a decade of full-stack engineering. He sets the
                laboratory&apos;s scientific direction, owns its grant portfolio,
                and writes the production code that ships its products.
              </p>
              <p>
                As Principal Investigator on PERSIST — the laboratory&apos;s flagship
                research program — Joshua designed and led a 57-experiment study
                across 19 architectures and three datasets (CIFAR-100,
                CUB-200-2011, RESISC-45), applying persistent homology to
                two-dimensional cross-sections of neural loss landscapes to test
                whether landscape topology predicts a model&apos;s resistance to
                catastrophic forgetting. The headline result — that the H0
                Betti number predicts elastic-weight-consolidation regularization
                benefit, replicating across datasets at &rho;&nbsp;=&nbsp;0.76 on
                CIFAR-100 (p&nbsp;=&nbsp;2&times;10<sup>&minus;4</sup>) and
                &rho;&nbsp;=&nbsp;0.86 on RESISC-45
                (p&nbsp;=&nbsp;2.4&times;10<sup>&minus;6</sup>) — establishes
                loss-landscape connectivity as a mitigation-sensitivity marker
                for continual-learning interventions.
              </p>
              <p>
                The PERSIST manuscript, &ldquo;Basin Fragmentation Predicts
                Regularization Benefit in Continual Learning,&rdquo; is in
                preparation as an arXiv preprint, incorporating Phase I-A
                (ImageNet-100 scale validation) and Phase I-B (cross-dataset
                sweep, 114 runs). Phase I scale validation is currently underway
                on the NMSU Discovery HPC cluster (NVIDIA A100-PCIE-40GB), with
                eight ImageNet-100 configurations complete across architectures
                from 20M to 304M parameters (ViT-B, ViT-L, ConvNeXt-S/B/L,
                ResNet-101, EfficientNet-B5, DenseNet-201). An NSF SBIR Phase I
                application ($275,000) on topology-informed continual learning
                for production ML systems is in progress.
              </p>
              <p>
                His second active research line, EXP-04, investigates the
                topological dynamics of grokking: the abrupt
                generalization phase transition observed in small transformers
                trained on modular arithmetic. Joshua identified and corrected
                three methodological bugs that invalidated earlier published
                approaches in this area — a structural invariance issue in H0
                feature counts on grid filtrations, a single-batch dataloader
                masking commutator-defect dynamics, and a missing tensor detach
                that forced the discrete Hessian to be symmetric by construction.
                The corrected pipeline now resolves a 700&times; dynamic range
                in H0 total persistence and a clean pre-grokking saddle-to-basin
                transition in Hessian sharpness.
              </p>
              <p>
                Beyond PERSIST and EXP-04, Joshua maintains a parallel applied
                program. He is the architect and full-stack author of six
                production AI/SaaS products: <strong>DeepAudit AI</strong>, an
                SEO audit platform built on AWS Lambda + Puppeteer with 60+
                checks across 9 categories and AI-generated remediation plans;
                <strong> Made4Founders</strong>, a multi-tenant B2B platform
                that orchestrates per-platform AI rewrites and image adaptation
                across seven social channels; <strong>Vesper</strong>, an
                autonomous penetration-testing platform built on a dual-agent
                Operator/Analyst architecture (PyQt6 desktop + FastAPI backend,
                12K+ LOC); <strong>Site2CRM</strong>, a real-time lead-capture
                CRM with a published Zapier integration and a WordPress plugin;
                <strong> Forma</strong>, a builder product line; and
                <strong> QUANTA</strong>, a quantum-computing education platform.
              </p>
              <p>
                His engineering work runs across PyTorch, persistent homology
                (Ripser, GUDHI), Hessian analysis, distributed training on
                university HPC, AWS serverless infrastructure, and
                Next.js/FastAPI product engineering. He writes the research
                code, the production code, the grant prose, and the marketing
                copy, and is open to research-scientist, applied-research, and
                technical AI-leadership conversations alongside his work at
                Axion Deep Labs.
              </p>
            </div>
          </section>

          {/* Research highlights */}
          <section className="mb-16">
            <h2 className={sectionHeading}>Research Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 backdrop-blur-sm">
                <p className="text-cyan-300 text-xs uppercase tracking-[0.15em] mb-2 font-semibold">
                  PERSIST
                </p>
                <h3 className="text-white font-semibold mb-2">
                  Topological signatures of knowledge persistence
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  57-experiment study across 19 architectures and 3 datasets.
                  Persistent-homology features predict EWC regularization
                  benefit. arXiv preprint in preparation; NSF SBIR Phase I
                  ($275K) in progress.
                </p>
              </div>
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 backdrop-blur-sm">
                <p className="text-cyan-300 text-xs uppercase tracking-[0.15em] mb-2 font-semibold">
                  EXP-04
                </p>
                <h3 className="text-white font-semibold mb-2">
                  Topological dynamics of grokking
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Persistent homology + Hessian sharpness on a 1-layer
                  transformer learning modular arithmetic. Calibration sweep,
                  three methodological corrections, full-study gating criteria
                  defined.
                </p>
              </div>
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 backdrop-blur-sm">
                <p className="text-cyan-300 text-xs uppercase tracking-[0.15em] mb-2 font-semibold">
                  Methods
                </p>
                <h3 className="text-white font-semibold mb-2">
                  Statistical infrastructure
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Leave-one-architecture-out ridge regression, permutation tests
                  (1,000 iterations), clustered bootstrap (5,000 iterations,
                  19 architecture blocks), OLS with interaction terms,
                  Bonferroni correction.
                </p>
              </div>
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 backdrop-blur-sm">
                <p className="text-cyan-300 text-xs uppercase tracking-[0.15em] mb-2 font-semibold">
                  Compute
                </p>
                <h3 className="text-white font-semibold mb-2">
                  HPC + serverless production
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  NVIDIA A100 / RTX 4090, NMSU Discovery HPC, SLURM, distributed
                  training. AWS Lambda, SAM, S3, DynamoDB, Amplify, Lightsail.
                  CI/CD across six production product lines.
                </p>
              </div>
            </div>
          </section>

          {/* Roles */}
          <section className="mb-16">
            <h2 className={sectionHeading}>Roles &amp; Appointments</h2>
            <ol className="list-none relative border-l border-white/[0.08] pl-6 space-y-8">
              <li className="relative">
                <span className="absolute -left-[7px] top-2 w-3 h-3 rounded-full bg-cyan-400 ring-4 ring-cyan-400/15" />
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 className="text-white font-semibold">
                    Co-Founder & Chief Executive Officer
                  </h3>
                  <span className="text-xs text-gray-500 tracking-wide">
                    2026 — Present
                  </span>
                </div>
                <p className="text-cyan-300 text-sm mb-2">
                  Axion Deep Labs, Inc. &middot; Las Cruces, NM
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Sets the laboratory&apos;s scientific agenda and grant strategy.
                  Owns the research portfolio (PERSIST, EXP-04, EXP-02 Phi
                  Survey, EXP-03 Bekenstein-bounded representation learning) and
                  the commercial portfolio (DeepAudit AI, Made4Founders, Vesper,
                  Site2CRM, Forma, QUANTA).
                </p>
              </li>
              <li className="relative">
                <span className="absolute -left-[7px] top-2 w-3 h-3 rounded-full bg-cyan-400 ring-4 ring-cyan-400/15" />
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 className="text-white font-semibold">
                    Principal Investigator — PERSIST
                  </h3>
                  <span className="text-xs text-gray-500 tracking-wide">
                    2026 — Present
                  </span>
                </div>
                <p className="text-cyan-300 text-sm mb-2">
                  NSF SBIR-track Research Program
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Designs and executes a 57-experiment continual-learning study
                  using persistent homology. Authors the laboratory&apos;s arXiv
                  preprint, leads NMSU Discovery HPC scale-validation runs, and
                  is principal author on the in-progress NSF SBIR Phase I
                  application ($275,000).
                </p>
              </li>
              <li className="relative">
                <span className="absolute -left-[7px] top-2 w-3 h-3 rounded-full bg-cyan-400 ring-4 ring-cyan-400/15" />
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 className="text-white font-semibold">
                    Founder & Lead Engineer — Applied Product Lines
                  </h3>
                  <span className="text-xs text-gray-500 tracking-wide">
                    Ongoing
                  </span>
                </div>
                <p className="text-cyan-300 text-sm mb-2">
                  DeepAudit AI &middot; Made4Founders &middot; Vesper &middot; Site2CRM &middot; Forma &middot; QUANTA
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Architect and full-stack engineer behind six production
                  SaaS/AI products. Owns infrastructure design, model
                  integration (DeepSeek, Claude, OpenAI), product UX, and
                  go-to-market for each line. Stack spans PyTorch, FastAPI,
                  Next.js/React, AWS serverless, and PyQt6 desktop.
                </p>
              </li>
              <li className="relative">
                <span className="absolute -left-[7px] top-2 w-3 h-3 rounded-full bg-cyan-400 ring-4 ring-cyan-400/15" />
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 className="text-white font-semibold">
                    Independent Sales Consultant
                  </h3>
                  <span className="text-xs text-gray-500 tracking-wide">
                    2010 — Present
                  </span>
                </div>
                <p className="text-cyan-300 text-sm mb-2">
                  Vector Marketing &middot; Cutco Cutlery
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Sixteen-year sales tenure with Vector Marketing, the direct-sales
                  arm of Cutco Cutlery. Built and sustained a long-term referral
                  pipeline through in-person product demonstrations, consultative
                  needs assessment, and relationship-driven follow-up — the
                  same customer-discovery instincts that now anchor product
                  positioning, grant narrative, and sales conversations across
                  the Axion Deep Labs portfolio.
                </p>
              </li>
            </ol>
          </section>

          {/* Education + Skills */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            <div>
              <h2 className={sectionHeading}>Education</h2>
              <ul className="space-y-5">
                <li>
                  <p className="text-white font-semibold">
                    M.S. in Artificial Intelligence and Data Science
                  </p>
                  <p className="text-sm text-gray-400">
                    Colorado State University Global &middot; Expected 2026
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Deep learning, topological data analysis, statistical
                    methods for ML.
                  </p>
                </li>
                <li>
                  <p className="text-white font-semibold">
                    B.S. in Computer Science
                  </p>
                  <p className="text-sm text-gray-400">
                    Colorado State University, Fort Collins &middot; 2025
                  </p>
                </li>
              </ul>
            </div>

            <div>
              <h2 className={sectionHeading}>Publications &amp; Artifacts</h2>
              <ul className="space-y-5">
                <li>
                  <p className="text-white font-semibold">
                    Basin Fragmentation Predicts Regularization Benefit in
                    Continual Learning
                  </p>
                  <p className="text-sm text-gray-400">
                    arXiv preprint in preparation, 2026
                  </p>
                </li>
                <li>
                  <p className="text-white font-semibold">
                    PERSIST methods &amp; results repository
                  </p>
                  <p className="text-sm text-gray-400">
                    Full experiment log, configs, and reproducibility scripts
                    maintained under version control
                  </p>
                </li>
                <li>
                  <p className="text-white font-semibold">
                    NSF SBIR Phase I application
                  </p>
                  <p className="text-sm text-gray-400">
                    Topology-informed continual learning for production ML
                    systems &middot; in progress, 2026
                  </p>
                </li>
              </ul>
            </div>
          </section>

          {/* Focus areas + Skills */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            <div>
              <h2 className={sectionHeading}>Research Focus</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "Topological Data Analysis",
                  "Persistent Homology",
                  "Loss Landscape Topology",
                  "Continual Learning",
                  "Catastrophic Forgetting",
                  "Grokking Dynamics",
                  "Hessian Analysis",
                  "Bayesian Inference",
                  "Bootstrap Methods",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-cyan-500/5 border border-cyan-400/20 text-xs text-cyan-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h2 className={sectionHeading}>Engineering Stack</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "PyTorch",
                  "Ripser / GUDHI",
                  "Python",
                  "TypeScript",
                  "FastAPI",
                  "Next.js / React",
                  "AWS Lambda / SAM / S3 / DynamoDB",
                  "AWS Amplify / Lightsail",
                  "SLURM / HPC",
                  "Docker",
                  "PyQt6",
                  "LangChain",
                  "Claude / OpenAI / DeepSeek APIs",
                  "RAG Pipelines",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Links */}
          <section className="mb-16">
            <h2 className={sectionHeading}>Elsewhere</h2>
            <div className="flex flex-wrap gap-5">
              <a
                href="https://www.linkedin.com/in/joshua-gutierrez-b198117a"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-sm text-gray-200 hover:bg-white/[0.08] hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Axion-Deep-Labs"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-sm text-gray-200 hover:bg-white/[0.08] hover:text-white transition-colors"
              >
                GitHub
              </a>
              <Link
                href="/research"
                className="px-5 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-sm text-gray-200 hover:bg-white/[0.08] hover:text-white transition-colors"
              >
                Research at Axion Deep Labs
              </Link>
            </div>
          </section>

          {/* Footer nav */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-10 border-t border-white/[0.06]">
            <Link
              href="/team"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              &larr; Back to the team
            </Link>
            <Link
              href="/team/crystal"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Read about Crystal A. Gutierrez &rarr;
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
