import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Axion Deep Labs. Research collaborations, technical inquiries, and project discussions.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="snap-page relative text-gray-300">
      {/* Hero Section */}
      <section className="snap-section min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-5xl mx-auto w-full">
          {/* Header - matching other pages */}
          <div className="text-center mb-16">
            <p className="font-bold tracking-widest uppercase text-lg md:text-xl mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              GET IN TOUCH
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-white" style={{ textShadow: "0 0 40px rgba(255,255,255,0.4)" }}>
                Connect With
              </span>{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                the Lab
              </span>
            </h1>
            <p className="text-base md:text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
              Research collaborations, technical inquiries, or project discussions.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left - Contact Info */}
            <div className="space-y-8">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/5 border border-white/[0.06]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Email Us</h3>
                    <a href="mailto:hello@axiondeep.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
                      hello@axiondeep.com
                    </a>
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  We typically respond within 24 hours.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-violet-500/10 to-purple-500/5 border border-white/[0.06]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Response Time</h3>
                    <span className="text-gray-400">Usually within a few hours</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  For urgent matters, mention it in your message.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-fuchsia-500/10 to-pink-500/5 border border-white/[0.06]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-fuchsia-500 to-pink-500 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Location</h3>
                    <span className="text-gray-400">Remote-first, Global team</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  We work with clients worldwide.
                </p>
              </div>
            </div>

            {/* Right - Contact Form */}
            <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/[0.06]">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
