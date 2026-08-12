import React from "react";
import { motion } from "motion/react";
import { experiences } from "../data";
import { experiences_de } from "../i18n/data_de";
import { useLanguage } from "../context/LanguageContext";
import SectionVoiceover from "./SectionVoiceover";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export default function Experience() {
  const { t, language } = useLanguage();
  
  const currentExperiences = language === 'de' ? experiences_de : experiences;

  return (
    <section id="experience" className="py-24 bg-neutral-950 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-blue-900/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-indigo-900/10 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-6">
            <Briefcase className="w-4 h-4" />
            <span className="font-semibold tracking-wider text-sm uppercase">Career Path</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center gap-4">
            {t('experience.title')}
            <SectionVoiceover sectionId="experience" text={t('voiceover.experience') + " " + currentExperiences.map(e => e.role + " at " + e.company).join(". ")} />
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            {t('experience.description')}
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-8">
          {currentExperiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-neutral-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-10 hover:border-white/20 hover:bg-neutral-900/80 transition-all group"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 flex items-center gap-3">
                    {exp.role}
                    <SectionVoiceover sectionId={`exp-${exp.id}`} text={`${exp.role} at ${exp.company} from ${exp.date}. ` + exp.description.join(". ")} size="sm" />
                  </h3>
                  <div className="text-xl text-blue-400 font-medium">
                    {exp.company}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row md:flex-col gap-3">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-sm font-medium w-fit">
                    <Calendar className="w-4 h-4 text-blue-400" />
                    {exp.date}
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-sm font-medium w-fit">
                    <MapPin className="w-4 h-4 text-blue-400" />
                    {exp.location}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-semibold tracking-widest uppercase text-neutral-500 mb-4">Key Responsibilities</h4>
                <ul className="grid gap-3 sm:grid-cols-1 md:grid-cols-2">
                  {exp.description.map((desc, i) => (
                    <li 
                      key={i}
                      className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 group-hover:bg-white/10 transition-colors"
                    >
                      <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                      </div>
                      <span className="text-neutral-300 leading-relaxed text-sm md:text-base">
                        {desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
