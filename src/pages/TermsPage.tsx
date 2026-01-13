import { useTranslation } from 'react-i18next';
import { Section } from '@sudobility/components';
import ScreenContainer from '../components/ScreenContainer';
import SEOHead from '../components/SEOHead';
import { APP_NAME, CONSTANTS } from '../config/constants';

export default function TermsPage() {
  const { t } = useTranslation('common');

  return (
    <>
      <SEOHead
        title={t('terms.seoTitle', {
          appName: APP_NAME,
          defaultValue: `Terms of Service - ${APP_NAME}`,
        })}
        description={t('terms.seoDescription', {
          appName: APP_NAME,
          defaultValue: `Terms of service for ${APP_NAME}. Read our terms and conditions for using our crypto wallet service.`,
        })}
        keywords={[
          'terms of service',
          'terms and conditions',
          'crypto wallet terms',
          'user agreement',
        ]}
      />
      <ScreenContainer>
        <Section as="main" spacing="2xl">
          <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            {t('terms.title', 'Terms of Service')}
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {t('terms.lastUpdated', 'Last updated')}: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t('terms.acceptance.title', 'Acceptance of Terms')}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {t('terms.acceptance.content', {
                  appName: APP_NAME,
                  defaultValue: `By accessing or using ${APP_NAME}, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.`,
                })}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t('terms.description.title', 'Service Description')}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {t('terms.description.content', {
                  appName: APP_NAME,
                  defaultValue: `${APP_NAME} is a non-custodial cryptocurrency wallet that allows you to manage your digital assets and decentralized identity. We do not hold your private keys or have access to your funds.`,
                })}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t('terms.eligibility.title', 'Eligibility')}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {t('terms.eligibility.intro', 'To use our service, you must:')}
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>{t('terms.eligibility.item1', 'Be at least 18 years old')}</li>
                <li>
                  {t(
                    'terms.eligibility.item2',
                    'Have the legal capacity to enter into this agreement'
                  )}
                </li>
                <li>
                  {t(
                    'terms.eligibility.item3',
                    'Not be prohibited from using cryptocurrency services in your jurisdiction'
                  )}
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t('terms.responsibilities.title', 'User Responsibilities')}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {t('terms.responsibilities.intro', 'You are responsible for:')}
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>
                  {t(
                    'terms.responsibilities.item1',
                    'Safeguarding your private keys and recovery phrases'
                  )}
                </li>
                <li>
                  {t(
                    'terms.responsibilities.item2',
                    'All activities that occur under your wallet'
                  )}
                </li>
                <li>
                  {t(
                    'terms.responsibilities.item3',
                    'Complying with applicable laws and regulations'
                  )}
                </li>
                <li>
                  {t(
                    'terms.responsibilities.item4',
                    'Understanding the risks associated with cryptocurrency'
                  )}
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t('terms.risks.title', 'Risk Disclosure')}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {t(
                  'terms.risks.content',
                  'Cryptocurrency and blockchain technology involve significant risks including but not limited to: price volatility, regulatory uncertainty, technical vulnerabilities, and potential loss of funds. You acknowledge that you understand these risks and accept full responsibility for any losses.'
                )}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t('terms.prohibited.title', 'Prohibited Activities')}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {t('terms.prohibited.intro', 'You agree not to:')}
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>{t('terms.prohibited.item1', 'Use the service for illegal activities')}</li>
                <li>{t('terms.prohibited.item2', 'Attempt to hack or disrupt the service')}</li>
                <li>{t('terms.prohibited.item3', 'Violate intellectual property rights')}</li>
                <li>{t('terms.prohibited.item4', 'Engage in market manipulation')}</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t('terms.liability.title', 'Limitation of Liability')}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {t('terms.liability.content', {
                  appName: APP_NAME,
                  defaultValue: `To the maximum extent permitted by law, ${APP_NAME} shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the service.`,
                })}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t('terms.changes.title', 'Changes to Terms')}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {t(
                  'terms.changes.content',
                  'We reserve the right to modify these terms at any time. Continued use of the service after changes constitutes acceptance of the new terms.'
                )}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t('terms.contact.title', 'Contact Us')}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {t(
                  'terms.contact.content',
                  'If you have questions about these terms, please contact us at:'
                )}
              </p>
              <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300">
                  {t('email', 'Email')}:{' '}
                  <a
                    href={`mailto:${CONSTANTS.LEGAL_EMAIL}`}
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400"
                  >
                    {CONSTANTS.LEGAL_EMAIL}
                  </a>
                </p>
              </div>
            </section>
          </div>
          </div>
        </Section>
      </ScreenContainer>
    </>
  );
}
