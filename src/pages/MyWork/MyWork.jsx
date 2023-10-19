import React from 'react';
import ReactImageZoom from 'react-image-zoom';

import './MyWork.css';

export default function MyWork() {
  const images = [
    { img: 'https://i.imgur.com/PmOPgxS.jpg', alt: 'Image 1' },
    {img:"https://i.imgur.com/cN7czQn.jpg", alt: 'Image 2'},
    {img:"https://i.imgur.com/fxgCzGz.png" , alt: 'Image 3'},
    {img:"https://i.imgur.com/bNDGlKb.jpg", alt: 'Image 4'},
    {img:"https://i.imgur.com/OzbFXbQ.jpg" , alt: 'Image 5'},

  ];
  return (
    <div className="container">
      <div className="row">
        {images.map((image, index) => (
          <div className="col-md-4" key={index}>
            <ReactImageZoom {...image} zoomImage={image.img} />
          </div>
        ))}
      </div>
    </div>
  );
}



