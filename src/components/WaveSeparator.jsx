import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import separatorAbove from '../assets/separator-above.jpeg';
import pizzaImg from '../assets/pizza-hero-filler.png';

const WaveSeparator = ({ color = '#9B1919', flip = false, withPizza = false }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const yRaw = useTransform(scrollYProgress, [0, 1], [-25, 25]);
  const rotateRaw = useTransform(scrollYProgress, [0, 1], [-2, 4]);

  const springConfig = { stiffness: 80, damping: 20, mass: 1 };
  const y = useSpring(yRaw, springConfig);
  const rotate = useSpring(rotateRaw, springConfig);

  return (
    <div className={`wave-separator ${flip ? 'flipped' : ''}`} style={{ position: 'relative', overflow: withPizza ? 'visible' : 'hidden', zIndex: withPizza ? 50 : 1 }} ref={ref}>
      <img
        src={separatorAbove}
        alt="separator"
        style={{ width: '100%', display: 'block', margin: 0, padding: 0 }}
      />
      {withPizza && (
        <motion.img
          src={pizzaImg}
          alt="Floating Pizza"
          style={{
            position: 'absolute',
            top: '90%',
            left: '50%',
            marginLeft: '-250px',
            marginTop: '-450px',
            pointerEvents: 'none',
            y,
            rotate,
            width: '500px',
            maxWidth: '90vw',
            height: 'auto',
            filter: 'drop-shadow(0 25px 45px rgba(0,0,0,0.4))',
            zIndex: 60
          }}
        />
      )}
    </div>
  );
};

export default WaveSeparator;
