import React from 'react';
export default function TechStackHeader() {
  return (
    <div className="px-4 py-6">
      <div className="flex justify-center items-center h-full ">
        <div className="grid grid-cols-2  gap-y-4 gap-x-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 sm:gap-4 md:gap-4 lg:gap-8">
          {[
            'JavaScript Course',
            'Orlando Devs',
            'OrlandoJS',
            'Black Orlando Tech',
            'Orlando Devs Hackathon',
            'Girl Develop It Mentorship Program',
            'Brilliant Black Minds',
          ].map((activity, index) => (
            <div key={index} className="flex flex-col items-center">
              <p className="text-sm font-medium text-center text-gray-700">
                {activity}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
