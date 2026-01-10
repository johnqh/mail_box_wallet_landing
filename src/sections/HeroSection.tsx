import { useTranslation } from 'react-i18next';
import { SparklesIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const CTA_URL = import.meta.env.VITE_CTA_URL || '#';

export default function HeroSection() {
  const { t } = useTranslation('landingPage');

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20" />

      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-8 animate-fade-in">
            <SparklesIcon className="h-4 w-4" />
            <span>{t('hero.badge', 'Your Identity, Your Control')}</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in-up">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t('hero.title', 'Personal ID')}
            </span>
            <br />
            <span className="text-gray-800 dark:text-gray-100">
              {t('hero.subtitle', 'with Crypto Technologies')}
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10 animate-fade-in-up">
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
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <span>{t('hero.cta', 'Get Started')}</span>
              <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#features"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-semibold rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              {t('hero.learnMore', 'Learn More')}
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{t('hero.trust.secure', 'Secure & Private')}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{t('hero.trust.multiChain', 'Multi-Chain')}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
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
    </section>
  );
}
