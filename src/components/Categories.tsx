export function Categories() {
  const categories = [
    {
      emoji: "🛵",
      title: "הזמן בלחיצה",
      desc: "משלוח ממסעדה כשרה קרובה. Nosh בוחר, אתה רק מאשר.",
      color: "border-brand-orange bg-brand-orange/5",
    },
    {
      emoji: "🔥",
      title: "חמם ותאכל",
      desc: "מוצר מוכן מהסופר שכבר מחכה לך. 3 דקות במיקרו וסגור.",
      color: "border-brand-yellow bg-yellow-50",
    },
    {
      emoji: "🍳",
      title: "10 דקות, 4 מרכיבים",
      desc: "מתכון מינימליסטי שגם מי שלא מבשל יצליח. בטוח.",
      color: "border-brand-green bg-green-50",
    },
    {
      emoji: "🍽️",
      title: "לך תאכל בחוץ",
      desc: "מסעדה כשרה באזור שלך. כי לפעמים צריך לצאת מהבית.",
      color: "border-blue-400 bg-blue-50",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-center text-brand-dark mb-4">
          4 סוגי המלצות 🍽️
        </h2>
        <p className="text-center text-gray-500 mb-14 max-w-md mx-auto">
          Nosh לא רק אומר מה לאכול — הוא אומר איך לקבל את זה
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className={`animate-on-scroll rounded-2xl border-2 p-6 ${cat.color} hover:shadow-lg hover:scale-[1.02] transition-all duration-200`}
            >
              <div className="text-4xl mb-3">{cat.emoji}</div>
              <h3 className="text-xl font-bold text-brand-dark mb-2">
                {cat.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {cat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
