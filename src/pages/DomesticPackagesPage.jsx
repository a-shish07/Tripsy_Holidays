import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { packages } from '../data/packages';

function DomesticPackagesPage() {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [isLoading, setIsLoading] = useState(true);

  const domesticPackages = packages.filter(pkg => pkg.category === 'Domestic');
  const categories = ['All', ...new Set(domesticPackages.map(pkg => pkg.subcategory))];

  const filteredPackages = selectedFilter === 'All'
    ? domesticPackages
    : domesticPackages.filter(pkg => pkg.subcategory === selectedFilter);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

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
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  const filterVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.3
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

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-night via-purple-900/20 to-ocean/30">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center space-y-4"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-ocean/30 border-t-ocean rounded-full mx-auto"
          />
          <p className="text-white/70 text-lg">Discovering Amazing Packages...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="space-y-0 overflow-hidden">
      {/* Enhanced Hero Section */}
      <div className="relative bg-gradient-to-br from-night via-purple-900/20 to-ocean/30">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-r from-ocean/20 to-primary/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.2, 0.4],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full blur-3xl"
          />
        </div>

        <Container className="bg-gradient-to-b from-white/10 to-transparent relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-16 py-20"
          >
            {/* Enhanced Section Heading */}
            <div className="relative">
              <motion.div
                variants={floatingAnimation}
                animate="animate"
                className="absolute -top-12 -left-12 w-24 h-24 bg-ocean/20 rounded-full blur-xl"
              />
              <motion.div
                variants={floatingAnimation}
                animate="animate"
                transition={{ delay: 3 }}
                className="absolute -bottom-8 -right-8 w-20 h-20 bg-primary/20 rounded-full blur-xl"
              />
              
              <SectionHeading
                eyeline="Domestic Tours"
                title={
                  <motion.span
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="block"
                  >
                    Explore the Best of{' '}
                    <span className="text-transparent bg-gradient-to-r from-ocean via-primary to-purple-400 bg-clip-text animate-pulse">
                      Incredible India
                    </span>
                  </motion.span>
                }
                subtitle="Experience the diverse landscapes, rich culture, and spiritual destinations across India. From snow-capped mountains to tropical beaches, discover the best of domestic travel."
              />
            </div>

            {/* Enhanced Filter Buttons with Search */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-wrap gap-3 justify-center"
                >
                  {categories.map((category, index) => (
                    <motion.div
                      key={category}
                      variants={filterVariants}
                      custom={index}
                      whileHover={{ 
                        scale: 1.05,
                        y: -2
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <button
                        onClick={() => setSelectedFilter(category)}
                        className={`relative px-6 py-3 rounded-2xl text-sm font-bold tracking-wide transition-all duration-300 overflow-hidden group ${
                          selectedFilter === category
                            ? 'text-white shadow-2xl shadow-ocean/30'
                            : 'text-white/70 hover:text-white bg-white/10 hover:bg-white/20 border border-black/20'
                        }`}
                      >
                        <span className="relative z-10">{category}</span>
                        {selectedFilter === category && (
                          <motion.div
                            layoutId="activeFilter"
                            className="absolute inset-0 bg-gradient-to-r from-ocean to-primary rounded-2xl"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                          />
                        )}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-ocean/50 to-primary/50 rounded-2xl opacity-0 group-hover:opacity-100"
                          transition={{ duration: 0.2 }}
                        />
                      </button>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Results Counter */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-center md:text-right"
                >
                  <p className="text-white/60 text-sm">
                    Showing <span className="text-ocean font-bold">{filteredPackages.length}</span> of{' '}
                    <span className="text-primary font-bold">{domesticPackages.length}</span> packages
                  </p>
                </motion.div>
              </div>
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

      {/* Enhanced Packages Grid */}
      <Container id="domestic-packages">
        <div className="space-y-16 py-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedFilter}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filteredPackages.map((pkg, index) => (
                <motion.article
                  key={pkg.id}
                  variants={itemVariants}
                  layout
                  onClick={() => navigate(`/package/${pkg.id}`)}
                  className="group flex flex-col rounded-3xl border border-black/10 bg-gradient-to-br from-white/8 to-white/3 overflow-hidden backdrop-blur-xl hover:border-ocean/50 transition-all duration-500 hover:shadow-2xl hover:shadow-ocean/30 cursor-pointer relative"
                  whileHover={{ 
                    y: -8,
                    scale: 1.02
                  }}
                >
                  {/* Premium Badge */}
                  {pkg.badge && (
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                      className="absolute top-4 left-4 z-20"
                    >
                      <div className="relative">
                        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-night px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] shadow-lg">
                          ⭐ {pkg.badge}
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-sm opacity-50 -z-10" />
                      </div>
                    </motion.div>
                  )}

                  {/* Image Container */}
                  <div className="relative h-56 overflow-hidden">
                    <motion.img
                      src={pkg.image}
                      alt={pkg.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-night/90 via-night/30 to-transparent" />
                    
                    {/* Rating Badge */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                      className="absolute bottom-4 right-4 flex items-center gap-2 bg-white/20 backdrop-blur-lg px-4 py-2 rounded-2xl border border-black/30"
                    >
                      <span className="text-yellow-400 text-lg">⭐</span>
                      <span className="text-white font-bold text-sm">{pkg.rating}</span>
                      <span className="text-white/60 text-xs">({pkg.reviewCount})</span>
                    </motion.div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-ocean/0 group-hover:bg-ocean/20 transition-all duration-500 flex items-center justify-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        className="bg-white/20 backdrop-blur-lg rounded-full p-4"
                      >
                        <span className="text-white text-sm font-bold">View Details →</span>
                      </motion.div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6 space-y-4">
                    {/* Duration & Reviews */}
                    <div className="flex items-center justify-between">
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.4 }}
                        className="text-xs uppercase tracking-[0.3em] text-ocean font-bold bg-ocean/10 px-3 py-1 rounded-full"
                      >
                        {pkg.duration}
                      </motion.p>
                    </div>

                    {/* Title */}
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
                      className="font-display text-xl text-white group-hover:text-ocean transition-colors leading-tight"
                    >
                      {pkg.name}
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.6 }}
                      className="text-sm leading-relaxed text-white/70 font-light line-clamp-2 flex-1"
                    >
                      {pkg.description}
                    </motion.p>

                    {/* Highlights */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.7 }}
                      className="space-y-3 py-4 border-t border-black/10"
                    >
                      <p className="text-xs uppercase tracking-[0.3em] text-white/50 font-bold">Experience Highlights</p>
                      <div className="flex flex-wrap gap-2">
                        {pkg.highlights.slice(0, 3).map((highlight, i) => (
                          <motion.span
                            key={highlight}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.1 + 0.8 + i * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="text-xs bg-gradient-to-r from-ocean/30 to-primary/30 text-white px-3 py-1.5 rounded-full border border-ocean/30 backdrop-blur-sm"
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
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.9 }}
                      className="flex items-end justify-between pt-2"
                    >
                      <div className="space-y-1">
                        <span className="text-xs text-white/50 block">Starting from</span>
                        <span className="font-display text-2xl text-ocean font-bold bg-ocean/10 px-3 py-1 rounded-xl">
                          {pkg.priceLabel}
                        </span>
                      </div>
                      
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button 
                          variant="glow" 
                          className="px-6 py-3 tracking-[0.2em] uppercase font-bold text-xs rounded-xl"
                        >
                          Explore
                        </Button>
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty State */}
          <AnimatePresence>
            {filteredPackages.length === 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="text-center py-20 space-y-6"
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-6xl"
                >
                  🗺️
                </motion.div>
                <div className="space-y-3">
                  <h3 className="font-display text-2xl text-white">No packages found</h3>
                  <p className="text-white/60 text-lg max-w-md mx-auto">
                    We couldn't find any packages matching your selected category. Try exploring other destinations!
                  </p>
                </div>
                <Button 
                  variant="secondary" 
                  onClick={() => setSelectedFilter('All')}
                  className="mt-4"
                >
                  Show All Packages
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </div>
  );
}

export default DomesticPackagesPage;