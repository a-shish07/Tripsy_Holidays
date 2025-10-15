import { motion } from 'framer-motion';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { packages } from '../data/packages';

function PackagesSection() {
  return (
    <Container id="packages">
      <SectionHeading
        eyeline="Signature Collections"
        title={
          <>
            Crafted journeys with <span className="text-ocean">signature flair</span> for every explorer.
          </>
        }
        subtitle="Our collections evolve seasonally, blending immersive storytelling, elevated comfort, and responsible exploration."
      />
      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {packages.map((travelPackage, index) => (
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            key={travelPackage.id}
            className="flex h-full flex-col rounded-3xl border border-white/10 bg-night/70 p-6 backdrop-blur"
          >
            <div className="relative h-52 overflow-hidden rounded-2xl">
              <img
                src={travelPackage.image}
                alt={travelPackage.name}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
              {travelPackage.badge && (
                <span className="absolute left-4 top-4 rounded-full bg-ocean px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-night">
                  {travelPackage.badge}
                </span>
              )}
            </div>
            <div className="mt-6 flex flex-1 flex-col space-y-4">
              <h3 className="font-display text-2xl text-white">{travelPackage.name}</h3>
              <p className="text-sm leading-relaxed text-white/70">{travelPackage.description}</p>
              <ul className="space-y-2 text-sm text-white/60">
                {travelPackage.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1 w-6 rounded-full bg-ocean" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-white/40">From</p>
                <p className="font-display text-2xl text-ocean">{travelPackage.price}</p>
              </div>
              <Button variant="secondary" className="tracking-[0.35em] uppercase">
                Enquire
              </Button>
            </div>
          </motion.article>
        ))}
      </div>
    </Container>
  );
}

export default PackagesSection;