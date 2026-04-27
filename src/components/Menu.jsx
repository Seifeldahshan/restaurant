import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useMenuData } from '../menuData';

const Menu = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const { menuItems, loading } = useMenuData();

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

        {loading ? (
          <div style={{ textAlign: 'center', padding: '100px', color: 'var(--color-gold)' }}>Loading Menu...</div>
        ) : (
          <div className="menu-grid">
            {menuItems.slice(0, 4).map((item, i) => (
              <motion.div
                key={item.id || item.name}
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
                    <span className="menu-item-price">{item.price} EGP</span>
                  </div>
                  <p className="menu-item-desc">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <motion.div
          className="menu-center-btn"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a href="/menu" className="btn-primary">
            View Full Menu
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
