import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";

export default function MacbookShowcase() {
  return (
    <div className="relative w-full bg-transparent overflow-hidden">
      <MacbookScroll
        title={
          <>
            <span className="text-3xl md:text-5xl font-bold text-center pb-2 
  bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 
  text-transparent bg-clip-text">
              Immersive Project Showcase
            </span>
          </>
        }
        // badge={
        //   <div className="px-4 py-2 rounded-md bg-zinc-900 border border-zinc-800 text-white text-sm font-medium shadow-md">

        //   </div>
        // }
        src="/macImg.jpg"
        showGradient={false}
      />
    </div>
  );
} 
