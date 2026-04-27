import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer id="footer" className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col brand-col">
            <h2 className="footer-brand">Alex Top</h2>
            <p className="footer-tagline">
              A premium culinary experience blending modern gastronomy with classic flavors.
            </p>
            <div className="footer-socials-new">
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
            </div>
          </div>

          <div className="footer-col links-col">
              <h3 className="footer-heading">Explore</h3>
              <ul>
                  <li><a href="#hero">Home</a></li>
                  <li><a href="#about">About Us</a></li>
                  <li><a href="#menu">Menu</a></li>
                  <li><a href="#footer">Contact</a></li>
              </ul>
          </div>

          <div className="footer-col hours-col">
            <h3 className="footer-heading">Working Hours</h3>
            <ul className="footer-list">
              <li><span>Mon - Fri:</span> 11:00 AM - 10:00 PM</li>
              <li><span>Sat - Sun:</span> 09:00 AM - 11:30 PM</li>
            </ul>
          </div>

          <div className="footer-col contact-col">
            <h3 className="footer-heading">Contact Us</h3>
            <ul className="footer-list">
              <li><i className="fas fa-map-marker-alt"></i> 123 Culinary Blvd, NY</li>
              <li><i className="fas fa-phone"></i> +1 (555) 123-4567</li>
              <li><i className="fas fa-envelope"></i> hello@alextop.com</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom-bar">
           <p>© {new Date().getFullYear()} Alex Top. All Rights Reserved.</p>
        </div>
      </div>

      <button
        className={`back-to-top ${showTopBtn ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <i className="fas fa-chevron-up"></i>
      </button>
    </footer>
  );
};

export default Footer;
