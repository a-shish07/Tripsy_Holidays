import { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../components/Container';
import Button from '../components/Button';
import Policies from '../components/Policies';
import { BookingContext } from '../App';
import { himachalPackages } from '../data/himachalPackages';
import { 
  FaMapMarkerAlt, 
  FaCalendarAlt, 
  FaClock, 
  FaCheckCircle, 
  FaArrowLeft, 
  FaChevronRight, 
  FaStar,
  FaMountain,
  FaUmbrellaBeach,
  FaHotel,
  FaCar,
  FaUtensils,
  FaHiking
} from 'react-icons/fa';

function HimachalPackageDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { openBookingForm } = useContext(BookingContext);
  const [expandedDay, setExpandedDay] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  const package_ = himachalPackages.find(p => p.id === parseInt(id));

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 0.8
      }
    }
  };

  const floatingAnimation = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseAnimation = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.3, 0.6, 0.3],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  if (!package_) {
    return (
      <div className="bg-gradient-to-br from-night via-purple-900/20 to-ocean/30 min-h-screen flex items-center justify-center">
        <Container>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-8"
          >
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-8xl"
            >
              🗺️
            </motion.div>
            <div className="space-y-4">
              <h1 className="text-4xl font-display font-bold text-white">Package Not Found</h1>
              <p className="text-white/70 text-lg max-w-md mx-auto">
                The Himalayan adventure you're looking for has wandered off the trail.
              </p>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="glow" onClick={() => navigate('/packages/himachal')}>
                Discover Other Adventures
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-blue-950 via-blue-950 to-blue-900">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Enhanced Overlay */}
        <div className="absolute inset-0">
          <motion.img
            src={package_.image}
            alt={package_.shortTitle}
            className="w-full h-full object-cover"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            onLoad={() => setImageLoaded(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-night/80 via-night/40 to-night/90" />
          
          {/* Animated Background Elements */}
          <motion.div
            variants={pulseAnimation}
            animate="animate"
            className="absolute right-[-10%] top-20 h-[400px] w-[400px] rounded-full bg-ocean/20 blur-3xl"
          />
          <motion.div
            variants={pulseAnimation}
            animate="animate"
            transition={{ delay: 2 }}
            className="absolute left-[-15%] top-40 h-[350px] w-[350px] rounded-full bg-primary/15 blur-3xl"
          />
          
          {/* Mountain Silhouette Effect */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-night to-transparent" />
        </div>

        {/* Loading Overlay */}
        <AnimatePresence>
          {!imageLoaded && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-night flex items-center justify-center z-20"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 border-4 border-ocean/30 border-t-ocean rounded-full"
              />
            </motion.div>
          )}
        </AnimatePresence>

        <Container className="relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8 text-center"
          >
            {/* Back Button */}
            <motion.button
              variants={itemVariants}
              onClick={() => navigate('/packages/himachal')}
              className="group flex items-center gap-3 text-ocean/90 hover:text-ocean transition-all duration-300 text-base font-semibold uppercase tracking-[0.2em] bg-white/10 hover:bg-white/20 backdrop-blur-lg px-6 py-3 rounded-2xl border border-black/20 hover:border-ocean/50"
              whileHover={{ x: -5 }}
            >
              <motion.div
                animate={{ x: [0, -3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FaArrowLeft className="w-4 h-4" />
              </motion.div>
              Back to Adventures
            </motion.button>

            {/* Package Info */}
            <motion.div
              variants={itemVariants}
              className="space-y-6"
            >
              <motion.p
                variants={floatingAnimation}
                animate="animate"
                className="text-base uppercase tracking-[0.3em] bg-gradient-to-r from-ocean to-primary bg-clip-text text-transparent font-bold inline-flex items-center gap-2 bg-white/10 backdrop-blur-lg px-6 py-2 rounded-full border border-ocean/30"
              >
                <FaMountain className="w-4 h-4" />
                Package {package_.id} of 7
              </motion.p>
              
              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight"
              >
                {package_.shortTitle.split('').map((letter, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.03 }}
                    className="inline-block"
                  >
                    {letter === ' ' ? '\u00A0' : letter}
                  </motion.span>
                ))}
              </motion.h1>
              
              <motion.p
                variants={itemVariants}
                className="text-xl text-white/80 font-light max-w-2xl mx-auto leading-relaxed"
              >
                {package_.title}
              </motion.p>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto"
            >
              {[
                { 
                  icon: FaCalendarAlt, 
                  label: 'Duration', 
                  value: package_.duration,
                  color: 'from-blue-500 to-cyan-400'
                },
                { 
                  icon: FaMapMarkerAlt, 
                  label: 'Destinations', 
                  value: package_.destinations[0] || 'Multiple',
                  color: 'from-green-500 to-emerald-400'
                },
                { 
                  icon: FaHiking, 
                  label: 'Best For', 
                  value: package_.bestFor,
                  color: 'from-orange-500 to-yellow-400'
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`rounded-2xl border border-black/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg p-6 text-center group hover:shadow-2xl transition-all duration-500 ${item.color} hover:shadow-${item.color.split('to-')[1]}/20`}
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} mb-3`}
                  >
                    <item.icon className="text-white w-5 h-5" />
                  </motion.div>
                  <p className="text-sm uppercase tracking-[0.2em] text-white/70 font-semibold mb-1">
                    {item.label}
                  </p>
                  <p className="text-white font-bold text-lg">{item.value}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Enhanced Highlights & Activities Section */}
      <section className="relative py-20 border-t border-black/10">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12"
          >
            {/* Highlights */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.h3
                variants={itemVariants}
                className="text-3xl font-display font-bold text-white flex items-center gap-3"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <FaStar className="text-ocean w-8 h-8" />
                </motion.div>
                Journey Highlights
              </motion.h3>
              <div className="grid gap-4">
                {package_.highlights.map((highlight, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-white/5 to-white/2 hover:from-white/8 hover:to-white/4 border border-black/10 hover:border-ocean/30 transition-all duration-300 group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 180 }}
                      transition={{ duration: 0.5 }}
                      className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-ocean to-primary flex items-center justify-center mt-0.5"
                    >
                      <FaStar className="text-white w-3 h-3" />
                    </motion.div>
                    <span className="text-white/90 text-lg leading-relaxed font-light group-hover:text-white transition-colors">
                      {highlight}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Activities */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.h3
                variants={itemVariants}
                className="text-3xl font-display font-bold text-white flex items-center gap-3"
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FaHiking className="text-primary w-8 h-8" />
                </motion.div>
                Adventure Activities
              </motion.h3>
              <div className="grid gap-4">
                {package_.activities.map((activity, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-white/5 to-white/2 hover:from-white/8 hover:to-white/4 border border-black/10 hover:border-primary/30 transition-all duration-300 group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.3 }}
                      transition={{ type: "spring", bounce: 0.6 }}
                      className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-primary to-purple-500 flex items-center justify-center mt-0.5"
                    >
                      <FaCheckCircle className="text-white w-3 h-3" />
                    </motion.div>
                    <span className="text-white/90 text-lg leading-relaxed font-light group-hover:text-white transition-colors">
                      {activity}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Enhanced Itinerary Section */}
      <section className="relative py-20 border-t border-black/10 bg-gradient-to-br from-white/5 to-transparent">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl font-display font-bold text-white text-center"
            >
              Your <span className="text-transparent bg-gradient-to-r from-ocean to-primary bg-clip-text">Journey</span> Map
            </motion.h3>
            
            <div className="space-y-6 max-w-4xl mx-auto">
              {package_.itinerary.map((day, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="rounded-2xl border border-black/20 bg-gradient-to-br from-white/8 to-white/3 backdrop-blur-lg overflow-hidden group hover:shadow-2xl hover:shadow-ocean/20 transition-all duration-500"
                >
                  <motion.button
                    onClick={() => setExpandedDay(expandedDay === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-8 hover:bg-white/5 transition-all duration-300 group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-6 flex-1 text-left">
                      <motion.span
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-ocean to-primary text-white font-bold text-xl shadow-lg shadow-ocean/30"
                      >
                        {day.day}
                      </motion.span>
                      <div className="space-y-2">
                        <p className="text-white font-bold text-xl">{day.title}</p>
                        <p className="text-white/60 text-sm font-light">Click to explore day details</p>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedDay === idx ? 90 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 group-hover:bg-ocean/20 transition-colors"
                    >
                      <FaChevronRight className="text-ocean w-4 h-4" />
                    </motion.div>
                  </motion.button>

                  <AnimatePresence>
                    {expandedDay === idx && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="border-t border-black/10 bg-gradient-to-b from-ocean/5 to-transparent"
                      >
                        <div className="p-8 space-y-4">
                          {day.details.map((detail, detailIdx) => (
                            <motion.div
                              key={detailIdx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: detailIdx * 0.05 }}
                              className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                            >
                              <motion.span
                                whileHover={{ scale: 1.2 }}
                                className="text-ocean text-xl flex-shrink-0 mt-0.5"
                              >
                                •
                              </motion.span>
                              <span className="text-white/80 text-lg leading-relaxed font-light group-hover:text-white transition-colors">
                                {detail}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Enhanced Destinations Section */}
      <section className="relative py-20 border-t border-black/10">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl font-display font-bold text-white text-center"
            >
              Discover <span className="text-transparent bg-gradient-to-r from-ocean to-primary bg-clip-text">Magical</span> Places
            </motion.h3>
            
            <div className="flex flex-wrap gap-4 justify-center">
              {package_.destinations.map((dest, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="px-8 py-4 rounded-2xl bg-gradient-to-r from-ocean/20 to-primary/20 text-white border border-ocean/30 hover:border-ocean/50 font-semibold text-lg flex items-center gap-3 backdrop-blur-lg hover:shadow-2xl hover:shadow-ocean/30 transition-all duration-300 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <FaMapMarkerAlt className="w-5 h-5 text-ocean" />
                  </motion.div>
                  {dest}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Enhanced Inclusions & Exclusions */}
      <section className="relative py-20 border-t border-black/10 bg-gradient-to-br from-white/5 to-transparent">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12"
          >
            {/* Inclusions */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.h3
                variants={itemVariants}
                className="text-3xl font-display font-bold text-white flex items-center gap-3"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-ocean to-primary flex items-center justify-center"
                >
                  <FaCheckCircle className="text-white w-5 h-5" />
                </motion.div>
                What's Included
              </motion.h3>
              <div className="space-y-3">
                {package_.inclusions.map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-white/5 to-white/2 hover:from-white/8 hover:to-white/4 border border-black/10 hover:border-ocean/30 transition-all duration-300 group"
                  >
                    <FaCheckCircle className="text-ocean w-5 h-5 flex-shrink-0" />
                    <span className="text-white/90 text-lg font-light group-hover:text-white transition-colors">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Exclusions */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.h3
                variants={itemVariants}
                className="text-3xl font-display font-bold text-white flex items-center gap-3"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center"
                >
                  <span className="text-white text-lg font-bold">✕</span>
                </motion.div>
                What's Not Included
              </motion.h3>
              <div className="space-y-3">
                {package_.exclusions.map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-white/5 to-white/2 hover:from-white/8 hover:to-white/4 border border-black/10 hover:border-red-500/30 transition-all duration-300 group"
                  >
                    <span className="text-red-400 text-lg flex-shrink-0">−</span>
                    <span className="text-white/90 text-lg font-light group-hover:text-white transition-colors">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      <Policies />

      {/* Enhanced CTA Section */}
      <section className="relative py-20 border-t border-black/10">
        <Container>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-4xl md:text-5xl font-display font-bold text-white">
                Ready for Your{' '}
                <span className="text-transparent bg-gradient-to-r from-ocean to-primary bg-clip-text">
                  Himalayan Adventure?
                </span>
              </h3>
              <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed font-light">
                Join fellow travelers on this unforgettable journey through the majestic mountains of Himachal Pradesh.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="glow" 
                  size="lg" 
                  className="uppercase tracking-[0.2em] px-12 py-4 text-lg font-bold rounded-2xl"
                  onClick={openBookingForm}
                >
                  Book Your Journey
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="uppercase tracking-[0.2em] px-12 py-4 text-lg font-bold rounded-2xl border-black/30 hover:border-ocean/50"
                  onClick={() => navigate('/packages/himachal')}
                >
                  Explore More
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center items-center gap-8 pt-8 text-white/60 text-sm"
            >
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
                <span className="text-ocean">✓</span> Best Price Guarantee
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
                <span className="text-ocean">✓</span> 24/7 Support
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
                <span className="text-ocean">✓</span> Free Cancellation
              </motion.div>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}

export default HimachalPackageDetailPage;