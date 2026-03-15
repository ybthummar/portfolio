"use client";

import { motion } from "framer-motion";
import { Brain, Cpu, Blocks } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "AI Developer",
      desc: "Architecting intelligent agents and neural networks to solve complex problems and automate workflows.",
      icon: <Brain className="w-8 h-8 text-[#C3E41D]" />,
    },
    {
      title: "Machine Learning Engineer",
      desc: "Deploying scalable ML pipelines, predictive models, and optimizing algorithms for edge and cloud.",
      icon: <Cpu className="w-8 h-8 text-[#C3E41D]" />,
    },
    {
      title: "Full Stack AI Builder",
      desc: "Bridging the gap between cutting-edge AI logic and seamless, intuitive user interactions.",
      icon: <Blocks className="w-8 h-8 text-[#C3E41D]" />,
    },
  ];

  return (
    <section id="experience" className="relative w-full py-16 md:py-24 bg-white dark:bg-black transition-colors duration-500 font-sans">
      <div className="text-center mb-20 px-4">
        <h3 className="text-sm font-bold text-[#C3E41D] tracking-[0.2em] uppercase mb-4" style={{ fontFamily: "'Fira Code', monospace" }}>01. Experience</h3>
        <h2 className="text-4xl md:text-5xl font-black text-black dark:text-white tracking-tighter" style={{ fontFamily: "'Antic', sans-serif" }}>
          Work Journey
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: index * 0.15, type: "spring", stiffness: 50 }}
            className="group relative flex flex-col p-8 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 transition-all duration-300 hover:-translate-y-2 hover:border-[#C3E41D] dark:hover:border-[#C3E41D]"
          >
            <div className="w-16 h-16 rounded-xl bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 flex items-center justify-center mb-8 transition-colors duration-300 group-hover:border-[#C3E41D] dark:group-hover:border-[#C3E41D]">
              {exp.icon}
            </div>
            <h4 className="text-2xl font-bold mb-4 text-black dark:text-white tracking-tight" style={{ fontFamily: "'Antic', sans-serif" }}>{exp.title}</h4>
            <p className="text-neutral-600 dark:text-neutral-400 text-base leading-relaxed">{exp.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

