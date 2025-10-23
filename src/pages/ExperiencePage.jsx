import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import ExperienceSection from '../sections/ExperienceSection';
import WhyChooseUsSection from '../sections/WhyChooseUsSection';
import TestimonialsSection from '../sections/TestimonialsSection';

function ExperiencePage() {
  return (
    <div className="space-y-0">
      <Container className="bg-gradient-to-b from-white/5 to-transparent">
        <div className="space-y-16">
          <SectionHeading
            eyeline="The Tripsy Difference"
            title={
              <>
                Why our <span className="text-ocean">curated experiences</span> matter
              </>
            }
            subtitle="Discover what sets our journeys apart—from meticulous planning to unforgettable moments"
          />
        </div>
      </Container>

      <div className="border-t border-white/10" />
      
      <ExperienceSection />

      <div className="border-t border-white/10" />
      
      <WhyChooseUsSection />

      <div className="border-t border-white/10" />
      
      <Container>
        <div className="space-y-12">
          <SectionHeading
            eyeline="Testimonials"
            title="What Our Travelers Say"
            subtitle="Hear from those who've experienced the Tripsy difference"
          />
        </div>
      </Container>

      <TestimonialsSection />
    </div>
  );
}

export default ExperiencePage;
