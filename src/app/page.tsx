'use client';
import React from 'react';
import Image from 'next/image';
import ProjectsHeader from './components/TechStackandActivities/ProjectsHeader';
import Works from './components/TechStackandActivities/Works';
import HeroLayout from './components/hero/HeroLayout';
import NavBar from './components/nav/NavBar'; // Corrected import
import TechStack from './components/TechStackandActivities/TechStack';
import TechStackHeader from './components/TechStackandActivities/TechStackHeader';
import MemberHeader from './components/TechStackandActivities/MemberHeader';
import MemberBody from './components/TechStackandActivities/MemberBody';
import Footer from './components/nav/footer/Footer';

export default function Page() {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="bg-gray-100">
        <NavBar />
        <HeroLayout />
        <div className="grid grid-rows-3 grid-flow-col gap-4 px-4 py-4 leading-10">
    <div className="p-4 w-full  rounded-xl row-span-3">
<TechStackHeader />
<TechStack />
    </div>
    <div className="p-4 w-full rounded-xl col-span-2"><MemberHeader /></div>
    <div className="p-4 w-full  rounded-xl row-span-2 col-span-2"><MemberBody /></div>
</div>
        <ProjectsHeader />
        <Works />
      <Footer />
      </div>
    </div>
  );
}
