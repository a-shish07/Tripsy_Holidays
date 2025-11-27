import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { packages } from '../data/packages';

function InternationalPackagesPage() {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredPackage, setHoveredPackage] = useState(null);

  const internationalPackages = packages.filter(pkg => pkg.category === 'International');
  const categories = ['All', ...new Set(internationalPackages.map(pkg => pkg.subcategory))];

  const filteredPackages = selectedFilter === 'All'
    ? internationalPackages
    : internationalPackages.filter(pkg => pkg.subcategory === selectedFilter);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 0.8
      }
    }
  };

  const globeVariants = {
    rotate: {
      rotate: 360,
      transition: {
        duration: 120,
        repeat: Infinity,
        ease: "linear"
      }
    },
    float: {
      y: [0, -20, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const floatingAnimation = {
    animate: {
      y: [0, -25, 0],
      x: [0, 10, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-night via-purple-900/20 to-ocean/30">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center space-y-6"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="w-20 h-20 border-4 border-ocean/30 border-t-ocean rounded-full mx-auto relative"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-2 bg-ocean/20 rounded-full"
            />
          </motion.div>
          <div className="space-y-2">
            <p className="text-white text-lg font-light">Discovering Global Wonders</p>
            <p className="text-white/60 text-sm">Loading international destinations...</p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="space-y-0 overflow-hidden">
      {/* Enhanced Hero Section with Global Theme */}
      <div className="relative bg-gradient-to-br from-night via-purple-900/30 to-ocean/40 min-h-[80vh] flex items-center">
        {/* Animated Globe Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            variants={globeVariants}
            animate={["rotate", "float"]}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10"
          >
            <div className="w-full h-full bg-gradient-to-r from-ocean/20 to-primary/20 rounded-full blur-3xl" />
          </motion.div>
          
          {/* Floating Continents */}
          <motion.div
            variants={floatingAnimation}
            animate="animate"
            className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-ocean/30 to-primary/30 rounded-full blur-2xl"
          />
          <motion.div
            variants={floatingAnimation}
            animate="animate"
            transition={{ delay: 2 }}
            className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-gradient-to-r from-primary/30 to-purple-500/30 rounded-full blur-2xl"
          />
          <motion.div
            variants={floatingAnimation}
            animate="animate"
            transition={{ delay: 4 }}
            className="absolute top-1/3 right-1/3 w-20 h-20 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-2xl"
          />
        </div>

        {/* Animated Stars */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut"
              }}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="space-y-16 py-20 text-center"
          >
            {/* Enhanced Section Heading with Global Flair */}
            <div className="relative">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute -top-20 left-1/2 -translate-x-1/2 text-6xl"
              >
                🌎
              </motion.div>
              
              <SectionHeading
                eyeline="International Tours"
                title={
                  <motion.span
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="block"
                  >
                    Explore the{' '}
                    <span className="text-transparent bg-gradient-to-r from-ocean via-primary to-purple-400 bg-clip-text animate-pulse">
                      Wonderful World
                    </span>
                  </motion.span>
                }
                subtitle="Discover exotic destinations across the globe. From tropical islands to urban marvels, experience world-class travel experiences with our carefully curated international packages."
              />
            </div>

            {/* Enhanced Filter Buttons with Global Regions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-8 max-w-4xl mx-auto"
            >
              <div className="flex flex-col items-center gap-6">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-white/60 text-sm uppercase tracking-[0.3em]"
                >
                  Filter by Region
                </motion.p>
                
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-wrap gap-4 justify-center"
                >
                  {categories.map((category, index) => (
                    <motion.div
                      key={category}
                      variants={itemVariants}
                      whileHover={{ 
                        scale: 1.08,
                        y: -3
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <button
                        onClick={() => setSelectedFilter(category)}
                        onMouseEnter={() => setHoveredPackage(category)}
                        onMouseLeave={() => setHoveredPackage(null)}
                        className={`relative px-8 py-4 rounded-2xl text-sm font-bold tracking-wide transition-all duration-500 overflow-hidden group border-2 ${
                          selectedFilter === category
                            ? 'text-white shadow-2xl shadow-ocean/40 border-ocean'
                            : 'text-white/80 hover:text-white bg-white/10 hover:bg-white/20 border-black/20 hover:border-ocean/50'
                        }`}
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          {category === 'Europe' && '🇪🇺'}
                          {category === 'Asia' && '🌏'}
                          {category === 'North America' && '🇺🇸'}
                          {category === 'South America' && '🇧🇷'}
                          {category === 'Africa' && '🌍'}
                          {category === 'Oceania' && '🇦🇺'}
                          {category}
                        </span>
                        
                        {selectedFilter === category && (
                          <motion.div
                            layoutId="activeInternationalFilter"
                            className="absolute inset-0 bg-gradient-to-r from-ocean to-primary rounded-2xl"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                          />
                        )}
                        
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-ocean/40 to-primary/40 rounded-2xl opacity-0 group-hover:opacity-100"
                          transition={{ duration: 0.3 }}
                        />
                        
                        {/* Ripple effect on hover */}
                        {hoveredPackage === category && (
                          <motion.div
                            initial={{ scale: 0, opacity: 1 }}
                            animate={{ scale: 3, opacity: 0 }}
                            transition={{ duration: 0.8 }}
                            className="absolute inset-0 bg-white/20 rounded-2xl"
                          />
                        )}
                      </button>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Results Counter */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="text-center"
              >
                <p className="text-white/70 text-lg">
                  <span className="text-ocean font-bold">{filteredPackages.length}</span> amazing packages across{' '}
                  <span className="text-primary font-bold">{categories.length - 1}</span> global regions
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </Container>
      </div>

      {/* Animated Global Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="border-t border-black/10 relative overflow-hidden"
      >
        <motion.div
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 2
          }}
          className="absolute top-0 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-ocean to-transparent"
        />
        <div className="absolute inset-0 flex justify-center">
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1]
            }}
            transition={{
              rotate: { duration: 10, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity }
            }}
            className="text-2xl -mt-3"
          >
            ✈️
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced International Packages Grid */}
      <Container id="international-packages">
        <div className="space-y-16 py-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedFilter}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3"
            >
              {filteredPackages.map((pkg, index) => (
                <motion.article
                  key={pkg.id}
                  variants={itemVariants}
                  layout
                  onMouseEnter={() => setHoveredPackage(pkg.id)}
                  onMouseLeave={() => setHoveredPackage(null)}
                  onClick={() => navigate(`/package/${pkg.id}`)}
                  className="group flex flex-col rounded-3xl border-2 border-black/10 bg-gradient-to-br from-white/10 to-white/5 overflow-hidden backdrop-blur-xl hover:border-ocean/70 transition-all duration-700 hover:shadow-2xl hover:shadow-ocean/30 cursor-pointer relative"
                  whileHover={{ 
                    y: -12,
                    scale: 1.03
                  }}
                >
                  {/* Premium International Badge */}
                  {pkg.badge && (
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                      className="absolute top-4 left-4 z-20"
                    >
                      <div className="relative">
                        <div className="bg-gradient-to-r from-gold to-yellow-400 text-night px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] shadow-lg border border-yellow-300">
                          🌟 {pkg.badge}
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-gold to-yellow-400 rounded-full blur-sm opacity-60 -z-10" />
                      </div>
                    </motion.div>
                  )}

                  {/* Image Container with Flag */}
                  <div className="relative h-60 overflow-hidden">
                    <motion.img
                      src={pkg.image}
                      alt={pkg.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-night/95 via-night/40 to-transparent" />
                    
                    {/* Country Flag Badge */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
                      className="absolute top-4 right-4 bg-white/20 backdrop-blur-lg px-3 py-2 rounded-2xl border border-black/30"
                    >
                      <span className="text-xl">
                        {pkg.subcategory === 'Europe' && '🇪🇺'}
                        {pkg.subcategory === 'Asia' && '🌏'}
                        {pkg.subcategory === 'North America' && '🇺🇸'}
                        {pkg.subcategory === 'South America' && '🇧🇷'}
                        {pkg.subcategory === 'Africa' && '🌍'}
                        {pkg.subcategory === 'Oceania' && '🇦🇺'}
                      </span>
                    </motion.div>

                    {/* Rating Badge */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.15 + 0.5 }}
                      className="absolute bottom-4 right-4 flex items-center gap-2 bg-white/20 backdrop-blur-lg px-4 py-2 rounded-2xl border border-black/30"
                    >
                      <span className="text-yellow-400 text-lg">⭐</span>
                      <span className="text-white font-bold text-sm">{pkg.rating}</span>
                      <span className="text-white/60 text-xs">({pkg.reviewCount})</span>
                    </motion.div>

                    {/* Hover Explore Overlay */}
                    <div className="absolute inset-0 bg-ocean/0 group-hover:bg-ocean/30 transition-all duration-700 flex items-center justify-center">
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1, opacity: 1 }}
                        className="bg-white/20 backdrop-blur-lg rounded-2xl p-4 border border-black/30"
                      >
                        <span className="text-white text-sm font-bold flex items-center gap-2">
                          Explore Destination 
                          <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1, repeat: Infinity }}
                          >
                            →
                          </motion.span>
                        </span>
                      </motion.div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6 space-y-4">
                    {/* Duration */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.15 + 0.6 }}
                      className="flex items-center justify-between"
                    >
                      <span className="text-xs uppercase tracking-[0.3em] text-ocean font-bold bg-ocean/10 px-3 py-1 rounded-full">
                        {pkg.duration}
                      </span>
                      <motion.span
                        whileHover={{ scale: 1.1 }}
                        className="text-2xl cursor-help"
                        title="International Destination"
                      >
                        🌐
                      </motion.span>
                    </motion.div>

                    {/* Title */}
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.15 + 0.7 }}
                      className="font-display text-xl text-white group-hover:text-ocean transition-colors leading-tight"
                    >
                      {pkg.name}
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.15 + 0.8 }}
                      className="text-sm leading-relaxed text-white/70 font-light line-clamp-2 flex-1"
                    >
                      {pkg.description}
                    </motion.p>

                    {/* Global Highlights */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.15 + 0.9 }}
                      className="space-y-3 py-4 border-t border-black/10"
                    >
                      <p className="text-xs uppercase tracking-[0.3em] text-white/50 font-bold flex items-center gap-2">
                        <span>🌎</span> Global Highlights
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {pkg.highlights.slice(0, 3).map((highlight, i) => (
                          <motion.span
                            key={highlight}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.15 + 1 + i * 0.1 }}
                            whileHover={{ scale: 1.08 }}
                            className="text-xs bg-gradient-to-r from-ocean/40 to-primary/40 text-white px-3 py-1.5 rounded-full border border-ocean/40 backdrop-blur-sm"
                          >
                            {highlight}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>

                    {/* Price & CTA */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.15 + 1.1 }}
                      className="flex items-end justify-between pt-2"
                    >
                      <div className="space-y-1">
                        <span className="text-xs text-white/50 block">Starting from</span>
                        <span className="font-display text-2xl text-ocean font-bold bg-ocean/10 px-3 py-1 rounded-xl">
                          {pkg.priceLabel}
                        </span>
                      </div>
                      
                      <motion.div
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button 
                          variant="glow" 
                          className="px-6 py-3 tracking-[0.2em] uppercase font-bold text-xs rounded-xl bg-gradient-to-r from-ocean to-primary"
                        >
                          Discover
                        </Button>
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Global Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1500" />
                  
                  {/* Pulse Effect on Hover */}
                  {hoveredPackage === pkg.id && (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 1.2, opacity: 0 }}
                      className="absolute inset-0 border-2 border-ocean/50 rounded-3xl pointer-events-none"
                    />
                  )}
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Enhanced Empty State */}
          <AnimatePresence>
            {filteredPackages.length === 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="text-center py-24 space-y-8"
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    y: [0, -10, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="text-8xl"
                >
                  🗺️
                </motion.div>
                <div className="space-y-4">
                  <h3 className="font-display text-3xl text-white">Global Adventures Await</h3>
                  <p className="text-white/60 text-lg max-w-md mx-auto leading-relaxed">
                    We're constantly adding new international destinations. Check back soon for amazing packages in this region!
                  </p>
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    variant="glow" 
                    onClick={() => setSelectedFilter('All')}
                    className="px-8 py-4"
                  >
                    Explore All International Packages
                  </Button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </div>
  );
}

export default InternationalPackagesPage;