import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useVoiceover } from '../context/VoiceoverContext';
import { motion } from 'motion/react';
import { Volume2, VolumeX } from 'lucide-react';

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();
  const { isPlaying, isSupported, toggleVoiceover } = useVoiceover();

  return (
    <div className="fixed top-6 right-6 z-50 flex items-center gap-3">
      {isSupported && (
        <button
          onClick={toggleVoiceover}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 backdrop-blur-md border border-white/10 shadow-xl ${
            isPlaying
              ? 'bg-purple-500 text-white'
              : 'bg-neutral-900/80 text-neutral-400 hover:text-white hover:bg-neutral-800'
          }`}
        >
          {isPlaying ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          <span className="hidden sm:inline">{isPlaying ? 'Stop Voiceover' : 'Play Voiceover'}</span>
        </button>
      )}
      <div className="flex items-center gap-2 bg-neutral-900/80 backdrop-blur-md p-1.5 rounded-full border border-white/10 shadow-xl">
        <button
          onClick={() => toggleLanguage('en')}
          className={`px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
            language === 'en'
              ? 'bg-blue-500 text-white shadow-lg'
              : 'text-neutral-400 hover:text-white hover:bg-white/5'
          }`}
        >
          EN
        </button>
        <button
          onClick={() => toggleLanguage('de')}
          className={`px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
            language === 'de'
              ? 'bg-blue-500 text-white shadow-lg'
              : 'text-neutral-400 hover:text-white hover:bg-white/5'
          }`}
        >
          DE
        </button>
      </div>
    </div>
  );
}
