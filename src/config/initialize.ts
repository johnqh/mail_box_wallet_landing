/**
 * @fileoverview Consolidated app initialization
 * @description Single entry point for all DI singletons and service initializations
 */

import { initializeFirebaseService } from "@sudobility/di_web";

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

  // 2. i18n is initialized via import in main.tsx
}
