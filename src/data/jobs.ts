export interface Job {
  slug: string;
  title: string;
  type: "1099" | "W2" | "Contract";
  location: string;
  department: string;
  shortDescription: string;
  compensation: {
    type: "commission" | "salary" | "hourly" | "contingent";
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
  {
    slug: "independent-sales-partner",
    title: "Independent Sales Partner",
    type: "1099",
    location: "Remote (US)",
    department: "Sales",
    shortDescription:
      "Commission-only sales role with 20% on projects and 15% lifetime residuals on subscriptions. Unlimited earning potential.",
    compensation: {
      type: "commission",
      details: "20% project commission + 15% lifetime subscription residuals",
    },
    posted: "2026-02-04",
    sections: [
      {
        title: "About Axion Deep Labs",
        content: [
          "Axion Deep Labs builds AI-powered applications and integrations for businesses ready to automate. Our flagship products:",
          "• Site2CRM (site2crm.io) — AI chat agents + lead capture forms with real-time CRM sync",
          "• Made4Founders (made4founders.com) — AI-powered command center for startup founders",
          "• Custom AI Integrations — Bespoke automation and AI solutions for mid-market companies",
          "We're looking for independent sales partners to bring these solutions to market.",
        ],
      },
      {
        title: "The Opportunity",
        content: [
          "Project Work (One-Time):",
          "• 20% commission on closed project value",
          "• Average custom integration: $8,000–$40,000",
          "• Commission per project: $1,600–$8,000",
          "",
          "Subscription Services (Residual):",
          "• 15% monthly residual on all subscription revenue you bring in",
          "• Paid for the lifetime of the customer",
          "",
          "Site2CRM: $29–$79/month → Your residual: $4–$12/month per customer",
          "Made4Founders: $19–$99/month → Your residual: $3–$15/month per customer",
          "Enterprise deals: $500+/month → Your residual: $75+/month per customer",
          "",
          "Example Earnings:",
          "• Close one $25,000 integration project = $5,000 commission",
          "• Sign 20 Site2CRM PRO clients ($79/mo) = $237/month residual",
          "• Sign 10 Made4Founders Growth clients ($49/mo) = $73/month residual",
          "• Land 2 enterprise deals ($500/mo each) = $150/month residual",
          "• After 12 months of consistent work, you could have $3,000–$8,000/month in passive residuals",
          "",
          "No cap. No territory limits. Stack your income.",
        ],
      },
      {
        title: "What We Provide",
        content: [
          "• 20% project commission + 15% lifetime residuals on subscriptions",
          "• Sales collateral, pitch decks, and live demo environments",
          "• Technical support for demos and scoping calls",
          "• Full product training and access to our sales portal",
          "• Marketing materials and case studies",
          "• Commission paid within 7 days of client payment",
        ],
      },
      {
        title: "What You Bring",
        content: [
          "• Existing network in startups, agencies, SMBs, or professional services",
          "• Proven B2B sales experience—you've closed deals, not just generated leads",
          "• Ability to run full sales cycles independently (prospect → demo → close)",
          "• Comfortable explaining technical products in plain English",
          "• Self-motivated—no one's going to manage your calendar",
          "• Your own LLC or sole proprietorship (1099 requirement)",
        ],
      },
      {
        title: "Ideal Candidates",
        content: [
          "• Former agency owners or consultants with active client relationships",
          "• Startup ecosystem players (accelerator mentors, fractional CTOs, advisors)",
          "• Tech sales reps who want uncapped earnings and residual income",
          "• Marketing/web professionals who already talk to businesses about digital tools",
          "• Anyone with a warm network of founders, agencies, or growing businesses",
        ],
      },
      {
        title: "This Is NOT For You If",
        content: [
          "• You need a base salary to cover expenses",
          "• You're brand new to sales",
          "• You expect inbound leads delivered to you",
          "• You've never closed a deal over $3,000",
        ],
      },
    ],
    applyEmail: "careers@axiondeep.com",
    applyInstructions: [
      "Your resume",
      "Brief intro on your background",
      "Industries or networks where you have relationships",
      "Largest deal you've personally closed",
    ],
  },
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
          "Equity may be earned through documented, roadmap-based contributions. Equity accrues based on milestone completion and measurable research progress. Equity is not dependent on grant funding and is not compensation for time—it reflects tangible deliverables and research advancement.",
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
];

export function getJobBySlug(slug: string): Job | undefined {
  return jobs.find((job) => job.slug === slug);
}

export function getAllJobSlugs(): string[] {
  return jobs.map((job) => job.slug);
}
