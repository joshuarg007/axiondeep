"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ROICalculator() {
  const [leads, setLeads] = useState(100);
  const [dealSize, setDealSize] = useState(5000);
  const [minutesPerEntry, setMinutesPerEntry] = useState(7);

  const hoursWasted = (leads * minutesPerEntry) / 60;
  const hoursSaved = hoursWasted * 0.95;
  const laborCostSaved = hoursSaved * 50; // $50/hr
  const revenuePotential = leads * dealSize * 0.03; // 3% close rate

  return (
    <section className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-cyan-400 font-medium tracking-widest uppercase text-sm mb-4">
            Calculator
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What&apos;s manual entry costing you?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Adjust the sliders to match your business. See exactly how much time and money you&apos;re leaving on the table.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Sliders */}
          <div className="space-y-10">
            {/* Leads per month */}
            <div>
              <div className="flex justify-between items-baseline mb-3">
                <label className="text-sm text-gray-400 font-medium">Leads per month</label>
                <span className="text-xl font-bold text-white">{leads}</span>
              </div>
              <input
                type="range"
                min={10}
                max={500}
                step={10}
                value={leads}
                onChange={(e) => setLeads(Number(e.target.value))}
                className="w-full h-2 bg-white/[0.06] rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-cyan-500 [&::-webkit-slider-thumb]:to-violet-500 [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-violet-500/25 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-violet-500 [&::-moz-range-thumb]:border-0"
              />
              <div className="flex justify-between text-xs text-gray-600 mt-1">
                <span>10</span>
                <span>500</span>
              </div>
            </div>

            {/* Average deal size */}
            <div>
              <div className="flex justify-between items-baseline mb-3">
                <label className="text-sm text-gray-400 font-medium">Average deal size</label>
                <span className="text-xl font-bold text-white">${dealSize.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min={500}
                max={50000}
                step={500}
                value={dealSize}
                onChange={(e) => setDealSize(Number(e.target.value))}
                className="w-full h-2 bg-white/[0.06] rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-cyan-500 [&::-webkit-slider-thumb]:to-violet-500 [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-violet-500/25 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-violet-500 [&::-moz-range-thumb]:border-0"
              />
              <div className="flex justify-between text-xs text-gray-600 mt-1">
                <span>$500</span>
                <span>$50,000</span>
              </div>
            </div>

            {/* Minutes per entry */}
            <div>
              <div className="flex justify-between items-baseline mb-3">
                <label className="text-sm text-gray-400 font-medium">Minutes per manual entry</label>
                <span className="text-xl font-bold text-white">{minutesPerEntry} min</span>
              </div>
              <input
                type="range"
                min={3}
                max={15}
                step={1}
                value={minutesPerEntry}
                onChange={(e) => setMinutesPerEntry(Number(e.target.value))}
                className="w-full h-2 bg-white/[0.06] rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-cyan-500 [&::-webkit-slider-thumb]:to-violet-500 [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-violet-500/25 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-violet-500 [&::-moz-range-thumb]:border-0"
              />
              <div className="flex justify-between text-xs text-gray-600 mt-1">
                <span>3 min</span>
                <span>15 min</span>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              className="p-6 rounded-2xl bg-gradient-to-br from-red-500/10 to-red-500/5 border border-red-500/20"
              key={`waste-${hoursWasted.toFixed(0)}`}
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-sm text-red-400/70 mb-1">Hours wasted / month</p>
              <p className="text-3xl font-bold text-red-400">{hoursWasted.toFixed(0)}h</p>
              <p className="text-xs text-gray-600 mt-1">on manual data entry</p>
            </motion.div>

            <motion.div
              className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 border border-emerald-500/20"
              key={`saved-${hoursSaved.toFixed(0)}`}
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-sm text-emerald-400/70 mb-1">Hours saved / month</p>
              <p className="text-3xl font-bold text-emerald-400">{hoursSaved.toFixed(0)}h</p>
              <p className="text-xs text-gray-600 mt-1">with automated capture</p>
            </motion.div>

            <motion.div
              className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-cyan-500/20"
              key={`cost-${laborCostSaved.toFixed(0)}`}
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-sm text-cyan-400/70 mb-1">Labor cost saved / month</p>
              <p className="text-3xl font-bold text-cyan-400">${laborCostSaved.toLocaleString()}</p>
              <p className="text-xs text-gray-600 mt-1">at $50/hr labor rate</p>
            </motion.div>

            <motion.div
              className="p-6 rounded-2xl bg-gradient-to-br from-violet-500/10 to-violet-500/5 border border-violet-500/20"
              key={`rev-${revenuePotential.toFixed(0)}`}
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-sm text-violet-400/70 mb-1">Revenue potential / month</p>
              <p className="text-3xl font-bold text-violet-400">${revenuePotential.toLocaleString()}</p>
              <p className="text-xs text-gray-600 mt-1">at 3% close rate</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
