import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TermsHero from "@/components/TermsConditions/TermsHero";
import TermsContent from "@/components/TermsConditions/TermsContent";
import policyMountains from "@/images/privacy/privacy-mountain.png";

export default function TermsConditionsPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Navbar scrolled={scrolled} activeNav="stay" />
      <main className="overflow-hidden bg-[#F8F5EE]">
        <TermsHero />
        <TermsContent
          landscapeSrc={policyMountains}
          lastUpdated="19 November 2026"
        />
        <Footer />
      </main>
    </>
  );
}
