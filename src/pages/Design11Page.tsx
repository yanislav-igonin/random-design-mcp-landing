import { landingContent } from '../data/landingContent'
import type { DesignPageProps } from '../types'

export function Design11Page({ design }: DesignPageProps) {
  return (
    <main className="aero-roman min-h-[calc(100vh-73px)] bg-[#071119] text-[#e8fbff]">
      <section className="mx-auto grid max-w-7xl gap-4 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
        <div className="inset-terminal p-6 sm:p-8">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-[#ff5fd7]">{design.summary}</p>
          <h1 className="mt-8 max-w-4xl rounded-sans text-5xl font-black leading-[0.94] sm:text-7xl">
            {landingContent.productName}
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-[#a8f4ff]">{landingContent.heroTitle}</p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#d9fbff]/75">{landingContent.heroBody}</p>
          <a
            href="#generation-prompt"
            className="mt-8 inline-flex border border-[#65f3ff] bg-[#ff5fd7] px-5 py-3 font-mono text-sm font-black uppercase tracking-[0.16em] text-[#071119]"
          >
            {landingContent.primaryCta}
          </a>
        </div>

        <div className="grid gap-4">
          <div className="roman-chrome-orb mx-auto h-48 w-48" aria-hidden="true" />
          {landingContent.stats.map((stat) => (
            <div key={stat.label} className="mechanical-joint border border-[#65f3ff]/70 bg-[#0d1a24] p-5">
              <p className="text-5xl font-black text-[#65f3ff]">{stat.value}</p>
              <p className="mt-2 font-mono text-xs uppercase tracking-[0.18em] text-[#e8fbff]/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 px-4 pb-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {landingContent.benefits.map((benefit) => (
          <article key={benefit.title} className="expanding-panel inset-terminal p-5">
            <h2 className="text-2xl font-black">{benefit.title}</h2>
            <p className="mt-3 text-sm leading-6 text-[#d9fbff]/75">{benefit.body}</p>
          </article>
        ))}
      </section>
    </main>
  )
}
