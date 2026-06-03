import { Design01Page } from '../pages/Design01Page'
import { Design02Page } from '../pages/Design02Page'
import { Design03Page } from '../pages/Design03Page'
import { Design04Page } from '../pages/Design04Page'
import { Design05Page } from '../pages/Design05Page'
import { Design06Page } from '../pages/Design06Page'
import { Design07Page } from '../pages/Design07Page'
import { Design08Page } from '../pages/Design08Page'
import { Design09Page } from '../pages/Design09Page'
import { Design10Page } from '../pages/Design10Page'
import { Design11Page } from '../pages/Design11Page'
import { Design12Page } from '../pages/Design12Page'
import { Design13Page } from '../pages/Design13Page'
import { Design14Page } from '../pages/Design14Page'
import { Design15Page } from '../pages/Design15Page'
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

const design06Prompt = `# Design Direction

## Context
Product type: landing page for a Model Context Protocol server named Random Design
Audience: developers, designers, AI tool builders
Priority: five additional incompatible chaotic visual directions for the same product landing page

## Generated Parameters
Era: 1970s retro
Style: Blueprint
Mood: Cinematic
Palette: Neon city night
Typography: Mixed grotesk and display
Shape language: Torn-paper edges
Texture: VHS noise
Density: Balanced
Layout: Strict Swiss grid
Imagery: 3D chrome objects
Motion: Layered depth movement
Tone: Technical
Contrast: Muted with one loud accent
Border treatment: Dashed technical borders
Lighting: Volumetric haze
Material: Newsprint
Signature detail: Ornamental dividers

## Constraints
- Avoid Meaningless glass effects
- Avoid Gratuitous animation

## Frontend Design Prompt
Create a frontend design using the direction above. Apply the generated visual language consistently while preserving usability, responsive behavior, accessible contrast, and clear hierarchy. Respect the supplied page context and avoid the listed anti-patterns.`

const design07Prompt = `# Design Direction

## Context
Product type: landing page for a Model Context Protocol server named Random Design
Audience: developers, designers, AI tool builders
Priority: five additional incompatible chaotic visual directions for the same product landing page

## Generated Parameters
Era: Dark fantasy kingdom + Corporate utopia
Style: Swiss design
Mood: Curious
Palette: Paper white and ink black
Typography: Old-style serif
Shape language: Asymmetric cutouts
Texture: Fine film grain
Density: Balanced
Layout: Split screen
Imagery: Documentary photography
Motion: Snappy interface feedback
Tone: Optimistic
Contrast: Soft tonal contrast
Border treatment: Ornamental frames
Lighting: Underexposed low key
Material: Concrete
Signature detail: Diagram arrows

## Constraints
- Avoid Generic SaaS gradients
- Avoid Meaningless glass effects

## Frontend Design Prompt
Create a frontend design using the direction above. Apply the generated visual language consistently while preserving usability, responsive behavior, accessible contrast, and clear hierarchy. Respect the supplied page context and avoid the listed anti-patterns.`

const design08Prompt = `# Design Direction

## Context
Product type: landing page for a Model Context Protocol server named Random Design
Audience: developers, designers, AI tool builders
Priority: five additional incompatible chaotic visual directions for the same product landing page

## Generated Parameters
Era: Industrial dystopia
Style: De Stijl + Neumorphism
Mood: Energetic
Palette: Victorian jewel tones
Typography: Comic lettering
Shape language: Arched frames
Texture: Rough paper fibers
Density: Airy
Layout: Split screen
Imagery: Generative particles
Motion: Mechanical transitions
Tone: Experimental
Contrast: Low contrast
Border treatment: Art Deco frames
Lighting: Flat even lighting
Material: Chrome
Signature detail: Giant section numbers + Chrome orb

## Constraints
- Avoid Overloaded hero copy
- Avoid Tiny primary actions

## Frontend Design Prompt
Create a frontend design using the direction above. Apply the generated visual language consistently while preserving usability, responsive behavior, accessible contrast, and clear hierarchy. Respect the supplied page context and avoid the listed anti-patterns.`

const design09Prompt = `# Design Direction

## Context
Product type: landing page for a Model Context Protocol server named Random Design
Audience: developers, designers, AI tool builders
Priority: five additional incompatible chaotic visual directions for the same product landing page

## Generated Parameters
Era: Neon megacity
Style: Cottagecore
Mood: Nostalgic
Palette: Soft lavender and slate
Typography: Newspaper headline
Shape language: Strict rectangles
Texture: Pixel dithering
Density: Dashboard-dense
Layout: Sidebar workspace
Imagery: Studio product photography
Motion: CRT flicker
Tone: Poetic
Contrast: Minimal-maximal contrast
Border treatment: Pixel borders
Lighting: Rim lighting
Material: Plastic
Signature detail: Dense footnotes

## Constraints
- Avoid Tiny primary actions
- Avoid Gratuitous animation

## Frontend Design Prompt
Create a frontend design using the direction above. Apply the generated visual language consistently while preserving usability, responsive behavior, accessible contrast, and clear hierarchy. Respect the supplied page context and avoid the listed anti-patterns.`

const design10Prompt = `# Design Direction

## Context
Product type: landing page for a Model Context Protocol server named Random Design
Audience: developers, designers, AI tool builders
Priority: five additional incompatible chaotic visual directions for the same product landing page

## Generated Parameters
Era: Near future + Rococo
Style: Blueprint
Mood: Intimate
Palette: Cobalt and lemon
Typography: Monospace technical
Shape language: Brutalist blocks
Texture: Subtle gradient mesh
Density: Dashboard-dense
Layout: Layered collage
Imagery: 3D chrome objects
Motion: Glitch bursts
Tone: Provocative
Contrast: Vintage-future contrast
Border treatment: Double-line borders
Lighting: No lighting effects
Material: Cardboard
Signature detail: Sticker clusters

## Constraints
- Avoid Inconsistent icon styles
- Avoid Hidden navigation

## Frontend Design Prompt
Create a frontend design using the direction above. Apply the generated visual language consistently while preserving usability, responsive behavior, accessible contrast, and clear hierarchy. Respect the supplied page context and avoid the listed anti-patterns.`

const design11Prompt = `# Design Direction

## Context
Product type: landing page for a Model Context Protocol server named Random Design
Audience: developers, designers, AI tool builders
Priority: five more incompatible chaotic visual directions for the same product landing page

## Generated Parameters
Era: Frutiger Aero + Roman Empire
Style: Terminal UI + Grunge
Mood: Focused
Palette: Vaporwave pink and cyan
Typography: Rounded sans
Shape language: Mechanical joints
Texture: Pixel dithering
Density: Dashboard-dense
Layout: Strict Swiss grid
Imagery: 3D clay objects
Motion: Expanding panels
Tone: Irreverent
Contrast: Matte-gloss contrast
Border treatment: Inset panel borders
Lighting: Cold fluorescent
Material: Chrome
Signature detail: Chrome orb

## Constraints
- Avoid Long unreadable line lengths
- Avoid Unstructured spacing

## Frontend Design Prompt
Create a frontend design using the direction above. Apply the generated visual language consistently while preserving usability, responsive behavior, accessible contrast, and clear hierarchy. Respect the supplied page context and avoid the listed anti-patterns.`

const design12Prompt = `# Design Direction

## Context
Product type: landing page for a Model Context Protocol server named Random Design
Audience: developers, designers, AI tool builders
Priority: five more incompatible chaotic visual directions for the same product landing page

## Generated Parameters
Era: 16-bit console
Style: Graffiti-inspired + Monochrome photography
Mood: Eccentric
Palette: Art Deco black and champagne
Typography: Sci-fi extended
Shape language: Hexagonal motifs
Texture: Rough paper fibers
Density: Editorial rhythm
Layout: Technical schematic
Imagery: Collage cutouts
Motion: Elastic micro-interactions
Tone: Institutional
Contrast: Warm-cold contrast
Border treatment: Dashed technical borders
Lighting: No lighting effects
Material: Translucent plastic
Signature detail: Blueprint measurement marks

## Constraints
- Avoid Too many font families
- Avoid Low-contrast body text

## Frontend Design Prompt
Create a frontend design using the direction above. Apply the generated visual language consistently while preserving usability, responsive behavior, accessible contrast, and clear hierarchy. Respect the supplied page context and avoid the listed anti-patterns.`

const design13Prompt = `# Design Direction

## Context
Product type: landing page for a Model Context Protocol server named Random Design
Audience: developers, designers, AI tool builders
Priority: five more incompatible chaotic visual directions for the same product landing page

## Generated Parameters
Era: Dot-com futurism + Web 1.0
Style: Terminal UI + Swiss design
Mood: Otherworldly
Palette: Paper white and ink black
Typography: Oversized numerals
Shape language: Organic blobs
Texture: Rough paper fibers
Density: Card-heavy
Layout: Bento grid
Imagery: Documentary photography
Motion: Diagram drawing animation
Tone: Poetic
Contrast: Vintage-future contrast
Border treatment: Hand-drawn borders
Lighting: Neon bloom
Material: Ink
Signature detail: Diagram arrows

## Constraints
- Avoid Hidden navigation
- Avoid Stock photography

## Frontend Design Prompt
Create a frontend design using the direction above. Apply the generated visual language consistently while preserving usability, responsive behavior, accessible contrast, and clear hierarchy. Respect the supplied page context and avoid the listed anti-patterns.`

const design14Prompt = `# Design Direction

## Context
Product type: landing page for a Model Context Protocol server named Random Design
Audience: developers, designers, AI tool builders
Priority: five more incompatible chaotic visual directions for the same product landing page

## Generated Parameters
Era: Medieval
Style: Comic-book
Mood: Authoritative
Palette: Chocolate and mint
Typography: High-contrast Didone
Shape language: Hexagonal motifs
Texture: Photocopier artifacts
Density: Compact
Layout: Staggered blocks
Imagery: Oversized typography as imagery
Motion: Smooth page morphs
Tone: Irreverent
Contrast: Extreme black-white contrast
Border treatment: No borders
Lighting: Bioluminescent glow
Material: Plastic
Signature detail: CRT scanlines + Chrome orb

## Constraints
- Avoid Tiny primary actions
- Avoid Meaningless glass effects

## Frontend Design Prompt
Create a frontend design using the direction above. Apply the generated visual language consistently while preserving usability, responsive behavior, accessible contrast, and clear hierarchy. Respect the supplied page context and avoid the listed anti-patterns.`

const design15Prompt = `# Design Direction

## Context
Product type: landing page for a Model Context Protocol server named Random Design
Audience: developers, designers, AI tool builders
Priority: five more incompatible chaotic visual directions for the same product landing page

## Generated Parameters
Era: Renaissance
Style: Technical manual + Corporate modernism
Mood: Dreamlike
Palette: Charcoal and acid green
Typography: Oversized numerals
Shape language: Fluid curves
Texture: Blueprint grid
Density: Content-first
Layout: Strict Swiss grid
Imagery: Monochrome photography
Motion: Smooth page morphs
Tone: Experimental
Contrast: Complementary color contrast
Border treatment: No borders
Lighting: No lighting effects
Material: Chrome
Signature detail: Chrome orb + Cropped corner brackets

## Constraints
- Avoid Stock photography
- Avoid Overloaded hero copy

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
  {
    slug: 'design-06',
    navLabel: 'Design 06',
    summary: 'Retro VHS blueprint',
    generationPrompt: design06Prompt,
    component: Design06Page,
  },
  {
    slug: 'design-07',
    navLabel: 'Design 07',
    summary: 'Fantasy corporate Swiss',
    generationPrompt: design07Prompt,
    component: Design07Page,
  },
  {
    slug: 'design-08',
    navLabel: 'Design 08',
    summary: 'Dystopian jewel neumorph',
    generationPrompt: design08Prompt,
    component: Design08Page,
  },
  {
    slug: 'design-09',
    navLabel: 'Design 09',
    summary: 'Megacity cottage dashboard',
    generationPrompt: design09Prompt,
    component: Design09Page,
  },
  {
    slug: 'design-10',
    navLabel: 'Design 10',
    summary: 'Rococo blueprint collage',
    generationPrompt: design10Prompt,
    component: Design10Page,
  },
  {
    slug: 'design-11',
    navLabel: 'Design 11',
    summary: 'Aero Roman terminal',
    generationPrompt: design11Prompt,
    component: Design11Page,
  },
  {
    slug: 'design-12',
    navLabel: 'Design 12',
    summary: 'Console graffiti schematic',
    generationPrompt: design12Prompt,
    component: Design12Page,
  },
  {
    slug: 'design-13',
    navLabel: 'Design 13',
    summary: 'Dot-com terminal bento',
    generationPrompt: design13Prompt,
    component: Design13Page,
  },
  {
    slug: 'design-14',
    navLabel: 'Design 14',
    summary: 'Medieval comic mint',
    generationPrompt: design14Prompt,
    component: Design14Page,
  },
  {
    slug: 'design-15',
    navLabel: 'Design 15',
    summary: 'Renaissance acid manual',
    generationPrompt: design15Prompt,
    component: Design15Page,
  },
]
