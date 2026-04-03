export function SocialProof() {
  const quotes = [
    {
      text: "אני מבזבז 30 דקות כל יום על להחליט מה לאכול. זה בדיוק מה שאני צריך.",
      emoji: "😩",
    },
    {
      text: "סוף סוף מישהו מבין שאני לא רוצה 50 אפשרויות, אני רוצה תשובה אחת.",
      emoji: "🎯",
    },
    {
      text: "וזה כשר? קחו את הכסף שלי.",
      emoji: "✡️",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-center text-brand-dark mb-4">
          אנשים מדברים 💬
        </h2>
        <p className="text-center text-gray-500 mb-12">
          מעל <span className="font-bold text-brand-orange">0</span> אנשים כבר
          מחכים ל-Nosh
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <div
              key={i}
              className="animate-on-scroll rounded-2xl bg-brand-cream border border-brand-orange/10 p-6 shadow-sm"
            >
              <div className="text-3xl mb-3">{q.emoji}</div>
              <p className="text-base text-brand-dark leading-relaxed font-medium">
                &ldquo;{q.text}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
