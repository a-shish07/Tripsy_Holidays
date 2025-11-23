import { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../components/Container';
import Button from '../components/Button';
import Policies from '../components/Policies';
import { BookingContext } from '../App';
import { uttarakhandPackages } from '../data/uttarakhandPackages';
import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaCheckCircle, FaArrowLeft, FaChevronRight, FaStar } from 'react-icons/fa';

function UttarakhandPackageDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { openBookingForm } = useContext(BookingContext);
  const [expandedDay, setExpandedDay] = useState(null);
  
  const package_ = uttarakhandPackages.find(p => p.id === parseInt(id));

  if (!package_) {
    return (
      <div className="bg-night min-h-screen flex items-center justify-center">
        <Container>
          <div className="text-center space-y-6">
            <h1 className="text-4xl font-display font-bold text-white">Package Not Found</h1>
            <p className="text-white/70 text-lg">The package you're looking for doesn't exist.</p>
            <Button variant="glow" onClick={() => navigate('/packages/uttarakhand')}>
              Back to Packages
            </Button>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="bg-night">
      <section className="relative min-h-auto overflow-hidden pt-12 md:pt-16 pb-10" style={{ backgroundImage: `url(${package_.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
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
              onClick={() => navigate('/packages/uttarakhand')}
              className="flex items-center gap-2 text-ocean/90 hover:text-ocean transition-colors text-base font-semibold uppercase tracking-[0.2em]"
            >
              <FaArrowLeft className="w-3 h-3" />
              Back
            </motion.button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-1.5"
            >
              <p className="text-base uppercase tracking-[0.3em] bg-gradient-to-r from-ocean to-primary bg-clip-text text-transparent font-bold">Package {package_.id} of 6</p>
              <h1 className="text-3xl md:text-4xl font-display font-bold text-white leading-snug">
                {package_.shortTitle}
              </h1>
              <p className="text-base text-white/70 font-light">{package_.title}</p>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      <section className="relative py-8 border-t border-white/10">
        <Container>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.08, delayChildren: 0.2 }}
            className="grid md:grid-cols-3 gap-4"
          >
            {[
              { icon: FaCalendarAlt, label: 'Duration', value: package_.duration },
              { icon: FaMapMarkerAlt, label: 'Pickup Point', value: package_.pickup },
              { icon: FaClock, label: 'Best For', value: package_.bestFor }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08 }}
                className="rounded-lg border border-ocean/20 hover:border-ocean/40 bg-gradient-to-br from-white/5 to-white/2 hover:from-white/8 hover:to-white/4 p-4 transition-all"
              >
                <div className="flex items-center gap-2 mb-2">
                  <item.icon className="text-ocean w-4 h-4" />
                  <span className="text-base uppercase tracking-[0.15em] text-ocean/80 font-semibold">{item.label}</span>
                </div>
                <p className="text-white font-semibold text-base">{item.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      <section className="relative py-8 border-t border-white/10">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid md:grid-cols-2 gap-6"
          >
            <div>
              <h3 className="text-lg font-display font-bold text-white mb-4 flex items-center gap-2">
                <FaStar className="text-ocean w-5 h-5" />
                Highlights
              </h3>
              <ul className="space-y-2">
                {package_.highlights.map((highlight, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                    className="flex gap-2 text-white/80 text-base"
                  >
                    <FaStar className="text-ocean w-3 h-3 flex-shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-display font-bold text-white mb-4 flex items-center gap-2">
                <FaClock className="text-ocean w-5 h-5" />
                Activities
              </h3>
              <ul className="space-y-2">
                {package_.activities.map((activity, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                    className="flex gap-2 text-white/80 text-base"
                  >
                    <FaCheckCircle className="text-primary w-3 h-3 flex-shrink-0 mt-0.5" />
                    <span>{activity}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </Container>
      </section>

      <section className="relative py-8 border-t border-white/10">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-display font-bold text-white">Itinerary</h3>
            <div className="space-y-4">
              {package_.itinerary.map((day, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.07 }}
                  className="rounded-lg border border-ocean/20 hover:border-ocean/40 bg-white/4 hover:bg-white/6 transition-all cursor-pointer overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedDay(expandedDay === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-4 hover:bg-ocean/4 transition-colors"
                  >
                    <div className="flex items-center gap-3 flex-1 text-left">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-ocean/20 text-ocean font-bold text-base">
                        {day.day}
                      </span>
                      <div>
                        <p className="text-white font-semibold text-base">{day.title}</p>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedDay === idx ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaChevronRight className="text-ocean w-4 h-4" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {expandedDay === idx && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="border-t border-ocean/15 bg-gradient-to-b from-ocean/3 to-transparent"
                      >
                        <ul className="p-4 space-y-2">
                          {day.details.map((detail, detailIdx) => (
                            <motion.li
                              key={detailIdx}
                              initial={{ opacity: 0, x: -8 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: detailIdx * 0.04 }}
                              className="flex gap-2 text-white/70 text-base"
                            >
                              <span className="text-ocean flex-shrink-0 mt-1">•</span>
                              <span>{detail}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      <section className="relative py-8 border-t border-white/10">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-3"
          >
            <h3 className="text-lg font-display font-bold text-white">Destinations</h3>
            <div className="flex flex-wrap gap-2">
              {package_.destinations.map((dest, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.04 }}
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-ocean/15 to-primary/15 text-white border border-ocean/25 font-medium text-base flex items-center gap-1.5"
                >
                  <FaMapMarkerAlt className="w-3 h-3 text-ocean" />
                  {dest}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      <section className="relative py-8 border-t border-white/10">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="grid md:grid-cols-2 gap-6"
          >
            <div>
              <h3 className="text-lg font-display font-bold text-white mb-3 flex items-center gap-2">
                <FaCheckCircle className="text-ocean w-4 h-4" />
                Included
              </h3>
              <ul className="space-y-1.5">
                {package_.inclusions.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                    className="flex gap-2 text-white/80 text-base"
                  >
                    <FaCheckCircle className="text-ocean w-3 h-3 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-display font-bold text-white mb-3 flex items-center gap-2">
                <span className="text-primary text-lg">✕</span>
                Not Included
              </h3>
              <ul className="space-y-1.5">
                {package_.exclusions.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                    className="flex gap-2 text-white/80 text-base"
                  >
                    <span className="text-primary/70 flex-shrink-0 mt-0.5 text-base">−</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </Container>
      </section>

      <Policies />

      <section className="relative py-10 border-t border-white/10">
        <Container>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center space-y-3"
          >
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white">
              <span className="bg-gradient-to-r from-ocean to-primary bg-clip-text text-transparent">Book Your Adventure</span>
            </h3>
            <p className="text-base text-white/70 max-w-xl mx-auto leading-relaxed font-light">
              Secure your spot on this {package_.shortTitle} journey today.
            </p>
            <div className="flex flex-col md:flex-row gap-3 justify-center pt-2">
              <Button variant="glow" size="base" className="uppercase tracking-[0.15em] px-8 text-base" onClick={openBookingForm}>
                Reserve Now
              </Button>
              <Button variant="secondary" size="base" className="uppercase tracking-[0.15em] px-8 text-base" onClick={() => navigate('/packages/uttarakhand')}>
                View All
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}

export default UttarakhandPackageDetailPage;
