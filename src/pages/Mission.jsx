import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "../components/SEO";

const SectionTitle = ({ children }) => (
  <h1 className="text-4xl md:text-5xl font-semibold mb-8 text-center md:text-left text-white">
    {children}
  </h1>
);

function FocusTile({ title, lines }) {
  const [hover, setHover] = useState(false);
  return (
    <motion.div
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      className="relative border border-white/10 rounded-2xl bg-white/5 p-6 overflow-hidden backdrop-blur-sm hover:bg-white/10 transition"
      whileHover={{ borderColor: "rgba(6,182,212,0.4)" }}
    >
      <div className="flex items-center justify-between">
        <div className="font-semibold text-white">{title}</div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: hover ? 1 : 0 }}
          className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30"
        >
          focus
        </motion.div>
      </div>

      <AnimatePresence>
        {hover && (
          <motion.ul
            key="lines"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.18 }}
            className="mt-3 text-sm text-gray-300 space-y-1.5"
          >
            {lines.map((l, i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-violet-400/70" />
                <span>{l}</span>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Mission() {
  return (
    <div className="relative z-10 text-gray-300 space-y-20 max-w-5xl mx-auto px-6 md:px-8 lg:px-12 pt-32 md:pt-40">
      <SEO
        title="Our Mission - Software Development Process"
        description="Learn about Axion Deep Labs' mission and software development process. We build web applications, mobile apps, AI solutions, VR/AR experiences with agile methodology."
        keywords="software development process, agile development, web development company, mobile app developers, AI development company, VR AR development"
        canonical="/mission"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <SectionTitle>Our Mission</SectionTitle>

        <motion.div
          className="text-gray-300 max-w-4xl leading-relaxed text-lg space-y-4"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p>
            <span className="text-white font-semibold">Axion Deep Labs</span> is
            a software development company building the next generation of web applications,
            mobile apps, and AI-powered digital products. We combine deep technical expertise
            with modern development practices to deliver custom software solutions that scale.
          </p>
          <p>
            Our mission is to transform complex ideas into elegant, production-ready software.
            We operate in agile, cross-functional teams—designing, developing, testing, and deploying
            applications that solve real business problems. From startups to enterprise clients,
            we build software that works.
          </p>
          <p>
            Every project starts with understanding. Every feature is built with purpose.
            Every deployment is engineered for reliability.{" "}
            <span className="text-white font-semibold">
              From concept to code to launch,
            </span>{" "}
            Axion Deep Labs delivers custom software development with precision and care.
          </p>
        </motion.div>

        {/* Focus Areas */}
        <div className="mt-16 space-y-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            What We Build
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <FocusTile
              title="Web Applications"
              lines={[
                "React, Next.js, TypeScript frontends",
                "Full-stack SaaS platforms",
                "Progressive web apps (PWAs)",
              ]}
            />
            <FocusTile
              title="Mobile Development"
              lines={[
                "iOS and Android native apps",
                "React Native cross-platform",
                "App Store optimization",
              ]}
            />
            <FocusTile
              title="AI & Machine Learning"
              lines={[
                "LLM integration (Claude, GPT)",
                "Custom ML model deployment",
                "Intelligent automation systems",
              ]}
            />
            <FocusTile
              title="Backend & APIs"
              lines={[
                "Python, Node.js, FastAPI",
                "RESTful and GraphQL APIs",
                "Microservices architecture",
              ]}
            />
            <FocusTile
              title="VR & AR Experiences"
              lines={[
                "Unity and WebXR development",
                "Immersive training simulations",
                "Spatial computing applications",
              ]}
            />
            <FocusTile
              title="Cloud & DevOps"
              lines={[
                "AWS, GCP, Azure deployments",
                "CI/CD pipeline automation",
                "Scalable infrastructure design",
              ]}
            />
          </div>
        </div>

        {/* Development Process */}
        <div className="grid md:grid-cols-3 gap-12 mt-20">
          <section className="space-y-4">
            <div className="h-px bg-gradient-to-r from-cyan-400/60 to-violet-500/60" />
            <h3 className="text-xl font-semibold text-white tracking-wide">
              Discover & Plan
            </h3>
            <p className="text-sm text-gray-300">
              Every project begins with understanding your vision and requirements.
            </p>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>
                <span className="text-white">Requirements:</span> gather user stories,
                define scope and deliverables.
              </li>
              <li>
                <span className="text-white">Architecture:</span> design scalable
                system architecture and tech stack.
              </li>
              <li>
                <span className="text-white">Roadmap:</span> create detailed
                project timeline with milestones.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <div className="h-px bg-gradient-to-r from-cyan-400/60 to-violet-500/60" />
            <h3 className="text-xl font-semibold text-white tracking-wide">
              Build & Iterate
            </h3>
            <p className="text-sm text-gray-300">
              Agile development with continuous feedback and refinement.
            </p>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>
                <span className="text-white">Sprint cycles:</span> two-week sprints
                with demos and feedback.
              </li>
              <li>
                <span className="text-white">Code quality:</span> code reviews,
                testing, and documentation.
              </li>
              <li>
                <span className="text-white">Transparency:</span> regular updates
                and progress visibility.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <div className="h-px bg-gradient-to-r from-cyan-400/60 to-violet-500/60" />
            <h3 className="text-xl font-semibold text-white tracking-wide">
              Deploy & Support
            </h3>
            <p className="text-sm text-gray-300">
              Launch with confidence and ongoing maintenance.
            </p>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>
                <span className="text-white">CI/CD:</span> automated testing
                and deployment pipelines.
              </li>
              <li>
                <span className="text-white">Monitoring:</span> performance tracking
                and error alerting.
              </li>
              <li>
                <span className="text-white">Support:</span> ongoing maintenance,
                updates, and feature enhancements.
              </li>
            </ul>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
