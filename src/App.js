import React from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Mission from "./pages/Mission";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Legal from "./pages/Legal";
import Solutions from "./pages/Solutions";
import GradientBackground from "./components/GradientBackground";

const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      "px-3 py-2 rounded-full text-sm transition-colors duration-200 " +
      (isActive ? "bg-white/10 text-white" : "text-gray-300 hover:text-white")
    }
  >
    {children}
  </NavLink>
);

export default function App() {
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // fade and scale calculations
  const fadeOpacity = Math.max(0.75, 1 - scrollY / 400);
  const scale = Math.max(0.9, 1 - scrollY / 1200);

  return (
    <GradientBackground>
      {/* Floating minimalist navbar */}
      <header className="relative z-20">
        {/* Fixed logo at top-left (Chrome-safe) */}
        <Link
          to="/"
          className="fixed top-4 right-6 flex items-center gap-4 text-sm text-gray-300 backdrop-blur-sm bg-black/20 rounded-full px-4 py-2 shadow-[0_0_12px_rgba(0,0,0,0.25)] transition-all duration-500"
          style={{ pointerEvents: "auto" }}
        >
          Axion Deep Labs
        </Link>


        {/* Keep your floating, centered nav */}
        <div
          className="fixed top-4 left-1/2 -translate-x-1/2 flex items-center justify-center w-[90%] max-w-6xl px-4 py-2 transition-all duration-500 select-none pointer-events-none"
          style={{
            opacity: Math.max(0.75, 1 - window.scrollY / 400),
            zIndex: 5,
          }}
        >
          <nav
            className="flex items-center gap-4 text-sm text-gray-300 pointer-events-auto filter drop-shadow-[0_1px_6px_rgba(0,0,0,0.35)]"
            style={{ justifyContent: "center" }}
          >
            <NavItem to="/mission">Mission</NavItem>
            <NavItem to="/careers">Careers</NavItem>
            <NavItem to="/contact">Contact</NavItem>
          </nav>
        </div>
      </header>


      {/* Routes */}
      <main className="max-w-6xl mx-auto px-4 py-12 relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/solutions" element={<Solutions />} />
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
