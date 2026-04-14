"use client";

import { useLang } from "@/context/LanguageContext";
import Image from "next/image";

export function SwipeCard() {
  const { t } = useLang();

  return (
    <div className="relative w-72 sm:w-80">
      {/* Glow effect behind card */}
      <div className="absolute -inset-4 bg-gold/5 rounded-3xl blur-2xl" />

      {/* Main card */}
      <div className="relative rounded-2xl overflow-hidden gold-glow border border-gold/15 bg-dark-800 animate-swipe-hint">
        {/* Food image */}
        <div className="relative h-48 sm:h-56">
          <Image
            src="https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=640&q=80"
            alt={t("שווארמה", "Shawarma")}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-800 via-transparent to-transparent" />

          {/* Badge */}
          <div className="absolute top-3 start-3 px-3 py-1 rounded-full bg-gold/90 text-dark-950 text-xs font-bold">
            {t("המלצת היום", "Today's Pick")}
          </div>
        </div>

        {/* Card content */}
        <div className="p-5">
          <h3 className="text-xl font-bold text-white mb-1">
            {t("שווארמה מאבו חסן", "Shawarma from Abu Hassan")}
          </h3>
          <p className="text-gray-400 text-sm mb-4">
            {t("הערב, 42 ₪, 25 דק׳ משלוח", "Tonight, $12, 25 min delivery")}
          </p>

          {/* Swipe indicators */}
          <div className="flex justify-between items-center pt-3 border-t border-white/5">
            <div className="flex items-center gap-2 text-red-400/60 text-sm">
              <span>&#10005;</span>
              <span>{t("הבא", "Skip")}</span>
            </div>
            <div className="text-xs text-gray-600">
              {t("החלק לבחור", "Swipe to choose")}
            </div>
            <div className="flex items-center gap-2 text-emerald-400/60 text-sm">
              <span>{t("אוכלים!", "Let's eat!")}</span>
              <span>&#10003;</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
