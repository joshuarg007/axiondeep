import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Delete Your Glyphstorm Data",
  description:
    "How to delete your data from Glyphstorm: Hero Survival by Axion Deep Labs: your on-device save, ad data held by Unity Ads, and purchase records held by Google Play.",
  alternates: { canonical: "/glyphstorm/delete-data" },
};

export default function GlyphstormDeleteDataPage() {
  return (
    <div className="no-snap relative z-10 text-gray-300 space-y-16 max-w-4xl mx-auto px-6 md:px-8 lg:px-12 pt-32 pb-20">
      <div>
        <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-white">
          Delete your Glyphstorm data
        </h1>
        <p className="text-gray-400 mb-12">
          Glyphstorm: Hero Survival &middot; Axion Deep Labs Inc.
        </p>

        <div className="space-y-10 text-gray-300 leading-relaxed">
          <section className="space-y-4">
            <p>
              Glyphstorm has no account, so there is no account to delete. The
              game&apos;s data lives in three places. Here is how to remove each.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">
              1. Your game progress (on your device)
            </h2>
            <ol className="list-decimal list-inside space-y-2 ml-2">
              <li>Open your phone&apos;s Settings, then Apps, then Glyphstorm.</li>
              <li>Tap Storage, then Clear storage. Or uninstall the game.</li>
            </ol>
            <p>
              This permanently deletes heroes, currency, pass progress, settings
              and run history. Nothing is kept, and we cannot restore it.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">
              2. Advertising data (held by Unity Ads)
            </h2>
            <ol className="list-decimal list-inside space-y-2 ml-2">
              <li>
                Email{" "}
                <a
                  href="mailto:privacy@axiondeep.com?subject=Glyphstorm%20data%20deletion"
                  className="text-cyan-400 hover:text-cyan-300"
                >
                  privacy@axiondeep.com
                </a>{" "}
                with the subject &quot;Glyphstorm data deletion&quot;. We will
                pass your request to Unity and confirm within 30 days. You can
                also contact Unity directly through its{" "}
                <a
                  href="https://unity.com/legal/game-player-and-app-user-privacy-policy"
                  className="text-cyan-400 hover:text-cyan-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  player privacy policy
                </a>
                .
              </li>
              <li>
                To stop the ad data being linked to you, delete or reset your
                advertising ID in Android Settings, under Privacy, then Ads.
              </li>
              <li>
                To stop personalised ads in the game, turn off ad
                personalisation in Glyphstorm&apos;s Settings.
              </li>
            </ol>
            <p>
              Deleted: device and advertising identifiers, approximate location,
              ad interactions and diagnostics linked to your device. Unity may
              keep aggregated, non-identifying statistics and records it must
              keep for fraud prevention or legal reasons.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">
              3. Purchase records (held by Google Play)
            </h2>
            <p>
              Purchases are processed by Google, and we do not hold your payment
              information. Google keeps order records under its own policy;
              manage them from your Google account at myaccount.google.com.
            </p>
          </section>

          <section className="border-t border-white/10 pt-8 mt-12">
            <p className="text-gray-400">
              See the full{" "}
              <Link
                href="/glyphstorm/privacy"
                className="text-cyan-400 hover:text-cyan-300"
              >
                Glyphstorm privacy policy
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
