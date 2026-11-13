
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'STUDENT NAME',
    role: 'STUDENT',
    review: 'Add a genuine student experience here after receiving permission.',
    rating: 5
  },
  {
    name: 'PARENT NAME',
    role: 'PARENT',
    review: 'Add genuine feedback from a parent about their child’s training.',
    rating: 5
  },
  {
    name: 'STUDENT NAME',
    role: 'ADVANCED STUDENT',
    review: 'Share a real experience about discipline, confidence and training.',
    rating: 5
  }
];

function Testimonials() {
  const [active, setActive] = useState(0);

  const previous = () => {
    setActive((current) => (current - 1 + reviews.length) % reviews.length);
  };

  const next = () => {
    setActive((current) => (current + 1) % reviews.length);
  };

  const review = reviews[active];

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-heading">
        <span className="section-label">VOICES OF THE DOJO</span>
        <h2>BUILT ON <span>REAL EXPERIENCES.</span></h2>
      </div>

      <div className="testimonial-card">
        <Quote className="testimonial-quote" size={45} />

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
          >
            <div className="testimonial-stars">
              {Array.from({ length: review.rating }).map((_, index) => (
                <Star key={index} size={17} fill="currentColor" />
              ))}
            </div>

            <p className="testimonial-text">"{review.review}"</p>

            <h3>{review.name}</h3>
            <span className="testimonial-role">{review.role}</span>
          </motion.div>
        </AnimatePresence>

        <div className="testimonial-controls">
          <button onClick={previous} aria-label="Previous review">
            <ChevronLeft />
          </button>

          <span>0{active + 1} / 0{reviews.length}</span>

          <button onClick={next} aria-label="Next review">
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
