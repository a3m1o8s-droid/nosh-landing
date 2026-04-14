"use client";

import { useLang } from "@/context/LanguageContext";

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="py-12 px-4 border-t border-white/5">
      <div className="max-w-6xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-4">
          <span className="text-2xl font-black text-gold-gradient">Nosh</span>
        </div>

        <p className="text-gray-500 text-sm mb-6">
          {t(
            "Nosh — בקרוב. כשר. אישי. בלי לחשוב.",
            "Nosh — Coming soon. Kosher. Personal. Effortless."
          )}
        </p>

        {/* Links */}
        <div className="flex items-center justify-center gap-6 mb-8">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gold transition-colors text-sm"
          >
            {t("אינסטגרם", "Instagram")}
          </a>
          <span className="text-gray-700">|</span>
          <a
            href="mailto:hello@nosh.co.il"
            className="text-gray-500 hover:text-gold transition-colors text-sm"
          >
            {t("צרו קשר", "Contact Us")}
          </a>
        </div>

        <div className="section-divider max-w-xs mx-auto mb-6" />

        <p className="text-gray-600 text-xs">
          &copy; 2026 Nosh.{" "}
          {t("כל הזכויות שמורות.", "All rights reserved.")}
        </p>
      </div>
    </footer>
  );
}
