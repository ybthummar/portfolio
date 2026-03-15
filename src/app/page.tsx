import React from "react";
import Hero from "@/components/ui/portfolio-hero";
import ProjectsRadial from "@/components/ui/projects-radial-gallery";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import GlowAnimation from "@/components/GlowAnimation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Demo() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@700&family=Antic&display=swap"
      />
      
      <main className="w-full bg-[#030008] text-white">
        {/* Premium Noise Overlay */}
        <div 
          className="fixed inset-0 z-[999] pointer-events-none opacity-[0.03] mix-blend-overlay" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        <div id="home">
          <Hero />
        </div>
        
        <Experience />
        <TechStack />
        <GlowAnimation />
        
        {/* The new scroll linked Radial Scroll Gallery */}
        <ProjectsRadial />
        
        <Contact />
        <Footer />
      </main>
    </>
  );
}
