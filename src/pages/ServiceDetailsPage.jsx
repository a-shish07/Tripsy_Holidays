import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Container from '../components/Container';
import Button from '../components/Button';
import { services } from '../data/services';

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

function ServiceDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const service = services.find(s => s.id === parseInt(id));

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          <motion.h1 
            className="text-4xl font-display font-black text-slate-900 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            Service Not Found
          </motion.h1>
          <motion.p 
            className="text-slate-600 text-lg mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            The service you're looking for doesn't exist or has been moved.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Button 
              onClick={() => navigate('/')} 
              variant="primary"
              className="rounded-2xl px-8 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Back to Home
            </Button>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📖' },
    { id: 'features', label: 'Features', icon: '⭐' },
    { id: 'pricing', label: 'Pricing', icon: '💰' },
    { id: 'faq', label: 'FAQ', icon: '❓' },
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
            Back to Services
          </span>
        </motion.button>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden border-2 border-black/60 shadow-2xl group"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
              
              {/* Category Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute top-6 left-6"
              >
                <span className="inline-flex items-center gap-2 rounded-2xl bg-white/90 backdrop-blur-sm px-4 py-2 text-sm font-bold uppercase tracking-widest text-slate-700 shadow-lg">
                  <span className="text-primary">✨</span>
                  {service.category}
                </span>
              </motion.div>
            </motion.div>

            {/* Tabs Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex overflow-x-auto rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-sm p-2 shadow-lg"
            >
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-3 rounded-xl px-6 py-3 text-sm font-semibold uppercase tracking-widest transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-primary to-accent text-white shadow-md'
                      : 'text-slate-700 hover:text-slate-900'
                  }`}
                >
                  <span className="text-lg">{tab.icon}</span>
                  {tab.label}
                </motion.button>
              ))}
            </motion.div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {activeTab === 'overview' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="space-y-6"
                  >
                    <motion.h1 
                      className="font-display text-4xl md:text-5xl font-black text-slate-900 leading-tight"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {service.title}
                    </motion.h1>
                    
                    <motion.p 
                      className="text-xl text-slate-600 leading-relaxed"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {service.fullDescription}
                    </motion.p>

                    {/* Key Highlights */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="grid md:grid-cols-2 gap-6 mt-8"
                    >
                      {service.highlights?.map((highlight, index) => (
                        <motion.div
                          key={highlight}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                          className="flex items-center gap-4 p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300"
                        >
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-primary to-accent flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-lg">✓</span>
                          </div>
                          <span className="text-slate-700 font-medium">{highlight}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                )}

                {activeTab === 'features' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="space-y-6"
                  >
                    <h2 className="font-display text-3xl font-black text-slate-900">What You Get</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      {service.features.map((feature, index) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 + index * 0.1 }}
                          whileHover={{ scale: 1.02, y: -2 }}
                          className="flex items-start gap-4 p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300"
                        >
                          <motion.div
                            className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-accent flex items-center justify-center flex-shrink-0"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                          >
                            <span className="text-white text-xl">⭐</span>
                          </motion.div>
                          <div>
                            <p className="text-slate-700 font-medium leading-relaxed">{feature}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === 'pricing' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="space-y-6"
                  >
                    <h2 className="font-display text-3xl font-black text-slate-900">Pricing & Packages</h2>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="rounded-2xl border border-black/60 bg-white/80 backdrop-blur-sm p-8 shadow-lg"
                    >
                      <p className="text-xl text-slate-700 mb-6">{service.pricing}</p>
                      <p className="text-slate-600 text-sm">
                        Contact our travel experts for detailed pricing and customized packages tailored to your specific needs and preferences.
                      </p>
                    </motion.div>
                  </motion.div>
                )}

                {activeTab === 'faq' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="space-y-6"
                  >
                    <h2 className="font-display text-3xl font-black text-slate-900">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                      {service.faq?.map((item, index) => (
                        <motion.div
                          key={item.question}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 + index * 0.1 }}
                          className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-sm p-6 shadow-sm hover:shadow-md transition-all duration-300"
                        >
                          <h3 className="font-display text-lg font-semibold text-slate-900 mb-3">{item.question}</h3>
                          <p className="text-slate-600 leading-relaxed">{item.answer}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="rounded-3xl border border-black/60 bg-white/80 backdrop-blur-sm p-8 sticky top-32 space-y-8 shadow-2xl">
              {/* Service Details */}
              <div>
                <motion.p 
                  className="text-sm uppercase tracking-widest font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Service Details
                </motion.p>
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <p className="text-xs text-slate-500 uppercase tracking-wide font-bold mb-1">Category</p>
                    <p className="font-display text-lg font-semibold text-slate-900">{service.category}</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <p className="text-xs text-slate-500 uppercase tracking-wide font-bold mb-1">Service Type</p>
                    <p className="font-display text-lg font-semibold text-slate-900">{service.title}</p>
                  </motion.div>
                </div>
              </div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="border-t border-slate-200/60 pt-6 space-y-4"
              >
                <p className="text-sm text-slate-600 leading-relaxed">
                  This service is available with all our curated travel packages and can be customized for your specific needs and preferences.
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="space-y-3"
              >
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    variant="primary" 
                    size="lg" 
                    className="w-full rounded-2xl bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Get Started
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full rounded-2xl border-2 border-primary/20 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                  >
                    Learn More
                  </Button>
                </motion.div>
              </motion.div>

              {/* Support Section */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="border-t border-slate-200/60 pt-6"
              >
                <p className="text-xs uppercase tracking-widest font-bold text-slate-500 mb-3">Need Help?</p>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                  Our travel consultants are available 24/7 to help you choose the perfect service for your journey.
                </p>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full rounded-2xl border-slate-200 hover:border-primary/30 transition-all duration-300"
                  >
                    Contact Us
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 pt-16 border-t border-slate-200/60"
        >
          <div className="relative rounded-3xl border border-black/60 bg-white/80 backdrop-blur-sm p-12 text-center overflow-hidden group">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full -top-48 -left-48" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-accent/10 to-transparent rounded-full -bottom-48 -right-48" />
            </div>

            <div className="relative space-y-6">
              <motion.h2 
                className="font-display text-3xl md:text-4xl font-black leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  Ready to Get Started?
                </span>
              </motion.h2>
              
              <motion.p 
                className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Start your journey with our {service.title} service. Our expert team is ready to create the perfect travel experience tailored just for you.
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

export default ServiceDetailsPage;