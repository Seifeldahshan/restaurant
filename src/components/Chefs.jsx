import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const chefs = [
  {
    name: 'David Martin',
    role: 'HEAD CHEF',
    img: 'https://xtratheme.com/elementor/restaurant-2/wp-content/uploads/sites/131/2025/02/team-1.png',
  },
  {
    name: 'Emily Chen',
    role: 'SOUS CHEF',
    img: 'https://xtratheme.com/elementor/restaurant-2/wp-content/uploads/sites/131/2025/02/team-2.png',
  },
  {
    name: 'Michael Wong',
    role: 'PASTRY CHEF',
    img: 'https://xtratheme.com/elementor/restaurant-2/wp-content/uploads/sites/131/2025/02/team-3.png',
  },
];

const Chefs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="chefs" className="chefs-section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">Team</p>
          <h2 className="section-title">Our Master Chefs</h2>
        </motion.div>

        <div className="chefs-grid">
          {chefs.map((chef, i) => (
            <motion.div
              key={chef.name}
              className="chef-card"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 * i }}
            >
              <div className="chef-img-wrapper">
                <img src={chef.img} alt={chef.name} />
              </div>
              <h3 className="chef-name">{chef.name}</h3>
              <p className="chef-role">{chef.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Chefs;
