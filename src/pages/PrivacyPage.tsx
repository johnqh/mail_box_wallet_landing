import { useTranslation } from 'react-i18next';
import { Section } from '@sudobility/components';
import ScreenContainer from '../components/ScreenContainer';
import SEOHead from '../components/SEOHead';
import { APP_NAME, CONSTANTS } from '../config/constants';

export default function PrivacyPage() {
  const { t } = useTranslation('common');

  return (
    <>
      <SEOHead
        title={t('privacy.seoTitle', {
          appName: APP_NAME,
          defaultValue: `Privacy Policy - ${APP_NAME}`,
        })}
        description={t('privacy.seoDescription', {
          appName: APP_NAME,
          defaultValue: `Privacy policy for ${APP_NAME}. Learn how we protect your data and respect your privacy.`,
        })}
        keywords={['privacy policy', 'data protection', 'GDPR', 'crypto wallet privacy']}
      />
      <ScreenContainer>
        <Section as="main" spacing="2xl" maxWidth="4xl">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            {t('privacy.title', 'Privacy Policy')}
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {t('privacy.lastUpdated', 'Last updated')}: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t('privacy.introduction.title', 'Introduction')}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {t('privacy.introduction.content', {
                  appName: APP_NAME,
                  defaultValue: `${APP_NAME} ("we", "our", or "us") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you use our wallet application.`,
                })}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t('privacy.dataCollection.title', 'Information We Collect')}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {t(
                  'privacy.dataCollection.intro',
                  'We collect minimal information necessary to provide our services:'
                )}
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>{t('privacy.dataCollection.item1', 'Wallet addresses you connect')}</li>
                <li>
                  {t(
                    'privacy.dataCollection.item2',
                    'Transaction data visible on public blockchains'
                  )}
                </li>
                <li>{t('privacy.dataCollection.item3', 'Usage analytics (anonymized)')}</li>
                <li>{t('privacy.dataCollection.item4', 'Device information for security')}</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t('privacy.dataUse.title', 'How We Use Your Information')}
              </h2>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>{t('privacy.dataUse.item1', 'To provide and maintain our service')}</li>
                <li>{t('privacy.dataUse.item2', 'To improve user experience')}</li>
                <li>{t('privacy.dataUse.item3', 'To detect and prevent fraud')}</li>
                <li>{t('privacy.dataUse.item4', 'To comply with legal obligations')}</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t('privacy.security.title', 'Data Security')}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {t(
                  'privacy.security.content',
                  'We implement industry-standard security measures to protect your data. Your private keys never leave your device and are never transmitted to our servers. We use encryption for all data in transit and at rest.'
                )}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t('privacy.rights.title', 'Your Rights')}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {t('privacy.rights.intro', 'You have the right to:')}
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>{t('privacy.rights.item1', 'Access your personal data')}</li>
                <li>{t('privacy.rights.item2', 'Request deletion of your data')}</li>
                <li>{t('privacy.rights.item3', 'Opt out of analytics')}</li>
                <li>{t('privacy.rights.item4', 'Export your data')}</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t('privacy.contact.title', 'Contact Us')}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {t(
                  'privacy.contact.content',
                  'If you have questions about this privacy policy, please contact us at:'
                )}
              </p>
              <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300">
                  {t('email', 'Email')}:{' '}
                  <a
                    href={`mailto:${CONSTANTS.PRIVACY_EMAIL}`}
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400"
                  >
                    {CONSTANTS.PRIVACY_EMAIL}
                  </a>
                </p>
              </div>
            </section>
          </div>
        </Section>
      </ScreenContainer>
    </>
  );
}
