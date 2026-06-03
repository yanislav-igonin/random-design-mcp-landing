import { landingContent } from '../data/landingContent'
import type { DesignPageProps } from '../types'

export function Design12Page({ design }: DesignPageProps) {
  return (
    <main className="console-graffiti min-h-[calc(100vh-73px)] bg-[#0e0d0b] text-[#f7e6bd]">
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="schematic-board border border-dashed border-[#d9bd7a] p-6 sm:p-8">
          <p className="font-mono text-xs uppercase tracking-[0.26em] text-[#d9bd7a]">{design.summary}</p>
          <div className="mt-8 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <h1 className="max-w-4xl text-5xl font-black uppercase leading-[0.94] tracking-[0.12em] sm:text-7xl">
                {landingContent.productName}
              </h1>
              <p className="mt-6 max-w-2xl text-xl leading-8 text-[#f7e6bd]">{landingContent.heroTitle}</p>
              <a
                href="#generation-prompt"
                className="mt-8 inline-flex border border-dashed border-[#d9bd7a] bg-[#d9bd7a] px-5 py-3 font-mono text-sm font-black uppercase tracking-[0.16em] text-[#0e0d0b]"
              >
                {landingContent.primaryCta}
              </a>
            </div>
            <div className="hex-cutout bg-[#171513] p-6">
              <p className="text-base leading-7 text-[#e2d0aa]">{landingContent.heroBody}</p>
              <div className="mt-6 grid gap-3">
                {landingContent.process.map((step, index) => (
                  <p key={step} className="font-mono text-sm uppercase tracking-[0.12em]">
                    <span className="mr-3 text-[#d9bd7a]">measure {index + 1}</span>
                    {step}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 px-4 pb-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {landingContent.benefits.map((benefit) => (
          <article key={benefit.title} className="rough-paper border border-dashed border-[#d9bd7a] p-5">
            <h2 className="text-2xl font-black uppercase tracking-[0.08em]">{benefit.title}</h2>
            <p className="mt-3 text-sm leading-6 text-[#e2d0aa]">{benefit.body}</p>
          </article>
        ))}
      </section>
    </main>
  )
}
