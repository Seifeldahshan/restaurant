import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { useRef } from 'react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Welcome = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const springConfig = { stiffness: 50, damping: 25, mass: 1 };

  // Parallax calculations
  const yMain = useSpring(useTransform(scrollYProgress, [0, 1], [40, -40]), springConfig);
  const yBadge = useSpring(useTransform(scrollYProgress, [0, 1], [-80, 80]), springConfig);

  return (
    <section id="about" className="welcome-section" style={{ background: 'transparent', overflow: 'visible' }} ref={ref}>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="welcome-grid">
          <motion.div
            className="welcome-images"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeUp}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=800&auto=format&fit=crop"
              alt="Restaurant interior"
              className="welcome-img-main"
              style={{ y: yMain }}
            />
            <motion.div
              className="welcome-badge"
              style={{ y: yBadge }}
            >
              <span>
                Since
                <br />
                <strong style={{ fontSize: '28px' }}>1985</strong>
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            className="welcome-text"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeUp}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="section-label">About Us</p>
            <h2>
              Welcome to a World of
              <br />
              Culinary Delight
            </h2>
            <p>
              At Alex Top, we believe that dining is not just about
              food—it's about the entire experience. From the moment you step
              through our doors, you'll be enveloped in an atmosphere of warmth,
              elegance, and culinary artistry.
            </p>
            <p>
              Our chefs craft each dish with passion and precision, using only
              the finest, locally-sourced ingredients. Every plate tells a story
              of dedication to the culinary arts and a commitment to exceeding
              your expectations.
            </p>
            <motion.a
              href="#menu"
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Our Menu
            </motion.a>
          </motion.div>
        </div>
      </div>

      <img
        src="https://xtratheme.com/elementor/restaurant-2/wp-content/uploads/sites/131/2025/02/element-6.png"
        alt=""
        className="welcome-decor"
        style={{
          position: 'absolute',
          right: 0,
          bottom: '10%',
          width: '150px',
          opacity: 0.4,
        }}
      />
    </section>
  );
};

export default Welcome;
