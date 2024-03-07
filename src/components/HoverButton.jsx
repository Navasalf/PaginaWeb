import React, { useState } from 'react';
import '../styles/hoverButton.css'

 export function HoverButton ({ imageUrl, altText, iconClass }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const buttonClasses = `snip1566 ${isHovered ? 'hover' : ''}`; // Dynamic class assignment


  return (
    <figure className={buttonClasses} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img src={imageUrl} alt={altText} />
      <figcaption><i className={iconClass}></i></figcaption>
      <a href="#">{/* Add your desired link behavior here */}</a>
    </figure>
  );
};

