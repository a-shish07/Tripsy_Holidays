import { motion } from 'framer-motion';
import Button from '../components/Button';
import Badge from '../components/Badge';

function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] overflow-hidden bg-hero-gradient pt-28"
    >
      <div className="absolute inset-0">
        <div className="absolute right-[-10%] top-14 h-[480px] w-[480px] rounded-full bg-ocean/30 blur-3xl" />
        <div className="absolute left-[-20%] bottom-[-15%] h-[420px] w-[420px] rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_55%)]" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-24 pt-12 md:flex-row md:px-12 lg:px-24 lg:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl space-y-10"
        >
          <Badge className="bg-white/10 text-white/80">
            Tailor-made escapes for modern explorers
          </Badge>
          <div className="space-y-6">
            <h1 className="font-display text-4xl leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Luxury travel, curated with
              {' '}
              <span className="text-ocean">artful precision</span>.
            </h1>
            <p className="text-lg text-white/70 md:text-xl">
              We craft immersive itineraries that blend design, culture, and comfort—ensuring every journey feels
              effortless yet unforgettable. From first inspiration to the final toast, our travel artists handle it all.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button variant="glow" size="lg" className="px-10 uppercase tracking-[0.25em]">
              Start Your Brief
            </Button>
            <Button variant="secondary" size="lg" className="px-10 uppercase tracking-[0.25em]">
              Explore Case Studies
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
            {[
              { label: 'Signature itineraries delivered', value: '15k+' },
              { label: 'Global travel curators', value: '35' },
              { label: 'Guest satisfaction score', value: '4.9/5' },
              { label: 'Exclusive partnerships', value: '120+' },
            ].map((item) => (
              <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-4 text-center">
                <p className="font-display text-2xl text-white">{item.value}</p>
                <p className="text-[0.7rem] uppercase tracking-[0.35em] text-white/50">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative flex-1"
        >
          <div className="relative h-full min-h-[420px]">
            <div className="absolute inset-0 rounded-[2.5rem] border border-white/10 bg-white/5" />
            <div className="absolute inset-4 overflow-hidden rounded-[2.2rem]">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80"
                alt="Luxury travel experience"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute left-1/2 top-6 w-[85%] -translate-x-1/2 rounded-full border border-white/10 bg-night/90 px-6 py-4 backdrop-blur">
              <p className="text-sm uppercase tracking-[0.4em] text-ocean">Tailored journeys</p>
              <p className="mt-1 font-display text-lg text-white/90">
                "We listen beyond the itinerary to design memories you will always treasure."
              </p>
            </div>
            <div className="absolute -bottom-10 right-6 w-48 rounded-3xl border border-white/10 bg-night/80 p-5 shadow-glow backdrop-blur">
              <p className="text-xs uppercase tracking-[0.4em] text-white/60">Featured Now</p>
              <p className="mt-3 font-display text-lg text-white">Northern Lights Quest</p>
              <p className="text-sm text-ocean">Iceland, Dec – Mar</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;