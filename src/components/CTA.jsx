import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="cta-section" ref={ref}>
      <img
        src="https://xtratheme.com/elementor/restaurant-2/wp-content/uploads/sites/131/2025/02/bread-board.png"
        alt=""
        style={{
          position: 'absolute',
          left: '-5%',
          top: '10%',
          width: '280px',
          opacity: 0.9,
          zIndex: 1,
        }}
      />
      <img
        src="https://xtratheme.com/elementor/restaurant-2/wp-content/uploads/sites/131/2025/02/element-18.png"
        alt=""
        style={{
          position: 'absolute',
          right: '10%',
          bottom: '10%',
          width: '120px',
          opacity: 0.8,
          zIndex: 1,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2>Start your<br />experience today</h2>
          <p className="section-label">- Reserve your Best Dining Ever -</p>
          <a href="#" className="btn-primary" style={{ marginTop: '20px' }}>
            Reserve Your Table
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
