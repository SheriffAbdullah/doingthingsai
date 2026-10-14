// Renders <App /> to static HTML and writes it into dist/index.html so the
// page paints before React loads. Runs after `vite build`.
import { build } from 'vite'
import { readFile, writeFile, rm } from 'node:fs/promises'
import { pathToFileURL } from 'node:url'
import path from 'node:path'

const root = path.resolve(import.meta.dirname, '..')
const ssrDir = path.join(root, 'dist-ssr')

await build({
  root,
  logLevel: 'warn',
  build: { ssr: 'src/entry-server.tsx', outDir: ssrDir, emptyOutDir: true },
})

const { render } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href)
// React hoists <link rel="preload"> for eager images; the hero is already
// preloaded from <head>, and the others would compete with it.
const html = render().replace(/<link rel="preload" as="image"[^>]*\/>/g, '')

const indexPath = path.join(root, 'dist', 'index.html')
const template = await readFile(indexPath, 'utf8')
const marker = '<div id="root"></div>'
if (!template.includes(marker)) throw new Error('prerender: #root marker not found in dist/index.html')
await writeFile(indexPath, template.replace(marker, `<div id="root">${html}</div>`))
await rm(ssrDir, { recursive: true, force: true })
console.log(`prerender: injected ${(html.length / 1024).toFixed(1)} kB of HTML into dist/index.html`)
