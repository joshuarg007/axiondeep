import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vesper AI",
  description: "Vesper AI - Intelligent automation platform by Axion Deep Labs.",
  alternates: { canonical: "/projects/vesper" },
};

export default function VesperPage() {
  return (
    <div className="no-snap min-h-screen pt-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">Vesper AI</h1>
        <p className="text-xl text-gray-400 leading-relaxed">
          Intelligent automation platform.
        </p>
      </div>
    </div>
  );
}
