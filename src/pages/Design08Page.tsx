import { landingContent } from '../data/landingContent'
import type { DesignPageProps } from '../types'

export function Design08Page({ design }: DesignPageProps) {
  return (
    <main className="jewel-neumorph min-h-[calc(100vh-73px)] bg-[#38223a] text-[#f5e6d7]">
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="rounded-[3rem] bg-[#4b2d50] p-7 shadow-[18px_18px_35px_#211424,-18px_-18px_35px_#5a365e]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#f6c453]">{design.summary}</p>
          <p className="mt-10 text-8xl font-black text-[#2dd4bf]">08</p>
          <h1 className="mt-4 text-5xl font-black leading-[0.95] sm:text-7xl">{landingContent.productName}</h1>
          <p className="mt-6 text-xl leading-8 text-[#ffe7c7]">{landingContent.heroTitle}</p>
          <a
            href="#generation-prompt"
            className="mt-8 inline-flex rounded-full bg-[#f6c453] px-6 py-4 font-mono text-sm font-black uppercase tracking-[0.14em] text-[#38223a]"
          >
            {landingContent.primaryCta}
          </a>
        </div>

        <div className="grid gap-5">
          <div className="chrome-orb mx-auto h-52 w-52" aria-hidden="true" />
          <p className="max-w-2xl text-base leading-7 text-[#ead8c4]">{landingContent.heroBody}</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {landingContent.benefits.map((benefit) => (
              <article key={benefit.title} className="art-deco-frame bg-[#4b2d50] p-5">
                <h2 className="text-2xl font-black">{benefit.title}</h2>
                <p className="mt-3 text-sm leading-6 text-[#ead8c4]">{benefit.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
