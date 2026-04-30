# karanpechori.dev — personal portfolio

Source for my personal portfolio site. Static SPA, deployed on Vercel.

**Live:** _add Vercel URL here once deployed_

## Stack

- **Vite 6** + **React 19** + **TypeScript**
- **Tailwind CSS v4** (via `@tailwindcss/vite` plugin — zero PostCSS config)
- Deployed on **Vercel**, auto-deploys from `main`

## Structure

```
src/
├── App.tsx              # layout + section composition
├── main.tsx             # React root
├── index.css            # Tailwind import + theme tokens
└── components/
    ├── Hero.tsx
    ├── About.tsx
    ├── Experience.tsx
    ├── Projects.tsx
    ├── Achievements.tsx
    ├── Contact.tsx
    └── Footer.tsx
```

Each section is a self-contained component with its own data array at the top of the file — easy to update without touching layout code.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle in dist/
npm run preview  # serve the built bundle locally
```

Requires Node 20.19+ or 22.12+ (or Node 22.4 with Vite pinned to v6, as configured here).

## Deploy

Pushes to `main` auto-deploy on Vercel. Pull requests get preview URLs.

To deploy a fresh fork:

1. Push to your own GitHub repo
2. Import on [vercel.com/new](https://vercel.com/new)
3. Defaults work — Vercel auto-detects Vite

## License

Personal project — no license. Feel free to use the structure as a reference.
