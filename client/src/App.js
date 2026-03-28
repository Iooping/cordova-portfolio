import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, X, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Page Imports
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <Router>
      <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#d4af37]/30">
        {/* Navigation Bar */}
        <nav className="fixed top-0 w-full z-[100] glass border-b border-white/10 px-6 py-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 text-[#d4af37] font-bold tracking-tighter text-xl gold-glow">
              <Cpu size={20} />
              <span> Engr. Joshua C. Cordova CPE</span>
            </Link>

            {/* Desktop Links (Hidden on Mobile) */}
            <div className="hidden md:flex gap-8 text-[10px] font-medium uppercase tracking-[0.2em]">
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path} className="hover:text-[#d4af37] transition-all">
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Toggle Button */}
            <button 
              className="md:hidden text-white p-2" 
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu Overlay */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden absolute top-full left-0 w-full bg-[#050505]/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
              >
                <div className="flex flex-col p-6 gap-6">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.path} 
                      to={link.path} 
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-bold tracking-widest uppercase hover:text-[#d4af37]"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* Dynamic Content Area */}
        <main className="pt-28 pb-20 md:pt-32 p-6 md:p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* System Status Footer */}
        <footer className="fixed bottom-0 w-full p-4 px-8 border-t border-white/5 bg-[#050505]/80 backdrop-blur-sm flex justify-between items-center text-[10px] font-mono tracking-widest text-gray-500 uppercase z-[90]">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              Status: Online
            </span>
          </div>
          <div className="hidden sm:block">
            © 2026 Joshua Cordova // CHMSU CpE
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App; // This was the missing piece!