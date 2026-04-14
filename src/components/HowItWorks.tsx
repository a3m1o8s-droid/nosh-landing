"use client";

import { useLang } from "@/context/LanguageContext";

const steps = [
  {
    emoji: "\u2699\uFE0F",
    he: "אמור ל-Nosh מה אתה (לא) אוכל",
    en: "Tell Nosh what you do (and don't) eat",
    descHe: "העדפות, אלרגיות, כשרות — הכל מותאם אישית",
    descEn: "Preferences, allergies, kosher level — fully personalized",
  },
  {
    emoji: "\uD83D\uDD14",
    he: "כל יום ב-17:00 תקבל כרטיס אחד",
    en: "Every day at 5PM you get one card",
    descHe: "המלצה אחת בלבד. בלי עומס. בלי חרדת בחירה.",
    descEn: "Just one recommendation. No overload. No decision anxiety.",
  },
  {
    emoji: "\uD83D\uDC49",
    he: "Swipe ימינה = אוכלים. שמאלה = הבא.",
    en: "Swipe right = eat it. Left = next.",
    descHe: "אהבת? מקבלים הנחיות. לא אהבת? Nosh לומד ומשתפר.",
    descEn: "Liked it? Get directions. Didn't? Nosh learns and improves.",
  },
];

export function HowItWorks() {
  const { t } = useLang();

  return (
    <section className="py-20 md:py-32 px-4 relative">
      <div className="section-divider max-w-2xl mx-auto mb-20" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
            {t("איך זה עובד?", "How It Works")}
          </h2>
          <p className="text-gray-500 text-lg">
            {t("שלושה שלבים. אפס מאמץ.", "Three steps. Zero effort.")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div
              key={i}
              className="animate-on-scroll glass-card rounded-2xl p-8 text-center hover:border-gold/25 transition-all duration-300 group"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Step number */}
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gold/20 text-gold text-sm font-bold mb-5">
                {i + 1}
              </div>

              {/* Emoji */}
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {step.emoji}
              </div>

              <h3 className="text-lg font-bold text-white mb-2">
                {t(step.he, step.en)}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {t(step.descHe, step.descEn)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
