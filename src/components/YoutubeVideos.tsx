import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { youtubeShorts } from "../data";
import { ExternalLink, ChevronLeft, ChevronRight, Play, Youtube } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import SectionVoiceover from "./SectionVoiceover";

export default function YoutubeVideos() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 5;
  const { t } = useLanguage();
  
  const totalItems = youtubeShorts.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + itemsPerPage) % totalItems);
    }, 10000); // 10 seconds
    return () => clearInterval(timer);
  }, [totalItems, itemsPerPage]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsPerPage) % totalItems);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - itemsPerPage + totalItems) % totalItems);
  };

  const visibleItems = [];
  for (let i = 0; i < itemsPerPage; i++) {
    visibleItems.push(youtubeShorts[(currentIndex + i) % totalItems]);
  }

  return (
    <section id="youtube" className="py-24 bg-neutral-900 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
        {/* Youtube Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 mb-6 hover:bg-red-500/20 transition-colors cursor-pointer" onClick={() => window.open("https://youtube.com/@georgescreativestudio", "_blank")}>
            <Youtube className="w-5 h-5" />
            <span className="font-semibold tracking-wider text-sm uppercase">George's Creative Studio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center gap-4">
            {t('youtube.title')}
            <SectionVoiceover sectionId="youtube" text={t('youtube.title') + ". " + t('youtube.description') + ". " + youtubeShorts.map(w => w.title).join(", ")} />
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            {t('youtube.description')}
          </p>
        </motion.div>

        {/* Youtube Carousel */}
        <div className="relative mb-16 w-full mx-auto">
          <div className="flex justify-between items-center absolute top-1/2 -translate-y-1/2 w-full z-40 px-2 sm:px-0 sm:-left-6 sm:-right-6 lg:-left-12 lg:-right-12">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-neutral-800/90 hover:bg-neutral-700 border border-white/10 flex items-center justify-center text-white backdrop-blur-sm transition-all absolute left-2 sm:-left-6 shadow-xl"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-neutral-800/90 hover:bg-neutral-700 border border-white/10 flex items-center justify-center text-white backdrop-blur-sm transition-all absolute right-2 sm:-right-6 shadow-xl"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            <AnimatePresence mode="popLayout">
              {visibleItems.map((video, idx) => (
                <motion.a
                  key={`${video.id}-${currentIndex}-${idx}`}
                  href={`https://www.youtube.com/shorts/${video.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8, x: 50 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.8, x: -50 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group block relative rounded-2xl overflow-hidden bg-neutral-950 border border-white/5 hover:border-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-red-500 shadow-lg"
                >
                  <div className="aspect-[9/16] overflow-hidden relative">
                    <div className="absolute inset-0 bg-neutral-900 animate-pulse" />
                    <img 
                      src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`} 
                      onError={(e) => {
                        // Fallback to hqdefault if maxresdefault is not available
                        (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`;
                      }}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 relative z-10"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-90 z-20" />
                    <div className="absolute inset-0 flex items-center justify-center z-30">
                      <div className="w-14 h-14 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-lg shadow-red-900/50 group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 ml-1" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 z-30">
                    <p className="text-red-400 text-[10px] font-bold uppercase tracking-widest mb-2 flex items-center gap-1">
                      <Youtube className="w-3 h-3" /> Short
                    </p>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-sm md:text-base font-bold text-white group-hover:text-red-100 transition-colors line-clamp-2 leading-tight">
                        {video.title}
                      </h3>
                      <div className="flex items-center justify-between mt-1">
                        <SectionVoiceover sectionId={`youtube-${video.id}`} text={`${video.title}`} size="sm" />
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all flex-shrink-0">
                          <ExternalLink className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </AnimatePresence>
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="https://youtube.com/@georgescreativestudio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-medium rounded-full transition-all shadow-lg shadow-red-900/20 hover:shadow-red-900/40"
          >
            <Youtube className="w-5 h-5" />
            {t('youtube.viewAll')}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
