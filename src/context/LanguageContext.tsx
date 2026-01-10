import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import {
  SUPPORTED_LANGUAGES,
  LANGUAGE_NAMES,
  LANGUAGE_FLAGS,
  isRTL,
  type SupportedLanguage,
} from '../constants/languages';

interface LanguageInfo {
  code: SupportedLanguage;
  name: string;
  flag: string;
  isRTL: boolean;
}

interface LanguageContextType {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  languages: LanguageInfo[];
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const { i18n } = useTranslation();
  const [language, setLanguageState] = useState<SupportedLanguage>(
    i18n.language as SupportedLanguage
  );

  const languages: LanguageInfo[] = SUPPORTED_LANGUAGES.map(code => ({
    code,
    name: LANGUAGE_NAMES[code],
    flag: LANGUAGE_FLAGS[code],
    isRTL: isRTL(code),
  }));

  useEffect(() => {
    // Sync with i18n language changes
    const handleLanguageChanged = (lng: string) => {
      setLanguageState(lng as SupportedLanguage);
    };

    i18n.on('languageChanged', handleLanguageChanged);
    return () => {
      i18n.off('languageChanged', handleLanguageChanged);
    };
  }, [i18n]);

  useEffect(() => {
    // Update document attributes
    document.documentElement.lang = language;
    document.documentElement.dir = isRTL(language) ? 'rtl' : 'ltr';

    // Save to localStorage
    try {
      localStorage.setItem('language', language);
    } catch {
      // Ignore localStorage errors
    }
  }, [language]);

  const setLanguage = (lang: SupportedLanguage) => {
    i18n.changeLanguage(lang);
    setLanguageState(lang);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        languages,
        isRTL: isRTL(language),
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
