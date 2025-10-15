import { motion } from 'framer-motion';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import { services } from '../data/services';

function ServicesSection() {
  return (
    <Container id="services" className="bg-night/40">
      <SectionHeading
        eyeline="Our Expertise"
        title={
          <>
            Seamless service with <span className="text-ocean">artisanal precision</span>.
          </>
        }
        subtitle="Every itinerary is shaped by specialists who anticipate needs, orchestrate details, and elevate every experience."
      />
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            viewport={{ once: true, amount: 0.2 }}
            className="group flex flex-col gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between">
              <span className="text-3xl">{service.icon}</span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-[0.6rem] uppercase tracking-[0.4em] text-white/50">
                {service.category}
              </span>
            </div>
            <h3 className="font-display text-2xl text-white">{service.title}</h3>
            <p className="text-sm leading-relaxed text-white/70">{service.description}</p>
            <span className="mt-auto text-xs uppercase tracking-[0.35em] text-ocean/80 group-hover:text-ocean">
              View sample itinerary ↗
            </span>
          </motion.div>
        ))}
      </div>
    </Container>
  );
}

export default ServicesSection;