import { motion } from 'framer-motion';
import TestimonialsSection from '../sections/TestimonialsSection';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';

function TestimonialsPage() {
  return (
    <div className="space-y-0">
      <Container className="bg-gradient-to-b from-white/5 to-transparent">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <SectionHeading
            eyeline="Guest Stories"
            title={
              <>
                Journeys that <span className="text-ocean">transformed lives</span>
              </>
            }
            subtitle="Discover the authentic experiences and stories from travelers who've explored the world with Tripsy Holidays"
          />
          <div className="flex justify-center">
            <div className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-center">
              <p className="text-sm text-white/70">
                <span className="font-display text-white">4.9/5</span> rating from <span className="font-display text-white">2,500+</span> verified travelers
              </p>
            </div>
          </div>
        </motion.div>
      </Container>

      <div className="border-t border-white/10" />

      <TestimonialsSection />

      <div className="border-t border-white/10" />

      <Container className="bg-gradient-to-b from-transparent to-white/5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12 text-center"
        >
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-white/50">Your Story Matters</p>
            <h3 className="font-display text-3xl md:text-4xl text-white">
              Ready to create your unforgettable memory?
            </h3>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Join thousands of travelers who've discovered the Tripsy difference. Let's craft your next adventure together.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button variant="glow" size="lg" className="px-10 uppercase tracking-[0.25em]">
              Plan Your Journey
            </Button>
            <Button variant="secondary" size="lg" className="px-10 uppercase tracking-[0.25em]">
              Schedule Consultation
            </Button>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}

export default TestimonialsPage;
