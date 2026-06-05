import { landingContent } from '../data/landingContent'
import type { DesignPageProps } from '../types'

export function Design21Page({ design }: DesignPageProps) {
  return (
    <main className="rd21-surface min-h-[calc(100vh-73px)] bg-[#050505] text-[#f4f4f1]">
      <section className="mx-auto grid max-w-7xl gap-4 px-4 py-8 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <div className="rd21-frame min-w-0 border border-[#f4f4f1]/28 p-5 sm:p-8">
          <div className="ticker border-y border-[#f4f4f1]/24 py-2 font-mono text-xs uppercase tracking-[0.22em] text-[#bdbdb7]">
            <span className="ticker-track">
              {design.summary} / compatible prompt / usable frontend / no stock photo / {design.summary} / compatible prompt
              / usable frontend / no stock photo /
            </span>
          </div>
          <p className="mt-8 font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#9b9b93]">{design.summary}</p>
          <p className="mt-8 font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#9b9b93]">
            {landingContent.eyebrow}
          </p>
          <h1 className="mt-4 max-w-5xl text-6xl font-black uppercase leading-[0.82] tracking-[-0.04em] sm:text-8xl lg:text-9xl">
            {landingContent.productName}
          </h1>
          <p className="mt-8 max-w-2xl text-xl font-semibold uppercase leading-8 text-[#f4f4f1]">
            {landingContent.heroTitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#generation-prompt"
              className="rounded-full bg-[#f4f4f1] px-5 py-3 font-mono text-xs font-black uppercase tracking-[0.16em] text-[#050505] transition hover:-translate-y-1"
            >
              {landingContent.primaryCta}
            </a>
            <a
              href="/design-22"
              className="rounded-full border border-[#f4f4f1]/40 px-5 py-3 font-mono text-xs font-black uppercase tracking-[0.16em] text-[#f4f4f1] transition hover:-translate-y-1 hover:border-[#f4f4f1]"
            >
              {landingContent.secondaryCta}
            </a>
          </div>
        </div>

        <aside className="grid min-w-0 gap-4">
          <div className="rd21-fabric border border-[#f4f4f1]/24 p-5">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#aaa9a0]">variant index</p>
            <p className="mt-5 text-8xl font-black leading-none">21</p>
            <p className="mt-4 text-sm uppercase leading-6 text-[#c9c8bf]">{landingContent.heroBody}</p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {landingContent.stats.map((stat) => (
              <article key={stat.label} className="border border-[#f4f4f1]/22 p-4">
                <p className="text-3xl font-black">{stat.value}</p>
                <p className="mt-2 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-[#aaa9a0]">{stat.label}</p>
              </article>
            ))}
          </div>
        </aside>
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 px-4 pb-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {landingContent.benefits.map((benefit, index) => (
          <article key={benefit.title} className="rd21-frame border border-[#f4f4f1]/20 p-5">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#8f8e86]">0{index + 1}</p>
            <h2 className="mt-5 text-2xl font-black uppercase leading-none">{benefit.title}</h2>
            <p className="mt-4 text-sm leading-6 text-[#c9c8bf]">{benefit.body}</p>
          </article>
        ))}
      </section>
    </main>
  )
}
