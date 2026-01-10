import { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useLanguage } from './context/LanguageContext';
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } from './constants/languages';
import LandingPage from './pages/LandingPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';

// Loading fallback
function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="animate-pulse text-gray-600 dark:text-gray-400">Loading...</div>
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

function App() {
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

export default App;
