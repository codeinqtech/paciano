import { useEffect, useRef, useState, type ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutUsHero from "@/components/AboutUs/AboutUsHero";

const PARCHMENT = "#eee9dc";

export default function AboutUsPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Navbar scrolled={scrolled} activeNav="contact" />
      <main style={{ background: PARCHMENT }}>
        <AboutUsHero />
        <div className="relative isolate">
          {/* <ContactLocationSection /> */}
          <Footer contactOverlap />
        </div>
      </main>
    </>
  );
}