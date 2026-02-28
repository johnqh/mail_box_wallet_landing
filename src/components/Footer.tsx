import { useTranslation } from 'react-i18next';
import {
  AppFooter,
  AppFooterForHomePage,
  type FooterLinkSection,
} from '@sudobility/building_blocks';
import { APP_NAME, COMPANY_NAME } from '../config/constants';
import LocalizedLink from './LocalizedLink';

interface FooterProps {
  variant?: 'full' | 'compact';
}

const LinkWrapper = ({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <LocalizedLink to={href} className={className}>
    {children}
  </LocalizedLink>
);

const SOCIAL_LINKS = {
  twitterUrl: 'https://twitter.com/0xmail',
  discordUrl: 'https://discord.gg/0xmail',
  linkedinUrl: 'https://linkedin.com/company/0xmail',
  githubUrl: 'https://github.com/0xmail',
  telegramUrl: 'https://t.me/0xmail',
};

export default function Footer({ variant = 'compact' }: FooterProps) {
  const { t } = useTranslation('common');
  const currentYear = String(new Date().getFullYear());

  if (variant === 'compact') {
    return (
      <AppFooter
        copyrightYear={currentYear}
        companyName={COMPANY_NAME}
        companyUrl="/"
        links={[
          { label: t('footer.privacy', 'Privacy'), href: '/privacy' },
          { label: t('footer.terms', 'Terms'), href: '/terms' },
        ]}
        LinkComponent={LinkWrapper}
        sticky
      />
    );
  }

  const linkSections: FooterLinkSection[] = [
    {
      title: t('footer.product', 'Product'),
      links: [
        { label: t('appName', APP_NAME), href: '/' },
      ],
    },
    {
      title: t('footer.legal', 'Legal'),
      links: [
        { label: t('footer.privacy', 'Privacy'), href: '/privacy' },
        { label: t('footer.terms', 'Terms'), href: '/terms' },
      ],
    },
  ];

  return (
    <AppFooterForHomePage
      logo={{ appName: t('appName', APP_NAME) }}
      linkSections={linkSections}
      socialLinks={SOCIAL_LINKS}
      copyrightYear={currentYear}
      companyName={COMPANY_NAME}
      companyUrl="/"
      description={t(
        'footer.description',
        'Secure crypto wallet and decentralized identity solution.'
      )}
      LinkComponent={LinkWrapper}
      gridColumns={2}
    />
  );
}
