import { defaultLocale, isLocale, type locales as Locales } from "./config";
import type { Locale } from "../translations/types";

export { defaultLocale, isLocale, localizedPath, stripLocale, switchLocalePath } from "./config";
export type { AppPath } from "./config";
export { locales } from "./config";

/** Pick preferred locale from Accept-Language (es > en match). Default: en. */
export function negotiateLocale(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return defaultLocale;

  const parsed = acceptLanguage
    .split(",")
    .map((part) => {
      const [tag, qPart] = part.trim().split(";q=");
      return {
        tag: (tag || "").toLowerCase(),
        q: qPart ? Number.parseFloat(qPart) : 1,
      };
    })
    .filter((x) => x.tag)
    .sort((a, b) => b.q - a.q);

  for (const { tag } of parsed) {
    if (tag.startsWith("es")) return "es";
    if (tag.startsWith("en")) return "en";
  }

  return defaultLocale;
}

export type LocaleParams = Promise<{ locale: string }>;

export async function resolveLocale(params: LocaleParams): Promise<Locale> {
  const { locale } = await params;
  if (!isLocale(locale)) return defaultLocale;
  return locale;
}
