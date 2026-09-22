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
    <div className="obs-page">
      <div className="obs-container">
        {/* Header */}
        <header>
          <span className="obs-eyebrow line">Get in touch</span>
          <h1 className="obs-h1">
            Connect with <span className="g">the Lab</span>
          </h1>
          <p className="obs-lead">
            Research collaborations, technical inquiries, or project discussions.
          </p>
        </header>

        {/* Contact + Form */}
        <section className="obs-section obs-divider-top">
          <div className="obs-grid obs-grid-2" style={{ gap: 40, alignItems: "start" }}>
            {/* Left: contact info */}
            <div style={{ display: "grid", gap: 16 }}>
              <div className="obs-card">
                <span className="obs-eyebrow" style={{ color: "var(--cyan)" }}>
                  Email us
                </span>
                <h3 style={{ marginTop: 12 }}>
                  <a href="mailto:labs@axiondeep.com" style={{ color: "var(--cyan)", textDecoration: "none" }}>
                    labs@axiondeep.com
                  </a>
                </h3>
                <p style={{ marginTop: 8 }}>We typically respond within 24 hours.</p>
              </div>

              <div className="obs-card">
                <span className="obs-eyebrow" style={{ color: "var(--violet)" }}>
                  Response time
                </span>
                <h3 style={{ marginTop: 12 }}>Usually within a few hours</h3>
                <p style={{ marginTop: 8 }}>For urgent matters, mention it in your message.</p>
              </div>

              <div className="obs-card">
                <span className="obs-eyebrow" style={{ color: "var(--cyan)" }}>
                  Call the Lab
                </span>
                <h3 style={{ marginTop: 12 }}>
                  <a href="tel:+15127615351" style={{ color: "var(--cyan)", textDecoration: "none" }}>
                    (512) 761-5351
                  </a>
                </h3>
                <p style={{ marginTop: 8 }}>
                  For urgent research questions or press inquiries during US business hours.
                </p>
              </div>

              <div className="obs-card">
                <span className="obs-eyebrow" style={{ color: "var(--fuchsia)" }}>
                  Location
                </span>
                <h3 style={{ marginTop: 12 }}>Remote-first, global research team</h3>
                <p style={{ marginTop: 8 }}>
                  Distributed laboratory with research and engineering staff across the United
                  States and Europe.
                </p>
              </div>
            </div>

            {/* Right: contact form */}
            <div
              style={{
                background: "var(--panel)",
                border: "1px solid var(--line)",
                borderRadius: 16,
                padding: 32,
              }}
            >
              <ContactForm />
            </div>
          </div>
        </section>

        {/* Schedule a Meeting */}
        <section className="obs-section obs-divider-top">
          <div className="obs-sec-head obs-narrow" style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
            <span className="obs-eyebrow">Book a call</span>
            <h2 className="obs-h2" style={{ marginTop: 16 }}>
              Prefer a live conversation?
            </h2>
            <p style={{ marginLeft: "auto", marginRight: "auto" }}>
              Book a time that works for you. We&apos;ll discuss your project, answer questions,
              and explore how we can help.
            </p>
          </div>
          <div
            className="obs-narrow"
            style={{
              background: "var(--panel)",
              border: "1px solid var(--line)",
              borderRadius: 16,
              padding: 8,
            }}
          >
            <BookingWidget slug="booking-ml9vyn5a" buttonColor="#8b5cf6" />
          </div>
        </section>

        {/* What We Can Help With */}
        <section className="obs-section obs-divider-top">
          <div className="obs-sec-head">
            <span className="obs-eyebrow">Scope</span>
            <h2 className="obs-h2">What we can help with</h2>
          </div>
          <div className="obs-grid obs-grid-2">
            <div className="obs-card">
              <h3>Research collaboration</h3>
              <p>
                Academic partnerships, joint experiments, and co-authored publications in deep
                learning theory, topological data analysis, and continual learning.
              </p>
            </div>
            <div className="obs-card">
              <h3>Product inquiries</h3>
              <p>
                Questions about Made4Founders, Site2CRM, QUANTA, Vesper, or Forma. Demo requests,
                pricing, and enterprise partnerships.
              </p>
            </div>
            <div className="obs-card">
              <h3>Funding &amp; investment</h3>
              <p>
                Grant applications, research funding inquiries, and venture discussions for our
                deep tech research programs and product ventures.
              </p>
            </div>
            <div className="obs-card">
              <h3>Careers &amp; contracting</h3>
              <p>
                Open positions, contractor opportunities, and research fellowships. We work with
                researchers and engineers across AI, quantum, and systems.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="obs-section obs-divider-top">
          <div className="obs-sec-head">
            <span className="obs-eyebrow">FAQ</span>
            <h2 className="obs-h2">Frequently asked questions</h2>
          </div>
          <div style={{ display: "grid", gap: 16 }}>
            <div className="obs-card">
              <h3>How quickly do you respond?</h3>
              <p>
                We typically respond within 24 hours on business days. For urgent matters,
                mention it in your message and we&apos;ll prioritize your inquiry.
              </p>
            </div>
            <div className="obs-card">
              <h3>Do you take on external research projects?</h3>
              <p>
                We welcome collaborations that align with our active research programs in deep
                learning theory, continual learning, and topological data analysis. Reach out
                with a brief description of your project and how it connects to our work.
              </p>
            </div>
            <div className="obs-card">
              <h3>Where is your team located?</h3>
              <p>
                We are a remote-first research lab with team members distributed globally. We
                collaborate asynchronously and maintain a flexible work environment that
                prioritizes deep focus over fixed schedules.
              </p>
            </div>
            <div className="obs-card">
              <h3>Can I access your research data?</h3>
              <p>
                Yes. Our experimental code, configurations, and results are published
                open-source on GitHub. Visit our research pages for links to repositories and
                detailed experimental protocols.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
