"use client";

import { useTranslation } from "../../hooks/useTranslation";
import styles from "./LanguageToggle.module.css";

export default function LanguageToggle() {
  const { language, setLanguage, t } = useTranslation();

  return (
    <div
      className={styles.langToggle}
      role="group"
      aria-label={t.language.switchLabel}
    >
      <button
        type="button"
        className={`${styles.langBtn} ${language === "es" ? styles.active : ""}`}
        onClick={() => setLanguage("es")}
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
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
      >
        {t.language.en}
      </button>
    </div>
  );
}
