import React from 'react';
import { MenuItem } from '../models/MenuItem';
import './ImageGallery.css';

interface ImageGalleryProps {
  items: MenuItem[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ items }) => {
  return (
    <div className="image-gallery">
      {items.map((item, index) => (
        <div key={index} className="menu-card">
          <img 
            src={require(`../images/${item.image}`)} 
            alt={item.title} 
            loading="lazy"
          />
          <div className="menu-info">
            <h3>{item.title}</h3>
            <p className="price">{item.price} ₺</p>
            <p className="description">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery; 