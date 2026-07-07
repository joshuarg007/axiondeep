import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Axion Labs and its products including Made4Founders, Site2CRM, QUANTA, and Vesper. How we collect, use, and protect your data.",
  keywords: [
    "privacy policy",
    "data protection",
    "Axion Labs privacy",
    "Made4Founders privacy",
    "GDPR",
    "CCPA",
  ],
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="no-snap relative z-10 text-gray-300 space-y-16 max-w-4xl mx-auto px-6 md:px-8 lg:px-12 pt-32 pb-20">
      <div>
        <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-white">
          Privacy Policy for Axion Labs Products &amp; Services
        </h1>
        <p className="text-gray-400 mb-12">
          Last updated: February 2026 &middot; Axion Labs
        </p>

        <div className="space-y-10 text-gray-300 leading-relaxed">
          {/* Introduction */}
          <section className="space-y-4">
            <p>
              Axion Labs (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
              operates axiondeep.com and its product platforms including
              Made4Founders (made4founders.com), Site2CRM (site2crm.io), and
              QUANTA. This Privacy Policy explains how we collect, use, disclose,
              and safeguard your information when you use our websites and
              services.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">
              1. Information We Collect
            </h2>

            <h3 className="text-lg font-medium text-white">
              Information You Provide
            </h3>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                Account registration data: name, email address, and password
              </li>
              <li>Profile information you choose to provide</li>
              <li>Content you create, upload, or share through our platforms</li>
              <li>Communications you send to us (contact forms, support requests)</li>
              <li>Payment information processed through our third-party payment providers</li>
            </ul>

            <h3 className="text-lg font-medium text-white">
              Information from Third-Party Services
            </h3>
            <p>
              When you connect third-party accounts to our platforms (such as
              Facebook, Instagram, LinkedIn, X/Twitter, Pinterest, Bluesky, or
              Google), we receive information authorized by those services,
              which may include:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Your public profile information (name, profile picture)</li>
              <li>
                Account identifiers and authentication tokens needed to post on
                your behalf
              </li>
              <li>
                Page or board information you grant us access to manage
              </li>
            </ul>
            <p>
              We only request the minimum permissions necessary and you can
              disconnect any third-party account at any time from your dashboard.
            </p>

            <h3 className="text-lg font-medium text-white">
              Automatically Collected Information
            </h3>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                Device and browser information (type, operating system, language)
              </li>
              <li>IP address and approximate location</li>
              <li>
                Usage data (pages visited, features used, timestamps)
              </li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          {/* How We Use Information */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">
              2. How We Use Your Information
            </h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Provide, maintain, and improve our services</li>
              <li>
                Publish content to third-party platforms on your behalf when you
                use our social media management features
              </li>
              <li>Process transactions and send related notifications</li>
              <li>Respond to your inquiries and provide support</li>
              <li>
                Send administrative messages about your account or service
                changes
              </li>
              <li>
                Analyze usage patterns to improve user experience and develop new
                features
              </li>
              <li>
                Detect, prevent, and address technical issues or security threats
              </li>
            </ul>
          </section>

          {/* Third-Party Services */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">
              3. Third-Party Services and APIs
            </h2>
            <p>
              Our platforms integrate with third-party services to provide social
              media management, analytics, and other features. When you connect a
              third-party account, you authorize us to access and use data from
              that service in accordance with their terms and this policy.
            </p>
            <p>
              Third-party services we may integrate with include but are not
              limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Meta (Facebook, Instagram, Threads)</li>
              <li>X (formerly Twitter)</li>
              <li>LinkedIn</li>
              <li>Pinterest</li>
              <li>Bluesky</li>
              <li>Google (YouTube, Analytics)</li>
            </ul>
            <p>
              Each third-party service has its own privacy policy governing their
              use of your data. We encourage you to review those policies. We do
              not control and are not responsible for the privacy practices of
              these services.
            </p>
          </section>

          {/* Data Sharing */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">
              4. How We Share Your Information
            </h2>
            <p>
              We do not sell your personal information. We may share your
              information in the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                <span className="text-white font-medium">
                  With your consent:
                </span>{" "}
                When you explicitly authorize us to share information, such as
                publishing content to connected social platforms
              </li>
              <li>
                <span className="text-white font-medium">
                  Service providers:
                </span>{" "}
                With trusted third-party vendors who assist in operating our
                services (hosting, analytics, payment processing), bound by
                confidentiality agreements
              </li>
              <li>
                <span className="text-white font-medium">
                  Legal requirements:
                </span>{" "}
                When required by law, regulation, or legal process
              </li>
              <li>
                <span className="text-white font-medium">
                  Business transfers:
                </span>{" "}
                In connection with a merger, acquisition, or sale of assets
              </li>
            </ul>
          </section>

          {/* Data Security */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">
              5. Data Security
            </h2>
            <p>
              We implement appropriate technical and organizational measures to
              protect your personal information, including:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Encryption of data in transit (TLS/SSL) and at rest</li>
              <li>Encrypted storage of authentication tokens and credentials</li>
              <li>Regular security assessments and penetration testing</li>
              <li>Access controls limiting employee access to personal data</li>
            </ul>
            <p>
              While we strive to protect your information, no method of
              electronic transmission or storage is 100% secure. We cannot
              guarantee absolute security.
            </p>
          </section>

          {/* Data Retention */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">
              6. Data Retention
            </h2>
            <p>
              We retain your personal information for as long as your account is
              active or as needed to provide you services. You may request
              deletion of your account and associated data at any time. We may
              retain certain information as required by law or for legitimate
              business purposes.
            </p>
            <p>
              Third-party authentication tokens are stored only while your
              account connection is active. When you disconnect a third-party
              account, we delete the associated tokens.
            </p>
          </section>

          {/* Cookies */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">
              7. Cookies and Tracking
            </h2>
            <p>
              We use cookies and similar technologies to maintain your session,
              remember your preferences, and analyze site usage. You can control
              cookies through your browser settings. Disabling cookies may affect
              the functionality of our services.
            </p>
            <p>
              We use Google Analytics and similar tools to understand how our
              services are used. These tools may collect information about your
              interactions with our platforms.
            </p>
          </section>

          {/* Your Rights */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">
              8. Your Rights
            </h2>
            <p>
              Depending on your location, you may have the following rights
              regarding your personal data:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                <span className="text-white font-medium">Access:</span> Request
                a copy of the personal data we hold about you
              </li>
              <li>
                <span className="text-white font-medium">Correction:</span>{" "}
                Request correction of inaccurate personal data
              </li>
              <li>
                <span className="text-white font-medium">Deletion:</span>{" "}
                Request deletion of your personal data
              </li>
              <li>
                <span className="text-white font-medium">Portability:</span>{" "}
                Request a machine-readable copy of your data
              </li>
              <li>
                <span className="text-white font-medium">Objection:</span>{" "}
                Object to processing of your personal data
              </li>
              <li>
                <span className="text-white font-medium">Withdraw consent:</span>{" "}
                Withdraw consent where processing is based on consent
              </li>
            </ul>
            <p>
              To exercise any of these rights, please contact us using the
              information below.
            </p>
          </section>

          {/* Children */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">
              9. Children&apos;s Privacy
            </h2>
            <p>
              Our services are not directed to individuals under the age of 16.
              We do not knowingly collect personal information from children. If
              we become aware that we have collected data from a child, we will
              take steps to delete it.
            </p>
          </section>

          {/* Changes */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">
              10. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify
              you of material changes by posting the updated policy on this page
              with a revised &quot;Last updated&quot; date. Your continued use of
              our services after changes constitutes acceptance of the updated
              policy.
            </p>
          </section>

          {/* Contact */}
          <section className="border-t border-white/10 pt-8 mt-12">
            <h2 className="text-xl font-semibold text-white mb-4">
              Contact Us
            </h2>
            <p className="text-gray-400">
              For privacy-related inquiries, data requests, or to exercise your
              rights, please contact us through our{" "}
              <Link
                href="/contact"
                className="text-cyan-400 hover:text-cyan-300"
              >
                contact form
              </Link>{" "}
              or email us at privacy@axiondeep.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
