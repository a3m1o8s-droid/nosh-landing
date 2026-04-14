"use client";

import { useLang } from "@/context/LanguageContext";
import { useState, FormEvent } from "react";

export function EmailForm() {
  const { t } = useLang();
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mzdkalqe", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="text-center py-4 px-5 rounded-xl border border-gold/20 bg-gold/5">
        <p className="text-gold-light font-bold text-lg mb-1">
          {t("תודה!", "Thank you!")}
        </p>
        <p className="text-gray-400 text-sm">
          {t("נעדכן אותך כשנצא לאוויר", "We'll let you know when we launch")}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
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
        disabled={status === "sending"}
        className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-gold-dark via-gold to-gold-light text-dark-950 font-bold text-base hover:shadow-lg hover:shadow-gold/20 transition-all duration-300 whitespace-nowrap disabled:opacity-60"
      >
        {status === "sending"
          ? t("שולח...", "Sending...")
          : t("תעדכנו אותי", "Notify Me")}
      </button>
      {status === "error" && (
        <p className="text-red-400 text-sm sm:col-span-2">
          {t("משהו השתבש, נסה שוב", "Something went wrong, try again")}
        </p>
      )}
    </form>
  );
}
