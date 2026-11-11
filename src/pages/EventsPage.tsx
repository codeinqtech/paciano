import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventsHero from "@/components/Events/EventsHero";
import EventsType from "@/components/Events/EventsType";
import EventsCarousel from "@/components/Events/EventsCarousel";

export default function EventsPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <Navbar scrolled={scrolled} activeNav="events" />
      <main className="overflow-hidden bg-[#F8F5EE]">
        <EventsHero />
        <EventsType />
        <EventsCarousel />
        <Footer />
      </main>
    </>
  );
}
