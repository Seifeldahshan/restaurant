import React from 'react';
import Menu from '../components/Menu';
import BackgroundBlobs from '../components/BackgroundBlobs';
import WaveSeparator from '../components/WaveSeparator';

const MenusPage = () => {
  return (
    <main style={{ paddingTop: '80px', backgroundColor: '#9b1919', position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      <BackgroundBlobs />
      
      <div style={{ padding: '80px 0 20px' }}>
        <Menu showButton={false} />
      </div>

      <WaveSeparator color="#ffffff" flip={true} />
    </main>
  );
};

export default MenusPage;
