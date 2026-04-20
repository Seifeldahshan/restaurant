import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const menuItems = [
  {
    name: 'Grilled Salmon',
    price: '850 EGP',
    desc: 'Fresh Atlantic salmon with lemon butter sauce and seasonal greens.',
    img: 'https://images.unsplash.com/photo-1485921325833-c519f76c4927?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Mushroom Soup',
    price: '250 EGP',
    desc: 'Wild forest mushroom soup with truffle oil and crusty bread.',
    img: 'https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Caesar Salad',
    price: '300 EGP',
    desc: 'Crisp romaine lettuce with house-made dressing and croutons.',
    img: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Chocolate Fondant',
    price: '350 EGP',
    desc: 'Warm chocolate cake with a molten center and vanilla ice cream.',
    img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=600&auto=format&fit=crop',
  },

];

const Menu = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="menu" className="menu-section" style={{ background: 'transparent', overflow: 'visible' }} ref={ref}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">Discover</p>
          <h2 className="section-title">Our Menu</h2>
          <p className="section-desc">
            Explore our carefully curated selection of dishes, crafted with the
            finest ingredients and presented with artistic flair.
          </p>
        </motion.div>

        <div className="menu-grid">
          {menuItems.map((item, i) => (
            <motion.div
              key={item.name}
              className="menu-item card-style"
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * (i % 4) }}
            >
              <div className="menu-item-img">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="menu-item-content">
                <div className="menu-item-header">
                  <span className="menu-item-name">{item.name}</span>
                  <span className="menu-item-price">{item.price}</span>
                </div>
                <p className="menu-item-desc">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="menu-center-btn"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a href="#" className="btn-primary">
            View Full Menu
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
