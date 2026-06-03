import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { App } from './App'
import { designs } from './data/designs'

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  )
}

describe('Random Design landing routes', () => {
  it('renders five navigation links', () => {
    renderAt('/design-01')

    for (const design of designs) {
      expect(screen.getByRole('link', { name: design.navLabel })).toHaveAttribute(
        'href',
        `/${design.slug}`,
      )
    }
  })

  it('redirects root to Design 01 content', () => {
    renderAt('/')

    expect(screen.getByRole('heading', { name: /Random Design MCP/i })).toBeInTheDocument()
    expect(screen.getByText(/Far future pixel art/i)).toBeInTheDocument()
  })

  it.each(designs)('renders $navLabel with prompt block', (design) => {
    renderAt(`/${design.slug}`)

    expect(screen.getByRole('heading', { name: /Random Design MCP/i })).toBeInTheDocument()
    expect(screen.getByText(design.summary)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Generation Prompt/i })).toBeInTheDocument()
    expect(screen.getByText(/Frontend Design Prompt/i)).toBeInTheDocument()
  })
})
