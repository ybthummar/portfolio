"use client";

import { motion } from "framer-motion";
import { Brain, Cpu, Database, Binary, Network, Bot, Sparkles, Layers } from "lucide-react";

const aiConcepts = [
  { name: "C/C++", icon: <Binary className="w-5 h-5 text-zinc-400" /> },
  { name: "CS Core Fundamentals", icon: <Layers className="w-5 h-5 text-indigo-400" /> },
  { name: "Machine Learning (ML)", icon: <Network className="w-5 h-5 text-blue-400" /> },
  { name: "Deep Learning (DL)", icon: <Brain className="w-5 h-5 text-purple-400" /> },
  { name: "Generative AI", icon: <Sparkles className="w-5 h-5 text-fuchsia-400" /> },
  { name: "Agentic AI", icon: <Cpu className="w-5 h-5 text-rose-400" /> },
  { name: "LLMs", icon: <Bot className="w-5 h-5 text-cyan-400" /> },
  { name: "RAG Pipelines", icon: <Database className="w-5 h-5 text-emerald-400" /> },
];

const techItems = [
  { name: "Python", iconUrl: "https://cdn.simpleicons.org/python/white" },
  { name: "TensorFlow", iconUrl: "https://cdn.simpleicons.org/tensorflow/white" },
  { name: "JavaScript", iconUrl: "https://cdn.simpleicons.org/javascript/white" },
  { name: "TypeScript", iconUrl: "https://cdn.simpleicons.org/typescript/white" },
  { name: "React", iconUrl: "https://cdn.simpleicons.org/react/white" },
  { name: "Next.js", iconUrl: "https://cdn.simpleicons.org/nextdotjs/white" },
  { name: "Node.js", iconUrl: "https://cdn.simpleicons.org/nodedotjs/white" },
  { name: "Docker", iconUrl: "https://cdn.simpleicons.org/docker/white" },
  { name: "PostgreSQL", iconUrl: "https://cdn.simpleicons.org/postgresql/white" },
  { name: "Firebase", iconUrl: "https://cdn.simpleicons.org/firebase/white" },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="relative w-full py-24">
      <div className="text-center mb-20 px-4">
        <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-white drop-shadow-lg">
          Arsenal & <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-indigo-400">Expertise</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">The core technologies and domains I specialize in to build next-generation intelligent systems.</p>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col gap-20 px-4">
        
        {/* Concepts & AI Domains */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
            <Brain className="w-8 h-8 text-fuchsia-400" /> Core Engineering & AI
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
                className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:border-fuchsia-500/40 hover:bg-fuchsia-500/10 backdrop-blur-xl transition-all shadow-lg hover:shadow-[0_0_20px_rgba(217,70,239,0.2)] cursor-default"
              >
                <div className="bg-white/5 p-2 rounded-lg">{concept.icon}</div>
                <span className="font-semibold text-gray-200 tracking-wide">{concept.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Frameworks & Tools Grid */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
            <Layers className="w-8 h-8 text-indigo-400" /> Languages & Frameworks
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
            {techItems.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                whileHover={{ y: -5, scale: 1.08 }}
                className="group flex flex-col items-center justify-center p-8 rounded-[2rem] bg-white/[0.02] border border-white/[0.05] hover:border-indigo-500/40 hover:bg-indigo-500/[0.02] backdrop-blur-md transition-all h-40 relative overflow-hidden shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={tech.iconUrl} 
                  alt={tech.name} 
                  className="w-12 h-12 mb-4 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" 
                />
                <span className="text-sm font-bold text-gray-400 group-hover:text-white transition-colors tracking-wider">
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