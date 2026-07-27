import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { portfolioWorks } from "../data";
import { portfolioWorks_de } from "../i18n/data_de";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import SectionVoiceover from "./SectionVoiceover";

export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 5;
  const { t, language } = useLanguage();
  
  const currentWorks = language === 'de' ? portfolioWorks_de : portfolioWorks;
  const totalItems = currentWorks.length;

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
    visibleItems.push(currentWorks[(currentIndex + i) % totalItems]);
  }

  return (
    <section id="portfolio" className="py-24 bg-neutral-950 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
        {/* Portfolios Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-4">
            <span className="font-semibold tracking-wider text-sm uppercase">Behance</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center gap-4">
            {t('portfolio.title')}
            <SectionVoiceover sectionId="portfolio" text={t('portfolio.title') + ". " + t('portfolio.description') + ". " + currentWorks.map(w => w.title).join(", ")} />
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            {t('portfolio.description')}
          </p>
        </motion.div>

        {/* Behance Carousel */}
        <div className="relative mb-16 w-full mx-auto">
          <div className="flex justify-between items-center absolute top-1/2 -translate-y-1/2 w-full z-40 px-2 sm:px-0 sm:-left-6 sm:-right-6 lg:-left-12 lg:-right-12">
            <button 
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-neutral-800/80 hover:bg-neutral-700 border border-white/10 flex items-center justify-center text-white backdrop-blur-sm transition-all absolute left-2 sm:-left-4"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-neutral-800/80 hover:bg-neutral-700 border border-white/10 flex items-center justify-center text-white backdrop-blur-sm transition-all absolute right-2 sm:-right-4"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            <AnimatePresence mode="popLayout">
              {visibleItems.map((work, idx) => (
                <motion.a
                  key={`${work.id}-${currentIndex}-${idx}`}
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8, x: 50 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.8, x: -50 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group block relative rounded-2xl overflow-hidden bg-neutral-900 border border-white/5 hover:border-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <div className="aspect-[4/3] sm:aspect-[3/4] overflow-hidden relative">
                    <div className="absolute inset-0 bg-neutral-900 animate-pulse" />
                    <img 
                      src={work.image} 
                      alt={work.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 relative z-10"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent opacity-90 z-20" />
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-30">
                    <p className="text-blue-400 text-[10px] font-semibold uppercase tracking-wider mb-1">{work.type}</p>
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-sm md:text-base font-bold text-white group-hover:text-blue-100 transition-colors line-clamp-2 leading-tight flex items-center gap-2">
                        {work.title}
                        <SectionVoiceover sectionId={`work-${work.id}`} text={`${work.title}, ${work.type}`} size="sm" />
                      </h3>
                      <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all flex-shrink-0">
                        <ExternalLink className="w-3 h-3 text-white" />
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
          className="mt-8 text-center"
        >
          <a
            href="https://www.behance.net/Georgecreativelab"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-medium rounded-full border border-white/10 transition-all"
          >
            {t('portfolio.viewAll')}
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
