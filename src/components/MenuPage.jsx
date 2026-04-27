import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useMenuData } from '../menuData';
import Header from './Header';

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const { menuItems, loading } = useMenuData();

  const categories = useMemo(() => {
    const unique = [...new Set(menuItems.map((item) => item.category))].filter(Boolean);
    return ['All', ...unique];
  }, [menuItems]);

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') return menuItems;
    return menuItems.filter((item) => item.category === activeCategory);
  }, [menuItems, activeCategory]);

  return (
    <div className="menu-page">
      <Header />

      {/* Category filter */}
      <div className="menu-page-body">
        <div className="container">
          <motion.div
            className="category-filter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                className={`category-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Menu grid */}
          {loading ? (
            <div style={{ textAlign: 'center', padding: '50px 0', color: 'var(--color-gold)' }}>
              Loading Menu from Google Sheets...
            </div>
          ) : (
            <motion.div className="menu-page-grid" layout>
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  className="menu-page-card"
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="menu-page-card-img">
                    <img src={item.img} alt={item.name} />
                    <span className="menu-page-card-category">{item.category}</span>
                  </div>
                  <div className="menu-page-card-body">
                    <h3>{item.name}</h3>
                    <p className="menu-page-card-desc">{item.desc}</p>
                    <span className="menu-page-card-price">{item.price} EGP</span>
                  </div>
                </motion.div>
              ))}
                </AnimatePresence>
            </motion.div>
          )}

          {!loading && filteredItems.length === 0 && (
            <div className="menu-page-empty">
              <i className="fas fa-utensils"></i>
              <p>No items in this category yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
