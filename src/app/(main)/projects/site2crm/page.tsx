import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Site2CRM",
  description: "Site2CRM - Lead capture and CRM integration platform by Axion Deep Labs.",
  alternates: { canonical: "/projects/site2crm" },
};

export default function Site2CRMPage() {
  return (
    <div className="no-snap min-h-screen pt-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">Site2CRM</h1>
        <p className="text-xl text-gray-400 leading-relaxed">
          Lead capture and CRM integration platform.
        </p>
      </div>
    </div>
  );
}
