import { motion } from "motion/react";
import { certifications } from "../data";
import { certifications_de } from "../i18n/data_de";
import { Award, ExternalLink } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import SectionVoiceover from "./SectionVoiceover";

export default function Certifications() {
  const { t, language } = useLanguage();
  
  const currentCertifications = language === 'de' ? certifications_de : certifications;

  return (
    <section id="certifications" className="py-24 bg-neutral-950 border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-500/10 mb-6">
            <Award className="w-8 h-8 text-purple-400" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center gap-4">
            {t('certifications.title')}
            <SectionVoiceover sectionId="certifications" text={t('certifications.title') + ". " + t('certifications.description') + ". " + currentCertifications.map(c => c.title).join(", ")} />
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            {t('certifications.description')}
          </p>
        </motion.div>

        {/* Masonry or Grid Layout for Iframes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {currentCertifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className="bg-neutral-900 rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all flex flex-col h-[550px]"
            >
              <div className="p-4 bg-neutral-900 border-b border-white/10 flex justify-between items-center shrink-0">
                <h3 className="font-semibold text-white truncate pr-4" title={cert.title}>{cert.title}</h3>
                <a 
                  href={`https://www.linkedin.com/feed/update/urn:li:activity:${cert.id}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neutral-500 hover:text-white transition-colors"
                  title="View on LinkedIn"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              <div className="flex-1 bg-white relative overflow-hidden">
                <iframe
                  src={`https://www.linkedin.com/embed/feed/update/urn:li:activity:${cert.id}`}
                  height="100%"
                  width="100%"
                  frameBorder="0"
                  allowFullScreen
                  title={cert.title}
                  className="absolute inset-0"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
