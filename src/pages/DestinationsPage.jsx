import { motion } from 'framer-motion';
import DestinationsSection from '../sections/DestinationsSection';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { useState, useEffect } from 'react';

function DestinationsPage() {
  const [activeFilter, setActiveFilter] = useState('All Regions');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filters = ['All Regions', 'Featured Escapes', 'Seasonal Picks', 'Luxury Retreats', 'Adventure Zones'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const floatingAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="space-y-0 overflow-hidden">
      {/* Hero Section with Enhanced Background */}
      <div className="relative bg-gradient-to-br from-night via-purple-900/20 to-ocean/30">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-r from-ocean/20 to-primary/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.4, 0.2, 0.4],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full blur-3xl"
          />
        </div>

        <Container className="bg-gradient-to-b from-white/10 to-transparent relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-16 py-20"
          >
            {/* Enhanced Section Heading with Floating Elements */}
            <div className="relative">
              <motion.div
                variants={floatingAnimation}
                animate="animate"
                className="absolute -top-8 -left-8 w-16 h-16 bg-ocean/20 rounded-full blur-xl"
              />
              <motion.div
                variants={floatingAnimation}
                animate="animate"
                transition={{ delay: 2 }}
                className="absolute -bottom-8 -right-8 w-12 h-12 bg-primary/20 rounded-full blur-xl"
              />
              
              <SectionHeading
                eyeline="Global Destinations"
                title={
                  <motion.span
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="block"
                  >
                    Discover the world's most{' '}
                    <span className="text-transparent bg-gradient-to-r from-ocean via-primary to-purple-400 bg-clip-text animate-pulse">
                      enchanting places
                    </span>
                  </motion.span>
                }
                subtitle="From pristine beaches and snow-capped mountains to vibrant cities and serene temples—each destination is handpicked for its unique story and authentic experiences"
              />
            </div>

            {/* Enhanced Filter Buttons with Interactive Animations */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-3 justify-center"
            >
              {filters.map((filter, index) => (
                <motion.div
                  key={filter}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    y: -2
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant={activeFilter === filter ? "glow" : "secondary"}
                    onClick={() => setActiveFilter(filter)}
                    className="uppercase tracking-[0.2em] relative overflow-hidden group"
                  >
                    <span className="relative z-10">{filter}</span>
                    {activeFilter === filter && (
                      <motion.div
                        layoutId="activeFilter"
                        className="absolute inset-0 bg-gradient-to-r from-ocean to-primary rounded-lg"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-ocean/50 to-primary/50 rounded-lg opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.2 }}
                    />
                  </Button>
                </motion.div>
              ))}
            </motion.div>

            {/* Animated Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="flex justify-center pt-8"
            >
              <motion.div
                animate={{ 
                  y: [0, 10, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="flex flex-col items-center gap-2 text-white/60"
              >
                <span className="text-xs uppercase tracking-[0.3em]">Explore More</span>
                <div className="w-px h-8 bg-gradient-to-b from-ocean to-transparent" />
              </motion.div>
            </motion.div>
          </motion.div>
        </Container>
      </div>

      {/* Animated Section Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="border-t border-black/10 relative overflow-hidden"
      >
        <motion.div
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 3
          }}
          className="absolute top-0 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-ocean to-transparent"
        />
      </motion.div>

      {/* Destinations Section */}
      <DestinationsSection />

      {/* Enhanced CTA Section */}
      <div className="relative bg-gradient-to-br from-night/80 via-purple-900/40 to-ocean/50 overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
              className="absolute w-2 h-2 bg-ocean rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12 py-24 text-center"
          >
            {/* Enhanced CTA Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.p
                variants={itemVariants}
                className="text-xs uppercase tracking-[0.4em] text-ocean font-bold"
              >
                Ready to Explore?
              </motion.p>
              
              <motion.h3
                variants={itemVariants}
                className="font-display text-4xl md:text-5xl lg:text-6xl text-white"
              >
                Begin Your{' '}
                <span className="text-transparent bg-gradient-to-r from-ocean via-primary to-purple-400 bg-clip-text">
                  Discovery
                </span>
              </motion.h3>
              
              <motion.p
                variants={itemVariants}
                className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
              >
                Each destination opens doors to unforgettable moments. Let our travel artists craft your perfect escape with personalized itineraries and exclusive experiences.
              </motion.p>
            </motion.div>

            {/* Enhanced CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  transition: { type: "spring", bounce: 0.4 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="glow" 
                  size="lg" 
                  className="px-12 py-4 uppercase tracking-[0.25em] text-sm font-bold relative overflow-hidden group"
                >
                  <span className="relative z-10">Plan Your Journey</span>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-conic-gradient from-ocean via-primary to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  transition: { type: "spring", bounce: 0.4 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="px-12 py-4 uppercase tracking-[0.25em] text-sm font-bold border-black/30 hover:border-ocean/50 transition-colors"
                >
                  Download Travel Atlas
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center items-center gap-8 pt-12 text-white/50 text-sm"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2"
              >
                <span className="text-ocean">✓</span> 5000+ Happy Travelers
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2"
              >
                <span className="text-ocean">✓</span> 150+ Destinations
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2"
              >
                <span className="text-ocean">✓</span> 24/7 Support
              </motion.div>
            </motion.div>
          </motion.div>
        </Container>
      </div>
    </div>
  );
}

export default DestinationsPage;