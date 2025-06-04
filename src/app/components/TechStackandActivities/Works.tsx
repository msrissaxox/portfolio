'use client';
import React from 'react';
import TiltedCard from '../Card';

export default function Works() {
  return (
    <div className="mt-10 py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        <a
          href="https://github.com/msrissaxox/blog#readme"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TiltedCard
            imageSrc="/blog.gif"
            overlayContent="BackBook Blogs"
            altText="BackBook Blogs gif"
          />
        </a>
        <a
          href="https://github.com/msrissaxox/starbrew/#readme"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TiltedCard
            imageSrc="/starbrew.gif"
            overlayContent="StarBrew Coffee"
            altText="StarBrew Coffee gif"
          />
        </a>
        <a
          href="https://github.com/msrissaxox/linkedinpostgen/tree/main/#readme"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TiltedCard
            imageSrc="/linkedin.gif"
            overlayContent="LinkedIn AI Post Generator"
            altText="LinkedIn AI Post Generator gif"
          />
        </a>
        <a
          href="https://github.com/msrissaxox/fruits-frontend/tree/main/#readme"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TiltedCard
            imageSrc="/fruitfinder.gif"
            overlayContent="Fruit Finder API"
            altText="Fruit Finder API gif"
          />
        </a>
        <a
          href="https://www.goldenlightdesigns.co"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TiltedCard
            imageSrc="/gld.gif"
            overlayContent="Golden Light Designs"
            altText="Golden Light Designs gif"
          />
        </a>
        {/* <TiltedCard
          imageSrc="/comingsoon.png"
          overlayContent="Coming Soon"
          altText="Coming Soon image"
        /> */}
      </div>
    </div>
  );
}
