import React from 'react';
import Hero from '../components/Hero';
import Welcome from '../components/Welcome';
import Menu from '../components/Menu';
import Agenda from '../components/Agenda';
import WaveSeparator from '../components/WaveSeparator';
import BackgroundBlobs from '../components/BackgroundBlobs';

const Home = () => {
  return (
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
  );
};

export default Home;
