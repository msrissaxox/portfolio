import React from 'react';
// import Link from 'next/link';

interface ButtonProps {
  text: string;
  icon: React.ReactNode;
  href?: string; // Optional, only required if the button is a link
  onClick?: () => void; // Optional, only used for non-link buttons
}

export default function Button({ text, icon, href, onClick, ...rest }: ButtonProps) {
  // If `href` is provided, render a link
  if (href ) {
    return (
      <a
      href={href} 
      download={true}
         {...rest}
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-green-700 text-amber-100 p-5 py-3 mx-1 font-semibold hover:bg-green-800 transition"
        >
          <span>{text}</span>
          {icon}
          </a>
    );
  }  
  // Otherwise, render a button
  return (
    <button
      onClick={onClick}
      className="flex w-full items-center justify-center gap-2 rounded-2xl bg-green-700 text-amber-100 p-5 py-3 mx-1 font-semibold hover:bg-green-800 transition"
    >
      <span>{text}</span>
      {icon}
    </button>
  );
}