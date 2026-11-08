import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Glyphstorm Privacy Policy",
  description:
    "Privacy policy for Glyphstorm: Hero Survival, the mobile roguelite published by Axion Deep Labs. No account, progress saved on your device, ads served by Unity Ads, purchases handled by Google Play.",
  keywords: [
    "Glyphstorm privacy policy",
    "mobile game privacy",
    "Axion Deep Labs",
    "Unity Ads privacy",
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
          Last updated: 8 November 2026 &middot; Axion Deep Labs Inc.
        </p>

        <div className="space-y-10 text-gray-300 leading-relaxed">
          <section className="space-y-4">
            <p>
              Glyphstorm: Hero Survival (&quot;the game&quot;) is published by
              Axion Deep Labs Inc. This policy explains what information the game
              handles, who handles it, and what you can do about it. It describes
              the app as it actually ships, and it is updated before any change
              to that is released.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">
              The short version
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>There is no account and no login. We never ask for your name, email or phone number.</li>
              <li>Your progress is saved on your device, not on our servers.</li>
              <li>
                The game shows ads through Unity Ads. Unity collects device and
                usage information to serve and measure those ads.
              </li>
              <li>
                Optional purchases are handled entirely by Google Play. We never
                see your payment details.
              </li>
              <li>We do not run our own analytics and we do not sell data.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">
              1. What is stored on your device
            </h2>
            <p>
              Your progress is saved in the app&apos;s private storage: heroes
              unlocked, coins and gems, season pass tier, settings, run history,
              and a run in progress so closing the app mid-run does not lose it.
            </p>
            <p>
              That save never leaves the device. It is not backed up to us, not
              synced between devices, and not readable by other apps.
              Uninstalling the game deletes it permanently, and there is no way
              for us to restore it.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">
              2. Advertising (Unity Ads)
            </h2>
            <p>
              The game shows ads, including optional rewarded videos you choose
              to watch for a bonus. Ads are provided by Unity Technologies
              through the Unity Ads SDK. To serve, cap, measure and protect
              those ads from fraud, Unity collects and processes:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                Device and advertising identifiers, such as the Android
                advertising ID
              </li>
              <li>Approximate location, derived from your IP address</li>
              <li>
                Interactions with the ads themselves, such as views and taps
                (not your gameplay)
              </li>
              <li>
                Device and app diagnostics, such as device model, operating
                system version and app version
              </li>
              <li>Information about in-app purchases, used for ad measurement</li>
            </ul>
            <p>
              Unity handles this data under its own privacy policy, at{" "}
              <a
                href="https://unity.com/legal/game-player-and-app-user-privacy-policy"
                className="text-cyan-400 hover:text-cyan-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                unity.com/legal/game-player-and-app-user-privacy-policy
              </a>
              . The data is encrypted in transit.
            </p>
            <p>
              <strong className="text-white">Your choices.</strong> Where the
              law requires it, the game asks for your consent before personalised
              ads are shown. You can change that choice at any time in the
              game&apos;s Settings. Without consent, Unity serves only
              non-personalised ads. You can also reset or delete your advertising
              ID, or opt out of ads personalisation, in your Android device
              settings under Privacy, then Ads.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">
              3. In-app purchases
            </h2>
            <p>
              The game offers optional purchases, such as gem bundles, a starter
              pack, removing ads and a season pass. Payment is processed by
              Google Play under Google&apos;s terms and privacy policy. We never
              receive your card number, billing address or Google account
              details. The game only receives confirmation that a purchase
              succeeded, so it can deliver the item.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">
              4. What we collect ourselves
            </h2>
            <p>
              Nothing. We run no analytics, no crash reporting and no server that
              receives information about you. The game contains one optional
              network request, for balance values such as enemy health and
              reward sizes. It sends no information about you, and no such
              server is configured in the current release.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">5. Children</h2>
            <p>
              The game is intended for players aged 13 and over. We do not
              knowingly collect personal information from children. Ads in the
              game come from Unity Ads, a Google Play certified ad network, and
              are configured to follow the rules for users who may be under the
              age of consent.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">
              6. Permissions
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                <strong className="text-white">Internet and network state</strong>,
                to load ads and complete purchases.
              </li>
              <li>
                <strong className="text-white">Advertising ID</strong>, used by
                Unity Ads as described above.
              </li>
              <li>
                <strong className="text-white">Billing</strong>, so Google Play
                can process purchases.
              </li>
              <li>
                <strong className="text-white">Vibrate</strong>, for haptic
                feedback. You can turn haptics off in the game&apos;s settings.
              </li>
            </ul>
            <p>
              The game does not use your precise location, camera, microphone,
              contacts or files, and it asks for no runtime permission.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">
              7. Your rights and deleting data
            </h2>
            <p>
              Depending on where you live, you may have the right to access,
              correct, delete or object to the processing of your data. Because
              we hold no data about you, requests about ad data are handled by
              Unity. Our{" "}
              <Link
                href="/glyphstorm/delete-data"
                className="text-cyan-400 hover:text-cyan-300"
              >
                data deletion page
              </Link>{" "}
              explains every step.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">8. Changes</h2>
            <p>
              If this policy changes, the date at the top changes with it, and
              the new version is published here before the release it describes.
            </p>
          </section>

          <section className="border-t border-white/10 pt-8 mt-12">
            <h2 className="text-xl font-semibold text-white mb-4">Contact</h2>
            <p className="text-gray-400">
              Axion Deep Labs Inc. For any question about this policy, email
              privacy@axiondeep.com or use our{" "}
              <Link
                href="/contact"
                className="text-cyan-400 hover:text-cyan-300"
              >
                contact form
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
