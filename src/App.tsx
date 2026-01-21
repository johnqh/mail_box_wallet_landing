import { Suspense, type ReactNode } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { SudobilityApp } from '@sudobility/building_blocks';
import { initializeNetworkService } from '@sudobility/di';
import { useLanguage, LanguageProvider } from './context/LanguageContext';
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } from './constants/languages';
import LandingPage from './pages/LandingPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import i18n from './i18n';

// Initialize network service before app renders
initializeNetworkService();

// Loading fallback
function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="animate-pulse text-gray-600 dark:text-gray-400">
        Loading...
      </div>
    </div>
  );
}

// Language redirect component
function LanguageRedirect() {
  const { language } = useLanguage();
  return <Navigate to={`/${language}`} replace />;
}

// Routes for each language
function LanguageRoutes() {
  return (
    <Routes>
      <Route index element={<LandingPage />} />
      <Route path="privacy" element={<PrivacyPage />} />
      <Route path="terms" element={<TermsPage />} />
      <Route path="*" element={<LandingPage />} />
    </Routes>
  );
}

// App-specific providers
function AppProviders({ children }: { children: ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}

function AppRoutes() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        {/* Redirect root to language-prefixed route */}
        <Route path="/" element={<LanguageRedirect />} />

        {/* Language-prefixed routes */}
        {SUPPORTED_LANGUAGES.map(lang => (
          <Route key={lang} path={`/${lang}/*`} element={<LanguageRoutes />} />
        ))}

        {/* Fallback - redirect unknown routes to default language */}
        <Route path="*" element={<Navigate to={`/${DEFAULT_LANGUAGE}`} replace />} />
      </Routes>
    </Suspense>
  );
}

function App() {
  return (
    <SudobilityApp
      i18n={i18n}
      AppProviders={AppProviders}
      storageKeyPrefix="mailbox-wallet"
    >
      <AppRoutes />
    </SudobilityApp>
  );
}

export default App;
