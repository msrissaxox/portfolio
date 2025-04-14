'use client';
import React from 'react';

export default function TechStack() {
  return (
    <div className="px-4 py-6">
      <div className="flex justify-center items-center h-full">
        <div className="grid grid-cols-3 gap-8 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 sm:gap-8 md:gap-8 lg:gap-10">
          {[
            'JavaScript',
            'Node.js',
            'React',
            'Typescript',
            'Express.js',
            'Next.js',
            'TailwindCSS',
            'Mongo.DB',
            'SQL',
            'Vercel',
            'Netlify',
            'AWS',
            'Git',
            'GitHub',
          ].map((tech, index) => (
            <div key={index} className="flex flex-col items-center">
              <p className="text-sm font-medium text-gray-700">{tech}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
