import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import BookingWidget from "@/components/BookingWidget";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Axion Labs for research collaborations, academic partnerships, and technical discussions. We respond within 24 hours.",
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
                    <a href="mailto:labs@axiondeep.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
                      labs@axiondeep.com
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

              <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/5 border border-white/[0.06]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Call the Lab</h3>
                    <a href="tel:+15127615351" className="text-gray-400 hover:text-emerald-400 transition-colors">
                      (512) 761-5351
                    </a>
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  For urgent research questions or press inquiries during US business hours.
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
                    <span className="text-gray-400">Remote-first, global research team</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  Distributed laboratory with research and engineering staff across the United States and Europe.
                </p>
              </div>
            </div>

            {/* Right - Contact Form */}
            <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/[0.06]">
              <ContactForm />
            </div>
          </div>

          {/* Schedule a Meeting */}
          <div className="mt-20">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Prefer a Live Conversation?</h2>
              <p className="text-gray-400 max-w-lg mx-auto">
                Book a time that works for you. We&apos;ll discuss your project, answer questions, and explore how we can help.
              </p>
            </div>
            <div className="max-w-3xl mx-auto rounded-3xl bg-white/[0.03] border border-white/[0.06] p-2">
              <BookingWidget slug="booking-ml9vyn5a" buttonColor="#8b5cf6" />
            </div>
          </div>

          {/* What We Can Help With */}
          <div className="mt-20">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">What We Can Help With</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/10">
                <h3 className="font-semibold text-white mb-2">Research Collaboration</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Academic partnerships, joint experiments, and co-authored publications in
                  deep learning theory, topological data analysis, and continual learning.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-gradient-to-br from-violet-500/10 to-transparent border border-violet-500/10">
                <h3 className="font-semibold text-white mb-2">Product Inquiries</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Questions about Made4Founders, Site2CRM, QUANTA, Vesper, or Forma. Demo
                  requests, pricing, and enterprise partnerships.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-gradient-to-br from-fuchsia-500/10 to-transparent border border-fuchsia-500/10">
                <h3 className="font-semibold text-white mb-2">Funding &amp; Investment</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Grant applications, research funding inquiries, and venture discussions
                  for our deep tech research programs and product ventures.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/10">
                <h3 className="font-semibold text-white mb-2">Careers &amp; Contracting</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Open positions, contractor opportunities, and research fellowships. We
                  work with researchers and engineers across AI, quantum, and systems.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-20">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                <h3 className="font-semibold text-white mb-2">How quickly do you respond?</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  We typically respond within 24 hours on business days. For urgent matters,
                  mention it in your message and we&apos;ll prioritize your inquiry.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                <h3 className="font-semibold text-white mb-2">Do you take on external research projects?</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  We welcome collaborations that align with our active research programs in
                  deep learning theory, continual learning, and topological data analysis.
                  Reach out with a brief description of your project and how it connects to
                  our work.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                <h3 className="font-semibold text-white mb-2">Where is your team located?</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  We are a remote-first research lab with team members distributed globally.
                  We collaborate asynchronously and maintain a flexible work environment that
                  prioritizes deep focus over fixed schedules.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                <h3 className="font-semibold text-white mb-2">Can I access your research data?</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Yes. Our experimental code, configurations, and results are published
                  open-source on GitHub. Visit our research pages for links to repositories
                  and detailed experimental protocols.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
