import { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import BookingWidget from "@/components/BookingWidget";

export const metadata: Metadata = {
  title: "Contact — Get a Free Strategy Call",
  description:
    "Book a free 30-minute strategy call with Axion Deep Marketing. We'll audit your site, identify growth opportunities, and build a custom plan.",
  alternates: { canonical: "/marketing/contact" },
  openGraph: {
    title: "Contact Axion Deep Marketing",
    description: "Book a free strategy call. No obligation, no pressure.",
    url: "/marketing/contact",
    images: [
      {
        url: "/images/marketing/og-axion-deep-marketing-services.png",
        width: 1200,
        height: 630,
        alt: "Contact Axion Deep Marketing — book a free strategy call for web development, SEO, and lead capture services",
      },
    ],
  },
};

export default function MarketingContactPage() {
  return (
    <div className="no-snap">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex flex-col items-center justify-center text-center px-6 pt-28 pb-8 overflow-hidden">
        {/* Aurora gradient background */}
        <Image
          src="/images/marketing/contact-aurora-gradient-background.webp"
          alt="Ethereal aurora gradient background with flowing cyan and violet light representing growth and connection"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050507]/40 via-[#050507]/70 to-[#050507]" />

        <p className="relative text-cyan-400 font-medium tracking-widest uppercase text-sm mb-6">
          Contact Us
        </p>
        <h1 className="relative text-5xl md:text-6xl font-bold text-white mb-6">
          Let&apos;s talk growth
        </h1>
        <p className="relative text-xl text-gray-400 max-w-xl mx-auto">
          Book a free strategy call or send us a message. We respond within one business day.
        </p>
      </section>

      {/* Contact grid */}
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16">
          {/* Left — booking + info */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Book a free strategy call</h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              30 minutes, no obligation. We&apos;ll review your current online presence, identify your biggest growth opportunities, and outline a custom plan — whether you work with us or not.
            </p>

            <div className="mb-10">
              <BookingWidget
                slug="axiondeep"
                buttonText="Book a Strategy Call"
                buttonColor="#8b5cf6"
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-400">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <a href="mailto:labs@axiondeep.com" className="hover:text-white transition-colors">
                  labs@axiondeep.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span>Response within 1 business day</span>
              </div>
            </div>
          </div>

          {/* Right — contact form */}
          <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/[0.06]">
            <h3 className="text-lg font-semibold text-white mb-6">Send a message</h3>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="px-6 py-20 border-t border-white/[0.06]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-cyan-400 font-medium tracking-widest uppercase text-sm mb-4">What to Expect</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Your free strategy call, start to finish
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              The strategy call is a working session, not a sales pitch. We come prepared with a live
              audit of your current site, a shortlist of the highest-impact opportunities, and a
              realistic read on timeline and cost. You leave with a plan you can act on, whether we
              end up working together or not.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <h3 className="text-white font-semibold mb-2">Before the call</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Once you book, we run your site through DeepAudit AI and review your analytics, search
                console data, and competitor rankings. By the time we meet we already know where you
                rank, what is broken, and where the ceiling is for organic growth. No intake form
                fatigue, no making you explain the basics.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <h3 className="text-white font-semibold mb-2">During the call</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We share our findings on screen and walk through the three or four opportunities that
                will move the needle fastest for your business. You get straight answers on what a
                rebuild, an SEO engagement, or a lead capture rollout would actually look like,
                including scope, timeline, and budget ranges. Questions welcome at any point.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <h3 className="text-white font-semibold mb-2">After the call</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                You get a written recap with the audit findings, prioritized recommendations, and a
                copy-paste fix list for anything you want to tackle in-house. If it makes sense to
                keep talking, we send a detailed proposal with fixed pricing. If it does not, you
                still walk away with a roadmap you can use.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
