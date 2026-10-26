import { useEffect, useState } from "react";
import HomePage from "@/pages/HomePage";
import ContactPage from "@/pages/ContactPage";
import StayPage from "@/pages/StayPage";
import { appPathname } from "@/lib/appBase";
import AboutUsPage from "./pages/AboutUsPage";

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

  if (path === "/stay") {
    return <StayPage />;
  }

  if (path === "/about") {
    return <AboutUsPage />;
  }

  return <HomePage />;
}
