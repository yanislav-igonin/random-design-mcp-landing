import { Navigate, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { PromptBlock } from './components/PromptBlock'
import { designs } from './data/designs'

export function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/design-01" replace />} />
        {designs.map((design) => {
          const Page = design.component

          return (
            <Route
              key={design.slug}
              path={`/${design.slug}`}
              element={
                <>
                  <Page design={design} />
                  <PromptBlock prompt={design.generationPrompt} />
                </>
              }
            />
          )
        })}
        <Route path="*" element={<Navigate to="/design-01" replace />} />
      </Routes>
    </div>
  )
}
