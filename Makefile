.PHONY: help dev build lint clean install test

help:
	@echo "Dash Monorepo - Available commands:"
	@echo ""
	@echo "  make dev              Start playground dev server (HMR enabled)"
	@echo "  make build            Build UI library for distribution"
	@echo "  make build-all        Build all packages (library + playground)"
	@echo "  make lint             Lint the playground code"
	@echo "  make install          Install all dependencies"
	@echo "  make clean            Remove dist/ and build artifacts"
	@echo ""

dev:
	cd apps/playground && pnpm dev

build:
	cd packages/ui && pnpm build

build-all:
	cd apps/playground && pnpm build

lint:
	cd apps/playground && pnpm lint

install:
	pnpm install

clean:
	rm -rf packages/ui/dist
	rm -rf apps/playground/dist
	rm -rf node_modules
	find . -name "node_modules" -type d -prune -exec rm -rf {} \; 2>/dev/null || true
