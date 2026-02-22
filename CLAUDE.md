# mail-box-wallet-landing - AI Development Guide

## Overview

Landing page for the 0xMail / Signic ID product -- a crypto wallet and decentralized identity solution. Built as a React single-page application with full internationalization (16 languages), dark mode support, RTL language handling, and SEO metadata via `react-helmet-async`. Deployed to Cloudflare Pages as a static site.

- **Package name**: `mail-box-wallet-landing`
- **Version**: `1.0.63`
- **License**: Private (not published to npm)
- **Package manager**: **Bun** -- always use `bun` instead of `npm`/`yarn`/`pnpm`

## Project Structure

```
src/
  main.tsx                          # Entry point: initializes services, renders <App />
  App.tsx                           # Root component: SudobilityApp wrapper, React Router routes
  i18n.ts                           # i18next configuration (backend, language detection)
  index.css                         # Tailwind directives + global styles (scrollbar, RTL)
  vite-env.d.ts                     # Vite env type declarations (VITE_CTA_URL)
  components/
    Footer.tsx                      # Site footer with social links, copyright, legal links
    LocalizedLink.tsx               # Language-prefixed <Link> wrapper (handles external/anchor)
    ScreenContainer.tsx             # Page shell: TopBar + content + Footer
    SEOHead.tsx                     # <Helmet> with OG/Twitter meta, canonical, locale
    TopBar.tsx                      # Navigation bar: logo, language picker, theme toggle
  config/
    analytics.ts                    # Analytics singleton using Firebase via DI
    constants.ts                    # Brand constants from VITE_APP_NAME / VITE_APP_DOMAIN env vars
    initialize.ts                   # App bootstrap: Firebase init, service worker registration
  constants/
    languages.ts                    # SUPPORTED_LANGUAGES, names, flags, locale mappings, RTL list
  context/
    LanguageContext.tsx              # React context + provider for current language state
  pages/
    LandingPage.tsx                 # Main landing page (Hero + Features + HowItWorks + FAQ + CTA)
    PrivacyPage.tsx                 # Privacy policy page
    TermsPage.tsx                   # Terms of service page
  sections/
    HeroSection.tsx                 # Hero banner with gradient, CTA buttons, trust badges
    FeaturesSection.tsx             # 6-feature grid (wallet, identity, multi-chain, names, privacy, credentials)
    HowItWorksSection.tsx           # 4-step process (create, claim, add, use)
    FAQSection.tsx                  # Accordion FAQ (5 items)
    CTASection.tsx                  # Bottom call-to-action with gradient background
  stubs/
    auth_lib.ts                     # Stub: @sudobility/auth_lib (not used by landing page)
    devops-components.ts            # Stub: @sudobility/devops-components
    di_web.ts                       # Stub: @sudobility/di_web (Firebase/analytics no-ops)
    firebase-auth.ts                # Stub: firebase/auth
    subscription-components.ts      # Stub: @sudobility/subscription-components
  utils/
    languageRouting.ts              # URL language detection, path manipulation utilities
public/
  locales/{lang}/common.json        # Shared translations (footer, privacy, terms)
  locales/{lang}/landingPage.json   # Landing page translations (hero, features, FAQ, etc.)
  logo.png, favicon.ico, etc.       # Static assets and favicons
scripts/
  localization_verify.cjs           # Verifies all locale files have matching keys vs English
```

## Key Components

### Pages (routes)

| Route pattern        | Component      | Description                         |
|----------------------|----------------|-------------------------------------|
| `/`                  | (redirect)     | Redirects to `/{detected-language}` |
| `/:lang`             | `LandingPage`  | Main landing page                   |
| `/:lang/privacy`     | `PrivacyPage`  | Privacy policy                      |
| `/:lang/terms`       | `TermsPage`    | Terms of service                    |

### Shared Components

| Component          | Purpose                                                        |
|--------------------|----------------------------------------------------------------|
| `ScreenContainer`  | Full-page shell wrapping TopBar + content + Footer             |
| `TopBar`           | Uses `AppTopBar` from `@sudobility/building_blocks`; language picker + theme toggle |
| `Footer`           | Social links (Twitter, Discord, LinkedIn, GitHub, Telegram), legal links |
| `LocalizedLink`    | Wraps React Router `<Link>` to auto-prefix the current language |
| `SEOHead`          | Uses `react-helmet-async` for `<title>`, OG tags, Twitter card |

### Landing Page Sections (in order)

| Section              | Translation namespace key | Description                       |
|----------------------|---------------------------|-----------------------------------|
| `HeroSection`        | `hero.*`                  | Main banner, CTA, trust indicators |
| `FeaturesSection`    | `features.*`              | 6 feature cards in a grid          |
| `HowItWorksSection`  | `howItWorks.*`            | 4-step numbered flow               |
| `FAQSection`         | `faq.*`                   | Collapsible accordion (5 items)    |
| `CTASection`         | `cta.*`                   | Bottom CTA with gradient           |

## Development Commands

```bash
bun install                # Install dependencies
bun run dev                # Start Vite dev server (port 5177)
bun run build              # TypeScript check + Vite production build
bun run preview            # Preview production build (port 5177)
bun run lint               # Run ESLint (zero warnings threshold)
bun run lint:fix           # Auto-fix ESLint issues
bun run format             # Format with Prettier
bun run format:check       # Check formatting without writing
bun run localize           # Generate translations (uses ../workflows/scripts/localize.cjs)
bun run localized          # Verify all locale files have complete keys vs English
```

## Architecture / Patterns

### Initialization Order

1. `main.tsx` calls `initializeApp()` from `config/initialize.ts` (Firebase DI + service worker)
2. `i18n.ts` is imported and configures i18next
3. `App.tsx` renders `<SudobilityApp>` which wraps the app in shared providers (theme, helmet, router)
4. `initializeNetworkService()` is called at module scope in `App.tsx`

### Routing & Internationalization

- All routes are language-prefixed: `/:lang`, `/:lang/privacy`, `/:lang/terms`
- Language is detected from: URL path > localStorage > browser navigator
- `LanguageContext` provides `language`, `setLanguage`, `isRTL` to the entire app
- i18next uses two namespaces: `common` (shared UI strings) and `landingPage` (page-specific)
- 16 supported languages: en, ar, de, es, fr, it, ja, ko, pt, ru, sv, th, uk, vi, zh, zh-hant
- Arabic (`ar`) has RTL support; the `dir` attribute is set on `<html>` automatically

### Dependency Stubbing

Several `@sudobility/*` packages are transitive dependencies of `@sudobility/building_blocks` that are not needed by this landing page. Vite aliases in `vite.config.ts` redirect them to lightweight stubs in `src/stubs/` to avoid pulling in unused code (Firebase Auth, subscription components, devops components, di_web, auth_lib).

### Styling

- Tailwind CSS 3 with `darkMode: 'class'`
- Custom animations defined in `tailwind.config.js`: `fade-in`, `fade-in-up`, `fade-in-scale`
- Tailwind content paths include `@sudobility/components`, `@sudobility/building_blocks`, and `@sudobility/design` node_modules
- Prettier config: single quotes, trailing commas (es5), 100 char print width, no tabs

### Build & Deployment

- Vite with `@vitejs/plugin-react` and `@sudobility/di_web/vite` service worker plugin
- Production build: ESNext target, esbuild minification, console/debugger statements dropped, no sourcemaps
- Deployed to **Cloudflare Pages** (configured via `wrangler.jsonc`, serves `./dist`)
- CI runs via GitHub Actions (`.github/workflows/ci-cd.yml`) using a shared workflow from `johnqh/workflows`

### Environment Variables

| Variable                            | Purpose                                  |
|-------------------------------------|------------------------------------------|
| `VITE_APP_NAME`                     | Display name (default: `Signic ID`)      |
| `VITE_APP_DOMAIN`                   | Primary domain (default: `signic.id`)    |
| `VITE_CTA_URL`                      | Target URL for "Get Started" CTA buttons |
| `VITE_FIREBASE_API_KEY`             | Firebase config for analytics            |
| `VITE_FIREBASE_AUTH_DOMAIN`         | Firebase config                          |
| `VITE_FIREBASE_PROJECT_ID`          | Firebase config                          |
| `VITE_FIREBASE_STORAGE_BUCKET`      | Firebase config                          |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | Firebase config                          |
| `VITE_FIREBASE_APP_ID`             | Firebase config                          |
| `VITE_FIREBASE_MEASUREMENT_ID`     | Firebase config (GA measurement ID)      |

## Common Tasks

### Add a new landing page section

1. Create `src/sections/NewSection.tsx` using `useTranslation('landingPage')` and `<Section>` from `@sudobility/components`
2. Add translation keys to `public/locales/en/landingPage.json`
3. Import and add the section to `src/pages/LandingPage.tsx` in the desired order
4. Run `bun run localize` to propagate translations to all languages, then `bun run localized` to verify

### Add a new page (route)

1. Create `src/pages/NewPage.tsx` wrapping content in `<ScreenContainer>` and `<SEOHead>`
2. Add a new `<Route>` inside the `LanguageRoutes` function in `src/App.tsx`
3. Add any shared translation keys to `public/locales/en/common.json`

### Add a new supported language

1. Add the language code to `SUPPORTED_LANGUAGES` in `src/constants/languages.ts`
2. Add entries to `LANGUAGE_NAMES`, `LANGUAGE_FLAGS`, and `LANGUAGE_TO_LOCALE` in the same file
3. If RTL, add to `RTL_LANGUAGES`
4. Create `public/locales/{code}/common.json` and `landingPage.json`
5. Add the code to `expectedLanguages` in `scripts/localization_verify.cjs`
6. Run `bun run localize` to generate translations

### Modify branding

- Change `VITE_APP_NAME` and `VITE_APP_DOMAIN` in `.env.local` (or `.env`)
- Constants in `src/config/constants.ts` auto-derive from these env vars
- The `appName` translation key in `common.json` should also be updated for each locale

### Add a new FAQ item

1. Add a new key/object to `faq.items` in `public/locales/en/landingPage.json` with `question` and `answer`
2. Add the key string to the `FAQ_KEYS` array in `src/sections/FAQSection.tsx`
3. Run `bun run localize` to generate translations for all languages

## Peer / Key Dependencies

| Package                              | Role                                           |
|--------------------------------------|-------------------------------------------------|
| `react` / `react-dom` (^19.2)       | UI framework                                   |
| `react-router-dom` (^7.9)           | Client-side routing with language-prefixed URLs |
| `i18next` / `react-i18next`         | Internationalization (16 languages)            |
| `i18next-http-backend`              | Loads translation JSON files from `/locales/`  |
| `i18next-browser-languagedetector`  | Detects user language from path/localStorage/navigator |
| `@sudobility/building_blocks`       | Shared app shell (`SudobilityApp`, `AppTopBar`) |
| `@sudobility/components`            | UI components (`Section`, `useTheme`, `Theme`)  |
| `@sudobility/design`                | Design tokens consumed by Tailwind              |
| `@sudobility/di`                    | Dependency injection (`initializeNetworkService`) |
| `@sudobility/di_web`                | Firebase DI service + service worker (stubbed)  |
| `@sudobility/types`                 | Shared TypeScript types                         |
| `@sudobility/subscription_lib`      | Subscription types (transitive dependency)      |
| `@heroicons/react`                  | SVG icons (Sun, Moon, Sparkles, Chevron, etc.)  |
| `react-helmet-async`                | Document head management for SEO                |
| `class-variance-authority` / `clsx` / `tailwind-merge` | Utility-first CSS class composition |
| `firebase`                           | Analytics SDK (stubbed for landing page)        |
| `tailwindcss` (^3.4)                | Utility-first CSS framework                    |
| `vite` (^7.1)                        | Build tool and dev server                       |
| `typescript` (^5.9)                  | Type checking (strict mode, no unused locals)   |
| `eslint` (^9.37) + `prettier` (^3.7) | Linting and formatting                         |
