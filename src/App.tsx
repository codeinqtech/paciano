import { useEffect, useState } from "react";
import HomePage from "@/pages/HomePage";
import ContactPage from "@/pages/ContactPage";
import StayPage from "@/pages/StayPage";
import GalleryPage from "@/pages/GalleryPage";
import { appPathname } from "@/lib/appBase";
import AboutUsPage from "./pages/AboutUsPage";
import EventsPage from "./pages/EventsPage";
import EventCategoryPage from "./pages/EventCategoryPage";

export default function App() {
  const [path, setPath] = useState(() => appPathname(window.location.pathname));

  useEffect(() => {
    const onNavigate = () => {
      setPath(appPathname(window.location.pathname));
    };
    window.addEventListener("popstate", onNavigate);
    return () => window.removeEventListener("popstate", onNavigate);
  }, []);

  if (path === "/contact") {
    return <ContactPage />;
  }

  if (path === "/events/corporate-events" || path === "/events/weddings") {
    return <EventCategoryPage path={path} />;
  }

  if (path === "/events") {
    return <EventsPage />;
  }

  if (path === "/gallery") {
    return <GalleryPage />;
  }

  if (path === "/stay") {
    return <StayPage />;
  }

  if (path === "/about") {
    return <AboutUsPage />;
  }

  return <HomePage />;
}
