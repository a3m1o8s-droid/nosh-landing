export function HowItWorks() {
  const steps = [
    {
      num: "1",
      emoji: "⚙️",
      title: "אמור ל-Nosh מה אתה (לא) אוכל",
      desc: "כשר? בשרי? צמחוני? אלרגיות? פשוט תגדיר ו-Nosh ידע.",
    },
    {
      num: "2",
      emoji: "🔔",
      title: "כל יום ב-17:00 תקבל כרטיס אחד",
      desc: "המלצה אחת. לא 50 אפשרויות. תשובה אחת, מותאמת אישית.",
    },
    {
      num: "3",
      emoji: "👆",
      title: "Swipe ימינה = אוכלים. שמאלה = הבא.",
      desc: "אהבת? לחצת ואוכלים. לא בא לך? Swipe ותקבל אחר.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-center text-brand-dark mb-4">
          איך זה עובד? 🤔
        </h2>
        <p className="text-center text-gray-500 mb-14">
          שלושה שלבים. זהו. באמת.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {steps.map((s) => (
            <div
              key={s.num}
              className="animate-on-scroll text-center"
            >
              <div className="text-5xl mb-4">{s.emoji}</div>
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand-orange text-white font-bold text-lg mb-4">
                {s.num}
              </div>
              <h3 className="text-lg font-bold text-brand-dark mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
