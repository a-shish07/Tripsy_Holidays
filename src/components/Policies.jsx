import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExclamationTriangle, FaCreditCard, FaInfoCircle, FaCheckCircle, FaShieldAlt, FaClock, FaMoneyBillWave, FaUserClock } from 'react-icons/fa';

const Policies = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 0.8
      }
    }
  };

  const cardHoverVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.3
      }
    }
  };

  const floatingAnimation = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseAnimation = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.3, 0.6, 0.3],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative py-20 border-t border-black/10 overflow-hidden bg-gradient-to-br from-night/95 via-purple-900/20 to-ocean/30">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          variants={pulseAnimation}
          animate="animate"
          className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-ocean/10 blur-3xl"
        />
        <motion.div
          variants={pulseAnimation}
          animate="animate"
          transition={{ delay: 2 }}
          className="absolute right-1/4 bottom-1/4 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
        />
        <motion.div
          variants={floatingAnimation}
          animate="animate"
          className="absolute top-1/2 left-1/3 w-8 h-8 bg-gradient-to-r from-ocean/30 to-primary/30 rounded-full blur-xl"
        />
        <motion.div
          variants={floatingAnimation}
          animate="animate"
          transition={{ delay: 3 }}
          className="absolute bottom-1/3 right-1/3 w-6 h-6 bg-gradient-to-r from-primary/30 to-purple-500/30 rounded-full blur-xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          {/* Enhanced Header */}
          <motion.div
            variants={itemVariants}
            className="text-center space-y-6"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-black/20 shadow-2xl shadow-ocean/20"
            >
              <motion.div
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              >
                <FaShieldAlt className="text-ocean w-6 h-6" />
              </motion.div>
              <span className="text-sm uppercase tracking-[0.3em] font-bold text-ocean bg-gradient-to-r from-ocean to-primary bg-clip-text text-transparent">
                Travel Policies & Guidelines
              </span>
              <motion.div
                animate={{ 
                  rotate: [0, -10, 10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1 
                }}
              >
                <FaInfoCircle className="text-primary w-6 h-6" />
              </motion.div>
            </motion.div>

            <motion.h3
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white"
            >
              Booking <span className="text-transparent bg-gradient-to-r from-ocean via-primary to-purple-400 bg-clip-text">Policies</span>
            </motion.h3>

            <motion.p
              variants={itemVariants}
              className="text-white/70 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light"
            >
              Please review our policies carefully before making your booking to ensure a smooth and enjoyable travel experience. 
              Our terms are designed to protect both you and our services.
            </motion.p>
          </motion.div>

          {/* Enhanced Policy Cards */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Cancellation Policy */}
            <motion.div
              variants={itemVariants}
              whileHover="hover"
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
              <motion.div
                variants={cardHoverVariants}
                className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl border-2 border-black/20 hover:border-red-400/40 p-8 shadow-2xl hover:shadow-red-500/20 transition-all duration-500 overflow-hidden"
              >
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                
                {/* Header */}
                <div className="flex items-start gap-6 mb-8 relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="p-4 rounded-2xl bg-gradient-to-br from-red-500/30 to-orange-500/30 border border-red-400/40 shadow-lg shadow-red-500/20"
                  >
                    <FaExclamationTriangle className="text-red-400 w-8 h-8" />
                  </motion.div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-display font-bold text-white mb-2">Cancellation Policy</h4>
                    <p className="text-red-300/80 text-base font-light">Important terms & conditions for your protection</p>
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-red-400 text-2xl"
                  >
                    ⚠️
                  </motion.div>
                </div>

                {/* Content */}
                <div className="space-y-6 relative z-10">
                  <div className="h-px bg-gradient-to-r from-transparent via-red-400/40 to-transparent" />

                  <div className="space-y-4 max-h-96 overflow-y-auto custom-scrollbar pr-4">
                    {[
                      { text: "Rs. 2500 Per person Cancellation or Reschedule will be charged once confirmed the file.", highlight: true, icon: FaMoneyBillWave },
                      { text: "GST on total invoice amount will be not refundable once file confirmed.", highlight: false, icon: FaClock },
                      { text: "30 days prior to departure of the tour 50% of total tour cost.", highlight: false, icon: FaUserClock },
                      { text: "29 days to 10 days prior to departure of the tour 75% of total tour cost.", highlight: false, icon: FaUserClock },
                      { text: "09 days to 01 days prior to departure of the tour 100% of total tour cost.", highlight: false, icon: FaUserClock },
                      { text: "Air Ticket cancellation as per Airline Policy.", highlight: false, icon: FaClock },
                      { text: "There will be no refund for NO SHOWS.", highlight: true, icon: FaExclamationTriangle },
                      { text: "All the arrangements for the tour are preplanned and prepaid. In case of not completion of the tour due to any reason whatsoever there will not be any refund for any unutilized services.", highlight: false, icon: FaInfoCircle },
                      { text: "If in case guest will fail to make 02 continues installments within the given time limits, the booking shall be released without any prior intimation and no refund or adjustment in future travel will be possible.", highlight: false, icon: FaInfoCircle }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1 + index * 0.08, duration: 0.5 }}
                        className={`flex gap-4 p-4 rounded-xl transition-all duration-300 group/item ${
                          item.highlight
                            ? 'bg-red-500/15 border border-red-400/30 shadow-lg shadow-red-500/10'
                            : 'hover:bg-white/10 border border-transparent hover:border-black/10'
                        }`}
                      >
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className={`p-2 rounded-lg ${
                            item.highlight
                              ? 'bg-red-500/20 text-red-400'
                              : 'bg-ocean/20 text-ocean'
                          }`}
                        >
                          <item.icon className="w-4 h-4" />
                        </motion.div>
                        <span className="text-white/90 text-sm leading-relaxed font-light flex-1">
                          {item.text}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Payment Policy */}
            <motion.div
              variants={itemVariants}
              whileHover="hover"
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
              <motion.div
                variants={cardHoverVariants}
                className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl border-2 border-black/20 hover:border-green-400/40 p-8 shadow-2xl hover:shadow-green-500/20 transition-all duration-500 overflow-hidden"
              >
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                
                {/* Header */}
                <div className="flex items-start gap-6 mb-8 relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="p-4 rounded-2xl bg-gradient-to-br from-green-500/30 to-blue-500/30 border border-green-400/40 shadow-lg shadow-green-500/20"
                  >
                    <FaCreditCard className="text-green-400 w-8 h-8" />
                  </motion.div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-display font-bold text-white mb-2">Payment Policy</h4>
                    <p className="text-green-300/80 text-base font-light">Secure & flexible payment options for your convenience</p>
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    className="text-green-400 text-2xl"
                  >
                    💳
                  </motion.div>
                </div>

                {/* Content */}
                <div className="space-y-6 relative z-10">
                  <div className="h-px bg-gradient-to-r from-transparent via-green-400/40 to-transparent" />

                  <div className="space-y-4 max-h-96 overflow-y-auto custom-scrollbar pr-4">
                    {[
                      { text: "We will be delighted to plan your holiday with us. All reservations are subject to availability of hotels, transport, and other services at the time of booking.", highlight: false, icon: FaInfoCircle },
                      { text: "To confirm your package, an advance payment is required. The booking will be processed only after the initial amount is received in the bank account of Tripsy Holidays.", highlight: true, icon: FaCheckCircle },
                      { text: "Payments can be made through Cash, Cheque, NEFT, RTGS, IMPS, UPI, Online Transfer, Payment Link or any digital mode accepted by your bank.", highlight: false, icon: FaCreditCard },
                      { text: "Customers using Paytm / BHIM / UPI Apps can also make payments directly to the official Tripsy Holidays UPI ID or registered mobile number.", highlight: false, icon: FaCreditCard },
                      { text: "The remaining balance amount must be cleared as per the due dates mentioned in your invoice or before the commencement of travel, whichever comes earlier.", highlight: true, icon: FaClock },
                      { text: "All payment receipts should be shared with our team for timely confirmation of your bookings.", highlight: false, icon: FaInfoCircle },
                      { text: "Bookings are processed only after the amount reflects in our bank account.", highlight: false, icon: FaInfoCircle },
                      { text: "Any delay in payment may lead to cancellation of services, for which Tripsy Holidays will not be responsible.", highlight: false, icon: FaExclamationTriangle }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1 + index * 0.08, duration: 0.5 }}
                        className={`flex gap-4 p-4 rounded-xl transition-all duration-300 group/item ${
                          item.highlight
                            ? 'bg-green-500/15 border border-green-400/30 shadow-lg shadow-green-500/10'
                            : 'hover:bg-white/10 border border-transparent hover:border-black/10'
                        }`}
                      >
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className={`p-2 rounded-lg ${
                            item.highlight
                              ? 'bg-green-500/20 text-green-400'
                              : 'bg-ocean/20 text-ocean'
                          }`}
                        >
                          <item.icon className="w-4 h-4" />
                        </motion.div>
                        <span className="text-white/90 text-sm leading-relaxed font-light flex-1">
                          {item.text}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Enhanced Footer Note */}
          <motion.div
            variants={itemVariants}
            className="text-center pt-8 border-t border-black/10"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.02, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-lg border border-black/20 mb-4"
            >
              <FaShieldAlt className="text-ocean w-5 h-5" />
              <span className="text-white/80 text-sm font-medium">Your Trust & Safety is Our Priority</span>
            </motion.div>
            <p className="text-white/60 text-sm max-w-3xl mx-auto leading-relaxed font-light">
              These policies apply to all individual packages. For any questions, special circumstances, or clarification on specific terms, 
              please contact our dedicated support team before booking. We're here to ensure your travel experience is seamless and memorable.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, var(--ocean), var(--primary));
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, var(--primary), var(--purple));
        }
      `}</style>
    </section>
  );
};

export default Policies;