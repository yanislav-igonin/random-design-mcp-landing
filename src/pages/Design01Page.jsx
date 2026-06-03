import { landingContent } from '../data/landingContent'

export function Design01Page({ design }) {
  return (
    <main className="design-one min-h-[calc(100vh-73px)] overflow-hidden bg-[#050101] text-[#fff1f1]">
      <section className="relative mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-20">
        <div className="absolute inset-0 diagonal-red-grid opacity-60" aria-hidden="true" />
        <div className="relative z-10">
          <p className="inline-block border-2 border-[#ff3131] bg-black px-3 py-2 font-mono text-xs uppercase tracking-[0.24em] text-[#ff6b6b] shadow-[8px_8px_0_#7f0000]">
            {design.summary}
          </p>
          <h1 className="mt-8 max-w-4xl font-serif text-5xl font-black uppercase leading-[0.9] tracking-wide text-white sm:text-7xl lg:text-8xl">
            {landingContent.productName}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-red-100 sm:text-xl">{landingContent.heroTitle}</p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-red-100/78">{landingContent.heroBody}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#generation-prompt"
              className="border-2 border-white bg-[#ff1d1d] px-5 py-3 font-mono text-sm font-black uppercase tracking-[0.16em] text-black transition hover:-translate-y-1 hover:shadow-[6px_6px_0_#ffffff]"
            >
              {landingContent.primaryCta}
            </a>
            <a
              href="/design-02"
              className="border-2 border-[#ff3131] bg-black px-5 py-3 font-mono text-sm font-black uppercase tracking-[0.16em] text-red-100 transition hover:-translate-y-1 hover:bg-red-950"
            >
              {landingContent.secondaryCta}
            </a>
          </div>
        </div>

        <div className="relative z-10 grid gap-4 lg:translate-y-10">
          {landingContent.stats.map((stat, index) => (
            <div
              key={stat.label}
              className="window-panel border-4 border-double border-[#ff3131] bg-black/78 p-5 shadow-[14px_14px_0_rgba(255,49,49,0.25)] backdrop-blur"
              style={{ transform: `translateX(${index * 18}px)` }}
            >
              <p className="font-serif text-5xl font-black text-[#ff3131]">{stat.value}</p>
              <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-red-100/72">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative mx-auto grid max-w-7xl gap-5 px-4 pb-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {landingContent.benefits.map((benefit) => (
          <article
            key={benefit.title}
            className="arched-panel min-h-64 border-4 border-double border-[#ff3131] bg-[#130202] p-5 shadow-[10px_10px_0_#310000]"
          >
            <h2 className="font-serif text-2xl font-black uppercase tracking-wide text-white">{benefit.title}</h2>
            <p className="mt-4 text-sm leading-6 text-red-100/76">{benefit.body}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="border-y-4 border-[#ff3131] bg-black px-5 py-6">
          <ol className="grid gap-4 md:grid-cols-3">
            {landingContent.process.map((step, index) => (
              <li key={step} className="font-mono text-sm uppercase tracking-[0.12em] text-red-100">
                <span className="mr-3 text-[#ff3131]">0{index + 1}</span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  )
}
