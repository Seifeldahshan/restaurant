import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    name: 'Sarah Green',
    location: 'Customer From Detroit',
    text: '“Thank you for dinner last night. It was amazing!! I have to say it’s the best meal I have had in quite some time. You will definitely be seeing more of me eating at your establishment. My husband was very impressed and we can’t wait for our parents to come visit.”',
    img: 'https://xtratheme.com/elementor/restaurant-2/wp-content/uploads/sites/131/2025/02/client-2.jpg',
  },
  {
    name: 'John Doe',
    location: 'Customer From London',
    text: '“I am writing to thank you for the wonderful meal we had at your restaurant. The atmosphere and the food were exquisite. The service provided was equally excellent. I look forward to returning soon.”',
    img: 'https://xtratheme.com/elementor/restaurant-2/wp-content/uploads/sites/131/2025/02/client-1.jpg',
  },
  {
    name: 'Jane Smith',
    location: 'Customer From Paris',
    text: '“Absolutely brilliant experience. The flavors were unmatched and the ambiance was perfect for a romantic evening. We will surely be back and highly recommend to all our friends.”',
    img: 'https://xtratheme.com/elementor/restaurant-2/wp-content/uploads/sites/131/2025/02/client-3.jpg',
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <section id="testimonials" className="testimonials-section" ref={ref}>
      <img
        src="https://xtratheme.com/elementor/restaurant-2/wp-content/uploads/sites/131/2025/02/element-10.png"
        alt=""
        style={{
          position: 'absolute',
          left: '5%',
          top: '20%',
          width: '120px',
          opacity: 0.3,
        }}
      />
      <img
        src="https://xtratheme.com/elementor/restaurant-2/wp-content/uploads/sites/131/2025/02/element-11.png"
        alt=""
        style={{
          position: 'absolute',
          right: '5%',
          bottom: '20%',
          width: '100px',
          opacity: 0.3,
        }}
      />

      <div className="container" style={{ maxWidth: '900px' }}>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">Testimonials</p>
          <h2 className="section-title">What Our Clients Say</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Slider {...settings}>
            {testimonials.map((testimonial, i) => (
              <div key={i} className="testimonial-card">
                <div className="testimonial-avatar">
                  <img src={testimonial.img} alt={testimonial.name} />
                </div>
                <h3 className="testimonial-name">{testimonial.name}</h3>
                <p className="testimonial-location">{testimonial.location}</p>
                <p className="testimonial-text">{testimonial.text}</p>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
