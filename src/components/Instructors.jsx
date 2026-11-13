
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const instructors = [
  {
    name: 'MASTER INSTRUCTOR',
    role: 'CHIEF KARATE INSTRUCTOR',
    experience: 'PROFILE DETAILS TO BE CONFIRMED',
    image: 'https://images.unsplash.com/photo-1564415051543-cb73a7461f3b?w=900&q=85'
  },
  {
    name: 'SENIOR INSTRUCTOR',
    role: 'ADVANCED TRAINING COACH',
    experience: 'PROFILE DETAILS TO BE CONFIRMED',
    image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?w=900&q=85'
  },
  {
    name: 'TRAINING COACH',
    role: 'STUDENT DEVELOPMENT',
    experience: 'PROFILE DETAILS TO BE CONFIRMED',
    image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=900&q=85'
  }
];

function Instructors() {
  return (
    <section className="instructors-section" id="instructors">
      <div className="instructors-heading">
        <span className="section-label">THE PEOPLE BEHIND THE DISCIPLINE</span>
        <h2>LEARN FROM <span>THE BEST.</span></h2>
        <p>Meet the team guiding every step of your martial arts journey.</p>
      </div>

      <div className="instructors-grid">
        {instructors.map((instructor, index) => (
          <motion.article
            className="instructor-card"
            key={instructor.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            whileHover={{ y: -10 }}
          >
            <div className="instructor-image">
              <img src={instructor.image} alt="Karate instructor training" loading="lazy" />
              <span className="instructor-badge">
                <Award size={15} /> INSTRUCTOR
              </span>
            </div>

            <div className="instructor-info">
              <h3>{instructor.name}</h3>
              <span>{instructor.role}</span>
              <p>{instructor.experience}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Instructors;
