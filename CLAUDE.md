# CLAUDE.md

## Project Overview

**mail-box-wallet-landing** - Landing page for the 0xMail wallet.

- **Type**: Web application (private)

## Package Manager

**This project uses Bun as the package manager.** Always use `bun` commands instead of `npm`:

```bash
# Install dependencies
bun install

# Run any script
bun run <script-name>
```

## Development Commands

```bash
bun run dev          # Start Vite dev server (port 5177)
bun run build        # TypeScript check + Vite build
bun run preview      # Preview production build (port 5177)
bun run lint         # Run ESLint
bun run lint:fix     # Auto-fix ESLint issues
bun run format       # Format with Prettier
bun run format:check # Check formatting
bun run localize     # Run localization scripts
```

## Architecture

- **Framework**: React 19 with TypeScript
- **Build**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router v7
- **i18n**: i18next with browser language detection
- **UI**: @sudobility/components + @sudobility/design system
- **Auth**: Firebase
