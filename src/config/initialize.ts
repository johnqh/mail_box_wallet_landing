/**
 * @fileoverview Consolidated app initialization
 * @description Single entry point for all DI singletons and service initializations
 */

import { initializeFirebaseService, registerServiceWorker } from '@sudobility/di_web';
import { configureTheme } from '@sudobility/design';
import { defaultTheme } from '@sudobility/design/themes';

// Activate the design-system theme so `@sudobility/components` and the design
// utilities render theme-aware semantic classes (bg-primary, text-foreground, …)
// that resolve via the :root/.dark CSS variables in index.css +
// createTailwindPreset() in tailwind.config.js — enabling all design styles and
// light/dark.
configureTheme(defaultTheme);

/**
 * Initialize all app services and singletons.
 * Must be called before rendering the React app.
 *
 * Initialization order:
 * 1. Firebase DI service (analytics)
 * 2. i18n (imported separately)
 */
export function initializeApp(): void {
  // 1. Initialize Firebase DI service (analytics)
  initializeFirebaseService({
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
  });

  // 2. Register service worker
  registerServiceWorker();

  // 3. i18n is initialized via import in main.tsx
}
