import { motion } from "motion/react";
import { experiences } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-neutral-900 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Professional Journey</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            A decade of delivering high-quality design solutions across global teams.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-8 md:pl-0 mb-12 last:mb-0"
            >
              <div className="md:grid md:grid-cols-12 gap-8 items-start relative">
                {/* Timeline line */}
                <div className="absolute left-0 md:left-1/2 md:-ml-px top-0 h-full w-px bg-white/10 hidden md:block" />
                
                {/* Mobile timeline line */}
                <div className="absolute left-[11px] top-8 bottom-[-48px] w-px bg-white/10 md:hidden last:hidden" />
                
                {/* Dot */}
                <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-neutral-900 border-4 border-blue-500 z-10 md:left-1/2 md:-ml-3" />

                {/* Left side (Date) on Desktop */}
                <div className="hidden md:block md:col-span-5 text-right pt-1 pr-8">
                  <span className="text-sm font-semibold tracking-widest uppercase text-blue-400">{exp.date}</span>
                </div>

                {/* Content */}
                <div className="md:col-span-7 md:pl-8 pt-1">
                  <div className="md:hidden mb-2">
                     <span className="text-sm font-semibold tracking-widest uppercase text-blue-400">{exp.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                  <div className="text-neutral-400 font-medium mb-4">{exp.company} &bull; {exp.location}</div>
                  
                  <ul className="space-y-2">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="text-neutral-500 text-sm leading-relaxed flex items-start">
                        <span className="text-blue-500 mr-2 mt-1.5 text-xs">◆</span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
