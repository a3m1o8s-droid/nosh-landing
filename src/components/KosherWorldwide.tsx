"use client";

import { useLang } from "@/context/LanguageContext";

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

const features = [
  {
    emoji: "\uD83D\uDCCD",
    he: "חיפוש לפי מיקום",
    en: "Search by Location",
    descHe: "Nosh מאתר את המסעדות הכשרות הקרובות אליך, בכל מקום.",
    descEn: "Nosh finds the closest kosher restaurants to you, anywhere.",
  },
  {
    emoji: "\u2728",
    he: "סינון לפי רמת כשרות",
    en: "Filter by Kashrut Level",
    descHe: "מהדרין, רבנות, בד״ץ — תבחר מה מתאים לך.",
    descEn: "Mehadrin, Rabbanut, Badatz — choose what fits you.",
  },
  {
    emoji: "\u2B50",
    he: "דירוגים מהקהילה",
    en: "Community Ratings",
    descHe: "דירוגים וביקורות ממשתמשים שומרי כשרות כמוך.",
    descEn: "Reviews and ratings from kosher-keeping users like you.",
  },
];

export function KosherWorldwide() {
  const { t } = useLang();

  return (
    <section id="kosher-worldwide" className="py-20 md:py-32 px-4 relative overflow-hidden">
      <div className="section-divider max-w-2xl mx-auto mb-20" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
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
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-20 animate-on-scroll">
          {cities.map((city, i) => (
            <span
              key={i}
              className="text-lg md:text-2xl font-bold animate-city-glow"
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
              className="animate-on-scroll glass-card rounded-2xl p-8 text-center hover:border-gold/25 transition-all duration-300"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="text-3xl mb-4">{feat.emoji}</div>
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
