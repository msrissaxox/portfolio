'use client';
import Image from "next/image";
import React from "react";
import TiltedCard from "../Card";

export default function Works() {
  return (
<div className="mt-10 py-4 columns-3">
          <div className="flex flex-wrap justify-center gap-8">
            <TiltedCard imageSrc="/blog.gif" />
            <TiltedCard imageSrc="/starbrew.gif" />
            <TiltedCard imageSrc="/linkedin.gif" />
            <TiltedCard imageSrc="/fruitfinder.gif" />
            <TiltedCard />
            <TiltedCard />
          </div>
        </div>
  )
}
