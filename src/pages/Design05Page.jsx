import { landingContent } from '../data/landingContent'

export function Design05Page({ design }) {
  return (
    <main className="alien-grid min-h-[calc(100vh-73px)] bg-[#12110f] text-[#e8ded2]">
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-px border border-[#7a3d20] bg-[#7a3d20] lg:grid-cols-[1.15fr_0.85fr]">
          <div className="bg-[#171513] p-6 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-[#c8794a]">{design.summary}</p>
            <h1 className="mt-8 max-w-4xl text-5xl font-black uppercase leading-[0.92] tracking-[0.08em] text-[#f2e7da] sm:text-7xl">
              {landingContent.productName}
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-8 text-[#d7c4b5]">{landingContent.heroTitle}</p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-[#b69f8c]">{landingContent.heroBody}</p>
          </div>
          <div className="steel-panel bg-[#1f1d1a] p-6 sm:p-8">
            <div className="line-art-mark mb-8 h-52 border border-[#c8794a]" aria-hidden="true" />
            <div className="grid grid-cols-3 gap-px bg-[#7a3d20]">
              {landingContent.stats.map((stat) => (
                <div key={stat.label} className="bg-[#171513] p-4">
                  <p className="text-4xl font-black text-[#f2e7da]">{stat.value}</p>
                  <p className="mt-2 text-[0.68rem] uppercase leading-4 tracking-[0.16em] text-[#b69f8c]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-px bg-[#7a3d20] px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {landingContent.benefits.map((benefit) => (
          <article key={benefit.title} className="bg-[#171513] p-6">
            <h2 className="text-xl font-black uppercase tracking-[0.12em] text-[#f2e7da]">{benefit.title}</h2>
            <p className="mt-4 text-sm leading-6 text-[#b69f8c]">{benefit.body}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-px border border-[#7a3d20] bg-[#7a3d20] md:grid-cols-[0.85fr_1.15fr]">
          <div className="bg-[#171513] p-6">
            <h2 className="text-3xl font-black uppercase tracking-[0.12em]">Ritual sequence</h2>
            <a
              href="#generation-prompt"
              className="mt-8 inline-flex border border-[#c8794a] bg-[#c8794a] px-5 py-3 font-mono text-sm font-black uppercase tracking-[0.16em] text-[#171513]"
            >
              {landingContent.primaryCta}
            </a>
          </div>
          <ol className="grid gap-px bg-[#7a3d20]">
            {landingContent.process.map((step, index) => (
              <li key={step} className="bg-[#1f1d1a] p-5 font-mono text-sm uppercase tracking-[0.12em] text-[#d7c4b5]">
                <span className="mr-4 text-[#c8794a]">tablet {index + 1}</span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  )
}
