import { motion } from "motion/react";
import { skills, certifications, aiTools } from "../data";
import { CheckCircle2, Award, Sparkles } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import SectionVoiceover from "./SectionVoiceover";

function ToolLogo({ name, domain }: { name: string; domain: string }) {
  const [error, setError] = useState(false);
  
  if (error) {
    return (
      <div className="w-5 h-5 rounded flex items-center justify-center bg-blue-500/20 text-blue-400 text-xs font-bold shrink-0">
        {name.charAt(0)}
      </div>
    );
  }

  return (
    <img 
      src={`https://logo.clearbit.com/${domain}?size=64`} 
      alt={`${name} logo`} 
      className="w-5 h-5 rounded shrink-0 object-contain bg-white p-0.5"
      onError={() => setError(true)}
    />
  );
}

export default function Skills() {
  const { t } = useLanguage();

  const coreSkillsText = t('skills.coreSkills') + ". " + skills.join(", ") + ".";
  const aiToolsText = t('skills.aiTools') + ". " + aiTools.map(tool => tool.name).join(", ") + ".";

  return (
    <section id="skills" className="py-24 bg-neutral-900">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-blue-400" />
              </div>
              <h2 className="text-3xl font-bold text-white flex items-center gap-4">
                {t('skills.coreSkills')}
                <SectionVoiceover sectionId="coreSkills" text={coreSkillsText} size="sm" />
              </h2>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-sm font-medium hover:bg-white/10 hover:border-white/20 transition-colors cursor-default"
                >
                  {skill}
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-4 mt-16 mb-8">
              <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-pink-400" />
              </div>
              <h2 className="text-3xl font-bold text-white flex items-center gap-4">
                {t('skills.aiTools')}
                <SectionVoiceover sectionId="aiTools" text={aiToolsText} size="sm" />
              </h2>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {aiTools.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-sm font-medium hover:bg-white/10 hover:border-white/20 transition-colors cursor-default flex items-center gap-2"
                >
                  <ToolLogo name={tool.name} domain={tool.domain} />
                  {tool.name}
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
