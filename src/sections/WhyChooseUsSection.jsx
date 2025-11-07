import { useContext } from 'react';
import { motion } from 'framer-motion';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { BookingContext } from '../App';
import { imageAssets } from '../data/images';

const pillars = [
  {
    icon: '🎨',
    title: 'Personalized Experiences',
    description:
      'Every itinerary is uniquely crafted for you, blending your preferences, passions, and travel pace into one seamless narrative.',
    stats: '98% repeat travelers',
    color: 'from-blue-50 to-blue-100/50',
    accent: 'text-blue-600',
    borderAccent: 'hover:border-blue-300',
  },
  {
    icon: '🌍',
    title: 'Trusted Global Network',
    description:
      'We partner with handpicked hotels, local guides, and experience creators who share our commitment to excellence.',
    stats: '120+ verified partners',
    color: 'from-emerald-50 to-emerald-100/50',
    accent: 'text-emerald-600',
    borderAccent: 'hover:border-emerald-300',
  },
  {
    icon: '✨',
    title: 'Expert Curation',
    description:
      'Our award-winning travel team obsesses over every detail, from local dining to hidden cultural gems, ensuring perfection.',
    stats: 'Award-winning curators',
    color: 'from-amber-50 to-amber-100/50',
    accent: 'text-amber-600',
    borderAccent: 'hover:border-amber-300',
  },
];

function WhyChooseUsSection() {
  const { openBookingForm } = useContext(BookingContext);

  return (
    <Container className="relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <SectionHeading
          alignment="center"
          eyeline="Why Choose Tripsy"
          title={
            <>
              Why Travelers Choose <span className="text-ocean">Tripsy</span>
            </>
          }
          subtitle="We don't just plan trips—we craft experiences. Here's what sets us apart."
        />
      </motion.div>

      <div className="grid gap-12 md:grid-cols-2 items-center mb-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true, amount: 0.3 }}
              className={`group relative rounded-2xl border border-slate-200 bg-gradient-to-br ${pillar.color} p-7 overflow-hidden transition-all duration-300 hover:-translate-y-2 ${pillar.borderAccent} hover:shadow-[0_20px_50px_rgba(15,23,42,0.15)]`}
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/20 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-500" />
              <div className="relative z-10">
                <div className="flex items-start gap-5 mb-5">
                  <div className="text-5xl transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">{pillar.icon}</div>
                  <div className="flex-1">
                    <p className={`text-xs uppercase tracking-[0.3em] font-bold ${pillar.accent} mb-1`}>{pillar.stats}</p>
                    <h3 className={`font-display text-xl font-bold text-slate-900 group-hover:${pillar.accent} transition-colors`}>{pillar.title}</h3>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-slate-700 font-light">{pillar.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="hidden md:block"
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-ocean/20 to-ocean/10 rounded-3xl blur-2xl opacity-75" />
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-[0_40px_80px_rgba(15,23,42,0.2)]">
              <img
                src={imageAssets.whyChooseUs}
                alt="Why Choose Tripsy"
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-slate-900/10 to-transparent" />
              
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/30 bg-white/90 backdrop-blur-md p-6 shadow-[0_20px_50px_rgba(15,23,42,0.25)]"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xl">✨</span>
                  <p className="text-xs uppercase tracking-[0.3em] font-bold text-ocean">Our Promise</p>
                </div>
                <p className="font-display text-base text-slate-900 leading-relaxed">
                  Every journey is crafted with passion, executed with precision, and cherished forever.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-ocean/5 to-ocean/10 rounded-3xl blur-xl" />
        <div className="relative rounded-3xl border border-slate-200/50 bg-gradient-to-br from-white to-slate-50/50 p-12 backdrop-blur-sm">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: '📞', label: '24/7 Support', desc: 'Always available when you need us', color: 'from-blue-500/10 to-transparent' },
              { icon: '💰', label: 'Best Price Guarantee', desc: 'Transparent pricing with no hidden fees', color: 'from-emerald-500/10 to-transparent' },
              { icon: '🔐', label: '100% Secure', desc: 'Verified and protected bookings', color: 'from-purple-500/10 to-transparent' },
              { icon: '⭐', label: '5-Star Rated', desc: 'Trusted by 4,000+ travelers', color: 'from-amber-500/10 to-transparent' },
            ].map((feature, idx) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative rounded-2xl border border-slate-200 bg-white p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(15,23,42,0.12)]">
                  <div className="text-5xl mb-4 transform group-hover:scale-125 group-hover:rotate-6 transition-transform duration-300">{feature.icon}</div>
                  <p className="font-display text-base font-bold text-slate-900 group-hover:text-ocean transition-colors mb-2">{feature.label}</p>
                  <p className="text-xs text-slate-600 leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <Button 
          variant="glow" 
          size="lg" 
          className="uppercase tracking-[0.2em]"
          onClick={openBookingForm}
        >
          Start Your Journey
        </Button>
      </motion.div>
    </Container>
  );
}

export default WhyChooseUsSection;
