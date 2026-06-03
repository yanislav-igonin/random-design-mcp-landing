import { landingContent } from '../data/landingContent'
import type { DesignPageProps } from '../types'

export function Design06Page({ design }: DesignPageProps) {
  return (
    <main className="retro-vhs min-h-[calc(100vh-73px)] bg-[#090d18] text-[#f6f0dc]">
      <section className="mx-auto grid max-w-7xl gap-px bg-[#334155] px-4 py-10 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
        <div className="newsprint-panel p-6 sm:p-8">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-[#ff4fd8]">{design.summary}</p>
          <h1 className="mt-8 text-5xl font-black uppercase leading-[0.92] sm:text-7xl">
            {landingContent.productName}
          </h1>
          <div className="ornamental-divider my-8" aria-hidden="true" />
          <p className="max-w-2xl text-xl leading-8 text-[#e6ddc7]">{landingContent.heroTitle}</p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#c9c0ad]">{landingContent.heroBody}</p>
        </div>

        <div className="relative overflow-hidden bg-[#101827] p-6 sm:p-8">
          <div className="chrome-object mx-auto mb-8 h-44 max-w-sm" aria-hidden="true" />
          <div className="grid gap-4 sm:grid-cols-3">
            {landingContent.stats.map((stat) => (
              <div key={stat.label} className="border border-dashed border-[#35e7ff] bg-[#111827]/80 p-4">
                <p className="text-4xl font-black text-[#35e7ff]">{stat.value}</p>
                <p className="mt-2 font-mono text-[0.68rem] uppercase leading-4 tracking-[0.14em]">{stat.label}</p>
              </div>
            ))}
          </div>
          <a
            href="#generation-prompt"
            className="mt-8 inline-flex border border-[#ff4fd8] bg-[#ff4fd8] px-5 py-3 font-mono text-sm font-black uppercase tracking-[0.16em] text-[#090d18]"
          >
            {landingContent.primaryCta}
          </a>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {landingContent.benefits.map((benefit, index) => (
          <article key={benefit.title} className="torn-card border border-dashed border-[#35e7ff] bg-[#111827] p-5">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#ff4fd8]">frame {index + 1}</p>
            <h2 className="mt-5 text-2xl font-black uppercase">{benefit.title}</h2>
            <p className="mt-3 text-sm leading-6 text-[#c9c0ad]">{benefit.body}</p>
          </article>
        ))}
      </section>
    </main>
  )
}
