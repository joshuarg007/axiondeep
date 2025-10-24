import React from "react";

export default function Products() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl md:text-4xl font-semibold">Products</h1>
      <p className="text-gray-300">
        Applications created by Axion Deep are branded independently and operate under our umbrella.
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="border border-white/10 rounded-2xl p-5 bg-white/5">
          <div className="text-lg font-semibold mb-1">Site2CRM (SLMS)</div>
          <div className="text-gray-300 text-sm mb-3">
            A practical stack for capturing leads, syncing with your CRM, and turning activity into useful analytics.
          </div>
          <div className="flex gap-3 text-sm">
            <a className="underline hover:text-gray-200" href="https://site2crm.axiondeep.com">Public site</a>
            <a className="underline hover:text-gray-200" href="https://app.site2crm.axiondeep.com">App</a>
          </div>
        </div>

        <div className="border border-white/10 rounded-2xl p-5 bg-white/5">
          <div className="text-lg font-semibold mb-1">Predictive Funnels</div>
          <div className="text-gray-300 text-sm">ML scoring, funnel health, and alerts.</div>
        </div>
      </div>
    </div>
  );
}
