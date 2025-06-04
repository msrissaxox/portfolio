'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    console.log('clicked');
    // Toggle the state
    setIsOpen(!isOpen);
  }

  return (
    <header className="relative flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-3">
      <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center justify-between">
          <Link
            className="flex-none text-sm md:text-lg lg:text-xl font-semibold focus:outline-hidden focus:opacity-80"
            href="/"
            aria-label="Marissa Lamothe Portfolio"
          >
            Marissa Lamothe - Full Stack Developer
          </Link>

          <div className="sm:hidden">
            <button
              type="button"
              onClick={handleClick}
              className="hs-collapse-toggle relative size-9 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
              id="hs-navbar-example-collapse"
              aria-expanded={isOpen}
              aria-controls="hs-navbar-example"
              aria-label="Toggle navigation"
              data-hs-collapse="#hs-navbar-example"
            >
              <svg
                className="hs-collapse-open:hidden shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg
                className="hs-collapse-open:block hidden shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
              <span className="sr-only">Toggle navigation</span>
            </button>
          </div>
        </div>

        <div
          id="hs-navbar-example"
          className={`overflow-hidden transition-all duration-300 ease-in-out md:block ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } sm:max-h-96 sm:opacity-100 sm:block md:max-h-none md:opacity-100 md:block`}
          aria-labelledby="hs-navbar-example-collapse"
        >
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
            <Link
              className="font-medium text-green-700 focus:outline-none"
              href="/"
              aria-current="page"
            >
              Home
            </Link>
            <Link
              className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400"
              href="/#works"
            >
              Works
            </Link>
            <Link
              className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400"
              href="/Marissa_Lamothe_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download={true}
            >
              Resume
            </Link>
            <Link
              className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400"
              href="/contact"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
