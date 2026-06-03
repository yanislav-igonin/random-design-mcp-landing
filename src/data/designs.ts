import { Design01Page } from '../pages/Design01Page'
import { Design02Page } from '../pages/Design02Page'
import { Design03Page } from '../pages/Design03Page'
import { Design04Page } from '../pages/Design04Page'
import { Design05Page } from '../pages/Design05Page'
import type { DesignRoute } from '../types'

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

export const designs: DesignRoute[] = [
  {
    slug: 'design-01',
    navLabel: 'Design 01',
    summary: 'Far future pixel art',
    generationPrompt: design01Prompt,
    component: Design01Page,
  },
  {
    slug: 'design-02',
    navLabel: 'Design 02',
    summary: 'Rococo pop collage',
    generationPrompt: design02Prompt,
    component: Design02Page,
  },
  {
    slug: 'design-03',
    navLabel: 'Design 03',
    summary: 'Neon blueprint catalog',
    generationPrompt: design03Prompt,
    component: Design03Page,
  },
  {
    slug: 'design-04',
    navLabel: 'Design 04',
    summary: 'Space age dashboard',
    generationPrompt: design04Prompt,
    component: Design04Page,
  },
  {
    slug: 'design-05',
    navLabel: 'Design 05',
    summary: 'Alien academia grid',
    generationPrompt: design05Prompt,
    component: Design05Page,
  },
]
