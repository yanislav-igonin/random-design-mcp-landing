import { NavLink } from 'react-router-dom'
import { designs } from '../data/designs'

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-900/10 bg-neutral-950 text-white shadow-lg shadow-black/10">
      <nav className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <NavLink to="/design-01" className="font-mono text-sm font-bold uppercase tracking-[0.16em]">
          Random Design MCP
        </NavLink>
        <div className="flex gap-2 overflow-x-auto pb-1 sm:pb-0">
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
      </nav>
    </header>
  )
}
