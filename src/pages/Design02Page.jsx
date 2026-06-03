import { landingContent } from '../data/landingContent'

export function Design02Page({ design }) {
  return (
    <main className="design-two min-h-[calc(100vh-73px)] overflow-hidden bg-[#fff1f8] text-[#2d1738]">
      <div className="ticker border-y-4 border-[#2d1738] bg-[#ffef66] py-2 font-mono text-xs font-black uppercase tracking-[0.2em] text-[#2d1738]">
        <div className="ticker-track">
          Random Design MCP / compatible random / generated direction / same copy, different visual system /
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="rounded-[48px] border-4 border-[#2d1738] bg-[#b8f7ff] p-7 shadow-[12px_12px_0_#ff6fd8]">
            <p className="inline-flex rounded-full border-2 border-[#2d1738] bg-white px-4 py-2 font-mono text-xs font-black uppercase tracking-[0.18em]">
              {design.summary}
            </p>
            <h1 className="mt-8 max-w-3xl text-5xl font-black leading-[0.94] text-[#2d1738] sm:text-7xl">
              {landingContent.productName}
            </h1>
            <p className="mt-6 text-xl font-semibold leading-8">{landingContent.heroTitle}</p>
            <p className="mt-4 text-base leading-7 text-[#4f3a59]">{landingContent.heroBody}</p>
          </div>

          <div className="masonry-pop grid gap-4 sm:grid-cols-2">
            {landingContent.benefits.map((benefit, index) => (
              <article
                key={benefit.title}
                className="pop-card border-4 border-[#2d1738] bg-white p-5 shadow-[8px_8px_0_#2d1738]"
              >
                <p className="mb-5 text-6xl font-black text-[#ff6fd8]">0{index + 1}</p>
                <h2 className="text-2xl font-black leading-tight">{benefit.title}</h2>
                <p className="mt-3 text-sm leading-6 text-[#4f3a59]">{benefit.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-[1fr_0.75fr]">
          <div className="border-4 border-[#2d1738] bg-[#d8ff7a] p-6 shadow-[10px_10px_0_#8e7cff]">
            <h2 className="text-3xl font-black">Generation recipe</h2>
            <ol className="mt-6 grid gap-3">
              {landingContent.process.map((step) => (
                <li key={step} className="rounded-full border-2 border-[#2d1738] bg-white px-5 py-3 font-semibold">
                  {step}
                </li>
              ))}
            </ol>
          </div>
          <div className="border-4 border-[#2d1738] bg-[#ffc3e6] p-6 shadow-[10px_10px_0_#5eead4]">
            <div className="grid grid-cols-3 gap-3">
              {landingContent.stats.map((stat) => (
                <div key={stat.label} className="rounded-full border-2 border-[#2d1738] bg-white p-4 text-center">
                  <p className="text-3xl font-black">{stat.value}</p>
                  <p className="mt-2 text-[0.68rem] font-bold uppercase leading-4">{stat.label}</p>
                </div>
              ))}
            </div>
            <a
              href="#generation-prompt"
              className="mt-6 inline-flex border-2 border-[#2d1738] bg-[#2d1738] px-5 py-3 font-black uppercase tracking-[0.12em] text-white"
            >
              {landingContent.primaryCta}
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
