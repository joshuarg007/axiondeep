"use client";

import { useState } from "react";
import type { Job } from "@/data/jobs";

interface Props {
  job: Job;
}

export default function JobApplicationForm({ job }: Props) {
  const [acknowledged, setAcknowledged] = useState<Record<number, boolean>>({});
  const [jurisdictionAcknowledged, setJurisdictionAcknowledged] = useState(false);

  const acknowledgements = job.acknowledgements || [];
  const allAcknowledged =
    acknowledgements.every((_, index) => acknowledged[index]) &&
    (!job.jurisdiction || jurisdictionAcknowledged);

  const handleAcknowledge = (index: number, checked: boolean) => {
    setAcknowledged((prev) => ({ ...prev, [index]: checked }));
  };

  // Generate mailto link with acknowledgement summary
  const generateMailtoLink = () => {
    const subject = encodeURIComponent(`Application: ${job.title}`);
    const timestamp = new Date().toISOString();

    let body = `Application for: ${job.title}\n`;
    body += `Submitted: ${timestamp}\n`;
    if (job.jurisdiction) {
      body += `Jurisdiction Acknowledged: ${job.jurisdiction}\n`;
    }
    body += `\n--- Acknowledgements Accepted ---\n`;
    acknowledgements.forEach((ack, index) => {
      body += `[${acknowledged[index] ? "X" : " "}] ${ack}\n`;
    });
    body += `\n--- Application Materials ---\n`;
    job.applyInstructions.forEach((instruction, index) => {
      body += `${index + 1}. ${instruction}\n`;
    });
    body += `\n[Please attach your materials above this line]\n`;

    return `mailto:${job.applyEmail}?subject=${subject}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="space-y-6">
      {/* Acknowledgements */}
      {acknowledgements.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
            Required Acknowledgements
          </h3>
          <p className="text-xs text-gray-500">
            You must acknowledge all statements below before submitting your application.
          </p>
          <div className="space-y-3">
            {acknowledgements.map((ack, index) => (
              <label
                key={index}
                className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                  acknowledged[index]
                    ? "bg-cyan-500/10 border-cyan-500/30"
                    : "bg-white/[0.02] border-white/[0.08] hover:border-white/[0.16]"
                }`}
              >
                <input
                  type="checkbox"
                  checked={acknowledged[index] || false}
                  onChange={(e) => handleAcknowledge(index, e.target.checked)}
                  className="mt-0.5 w-4 h-4 rounded border-gray-600 bg-transparent text-cyan-500 focus:ring-cyan-500 focus:ring-offset-0 cursor-pointer"
                />
                <span className="text-sm text-gray-400 leading-relaxed">{ack}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      {/* Jurisdiction Acknowledgement */}
      {job.jurisdiction && (
        <label
          className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
            jurisdictionAcknowledged
              ? "bg-violet-500/10 border-violet-500/30"
              : "bg-white/[0.02] border-white/[0.08] hover:border-white/[0.16]"
          }`}
        >
          <input
            type="checkbox"
            checked={jurisdictionAcknowledged}
            onChange={(e) => setJurisdictionAcknowledged(e.target.checked)}
            className="mt-0.5 w-4 h-4 rounded border-gray-600 bg-transparent text-violet-500 focus:ring-violet-500 focus:ring-offset-0 cursor-pointer"
          />
          <span className="text-sm text-gray-400 leading-relaxed">
            I acknowledge that this agreement is governed by the laws of{" "}
            <span className="text-white font-medium">{job.jurisdiction}</span> and that I meet the
            eligibility requirements for this jurisdiction.
          </span>
        </label>
      )}

      {/* Submit Button */}
      <div className="pt-4">
        {allAcknowledged ? (
          <a
            href={generateMailtoLink()}
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold hover:opacity-90 transition"
          >
            Send Application
          </a>
        ) : (
          <div className="space-y-3">
            <button
              disabled
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gray-700 text-gray-400 font-semibold cursor-not-allowed opacity-50"
            >
              Send Application
            </button>
            <p className="text-xs text-gray-500">
              Please acknowledge all required statements above to enable the application button.
            </p>
          </div>
        )}
      </div>

      {/* Audit Note */}
      <p className="text-xs text-gray-600 pt-4 border-t border-white/[0.06]">
        Your acknowledgements will be included in your application email for record-keeping purposes.
        Timestamp and version information will be captured at submission.
      </p>
    </div>
  );
}
