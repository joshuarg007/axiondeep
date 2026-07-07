import { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS } from "@/data/blogPosts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on web development, SEO, AI integration, lead capture, CRM automation, and startup management from the Axion Labs team.",
  alternates: { canonical: "/blog" },
};

const CATEGORY_LABELS: Record<string, string> = {
  "site2crm": "Site2CRM",
  "axion-deep-digital": "Axion Deep Digital",
  "made4founders": "Made4Founders",
  "labs": "Axion Labs",
};

const CATEGORY_COLORS: Record<string, string> = {
  "site2crm": "from-cyan-500/20 to-cyan-500/5 border-cyan-500/20 text-cyan-400",
  "axion-deep-digital": "from-violet-500/20 to-violet-500/5 border-violet-500/20 text-violet-400",
  "made4founders": "from-fuchsia-500/20 to-fuchsia-500/5 border-fuchsia-500/20 text-fuchsia-400",
  "labs": "from-cyan-400/20 via-violet-500/15 to-fuchsia-500/15 border-cyan-400/30 text-cyan-300",
};

export default function BlogPage() {
  const posts = [...BLOG_POSTS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <div className="no-snap relative text-gray-300">
      {/* Hero */}
      <section className="min-h-[40vh] flex items-center justify-center px-6 pt-28 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-bold tracking-widest uppercase text-lg md:text-xl mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            BLOG
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            <span
              className="text-white"
              style={{ textShadow: "0 0 40px rgba(255,255,255,0.4)" }}
            >
              Insights &{" "}
            </span>
            <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Ideas
            </span>
          </h1>
          <p className="text-base md:text-lg text-gray-400 max-w-xl mx-auto">
            Practical writing about web development, SEO, lead capture, AI integration,
            and building a startup without drowning in software subscriptions.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block p-6 md:p-8 rounded-2xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.08] hover:border-white/[0.15] transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className={`inline-flex px-2.5 py-0.5 rounded-full text-[11px] font-medium border bg-gradient-to-r ${CATEGORY_COLORS[post.category]}`}
                      >
                        {CATEGORY_LABELS[post.category]}
                      </span>
                      <span className="text-xs text-gray-500">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <span className="text-xs text-gray-600">{post.timeToRead} read</span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-2 leading-tight">
                      {post.title}
                    </h2>
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                      {post.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {post.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-full bg-white/5 text-[11px] text-gray-500 border border-white/[0.06]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex-shrink-0 self-center">
                    <svg
                      className="w-5 h-5 text-gray-600 group-hover:text-cyan-400 transition-colors"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
