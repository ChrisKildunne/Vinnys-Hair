import React, { useState } from 'react';
import './MyWork.css';

export default function MyWork() {

  const images = [
    'https://i.imgur.com/PmOPgxS.jpg',
    'https://i.imgur.com/pF9Y42j.jpg',
    'https://i.imgur.com/ksVMFrU.jpg',
     "https://i.imgur.com/PmOPgxS.jpg",
     "https://i.imgur.com/pF9Y42j.jpg",
     "https://i.imgur.com/ksVMFrU.jpg",
     "https://i.imgur.com/PPiNaAL.jpg",
     "https://i.imgur.com/cN7czQn.jpg",
     "https://i.imgur.com/bNDGlKb.jpg",
     "https://i.imgur.com/S8P8XFL.jpg",
     "https://i.imgur.com/OzbFXbQ.jpg",
     "https://i.imgur.com/IyAmmLM.jpg",
     "https://i.imgur.com/fxgCzGz.png",
     "https://i.imgur.com/5wc6tmc.png" 
  ];


  return (
    <div className="container">
    <div className="image-grid">
      {images.map((image, index) => (
        <div key={index}>
          <img
            src={image}
            alt={`Image ${index}`}
            className="img-thumbnail"
            
          />
        </div>
      ))}
    </div>
    </div>
  );
}
