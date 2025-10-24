import React from "react";

export default function Legal() {
  return (
    <div className="space-y-10">
      <section>
        <h1 className="text-3xl md:text-4xl font-semibold mb-3">Privacy</h1>
        <p className="text-gray-300">
          We collect the minimum necessary data to operate this site and respond to inquiries. We do not sell personal information.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-3">Terms</h2>
        <p className="text-gray-300">
          Axion Deep software and services are provided under written agreements. By using this site you agree to our acceptable use and security policies.
        </p>
      </section>
    </div>
  );
}
