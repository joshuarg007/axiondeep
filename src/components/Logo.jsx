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
      {/* Background with gradient */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
        <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      {/* Outer glow ring */}
      <circle cx="24" cy="24" r="23" stroke="url(#glowGradient)" strokeWidth="1" fill="none" />

      {/* Main circle background */}
      <circle cx="24" cy="24" r="20" fill="url(#logoGradient)" />

      {/* Abstract "A" shape - three converging lines representing depth/convergence */}
      <path
        d="M24 12 L14 34 L18 34 L24 20 L30 34 L34 34 L24 12Z"
        fill="white"
        fillOpacity="0.95"
      />

      {/* Horizontal bar of the A */}
      <rect x="17" y="27" width="14" height="3" rx="1" fill="white" fillOpacity="0.9" />

      {/* Small accent dot - representing "deep" / core */}
      <circle cx="24" cy="38" r="2" fill="white" fillOpacity="0.6" />
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
        <linearGradient id="logoMarkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>

      {/* Rounded square */}
      <rect x="4" y="4" width="40" height="40" rx="10" fill="url(#logoMarkGradient)" />

      {/* Stylized A */}
      <path
        d="M24 10 L12 36 L17 36 L24 19 L31 36 L36 36 L24 10Z"
        fill="white"
        fillOpacity="0.95"
      />
      <rect x="16" y="28" width="16" height="3" rx="1" fill="white" fillOpacity="0.85" />
    </svg>
  );
}
