import React, { useState } from 'react';
import './MyWork.css';

export default function MyWork() {
  const imagesAndVideo = [
    "https://i.imgur.com/hUWotX0.mp4",
    'https://i.imgur.com/PmOPgxS.jpg',
    'https://i.imgur.com/mIUudjX.mp4',  
    'https://i.imgur.com/pF9Y42j.jpg',
    'https://i.imgur.com/WgvLXL4.mp4',
    'https://i.imgur.com/PPiNaAL.jpg',
    'https://i.imgur.com/S8P8XFL.jpg',
    'https://i.imgur.com/fxgCzGz.png',
    'https://i.imgur.com/5wc6tmc.png',
    'https://i.imgur.com/3YO89dU.jpg',
    'https://i.imgur.com/L2kvOIf.jpg',
    'https://i.imgur.com/09mPHvC.jpg',
    'https://i.imgur.com/UTHJq2k.jpg',
    'https://i.imgur.com/goYaTh9.jpg',
    'https://i.imgur.com/EH0lxu9.jpg',
    'https://i.imgur.com/cnx79Jl.jpg',
    'https://i.imgur.com/jeP77kJ.jpg',
    'https://i.imgur.com/LUW2E9M.jpg',
  ];

  return (
    <div className="container">
      <div className="image-grid">
        {imagesAndVideo.map((item, index) => (
          <div key={index}>
            {item.endsWith('.mp4') ? (
                <video width="100%" autoPlay muted loop controls>
                <source src={item} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img src={item} alt={`Image ${index}`} className="img-thumbnail" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
