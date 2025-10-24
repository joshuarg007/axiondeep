import React from "react";

export default function Solutions() {
  const items = [
    { t: "Integration & Data Flow", d: "CRMs, ERPs, custom APIs; resilient pipelines." },
    { t: "Analytics & Visualization", d: "Dashboards that highlight signal, not noise." },
    { t: "Intelligent Automation", d: "ML-assisted workflows that improve outcomes." },
  ];
  return (
    <div className="space-y-6">
      <h1 className="text-3xl md:text-4xl font-semibold">Solutions</h1>
      <p className="text-gray-300">
        We design and deliver software systems that connect data, automate decisions, and reveal actionable insight.
      </p>
      <div className="grid md:grid-cols-3 gap-4">
        {items.map(i => (
          <div key={i.t} className="border border-white/10 rounded-2xl p-5 bg-white/5">
            <div className="font-semibold mb-1">{i.t}</div>
            <div className="text-gray-300 text-sm">{i.d}</div>
          </div>
        ))}
      </div>
      <a href="/contact" className="inline-block mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-700 font-semibold hover:opacity-90 transition">
        Talk to an Engineer
      </a>
    </div>
  );
}
