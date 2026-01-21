import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";


const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" }
  })
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

function CapabilityCard({ image, imageAlt, title, description, gradient }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`group relative p-6 rounded-2xl bg-gradient-to-br ${gradient} border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300`}
    >
      <img
        src={image}
        alt={imageAlt}
        className="w-16 h-auto mb-4 opacity-90"
        loading="lazy"
      />
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
    </motion.div>
  );
}

function ProcessStep({ number, title, description, isLast, gradient, lineColor, tooltip }) {
  const [showTooltip, setShowTooltip] = React.useState(false);

  return (
    <motion.div variants={fadeUp} className="relative flex gap-6">
      {/* Timeline */}
      <div className="flex flex-col items-center">
        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-white font-bold text-lg`}>
          {number}
        </div>
        {!isLast && (
          <div className={`w-px h-full bg-gradient-to-b ${lineColor} min-h-[80px]`} />
        )}
      </div>
      {/* Content */}
      <div
        className="pb-12 relative cursor-pointer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400 leading-relaxed max-w-md">{description}</p>

        {/* Tooltip */}
        {showTooltip && tooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="absolute left-0 top-full mt-2 z-50 w-80 p-4 rounded-xl bg-black/90 backdrop-blur-xl border border-white/10 shadow-2xl"
          >
            <div className="flex items-start gap-3">
              <span className={`w-8 h-8 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                {number}
              </span>
              <div>
                <p className="text-sm text-white font-medium mb-1">{tooltip.headline}</p>
                <p className="text-xs text-gray-400 leading-relaxed">{tooltip.detail}</p>
                {tooltip.stats && (
                  <div className="flex gap-4 mt-3 pt-3 border-t border-white/10">
                    {tooltip.stats.map((stat, i) => (
                      <div key={i} className="text-center">
                        <p className="text-sm font-bold text-white">{stat.value}</p>
                        <p className="text-[10px] text-gray-500 uppercase tracking-wide">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default function Mission() {
  return (
    <div className="relative text-gray-300">
      <SEO
        title="Our Mission - Custom Software Development Process"
        description="Axion Deep Labs transforms complex ideas into production-ready software. Our agile development process delivers custom web applications, mobile apps, AI solutions, and enterprise software."
        keywords="custom software development process, agile software development, software development methodology, web application development company, mobile app development services, AI software development company, enterprise software solutions, software development agency"
        canonical="/mission"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Mission", url: "/mission" }
        ]}
      />

      {/* Hero Section */}
      <section className="snap-section min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-bold tracking-widest uppercase text-lg md:text-xl mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
          >
            OUR MISSION
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8"
          >
            <span className="text-xl md:text-2xl font-light text-gray-400 tracking-widest mr-3">TRANSFORMING</span>
            <span className="text-white" style={{ textShadow: '0 0 40px rgba(255,255,255,0.4)' }}>IDEAS</span>
            <br />
            <span className="text-xl md:text-2xl font-light text-gray-400 tracking-widest mr-3">INTO</span>
            <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">REALITY</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base md:text-lg text-gray-400 max-w-xl mx-auto leading-relaxed"
          >
            Precision-engineered solutions that scale with your vision.
          </motion.p>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="snap-section min-h-screen flex items-center px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white mb-4">
              What we build
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-400 max-w-xl mx-auto">
              Full-stack expertise across every layer of modern software development
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <CapabilityCard
              image="/images/webapps.webp"
              imageAlt="Web application development"
              title="Web Applications"
              description="React, Next.js, and TypeScript frontends. Full-stack SaaS platforms built for scale."
              gradient="from-cyan-500/10 to-blue-500/5"
            />
            <CapabilityCard
              image="/images/mobileapps.webp"
              imageAlt="Mobile app development"
              title="Mobile Apps"
              description="Native iOS and Android experiences. Cross-platform with React Native."
              gradient="from-violet-500/10 to-purple-500/5"
            />
            <CapabilityCard
              image="/images/ai-ml.webp"
              imageAlt="AI and machine learning"
              title="AI & ML"
              description="LLM integrations, custom models, and intelligent automation systems."
              gradient="from-fuchsia-500/10 to-pink-500/5"
            />
            <CapabilityCard
              image="/images/backend-apis.webp"
              imageAlt="Backend and API development"
              title="Backend & APIs"
              description="Python, Node.js, FastAPI. RESTful and GraphQL architectures."
              gradient="from-emerald-500/10 to-teal-500/5"
            />
            <CapabilityCard
              image="/images/cloud-devops.webp"
              imageAlt="Cloud and DevOps infrastructure"
              title="VR & AR"
              description="Immersive experiences with Unity and WebXR. Spatial computing applications."
              gradient="from-orange-500/10 to-red-500/5"
            />
            <CapabilityCard
              image="/images/cloud-devops.webp"
              imageAlt="Cloud infrastructure"
              title="Cloud & DevOps"
              description="AWS, GCP, Azure deployments. CI/CD automation and scalable infrastructure."
              gradient="from-blue-500/10 to-indigo-500/5"
            />
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="snap-section min-h-screen flex items-center justify-center px-6 py-20">
        <div className="w-full max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white mb-4">
              How we work
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-400 max-w-xl mx-auto">
              A proven process that turns complexity into clarity
            </motion.p>
          </motion.div>

          {/* 2x2 Grid of Process Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Row 1: Discover & Design */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/10 p-8 hover:from-cyan-500/25 hover:to-blue-500/15 transition-all cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold text-xl">1</span>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Discover</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">We start by understanding your vision. Deep conversations, sharp questions, and mapping the problem space together.</p>
                  <div className="flex gap-4 text-xs">
                    <div><span className="text-cyan-400 font-bold">40+</span> <span className="text-gray-500">discovery calls</span></div>
                    <div><span className="text-cyan-400 font-bold">98%</span> <span className="text-gray-500">scope accuracy</span></div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative rounded-2xl bg-gradient-to-br from-violet-500/20 to-purple-500/10 p-8 hover:from-violet-500/25 hover:to-purple-500/15 transition-all cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl">2</span>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Design</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">Architecture and prototypes. We validate assumptions early and iterate until the solution feels right.</p>
                  <div className="flex gap-4 text-xs">
                    <div><span className="text-violet-400 font-bold">3x</span> <span className="text-gray-500">iterations avg</span></div>
                    <div><span className="text-violet-400 font-bold">100%</span> <span className="text-gray-500">client sign-off</span></div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Row 2: Build & Launch */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative rounded-2xl bg-gradient-to-br from-fuchsia-500/20 to-pink-500/10 p-8 hover:from-fuchsia-500/25 hover:to-pink-500/15 transition-all cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-fuchsia-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl">3</span>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Build</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">Agile sprints with continuous delivery. You see progress weekly, not monthly.</p>
                  <div className="flex gap-4 text-xs">
                    <div><span className="text-fuchsia-400 font-bold">94%</span> <span className="text-gray-500">on-time delivery</span></div>
                    <div><span className="text-fuchsia-400 font-bold">Weekly</span> <span className="text-gray-500">demo cadence</span></div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group relative rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-500/10 p-8 hover:from-orange-500/25 hover:to-red-500/15 transition-all cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white font-bold text-xl">4</span>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Launch</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">Deploy with confidence. Monitoring, support, and iteration as your product grows.</p>
                  <div className="flex gap-4 text-xs">
                    <div><span className="text-orange-400 font-bold">99.9%</span> <span className="text-gray-500">uptime SLA</span></div>
                    <div><span className="text-orange-400 font-bold">&lt;2hr</span> <span className="text-gray-500">response time</span></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="snap-section min-h-screen flex items-center justify-center px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center w-full"
        >
          <div className="relative p-12 md:p-16 rounded-3xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/[0.08]">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to build something great?
            </h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
              Let's talk about your project. We'd love to hear what you're working on.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Get in touch
              </Link>
              <Link
                to="/solutions"
                className="px-8 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white/5 transition-colors"
              >
                View our work
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
