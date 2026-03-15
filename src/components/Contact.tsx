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
    <section id="contact" className="relative w-full py-24 pb-40 px-4">
      <div className="max-w-5xl mx-auto bg-white/[0.02] border border-white/[0.06] rounded-[3rem] p-8 md:p-16 backdrop-blur-2xl relative overflow-hidden shadow-2xl">
         {/* Internal Glow Effects */}
         <div className="absolute -top-20 -right-20 w-80 h-80 bg-fuchsia-600/10 rounded-full blur-[80px]" />
         <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-indigo-600/10 rounded-full blur-[80px]" />
         
         <div className="text-center mb-16 relative z-10">
           <motion.div 
             initial={{ scale: 0, rotate: -45 }} 
             whileInView={{ scale: 1, rotate: 0 }} 
             transition={{ type: "spring", stiffness: 60 }}
             viewport={{ once: true }}
             className="w-20 h-20 bg-gradient-to-tr from-fuchsia-600 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-8 text-white shadow-2xl"
           >
             <Send className="w-8 h-8 -rotate-12" />
           </motion.div>
           <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
             Let&apos;s Build Together.
           </h2>
           <p className="text-gray-400 text-lg md:text-xl font-light max-w-xl mx-auto">
             I&apos;m currently open for new opportunities. Whether you have a question or just want to engineer something cool — my inbox is open.
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
                 className="group flex items-center gap-5 p-5 md:p-6 rounded-[2rem] bg-black/40 border border-white/5 hover:border-fuchsia-500/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(217,70,239,0.1)]"
               >
                 <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:bg-fuchsia-500/20 group-hover:text-fuchsia-300 group-hover:border-fuchsia-500/30">
                   {link.icon}
                 </div>
                 <div className="flex-1 overflow-hidden">
                   <div className="text-gray-500 text-xs font-bold uppercase tracking-[0.2em] mb-1.5">{link.name}</div>
                   <div className="text-gray-200 text-lg font-medium truncate group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-fuchsia-300 group-hover:to-indigo-300 transition-colors">
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