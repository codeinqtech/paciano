import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventTypeHero from "@/components/EventType/EventTypeHero";
import EventTypeAdvantage from "@/components/EventType/EventTypeAdvantage";
import EventsTypeVenues from "@/components/EventType/EventTypeVenues";

import { corporateEventConfig } from "@/config/corporateEventConfig";
import { weddingEventConfig } from "@/config/weddingEventConfig";

interface EventCategoryPageProps {
  path: string;
}

export default function EventCategoryPage({ path }: EventCategoryPageProps) {
  const [scrolled, setScrolled] = useState(false);

  const isWedding = path === "/events/weddings";

  const config = isWedding ? weddingEventConfig : corporateEventConfig;

  useEffect(() => {
    window.scrollTo(0, 0);

    const onScroll = () => setScrolled(window.scrollY > 40);

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, [path]);

  return (
    <>
      <Navbar scrolled={scrolled} activeNav="events" />

      <main className="overflow-hidden bg-[#F8F5EE]">
        <EventTypeHero {...config.hero} />
        <EventTypeAdvantage {...config.advantage} />
        <EventsTypeVenues {...config.venues} />
      </main>

      <Footer />
    </>
  );
}
