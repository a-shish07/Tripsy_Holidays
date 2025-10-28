import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { packages } from '../data/packages';

function InternationalPackagesPage() {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState('All');

  const internationalPackages = packages.filter(pkg => pkg.category === 'International');
  const categories = ['All', ...new Set(internationalPackages.map(pkg => pkg.subcategory))];

  const filteredPackages = selectedFilter === 'All'
    ? internationalPackages
    : internationalPackages.filter(pkg => pkg.subcategory === selectedFilter);

  return (
    <div className="space-y-0">
      <Container className="bg-gradient-to-b from-white/5 to-transparent">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <SectionHeading
            eyeline="International Tours"
            title={
              <>
                Explore the <span className="text-ocean">World</span>
              </>
            }
            subtitle="Discover exotic destinations across the globe. From tropical islands to urban marvels, experience world-class travel experiences with our international packages."
          />
        </motion.div>
      </Container>

      <div className="border-t border-white/10" />

      <Container id="international-packages">
        <div className="space-y-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedFilter(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full text-sm font-semibold tracking-wide transition-all ${
                  selectedFilter === category
                    ? 'bg-ocean text-white shadow-lg shadow-ocean/50'
                    : 'bg-white/10 text-white/70 hover:bg-white/20 border border-white/20'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPackages.map((pkg, index) => (
              <motion.article
                key={pkg.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                onClick={() => navigate(`/package/${pkg.id}`)}
                className="group flex flex-col rounded-xl border border-white/10 bg-gradient-to-br from-white/8 to-white/3 overflow-hidden backdrop-blur hover:border-ocean/50 transition-all duration-300 hover:shadow-lg hover:shadow-ocean/20 cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-night/20 to-transparent" />
                  {pkg.badge && (
                    <motion.span
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      viewport={{ once: true }}
                      className="absolute left-4 top-4 rounded-full bg-gradient-to-r from-ocean to-primary px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-white shadow-lg"
                    >
                      ⭐ {pkg.badge}
                    </motion.span>
                  )}
                  <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-white/10 backdrop-blur px-3 py-1.5 rounded-full">
                    <span className="text-yellow-400">⭐</span>
                    <span className="text-sm font-semibold">{pkg.rating}</span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6 space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-xs uppercase tracking-[0.25em] text-ocean font-bold">{pkg.duration}</p>
                      <p className="text-xs text-white/50">({pkg.reviewCount} reviews)</p>
                    </div>
                    <h3 className="font-display text-lg text-white group-hover:text-ocean transition-colors leading-snug">
                      {pkg.name}
                    </h3>
                  </div>

                  <p className="text-sm leading-relaxed text-white/70 font-light line-clamp-2">
                    {pkg.description}
                  </p>

                  <div className="space-y-2 py-3 border-t border-white/10">
                    <p className="text-xs uppercase tracking-[0.2em] text-white/50 font-bold">Highlights</p>
                    <div className="flex flex-wrap gap-1">
                      {pkg.highlights.slice(0, 3).map((highlight) => (
                        <span key={highlight} className="text-xs bg-ocean/20 text-ocean px-2 py-1 rounded-full">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-baseline gap-1 text-sm pt-2">
                    <span className="text-xs text-white/50">From</span>
                    <span className="font-display text-2xl text-ocean font-bold">{pkg.priceLabel}</span>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-auto pt-2"
                  >
                    <Button variant="glow" className="w-full tracking-[0.2em] uppercase font-bold text-xs">
                      View Details
                    </Button>
                  </motion.div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPackages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-white/50 text-lg">No packages found for this category.</p>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}

export default InternationalPackagesPage;
