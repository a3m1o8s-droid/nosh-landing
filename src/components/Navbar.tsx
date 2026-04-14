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
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-dark-950/95 backdrop-blur-md border-b border-white/5 py-3"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-5 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Nosh"
            width={110}
            height={36}
            className="h-8 md:h-9 w-auto"
            priority
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-400 hover:text-gold transition-colors"
            >
              {t(link.he, link.en)}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-400 hover:text-gold transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-dark-950/95 backdrop-blur-md border-t border-white/5 px-4 pb-4 pt-2">
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
