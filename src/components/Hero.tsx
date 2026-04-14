"use client";

import { useLang } from "@/context/LanguageContext";
import Image from "next/image";
import { EmailForm } from "./EmailForm";
import { SwipeCard } from "./SwipeCard";

export function Hero() {
  const { t } = useLang();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&q=80"
          alt="Premium food spread"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950/80 via-dark-950/90 to-dark-950" />
      </div>

      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text side */}
          <div className="text-center md:text-start">
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-gold/20 bg-gold/5">
              <span className="text-gold-light text-sm font-medium">
                {t("כשר. אישי. בלי לחשוב.", "Kosher. Personal. Effortless.")}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight">
              <span className="text-white">Nosh</span>
              <br />
              <span className="text-gold-gradient">
                {t(
                  "ה-AI שמחליט בשבילך מה לאכול",
                  "The AI That Decides What You Eat"
                )}
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
              {t(
                "כל יום בשעה 17:00 מקבלים המלצה אחת — משלוח, מתכון מהיר, או מוצר מהסופר. Swipe ימינה ונגמר.",
                "Every day at 5PM you get one recommendation — delivery, a quick recipe, or a grocery item. Swipe right and you're done."
              )}
            </p>

            <div className="max-w-md mx-auto md:mx-0">
              <EmailForm />
            </div>

            <p className="mt-4 text-sm text-gray-500">
              {t("כבר 0 אנשים מחכים", "Already 0 people waiting")}
            </p>
          </div>

          {/* Swipe card demo */}
          <div className="flex justify-center">
            <SwipeCard />
          </div>
        </div>
      </div>
    </section>
  );
}
