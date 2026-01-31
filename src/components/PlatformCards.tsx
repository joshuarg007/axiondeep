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
      headline: "Enterprise-Grade Web Application Development",
      paragraphs: [
        "Transform your business with custom web applications designed for scale, security, and exceptional user experience. Our full-stack development team builds everything from customer-facing SaaS platforms to internal enterprise tools that streamline operations and drive growth.",
        "We specialize in creating progressive web applications (PWAs) that deliver native-like experiences across all devices. Our solutions feature offline functionality, push notifications, and lightning-fast load times that keep users engaged and conversion rates high.",
        "Every web application we build follows industry best practices for accessibility (WCAG compliance), search engine optimization, and performance optimization. We implement robust authentication, data encryption, and security protocols to protect your users and your business.",
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
      headline: "Native & Cross-Platform Mobile App Development",
      paragraphs: [
        "Reach millions of users with professionally crafted mobile applications for iOS and Android. Our mobile development team creates intuitive, high-performance apps that users love to use and recommend to others.",
        "We offer both native development for maximum platform-specific performance and cross-platform solutions for faster time-to-market and reduced development costs. Our apps leverage device capabilities like cameras, GPS, biometrics, and push notifications to create engaging experiences.",
        "From concept to App Store and Google Play deployment, we handle the entire mobile development lifecycle. Our rigorous testing process ensures your app performs flawlessly across thousands of device configurations.",
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
      headline: "Immersive Virtual Reality Solutions",
      paragraphs: [
        "Step into the future with custom virtual reality experiences that transform how people learn, work, and play. Our VR development team creates immersive environments for enterprise training, architectural visualization, healthcare simulation, and entertainment.",
        "We develop for all major VR platforms including Meta Quest, HTC Vive, PlayStation VR, and WebXR for browser-based experiences. Our solutions range from standalone applications to fully networked multi-user environments.",
        "Virtual reality offers unprecedented opportunities for experiential learning, remote collaboration, and customer engagement. We help organizations leverage this technology to reduce training costs, improve safety outcomes, and create memorable brand experiences.",
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
      headline: "Augmented Reality & Spatial Computing",
      paragraphs: [
        "Bridge the digital and physical worlds with augmented reality applications that overlay information, 3D models, and interactive content onto real-world environments. Our AR solutions enhance customer experiences, streamline industrial workflows, and enable innovative marketing campaigns.",
        "We develop AR experiences for smartphones, tablets, smart glasses, and web browsers. From product visualization that lets customers see furniture in their homes to industrial AR that guides technicians through complex repairs, we create practical solutions that deliver measurable ROI.",
        "Augmented reality is revolutionizing retail, manufacturing, healthcare, and education. Our team stays at the forefront of spatial computing technology, including Apple Vision Pro development, to help forward-thinking organizations gain competitive advantages.",
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
      headline: "Professional Desktop Application Development",
      paragraphs: [
        "Build powerful desktop applications that leverage the full capabilities of Windows, macOS, and Linux systems. Our desktop development expertise spans from lightweight utilities to complex enterprise software with advanced graphics, hardware integration, and offline functionality.",
        "We create both native applications for maximum performance and cross-platform solutions that reduce development time while maintaining a consistent user experience across operating systems. Our applications integrate seamlessly with system features, file systems, and peripheral devices.",
        "Desktop applications remain essential for professional workflows requiring offline access, intensive computation, sensitive data handling, and deep system integration. We help businesses modernize legacy desktop software and build new tools that boost productivity.",
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
      headline: "AI-Powered Application Development",
      paragraphs: [
        "Harness the transformative power of artificial intelligence with custom applications that automate complex tasks, generate insights from data, and deliver personalized user experiences. Our AI development team integrates cutting-edge language models, computer vision, and machine learning into practical business solutions.",
        "We specialize in building AI agents that can reason, plan, and execute multi-step workflows autonomously. From intelligent customer service chatbots to automated document processing systems, we create AI solutions that reduce operational costs and improve outcomes.",
        "Our approach to AI development emphasizes responsible implementation with appropriate guardrails, transparency, and human oversight. We help organizations navigate the rapidly evolving AI landscape to identify high-impact opportunities and avoid common pitfalls.",
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
