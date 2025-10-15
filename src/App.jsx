import { useMemo } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './sections/HeroSection';
import ExperienceSection from './sections/ExperienceSection';
import DestinationsSection from './sections/DestinationsSection';
import PackagesSection from './sections/PackagesSection';
import ServicesSection from './sections/ServicesSection';
import TestimonialsSection from './sections/TestimonialsSection';
import WhyChooseUsSection from './sections/WhyChooseUsSection';
import CallToActionSection from './sections/CallToActionSection';
import BlogSection from './sections/BlogSection';
import NewsletterSection from './sections/NewsletterSection';
import Footer from './sections/Footer';

function App() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="bg-night font-body text-white">
      <Navigation />
      <main className="pt-32">
        <HeroSection />
        <ExperienceSection />
        <DestinationsSection />
        <PackagesSection />
        <ServicesSection />
        <TestimonialsSection />
        <WhyChooseUsSection />
        <CallToActionSection />
        <BlogSection />
        <NewsletterSection />
      </main>
      <Footer currentYear={year} />
    </div>
  );
}

export default App;