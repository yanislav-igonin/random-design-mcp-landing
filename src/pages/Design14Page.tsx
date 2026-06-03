import { landingContent } from '../data/landingContent'
import type { DesignPageProps } from '../types'

export function Design14Page({ design }: DesignPageProps) {
  return (
    <main className="medieval-comic min-h-[calc(100vh-73px)] bg-[#2a1811] text-[#d9ffe1]">
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="glow-mint p-6">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#98ffc2]">{design.summary}</p>
            <p className="mt-8 text-8xl font-black text-white">XIV</p>
            <h1 className="mt-4 font-serif text-5xl font-black leading-[0.92] sm:text-7xl">
              {landingContent.productName}
            </h1>
          </div>
          <div className="comic-panel p-6">
            <p className="text-2xl font-black leading-9 text-white">{landingContent.heroTitle}</p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#c5f7d0]">{landingContent.heroBody}</p>
            <a
              href="#generation-prompt"
              className="mt-8 inline-flex bg-[#98ffc2] px-6 py-4 font-mono text-sm font-black uppercase tracking-[0.16em] text-[#2a1811]"
            >
              {landingContent.primaryCta}
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-4 pb-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {landingContent.benefits.map((benefit, index) => (
          <article key={benefit.title} className="stagger-block bg-[#98ffc2] p-5 text-[#2a1811]" style={{ transform: `translateY(${index % 2 === 0 ? 0 : 28}px)` }}>
            <p className="text-5xl font-black">0{index + 1}</p>
            <h2 className="mt-4 font-serif text-2xl font-black">{benefit.title}</h2>
            <p className="mt-3 text-sm font-semibold leading-6">{benefit.body}</p>
          </article>
        ))}
      </section>
    </main>
  )
}
