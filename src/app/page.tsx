"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { ScrollAnimator } from "@/components/ScrollAnimator";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Categories } from "@/components/Categories";
import { KosherWorldwide } from "@/components/KosherWorldwide";
import { SocialProof } from "@/components/SocialProof";
import { EmailForm } from "@/components/EmailForm";
import { Footer } from "@/components/Footer";
import { useLang } from "@/context/LanguageContext";

function SecondCTA() {
  const { t } = useLang();

  return (
    <section id="join" className="py-16 md:py-24 px-4 sm:px-5 relative">
      {/* Radial gold glow behind heading */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(212,168,67,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="section-divider max-w-2xl mx-auto mb-14" />

      <div className="relative z-10 max-w-xl mx-auto text-center animate-on-scroll">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
          {t("רוצה לקבל את ההמלצה הראשונה?", "Want to Get Your First Recommendation?")}
        </h2>
        <p className="text-gray-400 mb-7">
          {t(
            "השאר מייל ונעדכן אותך ברגע ש-Nosh מוכן",
            "Leave your email and we'll notify you when Nosh is ready"
          )}
        </p>
        <div className="max-w-md mx-auto">
          <EmailForm />
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-dark-950">
        <ScrollAnimator />
        <Navbar />
        <Hero />
        <HowItWorks />
        <Categories />
        <KosherWorldwide />
        <SocialProof />
        <SecondCTA />
        <Footer />
      </div>
    </LanguageProvider>
  );
}
