import React from "react";
import { motion } from "motion/react";
import { ExternalLink, Code, Layers } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import SectionVoiceover from "./SectionVoiceover";

const webApps = [
  {
    id: 1,
    title: "Bible Solutions",
    url: "https://biblesolutions.vercel.app/",
    description: "An AI-powered application providing solutions and insights from the Bible. Features intuitive search and contextual understanding.",
    tech: ["React", "AI Integration", "Vercel"]
  },
  {
    id: 2,
    title: "Vaydyan",
    url: "https://vaydyan.vercel.app/",
    description: "An AI-driven traditional medicine platform, providing insights and knowledge in Ayurveda and holistic healing.",
    tech: ["React", "AI Integration", "Vercel"]
  },
  {
    id: 3,
    title: "AusBuilding",
    url: "https://ausbuliding.vercel.app/",
    description: "An AI-enhanced platform tailored for the Australian building and construction industry, streamlining project management.",
    tech: ["React", "AI Integration", "Vercel"]
  },
  {
    id: 4,
    title: "Aksharamala",
    url: "https://aksharamala.vercel.app/",
    description: "An interactive language learning tool for mastering Malayalam alphabets with personalized AI assistance.",
    tech: ["React", "AI Integration", "Vercel"]
  },
  {
    id: 5,
    title: "Kids English Learning",
    url: "https://kids-english-learning-by-george.vercel.app/",
    description: "A fun, engaging, and AI-powered English learning platform designed specifically for children to improve vocabulary and grammar.",
    tech: ["React", "AI Integration", "Vercel"]
  },
  {
    id: 6,
    title: "German Learning Platform",
    url: "https://georges-germen-learning-platform.vercel.app/",
    description: "A comprehensive platform for learning the German language powered by AI, offering interactive lessons and translation tools.",
    tech: ["React", "AI Integration", "Vercel"]
  }
];

export default function AIPoweredWebApps() {
  const { t } = useLanguage();

  return (
    <section id="ai-web-apps" className="py-24 bg-neutral-900 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[20%] right-[-5%] w-[40%] h-[40%] rounded-full bg-blue-900/10 blur-[120px]" />
        <div className="absolute bottom-[20%] left-[-5%] w-[40%] h-[40%] rounded-full bg-purple-900/10 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 mb-4">
            <Code className="w-4 h-4" />
            <span className="font-semibold tracking-wider text-sm uppercase">Interactive Web Apps</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center gap-4">
            AI Powered Web Applications
            <SectionVoiceover sectionId="ai-web-apps" text="AI Powered Web Applications. Interactive platforms combining modern web design with generative AI." />
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            Explore my suite of fully functional, AI-integrated web applications. View live previews and interact directly with them below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {webApps.map((app, index) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col bg-neutral-950 border border-white/10 rounded-3xl overflow-hidden shadow-2xl group hover:border-purple-500/40 transition-colors"
            >
              {/* Browser Header */}
              <div className="bg-neutral-900 border-b border-white/10 p-3 sm:p-4 flex items-center justify-between">
                <div className="flex items-center gap-2 overflow-hidden">
                  <div className="flex gap-1.5 mr-2 sm:mr-4 shrink-0">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="bg-neutral-950 border border-white/5 rounded-md px-3 sm:px-4 py-1.5 text-[10px] sm:text-xs text-neutral-500 font-mono flex items-center gap-2 truncate max-w-[200px] sm:max-w-sm">
                    {app.url}
                  </div>
                </div>
                <a 
                  href={app.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs sm:text-sm text-purple-400 hover:text-purple-300 transition-colors bg-purple-500/10 hover:bg-purple-500/20 px-3 py-1.5 rounded-full shrink-0"
                >
                  <span className="hidden sm:inline">Open App</span>
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                </a>
              </div>
              
              {/* Iframe Preview */}
              <div className="relative w-full aspect-[4/3] md:aspect-[16/10] bg-neutral-800 border-b border-white/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-pulse flex flex-col items-center gap-3">
                    <Layers className="w-8 h-8 text-neutral-600" />
                    <span className="text-neutral-500 text-sm font-medium">Loading Application...</span>
                  </div>
                </div>
                <iframe 
                  src={app.url} 
                  title={app.title}
                  className="absolute inset-0 w-full h-full border-0 relative z-10"
                  loading="lazy"
                />
              </div>
              
              {/* App Details Footer */}
              <div className="p-6 md:p-8 bg-neutral-900/50 flex-grow flex flex-col">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">{app.title}</h3>
                <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-6 flex-grow">
                  {app.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {app.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-neutral-300 font-medium tracking-wide">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
