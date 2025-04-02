import React from 'react';
import AboutContent from './AboutContent.tsx';
import Picture from './Picture.tsx';
import TechStack from './TechStack.tsx';
import AboutHeader from './AboutHeader.tsx';
import TechStackHeader from './TechStackHeader.tsx';

export default function Page() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 mt-8 text-center">
      <div className="rounded">
        <Picture />
      </div>
      <div className="rounded lg:col-span-2 px-10">
        <AboutHeader />
        <AboutContent />
      </div>
      <div className="rounded">
        <TechStackHeader />
        <TechStack />
      </div>
    </div>
  );
}
