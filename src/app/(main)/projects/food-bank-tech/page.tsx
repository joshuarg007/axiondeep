import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Food Bank Tech | Open-Source Tooling for Food Banks",
  description:
    "Q3 2026 commitment from Axion Deep Labs: open-source operational tooling for food banks. Discovery first, then build what hurts most. Inventory, client intake, volunteer scheduling, route planning. No branding, no paywall, no strings.",
  keywords: [
    "food bank software",
    "open source nonprofit",
    "food security tools",
    "client intake",
    "volunteer scheduling",
  ],
  alternates: { canonical: "/projects/food-bank-tech" },
};

export default function FoodBankTechPage() {
  return (
    <div className="no-snap min-h-screen pt-32 px-6 pb-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="text-xs px-2 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              Q3 2026
            </span>
            <span className="text-xs px-2 py-1 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
              Open Source
            </span>
            <span className="text-xs px-2 py-1 rounded bg-violet-500/20 text-violet-300 border border-violet-500/30">
              Discovery First
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-3">
            Food Bank Tech
          </h1>
          <p className="text-xl text-emerald-300 font-medium mb-4">
            Real tools for people in real need. Free, open, maintained.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            AxionDeep exists to build technology that matters. A portion of our engineering
            output goes to open-source tools for underserved communities, starting with
            food banks and food security organizations. No paywall. No signup. No strings.
            Built by people who&apos;ve stood in that line.
          </p>
        </div>

        {/* The why */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">The why</h2>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500/[0.08] to-cyan-500/[0.04] border border-white/[0.08]">
            <p className="text-gray-400 leading-relaxed mb-4">
              We&apos;ve been on the receiving end. That informs everything. The people who
              run food banks are juggling intake spreadsheets, paper volunteer sheets,
              donated software that doesn&apos;t talk to other donated software, and a
              dozen well-intentioned platforms that all want a logo placement and a
              monthly fee.
            </p>
            <p className="text-gray-400 leading-relaxed">
              The technology problems are not hard. The problem is that nobody who&apos;s
              built it has stayed to maintain it, and the people who actually use it never
              get a say in what gets built. We are trying to do that part right.
            </p>
          </div>
        </div>

        {/* Approach */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">The approach</h2>
          <div className="space-y-4">
            {[
              {
                step: "01",
                title: "Discovery, not features",
                desc: "Q3 2026 starts with conversations. Two or three food banks, multiple sessions each, with the people who actually use the systems. We are not pitching anything. We are asking what hurts most. Whatever wins is what we build first.",
              },
              {
                step: "02",
                title: "Build the painful thing",
                desc: "First release is whatever the discovery work flags as the highest-leverage pain point. Likely candidates: inventory and donation tracking, client intake with privacy controls, volunteer scheduling with no-shows handled gracefully, delivery and distribution route planning. We build what they ask for, not what looks good in a demo.",
              },
              {
                step: "03",
                title: "Release it open and unbranded",
                desc: "MIT-licensed code on GitHub. No AxionDeep watermark on the tool itself. Any food bank should be able to fork it, host it, modify it, and never have to credit us. This is not a marketing channel. It is a contribution.",
              },
              {
                step: "04",
                title: "Maintain it",
                desc: "Abandoned open source helps nobody. We commit to keeping the tools alive, including security patches and dependency updates, for as long as they are in active use anywhere. If we ever have to walk away, we hand off the maintainer keys honestly.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 items-start rounded-xl bg-white/[0.02] border border-emerald-500/10 p-5">
                <span className="text-2xl font-bold text-emerald-300 opacity-40 shrink-0 w-8 text-right">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Likely modules */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Likely first modules</h2>
          <p className="text-sm text-gray-500 mb-6">
            Final scope is set by discovery, not by what looks good on a slide. These are the candidates we expect to surface.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/10">
              <h3 className="font-semibold text-white mb-2">Inventory and donation tracking</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Lightweight intake of donated goods, expiration tracking, allocation to
                outgoing distributions. Spreadsheet-replaceable, mobile-friendly, works
                offline at the loading dock.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/10">
              <h3 className="font-semibold text-white mb-2">Client intake</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Privacy-respecting intake flows. Minimum data, clear retention rules, no
                analytics shipping client information offsite. Multilingual by default.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-violet-500/10 to-transparent border border-violet-500/10">
              <h3 className="font-semibold text-white mb-2">Volunteer scheduling</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Shift signup, reminders, no-show tolerant scheduling. Handles the reality
                that volunteer commitments slip without making it punitive.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-fuchsia-500/10 to-transparent border border-fuchsia-500/10">
              <h3 className="font-semibold text-white mb-2">Distribution and route planning</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Delivery route optimization for organizations that bring food to clients.
                Honest about constraints (vehicle limits, driver availability, address
                accessibility), printable for non-app users.
              </p>
            </div>
          </div>
        </div>

        {/* Principles */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Operating principles</h2>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-violet-500/[0.06] to-emerald-500/[0.04] border border-white/[0.08]">
            <ul className="space-y-3 text-gray-400">
              <li className="flex gap-3">
                <span className="text-emerald-300 shrink-0">·</span>
                <span>Talk to the people who use these services before building anything.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-300 shrink-0">·</span>
                <span>Open source everything. Any food bank should be able to run it.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-300 shrink-0">·</span>
                <span>No branding on the tool. This isn&apos;t marketing. It&apos;s contribution.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-300 shrink-0">·</span>
                <span>Maintain it. Abandoned open source helps nobody.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Get involved */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">If you run a food bank</h2>
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
            <p className="text-gray-400 leading-relaxed">
              We&apos;d like to talk. Discovery calls in Q3 2026 are going to be a small
              cohort, on purpose. If your team has a workflow that hurts and you&apos;re
              willing to walk us through it candidly, please get in touch. There is no
              cost, no commitment, and no obligation to use anything we end up building.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-violet-500 font-semibold text-white hover:opacity-90 transition shadow-lg shadow-emerald-500/30"
          >
            Get in touch
          </Link>
          <Link
            href="/mission"
            className="px-8 py-4 rounded-full border border-white/20 font-medium text-white hover:bg-white/5 transition"
          >
            Read our mission
          </Link>
        </div>

        {/* Back */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <Link href="/projects" className="text-gray-400 hover:text-white transition flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
