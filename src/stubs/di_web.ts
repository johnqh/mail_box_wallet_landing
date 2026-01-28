// Stub for @sudobility/di_web - not used by this landing page
import React from 'react';

export const InfoBanner: React.FC = () => null;
export const initialize = () => {};
export const initializeWeb = () => {};
export const initializeFirebaseService = () => {};
export const getFirebaseService = () => ({
  analytics: {
    isSupported: () => false,
    logEvent: () => {},
    setUserId: () => {},
  },
});
