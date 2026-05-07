export interface Job {
  slug: string;
  title: string;
  type: "1099" | "W2" | "Contract";
  location: string;
  department: string;
  shortDescription: string;
  compensation: {
    type: "commission" | "salary" | "hourly" | "contingent" | "royalty";
    details: string;
  };
  posted: string;
  sections: {
    title: string;
    content: string[];
  }[];
  applyEmail: string;
  applyInstructions: string[];
  // Legal compliance fields
  jurisdiction?: string;
  riskDisclosures?: string[];
  legalDisclaimer?: string;
  requiresAcknowledgement?: boolean;
  acknowledgements?: string[];
}

export const jobs: Job[] = [
  // ============================================================
  // ROLE 1: Founding Researcher – Project DRIFT
  // ============================================================
  {
    slug: "founding-researcher-drift",
    title: "Founding Researcher – Project DRIFT",
    type: "1099",
    location: "Remote (US Only)",
    department: "Research",
    shortDescription:
      "Independent contractor research role. Contribution-based equity and contingent compensation. No salary or guaranteed pay. This is a speculative, high-upside research partnership.",
    compensation: {
      type: "contingent",
      details: "Contribution-based equity · Contingent compensation · No guaranteed pay",
    },
    posted: "2026-02-04",
    jurisdiction: "New Mexico",
    requiresAcknowledgement: true,
    acknowledgements: [
      "I understand this is an independent contractor position, not employment.",
      "I understand there is no salary, wages, stipend, or guaranteed compensation of any kind.",
      "I understand that compensation is contingent on future events and is speculative in nature.",
      "I understand that I may receive no financial return for my contributions.",
      "I understand that all intellectual property I create will be assigned to Axion Deep Labs.",
      "I understand that all rights and obligations are governed solely by written agreements that must be executed before any contribution, equity, or rights accrue.",
    ],
    riskDisclosures: [
      "This research is speculative and exploratory in nature. There is no guarantee of scientific success or commercial viability.",
      "Government funding timelines are uncertain. Grant applications may be rejected, delayed, or awarded at amounts different than anticipated.",
      "Compensation is contingent on future events that may never occur. It is possible to contribute significant time and effort and receive no financial return.",
      "The continued viability of Axion Deep Labs is not guaranteed. The company may cease operations before any compensation events occur.",
      "Equity terms are subject to corporate documentation and Board approval. The listing does not guarantee any specific equity allocation.",
    ],
    legalDisclaimer:
      "This listing is for informational purposes only and does not constitute an offer of employment, compensation, or securities. All rights and obligations are governed solely by written agreements executed by the parties and approved by the Board of Directors of Axion Deep Labs, Inc. Governing law: New Mexico.",
    sections: [
      {
        title: "About Project DRIFT",
        content: [
          "Project DRIFT (Degradation Regimes In Iterated Field Transformations) is an exploratory research program investigating behavioral uncertainty in quantum system state evolution under repeated manipulation.",
          "",
          "Research Focus:",
          "• State distribution dynamics under iteration",
          "• Operator ordering effects on error profiles",
          "• Operator diversity as experimental variable",
          "• Predictability boundaries and stability thresholds",
          "",
          "This is foundational research in regimes where closed-form analytical prediction is not feasible. We seek researchers who thrive in ambiguity and are motivated by discovery rather than guaranteed outcomes.",
        ],
      },
      {
        title: "Role Structure",
        content: [
          "This is an independent contractor (1099) position. This is not employment.",
          "",
          "• Part-time commitment accepted; flexible hours",
          "• Fully remote; US-based researchers only",
          "• No minimum hours required",
          "• No supervision or set schedule",
          "• You control your own methods and workflow",
        ],
      },
      {
        title: "Compensation Structure",
        content: [
          "There is no salary, wages, stipend, or guaranteed compensation of any kind.",
          "",
          "Compensation consists of:",
          "",
          "1. Contribution-Based Equity",
          "Equity may be earned through documented, roadmap-based contributions. Equity accrues based on milestone completion and measurable research progress. Equity is not dependent on grant funding and is not compensation for time, it reflects tangible deliverables and research advancement.",
          "",
          "2. Contingent Grant-Based Compensation",
          "If government research funding is secured for DRIFT-related work, contributors may be eligible for compensation from grant proceeds. Eligibility and amounts are subject to grant compliance rules and governing agreements. No specific amounts or percentages are promised.",
          "",
          "3. Royalty Program Eligibility",
          "A Board-approved Royalty Compensation Program exists for potential upside from future commercialization of research. Participation is contract-governed and not guaranteed.",
          "",
          "All compensation terms are governed solely by signed agreements. This listing does not constitute a securities offer.",
        ],
      },
      {
        title: "Contribution Framework",
        content: [
          "Contributions are evaluated on a roadmap-driven, milestone-based framework.",
          "",
          "Contribution categories include:",
          "• Research design and experimental methodology",
          "• Simulation development and execution",
          "• Data analysis and interpretation",
          "• Grant proposal co-authorship",
          "• Academic publications and preprints",
          "• Technical documentation and research logs",
          "",
          "Contributions are evaluated both qualitatively and quantitatively. Specific valuation details are defined in the Founding Researcher Agreement, which must be executed before any contributions are tracked or any rights accrue.",
        ],
      },
      {
        title: "Intellectual Property",
        content: [
          "All intellectual property created in connection with Project DRIFT is owned by Axion Deep Labs. IP assignment is mandatory and is a condition of participation.",
          "",
          "Before acceptance, candidates must disclose:",
          "• Existing inventions or patents",
          "• Prior research that may overlap",
          "• Any IP encumbrances or conflicts",
          "",
          "All publications, preprints, and public disclosures require prior written approval from the company. Publication rights are contract-governed.",
        ],
      },
      {
        title: "Required Agreements",
        content: [
          "Before any contribution, equity, points, or rights may accrue, candidates must execute:",
          "",
          "1. Founding Researcher Agreement",
          "Defines the complete terms of the research partnership, contribution tracking, equity mechanics, and compensation contingencies.",
          "",
          "2. Intellectual Property Assignment Agreement",
          "Assigns all work product and inventions to Axion Deep Labs.",
          "",
          "No rights of any kind arise from this listing or from informal discussions. All enforceable rights arise only after signed agreements approved by the Board.",
        ],
      },
      {
        title: "Termination",
        content: [
          "Either party may terminate the relationship at any time, for any reason, with or without cause.",
          "",
          "Upon termination:",
          "• Earned contribution-based rights survive, subject to governing agreements",
          "• Unvested or unearned rights do not survive",
          "• IP assignment obligations survive indefinitely",
          "• Confidentiality obligations survive per agreement terms",
        ],
      },
      {
        title: "Qualifications",
        content: [
          "Required:",
          "• MS or PhD (or equivalent experience) in physics, quantum computing, applied mathematics, or related field",
          "• Proficiency in quantum simulation frameworks (Qiskit, Cirq, PennyLane, or similar)",
          "• Strong Python programming skills",
          "• Understanding of Trotter decomposition and error analysis",
          "• Ability to work independently without supervision",
          "• US-based (required for jurisdiction compliance)",
          "",
          "Preferred:",
          "• Published research in quantum computing or related fields",
          "• Experience with operator ordering and non-Markovian dynamics",
          "• Grant writing or proposal experience",
          "• Statistical analysis of simulation data",
        ],
      },
    ],
    applyEmail: "research@axiondeep.com",
    applyInstructions: [
      "Your CV or resume",
      "Brief statement of research interests and relevant experience",
      "Links to publications or preprints (if any)",
      "Disclosure of any prior IP, inventions, or potential conflicts",
      "Confirmation that you are US-based",
    ],
  },

  // ============================================================
  // ROLE 3: Frontend Engineer – Forma
  // ============================================================
  {
    slug: "frontend-engineer-forma",
    title: "Frontend Engineer – Forma",
    type: "1099",
    location: "Remote (US Only)",
    department: "Engineering",
    shortDescription:
      "Inventor-contributor role building the Forma visual application platform. Lifetime royalty participation. No salary, this is a speculative, ownership-aligned engineering partnership.",
    compensation: {
      type: "royalty",
      details: "Lifetime royalty participation · No salary · Contribution-based",
    },
    posted: "2026-02-04",
    jurisdiction: "New Mexico",
    requiresAcknowledgement: true,
    acknowledgements: [
      "I understand this is an independent contractor position, not employment.",
      "I understand there is no salary, wages, stipend, or guaranteed compensation of any kind.",
      "I understand that compensation is royalty-based and depends on future commercial success that may never occur.",
      "I understand that I may contribute significant time and effort and receive no financial return.",
      "I understand that all intellectual property I create will be assigned to Axion Deep Labs.",
      "I understand that all rights and obligations are governed solely by written agreements that must be executed before any contribution or royalty rights accrue.",
    ],
    riskDisclosures: [
      "Contributions may never result in income. Revenue from Forma may never materialize.",
      "Commercial success is uncertain. The platform may fail to achieve market adoption.",
      "Royalty participation does not guarantee any specific payment amount or timeline.",
      "The continued viability of Axion Deep Labs is not guaranteed. The company may cease operations before any royalty payments occur.",
      "Royalty terms are subject to corporate documentation and Board approval. This listing does not guarantee any specific royalty allocation.",
    ],
    legalDisclaimer:
      "This listing is for informational purposes only and does not constitute an offer of employment, compensation, or securities. All rights and obligations are governed solely by written agreements executed by the parties and approved by the Board of Directors of Axion Deep Labs, Inc. Governing law: New Mexico.",
    sections: [
      {
        title: "About Forma",
        content: [
          "Forma is a full-stack React application platform that combines visual application building with instant backend generation. It enables users to build, deploy, and scale React applications with visual tools and schema-driven backends.",
          "",
          "Vision: \"As easy as Wix to start, but you own everything and can go anywhere.\"",
          "",
          "Forma consists of:",
          "• Forma Runtime (MIT open source), Schema-driven backend engine with REST, GraphQL, and authentication",
          "• Forma Builder (Proprietary), Visual React app builder with 100+ components, AI generation, real-time collaboration",
          "",
          "This role focuses on the proprietary Builder component.",
        ],
      },
      {
        title: "Role Structure",
        content: [
          "This is an independent contractor (1099) inventor-contributor position. This is not employment.",
          "",
          "• Part-time commitment accepted; flexible hours",
          "• Fully remote; US-based contributors only",
          "• No minimum hours required",
          "• No supervision or set schedule",
          "• You control your own methods and workflow",
        ],
      },
      {
        title: "Contribution Focus",
        content: [
          "Frontend engineers may contribute to:",
          "",
          "• Visual builder canvas and drag-and-drop systems",
          "• Component library and design system",
          "• State management architecture (Zustand)",
          "• Real-time collaboration features (Figma-style cursors)",
          "• Developer experience tooling",
          "• Performance optimization",
          "• Responsive design and accessibility",
          "",
          "Tech Stack: Next.js 14, React, TypeScript, Zustand, TailwindCSS",
        ],
      },
      {
        title: "Compensation Structure",
        content: [
          "There is no salary, wages, stipend, or guaranteed compensation of any kind.",
          "",
          "Compensation consists of:",
          "",
          "Lifetime Royalty Participation",
          "Contributors may earn ongoing royalty participation tied to Forma commercial revenue. Royalties derive from qualifying revenue sources including subscription fees, marketplace revenue, and enterprise licensing.",
          "",
          "Royalty eligibility and participation rates are defined in the Contributor Agreement and Royalty Participation Addendum, which must be executed before any contributions are tracked or any rights accrue.",
          "",
          "No specific percentages or amounts are promised in this listing.",
        ],
      },
      {
        title: "Intellectual Property",
        content: [
          "All intellectual property created in connection with Forma is owned by Axion Deep Labs. IP assignment is mandatory and is a condition of participation.",
          "",
          "Before acceptance, candidates must disclose:",
          "• Existing inventions or patents",
          "• Prior code or projects that may overlap",
          "• Any IP encumbrances or conflicts",
          "",
          "Contributors retain attribution rights only. No public disclosure, blog posts, talks, or demos without written approval. Open-source contributions only where explicitly permitted.",
        ],
      },
      {
        title: "Required Agreements",
        content: [
          "Before any contribution or royalty rights may accrue, candidates must execute:",
          "",
          "1. Contributor Agreement",
          "Defines the complete terms of the contributor relationship, contribution tracking, and role expectations.",
          "",
          "2. Intellectual Property Assignment Agreement",
          "Assigns all work product and inventions to Axion Deep Labs.",
          "",
          "3. Royalty Participation Addendum",
          "Defines royalty eligibility, participation mechanics, and payment terms.",
          "",
          "No rights of any kind arise from this listing or from informal discussions. All enforceable rights arise only after signed agreements approved by the Board.",
        ],
      },
      {
        title: "Termination",
        content: [
          "Either party may terminate the relationship at any time, for any reason, with or without cause.",
          "",
          "Upon termination:",
          "• Earned royalty participation survives, subject to governing agreements",
          "• Unvested or unearned rights do not survive",
          "• IP assignment obligations survive indefinitely",
          "• Confidentiality obligations survive per agreement terms",
        ],
      },
      {
        title: "Qualifications",
        content: [
          "Required:",
          "• 3+ years professional experience with React and TypeScript",
          "• Advanced state management experience (Redux, Zustand, or similar)",
          "• Component architecture and design system experience",
          "• UI performance optimization skills",
          "• Ability to work independently without supervision",
          "• US-based (required for jurisdiction compliance)",
          "",
          "Preferred:",
          "• Experience with visual editors or drag-and-drop systems",
          "• Real-time collaboration implementations (WebSocket, CRDT)",
          "• SaaS dashboard development",
          "• Next.js App Router experience",
          "• Accessibility (a11y) expertise",
          "• Canvas or WebGL experience",
        ],
      },
    ],
    applyEmail: "engineering@axiondeep.com",
    applyInstructions: [
      "Your resume or CV",
      "Links to relevant work (GitHub, portfolio, live projects)",
      "Brief statement on your frontend architecture philosophy",
      "Disclosure of any prior IP, inventions, or potential conflicts",
      "Confirmation that you are US-based",
    ],
  },

  // ============================================================
  // ROLE 4: Frontend Engineer – QUANTA
  // ============================================================
  {
    slug: "frontend-engineer-quanta",
    title: "Frontend Engineer – QUANTA",
    type: "1099",
    location: "Remote (US Only)",
    department: "Engineering",
    shortDescription:
      "Inventor-contributor role building the QUANTA quantum education platform. Lifetime royalty participation. No salary, this is a speculative, ownership-aligned engineering partnership.",
    compensation: {
      type: "royalty",
      details: "Lifetime royalty participation · No salary · Contribution-based",
    },
    posted: "2026-02-04",
    jurisdiction: "New Mexico",
    requiresAcknowledgement: true,
    acknowledgements: [
      "I understand this is an independent contractor position, not employment.",
      "I understand there is no salary, wages, stipend, or guaranteed compensation of any kind.",
      "I understand that compensation is royalty-based and depends on future commercial success that may never occur.",
      "I understand that I may contribute significant time and effort and receive no financial return.",
      "I understand that all intellectual property I create will be assigned to Axion Deep Labs.",
      "I understand that all rights and obligations are governed solely by written agreements that must be executed before any contribution or royalty rights accrue.",
      "I understand that QUANTA is an educational platform and that my contributions do not constitute participation in Project DRIFT research.",
    ],
    riskDisclosures: [
      "Contributions may never result in income. Revenue from QUANTA may never materialize.",
      "Commercial success is uncertain. The platform may fail to achieve market adoption.",
      "Royalty participation does not guarantee any specific payment amount or timeline.",
      "The continued viability of Axion Deep Labs is not guaranteed. The company may cease operations before any royalty payments occur.",
      "Royalty terms are subject to corporate documentation and Board approval. This listing does not guarantee any specific royalty allocation.",
      "Royalties derive only from QUANTA educational platform revenue. No royalties attach to Project DRIFT research outputs.",
    ],
    legalDisclaimer:
      "This listing is for informational purposes only and does not constitute an offer of employment, compensation, or securities. All rights and obligations are governed solely by written agreements executed by the parties and approved by the Board of Directors of Axion Deep Labs, Inc. Governing law: New Mexico.",
    sections: [
      {
        title: "About QUANTA",
        content: [
          "QUANTA (Quantum Unified Abstraction for Next-gen Algorithmics) is a visual quantum computing education platform that makes quantum mechanics accessible through interactive simulation and structured curriculum.",
          "",
          "Mission: Turn abstract quantum mechanics into concrete, visual, and explorable concepts.",
          "",
          "Key Features:",
          "• Visual Circuit Builder, Drag-and-drop quantum gates with bidirectional code sync",
          "• State Visualization, Bloch spheres and probability distributions",
          "• Guided Curriculum, Structured lessons from qubits to Grover's algorithm",
          "• Simulation Engine, Up to 16 qubits powered by Qiskit",
          "",
          "Note: QUANTA is an educational platform. It is distinct from Project DRIFT, which is a separate research program.",
        ],
      },
      {
        title: "Role Structure",
        content: [
          "This is an independent contractor (1099) inventor-contributor position. This is not employment.",
          "",
          "• Part-time commitment accepted; flexible hours",
          "• Fully remote; US-based contributors only",
          "• No minimum hours required",
          "• No supervision or set schedule",
          "• You control your own methods and workflow",
        ],
      },
      {
        title: "Contribution Focus",
        content: [
          "Frontend engineers may contribute to:",
          "",
          "• Visual quantum circuit builder interface",
          "• Interactive state visualization (Bloch spheres, probability charts)",
          "• Curriculum delivery UI and lesson navigation",
          "• Data visualization for quantum states and measurements",
          "• Sandbox mode for free experimentation",
          "• Responsive design and accessibility",
          "",
          "Tech Stack: React, TypeScript, Vite, Zustand",
        ],
      },
      {
        title: "Compensation Structure",
        content: [
          "There is no salary, wages, stipend, or guaranteed compensation of any kind.",
          "",
          "Compensation consists of:",
          "",
          "Lifetime Royalty Participation",
          "Contributors may earn ongoing royalty participation tied to QUANTA educational platform revenue. Royalties derive from qualifying revenue sources including premium features, institutional deployments, and add-on purchases.",
          "",
          "Important: No royalties attach to Project DRIFT research outputs. Royalty eligibility is limited to commercial QUANTA revenue only.",
          "",
          "Royalty eligibility and participation rates are defined in the Contributor Agreement and Royalty Participation Addendum, which must be executed before any contributions are tracked or any rights accrue.",
          "",
          "No specific percentages or amounts are promised in this listing.",
        ],
      },
      {
        title: "Intellectual Property",
        content: [
          "All intellectual property created in connection with QUANTA is owned by Axion Deep Labs. IP assignment is mandatory and is a condition of participation.",
          "",
          "Before acceptance, candidates must disclose:",
          "• Existing inventions or patents",
          "• Prior code or projects that may overlap",
          "• Any IP encumbrances or conflicts",
          "",
          "Contributors retain attribution rights only. No public disclosure, blog posts, talks, or demos without written approval.",
        ],
      },
      {
        title: "Required Agreements",
        content: [
          "Before any contribution or royalty rights may accrue, candidates must execute:",
          "",
          "1. Contributor Agreement",
          "Defines the complete terms of the contributor relationship, contribution tracking, and role expectations.",
          "",
          "2. Intellectual Property Assignment Agreement",
          "Assigns all work product and inventions to Axion Deep Labs.",
          "",
          "3. Royalty Participation Addendum",
          "Defines royalty eligibility, participation mechanics, and payment terms.",
          "",
          "No rights of any kind arise from this listing or from informal discussions. All enforceable rights arise only after signed agreements approved by the Board.",
        ],
      },
      {
        title: "Termination",
        content: [
          "Either party may terminate the relationship at any time, for any reason, with or without cause.",
          "",
          "Upon termination:",
          "• Earned royalty participation survives, subject to governing agreements",
          "• Unvested or unearned rights do not survive",
          "• IP assignment obligations survive indefinitely",
          "• Confidentiality obligations survive per agreement terms",
        ],
      },
      {
        title: "Qualifications",
        content: [
          "Required:",
          "• 2+ years professional experience with React and TypeScript",
          "• Experience building complex data visualizations",
          "• Ability to translate mathematical/scientific concepts into intuitive UI",
          "• Ability to work independently without supervision",
          "• US-based (required for jurisdiction compliance)",
          "",
          "Preferred:",
          "• Physics, mathematics, or quantum computing familiarity",
          "• Educational software development experience",
          "• Experience with visualization libraries (D3.js, Three.js, Recharts)",
          "• Canvas or WebGL experience",
          "• Accessibility (a11y) expertise",
          "• Experience with Qiskit or other quantum frameworks",
        ],
      },
    ],
    applyEmail: "engineering@axiondeep.com",
    applyInstructions: [
      "Your resume or CV",
      "Links to relevant work (GitHub, portfolio, live projects)",
      "Brief statement on your experience with complex visualizations or scientific UI",
      "Disclosure of any prior IP, inventions, or potential conflicts",
      "Confirmation that you are US-based",
    ],
  },

  // ============================================================
  // ROLE 5: Frontend Engineer – Vesper
  // ============================================================
  {
    slug: "frontend-engineer-vesper",
    title: "Frontend Engineer – Vesper",
    type: "1099",
    location: "Remote (US Only)",
    department: "Engineering",
    shortDescription:
      "Inventor-contributor role building the Vesper security platform. Lifetime royalty participation. No salary, this is a speculative, ownership-aligned engineering partnership.",
    compensation: {
      type: "royalty",
      details: "Lifetime royalty participation · No salary · Contribution-based",
    },
    posted: "2026-02-04",
    jurisdiction: "New Mexico",
    requiresAcknowledgement: true,
    acknowledgements: [
      "I understand this is an independent contractor position, not employment.",
      "I understand there is no salary, wages, stipend, or guaranteed compensation of any kind.",
      "I understand that compensation is royalty-based and depends on future commercial success that may never occur.",
      "I understand that I may contribute significant time and effort and receive no financial return.",
      "I understand that all intellectual property I create will be assigned to Axion Deep Labs.",
      "I understand that all rights and obligations are governed solely by written agreements that must be executed before any contribution or royalty rights accrue.",
      "I understand that Vesper is security software with strict lawful-use requirements and that I will not use the software for unauthorized testing.",
    ],
    riskDisclosures: [
      "Contributions may never result in income. Revenue from Vesper may never materialize.",
      "Commercial success is uncertain. The platform may fail to achieve market adoption.",
      "Royalty participation does not guarantee any specific payment amount or timeline.",
      "The continued viability of Axion Deep Labs is not guaranteed. The company may cease operations before any royalty payments occur.",
      "Royalty terms are subject to corporate documentation and Board approval. This listing does not guarantee any specific royalty allocation.",
      "Royalties derive only from lawful commercial use of Vesper. No royalties attach to misuse or unauthorized use of the software.",
    ],
    legalDisclaimer:
      "This listing is for informational purposes only and does not constitute an offer of employment, compensation, or securities. All rights and obligations are governed solely by written agreements executed by the parties and approved by the Board of Directors of Axion Deep Labs, Inc. Governing law: New Mexico.",
    sections: [
      {
        title: "About Vesper",
        content: [
          "Vesper is an autonomous multi-vector cybersecurity analysis platform. It combines AI-powered analysis with traditional security testing tools for authorized vulnerability assessment and penetration testing.",
          "",
          "Core Capabilities:",
          "• Scanner Engine, Template-based vulnerability scanning",
          "• Fuzzer Engine, Intelligent endpoint discovery",
          "• Proxy Engine, HTTP/HTTPS interception",
          "• OOB Engine, Out-of-Band vulnerability detection",
          "• Chain Detector, AI-powered exploit chain discovery",
          "• NLMN Memory, Persistent neural memory for contextual awareness",
          "",
          "Vesper is designed exclusively for use on systems the operator owns or has explicit written authorization to test. Scope enforcement is mandatory and cannot be disabled.",
        ],
      },
      {
        title: "Role Structure",
        content: [
          "This is an independent contractor (1099) inventor-contributor position. This is not employment.",
          "",
          "• Part-time commitment accepted; flexible hours",
          "• Fully remote; US-based contributors only",
          "• No minimum hours required",
          "• No supervision or set schedule",
          "• You control your own methods and workflow",
        ],
      },
      {
        title: "Contribution Focus",
        content: [
          "Frontend engineers may contribute to:",
          "",
          "• Desktop application UI (PyQt6 or web hybrid)",
          "• SaaS dashboard and web interface",
          "• Workflow visualization and pipeline builder",
          "• Scope management and authorization controls",
          "• Report generation and presentation",
          "• Security-conscious UI patterns",
          "",
          "Tech Stack: PyQt6, React, TypeScript (web components)",
        ],
      },
      {
        title: "Compensation Structure",
        content: [
          "There is no salary, wages, stipend, or guaranteed compensation of any kind.",
          "",
          "Compensation consists of:",
          "",
          "Lifetime Royalty Participation",
          "Contributors may earn ongoing royalty participation tied to Vesper commercial revenue. Royalties derive from qualifying revenue sources including SaaS subscriptions, enterprise licensing, and professional edition sales.",
          "",
          "Important: Royalties derive only from lawful commercial use. No royalties attach to misuse or unauthorized use of the software.",
          "",
          "Royalty eligibility and participation rates are defined in the Contributor Agreement and Royalty Participation Addendum, which must be executed before any contributions are tracked or any rights accrue.",
          "",
          "No specific percentages or amounts are promised in this listing.",
        ],
      },
      {
        title: "Intellectual Property",
        content: [
          "All intellectual property created in connection with Vesper is owned by Axion Deep Labs. IP assignment is mandatory and is a condition of participation.",
          "",
          "Before acceptance, candidates must disclose:",
          "• Existing inventions or patents",
          "• Prior code or projects that may overlap",
          "• Any IP encumbrances or conflicts",
          "",
          "Contributors retain attribution rights only. No public disclosure, blog posts, talks, or demos without written approval.",
        ],
      },
      {
        title: "Required Agreements",
        content: [
          "Before any contribution or royalty rights may accrue, candidates must execute:",
          "",
          "1. Contributor Agreement",
          "Defines the complete terms of the contributor relationship, contribution tracking, and role expectations.",
          "",
          "2. Intellectual Property Assignment Agreement",
          "Assigns all work product and inventions to Axion Deep Labs.",
          "",
          "3. Royalty Participation Addendum",
          "Defines royalty eligibility, participation mechanics, and payment terms.",
          "",
          "No rights of any kind arise from this listing or from informal discussions. All enforceable rights arise only after signed agreements approved by the Board.",
        ],
      },
      {
        title: "Termination",
        content: [
          "Either party may terminate the relationship at any time, for any reason, with or without cause.",
          "",
          "Upon termination:",
          "• Earned royalty participation survives, subject to governing agreements",
          "• Unvested or unearned rights do not survive",
          "• IP assignment obligations survive indefinitely",
          "• Confidentiality obligations survive per agreement terms",
        ],
      },
      {
        title: "Qualifications",
        content: [
          "Required:",
          "• 2+ years professional frontend development experience",
          "• Experience building secure UI patterns (handling sensitive data)",
          "• Complex workflow and dashboard UI experience",
          "• Ability to work independently without supervision",
          "• US-based (required for jurisdiction compliance)",
          "",
          "Preferred:",
          "• Security tooling or developer tools experience",
          "• PyQt or desktop application development",
          "• Experience with WebSocket or real-time data",
          "• Familiarity with penetration testing concepts",
          "• Experience building authorization/scope controls",
          "• Dark mode and accessibility expertise",
        ],
      },
    ],
    applyEmail: "engineering@axiondeep.com",
    applyInstructions: [
      "Your resume or CV",
      "Links to relevant work (GitHub, portfolio, live projects)",
      "Brief statement on your experience with security-conscious UI or developer tools",
      "Disclosure of any prior IP, inventions, or potential conflicts",
      "Confirmation that you are US-based",
    ],
  },
];

export function getJobBySlug(slug: string): Job | undefined {
  return jobs.find((job) => job.slug === slug);
}

export function getAllJobSlugs(): string[] {
  return jobs.map((job) => job.slug);
}
