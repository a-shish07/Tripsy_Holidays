import HeroSection from '../sections/HeroSection';
import ServiceDetailsSection from '../sections/ServiceDetailsSection';
import DestinationsSection from '../sections/DestinationsSection';
import PackagesSection from '../sections/PackagesSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import WhyChooseUsSection from '../sections/WhyChooseUsSection';
import CallToActionSection from '../sections/CallToActionSection';

function HomePage() {
  return (
    <div className="space-y-0">
      <HeroSection />
      <div className="border-t border-white/10" />
      <ServiceDetailsSection />
      <div className="border-t border-white/10" />
      <DestinationsSection />
      <div className="border-t border-white/10" />
      <PackagesSection />
      <div className="border-t border-white/10" />
      <TestimonialsSection />
      <div className="border-t border-white/10" />
      <WhyChooseUsSection />
      <div className="border-t border-white/10" />
      {/* <CallToActionSection /> */}
    </div>
  );
}

export default HomePage;
