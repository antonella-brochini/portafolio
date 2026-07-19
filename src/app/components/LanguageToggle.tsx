"use client";

import { usePathname, useRouter } from "next/navigation";
import { useTranslation } from "../../hooks/useTranslation";
import { switchLocalePath } from "../../i18n/config";
import type { Locale } from "../../translations/types";
import styles from "./LanguageToggle.module.css";

export default function LanguageToggle() {
  const { language, t } = useTranslation();
  const pathname = usePathname() || "/";
  const router = useRouter();

  const go = (next: Locale) => {
    if (next === language) return;
    router.push(switchLocalePath(pathname, next));
  };

  return (
    <div
      className={styles.langToggle}
      role="group"
      aria-label={t.language.switchLabel}
    >
      <button
        type="button"
        className={`${styles.langBtn} ${language === "es" ? styles.active : ""}`}
        onClick={() => go("es")}
        aria-pressed={language === "es"}
      >
        {t.language.es}
      </button>
      <span className={styles.sep} aria-hidden>
        |
      </span>
      <button
        type="button"
        className={`${styles.langBtn} ${language === "en" ? styles.active : ""}`}
        onClick={() => go("en")}
        aria-pressed={language === "en"}
      >
        {t.language.en}
      </button>
    </div>
  );
}
