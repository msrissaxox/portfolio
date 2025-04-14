'use client';
import React from 'react';
import TiltedCard from '../Card';
import { section } from 'framer-motion/client';

export default function Works() {
  return (
    <div className="mt-10 py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        <a href="https://main.diuc138417s4b.amplifyapp.com/" target="_blank">
          <TiltedCard imageSrc="/blog.gif" overlayContent="BackBook Blogs" />
        </a>
        <a href="https://starbrew.vercel.app/" target="_blank">
          <TiltedCard
            imageSrc="/starbrew.gif"
            overlayContent="StarBrew Coffee"
          />
        </a>
        <a href="https://linkedinpostgen-1.vercel.app/" target="_blank">
          <TiltedCard
            imageSrc="/linkedin.gif"
            overlayContent="LinkedIn AI Post Generator"
          />
        </a>
        <a href="https://fruits-frontend-rose.vercel.app/" target="_blank">
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
