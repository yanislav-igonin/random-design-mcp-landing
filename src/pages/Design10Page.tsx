import { landingContent } from '../data/landingContent'
import type { DesignPageProps } from '../types'

export function Design10Page({ design }: DesignPageProps) {
  return (
    <main className="cobalt-lemon min-h-[calc(100vh-73px)] bg-[#052d8f] text-[#fff16a]">
      <section className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="collage-layer grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="brutal-block border-4 border-[#fff16a] bg-[#052d8f] p-6 shadow-[16px_16px_0_#111111]">
            <p className="w-fit bg-[#fff16a] px-3 py-2 font-mono text-xs font-black uppercase tracking-[0.22em] text-[#052d8f]">
              {design.summary}
            </p>
            <h1 className="mt-8 font-mono text-5xl font-black uppercase leading-[0.92] sm:text-7xl">
              {landingContent.productName}
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-8 text-[#fff9ad]">{landingContent.heroTitle}</p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-[#fff9ad]/78">{landingContent.heroBody}</p>
          </div>

          <div className="grid gap-4">
            {landingContent.process.map((step, index) => (
              <div key={step} className="sticker border-4 border-black bg-[#fff16a] p-5 font-mono text-sm font-black uppercase tracking-[0.1em] text-[#052d8f]">
                <span className="mr-3 text-3xl">#{index + 1}</span>
                {step}
              </div>
            ))}
            <a
              href="#generation-prompt"
              className="glitch-chip border-4 border-[#fff16a] bg-black px-5 py-4 text-center font-mono text-sm font-black uppercase tracking-[0.18em] text-[#fff16a]"
            >
              {landingContent.primaryCta}
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 px-4 pb-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {landingContent.benefits.map((benefit) => (
          <article key={benefit.title} className="cardboard-block border-4 border-black bg-[#f1c15b] p-5 text-black">
            <h2 className="font-mono text-2xl font-black uppercase">{benefit.title}</h2>
            <p className="mt-3 text-sm font-semibold leading-6">{benefit.body}</p>
          </article>
        ))}
      </section>
    </main>
  )
}
