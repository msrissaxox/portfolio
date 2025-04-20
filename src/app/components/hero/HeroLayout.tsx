import React from 'react';

import HeroTitle from './HeroTitle';
import AboutContent from './AboutContent';
import Button from './Button';
import ContactButton from './ContactButton';

import FlipCard from './FlipCard';

export default function HeroLayout() {
  return (
    <div
      className="flex flex-col items-center justify-center w-full bg-gray-100 py-8 md:py-16"
      id="divFadeIn"
    >
      <div className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="flex flex-col space-y-6 text-center md:text-left">
            <HeroTitle />
            <AboutContent />
            {/* <div className="flex justify-items-stretch md:justify-start"> */}
            {/* <div className="flex flex-col md:flex-row items-stretch md:justify-center gap-2"> */}
            <div className="flex flex-col md:flex-row items-center md:items-stretch md:justify-center gap-2">

              <Button />
              <ContactButton />
            </div>
          </div>
          {/* <div className="flex justify-center order-first md:order-last mb-8 md:mb-0">
          <div className="flex justify-center items-center h-full min-h-[600px] w-full">
          <FlipCard />
                </div>
          </div> */}
          <div className="flex justify-center order-first md:order-last mb-8 md:mb-0">
            <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] flex justify-center items-center">
              <FlipCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
