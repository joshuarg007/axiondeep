import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Axion Deep Labs. Let's discuss your software project, get a quote, or just have a conversation about technology.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="no-snap min-h-screen pt-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">Contact Us</h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              Whether you have a clear vision or just a spark of an idea, we&apos;d love to hear about it.
            </p>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <span>hello@axiondeep.com</span>
              </div>
            </div>
          </div>
          <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/[0.06]">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
