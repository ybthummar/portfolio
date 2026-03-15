'use client';

import React, { useState, useEffect } from 'react';
import { RadialScrollGallery } from '@/components/ui/portfolio-and-image-gallery';
import { ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

// Using proper context photos mapping from Unsplash and Custom Links
const projects = [
  { id: 1, title: "EduSense AI", cat: "Education AI", img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=400&q=80", link: "https://github.com/ybthummar/EduSense-AI" },
  { id: 2, title: "CaseCut Chatbot", cat: "Legal RAG", img: "https://cdn.prod.website-files.com/645a5c190d742621796eedd1/66a7737a45940da39568048a_667ec33398826f97fe5db7fb_representation-ai-legal-chatbot.jpeg", link: "https://github.com/ybthummar/CaseCut-chatbot" },
  { id: 3, title: "PetPooja AI", cat: "Automation", img: "https://petpoojaweb.gumlet.io/images/pp-retail-new/Barcode-Scanning.webp?w=360&dpr=2.6", link: "https://github.com/ybthummar/PetPoojaAI" },
  { id: 4, title: "EraAI", cat: "Generative AI", img: "https://era-ai-in.vercel.app/_next/image?url=%2Flogo.png&w=640&q=75", link: "https://github.com/ybthummar/EraAI" },
  { id: 5, title: "Next-Gen ML", cat: "Deep Learning", img: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=400&q=80", link: "https://github.com/ybthummar" },
  { id: 6, title: "Analytics Board", cat: "Analytics", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80", link: "https://github.com/ybthummar" },
];

export default function DemoRadialScrollGalleryBento() {
  const [radius, setRadius] = useState({ base: 450, mobile: 250 });

  useEffect(() => {
    const handleResize = () => {
      // Dynamic margin and radius scaling based on width
      if (window.innerWidth < 640) {
        setRadius({ base: 450, mobile: Math.max(180, window.innerWidth * 0.6) });
      } else {
        setRadius({ base: 450, mobile: 250 });
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div id="projects" className="bg-white dark:bg-black min-h-[100vh] sm:min-h-[600px] text-black dark:text-white transition-colors duration-500 overflow-hidden w-full py-10 sm:py-20 font-sans px-auto">
      <div className="h-[20vh] sm:h-[300px] flex flex-col items-center justify-center space-y-4 pt-4 sm:pt-8 w-full px-4">
        <div className="space-y-1 text-center max-w-full">
          <span className="text-[10px] sm:text-[12px] font-bold tracking-[0.3em] text-[#C3E41D] uppercase" style={{ fontFamily: "'Fira Code', monospace" }}>
            03. Portfolio
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-black dark:text-white mb-2" style={{ fontFamily: "'Antic', sans-serif" }}>
            Engineering Work
          </h1>
        </div>
        <div className="animate-bounce text-neutral-500 dark:text-neutral-400 text-xs sm:text-sm mt-4 sm:mt-8" style={{ fontFamily: "'Antic', sans-serif" }}>↓ Scroll slowly</div>
      </div>

      <RadialScrollGallery
        className="!min-h-[80vh] sm:!min-h-[800px] w-full"
        baseRadius={radius.base}
        mobileRadius={radius.mobile}
        visiblePercentage={50}
        scrollDuration={2500}
      >
        {(hoveredIndex) =>
          projects.map((project, index) => {
             const isActive = hoveredIndex === index;
             // Ensure fallback defaults to github
             const targetLink = project.link === "#" || !project.link ? "https://github.com/ybthummar" : project.link;
             return (
              <Link 
                href={targetLink} 
                target="_blank"
                key={project.id} 
                className="group relative w-[180px] h-[250px] sm:w-[220px] sm:h-[300px] md:w-[280px] md:h-[380px] overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xl block flex-shrink-0"
              >
                <div className="absolute inset-0 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.img}
                    alt={project.title}
                    className={`h-full w-full object-cover transition-transform duration-700 ease-out ${
                      isActive ? 'scale-110 blur-0 grayscale-0' : 'scale-100 blur-[1px] grayscale'
                    } object-center bg-white`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
                </div>

                <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-6">
                  <div className="flex justify-between items-start">
                    <Badge variant="secondary" className="text-[8px] sm:text-[10px] px-2 py-1 sm:px-3 sm:py-1 bg-black/50 text-white backdrop-blur-md border border-neutral-600 rounded-lg">
                      {project.cat}
                    </Badge>
                    <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#C3E41D] text-black flex items-center justify-center transition-all duration-500 ${isActive ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-45'}`}>
                      <ArrowUpRight size={14} className="sm:w-4 sm:h-4" />
                    </div>
                  </div>

                  <div className={`transition-all duration-500 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-70'}`}>
                    <h3 className="text-xl sm:text-2xl font-bold leading-tight text-white tracking-tight" style={{ fontFamily: "'Antic', sans-serif" }}>{project.title}</h3>
                    <div className={`h-1 bg-[#C3E41D] mt-2 sm:mt-4 transition-all duration-500 ease-out ${isActive ? 'w-1/2 opacity-100' : 'w-0 opacity-0'}`} />
                  </div>
                </div>
              </Link>
             );
          })
        }
      </RadialScrollGallery>
    </div>
  );
}
