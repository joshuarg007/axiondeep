import { Metadata } from "next";

export const metadata: Metadata = {
  title: "QUANTA",
  description: "QUANTA - Advanced AI-powered analytics platform by Axion Deep Labs.",
  alternates: { canonical: "/projects/quanta" },
};

export default function QuantaPage() {
  return (
    <div className="no-snap min-h-screen pt-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">QUANTA</h1>
        <p className="text-xl text-gray-400 leading-relaxed">
          Advanced AI-powered analytics platform.
        </p>
      </div>
    </div>
  );
}
