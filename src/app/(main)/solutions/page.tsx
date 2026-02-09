import { Metadata } from "next";
import Link from "next/link";
import ProductGrid from "./ProductGrid";

export const metadata: Metadata = {
  title: "Our Projects",
  description:
    "Software built from original research: Site2CRM AI lead capture, Made4Founders startup command center, QUANTA quantum education, Vesper penetration testing, and more.",
  keywords: [
    "AI research products",
    "deep tech portfolio",
    "quantum computing education",
    "research-driven software",
    "technology innovation",
  ],
  alternates: { canonical: "/solutions" },
};

export default function SolutionsPage() {
  return (
    <div className="no-snap relative text-gray-300">
      {/* Hero */}
      <section className="min-h-[50vh] flex items-center justify-center px-6 pt-28 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-bold tracking-widest uppercase text-lg md:text-xl mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            FROM THE LABS
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span
              className="text-white"
              style={{ textShadow: "0 0 40px rgba(255,255,255,0.4)" }}
            >
              Our{" "}
            </span>
            <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Products
            </span>
          </h1>
          <p className="text-base md:text-lg text-gray-400 max-w-xl mx-auto">
            Real software solving real problems. Every product built, owned, and
            operated by Axion Deep Labs.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="px-6 pb-20">
        <ProductGrid />
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative p-12 md:p-16 rounded-3xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/[0.08]">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What we&apos;re working on next
            </h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
              Interested in our research or want to discuss a collaboration?
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold hover:opacity-90 transition"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
