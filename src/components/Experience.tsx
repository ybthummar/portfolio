"use client";

import { motion } from "framer-motion";
import { Brain, Cpu, Blocks } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "AI Developer",
      desc: "Architecting intelligent agents and neural networks to solve complex problems and automate workflows.",
      icon: <Brain className="w-8 h-8 text-fuchsia-400" />,
      colorHover: "group-hover:border-fuchsia-500/50 group-hover:shadow-[0_0_40px_rgba(217,70,239,0.15)]",
      bgHover: "group-hover:bg-fuchsia-500/10"
    },
    {
      title: "Machine Learning Engineer",
      desc: "Deploying scalable ML pipelines, predictive models, and optimizing algorithms for edge and cloud.",
      icon: <Cpu className="w-8 h-8 text-indigo-400" />,
      colorHover: "group-hover:border-indigo-500/50 group-hover:shadow-[0_0_40px_rgba(99,102,241,0.15)]",
      bgHover: "group-hover:bg-indigo-500/10"
    },
    {
      title: "Full Stack AI Builder",
      desc: "Bridging the gap between cutting-edge AI logic and seamless, intuitive user interactions.",
      icon: <Blocks className="w-8 h-8 text-cyan-400" />,
      colorHover: "group-hover:border-cyan-500/50 group-hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]",
      bgHover: "group-hover:bg-cyan-500/10"
    },
  ];

  return (
    <section id="experience" className="relative w-full py-24">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      
      <div className="text-center mb-20 px-4">
        <h3 className="text-sm font-black text-fuchsia-500 tracking-[0.2em] uppercase mb-4">My Journey</h3>
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
          Work Experience
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
            className={`group relative flex flex-col p-8 rounded-[2rem] bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] transition-all duration-500 hover:-translate-y-2 ${exp.colorHover}`}
          >
            <div className={`w-16 h-16 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center mb-8 transition-colors duration-500 ${exp.bgHover}`}>
              {exp.icon}
            </div>
            <h4 className="text-2xl font-bold mb-4 text-gray-100 tracking-tight">{exp.title}</h4>
            <p className="text-gray-400 text-base leading-relaxed">{exp.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}