import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaUser, 
  FaPhone, 
  FaEnvelope, 
  FaCalendarAlt, 
  FaUsers, 
  FaMapMarkerAlt,
  FaPlane,
  FaCheck,
  FaStar,
  FaGlobeAmericas
} from 'react-icons/fa';

function BookNowForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    email: '',
    travelDate: '',
    destination: '',
    noOfPax: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [focusedField, setFocusedField] = useState(null);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const destinations = [
    'Maldives', 'Thailand', 'Bali', 'Dubai', 'Paris',
    'Switzerland', 'Japan', 'Singapore', 'Istanbul', 'Iceland',
    'Greece', 'Italy', 'Spain', 'Australia', 'New Zealand',
    'Canada', 'USA', 'UK', 'Germany', 'Austria'
  ];

  const fieldValidators = {
    name: (value = '') => {
      const text = value.trim();
      return text.length >= 3 ? '' : 'Enter your full name';
    },
    contactNumber: (value = '') => {
      const digits = value.replace(/\D/g, '');
      if (!digits) return 'Enter your contact number';
      return digits.length >= 7 && digits.length <= 15 ? '' : 'Enter a valid contact number';
    },
    email: (value = '') => {
      const normalized = value.trim();
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized) ? '' : 'Enter a valid email address';
    },
    travelDate: (value = '') => {
      if (!value) return 'Select your travel date';
      const selected = new Date(value);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return selected >= today ? '' : 'Travel date cannot be in the past';
    },
    destination: (value = '') => (value ? '' : 'Select a destination'),
    noOfPax: (value = '') => {
      const count = Number(value);
      if (!count) return 'Enter number of travelers';
      if (count < 1 || count > 20) return 'Travelers must be between 1 and 20';
      return '';
    },
    message: (value = '') => {
      const text = value.trim();
      return text.length >= 10 ? '' : 'Tell us a bit more about your plans';
    }
  };

  const stepFields = {
    1: ['name', 'contactNumber', 'email'],
    2: ['travelDate', 'noOfPax', 'destination'],
    3: ['message']
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

  const validateFields = (fields = []) => {
    let valid = true;
    fields.forEach((field) => {
      if (validateField(field)) {
        valid = false;
      }
    });
    return valid;
  };

  const validateAll = () => validateFields(Object.keys(fieldValidators));

  const handleFieldBlur = (field) => {
    setFocusedField(null);
    markTouched([field]);
    validateField(field);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (touched[name]) {
      validateField(name, value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    markTouched(Object.keys(fieldValidators));
    if (!validateAll()) return;
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setSubmitted(true);
    setFormData({
      name: '',
      contactNumber: '',
      email: '',
      travelDate: '',
      destination: '',
      noOfPax: '',
      message: ''
    });
    setErrors({});
    setTouched({});

    setTimeout(() => {
      setSubmitted(false);
      setCurrentStep(1);
      onClose();
    }, 3000);
  };

  const nextStep = () => {
    const fields = stepFields[currentStep] || [];
    markTouched(fields);
    if (!validateFields(fields)) return;
    setCurrentStep(prev => Math.min(prev + 1, 3));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  const modalVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8, 
      y: 50,
      rotateX: 10
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 0.6
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 0.5
      }
    },
    exit: { 
      opacity: 0, 
      x: -50,
      transition: {
        duration: 0.3
      }
    }
  };

  const floatingIcons = [
    { icon: '✈️', delay: 0 },
    { icon: '🏝️', delay: 1 },
    { icon: '🏔️', delay: 2 },
    { icon: '🌆', delay: 3 },
    { icon: '🏛️', delay: 4 },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={overlayVariants}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gradient-to-br from-slate-900/95 via-blue-400/90 to-blue-800/95 backdrop-blur-xl"
          onClick={onClose}
        >
          {/* Floating Background Icons */}
          <div className="absolute inset-0 overflow-hidden">
            {floatingIcons.map((item, index) => (
              <motion.div
                key={index}
                initial={{ 
                  opacity: 0,
                  y: 100,
                  x: Math.random() * 100 - 50
                }}
                animate={{ 
                  opacity: [0.1, 0.3, 0.1],
                  y: [100, -100, 100],
                  x: [Math.random() * 100 - 50, Math.random() * 100 - 50, Math.random() * 100 - 50]
                }}
                transition={{
                  duration: 15 + Math.random() * 10,
                  repeat: Infinity,
                  delay: item.delay,
                  ease: "linear"
                }}
                className="absolute text-4xl pointer-events-none"
                style={{
                  left: `${Math.random() * 100}%`,
                }}
              >
                {item.icon}
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={modalVariants}
            className="relative w-full max-w-2xl rounded-3xl border border-black/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl shadow-2xl shadow-black/50 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Animated Header */}
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 opacity-90">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-24 -right-24 w-48 h-48 bg-white/20 rounded-full blur-xl"
                />
                <motion.div
                  animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.4, 0.2, 0.4],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                  className="absolute -bottom-32 -left-32 w-40 h-40 bg-cyan-400/20 rounded-full blur-xl"
                />
              </div>
              
              <div className="relative px-8 py-8 text-center">
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm transition-all duration-300 border border-black/30"
                >
                  ✕
                </motion.button>
                
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", bounce: 0.6, duration: 0.8 }}
                  className="mx-auto mb-4 w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center border border-black/30 backdrop-blur-sm"
                >
                  <FaPlane className="text-white text-2xl" />
                </motion.div>
                
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl font-bold text-white mb-2"
                >
                  Begin Your Journey
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-blue-100 text-lg font-light"
                >
                  Let us craft your perfect travel experience
                </motion.p>
              </div>
            </div>

            {/* Progress Steps */}
            <div className="px-8 pt-6">
              <div className="flex items-center justify-between mb-8">
                {[1, 2, 3].map((step) => (
                  <div key={step} className="flex items-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: step * 0.1 }}
                      className={`flex items-center justify-center w-10 h-10 rounded-full border-2 font-bold text-sm ${
                        currentStep >= step
                          ? 'bg-blue-500 border-blue-500 text-white shadow-lg shadow-blue-500/30'
                          : 'border-gray-300 text-gray-400'
                      } transition-all duration-300`}
                    >
                      {currentStep > step ? <FaCheck className="w-4 h-4" /> : step}
                    </motion.div>
                    {step < 3 && (
                      <div className={`w-16 h-1 mx-2 rounded-full ${
                        currentStep > step ? 'bg-blue-500' : 'bg-gray-300'
                      } transition-all duration-300`} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="flex flex-col items-center justify-center px-8 py-16"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", bounce: 0.6, duration: 0.8 }}
                    className="mb-6 w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30"
                  >
                    <FaCheck className="text-black text-2xl" />
                  </motion.div>
                  
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl font-bold text-slate-900 mb-3 text-center"
                  >
                    Adventure Awaits! 🎉
                  </motion.h3>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-center text-slate-900 text-lg leading-relaxed max-w-md"
                  >
                    Your journey request has been received! Our travel experts will contact you within 24 hours to craft your perfect experience.
                  </motion.p>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex items-center gap-4 mt-6 text-sm text-slate-500"
                  >
                    <div className="flex items-center gap-2">
                      <FaStar className="text-yellow-400" />
                      <span>Personalized Itinerary</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaStar className="text-yellow-400" />
                      <span>Best Price Guarantee</span>
                    </div>
                  </motion.div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  variants={stepVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  onSubmit={handleSubmit}
                  className="space-y-6 px-8 pb-8"
                >
                  {/* Step 1: Personal Information */}
                  {currentStep === 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="space-y-6"
                    >
                      <div className="grid md:grid-cols-2 gap-6">
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          className="space-y-2"
                        >
                          <label className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                            <FaUser className="text-blue-500" />
                            Full Name *
                          </label>
                          <motion.input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('name')}
                            onBlur={() => handleFieldBlur('name')}
                            required
                            placeholder="Enter your full name"
                            className={`w-full rounded-xl border-2 bg-white px-4 py-4 text-slate-900 placeholder-slate-400 transition-all duration-300 backdrop-blur-sm focus:outline-none focus:ring-4 ${errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-slate-200 focus:border-blue-500 focus:ring-blue-500/20'}`}
                            whileFocus={{ scale: 1.02 }}
                          />
                          {touched.name && errors.name && (
                            <p className="text-sm text-red-500 font-semibold">{errors.name}</p>
                          )}
                        </motion.div>

                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          className="space-y-2"
                        >
                          <label className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                            <FaPhone className="text-green-500" />
                            Contact Number *
                          </label>
                          <input
                            type="tel"
                            name="contactNumber"
                            value={formData.contactNumber}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('contact')}
                            onBlur={() => handleFieldBlur('contactNumber')}
                            required
                            placeholder="+91 XXX XXX XXXX"
                            className={`w-full rounded-xl border-2 bg-white px-4 py-4 text-slate-900 placeholder-slate-400 transition-all duration-300 backdrop-blur-sm focus:outline-none focus:ring-4 ${errors.contactNumber ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-slate-200 focus:border-green-500 focus:ring-green-500/20'}`}
                          />
                          {touched.contactNumber && errors.contactNumber && (
                            <p className="text-sm text-red-500 font-semibold">{errors.contactNumber}</p>
                          )}
                        </motion.div>
                      </div>

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="space-y-2"
                      >
                        <label className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                          <FaEnvelope className="text-purple-500" />
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => handleFieldBlur('email')}
                          required
                          placeholder="your@email.com"
                          className={`w-full rounded-xl border-2 bg-white px-4 py-4 text-slate-900 placeholder-slate-400 transition-all duration-300 backdrop-blur-sm focus:outline-none focus:ring-4 ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-slate-200 focus:border-purple-500 focus:ring-purple-500/20'}`}
                        />
                        {touched.email && errors.email && (
                          <p className="text-sm text-red-500 font-semibold">{errors.email}</p>
                        )}
                      </motion.div>
                    </motion.div>
                  )}

                  {/* Step 2: Travel Details */}
                  {currentStep === 2 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="space-y-6"
                    >
                      <div className="grid md:grid-cols-2 gap-6">
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          className="space-y-2"
                        >
                          <label className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                            <FaCalendarAlt className="text-orange-500" />
                            Travel Date *
                          </label>
                          <input
                            type="date"
                            name="travelDate"
                            value={formData.travelDate}
                            onChange={handleChange}
                            onBlur={() => handleFieldBlur('travelDate')}
                            required
                            className={`w-full rounded-xl border-2 bg-white px-4 py-4 text-slate-900 transition-all duration-300 backdrop-blur-sm focus:outline-none focus:ring-4 ${errors.travelDate ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-slate-200 focus:border-orange-500 focus:ring-orange-500/20'}`}
                          />
                          {touched.travelDate && errors.travelDate && (
                            <p className="text-sm text-red-500 font-semibold">{errors.travelDate}</p>
                          )}
                        </motion.div>

                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          className="space-y-2"
                        >
                          <label className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                            <FaUsers className="text-cyan-500" />
                            Travelers *
                          </label>
                          <input
                            type="number"
                            name="noOfPax"
                            value={formData.noOfPax}
                            onChange={handleChange}
                            onBlur={() => handleFieldBlur('noOfPax')}
                            required
                            min="1"
                            max="20"
                            placeholder="Number of people"
                            className={`w-full rounded-xl border-2 bg-white px-4 py-4 text-slate-900 placeholder-slate-400 transition-all duration-300 backdrop-blur-sm focus:outline-none focus:ring-4 ${errors.noOfPax ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-slate-200 focus:border-cyan-500 focus:ring-cyan-500/20'}`}
                          />
                          {touched.noOfPax && errors.noOfPax && (
                            <p className="text-sm text-red-500 font-semibold">{errors.noOfPax}</p>
                          )}
                        </motion.div>
                      </div>

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="space-y-2"
                      >
                        <label className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                          <FaGlobeAmericas className="text-red-500" />
                          Dream Destination *
                        </label>
                        <select
                          name="destination"
                          value={formData.destination}
                          onChange={handleChange}
                          onBlur={() => handleFieldBlur('destination')}
                          required
                          className={`w-full rounded-xl border-2 bg-white px-4 py-4 text-slate-900 transition-all duration-300 backdrop-blur-sm appearance-none focus:outline-none focus:ring-4 ${errors.destination ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-slate-200 focus:border-red-500 focus:ring-red-500/20'}`}
                        >
                          <option value="">Where would you like to go?</option>
                          {destinations.map((dest) => (
                            <option key={dest} value={dest}>
                              🌍 {dest}
                            </option>
                          ))}
                        </select>
                        {touched.destination && errors.destination && (
                          <p className="text-sm text-red-500 font-semibold">{errors.destination}</p>
                        )}
                      </motion.div>
                    </motion.div>
                  )}

                  {/* Step 3: Additional Information */}
                  {currentStep === 3 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="space-y-6"
                    >
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="space-y-2"
                      >
                        <label className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                          <FaMapMarkerAlt className="text-indigo-500" />
                          Special Requests *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          onBlur={() => handleFieldBlur('message')}
                          placeholder="Tell us about your dream vacation, special requirements, or any specific preferences..."
                          rows="4"
                          required
                          className={`w-full rounded-xl border-2 bg-white px-4 py-4 text-slate-900 placeholder-slate-400 transition-all duration-300 backdrop-blur-sm resize-none focus:outline-none focus:ring-4 ${errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-slate-200 focus:border-indigo-500 focus:ring-indigo-500/20'}`}
                        />
                        {touched.message && errors.message && (
                          <p className="text-sm text-red-500 font-semibold">{errors.message}</p>
                        )}
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200"
                      >
                        <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                          <FaStar className="text-yellow-400" />
                          What's Next?
                        </h4>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>✓ Personalized itinerary within 24 hours</li>
                          <li>✓ Best price guarantee</li>
                          <li>✓ 24/7 dedicated travel consultant</li>
                          <li>✓ Flexible payment options</li>
                        </ul>
                      </motion.div>
                    </motion.div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex justify-between pt-6">
                    {currentStep > 1 ? (
                      <motion.button
                        type="button"
                        onClick={prevStep}
                        whileHover={{ scale: 1.05, x: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 rounded-xl border-2 border-slate-300 text-slate-700 font-semibold hover:border-slate-400 hover:bg-slate-50 transition-all duration-300 flex items-center gap-2"
                      >
                        ← Previous
                      </motion.button>
                    ) : (
                      <div></div>
                    )}

                    {currentStep < 3 ? (
                      <motion.button
                        type="button"
                        onClick={nextStep}
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 flex items-center gap-2"
                      >
                        Continue →
                      </motion.button>
                    ) : (
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 disabled:opacity-50 transition-all duration-300 uppercase tracking-wide flex items-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="w-4 h-4 border-2 border-black border-t-transparent rounded-full"
                            />
                            Plan Your Trip...
                          </>
                        ) : (
                          <>
                            <FaPlane className="w-4 h-4" />
                            Book My Adventure
                          </>
                        )}
                      </motion.button>
                    )}
                  </div>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-center text-base text-black pt-4"
                  >
                    🔒 Your information is secure and encrypted. We respect your privacy.
                  </motion.p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default BookNowForm;