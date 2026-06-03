import type { ComponentType } from 'react'

export type LandingContent = {
  productName: string
  eyebrow: string
  heroTitle: string
  heroBody: string
  primaryCta: string
  secondaryCta: string
  benefits: Array<{
    title: string
    body: string
  }>
  process: string[]
  stats: Array<{
    value: string
    label: string
  }>
}

export type DesignRoute = {
  slug: string
  navLabel: string
  summary: string
  generationPrompt: string
  component: ComponentType<DesignPageProps>
}

export type DesignPageProps = {
  design: DesignRoute
}
