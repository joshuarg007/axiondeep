import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="snap-start border-t border-white/[0.06] relative z-10 bg-black/20">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logo.webp"
                alt="Axion Deep Labs"
                width={374}
                height={94}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              Transforming how technology is understood. From idea to launch, done right.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/111213915"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Axion Deep Labs on LinkedIn"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://x.com/axiondeeplabs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Axion Deep Labs on X"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/mission" className="text-sm text-gray-500 hover:text-white transition-colors">
                  Mission
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-sm text-gray-500 hover:text-white transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-gray-500 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-500 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/development" className="text-sm text-gray-500 hover:text-white transition-colors">
                  Development
                </Link>
              </li>
              <li>
                <Link href="/research" className="text-sm text-gray-500 hover:text-white transition-colors">
                  Research
                </Link>
              </li>
              <li>
                <span className="text-sm text-gray-600">Web Apps</span>
              </li>
              <li>
                <span className="text-sm text-gray-600">Mobile Apps</span>
              </li>
              <li>
                <span className="text-sm text-gray-600">AI & ML</span>
              </li>
            </ul>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Our Products</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://site2crm.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 hover:text-cyan-400 transition-colors"
                >
                  Site2CRM
                </a>
              </li>
              <li>
                <a
                  href="https://made4founders.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 hover:text-violet-400 transition-colors"
                >
                  Made4Founders
                </a>
              </li>
              <li>
                <Link
                  href="/projects/quanta"
                  className="text-sm text-gray-500 hover:text-fuchsia-400 transition-colors"
                >
                  QUANTA
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/vesper"
                  className="text-sm text-gray-500 hover:text-emerald-400 transition-colors"
                >
                  Vesper AI
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Axion Deep Labs. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/legal#privacy" className="text-sm text-gray-500 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/legal#terms" className="text-sm text-gray-500 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
