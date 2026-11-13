

import { motion } from 'framer-motion';

const belts = [
  { name: 'White Belt', level: '01', color: '#f5f5f5', text: '#111' },
  { name: 'Yellow Belt', level: '02', color: '#f5d328', text: '#111' },
  { name: 'Orange Belt', level: '03', color: '#f28c28', text: '#111' },
  { name: 'Green Belt', level: '04', color: '#228b48', text: '#fff' },
  { name: 'Blue Belt', level: '05', color: '#2376d2', text: '#fff' },
  { name: 'Brown Belt', level: '06', color: '#754326', text: '#fff' },
  { name: 'Black Belt', level: '07', color: '#151515', text: '#fff' }
];

function BeltProgression() {
  return (
    <section className="belt-section" id="belts">
      <div className="belt-heading">
        <span className="section-label">YOUR JOURNEY — YOUR GROWTH</span>
        <h2>EVERY BELT TELLS <span>A STORY.</span></h2>
        <p>
          Every level represents dedication, discipline
          and progress.
        </p>
      </div>

      <div className="belt-grid">
        {belts.map((belt, index) => (
          <motion.div
            className="belt-card"
            key={belt.name}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ y: -8 }}
          >
            <span className="belt-level">{belt.level}</span>

            <div
              className="belt-color"
              style={{
                background: belt.color,
                color: belt.text
              }}
            />

            <h3>{belt.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default BeltProgression;
