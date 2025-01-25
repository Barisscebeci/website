import React, { useState } from 'react';
import './ImageGallery.css';

function ImageGallery({ items }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (item) => {
    setSelectedImage(item);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="image-gallery">
        {items.map((item) => (
          <div key={item.id} className="menu-card" onClick={() => handleImageClick(item)}>
            <div className="image-container">
              <img src={item.src} alt={item.alt} />
            </div>
            <div className="menu-info">
              <h3>{item.title}</h3>
              <p className="description">{item.description}</p>
              <p className="price">{item.price}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleCloseModal}>
              ✕
            </button>
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <div className="modal-info">
              <h3>{selectedImage.title}</h3>
              <p className="description">{selectedImage.description}</p>
              <p className="price">{selectedImage.price}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ImageGallery; 