import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { packages } from '../data/packages';

function DestinationsSection() {
  const navigate = useNavigate();
  const internationalPackages = packages.filter(p => p.category === 'International');
  const featuredPackage = internationalPackages.find(p => p.badge === 'Popular') || internationalPackages[0];
  const otherPackages = internationalPackages.filter(p => p.id !== featuredPackage?.id).slice(0, 4);
  
  const subtitle = 'Explore world-class international destinations with curated packages including pristine beaches, cultural experiences, luxury resorts, and unforgettable adventures.';

  return (
    <Container id="destinations">
      <SectionHeading
        eyeline="International Experiences"
        title={
          <>
            Explore Our <span className="text-ocean">International Packages</span>
          </>
        }
        subtitle={subtitle}
      />
      <div className="mt-16 space-y-12">
        {featuredPackage && (
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.25 }}
            className="group grid gap-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/12 to-white/5 p-8 backdrop-blur-xl md:grid-cols-[1.5fr_2fr] md:p-12 hover:border-ocean/60 hover:from-white/15 hover:to-white/8 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-ocean/25 cursor-pointer"
            onClick={() => navigate(`/package/${featuredPackage.id}`)}
          >
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src={featuredPackage.image}
                alt={featuredPackage.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-transparent to-transparent" />
              <span className="absolute left-6 top-6 rounded-full bg-gradient-to-r from-ocean to-primary px-5 py-2.5 text-xs font-display font-bold uppercase tracking-[0.3em] text-white shadow-lg">
                ⭐ Featured • {featuredPackage.duration}
              </span>
            </div>
            <div className="space-y-5">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.4em] text-ocean font-display font-bold">
                  🌍 {featuredPackage.subcategory}
                </span>
                <h3 className="font-display text-4xl text-white md:text-5xl group-hover:text-ocean transition-colors font-bold tracking-tight">
                  {featuredPackage.name}
                </h3>
              </div>
              <p className="text-lg leading-relaxed text-white/80 font-body">
                {featuredPackage.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {featuredPackage.activities?.slice(0, 3).map((activity) => (
                  <span
                    key={activity}
                    className="rounded-full border border-ocean/40 bg-ocean/15 px-4 py-2 text-xs font-display font-semibold uppercase tracking-[0.25em] text-ocean hover:bg-ocean/25 transition-colors"
                  >
                    {activity}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between pt-6 border-t border-white/10">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/60 font-display font-bold">Starting From</p>
                  <p className="font-display text-3xl text-ocean mt-1 font-bold">{featuredPackage.priceLabel}</p>
                </div>
                <Button variant="glow" className="uppercase tracking-[0.3em] font-bold text-sm">
                  View Package
                </Button>
              </div>
            </div>
          </motion.article>
        )}

        <div>
          <h3 className="font-display text-3xl text-white mb-8 font-bold tracking-tight">More International Packages</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {otherPackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                onClick={() => navigate(`/package/${pkg.id}`)}
                className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 to-white/3 overflow-hidden hover:bg-white/12 hover:border-ocean/40 transition-all cursor-pointer hover:shadow-lg hover:shadow-ocean/20"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-transparent to-transparent" />
                  {pkg.badge && (
                    <span className="absolute top-3 right-3 px-3 py-1 bg-gradient-to-r from-ocean to-primary rounded-full text-xs font-bold text-white">
                      {pkg.badge}
                    </span>
                  )}
                </div>
                <div className="p-5 space-y-3">
                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-[0.3em] text-ocean font-display font-bold">{pkg.subcategory}</p>
                    <p className="font-display text-lg text-white font-bold group-hover:text-ocean transition-colors">{pkg.name}</p>
                  </div>
                  <p className="text-sm text-white/70 font-body line-clamp-2">{pkg.description}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-white/10">
                    <div className="flex gap-3 text-xs text-white/60">
                      <span>📅 {pkg.duration}</span>
                      <span>💰 {pkg.priceLabel}</span>
                    </div>
                    <span className="text-ocean group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-3xl border-2 border-ocean/50 bg-gradient-to-br from-ocean/25 to-primary/15 p-8 md:p-12 backdrop-blur-xl hover:shadow-lg hover:shadow-ocean/20 transition-all duration-300"
        >
          <div className="flex items-start gap-4">
            <span className="text-4xl flex-shrink-0">✈️</span>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-ocean font-display font-bold mb-2">International Travel Tip</p>
              <p className="font-display text-xl text-white font-bold leading-relaxed">
                Book your international package 60-90 days in advance to secure best rates, visa assistance, travel insurance, and premium accommodations at your dream destination.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </Container>
  );
}

export default DestinationsSection;
