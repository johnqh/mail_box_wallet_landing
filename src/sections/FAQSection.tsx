import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Section } from '@sudobility/components';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const FAQ_KEYS = ['different', 'security', 'chains', 'recovery', 'cost'];

export default function FAQSection() {
  const { t } = useTranslation('landingPage');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="faq" variant="feature" spacing="4xl" className="lg:py-32">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('faq.title', 'Frequently Asked Questions')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {t('faq.description', 'Got questions? We have answers.')}
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {FAQ_KEYS.map((key, index) => (
            <div
              key={key}
              className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden"
            >
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-medium text-gray-900 dark:text-white pr-4">
                  {t(`faq.items.${key}.question`, '')}
                </span>
                <ChevronDownIcon
                  className={`h-5 w-5 text-gray-500 dark:text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="p-6 pt-0 bg-gray-50 dark:bg-gray-900">
                  <p className="text-gray-600 dark:text-gray-300">
                    {t(`faq.items.${key}.answer`, '')}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
