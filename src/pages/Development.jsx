import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import platformWeb from "../assets/images/platform-web.webp";
import platformMobile from "../assets/images/platform-mobile.webp";
import platformVr from "../assets/images/platform-vr.webp";
import platformAr from "../assets/images/platform-ar.webp";
import platformDesktop from "../assets/images/platform-desktop.webp";
import platformAi from "../assets/images/platform-ai.webp";
import processDiscover from "../assets/images/process-discover.webp";
import processDesign from "../assets/images/process-design.webp";
import processDeliver from "../assets/images/process-deliver.webp";

const platformImages = {
  web: platformWeb,
  mobile: platformMobile,
  vr: platformVr,
  ar: platformAr,
  desktop: platformDesktop,
  ai: platformAi,
};

const platforms = [
  {
    id: "web",
    title: "Web Applications",
    description: "Full-stack platforms, SaaS products, and progressive web apps built with React, Next.js, and modern frameworks.",
    gradient: "from-cyan-500 to-blue-600",
    tech: ["React", "Next.js", "TypeScript", "Node.js", "Python"],
    alt: "Web application development services",
  },
  {
    id: "mobile",
    title: "Mobile Apps",
    description: "Native and cross-platform mobile experiences for iOS and Android with seamless performance and intuitive UX.",
    gradient: "from-violet-500 to-purple-600",
    tech: ["React Native", "Swift", "Kotlin", "Flutter"],
    alt: "Mobile app development for iOS and Android",
  },
  {
    id: "vr",
    title: "Virtual Reality",
    description: "Immersive VR experiences for training, simulation, gaming, and virtual collaboration environments.",
    gradient: "from-pink-500 to-rose-600",
    tech: ["Unity", "Unreal Engine", "WebXR", "Three.js"],
    alt: "Virtual reality software development",
  },
  {
    id: "ar",
    title: "Augmented Reality",
    description: "Spatial computing and real-world overlays that blend digital content with physical environments.",
    gradient: "from-amber-500 to-orange-600",
    tech: ["ARKit", "ARCore", "WebAR", "Spark AR"],
    alt: "Augmented reality application development",
  },
  {
    id: "desktop",
    title: "Desktop Applications",
    description: "High-performance native desktop apps and cross-platform tools for Windows, macOS, and Linux.",
    gradient: "from-emerald-500 to-teal-600",
    tech: ["Electron", "Tauri", "PyQt", "Swift"],
    alt: "Desktop software development services",
  },
  {
    id: "ai",
    title: "AI-Powered Apps",
    description: "Intelligent applications with LLM integration, autonomous agents, and machine learning pipelines.",
    gradient: "from-indigo-500 to-violet-600",
    tech: ["Claude AI", "GPT-4", "LangChain", "PyTorch"],
    alt: "AI and machine learning software development",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discover",
    description: "Deep dive into your vision, users, and business goals to define the perfect solution.",
    image: processDiscover,
    alt: "Discovery phase - understanding software requirements",
  },
  {
    step: "02",
    title: "Design",
    description: "Design scalable systems and intuitive interfaces that set the foundation for success.",
    image: processDesign,
    alt: "Design phase - architecting custom software solutions",
  },
  {
    step: "03",
    title: "Deliver",
    description: "Agile development, rigorous testing, seamless deployment, and ongoing support.",
    image: processDeliver,
    alt: "Delivery phase - deploying production-ready software",
  },
];

export default function Development() {
  return (
    <div className="snap-page relative z-10 text-gray-300">
      <SEO
        title="Web Development & Custom Software Services"
        description="Web development and custom software services for every platform: web applications, mobile apps, AI-powered software, VR/AR experiences, and enterprise solutions. Full-stack web development with React, Python, Unity, and modern cloud technologies."
        keywords="web development services, web development company, custom software development services, web application development, mobile app development company, AI software development, VR AR development, enterprise software development, React development, Python development, full-stack web development, SaaS development, hire web developers, website development services"
        canonical="/development"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Development", url: "/development" }
        ]}
        faq={[
          {
            question: "What types of custom software do you build?",
            answer: "We build web applications, mobile apps (iOS & Android), AI-powered software, VR/AR experiences, desktop applications, and enterprise SaaS platforms. Our tech stack includes React, Next.js, Python, FastAPI, Unity, and modern cloud technologies."
          },
          {
            question: "How long does a typical software project take?",
            answer: "Project timelines vary based on complexity. MVPs typically take 6-12 weeks, while full-featured platforms may take 3-6 months. We provide detailed estimates after our discovery phase."
          },
          {
            question: "Do you offer ongoing support after launch?",
            answer: "Yes, we provide ongoing maintenance, support, and feature development. Our team monitors performance, handles bug fixes, and helps scale your application as your business grows."
          },
          {
            question: "What is your development process?",
            answer: "Our process has three phases: Discover (understanding your vision and requirements), Design (architecture and UI/UX design), and Deliver (agile development, testing, and deployment with ongoing support)."
          },
          {
            question: "Can you integrate AI into existing applications?",
            answer: "Yes, we specialize in AI integration including LLM-powered features (Claude, GPT-4), machine learning pipelines, autonomous agents, and intelligent automation for both new and existing applications."
          }
        ]}
      />

      {/* Hero Section */}
      <section className="snap-section min-h-screen flex items-center justify-center px-6 pt-20">
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
          Imagination at the core.
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
      </section>

      {/* Platforms Grid */}
      <section className="snap-section min-h-screen flex items-center justify-center px-6 py-16">
        <div className="max-w-6xl mx-auto space-y-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center space-y-3"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              Full-Stack Across Every Platform
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Web, mobile, spatial computing, and beyond.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {platforms.map((platform, idx) => (
              <motion.div
                key={platform.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 * idx }}
                className="group relative overflow-hidden rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-500"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${platform.gradient} opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500`} />
                <div className="relative h-28 overflow-hidden">
                  <img src={platformImages[platform.id]} alt={platform.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
                </div>
                <div className="relative z-10 p-4 space-y-2">
                  <h3 className="text-lg font-semibold text-white">{platform.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{platform.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {platform.tech.slice(0, 3).map((tech) => (
                      <span key={tech} className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-gray-500">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="snap-section min-h-screen flex items-center justify-center px-6 py-16">
        <div className="max-w-6xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-white">Our Process</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">A proven methodology that transforms ideas into exceptional products.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                className="relative group"
              >
                <div className="relative h-48 mb-6 rounded-xl overflow-hidden border border-white/10">
                  <img src={item.image} alt={item.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 text-4xl font-bold bg-gradient-to-br from-cyan-400 to-violet-500 bg-clip-text text-transparent">{item.step}</span>
                </div>
                <div className="relative z-10 space-y-3">
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="snap-section min-h-screen flex items-center justify-center px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-8 max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Ready to Build Something{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">Extraordinary</span>?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Web app, mobile experience, or immersive VR world. Let's build it.</p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500 font-semibold text-lg text-white hover:opacity-90 transition-all duration-300 shadow-2xl shadow-violet-500/25"
          >
            Start the Conversation
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </Link>
        </motion.div>
      </section>

    </div>
  );
}
