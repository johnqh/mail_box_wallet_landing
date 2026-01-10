import {
  DEFAULT_LANGUAGE,
  isLanguageSupported,
  type SupportedLanguage,
} from '../constants/languages';

export function detectBrowserLanguage(): SupportedLanguage {
  if (typeof window === 'undefined') {
    return DEFAULT_LANGUAGE;
  }

  // Check navigator languages
  const browserLangs = navigator.languages || [navigator.language];

  for (const lang of browserLangs) {
    const shortLang = lang.split('-')[0].toLowerCase();

    // Check for exact match first
    if (isLanguageSupported(lang.toLowerCase())) {
      return lang.toLowerCase() as SupportedLanguage;
    }

    // Check for short code match
    if (isLanguageSupported(shortLang)) {
      return shortLang as SupportedLanguage;
    }

    // Special handling for Chinese variants
    if (shortLang === 'zh') {
      const fullLang = lang.toLowerCase();
      if (fullLang.includes('hant') || fullLang.includes('tw') || fullLang.includes('hk')) {
        return 'zh-hant';
      }
      return 'zh';
    }
  }

  return DEFAULT_LANGUAGE;
}

export function extractLanguageFromPath(pathname: string): SupportedLanguage | null {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0]?.toLowerCase();

  if (firstSegment && isLanguageSupported(firstSegment)) {
    return firstSegment as SupportedLanguage;
  }

  return null;
}

export function addLanguageToPath(pathname: string, language: SupportedLanguage): string {
  const existingLang = extractLanguageFromPath(pathname);

  if (existingLang) {
    // Replace existing language
    const segments = pathname.split('/').filter(Boolean);
    segments[0] = language;
    return '/' + segments.join('/');
  }

  // Add language prefix
  const cleanPath = pathname.startsWith('/') ? pathname : '/' + pathname;
  return `/${language}${cleanPath === '/' ? '' : cleanPath}`;
}

export function removeLanguageFromPath(pathname: string): string {
  const existingLang = extractLanguageFromPath(pathname);

  if (existingLang) {
    const segments = pathname.split('/').filter(Boolean);
    segments.shift(); // Remove language segment
    return '/' + segments.join('/') || '/';
  }

  return pathname;
}

export function buildLocalizedUrl(
  pathname: string,
  language: SupportedLanguage,
  search?: string,
  hash?: string
): string {
  let url = addLanguageToPath(pathname, language);

  if (search) {
    url += search.startsWith('?') ? search : '?' + search;
  }

  if (hash) {
    url += hash.startsWith('#') ? hash : '#' + hash;
  }

  return url;
}

export function detectLanguageFromPath(): SupportedLanguage {
  if (typeof window === 'undefined') {
    return DEFAULT_LANGUAGE;
  }

  // Check URL path first
  const pathLang = extractLanguageFromPath(window.location.pathname);
  if (pathLang) {
    return pathLang;
  }

  // Fall back to localStorage
  try {
    const stored = localStorage.getItem('language');
    if (stored && isLanguageSupported(stored)) {
      return stored as SupportedLanguage;
    }
  } catch {
    // localStorage may throw in Safari private browsing
  }

  // Fall back to browser language
  return detectBrowserLanguage();
}
