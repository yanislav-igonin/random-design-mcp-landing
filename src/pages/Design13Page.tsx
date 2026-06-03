import { landingContent } from '../data/landingContent'
import type { DesignPageProps } from '../types'

export function Design13Page({ design }: DesignPageProps) {
  return (
    <main className="dotcom-bento min-h-[calc(100vh-73px)] bg-[#f6f1e6] text-black">
      <section className="mx-auto grid max-w-7xl gap-4 px-4 py-10 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="hand-card lg:col-span-2 lg:row-span-2">
          <p className="font-mono text-xs uppercase tracking-[0.24em]">{design.summary}</p>
          <p className="mt-8 text-9xl font-black leading-none">13</p>
          <h1 className="mt-3 max-w-4xl text-5xl font-black leading-[0.95] sm:text-7xl">
            {landingContent.productName}
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-8">{landingContent.heroTitle}</p>
        </div>

        {landingContent.stats.map((stat) => (
          <div key={stat.label} className="hand-card">
            <p className="text-5xl font-black">{stat.value}</p>
            <p className="mt-2 font-mono text-xs uppercase tracking-[0.16em]">{stat.label}</p>
          </div>
        ))}

        <div className="hand-card terminal-poem lg:col-span-2">
          <p className="font-mono text-sm leading-7">{landingContent.heroBody}</p>
          <a
            href="#generation-prompt"
            className="mt-6 inline-flex border-2 border-black bg-black px-5 py-3 font-mono text-sm font-black uppercase tracking-[0.16em] text-[#f6f1e6]"
          >
            {landingContent.primaryCta}
          </a>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 px-4 pb-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {landingContent.benefits.map((benefit) => (
          <article key={benefit.title} className="hand-card organic-blob">
            <h2 className="text-2xl font-black">{benefit.title}</h2>
            <p className="mt-3 text-sm leading-6">{benefit.body}</p>
          </article>
        ))}
      </section>
    </main>
  )
}
