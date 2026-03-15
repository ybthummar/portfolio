"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full py-8 text-center text-gray-500 text-sm border-t border-purple-500/10"
    >
      <p>© 2026 Yug Thummar</p>
    </motion.footer>
  );
}