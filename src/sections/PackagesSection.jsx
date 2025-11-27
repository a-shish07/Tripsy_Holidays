import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { packages } from '../data/packages';

// Floating particles component
const FloatingParticles = ({ count = 15 }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-primary/10 to-accent/10"
          style={{
            width: Math.random() * 80 + 20,
            height: Math.random() * 80 + 20,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

// Category filter component
const CategoryFilter = ({ activeCategory, onCategoryChange }) => {
  const categories = [
    { id: 'all', label: 'All Packages', count: packages.length },
    { id: 'domestic', label: 'Domestic', count: packages.filter(p => p.category === 'Domestic').length },
    { id: 'international', label: 'International', count: packages.filter(p => p.category === 'International').length },
    { id: 'spiritual', label: 'Spiritual', count: packages.filter(p => p.category === 'Spiritual').length },
  ];

  return (
    <motion.div 
      className="flex flex-wrap justify-center gap-4 mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {categories.map((category) => (
        <motion.button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`relative px-6 py-3 rounded-2xl font-semibold text-sm transition-all duration-300 ${
            activeCategory === category.id
              ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg'
              : 'bg-white/80 text-slate-700 border border-slate-200 hover:border-primary/30 hover:shadow-md'
          }`}
        >
          {category.label}
          <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
            activeCategory === category.id 
              ? 'bg-white/20 text-white' 
              : 'bg-slate-100 text-slate-600'
          }`}>
            {category.count}
          </span>
        </motion.button>
      ))}
    </motion.div>
  );
};

function PackagesSection() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');
  const [visiblePackages, setVisiblePackages] = useState(6);
  const containerRef = useRef(null);

  // Filter packages based on active category
  const filteredPackages = packages.filter(pkg => 
    activeCategory === 'all' || pkg.category.toLowerCase() === activeCategory
  ).slice(0, visiblePackages);

  // Load more packages
  const loadMore = () => {
    setVisiblePackages(prev => prev + 6);
  };

  // Enhanced package data with additional properties
  const enhancedPackages = packages.map(pkg => ({
    ...pkg,
    gradient: pkg.category === 'Domestic' ? 'from-blue-500 to-cyan-600' : 
              pkg.category === 'International' ? 'from-purple-500 to-pink-600' : 
              'from-amber-500 to-orange-600',
    icon: pkg.category === 'Domestic' ? '🏔️' : 
          pkg.category === 'International' ? '🌍' : '🙏'
  }));

  return (
    <Container id="packages" className="relative py-4 lg:py-6 overflow-hidden">
      {/* Background Elements */}
      <FloatingParticles />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 pointer-events-none" />
      
      {/* Animated Background Blobs */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 15, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-gradient-to-br from-blue-200/30 to-cyan-200/20 blur-3xl pointer-events-none"
      />

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <SectionHeading
          eyeline="Premium Collections"
          title={
            <>
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Curated Travel
              </span>{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Experiences
              </span>
            </>
          }
          subtitle="Discover handcrafted journeys that blend luxury, adventure, and authentic cultural immersion for unforgettable memories."
          tone="dark"
          alignment="center"
        />
      </motion.div>

      {/* Category Filter */}
      <CategoryFilter 
        activeCategory={activeCategory} 
        onCategoryChange={setActiveCategory} 
      />

      {/* Packages Grid */}
      <motion.div
        ref={containerRef}
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        layout
      >
        <AnimatePresence mode="popLayout">
          {filteredPackages.map((travelPackage, index) => (
            <motion.article
              key={travelPackage.id}
              layout
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -30 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -12,
                scale: 1.02
              }}
              onClick={() => navigate(`/package/${travelPackage.id}`)}
              className="group relative flex flex-col rounded-3xl border border-black/50 bg-white/80 backdrop-blur-sm overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl hover:border-black/80"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${travelPackage.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <motion.img
                  src={travelPackage.image}
                  alt={travelPackage.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                
                {/* Badge */}
                {travelPackage.badge && (
                  <motion.span
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="absolute left-5 top-5 rounded-2xl bg-gradient-to-r from-primary to-accent px-4 py-2 text-xs font-bold uppercase tracking-widest text-white shadow-lg"
                  >
                    ⭐ {travelPackage.badge}
                  </motion.span>
                )}

                {/* Category Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="absolute right-5 top-5 w-12 h-12 rounded-2xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg"
                >
                  <span className="text-xl">{travelPackage.icon}</span>
                </motion.div>

                {/* Duration */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="absolute bottom-5 left-5 bg-black/60 backdrop-blur-sm rounded-2xl px-3 py-1.5"
                >
                  <span className="text-white text-sm font-semibold">📅 {travelPackage.duration}</span>
                </motion.div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-7 space-y-5">
                {/* Header */}
                <div className="space-y-3">
                  <motion.p 
                    className="text-xs uppercase tracking-widest font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {travelPackage.duration}
                  </motion.p>
                  <motion.h3 
                    className="font-display text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors leading-tight"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {travelPackage.name}
                  </motion.h3>
                </div>

                {/* Description */}
                <motion.p 
                  className="text-slate-600 leading-relaxed text-[15px] line-clamp-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {travelPackage.description}
                </motion.p>

                {/* Includes */}
                <motion.div 
                  className="space-y-3 py-4 border-t border-slate-200/60"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold flex items-center gap-2">
                    <span className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full" />
                    Package Includes
                  </p>
                  <ul className="space-y-2">
                    {travelPackage.includes.slice(0, 3).map((item, idx) => (
                      <motion.li 
                        key={item}
                        className="flex items-center gap-3 text-sm text-slate-700"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + idx * 0.1 }}
                      >
                        <div className="w-5 h-5 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Price & CTA */}
                <div className="mt-auto pt-4 border-t border-slate-200/60">
                  <div className="flex items-center justify-between mb-4">
                    <motion.div 
                      className="flex items-baseline gap-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      <span className="text-sm text-slate-500">From</span>
                      <span className="font-display text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        {travelPackage.price}
                      </span>
                      <span className="text-sm text-slate-500">/person</span>
                    </motion.div>

                    {/* Rating */}
                    {travelPackage.rating && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7 }}
                        className="flex items-center gap-1 bg-white/80 backdrop-blur-sm rounded-2xl px-3 py-1.5 border border-slate-200/60"
                      >
                        <span className="text-amber-400 text-sm">⭐</span>
                        <span className="text-sm font-semibold text-slate-800">{travelPackage.rating}</span>
                      </motion.div>
                    )}
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  >
                    <Button 
                      variant="glow" 
                      className="w-full rounded-2xl py-4 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg hover:shadow-xl transition-all duration-300 uppercase tracking-widest font-bold text-sm"
                    >
                      <span className="flex items-center justify-center gap-3">
                        Book This Journey
                        <motion.span
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      </span>
                    </Button>
                  </motion.div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl blur-xl" />
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Load More Button */}
      {visiblePackages < filteredPackages.length && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <Button
            variant="outline"
            size="lg"
            onClick={loadMore}
            className="rounded-2xl border-2 border-primary/20 bg-white/80 backdrop-blur-sm hover:bg-primary/5 hover:border-primary/30 transition-all duration-300 px-8 py-4"
          >
            <span className="flex items-center gap-3 text-lg font-semibold">
              Load More Packages
              <motion.span
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                🔽
              </motion.span>
            </span>
          </Button>
        </motion.div>
      )}

      {/* Enhanced CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-20 relative"
      >
        <div className="absolute -inset-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl blur-2xl" />
        <div className="relative rounded-3xl border border-black/50 bg-white/80 backdrop-blur-sm p-12 shadow-2xl">
          {/* Category Navigation */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              { 
                category: 'domestic', 
                title: 'Domestic Tours', 
                description: 'Discover the diverse beauty across India with curated experiences',
                gradient: 'from-blue-500 to-cyan-600',
                icon: '🏔️'
              },
              { 
                category: 'international', 
                title: 'International Tours', 
                description: 'Experience wonders across the world with luxury accommodations',
                gradient: 'from-purple-500 to-pink-600',
                icon: '🌍'
              },
            ].map((item, idx) => (
              <motion.div
                key={item.category}
                whileHover={{ 
                  scale: 1.03,
                  y: -8
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate(`/packages/${item.category}`)}
                className={`rounded-3xl border border-black/60 bg-gradient-to-br ${item.gradient}/5 to-white/50 p-10 text-center cursor-pointer transition-all duration-500 hover:shadow-2xl hover:border-${item.gradient.split('-')[1]}-300/30 backdrop-blur-sm`}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-white to-white/80 flex items-center justify-center shadow-lg"
                >
                  <span className="text-3xl">{item.icon}</span>
                </motion.div>
                <p className="text-xs uppercase tracking-widest font-bold text-slate-500 mb-3">Explore</p>
                <h4 className="font-display text-3xl font-bold text-slate-900 mb-4 leading-tight">{item.title}</h4>
                <p className="text-slate-600 mb-6 leading-relaxed">{item.description}</p>
                <motion.p 
                  className="font-semibold flex items-center justify-center gap-3 tracking-wide text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                  whileHover={{ x: 8 }}
                >
                  View Packages 
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.p>
              </motion.div>
            ))}
          </div>

          {/* Custom Package CTA */}
          <div className="text-center pt-12 border-t border-slate-200/60">
            <motion.h3 
              className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Need Something
              </span>{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Custom?
              </span>
            </motion.h3>
            <motion.p 
              className="text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Don't see exactly what you're looking for? Our travel experts can create a completely personalized package tailored to your preferences, budget, and travel style.
            </motion.p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button 
                variant="glow" 
                size="xl"
                className="rounded-2xl px-12 py-6 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-2xl hover:shadow-3xl transition-all duration-300 uppercase tracking-widest font-bold text-lg"
              >
                <span className="flex items-center gap-4">
                  Create Custom Package
                  <motion.span
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-xl"
                  >
                    ✨
                  </motion.span>
                </span>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Container>
  );
}

export default PackagesSection;