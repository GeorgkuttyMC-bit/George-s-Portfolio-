import React, { createContext, useContext, useState, ReactNode } from 'react';
import { translations, Language } from '../i18n/translations';

interface LanguageContextType {
  language: Language;
  toggleLanguage: (lang: Language) => void;
  t: (key: string) => any; // Returns translation based on key
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  const t = (key: string) => {
    const keys = key.split('.');
    let value: any = translations[language];
    for (const k of keys) {
      if (value[k] === undefined) {
        // Fallback to English if translation is missing
        let fallbackValue: any = translations['en'];
        for (const fbK of keys) {
          if (fallbackValue[fbK] === undefined) return key;
          fallbackValue = fallbackValue[fbK];
        }
        return fallbackValue;
      }
      value = value[k];
    }
    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
