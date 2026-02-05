import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getJobBySlug, getAllJobSlugs } from "@/data/jobs";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllJobSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) {
    return { title: "Job Not Found" };
  }

  return {
    title: `${job.title} | Careers`,
    description: job.shortDescription,
    robots: {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false,
      },
    },
  };
}

export default async function JobPage({ params }: Props) {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) {
    notFound();
  }

  const typeColors = {
    "1099": "from-amber-500/20 to-orange-500/10 border-amber-500/30 text-amber-400",
    W2: "from-emerald-500/20 to-green-500/10 border-emerald-500/30 text-emerald-400",
    Contract: "from-blue-500/20 to-cyan-500/10 border-blue-500/30 text-blue-400",
  };

  return (
    <div className="no-snap relative text-gray-300 min-h-screen">
      {/* Hero */}
      <section className="px-6 pt-32 pb-16">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to all positions
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${typeColors[job.type]} border`}
            >
              {job.type}
            </span>
            <span className="text-gray-500">|</span>
            <span className="text-sm text-gray-400">{job.location}</span>
            <span className="text-gray-500">|</span>
            <span className="text-sm text-gray-400">{job.department}</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{job.title}</h1>

          <p className="text-lg text-gray-400 mb-8">{job.shortDescription}</p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`mailto:${job.applyEmail}?subject=Application: ${job.title}`}
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold hover:opacity-90 transition"
            >
              Apply Now
            </a>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {job.compensation.details}
            </div>
          </div>
        </div>
      </section>

      {/* Job Details */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {job.sections.map((section, index) => (
              <div key={index}>
                <h2 className="text-2xl font-bold text-white mb-6">{section.title}</h2>
                <div className="space-y-3">
                  {section.content.map((line, lineIndex) => (
                    <p
                      key={lineIndex}
                      className={`text-gray-400 leading-relaxed ${line === "" ? "h-4" : ""}`}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="relative p-12 md:p-16 rounded-3xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/[0.08]">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How to Apply</h2>
            <p className="text-gray-400 mb-6">
              Email{" "}
              <a href={`mailto:${job.applyEmail}`} className="text-cyan-400 hover:underline">
                {job.applyEmail}
              </a>{" "}
              with:
            </p>
            <ul className="space-y-3 mb-8">
              {job.applyInstructions.map((instruction, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-400">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500/20 to-violet-500/20 flex items-center justify-center text-xs text-cyan-400 font-medium">
                    {index + 1}
                  </span>
                  {instruction}
                </li>
              ))}
            </ul>
            <a
              href={`mailto:${job.applyEmail}?subject=Application: ${job.title}`}
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold hover:opacity-90 transition"
            >
              Send Application
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
