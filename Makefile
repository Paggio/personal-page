# ============================================================
#  Personal Page — Makefile
#  Quick reference:
#    make setup    — first-time setup (run this once)
#    make dev      — start local dev server
#    make build    — production build
#    make preview  — serve the production build locally
#    make clean    — remove installed packages and build output
# ============================================================

.PHONY: setup install dev build preview clean

# ── First-time setup ────────────────────────────────────────
# Installs npm dependencies, then adds all RetroUI components
# via the shadcn registry. Run this once after cloning.
setup: install
	npx shadcn@latest add "@retroui/button"  --yes
	npx shadcn@latest add "@retroui/badge"   --yes
	npx shadcn@latest add "@retroui/card"    --yes

# ── Install dependencies ────────────────────────────────────
# Equivalent to `npm install`. Run after any package.json change.
install:
	npm install

# ── Development server ──────────────────────────────────────
# Starts Vite with hot-module replacement at http://localhost:5173
dev:
	npm run dev

# ── Production build ────────────────────────────────────────
# Type-checks with TypeScript, then bundles with Vite.
# Output lands in the dist/ directory.
build:
	npm run build

# ── Preview production build ────────────────────────────────
# Serves the dist/ directory locally so you can verify the
# production output before deploying.
preview:
	npm run preview

# ── Clean ───────────────────────────────────────────────────
# Removes node_modules/ and dist/. After this, run `make setup`
# to restore a working environment.
clean:
	rm -rf node_modules dist
