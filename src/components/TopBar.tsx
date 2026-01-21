import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { AppTopBar, type MenuItemConfig } from '@sudobility/building_blocks';
import { useTheme, Theme } from '@sudobility/components';
import LocalizedLink from './LocalizedLink';
import { useLanguage } from '../context/LanguageContext';
import { addLanguageToPath, removeLanguageFromPath } from '../utils/languageRouting';
import type { SupportedLanguage } from '../constants/languages';
import { APP_NAME } from '../config/constants';

// Wrapper component to integrate LocalizedLink with AppTopBar
const LocalizedLinkWrapper: FC<{
  href: string;
  className?: string;
  children: React.ReactNode;
}> = ({ href, className, children }) => {
  return (
    <LocalizedLink to={href} className={className}>
      {children}
    </LocalizedLink>
  );
};

export default function TopBar() {
  const { t } = useTranslation('common');
  const { theme, setTheme } = useTheme();
  const { language, languages } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const isDark = theme === Theme.DARK;

  const toggleTheme = () => {
    setTheme(isDark ? Theme.LIGHT : Theme.DARK);
  };

  // Handle language change with URL routing
  const handleLanguageChange = useCallback(
    (langCode: string) => {
      const pathWithoutLang = removeLanguageFromPath(location.pathname);
      const newPath = addLanguageToPath(pathWithoutLang, langCode as SupportedLanguage);
      navigate(newPath + location.search + location.hash);
    },
    [location.pathname, location.search, location.hash, navigate]
  );

  // Convert languages to building_blocks format
  const languageConfigs = languages.map(lang => ({
    code: lang.code,
    name: lang.name,
    flag: lang.flag,
  }));

  // Empty menu items for landing page (no navigation needed)
  const menuItems: MenuItemConfig[] = [];

  // Render theme toggle button in account section
  const renderAccountSection = () => (
    <button
      type="button"
      onClick={toggleTheme}
      className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label={
        isDark
          ? t('theme.switchToLight', 'Switch to light mode')
          : t('theme.switchToDark', 'Switch to dark mode')
      }
    >
      {isDark ? (
        <SunIcon className="h-5 w-5" />
      ) : (
        <MoonIcon className="h-5 w-5" />
      )}
    </button>
  );

  return (
    <AppTopBar
      logo={{
        src: '/logo.png',
        appName: t('appName', APP_NAME),
        onClick: () => navigate(`/${language}`),
      }}
      menuItems={menuItems}
      languages={languageConfigs}
      currentLanguage={language}
      onLanguageChange={handleLanguageChange}
      LinkComponent={LocalizedLinkWrapper}
      sticky
      zIndex="highest"
      ariaLabel="Main navigation"
      renderAccountSection={renderAccountSection}
    />
  );
}
