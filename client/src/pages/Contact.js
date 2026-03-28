import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Activity, FileText } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      // 1. Define the dynamic URL (Uses Vercel env variable or localhost)
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

      // 2. Corrected Fetch call
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        e.target.reset();
        // Optional: Reset to idle after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Connection Error:", error);
      setStatus('error');
    }
  };

  return (
    <div className="relative min-h-[90vh] py-10 overflow-hidden">
      {/* 🟢 Background Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-[400px] h-[400px] bg-[#d4af37]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 px-4 md:px-6">
        
        {/* Header Section */}
        <div className="mb-12 border-l-4 border-[#d4af37] pl-6 md:pl-8">
          <div className="flex items-center gap-3 mb-2">
            <Activity size={16} className="text-[#d4af37] animate-pulse" />
            <span className="text-[#d4af37] font-mono text-xs tracking-[0.3em] uppercase">Secure Uplink</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#f3cf7a] to-[#d4af37] gold-glow">Channel</span>
          </h1>
          <p className="text-gray-400 font-mono text-xs md:text-sm mt-4 tracking-wide">
            Awaiting transmission protocol...
          </p>
        </div>

        {/* Contact Form */}
        <motion.form 
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.2, duration: 0.5 }}
          onSubmit={handleSubmit} 
          className="glass p-8 md:p-10 rounded-[2.5rem] border-white/10 shadow-2xl space-y-5"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input name="name" type="text" placeholder="Designation / Name" required className="w-full bg-[#050505]/80 border border-white/10 p-5 rounded-2xl focus:border-[#d4af37] outline-none transition-all text-sm font-mono text-white" />
            <input name="email" type="email" placeholder="Return Address (Email)" required className="w-full bg-[#050505]/80 border border-white/10 p-5 rounded-2xl focus:border-[#d4af37] outline-none transition-all text-sm font-mono text-white" />
          </div>
          <input name="subject" type="text" placeholder="Transmission Subject" required className="w-full bg-[#050505]/80 border border-white/10 p-5 rounded-2xl focus:border-[#d4af37] outline-none transition-all text-sm font-mono text-white" />
          <textarea name="message" rows="6" placeholder="Initialize message sequence here..." required className="w-full bg-[#050505]/80 border border-white/10 p-5 rounded-2xl focus:border-[#d4af37] outline-none transition-all text-sm font-mono text-white resize-none"></textarea>

          <button 
            type="submit" 
            disabled={status === 'sending'}
            className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest text-sm flex items-center justify-center gap-3 transition-all mt-4 ${
              status === 'success' ? 'bg-green-500 text-black' : 
              status === 'error' ? 'bg-red-600 text-white' :
              'bg-[#d4af37] text-black hover:bg-white hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]'
            }`}
          >
            {status === 'idle' && <><Send size={18} /> Transmit Signal</>}
            {status === 'sending' && <span className="animate-pulse">Broadcasting...</span>}
            {status === 'success' && <><CheckCircle size={18} /> Signal Delivered</>}
            {status === 'error' && <><AlertCircle size={18} /> Connection Failed</>}
          </button>
        </motion.form>

        {/* Action Buttons (Socials & Resume) */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 mt-12"
        >
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/joshua-cordova" target="_blank" rel="noopener noreferrer" 
            className="glass flex items-center justify-center gap-3 px-6 py-5 rounded-2xl text-xs font-bold uppercase tracking-widest text-gray-300 hover:text-[#d4af37] hover:border-[#d4af37]/30 hover:bg-[#d4af37]/5 transition-all shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            LinkedIn
          </a>
          
          {/* Instagram */}
          <a href="https://www.instagram.com/orins.juice/" target="_blank" rel="noopener noreferrer" 
            className="glass flex items-center justify-center gap-3 px-6 py-5 rounded-2xl text-xs font-bold uppercase tracking-widest text-gray-300 hover:text-[#d4af37] hover:border-[#d4af37]/30 hover:bg-[#d4af37]/5 transition-all shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            Instagram
          </a>

          {/* Download Resume Button */}
          <a href="/Joshua_Cordova_Resume.pdf" target="_blank" rel="noopener noreferrer" 
            className="bg-[#d4af37] text-black flex items-center justify-center gap-3 px-6 py-5 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-white transition-all shadow-lg shadow-[#d4af37]/20 hover:-translate-y-1">
            <FileText size={18} /> Check Resume
          </a>
        </motion.div>
      </div>
    </div>
  );
}