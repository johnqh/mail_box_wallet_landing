import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Initialize all services BEFORE importing App
import { initializeApp } from './config/initialize';
initializeApp();

// Import App AFTER initialization
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
