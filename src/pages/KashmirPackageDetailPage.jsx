import { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../components/Container';
import Button from '../components/Button';
import Policies from '../components/Policies';
import { BookingContext } from '../App';
import { kashmirPackages } from '../data/kashmirPackages';
import { imageAssets } from '../data/images';
import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaCheckCircle, FaArrowLeft, FaChevronRight, FaStar } from 'react-icons/fa';

function KashmirPackageDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { openBookingForm } = useContext(BookingContext);
  const [expandedDay, setExpandedDay] = useState(null);

  const package_ = kashmirPackages.find(p => p.id === parseInt(id));

  if (!package_) {
    return (
      <div className="bg-night min-h-screen flex items-center justify-center">
        <Container>
          <div className="text-center space-y-6">
            <h1 className="text-4xl font-display font-bold text-white">Package Not Found</h1>
            <p className="text-white/70 text-lg">The package you're looking for doesn't exist.</p>
            <Button variant="glow" onClick={() => navigate('/packages/kashmir')}>
              Back to Kashmir Packages
            </Button>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="bg-night">
      <section className="relative min-h-auto overflow-hidden pt-12 md:pt-16 pb-10" style={{ backgroundImage: `url(${imageAssets.packages.himachal})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black/40 -z-10" />
        <div className="absolute inset-0 -z-10">
          <div className="absolute right-[-10%] top-20 h-[350px] w-[350px] rounded-full bg-ocean/10 blur-3xl animate-pulse" />
          <div className="absolute left-[-15%] top-40 h-[300px] w-[300px] rounded-full bg-primary/8 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              onClick={() => navigate('/packages/kashmir')}
              whileHover={{ x: -5 }}
              className="flex items-center gap-2 text-ocean hover:text-primary transition-colors"
            >
              <FaArrowLeft className="w-4 h-4" />
              <span className="text-sm font-semibold uppercase tracking-wide">Back to Kashmir Packages</span>
            </motion.button>

            <div className="space-y-2">
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xs uppercase tracking-[0.3em] bg-gradient-to-r from-ocean via-primary to-ocean bg-clip-text text-transparent font-bold"
              >
                Kashmir Adventures
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl font-display font-bold text-white leading-snug"
              >
                {package_.shortTitle}
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 text-sm"
            >
              <div className="flex items-center gap-2">
                <FaCalendarAlt className="text-ocean w-4 h-4" />
                <span className="text-white/70">{package_.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-ocean w-4 h-4" />
                <span className="text-white/70">{package_.destinations.join(' → ')}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="text-ocean w-4 h-4" />
                <span className="text-white/70">{package_.bestFor}</span>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      <section className="relative py-12 border-t border-white/10">
        <Container>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-display text-3xl text-white mb-6">Day-by-Day Itinerary</h2>
                <div className="space-y-4">
                  {package_.itinerary.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="rounded-xl border border-white/10 bg-white/5 p-6 hover:border-ocean/50 transition-all"
                    >
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-ocean to-primary flex items-center justify-center">
                            <span className="font-bold text-white">D{item.day}</span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-display text-xl text-white mb-2">{item.title}</h3>
                          <div className="space-y-2">
                            {item.details.map((detail, idx) => (
                              <p key={idx} className="text-white/70 text-sm leading-relaxed">
                                • {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-display text-3xl text-white mb-6">Activities</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {package_.activities.map((activity) => (
                    <div key={activity} className="rounded-lg border border-ocean/50 bg-ocean/10 px-4 py-3">
                      <p className="text-sm text-ocean font-semibold">{activity}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-xl border border-white/10 bg-white/5 p-6 space-y-4 sticky top-32">
                <h3 className="font-display text-xl text-white">Highlights</h3>
                <div className="space-y-2">
                  {package_.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center gap-3 text-sm text-white/70">
                      <span className="text-ocean text-lg">✓</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-white/10 pt-4 space-y-3">
                  <p className="text-xs uppercase text-white/50 font-bold">Inclusions</p>
                  <div className="space-y-2">
                    {package_.inclusions.slice(0, 4).map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs text-white/70">
                        <FaCheckCircle className="text-ocean w-3 h-3 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                    {package_.inclusions.length > 4 && (
                      <p className="text-xs text-ocean/70">+{package_.inclusions.length - 4} more inclusions</p>
                    )}
                  </div>
                </div>

                <div className="border-t border-white/10 pt-4 space-y-3">
                  <p className="text-xs uppercase text-white/50 font-bold">Exclusions</p>
                  <div className="space-y-2">
                    {package_.exclusions.slice(0, 3).map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs text-white/70">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500/50 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                    {package_.exclusions.length > 3 && (
                      <p className="text-xs text-red-400/70">+{package_.exclusions.length - 3} more exclusions</p>
                    )}
                  </div>
                </div>

                <div className="border-t border-white/10 pt-4 space-y-3">
                  <p className="text-xs uppercase text-white/50 font-bold">Questions?</p>
                  <Button variant="secondary" className="w-full" size="sm" onClick={openBookingForm}>
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Policies />

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
                Ready to Explore <span className="bg-gradient-to-r from-ocean to-primary bg-clip-text text-transparent">Kashmir?</span>
              </h2>
            </div>

            <p className="text-sm text-white/70 max-w-xl mx-auto leading-relaxed font-light">
              Book your adventure today and create unforgettable memories in Paradise on Earth.
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

export default KashmirPackageDetailPage;