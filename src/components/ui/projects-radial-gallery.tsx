'use client';

import React from 'react';
import { RadialScrollGallery } from '@/components/ui/portfolio-and-image-gallery';
import { ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const projects = [
  { id: 1, title: "EduSense AI", cat: "Education AI", img: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=400&q=80", link: "https://github.com/ybthummar/EduSense-AI" },
  { id: 2, title: "CaseCut Chatbot", cat: "Legal RAG", img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=400&q=80", link: "https://github.com/ybthummar/CaseCut-chatbot" },
  { id: 3, title: "PetPooja AI", cat: "Automation", img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=400&q=80", link: "https://github.com/ybthummar/PetPoojaAI" },
  { id: 4, title: "EraAI", cat: "Generative AI", img: "https://images.unsplash.com/photo-1620712948343-008423671241?auto=format&fit=crop&w=400&q=80", link: "https://github.com/ybthummar/EraAI" },
  { id: 5, title: "Next-Gen ML Model", cat: "Deep Learning", img: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=400&q=80", link: "#" },
  { id: 6, title: "AI Analytics Board", cat: "Analytics", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80", link: "#" },
];

export default function DemoRadialScrollGalleryBento() {
  return (
    <div id="projects" className="bg-[#030008] min-h-[600px] text-white overflow-hidden w-full py-20">
      <div className="h-[300px] flex flex-col items-center justify-center space-y-4 pt-8">
        <div className="space-y-1 text-center">
          <span className="text-[12px] font-black tracking-[0.3em] text-fuchsia-400 uppercase">
            Portfolio
          </span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-2">
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-indigo-400">Work</span>
          </h1>
        </div>
        <div className="animate-bounce text-gray-500 text-sm mt-8">↓ Scroll slowly to explore</div>
      </div>

      <RadialScrollGallery
        className="!min-h-[800px]"
        baseRadius={450}
        mobileRadius={250}
        visiblePercentage={50}
        scrollDuration={2500}
      >
        {(hoveredIndex) =>
          projects.map((project, index) => {
             const isActive = hoveredIndex === index;
             return (
              <Link 
                href={project.link} 
                target="_blank"
                key={project.id} 
                className="group relative w-[220px] h-[300px] sm:w-[280px] sm:h-[380px] overflow-hidden rounded-2xl bg-white/[0.02] border border-white/10 shadow-2xl block"
              >
                <div className="absolute inset-0 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.img}
                    alt={project.title}
                    className={`h-full w-full object-cover transition-transform duration-700 ease-out ${
                      isActive ? 'scale-110 blur-0' : 'scale-100 blur-[2px] grayscale-[50%]'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80" />
                </div>

                <div className="absolute inset-0 flex flex-col justify-between p-6">
                  <div className="flex justify-between items-start">
                    <Badge variant="secondary" className="text-[10px] px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20">
                      {project.cat}
                    </Badge>
                    <div className={`w-8 h-8 rounded-full bg-fuchsia-600 text-white flex items-center justify-center transition-all duration-500 ${isActive ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-45'}`}>
                      <ArrowUpRight size={16} />
                    </div>
                  </div>

                  <div className={`transition-all duration-500 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-70'}`}>
                    <h3 className="text-2xl font-bold leading-tight text-white">{project.title}</h3>
                    <div className={`h-0.5 bg-gradient-to-r from-fuchsia-500 to-indigo-500 mt-4 transition-all duration-500 ease-out ${isActive ? 'w-full opacity-100' : 'w-0 opacity-0'}`} />
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