import React, { useState }  from 'react';

export default function Carousel({ images }) {
    const [photo, setPhoto] = useState(0);

    const handleLeft = () => {
        const updatedPhoto = photo === 0 ? images.length - 1 : photo - 1;
        setPhoto(updatedPhoto);
      };
    
      const handleRight = () => {
        const updatedPhoto = photo === images.length - 1 ? 0 : photo + 1;
        setPhoto(updatedPhoto);
      };
    

  return (
    <div>
       <img src={images[photo]} alt="person face" /> 
       <button onClick={handleLeft}>Left</button>
       <button onClick={handleRight}>Right</button>
    </div>
  )
}
