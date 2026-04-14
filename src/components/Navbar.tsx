"use client";

import { useLang } from "@/context/LanguageContext";
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

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark-950/90 backdrop-blur-md border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
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

        {/* Links */}
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

        {/* Mobile CTA */}
        <a
          href="#join"
          className="md:hidden text-sm text-gold font-medium"
        >
          {t("הצטרפו", "Join")}
        </a>
      </div>
    </nav>
  );
}
