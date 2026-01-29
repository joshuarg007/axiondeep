import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy & Terms",
  description:
    "Privacy policy and terms of service. How we collect, use, and protect your information when using our services.",
  keywords: ["privacy policy", "terms of service", "data protection", "Axion Deep Labs terms"],
  alternates: { canonical: "/legal" },
};

export default function LegalPage() {
  return (
    <div className="no-snap relative z-10 text-gray-300 space-y-16 max-w-4xl mx-auto px-6 md:px-8 lg:px-12 pt-32 pb-20">
      <div>
        <h1 className="text-4xl md:text-5xl font-semibold mb-8 text-white">Privacy & Terms</h1>
        <p className="text-gray-400 mb-12">Last updated: January 2026</p>

        {/* Privacy Policy */}
        <section className="space-y-6 mb-16">
          <h2 className="text-2xl font-semibold text-white">Privacy Policy</h2>

          <div className="space-y-4 text-gray-300 leading-relaxed">
            <h3 className="text-lg font-medium text-white">Information We Collect</h3>
            <p>
              When you contact us through our website, we collect the information you provide,
              including your name, email address, and any message content. We may also collect basic
              analytics data about how you interact with our site.
            </p>

            <h3 className="text-lg font-medium text-white">How We Use Your Information</h3>
            <p>
              We use the information you provide to respond to your inquiries, evaluate potential
              collaborations, and improve our services. We do not sell your personal information to
              third parties.
            </p>

            <h3 className="text-lg font-medium text-white">Data Security</h3>
            <p>
              We implement appropriate technical and organizational measures to protect your personal
              information against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h3 className="text-lg font-medium text-white">Cookies</h3>
            <p>
              Our website may use cookies and similar technologies to enhance your experience. You
              can control cookie settings through your browser preferences.
            </p>

            <h3 className="text-lg font-medium text-white">Your Rights</h3>
            <p>
              You have the right to access, correct, or delete your personal information. To exercise
              these rights, please contact us using the information below.
            </p>
          </div>
        </section>

        {/* Terms of Service */}
        <section className="space-y-6 mb-16">
          <h2 className="text-2xl font-semibold text-white">Terms of Service</h2>

          <div className="space-y-4 text-gray-300 leading-relaxed">
            <h3 className="text-lg font-medium text-white">Acceptance of Terms</h3>
            <p>
              By accessing and using this website, you accept and agree to be bound by these Terms of
              Service. If you do not agree to these terms, please do not use our website.
            </p>

            <h3 className="text-lg font-medium text-white">Intellectual Property</h3>
            <p>
              All content on this website, including text, graphics, logos, and software, is the
              property of Axion Deep Labs and is protected by applicable intellectual property laws.
            </p>

            <h3 className="text-lg font-medium text-white">Limitation of Liability</h3>
            <p>
              Axion Deep Labs provides this website &quot;as is&quot; without warranties of any kind.
              We shall not be liable for any damages arising from the use of this website.
            </p>

            <h3 className="text-lg font-medium text-white">Changes to Terms</h3>
            <p>
              We reserve the right to modify these terms at any time. Continued use of the website
              after changes constitutes acceptance of the updated terms.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className="border-t border-white/10 pt-8">
          <h2 className="text-xl font-semibold text-white mb-4">Contact Us</h2>
          <p className="text-gray-400">
            For privacy-related inquiries or to exercise your data rights, please contact us through
            our{" "}
            <Link href="/contact" className="text-cyan-400 hover:text-cyan-300">
              contact form
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
