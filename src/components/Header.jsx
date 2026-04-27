import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/alex_top_logo.png';

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
    { label: 'HOME', href: '/' },
    { label: 'MENUS', href: '/menu' },
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
        <nav className="header-nav left-nav desktop-only">
          {leftLinks.map((link, i) => (
            <div key={link.label} className="nav-item">
              <motion.a
                href={link.href}
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
              alt="Alex Top Logo"
            />
          </div>
        </a>

        <nav className="header-nav right-nav desktop-only">
          {rightLinks.map((link, i) => (
            <div key={link.label} className="nav-item">
              <motion.a
                href={link.href}
              >
                {link.label}
              </motion.a>
              {i < rightLinks.length - 1 && <span className="nav-dot">•</span>}
            </div>
          ))}
        </nav>

        {/* Mobile Unified Nav */}
        <nav className={`mobile-nav-overlay ${menuOpen ? 'open' : ''}`}>
          <div className="mobile-nav-content">
            {[...leftLinks, ...rightLinks].map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="mobile-nav-link"
              >
                {link.label}
              </motion.a>
            ))}
          </div>
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
