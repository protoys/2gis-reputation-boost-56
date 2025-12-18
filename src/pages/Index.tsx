import React from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import WhyReviewsSection from '@/components/WhyReviewsSection';
import HowWeWorkSection from '@/components/HowWeWorkSection';
import PackagesSection from '@/components/PackagesSection';
import CalculatorSection from '@/components/CalculatorSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <WhyReviewsSection />
          <HowWeWorkSection />
          <PackagesSection />
          <CalculatorSection />
          <FAQSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
