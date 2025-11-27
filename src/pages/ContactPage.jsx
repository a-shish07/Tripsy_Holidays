import { motion } from 'framer-motion';
import { useState } from 'react';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';

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

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interests: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const fieldValidators = {
    name: (value = '') => {
      const text = value.trim();
      return text.length >= 3 ? '' : 'Enter your full name';
    },
    email: (value = '') => {
      const normalized = value.trim();
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized) ? '' : 'Enter a valid email address';
    },
    interests: (value = '') => {
      const text = value.trim();
      if (!text) return '';
      return text.length >= 3 ? '' : 'Describe your interests in more detail';
    },
    message: (value = '') => {
      const text = value.trim();
      return text.length >= 10 ? '' : 'Message must be at least 10 characters';
    }
  };

  const markTouched = (fields = []) => {
    setTouched((prev) => {
      const updated = { ...prev };
      fields.forEach((field) => {
        updated[field] = true;
      });
      return updated;
    });
  };

  const validateField = (field, value = formData[field]) => {
    const validator = fieldValidators[field];
    if (!validator) return '';
    const error = validator(value ?? '');
    setErrors((prev) => {
      const updated = { ...prev };
      if (error) {
        updated[field] = error;
      } else {
        delete updated[field];
      }
      return updated;
    });
    return error;
  };

  const validateForm = () => {
    let valid = true;
    Object.keys(fieldValidators).forEach((field) => {
      if (validateField(field)) {
        valid = false;
      }
    });
    return valid;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    if (touched[name]) {
      validateField(name, value);
    }
  };

  const handleBlur = (field) => {
    markTouched([field]);
    validateField(field);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    markTouched(Object.keys(fieldValidators));
    if (!validateForm()) return;
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      interests: '',
      message: ''
    });
    setErrors({});
    setTouched({});
  };

  const contactMethods = [
    { 
      icon: '📞', 
      label: 'Phone', 
      value: '+91 9667493957', 
      desc: 'Available Mon-Sat, 9AM-7PM',
      gradient: 'from-blue-500 to-cyan-600',
      href: 'tel:+919667493957'
    },
    { 
      icon: '✉️', 
      label: 'Email', 
      value: 'Tripsyholidays@gmail.com', 
      desc: 'We respond within 24 hours',
      gradient: 'from-purple-500 to-pink-600',
      href: 'mailto:Tripsyholidays@gmail.com'
    },
    { 
      icon: '📍', 
      label: 'Visit Us', 
      value: 'L block, Gaur City 1, Sector 4, Noida, Ghaziabad, Uttar Pradesh 201318', 
      desc: 'Schedule an in-person meeting',
      gradient: 'from-amber-500 to-orange-600',
      href: 'https://maps.google.com/?q=L+block,+Gaur+City+1,+Sector+4,+Noida,+Ghaziabad,+Uttar+Pradesh+201318'
    },
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
          className="text-center space-y-8 max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-primary to-accent px-6 py-3 shadow-lg"
          >
            <span className="text-white text-lg">💫</span>
            <span className="text-sm font-bold text-white tracking-widest">GET IN TOUCH</span>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-display font-black leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Let's Craft Your
            </span>{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Perfect Escape
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Our travel artists are here to answer questions and help you design the journey of a lifetime. 
            Let's create unforgettable memories together.
          </motion.p>
        </motion.div>
      </Container>

      {/* Contact Methods */}
      <Container className="pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {contactMethods.map((contact, index) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target={contact.href.includes('http') ? '_blank' : '_self'}
              rel={contact.href.includes('http') ? 'noopener noreferrer' : ''}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ 
                y: -8,
                scale: 1.02
              }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 300
              }}
              viewport={{ once: true }}
              className="group relative rounded-3xl border border-black/50 bg-white/80 backdrop-blur-sm p-8 text-center overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-black/80 cursor-pointer"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${contact.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Animated Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${contact.gradient} flex items-center justify-center shadow-lg`}
              >
                <span className="text-2xl text-white">{contact.icon}</span>
              </motion.div>

              {/* Content */}
              <div className="relative z-10 space-y-3">
                <motion.p 
                  className="text-sm uppercase tracking-widest font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  {contact.label}
                </motion.p>
                <motion.p 
                  className="font-display text-xl font-black text-slate-900 group-hover:text-slate-800 transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {contact.value}
                </motion.p>
                <motion.p 
                  className="text-sm text-slate-600 group-hover:text-slate-700 transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                >
                  {contact.desc}
                </motion.p>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className={`absolute inset-0 bg-gradient-to-br ${contact.gradient} rounded-3xl blur-xl opacity-10`} />
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Contact Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl blur-2xl" />
          <div className="relative rounded-3xl border border-black/50 bg-white/80 backdrop-blur-sm p-12 shadow-2xl">
            <div className="max-w-2xl mx-auto">
              {/* Form Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <motion.h3 
                  className="font-display text-4xl font-black mb-4 leading-tight"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                    Send Us a
                  </span>{' '}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Message
                  </span>
                </motion.h3>
                <motion.p 
                  className="text-lg text-slate-600"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Tell us about your travel dreams and we'll help make them reality
                </motion.p>
              </motion.div>

              {/* Contact Form */}
              <motion.form 
                className="space-y-8"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {/* Name & Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full" />
                      Full Name
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onBlur={() => handleBlur('name')}
                      className={`w-full rounded-2xl border bg-white/80 px-6 py-4 text-slate-900 placeholder-slate-400 transition-all duration-300 focus:outline-none focus:bg-white focus:ring-4 ${errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-slate-200 focus:border-primary/50 focus:ring-primary/20'}`}
                      placeholder="Your full name"
                      required
                    />
                    {touched.name && errors.name && (
                      <p className="mt-2 text-sm text-red-500 font-semibold">{errors.name}</p>
                    )}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full" />
                      Email Address
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onBlur={() => handleBlur('email')}
                      className={`w-full rounded-2xl border bg-white/80 px-6 py-4 text-slate-900 placeholder-slate-400 transition-all duration-300 focus:outline-none focus:bg-white focus:ring-4 ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-slate-200 focus:border-primary/50 focus:ring-primary/20'}`}
                      placeholder="your.email@example.com"
                      required
                    />
                    {touched.email && errors.email && (
                      <p className="mt-2 text-sm text-red-500 font-semibold">{errors.email}</p>
                    )}
                  </motion.div>
                </div>

                {/* Travel Interests */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full" />
                    Travel Interests
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    name="interests"
                    value={formData.interests}
                    onChange={handleInputChange}
                    onBlur={() => handleBlur('interests')}
                    className={`w-full rounded-2xl border bg-white/80 px-6 py-4 text-slate-900 placeholder-slate-400 transition-all duration-300 focus:outline-none focus:bg-white focus:ring-4 ${errors.interests ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-slate-200 focus:border-primary/50 focus:ring-primary/20'}`}
                    placeholder="e.g., Adventure, Spiritual, Luxury, Family, Honeymoon..."
                  />
                  {touched.interests && errors.interests && (
                    <p className="mt-2 text-sm text-red-500 font-semibold">{errors.interests}</p>
                  )}
                </motion.div>

                {/* Message */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full" />
                    Your Message
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    rows="6"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onBlur={() => handleBlur('message')}
                    className={`w-full rounded-2xl border bg-white/80 px-6 py-4 text-slate-900 placeholder-slate-400 transition-all duration-300 focus:outline-none focus:bg-white resize-none focus:ring-4 ${errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-slate-200 focus:border-primary/50 focus:ring-primary/20'}`}
                    placeholder="Tell us about your travel dreams, preferences, budget, and any special requirements..."
                    required
                  />
                  {touched.message && errors.message && (
                    <p className="mt-2 text-sm text-red-500 font-semibold">{errors.message}</p>
                  )}
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  viewport={{ once: true }}
                  className="pt-4"
                >
                  <motion.button
                    type="submit"
                    whileHover={{ 
                      scale: 1.05,
                      background: "linear-gradient(135deg, var(--primary), var(--accent))"
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    className="w-full rounded-2xl bg-gradient-to-r from-primary to-accent px-8 py-5 text-white font-bold text-lg uppercase tracking-widest shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    <span>Send Message</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      ✈️
                    </motion.span>
                  </motion.button>
                </motion.div>
              </motion.form>

              {/* Privacy Note */}
              <motion.p 
                className="text-sm text-slate-500 text-center mt-8 pt-6 border-t border-slate-200/60"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.0 }}
                viewport={{ once: true }}
              >
                We respect your privacy. Your information will only be used to respond to your inquiry and provide the best travel experience.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </Container>

      {/* Quick Response Banner */}
      <Container className="pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative rounded-3xl border border-black/50 bg-white/80 backdrop-blur-sm p-12 text-center overflow-hidden group"
        >
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full -top-48 -left-48" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-accent/10 to-transparent rounded-full -bottom-48 -right-48" />
          </div>

          <div className="relative space-y-6">
            <motion.h3 
              className="font-display text-3xl md:text-4xl font-black leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Quick Response
              </span>{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Guaranteed
              </span>
            </motion.h3>
            
            <motion.p 
              className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              We understand the excitement of planning your next adventure. That's why we guarantee to respond to all inquiries within 24 hours, 
              often much sooner!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center justify-center gap-8 pt-4"
            >
              {[
                { icon: '⚡', text: '24-Hour Response' },
                { icon: '🎯', text: 'Expert Advice' },
                { icon: '💫', text: 'Personalized Service' },
              ].map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-3 text-slate-700"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-semibold">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}

export default ContactPage;