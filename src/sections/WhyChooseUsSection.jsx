import { motion } from 'framer-motion';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';

const pillars = [
  {
    title: 'Tailored to Your Tastes',
    description:
      'Every itinerary is co-created with you, blending preferences, passions, and pace into a seamless narrative.',
    stats: '98% repeat travelers',
  },
  {
    title: 'Trusted Global Partnerships',
    description:
      'We collaborate with handpicked hotels, guides, and experience makers who share our commitment to excellence.',
    stats: '120+ curated partners',
  },
  {
    title: 'Design-Led Approach',
    description:
      'From typography to travel maps, every touchpoint reflects the elegance and sophistication of your journey.',
    stats: 'Award-winning creative team',
  },
];

function WhyChooseUsSection() {
  return (
    <Container className="relative overflow-hidden">
      <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-right md:block">
        <div className="h-full w-full bg-gradient-to-l from-night to-night/40" />
      </div>
      <div className="relative grid gap-12 md:grid-cols-2">
        <div>
          <SectionHeading
            alignment="left"
            eyeline="Why Choose Tripsy"
            title={
              <>
                We obsess over the details so you can
                {' '}
                <span className="text-ocean">savor every moment</span>.
              </>
            }
            subtitle="From milestone celebrations to bucket-list adventures, we deliver personalized luxury with remarkable ease."
            className="md:max-w-lg"
          />
          <div className="mt-10 space-y-6">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <p className="text-xs uppercase tracking-[0.45em] text-ocean">{pillar.stats}</p>
                <h3 className="mt-4 font-display text-xl text-white">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="relative hidden h-full min-h-[420px] md:block" />
      </div>
    </Container>
  );
}

export default WhyChooseUsSection;