import { landingContent } from '../data/landingContent'
import type { DesignPageProps } from '../types'

export function Design24Page({ design }: DesignPageProps) {
  return (
    <main className="rd24-earth min-h-[calc(100vh-73px)] bg-[#251d18] text-[#efe0c8]">
      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:px-6 lg:grid-cols-[0.86fr_1.14fr] lg:px-8">
        <div>
          <p className="font-mono text-xs font-black uppercase tracking-[0.22em] text-[#c5a277]">{design.summary}</p>
          <h1 className="mt-5 max-w-4xl font-serif text-5xl font-black leading-[0.9] sm:text-7xl">
            {landingContent.productName}
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-[#f6ead6]">{landingContent.heroTitle}</p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-[#cdb796]">{landingContent.heroBody}</p>
          <a
            href="#generation-prompt"
            className="mt-8 inline-flex bg-[#efe0c8] px-5 py-3 font-mono text-xs font-black uppercase tracking-[0.16em] text-[#251d18] transition hover:-translate-y-1"
          >
            {landingContent.primaryCta}
          </a>
        </div>

        <aside className="rd24-empty border border-[#efe0c8]/24 p-5">
          <div className="rd24-chrome h-44" aria-hidden="true" />
          <div className="mt-5 border border-[#efe0c8]/28 p-5">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#c5a277]">empty state</p>
            <p className="mt-3 font-serif text-3xl font-black">No repeated style detected.</p>
            <p className="mt-3 text-sm leading-6 text-[#cdb796]">Generate another direction, then inspect prompt below.</p>
          </div>
        </aside>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rd24-timeline grid gap-4">
          {landingContent.process.map((item, index) => (
            <article key={item} className="grid gap-4 border border-[#efe0c8]/22 bg-[#332820] p-5 md:grid-cols-[120px_1fr]">
              <p className="font-serif text-5xl font-black text-[#c5a277]">0{index + 1}</p>
              <div>
                <h2 className="font-serif text-3xl font-black">Timeline mark</h2>
                <p className="mt-2 text-sm leading-6 text-[#d9c5a5]">{item}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {landingContent.benefits.map((benefit, index) => (
            <article key={benefit.title} className="border border-[#efe0c8]/22 bg-[#30251d] p-5">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#c5a277]">footnote {index + 1}</p>
              <h3 className="mt-4 font-serif text-2xl font-black leading-tight">{benefit.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#cdb796]">{benefit.body}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
