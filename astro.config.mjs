import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

export default defineConfig({
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
