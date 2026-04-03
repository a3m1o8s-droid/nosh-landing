"use client";

import { useState, useEffect, useCallback } from "react";

const CARDS = [
  {
    emoji: "🥙",
    title: "שווארמה מאבו חסן",
    meta: "₪42 · 25 דק׳ משלוח",
    tag: "הזמן בלחיצה",
    tagColor: "bg-brand-orange",
  },
  {
    emoji: "🍝",
    title: "פסטה ברוטב עגבניות",
    meta: "10 דק׳ · 4 מרכיבים",
    tag: "מתכון מהיר",
    tagColor: "bg-brand-green",
  },
  {
    emoji: "🥘",
    title: "ג׳חנון מוכן - שופרסל",
    meta: "₪28 · חמם ותאכל",
    tag: "מוצר מהסופר",
    tagColor: "bg-brand-yellow",
  },
  {
    emoji: "🍖",
    title: "שיפודי הכרמל",
    meta: "כשר למהדרין · 500 מטר ממך",
    tag: "לך תאכל בחוץ",
    tagColor: "bg-blue-500",
  },
];

export function SwipeCard() {
  const [index, setIndex] = useState(0);
  const [animClass, setAnimClass] = useState("animate-card-enter");
  const [isAnimating, setIsAnimating] = useState(false);

  const swipe = useCallback(
    (direction: "left" | "right") => {
      if (isAnimating) return;
      setIsAnimating(true);
      setAnimClass(
        direction === "right" ? "animate-swipe-right" : "animate-swipe-left"
      );
      setTimeout(() => {
        setIndex((i) => (i + 1) % CARDS.length);
        setAnimClass("animate-card-enter");
        setIsAnimating(false);
      }, 500);
    },
    [isAnimating]
  );

  // Auto-swipe every 3.5s
  useEffect(() => {
    const timer = setInterval(() => {
      swipe("right");
    }, 3500);
    return () => clearInterval(timer);
  }, [swipe]);

  const card = CARDS[index];

  return (
    <div className="relative w-72 sm:w-80 mx-auto">
      {/* Background cards for depth */}
      <div className="absolute inset-0 rounded-2xl bg-white/40 border border-white/60 transform rotate-2 translate-x-2 -translate-y-1" />
      <div className="absolute inset-0 rounded-2xl bg-white/60 border border-white/80 transform -rotate-1 translate-x-1" />

      {/* Main card */}
      <div
        className={`relative rounded-2xl bg-white border border-gray-100 shadow-xl p-6 ${animClass} swipe-card`}
        onClick={() => swipe("right")}
      >
        {/* Tag */}
        <span
          className={`inline-block text-xs font-bold text-white px-3 py-1 rounded-full ${card.tagColor} mb-4`}
        >
          {card.tag}
        </span>

        {/* Emoji */}
        <div className="text-6xl mb-4">{card.emoji}</div>

        {/* Content */}
        <h3 className="text-xl font-bold text-brand-dark mb-1">
          {card.title}
        </h3>
        <p className="text-sm text-gray-500">{card.meta}</p>

        {/* Swipe hint */}
        <div className="flex items-center justify-between mt-6 text-xs text-gray-300">
          <span>❌ הבא</span>
          <span>אוכלים ✅</span>
        </div>
      </div>
    </div>
  );
}
