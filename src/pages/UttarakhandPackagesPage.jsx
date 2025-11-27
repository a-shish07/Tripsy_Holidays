import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../components/Container';
import Button from '../components/Button';
import { BookingContext } from '../App';
import { uttarakhandPackages } from '../data/uttarakhandPackages';

// Floating particles component
const FloatingParticles = ({ count = 8 }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-primary/10 to-accent/10"
          style={{
            width: Math.random() * 40 + 10,
            height: Math.random() * 40 + 10,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, Math.random() * 10 - 5, 0],
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: Math.random() * 4 + 2,
            repeat: Infinity,
            delay: Math.random() * 1,
          }}
        />
      ))}
    </div>
  );
};

function UttarakhandPackagesPage() {
  const { openBookingForm } = useContext(BookingContext);
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeFilter, setActiveFilter] = useState('all');

  const uttarakhandImages = [
    '/assests/Breathtaking Nature Landscape Image Ideas.jpg',
    '/assests/Breathtaking Nature Scenery Landscape Image.jpg',
    '/assests/Maligne Lake Spirit Island, Canada.jpg'
  ];

  // Animation variants
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
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: { duration: 0.3 },
    },
  };

  // Package categories for filtering
  const packageCategories = [
    { id: 'all', label: 'All Packages', icon: '🏔️' },
    { id: 'spiritual', label: 'Spiritual', icon: '🕉️' },
    { id: 'adventure', label: 'Adventure', icon: '⛰️' },
    { id: 'wildlife', label: 'Wildlife', icon: '🐅' },
    { id: 'hill-station', label: 'Hill Station', icon: '🌄' },
  ];

  const locationStats = [
    { number: '4.8/5', label: 'Traveler Rating', icon: '⭐' },
    { number: '1,200+', label: 'Happy Travelers', icon: '👥' },
    { number: '15+', label: 'Destinations', icon: '🗺️' },
    { number: '97%', label: 'Satisfaction Rate', icon: '💫' },
  ];

  return (
    <div className="bg-gradient-to-br from-blue-400 via-blue-100 to-blue-500 min-h-screen">
      {/* Background Elements */}
      <FloatingParticles />
      
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

      <Container className="pt-28 pb-20">
        {/* Back Button */}
        <motion.button
          onClick={() => navigate(-1)}
          whileHover={{ x: -5, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-3 text-slate-600 hover:text-primary transition-all duration-300 mb-12 group"
        >
          <motion.span
            animate={{ x: [0, -3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-lg"
          >
            ←
          </motion.span>
          <span className="text-sm font-semibold uppercase tracking-widest group-hover:text-primary transition-colors">
            Back to Destinations
          </span>
        </motion.button>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden border-2 border-black/60 shadow-2xl group"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedImage}
                  src={uttarakhandImages[selectedImage]}
                  alt="Uttarakhand Landscape"
                  className="w-full h-96 object-cover"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
            </motion.div>

            {/* Image Thumbnails */}
            {uttarakhandImages.length > 1 && (
              <div className="grid grid-cols-3 gap-3">
                {uttarakhandImages.map((image, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                      selectedImage === index
                        ? 'border-primary shadow-lg'
                        : 'border-slate-200 hover:border-primary/50'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Uttarakhand ${index + 1}`}
                      className="w-full h-20 object-cover"
                    />
                  </motion.button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Location Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Header */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-primary to-accent px-4 py-2 shadow-lg"
              >
                <span className="text-white text-sm">🕉️</span>
                <span className="text-xs font-bold text-white tracking-widest">DIVINE DESTINATION</span>
              </motion.div>

              <motion.h1 
                className="text-4xl md:text-5xl font-display font-black leading-tight"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  Uttarakhand
                </span>{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Adventures
                </span>
              </motion.h1>

              <motion.div 
                className="flex items-center gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {[1,2,3,4,5].map((star) => (
                      <span key={star} className="text-amber-400 text-lg">★</span>
                    ))}
                  </div>
                  <span className="font-semibold text-slate-800">4.8</span>
                  <span className="text-slate-600">(1,200+ reviews)</span>
                </div>
              </motion.div>

              <motion.p 
                className="text-lg text-slate-600 leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Discover the spiritual heart of India with our curated Uttarakhand packages. From sacred temples in Haridwar and Rishikesh to pristine lakes in Nainital, and thrilling wildlife safaris in Jim Corbett, experience the perfect blend of spirituality, adventure, and natural beauty in the lap of the Himalayas.
              </motion.p>
            </div>

            {/* Location Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 gap-6"
            >
              {locationStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="text-center p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-black/60 shadow-sm"
                >
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <p className="font-display text-2xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {stat.number}
                  </p>
                  <p className="text-xs text-slate-600 font-semibold mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Quick Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="rounded-2xl border border-black/60 bg-white/80 backdrop-blur-sm p-6 space-y-4 shadow-lg"
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-1">Duration</p>
                  <p className="text-xl font-display font-black text-slate-900">3-7 Days</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-1">Group Size</p>
                  <p className="text-xl font-display font-black text-slate-900">2-20 people</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-1">Best Time</p>
                  <p className="font-semibold text-slate-800">Mar - Jun, Sep - Nov</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-1">Starting From</p>
                  <p className="text-xl font-display font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">₹12,000</p>
                </div>
              </div>
            </motion.div>

            {/* Included Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="space-y-3"
            >
              <p className="text-sm uppercase tracking-widest font-bold text-slate-700">What's Included</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Hotel Accommodations',
                  'Daily Meals',
                  'Transportation',
                  'Professional Guide',
                  'Temple Entry Fees',
                  'Adventure Activities'
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="flex items-center gap-3 text-sm text-slate-600"
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent flex-shrink-0" />
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="primary"
                  size="lg"
                  className="rounded-2xl flex-1 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => document.getElementById('packages-section').scrollIntoView({ behavior: 'smooth' })}
                >
                  Explore Packages
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="outline"
                  size="lg"
                  className="rounded-2xl flex-1 border-2 border-primary/20 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                  onClick={openBookingForm}
                >
                  Book Now
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Package Categories Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {packageCategories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex items-center gap-3 rounded-2xl border px-5 py-3 text-sm font-semibold uppercase tracking-widest transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-primary to-accent text-white border-transparent shadow-lg'
                  : 'border-slate-200 bg-white/80 text-slate-700 hover:border-primary/30 hover:shadow-md'
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Packages Grid */}
        <section id="packages-section" className="relative py-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {uttarakhandPackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                variants={cardVariants}
                whileHover="hover"
                onClick={() => navigate(`/packages/uttarakhand/${pkg.id}`)}
                className="group relative rounded-3xl border border-black/50 bg-white/80 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-black/80 cursor-pointer"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative p-6 space-y-4 flex flex-col h-full">
                  {/* Package Badge */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className="inline-flex w-fit"
                  >
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-primary to-accent text-white shadow-lg">
                      Package {index + 1}
                    </span>
                  </motion.div>

                  {/* Package Title */}
                  <div>
                    <motion.h3 
                      className="font-display text-2xl font-black text-slate-900 group-hover:text-slate-800 transition-colors leading-tight mb-2"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.4 }}
                      viewport={{ once: true }}
                    >
                      {pkg.shortTitle}
                    </motion.h3>
                    <motion.p 
                      className="text-slate-600 leading-relaxed line-clamp-2"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                      viewport={{ once: true }}
                    >
                      {pkg.title}
                    </motion.p>
                  </div>

                  {/* Package Details */}
                  <motion.div 
                    className="space-y-3 py-4 border-y border-slate-200/60"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3 text-sm text-slate-700">
                      <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-primary to-accent flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm">📅</span>
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold">Duration</p>
                        <p className="font-semibold">{pkg.duration}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-sm text-slate-700">
                      <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-primary to-accent flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm">🗺️</span>
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold">Destinations</p>
                        <p className="font-semibold">{pkg.destinations.join(' → ')}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-sm text-slate-700">
                      <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-primary to-accent flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm">⭐</span>
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold">Perfect For</p>
                        <p className="font-semibold">{pkg.bestFor}</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Highlights */}
                  <motion.div 
                    className="py-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.7 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full" />
                      Highlights
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {pkg.highlights.slice(0, 4).map((highlight, idx) => (
                        <motion.span 
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 + 0.7 + idx * 0.1 }}
                          className="text-xs px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200 transition-colors"
                        >
                          {highlight}
                        </motion.span>
                      ))}
                      {pkg.highlights.length > 4 && (
                        <span className="text-xs px-3 py-1.5 rounded-lg bg-primary/10 text-primary border border-primary/20">
                          +{pkg.highlights.length - 4} more
                        </span>
                      )}
                    </div>
                  </motion.div>

                  {/* CTA */}
                  <motion.div
                    className="mt-auto pt-4 border-t border-slate-200/60 flex items-center justify-between group-hover:text-primary transition-colors"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.8 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-sm font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      View Full Details
                    </span>
                    <motion.span
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="text-lg"
                    >
                      →
                    </motion.span>
                  </motion.div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl blur-xl" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </Container>

      {/* Bottom CTA Section */}
      <Container className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl blur-2xl" />
          <div className="relative rounded-3xl border border-black/60 bg-white/80 backdrop-blur-sm p-12 text-center space-y-8 overflow-hidden group">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full -top-48 -left-48" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-accent/10 to-transparent rounded-full -bottom-48 -right-48" />
            </div>

            <div className="relative space-y-6">
              <motion.h2 
                className="font-display text-4xl md:text-5xl font-black leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  Ready to Explore
                </span>{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Uttarakhand?
                </span>
              </motion.h2>
              
              <motion.p 
                className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Book your adventure today and create unforgettable memories in the spiritual heart of the Himalayas. Let our experts craft the perfect Uttarakhand experience for you.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    variant="primary"
                    size="lg"
                    className="rounded-2xl px-8 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={openBookingForm}
                  >
                    Book Now
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    variant="outline"
                    size="lg"
                    className="rounded-2xl px-8 border-2 border-primary/20 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                  >
                    Get Free Consultation
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}

export default UttarakhandPackagesPage;