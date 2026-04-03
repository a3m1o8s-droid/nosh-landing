"use client";

import { useState, FormEvent } from "react";

export function EmailForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch("https://formspree.io/f/mzdkalqe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setSubmitted(true);
    } catch {
      // Graceful fallback
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-4">
        <p className="text-lg font-bold text-brand-green">
          🎉 נרשמת! נעדכן אותך כשזה מוכן.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto">
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="המייל שלך"
        required
        className="flex-1 px-4 py-3 rounded-xl border-2 border-brand-orange/20 bg-white text-brand-dark placeholder:text-gray-400 focus:outline-none focus:border-brand-orange transition-colors text-center sm:text-start"
      />
      <button
        type="submit"
        disabled={submitting}
        className="px-6 py-3 rounded-xl bg-brand-orange text-white font-bold hover:bg-brand-orange-dark transition-colors disabled:opacity-60 whitespace-nowrap shadow-lg shadow-brand-orange/20"
      >
        {submitting ? "שולח..." : "תעדכנו אותי כשזה מוכן"}
      </button>
    </form>
  );
}
