import { motion } from 'framer-motion';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import { testimonials } from '../data/testimonials';

function TestimonialsSection() {
  return (
    <Container id="testimonials">
      <SectionHeading
        eyeline="Traveler Testimonials"
        title={
          <>
            Stories from Our <span className="text-ocean">Happy Explorers</span>
          </>
        }
        subtitle="Real experiences from thousands of satisfied travelers who discovered their perfect journeys with us."
      />
      <div className="mt-16 grid gap-8 md:grid-cols-3 lg:gap-10">
        {testimonials.map((testimonial, index) => (
          <motion.figure
            key={testimonial.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="group flex h-full flex-col rounded-3xl border border-white/10 bg-gradient-to-br from-white/12 to-white/5 p-8 backdrop-blur hover:border-ocean/50 hover:from-white/18 hover:to-white/8 transition-all duration-300 shadow-2xl hover:shadow-ocean/30"
          >
            <div className="flex items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="h-14 w-14 rounded-full border-2 border-ocean/30 object-cover group-hover:border-ocean/60 transition-colors shadow-lg"
                />
                <div className="flex-1">
                  <p className="font-display text-base text-white group-hover:text-ocean transition-colors font-semibold">{testimonial.name}</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-ocean/70 font-medium">📍 {testimonial.location}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-ocean text-lg">★</span>
              ))}
              <span className="text-xs ml-2 text-white/50 font-semibold">(5.0)</span>
            </div>

            <blockquote className="flex flex-1 flex-col justify-between space-y-6">
              <p className="text-sm leading-relaxed text-white/75 font-light italic">"{testimonial.quote}"</p>
              <figcaption className="text-xs uppercase tracking-[0.3em] text-ocean/70 font-semibold">
                ✈️ {testimonial.trip}
              </figcaption>
            </blockquote>
          </motion.figure>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-r from-primary/10 via-ocean/10 to-primary/10 p-8 md:p-12 text-center backdrop-blur"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-ocean font-bold mb-3">⭐ Guest Satisfaction</p>
        <p className="font-display text-3xl md:text-4xl text-white font-bold mb-3">
          4.9 out of 5 Stars
        </p>
        <p className="text-white/70 max-w-2xl mx-auto">
          Based on 5,000+ verified reviews from travelers who have experienced our personalized journeys
        </p>
      </motion.div>
    </Container>
  );
}

export default TestimonialsSection;
