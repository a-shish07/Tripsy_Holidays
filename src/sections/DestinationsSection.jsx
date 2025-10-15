import { motion } from 'framer-motion';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { destinations } from '../data/destinations';

function DestinationsSection() {
  const spotlight = destinations.filter((destination) => destination.featured).slice(0, 2);
  const curatedList = destinations.filter((destination) => !destination.featured).slice(0, 4);

  return (
    <Container id="destinations" className="bg-white/5">
      <SectionHeading
        eyeline="Spotlight Destinations"
        title={
          <>
            Visually stunning escapes designed
            {' '}
            <span className="text-ocean">exclusively for you</span>.
          </>
        }
        subtitle="A high-touch selection of seasonal itineraries paired with private access, curated experiences, and meaningful cultural immersion."
      />
      <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-10">
          {spotlight.map((destination) => (
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.25 }}
              key={destination.id}
              className="grid gap-6 rounded-[2.5rem] border border-white/10 bg-night/70 p-6 backdrop-blur-xl md:grid-cols-[1.5fr_2fr] md:p-10"
            >
              <div className="relative overflow-hidden rounded-[2rem]">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night/70 to-transparent" />
                <span className="absolute left-6 top-6 rounded-full bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.4em] text-white/70">
                  {destination.duration}
                </span>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-[0.4em] text-white/50">
                    {destination.location}
                  </span>
                  <h3 className="font-display text-3xl text-white md:text-4xl">{destination.name}</h3>
                </div>
                <p className="text-sm leading-relaxed text-white/70 md:text-base">{destination.description}</p>
                <div className="flex flex-wrap gap-3">
                  {destination.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.3em] text-white/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-6 rounded-3xl border border-white/10 bg-white/5 px-6 py-4">
                  <div>
                    <p className="text-[0.65rem] uppercase tracking-[0.5em] text-white/40">Investment from</p>
                    <p className="font-display text-2xl text-ocean md:text-3xl">{destination.priceStarting}</p>
                  </div>
                  <Button variant="glow" className="uppercase tracking-[0.3em]">
                    Request Proposal
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        <div className="space-y-8">
          <div className="rounded-[2.5rem] border border-white/10 bg-night/75 p-8 backdrop-blur-xl">
            <h3 className="font-display text-2xl text-white">Curated Portfolio</h3>
            <p className="mt-5 text-sm leading-loose text-white/60">
              More than 120 destinations across continents, each vetted for design-forward stays, distinctive dining, and meaningful local encounters.
            </p>
            <div className="mt-6 space-y-4">
              {curatedList.map((destination) => (
                <div key={destination.id} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-white/40">{destination.location}</p>
                    <p className="font-display text-lg text-white">{destination.name}</p>
                  </div>
                  <Button variant="secondary" size="sm" className="uppercase tracking-[0.25em]">
                    View
                  </Button>
                </div>
              ))}
            </div>
            <Button variant="glow" className="mt-6 w-full uppercase tracking-[0.3em]">
              View Complete Atlas
            </Button>
          </div>
          <div className="rounded-[2.5rem] border border-ocean/30 bg-ocean/15 p-8 text-night backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.45em] text-night/60">Insider Insight</p>
            <p className="mt-4 font-display text-xl text-night/90">
              Reserve your signature celebration at least 120 days ahead to unlock exclusive upgrades and private access moments.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default DestinationsSection;