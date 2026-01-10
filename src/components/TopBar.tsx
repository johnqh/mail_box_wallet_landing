import { useTranslation } from 'react-i18next';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import LocalizedLink from './LocalizedLink';
import LanguageSelector from './LanguageSelector';
import { useTheme } from '../context/ThemeContext';

export default function TopBar() {
  const { t } = useTranslation('common');
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <LocalizedLink to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">W</span>
            </div>
            <span className="font-bold text-lg text-gray-900 dark:text-white">
              {t('appName', 'Wallet')}
            </span>
          </LocalizedLink>

          {/* Right side - Language selector and theme toggle */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label={resolvedTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {resolvedTheme === 'dark' ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>
            <LanguageSelector variant="compact" />
          </div>
        </div>
      </div>
    </header>
  );
}
