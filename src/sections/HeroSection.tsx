import { useTranslation } from 'react-i18next';
import { Section } from '@sudobility/components';
import { SparklesIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const CTA_URL = import.meta.env.VITE_CTA_URL || '#';

export default function HeroSection() {
  const { t } = useTranslation('landingPage');

  return (
    <Section variant="hero" spacing="4xl" className="lg:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent to-primary/10" />

      {/* Decorative blobs (intentional brand-color illustration accents, not chrome) */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-in">
            <SparklesIcon className="h-4 w-4" />
            <span>{t('hero.badge', 'Your Identity, Your Control')}</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t('hero.title', 'Personal ID')}
            </span>
            <br />
            <span className="text-foreground">
              {t('hero.subtitle', 'with Crypto Technologies')}
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-fade-in-up">
            {t(
              'hero.description',
              'A secure wallet and decentralized identity solution. Own your digital identity, manage your assets, and authenticate across Web3 seamlessly.'
            )}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up">
            <a
              href={CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <span>{t('hero.cta', 'Get Started')}</span>
              <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#features"
              className="inline-flex items-center gap-2 px-8 py-4 bg-card text-foreground font-semibold rounded-xl border border-border hover:bg-accent transition-colors"
            >
              {t('hero.learnMore', 'Learn More')}
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{t('hero.trust.secure', 'Secure & Private')}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{t('hero.trust.multiChain', 'Multi-Chain')}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{t('hero.trust.selfSovereign', 'Self-Sovereign')}</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
