import React from 'react';
import { FaInstagram } from 'react-icons/fa';

interface FooterProps {
  id?: string;
}

const Footer: React.FC<FooterProps> = ({ id }) => {
  return (
    <footer className="footer" id={id}>
      <div className="footer-content">
        <div className="contact-info">
          <h3>İletişim</h3>
          <a href="tel:+905395773508" className="phone-link">
            📞 0539 577 35 08
          </a>
          <a href="https://www.instagram.com/merkezburgerdoner/" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="social-link">
            <FaInstagram size={24} /> @merkezburgerdoner
          </a>
          <a href="https://maps.google.com/?q=40.875754363898466,30.95038338282113" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="address-link">
            📍 Yeni, Cumhuriyet Cd. No:18, 81700 Cumayeri/Düzce
          </a>
          <div className="map-container">
            <iframe 
              title="Cumayeri Katık Döner & Burger"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3015.627069662558!2d30.94819338259454!3d40.87575436389847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDUyJzMyLjciTiAzMMKwNTcnMDEuNCJF!5e0!3m2!1str!2str!4v1234567890123"
              width="100%" 
              height="250" 
              style={{border:0}} 
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
        <div className="working-hours">
          <h3>Çalışma Saatleri</h3>
          <div className="schedule">
            <p className="day-time">Pazartesi - Cumartesi</p>
            <p className="hours">10:00 - 02:00</p>
            <p className="day-time closed">Pazar</p>
            <p className="hours closed">Kapalı</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 