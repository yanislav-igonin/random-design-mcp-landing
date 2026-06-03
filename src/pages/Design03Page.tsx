import { landingContent } from '../data/landingContent'
import type { DesignPageProps } from '../types'

export function Design03Page({ design }: DesignPageProps) {
  return (
    <main className="blueprint-bg min-h-[calc(100vh-73px)] bg-[#1b1104] text-[#ffd27a]">
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr]">
          <div className="border-4 border-double border-[#ffb238] bg-[#211506]/88 p-6 shadow-[0_0_42px_rgba(255,178,56,0.18)]">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-[#ffefc2]">{design.summary}</p>
            <h1 className="mt-8 max-w-4xl font-serif text-5xl font-black uppercase leading-[0.92] sm:text-7xl">
              {landingContent.productName}
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-8 text-[#ffe7ad]">{landingContent.heroTitle}</p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-[#ffd27a]/76">{landingContent.heroBody}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#generation-prompt"
                className="magnetic-link border border-[#ffb238] bg-[#ffb238] px-5 py-3 font-mono text-sm font-black uppercase tracking-[0.14em] text-[#1b1104]"
              >
                {landingContent.primaryCta}
              </a>
              <a
                href="/design-04"
                className="magnetic-link border border-[#ffb238] px-5 py-3 font-mono text-sm font-black uppercase tracking-[0.14em] text-[#ffefc2]"
              >
                {landingContent.secondaryCta}
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            {landingContent.stats.map((stat, index) => (
              <div key={stat.label} className="technical-tile border border-[#ffb238]/70 p-5">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#ffefc2]/70">node 0{index + 1}</p>
                <p className="mt-3 text-5xl font-black">{stat.value}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.12em] text-[#ffd27a]/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 px-4 pb-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {landingContent.benefits.map((benefit) => (
          <article key={benefit.title} className="catalog-cell border border-[#ffb238]/72 bg-[#241706]/80 p-5">
            <div className="diagram-blob mb-5 h-24 border border-[#ffb238]/70" aria-hidden="true" />
            <h2 className="text-xl font-black uppercase tracking-wide text-[#fff1cb]">{benefit.title}</h2>
            <p className="mt-3 text-sm leading-6 text-[#ffd27a]/72">{benefit.body}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="border border-[#ffb238]/72 bg-[#150d03]/90 p-6">
          <h2 className="text-3xl font-black uppercase">Prompt-to-interface route</h2>
          <ol className="mt-6 grid gap-4 md:grid-cols-3">
            {landingContent.process.map((step, index) => (
              <li key={step} className="border-l-4 border-[#ffb238] pl-4 font-mono text-sm leading-6">
                <span className="block text-[#ffefc2]">phase {index + 1}</span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  )
}
