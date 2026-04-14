"use client";

import { useLang } from "@/context/LanguageContext";
import { Navigation, Shield, Star } from "lucide-react";
import type { LucideIcon } from "lucide-react";

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
    <section id="kosher-worldwide" className="py-16 md:py-24 px-4 sm:px-5 relative overflow-hidden">
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
          <p className="text-gray-500 text-lg">
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
              className="text-base md:text-2xl font-bold animate-city-glow"
              style={{ animationDelay: `${i * 0.5}s` }}
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
              className="animate-on-scroll glass-card rounded-2xl p-7 text-center hover:border-gold/25 transition-all duration-300"
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
    </section>
  );
}
