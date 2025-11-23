import React from 'react';
import { motion } from 'framer-motion';
import { FaExclamationTriangle, FaCreditCard, FaInfoCircle, FaCheckCircle } from 'react-icons/fa';

const Policies = () => {
  return (
    <section className="relative py-12 border-t border-white/10 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-32 w-32 rounded-full bg-ocean/5 blur-3xl animate-pulse" />
        <div className="absolute right-1/4 bottom-1/4 h-40 w-40 rounded-full bg-primary/5 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="space-y-8"
        >
          {/* Header */}
          <div className="text-center space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-ocean/10 to-primary/10 border border-ocean/20 backdrop-blur-sm"
            >
              <FaInfoCircle className="text-ocean w-5 h-5" />
              <span className="text-sm uppercase tracking-[0.2em] font-bold text-ocean">Important Information</span>
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-2xl md:text-3xl font-display font-bold text-white"
            >
              Booking <span className="bg-gradient-to-r from-ocean to-primary bg-clip-text text-transparent">Policies</span>
            </motion.h3>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="text-white/70 max-w-2xl mx-auto text-sm leading-relaxed"
            >
              Please review our policies carefully before making your booking to ensure a smooth and enjoyable travel experience.
            </motion.p>
          </div>

          {/* Policy Cards */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Cancellation Policy */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative bg-gradient-to-br from-white/8 to-white/4 backdrop-blur-xl rounded-2xl border border-white/20 hover:border-red-400/30 p-8 shadow-2xl hover:shadow-red-500/10 transition-all duration-300 overflow-hidden">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-red-400/30">
                    <FaExclamationTriangle className="text-red-400 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-display font-bold text-white mb-1">Cancellation Policy</h4>
                    <p className="text-red-300/80 text-sm">Important terms & conditions</p>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div className="h-px bg-gradient-to-r from-transparent via-red-400/30 to-transparent" />

                  <div className="space-y-3">
                    {[
                      { text: "Rs. 2500 Per person Cancellation or Reschedule will be charged once confirmed the file.", highlight: true },
                      { text: "GST on total invoice amount will be not refundable once file confirmed.", highlight: false },
                      { text: "30 days prior to departure of the tour 50% of total tour cost.", highlight: false },
                      { text: "29 days to 10 days prior to departure of the tour 75% of total tour cost.", highlight: false },
                      { text: "09 days to 01 days prior to departure of the tour 100% of total tour cost.", highlight: false },
                      { text: "Air Ticket cancellation as per Airline Policy.", highlight: false },
                      { text: "There will be no refund for NO SHOWS.", highlight: true },
                      { text: "All the arrangements for the tour are preplanned and prepaid. In case of not completion of the tour due to any reason whatsoever there will not be any refund for any unutilized services.", highlight: false },
                      { text: "If in case guest will fail to make 02 continues installments within the given time limits, the booking shall be released without any prior intimation and no refund or adjustment in future travel will be possible.", highlight: false }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.9 + index * 0.05, duration: 0.4 }}
                        className={`flex gap-3 p-3 rounded-lg transition-all duration-200 ${
                          item.highlight
                            ? 'bg-red-500/10 border border-red-400/20'
                            : 'hover:bg-white/5'
                        }`}
                      >
                        <FaCheckCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                          item.highlight ? 'text-red-400' : 'text-ocean'
                        }`} />
                        <span className="text-white/90 text-sm leading-relaxed">{item.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Payment Policy */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative bg-gradient-to-br from-white/8 to-white/4 backdrop-blur-xl rounded-2xl border border-white/20 hover:border-green-400/30 p-8 shadow-2xl hover:shadow-green-500/10 transition-all duration-300 overflow-hidden">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-green-500/20 to-blue-500/20 border border-green-400/30">
                    <FaCreditCard className="text-green-400 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-display font-bold text-white mb-1">Payment Policy</h4>
                    <p className="text-green-300/80 text-sm">Secure & flexible payment options</p>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div className="h-px bg-gradient-to-r from-transparent via-green-400/30 to-transparent" />

                  <div className="space-y-3">
                    {[
                      { text: "We will be delighted to plan your holiday with us. All reservations are subject to availability of hotels, transport, and other services at the time of booking.", highlight: false },
                      { text: "To confirm your package, an advance payment is required. The booking will be processed only after the initial amount is received in the bank account of Tripsy Holidays.", highlight: true },
                      { text: "Payments can be made through Cash, Cheque, NEFT, RTGS, IMPS, UPI, Online Transfer, Payment Link or any digital mode accepted by your bank.", highlight: false },
                      { text: "Customers using Paytm / BHIM / UPI Apps can also make payments directly to the official Tripsy Holidays UPI ID or registered mobile number.", highlight: false },
                      { text: "The remaining balance amount must be cleared as per the due dates mentioned in your invoice or before the commencement of travel, whichever comes earlier.", highlight: true },
                      { text: "All payment receipts should be shared with our team for timely confirmation of your bookings.", highlight: false },
                      { text: "Bookings are processed only after the amount reflects in our bank account.", highlight: false },
                      { text: "Any delay in payment may lead to cancellation of services, for which Tripsy Holidays will not be responsible.", highlight: false }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.9 + index * 0.05, duration: 0.4 }}
                        className={`flex gap-3 p-3 rounded-lg transition-all duration-200 ${
                          item.highlight
                            ? 'bg-green-500/10 border border-green-400/20'
                            : 'hover:bg-white/5'
                        }`}
                      >
                        <FaCheckCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                          item.highlight ? 'text-green-400' : 'text-ocean'
                        }`} />
                        <span className="text-white/90 text-sm leading-relaxed">{item.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer Note */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="text-center pt-6 border-t border-white/10"
          >
            <p className="text-white/60 text-xs max-w-2xl mx-auto leading-relaxed">
              These policies apply to all individual packages. For any questions or special circumstances, please contact our team before booking.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Policies;