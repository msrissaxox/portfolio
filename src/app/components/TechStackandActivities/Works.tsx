'use client';
import React from 'react';
import TiltedCard from '../Card';

export default function Works() {
  return (
    <div className="mt-10 py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        <a href="https://github.com/msrissaxox/blog#readme" target="_blank">
          <TiltedCard imageSrc="/blog.gif" overlayContent="BackBook Blogs" />
        </a>
        <a href="https://github.com/msrissaxox/starbrew/#readme" target="_blank">
          <TiltedCard
            imageSrc="/starbrew.gif"
            overlayContent="StarBrew Coffee"
          />
        </a>
        <a href="https://github.com/msrissaxox/linkedinpostgen/tree/main/#readme" target="_blank">
          <TiltedCard
            imageSrc="/linkedin.gif"
            overlayContent="LinkedIn AI Post Generator"
          />
        </a>
        <a href="https://github.com/msrissaxox/fruits-frontend/tree/main/#readme" target="_blank">
          <TiltedCard
            imageSrc="/fruitfinder.gif"
            overlayContent="Fruit Finder API"
          />{' '}
        </a>
        <TiltedCard imageSrc="/comingsoon.png" overlayContent="Coming Soon" />
        <TiltedCard imageSrc="/comingsoon.png" overlayContent="Coming Soon" />
      </div>
    </div>
  );
}
