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
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t('faq.title', 'Frequently Asked Questions')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('faq.description', 'Got questions? We have answers.')}
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {FAQ_KEYS.map((key, index) => (
            <div key={key} className="border border-border rounded-xl overflow-hidden">
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left bg-muted hover:bg-accent transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-medium text-foreground pr-4">
                  {t(`faq.items.${key}.question`, '')}
                </span>
                <ChevronDownIcon
                  className={`h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="p-6 pt-0 bg-muted">
                  <p className="text-muted-foreground">{t(`faq.items.${key}.answer`, '')}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
