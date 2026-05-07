"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const nodes = [
  { id: "visitor", label: "Website Visitor", color: "#06b6d4", x: 80, y: 120 },
  { id: "form", label: "Lead Form", color: "#8b5cf6", x: 310, y: 120 },
  { id: "crm", label: "Your CRM", color: "#ec4899", x: 540, y: 120 },
  { id: "deal", label: "Closed Deal", color: "#10b981", x: 770, y: 120 },
];

const paths = [
  { from: 0, to: 1, d: "M 130 120 C 190 120, 250 120, 260 120" },
  { from: 1, to: 2, d: "M 360 120 C 420 120, 480 120, 490 120" },
  { from: 2, to: 3, d: "M 590 120 C 650 120, 710 120, 720 120" },
];

function FlowingDot({ path, delay, color }: { path: string; delay: number; color: string }) {
  return (
    <motion.circle
      r="4"
      fill={color}
      filter="url(#glow)"
      initial={{ offsetDistance: "0%" }}
      animate={{ offsetDistance: "100%" }}
      transition={{
        duration: 2,
        delay,
        repeat: Infinity,
        repeatDelay: 1.5,
        ease: "easeInOut",
      }}
      style={{
        offsetPath: `path('${path}')`,
        offsetRotate: "0deg",
      }}
    />
  );
}

export default function LeadFlowVisualization() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-cyan-400 font-medium tracking-widest uppercase text-sm mb-4">
            How It Works
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            From visitor to customer
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Every step is automated. A visitor lands on your site, fills out a form, and their data flows directly into your CRM, no manual entry, no delays.
          </p>
        </div>

        {/* Desktop SVG flow */}
        <div className="hidden md:block">
          <svg viewBox="0 0 850 240" className="w-full" style={{ maxHeight: "280px" }}>
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <linearGradient id="pathGrad1" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="pathGrad2" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#ec4899" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="pathGrad3" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#ec4899" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.4" />
              </linearGradient>
            </defs>

            {/* Connection paths */}
            {visible && paths.map((p, i) => (
              <motion.path
                key={i}
                d={p.d}
                fill="none"
                stroke={`url(#pathGrad${i + 1})`}
                strokeWidth="2"
                strokeDasharray="6 4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: i * 0.3 }}
              />
            ))}

            {/* Flowing dots */}
            {visible && paths.map((p, i) => (
              <FlowingDot
                key={`dot-${i}`}
                path={p.d}
                delay={1 + i * 0.5}
                color={nodes[i].color}
              />
            ))}

            {/* Nodes */}
            {nodes.map((node, i) => (
              <motion.g
                key={node.id}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={visible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              >
                {/* Outer glow */}
                <circle cx={node.x} cy={node.y} r="38" fill={node.color} opacity="0.08" />
                {/* Node circle */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="28"
                  fill="rgba(10,10,15,0.8)"
                  stroke={node.color}
                  strokeWidth="1.5"
                  opacity="0.9"
                />
                {/* Icon placeholder - number */}
                <text
                  x={node.x}
                  y={node.y + 1}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill={node.color}
                  fontSize="14"
                  fontWeight="bold"
                >
                  {i + 1}
                </text>
                {/* Label */}
                <text
                  x={node.x}
                  y={node.y + 55}
                  textAnchor="middle"
                  fill="white"
                  fontSize="13"
                  fontWeight="600"
                >
                  {node.label}
                </text>
              </motion.g>
            ))}
          </svg>
        </div>

        {/* Mobile: vertical stack */}
        <div className="md:hidden space-y-6">
          {nodes.map((node, i) => (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex items-center gap-4"
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 border"
                style={{ borderColor: node.color, backgroundColor: `${node.color}10` }}
              >
                <span className="text-lg font-bold" style={{ color: node.color }}>
                  {i + 1}
                </span>
              </div>
              <div>
                <p className="text-white font-semibold">{node.label}</p>
                <p className="text-gray-500 text-sm">
                  {i === 0 && "Someone visits your website"}
                  {i === 1 && "They fill out your lead capture form"}
                  {i === 2 && "Data syncs instantly to your CRM"}
                  {i === 3 && "Your sales team closes the deal"}
                </p>
              </div>
              {i < nodes.length - 1 && (
                <div className="absolute left-[27px] mt-16 w-px h-6 bg-gradient-to-b" style={{ background: `linear-gradient(${node.color}, ${nodes[i + 1].color})` }} />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
