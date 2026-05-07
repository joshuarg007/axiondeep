import { Metadata } from "next";
import Link from "next/link";
import RedirectClient from "./RedirectClient";

const TARGET = "/projects";

export const metadata: Metadata = {
  title: "Redirecting to Projects",
  description: "This page has moved. The Axion Deep Labs portfolio now lives at /projects.",
  alternates: { canonical: TARGET },
  robots: { index: false, follow: true },
  other: {
    "refresh": `0;url=${TARGET}`,
  },
};

export default function SolutionsRedirectPage() {
  return (
    <>
      <RedirectClient target={TARGET} />
      <noscript>
        <meta httpEquiv="refresh" content={`0;url=${TARGET}`} />
      </noscript>
      <div className="min-h-screen flex items-center justify-center px-6 text-center">
        <div className="max-w-md">
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">Page moved</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            This page is now{" "}
            <Link
              href={TARGET}
              className="bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent"
            >
              Projects
            </Link>
          </h1>
          <p className="text-gray-400 mb-8">
            Redirecting automatically. If your browser doesn&apos;t move,{" "}
            <Link href={TARGET} className="text-cyan-300 underline-offset-4 hover:underline">
              click here
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  );
}
