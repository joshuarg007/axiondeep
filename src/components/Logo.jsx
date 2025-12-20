import React from "react";

export default function Logo({ size = 32, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="50%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#f472b6" />
        </linearGradient>
      </defs>

      {/* Abstract neural/depth symbol - three layered planes converging to a point */}
      <path
        d="M24 4 L44 20 L44 28 L24 44 L4 28 L4 20 Z"
        fill="url(#logoGrad)"
        opacity="0.15"
      />
      <path
        d="M24 10 L38 22 L38 26 L24 38 L10 26 L10 22 Z"
        fill="url(#logoGrad)"
        opacity="0.4"
      />
      <path
        d="M24 16 L32 22 L32 26 L24 32 L16 26 L16 22 Z"
        fill="url(#logoGrad)"
        opacity="0.8"
      />

      {/* Center core */}
      <circle cx="24" cy="24" r="4" fill="white" />
    </svg>
  );
}

// Wordmark version
export function LogoWordmark({ size = 32, className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Logo size={size} />
      <div className="flex flex-col">
        <span className="text-white font-semibold text-[15px] tracking-tight leading-none">
          Axion Deep
        </span>
        <span className="text-gray-500 text-[10px] tracking-widest uppercase">
          Labs
        </span>
      </div>
    </div>
  );
}

// Minimal version - just the mark
export function LogoMark({ size = 32, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="markGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="50%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#f472b6" />
        </linearGradient>
      </defs>

      {/* Layered hexagonal depth effect */}
      <path
        d="M24 4 L44 20 L44 28 L24 44 L4 28 L4 20 Z"
        fill="url(#markGrad)"
        opacity="0.15"
      />
      <path
        d="M24 10 L38 22 L38 26 L24 38 L10 26 L10 22 Z"
        fill="url(#markGrad)"
        opacity="0.4"
      />
      <path
        d="M24 16 L32 22 L32 26 L24 32 L16 26 L16 22 Z"
        fill="url(#markGrad)"
        opacity="0.8"
      />

      {/* Center core */}
      <circle cx="24" cy="24" r="4" fill="white" />
    </svg>
  );
}
