import React from "react";
import Hero from "@/components/ui/portfolio-hero";
import ProjectsRadial from "@/components/ui/projects-radial-gallery";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@700&family=Antic&display=swap"
      />
      <main className="w-full bg-white dark:bg-black text-black dark:text-white transition-colors duration-500 selection:bg-[#C3E41D] selection:text-black">
        <div id="home">
          <Hero />
        </div>
        <Experience />
        <TechStack />
        <ProjectsRadial />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
