import type { Locale } from "../translations/types";

export const locales = ["en", "es"] as const satisfies readonly Locale[];

export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Path without locale prefix, e.g. `/about`, `/projects`, `/projects/orderflow`. */
export type AppPath =
  | "/"
  | "/about"
  | "/projects"
  | "/contact"
  | `/projects/${string}`;

export function localizedPath(locale: Locale, path: string = "/"): string {
  const normalized =
    !path || path === "/"
      ? ""
      : path.startsWith("/")
        ? path
        : `/${path}`;
  return `/${locale}${normalized}`;
}

/** Strip leading /en or /es from pathname. */
export function stripLocale(pathname: string): string {
  const segments = pathname.split("/");
  // ["", "en", "projects", ...]
  if (segments.length >= 2 && isLocale(segments[1])) {
    const rest = "/" + segments.slice(2).join("/");
    return rest === "/" ? "/" : rest.replace(/\/$/, "") || "/";
  }
  return pathname || "/";
}

export function switchLocalePath(pathname: string, nextLocale: Locale): string {
  const path = stripLocale(pathname);
  return localizedPath(nextLocale, path === "/" ? "/" : path);
}
