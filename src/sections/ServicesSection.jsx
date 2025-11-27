import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import { services } from '../data/services';

function ServicesSection() {
  const navigate = useNavigate();

  return (
    <Container id="services">
      <SectionHeading
        eyeline="Our Services"
        title={
          <>
            Comprehensive Travel <span className="text-ocean">Solutions</span>
          </>
        }
        subtitle="From domestic adventures to international expeditions, we offer specialized services tailored to every travel style and occasion."
      />
      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            viewport={{ once: true, amount: 0.2 }}
            onClick={() => navigate(`/service/${service.id}`)}
            whileHover={{ y: -8 }}
            className="group flex flex-col gap-6 rounded-3xl border border-black/10 bg-gradient-to-br from-white/12 to-white/5 p-8 backdrop-blur hover:border-ocean/60 hover:from-white/15 hover:to-white/8 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-ocean/25 cursor-pointer"
          >
            <div className="flex items-start justify-between">
              <motion.span 
                className="text-6xl"
                whileHover={{ scale: 1.25, rotate: 10 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                {service.icon}
              </motion.span>
              <span className="rounded-full bg-ocean/20 border border-ocean/40 px-4 py-1.5 text-[0.65rem] uppercase tracking-[0.35em] text-ocean font-display font-bold">
                {service.category}
              </span>
            </div>

            <div>
              <h3 className="font-display text-2xl text-white group-hover:text-ocean transition-colors mb-2 font-bold tracking-tight">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/75 font-body mb-3 line-clamp-2">{service.description}</p>
            </div>

            <div className="space-y-3 py-4 border-t border-black/10">
              <p className="text-xs uppercase tracking-[0.25em] text-ocean/80 font-display font-bold">Top Features</p>
              <div className="space-y-2">
                {service.features.slice(0, 3).map((feature) => (
                  <div key={feature} className="flex items-start gap-2.5">
                    <span className="flex-shrink-0 w-2 h-2 rounded-full bg-ocean mt-1" />
                    <span className="text-xs text-white/75 font-body">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-auto pt-6 border-t border-black/10">
              <motion.button 
                className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-ocean/80 hover:text-ocean transition-colors font-display font-bold group/link"
                whileHover={{ x: 5 }}
              >
                Learn More
                <span className="transition-transform group-hover/link:translate-x-1">→</span>
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-16 rounded-3xl border border-black/10 bg-gradient-to-r from-primary/20 via-ocean/15 to-primary/20 p-8 md:p-16 backdrop-blur hover:border-ocean/40 transition-all duration-300 hover:shadow-lg hover:shadow-ocean/20"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-ocean font-display font-bold mb-2">Why Choose Us</p>
            <h3 className="font-display text-4xl text-white mb-4 font-bold tracking-tight">
              Complete Travel Solutions
            </h3>
            <p className="text-white/80 leading-relaxed font-body text-base mb-5">
              From flights to hotels to complete journeys—our experts handle it all with care.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-2xl">✈️</span>
                <div>
                  <p className="font-display text-sm text-ocean font-bold uppercase tracking-wider">24/7 Travel Support</p>
                  <p className="text-xs text-white/70 font-body">Round-the-clock assistance during your journey</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">💎</span>
                <div>
                  <p className="font-display text-sm text-ocean font-bold uppercase tracking-wider">Verified Quality</p>
                  <p className="text-xs text-white/70 font-body">100% verified hotels, flights, and experiences</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <p className="font-display text-sm text-ocean font-bold uppercase tracking-wider">Best Price Guarantee</p>
                  <p className="text-xs text-white/70 font-body">Competitive rates with exclusive discounts</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {[
              { label: '25,000+', value: 'Happy Travelers', icon: '👥' },
              { label: '150+', value: 'Destinations', icon: '🌍' },
              { label: '10,000+', value: 'Hotel Partners', icon: '🏨' },
              { label: '50+', value: 'Countries', icon: '🗺️' },
            ].map((item) => (
              <motion.div 
                key={item.label} 
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-black/10 bg-gradient-to-br from-white/10 to-white/3 p-6 hover:bg-white/15 hover:border-ocean/40 transition-all text-center"
              >
                <p className="text-3xl mb-2">{item.icon}</p>
                <p className="font-display text-2xl text-ocean mt-2 font-bold">{item.label}</p>
                <p className="text-xs uppercase tracking-[0.25em] text-white/60 font-display font-bold mt-1">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </Container>
  );
}

export default ServicesSection;
