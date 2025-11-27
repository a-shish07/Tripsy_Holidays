import { motion } from 'framer-motion';
import { useState } from 'react';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import ServicesSection from '../sections/ServicesSection';
import CallToActionSection from '../sections/CallToActionSection';

// Floating particles component
const FloatingParticles = ({ count = 12 }) => {
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

const serviceDetails = {
  'domestic-tours': {
    title: 'Domestic Tours',
    icon: '🇮🇳',
    description: 'Explore the rich heritage and diverse landscapes of India with our curated domestic tour packages.',
    features: [
      'Customized itineraries tailored to your preferences',
      'Expert local guides with deep knowledge',
      'Comfortable accommodations in handpicked locations',
      'All transportation and logistics arranged',
      'Exclusive access to hidden gems',
      '24/7 customer support',
    ],
    gradient: 'from-blue-500 to-cyan-600',
    stats: { travelers: '15K+', destinations: '30+', rating: '4.9/5' }
  },
  'international-tours': {
    title: 'International Tours',
    icon: '✈️',
    description: 'Experience the wonders of the world with our carefully curated international travel packages.',
    features: [
      'Visa assistance and travel documentation',
      'Multi-country itineraries available',
      'Premium hotel accommodations',
      'International flight bookings',
      'Multilingual guides',
      'Travel insurance included',
    ],
    gradient: 'from-purple-500 to-pink-600',
    stats: { travelers: '8K+', destinations: '50+', rating: '4.8/5' }
  },
  'spiritual-tours': {
    title: 'Spiritual Tours',
    icon: '🙏',
    description: 'Connect with your inner self through our sacred spiritual journey packages.',
    features: [
      'Guided pilgrimage experiences',
      'Meditation and yoga sessions',
      'Sacred site visits',
      'Spiritual guidance and support',
      'Holistic wellness programs',
      'Accommodation near holy places',
    ],
    gradient: 'from-amber-500 to-orange-600',
    stats: { travelers: '5K+', destinations: '15+', rating: '4.9/5' }
  },
  'corporate-travels': {
    title: 'Corporate Travels',
    icon: '💼',
    description: 'Seamless corporate travel solutions for your business needs and team outings.',
    features: [
      'Group travel arrangements',
      'Team building experiences',
      'Business meeting facilities',
      'Flexible scheduling',
      'Cost-effective packages',
      'Dedicated corporate support',
    ],
    gradient: 'from-emerald-500 to-green-600',
    stats: { travelers: '500+', destinations: '25+', rating: '4.7/5' }
  },
  'fixed-departure': {
    title: 'Fixed Departure Tours',
    icon: '📅',
    description: 'Join scheduled group tours departing on fixed dates with like-minded travelers.',
    features: [
      'Guaranteed departures',
      'Group discounts',
      'Social travel experience',
      'Predetermined itineraries',
      'Budget-friendly pricing',
      'Meet fellow travelers',
    ],
    gradient: 'from-indigo-500 to-blue-600',
    stats: { travelers: '12K+', destinations: '20+', rating: '4.6/5' }
  },
  'hotel-booking': {
    title: 'Hotel Booking',
    icon: '🏨',
    description: 'Book premium accommodations worldwide with exclusive rates and deals.',
    features: [
      'Wide range of hotels',
      'Best price guarantee',
      'Instant confirmation',
      'Free cancellation',
      'Loyalty rewards',
      'Special packages available',
    ],
    gradient: 'from-rose-500 to-pink-600',
    stats: { travelers: '25K+', destinations: '100+', rating: '4.8/5' }
  },
  'air-ticketing': {
    title: 'Air Ticketing',
    icon: '🎫',
    description: 'Convenient flight bookings with competitive fares and flexible options.',
    features: [
      'Domestic and international flights',
      'Competitive pricing',
      'Multiple airlines',
      'Flexible booking options',
      'Last-minute deals',
      'Travel insurance add-ons',
    ],
    gradient: 'from-cyan-500 to-blue-600',
    stats: { travelers: '30K+', destinations: '150+', rating: '4.7/5' }
  },
  'adventure-tours': {
    title: 'Adventure Tours',
    icon: '🏔️',
    description: 'Thrilling adventures for adrenaline seekers and outdoor enthusiasts.',
    features: [
      'Trekking expeditions',
      'Water sports activities',
      'Mountain climbing',
      'Safety equipment provided',
      'Expert adventure guides',
      'All-inclusive packages',
    ],
    gradient: 'from-lime-500 to-green-600',
    stats: { travelers: '7K+', destinations: '18+', rating: '4.9/5' }
  },
  'honeymoon-packages': {
    title: 'Honeymoon Packages',
    icon: '💑',
    description: 'Romantic getaways designed for couples to create unforgettable memories.',
    features: [
      'Romantic destinations',
      'Couples spa treatments',
      'Private dinners',
      'Luxury accommodations',
      'Personalized itineraries',
      'Special honeymoon amenities',
    ],
    gradient: 'from-pink-500 to-rose-600',
    stats: { travelers: '3K+', destinations: '12+', rating: '4.9/5' }
  },
};

function ServiceDetailPage() {
  const [activeService, setActiveService] = useState('domestic-tours');

  const serviceStats = [
    { number: '25K+', label: 'Happy Travelers', icon: '👥' },
    { number: '50+', label: 'Destinations', icon: '🌍' },
    { number: '4.8/5', label: 'Average Rating', icon: '⭐' },
    { number: '98%', label: 'Satisfaction Rate', icon: '💫' },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50/30 min-h-screen">
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
      
      <motion.div
        animate={{
          y: [0, 25, 0],
          x: [0, -15, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-gradient-to-br from-emerald-200/30 to-green-200/20 blur-3xl pointer-events-none"
      />

      {/* Hero Section */}
      <Container className="pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8 max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-primary to-accent px-6 py-3 shadow-lg"
          >
            <span className="text-white text-lg">✨</span>
            <span className="text-sm font-bold text-white tracking-widest">OUR EXPERTISE</span>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-display font-black leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Services Designed for
            </span>{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Every Traveler
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            From meticulous domestic explorations to international adventures, spiritual journeys, and specialized travel needs—we've crafted services that transcend ordinary tourism and create extraordinary experiences.
          </motion.p>

          {/* Service Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          >
            {serviceStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-black/60 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <p className="font-display text-3xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {stat.number}
                </p>
                <p className="text-sm text-slate-600 font-semibold mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>

      {/* Service Navigation */}
      <Container className="pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex overflow-x-auto gap-3 pb-4"
        >
          {Object.entries(serviceDetails).map(([key, service], index) => (
            <motion.button
              key={key}
              onClick={() => setActiveService(key)}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex items-center gap-3 rounded-2xl border px-6 py-4 text-sm font-semibold uppercase tracking-widest transition-all duration-300 flex-shrink-0 ${
                activeService === key
                  ? 'bg-gradient-to-r from-primary to-accent text-white border-transparent shadow-lg'
                  : 'border-slate-200 bg-white/80 text-slate-700 hover:border-primary/30 hover:shadow-md'
              }`}
            >
              <span className="text-xl">{service.icon}</span>
              {service.title}
            </motion.button>
          ))}
        </motion.div>
      </Container>

      {/* Active Service Details */}
      <Container className="pb-20">
        <motion.div
          key={activeService}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl border border-black/60 bg-white/80 backdrop-blur-sm p-8 md:p-12 shadow-2xl overflow-hidden group"
        >
          {/* Background Gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${serviceDetails[activeService].gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12">
            {/* Service Info */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${serviceDetails[activeService].gradient} flex items-center justify-center shadow-lg`}
                >
                  <span className="text-3xl">{serviceDetails[activeService].icon}</span>
                </motion.div>

                <motion.h2 
                  className="font-display text-4xl md:text-5xl font-black text-slate-900 leading-tight"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {serviceDetails[activeService].title}
                </motion.h2>

                <motion.p 
                  className="text-xl text-slate-600 leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {serviceDetails[activeService].description}
                </motion.p>
              </motion.div>

              {/* Service Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200/60"
              >
                {Object.entries(serviceDetails[activeService].stats).map(([key, value], index) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="text-center"
                  >
                    <p className="font-display text-2xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {value}
                    </p>
                    <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold mt-1">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="pt-6"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    variant="primary"
                    size="lg"
                    className="rounded-2xl px-8 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <span className="flex items-center gap-3">
                      Explore {serviceDetails[activeService].title}
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </span>
                  </Button>
                </motion.div>
              </motion.div>
            </div>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <motion.h3 
                className="font-display text-2xl font-black text-slate-900"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                What's Included
              </motion.h3>

              <div className="space-y-4">
                {serviceDetails[activeService].features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-slate-200/60 hover:border-slate-300 transition-all duration-300"
                  >
                    <motion.div
                      className="w-8 h-8 rounded-xl bg-gradient-to-r from-primary to-accent flex items-center justify-center flex-shrink-0 mt-1"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <span className="text-white text-sm">✓</span>
                    </motion.div>
                    <span className="text-slate-700 font-medium leading-relaxed">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Hover Glow Effect */}
          <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div className={`absolute inset-0 bg-gradient-to-br ${serviceDetails[activeService].gradient} rounded-3xl blur-xl opacity-10`} />
          </div>
        </motion.div>
      </Container>

      {/* Enhanced Services Section */}
      <ServicesSection />

      {/* Why Choose Us Section */}
      <Container className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl blur-2xl" />
          <div className="relative rounded-3xl border border-black/60 bg-white/80 backdrop-blur-sm p-12 md:p-16 text-center space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6 max-w-3xl mx-auto"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-primary to-accent px-6 py-3 shadow-lg"
              >
                <span className="text-white text-lg">⭐</span>
                <span className="text-sm font-bold text-white tracking-widest">WHY CHOOSE TRIPSY?</span>
              </motion.div>

              <motion.h3 
                className="font-display text-4xl md:text-5xl font-black leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  Your Complete Travel
                </span>{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Partner
                </span>
              </motion.h3>

              <motion.p 
                className="text-xl text-slate-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                Whether you need comprehensive package tours, specialized services, or bespoke experiences, our team handles every detail with precision and care.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8 mt-8"
            >
              {[
                { 
                  title: 'End-to-End Support', 
                  desc: 'From planning to post-trip, we\'re with you every step of the way with dedicated support',
                  icon: '🛡️'
                },
                { 
                  title: 'Expert Guides', 
                  desc: 'Local knowledge combined with international standards for authentic experiences',
                  icon: '🎯'
                },
                { 
                  title: 'Seamless Experience', 
                  desc: 'All logistics handled professionally so you can focus on creating memories',
                  icon: '✨'
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-black/60 bg-white/60 backdrop-blur-sm p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <motion.div
                    className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-primary to-accent flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <span className="text-white text-2xl">{item.icon}</span>
                  </motion.div>
                  <h4 className="font-display text-xl font-black text-slate-900 mb-3">{item.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </Container>

      {/* CTA Section */}
      <CallToActionSection />
    </div>
  );
}

export default ServiceDetailPage;