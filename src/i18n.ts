import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { detectLanguageFromPath } from './utils/languageRouting';
import { SUPPORTED_LANGUAGES } from './constants/languages';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: detectLanguageFromPath(),
    fallbackLng: {
      zh: ['zh', 'en'],
      'zh-hant': ['zh-hant', 'zh', 'en'],
      default: ['en'],
    },
    initImmediate: false,
    supportedLngs: [...SUPPORTED_LANGUAGES],
    debug: false,
    nonExplicitSupportedLngs: true,

    interpolation: {
      escapeValue: false,
    },

    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },

    detection: {
      order: ['path', 'localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'language',
      lookupFromPathIndex: 0,
    },

    load: 'languageOnly',
    preload: [],
    cleanCode: false,
    lowerCaseLng: false,

    defaultNS: 'common',
    ns: ['common', 'landingPage'],
  });

export default i18n;
