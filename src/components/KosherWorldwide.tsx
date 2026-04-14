"use client";

import { useLang } from "@/context/LanguageContext";
import { Navigation, Shield, Star } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";

const cities = [
  { he: "ניו יורק", en: "New York" },
  { he: "לונדון", en: "London" },
  { he: "פריז", en: "Paris" },
  { he: "מלבורן", en: "Melbourne" },
  { he: "תל אביב", en: "Tel Aviv" },
  { he: "מיאמי", en: "Miami" },
  { he: "ברלין", en: "Berlin" },
  { he: "אמסטרדם", en: "Amsterdam" },
  { he: "טורונטו", en: "Toronto" },
  { he: "בואנוס איירס", en: "Buenos Aires" },
];

const features: { Icon: LucideIcon; he: string; en: string; descHe: string; descEn: string }[] = [
  {
    Icon: Navigation,
    he: "חיפוש לפי מיקום",
    en: "Search by Location",
    descHe: "Nosh מאתר את המסעדות הכשרות הקרובות אליך, בכל מקום.",
    descEn: "Nosh finds the closest kosher restaurants to you, anywhere.",
  },
  {
    Icon: Shield,
    he: "סינון לפי רמת כשרות",
    en: "Filter by Kashrut Level",
    descHe: "מהדרין, רבנות, בד״ץ — תבחר מה מתאים לך.",
    descEn: "Mehadrin, Rabbanut, Badatz — choose what fits you.",
  },
  {
    Icon: Star,
    he: "דירוגים מהקהילה",
    en: "Community Ratings",
    descHe: "דירוגים וביקורות ממשתמשים שומרי כשרות כמוך.",
    descEn: "Reviews and ratings from kosher-keeping users like you.",
  },
];

export function KosherWorldwide() {
  const { t } = useLang();

  return (
    <section id="kosher-worldwide" className="relative py-16 md:py-24 px-4 sm:px-5 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
          alt={t("מסעדה", "Restaurant")}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/85" />
      </div>

      <div className="relative z-10">
        <div className="section-divider max-w-2xl mx-auto mb-14" />

        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
              {t(
                "מאתר מסעדות כשרות. בכל מקום בעולם.",
                "Finds Kosher Restaurants. Anywhere in the World."
              )}
            </h2>
            <p className="text-gray-400 text-lg">
              {t(
                "ניו יורק, לונדון, פריז, מלבורן, תל אביב",
                "New York, London, Paris, Melbourne, Tel Aviv"
              )}
            </p>
          </div>

          {/* City grid with staggered glow animation */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-5 mb-14 animate-on-scroll">
            {cities.map((city, i) => (
              <span
                key={i}
                className="text-base md:text-2xl font-bold city-glow-item"
                style={{ animationDelay: `${i * 1.5}s` }}
              >
                {t(city.he, city.en)}
              </span>
            ))}
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feat, i) => (
              <div
                key={i}
                className="animate-on-scroll rounded-2xl p-7 text-center border border-white/10 bg-white/[0.03] backdrop-blur-sm shadow-lg shadow-black/20 hover:border-gold/30 hover:bg-white/[0.05] transition-all duration-300"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex justify-center mb-4">
                  <feat.Icon size={32} color="#D4A853" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {t(feat.he, feat.en)}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {t(feat.descHe, feat.descEn)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
