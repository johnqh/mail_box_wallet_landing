# mail-box-wallet-landing

Landing page for Signic ID -- the 0xMail crypto wallet and decentralized identity solution. A React single-page application with internationalization (16 languages), dark mode, RTL support, and SEO metadata. Deployed to Cloudflare Pages.

## Development

```bash
bun install
bun run dev             # Vite dev server (port 5177)
bun run build           # TypeScript check + Vite production build
bun run preview         # Preview production build
bun run lint            # ESLint
bun run format          # Prettier
bun run localize        # Generate translations for all languages
bun run localized       # Verify locale completeness
```

## Usage

The landing page is a standalone static site. It renders at `/:lang` with language auto-detection from URL, localStorage, or browser settings.

### Pages

| Route            | Description                                              |
| ---------------- | -------------------------------------------------------- |
| `/:lang`         | Main landing page (Hero, Features, HowItWorks, FAQ, CTA) |
| `/:lang/privacy` | Privacy policy                                           |
| `/:lang/terms`   | Terms of service                                         |

### Sections

HeroSection, FeaturesSection (6 feature cards), HowItWorksSection (4 steps), FAQSection (5 items), CTASection.

## Architecture

- React 19 + TypeScript + Vite 7
- Tailwind CSS 3 with dark mode (`class` strategy)
- i18next with 16 languages (en, ar, de, es, fr, it, ja, ko, pt, ru, sv, th, uk, vi, zh, zh-hant)
- Arabic RTL support
- Dependency stubs for unused `@sudobility/*` transitive deps
- Cloudflare Pages deployment via `wrangler.jsonc`

### Environment Variables

| Variable          | Purpose                             |
| ----------------- | ----------------------------------- |
| `VITE_APP_NAME`   | Display name (default: Signic ID)   |
| `VITE_APP_DOMAIN` | Primary domain (default: signic.id) |
| `VITE_CTA_URL`    | Target URL for CTA buttons          |
| `VITE_FIREBASE_*` | Firebase config for analytics       |

## Related Packages

- `@sudobility/building_blocks` -- shared app shell (SudobilityApp, AppTopBar)
- `@sudobility/components` -- UI components (Section, useTheme)
- `@sudobility/design` -- design tokens
- `@sudobility/di` / `@sudobility/di_web` -- dependency injection

## License

Private
