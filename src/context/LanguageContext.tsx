"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

type Lang = "he" | "en";

interface LanguageContextValue {
  lang: Lang;
  toggleLang: () => void;
  t: (he: string, en: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("he");

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "he" ? "en" : "he"));
  }, []);

  const t = useCallback(
    (he: string, en: string) => (lang === "he" ? he : en),
    [lang]
  );

  const isRTL = lang === "he";

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
