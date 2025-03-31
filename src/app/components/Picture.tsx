import React from "react";
import Image from "next/image";

export default function Picture() {
    return (
        <div className="flex justify-center items-center h-full min-h-[400px]">
            <Image
                src="/marissa.jpg"
                alt="A picture of Marissa"
                className="h-70 w-60 rounded-full"
                width={128}
                height={128}
                unoptimized // Disable optimization for debugging
            />
        </div>
    );
}