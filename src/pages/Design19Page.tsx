import { landingContent } from '../data/landingContent'
import type { DesignPageProps } from '../types'

export function Design19Page({ design }: DesignPageProps) {
  return (
    <main className="egypt-newsprint min-h-[calc(100vh-73px)] bg-[#e7c893] text-[#20140f]">
      <section className="mx-auto grid max-w-7xl gap-4 px-4 py-10 sm:px-6 lg:grid-cols-[0.7fr_1.3fr] lg:px-8">
        <aside className="angular-panel order-last bg-[#20140f] p-6 text-[#ffe0a3] lg:order-none">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#65e4d1]">{design.summary}</p>
          <p className="mt-8 text-8xl font-black leading-none">19</p>
          <div className="mt-8 grid gap-2">
            {landingContent.stats.map((stat) => (
              <div key={stat.label} className="grid grid-cols-[72px_1fr] border-t border-[#ffe0a3]/25 py-3">
                <b className="text-2xl text-[#65e4d1]">{stat.value}</b>
                <span className="font-mono text-xs uppercase tracking-[0.14em]">{stat.label}</span>
              </div>
            ))}
          </div>
        </aside>

        <div className="newsprint-scan order-first border-4 border-[#20140f] bg-[#f5dfad] p-6 sm:p-10 lg:order-none">
          <h1 className="max-w-4xl font-serif text-5xl font-black leading-[0.92] sm:text-7xl">
            {landingContent.productName}
          </h1>
          <p className="mt-6 max-w-3xl text-xl font-semibold leading-8">{landingContent.heroTitle}</p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-[#4a2d20]">{landingContent.heroBody}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#generation-prompt"
              className="bg-[#20140f] px-5 py-3 font-mono text-xs font-black uppercase tracking-[0.16em] text-[#ffe0a3] transition hover:bg-[#65e4d1] hover:text-[#20140f]"
            >
              {landingContent.primaryCta}
            </a>
            <a
              href="/design-20"
              className="border-2 border-[#20140f] px-5 py-3 font-mono text-xs font-black uppercase tracking-[0.16em] text-[#20140f] transition hover:bg-[#20140f] hover:text-[#ffe0a3]"
            >
              {landingContent.secondaryCta}
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 px-4 pb-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {landingContent.benefits.map((benefit, index) => (
          <article key={benefit.title} className="footnote-card bg-[#f5dfad] p-5">
            <p className="font-mono text-[10px] font-black uppercase tracking-[0.18em] text-[#65e4d1]">
              dense note {index + 1}
            </p>
            <h2 className="mt-4 text-2xl font-black leading-tight">{benefit.title}</h2>
            <p className="mt-3 text-sm leading-6 text-[#4a2d20]">{benefit.body}</p>
          </article>
        ))}
      </section>
    </main>
  )
}
