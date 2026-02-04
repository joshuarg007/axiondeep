export interface Job {
  slug: string;
  title: string;
  type: "1099" | "W2" | "Contract";
  location: string;
  department: string;
  shortDescription: string;
  compensation: {
    type: "commission" | "salary" | "hourly";
    details: string;
  };
  posted: string;
  sections: {
    title: string;
    content: string[];
  }[];
  applyEmail: string;
  applyInstructions: string[];
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
];

export function getJobBySlug(slug: string): Job | undefined {
  return jobs.find((job) => job.slug === slug);
}

export function getAllJobSlugs(): string[] {
  return jobs.map((job) => job.slug);
}
