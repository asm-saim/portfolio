# AGENTS.md

Personal portfolio SPA: React 19 + Vite + Tailwind CSS 4, deployed on Vercel (`.vercel/`). No test suite.

## Commands

- `npm run dev` — dev server (`vite`)
- `npm run lint` — ESLint (flat config; the only check — no typecheck, no tests)
- `npm run build` — production build to `dist/`
- `npm run preview` — serve the build locally

## Routing (non-obvious)

- React Router 8 data router: `createBrowserRouter` in `src/Routes/Routes.jsx`, rendered via `<RouterProvider router={...}>` from `react-router/dom` in `src/main.jsx`. **`src/App.jsx` is unused/dead** — edits there have no effect.
- Routes use the `Component:` entry property (e.g. `Component: Home`), not `element={<Home />}`.
- `Root` layout gates `<Outlet>` on `navigation.state === "loading"` and shows a spinner — route pending/loading states come from data-router loaders.
- Page section titles use Python-style decoration: `< span className="text-blue-400">{\"<\"}< ... {\" />\"}` — match this style on new pages.

## Styling

- Tailwind 4 via `@tailwindcss/vite` — **no `tailwind.config.js`**; configure through CSS in `src/index.css`.
- DaisyUI 5 is loaded with `@plugin "daisyui";` inside `src/index.css`, not as a Vite/React plugin.
- Dark theme is forced via `color-scheme: dark` in `src/index.css` — design for dark backgrounds only.

## Content & conventions

- Projects on the Projects page are data-driven from `src/projects-data/projects-data.json`; card images live in `public/projects-img/`. Add a project there, not in JSX.
- Each page sets its own `<title>` and meta description with the `<PageMeta>` component (it renders `null`; settings from `index.html` are only fallbacks).
- One component per folder, PascalCase folder and file: `src/components/Name/Name.jsx`.
- ESLint enforces react-hooks rules and `react-refresh/only-export-components` — don't export constants/helpers from component files.
