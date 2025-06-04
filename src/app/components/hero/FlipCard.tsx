import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import './flipcard.css'; // Import the CSS file for styles

const FlipCard = () => {
  const [flippedOnce, setFlippedOnce] = useState(false);

  useEffect(() => {
    //flip once on load
    setTimeout(() => {
      setFlippedOnce(true);
      setTimeout(() => {
        setFlippedOnce(false);
      }, 2000); // 2 seconds
    }, 500); // 0.5 seconds
  }, []);
  return (
    <div className="scene flex justify-center items-center h-full w-full">
      <div className={`card ${flippedOnce ? 'is-flipped' : ''}`}>
        {/* front face */}
        <div className="card-face card-front">
          <Image
            src="/marissa.jpg"
            width={1000}
            height={1000}
            alt="Front side of the card"
            className="md:w-[500px] md:h-[500px] w-[400px] h-[400px] object-cover"
          />
        </div>
        <div className="card-face card-back">
          <Image
            src="/marissaghibli.png"
            width={1000}
            height={1000}
            alt="Back side of the card"
            className="md:w-[500px] md:h-[500px] w-[400px] h-[400px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
