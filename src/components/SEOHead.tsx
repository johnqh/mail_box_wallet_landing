import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';
import { LANGUAGE_TO_LOCALE } from '../constants/languages';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
}

export default function SEOHead({
  title,
  description,
  keywords = [],
  ogImage = '/og-image.png',
  ogType = 'website',
  canonicalUrl,
}: SEOHeadProps) {
  const { language } = useLanguage();
  const locale = LANGUAGE_TO_LOCALE[language];

  const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const fullCanonicalUrl = canonicalUrl ? `${baseUrl}${canonicalUrl}` : undefined;

  return (
    <Helmet>
      <html lang={language} />
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:locale" content={locale} />
      {ogImage && <meta property="og:image" content={`${baseUrl}${ogImage}`} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={`${baseUrl}${ogImage}`} />}

      {/* Canonical URL */}
      {fullCanonicalUrl && <link rel="canonical" href={fullCanonicalUrl} />}
    </Helmet>
  );
}
