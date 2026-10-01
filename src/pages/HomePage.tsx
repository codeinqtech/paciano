import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutUs from "@/components/AboutUs";
import Accommodation from "@/components/Accommodation";
import DiningSection from "@/components/DiningSection";
import GuestStories from "@/components/GuestStories";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Navbar scrolled={scrolled} activeNav="home" />
      <main className="overflow-hidden bg-[#ece6d8]">
        <HeroSection />
        <AboutUs />
        <Accommodation />
        <DiningSection />
        <GuestStories />
        <Location />
        <Footer />
      </main>
    </>
  );
}
