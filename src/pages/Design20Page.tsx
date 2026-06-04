import { landingContent } from '../data/landingContent'
import type { DesignPageProps } from '../types'

export function Design20Page({ design }: DesignPageProps) {
  return (
    <main className="rococo-map min-h-[calc(100vh-73px)] bg-[#fff4df] text-[#2d070a]">
      <section className="mx-auto grid max-w-7xl gap-5 px-4 py-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="windowed-panel bg-[#fff9ec] p-0">
          <div className="flex items-center gap-2 border-b-2 border-[#78121d] bg-[#78121d] px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-[#ffd66e]" />
            <span className="h-3 w-3 rounded-full bg-[#ff8d74]" />
            <span className="h-3 w-3 rounded-full bg-[#f7f0dc]" />
            <p className="ml-auto font-mono text-xs uppercase tracking-[0.18em] text-[#fff4df]">{design.summary}</p>
          </div>
          <div className="p-6 sm:p-10">
            <h1 className="max-w-4xl text-5xl font-black leading-[0.92] sm:text-7xl">{landingContent.productName}</h1>
            <p className="mt-6 max-w-3xl text-xl font-semibold leading-8">{landingContent.heroTitle}</p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-[#63323a]">{landingContent.heroBody}</p>
            <a
              href="#generation-prompt"
              className="mt-8 inline-flex bg-[#78121d] px-5 py-3 font-mono text-xs font-black uppercase tracking-[0.16em] text-[#fff4df] transition hover:-translate-y-1 hover:bg-[#2d070a]"
            >
              {landingContent.primaryCta}
            </a>
          </div>
        </div>

        <aside className="map-list-panel p-5">
          <div className="isometric-scene h-56" aria-hidden="true" />
          <div className="mt-5 space-y-3">
            {landingContent.process.map((item, index) => (
              <p key={item} className="rounded-sm border border-[#78121d]/30 bg-[#fff9ec] p-3 text-sm leading-6">
                <b className="mr-2 text-[#78121d]">0{index + 1}</b>
                {item}
              </p>
            ))}
          </div>
        </aside>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-4 pb-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {landingContent.benefits.map((benefit) => (
          <article key={benefit.title} className="cropped-rococo bg-[#fff9ec] p-5">
            <h2 className="text-2xl font-black leading-tight">{benefit.title}</h2>
            <p className="mt-3 text-sm leading-6 text-[#63323a]">{benefit.body}</p>
          </article>
        ))}
      </section>
    </main>
  )
}
