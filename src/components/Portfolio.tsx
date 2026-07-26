import { motion } from "motion/react";
import { portfolioWorks } from "../data";
import { ExternalLink } from "lucide-react";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-neutral-950">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Selected Works</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            A showcase of my recent design projects and brand identity creations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioWorks.map((work, index) => (
            <motion.a
              key={work.id}
              href={work.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group block relative rounded-2xl overflow-hidden bg-neutral-900 border border-white/5 hover:border-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <div className="absolute inset-0 bg-neutral-900 animate-pulse" />
                <img 
                  src={work.image} 
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 relative z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80 z-20" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 z-30">
                <p className="text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2">{work.type}</p>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-100 transition-colors">{work.title}</h3>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                    <ExternalLink className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="https://www.behance.net/Georgecreativelab"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-medium rounded-full border border-white/10 transition-all"
          >
            View Full Behance Portfolio
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
