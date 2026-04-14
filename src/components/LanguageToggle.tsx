"use client";

import { useLang } from "@/context/LanguageContext";
import { useEffect } from "react";

export function LanguageToggle() {
  const { lang, toggleLang, isRTL } = useLang();

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
  }, [lang, isRTL]);

  return (
    <button
      onClick={toggleLang}
      className="fixed top-5 left-5 z-50 px-3 py-1.5 rounded-full glass-card text-gold-light text-sm font-medium hover:border-gold/40 transition-all duration-300"
      aria-label="Toggle language"
    >
      {lang === "he" ? "EN" : "עב"}
    </button>
  );
}
