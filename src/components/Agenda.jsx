import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Agenda = () => {
    const scrollRef = useRef(null);
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ["start end", "end start"]
    });

    // Desktop parallax values matching original GSAP configuration
    const yDown = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const yUp = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const titleY = useTransform(scrollYProgress, [0, 1], [0, 70]);

    return (
        <section className="agenda-section" id="agenda" ref={scrollRef}>
            <div className="agenda-container" ref={containerRef}>
                <div className="agenda-title-wrapper">
                    <motion.h1 style={{ y: titleY }} className="agenda-title">GALLERY</motion.h1>
                </div>

                {/* Floating Images with Draggable */}
                <motion.div 
                    drag 
                    dragConstraints={containerRef} 
                    style={{ y: yDown }} 
                    className="agenda-image img-tl" 
                    id="agenda-img-1"
                >
                    <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600&auto=format&fit=crop" alt="Healthy Salad" draggable="false" />
                </motion.div>

                <motion.div 
                    drag 
                    dragConstraints={containerRef} 
                    style={{ y: yUp }} 
                    className="agenda-image img-tr" 
                    id="agenda-img-2"
                >
                    <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=600&auto=format&fit=crop" alt="Delicious Pizza" draggable="false" />
                </motion.div>

                <motion.div 
                    drag 
                    dragConstraints={containerRef} 
                    style={{ y: yDown }} 
                    className="agenda-image img-bl" 
                    id="agenda-img-3"
                >
                    <img src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=600&auto=format&fit=crop" alt="Pancakes" draggable="false" />
                </motion.div>

                <motion.div 
                    drag 
                    dragConstraints={containerRef} 
                    style={{ y: yUp }} 
                    className="agenda-image img-br" 
                    id="agenda-img-4"
                >
                    <img src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=600&auto=format&fit=crop" alt="Pasta dish" draggable="false" />
                </motion.div>
            </div>
        </section>
    );
};

export default Agenda;
