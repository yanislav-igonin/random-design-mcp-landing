import { landingContent } from '../data/landingContent'
import type { DesignPageProps } from '../types'

export function Design15Page({ design }: DesignPageProps) {
  return (
    <main className="acid-manual min-h-[calc(100vh-73px)] bg-[#101314] text-[#d7ff32]">
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[0.76fr_1.24fr] lg:px-8">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.26em] text-[#d7ff32]">{design.summary}</p>
          <p className="mt-8 text-[10rem] font-black leading-none text-white/10">15</p>
          <div className="manual-orb h-40 w-40" aria-hidden="true" />
        </div>

        <div className="cropped-corners p-6">
          <h1 className="max-w-4xl text-5xl font-black leading-[0.94] sm:text-7xl">
            {landingContent.productName}
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-[#edff94]">{landingContent.heroTitle}</p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-[#edff94]/72">{landingContent.heroBody}</p>
          <a
            href="#generation-prompt"
            className="mt-8 inline-flex bg-[#d7ff32] px-5 py-3 font-mono text-sm font-black uppercase tracking-[0.16em] text-[#101314]"
          >
            {landingContent.primaryCta}
          </a>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-px bg-[#d7ff32] px-4 pb-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {landingContent.benefits.map((benefit) => (
          <article key={benefit.title} className="bg-[#101314] p-6">
            <h2 className="text-2xl font-black text-white">{benefit.title}</h2>
            <p className="mt-3 text-sm leading-6 text-[#edff94]/72">{benefit.body}</p>
          </article>
        ))}
      </section>
    </main>
  )
}
