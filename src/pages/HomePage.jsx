import HeroSection from '../sections/HeroSection';
import ExperienceSection from '../sections/ExperienceSection';
import DestinationsSection from '../sections/DestinationsSection';
import PackagesSection from '../sections/PackagesSection';
import ServicesSection from '../sections/ServicesSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import WhyChooseUsSection from '../sections/WhyChooseUsSection';
import CallToActionSection from '../sections/CallToActionSection';
import BlogSection from '../sections/BlogSection';
import NewsletterSection from '../sections/NewsletterSection';

function HomePage() {
  return (
    <div className="space-y-0">
      <HeroSection />
      <div className="border-t border-white/10" />
      <ExperienceSection />
      <div className="border-t border-white/10" />
      <DestinationsSection />
      <div className="border-t border-white/10" />
      <PackagesSection />
      <div className="border-t border-white/10" />
      <ServicesSection />
      <div className="border-t border-white/10" />
      <TestimonialsSection />
      <div className="border-t border-white/10" />
      <WhyChooseUsSection />
      <div className="border-t border-white/10" />
      <CallToActionSection />
      <div className="border-t border-white/10" />
      <BlogSection />
      <div className="border-t border-white/10" />
      <NewsletterSection />
    </div>
  );
}

export default HomePage;
