"use client";

import { useLang } from "@/context/LanguageContext";
import { Truck, Flame, Timer, MapPin } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";

const categories: { he: string; en: string; descHe: string; descEn: string; image: string; Icon: LucideIcon }[] = [
  {
    he: "הזמן בלחיצה",
    en: "Order in a Click",
    descHe: "משלוח ממסעדה כשרה קרובה",
    descEn: "Delivery from a nearby kosher restaurant",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80",
    Icon: Truck,
  },
  {
    he: "חמם ותאכל",
    en: "Heat & Eat",
    descHe: "מוצר מוכן מהסופר",
    descEn: "Ready-made from the supermarket",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80",
    Icon: Flame,
  },
  {
    he: "10 דקות, 4 מרכיבים",
    en: "10 Min, 4 Ingredients",
    descHe: "מתכון מינימליסטי שכל אחד יכול",
    descEn: "A minimalist recipe anyone can make",
    image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=400&q=80",
    Icon: Timer,
  },
  {
    he: "לך תאכל בחוץ",
    en: "Go Eat Out",
    descHe: "מסעדה כשרה באזור שלך",
    descEn: "A kosher restaurant near you",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80",
    Icon: MapPin,
  },
];

export function Categories() {
  const { t } = useLang();

  return (
    <section id="categories" className="py-16 md:py-24 px-4 sm:px-5 relative bg-[#111116]">
      <div className="section-divider max-w-2xl mx-auto mb-14" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
            {t("4 סוגי המלצות", "4 Types of Recommendations")}
          </h2>
          <p className="text-gray-500 text-lg">
            {t(
              "Nosh תמיד ימצא לך את האופציה הנכונה",
              "Nosh always finds the right option for you"
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat, i) => (
            <a
              key={i}
              href="#join"
              className="animate-on-scroll group relative rounded-2xl overflow-hidden border border-white/10 hover:border-gold/30 hover:scale-[1.03] transition-all duration-300 bg-dark-surface shadow-lg shadow-black/20 block"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Tooltip */}
              <div className="absolute top-3 end-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <span className="px-2.5 py-1 rounded-lg bg-gold text-dark-950 text-xs font-bold whitespace-nowrap">
                  {t("בקרוב", "Coming soon")}
                </span>
              </div>

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={cat.image}
                  alt={t(cat.he, cat.en)}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 start-3 bg-gold/20 p-2 rounded-full">
                  <cat.Icon size={22} color="#D4A853" strokeWidth={1.5} />
                </div>
              </div>

              {/* Text */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-white mb-1">
                  {t(cat.he, cat.en)}
                </h3>
                <p className="text-gray-400 text-sm">{t(cat.descHe, cat.descEn)}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
