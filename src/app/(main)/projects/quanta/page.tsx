import { Metadata } from "next";

export const metadata: Metadata = {
  title: "QUANTA",
  description: "QUANTA — Interactive quantum computing education platform. Structured curriculum and simulation of established quantum concepts. Built by Axion Deep Labs.",
  keywords: [
    "quantum computing education",
    "quantum simulation",
    "AI integration education",
    "learn quantum computing",
  ],
  alternates: { canonical: "/projects/quanta" },
};

export default function QuantaPage() {
  return (
    <div className="no-snap min-h-screen pt-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">QUANTA</h1>
        <p className="text-xl text-gray-400 leading-relaxed">
          Interactive quantum computing education platform. Structured curriculum and simulation of established quantum concepts.
        </p>
      </div>
    </div>
  );
}
