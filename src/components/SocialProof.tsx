"use client";

import { useLang } from "@/context/LanguageContext";

const quotes = [
  {
    he: "אני מבזבז 30 דקות כל יום על להחליט מה לאכול. זה בדיוק מה שאני צריך.",
    en: "I waste 30 minutes every day deciding what to eat. This is exactly what I need.",
  },
  {
    he: "סוף סוף מישהו מבין שאני לא רוצה 50 אפשרויות, אני רוצה תשובה אחת.",
    en: "Finally someone understands I don't want 50 options, I want one answer.",
  },
  {
    he: "וזה כשר? קחו את הכסף שלי.",
    en: "And it's kosher? Take my money.",
  },
];

export function SocialProof() {
  const { t } = useLang();

  return (
    <section className="py-20 md:py-32 px-4 relative">
      <div className="section-divider max-w-2xl mx-auto mb-20" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
            {t("אנשים כבר מחכים", "People Are Already Waiting")}
          </h2>
          <p className="text-gold text-lg font-medium">
            {t("מעל 0 אנשים כבר מחכים ל-Nosh", "Over 0 people already waiting for Nosh")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((quote, i) => (
            <div
              key={i}
              className="animate-on-scroll glass-card rounded-2xl p-8 hover:border-gold/25 transition-all duration-300"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Quote mark */}
              <div className="text-gold/30 text-5xl font-serif mb-3 leading-none">
                &ldquo;
              </div>
              <p className="text-gray-300 text-base leading-relaxed mb-6">
                {t(quote.he, quote.en)}
              </p>
              {/* Stars */}
              <div className="text-gold text-sm tracking-wider">
                &#9733; &#9733; &#9733; &#9733; &#9733;
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
