import { NavLink } from 'react-router-dom'
import { designs } from '../data/designs'

const sourceRepositoryUrl = 'https://github.com/yanislav-igonin/random-design-mcp'

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-900/10 bg-neutral-950 text-white shadow-lg shadow-black/10">
      <nav className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <NavLink to="/design-01" className="font-mono text-sm font-bold uppercase tracking-[0.16em]">
          Random Design MCP
        </NavLink>
        <div className="flex min-w-0 items-center gap-2">
          <div className="flex min-w-0 gap-2 overflow-x-auto pb-1 sm:pb-0">
            {designs.map((design) => (
              <NavLink
                key={design.slug}
                to={`/${design.slug}`}
                className={({ isActive }) =>
                  [
                    'shrink-0 border px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition',
                    isActive
                      ? 'border-white bg-white text-neutral-950'
                      : 'border-white/20 text-white/75 hover:border-white/70 hover:text-white',
                  ].join(' ')
                }
              >
                {design.navLabel}
              </NavLink>
            ))}
          </div>
          <a
            href={sourceRepositoryUrl}
            aria-label="Random Design MCP source on GitHub"
            className="shrink-0 border border-white/20 p-2 text-white/75 transition hover:border-white/70 hover:bg-white hover:text-neutral-950"
            target="_blank"
            rel="noreferrer"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4 fill-current">
              <path d="M12 .5C5.65.5.85 5.3.85 11.6c0 4.9 3.2 9 7.7 10.5.6.1.8-.2.8-.6v-2c-3.1.7-3.8-1.3-3.8-1.3-.5-1.2-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.6 2.1 3.7 1.5.1-.8.4-1.3.7-1.6-2.5-.3-5.2-1.3-5.2-5.5 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.5.1-3 0 0 .9-.3 3.1 1.1.9-.2 1.9-.3 2.8-.3s1.9.1 2.8.3c2.2-1.4 3.1-1.1 3.1-1.1.6 1.5.2 2.7.1 3 .7.8 1.1 1.8 1.1 3 0 4.3-2.6 5.2-5.2 5.5.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.5-1.5 7.7-5.6 7.7-10.5C23.15 5.3 18.35.5 12 .5Z" />
            </svg>
          </a>
        </div>
      </nav>
    </header>
  )
}
