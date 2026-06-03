import { landingContent } from '../data/landingContent'

export function Design04Page({ design }) {
  return (
    <main className="aero-bg min-h-[calc(100vh-73px)] bg-white text-[#16202a]">
      <div className="ticker border-b border-slate-200 bg-white/80 py-2 font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
        <div className="ticker-track">dashboard shell / expanding panels / generated particles / high-key route /</div>
      </div>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:px-6 lg:grid-cols-[0.68fr_1.32fr] lg:px-8">
        <aside className="rounded-[2rem] border border-slate-200 bg-white/72 p-5 shadow-[0_18px_60px_rgba(30,64,175,0.12)]">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-slate-500">{design.summary}</p>
          <div className="mt-6 grid gap-4">
            {landingContent.stats.map((stat) => (
              <div key={stat.label} className="rounded-[1.5rem] border border-slate-200 bg-white p-5">
                <p className="font-serif text-5xl font-black text-slate-950">{stat.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.14em] text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </aside>

        <div className="rounded-[2.5rem] border border-slate-200 bg-white/78 p-6 shadow-[0_22px_90px_rgba(14,165,233,0.18)] backdrop-blur">
          <div className="particle-field rounded-[2rem] border border-slate-200 bg-[#f8fbff] p-6">
            <p className="font-serif text-lg italic text-slate-500">{landingContent.eyebrow}</p>
            <h1 className="mt-6 max-w-5xl font-serif text-5xl font-black leading-[0.96] text-slate-950 sm:text-7xl">
              {landingContent.productName}
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-700">{landingContent.heroTitle}</p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">{landingContent.heroBody}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#generation-prompt"
                className="rounded-full border border-slate-950 bg-slate-950 px-5 py-3 font-mono text-sm font-bold uppercase tracking-[0.12em] text-white"
              >
                {landingContent.primaryCta}
              </a>
              <a
                href="/design-05"
                className="rounded-full border border-slate-300 bg-white px-5 py-3 font-mono text-sm font-bold uppercase tracking-[0.12em] text-slate-950"
              >
                {landingContent.secondaryCta}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-4 pb-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {landingContent.benefits.map((benefit) => (
          <article key={benefit.title} className="expanding-panel rounded-[2rem] border border-slate-200 bg-white p-5">
            <h2 className="font-serif text-2xl font-black text-slate-950">{benefit.title}</h2>
            <p className="mt-4 text-sm leading-6 text-slate-600">{benefit.body}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="hand-border rounded-[2rem] bg-white/80 p-6">
          <ol className="grid gap-4 md:grid-cols-3">
            {landingContent.process.map((step, index) => (
              <li key={step} className="rounded-[1.5rem] bg-slate-50 p-5">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-sky-600">step {index + 1}</span>
                <p className="mt-3 text-lg font-semibold">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  )
}
