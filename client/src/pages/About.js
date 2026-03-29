import React from 'react';
import { motion } from 'framer-motion';
import { Activity, User, Cpu, Network, Database, BrainCircuit, Workflow } from 'lucide-react';

export default function About() {
  const skills = [
    { icon: <Database size={18}/>, name: "Data & BI", desc: "EDA, ETL, Looker, SQL" },
    { icon: <Cpu size={18}/>, name: "Programming", desc: "Python, C++, Bash, React" },
    { icon: <Network size={18}/>, name: "Networking", desc: "Cisco, TCP/IP, DNS, SIEM" },
    { icon: <BrainCircuit size={18}/>, name: "AI & Emerging", desc: "GenAI, LangChain, RAG" },
    { icon: <Workflow size={18}/>, name: "Operations", desc: "WFM, Forecasting, CRM" }
  ];

  return (
    <div className="relative min-h-[90vh] py-10 overflow-hidden">
      {/* 🟢 Background Ambient Glows */}
      <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-[#d4af37]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 px-4 md:px-6">
        
        {/* Header Section */}
        <div className="mb-16 border-l-4 border-[#d4af37] pl-6 md:pl-8">
          <div className="flex items-center gap-3 mb-2">
            <User size={16} className="text-[#d4af37] animate-pulse" />
            <span className="text-[#d4af37] font-mono text-xs tracking-[0.3em] uppercase">User Identity</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">
            Operator <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#f3cf7a] to-[#d4af37] gold-glow">Profile</span>
          </h1>
          <p className="text-gray-500 font-mono text-sm mt-2">Reading: user_profile_metadata.json</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Bio Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass p-8 md:p-12 rounded-[2.5rem] border-white/10 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37]/5 blur-3xl rounded-full pointer-events-none group-hover:bg-[#d4af37]/10 transition-colors duration-700" />
            
            <h2 className="text-2xl font-black mb-6 text-white tracking-tight">System Architect & Data Strategist</h2>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                I am a multidisciplinary Computer Engineering student specializing in workflow automation, workforce operations, and data-driven process improvement.
              </p>
              <p>
                My journey is a bit unconventional. I started working in the BPO industry back in Grade 12, and over the past five years, I have scaled from Tier 1 Technical Support to managing real-time data and workforce analytics for 2,000+ employees globally. Because of this dual path as a working student, I bring a unique perspective to my engineering projects: I do not just know how to build technology; I understand how enterprise systems function at scale and how real people use them.
              </p>
              <p>
                Today, I bridge the gap between high-level hardware (AIoT, ESP32) and software (MERN, Python, GenAI) to build automated systems, marketing infrastructures, and agentic workflows that drive practical business outcomes.
              </p>
              <p>
                What I Do Now: Digital Marketing & Operations Architecture
              </p>
              <p>
                Currently: Digital Marketing & Operations Support Specialist at STAR Network Foundations (via Doneverse)
                </p>  
               <p>
                 I serve as the operational backbone for the Reaching & Rooted team, building the infrastructure that allows creative strategies to scale. My mandate is to increase team capacity through strict execution and systems management:
                 • Workflow Architecture: I act as the guardian of our "System of Record" (Monday.com), ensuring all workflows are visible, trackable, and compliant.
                 • Marketing Operations: I support traffic and conversion strategies by handling the technical build of low-ticket funnels, order forms, and upsell page drafts.
                 • SOP & Content Development: I translate complex processes into standardized Standard Operating Procedures (SOPs) and draft "first-pass" copy for lead magnets and email nurture sequences to streamline editorial workflows.
                </p>
              <p> 
                Where I Started: Analytics, Risk & Workforce Management
              </p>
              <p>
                Prior to stepping into operations architecture, I built a resilient foundation in high-stakes Telco and Fintech environments:
                •Real-Time Analytics: I supported global operations across the Philippines and El Salvador, ensuring service-level adherence for 2,000+ employees across 17 lines of business through real-time reporting.
                •Risk Operations: I specialized in Risk & Threat Management for VISA/STAR chargebacks, honing my ability to spot anomalies in massive datasets and adhere to strict compliance frameworks.
              </p>
            </div>
            
            <div className="mt-10 pt-8 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Base: Bacolod City, PH</span>
              <span className="text-xs font-mono text-[#d4af37] uppercase tracking-widest bg-[#d4af37]/10 px-4 py-2 rounded-full border border-[#d4af37]/20">Status: OJT Active</span>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            <h3 className="text-sm font-mono text-gray-400 uppercase tracking-widest mb-2 pl-2">Core Competencies</h3>
            {skills.map((skill, index) => (
              <div key={index} className="glass p-5 rounded-2xl border-white/5 hover:border-[#d4af37]/30 hover:bg-white/5 transition-all duration-300 flex items-center gap-4 group cursor-default">
                <div className="p-3 bg-[#050505]/80 rounded-xl text-gray-400 group-hover:text-[#d4af37] group-hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-all">
                  {skill.icon}
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm tracking-wide">{skill.name}</h4>
                  <p className="text-xs text-gray-500 font-mono mt-1 group-hover:text-gray-400 transition-colors">{skill.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </div>
  );
}