
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';

const galleryImages = [
  {
    image: 'photo-1555597673-b21d5c935865',
    title: 'THE ART OF KARATE',
    category: 'MARTIAL ARTS',
    description: 'Strength begins with discipline.'
  },
  {
    image: 'photo-1549719386-74dfcbf7dbed',
    title: 'TRAIN WITH PURPOSE',
    category: 'TRAINING',
    description: 'Every movement has a purpose.'
  },
  {
    image: 'photo-1517438322307-e67111335449',
    title: 'DISCIPLINE & FOCUS',
    category: 'DOJO LIFE',
    description: 'Build focus. Develop confidence.'
  },
  {
    image: 'photo-1599058917212-d750089bc07f',
    title: 'PUSH YOUR LIMITS',
    category: 'FITNESS',
    description: 'Challenge yourself every day.'
  }
];

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="gallery-section" id="gallery">

      {/* SECTION HEADING */}
      <motion.div
        className="gallery-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="section-label">
          05 — MOMENTS OF STRENGTH
        </span>

        <h2>
          BEHIND THE <span>DISCIPLINE.</span>
        </h2>

        <p>
          Every kick, every movement and every challenge
          builds a stronger version of yourself.
        </p>
      </motion.div>

      {/* GALLERY GRID */}
      <div className="gallery-grid">

        {galleryImages.map((item, index) => (
          <motion.article
            className="gallery-card"
            key={item.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              delay: index * 0.12
            }}
            onClick={() => setSelectedImage(item)}
          >
            <div className="gallery-image-wrap">
              <img
                src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=1200&q=85`}
                alt={item.title}
                loading="lazy"
                decoding="async"
              />

              <div className="gallery-dark-overlay" />

              <div className="gallery-overlay">
                <span>{item.category}</span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <div className="gallery-view">
                  <span>EXPLORE IMAGE</span>
                  <ArrowUpRight size={19} />
                </div>
              </div>

              <span className="gallery-index">
                0{index + 1}
              </span>
            </div>
          </motion.article>
        ))}

      </div>

      {/* IMAGE LIGHTBOX */}
      {selectedImage && (
        <motion.div
          className="gallery-lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="gallery-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image"
          >
            <X size={25} />
          </button>

          <motion.div
            className="gallery-lightbox-content"
            initial={{ scale: 0.85, y: 30 }}
            animate={{ scale: 1, y: 0 }}
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={`https://images.unsplash.com/${selectedImage.image}?auto=format&fit=crop&w=1600&q=90`}
              alt={selectedImage.title}
            />

            <div className="gallery-lightbox-caption">
              <span>{selectedImage.category}</span>
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}

    </section>
  );
}

export default Gallery;
