# CLAUDE.md

Personal portfolio site. Next.js App Router, React 19, Tailwind CSS v4, JavaScript (no TypeScript). Deployed on Vercel.

## Commands

- `npm run dev` — dev server on localhost:3000
- `npm run build` — production build (run this to verify after non-trivial changes)
- `npm run lint` — ESLint

No tests configured; do not write or run them.

## Conventions

- Path alias: `@/*` → `./src/*`
- Tailwind v4 with theme defined in `src/app/globals.css` via `@theme inline`. Use semantic tokens (`text-primary`, `bg-primary/10`) — never raw hex. Dark mode is default; `.light` class on `<html>` toggles light mode.
- Browser-only libraries should be loaded via dynamic import with `ssr: false`.
- Required env vars (in `.env.local`): `RESEND_API_KEY`, `CONTACT_EMAIL`, `NEXT_PUBLIC_SITE_URL`.
