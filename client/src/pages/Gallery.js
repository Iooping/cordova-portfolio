import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, MapPin, Calendar, Tag, X, ArrowUpRight, Image as ImageIcon } from 'lucide-react';
import { galleryCategories, galleryEntries } from '../data/galleryData';

function GalleryImage({ src, alt, className }) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div className={`flex flex-col items-center justify-center bg-[#0a0a0a] border-b border-white/10 text-gray-600 ${className}`}>
        <ImageIcon size={32} className="text-[#d4af37]/40 mb-2" />
        <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500">
          Add Photo to /public{src || '/gallery/'}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setHasError(true)}
      className={className}
    />
  );
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedEntry, setSelectedEntry] = useState(null);

  const filteredEntries =
    activeCategory === "All"
      ? galleryEntries
      : galleryEntries.filter((entry) => entry.category === activeCategory);

  if (selectedEntry) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }

  return (
    <div className="relative min-h-[90vh] py-10 overflow-hidden">
      {/* Ambient Background Glows */}
      <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-[#d4af37]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 px-4 md:px-6">
        {/* Header Section */}
        <div className="mb-12 border-l-4 border-[#d4af37] pl-6 md:pl-8">
          <div className="flex items-center gap-3 mb-2">
            <Camera size={16} className="text-[#d4af37] animate-pulse" />
            <span className="text-[#d4af37] font-mono text-xs tracking-[0.3em] uppercase">
              Visual Chronicles // Field Logs
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">
            Journey <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#f3cf7a] to-[#d4af37] gold-glow">Gallery</span>
          </h1>
          <p className="text-gray-400 font-mono text-xs md:text-sm mt-4 tracking-wide">
            Archiving milestones across engineering, community events, career, and travels...
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-3 mb-12">
          {galleryCategories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full font-mono text-xs uppercase tracking-widest transition-all duration-300 border ${
                  isActive
                    ? 'bg-[#d4af37] text-black font-black border-[#d4af37] shadow-lg shadow-[#d4af37]/20'
                    : 'glass text-gray-400 border-white/10 hover:border-[#d4af37]/40 hover:text-white'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredEntries.map((entry) => (
              <motion.article
                layout
                key={entry.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                onClick={() => setSelectedEntry(entry)}
                className="glass group rounded-[2rem] border-white/10 hover:border-[#d4af37]/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.15)] flex flex-col overflow-hidden cursor-pointer"
              >
                {/* Cover Photo */}
                <div className="relative h-56 w-full overflow-hidden bg-[#050505]">
                  <GalleryImage
                    src={entry.coverImage}
                    alt={entry.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />

                  {/* Category Pill */}
                  <span className="absolute top-4 left-4 text-[10px] font-mono uppercase tracking-widest bg-[#050505]/80 backdrop-blur-md text-[#d4af37] px-3 py-1.5 rounded-full border border-[#d4af37]/30">
                    {entry.category}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-7 flex flex-col flex-grow">
                  <div className="flex flex-wrap items-center gap-4 text-[11px] font-mono text-gray-500 mb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12} className="text-[#d4af37]" />
                      {entry.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={12} className="text-[#d4af37]" />
                      {entry.location}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-white group-hover:text-[#f3cf7a] transition-colors leading-snug mb-3">
                    {entry.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                    {entry.excerpt}
                  </p>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-gray-400 group-hover:text-[#d4af37] transition-colors">
                    <span>Read Field Log</span>
                    <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Full Blog Entry Modal */}
      <AnimatePresence>
        {selectedEntry && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedEntry(null)}
              className="absolute inset-0 bg-[#050505]/85 backdrop-blur-md cursor-pointer"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="glass relative w-full max-w-3xl max-h-[88vh] overflow-y-auto rounded-[2rem] border-white/20 shadow-2xl shadow-[#d4af37]/10"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedEntry(null)}
                className="absolute top-5 right-5 z-20 p-2.5 bg-[#050505]/70 hover:bg-[#d4af37] text-white hover:text-black rounded-full border border-white/10 transition-colors"
              >
                <X size={20} />
              </button>

              {/* Hero Image */}
              <div className="relative h-64 sm:h-80 w-full bg-[#050505]">
                <GalleryImage
                  src={selectedEntry.coverImage}
                  alt={selectedEntry.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent" />
              </div>

              {/* Blog Content */}
              <div className="p-8 md:p-10 -mt-12 relative z-10">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest bg-[#d4af37]/15 text-[#d4af37] px-3 py-1 rounded-full border border-[#d4af37]/30">
                    {selectedEntry.category}
                  </span>
                  <span className="text-xs font-mono text-gray-400 flex items-center gap-1.5">
                    <Calendar size={13} className="text-[#d4af37]" /> {selectedEntry.date}
                  </span>
                  <span className="text-xs font-mono text-gray-400 flex items-center gap-1.5">
                    <MapPin size={13} className="text-[#d4af37]" /> {selectedEntry.location}
                  </span>
                </div>

                <h2 className="text-2xl md:text-4xl font-black text-white mb-6 leading-tight">
                  {selectedEntry.title}
                </h2>

                <div className="space-y-5 text-gray-300 leading-relaxed text-sm md:text-base mb-8">
                  {selectedEntry.story.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>

                {/* Tags */}
                <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-2">
                  <Tag size={14} className="text-[#d4af37] mr-1" />
                  {selectedEntry.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono border border-white/10 px-3 py-1 rounded-lg bg-[#050505]/60 text-gray-400"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}