import { landingContent } from '../data/landingContent'
import type { DesignPageProps } from '../types'

export function Design16Page({ design }: DesignPageProps) {
  return (
    <main className="interstellar-control min-h-[calc(100vh-73px)] bg-[#05090c] text-[#d7fbff]">
      <section className="mx-auto grid max-w-7xl gap-5 px-4 py-10 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="mixed-border bg-[#f3fbfa] p-5 text-[#061015] shadow-[18px_18px_0_#00d8ff]">
          <div className="flex items-start justify-between gap-4">
            <p className="max-w-sm font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#075c66]">
              {design.summary}
            </p>
            <div className="micro-chart" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
          <h1 className="mt-8 max-w-3xl font-serif text-5xl font-black leading-[0.92] tracking-normal sm:text-7xl">
            {landingContent.productName}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#12323a]">{landingContent.heroTitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#generation-prompt"
              className="bg-[#061015] px-5 py-3 font-mono text-xs font-black uppercase tracking-[0.16em] text-[#9df7ff] transition hover:-translate-y-1"
            >
              {landingContent.primaryCta}
            </a>
            <a
              href="/design-17"
              className="border-2 border-[#061015] px-5 py-3 font-mono text-xs font-black uppercase tracking-[0.16em] text-[#061015] transition hover:-translate-y-1 hover:bg-[#00d8ff]"
            >
              {landingContent.secondaryCta}
            </a>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <article className="control-tile sm:row-span-2">
            <div className="flex items-center justify-between border-b border-[#00d8ff]/40 pb-4">
              <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#00d8ff]">Signal</span>
              <span className="h-3 w-3 bg-[#00d8ff] shadow-[0_0_18px_#00d8ff]" />
            </div>
            <p className="mt-6 text-7xl font-black leading-none text-white">16</p>
            <p className="mt-4 text-sm leading-6 text-[#b5f6ff]/78">{landingContent.heroBody}</p>
            <div className="technical-diagram mt-8 h-44" aria-hidden="true" />
          </article>
          {landingContent.stats.map((stat) => (
            <article key={stat.label} className="control-tile">
              <div className="micro-chart mb-8" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <p className="text-4xl font-black text-white">{stat.value}</p>
              <p className="mt-2 font-mono text-xs uppercase tracking-[0.18em] text-[#9df7ff]/72">{stat.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-4 pb-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {landingContent.benefits.map((benefit, index) => (
          <article key={benefit.title} className="control-tile">
            <p className="font-mono text-xs text-[#00d8ff]">0{index + 1}</p>
            <h2 className="mt-5 text-2xl font-black text-white">{benefit.title}</h2>
            <p className="mt-3 text-sm leading-6 text-[#b5f6ff]/72">{benefit.body}</p>
          </article>
        ))}
      </section>
    </main>
  )
}
