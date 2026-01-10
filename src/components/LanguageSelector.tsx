import { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronDownIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import { useLanguage } from '../context/LanguageContext';
import { addLanguageToPath, removeLanguageFromPath } from '../utils/languageRouting';
import type { SupportedLanguage } from '../constants/languages';

interface LanguageSelectorProps {
  variant?: 'compact' | 'full';
  className?: string;
}

export default function LanguageSelector({
  variant = 'compact',
  className = '',
}: LanguageSelectorProps) {
  const { language, languages, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const currentLang = languages.find(l => l.code === language);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (newLang: SupportedLanguage) => {
    setLanguage(newLang);
    setIsOpen(false);

    // Update URL with new language
    const pathWithoutLang = removeLanguageFromPath(location.pathname);
    const newPath = addLanguageToPath(pathWithoutLang, newLang);
    navigate(newPath + location.search + location.hash);
  };

  return (
    <div ref={dropdownRef} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        {variant === 'compact' ? (
          <>
            <GlobeAltIcon className="h-5 w-5" />
            <span className="text-sm font-medium">{currentLang?.flag}</span>
          </>
        ) : (
          <>
            <span className="text-lg">{currentLang?.flag}</span>
            <span className="text-sm font-medium">{currentLang?.name}</span>
          </>
        )}
        <ChevronDownIcon className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-56 max-h-96 overflow-y-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50"
          role="listbox"
        >
          {languages.map(lang => (
            <button
              key={lang.code}
              type="button"
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                lang.code === language
                  ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                  : 'text-gray-700 dark:text-gray-300'
              }`}
              role="option"
              aria-selected={lang.code === language}
            >
              <span className="text-xl">{lang.flag}</span>
              <span className="text-sm font-medium">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
