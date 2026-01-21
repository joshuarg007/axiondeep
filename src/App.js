import React, { useState, useEffect } from "react";
import { Routes, Route, Link, NavLink, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Mission from "./pages/Mission";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Solutions from "./pages/Solutions";
import GradientBackground from "./components/GradientBackground";
import logo from "./assets/logo.webp";
import Legal from "./pages/Legal";
import Quanta from "./pages/projects/Quanta";
import Site2CRM from "./pages/projects/Site2CRM";
import Forma from "./pages/projects/Forma";
import Vesper from "./pages/projects/Vesper";
import Development from "./pages/Development";
import Research from "./pages/Research";
import NotFound from "./pages/NotFound";

// Sales Portal & Admin imports (v1.0)
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import PortalLogin from "./pages/portal/Login";
import PortalDashboard from "./pages/portal/Dashboard";
import AdminLogin from "./pages/admin/Login";
import AdminDashboard from "./pages/admin/Dashboard";
import ContentManager from "./pages/admin/ContentManager";
import ContentForm from "./pages/admin/ContentForm";

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Find the snap container and scroll it to top
    const snapContainer = document.querySelector('.snap-container');
    if (snapContainer) {
      snapContainer.scrollTo(0, 0);
    }
    // Also scroll window for mobile/non-snap scenarios
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

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

function MainLayout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <ScrollToTop />
      {/* Professional fixed navbar */}
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 group"
            >
              <img src={logo} alt="Axion Deep Labs" className="h-[53px] w-auto" width={374} height={94} />
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              <NavItem to="/mission">Mission</NavItem>
              <NavItem to="/solutions">Solutions</NavItem>
              <NavItem to="/development">Development</NavItem>
              <NavItem to="/research">Research</NavItem>
              <NavItem to="/careers">Careers</NavItem>
            </nav>

            {/* CTA + Mobile Menu Button */}
            <div className="flex items-center gap-3">
              <Link
                to="/contact"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-[13px] font-medium text-white bg-white/[0.08] hover:bg-white/[0.12] rounded-lg transition-all duration-300"
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
                  to="/development"
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    "px-4 py-3 text-sm font-medium transition-colors " +
                    (isActive ? "text-white bg-white/10" : "text-gray-400 hover:text-white hover:bg-white/5")
                  }
                >
                  Development
                </NavLink>
                <NavLink
                  to="/research"
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    "px-4 py-3 text-sm font-medium transition-colors " +
                    (isActive ? "text-white bg-white/10" : "text-gray-400 hover:text-white hover:bg-white/5")
                  }
                >
                  Research
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

      {/* Scroll snap container - wraps main + footer */}
      <div className="snap-container scrollbar-hide">
        {/* Main content */}
        <main className="relative z-10">
          {children}
        </main>

        {/* Footer - snaps but doesn't require full height */}
        <footer className="snap-start border-t border-white/[0.06] relative z-10 bg-black/20">
        <div className="max-w-6xl mx-auto px-6 py-16">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
            {/* Brand Column */}
            <div className="col-span-2 md:col-span-1">
              <Link to="/" className="inline-block mb-4">
                <img src={logo} alt="Axion Deep Labs" className="h-10 w-auto" />
              </Link>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                Transforming how technology is understood. From idea to launch, done right.
              </p>
              {/* Social Links */}
              <div className="flex gap-3">
                <a href="https://linkedin.com/company/axiondeep" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="https://github.com/axiondeep" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
                <a href="https://twitter.com/axiondeep" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
              </div>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
              <ul className="space-y-3">
                <li><Link to="/mission" className="text-sm text-gray-500 hover:text-white transition-colors">Mission</Link></li>
                <li><Link to="/solutions" className="text-sm text-gray-500 hover:text-white transition-colors">Solutions</Link></li>
                <li><Link to="/careers" className="text-sm text-gray-500 hover:text-white transition-colors">Careers</Link></li>
                <li><Link to="/contact" className="text-sm text-gray-500 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Services Column */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-4">Services</h4>
              <ul className="space-y-3">
                <li><Link to="/development" className="text-sm text-gray-500 hover:text-white transition-colors">Development</Link></li>
                <li><Link to="/research" className="text-sm text-gray-500 hover:text-white transition-colors">Research</Link></li>
                <li><span className="text-sm text-gray-600">Web Apps</span></li>
                <li><span className="text-sm text-gray-600">Mobile Apps</span></li>
                <li><span className="text-sm text-gray-600">AI & ML</span></li>
              </ul>
            </div>

            {/* Products Column */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-4">Our Products</h4>
              <ul className="space-y-3">
                <li><a href="https://site2crm.io" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-cyan-400 transition-colors">Site2CRM</a></li>
                <li><a href="https://made4founders.com" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-violet-400 transition-colors">Made4Founders</a></li>
                <li><Link to="/projects/quanta" className="text-sm text-gray-500 hover:text-fuchsia-400 transition-colors">QUANTA</Link></li>
                <li><Link to="/projects/vesper" className="text-sm text-gray-500 hover:text-emerald-400 transition-colors">Vesper AI</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Axion Deep Labs. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/legal" className="text-sm text-gray-500 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/legal" className="text-sm text-gray-500 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
}

function AppContent() {
  const location = useLocation();
  const isPortalRoute = location.pathname.startsWith('/portal') || location.pathname.startsWith('/admin');

  return (
    <GradientBackground>
      {isPortalRoute ? (
        /* Portal/Admin routes - no main navbar */
        <main className="max-w-6xl mx-auto px-4 pt-8 pb-12 relative z-10">
          <Routes>
            {/* Sales Portal Routes */}
            <Route path="/portal/login" element={<PortalLogin />} />
            <Route
              path="/portal"
              element={
                <ProtectedRoute roles={["contractor", "admin"]}>
                  <PortalDashboard />
                </ProtectedRoute>
              }
            />

            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute roles={["admin"]}>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            >
              <Route path="content" element={<ContentManager />} />
              <Route path="content/new" element={<ContentForm />} />
              <Route path="content/:id/edit" element={<ContentForm />} />
            </Route>
          </Routes>
        </main>
      ) : (
        /* Main site with navbar */
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/development" element={<Development />} />
            <Route path="/research" element={<Research />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/projects/quanta" element={<Quanta />} />
            <Route path="/projects/site2crm" element={<Site2CRM />} />
            <Route path="/projects/forma" element={<Forma />} />
            <Route path="/projects/vesper" element={<Vesper />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MainLayout>
      )}
    </GradientBackground>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
