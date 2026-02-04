import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vesper AI",
  description: "Vesper AI — AI integration for autonomous penetration testing and security research. AI-driven vulnerability assessment built by Axion Deep Labs.",
  keywords: [
    "AI integration",
    "AI penetration testing",
    "AI security integration",
    "vulnerability assessment",
  ],
  alternates: { canonical: "/projects/vesper" },
};

export default function VesperPage() {
  return (
    <div className="no-snap min-h-screen pt-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">Vesper AI</h1>
        <p className="text-xl text-gray-400 leading-relaxed">
          Autonomous penetration testing and security research platform.
        </p>
      </div>
    </div>
  );
}
