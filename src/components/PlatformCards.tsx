"use client";

import { useState } from "react";
import Image from "next/image";

interface Platform {
  id: string;
  title: string;
  description: string;
  gradient: string;
  tech: string[];
  image: string;
  alt: string;
  seoContent: {
    headline: string;
    paragraphs: string[];
    benefits: string[];
    technologies: { name: string; description: string }[];
  };
}

const platforms: Platform[] = [
  {
    id: "web",
    title: "Web Applications",
    description:
      "Full-stack platforms, SaaS products, and progressive web apps built with React, Next.js, and modern frameworks.",
    gradient: "from-cyan-500 to-blue-600",
    tech: ["React", "Next.js", "TypeScript", "Node.js", "Python"],
    image: "/images/platform-web.webp",
    alt: "Web application development services",
    seoContent: {
      headline: "Custom Web Application Development Services",
      paragraphs: [
        "Full-stack web application development for SaaS platforms, enterprise portals, and progressive web apps. React, Next.js, Node.js, and Python backends with PostgreSQL and cloud deployment on AWS.",
        "SEO-optimized, WCAG-compliant web applications with real-time features, third-party API integrations, and scalable architecture built for high-traffic production environments.",
      ],
      benefits: [
        "Scalable architecture that grows with your business",
        "SEO-optimized for maximum organic visibility",
        "Cross-browser and cross-device compatibility",
        "Real-time features and collaborative functionality",
        "Integration with third-party APIs and services",
        "Comprehensive analytics and reporting dashboards",
      ],
      technologies: [
        { name: "React & Next.js", description: "Modern frontend frameworks for fast, interactive user interfaces" },
        { name: "Node.js & Python", description: "Robust backend solutions for complex business logic" },
        { name: "PostgreSQL & MongoDB", description: "Reliable database solutions for structured and unstructured data" },
        { name: "AWS & Vercel", description: "Cloud infrastructure for global deployment and auto-scaling" },
      ],
    },
  },
  {
    id: "mobile",
    title: "Mobile Apps",
    description:
      "Native and cross-platform mobile experiences for iOS and Android with seamless performance and intuitive UX.",
    gradient: "from-violet-500 to-purple-600",
    tech: ["React Native", "Swift", "Kotlin", "Flutter"],
    image: "/images/platform-mobile.webp",
    alt: "Mobile app development for iOS and Android",
    seoContent: {
      headline: "iOS & Android Mobile App Development",
      paragraphs: [
        "Native iOS development with Swift and Android development with Kotlin, plus cross-platform mobile apps using React Native and Flutter. App Store and Google Play deployment included.",
        "Mobile apps with offline-first architecture, push notifications, biometric authentication, GPS integration, and camera functionality. App Store Optimization (ASO) for maximum discoverability.",
      ],
      benefits: [
        "Native performance with platform-specific optimizations",
        "Offline-first architecture for reliable functionality",
        "Seamless integration with device hardware features",
        "App Store Optimization (ASO) for discoverability",
        "Push notification strategies for user retention",
        "Analytics integration for user behavior insights",
      ],
      technologies: [
        { name: "React Native", description: "Cross-platform development with native performance" },
        { name: "Swift & SwiftUI", description: "Native iOS development with Apple's modern frameworks" },
        { name: "Kotlin & Jetpack Compose", description: "Native Android development with Google's latest tools" },
        { name: "Flutter", description: "Google's UI toolkit for beautiful, natively compiled applications" },
      ],
    },
  },
  {
    id: "vr",
    title: "Virtual Reality",
    description:
      "Immersive VR experiences for training, simulation, gaming, and virtual collaboration environments.",
    gradient: "from-pink-500 to-rose-600",
    tech: ["Unity", "Unreal Engine", "WebXR", "Three.js"],
    image: "/images/platform-vr.webp",
    alt: "Virtual reality software development",
    seoContent: {
      headline: "VR Development for Meta Quest & Enterprise",
      paragraphs: [
        "Virtual reality development for Meta Quest, HTC Vive, and WebXR. Enterprise VR training simulations, architectural visualization, healthcare VR, and immersive gaming experiences.",
        "Multi-user VR environments with real-time networking, 3D spatial audio, hand tracking, and photorealistic rendering using Unity and Unreal Engine.",
      ],
      benefits: [
        "Immersive training that improves knowledge retention",
        "Safe simulation of high-risk scenarios",
        "Virtual prototyping and design visualization",
        "Remote collaboration in shared virtual spaces",
        "Engaging marketing and brand experiences",
        "Accessibility features for inclusive VR experiences",
      ],
      technologies: [
        { name: "Unity 3D", description: "Industry-leading game engine for cross-platform VR development" },
        { name: "Unreal Engine", description: "Photorealistic graphics for high-fidelity experiences" },
        { name: "WebXR", description: "Browser-based VR accessible without app installation" },
        { name: "Oculus SDK", description: "Native development for Meta Quest headsets" },
      ],
    },
  },
  {
    id: "ar",
    title: "Augmented Reality",
    description:
      "Spatial computing and real-world overlays that blend digital content with physical environments.",
    gradient: "from-amber-500 to-orange-600",
    tech: ["ARKit", "ARCore", "WebAR", "Spark AR"],
    image: "/images/platform-ar.webp",
    alt: "Augmented reality application development",
    seoContent: {
      headline: "AR Development with ARKit & ARCore",
      paragraphs: [
        "Augmented reality development for iOS (ARKit), Android (ARCore), and WebAR. Product visualization, AR marketing campaigns, industrial AR guidance, and Apple Vision Pro spatial computing.",
        "Location-based AR, markerless tracking, 3D object recognition, and real-time occlusion. Browser-based WebAR experiences requiring no app download.",
      ],
      benefits: [
        "Product visualization that increases purchase confidence",
        "Interactive print and packaging experiences",
        "Step-by-step AR guidance for complex tasks",
        "Location-based AR for tourism and navigation",
        "Social AR filters for brand engagement",
        "Measurement and spatial mapping tools",
      ],
      technologies: [
        { name: "ARKit", description: "Apple's framework for iOS augmented reality experiences" },
        { name: "ARCore", description: "Google's platform for Android AR development" },
        { name: "WebAR", description: "Browser-based AR requiring no app download" },
        { name: "8th Wall", description: "Cross-platform WebAR with advanced tracking" },
      ],
    },
  },
  {
    id: "desktop",
    title: "Desktop Applications",
    description:
      "High-performance native desktop apps and cross-platform tools for Windows, macOS, and Linux.",
    gradient: "from-emerald-500 to-teal-600",
    tech: ["Electron", "Tauri", "PyQt", "Swift"],
    image: "/images/platform-desktop.webp",
    alt: "Desktop software development services",
    seoContent: {
      headline: "Cross-Platform Desktop App Development",
      paragraphs: [
        "Desktop application development for Windows, macOS, and Linux. Electron and Tauri for cross-platform apps, native Swift for macOS, and .NET/WPF for Windows enterprise software.",
        "Offline-capable desktop apps with local data storage, hardware integration, system tray functionality, auto-updates, and deep OS integration for professional workflows.",
      ],
      benefits: [
        "Full access to system resources and hardware",
        "Offline functionality without internet dependency",
        "Secure local data storage and processing",
        "Integration with existing desktop workflows",
        "Custom keyboard shortcuts and system tray apps",
        "Auto-update mechanisms for easy maintenance",
      ],
      technologies: [
        { name: "Electron", description: "Cross-platform desktop apps using web technologies" },
        { name: "Tauri", description: "Lightweight, secure apps with Rust backend" },
        { name: "Swift & AppKit", description: "Native macOS development" },
        { name: ".NET & WPF", description: "Enterprise Windows application development" },
      ],
    },
  },
  {
    id: "ai",
    title: "AI-Powered Apps",
    description:
      "Intelligent applications with LLM integration, autonomous agents, and machine learning pipelines.",
    gradient: "from-indigo-500 to-violet-600",
    tech: ["Claude AI", "GPT-4", "LangChain", "PyTorch"],
    image: "/images/platform-ai.webp",
    alt: "AI and machine learning software development",
    seoContent: {
      headline: "AI & LLM Application Development",
      paragraphs: [
        "AI application development with Claude, GPT-4, and open-source LLMs. Custom AI agents, RAG pipelines, chatbots, document processing, and machine learning model deployment.",
        "LangChain integration, vector databases, fine-tuning, computer vision with PyTorch, and production AI infrastructure with monitoring and guardrails.",
      ],
      benefits: [
        "Natural language interfaces for intuitive interaction",
        "Automated content generation and summarization",
        "Intelligent document processing and extraction",
        "Predictive analytics and recommendation systems",
        "Computer vision for image and video analysis",
        "Custom AI agents for workflow automation",
      ],
      technologies: [
        { name: "Claude & GPT-4", description: "State-of-the-art language models for natural language tasks" },
        { name: "LangChain", description: "Framework for building LLM-powered applications" },
        { name: "PyTorch & TensorFlow", description: "Deep learning frameworks for custom models" },
        { name: "Hugging Face", description: "Open-source models and deployment infrastructure" },
      ],
    },
  },
];

export default function PlatformCards() {
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {platforms.map((platform) => (
          <button
            key={platform.id}
            onClick={() => setSelectedPlatform(platform)}
            className="group relative overflow-hidden rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-500 text-left"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${platform.gradient} opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500`}
            />
            <div className="relative h-28 overflow-hidden">
              <Image
                src={platform.image}
                alt={platform.alt}
                width={400}
                height={200}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
            </div>
            <div className="relative z-10 p-4 space-y-2">
              <h3 className="text-lg font-semibold text-white">{platform.title}</h3>
              <p className="text-gray-400 text-xs leading-relaxed">{platform.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {platform.tech.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-gray-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <span className="inline-flex items-center gap-1 text-xs text-gray-500 group-hover:text-white transition-colors pt-1">
                Learn more
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Modal */}
      {selectedPlatform && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedPlatform(null)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0f1015] border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className={`relative h-32 bg-gradient-to-br ${selectedPlatform.gradient} opacity-20`} />
            <button
              onClick={() => setSelectedPlatform(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Content */}
            <div className="p-8 -mt-16 relative">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${selectedPlatform.gradient} flex items-center justify-center`}>
                  <span className="text-2xl text-white font-bold">{selectedPlatform.title[0]}</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{selectedPlatform.title}</h2>
                  <p className={`text-sm bg-gradient-to-r ${selectedPlatform.gradient} bg-clip-text text-transparent font-medium`}>
                    {selectedPlatform.seoContent.headline}
                  </p>
                </div>
              </div>

              {/* Paragraphs */}
              <div className="space-y-4 mb-8">
                {selectedPlatform.seoContent.paragraphs.map((p, i) => (
                  <p key={i} className="text-gray-400 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>

              {/* Benefits */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-4">Key Benefits</h3>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {selectedPlatform.seoContent.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                      <svg className={`w-4 h-4 mt-0.5 shrink-0 text-transparent bg-gradient-to-r ${selectedPlatform.gradient} rounded-full`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-4">Technologies We Use</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {selectedPlatform.seoContent.technologies.map((tech, i) => (
                    <div key={i} className="p-3 rounded-lg bg-white/5 border border-white/5">
                      <h4 className="text-sm font-medium text-white mb-1">{tech.name}</h4>
                      <p className="text-xs text-gray-500">{tech.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex gap-3">
                <a
                  href="/contact"
                  className={`px-6 py-3 rounded-xl bg-gradient-to-r ${selectedPlatform.gradient} font-semibold text-white hover:opacity-90 transition`}
                >
                  Discuss Your Project
                </a>
                <button
                  onClick={() => setSelectedPlatform(null)}
                  className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 font-medium text-white hover:bg-white/10 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
