import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { packages } from '../data/packages';

function PackagesSection() {
  const navigate = useNavigate();

  return (
    <Container id="packages">
      <SectionHeading
        eyeline="Exclusive Packages"
        title={
          <>
            Curated Travel <span className="text-ocean">Collections</span>
          </>
        }
        subtitle="Expertly designed packages featuring luxury accommodations, personalized itineraries, and exclusive experiences."
      />
      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {packages.slice(0, 6).map((travelPackage, index) => (
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -12 }}
            key={travelPackage.id}
            onClick={() => navigate(`/package/${travelPackage.id}`)}
            className="group flex flex-col rounded-3xl border border-white/10 bg-gradient-to-br from-night/85 to-night/65 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-ocean/40 hover:shadow-[0_30px_70px_rgba(46,76,165,0.45)] cursor-pointer backdrop-blur"
          >
            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-night/40 to-transparent">
              <img
                src={travelPackage.image}
                alt={travelPackage.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night/70 via-night/40 to-transparent" />
              {travelPackage.badge && (
                <motion.span
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="absolute left-4 top-4 rounded-full bg-gradient-to-r from-ocean to-primary px-5 py-2.5 text-xs font-display font-bold uppercase tracking-[0.3em] text-white shadow-lg"
                >
                  ⭐ {travelPackage.badge}
                </motion.span>
              )}
            </div>

            <div className="flex flex-1 flex-col p-7 space-y-4">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.3em] text-ocean font-display font-bold">{travelPackage.duration}</p>
                <h3 className="font-display text-3xl text-white group-hover:text-ocean transition-colors leading-snug font-bold tracking-tight">{travelPackage.name}</h3>
              </div>

              <p className="text-base leading-relaxed text-white/70 font-body line-clamp-2">{travelPackage.description}</p>

              <div className="space-y-2 py-3 border-t border-white/10">
                <p className="text-xs uppercase tracking-[0.25em] text-ocean font-display font-bold">Includes</p>
                <ul className="space-y-1.5">
                  {travelPackage.includes.slice(0, 2).map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-white/65 font-body">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-ocean flex-shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-baseline gap-2 text-base pt-3">
                <span className="text-xs text-white/60 font-body">From</span>
                <span className="font-display text-3xl text-ocean font-bold">{travelPackage.price}</span>
                <span className="text-xs text-white/60 font-body">/person</span>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                className="mt-auto pt-3"
              >
                <Button variant="glow" className="w-full tracking-[0.25em] uppercase font-bold text-xs">
                  Book Journey
                </Button>
              </motion.div>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-br from-night/85 to-night/65 p-8 md:p-16 shadow-[0_35px_80px_rgba(16,28,56,0.5)] transition-all duration-300 hover:-translate-y-1 hover:border-ocean/40 backdrop-blur"
      >
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            whileHover={{ scale: 1.04, borderColor: 'rgb(14, 165, 233)' }}
            onClick={() => navigate('/packages/domestic')}
            className="rounded-3xl border border-white/10 bg-night/80 p-10 text-center cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:border-ocean/40 hover:shadow-[0_30px_70px_rgba(46,76,165,0.45)] backdrop-blur"
          >
            <p className="text-xs uppercase text-ocean font-display font-bold mb-3 tracking-[0.35em]">Explore</p>
            <h4 className="font-display text-4xl text-white mb-4 font-bold tracking-tight">Domestic Tours</h4>
            <p className="text-white/70 text-base mb-6 font-body">Discover the diverse beauty across India</p>
            <motion.p className="text-ocean font-display font-bold flex items-center justify-center gap-3 tracking-wider text-lg" whileHover={{ x: 8 }}>
              View Packages <span className="text-xl">→</span>
            </motion.p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.04, borderColor: 'rgb(14, 165, 233)' }}
            onClick={() => navigate('/packages/international')}
            className="rounded-3xl border border-slate-200 bg-white p-10 text-center cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:border-ocean/40 hover:shadow-[0_25px_60px_rgba(15,23,42,0.12)]"
          >
            <p className="text-xs uppercase text-ocean/90 font-display font-bold mb-3 tracking-[0.35em]">Explore</p>
            <h4 className="font-display text-4xl text-slate-900 mb-4 font-bold tracking-tight">International Tours</h4>
            <p className="text-slate-600 text-base mb-6 font-body">Experience wonders across the world</p>
            <motion.p className="text-ocean font-display font-bold flex items-center justify-center gap-3 tracking-wider text-lg" whileHover={{ x: 8 }}>
              View Packages <span className="text-xl">→</span>
            </motion.p>
          </motion.div>
        </div>

        <div className="mt-12 pt-12 border-t border-slate-200 text-center">
          <h3 className="font-display text-4xl md:text-5xl text-slate-900 mb-6 font-bold tracking-tight">Need Something Custom?</h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto font-body leading-relaxed text-base">
            Don't see exactly what you're looking for? Our travel experts can create a completely personalized package tailored to your preferences and budget.
          </p>
          <Button variant="glow" size="lg" className="uppercase font-bold tracking-[0.25em]">
            Create Custom Package
          </Button>
        </div>
      </motion.div>
    </Container>
  );
}

export default PackagesSection;