import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Glyphstorm Privacy Policy",
  description:
    "Privacy policy for Glyphstorm: Hero Survival, the mobile roguelite published by Axion Deep Labs. The game collects no data, has no account, and sends nothing off your device.",
  keywords: [
    "Glyphstorm privacy policy",
    "mobile game privacy",
    "Axion Deep Labs",
    "no data collected",
  ],
  alternates: { canonical: "/glyphstorm/privacy" },
};

export default function GlyphstormPrivacyPage() {
  return (
    <div className="no-snap relative z-10 text-gray-300 space-y-16 max-w-4xl mx-auto px-6 md:px-8 lg:px-12 pt-32 pb-20">
      <div>
        <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-white">
          Privacy Policy for Glyphstorm: Hero Survival
        </h1>
        <p className="text-gray-400 mb-12">
          Last updated: 18 September 2026 &middot; Axion Deep Labs Inc.
        </p>

        <div className="space-y-10 text-gray-300 leading-relaxed">
          <section className="space-y-4">
            <p>
              Glyphstorm: Hero Survival (&quot;the game&quot;) is published by
              Axion Deep Labs Inc. This policy explains what the game does and
              does not do with information about you. It describes the app as it
              actually ships, and it will be updated before any change to that
              is released.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">
              The short version
            </h2>
            <p>
              The game collects nothing. It has no account, no login, no
              analytics, and no advertising. Nothing you do in the game is sent
              anywhere.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">
              1. What is stored, and where
            </h2>
            <p>
              Your progress is saved on your own device, in the app&apos;s
              private storage: heroes unlocked, coins and gems, season pass
              tier, settings, run history, and a run in progress so closing the
              app mid-run does not lose it.
            </p>
            <p>
              That data never leaves the device. It is not backed up to us, not
              synced between devices, and not readable by other apps.
              Uninstalling the game deletes all of it permanently, and there is
              no way for us to restore it.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">
              2. What is sent
            </h2>
            <p>Nothing.</p>
            <p>
              The game contains one optional network feature: a request for
              balance values, such as enemy health, prices and reward sizes, so
              numbers can be adjusted without shipping an update.{" "}
              <strong className="text-white">
                No such server is configured in this release, so the request is
                never made.
              </strong>{" "}
              If one is configured in a future release, the request only asks
              for those values. It sends no information about you, your device
              or your play, and this policy will be updated to say so before
              that release reaches the store.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">
              3. Advertising and purchases
            </h2>
            <p>
              This release contains no advertising and no in-app purchases. If
              either is added, this policy will be updated first, the store
              listing will declare it, and where the law requires consent, you
              will be asked before anything runs.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">4. Children</h2>
            <p>
              The game collects no personal information from anyone, of any age.
              Because nothing is collected, nothing about a child is collected
              either. We do not knowingly hold any data about any user.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">
              5. Permissions
            </h2>
            <p>
              The game requests two permissions, both of the kind Android grants
              at install and never prompts you about:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                <strong className="text-white">Vibrate</strong>, for the haptic
                feedback on hits and button presses. You can turn haptics off in
                the game&apos;s settings.
              </li>
              <li>
                <strong className="text-white">Internet</strong>, which Android
                requires any app to declare if it contains networking code at
                all. As described above, this release never makes a request,
                because no server is configured.
              </li>
            </ul>
            <p>
              It requests nothing else. It does not use your location, camera,
              microphone, contacts, files, or phone identity, and it asks for no
              runtime permission of any kind.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">
              6. Your rights
            </h2>
            <p>
              There is no data held about you to access, correct, export or
              delete. If you want the game&apos;s local save removed,
              uninstalling the app does it completely.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">7. Changes</h2>
            <p>
              If this policy changes, the date at the top changes with it, and
              the new version is published here before the release it describes.
            </p>
          </section>

          <section className="border-t border-white/10 pt-8 mt-12">
            <h2 className="text-xl font-semibold text-white mb-4">Contact</h2>
            <p className="text-gray-400">
              Axion Deep Labs Inc. For any question about this policy, reach us
              through our{" "}
              <Link
                href="/contact"
                className="text-cyan-400 hover:text-cyan-300"
              >
                contact form
              </Link>{" "}
              or email privacy@axiondeep.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
