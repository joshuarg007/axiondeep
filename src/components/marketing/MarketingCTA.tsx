"use client";

import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import BookingWidget from "@/components/BookingWidget";

export default function MarketingCTA() {
  return (
    <section id="contact" className="relative px-6 py-24 overflow-hidden">
      {/* Aurora gradient background */}
      <Image
        src="/images/marketing/contact-aurora-gradient-background.webp"
        alt="Gradient background with flowing aurora lights in cyan and violet hues"
        fill
        sizes="100vw"
        className="object-cover opacity-10"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050507]/60 to-[#050507]/90" />

      <div className="relative max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left side — copy + booking */}
          <div>
            <p className="text-cyan-400 font-medium tracking-widest uppercase text-sm mb-4">
              Get Started
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to grow your business?
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-4">
              Book a free 30-minute strategy call. We&apos;ll audit your current site, identify your biggest growth opportunities, and build a custom plan to get you more leads.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              No obligation, no pressure. Just a straightforward conversation about what&apos;s possible for your business.
            </p>

            {/* Site2CRM native booking */}
            <div className="mb-6">
              <BookingWidget
                slug="axiondeep"
                buttonText="Book a Free Strategy Call"
                buttonColor="#8b5cf6"
              />
            </div>

            <div className="flex items-center gap-3 text-gray-500 text-sm">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <span>Or email us at <a href="mailto:labs@axiondeep.com" className="text-white hover:text-cyan-400 transition-colors">labs@axiondeep.com</a></span>
            </div>
          </div>

          {/* Right side — contact form */}
          <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/[0.06]">
            <h3 className="text-lg font-semibold text-white mb-6">Send us a message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
