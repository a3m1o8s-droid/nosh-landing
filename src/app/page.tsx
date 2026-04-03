import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Categories } from "@/components/Categories";
import { SocialProof } from "@/components/SocialProof";
import { EmailForm } from "@/components/EmailForm";
import { Footer } from "@/components/Footer";
import { ScrollAnimator } from "@/components/ScrollAnimator";

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <ScrollAnimator />

      {/* Hero */}
      <Hero />

      {/* How it works */}
      <HowItWorks />

      {/* Categories */}
      <Categories />

      {/* Social proof */}
      <SocialProof />

      {/* Second CTA */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-4">
            רוצה לקבל את ההמלצה הראשונה? 🚀
          </h2>
          <p className="text-gray-500 mb-8">
            השאר מייל ונעדכן אותך ברגע ש-Nosh מוכן
          </p>
          <EmailForm />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
