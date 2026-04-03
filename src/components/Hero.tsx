import { EmailForm } from "./EmailForm";
import { SwipeCard } from "./SwipeCard";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-16 md:pb-24 px-4">
      {/* Background decoration */}
      <div className="absolute top-0 start-0 w-72 h-72 bg-brand-orange/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 end-0 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl translate-y-1/2" />

      <div className="relative max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-start">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-dark leading-tight mb-4">
              <span className="text-brand-orange">Nosh</span> — ה-AI
              <br />
              שמחליט בשבילך
              <br />
              מה לאכול
            </h1>

            <p className="text-xl md:text-2xl font-bold text-brand-green mb-2">
              כשר. אישי. בלי לחשוב.
            </p>

            <p className="text-base md:text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              כל יום בשעה 17:00 מקבלים המלצה אחת — משלוח, מתכון מהיר, או מוצר
              מהסופר. Swipe ימינה ונגמר.
            </p>

            {/* Email form */}
            <div className="mb-4">
              <EmailForm />
            </div>

            <p className="text-sm text-gray-400">
              כבר <span className="font-bold text-brand-orange">0</span> אנשים
              מחכים
            </p>
          </div>

          {/* Swipe card demo */}
          <div className="flex-shrink-0">
            <SwipeCard />
          </div>
        </div>
      </div>
    </section>
  );
}
