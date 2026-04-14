"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import { LanguageToggle } from "@/components/LanguageToggle";
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
    <section id="join" className="py-20 md:py-28 px-4 relative">
      <div className="section-divider max-w-2xl mx-auto mb-20" />

      <div className="max-w-xl mx-auto text-center animate-on-scroll">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
          {t("רוצה לקבל את ההמלצה הראשונה?", "Want to Get Your First Recommendation?")}
        </h2>
        <p className="text-gray-400 mb-8">
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
        <LanguageToggle />
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
