type PromptBlockProps = {
  prompt: string
}

export function PromptBlock({ prompt }: PromptBlockProps) {
  return (
    <section
      id="generation-prompt"
      className="border-t border-neutral-800 bg-neutral-950 px-4 py-10 text-neutral-100 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-red-300">MCP output</p>
            <h2 className="mt-2 text-2xl font-black tracking-tight">Generation Prompt</h2>
          </div>
          <p className="max-w-xl text-sm text-neutral-400">
            Stable metadata block. Same treatment on every route for readable comparison.
          </p>
        </div>
        <pre className="max-h-[34rem] overflow-auto border border-neutral-700 bg-black p-4 text-xs leading-6 text-neutral-200 shadow-2xl shadow-black/30">
          <code>{prompt}</code>
        </pre>
      </div>
    </section>
  )
}
