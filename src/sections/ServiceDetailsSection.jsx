import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { packages } from '../data/packages';

function ServiceDetailsSection() {
  const navigate = useNavigate();
  
  const domesticSample = packages.find(p => p.category === 'Domestic' && p.id === 1) || packages.find(p => p.category === 'Domestic');
  const internationalSample = packages.find(p => p.category === 'International' && p.id === 13) || packages.find(p => p.category === 'International');
  const spiritualSample = packages.find(p => p.category === 'Spiritual' && p.id === 19) || packages.find(p => p.category === 'Spiritual');

  const services = [
    {
      id: 1,
      title: domesticSample?.name || 'Domestic Tours',
      eyebrow: 'Popular Package',
      description: domesticSample?.description || 'Discover India with Tripsy Holidays',
      details: domesticSample?.fullDescription || 'From the majestic Himalayas in the North to the serene backwaters of the South, explore India\'s diverse landscapes and cultural heritage.',
      highlights: domesticSample?.includes?.slice(0, 6) || ['Comfortable accommodations', 'Local expert guides', 'Cultural immersion', 'Adventure activities', 'Family-friendly', 'All-inclusive meals'],
      image: domesticSample?.image || 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80',
      icon: '🏔️',
      cta: 'View Package',
      packageId: domesticSample?.id,
      price: domesticSample?.priceLabel,
      duration: domesticSample?.duration,
      rating: domesticSample?.rating,
    },
    {
      id: 2,
      title: internationalSample?.name || 'International Tours',
      eyebrow: 'Luxury Experience',
      description: internationalSample?.description || 'Explore the World Beyond Borders',
      details: internationalSample?.fullDescription || 'The world is full of breathtaking destinations waiting to be explored, and with Tripsy Holidays your global adventure begins in style.',
      highlights: internationalSample?.includes?.slice(0, 6) || ['Premium stays', 'Curated itineraries', 'Visa assistance', 'Personalized experiences', 'Expert managers', 'Concierge support'],
      image: internationalSample?.image || 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=600&q=80',
      icon: '🌍',
      cta: 'View Package',
      packageId: internationalSample?.id,
      price: internationalSample?.priceLabel,
      duration: internationalSample?.duration,
      rating: internationalSample?.rating,
    },
    {
      id: 3,
      title: spiritualSample?.name || 'Spiritual Tours',
      eyebrow: 'Sacred Journey',
      description: spiritualSample?.description || 'Embark on a Soul-Stirring Journey',
      details: spiritualSample?.fullDescription || 'Experience sacred shrines, ancient temples, and holy rivers in comfort and peace. Our Spiritual Tour Packages are thoughtfully designed for devotees and seekers.',
      highlights: spiritualSample?.includes?.slice(0, 6) || ['Sacred temple visits', 'Devotion-friendly stays', 'Vegetarian meals', 'Guided rituals', 'Group itineraries', 'Peaceful atmosphere'],
      image: spiritualSample?.image || 'https://images.unsplash.com/photo-1545043666-a70bdf26b84f?auto=format&fit=crop&w=600&q=80',
      icon: '🙏',
      cta: 'View Package',
      packageId: spiritualSample?.id,
      price: spiritualSample?.priceLabel,
      duration: spiritualSample?.duration,
      rating: spiritualSample?.rating,
    },
  ];

  return (
    <Container id="service-details">
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="group flex flex-col rounded-3xl border border-white/10 bg-gradient-to-br from-night/85 to-night/65 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-ocean/40 hover:shadow-[0_30px_70px_rgba(46,76,165,0.45)] backdrop-blur"
          >
            <div className="relative h-56 overflow-hidden bg-gradient-to-br from-night/40 to-transparent">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night/70 via-transparent to-transparent" />
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="absolute top-6 right-6 text-4xl"
                whileHover={{ scale: 1.2, rotate: 10 }}
              >
                {service.icon}
              </motion.div>
            </div>

            <div className="flex flex-col flex-1 p-7 space-y-4">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.35em] text-ocean font-display font-bold">{service.eyebrow}</p>
                <h3 className="font-display text-3xl text-white group-hover:text-ocean transition-colors font-bold tracking-tight">
                  {service.title}
                </h3>
              </div>

              <div className="flex items-center gap-4 text-sm font-body text-white/60">
                {service.duration && (
                  <div className="flex items-center gap-1.5">
                    <span>📅</span>
                    <span>{service.duration}</span>
                  </div>
                )}
                {service.price && (
                  <div className="flex items-center gap-1.5">
                    <span>💰</span>
                    <span>{service.price}</span>
                  </div>
                )}
                {service.rating && (
                  <div className="flex items-center gap-1.5">
                    <span>⭐</span>
                    <span className="text-yellow-300 font-semibold">{service.rating}</span>
                  </div>
                )}
              </div>

              <p className="text-base text-white/70 font-body leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-2 py-4 border-t border-white/10">
                <p className="text-xs uppercase tracking-[0.3em] text-ocean font-display font-bold">Highlights</p>
                <div className="space-y-1.5">
                  {service.highlights.slice(0, 2).map((highlight) => (
                    <div key={highlight} className="flex items-start gap-2">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-ocean mt-1.5" />
                      <span className="text-sm text-white/65 font-body">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                className="mt-auto pt-3"
              >
                <Button 
                  variant="glow" 
                  size="sm" 
                  className="w-full uppercase tracking-[0.25em] font-bold text-xs"
                  onClick={() => service.packageId && navigate(`/package/${service.packageId}`)}
                >
                  {service.cta}
                </Button>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </Container>
  );
}

export default ServiceDetailsSection;
