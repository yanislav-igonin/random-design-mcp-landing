import { landingContent } from '../data/landingContent'
import type { DesignPageProps } from '../types'

export function Design25Page({ design }: DesignPageProps) {
  return (
    <main className="rd25-newsprint min-h-[calc(100vh-73px)] bg-[#efe3c7] text-[#1d1711]">
      <section className="mx-auto grid max-w-7xl gap-5 px-4 py-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="rd25-slice bg-[#1d1711] p-6 text-[#efe3c7] sm:p-10">
          <p className="font-mono text-xs font-black uppercase tracking-[0.22em] text-[#82b8ad]">{design.summary}</p>
          <h1 className="mt-5 max-w-5xl text-5xl font-black uppercase leading-[0.86] sm:text-7xl">
            {landingContent.productName}
          </h1>
          <p className="mt-6 max-w-2xl text-xl font-black uppercase leading-8 text-[#82b8ad]">
            {landingContent.heroTitle}
          </p>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#d7c59d]">{landingContent.heroBody}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#generation-prompt"
              className="bg-[#82b8ad] px-5 py-3 font-mono text-xs font-black uppercase tracking-[0.16em] text-[#1d1711] transition hover:-translate-y-1"
            >
              {landingContent.primaryCta}
            </a>
            <a
              href="/design-21"
              className="border border-[#82b8ad] px-5 py-3 font-mono text-xs font-black uppercase tracking-[0.16em] transition hover:-translate-y-1 hover:bg-[#35271a]"
            >
              {landingContent.secondaryCta}
            </a>
          </div>
        </div>

        <aside className="grid gap-5">
          <div className="rd25-diagram min-h-72 border-2 border-[#1d1711] bg-[#f7edcf]" aria-hidden="true" />
          <blockquote className="rd25-quote border-2 border-[#1d1711] bg-[#f7edcf] p-5">
            <p className="text-2xl font-black uppercase leading-tight">Randomness becomes interface material.</p>
          </blockquote>
        </aside>
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 px-4 pb-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {landingContent.benefits.map((benefit, index) => (
          <article key={benefit.title} className="rd25-slice border-2 border-[#1d1711] bg-[#f7edcf] p-5">
            <p className="font-mono text-xs font-black uppercase tracking-[0.18em] text-[#5d817a]">schematic 0{index + 1}</p>
            <h2 className="mt-5 text-2xl font-black uppercase leading-tight">{benefit.title}</h2>
            <p className="mt-3 text-sm leading-6 text-[#4e3927]">{benefit.body}</p>
          </article>
        ))}
      </section>
    </main>
  )
}
