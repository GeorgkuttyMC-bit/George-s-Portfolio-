import { motion } from "motion/react";
import { education } from "../data";
import { education_de } from "../i18n/data_de";
import { useLanguage } from "../context/LanguageContext";
import SectionVoiceover from "./SectionVoiceover";
import { GraduationCap } from "lucide-react";

export default function Education() {
  const { t, language } = useLanguage();
  
  const currentEducation = language === 'de' ? education_de : education;

  return (
    <section id="education" className="py-24 bg-neutral-950 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center">
              <GraduationCap className="w-8 h-8 text-blue-400" />
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center gap-4">
            {t('education.title')}
            <SectionVoiceover sectionId="education" text={t('voiceover.education') + " " + currentEducation.map(e => e.degree + " from " + e.institution).join(". ")} />
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            {t('education.description')}
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {currentEducation.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-neutral-900 rounded-2xl p-8 border border-white/5 hover:border-white/10 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1 flex items-center gap-3">
                    {edu.degree}
                    <SectionVoiceover sectionId={`edu-${edu.id}`} text={`${edu.degree} from ${edu.institution}. ${edu.date}. ${edu.description}`} size="sm" />
                  </h3>
                  <div className="text-blue-400 font-medium text-lg">{edu.institution}</div>
                </div>
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-sm font-medium whitespace-nowrap">
                  {edu.date}
                </div>
              </div>
              <p className="text-neutral-400 leading-relaxed">
                {edu.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
