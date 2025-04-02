import React from 'react';
import Image from 'next/image';
import Page from '../AboutContent';
import Button from './Button';

export default function HeroLayout() {
  return (
    <div>
      <div className="flex h-screen items-center justify-center bg-gray-100 p-5">
        <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-10 md:px-10">
          <div>
            <h1 className="mb-2 text-5xl font-bold text-black">
              <span className="text-red-500">Hi,</span> I'm Marissa Lamothe
            </h1>
            <Page />

            <Button />
          </div>
          <div className="flex justify-center">
            <Image
              src="/marissa.jpg"
              alt="Picture of Marissa Lamothe"
              width={500}
              height={500}
              className="md:size-96 size-72 rounded "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
