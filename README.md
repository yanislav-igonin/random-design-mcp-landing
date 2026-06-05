# Random Design MCP Landing

Landing page gallery for [Random Design MCP](https://github.com/yanislav-igonin/random-design-mcp), a Model Context Protocol server that generates distinctive frontend design directions for AI-assisted product work.

The site shows multiple generated visual treatments for the same product brief, so developers and designers can compare how different prompts, moods, palettes, layout systems, and motion ideas change the final landing page.

## Site

Live site: [random-design-mcp.h0b0.dev](https://random-design-mcp.h0b0.dev)

Source MCP server: [yanislav-igonin/random-design-mcp](https://github.com/yanislav-igonin/random-design-mcp)

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Vitest and Testing Library
- GitHub Pages deployment

## Development

```bash
npm ci
npm run dev
```

Build production assets:

```bash
npm run build
```

Run tests:

```bash
npm test
```

## Deployment

The repository deploys to GitHub Pages through `.github/workflows/deploy-pages.yml`. The custom domain is stored in `public/CNAME`.

## License

MIT
