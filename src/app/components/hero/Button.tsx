import React from 'react';
export default function Button() {
 return (
    <div className="flex justify-center space-x-5">
 
<button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-red-500 text-amber-100 p-5 py-3 font-semibold">
Resume
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
</button>
</div>
)
}
