import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded-lg focus:text-sm focus:font-medium"
      >
        Skip to content
      </a>
      <Navbar />
      <div className="snap-container scrollbar-hide">
        <main id="main-content" className="relative z-10">{children}</main>
        <Footer />
      </div>
    </>
  );
}
