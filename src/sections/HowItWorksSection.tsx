import { useTranslation } from 'react-i18next';
import { Section } from '@sudobility/components';

const STEPS = [
  {
    key: 'create',
    number: '01',
    color: 'from-blue-500 to-blue-600',
  },
  {
    key: 'claim',
    number: '02',
    color: 'from-purple-500 to-purple-600',
  },
  {
    key: 'add',
    number: '03',
    color: 'from-green-500 to-green-600',
  },
  {
    key: 'use',
    number: '04',
    color: 'from-orange-500 to-orange-600',
  },
];

export default function HowItWorksSection() {
  const { t } = useTranslation('landingPage');

  return (
    <Section id="how-it-works" background="default" spacing="4xl" className="lg:py-32">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {t('howItWorks.title', 'How It Works')}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {t(
            'howItWorks.description',
            'Get started in four simple steps and take control of your digital identity.'
          )}
        </p>
      </div>

      {/* Steps */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {STEPS.map((step, index) => (
          <div key={step.key} className="relative">
            {/* Connector line (hidden on mobile and last item) */}
            {index < STEPS.length - 1 && (
              <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-gray-300 dark:from-gray-700 to-transparent" />
            )}

            <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              {/* Step number */}
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4`}
              >
                <span className="text-white font-bold text-lg">{step.number}</span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {t(`howItWorks.steps.${step.key}.title`, step.key)}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t(`howItWorks.steps.${step.key}.description`, '')}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
