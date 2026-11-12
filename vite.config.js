import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// GitHub Pages serves 404.html for any unknown path. A copy of index.html there
// lets the client router handle deep links and refreshes such as /portfolio/projects/cocoacare.
function spaFallback() {
  return {
    name: 'spa-fallback-404',
    apply: 'build',
    closeBundle() {
      const out = resolve(__dirname, 'dist')
      copyFileSync(resolve(out, 'index.html'), resolve(out, '404.html'))
    },
  }
}

export default defineConfig({
  base: '/portfolio/',
  plugins: [react(), spaFallback()],
})
