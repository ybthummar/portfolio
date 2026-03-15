"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Instagram, Github, Send } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  const links = [
    { name: "Email", href: "mailto:yugthummar001@gmail.com", icon: <Mail className="w-5 h-5" />, text: "yugthummar001@gmail.com" },
    { name: "LinkedIn", href: "https://in.linkedin.com/in/yug-thummar", icon: <Linkedin className="w-5 h-5" />, text: "in/yug-thummar" },
    { name: "GitHub", href: "https://github.com/ybthummar", icon: <Github className="w-5 h-5" />, text: "ybthummar" },
    { name: "Instagram", href: "https://instagram.com/yb_thummar", icon: <Instagram className="w-5 h-5" />, text: "@yb_thummar" },
  ];

  return (
    <section id="contact" className="relative w-full py-24 pb-40 px-4 bg-white dark:bg-black transition-colors duration-500">
      <div className="max-w-5xl mx-auto rounded-3xl p-8 md:p-16 border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 transition-all duration-300">
         <div className="text-center mb-16 relative z-10">
           <motion.div 
             initial={{ scale: 0, rotate: -45 }} 
             whileInView={{ scale: 1, rotate: 0 }} 
             transition={{ type: "spring", stiffness: 60 }}
             viewport={{ once: true }}
             className="w-20 h-20 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl"
           >
             <Send className="w-8 h-8 -rotate-12" />
           </motion.div>
           <h2 className="text-4xl md:text-6xl font-black text-black dark:text-white mb-6 uppercase tracking-tighter" style={{ fontFamily: "'Fira Code', monospace" }}>
             LET'S TALK
           </h2>
           <p className="text-neutral-600 dark:text-neutral-400 text-lg md:text-xl font-light max-w-xl mx-auto" style={{ fontFamily: "'Antic', sans-serif" }}>
             Currently open for new opportunities. Whether you have a question or just want to engineer something cool — my inbox is open.
           </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 relative z-10 max-w-3xl mx-auto">
           {links.map((link, i) => (
             <motion.div 
               key={i} 
               initial={{ opacity: 0, y: 30 }} 
               whileInView={{ opacity: 1, y: 0 }} 
               transition={{ delay: i * 0.1, duration: 0.5 }}
               viewport={{ once: true }}
             >
               <Link 
                 href={link.href} 
                 target="_blank" 
                 className="group flex items-center gap-5 p-5 md:p-6 rounded-2xl bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 hover:border-[#C3E41D] dark:hover:border-[#C3E41D] transition-all duration-300"
               >
                 <div className="w-14 h-14 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:text-[#C3E41D] dark:group-hover:text-[#C3E41D]">
                   {link.icon}
                 </div>
                 <div className="flex-1 overflow-hidden" style={{ fontFamily: "'Antic', sans-serif" }}>
                   <div className="text-neutral-500 dark:text-neutral-400 text-xs font-bold uppercase tracking-[0.2em] mb-1.5">{link.name}</div>
                   <div className="text-black dark:text-white text-lg font-bold truncate group-hover:text-[#C3E41D] dark:group-hover:text-[#C3E41D] transition-colors">
                     {link.text}
                   </div>
                 </div>
               </Link>
             </motion.div>
           ))}
         </div>
      </div>
    </section>
  );
}

