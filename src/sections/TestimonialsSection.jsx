import { motion } from 'framer-motion';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import { testimonials } from '../data/testimonials';

function TestimonialsSection() {
  return (
    <Container id="testimonials" className="bg-white/5">
      <SectionHeading
        eyeline="Guest Praise"
        title={
          <>
            Stories from travelers who trust <span className="text-ocean">Tripsy Holidays</span>.
          </>
        }
        subtitle="We design journeys that move the heart and linger in memory. Hear how our travelers felt after their curated experiences."
      />
      <div className="mt-16 grid gap-10 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.figure
            key={testimonial.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex h-full flex-col rounded-3xl border border-white/10 bg-night/60 p-8 backdrop-blur"
          >
            <div className="flex items-center gap-4">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="h-16 w-16 rounded-full border border-white/20 object-cover"
              />
              <div>
                <p className="font-display text-lg text-white">{testimonial.name}</p>
                <p className="text-xs uppercase tracking-[0.35em] text-white/50">
                  {testimonial.location}
                </p>
              </div>
            </div>
            <blockquote className="mt-6 flex flex-1 flex-col justify-between text-sm leading-relaxed text-white/70">
              <p>“{testimonial.quote}”</p>
              <figcaption className="mt-6 text-xs uppercase tracking-[0.35em] text-ocean">
                {testimonial.trip}
              </figcaption>
            </blockquote>
          </motion.figure>
        ))}
      </div>
    </Container>
  );
}

export default TestimonialsSection;