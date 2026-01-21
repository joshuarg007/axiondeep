import React from "react";
import SEO from "../components/SEO";

export default function Labs() {
  return (
    <div className="space-y-6">
      <SEO
        title="Labs - Research Notes & Prototypes"
        description="Axion Deep Labs research notes, prototypes, and benchmarks. Selective technical artifacts and methods for software development practitioners."
        keywords="software development research, technical notes, prototypes, benchmarks, software engineering labs"
        canonical="/labs"
      />
      <h1 className="text-3xl md:text-4xl font-semibold">Labs</h1>
      <p className="text-gray-300">
        Minimal by design. We share selective notes, prototypes, and benchmarks when they’re useful to practitioners.
      </p>
      <ul className="list-disc pl-5 text-gray-300 space-y-2">
        <li>Notes — methods and measurements.</li>
        <li>Benchmarks — transparent, reproducible comparisons.</li>
        <li>Artifacts — small tools and reference configs.</li>
      </ul>
    </div>
  );
}
