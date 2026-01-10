import { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useLanguage } from './context/LanguageContext';
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } from './constants/languages';
import LandingPage from './pages/LandingPage';

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

function App() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        {/* Redirect root to language-prefixed route */}
        <Route path="/" element={<LanguageRedirect />} />

        {/* Language-prefixed routes */}
        {SUPPORTED_LANGUAGES.map(lang => (
          <Route key={lang} path={`/${lang}/*`} element={<LandingPage />} />
        ))}

        {/* Fallback - redirect unknown routes to default language */}
        <Route path="*" element={<Navigate to={`/${DEFAULT_LANGUAGE}`} replace />} />
      </Routes>
    </Suspense>
  );
}

export default App;
