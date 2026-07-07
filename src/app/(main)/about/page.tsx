import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Axion Labs is the trade name of Axion Deep Labs, Inc., an independent research organization advancing deep learning theory and quantum computing. Parent company of Axion Deep Digital.",
  keywords: [
    "Axion Labs",
    "Axion Deep Labs",
    "independent research organization",
    "deep learning research",
    "quantum computing research",
    "research holding company",
  ],
  alternates: { canonical: "/about" },
};

// Portfolio companies of Axion Deep Labs, Inc. — stated factually, not marketed.
const ventures = [
  {
    name: "Axion Deep Digital",
    href: "https://www.axiondeepdigital.com",
    note: "Web development, SEO, and lead-capture services subsidiary.",
  },
  {
    name: "Site2CRM",
    href: "https://site2crm.io",
    note: "AI lead capture and website-to-CRM synchronization.",
  },
  {
    name: "Made4Founders",
    href: "https://made4founders.com",
    note: "Command-center software for early-stage founders.",
  },
  {
    name: "QUANTA",
    href: "/projects/quanta",
    note: "Quantum computing education platform; also the research instrument for Project DRIFT.",
  },
];

export default function AboutPage() {
  return (
    <div className="no-snap relative text-gray-300">
      {/* Hero */}
      <section className="min-h-[40vh] flex items-center justify-center px-6 pt-28 pb-12">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-bold tracking-widest uppercase text-lg md:text-xl mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            ABOUT
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-white">
            Axion Labs
          </h1>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
            Axion Labs is the trade name of Axion Deep Labs, Inc., an independent
            research organization conducting original research in deep learning
            theory, quantum computing, and computational neuroscience.
          </p>
        </div>
      </section>

      {/* Corporate structure */}
      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Corporate structure
          </h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            Axion Deep Labs, Inc. is a New Mexico research and development company.
            It is the parent company of{" "}
            <a
              href="https://www.axiondeepdigital.com"
              target="_blank"
              rel="noopener"
              className="text-white underline decoration-white/30 hover:decoration-white"
            >
              Axion Deep Digital
            </a>
            , its web and SEO services subsidiary, and holds a portfolio of
            software ventures listed below. Commercial products are operated by
            those ventures; Axion Labs itself is the research parent.
          </p>
        </div>
      </section>

      {/* Portfolio */}
      <section className="px-6 pb-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Portfolio companies
          </h2>
          <ul className="space-y-4">
            {ventures.map((v) => {
              const isInternal = v.href.startsWith("/");
              return (
                <li
                  key={v.name}
                  className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08]"
                >
                  {isInternal ? (
                    <Link href={v.href} className="font-semibold text-white hover:underline">
                      {v.name}
                    </Link>
                  ) : (
                    <a
                      href={v.href}
                      target="_blank"
                      rel="noopener"
                      className="font-semibold text-white hover:underline"
                    >
                      {v.name}
                    </a>
                  )}
                  <p className="text-sm text-gray-400 mt-1 leading-relaxed">{v.note}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section className="px-6 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-400 mb-6">
            Research inquiries and collaboration.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold hover:opacity-90 transition"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
