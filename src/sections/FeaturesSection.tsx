import { useTranslation } from 'react-i18next';
import { Section } from '@sudobility/components';
import {
  WalletIcon,
  FingerPrintIcon,
  GlobeAltIcon,
  UserIcon,
  ShieldCheckIcon,
  DocumentCheckIcon,
} from '@heroicons/react/24/outline';

const FEATURES = [
  {
    key: 'wallet',
    icon: WalletIcon,
    color: 'blue',
  },
  {
    key: 'identity',
    icon: FingerPrintIcon,
    color: 'purple',
  },
  {
    key: 'multiChain',
    icon: GlobeAltIcon,
    color: 'green',
  },
  {
    key: 'names',
    icon: UserIcon,
    color: 'orange',
  },
  {
    key: 'privacy',
    icon: ShieldCheckIcon,
    color: 'pink',
  },
  {
    key: 'credentials',
    icon: DocumentCheckIcon,
    color: 'cyan',
  },
];

const colorClasses: Record<string, { bg: string; icon: string; border: string }> = {
  blue: {
    bg: 'bg-blue-100 dark:bg-blue-900/30',
    icon: 'text-blue-600 dark:text-blue-400',
    border: 'border-blue-200 dark:border-blue-800',
  },
  purple: {
    bg: 'bg-purple-100 dark:bg-purple-900/30',
    icon: 'text-purple-600 dark:text-purple-400',
    border: 'border-purple-200 dark:border-purple-800',
  },
  green: {
    bg: 'bg-green-100 dark:bg-green-900/30',
    icon: 'text-green-600 dark:text-green-400',
    border: 'border-green-200 dark:border-green-800',
  },
  orange: {
    bg: 'bg-orange-100 dark:bg-orange-900/30',
    icon: 'text-orange-600 dark:text-orange-400',
    border: 'border-orange-200 dark:border-orange-800',
  },
  pink: {
    bg: 'bg-pink-100 dark:bg-pink-900/30',
    icon: 'text-pink-600 dark:text-pink-400',
    border: 'border-pink-200 dark:border-pink-800',
  },
  cyan: {
    bg: 'bg-cyan-100 dark:bg-cyan-900/30',
    icon: 'text-cyan-600 dark:text-cyan-400',
    border: 'border-cyan-200 dark:border-cyan-800',
  },
};

export default function FeaturesSection() {
  const { t } = useTranslation('landingPage');

  return (
    <Section id="features" variant="feature" spacing="4xl" className="lg:py-32">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {t('features.title', 'Everything You Need')}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {t(
            'features.description',
            'A complete solution for managing your digital identity and crypto assets in one place.'
          )}
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {FEATURES.map(feature => {
          const Icon = feature.icon;
          const colors = colorClasses[feature.color];

          return (
            <div
              key={feature.key}
              className={`p-6 rounded-2xl border ${colors.border} bg-gray-50 dark:bg-gray-900 hover:shadow-lg transition-shadow duration-300`}
            >
              <div
                className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-4`}
              >
                <Icon className={`h-6 w-6 ${colors.icon}`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {t(`features.${feature.key}.title`, feature.key)}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t(`features.${feature.key}.description`, '')}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
