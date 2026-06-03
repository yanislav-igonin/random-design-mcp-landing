import { landingContent } from '../data/landingContent'
import type { DesignPageProps } from '../types'

export function Design09Page({ design }: DesignPageProps) {
  return (
    <main className="lavender-dashboard min-h-[calc(100vh-73px)] bg-[#d9d2ef] text-[#243040]">
      <section className="grid lg:grid-cols-[18rem_1fr]">
        <aside className="border-b-4 border-[#243040] bg-[#b9b0d7] p-5 lg:min-h-[calc(100vh-73px)] lg:border-b-0 lg:border-r-4">
          <p className="font-mono text-xs uppercase tracking-[0.24em]">{design.summary}</p>
          <div className="mt-8 grid gap-3">
            {landingContent.stats.map((stat) => (
              <div key={stat.label} className="pixel-border bg-[#ede8ff] p-4">
                <p className="text-4xl font-black">{stat.value}</p>
                <p className="mt-2 text-[0.68rem] uppercase leading-4 tracking-[0.14em]">{stat.label}</p>
              </div>
            ))}
          </div>
          <a href="#generation-prompt" className="mt-8 inline-flex bg-[#243040] px-5 py-3 font-mono text-sm font-black uppercase tracking-[0.14em] text-white">
            {landingContent.primaryCta}
          </a>
        </aside>

        <div className="p-5 sm:p-8">
          <div className="pixel-border studio-rim bg-[#f5f1ff] p-6">
            <h1 className="max-w-5xl font-serif text-5xl font-black leading-[0.92] sm:text-7xl">
              {landingContent.productName}
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-8">{landingContent.heroTitle}</p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-[#536073]">{landingContent.heroBody}</p>
          </div>

          <section className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {landingContent.benefits.map((benefit, index) => (
              <article key={benefit.title} className="pixel-border bg-[#f5f1ff] p-5">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#6d5f99]">note {index + 1}</p>
                <h2 className="mt-4 font-serif text-2xl font-black">{benefit.title}</h2>
                <p className="mt-3 text-sm leading-6 text-[#536073]">{benefit.body}</p>
              </article>
            ))}
          </section>
        </div>
      </section>
    </main>
  )
}
