'use client';
import React from 'react';
import ProjectsHeader from './components/TechStackandActivities/ProjectsHeader';
import Works from './components/TechStackandActivities/Works';
import HeroLayout from './components/hero/HeroLayout';
import NavBar from './components/nav/NavBar'; // Corrected import
import TechStack from './components/TechStackandActivities/TechStack';
import TechStackHeader from './components/TechStackandActivities/TechStackHeader';
import MemberHeader from './components/TechStackandActivities/MemberHeader';
import MemberBody from './components/TechStackandActivities/MemberBody';
import Footer from './components/nav/footer/Footer';
import Contact from './contact/Contact';

export default function Page() {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="bg-gray-100">
        <NavBar />
        <HeroLayout />

        {/* Replace this with a responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 py-4">
          {/* Tech Stack Section */}
          <div className="p-4 w-full rounded-xl bg-white shadow-lg border border-gray-200 relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-50 -z-10">
              test
            </div>
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-20 -mr-20 -mt-20">
              test
            </div>
            <TechStackHeader />
            <TechStack />
          </div>

          {/* Member Body Section */}
          <div className="p-4 w-full rounded-xl bg-white shadow-lg border border-gray-200 relative overflow-hidden">
            <MemberHeader />
            {/* Gradient accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent opacity-40 -z-10"></div>
            <div className="absolute bottom-0 right-0 w-56 h-56 bg-purple-100 rounded-full blur-3xl opacity-20 -mr-10 -mb-10"></div>
            <MemberBody />
          </div>
        </div>

        <ProjectsHeader />
        <Works />
        <Footer authorName={'Marissa Lamothe'} />
      </div>
    </div>
  );
}
