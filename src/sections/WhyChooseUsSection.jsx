import { motion } from 'framer-motion';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';

const pillars = [
  {
    icon: '🎨',
    title: 'Personalized Experiences',
    description:
      'Every itinerary is uniquely crafted for you, blending your preferences, passions, and travel pace into one seamless narrative.',
    stats: '98% repeat travelers',
  },
  {
    icon: '🌍',
    title: 'Trusted Global Network',
    description:
      'We partner with handpicked hotels, local guides, and experience creators who share our commitment to excellence.',
    stats: '120+ verified partners',
  },
  {
    icon: '✨',
    title: 'Expert Curation',
    description:
      'Our award-winning travel team obsesses over every detail, from local dining to hidden cultural gems, ensuring perfection.',
    stats: 'Award-winning curators',
  },
];

function WhyChooseUsSection() {
  return (
    <Container className="relative overflow-hidden">
      <div className="grid gap-12 md:grid-cols-2 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionHeading
            alignment="left"
            eyeline="Why Choose Tripsy"
            title={
              <>
                Experience Travel <span className="text-ocean">Reimagined</span>
              </>
            }
            subtitle="We handle all the details so you can focus on creating unforgettable memories. From milestone celebrations to adventure quests, trust us to deliver."
            className="md:max-w-lg"
          />
          <div className="mt-10 space-y-6">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="group rounded-3xl border border-white/10 bg-gradient-to-br from-white/12 to-white/5 p-8 backdrop-blur hover:border-ocean/50 hover:from-white/18 hover:to-white/8 transition-all duration-300 shadow-2xl hover:shadow-ocean/30"
              >
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform">{pillar.icon}</div>
                <p className="text-xs uppercase tracking-[0.4em] text-ocean font-bold mb-2">{pillar.stats}</p>
                <h3 className="font-display text-2xl text-white group-hover:text-ocean transition-colors mb-4 leading-tight">{pillar.title}</h3>
                <p className="text-sm leading-relaxed text-white/70 font-light">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="hidden md:block"
        >
          <div className="relative h-96 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
              alt="Why Choose Tripsy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-night via-transparent to-transparent" />
            
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-night/80 backdrop-blur p-5"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-ocean font-bold">Our Promise</p>
              <p className="mt-2 font-display text-lg text-white">
                Every journey is crafted with passion, executed with precision, and cherished forever.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-20 grid sm:grid-cols-2 md:grid-cols-4 gap-6"
      >
        {[
          { icon: '📞', label: '24/7 Support', desc: 'Always available' },
          { icon: '💰', label: 'Best Price Guarantee', desc: 'Transparent pricing' },
          { icon: '🔐', label: '100% Secure', desc: 'Verified booking' },
          { icon: '⭐', label: '5-Star Rated', desc: '4,000+ reviews' },
        ].map((feature) => (
          <motion.div
            key={feature.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-7 text-center hover:border-ocean/40 hover:from-white/15 hover:to-white/8 transition-all duration-300 shadow-lg hover:shadow-ocean/20"
          >
            <div className="text-4xl mb-3 transform group-hover:scale-125 transition-transform duration-300">{feature.icon}</div>
            <p className="font-display text-base text-white group-hover:text-ocean transition-colors font-semibold">{feature.label}</p>
            <p className="text-xs text-white/60 mt-2 font-medium">{feature.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </Container>
  );
}

export default WhyChooseUsSection;
