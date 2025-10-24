import React from "react";

export default function GradientBackground({ children }) {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Keyframes (scoped) */}
      <style>{`
        @keyframes auroraMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      {/* Static radial fallback for instant paint */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 600px at 20% 15%, rgba(34,211,238,0.12) 0%, rgba(0,0,0,0) 60%), radial-gradient(900px 500px at 80% 30%, rgba(59,130,246,0.12) 0%, rgba(0,0,0,0) 60%)",
          zIndex: 0,
        }}
      />

      {/* Animated linear gradient layer (no blur/filter) */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(34,211,238,0.6), rgba(59,130,246,0.6), rgba(147,51,234,0.55))",
          backgroundSize: "400% 400%",
          animation: "auroraMove 24s linear infinite",
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
