import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from '../components/Container';
import Button from '../components/Button';
import { services } from '../data/services';

function ServiceDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const service = services.find(s => s.id === parseInt(id));

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display text-white mb-4">Service Not Found</h1>
          <Button onClick={() => navigate('/')} variant="glow">
            Back Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-0">
      <Container className="pt-8">
        <motion.button
          onClick={() => navigate(-1)}
          whileHover={{ x: -5 }}
          className="flex items-center gap-2 text-ocean hover:text-primary transition-colors mb-12"
        >
          <span>←</span>
          <span className="text-sm font-semibold uppercase tracking-wide">Back</span>
        </motion.button>

        <div className="grid lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="rounded-2xl overflow-hidden border border-white/10">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-96 object-cover"
              />
            </div>

            <div>
              <span className="inline-block bg-ocean/20 text-ocean px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.25em] mb-4">
                {service.category}
              </span>
              <h1 className="font-display text-4xl md:text-5xl text-white mb-6">{service.title}</h1>
              <p className="text-white/70 text-lg leading-relaxed mb-8">{service.fullDescription}</p>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
                <h2 className="font-display text-2xl text-white mb-6">What You Get</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.features.map((feature) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-ocean/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-ocean text-sm">✓</span>
                      </div>
                      <span className="text-white/70">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-r from-primary/15 to-ocean/15 p-8">
                <h2 className="font-display text-2xl text-white mb-4">Pricing</h2>
                <p className="text-white/70 text-lg mb-6">{service.pricing}</p>
                <p className="text-white/50 text-sm">
                  Contact our travel experts for detailed pricing and customized packages
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 sticky top-32 space-y-6">
              <div>
                <p className="text-xs uppercase text-white/50 font-bold mb-3 tracking-wide">Service Details</p>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-white/50 uppercase tracking-wide font-bold mb-1">Category</p>
                    <p className="font-display text-lg text-ocean">{service.category}</p>
                  </div>
                  <div>
                    <p className="text-xs text-white/50 uppercase tracking-wide font-bold mb-1">Service Type</p>
                    <p className="font-display text-lg text-ocean">{service.title}</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 pt-6 space-y-4">
                <p className="text-sm text-white/70 leading-relaxed">
                  This service is available with all our curated travel packages and can be customized for your specific needs.
                </p>
              </div>

              <div className="space-y-3">
                <Button variant="glow" className="w-full" size="lg">
                  Get Started
                </Button>
                <Button variant="secondary" className="w-full" size="lg">
                  Learn More
                </Button>
              </div>

              <div className="border-t border-white/10 pt-6">
                <p className="text-xs uppercase text-white/50 font-bold mb-3">Need Help?</p>
                <p className="text-sm text-white/70 mb-4">
                  Our travel consultants are available 24/7 to help you choose the perfect service.
                </p>
                <Button variant="secondary" className="w-full" size="sm">
                  Contact Us
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-gradient-to-r from-primary/15 to-ocean/15 p-12 text-center"
          >
            <h2 className="font-display text-3xl text-white mb-4">Ready to Get Started?</h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Start your journey with our {service.title} service. Our expert team is ready to create the perfect travel experience for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="glow" size="lg" className="uppercase tracking-wide">
                Book Now
              </Button>
              <Button variant="secondary" size="lg" className="uppercase tracking-wide">
                Get Free Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}

export default ServiceDetailsPage;
