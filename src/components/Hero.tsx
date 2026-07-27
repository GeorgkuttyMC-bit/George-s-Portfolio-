import { motion } from "motion/react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { personalInfo } from "../data";
import { useLanguage } from "../context/LanguageContext";
import SectionVoiceover from "./SectionVoiceover";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-950 text-white">
      {/* Background abstract elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-r from-blue-900/30 to-purple-900/30 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, -90, 0],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-r from-indigo-900/30 to-cyan-900/30 blur-3xl"
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-medium tracking-wide text-neutral-300"
        >
          {t('hero.role')}
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500 flex items-center justify-center gap-4 flex-wrap"
        >
          <span>Georgekutty<br className="hidden md:block" /> M.C.</span>
          <SectionVoiceover sectionId="intro" text={t('voiceover.intro')} size="md" className="mt-2 md:mt-0" />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="max-w-2xl text-lg md:text-xl text-neutral-400 mb-10"
        >
          {t('hero.description')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center"
        >
          <a
            href="#portfolio"
            className="group flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform"
          >
            {t('hero.viewWork')}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <div className="flex gap-4">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:text-blue-400 transition-colors backdrop-blur-sm"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href={personalInfo.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:text-blue-500 transition-colors backdrop-blur-sm"
              aria-label="Behance"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.882 5.372 4.98h-6.912c.022 1.353 1.226 2.378 2.825 2.378 1.488 0 2.309-.646 2.768-1.583l1.146.82zm-4.417-4.103c-.228-1.127-1.189-1.921-2.483-1.921-1.378 0-2.316.899-2.518 1.921h5.001zm-9.309 6.103h-10v-16h8.21c2.193 0 4.707.971 4.707 4.195 0 1.944-1.362 2.863-2.618 3.193 1.63.265 3.322 1.551 3.322 3.993 0 3.354-2.859 4.619-3.621 4.619zm-6.6-12.753v4.062h3.948c1.696 0 2.483-.984 2.483-2.128 0-1.22-1.042-1.934-2.37-1.934h-4.061zm0 9.878h4.526c1.821 0 2.802-.916 2.802-2.392 0-1.536-1.168-2.327-2.73-2.327h-4.598v4.719z"/>
              </svg>
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-500"
      >
        <span className="text-xs uppercase tracking-widest">{t('hero.scroll')}</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-neutral-500 to-transparent"
        />
      </motion.div>
    </section>
  );
}
