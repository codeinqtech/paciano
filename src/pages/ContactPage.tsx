import { useEffect, useRef, useState, type ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactUs/ContactUsHero";
import ContactInfo from "@/components/ContactUs/ContactInfo";
import ContactForm from "@/components/ContactUs/ContactForm";


const FOREST = "#0E2D20";
const GOLD = "#C8A76A";
const PARCHMENT = "#eee9dc";


export default function ContactPage() {
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
        <ContactHero />
        <ContactInfo />
        {/* <MistSectionBridge /> */}
        <ContactForm />
        <div className="relative isolate">
          {/* <ContactLocationSection /> */}
          <Footer contactOverlap />
        </div>
      </main>
    </>
  );
}