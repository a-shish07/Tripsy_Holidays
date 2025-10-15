import { motion } from 'framer-motion';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';

const highlights = [
  {
    title: 'Discovery Workshop',
    description:
      'A collaborative session to decode your travel style, celebration details, and the emotions you want to feel on the journey.',
    duration: 'Week 1',
  },
  {
    title: 'Designing the Itinerary',
    description:
      'We craft layered experiences, handpick stays, and orchestrate logistics with our trusted global partners.',
    duration: 'Weeks 2-3',
  },
  {
    title: 'Flawless Execution',
    description:
      'A dedicated concierge team supports you end-to-end with 24/7 assistance, curated surprises, and post-trip moments.',
    duration: 'Departure +',
  },
];

function ExperienceSection() {
  return (
    <Container id="experience" className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      <SectionHeading
        eyeline="The Tripsy Approach"
        title={
          <>
            A refined, three-phase process that brings
            {' '}
            <span className="text-ocean">clarity to luxury travel</span>.
          </>
        }
        subtitle="From idea to execution, we choreograph every detail so you can stay present, connected, and inspired."
      />
      <div className="grid gap-8 md:grid-cols-3">
        {highlights.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            viewport={{ once: true, amount: 0.3 }}
            className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-lg shadow-ocean/10"
          >
            <span className="text-xs uppercase tracking-[0.4em] text-white/50">{item.duration}</span>
            <h3 className="mt-4 font-display text-2xl text-white">{item.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-white/70">{item.description}</p>
            <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-ocean/0 via-ocean/60 to-primary/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </motion.div>
        ))}
      </div>
    </Container>
  );
}

export default ExperienceSection;