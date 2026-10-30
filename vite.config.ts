import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

const DEFAULT_SITE_URL = 'https://dicablack.com.br'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const rawSiteUrl = env.VITE_SITE_URL || DEFAULT_SITE_URL
  const siteUrl = rawSiteUrl.endsWith('/')
    ? rawSiteUrl.slice(0, -1)
    : rawSiteUrl

  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'html-site-url',
        transformIndexHtml(html) {
          return html.replaceAll('%SITE_URL%', siteUrl)
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname, './src'),
      },
    },
  }
})
