'use client';
import Image from "next/image";
import React from "react";
import TiltedCard from "../Card";

export default function Works() {
  return (
<div className="mt-10 py-4 columns-3">
          <div className="flex flex-wrap justify-center gap-8">
            <TiltedCard imageSrc="/blog.gif" overlayContent="BackBook Blogs"/>
            <TiltedCard imageSrc="/starbrew.gif" overlayContent="StarBrew Coffee" />
            <TiltedCard imageSrc="/linkedin.gif" overlayContent="LinkedIn AI Post Generator"/>
            <TiltedCard imageSrc="/fruitfinder.gif" overlayContent="Fruit Finder API" />
            <TiltedCard />
            <TiltedCard />
          </div>
        </div>
  )
}
