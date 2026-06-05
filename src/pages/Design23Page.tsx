import { landingContent } from '../data/landingContent'
import type { DesignPageProps } from '../types'

export function Design23Page({ design }: DesignPageProps) {
  return (
    <main className="rd23-weave min-h-[calc(100vh-73px)] bg-[#f7ead5] text-[#3c0d13]">
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rd23-window bg-[#fff7ea]">
            <div className="flex items-center gap-2 border-b-2 border-[#7b1824] px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#7b1824]" />
              <span className="h-3 w-3 rounded-full bg-[#c49274]" />
              <span className="ml-auto font-mono text-xs uppercase tracking-[0.18em]">{design.summary}</span>
            </div>
            <div className="p-6 sm:p-10">
              <p className="font-mono text-xs font-black uppercase tracking-[0.22em] text-[#8c543d]">
                {landingContent.eyebrow}
              </p>
              <h1 className="mt-5 max-w-4xl font-serif text-5xl font-black leading-[0.9] sm:text-7xl">
                {landingContent.productName}
              </h1>
              <p className="mt-6 max-w-2xl text-xl leading-8">{landingContent.heroTitle}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#generation-prompt"
                  className="rounded-full bg-[#7b1824] px-5 py-3 font-mono text-xs font-black uppercase tracking-[0.16em] text-[#fff7ea] transition hover:-translate-y-1"
                >
                  {landingContent.primaryCta}
                </a>
                <a
                  href="/design-24"
                  className="rounded-full border-2 border-[#7b1824] px-5 py-3 font-mono text-xs font-black uppercase tracking-[0.16em] transition hover:-translate-y-1 hover:bg-[#f2d7ba]"
                >
                  {landingContent.secondaryCta}
                </a>
              </div>
            </div>
          </div>

          <aside className="rd23-window bg-[#3c0d13] p-5 text-[#fff7ea]">
            <div className="rd23-clay h-72" aria-hidden="true" />
            <p className="mt-5 text-sm leading-7 text-[#f2d7ba]">{landingContent.heroBody}</p>
          </aside>
        </div>

        <div className="mt-6 overflow-x-auto pb-3">
          <div className="flex min-w-[920px] gap-4">
            {landingContent.benefits.map((benefit, index) => (
              <article key={benefit.title} className="rd23-window w-72 shrink-0 bg-[#fff7ea] p-5">
                <p className="inline-flex rounded-full border border-[#7b1824] px-3 py-1 font-mono text-xs font-black uppercase">
                  cmd {index + 1}
                </p>
                <h2 className="mt-5 font-serif text-3xl font-black leading-none">{benefit.title}</h2>
                <p className="mt-4 text-sm leading-6 text-[#6f372f]">{benefit.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
