"use client";

import { useLang } from "@/context/LanguageContext";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

const links = [
  { he: "איך זה עובד", en: "How It Works", href: "#how-it-works" },
  { he: "סוגי המלצות", en: "Categories", href: "#categories" },
  { he: "כשר עולמי", en: "Worldwide", href: "#kosher-worldwide" },
  { he: "הצטרפו", en: "Join", href: "#join" },
];

export function Navbar() {
  const { t, lang, toggleLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Update html dir/lang when language changes
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "he" ? "rtl" : "ltr";
  }, [lang]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-16 flex items-center ${
        scrolled || menuOpen
          ? "bg-black/80 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-5 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Nosh"
            width={120}
            height={40}
            className="h-9 md:h-10 w-auto"
            priority
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base text-gray-400 hover:text-gold transition-colors"
            >
              {t(link.he, link.en)}
            </a>
          ))}

          {/* Language toggle in navbar */}
          <button
            onClick={toggleLang}
            className="border border-gold/50 px-3 py-1.5 rounded-full text-sm text-gold-light hover:bg-gold/10 transition-all duration-300"
          >
            {lang === "he" ? "EN" : "עב"}
          </button>
        </div>

        {/* Mobile: lang + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleLang}
            className="border border-gold/50 px-2.5 py-1 rounded-full text-xs text-gold-light hover:bg-gold/10 transition-all"
          >
            {lang === "he" ? "EN" : "עב"}
          </button>
          <button
            className="text-gray-400 hover:text-gold transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 right-0 md:hidden bg-black/90 backdrop-blur-md border-t border-white/5 px-4 pb-4 pt-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-base text-gray-300 hover:text-gold transition-colors border-b border-white/5 last:border-0"
            >
              {t(link.he, link.en)}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
