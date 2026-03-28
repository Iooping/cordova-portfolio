import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Network, Activity, ShieldAlert, Headset, GraduationCap, ChevronRight } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      id: "LOG-06",
      role: "Software Dev Intern & Team Lead",
      entity: "iReply Back Office Services Inc.",
      date: "Feb 2026 - Present",
      type: "work",
      icon: <Terminal size={20} className="text-[#d4af37]" />,
      description: "Appointed Team Leader for the Software Development Mentorship. Architecting full-stack infrastructure for a Remote Digital Signage Controller using a MERN, AIoT, and Firebase stack. Integrated a React-based CMS with a Node.js server and Raspberry Pi edge player.",
      tags: ["MERN Stack", "AIoT", "Node.js", "React / CMS"]
    },
    {
      id: "LOG-05",
      role: "Digital Marketing & Ops Specialist",
      entity: "STAR Network Foundation",
      date: "Oct 2025 - Present",
      type: "work",
      icon: <Network size={20} className="text-blue-400" />,
      description: "Executing technical builds for marketing funnels and CRM automation using GoHighLevel and Kajabi. Maintaining project compliance via Monday.com and building internal SOPs to streamline administrative systems and scale team capacity.",
      tags: ["GoHighLevel", "Kajabi", "CRM Automation", "SOPs"]
    },
    {
      id: "LOG-04",
      role: "WFM Real-Time Analyst",
      entity: "Ubiquity (Client: OURO)",
      date: "Apr 2024 - Apr 2025",
      type: "work",
      icon: <Activity size={20} className="text-green-400" />,
      description: "Managed real-time adherence, call volume, and service levels for 2,000+ employees across 17 business lines for a major US fintech client. Produced rigorous performance reports for executive leadership in the Philippines and El Salvador.",
      tags: ["Workforce Management", "Data Analytics", "Forecasting"]
    },
    {
      id: "LOG-03",
      role: "Risk Operations Analyst",
      entity: "Ubiquity (Client: CHIME)",
      date: "May 2022 - Apr 2024",
      type: "work",
      icon: <ShieldAlert size={20} className="text-red-400" />,
      description: "Handled high-risk financial transactions, dispute investigations, and fraud detection. Delivered weekly presentations to executive stakeholders on risk analysis results and developed standardized procedures for fraud prevention.",
      tags: ["Fraud Detection", "Risk Analysis", "Fintech Compliance"]
    },
    {
      id: "LOG-02",
      role: "Tier 1 Technical Support",
      entity: "iQor & Panasiatic Solutions",
      date: "Apr 2021 - May 2022",
      type: "work",
      icon: <Headset size={20} className="text-purple-400" />,
      description: "Awarded Top Agent for Q4. Provided comprehensive technical troubleshooting for mobile hardware, network connectivity, and provisioning failures. Managed high-tension accounts while strictly adhering to PCI-DSS standards.",
      tags: ["Tech Diagnostics", "Telecommunications", "PCI-DSS"]
    },
    {
      id: "EDU-01",
      role: "Computer Engineering & Certifications",
      entity: "CHMSU & Google",
      date: "2022 - Present",
      type: "education",
      icon: <GraduationCap size={20} className="text-[#d4af37]" />,
      description: "4th-year Computer Engineering student. Achieved Top 5% Performer as a Workforce Manager via Pro5.ai. Earned multiple Google Professional Certificates including UX Design, Cybersecurity, IT Support, and Business Intelligence.",
      tags: ["Embedded Systems", "Google UX / CyberSec", "Top 5% WFM"]
    }
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="relative min-h-[90vh] py-10 overflow-hidden">
      
      {/* 🟢 Background Ambient Glows */}
      <div className="absolute top-40 left-0 w-[500px] h-[500px] bg-[#d4af37]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 px-4 md:px-6">
        
        {/* Header Section */}
        <div className="mb-20 border-l-4 border-[#d4af37] pl-6 md:pl-8">
          <div className="flex items-center gap-3 mb-2">
            <Activity size={16} className="text-[#d4af37] animate-pulse" />
            <span className="text-[#d4af37] font-mono text-xs tracking-[0.3em] uppercase">
              Operational History
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">
            Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#f3cf7a] to-[#d4af37] gold-glow">Logs</span>
          </h1>
          <p className="text-gray-400 font-mono text-xs md:text-sm mt-4 tracking-wide">
            Parsing chronological system events and deployment history...
          </p>
        </div>

        {/* 🟢 The Glowing Timeline */}
        <div className="relative">
          {/* Main Vertical Line */}
          <div className="absolute left-[27px] md:left-[39px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-[#d4af37] via-white/10 to-transparent" />

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-12"
          >
            {experiences.map((exp, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="relative flex gap-6 md:gap-10 group cursor-default"
              >
                {/* Timeline Node / Icon */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-14 h-14 md:w-20 md:h-20 rounded-2xl bg-[#050505] border-2 border-white/10 flex items-center justify-center group-hover:border-[#d4af37] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-500 z-10 relative">
                    {exp.icon}
                  </div>
                  {/* Glowing dot behind the icon */}
                  <div className="absolute inset-0 bg-[#d4af37] blur-md opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl" />
                </div>

                {/* Glass Content Card */}
                <div className="flex-1 glass p-6 md:p-8 rounded-[2rem] border-white/10 group-hover:border-[#d4af37]/30 transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-2xl group-hover:shadow-[#d4af37]/10 relative overflow-hidden">
                  
                  {/* Subtle Inner Glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full group-hover:bg-[#d4af37]/10 transition-colors duration-500" />

                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4 relative z-10">
                    <div>
                      <h3 className="text-xl md:text-2xl font-black text-white group-hover:text-[#f3cf7a] transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px] md:text-xs mt-1">
                        {exp.entity}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[#d4af37] text-[10px] font-mono tracking-widest whitespace-nowrap">
                        {exp.date}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-400 leading-relaxed mb-6 relative z-10">
                    {exp.description}
                  </p>

                  {/* Footer / Tags */}
                  <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-white/5 relative z-10">
                    <span className="text-[10px] font-mono text-gray-500 mr-2 flex items-center gap-1">
                      <ChevronRight size={12} /> LOG_TAGS:
                    </span>
                    {exp.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] font-mono border border-white/10 px-3 py-1 rounded-md bg-[#050505]/50 text-gray-300 group-hover:border-[#d4af37]/20 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}