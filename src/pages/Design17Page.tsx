import { landingContent } from '../data/landingContent'
import type { DesignPageProps } from '../types'

export function Design17Page({ design }: DesignPageProps) {
  return (
    <main className="destijl-ops min-h-[calc(100vh-73px)] bg-[#f8f6ed] text-[#090908]">
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-4 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="cropped-paper relative overflow-hidden border-[6px] border-[#090908] bg-[#fffdf7] p-6 sm:p-10">
            <div className="destijl-diagonal" aria-hidden="true" />
            <p className="relative font-mono text-xs font-black uppercase tracking-[0.22em]">{design.summary}</p>
            <h1 className="relative mt-10 max-w-4xl text-5xl font-black leading-[0.88] sm:text-7xl lg:text-8xl">
              {landingContent.productName}
            </h1>
            <p className="relative mt-6 max-w-2xl text-xl font-semibold leading-8">{landingContent.heroTitle}</p>
            <p className="relative mt-4 max-w-2xl text-base leading-7 text-[#34322d]">{landingContent.heroBody}</p>
          </div>

          <aside className="grid gap-4">
            <div className="status-strip bg-[#090908] p-5 text-white">
              {landingContent.stats.map((stat) => (
                <div key={stat.label} className="grid grid-cols-[72px_1fr] border-b border-white/20 py-3 last:border-b-0">
                  <b className="text-2xl">{stat.value}</b>
                  <span className="font-mono text-xs uppercase tracking-[0.16em] text-white/70">{stat.label}</span>
                </div>
              ))}
            </div>
            <a
              href="#generation-prompt"
              className="border-[6px] border-[#090908] bg-[#ffcf24] p-5 text-center font-mono text-xs font-black uppercase tracking-[0.18em] shadow-[10px_10px_0_#d62121] transition hover:-translate-y-1"
            >
              {landingContent.primaryCta}
            </a>
          </aside>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 px-4 pb-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {landingContent.benefits.map((benefit, index) => (
          <article
            key={benefit.title}
            className="embossed-block bg-[#fffdf7] p-5"
            style={{ borderTopColor: ['#d62121', '#1167c7', '#ffcf24', '#090908'][index] }}
          >
            <p className="font-mono text-xs font-black uppercase tracking-[0.18em]">status 0{index + 1}</p>
            <h2 className="mt-5 text-2xl font-black leading-tight">{benefit.title}</h2>
            <p className="mt-3 text-sm leading-6 text-[#3b3934]">{benefit.body}</p>
          </article>
        ))}
      </section>
    </main>
  )
}
