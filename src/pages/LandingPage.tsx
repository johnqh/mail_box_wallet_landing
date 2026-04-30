import { useTranslation } from 'react-i18next';
import SEOHead from '../components/SEOHead';
import { buildHowToSchema } from '../components/buildHowToSchema';
import HeroSection from '../sections/HeroSection';
import FeaturesSection from '../sections/FeaturesSection';
import HowItWorksSection from '../sections/HowItWorksSection';
import FAQSection from '../sections/FAQSection';
import CTASection from '../sections/CTASection';

export default function LandingPage() {
  const { t } = useTranslation('landingPage');
  const { t: tHowTo } = useTranslation('howto');

  const seoTitle = t('seo.title');
  const seoDescription = t('seo.description');
  const seoKeywords = t('seo.keywords', { returnObjects: true }) as string[];

  const howToSchema = buildHowToSchema(
    tHowTo('home.name'),
    tHowTo('home.description'),
    tHowTo('home.steps', { returnObjects: true }) as { name: string; text: string }[]
  );

  return (
    <>
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
        structuredData={howToSchema}
      />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <FAQSection />
        <CTASection />
      </main>
    </>
  );
}
