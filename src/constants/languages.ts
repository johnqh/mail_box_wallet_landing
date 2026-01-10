export const SUPPORTED_LANGUAGES = [
  'en',
  'ar',
  'de',
  'es',
  'fr',
  'it',
  'ja',
  'ko',
  'pt',
  'ru',
  'sv',
  'th',
  'uk',
  'vi',
  'zh',
  'zh-hant',
] as const;

export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

export const DEFAULT_LANGUAGE: SupportedLanguage = 'en';

export const RTL_LANGUAGES: SupportedLanguage[] = ['ar'];

export const LANGUAGE_NAMES: Record<SupportedLanguage, string> = {
  en: 'English',
  ar: 'العربية',
  de: 'Deutsch',
  es: 'Español',
  fr: 'Français',
  it: 'Italiano',
  ja: '日本語',
  ko: '한국어',
  pt: 'Português',
  ru: 'Русский',
  sv: 'Svenska',
  th: 'ไทย',
  uk: 'Українська',
  vi: 'Tiếng Việt',
  zh: '简体中文',
  'zh-hant': '繁體中文',
};

export const LANGUAGE_FLAGS: Record<SupportedLanguage, string> = {
  en: '🇺🇸',
  ar: '🇸🇦',
  de: '🇩🇪',
  es: '🇪🇸',
  fr: '🇫🇷',
  it: '🇮🇹',
  ja: '🇯🇵',
  ko: '🇰🇷',
  pt: '🇧🇷',
  ru: '🇷🇺',
  sv: '🇸🇪',
  th: '🇹🇭',
  uk: '🇺🇦',
  vi: '🇻🇳',
  zh: '🇨🇳',
  'zh-hant': '🇹🇼',
};

export const LANGUAGE_TO_LOCALE: Record<SupportedLanguage, string> = {
  en: 'en-US',
  ar: 'ar-SA',
  de: 'de-DE',
  es: 'es-ES',
  fr: 'fr-FR',
  it: 'it-IT',
  ja: 'ja-JP',
  ko: 'ko-KR',
  pt: 'pt-BR',
  ru: 'ru-RU',
  sv: 'sv-SE',
  th: 'th-TH',
  uk: 'uk-UA',
  vi: 'vi-VN',
  zh: 'zh-CN',
  'zh-hant': 'zh-TW',
};

export function isLanguageSupported(lang: string): lang is SupportedLanguage {
  return SUPPORTED_LANGUAGES.includes(lang as SupportedLanguage);
}

export function isRTL(lang: SupportedLanguage): boolean {
  return RTL_LANGUAGES.includes(lang);
}
