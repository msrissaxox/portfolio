'use client';
import React from 'react';
import Image from 'next/image';

import Hero from './components/Hero';
import TiltedCard from './components/Card';
import About from './components/About';
import ProjectsHeader from './components/ProjectsHeader';
import HeroLayout from './components/hero/HeroLayout';
import NavBar from './components/nav/NavBar';

export default function Page() {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="bg-gray-100">
        <NavBar />
        <HeroLayout />
        <About />
        <ProjectsHeader />
        <div className="mt-10 py-4 columns-3">
          <div className="flex flex-wrap justify-center gap-8">
            <TiltedCard imageSrc='/blog.gif'/>
            <TiltedCard imageSrc='/starbrew.gif'/>
            <TiltedCard imageSrc='/linkedin.gif'/>
            <TiltedCard imageSrc='/fruitfinder.gif'/>
            <TiltedCard />
            <TiltedCard />
          </div>
        </div>
      </div>
    </div>
  );
}
