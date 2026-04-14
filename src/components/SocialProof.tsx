"use client";

import { useLang } from "@/context/LanguageContext";

const painPoints = [
  {
    emoji: "\uD83E\uDD14",
    he: "כל יום אותה שאלה: מה לאכול?",
    en: "Every day the same question: what to eat?",
    descHe: "Nosh מחליט בשבילך. המלצה אחת, מדויקת, כל יום.",
    descEn: "Nosh decides for you. One precise recommendation, every day.",
  },
  {
    emoji: "\uD83D\uDE35\u200D\uD83D\uDCAB",
    he: "50 אפשרויות בוולט ואתה עדיין לא יודע",
    en: "50 options on Wolt and you still can't decide",
    descHe: "Nosh לא נותן 50 אפשרויות. הוא נותן אחת.",
    descEn: "Nosh doesn't give 50 options. It gives you one.",
  },
  {
    emoji: "\u2708\uFE0F",
    he: "אוכל כשר בחו״ל? בהצלחה למצוא",
    en: "Kosher food abroad? Good luck finding it",
    descHe: "Nosh מאתר מסעדות כשרות בכל מקום בעולם.",
    descEn: "Nosh finds kosher restaurants anywhere in the world.",
  },
];

export function SocialProof() {
  const { t } = useLang();

  return (
    <section id="pain-points" className="py-20 md:py-32 px-4 relative">
      <div className="section-divider max-w-2xl mx-auto mb-20" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
            {t("הכאב ש-Nosh פותר", "The Pain Nosh Solves")}
          </h2>
          <p className="text-gray-500 text-lg">
            {t("בעיות אמיתיות. פתרון אחד.", "Real problems. One solution.")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {painPoints.map((point, i) => (
            <div
              key={i}
              className="animate-on-scroll glass-card rounded-2xl p-8 hover:border-gold/25 transition-all duration-300"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="text-4xl mb-5">{point.emoji}</div>
              <h3 className="text-lg font-bold text-white mb-3">
                {t(point.he, point.en)}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {t(point.descHe, point.descEn)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
