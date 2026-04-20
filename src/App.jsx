import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Header from './components/Header';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import Menu from './components/Menu';
import Testimonials from './components/Testimonials';
import Agenda from './components/Agenda';
import Footer from './components/Footer';
import WaveSeparator from './components/WaveSeparator';
import BackgroundBlobs from './components/BackgroundBlobs';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8, // Slower duration for a heavier feel
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.6, // Multiplier makes it feel heavier to move
      touchMultiplier: 1.5,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <WaveSeparator color="#ffffff" withPizza={true} />
        
        <div style={{ position: 'relative', backgroundColor: '#9b1919', overflow: 'hidden' }}>
          <BackgroundBlobs />
          <Welcome />
          <Menu />
        </div>

        <WaveSeparator color="#ffffff" flip={true} />
        <Agenda />
      </main>
      <Footer />
    </div>
  );
}

export default App;
