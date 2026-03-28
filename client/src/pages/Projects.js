import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Shield, Zap, ExternalLink, Code2, Activity, X } from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: "SYS-01",
      title: "ESP32-CAM Security Protocol",
      category: "AIoT / Hardware",
      icon: <Shield className="text-[#d4af37]" size={28} />,
      status: "Active Deployment",
      description: "Engineered a presence-based monitoring matrix utilizing ESP32-CAM and magnetic reed switches.",
      extendedDetails: [
        "The core objective of this system was to implement security monitoring without compromising privacy. By utilizing a frame-differencing algorithm directly on the ESP32 microcontroller, the system detects motion mathematically without saving or transmitting raw image data.",
        "Integrated with magnetic reed switches, the system establishes a multi-layered logic gate: the camera processing only activates when the physical door state changes. This significantly reduces power consumption and thermal load on the ESP32-CAM module.",
        "Alerts are routed through physical GPIO triggers (buzzers/LEDs) for immediate localized feedback, making it a robust, standalone edge-computing solution."
      ],
      features: ["GPIO Alert Logic", "Frame-Differencing", "Automated Night Protocol"],
      tech: ["ESP32-CAM", "C++", "Sensors", "IoT"],
      link: "#"
    },
    {
      id: "SYS-02",
      title: "CAIC AI Agent",
      category: "Generative AI",
      icon: <Bot className="text-blue-400" size={28} />,
      status: "Iterative Beta",
      description: "Founder-led architecture for a client-facing automation agent leveraging LangChain and the Gemini API.",
      extendedDetails: [
        "CAIC is designed to bridge the gap between complex LLM capabilities and streamlined customer service. Built utilizing LangChain, the agent connects directly to the Gemini API to parse, analyze, and respond to user inquiries in real-time.",
        "A major engineering focus was placed on 'Prompt Modularity'. By structuring the system's context window with strict, brand-aligned constraints, the agent provides highly deterministic and safe outputs, eliminating hallucination risks common in standard chatbots.",
        "The architecture is currently being optimized for RAG (Retrieval-Augmented Generation) to allow the agent to pull from specific company databases dynamically."
      ],
      features: ["RAG Architecture", "Prompt Modularity", "Multimodal Hooks"],
      tech: ["LangChain", "Gemini API", "Python", "Node.js"],
      link: "#"
    },
    {
      id: "SYS-03",
      title: "Dynamic Pedestrian Matrix",
      category: "Engineering Research",
      icon: <Zap className="text-green-400" size={28} />,
      status: "Prototyping Phase",
      description: "Developing a dynamic line-by-line illumination system targeted at night-time pedestrian safety.",
      extendedDetails: [
        "This capstone engineering project focuses on reducing low-light accident probabilities through reactive hardware. The system utilizes a grid of sensors to detect pedestrian presence and movement vectors.",
        "Upon detection, an Arduino-based logic controller sequences power to dynamic ground-level illumination arrays. Instead of static lighting, the system illuminates line-by-line, creating a highly visible, active warning zone for approaching vehicles.",
        "Current development involves stress-testing the power distribution relays and optimizing the sensor array for varied weather conditions."
      ],
      features: ["Dynamic Illumination", "Sensor Integration", "Hardware Design"],
      tech: ["Arduino", "Power Systems", "C++", "Relays"],
      link: "#"
    }
  ];

  // Grid Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  // Prevent scrolling when modal is open
  if (selectedProject) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }

  return (
    <div className="relative min-h-[90vh] py-10 overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-[#d4af37]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 px-4 md:px-6">
        
        {/* Header Section */}
        <div className="mb-16 border-l-4 border-[#d4af37] pl-6 md:pl-8">
          <div className="flex items-center gap-3 mb-2">
            <Activity size={16} className="text-[#d4af37] animate-pulse" />
            <span className="text-[#d4af37] font-mono text-xs tracking-[0.3em] uppercase">Execution Environment</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">
            Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#f3cf7a] to-[#d4af37] gold-glow">Repository</span>
          </h1>
          <p className="text-gray-400 font-mono text-xs md:text-sm mt-4 tracking-wide">
            Retrieving active modules from /var/www/hardware_and_ai...
          </p>
        </div>

        {/* Project Grid */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              onClick={() => setSelectedProject(project)}
              className="glass group relative p-8 rounded-[2rem] border-white/10 hover:border-[#d4af37]/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.15)] flex flex-col h-full cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#d4af37]/0 to-[#d4af37]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="p-4 bg-[#050505]/60 rounded-2xl border border-white/5 group-hover:bg-[#d4af37]/10 transition-all">
                  {project.icon}
                </div>
                <span className="text-[9px] font-bold uppercase tracking-widest bg-[#050505]/60 text-[#d4af37] px-3 py-1.5 rounded-full border border-white/10">
                  {project.status}
                </span>
              </div>

              <div className="flex-grow relative z-10">
                <p className="text-[#d4af37] text-[10px] font-mono uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
                  <Code2 size={12} /> {project.category}
                </p>
                <h3 className="text-2xl font-black mb-4 text-white group-hover:text-[#f3cf7a] transition-colors leading-tight">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div className="mt-auto pt-6 border-t border-white/10 relative z-10">
                <p className="text-xs text-gray-500 font-mono text-center group-hover:text-[#d4af37] transition-colors">
                  [ Click to Initialize Data Sequence ]
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* 🟢 Popup Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 sm:p-6">
            {/* Dark Overlay (Clicks outside the modal close it) */}
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-[#050505]/80 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Content Box */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="glass relative w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-[2rem] p-8 md:p-12 border-white/20 shadow-2xl shadow-[#d4af37]/10"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 bg-white/5 hover:bg-[#d4af37]/20 text-gray-400 hover:text-[#d4af37] rounded-full transition-colors"
              >
                <X size={24} />
              </button>

              <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-8">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                  {selectedProject.icon}
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-black text-white mb-2">{selectedProject.title}</h2>
                  <div className="flex gap-3 items-center">
                    <span className="text-[#d4af37] text-[10px] font-mono uppercase tracking-[0.2em]">{selectedProject.id}</span>
                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full" />
                    <span className="text-gray-400 text-xs font-mono uppercase tracking-widest">{selectedProject.category}</span>
                  </div>
                </div>
              </div>

              {/* Extended Description Paragraphs */}
              <div className="space-y-6 text-gray-300 leading-relaxed text-sm md:text-base mb-10">
                {selectedProject.extendedDetails.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                {/* Tech Stack */}
                <div>
                  <h4 className="text-[#d4af37] text-xs font-mono uppercase tracking-widest mb-4">Tech Stack Architecture</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t, i) => (
                      <span key={i} className="text-xs font-mono border border-white/10 px-3 py-1.5 rounded-lg bg-[#050505]/50 text-gray-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-[#d4af37] text-xs font-mono uppercase tracking-widest mb-4">Key Features</h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-8 border-t border-white/10">
                <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-[#d4af37] text-black hover:bg-white text-xs font-black uppercase tracking-widest px-8 py-4 rounded-xl transition-all">
                  <ExternalLink size={16} /> Deploy Module
                </a>
                <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-black uppercase tracking-widest px-8 py-4 rounded-xl transition-all">
                  {/* Inline GitHub SVG */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                  View Source
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}