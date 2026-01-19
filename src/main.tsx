import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { I18nextProvider } from 'react-i18next';
import './index.css';

// Initialize all services BEFORE importing App
import { initializeApp } from './config/initialize';
initializeApp();

// Initialize i18n
import i18n from './i18n';

// Import components AFTER initialization
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <ThemeProvider>
            <LanguageProvider>
              <App />
            </LanguageProvider>
          </ThemeProvider>
        </BrowserRouter>
      </I18nextProvider>
    </HelmetProvider>
  </React.StrictMode>
);
