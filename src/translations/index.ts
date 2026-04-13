import type { Locale, Translation } from "./types";
import { en } from "./en";
import { es } from "./es";

export const translations = { en, es } as const satisfies Record<Locale, Translation>;

export function getTranslation(locale: Locale): Translation {
  return translations[locale];
}

export { en, es };
export type { Locale, Translation } from "./types";
