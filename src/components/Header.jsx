import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/restaurant-logo.png';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const leftLinks = [
    { label: 'HOME', to: '/' },
    { label: 'MENUS', to: '/menus' },
    { label: 'ORDER', to: '/#order' },
  ];

  const rightLinks = [
    { label: 'ABOUT', to: '/#about' },
    { label: 'RESERVE', to: '/#reserve' },
    { label: 'MORE', to: '/#gallery' },
  ];

  const getIsActive = (toPath) => {
    // Exact match for the pathname (ignores hashes so hash links won't light up simultaneously on Home)
    return location.pathname === toPath ? 'active' : '';
  };

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
              <Link
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={getIsActive(link.to)}
              >
                {link.label}
              </Link>
              {i < leftLinks.length - 1 && <span className="nav-dot">•</span>}
            </div>
          ))}
        </nav>

        <Link to="/" className="header-logo-center">
          <div className="logo-circle">
            <img src={logo} alt="XTRA Restaurant Logo" />
          </div>
        </Link>

        <nav className="header-nav right-nav desktop-only">
          {rightLinks.map((link, i) => (
            <div key={link.label} className="nav-item">
              <Link
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={getIsActive(link.to)}
              >
                {link.label}
              </Link>
              {i < rightLinks.length - 1 && <span className="nav-dot">•</span>}
            </div>
          ))}
        </nav>

        {/* Combined Mobile Menu Overlay */}
        <nav className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
          {[...leftLinks, ...rightLinks].map((link) => (
            <div key={link.label} className="nav-item">
              <Link
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={getIsActive(link.to)}
              >
                {link.label}
              </Link>
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
