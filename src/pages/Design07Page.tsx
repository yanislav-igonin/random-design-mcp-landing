import { landingContent } from '../data/landingContent'
import type { DesignPageProps } from '../types'

export function Design07Page({ design }: DesignPageProps) {
  return (
    <main className="fantasy-swiss min-h-[calc(100vh-73px)] bg-[#eee9dd] text-[#161412]">
      <section className="grid min-h-[calc(100vh-73px)] lg:grid-cols-2">
        <div className="concrete-photo relative flex flex-col justify-between p-6 sm:p-10">
          <p className="relative z-10 w-fit border border-black bg-[#eee9dd] px-3 py-2 font-mono text-xs uppercase tracking-[0.24em]">
            {design.summary}
          </p>
          <div className="relative z-10 max-w-xl">
            <h1 className="font-serif text-5xl font-black leading-[0.95] sm:text-7xl">{landingContent.productName}</h1>
            <p className="mt-6 text-xl leading-8">{landingContent.heroTitle}</p>
          </div>
        </div>

        <div className="relative border-l border-black p-6 sm:p-10">
          <div className="ornate-frame p-6">
            <p className="max-w-2xl text-base leading-7 text-[#4b4540]">{landingContent.heroBody}</p>
            <div className="mt-8 grid gap-3">
              {landingContent.process.map((step, index) => (
                <div key={step} className="diagram-arrow border-b border-black pb-3 font-mono text-sm uppercase tracking-[0.12em]">
                  <span className="mr-4 font-black">0{index + 1}</span>
                  {step}
                </div>
              ))}
            </div>
            <a
              href="#generation-prompt"
              className="mt-8 inline-flex bg-black px-5 py-3 font-mono text-sm font-black uppercase tracking-[0.16em] text-[#eee9dd]"
            >
              {landingContent.primaryCta}
            </a>
          </div>
        </div>
      </section>

      <section className="grid border-y border-black md:grid-cols-2 lg:grid-cols-4">
        {landingContent.benefits.map((benefit) => (
          <article key={benefit.title} className="min-h-72 border-b border-r border-black p-6 lg:border-b-0">
            <h2 className="font-serif text-3xl font-black leading-tight">{benefit.title}</h2>
            <p className="mt-5 text-sm leading-6 text-[#4b4540]">{benefit.body}</p>
          </article>
        ))}
      </section>
    </main>
  )
}
