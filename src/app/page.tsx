'use client'
import React from "react";

import Hero from './components/Hero';
import TiltedCard from "./components/Card";
import About from "./components/About";
import ProjectsHeader from "./components/ProjectsHeader";
import Cta from "./components/Cta";

export default function Page() {

  
    const handleClick = () => {
        alert('Button clicked!');
    };
  
  return (
    <div className="flex flex-col h-screen">
     <div>
     
      <Hero />
      <About />
      <ProjectsHeader />
      <div className="mt-10 py-4 columns-3">
        <div className="flex flex-wrap justify-center gap-8">
          <TiltedCard />
          <TiltedCard />
          <TiltedCard />
          <TiltedCard />
          <TiltedCard />
          <TiltedCard />
        </div>
      
   
      </div>
      <div className="flex items-center justify-center font-bold text-6xl bg-black h-50">
      <Cta onClick={ handleClick } text="contact me"/>
     </div>
      </div>
    </div>
   
  );

}