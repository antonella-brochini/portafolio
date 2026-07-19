"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  type ReactNode,
} from "react";
import type { Locale } from "../translations/types";
import { getTranslation, type Translation } from "../translations";

type LanguageContextValue = {
  language: Locale;
  locale: Locale;
  t: Translation;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

/**
 * Locale comes from the URL (`/[locale]/...`), not localStorage.
 * Server layout passes the active locale; client components read translations via `t`.
 */
export function LanguageProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const t = useMemo(() => getTranslation(locale), [locale]);

  const value = useMemo(
    () => ({ language: locale, locale, t }),
    [locale, t],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useTranslation(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useTranslation must be used within LanguageProvider");
  }
  return ctx;
}
