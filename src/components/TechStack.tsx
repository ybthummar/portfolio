"use client";

import { motion } from "framer-motion";
import { Brain, Cpu, Database, Binary, Network, Bot, Sparkles, Layers } from "lucide-react";

const aiConcepts = [
  { name: "C/C++", icon: <Binary className="w-5 h-5 text-neutral-500" /> },
  { name: "CS Core Fundamentals", icon: <Layers className="w-5 h-5 text-neutral-500" /> },
  { name: "Machine Learning", icon: <Network className="w-5 h-5 text-neutral-500" /> },
  { name: "Deep Learning", icon: <Brain className="w-5 h-5 text-neutral-500" /> },
  { name: "Generative AI", icon: <Sparkles className="w-5 h-5 text-neutral-500" /> },
  { name: "Agentic AI", icon: <Cpu className="w-5 h-5 text-neutral-500" /> },
  { name: "LLMs", icon: <Bot className="w-5 h-5 text-neutral-500" /> },
  { name: "RAG Pipelines", icon: <Database className="w-5 h-5 text-neutral-500" /> },
];

const techItems = [
  { name: "Python", iconUrl: "https://cdn.simpleicons.org/python/gray" },
  { name: "TensorFlow", iconUrl: "https://cdn.simpleicons.org/tensorflow/gray" },
  { name: "JavaScript", iconUrl: "https://cdn.simpleicons.org/javascript/gray" },
  { name: "TypeScript", iconUrl: "https://cdn.simpleicons.org/typescript/gray" },
  { name: "React", iconUrl: "https://cdn.simpleicons.org/react/gray" },
  { name: "Next.js", iconUrl: "https://cdn.simpleicons.org/nextdotjs/gray" },
  { name: "Node.js", iconUrl: "https://cdn.simpleicons.org/nodedotjs/gray" },
  { name: "Docker", iconUrl: "https://cdn.simpleicons.org/docker/gray" },
  { name: "PostgreSQL", iconUrl: "https://cdn.simpleicons.org/postgresql/gray" },
  { name: "Firebase", iconUrl: "https://cdn.simpleicons.org/firebase/gray" },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="relative w-full py-16 md:py-24 bg-white dark:bg-black transition-colors duration-500">
      <div className="text-center mb-20 px-4">
        <h3 className="text-sm font-bold text-[#C3E41D] tracking-[0.2em] uppercase mb-4" style={{ fontFamily: "'Fira Code', monospace" }}>02. Tech Stack</h3>
        <h2 className="text-4xl md:text-5xl font-black text-black dark:text-white tracking-tighter" style={{ fontFamily: "'Antic', sans-serif" }}>
          Arsenal & Expertise
        </h2>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col gap-20 px-4">
        <div>
          <h3 className="text-2xl font-bold mb-8 text-black dark:text-white flex items-center gap-3" style={{ fontFamily: "'Antic', sans-serif" }}>
            <Brain className="w-8 h-8 text-[#C3E41D]" /> Core Engineering
          </h3>
          <div className="flex flex-wrap gap-4">
            {aiConcepts.map((concept, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-3 px-6 py-4 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-[#C3E41D] dark:hover:border-[#C3E41D] transition-all cursor-default"
              >
                <div className="p-2 rounded-lg bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800">{concept.icon}</div>
                <span className="font-semibold text-neutral-800 dark:text-neutral-200 tracking-wide" style={{ fontFamily: "'Antic', sans-serif" }}>{concept.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 text-black dark:text-white flex items-center gap-3" style={{ fontFamily: "'Antic', sans-serif" }}>
            <Layers className="w-8 h-8 text-[#C3E41D]" /> Frameworks
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
            {techItems.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="group flex flex-col items-center justify-center p-8 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-[#C3E41D] dark:hover:border-[#C3E41D] transition-all h-40 relative overflow-hidden"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={tech.iconUrl} 
                  alt={tech.name} 
                  className="w-12 h-12 mb-4 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 dark:invert" 
                />
                <span className="text-sm font-bold text-neutral-600 dark:text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors tracking-wider" style={{ fontFamily: "'Antic', sans-serif" }}>
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

