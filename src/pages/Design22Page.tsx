import { landingContent } from '../data/landingContent'
import type { DesignPageProps } from '../types'

const footnotes = ['compatible=true', 'pixel border active', 'prompt stored below']

export function Design22Page({ design }: DesignPageProps) {
  return (
    <main className="rd22-schematic min-h-[calc(100vh-73px)] bg-[#fbfbef] text-[#17151f]">
      <section className="mx-auto grid max-w-7xl gap-5 px-4 py-10 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div className="rd22-pixel bg-[#fffefa] p-5 sm:p-8">
          <p className="font-mono text-xs font-black uppercase tracking-[0.2em] text-[#524d78]">{design.summary}</p>
          <h1 className="mt-6 max-w-4xl text-5xl font-black uppercase leading-[0.9] sm:text-7xl">
            {landingContent.productName}
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-semibold uppercase leading-8">{landingContent.heroTitle}</p>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#524d78]">{landingContent.heroBody}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#generation-prompt"
              className="rounded-full bg-[#17151f] px-5 py-3 font-mono text-xs font-black uppercase tracking-[0.16em] text-white transition hover:-translate-y-1"
            >
              {landingContent.primaryCta}
            </a>
            <a
              href="/design-23"
              className="rounded-full border-2 border-[#17151f] px-5 py-3 font-mono text-xs font-black uppercase tracking-[0.16em] transition hover:-translate-y-1 hover:bg-[#b8f7ff]"
            >
              {landingContent.secondaryCta}
            </a>
          </div>
        </div>

        <aside className="grid gap-5">
          <div className="rd22-holo rd22-pixel min-h-72 p-5">
            <div className="rd22-macro h-40" aria-hidden="true" />
            <div className="mt-5 grid grid-cols-3 gap-3">
              {landingContent.stats.map((stat) => (
                <article key={stat.label} className="bg-[#fffefa]/78 p-3">
                  <p className="text-3xl font-black">{stat.value}</p>
                  <p className="mt-1 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-[#524d78]">{stat.label}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="grid gap-3">
            {footnotes.map((note, index) => (
              <p key={note} className="border-l-4 border-[#17151f] bg-[#fffefa] p-3 font-mono text-xs uppercase tracking-[0.12em]">
                <sup>{index + 1}</sup> {note}
              </p>
            ))}
          </div>
        </aside>
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 px-4 pb-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {landingContent.benefits.map((benefit, index) => (
          <article key={benefit.title} className="rd22-pixel bg-[#fffefa] p-5">
            <p className="font-mono text-xs font-black uppercase text-[#524d78]">node 0{index + 1}</p>
            <h2 className="mt-5 text-2xl font-black uppercase leading-tight">{benefit.title}</h2>
            <p className="mt-3 text-sm leading-6 text-[#524d78]">{benefit.body}</p>
          </article>
        ))}
      </section>
    </main>
  )
}
