import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { BookingContext } from '../App';
import { himachalPackages } from '../data/himachalPackages';
import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaChevronRight, FaStar } from 'react-icons/fa';

function HimachalPackagesPage() {
  const { openBookingForm } = useContext(BookingContext);
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);

  const himachalImages = [
    '/assests/Maligne Lake Spirit Island, Canada.jpg',
    '/assests/Breathtaking Nature Landscape Image Ideas.jpg',
    '/assests/Breathtaking Nature Scenery Landscape Image.jpg'
  ];

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
    <div className="space-y-0">
      <Container className="pt-8">
        <motion.button
          onClick={() => navigate(-1)}
          whileHover={{ x: -5 }}
          className="flex items-center gap-2 text-ocean hover:text-primary transition-colors mb-8"
        >
          <span>←</span>
          <span className="text-sm font-semibold uppercase tracking-wide">Back</span>
        </motion.button>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="rounded-2xl overflow-hidden border border-white/10">
              <img
                src={himachalImages[selectedImage]}
                alt="Himachal Pradesh Landscape"
                className="w-full h-96 object-cover"
              />
            </div>
            {himachalImages.length > 1 && (
              <div className="grid grid-cols-3 gap-2">
                {himachalImages.map((image, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    whileHover={{ scale: 1.05 }}
                    className={`rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index
                        ? 'border-ocean'
                        : 'border-white/20 hover:border-ocean/50'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Himachal ${index + 1}`}
                      className="w-full h-20 object-cover"
                    />
                  </motion.button>
                ))}
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <span className="inline-block bg-ocean/20 text-ocean px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-3">
                ⭐ Mountain Paradise
              </span>
              <h1 className="font-display text-4xl md:text-5xl text-white mb-3">Himachal Adventures</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400 text-lg">★</span>
                  <span className="text-white font-semibold">4.9</span>
                  <span className="text-white/50">(2,500+ reviews)</span>
                </div>
              </div>
              <p className="text-white/70 text-lg leading-relaxed">
                Discover the breathtaking beauty of Himachal Pradesh with our curated packages. From the snow-capped peaks of Manali and Shimla to the serene valleys of Kullu and the adventure capital of Himachal, experience the perfect blend of adventure, spirituality, and natural splendor in the lap of the mighty Himalayas.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs uppercase text-white/50 font-bold mb-1">Duration</p>
                  <p className="text-2xl font-display text-ocean font-bold">4-7 Days</p>
                </div>
                <div>
                  <p className="text-xs uppercase text-white/50 font-bold mb-1">Group Size</p>
                  <p className="text-2xl font-display text-ocean font-bold">2-20 people</p>
                </div>
                <div>
                  <p className="text-xs uppercase text-white/50 font-bold mb-1">Best Time</p>
                  <p className="font-semibold text-white">Mar - Jun, Sep - Nov</p>
                </div>
                <div>
                  <p className="text-xs uppercase text-white/50 font-bold mb-1">Starting From</p>
                  <p className="text-2xl font-display text-primary font-bold">₹15,000</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-xs uppercase text-white/50 font-bold tracking-wide">What's Included</p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Hotel Accommodations',
                  'Daily Meals',
                  'Transportation',
                  'Professional Guide',
                  'Adventure Activities',
                  'Temple Entry Fees'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-white/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-ocean flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="glow" size="lg" className="flex-1 uppercase tracking-wide" onClick={() => document.getElementById('packages-section').scrollIntoView({ behavior: 'smooth' })}>
                Explore Packages
              </Button>
              <Button variant="secondary" size="lg" className="flex-1 uppercase tracking-wide" onClick={openBookingForm}>
                Book Now
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>

      <section id="packages-section" className="relative py-12 border-t border-white/10">
        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {himachalPackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                variants={cardVariants}
                whileHover="hover"
                onClick={() => navigate(`/packages/himachal/${pkg.id}`)}
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
                        Package Option {index + 1} of {himachalPackages.length}
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
                          <p className="text-xs text-ocean/70 uppercase font-semibold">Best For</p>
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
                Ready to Explore <span className="bg-gradient-to-r from-ocean to-primary bg-clip-text text-transparent">Himachal?</span>
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

export default HimachalPackagesPage;