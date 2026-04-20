import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="gallery" className="gallery-section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">OUR GALLERY</h2>
          <p className="section-desc">
            See a custom set of pictures that we curated for you to get a little
            more familiar with XTRA Restaurant inner design and foods we serve.
          </p>
        </motion.div>

        <motion.div
          className="gallery-image"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img
            src="https://xtratheme.com/elementor/restaurant-2/wp-content/uploads/sites/131/2025/02/gallery.png"
            alt="Restaurant Gallery"
          />
        </motion.div>

        <motion.div
          className="gallery-center-btn"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a href="#" className="btn-outline">
            Reserve Your Table
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
