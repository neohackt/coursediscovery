# AGENTS.md

TanStack Start + React 19 app (`tanstack_start_ts`), Lovable-generated AI learning marketing site. Bun-managed. Bundled by Vite 7 via `@lovable.dev/vite-tanstack-config`; SSR via Nitro (default Cloudflare target). No test suite.

## Commands (use `bun`)

- `bun dev` / `bun build` / `bun build:dev` / `bun preview` — Vite scripts in `package.json`
- `bun lint` — ESLint 9 flat config (`eslint.config.js`)
- `bun format` — Prettier
- No `typecheck` script. To typecheck: `bun x tsc --noEmit` (tsconfig is `tsconfig.json`, strict, `@/*` -> `src/*`).

## Hard constraints (read before editing)

- **`vite.config.ts` is fully owned by the Lovable preset.** The comment in the file lists every plugin it already injects (TanStack Start, React, Tailwind, tsconfig-paths, Nitro, etc.). Do not re-add them or the build breaks with duplicate plugins. Add extras via `defineConfig({ vite: { ... } })` only.
- **Server entry is `src/server.ts`**, wired via `tanstackStart: { server: { entry: "server" } }`. It wraps `@tanstack/react-start/server-entry` to convert h3-swallowed 500s into a rendered error page (`src/lib/error-page.ts`, `src/lib/error-capture.ts`). Keep `src/server.ts` exporting a default `{ fetch }` handler.
- **Do not import `server-only`.** ESLint blocks it (`eslint.config.js`). Use `*.server.ts` filename convention or `@tanstack/react-start/server-only` instead.
- **Routes are file-based under `src/routes/`.** No `src/pages/`, no `app/`. The only root layout is `__root.tsx` — keep `<Outlet />` and `<Scripts />` in `RootShell`, and `<Outlet />` inside `QueryClientProvider` in `RootComponent`. Conventions:
  - `index.tsx` -> `/`
  - `$id.tsx` -> `/:id` (bare `$`, not `{$id}` or `:id`)
  - `$.tsx` -> splat; read via `_splat` search param, not `*`
  - `_layout.tsx` -> layout route
  - Full table: `src/routes/README.md`
- **`src/routeTree.gen.ts` is auto-generated** by `@tanstack/router-plugin`. Don't edit it. Ignored by Prettier.
- **Bun supply-chain guard** (`bunfig.toml`): versions <24h old are skipped. `@lovable.dev/*` are pre-excluded; confirm with the user before adding other entries.

## Layout

- `src/routes/` — file-based routes
- `src/components/` — page sections (Navbar, Hero, …) and shadcn `ui/`
- `src/lib/` — utilities, constants, error capture/reporting, `utils.ts` (cn helper)
- `src/hooks/` — shared hooks
- `src/assets/` — static assets
- `src/styles.css` — Tailwind v4 entry (slate base, CSS variables, `tw-animate-css`)

## shadcn (new-york style, `components.json`)

- `components` -> `@/components`, `ui` -> `@/components/ui`
- `lib` -> `@/lib`, `utils` -> `@/lib/utils`
- `hooks` -> `@/hooks`
- Icons: `lucide-react`
