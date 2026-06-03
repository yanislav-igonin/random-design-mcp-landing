import type { LandingContent } from '../types'

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
    { value: 'N', label: 'future batches' },
  ],
} satisfies LandingContent
