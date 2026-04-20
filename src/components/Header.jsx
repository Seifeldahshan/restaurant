import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/restaurant-logo.png';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const leftLinks = [
    { label: 'HOME', href: '#hero' },
    { label: 'MENUS', href: '#menu' },
    { label: 'ORDER', href: '#order' },
  ];

  const rightLinks = [
    { label: 'ABOUT', href: '#about' },
    { label: 'RESERVE', href: '#reserve' },
    { label: 'MORE', href: '#gallery' },
  ];

  return (
    <motion.header
      className={`site-header ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="header-inner">
        <nav className={`header-nav left-nav ${menuOpen ? 'open' : ''}`}>
          {leftLinks.map((link, i) => (
            <div key={link.label} className="nav-item">
              <motion.a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={link.label === 'HOME' ? 'active' : ''}
              >
                {link.label}
              </motion.a>
              {i < leftLinks.length - 1 && <span className="nav-dot">•</span>}
            </div>
          ))}
        </nav>

        <a href="#hero" className="header-logo-center">
          <div className="logo-circle">
            <img
              src={logo}
              alt="XTRA Restaurant Logo"
            />
          </div>
        </a>

        <nav className={`header-nav right-nav ${menuOpen ? 'open' : ''}`}>
          {rightLinks.map((link, i) => (
            <div key={link.label} className="nav-item">
              <motion.a
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </motion.a>
              {i < rightLinks.length - 1 && <span className="nav-dot">•</span>}
            </div>
          ))}
        </nav>

        <div
          className={`mobile-toggle ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
