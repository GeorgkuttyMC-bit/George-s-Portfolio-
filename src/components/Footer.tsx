import { motion } from "motion/react";
import { Mail, Phone, MapPin } from "lucide-react";
import { personalInfo } from "../data";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-neutral-950 py-16 border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-black text-white mb-4">
              {t('about.contact').split(' ')[0]} {t('about.contact').split(' ')[1] && <br/>}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">{t('about.contact').split(' ').slice(2).join(' ')}</span>
            </h2>
            <p className="text-neutral-500 max-w-sm mb-8">
              Available for new opportunities and exciting design collaborations.
            </p>
            <div className="flex gap-4">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
              <a
                href={personalInfo.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                 <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.882 5.372 4.98h-6.912c.022 1.353 1.226 2.378 2.825 2.378 1.488 0 2.309-.646 2.768-1.583l1.146.82zm-4.417-4.103c-.228-1.127-1.189-1.921-2.483-1.921-1.378 0-2.316.899-2.518 1.921h5.001zm-9.309 6.103h-10v-16h8.21c2.193 0 4.707.971 4.707 4.195 0 1.944-1.362 2.863-2.618 3.193 1.63.265 3.322 1.551 3.322 3.993 0 3.354-2.859 4.619-3.621 4.619zm-6.6-12.753v4.062h3.948c1.696 0 2.483-.984 2.483-2.128 0-1.22-1.042-1.934-2.37-1.934h-4.061zm0 9.878h4.526c1.821 0 2.802-.916 2.802-2.392 0-1.536-1.168-2.327-2.73-2.327h-4.598v4.719z"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">{personalInfo.email}</span>
                </a>
              </li>
              <li>
                <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">{personalInfo.phone}</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-neutral-400">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{personalInfo.location}</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-6">Navigation</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#about" className="text-neutral-500 hover:text-white transition-colors">{t('nav.about')}</a></li>
              <li><a href="#skills" className="text-neutral-500 hover:text-white transition-colors">{t('nav.skills')}</a></li>
              <li><a href="#experience" className="text-neutral-500 hover:text-white transition-colors">{t('nav.experience')}</a></li>
              <li><a href="#certifications" className="text-neutral-500 hover:text-white transition-colors">{t('nav.certifications')}</a></li>
              <li><a href="#portfolio" className="text-neutral-500 hover:text-white transition-colors">{t('nav.portfolio')}</a></li>
            </ul>
          </div>
        
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-neutral-600 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Georgekutty MC. {t('footer.rights')}</p>
          <p className="mt-2 md:mt-0">Designed & Developed as an AI-powered interactive portfolio.</p>
        </div>
      </div>
    </footer>
  );
}
