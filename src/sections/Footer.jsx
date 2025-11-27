import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';

// Floating particles component
const FloatingParticles = ({ count = 8 }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-primary/5 to-accent/5"
          style={{
            width: Math.random() * 40 + 10,
            height: Math.random() * 40 + 10,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -15, 0],
            x: [0, Math.random() * 10 - 5, 0],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.05, 1],
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

const quickLinks = [
  { label: 'About', href: '/experience', icon: '🏔️' },
  { label: 'Packages', href: '/packages', icon: '🎒' },
  { label: 'Services', href: '/services', icon: '⭐' },
  { label: 'Testimonials', href: '/testimonials', icon: '💫' },
  { label: 'Blog', href: '/blog', icon: '📝' },
];

const services = [
  { label: 'Domestic Tours', href: '/packages/domestic', icon: '🇮🇳' },
  { label: 'International Tours', href: '/packages/international', icon: '🌍' },
  { label: 'Hotel Booking', href: '/services', icon: '🏨' },
  { label: 'Air Ticketing', href: '/services', icon: '✈️' },
  { label: 'Custom Packages', href: '/services', icon: '✨' },
];

const socials = [
  { 
    label: 'Instagram', 
    href: 'https://www.instagram.com/tripsy_holidays?igsh=MWJqOWphNWVrNDVyZw==', 
    handle: '@tripsy_holidays',
    icon: '📸',
    color: 'from-pink-500 to-purple-600'
  },
  { 
    label: 'Facebook', 
    href: 'https://www.facebook.com/share/1Btt9Lrg57/', 
    handle: '/tripsyholidays',
    icon: '👥',
    color: 'from-blue-500 to-blue-700'
  },
  { 
    label: 'YouTube', 
    href: 'https://www.youtube.com/@TripsyHolidays', 
    handle: '@TripsyHolidays',
    icon: '🎥',
    color: 'from-red-500 to-red-600'
  },
];

// Animated social icon component
const AnimatedSocialIcon = ({ social, index }) => (
  <motion.li
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
  >
    <motion.a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 text-sm text-slate-600 hover:text-slate-800 transition-all duration-300 font-medium tracking-wide p-3 rounded-2xl hover:bg-white/50 backdrop-blur-sm"
      whileHover={{ 
        scale: 1.05,
        x: 5
      }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.span
        className={`w-10 h-10 rounded-xl bg-gradient-to-br ${social.color} flex items-center justify-center shadow-lg`}
        whileHover={{ 
          scale: 1.1,
          rotate: [0, -5, 5, 0]
        }}
        transition={{ duration: 0.3 }}
      >
        <span className="text-white text-lg">{social.icon}</span>
      </motion.span>
      <div className="flex-1">
        <p className="font-semibold text-slate-800 group-hover:text-slate-900">{social.label}</p>
        <p className="text-xs text-slate-500 group-hover:text-slate-600">{social.handle}</p>
      </div>
    </motion.a>
  </motion.li>
);

// Animated link component
const AnimatedLink = ({ link, index, isService = false }) => (
  <motion.li
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
  >
    <motion.div
      whileHover={{ x: 5 }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      <Link
        to={link.href}
        className="group flex items-center gap-3 text-sm text-slate-600 hover:text-primary transition-all duration-300 font-medium tracking-wide py-2"
      >
        <motion.span
          className="text-lg"
          whileHover={{ 
            scale: 1.2,
            rotate: 5
          }}
        >
          {link.icon}
        </motion.span>
        <span className="relative">
          {link.label}
          <motion.span
            className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"
            initial={{ width: 0 }}
            whileHover={{ width: '100%' }}
          />
        </span>
      </Link>
    </motion.div>
  </motion.li>
);

function Footer({ currentYear }) {
  return (
    <footer className="relative border-t border-black/30 bg-gradient-to-br from-slate-200 via-blue-100 to-blue-200 overflow-hidden">
      {/* Background Elements */}
      <FloatingParticles />
      
      {/* Enhanced Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-slate-100/40" />
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
        className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -right-40 -bottom-20 h-80 w-80 rounded-full bg-gradient-to-r from-amber-200/20 to-orange-200/20 blur-3xl"
      />

      <Container className="relative pb-4 pt-14">
        <div className="grid gap-16 lg:grid-cols-2 xl:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <motion.div 
              className="flex items-center gap-4"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <motion.div
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, -5, 5, 0]
                }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <img
                  src="/logo.jpg"
                  alt="Tripsy Holidays logo"
                  className="h-20 w-20 rounded-2xl border-2 border-black/60 object-cover shadow-2xl"
                />
                <motion.div
                  className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity 
                  }}
                >
                  <span className="text-white text-xs">⭐</span>
                </motion.div>
              </motion.div>
              <div>
                <motion.p 
                  className="font-display text-4xl tracking-widest text-slate-900 font-black"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  TRIPSY
                </motion.p>
                <motion.p 
                  className="text-sm uppercase tracking-[0.35em] bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-display font-bold"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Holidays
                </motion.p>
              </div>
            </motion.div>

            <motion.p 
              className="text-base leading-relaxed text-slate-600 font-normal max-w-md"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Luxury travel experiences crafted with passion. We transform travel dreams into extraordinary journeys worldwide with personalized service and unforgettable memories.
            </motion.p>

            <motion.div 
              className="space-y-6 pt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-black/60 hover:border-primary/30 transition-all duration-300"
              >
                <motion.div
                  className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-accent flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="text-white text-lg">📞</span>
                </motion.div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-1">Call Us</p>
                  <p className="text-xl font-display font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">+91 9667493957</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-black/60 hover:border-primary/30 transition-all duration-300"
              >
                <motion.div
                  className="w-12 h-12 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="text-white text-lg">✉️</span>
                </motion.div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-1">Email</p>
                  <p className="text-base font-display font-black bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">Tripsyholidays@gmail.com</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Explore Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h4 
              className="text-sm uppercase tracking-widest bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-display font-bold mb-8 flex items-center gap-2"
              whileHover={{ x: 5 }}
            >
              <span>🧭</span>
              Explore
            </motion.h4>
            <ul className="space-y-0">
              {quickLinks.map((link, index) => (
                <AnimatedLink key={link.label} link={link} index={index} />
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.h4 
              className="text-sm uppercase tracking-widest bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-display font-bold mb-8 flex items-center gap-2"
              whileHover={{ x: 5 }}
            >
              <span>⭐</span>
              Services
            </motion.h4>
            <ul className="space-y-0">
              {services.map((link, index) => (
                <AnimatedLink key={link.label} link={link} index={index} isService={true} />
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.h4 
              className="text-sm uppercase tracking-widest bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-display font-bold mb-8 flex items-center gap-2"
              whileHover={{ x: 5 }}
            >
              <span>🌐</span>
              Connect With Us
            </motion.h4>
            <ul className="space-y-0">
              {socials.map((social, index) => (
                <AnimatedSocialIcon key={social.label} social={social} index={index} />
              ))}
            </ul>

            {/* Newsletter Signup */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-black/60"
            >
              <p className="text-sm font-semibold text-slate-800 mb-3">Stay Updated</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email..."
                  className="flex-1 px-4 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-primary to-accent text-white text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Join
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-6 pt-2 border-t border-black"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <motion.p 
              className="text-sm uppercase text-slate-900 font-semibold tracking-widest"
              whileHover={{ scale: 1.05 }}
            >
              © {currentYear} Tripsy Holidays. All rights reserved.
            </motion.p>
            
            <motion.p 
              className="text-sm text-slate-800 font-normal tracking-wide flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <motion.span
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity 
                }}
              >
                ✨
              </motion.span>
              Crafted with passion • Designed for wanderlust
              <motion.span
                animate={{ 
                  rotate: [0, -10, 10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  delay: 1 
                }}
              >
                ✨
              </motion.span>
            </motion.p>
          </div>

          {/* Developer Credit */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-6 pt-6 border-t border-black flex justify-center"
          >
            <p className="text-sm text-black font-normal tracking-wide">
              Made & Developed by{' '}
              <motion.a 
                href="https://tjfdigital.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:from-primary/80 hover:to-accent/80 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                TJF Digital
              </motion.a>
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </footer>
  );
}

export default Footer;