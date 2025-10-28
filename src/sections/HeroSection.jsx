import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { packages } from '../data/packages';

function HeroSection() {
  const navigate = useNavigate();
  const featuredPackage = packages.find(p => p.badge === 'Popular') || packages[0];
  
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ y: [0, 30, 0], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -right-1/4 top-1/4 h-[800px] w-[800px] rounded-full bg-gradient-to-br from-ocean/25 to-transparent blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -30, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute -left-1/4 -bottom-1/4 h-[700px] w-[700px] rounded-full bg-gradient-to-tr from-primary/20 to-transparent blur-3xl"
        />
      </div>

      <div className="px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="w-fit"
              >
                <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-ocean/20 to-primary/20 border border-ocean/40 backdrop-blur-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-ocean opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-ocean" />
                  </span>
                  <span className="text-xs uppercase tracking-[0.2em] text-white/90 font-semibold">✨ Award-Winning Travel</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="space-y-4"
              >
                <h1 className="font-display text-6xl md:text-7xl lg:text-7xl font-black tracking-tight leading-[1.1]">
                  <span className="block text-white">Craft Your</span>
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="block bg-gradient-to-r from-ocean via-sky-400 to-cyan-400 bg-clip-text text-transparent"
                  >
                    Dream Journey
                  </motion.span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-lg text-white/70 leading-relaxed max-w-xl font-light"
              >
                From iconic landmarks to hidden gems. We create personalized travel experiences that transform ordinary vacations into extraordinary memories.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    variant="glow"
                    size="lg"
                    className="w-full sm:w-auto uppercase tracking-[0.15em] font-bold text-base"
                    onClick={() => navigate('/packages')}
                  >
                    Explore Packages
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto uppercase tracking-[0.15em] font-bold text-base border border-white/30 hover:bg-white/10 transition-all"
                    onClick={() => navigate('/contact')}
                  >
                    Plan Custom Trip
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="pt-8 space-y-4 border-t border-white/10"
              >
                <div className="grid grid-cols-3 gap-6">
                  {[
                    { number: '25K+', label: 'Happy Travelers' },
                    { number: '150+', label: 'Destinations' },
                    { number: '4.9★', label: 'Rated' },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + i * 0.1, duration: 0.6 }}
                    >
                      <p className="font-display text-3xl font-bold bg-gradient-to-r from-ocean to-cyan-400 bg-clip-text text-transparent">
                        {stat.number}
                      </p>
                      <p className="text-xs uppercase tracking-[0.2em] text-white/50 mt-1 font-medium">
                        {stat.label}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="relative hidden lg:block"
            >
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-ocean/20">
                  <img
                    src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80"
                    alt="Travel"
                    className="w-full h-[550px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-night/30 to-transparent" />
                  
                  <motion.div
                    animate={{ y: [0, 15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute bottom-0 left-0 right-0 p-6"
                  >
                    <div className="backdrop-blur-lg bg-night/70 border border-ocean/30 rounded-2xl p-6 shadow-2xl shadow-ocean/20">
                      <div className="space-y-3">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <p className="text-xs uppercase tracking-[0.3em] text-ocean/80 font-semibold mb-1">Featured</p>
                            <p className="font-display text-2xl font-bold text-white line-clamp-1">{featuredPackage?.name}</p>
                          </div>
                          <div className="text-yellow-400 text-lg font-bold ml-3">
                            {Math.floor(featuredPackage?.rating || 4.8)}⭐
                          </div>
                        </div>
                        <p className="text-sm text-white/60 flex gap-4">
                          <span>📅 {featuredPackage?.duration}</span>
                          <span>💰 {featuredPackage?.priceLabel}</span>
                        </p>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => navigate(`/package/${featuredPackage?.id}`)}
                          className="w-full mt-3 py-2.5 bg-gradient-to-r from-ocean to-cyan-500 rounded-lg font-bold text-xs uppercase tracking-[0.2em] text-white hover:shadow-lg hover:shadow-ocean/50 transition-all"
                        >
                          Book Package
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-3 gap-4 mt-24"
          >
            {[
              { icon: '🌍', title: 'Global Reach', desc: '150+ destinations worldwide' },
              { icon: '✓', title: '100% Verified', desc: 'Trusted hotels & experiences' },
              { icon: '🎁', title: 'Best Value', desc: '24/7 support & price match' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ borderColor: 'rgb(14, 165, 233)' }}
                className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur p-6 hover:shadow-lg hover:shadow-ocean/20 transition-all"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h4 className="font-display font-bold text-white mb-1">{item.title}</h4>
                <p className="text-xs text-white/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
