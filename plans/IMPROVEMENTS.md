# Improvement Plans for @sudobility/mail_box_wallet_landing

## Priority 1 - High Impact

### 1. Add Test Coverage for Landing Page Components
- The project has no test files. The 5 landing page sections (`HeroSection`, `FeaturesSection`, `HowItWorksSection`, `FAQSection`, `CTASection`), 5 shared components (`Footer`, `LocalizedLink`, `ScreenContainer`, `SEOHead`, `TopBar`), and 3 page components (`LandingPage`, `PrivacyPage`, `TermsPage`) should all have at least smoke tests verifying they render without errors. The `FAQSection` with its accordion behavior and the `LocalizedLink` with its external/anchor URL detection logic are particularly important to test.

### 2. Add Automated SEO Validation
- The `SEOHead` component generates `<title>`, Open Graph tags, and Twitter Card metadata. These are critical for social sharing and search ranking. Add tests that render `SEOHead` with various inputs and verify the correct meta tags are present in the document head. Also verify that canonical URLs are correctly generated for all 16 language variants to prevent duplicate content penalties.

## Priority 2 - Medium Impact

### 3. Add JSDoc to Sections and Components
- The section components (`HeroSection.tsx`, `FeaturesSection.tsx`, etc.) and utility modules (`languageRouting.ts`, `constants.ts`, `analytics.ts`) lack JSDoc documentation. Each section should document the translation keys it uses, its visual layout, and any configurable aspects. The `languageRouting.ts` utility should document its URL detection/manipulation logic.

### 4. Improve Stub Maintenance Strategy
- The `src/stubs/` directory contains 5 stub files that mock transitive dependencies of `@sudobility/building_blocks`. If the building_blocks package adds new exports that these stubs do not cover, the build will fail with cryptic import errors. Add a test that imports `building_blocks` and verifies all required stub exports exist, or consider using a more robust module aliasing strategy.

## Priority 3 - Nice to Have

### 5. Add Performance Monitoring for Core Web Vitals
- As a landing page, LCP (Largest Contentful Paint), CLS (Cumulative Layout Shift), and FID (First Input Delay) are critical metrics. The production build drops console/debugger statements and disables sourcemaps, but there is no web vitals measurement. Adding the `web-vitals` library (already used in the main `mail_box` app) with analytics reporting would provide ongoing performance visibility.

### 6. Add Animation Accessibility Controls
- The Tailwind config defines custom animations (`fade-in`, `fade-in-up`, `fade-in-scale`) used in landing page sections. Users with motion sensitivity may prefer reduced motion. Add a `prefers-reduced-motion` media query check that disables or simplifies animations for users who have enabled that OS setting.

### 7. Consolidate Language Constants Across Projects
- The `src/constants/languages.ts` file defines `SUPPORTED_LANGUAGES`, `LANGUAGE_NAMES`, `LANGUAGE_FLAGS`, and RTL detection. Similar language constants exist in `mail_box` and `mail_box_rn`. Consider extracting these into a shared package (perhaps within `@sudobility/types` or a dedicated `@sudobility/i18n`) to prevent drift between projects.
