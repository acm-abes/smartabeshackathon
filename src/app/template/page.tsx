/** @format */
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl.from(".about-title", {
        opacity: 0,
        y: -30,
        duration: 1,
      })
        .from(
          ".about-divider",
          {
            scaleX: 0,
            duration: 0.8,
          },
          "-=0.5",
        )
        .from(
          ".about-section",
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
            stagger: 0.15,
          },
          "-=0.3",
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="min-h-screen w-full overflow-hidden ">
      {/* Texture Overlay */}
      <div className="absolute inset-0 pointer-events-none z-20" />

      {/* SVG Drawing Layer */}
      <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none">
        <defs>
          <marker
            id="arrow-start"
            markerWidth="10"
            markerHeight="10"
            refX="1"
            refY="3"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M9,0 L9,6 L0,3 z" fill="#165a94" />
          </marker>
          <marker
            id="arrow-end"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M0,0 L0,6 L9,3 z" fill="#165a94" />
          </marker>
        </defs>
        <rect
          x="5%"
          y="5%"
          width="90%"
          height="90%"
          fill="none"
          stroke="#165a94"
          strokeWidth="2"
          className="opacity-30"
        />
        <line
          x1="5%"
          y1="10%"
          x2="95%"
          y2="10%"
          stroke="#165a94"
          strokeWidth="1"
          markerStart="url(#arrow-start)"
          markerEnd="url(#arrow-end)"
          className="opacity-30"
        />
        <line
          x1="8%"
          y1="5%"
          x2="8%"
          y2="95%"
          stroke="#165a94"
          strokeWidth="1"
          markerStart="url(#arrow-start)"
          markerEnd="url(#arrow-end)"
          className="opacity-30"
        />
      </svg>

      {/* Content Section */}
      <section className="relative z-10 min-h-screen py-20 px-4">
        <div className="max-w-5xl mx-auto w-full">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="about-title text-5xl md:text-7xl font-bold text-[#165a94] mb-4 tracking-tight font-mono">
              SAH Templates
            </h1>
            <div className="about-divider h-1 w-32 bg-[#165a94] mx-auto"></div>
          </div>

          {/* Templates Download Section */}
          <div className="about-section bg-[#3791c4]/30 backdrop-blur-sm border-2 border-[#165a94] p-6 md:p-8 rounded-lg mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 font-mono">
              Download Templates
            </h2>
            <p className="text-white/90 text-base md:text-lg font-mono leading-relaxed mb-6">
              Download the official templates for your presentations and documentation. 
              Focus on the content and clarity of your submission rather than the design.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              {/* PPT Template */}
              <a
                href="/SAH_ppt.pptx"
                download="SAH_ppt.pptx"
                className="group relative inline-block px-8 py-4 overflow-hidden border-2 border-[#165a94] text-[#165a94] bg-[#5fb8dc]/20 backdrop-blur-md font-bold uppercase tracking-widest hover:bg-[#165a94] hover:text-[#5fb8dc] transition-all duration-300 w-full md:w-auto text-center"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                  </svg>
                  PPT Template
                </span>
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-[#165a94] group-hover:h-full transition-all duration-300 z-0 opacity-20"></div>
                
                {/* Decorative Corner Marks */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#165a94]"></div>
                <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#165a94]"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#165a94]"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#165a94]"></div>
              </a>

              {/* Doc Template */}
              <a
                href="/doc-template.docx"
                download="doc-template.docx"
                className="group relative inline-block px-8 py-4 overflow-hidden border-2 border-[#165a94] text-[#165a94] bg-[#5fb8dc]/20 backdrop-blur-md font-bold uppercase tracking-widest hover:bg-[#165a94] hover:text-[#5fb8dc] transition-all duration-300 w-full md:w-auto text-center"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                  </svg>
                  Doc Template
                </span>
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-[#165a94] group-hover:h-full transition-all duration-300 z-0 opacity-20"></div>
                
                {/* Decorative Corner Marks */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#165a94]"></div>
                <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#165a94]"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#165a94]"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#165a94]"></div>
              </a>
            </div>
          </div>
          
          
        

        </div>
      </section>
    </main>
  );
}
