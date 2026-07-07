import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS, getPostBySlug } from "@/data/blogPosts";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

function renderMarkdown(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Heading
    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={key++}
          className="text-2xl font-bold text-white mt-10 mb-4"
        >
          {line.slice(3)}
        </h2>,
      );
      i++;
      continue;
    }

    // Empty line
    if (line.trim() === "") {
      i++;
      continue;
    }

    // Paragraph (collect contiguous non-empty, non-heading lines)
    const paraLines: string[] = [];
    while (i < lines.length && lines[i].trim() !== "" && !lines[i].startsWith("## ")) {
      paraLines.push(lines[i]);
      i++;
    }

    const text = paraLines.join("\n");

    // Check if it's a table
    if (text.includes("|") && text.split("\n").length > 2) {
      const rows = text
        .split("\n")
        .filter((r) => r.trim() && !r.match(/^\|[\s-|]+\|$/));
      if (rows.length > 0) {
        const headerCells = rows[0]
          .split("|")
          .map((c) => c.trim())
          .filter(Boolean);
        const bodyRows = rows.slice(1);
        elements.push(
          <div key={key++} className="overflow-x-auto my-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  {headerCells.map((cell, ci) => (
                    <th
                      key={ci}
                      className="px-4 py-2 text-left text-white font-semibold"
                    >
                      {cell}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {bodyRows.map((row, ri) => {
                  const cells = row
                    .split("|")
                    .map((c) => c.trim())
                    .filter(Boolean);
                  return (
                    <tr key={ri} className="border-b border-white/[0.04]">
                      {cells.map((cell, ci) => (
                        <td key={ci} className="px-4 py-2 text-gray-400">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>,
        );
        continue;
      }
    }

    // Render paragraph with inline bold
    elements.push(
      <p key={key++} className="text-gray-400 leading-relaxed mb-4">
        {text.split(/(\*\*.*?\*\*)/).map((segment, si) =>
          segment.startsWith("**") && segment.endsWith("**") ? (
            <strong key={si} className="text-white font-semibold">
              {segment.slice(2, -2)}
            </strong>
          ) : (
            segment
          ),
        )}
      </p>,
    );
  }

  return elements;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Person", name: post.author },
    publisher: {
      "@type": "Organization",
      name: "Axion Labs",
      legalName: "Axion Deep Labs, Inc.",
      url: "https://www.axiondeep.com",
    },
    keywords: post.tags.join(", "),
  };

  return (
    <div className="no-snap relative text-gray-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="max-w-3xl mx-auto px-6 pt-28 pb-20">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors mb-8"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            />
          </svg>
          All posts
        </Link>

        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
            <span>{post.author}</span>
            <span className="w-1 h-1 rounded-full bg-gray-600" />
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
            <span className="w-1 h-1 rounded-full bg-gray-600" />
            <span>{post.timeToRead} read</span>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-full bg-white/5 text-[11px] text-gray-500 border border-white/[0.06]"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Content */}
        <div className="prose-dark">{renderMarkdown(post.content)}</div>

        {/* Footer CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.08] text-center">
          <h3 className="text-xl font-bold text-white mb-2">
            Want to learn more?
          </h3>
          <p className="text-gray-400 text-sm mb-6">
            Get in touch with the Axion Labs team to discuss your project.
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 text-white text-sm font-semibold hover:opacity-90 transition"
          >
            Contact Us
          </Link>
        </div>
      </article>
    </div>
  );
}
