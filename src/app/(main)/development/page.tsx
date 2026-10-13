import { Metadata } from "next";
import Link from "next/link";
import RedirectClient from "../solutions/RedirectClient";

const TARGET = "/projects";

export const metadata: Metadata = {
  title: "Redirecting to Projects",
  description: "This page has moved. The Axion Labs applied R&D work now lives at /projects.",
  alternates: { canonical: TARGET },
  robots: { index: false, follow: true },
  other: {
    "refresh": `0;url=${TARGET}`,
  },
};

export default function DevelopmentRedirectPage() {
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
              This page is now <span className="g">Projects</span>
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
                Go to Projects &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
