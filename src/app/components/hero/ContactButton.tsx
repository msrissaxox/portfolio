import React from 'react';
import Link from 'next/link';

export default function Button() {
  return (
    <div className="flex justify-center w-2/3 space-x-5">
       <Link className="flex w-full justify-center gap-2 rounded-2xl bg-green-700 text-amber-100 p-5 py-3 mx-1 font-semibold" href="/contact">
       {/* <button className="flex w-full justify-center gap-2 rounded-2xl bg-green-700 text-amber-100 p-5 py-3 mx-1 font-semibold"> */}
       Contact Me
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
</svg>

      {/* </button> */}
      </Link>
    </div>
  );
}
