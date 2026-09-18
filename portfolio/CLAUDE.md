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
- Required env vars (in `.env.local`): `RESEND_API_KEY`, `CONTACT_EMAIL`, `NEXT_PUBLIC_SITE_URL`. `npm run build` fails without `RESEND_API_KEY`, since `src/app/api/contact/route.js` constructs Resend at module scope.

## Adding a project

A project appears in two places, and both need updating: a summary card in the Projects section of `src/app/page.js`, and a full section in `src/app/projects/page.js` whose `id` matches the card's `/projects#<id>` link. Newest project goes first in both.

Each full section carries its media through `ProjectShowcase` (`videoSrc` plus an `images` array). Screenshots go in `public/demo/` as webp, demo videos in `public/videos/` as mp4 — convert large PNGs and gifs rather than committing them as-is. Verify any `@iconify` icon name against the Iconify API before using it; a wrong name renders as an invisible gap, not an error.
