import { Metadata } from "next";
import Link from "next/link";
import RedirectClient from "../solutions/RedirectClient";

const TARGET = "/mission";

export const metadata: Metadata = {
  title: "Redirecting to Projects",
  description: "This page has moved. The Axion Labs story now lives at /mission.",
  alternates: { canonical: TARGET },
  robots: { index: false, follow: true },
  other: {
    "refresh": `0;url=${TARGET}`,
  },
};

export default function AboutRedirectPage() {
  return (
    <>
      <RedirectClient target={TARGET} />
      <noscript>
        <meta httpEquiv="refresh" content={`0;url=${TARGET}`} />
      </noscript>

      <div className="obs-page">
        <div className="obs-container">
          <div className="obs-narrow" style={{ textAlign: "center" }}>
            <span className="obs-eyebrow line" style={{ justifyContent: "center" }}>
              Page moved
            </span>
            <h1 className="obs-h1">
              This page is now <span className="g">Mission</span>
            </h1>
            <p className="obs-lead" style={{ marginLeft: "auto", marginRight: "auto" }}>
              Redirecting automatically. If your browser does not move,{" "}
              <Link
                href={TARGET}
                style={{
                  color: "var(--cyan)",
                  borderBottom: "1px solid rgba(70,214,230,.35)",
                }}
              >
                click here
              </Link>
              .
            </p>
            <div style={{ marginTop: 32 }}>
              <Link className="obs-btn obs-btn-p" href={TARGET}>
                Go to Mission &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
