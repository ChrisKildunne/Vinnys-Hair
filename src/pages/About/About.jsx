import React from 'react';

export default function About() {
  const backgroundImageStyle = {
    backgroundImage: `url("https://i.imgur.com/bJA8yl3.jpg")`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    width: '100%',
    height: '100vh', // Set the height to cover the entire viewport
  };

  return (
    <div className="About" style={backgroundImageStyle}>
      {/* Your content here */}
    </div>
  );
}
