"use client";

import { useLang } from "@/context/LanguageContext";
import { NoshLogo } from "./NoshLogo";

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="py-10 px-4 sm:px-5 border-t border-white/5">
      <div className="max-w-6xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-4 flex justify-center">
          <NoshLogo height={28} />
        </div>

        <p className="text-gray-500 text-sm mb-2">
          {t(
            "Nosh — בקרוב. כשר. אישי. בלי לחשוב.",
            "Nosh — Coming soon. Kosher. Personal. Effortless."
          )}
        </p>

        <p className="text-gold/40 text-xs mb-6 italic">
          Made with AI. Served with love.
        </p>

        {/* Links */}
        <div className="flex items-center justify-center gap-6 mb-6">
          <span className="relative group">
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="text-gray-500 hover:text-gold transition-colors text-sm"
            >
              {t("אינסטגרם", "Instagram")}
            </a>
            {/* Tooltip */}
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-gold text-dark-950 text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              {t("בקרוב", "Coming soon")}
            </span>
          </span>
          <span className="text-gray-700">|</span>
          <a
            href="#join"
            className="text-gray-500 hover:text-gold transition-colors text-sm"
          >
            {t("צרו קשר", "Contact Us")}
          </a>
        </div>

        <div className="section-divider max-w-xs mx-auto mb-5" />

        <p className="text-gray-600 text-xs">
          &copy; 2026 Nosh.{" "}
          {t("כל הזכויות שמורות.", "All rights reserved.")}
        </p>
      </div>
    </footer>
  );
}
