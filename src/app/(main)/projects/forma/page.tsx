import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forma",
  description: "Forma - Design system and UI framework by Axion Deep Labs.",
  alternates: { canonical: "/projects/forma" },
};

export default function FormaPage() {
  return (
    <div className="no-snap min-h-screen pt-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">Forma</h1>
        <p className="text-xl text-gray-400 leading-relaxed">
          Design system and UI framework.
        </p>
      </div>
    </div>
  );
}
