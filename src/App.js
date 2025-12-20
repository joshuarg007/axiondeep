import React, { useState } from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Mission from "./pages/Mission";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Solutions from "./pages/Solutions";
import GradientBackground from "./components/GradientBackground";
import { LogoMark } from "./components/Logo";
import Legal from "./pages/Legal";
import Quanta from "./pages/projects/Quanta";
import Site2CRM from "./pages/projects/Site2CRM";
import Forma from "./pages/projects/Forma";
import Vesper from "./pages/projects/Vesper";
import FounderOS from "./pages/projects/FounderOS";

const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      "px-4 py-2 text-[13px] font-medium tracking-wide uppercase transition-all duration-300 " +
      (isActive
        ? "text-white"
        : "text-gray-400 hover:text-white")
    }
  >
    {children}
  </NavLink>
);

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <GradientBackground>
      {/* Professional fixed navbar */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            className="flex items-center justify-between h-16 border-b border-white/[0.06]"
            style={{
              background: "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.1) 100%)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
          >
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 group"
            >
              <LogoMark size={36} />
              <div className="flex flex-col">
                <span className="text-white font-semibold text-[15px] tracking-tight leading-none">
                  Axion Deep
                </span>
                <span className="text-gray-500 text-[10px] tracking-widest uppercase">
                  Labs
                </span>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              <NavItem to="/mission">Mission</NavItem>
              <NavItem to="/solutions">Solutions</NavItem>
              <NavItem to="/careers">Careers</NavItem>
            </nav>

            {/* CTA + Mobile Menu Button */}
            <div className="flex items-center gap-3">
              <Link
                to="/contact"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-[13px] font-medium text-white bg-white/[0.08] hover:bg-white/[0.12] border border-white/[0.1] rounded-lg transition-all duration-300"
              >
                Contact
                <svg className="w-3.5 h-3.5 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-gray-400 hover:text-white transition"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu dropdown */}
          {mobileMenuOpen && (
            <div
              className="md:hidden border-b border-white/[0.06] py-4"
              style={{
                background: "rgba(0,0,0,0.8)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
              }}
            >
              <nav className="flex flex-col space-y-1">
                <NavLink
                  to="/mission"
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    "px-4 py-3 text-sm font-medium transition-colors " +
                    (isActive ? "text-white bg-white/10" : "text-gray-400 hover:text-white hover:bg-white/5")
                  }
                >
                  Mission
                </NavLink>
                <NavLink
                  to="/solutions"
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    "px-4 py-3 text-sm font-medium transition-colors " +
                    (isActive ? "text-white bg-white/10" : "text-gray-400 hover:text-white hover:bg-white/5")
                  }
                >
                  Solutions
                </NavLink>
                <NavLink
                  to="/careers"
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    "px-4 py-3 text-sm font-medium transition-colors " +
                    (isActive ? "text-white bg-white/10" : "text-gray-400 hover:text-white hover:bg-white/5")
                  }
                >
                  Careers
                </NavLink>
                <NavLink
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    "px-4 py-3 text-sm font-medium transition-colors " +
                    (isActive ? "text-white bg-white/10" : "text-gray-400 hover:text-white hover:bg-white/5")
                  }
                >
                  Contact
                </NavLink>
              </nav>
            </div>
          )}
        </div>
      </header>


      {/* Routes */}
      <main className="max-w-6xl mx-auto px-4 pt-24 pb-12 relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/projects/quanta" element={<Quanta />} />
          <Route path="/projects/site2crm" element={<Site2CRM />} />
          <Route path="/projects/forma" element={<Forma />} />
          <Route path="/projects/vesper" element={<Vesper />} />
          <Route path="/projects/founderos" element={<FounderOS />} />
          <Route
            path="*"
            element={
              <div className="text-center text-gray-400">
                <h1 className="text-3xl font-semibold mb-2">Page not found</h1>
                <p className="mb-6">
                  The page you’re looking for doesn’t exist.
                </p>
                <Link to="/" className="underline">
                  Go home
                </Link>
              </div>
            }
          />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-16 relative z-10">
        <div className="max-w-6xl mx-auto px-4 py-6 text-xs text-gray-500 flex items-center justify-between">
          <span>
            © {new Date().getFullYear()} Axion Deep. All Rights Reserved.
          </span>
          <div className="flex gap-4">
            <Link to="/legal" className="hover:text-gray-300">
              Privacy & Terms
            </Link>
          </div>
        </div>
      </footer>
    </GradientBackground>
  );
}
