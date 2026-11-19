import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PolicyHero from "@/components/PrivacyPolicy/PolicyHero";
import PolicyContent from "@/components/PrivacyPolicy/PolicyContent";

export default function PrivacyPolicyPage() {
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
        <PolicyHero />
        <PolicyContent />
        <Footer />
      </main>
    </>
  );
}
