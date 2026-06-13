# Using dash-ui Components

This guide explains how to import `dash-ui` components in your external project.

## Installation Options

### Option 1: Direct from GitHub Repository (Recommended for Development)

Install directly from the dash-master repository using git:

```bash
# Using pnpm
pnpm add github:edgar-treischl/dash-master/packages/ui

# Using npm
npm install github:edgar-treischl/dash-master/packages/ui

# Using yarn
yarn add github:edgar-treischl/dash-master/packages/ui
```

> **Note:** You must include `/packages/ui` because dash-master is a **monorepo**. The root directory only defines the workspace; the actual component library is in the `packages/ui` subdirectory.

**Import components:**
```typescript
import { BarPlot } from 'dash-ui'

<BarPlot data={schoolData} year="2024/25" />
```

**Using specific version or branch:**
```bash
# Install from specific branch
pnpm add github:edgar-treischl/dash-master/packages/ui#main

# Install from specific tag/release
pnpm add github:edgar-treischl/dash-master/packages/ui#v1.0.0
```

**Update to latest:**
```bash
pnpm update dash-ui
```

---

### Option 2: GitHub Packages Registry (Recommended for CI/CD)

For automated deployments and private installations, use GitHub Packages.

#### Setup (One-time)

1. **Create a Personal Access Token (PAT)** in GitHub:
   - Go to Settings → Developer settings → Personal access tokens → Tokens (classic)
   - Create new token with `read:packages` scope
   - Copy the token

2. **Create `.npmrc` file** in your project root:
   ```
   @edgar-treischl:registry=https://npm.pkg.github.com
   //npm.pkg.github.com/:_authToken=YOUR_PERSONAL_ACCESS_TOKEN
   ```

   Or set globally:
   ```bash
   npm config set @edgar-treischl:registry https://npm.pkg.github.com
   npm config set //npm.pkg.github.com/:_authToken YOUR_PERSONAL_ACCESS_TOKEN
   ```

#### Install from GitHub Packages

```bash
pnpm add @edgar-treischl/dash-ui
```

**Import components:**
```typescript
import { BarPlot } from '@edgar-treischl/dash-ui'

<BarPlot data={schoolData} year="2024/25" />
```

---

## Available Components

### BarPlot

Visualize school retention data with a horizontal bar chart.

**Props:**
```typescript
interface BarPlotProps {
  data: BarData[]      // Array of data points
  year: string         // School year (e.g., "2024/25")
  maxPercent?: number  // Optional: max percentage for scaling
}

interface BarData {
  type: SchoolType     // 'GS' | 'MS' | 'RS' | 'GY' | 'IGS'
  count: number        // Number of students
  percent: number      // Retention percentage
}
```

**Example:**
```typescript
import { BarPlot } from 'dash-ui'

function MyComponent() {
  const data = [
    { type: 'GS' as const, count: 150, percent: 45.2 },
    { type: 'MS' as const, count: 120, percent: 38.7 },
    { type: 'RS' as const, count: 89, percent: 28.5 },
  ]

  return <BarPlot data={data} year="2024/25" />
}
```

---

## Supported School Types

- **GS** - Grundschulen (Primary Schools)
- **MS** - Mittelschulen (Middle Schools)
- **RS** - Realschulen (Secondary Schools)
- **GY** - Gymnasien (Gymnasia)
- **IGS** - Integrierte Gesamtschulen (Integrated Comprehensive Schools)

---

## Requirements

- **React 19.0+** (peer dependency - must be installed in your project)
- **React-DOM 19.0+**

---

## Troubleshooting

### "Module not found" error

**Solution:** Ensure React 19+ is installed:
```bash
pnpm add react@^19.0.0 react-dom@^19.0.0
```

### GitHub Packages authentication fails

**Solutions:**
1. Verify your Personal Access Token (PAT) has `read:packages` scope
2. Check `.npmrc` has correct token and registry URL
3. Ensure username is correct: `@edgar-treischl` (not `@edgar` or `@dash-master`)

### Stale cache after updates

```bash
# Clear pnpm cache
pnpm store prune

# Reinstall dependencies
pnpm install --force
```

---

## Getting Updates

To receive updates when new components are released:

**Check latest version:**
```bash
# From GitHub repo
npm view dash-ui@latest version

# Or manually check: https://github.com/edgar-treischl/dash-master/releases
```

**Update to latest:**
```bash
pnpm update dash-ui@latest
```

---

## Development

To contribute improvements or report issues:

1. Fork the [dash-master repository](https://github.com/edgar-treischl/dash-master)
2. Create a feature branch
3. Make changes in `packages/ui/src`
4. Test in `apps/playground` (run `make dev`)
5. Submit a pull request

See [CONTRIBUTING](../../CONTRIBUTING.md) for detailed guidelines.
