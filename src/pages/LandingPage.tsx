import { useTranslation } from 'react-i18next';
import ScreenContainer from '../components/ScreenContainer';
import SEOHead from '../components/SEOHead';
import HeroSection from '../sections/HeroSection';
import FeaturesSection from '../sections/FeaturesSection';
import HowItWorksSection from '../sections/HowItWorksSection';
import FAQSection from '../sections/FAQSection';
import CTASection from '../sections/CTASection';

export default function LandingPage() {
  const { t } = useTranslation('landingPage');

  return (
    <>
      <SEOHead
        title={t('seo.title', 'Mail Box Wallet - Personal ID with Crypto Technologies')}
        description={t(
          'seo.description',
          'Secure crypto wallet and decentralized identity solution. Own your digital identity, manage assets across chains, and authenticate across Web3 seamlessly.'
        )}
        keywords={[
          'crypto wallet',
          'decentralized identity',
          'DID',
          'Web3',
          'blockchain',
          'ENS',
          'SNS',
          'self-sovereign identity',
        ]}
      />
      <ScreenContainer>
        <main>
          <HeroSection />
          <FeaturesSection />
          <HowItWorksSection />
          <FAQSection />
          <CTASection />
        </main>
      </ScreenContainer>
    </>
  );
}
