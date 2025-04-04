import React from 'react';
import Image from 'next/image';

export default function Picture() {
  return (
    <div className="flex justify-center items-center h-full min-h-[400px]">
<Image
  src="/marissa.jpg"
  alt="Picture of Marissa Lamothe"
  width={600} // Increased width
  height={600} // Increased height
  className="md:w-96 md:h-96 w-80 h-80 rounded-full object-cover"
/>
    </div>
  );
}
