/**
 * SEO configuration for Signic ID.
 *
 * Used by generate-seo-assets.mjs from @johnqh/workflows to produce
 * per-route localized index.html files, sitemap.xml, and robots.txt.
 */

const APP_NAME = process.env.VITE_APP_NAME || 'Signic ID';

export default {
  supportedLanguages: [
    'en', 'de', 'es', 'fr', 'it', 'ja', 'ko',
    'pt', 'ru', 'sv', 'th', 'uk', 'vi', 'zh', 'zh-hant',
  ],

  languageHreflangMap: {
    en: 'en',
    de: 'de',
    es: 'es',
    fr: 'fr',
    it: 'it',
    ja: 'ja',
    ko: 'ko',
    pt: 'pt',
    ru: 'ru',
    sv: 'sv',
    th: 'th',
    uk: 'uk',
    vi: 'vi',
    zh: 'zh-Hans',
    'zh-hant': 'zh-Hant',
  },

  primaryDomain: 'signic.id',
  appName: APP_NAME,
  appDomain: process.env.VITE_APP_DOMAIN || 'signic.id',

  routes: [
    {
      key: 'home',
      path: '',
      namespace: 'landingPage',
      priority: '1.0',
      changefreq: 'weekly',
      indexable: true,
      meta: locale => ({
        title: locale.landingPage.seo.title,
        description: locale.landingPage.seo.description,
        keywords: locale.landingPage.seo.keywords,
      }),
    },
    {
      key: 'privacy',
      path: '/privacy',
      namespace: 'common',
      priority: '0.5',
      changefreq: 'yearly',
      indexable: true,
      meta: locale => ({
        title: locale.common.privacy.seoTitle,
        description: locale.common.privacy.seoDescription,
        keywords: locale.common.privacy.seoKeywords,
      }),
    },
    {
      key: 'terms',
      path: '/terms',
      namespace: 'common',
      priority: '0.5',
      changefreq: 'yearly',
      indexable: true,
      meta: locale => ({
        title: locale.common.terms.seoTitle,
        description: locale.common.terms.seoDescription,
        keywords: locale.common.terms.seoKeywords,
      }),
    },
  ],
};
