import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { MdPhone } from 'react-icons/md';
import './Header.css';

const Header: React.FC = () => {
  const handleCallClick = () => {
    window.location.href = 'tel:05395773508';
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="title-container">
          <h1>Döner & Burger</h1>
        </div>
        <nav className="navigation">
          <button onClick={() => scrollToSection('about')}>Hakkımızda</button>
          <button onClick={() => scrollToSection('menu')}>Menü</button>
          <button onClick={() => scrollToSection('contact')}>İletişim</button>
        </nav>
        <div className="call-to-order" onClick={handleCallClick}>
          <MdPhone className="phone-icon" />
          <div className="call-text">
            <p>Sipariş vermek için</p>
            <p className="phone-number">0539 577 35 08</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 