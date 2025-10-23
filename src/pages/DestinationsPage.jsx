import { motion } from 'framer-motion';
import DestinationsSection from '../sections/DestinationsSection';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';

function DestinationsPage() {
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
            eyeline="Global Destinations"
            title={
              <>
                Discover the world's most <span className="text-ocean">enchanting places</span>
              </>
            }
            subtitle="From pristine beaches and snow-capped mountains to vibrant cities and serene temples—each destination is handpicked for its unique story and authentic experiences"
          />
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="secondary" className="uppercase tracking-[0.2em]">
              All Regions
            </Button>
            <Button variant="secondary" className="uppercase tracking-[0.2em]">
              Featured Escapes
            </Button>
            <Button variant="secondary" className="uppercase tracking-[0.2em]">
              Seasonal Picks
            </Button>
          </div>
        </motion.div>
      </Container>

      <div className="border-t border-white/10" />

      <DestinationsSection />

      <div className="border-t border-white/10" />

      <Container className="bg-gradient-to-b from-transparent to-white/5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8 text-center"
        >
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.4em] text-white/50">Ready to Explore?</p>
            <h3 className="font-display text-3xl md:text-4xl text-white">
              Begin Your Discovery
            </h3>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Each destination opens doors to unforgettable moments. Let our travel artists craft your perfect escape.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button variant="glow" size="lg" className="px-10 uppercase tracking-[0.25em]">
              Plan Your Journey
            </Button>
            <Button variant="secondary" size="lg" className="px-10 uppercase tracking-[0.25em]">
              Download Atlas
            </Button>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}

export default DestinationsPage;
