"use client";

import { useLang } from "@/context/LanguageContext";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { EmailForm } from "./EmailForm";
import { SwipeCard } from "./SwipeCard";

export function Hero() {
  const { t } = useLang();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80"
          alt={t("שולחן אוכל", "Food table")}
          fill
          className="object-cover opacity-15"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950/70 via-dark-950/90 to-dark-950" />
      </div>

      {/* Radial gold glow */}
      <div className="hero-glow" />

      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-5 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          {/* Swipe card — mobile first (appears above text on mobile) */}
          <div className="flex justify-center md:order-2">
            <SwipeCard />
          </div>

          {/* Text side */}
          <div className="text-center md:text-start md:order-1">
            <div className="inline-block mb-5 px-4 py-1.5 rounded-full border border-gold/20 bg-gold/5">
              <span className="text-gold-light text-sm font-medium">
                {t("כשר. אישי. בלי לחשוב.", "Kosher. Personal. Effortless.")}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-5 leading-tight">
              <span className="text-white">Nosh</span>
              <br />
              <span className="text-gold-gradient">
                {t(
                  "ה-AI שמחליט בשבילך מה לאכול",
                  "The AI That Decides What You Eat"
                )}
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-7 max-w-lg mx-auto md:mx-0 leading-relaxed">
              {t(
                "כל יום בשעה 17:00 מקבלים המלצה אחת — משלוח, מתכון מהיר, או מוצר מהסופר. Swipe ימינה ונגמר.",
                "Every day at 5PM you get one recommendation — delivery, a quick recipe, or a grocery item. Swipe right and you're done."
              )}
            </p>

            <div className="max-w-md mx-auto md:mx-0">
              <EmailForm />
            </div>

            <a
              href="#how-it-works"
              className="inline-flex items-center gap-1.5 mt-5 text-gold-light hover:text-gold transition-colors text-sm font-medium group"
            >
              {t("ספרו לי עוד", "Tell Me More")}
              <ChevronDown size={16} className="transition-transform group-hover:translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
