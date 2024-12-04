import React from 'react';

// Composant d'image pour le carousel
const ExampleCarouselImage = ({ text, images }) => (
  <div className="container-fluid">
    {/* Afficher toutes les images dans le tableau 'images' */}
    {images.map((image, index) => (
      <img 
        key={index} 
        src={process.env.PUBLIC_URL + '/images/' + image} 
        alt={text} 
        style={{ maxWidth: '100%', margin: '10px' }} 
      />
    ))}
    <div>{text}</div>
  </div>
);

export default ExampleCarouselImage;
