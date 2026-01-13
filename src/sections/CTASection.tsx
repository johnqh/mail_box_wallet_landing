import { useTranslation } from 'react-i18next';
import { Section } from '@sudobility/components';
import { ArrowRightIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { APP_NAME } from '../config/constants';

const CTA_URL = import.meta.env.VITE_CTA_URL || '#';

export default function CTASection() {
  const { t } = useTranslation('landingPage');

  return (
    <Section
      variant="cta"
      spacing="4xl"
      className="lg:py-32 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-8">
          <SparklesIcon className="h-4 w-4" />
          <span>{t('cta.badge', 'Start Your Web3 Journey')}</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          {t('cta.title', 'Ready to Take Control?')}
        </h2>

        {/* Description */}
        <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
          {t(
            'cta.description',
            `Join thousands of users who have already secured their digital identity with ${APP_NAME}.`
          )}
        </p>

        {/* CTA Button */}
        <a
          href={CTA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          <span>{t('cta.button', 'Get Started Now')}</span>
          <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </a>

        {/* Sub-text */}
        <p className="mt-6 text-white/60 text-sm">
          {t('cta.subtext', 'Free to use. No credit card required.')}
        </p>
      </div>
    </Section>
  );
}
