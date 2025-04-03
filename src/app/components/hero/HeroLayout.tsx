import React from 'react';
import Image from 'next/image';
import AboutContent from './AboutContent';
import Button from './Button';
import HeroTitle from './HeroTitle';
import Picture from '../Picture';

export default function HeroLayout() {
  return (
    <div>
      <div className="flex h-screen items-center justify-center bg-gray-100 p-5">
        <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-10 md:px-10">
          <div>
            <HeroTitle />
          <AboutContent />
            <Button />
          </div>
          <div className="flex justify-center">
            <Picture />
          </div>
        </div>
      </div>
    </div>
  );
}
