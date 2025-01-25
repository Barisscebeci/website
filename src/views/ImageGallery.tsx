import React, { memo, useState } from 'react';
import { MenuItem } from '../models/MenuItem';
import { MdClose, MdZoomIn } from 'react-icons/md';
import './ImageGallery.css';

interface ImageGalleryProps {
  items: MenuItem[];
}

const ImageGallery: React.FC<ImageGalleryProps> = memo(({ items }) => {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const handleImageClick = (item: MenuItem) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  return (
    <>
      <div className="image-gallery">
        {items.map((item) => (
          <div key={item.id} className="menu-card" onClick={() => handleImageClick(item)}>
            <div className="image-container">
              <img src={item.image} alt={item.alt} loading="lazy" />
              <div className="menu-info">
                <h3>{item.title}</h3>
                <p className="price">{item.price}</p>
                <p className="description">{item.description}</p>
                <div className="zoom-icon">
                  <MdZoomIn size={24} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleCloseModal}>
              <MdClose size={24} />
            </button>
            <img src={selectedItem.image} alt={selectedItem.alt} />
            <div className="modal-info">
              <h2>{selectedItem.title}</h2>
              <p className="modal-price">{selectedItem.price}</p>
              <p className="modal-description">{selectedItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
});

ImageGallery.displayName = 'ImageGallery';

export default ImageGallery; 