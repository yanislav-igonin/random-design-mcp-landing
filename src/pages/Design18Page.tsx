import { landingContent } from '../data/landingContent'
import type { DesignPageProps } from '../types'

export function Design18Page({ design }: DesignPageProps) {
  return (
    <main className="soviet-console min-h-[calc(100vh-73px)] bg-[#090b12] text-[#f5f1df]">
      <section className="mx-auto grid max-w-7xl gap-px bg-[#ff2b6d]/60 px-4 py-10 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
        <aside className="order-last min-w-0 bg-[#101420] p-5 lg:order-none">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#ffcc6e]">{design.summary}</p>
          <div className="chrome-console-object mt-8 h-44 w-44" aria-hidden="true" />
          <div className="mt-8 space-y-3">
            {landingContent.process.map((item, index) => (
              <p key={item} className="border-t border-[#ff2b6d]/35 pt-3 text-sm leading-6 text-[#f5f1df]/78">
                <sup className="mr-2 font-mono text-[#ffcc6e]">{index + 1}</sup>
                {item}
              </p>
            ))}
          </div>
        </aside>

        <div className="order-first min-w-0 bg-[#0d101a] lg:order-none">
          <div className="ticker border-b border-[#ff2b6d]/50 bg-[#151a2a] py-3 font-mono text-xs uppercase tracking-[0.18em] text-[#ffcc6e]">
            <span className="ticker-track">
              compatible mode online - prompt visible - dashboard proof included - compatible mode online - prompt visible -
            </span>
          </div>
          <div className="p-6 sm:p-10">
            <h1 className="max-w-4xl font-serif text-5xl font-black leading-[0.93] sm:text-7xl">
              {landingContent.productName}
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-8 text-[#fff8d7]">{landingContent.heroTitle}</p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-[#f5f1df]/72">{landingContent.heroBody}</p>
            <a
              href="#generation-prompt"
              className="mt-8 inline-flex border border-[#ffcc6e] bg-[#ffcc6e] px-5 py-3 font-mono text-xs font-black uppercase tracking-[0.16em] text-[#11131b] transition hover:bg-transparent hover:text-[#ffcc6e]"
            >
              {landingContent.primaryCta}
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-px bg-[#ff2b6d]/60 px-4 pb-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {landingContent.benefits.map((benefit, index) => (
          <article key={benefit.title} className="console-cell bg-[#101420] p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#ffcc6e]">footnote {index + 1}</p>
            <h2 className="mt-4 text-2xl font-black text-white">{benefit.title}</h2>
            <p className="mt-3 text-sm leading-6 text-[#f5f1df]/70">{benefit.body}</p>
          </article>
        ))}
      </section>
    </main>
  )
}
