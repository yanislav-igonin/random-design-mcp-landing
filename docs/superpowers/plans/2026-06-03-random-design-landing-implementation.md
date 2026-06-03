# Random Design Landing Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a Vite/React/Tailwind landing scaffold with five generated design routes for Random Design MCP.

**Architecture:** The app uses a shared router shell, a stable header, route metadata in a config module, shared product copy, five visually distinct page components, and one consistent prompt metadata block. Each design page consumes the same product content but renders it with markup and styling shaped by its generated prompt.

**Tech Stack:** Vite, React, React Router, Tailwind CSS v4, Vitest, Testing Library.

---

## File Structure

- Create: `package.json` via Vite scaffold; then modify scripts/dependencies for tests and routing.
- Create: `index.html` via Vite scaffold.
- Create: `vite.config.js` with React, Tailwind v4, and Vitest jsdom test config.
- Create: `src/main.jsx` as React app entry.
- Create: `src/App.jsx` for router and app shell.
- Create: `src/App.test.jsx` for route/header/prompt smoke tests.
- Create: `src/data/landingContent.js` for shared product copy.
- Create: `src/data/designs.js` for route metadata and full MCP prompts.
- Create: `src/components/Header.jsx` for shared navigation.
- Create: `src/components/PromptBlock.jsx` for stable prompt display.
- Create: `src/pages/Design01Page.jsx` through `src/pages/Design05Page.jsx` for generated designs.
- Create: `src/styles.css` for Tailwind import, base rules, prompt block, and page-specific effects.
- Modify: `.gitignore` from Vite scaffold if needed.

## Task 1: Scaffold App And Install Dependencies

**Files:**
- Create: `package.json`
- Create: `index.html`
- Create: `vite.config.js`
- Create: `src/main.jsx`
- Create: `src/styles.css`

- [ ] **Step 1: Scaffold Vite React in the current directory**

Run:

```bash
npm create vite@latest . -- --template react
```

Expected: Vite creates `package.json`, `index.html`, `src/`, and config files in the current workspace.

- [ ] **Step 2: Install runtime and test dependencies**

Run:

```bash
npm install
npm install react-router-dom @tailwindcss/vite tailwindcss
npm install -D vitest jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event
```

Expected: dependencies install and `package-lock.json` is created.

- [ ] **Step 3: Replace Vite config**

Write `vite.config.js`:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.js',
  },
})
```

- [ ] **Step 4: Add test setup**

Create `src/test/setup.js`:

```js
import '@testing-library/jest-dom/vitest'
```

- [ ] **Step 5: Replace base stylesheet**

Write `src/styles.css`:

```css
@import "tailwindcss";

:root {
  color: #111827;
  background: #f7f4ef;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
  scroll-behavior: smooth;
}

body {
  min-width: 320px;
  min-height: 100vh;
  margin: 0;
}

button,
a {
  touch-action: manipulation;
}
```

- [ ] **Step 6: Add package scripts**

Update `package.json` scripts:

```json
{
  "dev": "vite",
  "build": "vite build",
  "lint": "eslint .",
  "preview": "vite preview",
  "test": "vitest run",
  "test:watch": "vitest"
}
```

- [ ] **Step 7: Run initial build**

Run:

```bash
npm run build
```

Expected: build passes with default scaffold before app replacement.

## Task 2: Add Shared Data And Route Tests

**Files:**
- Create: `src/data/landingContent.js`
- Create: `src/data/designs.js`
- Create: `src/App.test.jsx`

- [ ] **Step 1: Add shared landing content**

Create `src/data/landingContent.js`:

```js
export const landingContent = {
  productName: 'Random Design MCP',
  eyebrow: 'Model Context Protocol server for design direction',
  heroTitle: 'Generate frontend design directions that do not look like the last one.',
  heroBody:
    'Random Design MCP returns structured visual prompts for landing pages, app screens, and interface experiments. Use it when you want a fresh direction without hand-picking a style first.',
  primaryCta: 'Inspect generation prompt',
  secondaryCta: 'Compare another design',
  benefits: [
    {
      title: 'Random, but usable',
      body: 'Compatible mode keeps the output practical for real frontend work while still changing era, palette, layout, typography, texture, and motion.',
    },
    {
      title: 'Prompt-first workflow',
      body: 'Each page stores the generated design prompt beside the implementation, so the source direction stays visible.',
    },
    {
      title: 'Fast batch exploration',
      body: 'Generate five variants now, add five more later, and compare them through stable routes.',
    },
    {
      title: 'Built for AI builders',
      body: 'The server gives agents and developers a compact design brief they can turn into working UI.',
    },
  ],
  process: [
    'Send product context to Random Design MCP.',
    'Receive a compatible randomized design direction.',
    'Build the same product story through a new visual system.',
  ],
  stats: [
    { value: '5', label: 'initial generated variants' },
    { value: '1', label: 'shared product narrative' },
    { value: '∞', label: 'future batches' },
  ],
}
```

- [ ] **Step 2: Add design metadata**

Create `src/data/designs.js` with five entries:

```js
import { Design01Page } from '../pages/Design01Page'
import { Design02Page } from '../pages/Design02Page'
import { Design03Page } from '../pages/Design03Page'
import { Design04Page } from '../pages/Design04Page'
import { Design05Page } from '../pages/Design05Page'

const design01Prompt = `# Design Direction

## Context
Product type: landing page for a Model Context Protocol server named Random Design
Audience: developers, designers, AI tool builders
Priority: five distinct compatible visual directions for the same product landing page

## Generated Parameters
Era: Far future
Style: Pixel art
Mood: Energetic
Palette: Black and red
Typography: Art Deco display
Shape language: Arched frames
Texture: Holographic foil
Density: High whitespace
Layout: Diagonal flow
Imagery: 3D clay objects
Motion: Elastic micro-interactions
Tone: Underground
Contrast: Editorial-interface contrast
Border treatment: Double-line borders
Lighting: Dramatic hard shadows
Material: Translucent plastic
Signature detail: Cropped corner brackets + Windowed desktop panels

## Constraints
- Avoid Generic SaaS gradients
- Avoid Ambiguous button labels

## Frontend Design Prompt
Create a frontend design using the direction above. Apply the generated visual language consistently while preserving usability, responsive behavior, accessible contrast, and clear hierarchy. Respect the supplied page context and avoid the listed anti-patterns.`

const design02Prompt = `# Design Direction

## Context
Product type: landing page for a Model Context Protocol server named Random Design
Audience: developers, designers, AI tool builders
Priority: five distinct compatible visual directions for the same product landing page

## Generated Parameters
Era: Rococo
Style: Pop art
Mood: Optimistic
Palette: Pastel candy colors
Typography: Humanist sans
Shape language: Circular systems
Texture: CRT scanlines
Density: Micro-detail rich
Layout: Masonry grid
Imagery: Collage cutouts
Motion: Ticker motion
Tone: Accessible
Contrast: Editorial-interface contrast
Border treatment: Glowing neon outlines
Lighting: Soft diffuse glow
Material: Stone
Signature detail: Dense footnotes

## Constraints
- Avoid Meaningless glass effects
- Avoid Repetitive card grids

## Frontend Design Prompt
Create a frontend design using the direction above. Apply the generated visual language consistently while preserving usability, responsive behavior, accessible contrast, and clear hierarchy. Respect the supplied page context and avoid the listed anti-patterns.`

const design03Prompt = `# Design Direction

## Context
Product type: landing page for a Model Context Protocol server named Random Design
Audience: developers, designers, AI tool builders
Priority: five distinct compatible visual directions for the same product landing page

## Generated Parameters
Era: Neon megacity
Style: Blueprint
Mood: Energetic
Palette: Amber terminal monochrome
Typography: Art Deco display
Shape language: Organic blobs
Texture: Brushed metal
Density: Editorial rhythm
Layout: Catalog grid
Imagery: Technical diagrams
Motion: Magnetic hover
Tone: Friendly
Contrast: Medium contrast
Border treatment: Double-line borders
Lighting: Golden-hour warmth
Material: Frosted glass
Signature detail: Oversized quotation marks

## Constraints
- Avoid Ambiguous button labels
- Avoid Unstructured spacing

## Frontend Design Prompt
Create a frontend design using the direction above. Apply the generated visual language consistently while preserving usability, responsive behavior, accessible contrast, and clear hierarchy. Respect the supplied page context and avoid the listed anti-patterns.`

const design04Prompt = `# Design Direction

## Context
Product type: landing page for a Model Context Protocol server named Random Design
Audience: developers, designers, AI tool builders
Priority: five distinct compatible visual directions for the same product landing page

## Generated Parameters
Era: Corporate utopia + Space Age
Style: Frutiger Aero
Mood: Optimistic
Palette: High-key white monochrome
Typography: Old-style serif
Shape language: Fluid curves
Texture: Photocopier artifacts
Density: Tight grid
Layout: Dashboard shell
Imagery: Generative particles
Motion: Expanding panels
Tone: Experimental
Contrast: Minimal-maximal contrast
Border treatment: Hand-drawn borders
Lighting: Glass refractions
Material: Plastic
Signature detail: Marquee ticker

## Constraints
- Avoid Generic SaaS gradients
- Avoid Unstructured spacing

## Frontend Design Prompt
Create a frontend design using the direction above. Apply the generated visual language consistently while preserving usability, responsive behavior, accessible contrast, and clear hierarchy. Respect the supplied page context and avoid the listed anti-patterns.`

const design05Prompt = `# Design Direction

## Context
Product type: landing page for a Model Context Protocol server named Random Design
Audience: developers, designers, AI tool builders
Priority: five distinct compatible visual directions for the same product landing page

## Generated Parameters
Era: Ancient alien civilization
Style: Dark academia
Mood: Precise
Palette: Industrial rust and steel
Typography: Sci-fi extended
Shape language: Soft rounded geometry
Texture: Perfectly clean surfaces
Density: Edge-to-edge
Layout: Strict Swiss grid
Imagery: Line art
Motion: Snappy interface feedback
Tone: Serious
Contrast: Editorial-interface contrast
Border treatment: Double-line borders
Lighting: Dramatic hard shadows
Material: Brushed steel
Signature detail: CRT scanlines

## Constraints
- Avoid Too many font families
- Avoid Random shadows

## Frontend Design Prompt
Create a frontend design using the direction above. Apply the generated visual language consistently while preserving usability, responsive behavior, accessible contrast, and clear hierarchy. Respect the supplied page context and avoid the listed anti-patterns.`

export const designs = [
  { slug: 'design-01', navLabel: 'Design 01', summary: 'Far future pixel art', generationPrompt: design01Prompt, component: Design01Page },
  { slug: 'design-02', navLabel: 'Design 02', summary: 'Rococo pop collage', generationPrompt: design02Prompt, component: Design02Page },
  { slug: 'design-03', navLabel: 'Design 03', summary: 'Neon blueprint catalog', generationPrompt: design03Prompt, component: Design03Page },
  { slug: 'design-04', navLabel: 'Design 04', summary: 'Space age dashboard', generationPrompt: design04Prompt, component: Design04Page },
  { slug: 'design-05', navLabel: 'Design 05', summary: 'Alien academia grid', generationPrompt: design05Prompt, component: Design05Page },
]
```

- [ ] **Step 3: Write route smoke tests before implementation**

Create `src/App.test.jsx`:

```jsx
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { App } from './App'
import { designs } from './data/designs'

function renderAt(path) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  )
}

describe('Random Design landing routes', () => {
  it('renders five navigation links', () => {
    renderAt('/design-01')

    for (const design of designs) {
      expect(screen.getByRole('link', { name: design.navLabel })).toHaveAttribute(
        'href',
        `/${design.slug}`,
      )
    }
  })

  it('redirects root to Design 01 content', () => {
    renderAt('/')

    expect(screen.getByRole('heading', { name: /Random Design MCP/i })).toBeInTheDocument()
    expect(screen.getByText(/Far future pixel art/i)).toBeInTheDocument()
  })

  it.each(designs)('renders %s with prompt block', (design) => {
    renderAt(`/${design.slug}`)

    expect(screen.getByRole('heading', { name: /Random Design MCP/i })).toBeInTheDocument()
    expect(screen.getByText(design.summary)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Generation Prompt/i })).toBeInTheDocument()
    expect(screen.getByText(/Frontend Design Prompt/i)).toBeInTheDocument()
  })
})
```

- [ ] **Step 4: Run tests and verify failure**

Run:

```bash
npm test
```

Expected: tests fail because `src/App.jsx` and page components are not implemented yet.

## Task 3: Implement Router Shell, Header, Prompt Block, And Placeholder Pages

**Files:**
- Create: `src/App.jsx`
- Create: `src/components/Header.jsx`
- Create: `src/components/PromptBlock.jsx`
- Create: `src/pages/Design01Page.jsx`
- Create: `src/pages/Design02Page.jsx`
- Create: `src/pages/Design03Page.jsx`
- Create: `src/pages/Design04Page.jsx`
- Create: `src/pages/Design05Page.jsx`
- Modify: `src/main.jsx`

- [ ] **Step 1: Implement shared header**

Create `src/components/Header.jsx`:

```jsx
import { NavLink } from 'react-router-dom'
import { designs } from '../data/designs'

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-900/10 bg-neutral-950 text-white shadow-lg shadow-black/10">
      <nav className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <NavLink to="/design-01" className="font-mono text-sm font-bold uppercase tracking-[0.16em]">
          Random Design MCP
        </NavLink>
        <div className="flex gap-2 overflow-x-auto pb-1 sm:pb-0">
          {designs.map((design) => (
            <NavLink
              key={design.slug}
              to={`/${design.slug}`}
              className={({ isActive }) =>
                [
                  'shrink-0 border px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition',
                  isActive
                    ? 'border-white bg-white text-neutral-950'
                    : 'border-white/20 text-white/72 hover:border-white/70 hover:text-white',
                ].join(' ')
              }
            >
              {design.navLabel}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  )
}
```

- [ ] **Step 2: Implement prompt block**

Create `src/components/PromptBlock.jsx`:

```jsx
export function PromptBlock({ prompt }) {
  return (
    <section className="border-t border-neutral-800 bg-neutral-950 px-4 py-10 text-neutral-100 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-red-300">MCP output</p>
            <h2 className="mt-2 text-2xl font-black tracking-tight">Generation Prompt</h2>
          </div>
          <p className="max-w-xl text-sm text-neutral-400">
            Stable metadata block. Same treatment on every route for readable comparison.
          </p>
        </div>
        <pre className="max-h-[34rem] overflow-auto border border-neutral-700 bg-black p-4 text-xs leading-6 text-neutral-200 shadow-2xl shadow-black/30">
          <code>{prompt}</code>
        </pre>
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Implement app router**

Create `src/App.jsx`:

```jsx
import { Navigate, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { PromptBlock } from './components/PromptBlock'
import { designs } from './data/designs'

export function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/design-01" replace />} />
        {designs.map((design) => {
          const Page = design.component
          return (
            <Route
              key={design.slug}
              path={`/${design.slug}`}
              element={
                <>
                  <Page design={design} />
                  <PromptBlock prompt={design.generationPrompt} />
                </>
              }
            />
          )
        })}
        <Route path="*" element={<Navigate to="/design-01" replace />} />
      </Routes>
    </div>
  )
}
```

- [ ] **Step 4: Replace app entry**

Write `src/main.jsx`:

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
import './styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
```

- [ ] **Step 5: Add minimal page files for red-green routing**

Each page file starts as a minimal working route target. Create `src/pages/Design01Page.jsx` through `src/pages/Design05Page.jsx`, changing the exported function name and shell class for each file.

Example `src/pages/Design01Page.jsx`:

```jsx
import { landingContent } from '../data/landingContent'

export function Design01Page({ design }) {
  return (
    <main className="min-h-[calc(100vh-73px)] bg-neutral-100 px-4 py-16 text-neutral-950 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-5xl">
        <p className="font-mono text-sm uppercase tracking-[0.2em]">{design.summary}</p>
        <h1 className="mt-6 max-w-4xl text-5xl font-black tracking-tight sm:text-7xl">
          {landingContent.productName}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8">{landingContent.heroBody}</p>
      </section>
    </main>
  )
}
```

- [ ] **Step 6: Run route tests**

Run:

```bash
npm test
```

Expected: tests pass with minimal route pages.

## Task 4: Implement Five Generated Design Pages

**Files:**
- Modify: `src/pages/Design01Page.jsx`
- Modify: `src/pages/Design02Page.jsx`
- Modify: `src/pages/Design03Page.jsx`
- Modify: `src/pages/Design04Page.jsx`
- Modify: `src/pages/Design05Page.jsx`
- Modify: `src/styles.css`

- [ ] **Step 1: Implement Design 01**

Replace `src/pages/Design01Page.jsx` with a far-future pixel-art black/red landing composition. It must render `landingContent.productName`, `landingContent.heroTitle`, every benefit, and `design.summary`.

- [ ] **Step 2: Implement Design 02**

Replace `src/pages/Design02Page.jsx` with a rococo/pop-art pastel collage and masonry-like composition. It must render the same shared content and `design.summary`.

- [ ] **Step 3: Implement Design 03**

Replace `src/pages/Design03Page.jsx` with a neon blueprint amber terminal catalog composition. It must render the same shared content and `design.summary`.

- [ ] **Step 4: Implement Design 04**

Replace `src/pages/Design04Page.jsx` with a high-key white Frutiger Aero dashboard-shell composition. It must render the same shared content and `design.summary`.

- [ ] **Step 5: Implement Design 05**

Replace `src/pages/Design05Page.jsx` with an ancient-alien dark-academia rust/steel strict-grid composition. It must render the same shared content and `design.summary`.

- [ ] **Step 6: Add CSS effects**

Append to `src/styles.css` page-specific classes for scanlines, grids, marquees, material textures, and reduced-motion safety:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
  }
}
```

- [ ] **Step 7: Run tests after design replacement**

Run:

```bash
npm test
```

Expected: all route smoke tests pass.

## Task 5: Verify Build And Browser Behavior

**Files:**
- Modify only if verification finds defects.

- [ ] **Step 1: Run production build**

Run:

```bash
npm run build
```

Expected: Vite production build completes with no errors.

- [ ] **Step 2: Start local dev server**

Run:

```bash
npm run dev -- --host 127.0.0.1
```

Expected: Vite reports a local URL, usually `http://127.0.0.1:5173/`.

- [ ] **Step 3: Inspect browser routes**

Open:

```text
http://127.0.0.1:5173/design-01
http://127.0.0.1:5173/design-02
http://127.0.0.1:5173/design-03
http://127.0.0.1:5173/design-04
http://127.0.0.1:5173/design-05
```

Expected:

- header links work on every route
- each route has same Random Design MCP content
- each route has a distinct generated design treatment
- each route ends with Generation Prompt
- no obvious overlap at desktop width

- [ ] **Step 4: Inspect mobile width**

Use browser viewport around `390x844`.

Expected:

- header links scroll horizontally or wrap without overlap
- hero text fits
- prompt block scrolls horizontally inside `pre`
- no CTA or benefit text escapes its container

- [ ] **Step 5: Final verification commands**

Run:

```bash
npm test
npm run build
```

Expected: both pass.

## Self-Review

- Spec coverage: stack, five routes, identical content, prompt block, generated prompt storage, expansion path, accessibility, and verification are covered.
- Placeholder scan: no TODO/TBD placeholders remain. Task 4 must replace each page with complete file contents during execution, using the generated prompts and the shared content requirements in this plan.
- Type consistency: `design.slug`, `design.navLabel`, `design.summary`, `design.generationPrompt`, and `design.component` are used consistently across config, router, header, tests, and pages.
- Repository note: commit steps are omitted because the workspace is not currently a git repository.
