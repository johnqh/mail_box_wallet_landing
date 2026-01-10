// Application constants derived from environment variables

export const getConstants = (appName: string, appDomain: string) => {
  const baseUrl = `https://${appDomain}`;

  return {
    // Brand Names
    APP_NAME: appName,
    APP_DOMAIN: appDomain,

    // URLs
    BASE_URL: baseUrl,
    PRIVACY_URL: `${baseUrl}/privacy`,
    TERMS_URL: `${baseUrl}/terms`,

    // Contact Information
    CONTACT_EMAIL: 'info@sudobility.com',
    PRIVACY_EMAIL: 'privacy@sudobility.com',
    LEGAL_EMAIL: 'legal@sudobility.com',
  } as const;
};

// Export constants using environment variables
export const CONSTANTS = getConstants(
  import.meta.env.VITE_APP_NAME || 'Signic ID',
  import.meta.env.VITE_APP_DOMAIN || 'signic.id'
);

// Re-export individual constants for convenience
export const APP_NAME = CONSTANTS.APP_NAME;
export const APP_DOMAIN = CONSTANTS.APP_DOMAIN;
