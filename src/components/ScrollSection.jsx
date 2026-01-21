import React from "react";
import { motion } from "framer-motion";

const prefersReduced =
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

export default function ScrollSection({
  children,
  className = "",
  id,
  minHeight = true,
  center = false
}) {
  return (
    <section
      id={id}
      className={`
        md:snap-start md:snap-always
        ${minHeight ? "md:min-h-screen" : ""}
        ${center ? "flex items-center justify-center" : ""}
        ${className}
      `}
    >
      <motion.div
        initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.6 }}
        className="w-full"
      >
        {children}
      </motion.div>
    </section>
  );
}

// Container that enables scroll-snap on desktop
export function ScrollContainer({ children, className = "" }) {
  return (
    <div
      className={`
        md:snap-y md:snap-mandatory md:h-screen md:overflow-y-auto
        scrollbar-hide
        ${className}
      `}
      style={{
        scrollBehavior: "smooth"
      }}
    >
      {children}
    </div>
  );
}
