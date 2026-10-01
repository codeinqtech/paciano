import { useEffect, useState } from "react";
import HomePage from "@/pages/HomePage";
import ContactPage from "@/pages/ContactPage";

function normalizePath(pathname: string) {
  const trimmed = pathname.replace(/\/+$/, "");
  return trimmed === "" ? "/" : trimmed;
}

export default function App() {
  const [path, setPath] = useState(() =>
    normalizePath(window.location.pathname),
  );

  useEffect(() => {
    const onNavigate = () => {
      setPath(normalizePath(window.location.pathname));
    };
    window.addEventListener("popstate", onNavigate);
    return () => window.removeEventListener("popstate", onNavigate);
  }, []);

  if (path === "/contact") {
    return <ContactPage />;
  }

  return <HomePage />;
}
