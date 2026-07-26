import { motion } from "motion/react";
import { personalInfo } from "../data";
import { Sparkles, Palette, Layers, FileImage } from "lucide-react";

const orbitingCompanies = [
  { name: "Hubbell", years: "3+ yrs", color: "from-blue-500 to-blue-700", shadow: "shadow-blue-500/50" },
  { name: "Sprinklr", years: "7 mos", color: "from-emerald-500 to-emerald-700", shadow: "shadow-emerald-500/50" },
  { name: "Provise", years: "2.5 yrs", color: "from-purple-500 to-purple-700", shadow: "shadow-purple-500/50" },
  { name: "Williams Lea", years: "4 yrs", color: "from-pink-500 to-pink-700", shadow: "shadow-pink-500/50" },
  { name: "Cybertec", years: "3 yrs", color: "from-cyan-500 to-cyan-700", shadow: "shadow-cyan-500/50" }
];

export default function About() {
  const highlights = [
    {
      icon: <Sparkles className="w-6 h-6 text-purple-400" />,
      title: "Generative AI",
      description: "Certified in Adobe Firefly & advanced AI design workflows."
    },
    {
      icon: <Layers className="w-6 h-6 text-blue-400" />,
      title: "Augmented Reality",
      description: "Bringing designs to life with Adobe Aero AR experiences."
    },
    {
      icon: <Palette className="w-6 h-6 text-pink-400" />,
      title: "Creative Direction",
      description: "Over 10 years managing projects from conception to execution."
    },
    {
      icon: <FileImage className="w-6 h-6 text-indigo-400" />,
      title: "Infographics",
      description: "Visualizing complex data into compelling narrative stories."
    }
  ];

  return (
    <section id="about" className="py-24 bg-neutral-950 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Visual Stories</span>
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed mb-8">
              {personalInfo.about}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="aspect-square rounded-full overflow-hidden border border-white/10 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-purple-900/40 mix-blend-overlay z-10" />
              <img 
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop" 
                alt="Abstract AI Art" 
                className="w-full h-full object-cover opacity-80"
              />
              {/* Inner animated ring */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border border-dashed border-white/20 z-20 pointer-events-none"
              />
            </div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-30">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
                className="w-32 h-32 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center shadow-2xl relative z-20"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">10+</div>
                  <div className="text-xs text-neutral-400 uppercase tracking-wider mt-1">Years<br/>Exp</div>
                </div>
              </motion.div>
              
              {/* Rotating Bubbles */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] md:w-[300px] md:h-[300px] animate-spin-slow pointer-events-none z-10">
                {orbitingCompanies.map((company, i) => {
                  const angle = (i / orbitingCompanies.length) * 360;
                  const radius = 50;
                  const rad = (angle - 90) * (Math.PI / 180);
                  const top = 50 + radius * Math.sin(rad) + "%";
                  const left = 50 + radius * Math.cos(rad) + "%";

                  return (
                    <div 
                      key={company.name}
                      className="absolute animate-spin-slow-reverse flex flex-col items-center justify-center text-center -ml-7 -mt-7 md:-ml-8 md:-mt-8"
                      style={{ top, left }}
                    >
                      <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br ${company.color} shadow-lg ${company.shadow} flex flex-col items-center justify-center border border-white/20 backdrop-blur-md relative overflow-hidden group pointer-events-auto shadow-[inset_0_-4px_8px_rgba(0,0,0,0.5),inset_0_2px_4px_rgba(255,255,255,0.4)]`}>
                        <span className="text-[9px] md:text-[10px] font-bold text-white relative z-10 drop-shadow-md px-1 text-center leading-tight">{company.name}</span>
                        <span className="text-[7px] md:text-[9px] font-semibold text-white/90 relative z-10 drop-shadow-md">{company.years}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
