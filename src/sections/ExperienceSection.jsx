import { motion } from 'framer-motion';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';

const highlights = [
  {
    icon: '🎯',
    title: 'Discovery Workshop',
    description:
      'We start by understanding your travel dreams, preferences, and celebration details. A personalized consultation to craft the perfect itinerary just for you.',
    duration: 'Phase 1',
    benefits: ['Personalized Planning', 'Expert Consultation', 'Budget Alignment'],
  },
  {
    icon: '✨',
    title: 'Itinerary Design',
    description:
      'Our expert curators craft unique experiences, handpick premium stays, and coordinate logistics with trusted global partners to ensure perfection.',
    duration: 'Phase 2',
    benefits: ['Exclusive Partnerships', 'Premium Stays', 'Local Experiences'],
  },
  {
    icon: '🚀',
    title: 'Seamless Execution',
    description:
      'From departure to return, our dedicated concierge team provides 24/7 support, handles surprises, and ensures every moment exceeds expectations.',
    duration: 'Phase 3',
    benefits: ['Round-the-Clock Support', 'Surprise Moments', 'Post-Trip Care'],
  },
];

function ExperienceSection() {
  return (
    <Container id="experience" className="relative overflow-hidden py-20">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <SectionHeading
        eyeline="How We Work"
        title={
          <>
            A Refined Three-Phase Process for <span className="text-ocean">Perfect Travel</span>
          </>
        }
        subtitle="From discovery to execution, we meticulously orchestrate every detail so you can focus on creating unforgettable memories."
      />
      <div className="mt-16 grid gap-8 md:grid-cols-3 relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-ocean/0 via-ocean/20 to-ocean/0 hidden md:block -translate-x-1/2" />
        
        {highlights.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="group relative"
          >
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 h-full backdrop-blur hover:border-ocean/50 hover:from-white/15 hover:to-white/8 transition-all duration-300 shadow-lg hover:shadow-ocean/20">
              <div className="flex items-start justify-between mb-6">
                <div className="text-5xl">{item.icon}</div>
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-ocean/80 bg-ocean/10 px-3 py-1 rounded-full">
                  {item.duration}
                </span>
              </div>

              <h3 className="font-display text-2xl text-white mb-3 group-hover:text-ocean transition-colors">{item.title}</h3>
              <p className="text-sm leading-relaxed text-white/70 mb-6">{item.description}</p>

              <div className="space-y-3 pt-6 border-t border-white/10">
                <p className="text-xs uppercase tracking-[0.3em] text-white/50 font-semibold">Key Benefits</p>
                <ul className="space-y-2">
                  {item.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3 text-xs text-white/70">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-ocean" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-ocean/0 via-ocean/60 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-3xl" />
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-r from-primary/10 via-ocean/10 to-primary/10 p-8 backdrop-blur"
      >
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            { number: '10+', label: 'Years of Experience' },
            { number: '25,000+', label: 'Happy Travelers' },
            { number: '98%', label: 'Satisfaction Rate' },
          ].map((stat) => (
            <div key={stat.label} className="space-y-2">
              <p className="font-display text-3xl md:text-4xl text-ocean font-bold">{stat.number}</p>
              <p className="text-sm text-white/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </Container>
  );
}

export default ExperienceSection;