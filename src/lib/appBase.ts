/** Vite `base` without trailing slash (empty string at site root). */
export const APP_BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

/** Prefix an app route for links and redirects (e.g. `/stay` → `/design/tmp_1/stay`). */
export function toAppPath(route: string): string {
  const withLeading = route.startsWith("/") ? route : `/${route}`;
  if (!APP_BASE) {
    return withLeading;
  }
  return `${APP_BASE}${withLeading}`;
}

/** Strip deploy base prefix from `location.pathname` for in-app routing. */
export function appPathname(pathname: string): string {
  const trimmed = pathname.replace(/\/+$/, "");
  const bare = trimmed === "" ? "/" : trimmed;

  if (!APP_BASE) {
    return bare;
  }

  if (bare === APP_BASE) {
    return "/";
  }

  if (bare.startsWith(`${APP_BASE}/`)) {
    const rest = bare.slice(APP_BASE.length);
    return rest === "" ? "/" : rest;
  }

  return bare;
}

/** Home route with optional hash (e.g. `#dining`). */
export function homeHref(hash?: string): string {
  const base = toAppPath("/");
  return hash ? `${base}${hash.startsWith("#") ? hash : `#${hash}`}` : base;
}
