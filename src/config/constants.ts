// Application constants derived from environment variables

export const getConstants = (appName: string, appDomain: string, companyName: string) => {
  const baseUrl = `https://${appDomain}`;
  const companyDomain = `${companyName.toLowerCase()}.com`;

  return {
    // Brand Names
    APP_NAME: appName,
    APP_DOMAIN: appDomain,
    COMPANY_NAME: companyName,

    // URLs
    BASE_URL: baseUrl,
    PRIVACY_URL: `${baseUrl}/privacy`,
    TERMS_URL: `${baseUrl}/terms`,

    // Contact Information
    CONTACT_EMAIL: `info@${companyDomain}`,
    PRIVACY_EMAIL: `privacy@${companyDomain}`,
    LEGAL_EMAIL: `legal@${companyDomain}`,
  } as const;
};

// Export constants using environment variables
export const CONSTANTS = getConstants(
  import.meta.env.VITE_APP_NAME || 'Signic ID',
  import.meta.env.VITE_APP_DOMAIN || 'signic.id',
  import.meta.env.VITE_COMPANY_NAME || 'Sudobility',
);

// Re-export individual constants for convenience
export const APP_NAME = CONSTANTS.APP_NAME;
export const APP_DOMAIN = CONSTANTS.APP_DOMAIN;
export const COMPANY_NAME = CONSTANTS.COMPANY_NAME;
