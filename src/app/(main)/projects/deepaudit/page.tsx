import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DeepAudit AI | Real-Browser SEO &amp; Performance Audits",
  description:
    "DeepAudit AI renders every page in a real headless Chromium browser the same way Googlebot does, then runs 60+ technical, performance, accessibility, and on-page checks in roughly 60 seconds. Free, no signup.",
  keywords: [
    "free SEO audit",
    "real browser rendering",
    "Puppeteer SEO",
    "headless Chromium audit",
    "Core Web Vitals audit",
    "JavaScript SEO",
  ],
  robots: { index: false, follow: true },
  alternates: { canonical: "/projects/deepaudit" },
};

export default function DeepAuditPage() {
  return (
    <div className="no-snap min-h-screen pt-32 px-6 pb-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="text-xs px-2 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              Live
            </span>
            <span className="text-xs px-2 py-1 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
              Free
            </span>
            <span className="text-xs px-2 py-1 rounded bg-violet-500/20 text-violet-300 border border-violet-500/30">
              No Signup
            </span>
            <span className="text-xs px-2 py-1 rounded bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/30">
              Featured
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
              DeepAudit AI
            </span>
          </h1>
          <p className="text-xl text-cyan-300 font-medium mb-4">
            The audit other tools wish they were.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            Most SEO tools fetch your raw HTML, run a regex over it, and call it a day.
            Googlebot doesn&apos;t. DeepAudit AI renders every page in a real headless Chromium
            browser, executes your JavaScript, waits for hydration, captures every network
            request, and runs 60+ technical, performance, accessibility, and on-page checks
            in roughly 60 seconds. No signup. No email gate. No paywall.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/20">
            <p className="text-3xl font-bold text-cyan-300">60+</p>
            <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Checks per scan</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-violet-500/10 to-transparent border border-violet-500/20">
            <p className="text-3xl font-bold text-violet-300">~60s</p>
            <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">End to end</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-fuchsia-500/10 to-transparent border border-fuchsia-500/20">
            <p className="text-3xl font-bold text-fuchsia-300">292+</p>
            <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Sites audited</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/20">
            <p className="text-3xl font-bold text-emerald-300">$0</p>
            <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Cost to run</p>
          </div>
        </div>

        {/* Why it's different */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Why it&apos;s different</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/10">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-white mb-2">Real Browser Rendering</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Every page loads in a real headless Chromium instance. JavaScript executes,
                React/Vue/Next hydrates, third-party scripts run. The DOM that gets audited is
                the DOM your users and Googlebot actually see, not a static-HTML approximation.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-violet-500/10 to-transparent border border-violet-500/10">
              <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-violet-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-white mb-2">Real Core Web Vitals</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                LCP, INP, and CLS measured against the actual rendered page. Captures
                render-blocking resources, layout shifts caused by late-loading fonts and
                images, and the JavaScript hydration cost that static analyzers miss entirely.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-fuchsia-500/10 to-transparent border border-fuchsia-500/10">
              <div className="w-12 h-12 rounded-xl bg-fuchsia-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-fuchsia-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-white mb-2">Structured Data + On-Page</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                JSON-LD validated against schema.org definitions. Title, meta description,
                canonical, hreflang, OpenGraph, and Twitter Card tags audited. Heading
                hierarchy, alt text coverage, semantic landmarks, and internal link integrity
                all checked end to end.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/10">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold text-white mb-2">Accessibility, Properly</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Full axe-core ruleset run against the rendered page. Color contrast, ARIA
                role validity, focus order, keyboard traps, and form-label associations are
                evaluated against the live DOM, not the source template.
              </p>
            </div>
          </div>
        </div>

        {/* What it catches */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">What every scan covers</h2>
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-400">
            <div>· Core Web Vitals (LCP, INP, CLS) on rendered DOM</div>
            <div>· Render-blocking resources and JS hydration cost</div>
            <div>· Title, meta description, canonical, hreflang</div>
            <div>· OpenGraph, Twitter Card, social preview validation</div>
            <div>· JSON-LD structured data validation</div>
            <div>· Heading hierarchy and semantic HTML</div>
            <div>· Alt text coverage and image accessibility</div>
            <div>· Internal link integrity and orphan detection</div>
            <div>· robots.txt parsing and indexability rules</div>
            <div>· sitemap.xml integrity and freshness</div>
            <div>· Image optimization (WebP, AVIF, lazy loading)</div>
            <div>· Mobile responsiveness and viewport behavior</div>
            <div>· Keyword extraction and content depth signals</div>
            <div>· HTTPS, HSTS, mixed-content, CSP integrity</div>
            <div>· Accessibility audits (full axe-core ruleset)</div>
            <div>· Network waterfall and third-party script cost</div>
          </div>
        </div>

        {/* How it works */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">How a scan runs</h2>
          <div className="space-y-4">
            {[
              { step: "01", title: "Submit a URL", desc: "Paste any public URL. No account, no email, no credit card. The scan starts immediately." },
              { step: "02", title: "Real Chromium loads the page", desc: "A headless Chromium instance loads the URL in a fresh isolated context. JavaScript executes, fonts load, third-party scripts run, hydration completes." },
              { step: "03", title: "60+ checks run against the live DOM", desc: "Performance, SEO, accessibility, and on-page rules evaluate against the rendered page. Network waterfall captured. Lighthouse-equivalent scoring computed from real measurements." },
              { step: "04", title: "Report delivered", desc: "Per-issue severity, plain-English explanations, and direct fixes. Keyword report, content depth signals, and structured data validation included. Shareable link or PDF export." },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 items-start rounded-xl bg-white/[0.02] border border-cyan-500/10 p-5">
                <span className="text-2xl font-bold text-cyan-300 opacity-40 shrink-0 w-8 text-right">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Track record */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Track record</h2>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/[0.08] to-violet-500/[0.04] border border-white/[0.08]">
            <p className="text-gray-400 leading-relaxed mb-4">
              DeepAudit AI has scanned 292+ small-business websites for the public
              <em> State of Small Business Websites 2026</em> study, plus hundreds more
              one-off audits run directly by site owners. The aggregate finding is brutal:
              <strong className="text-white"> 96.9% of audited business sites fail Core Web Vitals on mobile</strong>,
              the metric Google uses as a direct ranking signal. The full study, including
              methodology, distribution of failure modes, and a per-industry breakdown, is
              published openly.
            </p>
            <p className="text-gray-400 leading-relaxed">
              The dataset behind the study also feeds the predictive models we&apos;re building
              at Axion Labs to forecast which technical SEO failures correlate most
              tightly with traffic and conversion outcomes. The audit tool is the data
              collector, the research is what comes next.
            </p>
          </div>
        </div>

        {/* Tech */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Tech stack</h2>
          <div className="flex flex-wrap gap-3">
            {["Puppeteer", "Headless Chromium", "Node.js", "AWS Lambda", "axe-core", "Lighthouse", "Next.js", "TypeScript"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-white/5 text-gray-400 border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://axiondeepdigital.com/free-seo-audit"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 via-violet-500 to-fuchsia-500 font-semibold text-white hover:opacity-90 transition shadow-lg shadow-violet-500/30"
          >
            Run a free audit
          </a>
          <a
            href="https://axiondeepdigital.com/research"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full border border-white/20 font-medium text-white hover:bg-white/5 transition flex items-center gap-2"
          >
            Read the 292-site study
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        {/* Attribution */}
        <p className="mt-10 text-xs text-gray-500">
          Operated by{" "}
          <a
            href="https://axiondeepdigital.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-300 transition underline-offset-4 hover:underline"
          >
            Axion Deep Digital
          </a>
          , our applied web and SEO arm. Engineering and research support from Axion Deep Labs.
        </p>

        {/* Back */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <Link href="/projects" className="text-gray-400 hover:text-white transition flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
