import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import leafHeros from '../assets/leaf-heros.jpg';
import paperHero from '../assets/paper-hero.png';

const Hero = () => {
  const { scrollY } = useScroll();

  const yLeftRaw = useTransform(scrollY, [0, 800], [0, -80]);
  const yRightRaw = useTransform(scrollY, [0, 800], [0, -120]);

  // physics-based spring config for a "heavy and smooth" effect
  const springConfig = { stiffness: 40, damping: 20, mass: 2 };
  const yLeft = useSpring(yLeftRaw, springConfig);
  const yRight = useSpring(yRightRaw, springConfig);

  return (
    <section id="hero" className="hero-section">
      <div
        className="hero-bg"
        style={{
          backgroundImage: `url(https://xtratheme.com/elementor/restaurant-2/wp-content/uploads/sites/131/2025/02/hero-bg.jpg)`,
        }}
      />
      <div className="hero-overlay" />


      <div className="hero-content">
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Good bites good vibes <br />
        </motion.h1>
      </div>
    </section>
  );
};

export default Hero;
