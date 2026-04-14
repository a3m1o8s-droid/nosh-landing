"use client";

import { useLang } from "@/context/LanguageContext";
import Image from "next/image";

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="py-10 px-4 sm:px-5 border-t border-white/5">
      <div className="max-w-6xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-4">
          <Image
            src="/logo.svg"
            alt="Nosh"
            width={90}
            height={30}
            className="h-7 w-auto mx-auto"
          />
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

        <div className="section-divider max-w-xs mx-auto mb-5" />

        <p className="text-gray-600 text-xs">
          &copy; 2026 Nosh.{" "}
          {t("כל הזכויות שמורות.", "All rights reserved.")}
        </p>
      </div>
    </footer>
  );
}
