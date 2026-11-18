import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GalleryHero from "@/components/Gallery/GalleryHero";
import GalleryMoments from "@/components/Gallery/GalleryMoments";

import celebration from "@/images/gallery/celebration.png";
import deluxeRoom from "@/images/gallery/deluxeRoom.webp";
import dining from "@/images/gallery/dining.png";
import garden from "@/images/gallery/garden.png";
import experience from "@/images/gallery/experience.webp";
import resort from "@/images/gallery/resort.png";
import familyRoom from "@/images/gallery/familyRoom.webp";
import outdoorDining from "@/images/gallery/outdoorDining.png";
import property from "@/images/gallery/property.png";

import type { GalleryImage } from "@/components/Gallery/GalleryMoments";

const galleryImages: GalleryImage[] = [
  {
    id: "celebration",
    src: celebration,
    alt: "Beautiful celebrations at Paciano",
    category: "Celebrations",
    title: "Beautifully Celebrated",
  },
  {
    id: "deluxe-room",
    src: deluxeRoom,
    alt: "Deluxe accommodation at Paciano",
    category: "Stays",
    title: "A Stay to Remember",
  },
  {
    id: "dining",
    src: dining,
    alt: "Dining experience at Paciano",
    category: "Dining",
    title: "Dining in Nature",
  },
  {
    id: "garden",
    src: garden,
    alt: "Beautiful resort garden",
    category: "Experiences",
    title: "Nature's Embrace",
  },
  {
    id: "outdoor-dining",
    src: outdoorDining,
    alt: "Outdoor dining experience",
    category: "Dining",
  },
  {
    id: "experience",
    src: experience,
    alt: "Nature and river views",
    category: "Experiences",
  },
  {
    id: "family-room",
    src: familyRoom,
    alt: "Family accommodation",
    category: "Stays",
  },
  {
    id: "resort",
    src: resort,
    alt: "Paciano resort surroundings",
    category: "Property",
  },
  {
    id: "property",
    src: property,
    alt: "Aerial view of Paciano property",
    category: "Property",
  },
];

export default function GalleryPage() {
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
        <GalleryHero />
        <GalleryMoments images={galleryImages} />

        <Footer />
      </main>
    </>
  );
}
