import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import StayPageContent from "@/components/stay/StayPageContent";

export default function StayPage() {
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
        <StayPageContent />
      </main>
    </>
  );
}
