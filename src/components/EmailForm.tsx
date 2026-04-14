"use client";

import { useLang } from "@/context/LanguageContext";

export function EmailForm() {
  const { t } = useLang();

  return (
    <form
      action="https://formspree.io/f/{FORM_ID}"
      method="POST"
      className="flex flex-col sm:flex-row gap-3"
    >
      <input
        type="email"
        name="email"
        required
        placeholder={t("המייל שלך", "Your email")}
        className="premium-input flex-1 px-5 py-3.5 rounded-xl text-white placeholder-gray-500 text-base"
        dir="ltr"
      />
      <button
        type="submit"
        className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-gold-dark via-gold to-gold-light text-dark-950 font-bold text-base hover:shadow-lg hover:shadow-gold/20 transition-all duration-300 whitespace-nowrap"
      >
        {t("תעדכנו אותי", "Notify Me")}
      </button>
    </form>
  );
}
