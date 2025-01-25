import React from 'react';
import './App.css';
import Header from './views/Header';
import Hero from './views/Hero';
import ImageGallery from './views/ImageGallery';
import Footer from './views/Footer';
import { INITIAL_MENU_ITEMS } from './constants/menu';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Hero id="about" />
      <main>
        <section className="menu-section" id="menu">
          <h2>Menümüz</h2>
          <div className="menu-grid">
            <ImageGallery items={INITIAL_MENU_ITEMS} />
          </div>
        </section>
      </main>
      <Footer id="contact" />
    </div>
  );
};

export default App; 