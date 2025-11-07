import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { BookingContext } from '../App';
import { uttarakhandPackages } from '../data/uttarakhandPackages';
import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaChevronRight, FaStar } from 'react-icons/fa';

function UttarakhandPackagesPage() {
  const { openBookingForm } = useContext(BookingContext);
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="bg-night">
      <section className="relative min-h-auto overflow-hidden pt-12 md:pt-16 pb-12">
        <div className="absolute inset-0 -z-10">
          <div className="absolute right-[-10%] top-20 h-[400px] w-[400px] rounded-full bg-ocean/10 blur-3xl animate-pulse" />
          <div className="absolute left-[-15%] top-40 h-[350px] w-[350px] rounded-full bg-primary/8 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4 max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-2"
            >
              <p className="text-xs uppercase tracking-[0.3em] bg-gradient-to-r from-ocean via-primary to-ocean bg-clip-text text-transparent font-bold">Uttarakhand Adventures</p>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-white leading-snug">
                Explore <span className="bg-gradient-to-r from-ocean to-primary bg-clip-text text-transparent">Divine Peaks</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm md:text-base text-white/80 max-w-2xl mx-auto leading-relaxed font-light"
            >
              Curated packages blending spiritual journeys with thrilling mountain adventures.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col md:flex-row gap-3 justify-center pt-2"
            >
              <Button variant="glow" size="sm" className="uppercase tracking-[0.15em] px-8 text-sm">
                View Packages
              </Button>
              <Button variant="secondary" size="sm" className="uppercase tracking-[0.15em] px-8 text-sm">
                Contact
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      <section className="relative py-12 border-t border-white/10">
        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {uttarakhandPackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                variants={cardVariants}
                whileHover="hover"
                onClick={() => navigate(`/packages/uttarakhand/${pkg.id}`)}
                className="group cursor-pointer h-full"
              >
                <div className="relative h-full rounded-2xl border border-ocean/20 hover:border-ocean/60 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-md hover:bg-gradient-to-br hover:from-white/15 hover:to-white/8 transition-all duration-300 hover:shadow-2xl hover:shadow-ocean/20 overflow-hidden flex flex-col"
                >
                  <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-ocean/10 to-transparent rounded-full -top-20 -right-20" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-primary/10 to-transparent rounded-full -bottom-16 -left-16" />
                  </div>

                  <div className="relative space-y-4 flex-1 flex flex-col">
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                      className="inline-block w-fit"
                    >
                      <span className="px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.2em] bg-gradient-to-r from-ocean/30 to-primary/30 text-ocean border border-ocean/40">
                        Package Option {index + 1} of 6
                      </span>
                    </motion.div>

                    <div>
                      <h3 className="text-2xl font-display font-bold text-white group-hover:text-ocean transition-colors leading-tight mb-2">
                        {pkg.shortTitle}
                      </h3>
                      <p className="text-sm text-white/60 line-clamp-2">{pkg.title}</p>
                    </div>

                    <div className="space-y-3 text-sm text-white/70 py-4 border-y border-ocean/10">
                      <div className="flex items-start gap-3">
                        <FaCalendarAlt className="text-ocean w-4 h-4 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs text-ocean/70 uppercase font-semibold">Duration</p>
                          <p className="text-white">{pkg.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <FaMapMarkerAlt className="text-ocean w-4 h-4 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs text-ocean/70 uppercase font-semibold">Destinations</p>
                          <p className="text-white">{pkg.destinations.join(' → ')}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <FaClock className="text-ocean w-4 h-4 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs text-ocean/70 uppercase font-semibold">Perfect For</p>
                          <p className="text-white text-sm">{pkg.bestFor}</p>
                        </div>
                      </div>
                    </div>

                    <div className="py-4">
                      <p className="text-xs text-ocean/70 uppercase font-semibold mb-3">Highlights</p>
                      <div className="flex flex-wrap gap-2">
                        {pkg.highlights.slice(0, 4).map((highlight, idx) => (
                          <span key={idx} className="text-xs px-3 py-1.5 rounded-lg bg-ocean/15 text-ocean/90 border border-ocean/30 hover:bg-ocean/25 transition-colors">
                            {highlight}
                          </span>
                        ))}
                        {pkg.highlights.length > 4 && (
                          <span className="text-xs px-3 py-1.5 rounded-lg bg-primary/15 text-primary/90 border border-primary/30">
                            +{pkg.highlights.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>

                    <motion.div
                      className="mt-auto pt-4 flex items-center justify-between border-t border-ocean/10 group-hover:text-ocean transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-sm font-semibold text-ocean">View Full Details</span>
                      <FaChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>



      <section className="relative py-12 border-t border-white/10 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-0 top-1/2 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-ocean/5 blur-3xl" />
        </div>

        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group relative rounded-2xl border border-ocean/30 hover:border-ocean/60 bg-gradient-to-br from-ocean/5 via-white/3 to-primary/5 p-8 md:p-10 text-center space-y-4 backdrop-blur-lg transition-all duration-300 hover:shadow-lg hover:shadow-ocean/15 overflow-hidden"
          >
            <div className="relative space-y-2">
              <p className="text-xs uppercase tracking-[0.3em] bg-gradient-to-r from-ocean to-primary bg-clip-text text-transparent font-bold">
                Begin Your Journey
              </p>
              <h2 className="font-display text-2xl md:text-3xl text-white font-bold leading-snug">
                Ready to Explore <span className="bg-gradient-to-r from-ocean to-primary bg-clip-text text-transparent">Uttarakhand?</span>
              </h2>
            </div>

            <p className="text-sm text-white/70 max-w-xl mx-auto leading-relaxed font-light">
              Book your adventure today and create unforgettable memories in the Himalayas.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Button
                variant="glow"
                size="sm"
                className="uppercase tracking-[0.15em] px-8 text-sm"
                onClick={openBookingForm}
              >
                Book Now
              </Button>
              <Button
                variant="secondary"
                size="sm"
                className="uppercase tracking-[0.15em] px-8 text-sm"
              >
                Learn More
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}

export default UttarakhandPackagesPage;
