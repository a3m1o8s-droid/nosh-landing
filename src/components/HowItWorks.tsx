"use client";

import { useLang } from "@/context/LanguageContext";
import { Settings, BellRing, ArrowRightLeft } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const steps: { Icon: LucideIcon; he: string; en: string; descHe: string; descEn: string }[] = [
  {
    Icon: Settings,
    he: "אמור ל-Nosh מה אתה (לא) אוכל",
    en: "Tell Nosh what you do (and don't) eat",
    descHe: "העדפות, אלרגיות, כשרות — הכל מותאם אישית",
    descEn: "Preferences, allergies, kosher level — fully personalized",
  },
  {
    Icon: BellRing,
    he: "כל יום ב-17:00 תקבל כרטיס אחד",
    en: "Every day at 5PM you get one card",
    descHe: "המלצה אחת בלבד. בלי עומס. בלי חרדת בחירה.",
    descEn: "Just one recommendation. No overload. No decision anxiety.",
  },
  {
    Icon: ArrowRightLeft,
    he: "Swipe ימינה = אוכלים. שמאלה = הבא.",
    en: "Swipe right = eat it. Left = next.",
    descHe: "אהבת? מקבלים הנחיות. לא אהבת? Nosh לומד ומשתפר.",
    descEn: "Liked it? Get directions. Didn't? Nosh learns and improves.",
  },
];

export function HowItWorks() {
  const { t } = useLang();

  return (
    <section id="how-it-works" className="py-16 md:py-24 px-4 sm:px-5 relative">
      <div className="section-divider max-w-2xl mx-auto mb-14" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
            {t("איך זה עובד?", "How It Works")}
          </h2>
          <p className="text-gray-500 text-lg">
            {t("שלושה שלבים. אפס מאמץ.", "Three steps. Zero effort.")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="animate-on-scroll glass-card rounded-2xl p-7 text-center hover:border-gold/25 transition-all duration-300 group"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Step number */}
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gold/20 text-gold text-sm font-bold mb-4">
                {i + 1}
              </div>

              {/* Icon */}
              <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <step.Icon size={32} color="#D4A853" strokeWidth={1.5} />
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
