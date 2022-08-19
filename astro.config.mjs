import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import preact from '@astrojs/preact'
import prefetch from '@astrojs/prefetch'
import vercel from '@astrojs/vercel/serverless'
// import { VitePWA } from 'vite-plugin-pwa';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      // NOTE: Waiting on https://vite-plugin-pwa.netlify.app/deployment/vercel.html
      // VitePWA()
    ],
    ssr: {
      external: ['svgo'],
    },
  },

  server: {
    host: '0.0.0.0',
    port: 3000,
  },

  integrations: [
    tailwind(),
    preact({ compat: true }),
    prefetch({
      // Allow up to three links to be prefetched concurrently
      throttle: 3,
    }),
  ],

  output: 'server',

  adapter: vercel(),
})
