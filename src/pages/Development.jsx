import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const platforms = [
  {
    id: "web",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "Web Applications",
    description: "Full-stack platforms, SaaS products, and progressive web apps built with React, Next.js, and modern frameworks.",
    gradient: "from-cyan-500 to-blue-600",
    tech: ["React", "Next.js", "TypeScript", "Node.js", "Python"],
  },
  {
    id: "mobile",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    title: "Mobile Apps",
    description: "Native and cross-platform mobile experiences for iOS and Android with seamless performance and intuitive UX.",
    gradient: "from-violet-500 to-purple-600",
    tech: ["React Native", "Swift", "Kotlin", "Flutter"],
  },
  {
    id: "vr",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    title: "Virtual Reality",
    description: "Immersive VR experiences for training, simulation, gaming, and virtual collaboration environments.",
    gradient: "from-pink-500 to-rose-600",
    tech: ["Unity", "Unreal Engine", "WebXR", "Three.js"],
  },
  {
    id: "ar",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
      </svg>
    ),
    title: "Augmented Reality",
    description: "Spatial computing and real-world overlays that blend digital content with physical environments.",
    gradient: "from-amber-500 to-orange-600",
    tech: ["ARKit", "ARCore", "WebAR", "Spark AR"],
  },
  {
    id: "desktop",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
    title: "Desktop Applications",
    description: "High-performance native desktop apps and cross-platform tools for Windows, macOS, and Linux.",
    gradient: "from-emerald-500 to-teal-600",
    tech: ["Electron", "Tauri", "PyQt", "Swift"],
  },
  {
    id: "ai",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: "AI-Powered Apps",
    description: "Intelligent applications with LLM integration, autonomous agents, and machine learning pipelines.",
    gradient: "from-indigo-500 to-violet-600",
    tech: ["Claude AI", "GPT-4", "LangChain", "PyTorch"],
  },
];

const process = [
  {
    step: "01",
    title: "Discover",
    description: "Deep dive into your vision, users, and business goals to define the perfect solution.",
  },
  {
    step: "02",
    title: "Architect",
    description: "Design scalable systems and intuitive interfaces that set the foundation for success.",
  },
  {
    step: "03",
    title: "Build",
    description: "Agile development with continuous feedback loops and transparent progress updates.",
  },
  {
    step: "04",
    title: "Ship",
    description: "Rigorous testing, seamless deployment, and ongoing support to ensure lasting impact.",
  },
];

export default function Development() {
  return (
    <div className="relative z-10 text-gray-300 space-y-24 max-w-6xl mx-auto px-6 md:px-8 lg:px-12 pt-32 md:pt-40 pb-20">
      <SEO
        title="Application Development Services - Web, Mobile, VR, AR, AI"
        description="Custom application development services: web apps, mobile apps, VR/AR experiences, AI-powered software, and enterprise solutions. React, Python, Unity, and modern tech stack."
        keywords="application development, web app development, mobile app development, VR development, AR development, AI app development, custom software development, React development, enterprise software development"
        canonical="/development"
      />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-6 max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          Now accepting new projects
        </motion.div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
          Build{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
            Without
          </span>{" "}
          Boundaries
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          From concept to reality—we craft next-generation applications across every platform imaginable.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 font-semibold text-white hover:opacity-90 transition-all duration-300 shadow-lg shadow-cyan-500/25"
          >
            Start Your Project
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            to="/solutions"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/5 border border-white/10 font-semibold text-white hover:bg-white/10 transition-all duration-300"
          >
            View Our Work
          </Link>
        </div>
      </motion.div>

      {/* Platforms Grid */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="space-y-12"
      >
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Every Platform. One Team.
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Whether you're building for the web, mobile, or the next frontier of spatial computing—we've got you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((platform, idx) => (
            <motion.div
              key={platform.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
              className="group relative overflow-hidden rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-500"
            >
              {/* Gradient glow on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${platform.gradient} opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500`} />

              <div className="relative z-10 space-y-4">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${platform.gradient} bg-opacity-20`}>
                  <div className="text-white">
                    {platform.icon}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                  {platform.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {platform.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {platform.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 rounded-lg bg-white/5 text-gray-500 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="space-y-12"
      >
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Our Process
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A proven methodology that transforms ideas into exceptional products.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {process.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
              className="relative"
            >
              {/* Connector line */}
              {idx < process.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-full h-px bg-gradient-to-r from-white/20 to-transparent" />
              )}

              <div className="relative z-10 space-y-4">
                <span className="text-5xl font-bold bg-gradient-to-br from-cyan-400 to-violet-500 bg-clip-text text-transparent">
                  {item.step}
                </span>
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-center space-y-8 py-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Ready to Build Something{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
            Extraordinary
          </span>
          ?
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Let's turn your vision into reality. Whether it's a web app, mobile experience, or immersive VR world—we're here to make it happen.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500 font-semibold text-lg text-white hover:opacity-90 transition-all duration-300 shadow-2xl shadow-violet-500/25"
        >
          Start the Conversation
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </Link>
      </motion.section>

      {/* Portfolio Preview */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="space-y-12"
      >
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Built by Us
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A glimpse at what we've created—each project a testament to our commitment to excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "QUANTA", desc: "Quantum computing learning platform", to: "/projects/quanta", color: "cyan" },
            { name: "Site2CRM", desc: "AI-powered lead analytics", to: "/projects/site2crm", color: "green" },
            { name: "Forma", desc: "Visual page builder with AI", to: "/projects/forma", color: "amber" },
          ].map((project, idx) => (
            <Link
              key={project.name}
              to={project.to}
              className="group relative overflow-hidden rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300"
            >
              <div className="space-y-3">
                <h3 className={`text-xl font-semibold text-${project.color}-400`}>
                  {project.name}
                </h3>
                <p className="text-gray-400 text-sm">
                  {project.desc}
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500 group-hover:text-white transition-colors">
                  View project
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center pt-4">
          <Link
            to="/solutions"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            See all projects
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
