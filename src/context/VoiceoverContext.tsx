import React, { createContext, useContext, useState, useEffect, ReactNode, useRef } from 'react';
import { useLanguage } from './LanguageContext';

interface VoiceoverContextType {
  isPlaying: boolean;
  isSupported: boolean;
  activeSection: string | null;
  playVoiceover: (sectionId?: string, customText?: string | string[]) => void;
  stopVoiceover: () => void;
  toggleVoiceover: (sectionId?: string, customText?: string | string[]) => void;
}

const VoiceoverContext = createContext<VoiceoverContextType | undefined>(undefined);

export const VoiceoverProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const { language, t } = useLanguage();
  const synthRef = useRef<SpeechSynthesis | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      synthRef.current = window.speechSynthesis;
      setIsSupported(true);
    }

    return () => {
      if (synthRef.current) {
        synthRef.current.cancel();
      }
    };
  }, []);

  useEffect(() => {
    if (isPlaying && synthRef.current) {
      synthRef.current.cancel();
      setIsPlaying(false);
      setActiveSection(null);
    }
  }, [language, t]);

  const playVoiceover = (sectionId: string = 'global', text?: string | string[]) => {
    if (!synthRef.current) return;
    
    synthRef.current.cancel();
    setIsPlaying(true);
    setActiveSection(sectionId);
    
    let texts: string[] = [];
    if (text) {
      texts = Array.isArray(text) ? text : [text];
    } else {
      texts = [
        t('voiceover.intro'),
        t('voiceover.about'),
        t('voiceover.skills'),
        t('voiceover.experience'),
        t('voiceover.portfolio')
      ];
    }
    
    texts.forEach((txt, index) => {
      const utterance = new SpeechSynthesisUtterance(txt);
      const langCode = language === 'de' ? 'de-DE' : 'en-US';
      utterance.lang = langCode;
      utterance.rate = 0.95;
      
      const voices = synthRef.current?.getVoices() || [];
      if (voices.length > 0) {
        if (language === 'de') {
          const deVoices = voices.filter(v => v.lang.startsWith('de'));
          const maleNames = ['markus', 'viktor', 'yannick', 'stefan', 'conrad', 'killian', 'male'];
          const voice = deVoices.find(v => maleNames.some(name => v.name.toLowerCase().includes(name))) 
            || deVoices.find(v => !v.name.toLowerCase().includes('female') && !v.name.toLowerCase().includes('anna') && !v.name.toLowerCase().includes('hedda') && !v.name.toLowerCase().includes('katja') && !v.name.toLowerCase().includes('marlene'))
            || deVoices[0] 
            || voices[0];
            
          if (voice) {
            utterance.voice = voice;
            utterance.pitch = 0.8; // Lower pitch for a bolder sound
            utterance.rate = 0.9;  // Slightly slower for emphasis
          }
        } else {
          const voice = voices.find(v => v.lang.startsWith('en')) || voices[0];
          if (voice) {
            utterance.voice = voice;
          }
        }
      }
      
      if (index === texts.length - 1) {
        utterance.onend = () => {
          setIsPlaying(false);
          setActiveSection(null);
        };
      }
      
      utterance.onerror = (e) => {
        if (e.error !== 'interrupted' && e.error !== 'canceled') {
          console.warn('Speech synthesis issue:', e.error);
        }
        setIsPlaying(false);
        setActiveSection(null);
      };
      
      synthRef.current?.speak(utterance);
    });
  };

  const stopVoiceover = () => {
    if (synthRef.current) {
      synthRef.current.cancel();
    }
    setIsPlaying(false);
    setActiveSection(null);
  };

  const toggleVoiceover = (sectionId: string = 'global', text?: string | string[]) => {
    if (isPlaying && (activeSection === sectionId || sectionId === 'global')) {
      stopVoiceover();
    } else {
      playVoiceover(sectionId, text);
    }
  };

  return (
    <VoiceoverContext.Provider value={{ isPlaying, isSupported, activeSection, playVoiceover, stopVoiceover, toggleVoiceover }}>
      {children}
    </VoiceoverContext.Provider>
  );
};

export const useVoiceover = () => {
  const context = useContext(VoiceoverContext);
  if (context === undefined) {
    throw new Error('useVoiceover must be used within a VoiceoverProvider');
  }
  return context;
};
