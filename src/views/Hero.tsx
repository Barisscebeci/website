import React from 'react';

interface HeroProps {
  id?: string;
}

const Hero: React.FC<HeroProps> = ({ id }) => {
  return (
    <section className="hero-section" id={id}>
      <div className="hero-content">
        <h1>Cumayeri Katık Döner & Burger</h1>
        <p>Eşsiz Lezzetlerin Adresi</p>
      </div>
    </section>
  );
};

export default Hero; 