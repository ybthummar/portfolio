export default function Footer() {
  return (
    <footer className="w-full bg-white dark:bg-black text-black dark:text-white py-8 border-t border-neutral-200 dark:border-neutral-800 transition-colors duration-500 font-sans">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <span className="text-xl font-bold tracking-tighter" style={{ fontFamily: "'Antic', sans-serif" }}>Yug Thummar</span>
          <span className="text-[#C3E41D]">© {new Date().getFullYear()}</span>
        </div>
        <div className="flex space-x-6 text-sm" style={{ fontFamily: "'Fira Code', monospace" }}>
          <a href="#" className="hover:text-[#C3E41D] transition-colors">GitHub</a>
          <a href="#" className="hover:text-[#C3E41D] transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-[#C3E41D] transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  )
}
