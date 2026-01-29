import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="snap-container scrollbar-hide">
        <main className="relative z-10">{children}</main>
        <Footer />
      </div>
    </>
  );
}
